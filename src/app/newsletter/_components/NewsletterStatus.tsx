// shared look for /newsletter/confirm and /newsletter/unsubscribe
import Link from 'next/link'

export function NewsletterStatus({ tone, title, body, cta }: { tone: 'ok' | 'info' | 'error'; title: string; body: string; cta?: { href: string; label: string } }) {
    const icon = tone === 'ok' ? '✓' : tone === 'info' ? '👋' : '!'
    const bg = tone === 'ok' ? '#E4F0DA' : tone === 'info' ? '#FEF3C7' : '#FEE2E2'
    const fg = tone === 'ok' ? '#3F6A25' : tone === 'info' ? '#92400E' : '#B91C1C'
    return (
        <main className="flex min-h-screen items-center justify-center px-5 pb-16 pt-28" style={{ background: '#F5EDE3', fontFamily: "'DM Sans', sans-serif" }}>
            <div className="w-full max-w-md rounded-[28px] bg-white px-8 py-10 text-center shadow-[0_24px_60px_-30px_rgba(45,26,14,0.45)]">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full text-[28px] font-bold" style={{ background: bg, color: fg }}>{icon}</div>
                <h1 className="text-[28px] font-bold leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#2D1A0E' }}>{title}</h1>
                <p className="mt-3 text-[15.5px] leading-relaxed" style={{ color: 'rgba(75,46,26,0.7)' }}>{body}</p>
                <Link href={cta?.href ?? '/recipes'} className="mt-7 inline-flex h-12 items-center rounded-full px-7 text-[15px] font-semibold text-white" style={{ background: '#2D1A0E', textDecoration: 'none' }}>
                    {cta?.label ?? 'Browse recipes →'}
                </Link>
            </div>
        </main>
    )
}
