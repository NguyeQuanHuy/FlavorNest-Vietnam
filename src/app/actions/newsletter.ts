'use server'
// ─────────────────────────────────────────────────────────────────────────────
//  src/app/actions/newsletter.ts
//  Saves a newsletter signup as PENDING and emails a confirmation link
//  (double opt-in, DSGVO). Only CONFIRMED addresses ever get newsletters.
// ─────────────────────────────────────────────────────────────────────────────

import { randomBytes } from 'crypto'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { isMailConfigured, sendMail, siteUrl } from '@/lib/mailer'
import { confirmEmail } from '@/lib/newsletter-emails'

const NEWSLETTER_CONSENT =
    'I would like to receive the FlavorNest Vietnam newsletter with recipes and stories by email. I can unsubscribe at any time.'

export type NewsletterResult =
    | { ok: true; status: 'pending' | 'already' }
    | { ok: false; error: string }

const schema = z.object({
    email: z.string().trim().toLowerCase().email().max(254),
    source: z.enum(['home', 'footer', 'stories']).catch('home'),
    website: z.string().max(0).optional(), // honeypot: real people leave it empty
})

const token = () => randomBytes(24).toString('base64url')

async function sendConfirmation(sub: { email: string; confirmToken: string; unsubToken: string }) {
    if (!isMailConfigured()) { console.warn('[newsletter] SMTP not configured — confirmation email not sent'); return }
    const base = siteUrl()
    const confirmUrl = `${base}/newsletter/confirm?token=${sub.confirmToken}`
    const unsubscribeUrl = `${base}/newsletter/unsubscribe?token=${sub.unsubToken}`
    const mail = confirmEmail({ confirmUrl, unsubscribeUrl })
    try {
        await sendMail({ to: sub.email, ...mail, unsubscribeUrl })
    } catch (e) {
        console.error('[newsletter] could not send confirmation', e)
    }
}

export async function subscribeToNewsletter(input: { email: string; source?: string; website?: string }): Promise<NewsletterResult> {
    const parsed = schema.safeParse(input)
    if (!parsed.success) {
        // bots fill the hidden field — pretend success so they learn nothing
        if (input.website) return { ok: true, status: 'pending' }
        return { ok: false, error: 'Please enter a valid email address.' }
    }
    const { email, source } = parsed.data

    try {
        const existing = await prisma.subscriber.findUnique({ where: { email } })
        if (existing?.status === 'CONFIRMED') return { ok: true, status: 'already' }
        if (existing) {
            // re-subscribing after unsubscribe, or signing up twice: back to pending + fresh link
            const sub = await prisma.subscriber.update({
                where: { email },
                data: { status: 'PENDING', source, consentText: NEWSLETTER_CONSENT, consentAt: new Date(), confirmToken: token() },
            })
            await sendConfirmation(sub)
            return { ok: true, status: 'pending' }
        }
        const sub = await prisma.subscriber.create({
            data: { email, source, consentText: NEWSLETTER_CONSENT, confirmToken: token(), unsubToken: token() },
        })
        await sendConfirmation(sub)
        return { ok: true, status: 'pending' }
    } catch (e) {
        console.error('[newsletter]', e)
        return { ok: false, error: 'Something went wrong on our side. Please try again in a minute.' }
    }
}
