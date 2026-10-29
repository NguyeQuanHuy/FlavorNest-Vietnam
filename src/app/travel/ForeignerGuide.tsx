'use client'
// ─────────────────────────────────────────────────────────────────────────────
//  app/travel/ForeignerGuide.tsx
//  "New to Vietnam?" — practical help for foreigners: phrases (with audio),
//  allergy cards to show staff, money, getting around, visa/SIM/safety.
//  Visa facts checked Oct 2026 (official portal: evisa.xuatnhapcanh.gov.vn)
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    MessageCircle, ShieldAlert, Wallet, Bike, Plane, Volume2, X, Phone, Droplets,
    CreditCard, Smartphone, Footprints, Map, Hand, FileCheck, Hotel, AlertTriangle,
} from 'lucide-react'

const serif = { fontFamily: "'Playfair Display', Georgia, serif" }
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const TABS = [
    { id: 'phrases', label: 'Phrases', Icon: MessageCircle },
    { id: 'allergy', label: 'Allergies & diet', Icon: ShieldAlert },
    { id: 'money', label: 'Money', Icon: Wallet },
    { id: 'move', label: 'Getting around', Icon: Bike },
    { id: 'arrive', label: 'Visa, SIM & safety', Icon: Plane },
] as const
type TabId = (typeof TABS)[number]['id']

const PHRASES = [
    { vi: 'Xin chào', say: 'sin chow', en: 'Hello' },
    { vi: 'Cảm ơn', say: 'gahm uhn', en: 'Thank you' },
    { vi: 'Cho tôi cái này', say: 'chaw toy kai nay', en: 'I’d like this one (point at the menu)' },
    { vi: 'Bao nhiêu tiền?', say: 'bow nyew tee-en', en: 'How much is it?' },
    { vi: 'Không cay', say: 'khome kai', en: 'Not spicy' },
    { vi: 'Ít đường', say: 'it duong', en: 'Less sugar (for coffee & drinks)' },
    { vi: 'Không đá', say: 'khome dah', en: 'No ice' },
    { vi: 'Ngon quá!', say: 'ngon kwah', en: 'So delicious!' },
    { vi: 'Tính tiền', say: 'ting tee-en', en: 'The bill, please' },
    { vi: 'Nhà vệ sinh ở đâu?', say: 'nyah veh sing uh dow', en: 'Where is the toilet?' },
]

const ALLERGIES = [
    { id: 'peanut', en: 'Peanuts', vi: 'Tôi bị dị ứng đậu phộng.', ask: 'Xin đừng cho đậu phộng hoặc dầu đậu phộng vào món ăn của tôi.', note: 'Peanuts are crushed on top of many noodle dishes and salads.' },
    { id: 'shellfish', en: 'Shellfish', vi: 'Tôi bị dị ứng tôm, cua và hải sản có vỏ.', ask: 'Xin đừng cho tôm, cua, mắm tôm hoặc mắm ruốc vào món ăn của tôi.', note: 'Shrimp paste hides in broths like bún bò Huế and bún riêu.' },
    { id: 'fish', en: 'Fish & fish sauce', vi: 'Tôi bị dị ứng cá và nước mắm.', ask: 'Xin đừng cho cá hoặc nước mắm vào món ăn của tôi.', note: 'Fish sauce is in almost every dipping sauce and marinade.' },
    { id: 'egg', en: 'Eggs', vi: 'Tôi bị dị ứng trứng.', ask: 'Xin đừng cho trứng vào món ăn của tôi.', note: 'Watch for egg in fried rice, bánh xèo batter and egg coffee.' },
    { id: 'veg', en: 'Vegetarian', vi: 'Tôi ăn chay.', ask: 'Tôi không ăn thịt, cá, hải sản và không dùng nước mắm. Xin cảm ơn!', note: 'Look for “quán chay” (vegetarian restaurants) — often busiest on the 1st and 15th of the lunar month.' },
]

function speak(text: string) {
    try {
        const synth = window.speechSynthesis
        if (!synth) return
        synth.cancel()
        const u = new SpeechSynthesisUtterance(text)
        u.lang = 'vi-VN'
        u.rate = 0.85
        const vi = synth.getVoices().find(v => v.lang?.toLowerCase().startsWith('vi'))
        if (vi) u.voice = vi
        synth.speak(u)
    } catch { /* not supported */ }
}

function Tip({ Icon, title, children }: { Icon: React.ElementType; title: string; children: React.ReactNode }) {
    return (
        <div className="flex gap-3.5 rounded-2xl bg-white p-4" style={{ border: '1px solid rgba(75,46,26,0.08)' }}>
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl" style={{ background: '#FEF3C7', color: '#B45309' }}><Icon size={19} /></span>
            <div className="min-w-0">
                <h4 className="text-[15px] font-semibold" style={{ color: '#2D1A0E' }}>{title}</h4>
                <div className="mt-1 text-[14px] leading-relaxed" style={{ color: 'rgba(75,46,26,0.7)' }}>{children}</div>
            </div>
        </div>
    )
}

export default function ForeignerGuide() {
    const [tab, setTab] = useState<TabId>('phrases')
    const [card, setCard] = useState<(typeof ALLERGIES)[number] | null>(null)
    const [canSpeak, setCanSpeak] = useState(false)

    useEffect(() => { setCanSpeak(typeof window !== 'undefined' && 'speechSynthesis' in window) }, [])
    useEffect(() => {
        if (!card) return
        const prev = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setCard(null)
        window.addEventListener('keydown', onKey)
        return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', onKey) }
    }, [card])

    return (
        <section id="new-to-vietnam" className="scroll-mt-24 px-5 py-16 sm:px-6 sm:py-20" style={{ background: '#F5EDE3' }} aria-labelledby="newbie-heading">
            <div className="mx-auto max-w-[1200px]">
                <div className="mb-2 flex items-center gap-2">
                    <span className="h-px w-8" style={{ background: '#D97706' }} />
                    <span className="text-[11px] font-bold uppercase" style={{ color: '#D97706', letterSpacing: '0.18em' }}>For visitors & expats</span>
                </div>
                <h2 id="newbie-heading" className="font-bold leading-tight" style={{ ...serif, fontSize: 'clamp(1.9rem, 4.2vw, 2.8rem)', color: '#2D1A0E' }}>
                    New to Vietnam? <em style={{ color: '#D97706' }}>Your survival kit</em>
                </h2>
                <p className="mt-3 max-w-2xl text-[15.5px] leading-relaxed" style={{ color: 'rgba(75,46,26,0.65)' }}>
                    Ten words that get you fed, cards to show when you have an allergy, and the practical things nobody tells you before you land.
                </p>

                {/* tabs */}
                <div role="tablist" aria-label="Survival kit topics" className="-mx-5 mt-8 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0 [&::-webkit-scrollbar]:hidden">
                    {TABS.map(({ id, label, Icon }) => {
                        const on = tab === id
                        return (
                            <button
                                key={id}
                                role="tab"
                                aria-selected={on}
                                onClick={() => setTab(id)}
                                className="relative flex flex-shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-[14px] font-semibold outline-none focus-visible:ring-2 focus-visible:ring-[#D97706]"
                                style={{ color: on ? '#fff' : '#4B2E1A' }}
                            >
                                {on && <motion.span layoutId="newbie-tab" className="absolute inset-0 rounded-full" style={{ background: '#2D1A0E' }} transition={{ type: 'spring', stiffness: 420, damping: 36 }} />}
                                {!on && <span className="absolute inset-0 rounded-full border border-[rgba(75,46,26,0.14)] bg-white" />}
                                <Icon size={16} className="relative" />
                                <span className="relative">{label}</span>
                            </button>
                        )
                    })}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div key={tab} role="tabpanel" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25, ease: EASE }} className="mt-6">

                        {tab === 'phrases' && (
                            <>
                                <div className="grid gap-2.5 sm:grid-cols-2">
                                    {PHRASES.map(p => (
                                        <div key={p.vi} className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3.5" style={{ border: '1px solid rgba(75,46,26,0.08)' }}>
                                            <div className="min-w-0 flex-1">
                                                <p className="text-[18px] font-bold leading-tight" style={{ ...serif, color: '#2D1A0E' }}>{p.vi}</p>
                                                <p className="mt-0.5 text-[13px]" style={{ color: 'rgba(75,46,26,0.6)' }}>
                                                    <span className="italic" style={{ color: '#B45309' }}>“{p.say}”</span> · {p.en}
                                                </p>
                                            </div>
                                            {canSpeak && (
                                                <button
                                                    onClick={() => speak(p.vi)}
                                                    aria-label={`Hear “${p.vi}”`}
                                                    className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full transition-colors hover:bg-[#FDE68A]"
                                                    style={{ background: '#FEF3C7', color: '#B45309' }}
                                                >
                                                    <Volume2 size={18} />
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-4 flex items-start gap-2 text-[13px] leading-relaxed" style={{ color: 'rgba(75,46,26,0.6)' }}>
                                    <Hand size={15} className="mt-0.5 flex-shrink-0" />
                                    Vietnamese is tonal, so pronunciation guides are only approximate — tap 🔊 to hear it. Pointing at the menu and smiling works everywhere.
                                </p>
                            </>
                        )}

                        {tab === 'allergy' && (
                            <>
                                <p className="mb-4 text-[14.5px]" style={{ color: 'rgba(75,46,26,0.7)' }}>
                                    Tap a card and <strong>show your phone to the staff</strong> — it opens full-screen in Vietnamese.
                                </p>
                                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                    {ALLERGIES.map(a => (
                                        <button
                                            key={a.id}
                                            onClick={() => setCard(a)}
                                            className="group rounded-2xl bg-white p-5 text-left transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-18px_rgba(45,26,14,0.45)]"
                                            style={{ border: '1px solid rgba(75,46,26,0.08)' }}
                                        >
                                            <p className="text-[12px] font-bold uppercase" style={{ color: '#D97706', letterSpacing: '0.1em' }}>{a.en}</p>
                                            <p className="mt-1.5 text-[17px] font-bold leading-snug" style={{ ...serif, color: '#2D1A0E' }}>{a.vi}</p>
                                            <p className="mt-2 text-[13px] leading-relaxed" style={{ color: 'rgba(75,46,26,0.6)' }}>{a.note}</p>
                                            <span className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold" style={{ color: '#B45309' }}>Show to staff →</span>
                                        </button>
                                    ))}
                                </div>
                            </>
                        )}

                        {tab === 'money' && (
                            <div className="grid gap-3 sm:grid-cols-2">
                                <Tip Icon={Wallet} title="Street food is cash">Carry small Vietnamese đồng (VND) notes. Prices are often written on a board; if not, asking is completely normal.</Tip>
                                <Tip Icon={AlertTriangle} title="Check your notes">The blue 20,000 and 500,000 notes look alike — count your change slowly and check the zeros.</Tip>
                                <Tip Icon={CreditCard} title="Cards in cities">Cafés, malls and restaurants in big cities take cards. Local QR payment is everywhere, but usually needs a Vietnamese bank account.</Tip>
                                <Tip Icon={Hand} title="Tipping">Not expected at street stalls or local restaurants. In upscale places a small tip is appreciated, never required.</Tip>
                            </div>
                        )}

                        {tab === 'move' && (
                            <div className="grid gap-3 sm:grid-cols-2">
                                <Tip Icon={Smartphone} title="Use a ride-hailing app">Apps such as Grab show the price before you ride and work for motorbike taxis, cars and food delivery — no haggling needed.</Tip>
                                <Tip Icon={Footprints} title="Crossing the street">Walk slowly and steadily; do not run or stop suddenly. Riders flow around you if they can predict where you are going.</Tip>
                                <Tip Icon={Map} title="Find good food">Busy stalls full of locals are your best guide. Save addresses in Google Maps — Vietnamese addresses include the ward and district.</Tip>
                                <Tip Icon={Bike} title="Motorbike rental">Only ride with the correct licence and insurance — many travel policies do not cover riding without one. Always wear a helmet.</Tip>
                            </div>
                        )}

                        {tab === 'arrive' && (
                            <>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    <Tip Icon={FileCheck} title="Visa">
                                        Citizens of every country can apply for an <strong>e-visa of up to 90 days</strong> — only via the official portal{' '}
                                        <a href="https://evisa.xuatnhapcanh.gov.vn" target="_blank" rel="noopener noreferrer" className="font-semibold underline" style={{ color: '#B45309' }}>evisa.xuatnhapcanh.gov.vn</a>.
                                        Germany, France, the UK and several other European countries get <strong>45 days visa-free</strong> (current rule runs to March 2028). Rules change — check before you fly.
                                    </Tip>
                                    <Tip Icon={Smartphone} title="SIM & eSIM">Buy a local SIM at the airport or a phone shop — bring your passport, it is required for registration. Many travel eSIMs also work.</Tip>
                                    <Tip Icon={Hotel} title="Residence registration">Your stay must be registered with local police on arrival. Hotels do this at check-in; with private rentals, ask your host.</Tip>
                                    <Tip Icon={Droplets} title="Water">Do not drink tap water. Bottled water is everywhere; ice in city cafés is factory-made and generally fine.</Tip>
                                </div>
                                <div className="mt-4 rounded-2xl p-5" style={{ background: '#2D1A0E' }}>
                                    <p className="mb-3 flex items-center gap-2 text-[13px] font-bold uppercase" style={{ color: '#F59E0B', letterSpacing: '0.1em' }}><Phone size={15} /> Emergency numbers</p>
                                    <div className="grid grid-cols-3 gap-2">
                                        {[{ n: '113', l: 'Police' }, { n: '114', l: 'Fire & rescue' }, { n: '115', l: 'Ambulance' }].map(e => (
                                            <a key={e.n} href={`tel:${e.n}`} className="rounded-xl py-3 text-center transition-colors hover:bg-white/10" style={{ background: 'rgba(245,237,227,0.06)', textDecoration: 'none' }}>
                                                <span className="block text-[26px] font-bold leading-none" style={{ ...serif, color: '#F5EDE3' }}>{e.n}</span>
                                                <span className="mt-1 block text-[12px]" style={{ color: 'rgba(245,237,227,0.6)' }}>{e.l}</span>
                                            </a>
                                        ))}
                                    </div>
                                    <p className="mt-3 text-[12.5px]" style={{ color: 'rgba(245,237,227,0.55)' }}>Operators may only speak Vietnamese — ask a hotel or café to call for you if you can.</p>
                                </div>
                            </>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Full-screen allergy card to show staff */}
            <AnimatePresence>
                {card && (
                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-label={`${card.en} card`}
                        className="fixed inset-0 z-[130] flex flex-col bg-white px-6 pb-[calc(24px+env(safe-area-inset-bottom))] pt-[calc(20px+env(safe-area-inset-top))]"
                        initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: 0.2 }}
                    >
                        <div className="flex items-center justify-between">
                            <span className="rounded-full px-3 py-1 text-[12px] font-bold uppercase" style={{ background: '#FEE2E2', color: '#B91C1C', letterSpacing: '0.08em' }}>{card.en}</span>
                            <button onClick={() => setCard(null)} aria-label="Close" className="flex h-11 w-11 items-center justify-center rounded-full" style={{ background: '#F5EDE3', color: '#2D1A0E' }}><X size={20} /></button>
                        </div>
                        <div className="flex flex-1 flex-col justify-center">
                            <p className="text-[clamp(30px,8vw,52px)] font-bold leading-[1.2]" style={{ color: '#111' }}>{card.vi}</p>
                            <p className="mt-5 text-[clamp(20px,5vw,30px)] leading-[1.4]" style={{ color: '#333' }}>{card.ask}</p>
                        </div>
                        <div className="flex gap-3">
                            {canSpeak && (
                                <button onClick={() => speak(`${card.vi} ${card.ask}`)} className="flex h-14 flex-1 items-center justify-center gap-2 rounded-full text-[15px] font-semibold" style={{ background: '#FEF3C7', color: '#92400E' }}>
                                    <Volume2 size={19} /> Read aloud
                                </button>
                            )}
                            <button onClick={() => setCard(null)} className="h-14 flex-1 rounded-full text-[15px] font-semibold text-white" style={{ background: '#2D1A0E' }}>Done</button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
