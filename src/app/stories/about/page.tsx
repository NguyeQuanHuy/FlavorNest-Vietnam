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
                                FlavorNest began on a cold evening in Thuringia in 2026. I was
                                trying to recreate my mother's bánh canh from memory, failing,
                                searching on Internet how to cook but it was so complicated.
                                So I created this website in order to give people the easier visually tutorials to make Vietnamese foods (or Asian foods).
                                Thanks for reading and discovering about more recipes!
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
                    }}
                >
                    
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
                                margin: '0 0 20px',
                                lineHeight: 1.15,
                            }}
                        >
                            Nguyen Quan Huy
                        </h3>
                        <p
                            style={{
                                fontSize: 16,
                                color: 'rgba(75,46,26,0.72)',
                                lineHeight: 1.85,
                                margin: '0 0 16px',
                            }}
                        >
                            Born and raised in Phú Yên, in central Vietnam. I came to Germany in 2019 — carrying with me memories of my mother’s home-cooked meals, early-morning bowls of *bánh canh hẹ*, and pots of *thịt kho tàu* during Tết. FlavorNest is my way of preserving those things — writing them down before they fade from memory.
                        </p>
                        <p
                            style={{
                                fontSize: 16,
                                color: 'rgba(75,46,26,0.72)',
                                lineHeight: 1.85,
                                margin: '0 0 20px',
                            }}
                        >
                            Each recipe here has been tested in a real kitchen — my own kitchen in Waltershausen, Thuringia — with four burners and ingredients sourced from the nearest Asian supermarket. No shortcuts, no Westernization. If the original takes 10 hours, I write the 10-hour version.
                        </p>
                        <blockquote
                            style={{
                                borderLeft: '3px solid #D97706',
                                margin: '0 0 20px',
                                padding: '4px 0 4px 20px',
                            }}
                        >
                            <p
                                style={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: 19,
                                    fontStyle: 'italic',
                                    color: '#4B2E1A',
                                    lineHeight: 1.6,
                                    margin: 0,
                                }}
                            >
                               "There are dishes that exist only in a grandmother’s memory. FlavorNest is a small attempt to write them down — before it’s too late."
                            </p>
                        </blockquote>
                        <p
                            style={{
                                fontSize: 14,
                                color: 'rgba(75,46,26,0.5)',
                                fontStyle: 'italic',
                                margin: 0,
                                lineHeight: 1.7,
                            }}
                        >
                          Currently writing from Waltershausen, Thuringia. Still learning. Still calling my mother when a recipe doesn’t turn out right.
                        </p>
                    </div>
                </motion.div>
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
