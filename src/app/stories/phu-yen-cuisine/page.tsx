'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

export default function PhuYenCuisinePage() {
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
                        backgroundImage: 'url(/images/recipes/banh-canh-he-phu-yen.jpg)',
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
                            'linear-gradient(180deg, rgba(45,26,14,0.3) 0%, rgba(45,26,14,0.2) 35%, rgba(45,26,14,0.92) 100%)',
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
                                    PHÚ YÊN · CENTRAL VIETNAM · LONGREAD
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
                                The Province Nobody Talks About Has the Best Food in Vietnam
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
                                Phú Yên sits between the fame of Hội An and the chaos of Nha Trang, quietly feeding people some of the most honest food on the coast. Most tourists drive straight through. That is their loss.
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
                                <span>8 min read</span>
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
                    "Before sunrise, every morning, my mother would put a pot of pork bones on the stove. By the time we woke up, the whole house smelled like the sea — dried anchovies simmering since 4am, ginger charred black on the gas flame, garlic chives bundled and waiting on the cutting board. She never used a recipe. The recipe was in her hands."
                </motion.p>

                <Section>
                    <DropCap>P</DropCap>hú Yên is not on anybody's Vietnam itinerary. It sits on the south-central coast, a narrow province squeezed between mountains and the East Sea, three hours north of Nha Trang by bus and two hours south of Quy Nhơn. The tourists who pass through are usually on their way somewhere else. The province has no UNESCO heritage site, no famous beach resort, no viral Instagram landmark. What it has — and what the people who were born there will defend loudly and at length — is food so specific to its geography that you cannot properly replicate it anywhere else on the planet.
                </Section>

                <Section>
                    This is a bold claim. Vietnam is a country where every province believes its food is the best food, where the distance between two towns is measured not in kilometers but in which version of a dish is superior. But Phú Yên's case is different, and the difference is geological. The province sits at the intersection of freshwater rivers from the highlands, a coastline thick with anchovies and crab, and red basalt soil that produces garlic chives — <em>hẹ</em> — of unusual intensity. These are not interchangeable ingredients. The anchovies dried in Phú Yên's wind taste different from Khánh Hòa anchovies. The hẹ from the home gardens outside Tuy Hòa city smell, when you slice them, like nothing you will find in a supermarket anywhere else in the world.
                </Section>

                <PullQuote>
                    "The recipe was in her hands — and her hands had been trained by the land."
                </PullQuote>

                <Section>
                    The dish that defines Phú Yên cuisine is <em>bánh canh hẹ</em>. To call it "noodle soup with chives" is technically accurate in the way that calling a Rembrandt "a painting of an old man" is technically accurate. The broth is built from pork neck bones and dried anchovies, both simmered together until the pork gives its collagen and the anchovies give their sea. The noodles are thick and chewy, made from a mix of rice flour and tapioca starch — slippery in a way that makes them satisfying to slurp, substantial enough to hold their shape in the hot broth. On top, coils of fish cake, a scattering of crispy shallots, and the whole thing buried under a fistful of fresh garlic chives, sliced raw and green, going in at the very last second.
                </Section>

                <Section>
                    The chives are not a garnish. They are the point. In most Vietnamese cooking, herbs and vegetables are added cooked or wilted — thought of as support. In bánh canh hẹ, the hẹ arrive raw and alive, placed on top of the scalding broth so they wilt at the table, releasing their sharp, green, onion-garlic perfume the moment the bowl hits the counter. My mother's instruction was non-negotiable: never cook the hẹ. They should still be alive when you taste them. Cooking them would make them sweet and mild. Phú Yên people do not want mild. They want the full wallop of the raw herb hitting the hot broth.
                </Section>

                <SectionDivider />

                <Section>
                    The province's second great contribution to Vietnamese cuisine is <em>bánh hỏi cháo lòng</em> — woven rice vermicelli served with pork congee and offal. This one takes explanation, because it sounds, on paper, like two separate dishes that someone decided to combine for unclear reasons. The bánh hỏi are thin rice noodles pressed into flat mats, almost architectural in their precision — each mat a grid of parallel strands that, when you tear off a piece and hold it up to the light, looks like rice paper woven by a very patient machine. They arrive brushed with scallion oil, warm and slightly sticky, with a texture somewhere between pasta and rice paper. The cháo lòng is a pork congee — rice dissolved into silk, with liver and intestine poached directly in the pot, finished with fried garlic and white pepper.
                </Section>

                <Section>
                    You eat them together. A piece of bánh hỏi torn and dipped into the congee, then lifted dripping to your mouth. The contrast is the dish: the noodle firm and oiled, the congee silky and funky from the offal, the whole thing softened by the scallion and steadied by the pepper. It is breakfast food — eaten at stalls that open at 5am and close by 9, because by 9 the bánh hỏi is gone and the cook has already started tomorrow's batch.
                </Section>

                <PullQuote>
                    In Phú Yên, the best meals are over before most people have checked their phones.
                </PullQuote>

                <Section>
                    Then there is <em>gà lá é</em>, the dish that cannot travel. É leaves — <em>lá é</em> — grow wild in the highlands above Phú Yên and in home gardens across the province. They look like large Thai basil leaves, but the flavor is entirely different: medicinal, slightly camphor, with a resinous back note that coats the mouth. Chicken braised with lá é absorbs this flavor completely, and the result is a dish so specific in its aromatics that cooks who have moved to Saigon and Hanoi describe it with the particular homesickness reserved for tastes that cannot be replicated. You can grow lá é outside Phú Yên, technically. But the leaves are milder, the flavor thinner, the dish almost but not quite right. A few degrees of latitude and the plant changes. The terroir is real.
                </Section>

                <Section>
                    The dish is always served with rice and usually with <em>mắm ruốc Phú Yên</em> — the province's fermented shrimp paste, which differs from the Huế version in being less punchy and more subtly sweet. You dip the chicken in it. The combination of the resinous lá é, the tender chicken fat, and the fermented shrimp is one of those flavor combinations that seems, at first encounter, too strange to work. Then you take a second bite and understand that it couldn't possibly work any other way.
                </Section>

                <SectionDivider />

                <Section>
                    I grew up eating these dishes without knowing they were unusual. When you are a child in Tuy Hòa, you do not think of your breakfast as a regional specialty. You think of it as breakfast. The dried anchovies in the broth are just what broth tastes like. The hẹ on top are just what you put on the soup. It is only when you leave — when you move to a city where these dishes are absent, or present only in pale imitation — that you understand what you had. Most food writing about Phú Yên is written by people who grew up there and moved away. The homesickness is the entire genre.
                </Section>

                <Section>
                    The province is changing. A coastal highway has shortened the drive from Đà Nẵng. A new airport opened in Tuy Hòa a few years ago, bringing package tourists for the first time to Gành Đá Đĩa — the basalt column coastline that has become Phú Yên's one internationally known attraction. The food stalls near the tourist sites now sell dishes from everywhere in Vietnam, adjusted for outsider palates. The bánh canh hẹ at these places is fine. It is not the bowl you would get in a residential alley at 6am, made by a woman who has been making the broth since before you woke up.
                </Section>

                <Section>
                    The real food is still there, if you know where to look. It is in the markets that open before dawn and close before noon. It is in the family stalls on residential streets, the ones with no sign, or a sign so faded it is more suggestion than advertisement. It is in the home kitchens where my mother is still making broth at 4am, still refusing to cook the hẹ, still insisting that the recipe is not something that can be written down.
                </Section>

                <PullQuote>
                    "The recipe is in the hands. The hands were trained by the land."
                </PullQuote>

                <Section>
                    She is right. The land is the recipe. The anchovies from this particular sea, the hẹ from this particular soil, the lá é from these particular hills — they combine into a cuisine that is deeply, stubbornly local. Phú Yên food does not travel well, not because the techniques are difficult, but because the ingredients are irreplaceable. Every attempt to replicate it outside the province is, at some level, an act of translation, and something is always lost.
                </Section>

                <Section>
                    This is not a complaint. It is, if anything, an argument for going. Drive through Phú Yên and you will miss it. Stop — stop in Tuy Hòa, find a market stall before 8am, order the bánh canh hẹ, and watch the owner pile the raw garlic chives on top of your bowl with a generosity that feels like a local secret being shared. Take a bite before the chives wilt. That is when the dish is at its best: the heat of the broth rising through the raw herb, releasing the smell all at once, the whole thing landing like a memory you didn't know you had.
                </Section>

                <SectionDivider />

                {/* Recipe link */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{
                        margin: '48px 0',
                        padding: '32px',
                        background: '#FEF3E2',
                        borderLeft: '4px solid #D97706',
                        borderRadius: '0 8px 8px 0',
                    }}
                >
                    <p style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '12px',
                        fontWeight: 700,
                        letterSpacing: '2px',
                        color: '#D97706',
                        textTransform: 'uppercase',
                        marginBottom: '8px',
                    }}>
                        TRY THE RECIPE
                    </p>
                    <p style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: '1.3rem',
                        color: '#2D1A0E',
                        marginBottom: '16px',
                        fontWeight: 600,
                    }}>
                        Phu Yen Chives Noodle Soup — Bánh Canh Hẹ
                    </p>
                    <p style={{
                        fontFamily: 'Georgia, serif',
                        fontSize: '0.95rem',
                        color: '#6B5544',
                        lineHeight: 1.6,
                        marginBottom: '20px',
                    }}>
                        My mother's recipe, written down for the first time. Pork bones, dried anchovies, thick noodles, and a pile of raw garlic chives that should never be cooked.
                    </p>
                    <Link
                        href="/recipes/phu-yen-chives-noodle-soup"
                        style={{
                            display: 'inline-block',
                            background: '#D97706',
                            color: 'white',
                            fontFamily: 'DM Sans, sans-serif',
                            fontWeight: 600,
                            fontSize: '13px',
                            letterSpacing: '0.05em',
                            padding: '10px 24px',
                            textDecoration: 'none',
                            borderRadius: '4px',
                        }}
                    >
                        View Full Recipe →
                    </Link>
                </motion.div>

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