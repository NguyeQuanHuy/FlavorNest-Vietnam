'use client'
// ─────────────────────────────────────────────────────────────────────────────
//  src/components/ShareButtons.tsx
//  Share recipes: native share sheet on mobile, WhatsApp / Facebook /
//  Pinterest / copy link on desktop. Two variants:
//   - "bar"  → full row of buttons (recipe detail page)
//   - "icon" → single round button (inside cards, never triggers the card link)
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Share2, Link2, Check } from 'lucide-react'
import { SITE_URL } from '@/lib/constants'

type Props = {
    path: string            // e.g. /recipes/pho-bo
    title: string
    image?: string          // relative or absolute
    variant?: 'bar' | 'icon'
}

const abs = (u?: string) => (!u ? '' : u.startsWith('http') ? u : `${SITE_URL}${u}`)

const Icons = {
    whatsapp: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.01c0-5.2 4.23-9.43 9.44-9.43a9.4 9.4 0 0 1 9.43 9.44c0 5.2-4.24 9.43-9.44 9.43m8.03-17.46A11.27 11.27 0 0 0 12.05.72C5.8.72.7 5.8.7 12.06c0 2 .52 3.95 1.52 5.67L.6 23.6l6.02-1.58a11.33 11.33 0 0 0 5.42 1.38h.01c6.26 0 11.35-5.09 11.35-11.34 0-3.03-1.18-5.88-3.32-8.02" /></svg>
    ),
    facebook: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.62 23.1 24 18.1 24 12.07" /></svg>
    ),
    pinterest: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.43 7.63 11.17-.1-.95-.2-2.4.04-3.44l1.4-5.96s-.35-.72-.35-1.78c0-1.67.97-2.92 2.17-2.92 1.02 0 1.52.77 1.52 1.69 0 1.03-.65 2.57-.99 4-.28 1.19.6 2.17 1.78 2.17 2.13 0 3.77-2.25 3.77-5.5 0-2.87-2.07-4.88-5.02-4.88-3.42 0-5.43 2.57-5.43 5.22 0 1.03.4 2.14.9 2.74.1.12.11.22.08.34l-.33 1.37c-.06.22-.18.27-.41.16-1.52-.7-2.47-2.93-2.47-4.72 0-3.84 2.79-7.37 8.05-7.37 4.23 0 7.51 3.01 7.51 7.04 0 4.2-2.65 7.58-6.32 7.58-1.24 0-2.4-.64-2.8-1.4l-.76 2.9c-.27 1.06-1.01 2.38-1.5 3.19A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12" /></svg>
    ),
}

export default function ShareButtons({ path, title, image, variant = 'bar' }: Props) {
    const [copied, setCopied] = useState(false)
    const [canNative, setCanNative] = useState(false)
    const url = `${SITE_URL}${path}`
    const text = `${title} — authentic Vietnamese recipe on FlavorNest`

    useEffect(() => { setCanNative(typeof navigator !== 'undefined' && !!navigator.share) }, [])

    const copy = async () => {
        try { await navigator.clipboard.writeText(url) } catch { /* old browsers */ }
        setCopied(true)
        setTimeout(() => setCopied(false), 1800)
    }

    const nativeShare = async () => {
        try { await navigator.share({ title, text, url }) } catch { /* user cancelled */ }
    }

    const links = [
        { key: 'whatsapp', label: 'WhatsApp', color: '#25D366', href: `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}` },
        { key: 'facebook', label: 'Facebook', color: '#1877F2', href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}` },
        { key: 'pinterest', label: 'Pinterest', color: '#E60023', href: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&media=${encodeURIComponent(abs(image))}&description=${encodeURIComponent(text)}` },
    ] as const

    // ── Compact icon (cards) ──
    if (variant === 'icon') {
        return (
            <div className="relative">
                <motion.button
                    type="button"
                    whileTap={{ scale: 0.9 }}
                    aria-label={`Share ${title}`}
                    onClick={e => {
                        e.preventDefault()
                        e.stopPropagation()
                        canNative ? nativeShare() : copy()
                    }}
                    className="flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-md transition-colors hover:bg-white"
                    style={{ background: 'rgba(255,255,255,0.88)', color: '#2D1A0E', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
                >
                    {copied ? <Check size={16} color="#059669" /> : <Share2 size={16} />}
                </motion.button>
                <AnimatePresence>
                    {copied && (
                        <motion.span
                            role="status"
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="pointer-events-none absolute right-0 top-11 whitespace-nowrap rounded-lg px-2.5 py-1.5 text-[12px] font-semibold text-white"
                            style={{ background: '#2D1A0E' }}
                        >
                            Link copied
                        </motion.span>
                    )}
                </AnimatePresence>
            </div>
        )
    }

    // ── Full bar (detail page) ──
    const btn = 'flex h-10 items-center gap-2 rounded-full border px-4 text-[13px] font-semibold transition-all hover:-translate-y-0.5 outline-none focus-visible:ring-2 focus-visible:ring-[#D97706]'
    return (
        <div className="flex flex-wrap items-center gap-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <span className="mr-1 text-[11px] font-bold uppercase" style={{ color: 'rgba(75,46,26,0.45)', letterSpacing: '0.09em' }}>Share</span>
            {canNative && (
                <button type="button" onClick={nativeShare} className={btn} style={{ background: '#2D1A0E', borderColor: '#2D1A0E', color: '#fff' }}>
                    <Share2 size={15} /> Share
                </button>
            )}
            {links.map(l => (
                <a
                    key={l.key}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Share on ${l.label}`}
                    className={`${btn} group bg-white`}
                    style={{ borderColor: 'rgba(75,46,26,0.14)', color: '#2D1A0E', textDecoration: 'none' }}
                >
                    <span style={{ color: l.color, display: 'flex' }}>{Icons[l.key]}</span>
                    <span className="hidden sm:inline">{l.label}</span>
                </a>
            ))}
            <button
                type="button"
                onClick={copy}
                aria-label="Copy link"
                className={`${btn} bg-white`}
                style={{ borderColor: copied ? '#059669' : 'rgba(75,46,26,0.14)', color: copied ? '#059669' : '#2D1A0E' }}
            >
                {copied ? <Check size={15} /> : <Link2 size={15} />}
                <span aria-live="polite">{copied ? 'Copied!' : 'Copy link'}</span>
            </button>
        </div>
    )
}
