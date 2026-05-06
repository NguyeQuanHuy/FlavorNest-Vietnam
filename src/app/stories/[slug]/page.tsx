'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

export default function FromStreetToTableBunChaPage() {
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
                        src="/images/stories/bun-cha-hero.jpg"
                        alt="A plate of grilled bún chả pork over charcoal in Hanoi"
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
                        {[['Home', '/'], ['Stories', '/stories'], ['Hanoi Classic', '']].map(([label, href], i) => (
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
                        <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.24em', color: '#D97706', textTransform: 'uppercase' }}>Hanoi Classic · Longread</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(48px, 8vw, 104px)', fontWeight: 700, color: 'white', margin: '0 0 32px', lineHeight: 0.95, letterSpacing: '-0.02em' }}
                    >
                        From Street<br /><span style={{ color: '#D97706', fontStyle: 'italic', fontWeight: 400 }}>to Table.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        style={{ color: 'rgba(255,255,255,0.65)', fontSize: 'clamp(17px, 2vw, 20px)', maxWidth: 640, lineHeight: 1.7, margin: 0 }}
                    >
                        In 2016, a US president sat on a plastic stool in Hanoi and ordered bún chả. For Hanoians, this smoky, chargrilled lunch had been a quiet secret for a century before the world arrived.
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
                    The smoke comes first. Half a block before you reach the stall, the fat from the pork patties — caramelizing over coals on a clay grill no bigger than a frying pan — has already announced the meal. By the time you sit down on the plastic stool, you have, in a sense, already begun to eat.
                </motion.p>

                <Section>
                    <DropCap>O</DropCap>n a humid evening in May 2016, a sixty-foot motorcade pulled up beside a small bún chả shop on Lê Văn Hưu street in Hanoi. The president of the United States, Barack Obama, walked through the front door, climbed up to the second floor, and sat down on a low blue plastic stool across from the chef and writer Anthony Bourdain. They ordered two portions of bún chả and two bottles of Hà Nội beer. The bill, famously, came to six dollars. The footage aired on CNN three months later. The shop, Bún Chả Hương Liên, has been called <em>Bún Chả Obama</em> ever since.
                </Section>

                <Section>
                    For people outside Vietnam, this was a moment of discovery — an introduction, via late-night cable, to a dish most Westerners had never heard of. For Hanoians, the global attention was politely received and quietly ignored. They had been eating this dish, on this kind of stool, in alleys exactly like this one, for almost a hundred years before Obama arrived. They did not need a presidential endorsement. They did need lunch.
                </Section>

                <PullQuote>
                    "The president sat on a stool. The locals had been sitting on those stools since 1925."
                </PullQuote>

                <InlineImage
                    src="/images/stories/bun-cha-obama.jpg"
                    alt="Barack Obama and Anthony Bourdain eating bún chả in Hanoi"
                    caption="Lê Văn Hưu street, May 2016. The bill came to six dollars. The shop has been called Bún Chả Obama ever since."
                />

                <Section>
                    Bún chả, properly understood, is three things at once. There is <em>bún</em> — cool rice vermicelli noodles, served at room temperature on a plate or in a small bamboo basket lined with paper. There is <em>chả</em> — the chargrilled pork, in two forms: small flat patties of seasoned ground pork, and slices of pork belly marinated in fish sauce, sugar, and shallots, then grilled over charcoal until the edges are nearly black. And there is the bowl — a warm broth of fish sauce, sugar, vinegar, lime juice, and water, with the pork floating in it, alongside paper-thin slivers of green papaya and carrot pickled to a soft crunch.
                </Section>

                <Section>
                    The diner assembles the dish in real time. A few noodles into the bowl. A piece of pork, lifted with chopsticks. A leaf of perilla, a sprig of cilantro, a torn piece of lettuce from the platter of greens that always accompanies the dish. A bite. Then again. The proportions are yours to negotiate, and the pleasure of bún chả is partly the pleasure of doing this — of being trusted, by the cook, to finish the dish yourself.
                </Section>

                <SectionDivider />

                <Section>
                    The dish is, by Vietnamese standards, relatively young. Most food historians trace bún chả to the 1920s and 1930s, when Hanoi was a French colonial city of about a hundred and fifty thousand people and the streets around Đồng Xuân market were filling up with the food vendors that would define the city's cuisine for the next century. Charcoal grilling, in the form bún chả uses it, is older — but the specific combination of grilled pork, fish sauce broth, cool noodles, and herb platter is a Hanoi invention, and remains, to this day, a Hanoi specialty.
                </Section>

                <Section>
                    The Saigonese have a version, of course. Every Vietnamese dish has a Saigonese version. <em>Bún thịt nướng</em>, the southern equivalent, is a closer cousin to a vermicelli salad: the noodles are dressed directly with the dipping sauce, the pork is sliced rather than patty-shaped, and the dish arrives in a single bowl rather than across three vessels. It is delicious. It is not the same dish. The difference, as with so many things between the two cities, is one of architecture: the Saigonese version is integrated, the Hanoian version is component-based. One is a salad. The other is a meal you build yourself.
                </Section>

                <PullQuote>
                    Bún chả is not a salad. It is a small kit of three components that the diner assembles into lunch.
                </PullQuote>

                <Section>
                    What makes a great bún chả, the people who eat it daily will tell you, is almost entirely about the grilling. The pork must be cooked over charcoal, not gas — the smoke is the seasoning. The patties must be slightly larger than a fifty-cent coin, and just thick enough to hold a pink center when split. The pork belly must be marinated long enough that the sugar in the marinade caramelizes on the grill, not just browns. The exterior should be crisp at the corners and slightly chewy in the middle. The fat, where the fat lives, should be soft.
                </Section>

                <Section>
                    The broth is simpler than it tastes. Fish sauce, sugar, lime juice, water, a little vinegar, garlic, chili, and grated green papaya and carrot. The ratio is what separates the great shops from the average ones. Too much sugar, and the broth becomes the dish. Too little, and the pork tastes lonely. The veteran cook tastes the broth a dozen times during preparation, adjusting in tiny increments, until it sits just at the edge of being too sweet — at which point it is exactly right.
                </Section>

                <SectionDivider />

                <InlineImage
                    src="/images/stories/bun-cha-grill.jpg"
                    alt="Charcoal grill with bún chả patties and pork belly slices"
                    caption="The grill is the dish. Charcoal, not gas. Patties slightly larger than a coin, pork belly marinated long enough for the sugar to caramelize, not just brown."
                />

                <Section>
                    The classic place to eat bún chả in Hanoi is a small shop in the Old Quarter that has, almost certainly, been there longer than you have been alive. The setup is consistent. A clay grill at the entrance, manned by a woman who has been fanning coals for forty years. A small tray of marinated pork beside her, replenished every twenty minutes. Plastic stools inside, blue or yellow or red, low to the ground. Tables that come up to your knees. A teenage boy moving between the tables with bowls of broth and plates of noodles, somehow tracking who ordered what without ever writing it down.
                </Section>

                <Section>
                    The price has held remarkably steady for an inflationary economy. A serving costs around forty thousand đồng — about a euro and a half — and includes the noodles, the pork, the broth, and unlimited herbs from the platter. The herbs, in fact, are non-negotiable. Lettuce, perilla, mint, sometimes cilantro, sometimes a Vietnamese variety of basil that smells faintly of cloves. You are expected to use them generously. The cook will glance at your plate as you leave, and if the herbs are untouched, she will make a quiet noise of disapproval that you will feel, even if you do not understand it.
                </Section>

                <PullQuote>
                    "If you don't eat the herbs, the meal is not finished. The herbs are not garnish. They are half the dish."
                </PullQuote>

                <SectionDivider />

                <Section>
                    What changed after 2016, and what did not, is worth recording. Bún Chả Hương Liên — the Obama shop — became, almost overnight, a tourist destination. The seat where the president had eaten was preserved under glass. The exact menu items the two had ordered became <em>Combo Obama</em>: bún chả, fried sea crab spring rolls, two beers, available for the rest of time at a slightly elevated price. The shop did not so much grow as freeze, becoming a small museum of one specific evening in May.
                </Section>

                <Section>
                    Every other bún chả shop in Hanoi continued exactly as before. The grills kept smoking. The patties kept being shaped by hand at five in the morning. The locals kept arriving for lunch, sitting on their plastic stools, eating in fifteen minutes flat, and going back to work. There is a small lesson in this — about which versions of a food culture are durable and which are not. The Obama shop got the headline. The hundred unnamed shops in alleys around it got the actual lunch trade.
                </Section>

                <Section>
                    The dish has not, like phở, gone global. There are bún chả restaurants in California and Berlin and Sydney, but the dish does not travel as smoothly as its noodle-soup cousins. The grill is the problem. A bún chả without charcoal smoke is, technically, still bún chả. It is also a substantially poorer version of itself, and the cooks know this. Gas-grilled pork patties taste like gas-grilled pork patties. Charcoal-grilled ones taste like a Hanoi alleyway in summer, and there are no shortcuts to the second version.
                </Section>

                <SectionDivider />

                <Section>
                    Late afternoon in the Old Quarter. The lunch rush has ended. The clay grill outside the shop is down to embers, the pork tray is empty, the woman who runs the place is sitting on her own plastic stool with a glass of iced tea, watching the motorbikes go by. Someone — a regular — pulls up on a bike, asks if there is any pork left. There is, just enough for one more order. She fans the coals back to life. The smoke rises again. By the time the customer has parked and sat down, the grill is hot, the patties are on, and the smell — pork fat and caramelized sugar and charcoal — is announcing the meal a half-block away, exactly as it has done in this neighborhood since approximately 1925.
                </Section>

                <Section>
                    A US president sat on a stool here once. The grill paid no attention. The grill is still going.
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
                    {['#BunCha', '#Hanoi', '#Streetfood', '#Obama', '#Bourdain', '#FoodCulture', '#Longread'].map(tag => (
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
