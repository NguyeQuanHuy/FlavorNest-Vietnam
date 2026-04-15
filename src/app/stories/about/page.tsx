'use client'

/**
 * FlavorNest Vietnam — About / Behind the Scenes Page
 * src/app/stories/about/page.tsx
 */

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const TEAM = [
    {
        name: 'Mai Linh Nguyen',
        role: 'Head of Recipes & Food Writing',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
        bio: 'Born in Hanoi, raised between her grandmother\'s kitchen and Saigon\'s street corners. Mai Linh has spent 15 years documenting traditional Vietnamese recipes before they disappear.',
        region: 'Northern Vietnam',
    },
    {
        name: 'Huy Nguyen',
        role: 'Food Photographer & Visual Director',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
        bio: 'Shot food for hotels and restaurants across Southeast Asia before realising the best food he had ever seen was on plastic stools in Hội An. Now he photographs only what he would eat himself.',
        region: 'Central Vietnam',
    },
    {
        name: 'Huong Thu Pham',
        role: 'Recipe Testing & Cultural Research',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
        bio: 'A trained chef who left fine dining to research how Vietnamese home cooks actually cook — without measurements, without timers, and with a profound intuition built over decades.',
        region: 'Southern Vietnam',
    },
]

const MILESTONES = [
    { year: '2022', event: 'FlavorNest founded in a Saigon apartment with 12 recipes and a phone camera' },
    { year: '2023', event: 'First 50 recipes published. 10,000 monthly visitors. Zero paid promotion.' },
    { year: '2024', event: 'Travel guide launched. Partnerships with home cooks across all three regions.' },
    { year: '2025', event: '100+ recipes. Community of 50,000+ food lovers across 40 countries.' },
]

const VALUES = [
    {
        icon: '🏠',
        title: 'Home Kitchen First',
        body: 'Every recipe we publish has been tested in a real home kitchen with a real home stove. If it requires a commercial burner or a $500 knife, it is not on FlavorNest.',
    },
    {
        icon: '📖',
        title: 'Story Before Recipe',
        body: 'We believe a recipe without context is just a set of instructions. Every dish we share comes with the story of where it came from, who made it first, and why it matters.',
    },
    {
        icon: '🤝',
        title: 'Made With Vietnamese Cooks',
        body: 'We do not invent. We document, test, and amplify. Every recipe on FlavorNest was learned from a Vietnamese cook — a grandmother, a street vendor, a home cook who has been making the same dish for 40 years.',
    },
    {
        icon: '🌱',
        title: 'Preserving What Could Be Lost',
        body: 'Dozens of traditional Vietnamese dishes are disappearing as younger generations move to cities and simpler food. We are building the most complete archive of Vietnamese home cooking on the internet.',
    },
]

const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
})

export default function AboutPage() {
    return (
        <main style={{ minHeight: '100vh', background: '#FAFAF7', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600;1,700&display=swap');
                * { box-sizing: border-box; }
            `}</style>

            {/* HERO */}
            <section style={{ background: 'linear-gradient(135deg, #1A0E07 0%, #2D1A0E 100%)', padding: '120px 24px 80px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 60% 40%, rgba(217,119,6,0.08) 0%, transparent 55%)', pointerEvents: 'none' }} />
                <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
                    <nav style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, marginBottom: 28 }}>
                        {[['Home', '/'], ['Stories', '/stories'], ['Behind the Scenes', '']].map(([label, href], i) => (
                            <span key={label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                {i > 0 && <span style={{ color: 'rgba(255,255,255,0.2)' }}>›</span>}
                                {href ? <Link href={href} style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontWeight: 500 }}>{label}</Link>
                                    : <span style={{ color: '#D97706', fontWeight: 600 }}>{label}</span>}
                            </span>
                        ))}
                    </nav>

                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(217,119,6,0.12)', border: '1px solid rgba(217,119,6,0.25)', borderRadius: 100, padding: '7px 18px', marginBottom: 22 }}>
                        <span style={{ fontSize: 14 }}>🎬</span>
                        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#FBB040' }}>Our Food Journey</span>
                    </div>

                    <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(44px, 7vw, 90px)', fontWeight: 800, color: 'white', margin: '0 0 20px', lineHeight: 0.95 }}>
                        Behind<br /><span style={{ color: '#D97706', fontStyle: 'italic' }}>FlavorNest</span>
                    </h1>

                    <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 18, maxWidth: 560, lineHeight: 1.78, margin: '0 0 48px' }}>
                        We are not a restaurant, a magazine, or a TV show. We are a small team of people who believe Vietnamese home cooking is one of the great cuisines of the world — and that it deserves to be shared, documented, and celebrated.
                    </p>

                    {/* Stats */}
                    <div style={{ display: 'flex', gap: 0, flexWrap: 'wrap' }}>
                        {[
                            ['100+', 'Recipes Published'],
                            ['50K+', 'Monthly Readers'],
                            ['40', 'Countries Reached'],
                            ['3', 'Years of Research'],
                        ].map(([val, lbl], i) => (
                            <div key={lbl} style={{ borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.1)' : 'none', paddingLeft: i > 0 ? 28 : 0, paddingRight: 28, marginBottom: 12 }}>
                                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 30, fontWeight: 700, color: 'white', lineHeight: 1 }}>{val}</div>
                                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase', marginTop: 5 }}>{lbl}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* OUR STORY */}
            <section style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 24px 0' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 64, alignItems: 'center' }}>
                    <motion.div {...fadeUp(0)}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                            <div style={{ width: 28, height: 1.5, background: '#D97706' }} />
                            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#D97706', textTransform: 'uppercase' }}>Our Story</span>
                        </div>
                        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px,4vw,42px)', fontWeight: 700, color: '#2D1A0E', margin: '0 0 20px', lineHeight: 1.1 }}>
                            It started with a bowl of Pho at 6am in Hanoi
                        </h2>
                        <p style={{ fontSize: 16, color: 'rgba(75,46,26,0.65)', lineHeight: 1.8, margin: '0 0 18px' }}>
                            In 2022, our founder sat on a plastic stool on Bát Đàn street, eating what she still considers the best bowl of phở she has ever had. She asked the owner for the recipe. The owner laughed and said: "I have been making this for forty years. I do not have a recipe."
                        </p>
                        <p style={{ fontSize: 16, color: 'rgba(75,46,26,0.65)', lineHeight: 1.8, margin: '0 0 18px' }}>
                            That conversation became FlavorNest. We spent the next three years travelling through all three regions of Vietnam — sitting in kitchens, watching hands, asking questions, eating everything — to document the recipes that live in memory, not in books.
                        </p>
                        <p style={{ fontSize: 16, color: 'rgba(75,46,26,0.65)', lineHeight: 1.8, margin: 0 }}>
                            Every recipe on FlavorNest has been tested in a real home kitchen and written for people who want to cook real Vietnamese food — not a simplified version, not a substitution-heavy adaptation, but the real thing.
                        </p>
                    </motion.div>

                    <motion.div {...fadeUp(0.15)} style={{ position: 'relative', height: 520, borderRadius: 24, overflow: 'hidden' }}>
                        <Image
                            src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=900&q=85"
                            alt="FlavorNest team researching Vietnamese cuisine"
                            fill style={{ objectFit: 'cover' }} quality={85} sizes="50vw"
                        />
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(45,26,14,0.4) 0%, transparent 60%)' }} />
                        <div style={{ position: 'absolute', bottom: 24, left: 24, right: 24, background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(12px)', borderRadius: 16, padding: '16px 18px' }}>
                            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 14, fontStyle: 'italic', color: '#4B2E1A', margin: 0, lineHeight: 1.6 }}>
                                "We do not invent recipes. We find the people who already know them — and we write it down before the world forgets."
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* VALUES */}
            <section style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 24px 0' }}>
                <motion.div {...fadeUp(0)} style={{ marginBottom: 40 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                        <div style={{ width: 28, height: 1.5, background: '#D97706' }} />
                        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#D97706', textTransform: 'uppercase' }}>What We Stand For</span>
                    </div>
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px,4vw,42px)', fontWeight: 700, color: '#2D1A0E', margin: 0 }}>Our Values</h2>
                </motion.div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
                    {VALUES.map((v, i) => (
                        <motion.div key={v.title} {...fadeUp(i * 0.1)}
                            style={{ background: 'white', borderRadius: 20, padding: '28px', border: '1px solid rgba(75,46,26,0.07)', boxShadow: '0 2px 12px rgba(75,46,26,0.04)' }}>
                            <div style={{ fontSize: 28, marginBottom: 14 }}>{v.icon}</div>
                            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: '#2D1A0E', margin: '0 0 10px' }}>{v.title}</h3>
                            <p style={{ fontSize: 14, color: 'rgba(75,46,26,0.6)', lineHeight: 1.75, margin: 0 }}>{v.body}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* TEAM */}
            <section style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 24px 0' }}>
                <motion.div {...fadeUp(0)} style={{ marginBottom: 40 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                        <div style={{ width: 28, height: 1.5, background: '#D97706' }} />
                        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#D97706', textTransform: 'uppercase' }}>The People Behind It</span>
                    </div>
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px,4vw,42px)', fontWeight: 700, color: '#2D1A0E', margin: 0 }}>Our Team</h2>
                </motion.div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
                    {TEAM.map((member, i) => (
                        <motion.div key={member.name} {...fadeUp(i * 0.1)}
                            style={{ background: 'white', borderRadius: 24, overflow: 'hidden', border: '1px solid rgba(75,46,26,0.07)', boxShadow: '0 2px 16px rgba(75,46,26,0.05)' }}>
                            <div style={{ position: 'relative', height: 220, overflow: 'hidden', background: '#f0ebe4' }}>
                                <Image src={member.image} alt={member.name} fill style={{ objectFit: 'cover', objectPosition: 'top' }} sizes="33vw" quality={80} />
                                <div style={{ position: 'absolute', bottom: 14, left: 14, background: 'rgba(217,119,6,0.9)', color: 'white', fontSize: 10, fontWeight: 700, padding: '4px 12px', borderRadius: 100, letterSpacing: '0.06em' }}>
                                    {member.region}
                                </div>
                            </div>
                            <div style={{ padding: '20px 22px 24px' }}>
                                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 19, fontWeight: 700, color: '#2D1A0E', margin: '0 0 4px' }}>{member.name}</h3>
                                <p style={{ fontSize: 12, fontWeight: 600, color: '#D97706', letterSpacing: '0.05em', textTransform: 'uppercase', margin: '0 0 12px' }}>{member.role}</p>
                                <p style={{ fontSize: 13.5, color: 'rgba(75,46,26,0.62)', lineHeight: 1.72, margin: 0 }}>{member.bio}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* TIMELINE */}
            <section style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 24px 0' }}>
                <motion.div {...fadeUp(0)} style={{ marginBottom: 40 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                        <div style={{ width: 28, height: 1.5, background: '#D97706' }} />
                        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#D97706', textTransform: 'uppercase' }}>How We Got Here</span>
                    </div>
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px,4vw,42px)', fontWeight: 700, color: '#2D1A0E', margin: 0 }}>Our Journey</h2>
                </motion.div>
                <div style={{ position: 'relative', paddingLeft: 40 }}>
                    <div style={{ position: 'absolute', left: 16, top: 8, bottom: 8, width: 2, background: 'rgba(217,119,6,0.2)', borderRadius: 100 }} />
                    {MILESTONES.map((m, i) => (
                        <motion.div key={m.year} {...fadeUp(i * 0.1)} style={{ position: 'relative', marginBottom: 32 }}>
                            <div style={{ position: 'absolute', left: -31, top: 4, width: 14, height: 14, borderRadius: '50%', background: '#D97706', border: '3px solid #FAFAF7', boxShadow: '0 0 0 2px rgba(217,119,6,0.3)' }} />
                            <div style={{ background: 'white', borderRadius: 16, padding: '18px 22px', border: '1px solid rgba(75,46,26,0.07)', display: 'flex', alignItems: 'center', gap: 20 }}>
                                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: '#D97706', flexShrink: 0 }}>{m.year}</span>
                                <p style={{ fontSize: 15, color: 'rgba(75,46,26,0.7)', margin: 0, lineHeight: 1.6 }}>{m.event}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 24px 96px' }}>
                <motion.div {...fadeUp(0)} style={{ background: 'linear-gradient(135deg, #2D1A0E 0%, #4B2E1A 100%)', borderRadius: 28, padding: 'clamp(40px,6vw,64px)', textAlign: 'center' }}>
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px,4vw,44px)', fontWeight: 700, color: 'white', margin: '0 0 16px', lineHeight: 1.1 }}>
                        Ready to Cook?
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 17, maxWidth: 480, margin: '0 auto 32px', lineHeight: 1.72 }}>
                        Explore 100+ authentic Vietnamese recipes — from quick weeknight dinners to weekend feasts.
                    </p>
                    <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link href="/recipes" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#D97706', color: 'white', fontSize: 14, fontWeight: 700, padding: '14px 28px', borderRadius: 100, textDecoration: 'none', transition: 'background 0.2s' }}
                            onMouseEnter={e => (e.currentTarget.style.background = '#B45309')}
                            onMouseLeave={e => (e.currentTarget.style.background = '#D97706')}
                        >
                            Explore All Recipes →
                        </Link>
                        <Link href="/stories/travel" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.1)', color: 'white', fontSize: 14, fontWeight: 600, padding: '14px 28px', borderRadius: 100, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.15)', transition: 'background 0.2s' }}
                            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.16)')}
                            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
                        >
                            Travel Guide
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* FOOTER NAV */}
            <section style={{ background: '#2D1A0E', padding: '64px 24px 80px' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                        <div style={{ width: 28, height: 1.5, background: '#D97706' }} />
                        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#D97706', textTransform: 'uppercase' }}>More to Explore</span>
                    </div>
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, color: 'white', margin: '0 0 32px' }}>Everything on FlavorNest</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 12 }}>
                        {[
                            { label: 'All Recipes', emoji: '🍜', href: '/recipes' },
                            { label: 'Culinary Culture', emoji: '📖', href: '/stories/culture' },
                            { label: "Chef's Secrets", emoji: '👨‍🍳', href: '/stories/chef-secrets' },
                            { label: 'Travel Guide', emoji: '🗺️', href: '/stories/travel' },
                            { label: 'Northern Cuisine', emoji: '🏯', href: '/recipes/north' },
                            { label: 'Street Food', emoji: '🥢', href: '/recipes/street-food' },
                        ].map(item => (
                            <Link key={item.href} href={item.href}
                                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, padding: '18px 16px', borderRadius: 18, border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)', textDecoration: 'none', transition: 'all 0.2s' }}
                                onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = 'rgba(217,119,6,0.38)'; el.style.background = 'rgba(217,119,6,0.07)'; el.style.transform = 'translateY(-4px)'; }}
                                onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = 'rgba(255,255,255,0.08)'; el.style.background = 'rgba(255,255,255,0.03)'; el.style.transform = 'none'; }}
                            >
                                <span style={{ fontSize: 26 }}>{item.emoji}</span>
                                <span style={{ fontSize: 13, fontWeight: 600, color: 'white', textAlign: 'center' }}>{item.label}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
