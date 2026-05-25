'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

export default function VietnameseDiasporaFoodPage() {
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

            {/* Hero */}
            <motion.section style={{ position: 'relative', height: '100vh', minHeight: '600px', overflow: 'hidden', opacity: heroOpacity }}>
                <motion.div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'url(/images/recipes/pho-bo-ha-noi.webp)',
                    backgroundSize: 'cover', backgroundPosition: 'center', scale: heroScale
                }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(45,26,14,0.5) 0%, rgba(45,26,14,0.3) 35%, rgba(45,26,14,0.95) 100%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 24px 80px' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#D97706' }} />
                                <span style={{ color: '#D97706', fontSize: '12px', letterSpacing: '2px', fontWeight: 700, fontFamily: 'DM Sans, sans-serif' }}>
                                    NGƯỜI VIỆT XA QUÊ · VIETNAMESE DIASPORA · FOOD & MEMORY
                                </span>
                            </div>
                            <h1 style={{ fontFamily: 'Playfair Display, serif', color: '#FFF', fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '24px', maxWidth: '900px' }}>
                                The Foods That Follow You: What Vietnamese People Miss Most When They Leave Home
                            </h1>
                            <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', maxWidth: '720px', lineHeight: 1.5, marginBottom: '32px' }}>
                                Over five million Vietnamese people live outside Vietnam. Every single one of them has a dish — or several — that they think about more than they expected to.
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', color: 'rgba(255,255,255,0.6)', fontSize: '14px', fontFamily: 'DM Sans, sans-serif' }}>
                                <span>By Quan Huy Nguyen</span>
                                <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'currentColor' }} />
                                <span>May 26, 2026</span>
                                <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'currentColor' }} />
                                <span>8 min read</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 1, 0] }} transition={{ delay: 1.5, duration: 2.5, repeat: Infinity }}
                    style={{ position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)', color: 'rgba(255,255,255,0.6)', fontSize: '11px', letterSpacing: '2px', fontFamily: 'DM Sans, sans-serif', textAlign: 'center' }}>
                    SCROLL TO READ ↓
                </motion.div>
            </motion.section>

            {/* Body */}
            <div style={{ maxWidth: '720px', margin: '0 auto', padding: '80px 24px 40px', fontFamily: 'Georgia, "Iowan Old Style", "Palatino Linotype", serif', color: '#2D1A0E' }}>

                {/* Lead */}
                <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                    style={{ fontSize: '1.45rem', lineHeight: 1.65, fontStyle: 'italic', color: '#4B2E1A', marginBottom: '48px', paddingLeft: '24px', borderLeft: '3px solid #D97706' }}>
                    I have been living in Germany for three years. The thing I miss most is not the weather, not the language, not my childhood bedroom. It is a bowl of bún bò Huế at 7am, still steaming, with the exact smell of lemongrass and shrimp paste that exists nowhere else on earth. I know this because I have looked.
                </motion.p>

                <Section>
                    <DropCap>T</DropCap>here are more than five million Vietnamese people living outside Vietnam — in the United States, France, Australia, Germany, Japan, South Korea, and dozens of other countries. The number has been growing for decades, accelerated first by the refugee waves of the 1970s and 1980s, then by students and workers who followed economic opportunity into Europe and East Asia. The experiences of these communities vary enormously by generation, by destination, by circumstance of departure. But there is one thing that connects almost all of them, regardless of when they left or where they went: the food they miss.
                </Section>

                <Section>
                    This is not a trivial observation. Food nostalgia is a documented psychological phenomenon — the taste and smell of specific foods can trigger more vivid memories than almost any other sensory experience, accessing parts of the brain associated with emotion and identity rather than mere recollection. For Vietnamese people abroad, this manifests in a very specific way: not a general longing for "Vietnamese food," which can be found in restaurants in most major cities, but for particular dishes, from particular places, made in particular ways — dishes whose defining quality is precisely their irreproducibility outside their original context.
                </Section>

                <PullQuote>
                    "It is not a longing for 'Vietnamese food.' It is a longing for a specific bowl, from a specific stall, at a specific hour of a specific morning."
                </PullQuote>

                <SectionDivider />
                <SectionHeader>The Dishes That Travel Least Well</SectionHeader>

                <Section>
                    Not all Vietnamese food is equally difficult to find abroad. Phở has spread to nearly every major city in the world — there are excellent phở restaurants in Paris, Sydney, Berlin, and Los Angeles. Bánh mì has traveled with the diaspora. Fresh spring rolls are available at most Vietnamese restaurants. These dishes have been successfully exported, even if the versions outside Vietnam are often adapted for local palates.
                </Section>

                <Section>
                    The dishes that travel least well are the ones most Vietnamese people abroad miss the most. This is not a coincidence — they travel poorly precisely because what makes them extraordinary is what cannot be replicated: the specific ingredients of a particular region, the specific technique of a specific cook who has been making the same dish for thirty years, the specific context of eating it standing up on a specific street at a specific time of morning. These are not dishes that can be disassembled and reassembled somewhere else. They are place-specific in a way that resists translation.
                </Section>

                <MissedDishCard
                    name="Bún Bò Huế"
                    why="The fermented shrimp paste (mắm ruốc Huế) used in authentic bún bò Huế is a specific regional product with a flavor profile that cannot be replicated with substitutes. The lemongrass needs to be fresh and local. The annatto oil needs to be made correctly. Most versions outside central Vietnam approximate the dish without achieving it."
                    memory="The smell is the thing. Before you see the bowl, before you sit down, the smell of lemongrass and shrimp paste hits you from twenty meters away. That smell does not exist outside Huế and the Vietnamese kitchens that have been trying, imperfectly, to recreate it since."
                    makeItHome="Use real mắm ruốc Huế — not regular shrimp paste, which has a different fermentation profile. Find it at Vietnamese grocery stores. Make the lemongrass oil from scratch. Do not skip the pork knuckle."
                    recipeSlug="hue-spicy-beef-noodle-soup"
                />

                <MissedDishCard
                    name="Bánh Canh Hẹ Phú Yên"
                    why="The garlic chives (hẹ) from Phú Yên's specific soil have an intensity that chives grown elsewhere — including in Vietnamese diaspora gardens in Germany and Australia — do not fully replicate. The dried anchovies from this specific coastal province taste different from anchovies from elsewhere. The dish is the sum of these irreplaceable parts."
                    memory="My mother added the hẹ last — never cooked, always raw, piled high so the heat of the broth wilted them at the table. The smell when they hit the hot broth: sharp, green, alive. I have tried to make this in Germany. The broth is correct. The hẹ is not the same. Something is always missing."
                    makeItHome="Use the freshest garlic chives you can find — Asian grocery stores carry them. Never cook the chives. Pile them on raw and let the hot broth do the work. The anchovy broth needs real dried anchovies, not anchovy paste."
                    recipeSlug="phu-yen-chives-noodle-soup"
                />

                <MissedDishCard
                    name="Cơm Tấm Sài Gòn"
                    why="The broken rice itself — the cracked grains that give cơm tấm its name and its texture — is a specific product that varies by rice variety and milling method. The charcoal grill is non-negotiable for the sườn (pork chop). The scallion oil needs to be made with the right variety of spring onion. The fish sauce dipping sauce has a Saigon-specific sweetness that northern versions do not carry."
                    memory="6am in Saigon. The pork chop still hot from the charcoal, the broken rice absorbing the fat and the scallion oil, the fried egg with the yolk still runny. This is the meal that makes me understand why Vietnamese people in Germany drive two hours to the nearest Vietnamese grocery store on weekends. The need is real."
                    makeItHome="Find broken rice (gạo tấm) at Asian grocery stores — do not substitute jasmine rice. The charcoal flavor of the pork chop is essential: use a cast iron pan over maximum heat if you cannot grill. Add a small amount of pineapple juice to the fish sauce dipping sauce for the authentic Saigon sweetness."
                    recipeSlug="com-tam"
                />

                <MissedDishCard
                    name="Phở Buổi Sáng (Dawn Phở)"
                    why="It is not that phở cannot be made well outside Vietnam — it can. What cannot be replicated is phở at 5:30am, in the cold, from a cart that has been simmering the broth since midnight, drunk before the city is fully awake. The version in a restaurant at noon tastes different from the version from a cart at dawn, even if the recipe is identical. Context is an ingredient."
                    memory="The bowl arrives so hot you can barely hold it. The broth is clear and amber and smells of star anise and charred onion. You eat standing up, sometimes, or on a stool so small your knees are at your shoulders. This is the specific experience that cannot be exported. The recipe can go anywhere. The cart at 5:30am stays in Hanoi."
                    makeItHome="Make the broth the night before and let it rest overnight — it tastes dramatically better the next morning, closer to the 8-hour minimum that makes proper phở. Heat it to a rolling boil before serving. Eat it as early as possible."
                    recipeSlug="pho-bo-ha-noi"
                />

                <SectionDivider />
                <SectionHeader>The Act of Reconstruction</SectionHeader>

                <Section>
                    Vietnamese people abroad cook their home dishes for the same reason they keep photographs: not because the photograph is the thing itself, but because it is the closest available approximation. A bowl of phở made at home in Frankfurt or Melbourne or Toronto is not the same as a bowl from a cart in Hanoi. Everyone who makes it knows this. They make it anyway.
                </Section>

                <Section>
                    The act of reconstruction — finding the closest available ingredients, learning or remembering the technique, making the dish in a kitchen on the wrong side of the world — is itself meaningful. It is a way of maintaining connection to something that cannot be physically reached. Vietnamese communities abroad have created extraordinary culinary ecosystems around this need: Vietnamese grocery stores that stock mắm ruốc from Huế, dried anchovies from the central coast, fresh pandan leaves, specific varieties of rice. The stores exist because the need is deep and persistent.
                </Section>

                <Section>
                    In Germany, where I live, there are Vietnamese grocery stores in most major cities, stocked by supply chains that connect back to Vietnam, maintained by communities that have been here since the 1980s. On weekends, these stores are crowded with Vietnamese families buying the ingredients for dishes they will spend Sunday making, for tables they will set the way their mothers and grandmothers set them. The food is slightly different — some substitutions are unavoidable. The act is the same.
                </Section>

                <PullQuote>
                    "The recipe can go anywhere. The cart at 5:30am stays in Hanoi."
                </PullQuote>

                <SectionDivider />
                <SectionHeader>What Immigrant Kitchens Preserve</SectionHeader>

                <Section>
                    There is a paradox in diaspora cooking: the versions of Vietnamese food that exist outside Vietnam are sometimes more traditional than the versions inside Vietnam. The Vietnamese-American family that has been making the same phở recipe since 1978 has preserved a specific version of phở from a specific time and place — a version that may no longer exist in Vietnam, where the dish has continued to evolve. The Vietnamese grandmother in Paris who still makes bánh chưng for Tết using leaves she has grown in her apartment balcony garden is practicing a tradition that has become less common in Ho Chi Minh City, where people increasingly buy bánh chưng pre-made from the market.
                </Section>

                <Section>
                    Diaspora cooking does not just miss the food of home. It sometimes preserves it — keeps alive versions of dishes that have changed or disappeared in the original place. This is one of the stranger gifts of displacement: the cultures that are forced to leave sometimes take the clearest pictures of what they left.
                </Section>

                <Section>
                    For those of us who left more recently — students, workers, people who came for specific reasons and stayed longer than expected — the relationship with home food is different from the first generation who left under more dramatic circumstances. We can go back. The food we miss is still there, mostly, in the places we remember it. The missing is less about loss than about distance — the frustrating gap between knowing exactly what you want and not being able to have it on a Tuesday morning in Gotha or in Hamburg or in Melbourne when the craving hits at 7am.
                </Section>

                <SectionDivider />

                {/* Emotional section — most personal */}
                <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                    style={{ fontSize: '1.15rem', lineHeight: 1.85, marginBottom: '28px', color: '#2D1A0E' }}>
                    The bún bò Huế I cannot find in Germany, I make myself now. It takes most of a Sunday. The mắm ruốc comes from a Vietnamese grocery store in Frankfurt, shipped from a supplier in Vietnam. The lemongrass is fresh. The annatto oil I make from scratch. The broth simmers for three hours. When I taste it, it is close — genuinely close — but not the same. The shrimp paste from the grocery store is slightly different from the one in Huế. The lemongrass is slightly milder. The water is different.
                </motion.p>

                <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                    style={{ fontSize: '1.15rem', lineHeight: 1.85, marginBottom: '28px', color: '#2D1A0E' }}>
                    I eat it anyway. Every time I make it, the gap between what it is and what I remember it being gets slightly smaller — not because the dish improves, but because the memory shifts to accommodate the version I can actually make. This is, I think, how diaspora food works over time: the original is preserved in memory, the reconstruction improves with practice, and eventually the reconstructed version becomes its own thing — not the same as the original, not a substitute for it, but something real and its own.
                </motion.p>

                <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                    style={{ fontSize: '1.15rem', lineHeight: 1.85, marginBottom: '48px', color: '#2D1A0E' }}>
                    That is what this site is, at some level: a collection of reconstructions. Recipes from a kitchen in Germany, written from memory and from love, for the five million Vietnamese people who know exactly what they're missing and are looking for the closest possible approximation. The recipes will not taste exactly like home. Nothing will. But they will taste like home enough — and some mornings, that is all you need.
                </motion.p>

                <SectionDivider />

                {/* Recipes for homesick Vietnamese */}
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '48px 0', padding: '32px', background: '#FEF3E2', borderLeft: '4px solid #D97706', borderRadius: '0 8px 8px 0' }}>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', color: '#D97706', textTransform: 'uppercase', marginBottom: '8px' }}>
                        FOR WHEN YOU MISS HOME
                    </p>
                    <p style={{ fontFamily: 'Georgia, serif', fontSize: '14px', color: '#6B5544', fontStyle: 'italic', marginBottom: '20px', lineHeight: 1.6 }}>
                        These are the recipes built for diaspora kitchens — detailed enough to work without local expertise, honest about where substitutions are unavoidable.
                    </p>
                    {[
                        { title: 'Bún Bò Huế — Huế Spicy Beef Noodle Soup', slug: 'hue-spicy-beef-noodle-soup', note: 'Use real mắm ruốc Huế. Worth the effort.' },
                        { title: 'Bánh Canh Hẹ — Phú Yên Chives Noodle Soup', slug: 'phu-yen-chives-noodle-soup', note: 'Use the freshest hẹ you can find. Add them raw.' },
                        { title: 'Phở Bò Hà Nội', slug: 'pho-bo-ha-noi', note: 'Make the broth the night before. Eat at dawn.' },
                        { title: 'Cơm Tấm Sài Gòn', slug: 'com-tam', note: 'Find broken rice. The scallion oil is not optional.' },
                        { title: 'Thịt Kho Hột Vịt', slug: 'thit-kho-hot-vit', note: 'Use coconut water, not tap water. This is the whole point.' },
                        { title: 'Bánh Bao Nhân Thịt Trứng Cút', slug: 'steamed-pork-quail-egg-buns', note: 'For the Sunday mornings that feel furthest from home.' },
                    ].map((recipe) => (
                        <Link key={recipe.slug} href={`/recipes/${recipe.slug}`}
                            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '12px 0', borderBottom: '1px solid rgba(75,46,26,0.1)', textDecoration: 'none', gap: '16px' }}>
                            <div>
                                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.95rem', color: '#2D1A0E', fontWeight: 600 }}>{recipe.title}</div>
                                <div style={{ fontFamily: 'Georgia, serif', fontSize: '12px', color: '#8B6F5A', fontStyle: 'italic', marginTop: '2px' }}>{recipe.note}</div>
                            </div>
                            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#D97706', fontWeight: 600, flexShrink: 0 }}>Recipe →</span>
                        </Link>
                    ))}
                </motion.div>

                <div style={{ marginTop: '48px', textAlign: 'center' }}>
                    <Link href="/stories" style={{ color: '#D97706', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, textDecoration: 'none', fontSize: '14px' }}>
                        ← Back to all stories
                    </Link>
                </div>
            </div>
        </article>
    );
}

// ── Sub-components ──────────────────────────────────────────────────────────

function Section({ children }: { children: React.ReactNode }) {
    return (
        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6 }}
            style={{ fontSize: '1.15rem', lineHeight: 1.85, marginBottom: '28px', color: '#2D1A0E' }}>
            {children}
        </motion.p>
    );
}

function SectionHeader({ children }: { children: React.ReactNode }) {
    return (
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '48px 0 24px' }}>
            <div style={{ width: '28px', height: '2px', background: '#D97706', flexShrink: 0 }} />
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: 700, color: '#2D1A0E', margin: 0 }}>
                {children}
            </h2>
        </motion.div>
    );
}

function MissedDishCard({ name, why, memory, makeItHome, recipeSlug }: {
    name: string; why: string; memory: string; makeItHome: string; recipeSlug: string;
}) {
    return (
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.55 }}
            style={{ margin: '32px 0', background: '#fff', border: '1px solid rgba(75,46,26,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ padding: '16px 24px', borderBottom: '1px solid rgba(75,46,26,0.07)', background: '#2D1A0E', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', fontWeight: 700, color: '#F5EDE3', margin: 0 }}>{name}</h3>
                <Link href={`/recipes/${recipeSlug}`}
                    style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 600, color: '#D97706', textDecoration: 'none', background: 'rgba(217,119,6,0.15)', padding: '4px 12px', borderRadius: '100px' }}>
                    Recipe →
                </Link>
            </div>
            <div style={{ padding: '20px 24px' }}>
                <div style={{ marginBottom: '16px' }}>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', color: '#D97706', marginBottom: '6px' }}>WHY IT DOESN'T TRAVEL</p>
                    <p style={{ fontFamily: 'Georgia, serif', fontSize: '13.5px', lineHeight: 1.7, color: '#4B2E1A', margin: 0 }}>{why}</p>
                </div>
                <div style={{ padding: '14px', background: '#FDFAF7', borderRadius: '4px', borderLeft: '3px solid rgba(75,46,26,0.2)', marginBottom: '12px' }}>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', color: '#4B2E1A', marginBottom: '6px' }}>THE MEMORY</p>
                    <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: '13.5px', lineHeight: 1.7, color: '#4B2E1A', margin: 0 }}>{memory}</p>
                </div>
                <div style={{ padding: '12px', background: '#FFFBF0', borderRadius: '4px', borderLeft: '3px solid #D97706' }}>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', color: '#D97706', marginBottom: '6px' }}>HOW TO MAKE IT WORK ABROAD</p>
                    <p style={{ fontFamily: 'Georgia, serif', fontSize: '12.5px', lineHeight: 1.6, color: '#6B5544', margin: 0 }}>{makeItHome}</p>
                </div>
            </div>
        </motion.div>
    );
}

function PullQuote({ children }: { children: React.ReactNode }) {
    return (
        <motion.blockquote initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            style={{ margin: '48px 0', padding: '24px 0', borderTop: '2px solid #D97706', borderBottom: '2px solid #D97706', fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', lineHeight: 1.4, color: '#4B2E1A', textAlign: 'center', fontWeight: 400 }}>
            {children}
        </motion.blockquote>
    );
}

function DropCap({ children }: { children: React.ReactNode }) {
    return (
        <span style={{ float: 'left', fontFamily: 'Playfair Display, serif', fontSize: '5rem', fontWeight: 700, lineHeight: 0.85, color: '#D97706', paddingRight: '12px', paddingTop: '6px' }}>
            {children}
        </span>
    );
}

function SectionDivider() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '48px 0', gap: '12px' }}>
            {[0, 1, 2].map(i => <span key={i} style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#D97706', opacity: 0.6 }} />)}
        </div>
    );
}