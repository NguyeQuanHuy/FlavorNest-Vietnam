// ─────────────────────────────────────────────────────────────────────────────
//  src/lib/mailer.ts  (server-only)
//  Gmail SMTP via an App Password: SMTP_USER + SMTP_PASS in .env.local / Vercel.
//  Swap the transport for Resend later without touching the rest.
// ─────────────────────────────────────────────────────────────────────────────

import nodemailer from 'nodemailer'
import { SITE_URL } from '@/lib/constants'

export const isMailConfigured = () => !!(process.env.SMTP_USER && process.env.SMTP_PASS)

/** Base URL for links inside emails (localhost while developing) */
export function siteUrl(): string {
    if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '')
    if (process.env.NODE_ENV !== 'production') return (process.env.NEXTAUTH_URL || 'http://localhost:3000').replace(/\/$/, '')
    return SITE_URL
}

let transport: nodemailer.Transporter | null = null
function getTransport() {
    if (!transport) {
        transport = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: Number(process.env.SMTP_PORT || 465),
            secure: true,
            auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
        })
    }
    return transport
}

export async function sendMail(opts: { to: string; subject: string; html: string; text: string; unsubscribeUrl?: string }) {
    if (!isMailConfigured()) throw new Error('SMTP_USER / SMTP_PASS are not set')
    return getTransport().sendMail({
        from: { name: 'FlavorNest Vietnam', address: process.env.SMTP_USER! },
        to: opts.to,
        subject: opts.subject,
        html: opts.html,
        text: opts.text,
        headers: opts.unsubscribeUrl ? { 'List-Unsubscribe': `<${opts.unsubscribeUrl}>` } : undefined,
    })
}
