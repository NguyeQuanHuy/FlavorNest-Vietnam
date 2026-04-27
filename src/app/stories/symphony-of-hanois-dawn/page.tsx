'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

export default function SymphonyOfHanoisDawnPage() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ['start start', 'end end'],
    });

    const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);
    const progressBar = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    return (
        <article ref={scrollRef} style={{ backgroundColor: '#FAFAF7' }}>
            {/* Reading Progress Bar */}
            <motion.div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    height: '3px',
                    backgroundColor: '#D97706',
                    width: progressBar,
                    zIndex: 100,
                    transformOrigin: 'left',
                }}
            />

{/* ── HERO ── */}
            <section style={{ position: 'relative', minHeight: '85vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
                {/* Background image */}
                <div style={{ position: 'absolute', inset: 0 }}>
                    <Image
                        src="https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&w=1800&q=85"
                        alt="Vietnamese cookbook and dishes on a wooden table"
                        fill
                        priority
                        quality={85}
                        sizes="100vw"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                {/* Dark overlay */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(13,8,4,0.85) 0%, rgba(26,18,8,0.75) 60%, rgba(35,22,8,0.7) 100%)' }} />
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 65% 50%, rgba(217,119,6,0.18) 0%, transparent 55%)', pointerEvents: 'none' }} />

                {/* Content with animation */}
                <div style={{ maxWidth: 1200, margin: '0 auto', padding: '120px 24px 80px', position: 'relative', width: '100%' }}>
                    <motion.nav
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, marginBottom: 28 }}
                    >
                        {[['Home', '/'], ['Stories', '']].map(([label, href], i) => (
                            <span key={label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                {i > 0 && <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>}
                                {href ? <Link href={href} style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontWeight: 500 }}>{label}</Link>
                                    : <span style={{ color: '#D97706', fontWeight: 600 }}>{label}</span>}
                            </span>
                        ))}
                    </motion.nav>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                        style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22 }}
                    >
                        <div style={{ width: 32, height: 2, background: '#D97706' }} />
                        <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.24em', color: '#D97706', textTransform: 'uppercase' }}>Kitchen Stories</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(48px, 8vw, 104px)', fontWeight: 700, color: 'white', margin: '0 0 32px', lineHeight: 0.95, letterSpacing: '-0.02em' }}
                    >
                        The stories<br /><span style={{ color: '#D97706', fontStyle: 'italic', fontWeight: 400 }}>behind the food.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        style={{ color: 'rgba(255,255,255,0.65)', fontSize: 'clamp(17px, 2vw, 20px)', maxWidth: 640, lineHeight: 1.7, margin: 0 }}
                    >
                        Heritage, technique, travel, and the quiet wisdom passed from one Vietnamese kitchen to the next.
                    </motion.p>
                </div>
            </section>

                {/* Scroll indicator */}
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
                {/* Lead paragraph */}
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
                    "Pho is not for the hurried. To achieve a broth as clear as a mirror, the cook must patiently simmer beef bones for ten full hours."
                    <span
                        style={{
                            display: 'block',
                            marginTop: '8px',
                            fontSize: '0.9rem',
                            color: '#8B6F5A',
                            fontStyle: 'normal',
                            fontFamily: 'DM Sans, sans-serif',
                        }}
                    >
                        — The Vietnamese writer Thach Lam
                    </span>
                </motion.p>

                {/* Body paragraphs */}
                <Section>
                    <DropCap>I</DropCap>t is four in the morning on Bát Đàn Street, and Mrs. Hoa
                    is already awake. She has been awake, in fact, since three. The cobblestones
                    outside her shop are slick with dew; the city is still cocooned in that brief,
                    hushed interval before the first motorbikes cough to life. Inside, the only
                    sound is the slow exhale of her broth — a soft, almost imperceptible tremor of
                    the surface, the kind of bubble so gentle it might be mistaken for breath.
                </Section>

                <Section>
                    She skims. She has been skimming for thirty-seven years.
                </Section>

                <Section>
                    The pot in front of her is enormous: forty liters, dark with age, nicked along
                    the rim from decades of ladles. Inside, beef leg bones the size of a child's
                    forearm have been simmering for nine hours. Around them float the fingerprints
                    of the broth: charred onion halves, knobs of ginger blackened over an open
                    flame, a muslin sachet of star anise, cinnamon bark, cloves, fennel seed, and a
                    single black cardamom pod called <em>thảo quả</em>. The fragrance does not so
                    much fill the room as it inhabits it.
                </Section>

                <PullQuote>
                    "Pho is not a recipe. It is an inheritance."
                </PullQuote>

                <Section>
                    Pho — properly written <em>phở</em>, with the falling-rising tone that gives the
                    word its small musical lift — is often described as Vietnam's national dish. But
                    in Hanoi, where the dish was born sometime in the early twentieth century,
                    people will tell you that pho is not really Vietnam's. It is Hanoi's. The
                    Saigonese version, with its sweetness, its bean sprouts, its mountain of fresh
                    herbs and chili sauce, is regarded by the northerners with the polite skepticism
                    one might reserve for a distant cousin who has moved to the tropics and adopted
                    questionable opinions.
                </Section>

                <Section>
                    The Hanoian original is austere by comparison. There are no bean sprouts. There
                    is no hoisin sauce, no sriracha, no plate of basil and lime. There is the broth
                    — clear, the color of weak tea, faintly trembling with fat — and there are the
                    noodles, hand-cut from sheets of rice flour pressed that morning. There is a
                    fan of raw beef draped over the noodles, and the broth, ladled boiling-hot from
                    the pot, cooks the beef in the bowl. A scattering of chopped scallion. A few
                    rings of yellow onion, soaked briefly in vinegar to take the edge off. That is
                    all.
                </Section>

                <Section>
                    "If you need to add things," Mrs. Hoa once told me, watching with mild distaste
                    as a tourist reached for a bottle of fish sauce, "the pho is not good."
                </Section>

                <SectionDivider />

                <Section>
                    The historical origins of pho are contested in the way that the origins of any
                    beloved dish are contested. The most credible theory traces it to the 1880s in
                    Nam Định province, southeast of Hanoi, where French colonial appetites for beef
                    collided with a local population that, until then, had largely avoided the
                    animal. Cattle in pre-colonial Vietnam were too valuable as draft labor to be
                    eaten; what bones the French butchers discarded ended up in the kitchens of
                    Vietnamese cooks, who began simmering them with rice noodles — <em>bánh phở</em>{' '}
                    — and the spice blends already familiar from Chinese-Vietnamese cuisine.
                </Section>

                <Section>
                    By 1910 the dish had migrated north to Hanoi. By the 1930s it was being sold
                    from shoulder-pole carts along Hàng Bột and Cầu Gỗ streets, the vendors calling
                    out <em>"phở-ơ!"</em> at dawn, the long second syllable rising like a question.
                    Old men in the Old Quarter still remember the call. They will imitate it for you
                    if you ask, their voices catching slightly on the high note, the way a singer's
                    might.
                </Section>

                <PullQuote>
                    The vendor's call was the city's alarm clock. It still is, in the few corners
                    where you know where to listen.
                </PullQuote>

                <Section>
                    What is rarely written about pho is its silence — the long stretches of
                    near-stillness that constitute most of its preparation. The bones must be
                    blanched first, fifteen minutes in fiercely boiling water, then drained and
                    rinsed clean of the grey foam that holds the off-flavors. Then the long simmer
                    begins, and for the next ten hours, the cook's main job is to do nothing.
                </Section>

                <Section>
                    To do nothing, that is, except skim. Every fifteen minutes for the first four
                    hours, then every half hour, then every hour, a flat metal spoon glides across
                    the surface of the broth, lifting away the scum that rises in pale lacy
                    patterns. Skim too aggressively and the broth turns thin; skim too lightly and
                    it turns cloudy. Mrs. Hoa learned the rhythm from her mother, who learned it
                    from <em>her</em> mother. There is no timer involved. There is no thermometer.
                    There is only the broth, and the cook, and the small interval between them.
                </Section>

                <Section>
                    "It is meditation," Mrs. Hoa says, without smiling. "But you cannot tell the
                    young people that. They want everything fast."
                </Section>

                <SectionDivider />

                <Section>
                    The young people, of course, have their own pho. Across the river, in the new
                    apartment districts of Long Biên and Gia Lâm, a generation of Hanoians who grew
                    up after <em>Đổi Mới</em> — the economic reforms of 1986 — have started buying
                    pho from delivery apps. The bowls arrive in plastic containers, the broth in a
                    separate sealed bag to be poured at home. The temperature is wrong by the time
                    it gets there. The noodles, the truly fresh ones, will turn gummy within
                    minutes of contact with hot liquid. Everyone knows this. Everyone orders it
                    anyway.
                </Section>

                <Section>
                    There is a small but vocal movement, mostly online, of Hanoians lamenting the
                    decline of pho. They write essays on Facebook about how the broth is no longer
                    skimmed properly, how MSG has crept in where it does not belong, how the new
                    shops use pre-packaged spice blends from supermarkets in Bắc Ninh. The essays
                    are passionate. The essays are also, in the way that all such laments are, only
                    partly true.
                </Section>

                <Section>
                    The fact is that pho has never stopped changing. The dish that Mrs. Hoa
                    inherited from her mother is not the dish her mother inherited from{' '}
                    <em>her</em> mother. The spice ratio shifted in the 1950s when the war
                    disrupted supply lines and certain ingredients became unobtainable. The cut of
                    beef on top — once mostly brisket, now often a delicate raw fillet called{' '}
                    <em>tái</em> — changed in the 1990s as economic prosperity made better cuts
                    affordable. What has remained constant is the shape of the experience: a clear
                    broth, a long simmer, a quiet hour before dawn, a single bowl that costs more
                    in time than it does in money.
                </Section>

                <PullQuote>
                    The dish is a thread. The cook is the hand that draws it forward, one
                    generation at a time.
                </PullQuote>

                <SectionDivider />

                <Section>
                    By six in the morning Bát Đàn Street has filled. The line outside Mrs. Hoa's
                    shop reaches halfway down the block: office workers in pressed shirts, taxi
                    drivers eating off the hood of their cars, an elderly couple who have come here
                    every morning for twelve years and who do not speak to each other while they
                    eat. The bowls cost thirty-five thousand đồng — about a euro and a half. They
                    arrive at the table almost before you have sat down, the broth so hot it is
                    visibly trembling, the raw beef paling to gray as you watch.
                </Section>

                <Section>
                    You eat with chopsticks in one hand and a soup spoon in the other. The first
                    sip of broth is not what you expect. It is not rich, exactly. It is not heavy.
                    It is bright, almost translucent in flavor, with the deep iron undertone of beef
                    bone running beneath a top note of star anise and the lift of charred ginger.
                    It tastes like something that took ten hours to make. It tastes, perhaps, like
                    a small act of devotion.
                </Section>

                <Section>
                    Mrs. Hoa does not eat with the customers. She has been awake for too many hours
                    and the smell of her own broth no longer interests her in the way it interests
                    them. She stands by the stove, watching the level in the pot. By eleven the
                    pot will be empty. By two she will be asleep. By three the next morning she
                    will be back at the stove, blanching new bones, beginning the slow work of the
                    next day's symphony.
                </Section>

                <Section>
                    She will skim. She will keep skimming. She has been skimming for thirty-seven
                    years.
                </Section>

                <SectionDivider />

                {/* Author Bio */}
                <div
                    style={{
                        marginTop: '64px',
                        padding: '32px',
                        backgroundColor: '#FFF',
                        borderRadius: '20px',
                        border: '1px solid rgba(75,46,26,0.08)',
                        display: 'flex',
                        gap: '20px',
                        alignItems: 'center',
                    }}
                >
                    <div
                        style={{
                            width: '64px',
                            height: '64px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #D97706, #F59E0B)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#FFF',
                            fontFamily: 'Playfair Display, serif',
                            fontSize: '24px',
                            fontWeight: 700,
                            flexShrink: 0,
                        }}
                    >
                        QH
                    </div>
                    <div>
                        <p
                            style={{
                                fontFamily: 'DM Sans, sans-serif',
                                fontSize: '15px',
                                fontWeight: 700,
                                color: '#2D1A0E',
                                margin: '0 0 4px',
                            }}
                        >
                        Huy Nguyen
                        </p>
                        <p
                            style={{
                                fontFamily: 'DM Sans, sans-serif',
                                fontSize: '13px',
                                color: '#6B5544',
                                margin: 0,
                                lineHeight: 1.6,
                            }}
                        >
                            Founder of FlavorNest Vietnam. Writes about Vietnamese food culture
                            from his kitchen in Waltershausen, Thüringen, Germany.
                        </p>
                    </div>
                </div>

                {/* Tags */}
                <div
                    style={{
                        marginTop: '32px',
                        display: 'flex',
                        gap: '8px',
                        flexWrap: 'wrap',
                    }}
                >
                    {['#Hanoi', '#Pho', '#Heritage', '#Streetfood', '#Longread'].map(tag => (
                        <span
                            key={tag}
                            style={{
                                padding: '6px 14px',
                                backgroundColor: 'rgba(217,119,6,0.08)',
                                color: '#D97706',
                                borderRadius: '999px',
                                fontSize: '12px',
                                fontWeight: 600,
                                fontFamily: 'DM Sans, sans-serif',
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

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

// ── Sub-components for cleaner article body ──

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
