'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

export default function VietnamStreetFoodCulturePage() {
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
                        src="/images/stories/vietnam-street-food-hero.jpg"
                        alt="Vietnamese street food vendors at dusk"
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
                        {[['Home', '/'], ['Stories', '/stories'], ['Street Food Culture', '']].map(([label, href], i) => (
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
                        <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.24em', color: '#D97706', textTransform: 'uppercase' }}>Street Food Culture · Longread</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(48px, 8vw, 104px)', fontWeight: 700, color: 'white', margin: '0 0 32px', lineHeight: 0.95, letterSpacing: '-0.02em' }}
                    >
                        Eaten on a<br /><span style={{ color: '#D97706', fontStyle: 'italic', fontWeight: 400 }}>plastic stool.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        style={{ color: 'rgba(255,255,255,0.65)', fontSize: 'clamp(17px, 2vw, 20px)', maxWidth: 640, lineHeight: 1.7, margin: 0 }}
                    >
                        Why the most important meals in Vietnam are not served on plates — and what the country's sidewalks understand about food that the rest of the world is still learning.
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
                    The plastic stool is six inches off the ground. The table, if there is one, is barely higher. Your knees are around your ears. The food, when it arrives, is the best you have eaten all year.
                </motion.p>

                <Section>
                    <DropCap>I</DropCap>n every Vietnamese city, on every block of every street, there is a food vendor. She arrives before sunrise with a single charcoal brazier, a stack of plastic stools the color of citrus, a pot of broth that has been simmering since the previous afternoon. She sets up against a wall, or under a tree, or at the corner where two alleys meet. By six in the morning she is feeding ten people at once. By ten she has fed a hundred. By two in the afternoon her pot is empty, her stools are folded, and she has gone home to begin again.
                </Section>

                <Section>
                    There are an estimated four hundred thousand street food vendors in Vietnam. They are not a quirk of the economy. They are not a temporary phenomenon to be replaced by restaurants as the country develops. They are the food culture itself — the spine of how a nation of nearly one hundred million people eats every single day.
                </Section>

                <PullQuote>
                    "If you want to understand Vietnam, eat where the locals eat. They are sitting six inches above the pavement."
                </PullQuote>

                <Section>
                    Anthony Bourdain, who spent more time eating Vietnamese street food than perhaps any Western journalist in history, once observed that the experience of Vietnam happens at ankle height. He was right, but for reasons that go beyond the obvious. The plastic stool is not just a piece of furniture. It is a cultural posture. It signals that the meal is informal, that the cook is the authority, that the eater has come to be fed rather than served. There is no menu. There is no waiter. You sit, you nod, you eat what is put in front of you. You pay with small bills. You leave.
                </Section>

                <Section>
                    The economics of this are remarkable. A bowl of <em>bún bò Huế</em> on a Hanoi sidewalk costs forty thousand đồng — about a euro and a half. A <em>bánh mì</em> with three kinds of cold cut, pâté, pickled vegetables, and herbs costs twenty thousand. A glass of <em>cà phê sữa đá</em> — strong filtered coffee over condensed milk and ice — costs fifteen. For three euros, you can eat better in Vietnam than for thirty in most European cities. This is not because the food is cheap. It is because the food is direct.
                </Section>

                <SectionDivider />

                <Section>
                    To understand Vietnamese street food is to understand the Vietnamese kitchen, because the two are barely separable. The vendor's setup — one burner, one pot, a few prep bowls, a small ice chest — is essentially the home kitchen of a hundred years ago, transposed onto a sidewalk. The technique is identical. The ingredients are identical. The seasoning is calibrated by tasting, not measuring. What separates a great street food stall from a poor one is the same thing that separates a great home cook from a mediocre one: years of paying attention.
                </Section>

                <Section>
                    Mrs. Nga has been making <em>bánh cuốn</em> on Đào Duy Từ street in Hanoi for thirty-one years. Her method has not changed. A thin batter of rice flour and water is ladled onto a cloth stretched over a pot of steaming water. A lid goes on for forty seconds. The lid comes off. The translucent sheet is lifted with a bamboo stick, draped onto a tray, filled with seasoned pork and wood ear mushrooms, rolled, and served. Each roll takes ninety seconds. She makes them five at a time. She has made, at minimum, three million.
                </Section>

                <Section>
                    "If you understand the rice flour, you understand the dish," she told me. "Everything else is decoration."
                </Section>

                <PullQuote>
                    The street is not a downgrade from the restaurant. In Vietnam, the street is the original.
                </PullQuote>

                <Section>
                    There is a tendency, particularly in Western food media, to treat Vietnamese street food as a colorful curiosity — something to be photographed for a travel article and then politely set aside. This misses the point entirely. The street food of Vietnam is not a tourist attraction. It is the working infrastructure of a nation's daily nourishment. When a Vietnamese family wants <em>phở</em> on Sunday morning, they do not cook it themselves. They walk to the corner. They sit on the stool. They eat the bowl made by the woman who has been making that same bowl, with that same broth, since 1992.
                </Section>

                <Section>
                    This is, it turns out, a very efficient way to feed a country. The street vendor specializes in one dish. She makes it twenty times a day, six days a week, for thirty years. The skill that emerges from this kind of repetition is something a restaurant kitchen, with its rotating menu and shifting staff, almost never achieves. There is a reason the best <em>bún chả</em> in Hanoi is not in a five-star hotel. The hotel kitchen has been making bún chả for ten years. The street vendor has been making it for forty.
                </Section>

                <SectionDivider />

                <Section>
                    The rhythm of street food follows the day with extraordinary precision. <em>Phở</em> and <em>bánh cuốn</em> are breakfast — the broth-and-noodle dishes that warm the body before the sun is up. <em>Bún chả</em>, <em>cơm tấm</em>, and <em>bún bò Huế</em> are lunch — heavier, herb-laden, paired with iced tea or cold beer. The afternoon belongs to <em>chè</em> sellers, who push glass carts of sweet bean desserts through residential streets, and to the <em>bánh mì</em> vendors who cluster outside schools and offices.
                </Section>

                <Section>
                    Evening is for <em>bia hơi</em> — fresh draft beer at twelve thousand đồng a glass — and the grilled food culture that surrounds it. <em>Nem nướng</em>, <em>chân gà nướng</em>, <em>mực nướng</em>: pork sausages, chicken feet, squid, all charred over coal in narrow alleys, served on tiny tables that begin to multiply as the sun sets. The smoke rises. The plastic stools fill. By nine in the evening an entire street has become a restaurant without ever having been declared one.
                </Section>

                <Section>
                    Late at night, after the bia hơi crowds disperse, the porridge sellers come out. <em>Cháo lòng</em>, <em>cháo gà</em>, <em>cháo trai</em> — silky rice porridges with offal, chicken, or river clams — sold from carts that move like ghosts through empty streets. They are a comfort that feels almost medicinal: warm, salty, easy to eat at one in the morning when nothing else will quite do.
                </Section>

                <PullQuote>
                    "Each hour of the day in Vietnam belongs to a different food. Miss the hour, miss the dish."
                </PullQuote>

                <SectionDivider />

                <Section>
                    What is changing, and what is not, deserves an honest answer. The street food of Vietnam is under pressure — from health regulations, from city beautification campaigns, from the rise of food delivery apps that allow people to eat at home what they once walked outside to find. In Hanoi and Ho Chi Minh City, vendors are increasingly pushed off main streets and into designated food zones. The stools are sometimes taller now. The tables sometimes have placemats. Some places, the worst kind, have menus.
                </Section>

                <Section>
                    But the core has held. In a country where the average household income is still a fraction of European levels, where home kitchens are small and cooking is time-consuming, where the climate is brutal in the summer and the apartment buildings have no air conditioning, eating outside is not a lifestyle choice. It is an architectural reality. The street is the dining room. It always has been.
                </Section>

                <Section>
                    And so the vendor still arrives at dawn. She still brings her stack of stools. She still sits behind her one burner, ladling broth into bowls that have been washed and rewashed for thirty years. The customers still come. They still squat on the plastic. They still eat without speaking. They still pay with small bills and leave without lingering, because there is a line behind them, and because the food is too good to be eaten slowly.
                </Section>

                <Section>
                    This is, in the end, what Vietnamese street food is. Not a tourist experience. Not a romantic notion. A feeding system, evolved over a century, that does what it does better than almost anything else in the world: it puts a hot bowl of something extraordinary in front of an ordinary person for the price of a coffee, every day, on every street, before most countries have even woken up.
                </Section>

                <Section>
                    The plastic stool is six inches off the ground. The food is always worth bending down for.
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
                    {['#Streetfood', '#Vietnam', '#Hanoi', '#Saigon', '#FoodCulture', '#Longread'].map(tag => (
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