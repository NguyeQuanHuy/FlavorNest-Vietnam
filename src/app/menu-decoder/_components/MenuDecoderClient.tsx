'use client'

// ─────────────────────────────────────────────────────────────────────────────
//  app/menu-decoder/_components/MenuDecoderClient.tsx
//  Type (or paste) a line from a Vietnamese menu → best-matching dish + a
//  word-by-word translation. Below: the 30 most common dishes as a "menu",
//  a menu dictionary and phrases for ordering.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, ArrowRight, ChevronRight, Volume2, UtensilsCrossed, Sparkles, MessageCircle, AlertTriangle, Flame } from 'lucide-react'
import {
    DISHES, SECTIONS, ALLERGEN_INFO, MENU_WORDS, WORD_GROUPS,
    scoreDish, decodeWords, type Dish, type Section,
} from '@/data/menu-decoder'

export type DishLinks = Record<string, { href?: string; image?: string; sharp?: boolean }>

const serif = { fontFamily: "'Playfair Display', Georgia, serif" }
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const EXAMPLES = ['Phở tái nạm', 'Bún bò Nam Bộ', 'Cơm tấm sườn bì chả', 'Sommerrollen', 'Hủ tiếu khô', 'Knusprige Ente']

const PHRASES = [
    { vi: 'Không cay', en: 'Not spicy, please' },
    { vi: 'Ít cay', en: 'Just a little spicy' },
    { vi: 'Tôi ăn chay', en: 'I am vegetarian' },
    { vi: 'Không nước mắm', en: 'No fish sauce' },
    { vi: 'Không ngò', en: 'No coriander' },
    { vi: 'Tôi bị dị ứng đậu phộng', en: 'I am allergic to peanuts' },
    { vi: 'Ngon quá!', en: 'Delicious!' },
    { vi: 'Tính tiền', en: 'The bill, please' },
]

type Filter = 'all' | 'noPork' | 'veggie' | 'mild'
const FILTERS: { id: Filter; label: string }[] = [
    { id: 'all', label: 'All dishes' },
    { id: 'veggie', label: '🌱 Veggie version' },
    { id: 'noPork', label: 'No pork' },
    { id: 'mild', label: 'Not spicy' },
]

// ─── Text-to-speech (Vietnamese voice if the device has one) ────────────────
function useVietnameseVoice() {
    const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null)
    useEffect(() => {
        if (typeof window === 'undefined' || !('speechSynthesis' in window)) return
        const pick = () => setVoice(window.speechSynthesis.getVoices().find(v => v.lang.toLowerCase().startsWith('vi')) ?? null)
        pick()
        window.speechSynthesis.addEventListener('voiceschanged', pick)
        return () => window.speechSynthesis.removeEventListener('voiceschanged', pick)
    }, [])
    const speak = (text: string) => {
        if (!voice) return
        window.speechSynthesis.cancel()
        const u = new SpeechSynthesisUtterance(text)
        u.voice = voice; u.lang = voice.lang; u.rate = 0.85
        window.speechSynthesis.speak(u)
    }
    return { canSpeak: !!voice, speak }
}

function HearButton({ text, speak, dark = false }: { text: string; speak: (t: string) => void; dark?: boolean }) {
    return (
        <button
            type="button" onClick={e => { e.stopPropagation(); speak(text) }} aria-label={`Hear “${text}”`}
            className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full transition-colors"
            style={{ background: dark ? 'rgba(255,255,255,0.14)' : '#FEF3C7', color: dark ? '#fff' : '#B45309' }}
        >
            <Volume2 size={16} />
        </button>
    )
}

function Spice({ level, light = false }: { level: number; light?: boolean }) {
    if (level === 0) return <span className="text-[12px] font-semibold" style={{ color: light ? 'rgba(255,255,255,0.75)' : '#15803D' }}>Mild</span>
    return (
        <span className="flex items-center gap-0.5" aria-label={`Spice level ${level} of 3`}>
            {[1, 2, 3].map(i => <Flame key={i} size={13} fill={i <= level ? '#DC2626' : 'none'} color={i <= level ? '#DC2626' : (light ? 'rgba(255,255,255,0.35)' : 'rgba(75,46,26,0.25)')} />)}
        </span>
    )
}

function Thumb({ dish, link, size }: { dish: Dish; link?: DishLinks[string]; size: number }) {
    return (
        <span className="relative flex flex-shrink-0 items-center justify-center overflow-hidden rounded-2xl" style={{ width: size, height: size, background: 'linear-gradient(135deg,#FDF4E7,#F5E1C8)' }}>
            {link?.image
                ? <Image src={link.image} alt="" fill sizes={`${size * 2}px`} className="object-cover" />
                : <span style={{ fontSize: size * 0.45 }} aria-hidden>{dish.emoji}</span>}
        </span>
    )
}

// ─────────────────────────────────────────────────────────────────────────────
export default function MenuDecoderClient({ links }: { links: DishLinks }) {
    const [query, setQuery] = useState('')
    const [section, setSection] = useState<Section | 'All'>('All')
    const [filter, setFilter] = useState<Filter>('all')
    const [open, setOpen] = useState<Dish | null>(null)
    const { canSpeak, speak } = useVietnameseVoice()

    // Deep link: /menu-decoder?q=pho%20tai
    useEffect(() => {
        const q = new URLSearchParams(window.location.search).get('q')
        if (q) setQuery(q)
    }, [])
    useEffect(() => {
        const t = setTimeout(() => {
            const url = new URL(window.location.href)
            if (query.trim()) url.searchParams.set('q', query.trim()); else url.searchParams.delete('q')
            window.history.replaceState(null, '', url)
        }, 400)
        return () => clearTimeout(t)
    }, [query])

    useEffect(() => {
        if (!open) return
        const prev = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(null)
        window.addEventListener('keydown', onKey)
        return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', onKey) }
    }, [open])

    const matches = useMemo(() => {
        if (!query.trim()) return []
        return DISHES.map(d => ({ d, s: scoreDish(d, query) })).filter(x => x.s > 0).sort((a, b) => b.s - a.s).slice(0, 3).map(x => x.d)
    }, [query])
    const words = useMemo(() => (query.trim() ? decodeWords(query) : []), [query])
    const known = words.filter(w => w.word).length

    const list = DISHES.filter(d =>
        (section === 'All' || d.section === section) &&
        (filter !== 'veggie' || d.veggie) &&
        (filter !== 'noPork' || !d.protein.includes('pork')) &&
        (filter !== 'mild' || d.spice === 0))

    const best = matches[0]
    const others = matches.slice(1)

    return (
        <main className="min-h-screen" style={{ background: '#FBF8F4', fontFamily: "'DM Sans', sans-serif" }}>

            {/* ═══ HERO + DECODER ═══ */}
            <header className="relative overflow-hidden px-5 pb-10 pt-28 sm:px-6 sm:pb-14 sm:pt-36" style={{ background: '#2D1A0E' }}>
                <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-[380px] w-[380px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(217,119,6,0.28), transparent 65%)' }} />
                <div className="relative mx-auto max-w-[760px]">
                    <div className="mb-4 flex items-center gap-2">
                        <span className="h-px w-8" style={{ background: '#D97706' }} />
                        <span className="text-[11px] font-bold uppercase" style={{ color: '#F59E0B', letterSpacing: '0.18em' }}>At a Vietnamese restaurant?</span>
                    </div>
                    <h1 className="font-bold leading-[1.05] text-white" style={{ ...serif, fontSize: 'clamp(2.1rem, 5.6vw, 3.6rem)' }}>
                        Menu <em style={{ color: '#F59E0B' }}>Decoder</em>
                    </h1>
                    <p className="mt-4 max-w-[560px] text-[16px] leading-relaxed" style={{ color: 'rgba(245,237,227,0.72)' }}>
                        Type any dish from the menu — in Vietnamese, English or German. We tell you what it is, how it tastes, how to eat it and what it usually contains.
                    </p>

                    <div className="relative mt-7">
                        <Search size={20} className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2" style={{ color: '#B8A08A' }} aria-hidden />
                        <label htmlFor="menu-q" className="sr-only">Dish name from the menu</label>
                        <input
                            id="menu-q" type="search" value={query} onChange={e => setQuery(e.target.value)}
                            placeholder="e.g. Phở tái nạm, Bún bò Nam Bộ…"
                            autoComplete="off" autoCapitalize="off" spellCheck={false} enterKeyHint="search"
                            className="h-[60px] w-full rounded-2xl border-0 bg-white pl-[52px] pr-12 text-[17px] text-[#2D1A0E] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] outline-none placeholder:text-[#B8A08A] focus:ring-4 focus:ring-[#D97706]/40 [&::-webkit-search-cancel-button]:hidden"
                        />
                        {query && (
                            <button onClick={() => setQuery('')} aria-label="Clear" className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full hover:bg-[#F5EDE3]" style={{ color: '#8A6E58' }}><X size={17} /></button>
                        )}
                    </div>

                    {!query && (
                        <div className="mt-4 flex flex-wrap gap-2">
                            <span className="py-1.5 text-[13px]" style={{ color: 'rgba(245,237,227,0.55)' }}>Try:</span>
                            {EXAMPLES.map(ex => (
                                <button key={ex} onClick={() => setQuery(ex)} className="rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors hover:bg-white/20" style={{ background: 'rgba(255,255,255,0.1)', color: '#F5EDE3' }}>{ex}</button>
                            ))}
                        </div>
                    )}

                    {/* ── Results ── */}
                    <div aria-live="polite">
                        <AnimatePresence mode="wait">
                            {query.trim() && (
                                <motion.div key="res" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25, ease: EASE }} className="mt-5 space-y-3">
                                    {best ? (
                                        <button onClick={() => setOpen(best)} className="group flex w-full gap-4 rounded-2xl bg-white p-4 text-left sm:p-5">
                                            <Thumb dish={best} link={links[best.id]} size={84} />
                                            <span className="min-w-0 flex-1">
                                                <span className="text-[11px] font-bold uppercase" style={{ color: '#D97706', letterSpacing: '0.1em' }}>Best match</span>
                                                <span className="block text-[22px] font-bold leading-tight" style={{ ...serif, color: '#2D1A0E' }}>{best.vi}</span>
                                                <span className="block text-[14.5px] font-semibold" style={{ color: '#4B2E1A' }}>{best.en}</span>
                                                <span className="mt-1.5 line-clamp-2 text-[14px] leading-snug" style={{ color: 'rgba(75,46,26,0.7)' }}>{best.what}</span>
                                                <span className="mt-2 flex items-center gap-1 text-[13px] font-semibold" style={{ color: '#D97706' }}>How to eat it, allergens & more <ChevronRight size={15} className="transition-transform group-hover:translate-x-0.5" /></span>
                                            </span>
                                        </button>
                                    ) : (
                                        <p className="rounded-2xl px-4 py-3 text-[14.5px]" style={{ background: 'rgba(255,255,255,0.08)', color: '#F5EDE3' }}>
                                            No dish match yet — {known ? 'but here is what the words mean:' : 'try typing just the dish name, e.g. “phở” or “bún”.'}
                                        </p>
                                    )}

                                    {others.length > 0 && (
                                        <div className="flex flex-wrap gap-2">
                                            <span className="py-1.5 text-[13px]" style={{ color: 'rgba(245,237,227,0.55)' }}>Or maybe:</span>
                                            {others.map(d => (
                                                <button key={d.id} onClick={() => setOpen(d)} className="rounded-full px-3.5 py-1.5 text-[13px] font-semibold hover:bg-white/20" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}>{d.vi} · {d.en}</button>
                                            ))}
                                        </div>
                                    )}

                                    {known > 0 && (
                                        <div className="rounded-2xl p-4" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}>
                                            <p className="mb-2.5 text-[11px] font-bold uppercase" style={{ color: '#F59E0B', letterSpacing: '0.12em' }}>Word by word</p>
                                            <div className="flex flex-wrap gap-2">
                                                {words.map((w, i) => w.word ? (
                                                    <span key={i} className="rounded-xl px-3 py-2" style={{ background: 'rgba(255,255,255,0.1)' }}>
                                                        <span className="block text-[15px] font-bold text-white">{w.text}</span>
                                                        <span className="block text-[12.5px] leading-snug" style={{ color: 'rgba(245,237,227,0.75)' }}>{w.word.en}</span>
                                                    </span>
                                                ) : (
                                                    <span key={i} className="self-center px-1 text-[14px]" style={{ color: 'rgba(245,237,227,0.4)' }}>{w.text}</span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </header>

            {/* ═══ SECTION CHIPS (sticky) ═══ */}
            <nav aria-label="Menu sections" className="sticky top-[61px] z-30 border-b border-[rgba(75,46,26,0.08)] backdrop-blur-xl min-[641px]:top-[85px]" style={{ background: 'rgba(251,248,244,0.92)' }}>
                <div className="mx-auto flex max-w-[960px] items-center gap-2 overflow-x-auto px-5 py-3 [scrollbar-width:none] sm:px-6 [&::-webkit-scrollbar]:hidden">
                    {(['All', ...SECTIONS.map(s => s.name)] as (Section | 'All')[]).map(name => {
                        const on = section === name
                        const emoji = SECTIONS.find(s => s.name === name)?.emoji
                        return (
                            <button key={name} aria-pressed={on} onClick={() => setSection(name)} className="relative flex flex-shrink-0 items-center gap-1.5 rounded-full px-3.5 py-2 text-[13.5px] font-medium" style={{ color: on ? '#fff' : '#4B2E1A' }}>
                                {on && <motion.span layoutId="menu-chip" className="absolute inset-0 rounded-full" style={{ background: '#2D1A0E' }} transition={{ type: 'spring', stiffness: 420, damping: 36 }} />}
                                {!on && <span className="absolute inset-0 rounded-full border border-[rgba(75,46,26,0.12)] bg-white" />}
                                {emoji && <span className="relative" aria-hidden>{emoji}</span>}
                                <span className="relative">{name === 'All' ? 'Whole menu' : name}</span>
                            </button>
                        )
                    })}
                </div>
            </nav>

            {/* ═══ THE MENU ═══ */}
            <section id="menu" className="mx-auto max-w-[960px] px-5 pb-16 pt-8 sm:px-6">
                <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <h2 className="text-[28px] font-bold leading-tight" style={{ ...serif, color: '#2D1A0E' }}>The {DISHES.length} dishes you’ll see most</h2>
                        <p className="mt-1 text-[14.5px]" style={{ color: 'rgba(75,46,26,0.6)' }}>Tap a dish for how to eat it, allergens and how to order it in Vietnamese.</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filter dishes">
                        {FILTERS.map(f => (
                            <button key={f.id} aria-pressed={filter === f.id} onClick={() => setFilter(f.id)} className="rounded-full px-3 py-1.5 text-[12.5px] font-semibold transition-colors"
                                style={filter === f.id ? { background: '#D97706', color: '#fff' } : { background: '#F5EDE3', color: '#4B2E1A' }}>{f.label}</button>
                        ))}
                    </div>
                </div>

                {SECTIONS.filter(s => list.some(d => d.section === s.name)).map(s => (
                    <div key={s.name} className="mb-8">
                        <div className="mb-2 flex items-center gap-3">
                            <span className="text-[20px]" aria-hidden>{s.emoji}</span>
                            <h3 className="text-[13px] font-bold uppercase" style={{ color: '#B45309', letterSpacing: '0.14em' }}>{s.name}</h3>
                            <span className="h-px flex-1" style={{ background: 'rgba(75,46,26,0.12)' }} />
                        </div>
                        <ul className="overflow-hidden rounded-3xl bg-white" style={{ border: '1px solid rgba(75,46,26,0.08)' }}>
                            {list.filter(d => d.section === s.name).map((d, i) => (
                                <li key={d.id} style={{ borderTop: i ? '1px solid rgba(75,46,26,0.07)' : undefined }}>
                                    <button onClick={() => setOpen(d)} className="group flex w-full items-center gap-3.5 px-4 py-3.5 text-left transition-colors hover:bg-[#FDFAF6] sm:gap-4 sm:px-5">
                                        <Thumb dish={d} link={links[d.id]} size={60} />
                                        <span className="min-w-0 flex-1">
                                            <span className="flex flex-wrap items-baseline gap-x-2">
                                                <span className="text-[17.5px] font-bold" style={{ ...serif, color: '#2D1A0E' }}>{d.vi}</span>
                                                <span className="text-[13.5px] font-medium" style={{ color: '#4B2E1A' }}>{d.en}</span>
                                            </span>
                                            <span className="mt-0.5 block truncate text-[12.5px]" style={{ color: 'rgba(75,46,26,0.5)' }}><span className="mr-1 rounded px-1 py-px text-[9.5px] font-bold" style={{ background: '#F5EDE3', color: '#8A6E58' }}>DE</span>{d.de}</span>
                                            <span className="mt-1 flex items-center gap-2">
                                                <Spice level={d.spice} />
                                                {d.veggie && <span className="rounded-full px-1.5 py-px text-[11px] font-semibold" style={{ background: '#DCFCE7', color: '#15803D' }}>veggie option</span>}
                                            </span>
                                        </span>
                                        <ChevronRight size={18} className="flex-shrink-0 transition-transform group-hover:translate-x-0.5" style={{ color: 'rgba(75,46,26,0.35)' }} />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                {list.length === 0 && <p className="py-12 text-center text-[15px]" style={{ color: 'rgba(75,46,26,0.6)' }}>No dishes in this section match that filter.</p>}
            </section>

            {/* ═══ MENU DICTIONARY ═══ */}
            <section id="dictionary" className="px-5 pb-16 sm:px-6" style={{ background: '#F5EDE3' }}>
                <div className="mx-auto max-w-[960px] pt-14">
                    <p className="mb-2 flex items-center gap-2 text-[11px] font-bold uppercase" style={{ color: '#D97706', letterSpacing: '0.18em' }}><Sparkles size={14} /> Menu dictionary</p>
                    <h2 className="text-[28px] font-bold leading-tight" style={{ ...serif, color: '#2D1A0E' }}>{MENU_WORDS.length} words that unlock any Vietnamese menu</h2>
                    <p className="mt-1 max-w-[620px] text-[14.5px]" style={{ color: 'rgba(75,46,26,0.6)' }}>Vietnamese dish names are built like Lego: noodle + meat + how it’s cooked. “Bún bò nướng” = rice vermicelli + beef + grilled.</p>
                    <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {WORD_GROUPS.map(g => (
                            <div key={g} className="rounded-3xl bg-white p-5" style={{ border: '1px solid rgba(75,46,26,0.08)' }}>
                                <h3 className="mb-3 text-[15px] font-bold" style={{ ...serif, color: '#2D1A0E' }}>{g}</h3>
                                <dl className="space-y-1.5">
                                    {MENU_WORDS.filter(w => w.group === g).map(w => (
                                        <div key={w.vi} className="flex gap-2 text-[13.5px] leading-snug">
                                            <dt className="w-[92px] flex-shrink-0 font-bold" style={{ color: '#2D1A0E' }}>{w.vi}{w.alt && <span className="block text-[11.5px] font-medium" style={{ color: 'rgba(75,46,26,0.45)' }}>or {w.alt[0]}</span>}</dt>
                                            <dd style={{ color: 'rgba(75,46,26,0.72)' }}>{w.en}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ ORDERING PHRASES ═══ */}
            <section className="mx-auto max-w-[960px] px-5 py-16 sm:px-6">
                <p className="mb-2 flex items-center gap-2 text-[11px] font-bold uppercase" style={{ color: '#D97706', letterSpacing: '0.18em' }}><MessageCircle size={14} /> Order like a local</p>
                <h2 className="text-[28px] font-bold leading-tight" style={{ ...serif, color: '#2D1A0E' }}>8 phrases the staff will love</h2>
                <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {PHRASES.map(p => (
                        <div key={p.vi} className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3" style={{ border: '1px solid rgba(75,46,26,0.08)' }}>
                            <div className="min-w-0 flex-1">
                                <p className="text-[16px] font-bold" style={{ color: '#2D1A0E' }}>{p.vi}</p>
                                <p className="text-[13.5px]" style={{ color: 'rgba(75,46,26,0.6)' }}>{p.en}</p>
                            </div>
                            {canSpeak && <HearButton text={p.vi} speak={speak} />}
                        </div>
                    ))}
                </div>
                <p className="mt-5 flex gap-2 rounded-2xl px-4 py-3 text-[13.5px] leading-relaxed" style={{ background: '#FEF2F2', color: '#991B1B' }}>
                    <AlertTriangle size={17} className="mt-0.5 flex-shrink-0" />
                    <span>Allergen info on this page is typical, not guaranteed — recipes differ between restaurants. With a serious allergy, always tell the staff.</span>
                </p>
            </section>

            {/* ═══ CTA ═══ */}
            <section className="px-5 pb-20 sm:px-6">
                <div className="mx-auto flex max-w-[960px] flex-col items-start gap-6 rounded-[28px] px-8 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-12" style={{ background: '#2D1A0E' }}>
                    <div>
                        <h2 className="text-[28px] font-bold leading-tight text-white" style={serif}>Loved it? Cook it at home.</h2>
                        <p className="mt-2 text-[15px]" style={{ color: 'rgba(245,237,227,0.65)' }}>Step-by-step recipes for the dishes on this menu — and hundreds more.</p>
                    </div>
                    <Link href="/recipes" className="group flex items-center gap-2 rounded-full px-7 py-4 text-[14px] font-semibold text-white" style={{ background: '#D97706', textDecoration: 'none' }}>
                        Browse recipes <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </section>

            {/* ═══ DISH SHEET ═══ */}
            <AnimatePresence>
                {open && (() => {
                    const link = links[open.id]
                    return (
                        <>
                            <motion.div className="fixed inset-0 z-[120]" style={{ background: 'rgba(20,11,5,0.5)', backdropFilter: 'blur(3px)' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(null)} />
                            <motion.div
                                role="dialog" aria-modal="true" aria-label={open.vi}
                                className="fixed inset-x-0 bottom-0 z-[121] flex max-h-[92vh] flex-col overflow-hidden rounded-t-[28px] bg-[#FBF8F4] sm:inset-auto sm:left-1/2 sm:top-1/2 sm:max-h-[88vh] sm:w-[580px] sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-[28px]"
                                initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }} transition={{ duration: 0.3, ease: EASE }}
                                style={{ fontFamily: "'DM Sans', sans-serif" }}
                            >
                                <div className="relative h-[190px] flex-shrink-0 sm:h-[230px]" style={{ background: 'linear-gradient(135deg,#4B2E1A,#2D1A0E)' }}>
                                    {link?.image && link.sharp
                                        ? <Image src={link.image} alt={open.vi} fill sizes="(max-width:640px) 100vw, 580px" className="object-cover" />
                                        : <span className="absolute right-6 top-5 text-[88px] opacity-90" aria-hidden>{open.emoji}</span>}
                                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(20,11,5,0.8), transparent 65%)' }} />
                                    <button onClick={() => setOpen(null)} aria-label="Close" className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur" style={{ color: '#2D1A0E' }}><X size={18} /></button>
                                    <div className="absolute inset-x-0 bottom-0 flex items-end gap-3 p-5">
                                        <div className="min-w-0 flex-1">
                                            <p className="text-[11px] font-bold uppercase text-white/75" style={{ letterSpacing: '0.1em' }}>{open.section}</p>
                                            <h2 className="text-[30px] font-bold leading-tight text-white" style={serif}>{open.vi}</h2>
                                            <p className="text-[14px] text-white/85">say: <em>“{open.pron}”</em> · {open.en}</p>
                                        </div>
                                        {canSpeak && <HearButton text={open.vi.split(' / ')[0]} speak={speak} dark />}
                                    </div>
                                </div>

                                <div className="flex-1 overflow-y-auto overscroll-contain px-5 pb-6 pt-5">
                                    <p className="text-[12.5px]" style={{ color: 'rgba(75,46,26,0.55)' }}>On German menus: <strong style={{ color: '#4B2E1A' }}>{open.de}</strong></p>
                                    <p className="mt-3 text-[16px] leading-relaxed" style={{ color: '#2D1A0E' }}>{open.what}</p>

                                    <div className="mt-4 grid grid-cols-[1fr_auto] items-center gap-3 rounded-2xl bg-white p-4" style={{ border: '1px solid rgba(75,46,26,0.07)' }}>
                                        <div>
                                            <p className="text-[11px] font-bold uppercase" style={{ color: 'rgba(75,46,26,0.5)', letterSpacing: '0.08em' }}>Tastes</p>
                                            <p className="text-[14.5px] leading-relaxed" style={{ color: '#2D1A0E' }}>{open.taste}</p>
                                            <p className="mt-1 text-[13px]" style={{ color: 'rgba(75,46,26,0.6)' }}>If you like <strong style={{ color: '#4B2E1A' }}>{open.like}</strong>, try this.</p>
                                        </div>
                                        <Spice level={open.spice} />
                                    </div>

                                    <div className="mt-3 rounded-2xl bg-white p-4" style={{ border: '1px solid rgba(75,46,26,0.07)' }}>
                                        <p className="mb-2 flex items-center gap-1.5 text-[11px] font-bold uppercase" style={{ color: 'rgba(75,46,26,0.5)', letterSpacing: '0.08em' }}><UtensilsCrossed size={13} /> How to eat it</p>
                                        <ol className="space-y-1.5">
                                            {open.eat.map((step, i) => (
                                                <li key={i} className="flex gap-2.5 text-[14.5px] leading-relaxed" style={{ color: '#2D1A0E' }}>
                                                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white" style={{ background: '#D97706' }}>{i + 1}</span>
                                                    {step}
                                                </li>
                                            ))}
                                        </ol>
                                    </div>

                                    <div className="mt-3 rounded-2xl bg-white p-4" style={{ border: '1px solid rgba(75,46,26,0.07)' }}>
                                        <p className="mb-2 text-[11px] font-bold uppercase" style={{ color: 'rgba(75,46,26,0.5)', letterSpacing: '0.08em' }}>Usually contains</p>
                                        {open.allergens.length ? (
                                            <div className="flex flex-wrap gap-1.5">
                                                {open.allergens.map(a => (
                                                    <span key={a} className="rounded-full px-2.5 py-1 text-[12.5px] font-semibold" style={{ background: '#FEF3C7', color: '#92400E' }}>
                                                        {ALLERGEN_INFO[a].emoji} {ALLERGEN_INFO[a].label} <span style={{ opacity: 0.6 }}>· {ALLERGEN_INFO[a].de}</span>
                                                    </span>
                                                ))}
                                            </div>
                                        ) : <p className="text-[14px]" style={{ color: '#15803D' }}>None of the common allergens in the usual recipe.</p>}
                                        <p className="mt-2 text-[12px]" style={{ color: 'rgba(75,46,26,0.5)' }}>
                                            {open.veggie ? '🌱 Many restaurants offer a vegetarian (chay) version. ' : ''}Recipes vary — check with the restaurant.
                                        </p>
                                    </div>

                                    <div className="mt-3 flex items-center gap-3 rounded-2xl p-4" style={{ background: '#2D1A0E' }}>
                                        <div className="min-w-0 flex-1">
                                            <p className="text-[11px] font-bold uppercase" style={{ color: '#F59E0B', letterSpacing: '0.08em' }}>Order it in Vietnamese</p>
                                            <p className="mt-1 text-[16px] font-bold text-white">{open.order.vi}</p>
                                            <p className="text-[13px]" style={{ color: 'rgba(245,237,227,0.65)' }}>{open.order.en}</p>
                                        </div>
                                        {canSpeak && <HearButton text={open.order.vi} speak={speak} dark />}
                                    </div>
                                </div>

                                {link?.href && (
                                    <div className="border-t px-5 pb-[calc(14px+env(safe-area-inset-bottom))] pt-3" style={{ borderColor: 'rgba(75,46,26,0.08)' }}>
                                        <Link href={link.href} className="flex h-[52px] w-full items-center justify-center gap-2 rounded-full text-[15px] font-semibold text-white" style={{ background: '#D97706', textDecoration: 'none' }}>
                                            Cook {open.vi.split(' / ')[0]} at home <ArrowRight size={17} />
                                        </Link>
                                    </div>
                                )}
                            </motion.div>
                        </>
                    )
                })()}
            </AnimatePresence>
        </main>
    )
}

