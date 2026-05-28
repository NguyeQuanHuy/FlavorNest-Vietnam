'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

export default function VietnameseMenuDecoderPage() {
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
            <motion.section style={{ position: 'relative', height: '85vh', minHeight: '500px', overflow: 'hidden', opacity: heroOpacity }}>
                <motion.div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'url(/images/recipes/do-an-duong-pho.jpg)',
                    backgroundSize: 'cover', backgroundPosition: 'center', scale: heroScale
                }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(45,26,14,0.4) 0%, rgba(45,26,14,0.2) 35%, rgba(45,26,14,0.93) 100%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 24px 80px' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#D97706' }} />
                                <span style={{ color: '#D97706', fontSize: '12px', letterSpacing: '2px', fontWeight: 700, fontFamily: 'DM Sans, sans-serif' }}>
                                    MENU DECODER · VIETNAMESE DISH NAMES · COMPLETE GUIDE
                                </span>
                            </div>
                            <h1 style={{ fontFamily: 'Playfair Display, serif', color: '#FFF', fontSize: 'clamp(2.2rem, 6vw, 4.5rem)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '20px', maxWidth: '900px' }}>
                                Every Vietnamese Dish Name Explained: What the Words Actually Mean
                            </h1>
                            <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1rem, 2vw, 1.35rem)', maxWidth: '680px', lineHeight: 1.5, marginBottom: '28px' }}>
                                "Phở" means nothing to most visitors. "Bánh" is on half the menu. "Bún" keeps appearing but nobody explains what it is. This guide decodes Vietnamese dish names word by word — so you know what you are ordering before you order it.
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', color: 'rgba(255,255,255,0.6)', fontSize: '14px', fontFamily: 'DM Sans, sans-serif' }}>
                                <span>By Quan Huy Nguyen</span>
                                <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'currentColor' }} />
                                <span>May 29, 2026</span>
                                <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'currentColor' }} />
                                <span>10 min read</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Body */}
            <div style={{ maxWidth: '760px', margin: '0 auto', padding: '72px 24px 40px', fontFamily: 'Georgia, "Iowan Old Style", serif', color: '#2D1A0E' }}>

                {/* Lead */}
                <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                    style={{ fontSize: '1.35rem', lineHeight: 1.65, fontStyle: 'italic', color: '#4B2E1A', marginBottom: '48px', paddingLeft: '24px', borderLeft: '3px solid #D97706' }}>
                    Vietnamese dish names are not random. Every word is a description. "Phở bò" means noodle soup, beef. "Bánh mì" means bread, wheat. "Gỏi cuốn" means salad, rolled. Once you learn the building blocks, the entire menu becomes readable — and you will never accidentally order something you did not want again.
                </motion.p>

                <Section>
                    <DropCap>T</DropCap>he Vietnamese language is monosyllabic and tonal — each syllable is a word, and each word carries a meaning. This makes Vietnamese dish names unusually transparent compared to, say, French cuisine, where "bouillabaisse" tells you nothing about what is in it. In Vietnamese, every component of a dish name is a description. Learn about thirty words and you can decode most of a Vietnamese menu without ever having seen the dish before.
                </Section>

                <SectionDivider />

                {/* The Building Blocks */}
                <SectionHeader>The 12 Words That Decode Half the Menu</SectionHeader>

                <Section>
                    These twelve words appear in combination across hundreds of Vietnamese dishes. Master them and the menu stops being foreign.
                </Section>

                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '32px 0', background: '#fff', border: '1px solid rgba(75,46,26,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ padding: '12px 20px', background: '#2D1A0E' }}>
                        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '2px', color: '#D97706', textTransform: 'uppercase' }}>THE BUILDING BLOCKS</span>
                    </div>
                    {[
                        { word: 'Phở', pronunciation: 'fuh', meaning: 'A specific noodle soup', note: 'Always a soup. Flat rice noodles, long-simmered broth. "Phở bò" = beef phở. "Phở gà" = chicken phở.' },
                        { word: 'Bún', pronunciation: 'boon', meaning: 'Round rice vermicelli noodles', note: 'Thin, white, springy noodles. Appears in bún chả, bún bò Huế, bún thịt nướng. The noodle type, not the dish.' },
                        { word: 'Bánh', pronunciation: 'bahn', meaning: 'Cake / bread / anything made from batter or dough', note: 'The most versatile word. Bánh mì = bread (mì = wheat). Bánh cuốn = steamed rolls. Bánh xèo = sizzling crêpe. Bánh bao = steamed bun.' },
                        { word: 'Cơm', pronunciation: 'gum', meaning: 'Cooked rice / rice-based meal', note: 'Cơm tấm = broken rice. Cơm rang = fried rice. Cơm gà = chicken rice. If the dish starts with cơm, rice is the base.' },
                        { word: 'Gỏi', pronunciation: 'yoy', meaning: 'Salad / dressed raw vegetables', note: 'Gỏi cuốn = fresh spring rolls (literally "salad, rolled"). Gỏi bò = beef salad. Always involves fresh herbs and usually a dressing.' },
                        { word: 'Canh', pronunciation: 'kahn', meaning: 'Soup / broth-based side dish', note: 'Lighter than phở — a simple soup served alongside rice. Canh chua = sour soup. Canh rau ngót = sweet leaf soup. Always accompanies a rice meal, not eaten alone.' },
                        { word: 'Thịt', pronunciation: 'tit', meaning: 'Meat (general)', note: 'Thịt heo = pork. Thịt bò = beef. Thịt gà = chicken. Thịt nướng = grilled meat. The most common meat word on any menu.' },
                        { word: 'Kho', pronunciation: 'kaw', meaning: 'Braised / caramelized in a clay pot', note: 'Cá kho tộ = fish braised in clay pot. Thịt kho = braised pork. Always involves fish sauce, sugar, long cooking. Rich and dark.' },
                        { word: 'Xào', pronunciation: 'sow', meaning: 'Stir-fried', note: 'Rau muống xào tỏi = water spinach stir-fried with garlic. Mì xào = stir-fried noodles. High heat, wok, fast cooking.' },
                        { word: 'Nướng', pronunciation: 'noo-ung', meaning: 'Grilled / barbecued', note: 'Thịt nướng = grilled meat. Bún thịt nướng = vermicelli with grilled pork. Usually charcoal grilled — the smoky char is the point.' },
                        { word: 'Chiên / Rán', pronunciation: 'chee-en / rahn', meaning: 'Fried', note: 'Cơm chiên = fried rice. Chả giò = fried spring rolls (rán in the north, chiên in the south). Deep fried in most contexts.' },
                        { word: 'Hấp', pronunciation: 'hup', meaning: 'Steamed', note: 'Bánh bao hấp = steamed buns. Cá hấp = steamed fish. The gentle cooking method — no oil, clean flavors.' },
                    ].map((item, i) => (
                        <div key={i} style={{ display: 'grid', gridTemplateColumns: '90px 110px 1fr', borderBottom: i < 11 ? '1px solid rgba(75,46,26,0.06)' : 'none' }}>
                            <div style={{ padding: '12px 16px', background: i % 2 === 0 ? '#FDFAF7' : '#fff', borderRight: '1px solid rgba(75,46,26,0.06)', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                                <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', fontWeight: 700, color: '#D97706' }}>{item.word}</span>
                                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', color: '#8B6F5A', letterSpacing: '0.05em' }}>/{item.pronunciation}/</span>
                            </div>
                            <div style={{ padding: '12px 16px', background: i % 2 === 0 ? '#FDFAF7' : '#fff', borderRight: '1px solid rgba(75,46,26,0.06)', display: 'flex', alignItems: 'center' }}>
                                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 600, color: '#2D1A0E' }}>{item.meaning}</span>
                            </div>
                            <div style={{ padding: '12px 16px', background: i % 2 === 0 ? '#FDFAF7' : '#fff', display: 'flex', alignItems: 'center' }}>
                                <span style={{ fontFamily: 'Georgia, serif', fontSize: '12px', color: '#6B5544', lineHeight: 1.5 }}>{item.note}</span>
                            </div>
                        </div>
                    ))}
                </motion.div>

                <SectionDivider />
                <SectionHeader>20 Famous Dishes, Decoded Word by Word</SectionHeader>

                <Section>
                    Now the building blocks in action. Each dish name broken into its components — so you understand not just what it is, but what its name is telling you about how it is made.
                </Section>

                {[
                    {
                        dish: 'Phở Bò',
                        phonetic: 'fuh baw',
                        literal: 'Noodle soup + Beef',
                        description: 'The national dish of Vietnam. Clear beef bone broth simmered 8+ hours with charred onion and spices, flat rice noodles, thinly sliced beef. The name is completely transparent: it is phở (this type of noodle soup), made with bò (beef). Phở gà substitutes gà (chicken).',
                        region: 'Northern',
                        difficulty: 'Hard to make well',
                        recipeSlug: 'pho-bo-ha-noi',
                    },
                    {
                        dish: 'Bún Chả',
                        phonetic: 'boon chah',
                        literal: 'Vermicelli noodles + Grilled pork patties',
                        description: 'Hanoi\'s most famous dish since Obama and Bourdain ate it here in 2016. Bún (vermicelli), chả (grilled pork patties and belly) served in a warm sweet-savory dipping broth. You dip the noodles and pork into the broth, not the other way around.',
                        region: 'Northern (Hanoi)',
                        difficulty: 'Medium',
                        recipeSlug: 'bun-cha-hanoi',
                    },
                    {
                        dish: 'Bún Bò Huế',
                        phonetic: 'boon baw hway',
                        literal: 'Vermicelli + Beef + from Huế city',
                        description: 'The spicy imperial noodle soup from Huế. Bún (vermicelli), bò (beef), Huế (the city it comes from). The broth is made with lemongrass and fermented shrimp paste — very different from phở. Often considered the most complex and greatest Vietnamese noodle soup by those who know it well.',
                        region: 'Central (Huế)',
                        difficulty: 'Hard',
                        recipeSlug: 'hue-spicy-beef-noodle-soup',
                    },
                    {
                        dish: 'Bánh Mì',
                        phonetic: 'bahn mee',
                        literal: 'Bread/cake + Wheat',
                        description: 'The world\'s best sandwich. Bánh (bread/cake), mì (wheat flour). The name refers to the bread itself — the Vietnamese adaptation of the French baguette, lighter and crispier. The fillings (pâté, cold cuts, pickled vegetables, herbs) are implied, not named.',
                        region: 'Nationwide',
                        difficulty: 'Easy to buy, medium to make',
                        recipeSlug: 'banh-mi',
                    },
                    {
                        dish: 'Gỏi Cuốn',
                        phonetic: 'yoy koo-un',
                        literal: 'Salad + Rolled',
                        description: 'Fresh spring rolls. Gỏi (salad/fresh), cuốn (rolled). Exactly what it says: fresh salad ingredients rolled in rice paper. Shrimp, pork, rice vermicelli, fresh herbs, and lettuce, wrapped tightly in a translucent rice paper wrapper. Served with peanut or hoisin dipping sauce.',
                        region: 'Southern',
                        difficulty: 'Easy',
                        recipeSlug: 'fresh-spring-rolls',
                    },
                    {
                        dish: 'Chả Giò / Nem Rán',
                        phonetic: 'chah yaw / nem rahn',
                        literal: 'Pork roll + Fried / Stuffed roll + Fried',
                        description: 'Fried spring rolls — same dish, two names. Chả giò is the Southern name; nem rán is the Northern name. Pork, glass noodles, mushroom, and vegetables wrapped in rice paper and deep fried until shatter-crisp. The two names confuse many visitors: order either and you get the same thing.',
                        region: 'Nationwide (different names)',
                        difficulty: 'Medium',
                        recipeSlug: 'fresh-spring-rolls',
                    },
                    {
                        dish: 'Cơm Tấm',
                        phonetic: 'gum tum',
                        literal: 'Rice + Broken/Cracked',
                        description: 'Saigon\'s most beloved breakfast and dinner. Cơm (cooked rice), tấm (broken/cracked grains). Broken rice — intentionally cracked during milling — cooks softer and absorbs sauce better than whole rice. Topped with a charcoal-grilled pork chop, shredded pork skin, steamed egg meatloaf, and scallion oil.',
                        region: 'Southern (Saigon)',
                        difficulty: 'Medium',
                        recipeSlug: 'com-tam',
                    },
                    {
                        dish: 'Bánh Xèo',
                        phonetic: 'bahn say-oh',
                        literal: 'Sizzling cake/crêpe',
                        description: 'The sizzling Vietnamese crêpe. Bánh (cake/crêpe), xèo (the sound of batter hitting a hot pan — an onomatopoeia). The name is the recipe: you hear it before you see it. Rice flour and coconut milk batter, turmeric-yellow, filled with shrimp, pork, and bean sprouts. Eaten wrapped in lettuce and herbs.',
                        region: 'Central and Southern',
                        difficulty: 'Medium',
                        recipeSlug: 'banh-xeo',
                    },
                    {
                        dish: 'Bánh Cuốn',
                        phonetic: 'bahn koo-un',
                        literal: 'Rolled cake/rice sheet',
                        description: 'Steamed rice rolls. Bánh (rice cake/sheet), cuốn (rolled). Paper-thin sheets of steamed rice batter, rolled around a filling of pork and wood ear mushroom. Made to order on a cloth stretched over boiling water. Served with crispy fried shallots, dried shrimp, and a warm dipping sauce.',
                        region: 'Northern',
                        difficulty: 'Hard (to make), Easy (to eat)',
                        recipeSlug: 'banh-uot-dau-he',
                    },
                    {
                        dish: 'Cao Lầu',
                        phonetic: 'kow loh',
                        literal: 'High floor / elevated (historic term)',
                        description: 'The most place-specific dish in Vietnam — only found in Hội An. The name is historical, referring to the elevated dining halls where it was once served. Thick chewy noodles (made with water from a specific ancient well), Chinese char siu pork, crispy rice crackers, bean sprouts, and herbs. The noodles have a texture found nowhere else.',
                        region: 'Central (Hội An only)',
                        difficulty: 'Very hard to replicate outside Hội An',
                        recipeSlug: 'cao-lau',
                    },
                    {
                        dish: 'Mì Quảng',
                        phonetic: 'mee kwahng',
                        literal: 'Noodles + from Quảng Nam province',
                        description: 'The signature dish of Quảng Nam (Đà Nẵng/Hội An area). Mì (noodles — despite using rice noodles, the name uses the wheat noodle word for historical reasons), Quảng (Quảng Nam province). Wide turmeric-yellow rice noodles with just enough concentrated broth to coat them, topped with shrimp, pork, quail eggs, peanuts, and sesame crackers.',
                        region: 'Central (Quảng Nam)',
                        difficulty: 'Medium',
                        recipeSlug: 'mi-quang',
                    },
                    {
                        dish: 'Hủ Tiếu',
                        phonetic: 'hoo tee-ew',
                        literal: 'Rice noodle (from Chinese Teochew)',
                        description: 'The Saigon noodle soup with Cambodian-Chinese roots. The name comes from the Teochew Chinese pronunciation. Clear sweet broth from pork bones and dried squid, thin springy noodles, pork slices, shrimp, quail eggs. Served "nước" (with broth) or "khô" (dry, broth on side). The dry version is what locals prefer.',
                        region: 'Southern',
                        difficulty: 'Medium',
                        recipeSlug: 'hu-tieu',
                    },
                    {
                        dish: 'Bún Riêu',
                        phonetic: 'boon ree-ew',
                        literal: 'Vermicelli + Crab paste',
                        description: 'Crab and tomato noodle soup. Bún (vermicelli), riêu (crab paste/roe). The broth is made from fresh paddy crab — a specific small freshwater crab — creating a rich red-orange color with floating crab-and-egg dumplings. Tangy, slightly sour from tomato, with a distinctive crab sweetness.',
                        region: 'Northern origin, nationwide',
                        difficulty: 'Hard',
                        recipeSlug: 'bun-rieu',
                    },
                    {
                        dish: 'Cá Kho Tộ',
                        phonetic: 'kah kaw toe',
                        literal: 'Fish + Braised + Clay pot',
                        description: 'Clay pot caramelized fish. Cá (fish), kho (braised in caramel sauce), tộ (clay pot). The clay pot distributes heat evenly and creates a slightly smoky note. Fish sauce, sugar, shallots, chili, and black pepper. The braising liquid reduces to a thick, intensely savory-sweet glaze. A staple of the Vietnamese family dinner table.',
                        region: 'Nationwide',
                        difficulty: 'Easy',
                        recipeSlug: 'ca-kho-to',
                    },
                    {
                        dish: 'Rau Muống Xào Tỏi',
                        phonetic: 'row moo-ung sow toy',
                        literal: 'Water spinach + Stir-fried + Garlic',
                        description: 'The most common vegetable dish in Vietnam. Rau muống (water spinach/morning glory), xào (stir-fried), tỏi (garlic). Exactly what it says. The entire name is the recipe. High wok heat, fresh garlic, a splash of fish sauce. On every Vietnamese table, every day, for centuries.',
                        region: 'Nationwide',
                        difficulty: 'Very easy',
                        recipeSlug: 'rau-muong-xao-toi',
                    },
                    {
                        dish: 'Cà Phê Sữa Đá',
                        phonetic: 'kah fay soo-ah dah',
                        literal: 'Coffee + Milk + Ice',
                        description: 'Vietnamese iced coffee with condensed milk. Cà phê (coffee — from French "café"), sữa (milk — here means sweetened condensed milk), đá (ice). A completely transparent name. Strong dark-roast robusta coffee dripped through a phin filter over sweetened condensed milk, then poured over ice. The national drink.',
                        region: 'Nationwide',
                        difficulty: 'Easy',
                        recipeSlug: 'ca-phe-sua-da',
                    },
                ].map((dish, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.45, delay: (i % 3) * 0.05 }}
                        style={{ margin: '20px 0', background: '#fff', border: '1px solid rgba(75,46,26,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{ padding: '12px 20px', background: '#FDFAF7', borderBottom: '1px solid rgba(75,46,26,0.07)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                            <div>
                                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.15rem', fontWeight: 700, color: '#2D1A0E', margin: '0 0 2px' }}>{dish.dish}</h3>
                                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#8B6F5A', letterSpacing: '0.05em' }}>/{dish.phonetic}/</span>
                            </div>
                            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
                                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 600, color: '#D97706', background: 'rgba(217,119,6,0.1)', padding: '3px 10px', borderRadius: '100px' }}>{dish.region}</span>
                            </div>
                        </div>
                        <div style={{ padding: '14px 20px' }}>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#F0F7F0', padding: '4px 12px', borderRadius: '100px', marginBottom: '10px' }}>
                                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 700, color: '#166534', letterSpacing: '1px' }}>LITERAL: </span>
                                <span style={{ fontFamily: 'Georgia, serif', fontSize: '12px', color: '#166534', fontStyle: 'italic' }}>{dish.literal}</span>
                            </div>
                            <p style={{ fontFamily: 'Georgia, serif', fontSize: '13.5px', lineHeight: 1.7, color: '#4B2E1A', marginBottom: '10px' }}>{dish.description}</p>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#8B6F5A' }}>To make: {dish.difficulty}</span>
                                {dish.recipeSlug && (
                                    <Link href={`/recipes/${dish.recipeSlug}`}
                                        style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 600, color: '#D97706', textDecoration: 'none' }}>
                                        Recipe →
                                    </Link>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}

                <SectionDivider />
                <SectionHeader>Ordering in Vietnamese: 5 Phrases That Work Everywhere</SectionHeader>

                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '24px 0' }}>
                    {[
                        { phrase: 'Cho tôi một [dish name]', phonetic: 'chaw toy mot...', meaning: 'One [dish] please', note: 'The universal order. "Cho tôi một phở bò" = One beef pho, please.' },
                        { phrase: 'Ít cay', phonetic: 'it kai', meaning: 'Less spicy', note: 'Essential in central Vietnam and for bún bò Huế anywhere.' },
                        { phrase: 'Không cay', phonetic: 'khom kai', meaning: 'No spice', note: 'If ít cay is not enough.' },
                        { phrase: 'Thêm rau', phonetic: 'tem row', meaning: 'More herbs/vegetables', note: 'They will bring more of the herb plate.' },
                        { phrase: 'Ngon quá!', phonetic: 'ngon kwah', meaning: 'Delicious!', note: 'Says it. The cook will smile. Use it.' },
                    ].map((item, i) => (
                        <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 80px 1fr', gap: '0', borderBottom: i < 4 ? '1px solid rgba(75,46,26,0.07)' : 'none', background: i % 2 === 0 ? '#fff' : '#FDFAF7' }}>
                            <div style={{ padding: '14px 20px', borderRight: '1px solid rgba(75,46,26,0.06)' }}>
                                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', fontWeight: 700, color: '#D97706' }}>{item.phrase}</div>
                                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', color: '#8B6F5A', marginTop: '2px' }}>/{item.phonetic}/</div>
                            </div>
                            <div style={{ padding: '14px 16px', borderRight: '1px solid rgba(75,46,26,0.06)', display: 'flex', alignItems: 'center' }}>
                                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 600, color: '#2D1A0E' }}>{item.meaning}</span>
                            </div>
                            <div style={{ padding: '14px 20px', display: 'flex', alignItems: 'center' }}>
                                <span style={{ fontFamily: 'Georgia, serif', fontSize: '12px', color: '#6B5544', fontStyle: 'italic' }}>{item.note}</span>
                            </div>
                        </div>
                    ))}
                </motion.div>

                <SectionDivider />

                <Section>
                    Vietnamese food names reward attention. The more you read them literally, the more the menu makes sense — and the more you understand how Vietnamese cooks think about food. Every dish name is a precise description: here is the starch, here is the protein, here is the cooking method. No mystification, no marketing. Just the thing itself, named accurately. Once you understand this, you can look at a menu you have never seen before and make a reasonable guess about what every item on it contains. That is not a small thing. It is the beginning of really eating Vietnamese food.
                </Section>

                {/* Related guides */}
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '48px 0', padding: '28px', background: '#FEF3E2', borderLeft: '4px solid #D97706', borderRadius: '0 8px 8px 0' }}>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', color: '#D97706', textTransform: 'uppercase', marginBottom: '16px' }}>CONTINUE LEARNING</p>
                    {[
                        { title: 'Vietnamese Food Culture for Beginners: The Unwritten Rules', slug: '/stories/vietnamese-food-culture-guide' },
                        { title: 'The Essential Vietnamese Pantry: 15 Ingredients', slug: '/stories/vietnamese-ingredients-guide' },
                        { title: 'The Vietnamese Herb Plate: Complete Field Guide', slug: '/stories/vietnamese-herb-plate-guide' },
                        { title: 'Nước Chấm: The Dipping Sauce That Makes Everything Vietnamese', slug: '/stories/nuoc-cham-guide' },
                    ].map((item) => (
                        <Link key={item.slug} href={item.slug}
                            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid rgba(75,46,26,0.1)', textDecoration: 'none' }}>
                            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.95rem', color: '#2D1A0E', fontWeight: 600 }}>{item.title}</span>
                            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#D97706', fontWeight: 600, flexShrink: 0, marginLeft: '12px' }}>Read →</span>
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