'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

export default function WhyVietnameseFoodIsWorldFamousPage() {
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
                        backgroundImage: 'url(/images/recipes/do-an-duong-pho.jpg)',
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
                            'linear-gradient(180deg, rgba(45,26,14,0.35) 0%, rgba(45,26,14,0.2) 35%, rgba(45,26,14,0.93) 100%)',
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
                                    VIETNAMESE CUISINE · CULTURE · LONGREAD
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
                                Why Vietnamese Food Conquered the World
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
                                It is not an accident. It is geography, history, and two thousand years of stubbornly refusing to let anyone else's cuisine replace your own.
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
                                <span>May 19, 2026</span>
                                <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'currentColor' }} />
                                <span>7 min read</span>
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
                {/* Lead */}
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
                    In 2016, Anthony Bourdain sat on a plastic stool in Hanoi, eating bún chả with the President of the United States, and said: "This is the best meal I've ever had." He was not exaggerating for the camera. He had been saying versions of the same thing about Vietnamese food for twenty years. The rest of the world was finally catching up.
                </motion.p>

                <Section>
                    <DropCap>T</DropCap>here is a version of this story that begins with Anthony Bourdain and ends with a viral food tour on YouTube. That version is true, but it is not the whole truth. Vietnamese cuisine did not become one of the most celebrated in the world because a famous television host liked it. It became celebrated because it is, by almost any objective measure, exceptional — and because the people who make it have spent two thousand years refusing to let that fact be diluted.
                </Section>

                <Section>
                    The foundation is geography. Vietnam is shaped like a stretched letter S, running 1,650 kilometers from the Chinese border in the north to the Gulf of Thailand in the south. Along this spine: the Red River Delta, the Central Highlands, the Mekong Delta, and a coastline that gives the country access to some of the most productive fishing waters in Southeast Asia. The result is a larder of extraordinary range. The north has cool winters that support aromatics — star anise, cinnamon, ginger — that would not grow in the tropical south. The central coast has anchovies and shrimp paste. The Mekong Delta has freshwater fish, coconuts, and a soil so fertile it produces three rice harvests a year. A cook working with Vietnamese ingredients is working with a pantry that most cuisines can only approximate.
                </Section>

                <PullQuote>
                    "Vietnamese food is not one cuisine. It is fifty cuisines that have learned to share a table."
                </PullQuote>

                <Section>
                    But geography alone does not make a cuisine great. Japan has extraordinary geography. So does Peru. What makes Vietnamese food distinctive is the second factor: history, specifically the history of surviving cultural domination without surrendering culinary identity.
                </Section>

                <Section>
                    Vietnam was under Chinese rule for roughly a thousand years, from 111 BC to 938 AD. The cultural impact was enormous — writing system, Confucian social structure, certain cooking techniques. But the food remained stubbornly, defiantly Vietnamese. The Chinese brought tofu; the Vietnamese made it their own. They brought noodles; the Vietnamese developed a dozen distinct noodle dishes that bear no meaningful resemblance to anything in the Chinese canon. The French arrived in the nineteenth century and colonized the country for nearly a century. They brought baguettes. The Vietnamese took the baguette, hollowed it out, and filled it with pâté, pickled daikon, lemongrass pork, and fresh cilantro, creating bánh mì — a dish that is now recognized worldwide as one of the great street foods of any culture. The French also brought coffee. The Vietnamese added condensed milk and egg yolk and invented things the French had never imagined.
                </Section>

                <Section>
                    This pattern — absorb the foreign, transform it completely, make it more Vietnamese than the original — is the defining characteristic of the cuisine. It is the reason Vietnamese food feels simultaneously familiar and surprising to outsiders. You recognize the French baguette; you do not recognize what has been done to it. You recognize the Chinese dumpling; the bánh bao version is sweeter, softer, more delicate. The familiar ingredients are there, but they have been rearranged into something that could only have happened in this specific country, with this specific history.
                </Section>

                <SectionDivider />

                <Section>
                    The third factor is health. Vietnamese food is, by the standards of most global cuisines, extraordinarily nutritious. A bowl of phở contains protein, collagen from the long-simmered bones, fresh herbs that function as antiinflammatories, rice noodles for carbohydrate, and a broth so mineral-rich that nutritionists have written papers about it. The fresh spring roll — gỏi cuốn — is essentially a delivery mechanism for raw vegetables, herbs, and protein, wrapped in rice paper that adds almost no calories. The Vietnamese diet is heavy in vegetables, fish, and fresh herbs, light in refined sugar and saturated fat. This is not accidental. It is the product of a culture that developed its food in conditions of scarcity, where every ingredient had to justify its presence in the bowl.
                </Section>

                <Section>
                    The herb culture deserves its own paragraph. No cuisine on earth uses fresh herbs the way Vietnamese cooking does. At a Vietnamese table, the herbs are not a garnish. They are a structural element of the meal. A bowl of bún bò Huế arrives with a plate of Thai basil, rice paddy herb, banana blossom, and bean sprouts — not to decorate the dish, but to be added to it, changing its flavor profile bite by bite. A plate of bánh xèo comes with mustard greens wide enough to wrap around your hand. Phở is incomplete without the fresh herb plate. This live, at-the-table herb component is something that distinguishes Vietnamese food from almost every other cuisine — the meal is not finished in the kitchen. The diner finishes it at the table.
                </Section>

                <PullQuote>
                    The meal is not finished in the kitchen. The diner finishes it at the table.
                </PullQuote>

                <Section>
                    The fourth factor is balance — specifically, the Vietnamese obsession with the five flavors. Vietnamese cooking is built on the principle that a properly composed dish should contain salty, sweet, sour, spicy, and umami in proportions that shift with each bite but never disappear entirely. The <em>nước chấm</em> — the dipping sauce that appears at virtually every Vietnamese meal — is a masterclass in this philosophy: fish sauce for salt and umami, lime for acid, sugar for sweetness, chili for heat, garlic for depth. Adjusted by every cook, for every dish, in proportions that are never written down and always correct. The sauce is the philosophy made liquid.
                </Section>

                <Section>
                    Then there is the texture obsession. Vietnamese cuisine is one of the few in the world where texture is treated as seriously as flavor. The contrast between the crisp and the soft, the hot and the cold, the cooked and the raw — these are not accidents. They are designed. Bánh mì works because the crust shatters against the softness of the pâté and the crunch of the pickled vegetables. Phở works because the silky noodle contrasts with the thin, just-cooked beef and the snap of the bean sprouts. Gỏi cuốn works because the rice paper gives way to the crunch of the vegetables inside. A Vietnamese cook who allows a dish to become texturally monotonous has failed, regardless of how good it tastes.
                </Section>

                <SectionDivider />

                <Section>
                    There is a final factor that is harder to quantify but impossible to ignore: the Vietnamese people's relationship with their food is unusually intense, even by the standards of food-obsessed cultures. In Vietnam, arguments about the correct way to make phở are not casual. They are passionate, detailed, and sometimes generational. A family that has been making bánh cuốn for three generations will defend their specific method — the ratio of rice flour to tapioca, the temperature of the steaming cloth, the exact proportion of wood ear mushroom in the filling — with the specificity of a lawyer and the conviction of a believer.
                </Section>

                <Section>
                    This intensity is what has kept the cuisine alive through colonization, war, displacement, and globalization. When Vietnamese communities settled in France, in Australia, in the United States, they brought their food with them — not as nostalgia, but as identity. The phở shops that opened in Paris in the 1980s were not serving a simplified export version. They were serving the real thing, made by people who had memorized their mother's broth recipe because forgetting it would mean losing something irreplaceable.
                </Section>

                <Section>
                    The world noticed. It noticed the food first — the clean flavors, the freshness, the extraordinary value of a bowl of soup that cost almost nothing and tasted like it should cost everything. Then it noticed the stories behind the food: the thousand-year history, the French colonial shadow, the war, the diaspora, the resilience. Vietnamese cuisine became a window into Vietnamese culture, and the world discovered that both were more complex and more beautiful than a single tourist meal could contain.
                </Section>

                <PullQuote>
                    The phở is never just the phở. It is everything that happened before the phở.
                </PullQuote>

                <Section>
                    Anthony Bourdain understood this. That plastic stool in Hanoi was not just a good meal. It was a statement about what food can be when it is left to develop on its own terms, without the interference of trend or commerce or the anxious need to appeal to everyone. Vietnamese food is famous because it is honest. It is honest because the people who make it have never been willing to make it otherwise.
                </Section>

                <Section>
                    The world has many great cuisines. Vietnam's is one of the few that feels, in every bite, like it was made specifically for you — and also like it would exist exactly the same way even if you had never shown up. That combination of generosity and self-possession is rare. It is, in the end, why we keep coming back.
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