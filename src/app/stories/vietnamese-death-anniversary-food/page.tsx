'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

export default function VietnameseGioFoodPage() {
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
                    backgroundImage: 'url(/images/recipes/cung-dinh-hue.jpg)',
                    backgroundSize: 'cover', backgroundPosition: 'center', scale: heroScale
                }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(45,26,14,0.5) 0%, rgba(45,26,14,0.3) 35%, rgba(45,26,14,0.95) 100%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 24px 80px' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#D97706' }} />
                                <span style={{ color: '#D97706', fontSize: '12px', letterSpacing: '2px', fontWeight: 700, fontFamily: 'DM Sans, sans-serif' }}>
                                    ĐÁM GIỖ · VIETNAMESE DEATH ANNIVERSARY · FOOD & MEMORY
                                </span>
                            </div>
                            <h1 style={{ fontFamily: 'Playfair Display, serif', color: '#FFF', fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '24px', maxWidth: '900px' }}>
                                The Feast for the Dead: Food, Memory, and the Vietnamese Death Anniversary
                            </h1>
                            <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', maxWidth: '720px', lineHeight: 1.5, marginBottom: '32px' }}>
                                In Vietnam, the dead are fed before the living. And the food that feeds them — the boiled chicken, the sticky rice, the deceased's favorite dish — carries the entire weight of how a family remembers.
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
                    Every year, on the anniversary of my grandfather's death, my grandmother wakes before dawn and begins cooking. She does not cook because she is sad. She cooks because he is coming. And when he arrives — his spirit, she says, drawn by the smell of the food he loved — she wants everything to be ready.
                </motion.p>

                <Section>
                    <DropCap>G</DropCap>iỗ — pronounced somewhere between "yo" and "yaw," impossible to get right the first time — is the Vietnamese death anniversary. It is held annually, on the lunar calendar date of a person's death, and it is one of the most important ritual occasions in Vietnamese family life. Not a solemn occasion. Not a sad one, primarily. A gathering — loud, abundant, smelling of garlic and incense — where the extended family comes together to remember someone who is gone and to feed them, symbolically, the things they loved.
                </Section>

                <Section>
                    The food is offered to the deceased before it is eaten by the living. This is not metaphor. The dishes are arranged on the altar with chopsticks, rice bowls, and small cups of rice wine, as if a place has been set at a table that no longer exists in the physical world. The oldest male member of the family burns incense, pours the wine, and speaks the invitation: come and eat with us. The incense burns down — fifteen minutes, twenty minutes. Then the family eats.
                </Section>

                <Section>
                    What goes on that altar — what goes into that meal — is the subject of this story. Because the food of đám giỗ is not ordinary food. It is food that carries the specific weight of a specific person, their specific tastes, and a family's specific memory of who they were. Understanding it is understanding something essential about how Vietnamese people relate to the dead.
                </Section>

                <PullQuote>
                    "In Vietnam, the dead are fed before the living. The food is how you tell them you still remember."
                </PullQuote>

                <SectionDivider />
                <SectionHeader>The Structure of the Giỗ Meal</SectionHeader>

                <Section>
                    A proper đám giỗ feast has a structure that is recognizable across regions and families, even as the specific dishes vary. There are two layers: the ritual dishes that appear at every giỗ regardless of who is being honored, and the personal dishes — the deceased's favorites — that make each giỗ specific to one person.
                </Section>

                <Section>
                    The ritual dishes are the spine of the meal. A whole boiled chicken (gà luộc) almost always appears — chicken is the most honored meat in Vietnamese culture, reserved for significant occasions, its presence on the altar a mark of respect for the person being commemorated. Xôi — sticky rice, usually the plain white variety or xôi gấc (red, for luck) — sits alongside it. A clear soup. A stir-fry. Nem chả. These dishes are the language of formality; their presence says: this occasion is serious, this person mattered.
                </Section>

                <Section>
                    The personal dishes are where the meal becomes a portrait. My grandfather loved cá kho tộ — clay pot caramelized fish, the dish my grandmother made on Fridays when the fish from the market was freshest. He loved bún bò Huế, which she made from scratch once a month because the broth took half a day. He loved chè đậu xanh — mung bean sweet soup — which he ate slowly after dinner while watching the evening news. Every year, these dishes appear on the altar beside the formal ones. Not because they are traditional. Because they were his.
                </Section>

                <DishCard
                    name="Gà Luộc — Whole Boiled Chicken"
                    significance="The most essential ritual dish of đám giỗ. A whole chicken, boiled in lightly salted water until the skin is taut and silky-golden, served with ginger fish sauce (nước mắm gừng). The chicken must be presented whole — not carved, not portioned — because wholeness is part of the symbolism. A whole chicken on the altar represents completeness, respect, and the idea that nothing has been withheld from the person being honored."
                    howMade="Bring a pot of lightly salted water to a boil. Submerge the whole chicken, bring back to a gentle simmer, cover, and cook for 25-30 minutes. Turn off the heat and rest the chicken in the covered pot for 15 more minutes — this finishes it without overcooking. Lift out carefully to keep the skin intact. The skin should be smooth, golden, and unbroken."
                    regional="The ginger fish sauce (nước mắm gừng) dipping sauce varies by region: in the north, just ginger, fish sauce, and lime; in the south, sweeter, sometimes with a touch of sugar and fresh chili. The chicken itself is the constant."
                />

                <DishCard
                    name="Xôi — Sticky Rice"
                    significance="Sticky rice at a giỗ is an offering of substance — it is filling, laborious to prepare, and deeply traditional. White xôi (xôi trắng) is the most common altar offering because its purity is appropriate for ritual contexts. Xôi gấc — the brilliant red sticky rice made with gấc fruit — appears at giỗ in households where it is a family tradition, the red color carrying its symbolic association with luck and remembrance."
                    howMade="Soak glutinous rice for at least 4 hours, ideally overnight. Drain and steam over boiling water for 25-30 minutes until fully cooked and slightly sticky. The grains should hold together when pressed but not be gummy. Season lightly with salt."
                    regional="In the south, xôi may be served with savory toppings — dried shrimp, crispy shallots, mung bean — even at giỗ. In the north, the altar xôi is typically plain, with toppings served separately at the table."
                />

                <DishCard
                    name="Nem / Chả Giò — Fried Spring Rolls"
                    significance="Fried spring rolls appear at virtually every Vietnamese celebratory feast, including đám giỗ, because they represent abundance and effort — the filling must be made, the rolls must be wrapped, the frying must be done in batches and timed so they arrive at the table crisp. A tray of freshly fried chả giò on the altar is a gesture of care: someone spent the morning doing this for you."
                    howMade="Fill rice paper or wheat wrappers with a mixture of pork mince, crab meat or shrimp, glass noodles, wood ear mushroom, shallots, and seasoning. Roll tightly. Fry in oil at 170°C until deep golden and shatter-crisp. Drain on paper. Serve immediately — they lose their crunch within minutes."
                    regional="Northern nem rán use wheat wrappers and are smaller and more cylindrical. Southern chả giò use rice paper wrappers and are larger, with a more shattery texture. The filling varies — some families add taro or jicama, others keep it strictly pork."
                />

                <DishCard
                    name="Canh — Clear Soup"
                    significance="A soup is almost always present at đám giỗ, both on the altar and at the table. It serves a structural role in the Vietnamese meal — the liquid counterpoint to the rich and solid dishes — and a symbolic one: a bowl of soup on the altar is the most intimate offering, the closest thing to the everyday meals that sustained the person being honored."
                    howMade="The specific soup varies by family and region. Common choices: canh bầu (bottle gourd soup), canh rau ngót (sweet leaf soup with pork), canh chua (sweet and sour fish soup). Whatever soup the deceased loved is typically made."
                    regional="In central Vietnam, canh with bamboo shoots and pork ribs is traditional at giỗ. In the south, canh chua (the sour fish soup of the Mekong Delta) often appears. In the north, a clear broth with winter vegetables."
                />

                <SectionDivider />
                <SectionHeader>The Deceased's Favorite Dishes</SectionHeader>

                <Section>
                    The most telling thing about a Vietnamese giỗ feast is not the ritual dishes — it is the personal ones. What dish do the family prepare specifically because that person loved it? The answer reveals more about a life than most epitaphs.
                </Section>

                <Section>
                    My grandmother's giỗ, when her time comes, will almost certainly include bánh canh hẹ — the chives noodle soup of Phú Yên, the dish she made every Sunday morning for sixty years. It will include gà kho gừng, which she made in a clay pot so old the glaze has almost worn off. It may include a small cup of cà phê đen, the plain black coffee she drank every morning of her adult life, poured before anyone else was awake, drunk alone in the kitchen while the house was still quiet. Not because coffee is a traditional giỗ offering. Because it was hers.
                </Section>

                <Section>
                    This is the logic of the personal dishes: the ancestor is not a generalized spirit requiring generalized offerings. They were a specific person with specific tastes, and the food that honored them in life should honor them in death. Vietnamese ancestor worship, at its most human level, is simply the refusal to let a person become generic after they die. The cá kho tộ on the altar says: we remember that you loved this. We remember the specific, not just the general.
                </Section>

                <PullQuote>
                    "The food on the altar says: we remember the specific, not just the general."
                </PullQuote>

                <SectionDivider />
                <SectionHeader>The Living Feast</SectionHeader>

                <Section>
                    After the incense burns down, after the prayers are said and the wine is poured and the ritual is complete, the food comes off the altar and joins the table. This is the transition that makes đám giỗ genuinely Vietnamese in its sensibility: the dead are honored, and then the living eat — abundantly, noisily, with children running between the legs of adults who have not seen each other since the last giỗ.
                </Section>

                <Section>
                    The living feast is the largest meal most Vietnamese families eat all year, rivaled only by Tết. Aunts and uncles bring dishes they specialize in. Someone always makes too much. Someone always forgets something and has to send a child to the market. The house fills past capacity with people who have not seen each other in months. The conversation covers everything: who has a new job, who is getting married, who is sick, what will happen to the house, what the deceased would have thought of all this. The food is backdrop and centerpiece simultaneously.
                </Section>

                <Section>
                    What is eaten at the living table is largely the same as what was offered on the altar, plus whatever the family has added. The ritual dishes become the meal. The gà luộc is carved and eaten with the ginger fish sauce. The xôi is passed around in small portions. The chả giò are gone within minutes. The soup bowls are refilled. The children eat too much sticky rice and not enough vegetables, which is exactly what children have done at đám giỗ for centuries.
                </Section>

                <SectionDivider />
                <SectionHeader>Regional Differences: North, Central, South</SectionHeader>

                {[
                    {
                        region: 'Northern Vietnam',
                        color: '#2D1A0E',
                        dishes: ['Gà luộc (whole boiled chicken) — mandatory', 'Xôi trắng (plain sticky rice)', 'Nem rán (fried spring rolls, wheat wrapper)', 'Thịt đông (cold-set pork jelly, winter only)', 'Canh măng sườn (bamboo shoot and rib soup)', 'Giò lụa (steamed pork sausage)', 'Miến xào (glass noodle stir-fry)'],
                        note: 'Northern giỗ feasts tend toward formal, traditional dishes. The altar arrangement is precise and the ritual more strictly followed than in the south.'
                    },
                    {
                        region: 'Central Vietnam',
                        color: '#7C3AED',
                        dishes: ['Gà luộc (whole boiled chicken)', 'Bánh ít (small sticky rice dumplings in banana leaf)', 'Nem lụi (lemongrass pork skewers)', 'Bánh tráng cuốn thịt heo (rice paper rolls with pork)', 'Cơm hến (baby clam rice)', 'Bún bò Huế (for Huế families, sometimes)', 'Chả Huế (Huế-style pork roll)'],
                        note: 'Central giỗ feasts often include dishes unique to the region. Bánh ít — small glutinous rice dumplings wrapped in banana leaves — is a traditional giỗ offering in central Vietnam that appears less commonly in north or south.'
                    },
                    {
                        region: 'Southern Vietnam',
                        color: '#D97706',
                        dishes: ['Gà luộc (whole boiled chicken)', 'Xôi gấc (red sticky rice) or xôi vò (loose sticky rice with mung bean)', 'Chả giò (fried spring rolls, rice paper wrapper)', 'Thịt kho hột vịt (caramel pork and eggs, for Tết giỗ)', 'Canh chua cá (sweet and sour fish soup)', 'Bánh tét (cylindrical sticky rice cake)', 'Củ kiệu (pickled shallots)'],
                        note: 'Southern giỗ feasts are typically larger and more abundant, reflecting the south\'s richer food culture. More dishes, bigger portions, more variety. The mood is noticeably more festive than the northern equivalent.'
                    }
                ].map((table) => (
                    <motion.div key={table.region} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.5 }}
                        style={{ margin: '24px 0', background: '#fff', border: `2px solid ${table.color}20`, borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{ background: table.color, padding: '12px 20px' }}>
                            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', color: '#fff', textTransform: 'uppercase' }}>{table.region}</span>
                        </div>
                        <div style={{ padding: '16px 20px' }}>
                            {table.dishes.map((dish, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', paddingBottom: '8px', marginBottom: '8px', borderBottom: i < table.dishes.length - 1 ? '1px solid rgba(75,46,26,0.06)' : 'none' }}>
                                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: table.color, flexShrink: 0, marginTop: '6px' }} />
                                    <span style={{ fontFamily: 'Georgia, serif', fontSize: '13px', color: '#4B2E1A', lineHeight: 1.5 }}>{dish}</span>
                                </div>
                            ))}
                            <p style={{ fontFamily: 'Georgia, serif', fontSize: '12px', color: '#8B6F5A', fontStyle: 'italic', marginTop: '12px', marginBottom: 0, lineHeight: 1.6 }}>{table.note}</p>
                        </div>
                    </motion.div>
                ))}

                <SectionDivider />

                <Section>
                    My grandfather's giỗ falls in the eighth lunar month, which in the Gregorian calendar means October or November. By that time of year in Phú Yên, the monsoon rains have started and the mornings are cool enough to warrant a jacket. My grandmother begins cooking the night before — the broth for the bún bò Huế, the marinade for the cá kho tộ. By 8am on the day itself, the house smells the way it smelled on every Sunday morning of my childhood, before I understood what Sundays in that kitchen were preparing me for.
                </Section>

                <Section>
                    The incense burns. The wine is poured. The food sits on the altar in the good bowls, the ones that come out twice a year. My grandmother speaks to him — not formally, not in ritual language, but in the voice she always used: low, direct, slightly impatient, deeply affectionate. She tells him what has happened in the family since last year. The new baby. The promotion. The cousin who is getting married. She tells him the cá kho tộ is ready, that she used the same recipe, that the fish came from the same market stall.
                </Section>

                <Section>
                    Then the incense burns down, and we eat.
                </Section>

                <SectionDivider />

                {/* Recipe links */}
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '48px 0', padding: '28px', background: '#FEF3E2', borderLeft: '4px solid #D97706', borderRadius: '0 8px 8px 0' }}>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', color: '#D97706', textTransform: 'uppercase', marginBottom: '16px' }}>
                        CLASSIC GIỖ DISHES — RECIPES
                    </p>
                    {[
                        { title: 'Cá Kho Tộ — Clay Pot Caramelised Fish', slug: 'ca-kho-to' },
                        { title: 'Thịt Kho Hột Vịt — Caramelised Pork & Eggs', slug: 'thit-kho-hot-vit' },
                        { title: 'Gỏi Cuốn / Chả Giò — Spring Rolls', slug: 'fresh-spring-rolls' },
                        { title: 'Xôi Xéo — Golden Sticky Rice', slug: 'xoi-xeo' },
                        { title: 'Bún Bò Huế — The Central Anniversary Soup', slug: 'hue-spicy-beef-noodle-soup' },
                    ].map((recipe) => (
                        <Link key={recipe.slug} href={`/recipes/${recipe.slug}`}
                            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid rgba(75,46,26,0.1)', textDecoration: 'none' }}>
                            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.95rem', color: '#2D1A0E', fontWeight: 600 }}>{recipe.title}</span>
                            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#D97706', fontWeight: 600, flexShrink: 0, marginLeft: '12px' }}>Recipe →</span>
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

function DishCard({ name, significance, howMade, regional }: {
    name: string; significance: string; howMade: string; regional: string;
}) {
    return (
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.55 }}
            style={{ margin: '28px 0', background: '#fff', border: '1px solid rgba(75,46,26,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ padding: '14px 20px', borderBottom: '1px solid rgba(75,46,26,0.07)', background: '#2D1A0E' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', fontWeight: 700, color: '#F5EDE3', margin: 0 }}>{name}</h3>
            </div>
            <div style={{ padding: '18px 20px' }}>
                <div style={{ marginBottom: '14px' }}>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', color: '#D97706', marginBottom: '6px', textTransform: 'uppercase' }}>SIGNIFICANCE</p>
                    <p style={{ fontFamily: 'Georgia, serif', fontSize: '13.5px', lineHeight: 1.7, color: '#4B2E1A', margin: 0 }}>{significance}</p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div style={{ background: '#FDFAF7', padding: '12px', borderRadius: '4px', borderLeft: '3px solid #D97706' }}>
                        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 700, color: '#D97706', marginBottom: '6px', letterSpacing: '1px' }}>HOW IT'S MADE</p>
                        <p style={{ fontFamily: 'Georgia, serif', fontSize: '12px', lineHeight: 1.6, color: '#6B5544', margin: 0 }}>{howMade}</p>
                    </div>
                    <div style={{ background: '#F5F0FF', padding: '12px', borderRadius: '4px', borderLeft: '3px solid #7C3AED' }}>
                        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 700, color: '#7C3AED', marginBottom: '6px', letterSpacing: '1px' }}>REGIONAL NOTES</p>
                        <p style={{ fontFamily: 'Georgia, serif', fontSize: '12px', lineHeight: 1.6, color: '#6B5544', margin: 0 }}>{regional}</p>
                    </div>
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
