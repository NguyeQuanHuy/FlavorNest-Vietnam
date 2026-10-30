// ─────────────────────────────────────────────────────────────────────────────
//  app/newsletter/unsubscribe/page.tsx — one-click unsubscribe
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from 'next'
import { prisma } from '@/lib/prisma'
import { NewsletterStatus } from '../_components/NewsletterStatus'

export const dynamic = 'force-dynamic'
export const metadata: Metadata = { title: 'Unsubscribe', robots: { index: false, follow: false } }

export default async function UnsubscribePage({ searchParams }: { searchParams: Promise<{ token?: string }> }) {
    const { token } = await searchParams
    const sub = token ? await prisma.subscriber.findUnique({ where: { unsubToken: token } }) : null

    if (!sub) {
        return <NewsletterStatus tone="error" title="Link not recognised" body="We couldn’t find this subscription. If you keep receiving emails, reply to any of them and we’ll remove you by hand." cta={{ href: '/', label: 'Back to FlavorNest' }} />
    }
    if (sub.status !== 'UNSUBSCRIBED') {
        await prisma.subscriber.update({ where: { id: sub.id }, data: { status: 'UNSUBSCRIBED' } })
    }
    return <NewsletterStatus tone="info" title="You’ve been unsubscribed" body="You won’t receive any more newsletters from FlavorNest Vietnam. Changed your mind? You can sign up again any time." />
}
