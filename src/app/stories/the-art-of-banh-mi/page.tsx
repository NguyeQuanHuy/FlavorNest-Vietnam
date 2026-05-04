'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

export default function TheArtOfBanhMiPage() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);
    const { scrollYProgress } = useScroll({
        target: mounted ? scrollRef : undefined,
        offset: ['start start', 'end end'],
    });

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

            {/* ── HERO SECTION ── */}
            <section style={{ position: 'relative', minHeight: '85vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0 }}>
                    <Image
                        src="/images/stories/the-art-of-banh-mi-hero.jpg"
                        alt="A freshly made Vietnamese bánh mì sandwich"
                        fill
                        priority
                        quality={85}
                        sizes="100vw"
                        style={{ objectFit: 'cover' }}
                    />
                </div>

                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(13,8,4,0.85) 0%, rgba(26,18,8,0.75) 60%, rgba(35,22,8,0.7) 100%)' }} />
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 65% 50%, rgba(217,119,6,0.18) 0%, transparent 55%)', pointerEvents: 'none' }} />

                <div style={{ maxWidth: 1200, margin: '0 auto', padding: '120px 24px 80px', position: 'relative', width: '100%' }}>
                    <motion.nav
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, marginBottom: 28 }}
                    >
                        {[['Home', '/'], ['Stories', '/stories'], ['East Meets West', '']].map(([label, href], i) => (
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
                        <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.24em', color: '#D97706', textTransform: 'uppercase' }}>East Meets West · Longread</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(48px, 8vw, 104px)', fontWeight: 700, color: 'white', margin: '0 0 32px', lineHeight: 0.95, letterSpacing: '-0.02em' }}
                    >
                        The Art of<br /><span style={{ color: '#D97706', fontStyle: 'italic', fontWeight: 400 }}>Bánh Mì.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        style={{ color: 'rgba(255,255,255,0.65)', fontSize: 'clamp(17px, 2vw, 20px)', maxWidth: 640, lineHeight: 1.7, margin: 0 }}
                    >
                        How a French baguette traveled to Saigon, met fish sauce and pâté, and became — in less than a century — the world's most celebrated street sandwich.
                    </motion.p>
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
            </section>

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
                    On a corner in District 3 of Saigon, a baguette is being filled with pâté, pickled carrots, cilantro, and a drizzle of soy. It will cost the equivalent of one euro. It will be ready in forty seconds. It is arguably the best sandwich in the world.
                </motion.p>

                <Section>
                    <DropCap>T</DropCap>he sandwich, of course, has European parents. The French brought the baguette to Indochina in the late nineteenth century, along with pâté, mayonnaise, and the European custom of eating bread with cured meats. For the first six decades of its life in Vietnam, the baguette remained essentially French — eaten by colonial administrators, reluctantly tolerated by the local population, and priced well beyond what most Vietnamese families could afford.
                </Section>

                <Section>
                    And then, sometime in the late 1950s — the historians cannot agree on the exact year, though most settle on 1958 — a couple in Saigon named Lê Văn Bá and Nguyễn Thị Tịnh did something quietly revolutionary. They split a baguette down the middle. They filled it with the ingredients they had on hand: pâté from the French butcher, sliced cold cuts, pickled vegetables, fresh herbs from the market, a splash of soy sauce. They wrapped it in newspaper. They sold it from a small stall on Cao Thắng street for a few <em>đồng</em>. They called it <em>bánh mì thịt</em> — bread with meat.
                </Section>

                <Section>
                    Within a decade, you could not walk through Saigon without tripping over a bánh mì cart.
                </Section>

                <PullQuote>
                    "The sandwich did not just adapt the baguette. It rebuilt it from the inside out."
                </PullQuote>

                <InlineImage
                    src="/images/stories/the-art-of-banh-mi-vendor.jpg"
                    alt="A Vietnamese street vendor preparing bánh mì"
                    caption="A bánh mì vendor in Saigon assembles a sandwich in under a minute — pâté, cold cuts, đồ chua, cilantro, chili, soy."
                />

                <Section>
                    The trick, the secret that made the dish travel, was not the filling. The filling could be — and would be — endlessly improvised: grilled lemongrass pork, shredded chicken, cold-cut combinations, meatball-and-tomato, vegetarian fillings of fried tofu and mushroom pâté. The trick was the bread itself. Vietnamese bakers, working with the rice flour they had in abundance and the wheat flour they had in short supply, began cutting the wheat with rice flour at ratios as high as one-to-three. The resulting baguette was lighter than its French cousin. The crust shattered audibly when bitten. The inside was almost hollow, leaving room for fillings that a denser bread would have crushed.
                </Section>

                <Section>
                    This is the bánh mì baguette: shorter, narrower, crisper, lighter than anything in Paris. It exists because of scarcity, not despite it. Like many of the great food inventions of the twentieth century, it was born of constraint and improvisation, and is — in retrospect — better than the original it was attempting to imitate.
                </Section>

                <SectionDivider />

                <Section>
                    A proper bánh mì is engineered. Each component plays a structural role. The bread provides the architecture and the textural shock — that signature crackle that makes you pause, mid-bite, to listen. The pâté or mayonnaise provides the fat that lubricates everything else. The protein — whether grilled pork, cold cuts, fried egg, or meatballs — provides the umami depth.
                </Section>

                <Section>
                    Then come the disruptors. The pickled carrot and daikon — <em>đồ chua</em> — is the acid that cuts through the fat. The cucumber adds water and coolness. The cilantro brings the fragrance. The chili brings the heat. A few drops of soy sauce, or sometimes Maggi seasoning (a French legacy that never left), bring the salt. And the whole thing, when it works, achieves a state of textural and flavor balance that very few sandwiches in the world even attempt, let alone deliver.
                </Section>

                <Section>
                    The chef Anthony Bourdain, eating a bánh mì in Hội An in 2009, called it "a symphony in a sandwich." He was not exaggerating. There are sandwiches that have one or two notes — a Reuben, a BLT, a steak hoagie. Bánh mì has six or seven, and they all arrive at once.
                </Section>

                <PullQuote>
                    "It is the most balanced sandwich on Earth. Nothing else even comes close."
                </PullQuote>

                <SectionDivider />

                <InlineImage
                    src="/images/stories/the-art-of-banh-mi-bread.jpg"
                    alt="A bánh mì baguette split open, showing its hollow airy interior"
                    caption="The Vietnamese baguette: rice-flour cut, lighter than French, with a crust that shatters and an interior almost hollow enough to hold its fillings without crushing them."
                />

                <Section>
                    After the fall of Saigon in 1975, more than a million Vietnamese refugees left the country. They went to California. They went to Houston. They went to Sydney, Toronto, Paris, Berlin. And in almost every city where they settled in numbers, within a year or two, a bánh mì shop appeared.
                </Section>

                <Section>
                    For a long time these shops were quiet — visited mostly by the local Vietnamese community, ignored by the food press. Then, in 2009, a small bakery in San Francisco called Saigon Sandwich appeared on the New York Times's list of the city's best lunches. A year later, Bon Appétit declared bánh mì "the sandwich of the year." By 2015, the Oxford English Dictionary added the word <em>bánh mì</em> to its official lexicon. By 2020, you could buy one in airports.
                </Section>

                <Section>
                    What is remarkable is how little the dish changed during this diaspora. The bread might be sourced from a different bakery — there are now dedicated bánh mì baguette suppliers in Los Angeles, Berlin, and Brisbane — but the structure, the philosophy, the balance, all held. A bánh mì in Berlin's Neukölln district in 2024 tastes recognizably like the one Mrs. Tịnh sold in 1958. The recipe traveled. The architecture traveled. The principle of contrast and balance traveled.
                </Section>

                <SectionDivider />

                <Section>
                    It is tempting, when writing about bánh mì, to fall into the familiar narrative arc: humble origins, global success, cultural triumph. And the arc is, broadly, true. But it misses the point of why the sandwich endures. The bánh mì is not great because it succeeded. It is great because of what it represents — a small, daily act of cultural translation. A French baguette, taken apart and put back together by Vietnamese hands, until it became something unrecognizable and entirely its own.
                </Section>

                <Section>
                    Every great food culture, in the end, is built from these small acts of translation. Pizza was Neapolitan poverty food before it was a global industry. Sushi was a way to preserve fish. Curry came out of the spice trade and the British Raj and a thousand other histories nobody fully owns. The bánh mì sits in this same lineage — a dish that took the language of one culture and made it speak in a new one.
                </Section>

                <PullQuote>
                    The bánh mì is a French baguette that learned to speak Vietnamese.
                </PullQuote>

                <Section>
                    On Cao Thắng street, the original Hòa Mã bakery still stands. Mrs. Tịnh passed away in 2021, at the age of 88. Her daughter and grandchildren now run the shop. The recipe has not changed. The baguette is still split warm, still filled with the same combination her parents settled on in 1958: pâté, three kinds of cold cut, pickled vegetables, cilantro, chili, a few drops of soy.
                </Section>

                <Section>
                    The line outside, on most mornings, stretches around the corner. The sandwich costs forty thousand đồng — about a euro and a half. People wait twenty minutes for it. They eat it standing on the sidewalk. They look, for the most part, very happy.
                </Section>

                <SectionDivider />

                {/* Tags */}
                <div
                    style={{
                        marginTop: '32px',
                        display: 'flex',
                        gap: '8px',
                        flexWrap: 'wrap',
                    }}
                >
                    {['#BanhMi', '#VietnameseSandwich', '#Saigon', '#FrenchColonial', '#FoodHistory', '#Longread'].map(tag => (
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

// ── NEW: Inline image component for mid-article visuals ──
function InlineImage({ src, alt, caption }: { src: string; alt: string; caption: string }) {
    return (
        <motion.figure
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            style={{
                margin: '56px 0',
            }}
        >
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '16 / 10',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    background: '#EFE6DA',
                    boxShadow: '0 16px 40px rgba(75,46,26,0.12)',
                }}
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    quality={85}
                    sizes="(max-width: 720px) 100vw, 720px"
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <figcaption
                style={{
                    marginTop: '14px',
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '13px',
                    color: '#8B6F5A',
                    fontStyle: 'italic',
                    textAlign: 'center',
                    lineHeight: 1.6,
                    padding: '0 8px',
                }}
            >
                {caption}
            </figcaption>
        </motion.figure>
    );
}