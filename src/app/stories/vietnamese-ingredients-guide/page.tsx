'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

export default function VietnameseIngredientsGuidePage() {
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
                <motion.div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/recipes/nuoc-cham.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', scale: heroScale }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(45,26,14,0.35) 0%, rgba(45,26,14,0.2) 35%, rgba(45,26,14,0.93) 100%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 24px 80px' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#D97706' }} />
                                <span style={{ color: '#D97706', fontSize: '12px', letterSpacing: '2px', fontWeight: 700, fontFamily: 'DM Sans, sans-serif' }}>
                                    BEGINNER'S GUIDE · VIETNAMESE INGREDIENTS · PANTRY
                                </span>
                            </div>
                            <h1 style={{ fontFamily: 'Playfair Display, serif', color: '#FFF', fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '24px', maxWidth: '900px' }}>
                                The Essential Vietnamese Pantry: 15 Ingredients That Unlock Every Recipe
                            </h1>
                            <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', maxWidth: '720px', lineHeight: 1.5, marginBottom: '32px' }}>
                                You do not need 50 ingredients to cook Vietnamese food. You need these 15 — find them once, and every recipe opens up.
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
                    Most people trying to cook Vietnamese food for the first time go wrong at the supermarket — they either buy nothing (and produce a dish that tastes like nothing) or buy everything (and produce a cluttered pantry and a confused dish). The truth is simpler: Vietnamese cooking runs on a small number of foundational ingredients. Master these 15, and you can make almost anything.
                </motion.p>

                <Section>
                    <DropCap>V</DropCap>ietnamese cooking is not complicated. It is precise. The same handful of ingredients — fish sauce, rice vinegar, lemongrass, fresh herbs — appear across hundreds of dishes in different proportions, different preparations, different combinations. A cook who understands these ingredients instinctively does not need a recipe. They taste as they go, adjusting the balance of salt, acid, sweet, and heat until it is right. This guide is about building that instinct from the ground up.
                </Section>

                <Section>
                    Everything on this list is available at a well-stocked Asian grocery store and increasingly at mainstream supermarkets. Most items keep for weeks or months. None requires special equipment to use. Find them once, stock them properly, and you will never have to make a substitution that compromises a dish again.
                </Section>

                <SectionDivider />

                {/* Ingredients grid */}
                <SectionHeader>The Non-Negotiables</SectionHeader>

                <Section>
                    These are the ingredients that appear in almost every Vietnamese recipe. If you have these five things, you can make something Vietnamese tonight.
                </Section>

                <IngredientCard
                    number="01"
                    name="Fish Sauce"
                    nameVi="Nước Mắm"
                    description="The foundation of Vietnamese cooking. Not a garnish, not an optional addition — the primary seasoning agent, used the way Europeans use salt. Made from fermented anchovies and salt, aged in wooden barrels, high-quality fish sauce is deeply savory, slightly sweet, and surprisingly complex. It should not smell strongly of fish when used correctly in a dish — it dissolves into umami."
                    buying="Look for Phú Quốc brand (40°N or 50°N) or Red Boat. Avoid anything with added sugar or caramel colouring. The only ingredients should be anchovies and salt."
                    using="Use in marinades, dipping sauces, braises, stir-fries, and soups. Start with less than you think — it is salty and concentrates with heat."
                    storing="Indefinitely at room temperature before opening. Refrigerate after opening. It lasts years."
                />

                <IngredientCard
                    number="02"
                    name="Rice Vinegar"
                    nameVi="Giấm Gạo"
                    description="Mild, clean acidity. Used in dipping sauces, pickling vegetables, and balancing rich braises. Vietnamese rice vinegar is milder than Chinese rice vinegar and much gentler than Western white vinegar. The difference matters — too sharp an acid throws a dipping sauce out of balance."
                    buying="Any Vietnamese or Japanese rice vinegar works. Clear, not seasoned (avoid 'seasoned rice vinegar' which contains added sugar and salt)."
                    using="The classic quick pickle for bánh mì: julienned daikon and carrot, rice vinegar, sugar, salt, 30 minutes. Also essential in nước chấm."
                    storing="Indefinitely at room temperature."
                />

                <IngredientCard
                    number="03"
                    name="Lemongrass"
                    nameVi="Sả"
                    description="The aromatic backbone of central and southern Vietnamese cooking. Bright, citrusy, slightly floral, with a faint ginger note underneath. Used bruised and whole in broths (bún bò Huế, lẩu), finely minced in marinades and stir-fries, and as a flavoring oil for rice."
                    buying="Buy fresh when possible — frozen lemongrass loses much of its aroma. Look for stalks that are firm, pale yellow-green at the base, and smell intensely fragrant when you scratch the surface. Trim the top two-thirds (tough and woody) and use only the pale inner stalk."
                    using="For broths: smash the stalk with the back of a knife and add whole. For marinades: peel away outer layers, use only the tender inner core, mince finely."
                    storing="Fresh: wrap in plastic, refrigerate up to 2 weeks. Freeze whole stalks for months."
                />

                <IngredientCard
                    number="04"
                    name="Shallots"
                    nameVi="Hành Tím"
                    description="Vietnamese cooking uses shallots constantly — raw in salads and dipping sauces, slowly fried into crispy golden chips that top everything from bánh cuốn to congee, and caramelized as the flavor base for braises. The Vietnamese shallot is smaller and more intensely flavored than Western varieties."
                    buying="Any shallot works. Smaller ones tend to be more pungent. For crispy shallots, slice thin and fry slowly in cold oil — the cold oil start is essential for even crisping."
                    using="Crispy fried shallots are made once, stored in a jar, and used for weeks. Make a large batch."
                    storing="Fresh: cool dark place, 2-3 weeks. Fried: airtight jar, room temperature, 2 weeks."
                />

                <IngredientCard
                    number="05"
                    name="Fresh Herbs Bundle"
                    nameVi="Rau Thơm"
                    description="Vietnamese cooking uses fresh herbs as a structural element, not a garnish. At minimum, stock: mint (húng lủi), cilantro (ngò rí), and Thai basil (húng quế). If you can find them: perilla (tía tô), Vietnamese coriander (rau răm), and rice paddy herb (ngò ôm). The herb plate that comes with phở, bún bò Huế, and bánh xèo is not optional — it is half the dish."
                    buying="Asian grocery stores carry the full range. Buy weekly — fresh herbs do not last."
                    using="Never cook fresh Vietnamese herbs except Thai basil (which holds up to brief heat). All others go in raw, at the last second, or on the table."
                    storing="Wrap loosely in damp paper towel, refrigerate. Use within 5 days."
                />

                <SectionDivider />
                <SectionHeader>The Flavor Builders</SectionHeader>

                <Section>
                    These five ingredients add depth, aroma, and the specific flavor profiles that make a Vietnamese dish unmistakably Vietnamese.
                </Section>

                <IngredientCard
                    number="06"
                    name="Star Anise"
                    nameVi="Hoa Hồi"
                    description="The spice most associated with phở — that distinctive warm, licorice-adjacent aroma that perfumes the broth. Used whole in spice bundles for soups and braises, always toasted first to unlock the essential oils. Star anise from Vietnam (particularly Lạng Sơn province) is more intensely fragrant than Chinese star anise."
                    buying="Buy whole pods, not ground. Fresh star anise smells intensely sweet and anise-like — old stock smells like nothing."
                    using="Always toast in a dry pan before use. Use sparingly — 3-4 pods is usually enough for 3 liters of broth."
                    storing="Whole spices: airtight container, dark cupboard, up to 1 year."
                />

                <IngredientCard
                    number="07"
                    name="Fermented Shrimp Paste"
                    nameVi="Mắm Ruốc / Mắm Tôm"
                    description="The ingredient that divides opinion and defines bún bò Huế. A pungent, deeply savory paste of fermented tiny shrimp — it smells alarming and tastes extraordinary when used correctly. A small amount adds a layer of umami and fermented funk that no other ingredient can replicate."
                    buying="Look for mắm ruốc Huế for bún bò Huế — it is less pungent than mắm tôm from the north. Start with a small jar."
                    using="Dissolve in hot broth and strain before adding to soup. Never add directly — the grains are sandy. Use 1-2 tablespoons per large pot, taste as you go."
                    storing="Refrigerate after opening. Lasts months."
                />

                <IngredientCard
                    number="08"
                    name="Rock Sugar"
                    nameVi="Đường Phèn"
                    description="Unrefined cane sugar formed into irregular golden-amber crystals. Less sweet than regular sugar, with a slight molasses note that rounds the flavor of long-cooked dishes. Used in phở broth, thịt kho tàu (caramelized pork and eggs), and many braised dishes where it provides gentle sweetness and helps build the caramel color."
                    buying="Asian grocery stores, sold in bags of crystals or large chunks. Substitute: regular sugar in a smaller quantity."
                    using="Break into small pieces before adding to hot liquid. It dissolves slower than regular sugar — add early in long-cooked dishes."
                    storing="Indefinitely in an airtight container."
                />

                <IngredientCard
                    number="09"
                    name="Dried Anchovies"
                    nameVi="Cá Cơm Khô"
                    description="Small whole dried anchovies, used to build broth for bánh canh hẹ, bún cá, and many central Vietnamese soups. Toasted briefly in a dry pan before simmering, they give a clean, subtle sea flavor that is different from fish sauce — less salty, more oceanic. The hallmark of Phú Yên and central coast cooking."
                    buying="Asian grocery stores — look for small ones (2-3 cm) with heads and guts removed. Smell them: they should smell of the sea, not rancid."
                    using="Toast in a dry pan 2 minutes until fragrant. Simmer in broth for 30-45 minutes. Strain and discard before serving."
                    storing="Cool dark place in an airtight bag, up to 3 months. Refrigerate in hot weather."
                />

                <IngredientCard
                    number="10"
                    name="Tamarind"
                    nameVi="Me Chua"
                    description="The souring agent of Southern Vietnamese cooking — used in canh chua (sweet and sour fish soup), satay sauce, and many Mekong Delta dishes. Tamarind provides a fruity, complex acidity that is entirely different from vinegar or lime. It tastes simultaneously sour, slightly sweet, and deeply savory."
                    buying="Buy tamarind paste (concentrate) in a jar for convenience, or tamarind pulp in a block (soak in hot water, strain to use). Avoid tamarind powder — it is inferior."
                    using="Dissolve 1 tablespoon of concentrate or strained pulp liquid in 2-3 tablespoons of warm water. Add to soups and sauces gradually — it is more potent than it looks."
                    storing="Paste: refrigerate after opening, 6 months. Pulp block: cool, dark place, indefinitely."
                />

                <SectionDivider />
                <SectionHeader>The Noodles and Starches</SectionHeader>

                <Section>
                    Vietnamese cooking uses a wider variety of noodles and starches than almost any other cuisine. These are the five you need to cover the major dishes.
                </Section>

                <IngredientCard
                    number="11"
                    name="Flat Rice Noodles (Bánh Phở)"
                    nameVi="Bánh Phở"
                    description="The noodle of phở — flat, silky, made from rice flour and water. Available fresh (refrigerated, cook in 30 seconds) or dried (soak before boiling, 5-6 minutes). Fresh is dramatically better. Buy them at Asian grocery stores and use within 2-3 days of purchase. Never cook them in the broth — cook separately, drain, then add broth."
                    buying="Fresh: refrigerated section of Asian grocery. Dried: shelf stable, good substitute. Width matters: thin (for chicken pho), medium (classic beef pho), wide (for stir-fried pho dishes)."
                    using="Fresh: blanch 30 seconds in boiling water. Dried: soak 30 min in cold water, then boil 5-6 min. Always drain well before serving."
                    storing="Fresh: refrigerate, use within 3 days. Dried: pantry, indefinitely."
                />

                <IngredientCard
                    number="12"
                    name="Rice Vermicelli (Bún)"
                    nameVi="Bún"
                    description="Thin, round rice noodles — the noodle of bún bò Huế, bún chả, gỏi cuốn, and dozens of other dishes. Lighter and more delicate than flat rice noodles, with a slightly chewy texture that holds up well to room-temperature service. Essential for the noodle bowls where the noodles are served at room temperature and the broth (or sauce) is poured or dipped separately."
                    buying="Dried rice vermicelli is sold in every Asian grocery store. Buy the thin variety (not the thick bún bò style, which is a different product)."
                    using="Soak in cold water 20 minutes, then boil 2-3 minutes. Drain and rinse under cold water to stop cooking and prevent clumping."
                    storing="Dried: pantry, indefinitely. Cooked: refrigerate up to 2 days."
                />

                <IngredientCard
                    number="13"
                    name="Rice Paper (Bánh Tráng)"
                    nameVi="Bánh Tráng"
                    description="The wrapper for gỏi cuốn (fresh spring rolls) and a base for bánh tráng trộn. Made from rice flour, water, and salt, dried on bamboo mats into translucent round sheets. When briefly dipped in water, they soften into a pliable, slightly chewy wrapper. The technique takes 2-3 tries to master — too long in water and they become sticky and tear; too short and they crack."
                    buying="22 cm rounds for fresh spring rolls. Look for brands from Vietnam — they are thinner and more pliable than Chinese versions."
                    using="Dip one sheet briefly in warm water (3-4 seconds), place on a clean damp surface, fill immediately. Work one sheet at a time."
                    storing="Pantry, indefinitely. Keep dry."
                />

                <IngredientCard
                    number="14"
                    name="Tapioca Starch"
                    nameVi="Bột Năng"
                    description="Used mixed with rice flour for bánh ướt, bánh canh, and bánh bao dough — it adds elasticity, chewiness, and a silky, slightly translucent quality that rice flour alone cannot achieve. Also used as a thickener for soups and sauces. Not interchangeable with cornstarch (which produces a cloudy, gluey texture) — tapioca gives a clear, elastic result."
                    buying="Asian grocery stores sell it as 'tapioca starch' or 'tapioca flour.' The Erawan brand (green packaging) is widely available and reliable."
                    using="For noodle and wrapper doughs: combine with rice flour at roughly 1:5 ratio (1 part tapioca to 5 parts rice flour). For thickening: dissolve in cold water before adding to hot liquid."
                    storing="Airtight container, pantry, up to 1 year."
                />

                <IngredientCard
                    number="15"
                    name="Jasmine Rice"
                    nameVi="Gạo Tẻ"
                    description="The daily rice of Vietnamese cooking — long-grain, fragrant, slightly sticky when cooked but with individual grains that separate cleanly. Used for everyday meals, broken rice (cơm tấm, where the grains are intentionally cracked during milling), and congee. Not to be confused with glutinous rice (gạo nếp), which is a different product used for sticky rice dishes and desserts."
                    buying="Jasmine rice from Thailand or Vietnam. The ST25 variety from Sóc Trăng province is considered the finest Vietnamese jasmine rice — recently won World's Best Rice multiple times. Available at Asian grocery stores."
                    using="Rinse 2-3 times until water runs clear. Cook in a rice cooker or pot with a 1:1.2 ratio (rice to water). Rest covered 10 minutes after cooking."
                    storing="Airtight container, cool dark place. Indefinitely."
                />

                <SectionDivider />

                {/* Quick reference */}
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '48px 0', padding: '32px', background: '#FEF3E2', borderLeft: '4px solid #D97706', borderRadius: '0 8px 8px 0' }}>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', color: '#D97706', textTransform: 'uppercase', marginBottom: '16px' }}>
                        WHERE TO BUY
                    </p>
                    <Section>
                        Every ingredient on this list is available at a Vietnamese or Chinese grocery store. In most Western cities, look for the Asian grocery district — there will be one. Online, Subtle Asian Pantry, Temple of Thai, and Amazon all stock the major items. For fresh herbs, a Vietnamese grocery is irreplaceable — the selection at mainstream supermarkets is too limited.
                    </Section>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', color: '#D97706', textTransform: 'uppercase', marginBottom: '16px', marginTop: '24px' }}>
                        START HERE
                    </p>
                    <Section>
                        If you are buying for the first time: fish sauce, rice vinegar, lemongrass, shallots, fresh herbs, star anise, flat rice noodles, and jasmine rice. That is eight items. With those eight you can make phở, gỏi cuốn, bún chả, and cơm tấm. The other seven can wait until you need them for a specific recipe.
                    </Section>
                    <Link href="/recipes" style={{ display: 'inline-block', background: '#D97706', color: 'white', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '13px', letterSpacing: '0.05em', padding: '10px 24px', textDecoration: 'none', borderRadius: '4px', marginTop: '8px' }}>
                        Browse All Recipes →
                    </Link>
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

function IngredientCard({ number, name, nameVi, description, buying, using, storing }: {
    number: string;
    name: string;
    nameVi: string;
    description: string;
    buying: string;
    using: string;
    storing: string;
}) {
    return (
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.55 }}
            style={{ margin: '32px 0', background: '#fff', border: '1px solid rgba(75,46,26,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 24px', borderBottom: '1px solid rgba(75,46,26,0.07)', background: '#FDFAF7' }}>
                <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 700, color: '#D97706', minWidth: '36px' }}>{number}</span>
                <div>
                    <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', fontWeight: 700, color: '#2D1A0E', margin: 0 }}>{name}</h3>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#D97706', fontStyle: 'italic' }}>{nameVi}</span>
                </div>
            </div>
            {/* Body */}
            <div style={{ padding: '20px 24px' }}>
                <p style={{ fontFamily: 'Georgia, serif', fontSize: '14px', lineHeight: 1.75, color: '#4B2E1A', marginBottom: '16px' }}>{description}</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
                    {[
                        { label: 'BUYING', text: buying },
                        { label: 'USING', text: using },
                        { label: 'STORING', text: storing },
                    ].map((item) => (
                        <div key={item.label} style={{ background: '#FDFAF7', padding: '12px', borderRadius: '4px' }}>
                            <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', color: '#D97706', marginBottom: '6px' }}>{item.label}</div>
                            <p style={{ fontFamily: 'Georgia, serif', fontSize: '12px', lineHeight: 1.6, color: '#6B5544', margin: 0 }}>{item.text}</p>
                        </div>
                    ))}
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