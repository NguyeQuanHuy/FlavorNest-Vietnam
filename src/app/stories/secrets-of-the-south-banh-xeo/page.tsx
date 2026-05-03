'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

export default function SecretsOfTheSouthBanhXeoPage() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);
    const { scrollYProgress } = useScroll({
        target: mounted ? scrollRef : undefined,
        offset: ['start start', 'end end'],
    });

    const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);

    return (
        <article ref={scrollRef} style={{ backgroundColor: '#FAFAF7' }}>

            {/* Hero Section */}
            <motion.section
                style={{
                    position: 'relative',
                    height: '100vh',
                    minHeight: '600px',
                    overflow: 'hidden',
                    opacity: heroOpacity,
                }}
            >
                <motion.div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: 'url(/images/recipes/banh-xeo.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        scale: heroScale,
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background:
                            'linear-gradient(180deg, rgba(45,26,14,0.4) 0%, rgba(45,26,14,0.25) 35%, rgba(45,26,14,0.95) 100%)',
                    }}
                />

                <div
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: '0 24px 80px',
                    }}
                >
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 1 }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    marginBottom: '20px',
                                }}
                            >
                                <span
                                    style={{
                                        width: '8px',
                                        height: '8px',
                                        borderRadius: '50%',
                                        backgroundColor: '#D97706',
                                    }}
                                />
                                <span
                                    style={{
                                        color: '#D97706',
                                        fontSize: '12px',
                                        letterSpacing: '2px',
                                        fontWeight: 700,
                                        fontFamily: 'DM Sans, sans-serif',
                                    }}
                                >
                                    SAIGON STREET FOOD · LONGREAD
                                </span>
                            </div>

                            <h1
                                style={{
                                    fontFamily: 'Playfair Display, serif',
                                    color: '#FFF',
                                    fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
                                    fontWeight: 700,
                                    lineHeight: 1.05,
                                    letterSpacing: '-0.02em',
                                    marginBottom: '24px',
                                    maxWidth: '900px',
                                }}
                            >
                                Secrets of the South: Bánh Xèo
                            </h1>

                            <p
                                style={{
                                    fontFamily: 'Playfair Display, serif',
                                    fontStyle: 'italic',
                                    color: 'rgba(255,255,255,0.85)',
                                    fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                                    maxWidth: '720px',
                                    lineHeight: 1.5,
                                    marginBottom: '32px',
                                }}
                            >
                                The name itself is the recipe. <em>Xèo</em> — that violent,
                                joyful sizzle as rice batter meets a white-hot pan. This is the
                                sound of southern Vietnam.
                            </p>

                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '24px',
                                    color: 'rgba(255,255,255,0.6)',
                                    fontSize: '14px',
                                    fontFamily: 'DM Sans, sans-serif',
                                }}
                            >
                                <span>By Quan Huy Nguyen</span>
                                <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'currentColor' }} />
                                <span>March 18, 2026</span>
                                <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'currentColor' }} />
                                <span>5 min read</span>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 1, 0] }}
                    transition={{ delay: 1.5, duration: 2.5, repeat: Infinity }}
                    style={{
                        position: 'absolute',
                        bottom: '24px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        color: 'rgba(255,255,255,0.6)',
                        fontSize: '11px',
                        letterSpacing: '2px',
                        fontFamily: 'DM Sans, sans-serif',
                        textAlign: 'center',
                    }}
                >
                    SCROLL TO READ ↓
                </motion.div>
            </motion.section>

            {/* Article Body */}
            <div
                style={{
                    maxWidth: '720px',
                    margin: '0 auto',
                    padding: '80px 24px 40px',
                    fontFamily: 'Georgia, "Iowan Old Style", "Palatino Linotype", serif',
                    color: '#2D1A0E',
                }}
            >
                {/* Lead — onomatopoeia framing */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{
                        fontSize: '1.45rem',
                        lineHeight: 1.65,
                        fontStyle: 'italic',
                        color: '#4B2E1A',
                        marginBottom: '48px',
                        paddingLeft: '24px',
                        borderLeft: '3px solid #D97706',
                    }}
                >
                    "Xèoooo." The vendor pours the batter into the pan from a height of nearly
                    half a meter. The pan answers. It is a sound the entire street recognizes —
                    a sound that means the next forty seconds will produce something miraculous.
                </motion.p>

                <Section>
                    <DropCap>I</DropCap>n the Mekong Delta there is a saying that you can find
                    a good <em>bánh xèo</em> stall by closing your eyes. Look for the smoke,
                    the locals will tell you, but listen for the sizzle. A pan that is hot
                    enough — truly hot enough, almost dangerously so — does not simply hiss when
                    the batter hits it. It <em>sings</em>. The sound rises in pitch, peaks, then
                    fades into the soft crackle of crisping rice flour. This is the sound the
                    dish is named after. Everything else, in a sense, is detail.
                </Section>

                <Section>
                    The detail, of course, is where the argument lives. Ask ten Vietnamese cooks
                    how to make a proper bánh xèo and you will get eleven answers. Should the
                    batter contain coconut milk, or only water? Turmeric for color, or
                    egg yolk? Should the pan be cast iron, or one of those thin aluminum woks
                    favored by street vendors because they heat in seconds? And the filling —
                    must it always be shrimp and pork belly, or can chicken work, can mushrooms
                    work, can the whole thing be made vegetarian without losing its soul?
                </Section>

                <Section>
                    There is no agreed-upon answer to any of these questions, and yet — and this
                    is the strange part — there is widespread agreement on what a bad bánh xèo
                    looks like. It is pale. It is soggy. It folds without a crack. The edges
                    are thick rather than lacy. The diner takes a bite and the wrapper of crisp
                    rice paper and herbs falls apart in their lap. Everyone knows a bad bánh
                    xèo when they meet one. The mystery is how to consistently make a good one.
                </Section>

                <PullQuote>
                    "A bánh xèo without sound is a bánh xèo without soul."
                </PullQuote>

                <Section>
                    The dish is a child of the south. Where Hanoi's pho insists on slow time
                    and clear broth, Saigon's bánh xèo insists on heat and speed. This is a
                    food born from the rice paddies of Bến Tre and Cần Thơ, where a cook with
                    a single charcoal brazier and a thin pan could feed a field crew in
                    minutes. Each pancake takes ninety seconds, start to finish. There is no
                    making it ahead. There is no keeping it warm. You eat it standing up, with
                    your hands, leaning over the table so the dripping fish sauce does not stain
                    your shirt.
                </Section>

                <Section>
                    The original southern version was austere — rice flour, water, turmeric,
                    a little pork fat, a few small shrimp from the river. Coconut milk arrived
                    later, in the early twentieth century, when the southern delta's coconut
                    plantations made it cheap enough to use freely. The coconut transformed
                    the dish. It softened the rice flour, deepened the color, gave the edges
                    that distinctive shatter-glass crunch. The Hanoi version, called <em>bánh
                        khoái</em>, never made the leap. To this day, northern bánh xèo is thicker,
                    eggier, more like a French crêpe than the brittle southern translation.
                </Section>

                <SectionDivider />

                <Section>
                    To watch a master make bánh xèo is to understand why the dish resists
                    industrialization. Mr. Tâm has been working the same corner of Đinh
                    Công Tráng street in Saigon for twenty-eight years. His setup is humble:
                    four shallow pans on a single propane burner, a bucket of batter, a tray
                    of pre-cleaned shrimp, a wok of pork belly already rendered to crisp
                    lardons. There is no menu. There are two prices, depending on the size,
                    and the difference between them is roughly thirty cents.
                </Section>

                <Section>
                    He tilts the first pan. A small slick of pork fat coats the surface — not
                    much, just enough to bead and shimmer. Then the batter, poured fast and
                    high, sliding down the slope of the tilted pan to coat it in a thin
                    yellow sheet. <em>Xèoooo.</em> The pitch rises. Three shrimp, dropped
                    one-handed. A scatter of mung beans, already steamed soft. A pinch of
                    bean sprouts on top. He clamps a domed lid on the pan for ten seconds —
                    just long enough to steam the sprouts — then lifts it, slides a spatula
                    underneath, and folds the disk in half with one practiced motion. The
                    edges are almost translucent. They will shatter when you bite.
                </Section>

                <PullQuote>
                    The pan must be hot enough to scare you a little. If it doesn't, the
                    batter will never crisp.
                </PullQuote>

                <Section>
                    The eating, in the south, is half the dish. The bánh xèo arrives at your
                    table with a small mountain of accompaniments that, to the uninitiated,
                    seem almost decorative. They are not. There is a platter of mustard greens,
                    their leaves wide enough to wrap around your hand. There is Thai basil,
                    perilla, fish mint with its ferrous, pond-water bitterness. There is a
                    bowl of <em>nước chấm</em> — the universal Vietnamese dipping sauce, but
                    here in a southern register, sweeter, sharper, made with palm sugar
                    instead of cane.
                </Section>

                <Section>
                    You tear off a piece of the pancake. You wrap it in a mustard leaf with
                    a few sprigs of herbs, then dip the whole bundle into the nước chấm. The
                    first bite is a study in contrasts: hot crackle of the wrapper, cool snap
                    of the leaf, the brine of fish sauce, the brief sweetness of the shrimp.
                    Bánh xèo is one of those Vietnamese dishes — there are several — designed
                    to deliver every register of flavor and texture in a single mouthful.
                    Sour, salty, sweet, bitter, umami. Soft, crisp, juicy, crunchy. There is
                    an architecture to it.
                </Section>

                <SectionDivider />

                <Section>
                    The argument about which city has the best bánh xèo is, like most regional
                    food arguments in Vietnam, not really an argument about food. It is an
                    argument about identity. The Saigonese version, with its coconut and
                    turmeric and shatter-thin edges, is the cosmopolitan one — the descendant
                    of Khmer street food and Cantonese technique and French dairy traditions
                    that all converged in the southern delta during the colonial centuries.
                    The Hanoian bánh khoái, smaller and richer, is the conservative one — a
                    dish that has changed less because the people making it wished it to
                    change less.
                </Section>

                <Section>
                    Both versions are correct. Both versions are right to defend themselves.
                    What unites them, across the thousand kilometers of coastline between Hà
                    Nội and Sài Gòn, is the sound. <em>Xèo.</em> The pan accepts the batter.
                    The batter accepts the heat. For ninety seconds something simple becomes
                    something extraordinary, and then it is gone, and someone is eating it,
                    and Mr. Tâm is already pouring the next one.
                </Section>

                <Section>
                    He has been pouring the next one for twenty-eight years. He estimates he
                    has made, at minimum, three hundred thousand pancakes. He still listens
                    to the sound each one makes. He still tilts his head, just slightly, to
                    judge whether the pitch is right.
                </Section>

                <Section>
                    "When the day comes that I cannot hear the xèo properly," he told me, "is
                    the day I close the stall."
                </Section>

                <SectionDivider />

                {/* Back link */}
                <div style={{ marginTop: '48px', textAlign: 'center' }}>
                    <Link
                        href="/stories"
                        style={{
                            color: '#D97706',
                            fontFamily: 'DM Sans, sans-serif',
                            fontWeight: 600,
                            textDecoration: 'none',
                            fontSize: '14px',
                        }}
                    >
                        ← Back to all stories
                    </Link>
                </div>
            </div>
        </article>
    );
}

// ── Sub-components ──

function Section({ children }: { children: React.ReactNode }) {
    return (
        <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            style={{
                fontSize: '1.15rem',
                lineHeight: 1.85,
                marginBottom: '28px',
                color: '#2D1A0E',
            }}
        >
            {children}
        </motion.p>
    );
}

function PullQuote({ children }: { children: React.ReactNode }) {
    return (
        <motion.blockquote
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
                margin: '48px 0',
                padding: '24px 0',
                borderTop: '2px solid #D97706',
                borderBottom: '2px solid #D97706',
                fontFamily: 'Playfair Display, serif',
                fontStyle: 'italic',
                fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
                lineHeight: 1.4,
                color: '#4B2E1A',
                textAlign: 'center',
                fontWeight: 400,
            }}
        >
            {children}
        </motion.blockquote>
    );
}

function DropCap({ children }: { children: React.ReactNode }) {
    return (
        <span
            style={{
                float: 'left',
                fontFamily: 'Playfair Display, serif',
                fontSize: '5rem',
                fontWeight: 700,
                lineHeight: 0.85,
                color: '#D97706',
                paddingRight: '12px',
                paddingTop: '6px',
            }}
        >
            {children}
        </span>
    );
}

function SectionDivider() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '48px 0',
                gap: '12px',
            }}
        >
            {[0, 1, 2].map(i => (
                <span
                    key={i}
                    style={{
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        backgroundColor: '#D97706',
                        opacity: 0.6,
                    }}
                />
            ))}
        </div>
    );
}
