'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

export default function VietnameseFishHotpotPage() {
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
                        src="/images/stories/vietnamese-fish-hotpot-hero.jpg"
                        alt="Vietnamese fish hotpot bubbling on a charcoal stove"
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
                        {[['Home', '/'], ['Stories', '/stories'], ['Mekong Heritage', '']].map(([label, href], i) => (
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
                        <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.24em', color: '#D97706', textTransform: 'uppercase' }}>Mekong Heritage · Longread</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(48px, 8vw, 104px)', fontWeight: 700, color: 'white', margin: '0 0 32px', lineHeight: 0.95, letterSpacing: '-0.02em' }}
                    >
                        The River<br /><span style={{ color: '#D97706', fontStyle: 'italic', fontWeight: 400 }}>in a Pot.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        style={{ color: 'rgba(255,255,255,0.65)', fontSize: 'clamp(17px, 2vw, 20px)', maxWidth: 640, lineHeight: 1.7, margin: 0 }}
                    >
                        Vietnamese fish hotpot is not one dish but many — a recipe written by the Mekong itself, taught to a country that learned to listen to its rivers.
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
                    The pot is set in the middle of the table on a small charcoal stove. The broth is the color of weak tamarind tea, the surface trembling with red dots of chili oil. A platter of raw fish, a mountain of greens, a basket of herbs. You cook it yourself. You season it yourself. You decide, with every bite, what the dish becomes.
                </motion.p>

                <Section>
                    <DropCap>I</DropCap>n the Mekong Delta, where the river splits into nine arms before reaching the South China Sea, a meal almost always begins with a question. Not "what shall we eat?" — that part is decided by what came up in the morning's nets. The question is "what kind of <em>lẩu</em>?" The pot is constant. The river is constant. What changes is the fish, and with it, everything else.
                </Section>

                <Section>
                    <em>Lẩu cá</em> — Vietnamese fish hotpot — is one of those dishes that resists the standardization most cuisines impose on themselves once they go global. There is no single recipe. There is barely a single category. A pot of <em>lẩu cá kèo</em> in a Saigon backstreet, sour with tamarind and snake-headed with the small wriggling fish that give the dish its name, has almost nothing in common with the <em>lẩu cá lăng</em> served in Hanoi — a sweeter, milder broth built around a pale river catfish. They share a vessel. They share a method. They share little else.
                </Section>

                <PullQuote>
                    "There is no single fish hotpot in Vietnam. There is the river that day, and the cook who knows what to do with it."
                </PullQuote>

                <Section>
                    The geography explains a lot. Vietnam is shaped like a long question mark hanging over the sea, with two great river systems anchoring its ends — the Red River in the north, the Mekong in the south — and a thousand smaller rivers braiding the central coast in between. Where there are rivers there are fish, and where there are fish there is, almost always, a hotpot. The dish is the cuisine's way of cooking on the water's terms: take whatever the river gives you that morning, simmer it gently, season it with what grows on the bank.
                </Section>

                <Section>
                    In the southern delta, that means tamarind. The pulp of the tamarind pod is dissolved in hot water and added to the broth in measured spoonfuls, building a tartness that cuts through the fattiness of catfish or the slight muddiness of <em>cá kèo</em>. There is sugar — palm sugar, specifically, which lends a darker sweetness than cane. There is fish sauce, but used here as background music rather than melody. There are chilies, garlic, lemongrass, and a spoonful of fermented shrimp paste called <em>mắm tôm</em>, which the broth treats like a secret it is reluctant to give up.
                </Section>

                <SectionDivider />

                <Section>
                    Mr. Hai has been cooking <em>lẩu cá kèo</em> on Cô Bắc street in Saigon for twenty-six years. His stall is a half-storey above the sidewalk, reached by three steps that have worn into a slight U from the foot traffic. The fish arrives every morning by motorbike from a wholesaler in Cần Giuộc, an hour south, and it arrives <em>alive</em> — a basin of finger-length fish writhing in shallow water, more snake than fish, which is why they are called <em>cá kèo</em>, "the noisemaker fish."
                </Section>

                <Section>
                    "If they stop moving before they hit the broth," Mr. Hai told me, "the lẩu is already lost."
                </Section>

                <Section>
                    He cooks the fish whole and live. The broth goes onto the table boiling. The fish go in straight from the basin, and for ten or fifteen seconds they continue to move — the entire purpose of which is theater, but a kind of theater that means something. The fish are fresh. The cook is honest. The diner is part of the cooking. By the time you have lowered your chopsticks into the pot, the fish have stilled, the flesh has firmed, and a flavor has emerged that no commercial broth concentrate has ever come close to.
                </Section>

                <PullQuote>
                    The hotpot is not a dish. It is a small theater of trust between the river, the cook, and the eater.
                </PullQuote>

                <SectionDivider />

                <Section>
                    The greens matter as much as the fish. A platter of <em>rau đắng</em> — bitter greens — is non-negotiable in the southern version, their faintly medicinal sharpness designed to cut the richness of the broth. There is water spinach, snapped into knuckle-length pieces. There are sprigs of dill, an inheritance from the French colonial pantry that took root in Vietnamese cooking and never left. There are cá kèo cooks who will refuse to serve a pot that does not include all four greens. The dish, they will tell you, is unbalanced without them.
                </Section>

                <Section>
                    What you do with this material is up to you. The pot sits in the middle of the table, and each diner cooks for themselves — fish into the broth for thirty seconds, greens for ten, then everything fished out into a small bowl with rice noodles and dipping sauce. The dipping sauce is its own argument. Some swear by <em>nước mắm me</em> — fish sauce thinned with tamarind. Others insist on <em>muối ớt xanh</em> — green chilies pounded with salt and lime. The pot continues to bubble. The conversation continues to flow. An hour passes. Two.
                </Section>

                <Section>
                    This is, perhaps, the deepest point about Vietnamese fish hotpot: it is the slowest fast food in the world. The cooking is fast. The eating is not. A bowl of phở takes ten minutes from sit to leave. A pot of <em>lẩu cá</em> can stretch an entire afternoon, and is meant to.
                </Section>

                <SectionDivider />

                <Section>
                    The northern version of the dish, <em>lẩu cá lăng</em>, runs by different rules. The fish — <em>cá lăng</em>, a freshwater catfish from the Red River — is firmer, milder, and almost always served in steaks rather than whole. The broth is sweeter, less aggressively soured. Tamarind gives way to green tomato and pineapple. The greens are different too: water dropwort, mustard greens, and the pale celery-like <em>rau cần</em> that thrives in the cool of a Hanoi spring.
                </Section>

                <Section>
                    Travel further west, into the Central Highlands, and the dish shifts again. The Bahnar and Ê-đê peoples of Đắk Lắk make a hotpot from forest fish caught in the streams that run off the volcanic plateau, seasoned with bamboo shoots and <em>lá giang</em> — a sour vine leaf that grows wild on the slopes. The broth is clear, almost austere by southern standards. There is no tamarind, no fish sauce. Just the fish, the leaves, and salt.
                </Section>

                <Section>
                    Each version is, in its own way, a portrait of where it comes from. The southern delta version is generous, loud, herbal, and slightly chaotic — the food of a region that has always had abundance to spare. The northern version is cooler, more disciplined, with a kind of restraint that mirrors the cuisine of Hanoi more broadly. The highland version is what remains when you strip everything that did not come out of the immediate landscape — fish, leaves, salt, fire.
                </Section>

                <PullQuote>
                    Show me your hotpot, and I will tell you what river you grew up next to.
                </PullQuote>

                <SectionDivider />

                <Section>
                    What is interesting about <em>lẩu cá</em>, and what is increasingly under threat, is that it remains one of the few Vietnamese dishes that genuinely cannot be industrialized. The broth must be made fresh. The fish must be alive — or close enough that the cook can vouch for the morning's catch. The greens must be in season, not airfreighted. The pot must be hot enough to bubble for the duration of a meal, which means a real flame, not an induction coil. Every shortcut breaks something.
                </Section>

                <Section>
                    This has consequences. The dish has not, and likely will not, travel well. There are Vietnamese restaurants in Berlin and Los Angeles that serve passable <em>phở</em>, decent <em>bánh mì</em>, even respectable <em>bún chả</em>. There is almost nowhere outside Vietnam that serves a real <em>lẩu cá kèo</em>, because the <em>cá kèo</em> are not exported, and the substitutes do not work, and the dish refuses to be itself with anything else.
                </Section>

                <Section>
                    This is, from a certain angle, a problem. From another, it is the dish's defense. Some foods belong to a place. They make sense within the geography that made them, and they lose their sense outside it. The fish hotpot of Vietnam is one of those foods. To eat it properly, you mostly have to be there.
                </Section>

                <InlineImage
                    src="/images/stories/lau-ca-1.jpg"
                    alt="A Vietnamese street vendor preparing lẩu cá"
                    caption="A lẩu cá vendor in Saigon assembles a hotpot in under a minute — fresh fish, seasonal vegetables, and bubbling broth."
                />
                <SectionDivider />

                <Section>
                    On Cô Bắc street, the afternoon stretches. The pot has been topped up twice. The fish that arrived alive at noon have all been eaten by three. Mr. Hai is wiping down the counter. A late customer arrives — a regular, judging by the nod — and asks if there is any broth left. There is, just enough. Mr. Hai ladles it into a smaller pot and lights the burner.
                </Section>

                <Section>
                    "The last bowl," he tells me, "is always the best one. It has been thinking about itself all afternoon."
                </Section>

                <Section>
                    The fish hotpot of Vietnam is, in the end, a portrait of a country that learned a long time ago not to fight the rhythm of its rivers. The fish come when they come. The greens grow when they grow. The pot sits in the middle of the table, and it asks you to slow down, to share, to taste your way into the meal rather than be served it. There is no recipe. There is no fixed version. There is only the river that day, the cook who knows what to do with it, and the small theater of trust that happens around a pot of bubbling broth in a country that has been eating this way for longer than most countries have been countries at all.
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
                    {['#FishHotpot', '#LauCa', '#Mekong', '#Vietnam', '#FoodCulture', '#Longread'].map(tag => (
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