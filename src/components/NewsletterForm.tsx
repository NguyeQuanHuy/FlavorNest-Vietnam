'use client'
// ─────────────────────────────────────────────────────────────────────────────
//  src/components/NewsletterForm.tsx — one working form for home, footer, stories
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2, MailCheck, ArrowRight } from 'lucide-react'
import { subscribeToNewsletter } from '@/app/actions/newsletter'

type Props = { source: 'home' | 'footer' | 'stories'; tone?: 'light' | 'dark'; layout?: 'stack' | 'row' }

export default function NewsletterForm({ source, tone = 'light', layout = 'stack' }: Props) {
    const [email, setEmail] = useState('')
    const [website, setWebsite] = useState('') // honeypot
    const [state, setState] = useState<'idle' | 'loading' | 'pending' | 'already'>('idle')
    const [error, setError] = useState('')
    const dark = tone === 'dark'
    const id = `nl-${source}`

    async function submit(e: React.FormEvent) {
        e.preventDefault()
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) { setError('Please enter a valid email address.'); return }
        setError('')
        setState('loading')
        const res = await subscribeToNewsletter({ email, source, website })
        if (res.ok) setState(res.status)
        else { setState('idle'); setError('error' in res ? res.error : 'Something went wrong. Please try again.') }
    }

    if (state === 'pending' || state === 'already') {
        return (
            <motion.div
                role="status"
                initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                className="flex gap-3 rounded-2xl px-5 py-4"
                style={dark ? { background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' } : { background: '#F1F6EC', border: '1px solid #D7E6C8' }}
            >
                <MailCheck size={22} className="mt-0.5 flex-shrink-0" color={dark ? '#F59E0B' : '#4D7A2E'} />
                <div>
                    <p className="text-[15px] font-semibold" style={{ color: dark ? '#fff' : '#2F4A1C' }}>
                        {state === 'already' ? 'You’re already subscribed.' : 'You’re on the list!'}
                    </p>
                    <p className="mt-0.5 text-[13.5px] leading-relaxed" style={{ color: dark ? 'rgba(255,255,255,0.6)' : '#4F6640' }}>
                        {state === 'already'
                            ? 'Thanks — new recipes will keep arriving in your inbox.'
                            : 'Before we send any newsletter, you’ll get one email to confirm your address. Nothing else until you confirm.'}
                    </p>
                </div>
            </motion.div>
        )
    }

    const input = dark
        ? 'border-white/15 bg-white/[0.06] text-white placeholder:text-white/40 focus:border-[#F59E0B] focus:ring-[#F59E0B]/20'
        : 'border-[rgba(75,46,26,0.15)] bg-[#FAFAF7] text-[#2D1A0E] placeholder:text-[rgba(75,46,26,0.4)] focus:border-[#D97706] focus:ring-[#D97706]/15'

    return (
        <form onSubmit={submit} noValidate className="w-full">
            <div className={layout === 'row' ? 'flex flex-col gap-2.5 sm:flex-row' : 'flex flex-col gap-3'}>
                <label htmlFor={id} className="sr-only">Email address</label>
                <input
                    id={id}
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    enterKeyHint="send"
                    value={email}
                    onChange={e => { setEmail(e.target.value); setError('') }}
                    placeholder="your@email.com"
                    aria-invalid={!!error}
                    aria-describedby={error ? `${id}-err` : `${id}-note`}
                    className={`h-12 min-w-0 flex-1 rounded-full border px-5 text-[16px] outline-none transition focus:ring-4 sm:text-[15px] ${input}`}
                />
                {/* honeypot — hidden from people and screen readers */}
                <input type="text" name="website" value={website} onChange={e => setWebsite(e.target.value)} tabIndex={-1} autoComplete="off" aria-hidden className="absolute -left-[9999px] h-0 w-0 opacity-0" />
                <button
                    type="submit"
                    disabled={state === 'loading'}
                    className="flex h-12 flex-shrink-0 items-center justify-center gap-2 rounded-full px-6 text-[15px] font-semibold text-white transition-colors disabled:opacity-70"
                    style={{ background: dark ? '#D97706' : '#2D1A0E' }}
                    onMouseEnter={e => { if (!dark) e.currentTarget.style.background = '#D97706' }}
                    onMouseLeave={e => { if (!dark) e.currentTarget.style.background = '#2D1A0E' }}
                >
                    {state === 'loading' ? <><Loader2 size={17} className="animate-spin" /> Subscribing…</> : <>Subscribe <ArrowRight size={16} /></>}
                </button>
            </div>
            <AnimatePresence>
                {error && (
                    <motion.p id={`${id}-err`} role="alert" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                        className="mt-2 px-1 text-[13px]" style={{ color: dark ? '#FCA5A5' : '#B91C1C' }}>
                        {error}
                    </motion.p>
                )}
            </AnimatePresence>
            <p id={`${id}-note`} className="mt-2.5 px-1 text-[12px] leading-relaxed" style={{ color: dark ? 'rgba(255,255,255,0.4)' : 'rgba(75,46,26,0.5)' }}>
                No spam. Unsubscribe anytime. See our{' '}
                <Link href="/privacy" className="underline underline-offset-2">privacy policy</Link>.
            </p>
        </form>
    )
}
