// ─────────────────────────────────────────────────────────────────────────────
//  app/newsletter/confirm/page.tsx — double opt-in landing page
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from 'next'
import { prisma } from '@/lib/prisma'
import { NewsletterStatus } from '../_components/NewsletterStatus'

export const dynamic = 'force-dynamic'
export const metadata: Metadata = { title: 'Confirm newsletter', robots: { index: false, follow: false } }

export default async function ConfirmPage({ searchParams }: { searchParams: Promise<{ token?: string }> }) {
    const { token } = await searchParams
    const sub = token ? await prisma.subscriber.findUnique({ where: { confirmToken: token } }) : null

    if (!sub) {
        return <NewsletterStatus tone="error" title="This link has expired" body="The confirmation link is invalid or was replaced by a newer one. Sign up again at the bottom of any page and use the latest email we send you." cta={{ href: '/', label: 'Back to FlavorNest' }} />
    }
    if (sub.status !== 'CONFIRMED') {
        await prisma.subscriber.update({ where: { id: sub.id }, data: { status: 'CONFIRMED', confirmedAt: new Date() } })
    }
    return <NewsletterStatus tone="ok" title="You’re in! 🎉" body="Your email is confirmed. New Vietnamese recipes and kitchen stories will come straight to your inbox — you can unsubscribe with one click from any email." />
}
