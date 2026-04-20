'use client';

/**
 * FlavorNest Vietnam — About Page
 * src/app/stories/about/page.tsx
 *
 * Story angle: A Vietnamese man from Phú Yên, now living in Germany,
 * documenting his home country's cuisine — starting with the food he misses most.
 * Real story. Honest numbers. Emotional without pretending.
 */

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// ── Values: what FlavorNest actually stands for ──
const VALUES = [
    {
        icon: '🏠',
        title: 'The Home Kitchen Test',
        body: 'Every recipe is tested in a real home kitchen with a normal stove — mine, here in Germany. If it needs equipment a home cook doesn\'t have, it doesn\'t make it here.',
    },
    {
        icon: '📖',
        title: 'Story Before Recipe',
        body: 'Every dish comes with context — where it\'s from, who taught it, why it matters. A recipe without story is just a list of ingredients.',
    },
    {
        icon: '🌱',
        title: 'Before It Disappears',
        body: 'Younger generations are moving to cities, eating faster, cooking less. Some traditional recipes exist only in a grandmother\'s memory. FlavorNest is, in small part, an attempt to write them down.',
    },
    {
        icon: '🤝',
        title: 'No Shortcuts, No Fakes',
        body: 'We don\'t substitute fish sauce with soy. We don\'t "Westernize" recipes for easier ingredients. If the real version takes 10 hours, we write the 10-hour version — and tell you honestly.',
    },
];

// ── Timeline: real milestones, real dates ──
const JOURNEY = [
    {
        year: '2023',
        event: 'The first draft of FlavorNest was written on a laptop in a small apartment in Thuringia, Germany — between shifts, between homesickness.',
    },
    {
        year: '2024',
        event: 'The first twenty recipes went live. Most of them were dishes from Phú Yên — the ones I missed the most.',
    },
    {
        year: '2025',
        event: 'The project expanded to Northern and Southern Vietnamese cuisine. Longform stories about pho, bánh mì, and bánh xèo were added.',
    },
    {
        year: '2026',
        event: 'Still writing. Still testing. Still one person in a kitchen, trying to get it right.',
    },
];

// ── Animation helper ──
const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

export default function AboutPage() {
    return (
        <main
            style={{
                minHeight: '100vh',
                background: '#FAFAF7',
                fontFamily: "'DM Sans', system-ui, sans-serif",
            }}
        >
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600;1,700&display=swap');
                * { box-sizing: border-box; }
            `}</style>

            {/* ════════════════════════════════════════
                HERO — Dark, intimate, full-bleed
            ═══════════════════════════════════════ */}
            <section
                style={{
                    position: 'relative',
                    minHeight: '90vh',
                    display: 'flex',
                    alignItems: 'center',
                    overflow: 'hidden',
                    background: '#1A0E07',
                }}
            >
                {/* Hero background image */}
                <div style={{ position: 'absolute', inset: 0 }}>
                    <Image
                        src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1920&q=85"
                        alt="Steaming bowl of Vietnamese food"
                        fill
                        priority
                        quality={85}
                        style={{ objectFit: 'cover', opacity: 0.45 }}
                        sizes="100vw"
                    />
                    <div
                        style={{
                            position: 'absolute',
                            inset: 0,
                            background:
                                'linear-gradient(180deg, rgba(26,14,7,0.5) 0%, rgba(26,14,7,0.85) 100%)',
                        }}
                    />
                </div>

                {/* Hero content */}
                <div
                    style={{
                        position: 'relative',
                        maxWidth: 1100,
                        margin: '0 auto',
                        padding: '100px 24px 60px',
                        width: '100%',
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 10,
                                marginBottom: 28,
                            }}
                        >
                            <div
                                style={{
                                    width: 36,
                                    height: 2,
                                    background: '#D97706',
                                }}
                            />
                            <span
                                style={{
                                    fontSize: 12,
                                    fontWeight: 700,
                                    letterSpacing: '0.24em',
                                    color: '#D97706',
                                    textTransform: 'uppercase',
                                }}
                            >
                                About FlavorNest
                            </span>
                        </div>

                        <h1
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: 'clamp(48px, 8vw, 104px)',
                                fontWeight: 700,
                                color: 'white',
                                margin: '0 0 32px',
                                lineHeight: 0.95,
                                letterSpacing: '-0.02em',
                            }}
                        >
                            The food I grew up with
                            <br />
                            <span
                                style={{
                                    color: '#D97706',
                                    fontStyle: 'italic',
                                    fontWeight: 400,
                                }}
                            >
                                deserves to be written down.
                            </span>
                        </h1>

                        <p
                            style={{
                                color: 'rgba(255,255,255,0.65)',
                                fontSize: 'clamp(17px, 2vw, 20px)',
                                maxWidth: 640,
                                lineHeight: 1.7,
                                margin: '0 0 40px',
                            }}
                        >
                            FlavorNest is a small, honest project. One person, one kitchen,
                            writing down the recipes of a country I left — before I, or
                            anyone else, forgets them.
                        </p>

                        {/* Scroll cue */}
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 12,
                                color: 'rgba(255,255,255,0.4)',
                                fontSize: 13,
                                fontWeight: 500,
                                letterSpacing: '0.12em',
                                textTransform: 'uppercase',
                            }}
                        >
                            <span>Read the story</span>
                            <span style={{ fontSize: 18 }}>↓</span>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ════════════════════════════════════════
                THE STORY — Long-form, two-column
            ═══════════════════════════════════════ */}
            <section
                style={{
                    maxWidth: 1200,
                    margin: '0 auto',
                    padding: '100px 24px 80px',
                }}
            >
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
                        gap: 80,
                        alignItems: 'start',
                    }}
                >
                    {/* Left: text */}
                    <motion.div {...fadeUp(0)}>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 12,
                                marginBottom: 20,
                            }}
                        >
                            <div style={{ width: 28, height: 1.5, background: '#D97706' }} />
                            <span
                                style={{
                                    fontSize: 11,
                                    fontWeight: 700,
                                    letterSpacing: '0.2em',
                                    color: '#D97706',
                                    textTransform: 'uppercase',
                                }}
                            >
                                The Beginning
                            </span>
                        </div>

                        <h2
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: 'clamp(32px, 5vw, 52px)',
                                fontWeight: 700,
                                color: '#2D1A0E',
                                margin: '0 0 36px',
                                lineHeight: 1.08,
                            }}
                        >
                            It started with
                            <br />
                            <span style={{ color: '#D97706', fontStyle: 'italic' }}>
                                a bowl of bánh canh hẹ.
                            </span>
                        </h2>

                        <div
                            style={{
                                fontSize: 17,
                                lineHeight: 1.85,
                                color: '#4B2E1A',
                                fontFamily:
                                    'Georgia, "Iowan Old Style", "Palatino Linotype", serif',
                            }}
                        >
                            <p style={{ margin: '0 0 24px' }}>
                                I grew up in Phú Yên — a small coastal province in central
                                Vietnam that most food writers skip when they talk about
                                Vietnamese cuisine. We don't have phở or bánh mì on every
                                corner. What we have is the quiet, specific food of a fishing
                                coast: bánh canh hẹ at dawn, mắm cá cơm fermenting in clay jars
                                on the porch, bún bắp eaten standing up on market days.
                            </p>

                            <p style={{ margin: '0 0 24px' }}>
                                When I moved to Germany, I assumed I could find these flavors
                                somewhere. I couldn't. I could find pho, yes — a slightly
                                softened version of it. I could find spring rolls. But the food
                                of my childhood, the food of my mother's kitchen, was invisible.
                                Nobody was writing it down in English. Nobody outside the
                                province knew it existed.
                            </p>

                            <p style={{ margin: 0 }}>
                                FlavorNest began on a cold evening in Thuringia in 2023. I was
                                trying to recreate my mother's bánh canh from memory, failing,
                                calling her on WhatsApp to ask her how to temper the broth.
                                Halfway through the conversation I realized: if I don't write
                                this down, properly and publicly, nobody will.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right: image */}
                    <motion.div
                        {...fadeUp(0.15)}
                        style={{
                            position: 'relative',
                            height: 640,
                            borderRadius: 24,
                            overflow: 'hidden',
                        }}
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=900&q=85"
                            alt="Vietnamese countryside kitchen"
                            fill
                            quality={85}
                            sizes="(max-width:768px) 100vw, 50vw"
                            style={{ objectFit: 'cover' }}
                        />
                        <div
                            style={{
                                position: 'absolute',
                                inset: 0,
                                background:
                                    'linear-gradient(to top, rgba(45,26,14,0.35) 0%, transparent 55%)',
                            }}
                        />
                        {/* Quote overlay */}
                        <div
                            style={{
                                position: 'absolute',
                                bottom: 28,
                                left: 28,
                                right: 28,
                                background: 'rgba(255,255,255,0.94)',
                                backdropFilter: 'blur(14px)',
                                borderRadius: 18,
                                padding: '22px 24px',
                            }}
                        >
                            <p
                                style={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: 16,
                                    fontStyle: 'italic',
                                    color: '#2D1A0E',
                                    margin: 0,
                                    lineHeight: 1.55,
                                }}
                            >
                                "The best food in Vietnam isn't in five-star restaurants. It's
                                in the kitchens of mothers and grandmothers — in the pots they
                                never measure, in the instincts built over forty years."
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ════════════════════════════════════════
                WHY IT MATTERS — Second emotional beat
            ═══════════════════════════════════════ */}
            <section
                style={{
                    background: '#F5EDE3',
                    padding: '100px 24px',
                }}
            >
                <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
                    <motion.div {...fadeUp(0)}>
                        <div
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 12,
                                marginBottom: 24,
                            }}
                        >
                            <div style={{ width: 28, height: 1.5, background: '#D97706' }} />
                            <span
                                style={{
                                    fontSize: 11,
                                    fontWeight: 700,
                                    letterSpacing: '0.2em',
                                    color: '#D97706',
                                    textTransform: 'uppercase',
                                }}
                            >
                                Why It Matters
                            </span>
                            <div style={{ width: 28, height: 1.5, background: '#D97706' }} />
                        </div>

                        <h2
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: 'clamp(32px, 5vw, 48px)',
                                fontWeight: 700,
                                color: '#2D1A0E',
                                margin: '0 0 40px',
                                lineHeight: 1.2,
                            }}
                        >
                            Some recipes live only in memory.
                            <br />
                            <span
                                style={{
                                    color: '#166534',
                                    fontStyle: 'italic',
                                    fontWeight: 600,
                                }}
                            >
                                We want to keep them alive.
                            </span>
                        </h2>

                        <p
                            style={{
                                fontSize: 18,
                                lineHeight: 1.8,
                                color: 'rgba(75,46,26,0.75)',
                                margin: 0,
                                fontFamily: 'Georgia, serif',
                                fontStyle: 'italic',
                            }}
                        >
                            Every year, more young Vietnamese leave their villages for the
                            cities. They eat faster. They cook less. The recipes their
                            grandmothers knew by heart — the ones that were never written down
                            because they lived in hands, in pots, in instincts — are beginning
                            to thin out.
                            <br />
                            <br />
                            FlavorNest is not going to stop that. But it can, in small
                            measurable ways, slow it down. One recipe, tested honestly, written
                            clearly, made accessible to anyone with an internet connection and a
                            stove.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ════════════════════════════════════════
                VALUES
            ═══════════════════════════════════════ */}
            <section
                style={{
                    maxWidth: 1200,
                    margin: '0 auto',
                    padding: '100px 24px 60px',
                }}
            >
                <motion.div {...fadeUp(0)} style={{ marginBottom: 48 }}>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 12,
                            marginBottom: 14,
                        }}
                    >
                        <div style={{ width: 28, height: 1.5, background: '#D97706' }} />
                        <span
                            style={{
                                fontSize: 11,
                                fontWeight: 700,
                                letterSpacing: '0.2em',
                                color: '#D97706',
                                textTransform: 'uppercase',
                            }}
                        >
                            What We Stand For
                        </span>
                    </div>
                    <h2
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: 'clamp(32px, 4.5vw, 48px)',
                            fontWeight: 700,
                            color: '#2D1A0E',
                            margin: 0,
                        }}
                    >
                        Four promises we keep.
                    </h2>
                </motion.div>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: 20,
                    }}
                >
                    {VALUES.map((v, i) => (
                        <motion.div
                            key={v.title}
                            {...fadeUp(i * 0.1)}
                            style={{
                                background: 'white',
                                borderRadius: 22,
                                padding: '32px 28px',
                                border: '1px solid rgba(75,46,26,0.07)',
                                boxShadow: '0 2px 14px rgba(75,46,26,0.04)',
                                transition: 'transform 0.3s, box-shadow 0.3s',
                            }}
                        >
                            <div style={{ fontSize: 34, marginBottom: 18 }}>{v.icon}</div>
                            <h3
                                style={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: 20,
                                    fontWeight: 700,
                                    color: '#2D1A0E',
                                    margin: '0 0 12px',
                                }}
                            >
                                {v.title}
                            </h3>
                            <p
                                style={{
                                    fontSize: 14.5,
                                    color: 'rgba(75,46,26,0.68)',
                                    lineHeight: 1.8,
                                    margin: 0,
                                }}
                            >
                                {v.body}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ════════════════════════════════════════
                THE PERSON BEHIND — Solo, honest
            ═══════════════════════════════════════ */}
            <section
                style={{
                    maxWidth: 1000,
                    margin: '0 auto',
                    padding: '80px 24px',
                }}
            >
                <motion.div
                    {...fadeUp(0)}
                    style={{
                        background: 'white',
                        borderRadius: 28,
                        padding: 'clamp(32px, 5vw, 56px)',
                        border: '1px solid rgba(75,46,26,0.07)',
                        boxShadow: '0 4px 28px rgba(75,46,26,0.06)',
                        display: 'grid',
                        gridTemplateColumns: 'auto 1fr',
                        gap: 40,
                        alignItems: 'center',
                    }}
                >
                    {/* Photo */}
                    <div
                        style={{
                            position: 'relative',
                            width: 180,
                            height: 180,
                            borderRadius: '50%',
                            overflow: 'hidden',
                            flexShrink: 0,
                            boxShadow: '0 8px 24px rgba(75,46,26,0.15)',
                        }}
                    >
                        <Image
                            src="/images/team/huy-nguyen.jpg"
                            alt="Quan Huy Nguyen, founder of FlavorNest"
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes="180px"
                        />
                    </div>

                    {/* Bio */}
                    <div>
                        <div
                            style={{
                                fontSize: 11,
                                fontWeight: 700,
                                letterSpacing: '0.2em',
                                color: '#D97706',
                                textTransform: 'uppercase',
                                marginBottom: 10,
                            }}
                        >
                            Founder & Writer
                        </div>
                        <h3
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: 'clamp(26px, 3.5vw, 36px)',
                                fontWeight: 700,
                                color: '#2D1A0E',
                                margin: '0 0 16px',
                                lineHeight: 1.15,
                            }}
                        >
                            Huy Nguyen
                        </h3>
                        <p
                            style={{
                                fontSize: 16,
                                color: 'rgba(75,46,26,0.72)',
                                lineHeight: 1.8,
                                margin: '0 0 16px',
                            }}
                        >
                            Born in Phú Yên, Vietnam. Moved to Germany in my twenties to the family
                            and never quite stopped missing the food I grew up with. FlavorNest
                            is my attempt, in spare evenings and weekends, to bring that food
                            into writing — and to share it with anyone willing to stand at a
                            stove for a few hours.
                        </p>
                        <p
                            style={{
                                fontSize: 14,
                                color: 'rgba(75,46,26,0.55)',
                                fontStyle: 'italic',
                                margin: 0,
                                lineHeight: 1.7,
                            }}
                        >
                            Currently writing from Gotha, Thuringia. Cooking on a small
                            four-burner stove. Still learning.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* ════════════════════════════════════════
                JOURNEY — Timeline
            ═══════════════════════════════════════ */}
            <section
                style={{
                    maxWidth: 900,
                    margin: '0 auto',
                    padding: '60px 24px 80px',
                }}
            >
                <motion.div {...fadeUp(0)} style={{ marginBottom: 48, textAlign: 'center' }}>
                    <div
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 12,
                            marginBottom: 14,
                        }}
                    >
                        <div style={{ width: 28, height: 1.5, background: '#D97706' }} />
                        <span
                            style={{
                                fontSize: 11,
                                fontWeight: 700,
                                letterSpacing: '0.2em',
                                color: '#D97706',
                                textTransform: 'uppercase',
                            }}
                        >
                            How We Got Here
                        </span>
                        <div style={{ width: 28, height: 1.5, background: '#D97706' }} />
                    </div>
                    <h2
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: 'clamp(30px, 4vw, 44px)',
                            fontWeight: 700,
                            color: '#2D1A0E',
                            margin: 0,
                        }}
                    >
                        A short, honest timeline.
                    </h2>
                </motion.div>

                <div style={{ position: 'relative', paddingLeft: 40 }}>
                    <div
                        style={{
                            position: 'absolute',
                            left: 16,
                            top: 8,
                            bottom: 8,
                            width: 2,
                            background: 'rgba(217,119,6,0.25)',
                            borderRadius: 100,
                        }}
                    />
                    {JOURNEY.map((m, i) => (
                        <motion.div
                            key={m.year}
                            {...fadeUp(i * 0.08)}
                            style={{ position: 'relative', marginBottom: 28 }}
                        >
                            <div
                                style={{
                                    position: 'absolute',
                                    left: -31,
                                    top: 6,
                                    width: 14,
                                    height: 14,
                                    borderRadius: '50%',
                                    background: '#D97706',
                                    border: '3px solid #FAFAF7',
                                    boxShadow: '0 0 0 2px rgba(217,119,6,0.3)',
                                }}
                            />
                            <div
                                style={{
                                    background: 'white',
                                    borderRadius: 16,
                                    padding: '20px 24px',
                                    border: '1px solid rgba(75,46,26,0.07)',
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: 20,
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "'Playfair Display', serif",
                                        fontSize: 22,
                                        fontWeight: 700,
                                        color: '#D97706',
                                        flexShrink: 0,
                                        lineHeight: 1.3,
                                    }}
                                >
                                    {m.year}
                                </span>
                                <p
                                    style={{
                                        fontSize: 15,
                                        color: 'rgba(75,46,26,0.72)',
                                        margin: 0,
                                        lineHeight: 1.7,
                                    }}
                                >
                                    {m.event}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ════════════════════════════════════════
                CTA — Warm, inviting, not pushy
            ═══════════════════════════════════════ */}
            <section
                style={{
                    maxWidth: 1200,
                    margin: '0 auto',
                    padding: '60px 24px 100px',
                }}
            >
                <motion.div
                    {...fadeUp(0)}
                    style={{
                        background:
                            'linear-gradient(135deg, #2D1A0E 0%, #4B2E1A 50%, #166534 130%)',
                        borderRadius: 32,
                        padding: 'clamp(48px, 7vw, 72px)',
                        textAlign: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                >
                    {/* Decorative */}
                    <div
                        style={{
                            position: 'absolute',
                            top: -60,
                            right: -60,
                            width: 200,
                            height: 200,
                            borderRadius: '50%',
                            background: 'rgba(217,119,6,0.1)',
                            filter: 'blur(40px)',
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            bottom: -40,
                            left: -40,
                            width: 160,
                            height: 160,
                            borderRadius: '50%',
                            background: 'rgba(22,101,52,0.15)',
                            filter: 'blur(40px)',
                        }}
                    />

                    <div style={{ position: 'relative' }}>
                        <h2
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: 'clamp(30px, 4.5vw, 48px)',
                                fontWeight: 700,
                                color: 'white',
                                margin: '0 0 20px',
                                lineHeight: 1.15,
                            }}
                        >
                            Come cook with us.
                            <br />
                            <span
                                style={{
                                    color: '#D97706',
                                    fontStyle: 'italic',
                                    fontWeight: 400,
                                }}
                            >
                                No experience needed.
                            </span>
                        </h2>
                        <p
                            style={{
                                color: 'rgba(255,255,255,0.68)',
                                fontSize: 17,
                                maxWidth: 540,
                                margin: '0 auto 40px',
                                lineHeight: 1.75,
                            }}
                        >
                            Start with a recipe that sounds good. If it turns out well, try
                            another. That's how a home cook is made — and that's how we build
                            this together.
                        </p>
                        <div
                            style={{
                                display: 'flex',
                                gap: 14,
                                justifyContent: 'center',
                                flexWrap: 'wrap',
                            }}
                        >
                            <Link
                                href="/recipes"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: 8,
                                    background: '#D97706',
                                    color: 'white',
                                    fontSize: 15,
                                    fontWeight: 700,
                                    padding: '16px 32px',
                                    borderRadius: 100,
                                    textDecoration: 'none',
                                    transition: 'all 0.25s',
                                    boxShadow: '0 8px 24px rgba(217,119,6,0.35)',
                                }}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLAnchorElement).style.background = '#B45309';
                                    (e.currentTarget as HTMLAnchorElement).style.transform =
                                        'translateY(-2px)';
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLAnchorElement).style.background = '#D97706';
                                    (e.currentTarget as HTMLAnchorElement).style.transform = 'none';
                                }}
                            >
                                Browse the recipes →
                            </Link>
                            <Link
                                href="/stories"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: 8,
                                    background: 'rgba(255,255,255,0.08)',
                                    color: 'white',
                                    fontSize: 15,
                                    fontWeight: 600,
                                    padding: '16px 32px',
                                    borderRadius: 100,
                                    textDecoration: 'none',
                                    border: '1px solid rgba(255,255,255,0.15)',
                                    transition: 'background 0.2s',
                                }}
                                onMouseEnter={e =>
                                ((e.currentTarget as HTMLAnchorElement).style.background =
                                    'rgba(255,255,255,0.14)')
                                }
                                onMouseLeave={e =>
                                ((e.currentTarget as HTMLAnchorElement).style.background =
                                    'rgba(255,255,255,0.08)')
                                }
                            >
                                Read the stories
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
