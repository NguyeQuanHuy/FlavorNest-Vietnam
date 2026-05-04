'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

export default function InstantNoodlesStreetStoryPage() {
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
                        src="/images/stories/instant-noodles-hero.jpg"
                        alt="A bowl of Vietnamese instant noodles with egg and herbs"
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
                        {[['Home', '/'], ['Stories', '/stories'], ['Modern Vietnam', '']].map(([label, href], i) => (
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
                        <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.24em', color: '#D97706', textTransform: 'uppercase' }}>Modern Vietnam · Longread</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(48px, 8vw, 104px)', fontWeight: 700, color: 'white', margin: '0 0 32px', lineHeight: 0.95, letterSpacing: '-0.02em' }}
                    >
                        The Quiet<br /><span style={{ color: '#D97706', fontStyle: 'italic', fontWeight: 400 }}>National Dish.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        style={{ color: 'rgba(255,255,255,0.65)', fontSize: 'clamp(17px, 2vw, 20px)', maxWidth: 640, lineHeight: 1.7, margin: 0 }}
                    >
                        Vietnam eats more instant noodles per person than almost any country on Earth. The food writers don't talk about it. Everyone else does.
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
                    A square block of dried noodles. A foil sachet of orange seasoning. A second sachet of oil and dried scallion. Boiling water poured over the whole thing in a chipped enamel bowl. Three minutes. Eaten standing up. Eaten with chopsticks held in one hand and a phone in the other. Eaten by eighty-five million Vietnamese, more or less, every week.
                </motion.p>

                <Section>
                    <DropCap>T</DropCap>he food writers do not write about <em>mì tôm</em>. There are essays on phở. There are essays on bánh mì. There are entire books in English on the noodle traditions of Hanoi and the herb gardens of Huế. And there is, almost nowhere in the literature, a serious treatment of the dish that Vietnam actually eats more of than any of those — the small square brick of pre-fried wheat noodles in a plastic-wrapped package, served in a bowl with hot water and a foil sachet of MSG-laden seasoning powder.
                </Section>

                <Section>
                    According to the World Instant Noodles Association — yes, this exists, headquartered in Osaka, tracking global noodle consumption with the seriousness of a central bank — Vietnam consumes around eight billion servings of instant noodles each year. That is roughly eighty-three packs per person, including infants. By per-capita consumption, Vietnam ranks consistently in the global top three, jostling with South Korea and Nepal. The country eats more instant noodles than Japan and China combined, on a per-person basis, and it is not particularly close.
                </Section>

                <PullQuote>
                    "There are essays on phở. There are no essays on the dish that Vietnam actually eats."
                </PullQuote>

                <Section>
                    The numbers describe a reality the food press has been slow to look at. Phở is the dish Vietnam shows the world. <em>Mì tôm</em> is the dish Vietnam eats when the world is not watching — early in the morning, late at night, at three in the afternoon when the office air conditioning has died and the canteen is closed. It is the cheapest hot meal in the country: a pack costs around four thousand đồng, roughly fifteen euro cents. It is also, in some ways, the most democratic. The student in a Hanoi dorm and the construction worker on a Saigon job site eat the same brand, prepared the same way, with the same orange-stained fingers from the seasoning powder.
                </Section>

                <InlineImage
                    src="/images/stories/instant-noodles-bowl.jpg"
                    alt="A bowl of mì tôm with a soft-boiled egg, scallion, and chili"
                    caption="The home version: a base pack of mì tôm dressed up with a soft-boiled egg, scallion, fresh chili, and a squeeze of lime. Five minutes. Two euros of ingredients."
                />

                <SectionDivider />

                <Section>
                    The dish, as it lives in Vietnam, is not really one dish. It is a base — the noodles, the seasoning — onto which an entire culture of improvisation has been grafted. A Hanoi student adds a soft-boiled egg, a few sprigs of cilantro, and a spoonful of chili oil from a glass jar in the dorm kitchen. A Saigon office worker drops in three frozen prawns and a handful of bean sprouts. A grandmother in the central highlands cooks the noodles in the leftover broth from yesterday's <em>canh chua</em> and tops them with whatever fish she did not finish. Each version takes the same four minutes. None of them is the same dish.
                </Section>

                <Section>
                    The base, however, is shared. The dominant brand, by some distance, is Hảo Hảo — manufactured by the Japanese company Acecook, but produced entirely in Vietnam since 2000, and so thoroughly absorbed into Vietnamese identity that most younger Vietnamese assume it is a domestic brand. The signature flavor is <em>tôm chua cay</em>: sour, spicy shrimp. The sourness comes from tamarind powder; the heat from chili; the umami, controversially, from a generous dose of monosodium glutamate that the food media of Europe and North America has spent forty years declaring dangerous and that Vietnamese cooks have spent forty years not believing them about.
                </Section>

                <Section>
                    They were right not to believe them. The MSG scare of the 1980s, traced back to a single anecdotal letter to the New England Journal of Medicine in 1968, has since been thoroughly debunked by every major food safety body, including the WHO and the European Food Safety Authority. The Vietnamese cook never noticed the controversy because she was too busy seasoning her food.
                </Section>

                <PullQuote>
                    Mì tôm is not a compromise. It is a base. The cook decides what it becomes.
                </PullQuote>

                <SectionDivider />

                <Section>
                    My own first memory of mì tôm is from Phú Yên, age eight or nine, on a fishing afternoon with my father. We had been on the boat since dawn. The fish were not biting. By two in the afternoon we were both hungry and slightly miserable, and my father pulled out a small camping stove, a kettle, and two packs of Hảo Hảo from a plastic bag. He boiled the water on the deck. He cracked an egg into each bowl. He sliced a green chili from his shirt pocket — he always had one in his shirt pocket — and dropped half into each. We ate the noodles standing up, looking out at the empty sea, and they were, by some distance, the best meal I had eaten that month.
                </Section>

                <Section>
                    This is, I think, what the food writers miss. Mì tôm is not the failure of Vietnamese cuisine. It is one of its successes. A country with very little — and Vietnam, in the eighties and nineties, had very little — found a way to put a hot, savory, nourishing bowl of food in front of every single person, three minutes after they decided they wanted one, for the price of a piece of candy. The dish solved a problem the rest of the cuisine could not solve. Phở is wonderful. Phở is also four thousand percent more expensive than a pack of Hảo Hảo, and takes ten hours to make, and requires bones and herbs that a sixteen-year-old with five thousand đồng and a hot plate does not have.
                </Section>

                <InlineImage
                    src="/images/stories/instant-noodles-late-night.jpg"
                    alt="A late-night street stall serving mì tôm in Hanoi"
                    caption="A late-night street stall in Hanoi: mì tôm with beef, mì tôm with egg, mì tôm with whatever the cook has on the burner. Open until 3 a.m. for the people who need it."
                />

                <Section>
                    What surprises foreigners, when they finally pay attention, is that mì tôm is also a public food. It is not just eaten at home. There are entire stalls — small, plastic-stooled, exactly the kind of operation that sells phở on the next block — that specialize in dressed-up instant noodles. <em>Mì tôm xào bò</em>, instant noodles stir-fried with beef, scallion, and broccoli. <em>Mì tôm trứng</em>, a soup version with two eggs and a tower of fresh herbs. <em>Mì tôm hải sản</em>, with prawns and squid, served in the kind of late-night alley restaurant that does not close until the early commuters arrive.
                </Section>

                <Section>
                    These are not failed restaurants that gave up and resorted to instant noodles. They are restaurants that recognized what the customer actually wanted, which was the specific texture of Hảo Hảo noodles — bouncier, chewier, more elastic than fresh wheat noodles — combined with the labor and freshness that a home cook does not always have. A bowl of <em>mì tôm xào bò</em> at a Hanoi stall costs around twenty-five thousand đồng, slightly less than a euro. It is, by most measures, the best ratio of pleasure to price in the country.
                </Section>

                <SectionDivider />

                <Section>
                    The honest part of this story, the part the food writers in Saigon would prefer not to put on the page, is what mì tôm represents about modern Vietnam. The country is wealthier than it has ever been. The cities are full of restaurants. The traditional dishes — phở, bún chả, bánh xèo — have been preserved, refined, exported. And yet the food a working Vietnamese person actually eats most often is a four-thousand-đồng pack of pre-fried wheat noodles seasoned with industrial flavor powder, because she has eight minutes between shifts and does not own a stockpot.
                </Section>

                <Section>
                    There is a tendency, when writing about food culture, to romanticize the slow versions and ignore the fast ones. The Italians eat instant pasta from supermarkets too. The Japanese, the inventors of instant noodles, eat their own creation in quantities that would horrify a sushi master. Every cuisine has its public face and its private one. The private face is almost always quicker, cheaper, more pragmatic, and more loved than the food press lets on.
                </Section>

                <PullQuote>
                    Every cuisine has the food it shows the world, and the food it actually eats. The two are rarely the same.
                </PullQuote>

                <Section>
                    The packs are stacked in towers in every <em>tạp hóa</em> — the small neighborhood shops that sell soap and rice and beer and toothpaste — from Hà Giang in the north to Cà Mau in the south. They are stacked in dorm rooms and worksite tents and the desk drawers of office workers who claim, when asked, that they brought lunch from home. They are eaten on fishing boats and at three in the morning by exam students and on rainy Tuesday afternoons when nothing else feels right. They are, more than any other single food, what Vietnam actually eats.
                </Section>

                <Section>
                    My father, who taught me to fish and to add a chili to my noodles, still keeps a stack of Hảo Hảo in the kitchen. He has eaten mì tôm at least once a week for as long as I have been alive. He does not consider this a confession. He considers it the obvious behavior of a person who likes food that is fast and hot and salty and exactly enough. He is, on this question as on most others, almost certainly correct.
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
                    {['#MiTom', '#InstantNoodles', '#Vietnam', '#FoodCulture', '#ModernVietnam', '#Longread'].map(tag => (
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

// ── Inline image component ──
function InlineImage({ src, alt, caption }: { src: string; alt: string; caption: string }) {
    return (
        <motion.figure
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            style={{ margin: '56px 0' }}
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