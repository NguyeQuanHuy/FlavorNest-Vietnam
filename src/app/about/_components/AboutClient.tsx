'use client'
// ─────────────────────────────────────────────────────────────────────────────
//  app/about/_components/AboutClient.tsx
//  Photos: Wikimedia Commons — credits shown under each image (CC BY / BY-SA)
// ─────────────────────────────────────────────────────────────────────────────

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, BookOpen, Sprout, ShieldCheck, ArrowRight, MapPin } from 'lucide-react'

const serif = { fontFamily: "'Playfair Display', Georgia, serif" }
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const reveal = (d = 0) => ({
    initial: { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.65, delay: d, ease: EASE },
})

const STATS = [
    { value: '800+', label: 'Recipes, tested at home' },
    { value: '3', label: 'Regions, north to south' },
    { value: '1', label: 'Small kitchen in Germany' },
    { value: '∞', label: 'Phone calls to Mum' },
]

const HOME_DISHES = [
    { slug: 'phu-yen-chives-noodle-soup', name: 'Bánh Canh Hẹ', note: 'Sunday breakfast', image: '/images/recipes/banh-canh-he-phu-yen.jpg' },
    { slug: 'ga-la-e-phu-yen', name: 'Gà Lá É', note: 'The herb no one abroad knows', image: '/images/recipes/ga-la-e-phu-yen.jpg' },
    { slug: 'banh-beo-phu-yen', name: 'Bánh Bèo', note: 'Market-stall afternoons', image: '/images/recipes/banh-beo-phu-yen.jpg' },
    { slug: 'nem-lui-phu-yen', name: 'Nem Lụi', note: 'Smoke, lemongrass, rice paper', image: '/images/recipes/nem-lui-phu-yen.jpg' },
]

const VALUES = [
    {
        Icon: Home,
        title: 'The home-kitchen test',
        body: 'Every recipe is cooked in my apartment in Waltershausen — four burners, ingredients from an Asian supermarket forty minutes away. If it does not work here, it does not get published.',
    },
    {
        Icon: BookOpen,
        title: 'Story before recipe',
        body: 'Where a dish comes from, who taught it and why it matters. A list of ingredients is only instructions; context is what makes you want to cook it.',
    },
    {
        Icon: Sprout,
        title: 'Before it disappears',
        body: 'Grandmothers’ recipes live in hands and instinct, rarely on paper. As villages empty into cities, FlavorNest is a small attempt to write them down while we still can.',
    },
    {
        Icon: ShieldCheck,
        title: 'No shortcuts, no fakes',
        body: 'Fish sauce is never swapped for soy. If the real version takes ten hours, I write the ten-hour version — and tell you honestly what you can skip and what you cannot.',
    },
]

const JOURNEY = [
    { when: '2024', text: 'I moved to Germany and found that the food I missed most was invisible here. Nobody was writing about bánh canh hẹ in English; outside Phú Yên, hardly anyone knew it existed.' },
    { when: 'Early 2026', text: 'FlavorNest went live with twenty recipes, mostly from my mother’s kitchen — written down the way she taught them to me, over phone calls that ran past midnight German time.' },
    { when: 'Later in 2026', text: 'The project grew beyond Phú Yên: Hanoi phở, Huế bún bò, Saigon cơm tấm, and stories about fermentation, rice and the royal kitchens of Huế.' },
    { when: 'Today', text: 'Still writing. Still testing. Still calling my mother when a recipe does not taste right. Some things should not change.' },
]

function Credit({ children }: { children: React.ReactNode }) {
    return <p className="mt-2 text-[11px]" style={{ color: 'rgba(75,46,26,0.45)' }}>{children}</p>
}

export default function AboutClient() {
    return (
        <main style={{ background: '#FBF8F4', fontFamily: "'DM Sans', system-ui, sans-serif" }}>

            {/* ═══ HERO — Gành Đá Đĩa ═══ */}
            <section className="relative flex min-h-[88vh] items-end overflow-hidden" aria-label="Our story">
                <motion.div className="absolute inset-0" initial={{ scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 2.2, ease: EASE }}>
                    <Image
                        src="/images/about/ganh-da-dia.webp"
                        alt="Gành Đá Đĩa — hexagonal basalt columns meeting the sea on the Phú Yên coast"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover"
                    />
                </motion.div>
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(20,11,5,0.92) 0%, rgba(20,11,5,0.45) 45%, rgba(20,11,5,0.15) 100%)' }} />

                <div className="relative mx-auto w-full max-w-[1100px] px-5 pb-16 pt-40 sm:px-6 sm:pb-24">
                    <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: EASE }}>
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-bold uppercase backdrop-blur-md" style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', color: '#FCD9A5', letterSpacing: '0.16em' }}>
                            <MapPin size={13} /> Phú Yên → Thüringen
                        </div>
                        <h1 className="max-w-3xl font-bold leading-[1.02] text-white" style={{ ...serif, fontSize: 'clamp(2.6rem, 7vw, 5.2rem)' }}>
                            This started with <em style={{ color: '#F59E0B' }}>missing home.</em>
                        </h1>
                        <p className="mt-6 max-w-xl text-[17px] leading-[1.75] sm:text-[19px]" style={{ color: 'rgba(245,237,227,0.82)' }}>
                            A Vietnamese food journal written in a small kitchen in Germany, by someone who left the Phú Yên coast — and never stopped thinking about what was on the table.
                        </p>
                    </motion.div>
                </div>
                <p className="absolute bottom-3 right-4 text-[10.5px]" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    Gành Đá Đĩa, Phú Yên · Photo: son do,{' '}
                    <a href="https://creativecommons.org/licenses/by/2.0/" target="_blank" rel="noopener noreferrer license" className="underline">CC BY 2.0</a>
                </p>
            </section>

            {/* ═══ STATS ═══ */}
            <section className="relative z-10 mx-auto -mt-10 max-w-[1100px] px-5 sm:px-6">
                <div className="grid grid-cols-2 overflow-hidden rounded-3xl border border-[rgba(75,46,26,0.08)] bg-white shadow-[0_20px_50px_-30px_rgba(45,26,14,0.45)] md:grid-cols-4">
                    {STATS.map((s, i) => (
                        <motion.div
                            key={s.label}
                            {...reveal(i * 0.06)}
                            className={`px-5 py-7 text-center border-[rgba(75,46,26,0.08)] ${i % 2 ? 'border-l' : ''} ${i >= 2 ? 'border-t md:border-t-0' : ''} ${i === 2 ? 'md:border-l' : ''}`}
                        >
                            <div className="text-[36px] font-bold leading-none" style={{ ...serif, color: '#2D1A0E' }}>{s.value}</div>
                            <div className="mt-2 text-[13px]" style={{ color: 'rgba(75,46,26,0.55)' }}>{s.label}</div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ═══ FOUNDER STORY ═══ */}
            <section className="mx-auto max-w-[1100px] px-5 py-24 sm:px-6 lg:py-32">
                <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
                    {/* Mũi Điện */}
                    <motion.figure {...reveal()} className="lg:sticky lg:top-28 lg:self-start">
                        <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] shadow-[0_30px_60px_-30px_rgba(45,26,14,0.5)]">
                            <Image
                                src="/images/about/mui-dien.webp"
                                alt="Mũi Điện cape in Phú Yên — granite boulders above a calm blue sea"
                                fill
                                sizes="(max-width:1024px) 100vw, 480px"
                                className="object-cover"
                                style={{ objectPosition: '30% center' }}
                            />
                        </div>
                        <figcaption className="mt-4">
                            <p className="text-[15px] italic" style={{ ...serif, color: '#4B2E1A' }}>
                                Mũi Điện, Phú Yên — the first place on Vietnam’s mainland to see the sunrise.
                            </p>
                            <Credit>
                                Photo: Tran Anh Khoa,{' '}
                                <a href="https://creativecommons.org/licenses/by-sa/2.0/" target="_blank" rel="noopener noreferrer license" className="underline">CC BY-SA 2.0</a>
                            </Credit>
                        </figcaption>
                    </motion.figure>

                    {/* Text */}
                    <motion.div {...reveal(0.1)}>
                        <div className="mb-5 flex items-center gap-2">
                            <span className="h-px w-8" style={{ background: '#D97706' }} />
                            <span className="text-[11px] font-bold uppercase" style={{ color: '#D97706', letterSpacing: '0.18em' }}>The founder</span>
                        </div>
                        <h2 className="font-bold leading-[1.1]" style={{ ...serif, fontSize: 'clamp(2rem, 4vw, 2.9rem)', color: '#2D1A0E' }}>
                            I grew up in Phú Yên, <em style={{ color: '#D97706' }}>where the sun reaches Vietnam first.</em>
                        </h2>

                        <div className="mt-8 space-y-6 text-[17.5px] leading-[1.85]" style={{ color: 'rgba(45,26,14,0.8)' }}>
                            <p className="first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[64px] first-letter:font-bold first-letter:leading-[0.85] first-letter:text-[#D97706] first-letter:[font-family:'Playfair_Display',serif]">
                                My mother cooked every morning before the rest of the house woke up. Bánh canh hẹ — thick rice noodles in a clear pork broth, finished with a fistful of raw garlic chives — was Sunday breakfast. Pork braised in coconut water with eggs was the smell of every Tết. I did not know any of this was special. It was simply what food was.
                            </p>
                            <p>
                                Then I moved to Germany and learned what food was to everyone else. Good food — genuinely good — but not mine. I searched for bánh canh hẹ in English and found nothing. I searched for gà lá é, the chicken dish built around a herb that barely exists outside central Vietnam, and found nothing again.
                            </p>
                            <p style={{ color: '#2D1A0E', fontWeight: 500 }}>That was when I understood I had to write it down.</p>

                            <blockquote className="my-10 rounded-2xl px-7 py-6" style={{ background: '#F5EDE3', borderLeft: '3px solid #D97706' }}>
                                <p className="text-[22px] italic leading-[1.5]" style={{ ...serif, color: '#4B2E1A' }}>
                                    “FlavorNest is my attempt — in spare evenings and weekends — to bring that food into writing, and to share it with anyone willing to stand at a stove for a few hours.”
                                </p>
                            </blockquote>

                            <p>
                                I am not a professional chef, and I am not a food scientist. I am someone who misses home and has learned to cook his way back to it. Every recipe here was tested in my kitchen in Waltershausen, usually late at night, often on the phone with my mother eight thousand kilometres away.
                            </p>
                        </div>

                        <div className="mt-10 flex items-center gap-4 border-t border-[rgba(75,46,26,0.1)] pt-6">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full text-[16px] font-bold text-white" style={{ ...serif, background: 'linear-gradient(135deg,#D97706,#4B2E1A)' }}>QH</div>
                            <div>
                                <p className="text-[15px] font-semibold" style={{ color: '#2D1A0E' }}>Nguyen Quan Huy</p>
                                <p className="text-[13px]" style={{ color: 'rgba(75,46,26,0.55)' }}>Founder &amp; writer · Waltershausen, Thuringia</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══ TASTE OF HOME ═══ */}
            <section className="px-5 pb-24 sm:px-6" aria-labelledby="home-dishes">
                <div className="mx-auto max-w-[1100px]">
                    <motion.div {...reveal()} className="mb-8 flex flex-wrap items-end justify-between gap-4">
                        <h2 id="home-dishes" className="font-bold leading-tight" style={{ ...serif, fontSize: 'clamp(1.8rem, 3.6vw, 2.5rem)', color: '#2D1A0E' }}>
                            Where it all began: <em style={{ color: '#D97706' }}>Phú Yên on a plate</em>
                        </h2>
                        <Link href="/stories/phu-yen-cuisine" className="group flex items-center gap-1.5 text-[14px] font-semibold transition-colors hover:text-[#D97706]" style={{ color: '#4B2E1A' }}>
                            Read about Phú Yên cuisine <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                    </motion.div>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                        {HOME_DISHES.map((d, i) => (
                            <motion.div key={d.slug} {...reveal(i * 0.07)}>
                                <Link href={`/recipes/${d.slug}`} className="group block outline-none focus-visible:ring-2 focus-visible:ring-[#D97706] rounded-2xl" style={{ textDecoration: 'none' }}>
                                    <div className="relative aspect-square overflow-hidden rounded-2xl" style={{ background: '#EFE7DC' }}>
                                        <Image src={d.image} alt={d.name} fill sizes="(max-width:1024px) 50vw, 260px" className="object-cover transition-transform duration-700 group-hover:scale-[1.06]" />
                                    </div>
                                    <p className="mt-3 text-[18px] font-bold transition-colors group-hover:text-[#B45309]" style={{ ...serif, color: '#2D1A0E' }}>{d.name}</p>
                                    <p className="text-[13px]" style={{ color: 'rgba(75,46,26,0.55)' }}>{d.note}</p>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ WHY THIS EXISTS ═══ */}
            <section className="px-5 py-24 sm:px-6 lg:py-28" style={{ background: '#2D1A0E' }}>
                <div className="mx-auto max-w-[1100px]">
                    <motion.div {...reveal()} className="max-w-2xl">
                        <div className="mb-5 flex items-center gap-2">
                            <span className="h-px w-8" style={{ background: '#D97706' }} />
                            <span className="text-[11px] font-bold uppercase" style={{ color: '#F59E0B', letterSpacing: '0.18em' }}>Why this exists</span>
                        </div>
                        <h2 className="font-bold leading-[1.1] text-white" style={{ ...serif, fontSize: 'clamp(2rem, 4.6vw, 3.2rem)' }}>
                            Some of Vietnam’s best dishes <em style={{ color: '#F59E0B' }}>have never been written down.</em>
                        </h2>
                        <p className="mt-6 text-[17px] leading-[1.8]" style={{ color: 'rgba(245,237,227,0.68)' }}>
                            They live in grandmothers’ hands and village kitchens — in the muscle memory of cooks who never needed a recipe because they have made the same dish every week for forty years. When those cooks are gone, the dish goes with them.
                        </p>
                    </motion.div>

                    <div className="mt-14 grid gap-4 sm:grid-cols-2">
                        {VALUES.map(({ Icon, title, body }, i) => (
                            <motion.div
                                key={title}
                                {...reveal(i * 0.07)}
                                className="rounded-3xl p-7 transition-colors hover:bg-white/[0.07]"
                                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                            >
                                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl" style={{ background: 'rgba(217,119,6,0.16)', color: '#F59E0B' }}>
                                    <Icon size={21} />
                                </span>
                                <h3 className="text-[20px] font-bold text-white" style={serif}>{title}</h3>
                                <p className="mt-2.5 text-[15px] leading-[1.75]" style={{ color: 'rgba(245,237,227,0.6)' }}>{body}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ JOURNEY ═══ */}
            <section className="mx-auto max-w-[760px] px-5 py-24 sm:px-6 lg:py-28">
                <motion.h2 {...reveal()} className="mb-14 font-bold leading-tight" style={{ ...serif, fontSize: 'clamp(1.9rem, 4vw, 2.6rem)', color: '#2D1A0E' }}>
                    How we got here
                </motion.h2>
                <ol className="relative border-l border-[rgba(75,46,26,0.14)] pl-8 sm:pl-10">
                    {JOURNEY.map((j, i) => (
                        <motion.li key={j.when} {...reveal(i * 0.08)} className="relative pb-12 last:pb-0">
                            <span className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full sm:-left-[49px]" style={{ background: '#FBF8F4', border: '2px solid #D97706' }}>
                                <span className="h-2 w-2 rounded-full" style={{ background: i === JOURNEY.length - 1 ? '#D97706' : 'transparent' }} />
                            </span>
                            <p className="text-[12px] font-bold uppercase" style={{ color: '#D97706', letterSpacing: '0.12em' }}>{j.when}</p>
                            <p className="mt-2 text-[16.5px] leading-[1.8]" style={{ color: 'rgba(45,26,14,0.78)' }}>{j.text}</p>
                        </motion.li>
                    ))}
                </ol>
            </section>

            {/* ═══ CTA ═══ */}
            <section className="px-5 pb-24 sm:px-6">
                <motion.div
                    {...reveal()}
                    className="mx-auto flex max-w-[1100px] flex-col items-start gap-6 rounded-[28px] px-8 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-12"
                    style={{ background: '#F5EDE3' }}
                >
                    <div>
                        <h2 className="text-[28px] font-bold leading-tight sm:text-[32px]" style={{ ...serif, color: '#2D1A0E' }}>Ready to cook something real?</h2>
                        <p className="mt-2 text-[15px]" style={{ color: 'rgba(75,46,26,0.65)' }}>Start with the dishes I miss most — the ones from home.</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/recipes" className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#B45309]" style={{ background: '#D97706', textDecoration: 'none' }}>
                            Browse recipes <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link href="/stories" className="inline-flex items-center rounded-full border border-[rgba(75,46,26,0.2)] bg-white px-7 py-3.5 text-[14px] font-semibold transition-colors hover:border-[#2D1A0E]" style={{ color: '#2D1A0E', textDecoration: 'none' }}>
                            Read the stories
                        </Link>
                    </div>
                </motion.div>
            </section>
        </main>
    )
}
