'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

export default function TetFoodTraditionsPage() {
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
                <motion.div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/recipes/banh-chung.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', scale: heroScale }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(45,26,14,0.35) 0%, rgba(45,26,14,0.2) 35%, rgba(45,26,14,0.93) 100%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 24px 80px' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#D97706' }} />
                                <span style={{ color: '#D97706', fontSize: '12px', letterSpacing: '2px', fontWeight: 700, fontFamily: 'DM Sans, sans-serif' }}>
                                    TẾT · LUNAR NEW YEAR · VIETNAMESE FOOD TRADITIONS
                                </span>
                            </div>
                            <h1 style={{ fontFamily: 'Playfair Display, serif', color: '#FFF', fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '24px', maxWidth: '900px' }}>
                                What Vietnamese Families Eat at Tết — And Why Every Dish Means Something
                            </h1>
                            <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', maxWidth: '720px', lineHeight: 1.5, marginBottom: '32px' }}>
                                Tết is not just Vietnam's Lunar New Year. It is the most important meal of the year — and every dish on the table has been carrying meaning for a thousand years.
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
                    In Vietnam, the question "what are you eating for Tết?" is never really about food. It is about family, about which province you come from, about which grandmother's recipe survived the migration, and about which dishes your children will remember when they are the ones doing the cooking.
                </motion.p>

                <Section>
                    <DropCap>T</DropCap>ết Nguyên Đán — the Vietnamese Lunar New Year — is the most important holiday in the Vietnamese calendar. It falls between late January and mid-February, depending on the lunar cycle, and it marks not just the new year but the return of spring, the reunion of families separated by distance, and the annual renegotiation of what it means to be Vietnamese. The food is inseparable from all of it. Every dish that appears on the Tết table has been eating there for centuries, and every dish carries a meaning that most Vietnamese people absorb before they are old enough to ask what it is.
                </Section>

                <Section>
                    The Tết table is different from an ordinary Vietnamese meal in one fundamental way: it is designed to look backwards and forwards simultaneously. The dishes honor the ancestors — there is always a tray of food left at the altar before the family eats — and they carry wishes for the year ahead. Prosperity, health, longevity, togetherness. A Vietnamese family that serves the wrong dish, or omits a traditional one, is not just making a culinary error. They are sending the wrong message to the universe. This sounds superstitious. It is also, in practice, the reason Tết food is so consistent across generations and so resistant to change.
                </Section>

                <PullQuote>
                    "Every dish on the Tết table is a message to the year ahead. The wrong dish sends the wrong message."
                </PullQuote>

                <SectionDivider />
                <SectionHeader>The Essential Tết Dishes</SectionHeader>

                <TetDishCard
                    name="Bánh Chưng / Bánh Tét"
                    region="North / Central & South"
                    meaning="The earth (bánh chưng, square) and the sky (bánh tét, cylindrical) — a legend dating to the Hùng Kings, 2,800 years ago"
                    description="The most sacred food of Tết. Bánh chưng is a square cake of glutinous rice, mung bean paste, and fatty pork, wrapped in dong leaves (lá dong) and boiled for 10-12 hours over an open fire. In the north, the shape is square — symbolizing the earth. In central and southern Vietnam, the same filling is wrapped into a cylinder — bánh tét — said to represent the sky. The legend behind the dish is one of the oldest in Vietnamese culture: Prince Lang Liêu, poorest of the king's sons, received a dream telling him to use rice — the most humble and essential food — to make offerings to his ancestors. His cakes won the throne."
                    eating="Slice into rounds, eat at room temperature or pan-fried until the outside is crispy. Serve with dưa hành (pickled spring onions) to cut the richness."
                    making="The wrapping and tying is a family activity — multiple generations work together the day before Tết. The overnight boil, kept going through the night, is one of the most distinctly Tết experiences."
                />

                <TetDishCard
                    name="Thịt Kho Hột Vịt"
                    region="Southern Vietnam"
                    meaning="Prosperity and abundance — the coconut water represents the sweetness of the coming year"
                    description="Pork belly and hard-boiled eggs slow-braised in fresh coconut water and fish sauce caramel until the meat falls apart and the eggs turn amber-gold. This is the defining dish of the Southern Tết table — rich, sweet-savory, deeply comforting, made in large quantities because it keeps well and feeds many. The eggs represent wholeness and new beginnings. The pork represents prosperity. The coconut water — a Southern ingredient that would not appear in the northern version of this dish — represents the sweetness the family hopes the new year will bring."
                    eating="Served over white rice. Always made the day before Tết — it tastes dramatically better after one night in the refrigerator when the flavors have fully developed."
                    making="The key is the caramel: render the pork fat first, then build the caramel from the rendered fat and sugar. Add coconut water, not tap water. Simmer low and slow for 2+ hours."
                />

                <TetDishCard
                    name="Canh Khổ Qua Nhồi Thịt"
                    region="Southern Vietnam"
                    meaning="'Khổ qua' means 'bitterness passes' — eating it at Tết sends the hardships of the old year away"
                    description="Bitter melon stuffed with seasoned pork and wood ear mushroom, simmered in a clear pork broth. The dish is eaten almost exclusively at Tết in southern Vietnamese households — not because it is a festive food in the conventional sense, but because its name is a blessing. Khổ qua, the Vietnamese word for bitter melon, literally means 'bitterness passes.' To eat it at the new year is to declare that the difficulties of the previous year are over and will not follow you into the next one. The bitter flavor of the melon, unexpectedly soothing in the broth, makes the symbolism physical."
                    eating="The soup is light and slightly bitter — a deliberate counterpoint to the richness of thịt kho on the same table. Eat it first to clear the palate."
                    making="Hollow out the melon from one end using a chopstick. Fill with pork mixture, seal with a small piece of the removed end. Simmer gently — do not boil or the melon falls apart."
                />

                <TetDishCard
                    name="Dưa Hành"
                    region="Northern Vietnam"
                    meaning="Balance — the acidity of the pickled onion is said to aid digestion and symbolize the need for balance in the coming year"
                    description="Pickled spring onions or shallots — one of the oldest Tết foods in Vietnamese culture. The Vietnamese proverb says: 'Thịt mỡ dưa hành câu đối đỏ / Cây nêu tràng pháo bánh chưng xanh' (Fatty pork, pickled onions, red couplets / Nêu pole, firecrackers, green bánh chưng). Dưa hành appears in the oldest descriptions of Tết and has not changed. It is made by soaking spring onions or shallots in a salt-vinegar brine for 3-5 days until pleasantly sour and slightly translucent. Its role at the Tết table is practical as much as symbolic: the acidity cuts through the richness of bánh chưng and thịt kho."
                    eating="Serve cold alongside bánh chưng and fatty braised dishes. Never eat alone — it is a condiment, not a dish."
                    making="Salt the onions first for 24 hours to draw out moisture, then transfer to a vinegar-sugar brine. The waiting is the hardest part — 3-5 days minimum."
                />

                <TetDishCard
                    name="Xôi Gấc"
                    region="Northern & Central Vietnam"
                    meaning="Good luck and prosperity — the deep red color of gấc fruit represents good fortune in Vietnamese culture"
                    description="Sticky rice cooked with gấc — a spiky, red-fleshed fruit native to Southeast Asia whose seeds and membrane produce an extraordinary deep crimson-orange color when mixed with the rice. Xôi gấc is one of the most visually striking foods in the Vietnamese repertoire: the rice turns a brilliant red that is unlike any food coloring, and the flavor is subtly rich, slightly fatty from the natural oils in the gấc seeds. Red is the color of luck and joy in Vietnamese culture, making xôi gấc essential at Tết, weddings, and celebrations."
                    eating="Served warm, slightly sticky, often shaped into rounds or mounds. Eat with bánh chưng or as a standalone dish. The color fades as it cools — eat it fresh."
                    making="Mix gấc pulp and seeds with a small amount of rice wine and fat before combining with soaked glutinous rice. Steam until fully cooked. The color intensifies during steaming."
                />

                <SectionDivider />
                <SectionHeader>The Regional Divide: Northern Tết vs Southern Tết</SectionHeader>

                <Section>
                    The Tết table in Hanoi and the Tết table in Ho Chi Minh City are recognizably related but meaningfully different. The north is more restrained, more traditional, more closely tied to the Chinese-influenced Confucian food culture that shaped Vietnamese society for a thousand years. The south is more abundant, more sweet, more coconut, more influenced by the Khmer and Cham cultures of the Mekong Delta.
                </Section>

                <Section>
                    In the north, the Tết table centers on bánh chưng (square, traditional, wrapped in lá dong), giò lụa (steamed pork sausage), thịt đông (cold-set pork and ear jelly, only possible in the cool northern winter), and dưa hành. In the south, the table centers on bánh tét (cylindrical), thịt kho hột vịt (caramelized pork and duck eggs in coconut water), canh khổ qua nhồi thịt, and chả giò rán. Both tables carry the same wishes. The language is different.
                </Section>

                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '40px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    {[
                        {
                            region: 'Northern Tết',
                            color: '#2D1A0E',
                            dishes: ['Bánh Chưng (square)', 'Thịt Đông (cold pork jelly)', 'Giò Lụa (pork sausage)', 'Dưa Hành (pickled spring onion)', 'Canh Bóng (pork skin soup)', 'Xôi Gấc (red sticky rice)'],
                        },
                        {
                            region: 'Southern Tết',
                            color: '#D97706',
                            dishes: ['Bánh Tét (cylindrical)', 'Thịt Kho Hột Vịt (caramel pork & egg)', 'Canh Khổ Qua (bitter melon soup)', 'Chả Giò (fried spring rolls)', 'Củ Kiệu (pickled shallots)', 'Tôm Khô (dried shrimp)'],
                        },
                    ].map((table) => (
                        <div key={table.region} style={{ background: '#fff', border: `2px solid ${table.color}`, borderRadius: '4px', overflow: 'hidden' }}>
                            <div style={{ background: table.color, padding: '12px 16px' }}>
                                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', color: '#fff', textTransform: 'uppercase' }}>{table.region}</span>
                            </div>
                            <div style={{ padding: '16px' }}>
                                {table.dishes.map((dish) => (
                                    <div key={dish} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 0', borderBottom: '1px solid rgba(75,46,26,0.06)' }}>
                                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: table.color, flexShrink: 0 }} />
                                        <span style={{ fontFamily: 'Georgia, serif', fontSize: '13px', color: '#4B2E1A', lineHeight: 1.4 }}>{dish}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </motion.div>

                <SectionDivider />
                <SectionHeader>The Foods You Must Not Eat at Tết</SectionHeader>

                <Section>
                    Vietnamese Tết food superstitions are as elaborate as the dishes themselves. Certain foods are actively avoided at the new year because their names or associations carry bad luck. Shrimp — tôm — are not eaten by some families because shrimp move backwards, suggesting the year will move backwards too. Duck — vịt — is avoided in some households because the duck's gait is seen as clumsy and unlucky. Squid — mực — whose name is a homophone for a word meaning ink or darkness, is similarly avoided.
                </Section>

                <Section>
                    Bananas — chuối — are controversial. In the south, they are considered bad luck because chuối sounds like 'chúi' (to tumble forward, to fall). In the north, a bunch of bananas is placed on the altar as an offering because their curved shape resembles hands clasped in prayer, and their Vietnamese name in this context is interpreted differently. The same fruit, carrying opposite meanings, separated by a few hundred kilometers. This is Vietnamese food culture in miniature: precise, regional, deeply felt, and impossible to reduce to a single rule.
                </Section>

                <PullQuote>
                    "The same fruit carries opposite meaning in Hanoi and Saigon. Vietnamese food culture cannot be reduced to a single rule."
                </PullQuote>

                <SectionDivider />

                <Section>
                    My family's Tết table looks like central Vietnam, because that is where my family comes from. There is always bánh tét from my mother, always thịt kho hột vịt from my grandmother's recipe, always canh khổ qua because she insists the bitterness must pass. There is always a plate of dưa hành that my father eats too much of. There is always xôi gấc, red as luck should be, made in the morning while it is still dark outside.
                </Section>

                <Section>
                    I have been making these dishes in Germany for the past few years. The gấc fruit is impossible to find here, so the sticky rice is not red. The lá dong leaves for bánh tét are substituted with banana leaves from the Asian grocery. The thịt kho uses German pork, which is good but not the same. Every substitution is a small loss and a small adaptation. The dishes taste like home, mostly. They taste like the memory of home, which is not the same thing, but is perhaps what home always was — a memory you carry with you and reconstruct as accurately as you can, with whatever ingredients the new place provides.
                </Section>

                <SectionDivider />

                {/* Recipe links */}
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '48px 0', padding: '28px', background: '#FEF3E2', borderLeft: '4px solid #D97706', borderRadius: '0 8px 8px 0' }}>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', color: '#D97706', textTransform: 'uppercase', marginBottom: '16px' }}>
                        MAKE THESE TẾT DISHES AT HOME
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {[
                            { title: 'Thịt Kho Hột Vịt — Caramelised Pork & Eggs', slug: 'thit-kho-hot-vit' },
                            { title: 'Canh Khổ Qua Nhồi Thịt — Stuffed Bitter Melon Soup', slug: 'canh-kho-qua-nhoi-thit' },
                            { title: 'Xôi Xéo — Golden Sticky Rice', slug: 'xoi-xeo' },
                        ].map((recipe) => (
                            <Link key={recipe.slug} href={`/recipes/${recipe.slug}`}
                                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid rgba(75,46,26,0.1)', textDecoration: 'none' }}>
                                <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', color: '#2D1A0E', fontWeight: 600 }}>{recipe.title}</span>
                                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#D97706', fontWeight: 600 }}>Recipe →</span>
                            </Link>
                        ))}
                    </div>
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

function TetDishCard({ name, region, meaning, description, eating, making }: {
    name: string; region: string; meaning: string;
    description: string; eating: string; making: string;
}) {
    return (
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.55 }}
            style={{ margin: '32px 0', background: '#fff', border: '1px solid rgba(75,46,26,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ padding: '16px 24px', borderBottom: '1px solid rgba(75,46,26,0.07)', background: '#FDFAF7' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '6px' }}>
                    <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', fontWeight: 700, color: '#2D1A0E', margin: 0 }}>{name}</h3>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 600, color: '#D97706', background: 'rgba(217,119,6,0.1)', padding: '3px 10px', borderRadius: '100px' }}>{region}</span>
                </div>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#6B5544', fontStyle: 'italic', margin: 0 }}>✦ {meaning}</p>
            </div>
            <div style={{ padding: '20px 24px' }}>
                <p style={{ fontFamily: 'Georgia, serif', fontSize: '14px', lineHeight: 1.75, color: '#4B2E1A', marginBottom: '16px' }}>{description}</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div style={{ background: '#FFFBF0', padding: '12px', borderRadius: '4px', borderLeft: '3px solid #D97706' }}>
                        <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', color: '#D97706', marginBottom: '6px' }}>HOW TO EAT</div>
                        <p style={{ fontFamily: 'Georgia, serif', fontSize: '12px', lineHeight: 1.6, color: '#6B5544', margin: 0, fontStyle: 'italic' }}>{eating}</p>
                    </div>
                    <div style={{ background: '#F5F0FF', padding: '12px', borderRadius: '4px', borderLeft: '3px solid #7C3AED' }}>
                        <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', color: '#7C3AED', marginBottom: '6px' }}>MAKING IT</div>
                        <p style={{ fontFamily: 'Georgia, serif', fontSize: '12px', lineHeight: 1.6, color: '#6B5544', margin: 0 }}>{making}</p>
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