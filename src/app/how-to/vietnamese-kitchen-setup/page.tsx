'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

export default function VietnameseKitchenSetupPage() {
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
                <motion.div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/recipes/nau-com.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', scale: heroScale }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(45,26,14,0.4) 0%, rgba(45,26,14,0.2) 40%, rgba(45,26,14,0.94) 100%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 24px 80px' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#D97706' }} />
                                <span style={{ color: '#D97706', fontSize: '12px', letterSpacing: '2px', fontWeight: 700, fontFamily: 'DM Sans, sans-serif' }}>
                                    HOW TO · KITCHEN SETUP · COOKWARE GUIDE
                                </span>
                            </div>
                            <h1 style={{ fontFamily: 'Playfair Display, serif', color: '#FFF', fontSize: 'clamp(2.2rem, 6vw, 4.5rem)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '20px', maxWidth: '900px' }}>
                                How to Set Up a Vietnamese Kitchen: The Honest Guide to Cookware, Pans, and What Actually Matters
                            </h1>
                            <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1rem, 2vw, 1.35rem)', maxWidth: '680px', lineHeight: 1.5, marginBottom: '28px' }}>
                                You do not need expensive equipment to cook Vietnamese food well. You need the right equipment — which is a much shorter list than most people think.
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', color: 'rgba(255,255,255,0.6)', fontSize: '14px', fontFamily: 'DM Sans, sans-serif' }}>
                                <span>By Quan Huy Nguyen</span>
                                <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'currentColor' }} />
                                <span>May 29, 2026</span>
                                <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'currentColor' }} />
                                <span>8 min read</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Body */}
            <div style={{ maxWidth: '720px', margin: '0 auto', padding: '72px 24px 40px', fontFamily: 'Georgia, "Iowan Old Style", serif', color: '#2D1A0E' }}>

                <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                    style={{ fontSize: '1.35rem', lineHeight: 1.65, fontStyle: 'italic', color: '#4B2E1A', marginBottom: '48px', paddingLeft: '24px', borderLeft: '3px solid #D97706' }}>
                    My grandmother cooked for a family of eight with three items: a clay pot, a thin steel wok, and a rice cooker. Every Vietnamese dish you have ever eaten was made in equipment simpler than what is currently sitting in your kitchen doing nothing. The problem is usually not the equipment. It is knowing which pieces actually matter.
                </motion.p>

                <Section>
                    <DropCap>T</DropCap>he Vietnamese kitchen runs on high heat, fresh ingredients, and minimal equipment. This is not a cuisine that requires a stand mixer, a sous vide machine, or a cast iron skillet weighing four kilograms. It requires a wok, a pot for broth, a rice cooker, and a sharp knife. Everything else is optional. Understanding why these specific tools work — and which modern alternatives are worth buying — saves you money, counter space, and the frustration of cooking with the wrong pan.
                </Section>

                <SectionDivider />
                <SectionHeader>How to Choose a Wok — The Most Important Decision</SectionHeader>

                <Section>
                    The wok is the single most important piece of cookware for Vietnamese cooking. Not a frying pan. Not a sauté pan. A wok — specifically, a carbon steel wok, round-bottomed if you have a gas stove, flat-bottomed if you have induction or electric. Everything else is compromise.
                </Section>

                <Section>
                    The reason is physics. Vietnamese stir-fries — rau muống xào tỏi, bò lúc lắc, cơm chiên — require what Chinese cooks call "wok hei": the breath of the wok, the slightly smoky, caramelized flavor that comes from very high heat applied very quickly to ingredients that keep moving. This only happens in a thin-walled wok over maximum heat. A thick pan stores heat and braises. A thin wok transfers heat instantly and chars. The difference in flavor is enormous and not replicable with substitutions.
                </Section>

                <CookwareCard
                    name="Carbon Steel Wok"
                    verdict="BUY THIS"
                    verdictColor="#166534"
                    price="€20 – €60"
                    why="Heats fastest, cools fastest, responds to flame immediately. Develops a natural non-stick patina over time through seasoning. Lasts decades with basic care. The wok every Vietnamese grandmother uses."
                    healthy="Carbon steel is 100% safe — no chemical coating, no PFAS, no concerns. The more you cook with it, the better the seasoning (natural polymerized oil layer) becomes."
                    howToChoose="14-inch (36cm) for a family of 4. Round bottom for gas, flat bottom for induction/electric. Look for 1.5-2mm thickness — thin enough to heat fast, thick enough not to warp. Handle that stays cool."
                    howToClean="Rinse with hot water while still warm. Light scrub with brush — no soap needed once seasoned. Dry immediately on the stove over low heat. Wipe with a drop of oil. Done in 60 seconds."
                    avoid="Do not soak in water. Do not use steel wool. Do not leave wet. Do not cook acidic dishes (tomatoes, vinegar) in a new, unseasoned wok."
                    brands="Craft Wok (available on Amazon, ~€35), Joyce Chen, or any Asian market carbon steel wok. The cheap ones work as well as the expensive ones."
                />

                <CookwareCard
                    name="Non-Stick Pan (PTFE/Teflon)"
                    verdict="USE WITH CAUTION"
                    verdictColor="#D97706"
                    price="€15 – €80"
                    why="Convenient for eggs, bánh xèo crêpes, and delicate fish. Requires no seasoning. Easy for beginners. But has significant limitations."
                    healthy="PTFE (Teflon) coatings are safe at normal cooking temperatures (below 260°C/500°F). The danger is overheating an empty pan — above 300°C the coating begins to degrade and release fumes. For Vietnamese high-heat stir-frying, a non-stick pan will overheat and degrade quickly."
                    howToChoose="Only for low-to-medium heat tasks. Look for PFOA-free labeling (most modern pans are). Thick base prevents hotspots. Replace when coating scratches or chips."
                    howToClean="Cool completely before washing — thermal shock warps thin non-stick pans. Warm water, soft sponge, mild soap. Never dishwasher. Never metal utensils."
                    avoid="Never preheat empty. Never use metal utensils. Never use for high-heat stir-fry. Replace every 2-3 years or when coating shows scratches."
                    brands="Tefal Expertise, Zwilling Madura, IKEA Vardagen (budget). For Vietnamese cooking specifically: use only for eggs and crêpes."
                />

                <CookwareCard
                    name="Ceramic Coated Pan"
                    verdict="DECENT ALTERNATIVE"
                    verdictColor="#0369A1"
                    price="€25 – €120"
                    why="Marketed as 'natural' and 'chemical-free' non-stick. Generally free of PFAS. Works well at medium heat. Better for the environment than traditional non-stick."
                    healthy="Ceramic coatings are made from silicon dioxide — genuinely free of PFAS and PTFE. The tradeoff: the non-stick performance degrades faster than Teflon (typically 1-2 years with regular use). Some ceramic pans contain trace heavy metals in the pigment — look for certified lead-free and cadmium-free labeling."
                    howToChoose="Thick base (4mm+) for even heat. Light-colored interior so you can see browning. PTFE-free and PFAS-free labeling. GreenPan and Caraway are reliable brands."
                    howToClean="Hand wash only — dishwasher degrades ceramic coating rapidly. Cool before washing. Soft sponge. Avoid abrasive cleaners. Store with pan protectors to prevent scratching."
                    avoid="High heat — ceramic loses non-stick properties faster at high temperatures. Metal utensils scratch the surface. Stacking without protection."
                    brands="GreenPan Valencia Pro, Caraway, Scanpan. More expensive but genuinely healthier than PTFE if health is the priority."
                />

                <CookwareCard
                    name="Cast Iron Pan / Dutch Oven"
                    verdict="EXCELLENT FOR BRAISES"
                    verdictColor="#7C3AED"
                    price="€25 – €300"
                    why="Ideal for cá kho tộ (caramelized fish), thịt kho hột vịt (braised pork and eggs), and any long-cooked Vietnamese dish. Holds heat evenly, develops excellent seasoning, lasts forever."
                    healthy="Cast iron is 100% safe. Cooking in cast iron actually adds small amounts of dietary iron to food — beneficial for most people. No chemical coatings, no degradation concerns."
                    howToChoose="Lodge (American-made, excellent quality, very affordable) or Le Creuset enameled (more expensive, easier to clean, suitable for acidic dishes). For Vietnamese cooking: a 26-28cm Dutch oven or braiser covers most needs."
                    howToClean="Bare cast iron: rinse hot, dry immediately, light oil. Enameled cast iron: soap and water fine, hand wash only. Never thermal shock with cold water."
                    avoid="Bare cast iron: avoid acidic dishes (damages seasoning). Enameled: avoid metal utensils on the enamel. Both: never leave wet."
                    brands="Lodge (bare cast iron, ~€30-50, exceptional value), Le Creuset (enameled, €150-300, lifetime quality), Staub."
                />

                <SectionDivider />
                <SectionHeader>How to Wash Dishes Properly — The Kitchen Hygiene Nobody Talks About</SectionHeader>

                <Section>
                    Washing dishes correctly is not complicated, but it is done wrong constantly — especially in home kitchens that handle raw meat, fish sauce, and oils. Vietnamese cooking involves all three, often in the same meal. These are the habits that matter.
                </Section>

                {[
                    {
                        rule: 'Wash raw meat bowls first, before anything else.',
                        detail: 'Any bowl or board that touched raw chicken, pork, or fish goes first under hot running water with soap, before it touches anything else. Cross-contamination from raw poultry is the single most common cause of food poisoning in home kitchens. Hot water + soap + immediate washing = no risk.',
                        icon: '🥩',
                    },
                    {
                        rule: 'Fish sauce residue needs hot water and soap — cold water just spreads the smell.',
                        detail: 'Fish sauce is water-soluble but the fermented compounds that produce the smell are not removed by cold water alone. Hot water breaks down the organic compounds. One drop of dish soap, hot water, a quick scrub — the smell is gone. Cold rinse only spreads it onto other dishes.',
                        icon: '🐟',
                    },
                    {
                        rule: 'Clean your wok while it is still warm, not after it has cooled.',
                        detail: 'A carbon steel wok cleaned while warm requires 30 seconds and no soap. The same wok cooled to room temperature with dried oil residue requires 5 minutes and risks stripping the seasoning. Clean it immediately after plating. This is a habit, not a chore.',
                        icon: '🥘',
                    },
                    {
                        rule: 'The sponge is the dirtiest object in your kitchen.',
                        detail: 'Kitchen sponges harbor more bacteria per square centimeter than toilet seats. Replace weekly, or microwave damp for 60 seconds to kill bacteria. Alternatively: use a brush (easier to keep clean) or silicone scrubber (dishwasher-safe). This is not alarmism — it is basic microbiology.',
                        icon: '🧽',
                    },
                    {
                        rule: 'Rinse soapy dishes thoroughly.',
                        detail: 'Dish soap residue left on bowls affects the flavor of food eaten from them — particularly important for dishes with delicate flavors like phở broth or bún thịt nướng dipping sauce. One final hot rinse removes all soap. This takes 5 seconds and matters more than people think.',
                        icon: '💧',
                    },
                    {
                        rule: 'Air dry instead of towel dry when possible.',
                        detail: 'Kitchen towels transfer bacteria between dishes unless changed daily. Air drying on a rack is more hygienic. For cast iron and carbon steel woks: towel dry immediately to prevent rust, then briefly heat on the stove to ensure all moisture is gone.',
                        icon: '🌬️',
                    },
                    {
                        rule: 'Your cutting board needs more attention than your dishes.',
                        detail: 'A wooden cutting board that has had raw chicken on it needs hot water, soap, and ideally a dilute white vinegar rinse. Plastic cutting boards should go in the dishwasher. Deep knife grooves in plastic boards harbor bacteria that survive hand washing. Replace plastic boards when they are heavily grooved.',
                        icon: '🔪',
                    },
                ].map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-30px' }} transition={{ duration: 0.45 }}
                        style={{ display: 'flex', gap: '16px', padding: '16px 0', borderBottom: '1px solid rgba(75,46,26,0.07)' }}>
                        <span style={{ fontSize: '1.5rem', flexShrink: 0, lineHeight: 1.4 }}>{item.icon}</span>
                        <div>
                            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 700, color: '#2D1A0E', marginBottom: '6px' }}>{item.rule}</p>
                            <p style={{ fontFamily: 'Georgia, serif', fontSize: '13px', color: '#6B5544', lineHeight: 1.65, margin: 0 }}>{item.detail}</p>
                        </div>
                    </motion.div>
                ))}

                <SectionDivider />
                <SectionHeader>The 7 Things Every Vietnamese Kitchen Needs</SectionHeader>

                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '32px 0', background: '#fff', border: '1px solid rgba(75,46,26,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ padding: '12px 20px', background: '#2D1A0E' }}>
                        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '2px', color: '#D97706', textTransform: 'uppercase' }}>THE ESSENTIAL LIST</span>
                    </div>
                    {[
                        { item: 'Carbon steel wok (36cm)', why: 'Stir-fries, crêpes, fried rice. The most-used item in any Vietnamese kitchen.', priority: 'Essential' },
                        { item: 'Rice cooker', why: 'Consistent perfect rice, every time. One of the few appliances worth the counter space.', priority: 'Essential' },
                        { item: 'Large stockpot (8L+)', why: 'Phở broth, bún bò Huế broth, blanching bones. Cannot be substituted.', priority: 'Essential' },
                        { item: 'Mortar and pestle', why: 'Grinding spices, making lemongrass paste, pounding lime for trà chanh giã tay. A blender cannot replace the texture.', priority: 'Essential' },
                        { item: 'Sharp chef\'s knife (20cm)', why: 'One good knife, sharpened regularly, does everything. Brand matters less than sharpness.', priority: 'Essential' },
                        { item: 'Clay pot (đất nung)', why: 'Cá kho tộ, thịt kho, anything braised. Clay distributes heat evenly and gives a specific earthy note.', priority: 'Recommended' },
                        { item: 'Fine mesh strainer', why: 'Straining phở broth, removing agar agar seeds, clarifying sauces. Inexpensive and irreplaceable.', priority: 'Recommended' },
                    ].map((row, i) => (
                        <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 100px', borderBottom: i < 6 ? '1px solid rgba(75,46,26,0.06)' : 'none' }}>
                            <div style={{ padding: '14px 20px', background: i % 2 === 0 ? '#FDFAF7' : '#fff', borderRight: '1px solid rgba(75,46,26,0.06)' }}>
                                <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '13.5px', fontWeight: 700, color: '#2D1A0E' }}>{row.item}</span>
                            </div>
                            <div style={{ padding: '14px 16px', background: i % 2 === 0 ? '#FDFAF7' : '#fff', borderRight: '1px solid rgba(75,46,26,0.06)' }}>
                                <span style={{ fontFamily: 'Georgia, serif', fontSize: '12.5px', color: '#6B5544' }}>{row.why}</span>
                            </div>
                            <div style={{ padding: '14px 16px', background: i % 2 === 0 ? '#FDFAF7' : '#fff', display: 'flex', alignItems: 'center' }}>
                                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, color: row.priority === 'Essential' ? '#166534' : '#D97706', background: row.priority === 'Essential' ? 'rgba(22,101,52,0.08)' : 'rgba(217,119,6,0.1)', padding: '3px 8px', borderRadius: '100px' }}>{row.priority}</span>
                            </div>
                        </div>
                    ))}
                </motion.div>

                <SectionDivider />
                <SectionHeader>What You Do Not Need</SectionHeader>

                <Section>
                    The cookware industry sells many things that Vietnamese cooking does not require. These are the items most commonly bought and least used in kitchens attempting to cook Vietnamese food.
                </Section>

                {[
                    { item: 'Stainless steel wok', reason: 'Does not develop seasoning. Food sticks. Requires more oil than carbon steel. Buy carbon steel instead — same price, far better results.' },
                    { item: 'Non-stick wok', reason: 'Non-stick coatings degrade at the high temperatures needed for wok hei. A non-stick wok is a contradiction in terms.' },
                    { item: 'Expensive Japanese knives', reason: 'A Vietnamese kitchen uses a heavy cleaver and one general-purpose knife. Expensive chef\'s knives require more care and do not perform better for Vietnamese prep work.' },
                    { item: 'Instant Pot / pressure cooker for pho', reason: 'Produces an acceptable broth in 2 hours. Produces a visibly different broth from an 8-hour simmer. For regular Tuesday cooking: fine. For the real thing: use the stockpot.' },
                    { item: 'Mandoline slicer', reason: 'Useful but not necessary. A sharp knife and the confidence to use it produces the same result. Mandolines are responsible for a disproportionate number of kitchen injuries.' },
                ].map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
                        style={{ display: 'flex', gap: '12px', padding: '14px 0', borderBottom: '1px solid rgba(75,46,26,0.07)' }}>
                        <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', fontWeight: 700, color: '#dc2626', flexShrink: 0, lineHeight: 1.3 }}>✕</span>
                        <div>
                            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 700, color: '#2D1A0E' }}>{item.item}: </span>
                            <span style={{ fontFamily: 'Georgia, serif', fontSize: '13px', color: '#6B5544', lineHeight: 1.6 }}>{item.reason}</span>
                        </div>
                    </motion.div>
                ))}

                <SectionDivider />

                <Section>
                    The best Vietnamese home kitchens I have ever eaten from looked nothing like a well-equipped Western kitchen. They had a thin wok with a blackened patina from a decade of daily use, a rice cooker with a dented lid, two clay pots, and a knife sharpened so many times the blade had narrowed by a centimeter. Everything was clean. Everything worked perfectly. The food was extraordinary. Equipment is not the variable. Technique and ingredients are the variable. The equipment just needs to be correct, not expensive.
                </Section>

                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '48px 0', padding: '28px', background: '#FEF3E2', borderLeft: '4px solid #D97706', borderRadius: '0 8px 8px 0' }}>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', color: '#D97706', textTransform: 'uppercase', marginBottom: '16px' }}>START COOKING</p>
                    {[
                        { title: 'Phở Bò Hà Nội — Test Your New Stockpot', slug: '/recipes/pho-bo-ha-noi' },
                        { title: 'Rau Muống Xào Tỏi — First Wok Recipe', slug: '/recipes/rau-muong-xao-toi' },
                        { title: 'Cá Kho Tộ — First Clay Pot Recipe', slug: '/recipes/ca-kho-to' },
                    ].map((r) => (
                        <Link key={r.slug} href={r.slug}
                            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid rgba(75,46,26,0.1)', textDecoration: 'none' }}>
                            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.95rem', color: '#2D1A0E', fontWeight: 600 }}>{r.title}</span>
                            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#D97706', fontWeight: 600, flexShrink: 0, marginLeft: '12px' }}>Recipe →</span>
                        </Link>
                    ))}
                </motion.div>

                <div style={{ marginTop: '48px', textAlign: 'center' }}>
                    <Link href="/how-to" style={{ color: '#D97706', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, textDecoration: 'none', fontSize: '14px' }}>
                        ← Back to How To guides
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
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: 700, color: '#2D1A0E', margin: 0 }}>{children}</h2>
        </motion.div>
    );
}

function CookwareCard({ name, verdict, verdictColor, price, why, healthy, howToChoose, howToClean, avoid, brands }: {
    name: string; verdict: string; verdictColor: string; price: string;
    why: string; healthy: string; howToChoose: string; howToClean: string; avoid: string; brands: string;
}) {
    return (
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.55 }}
            style={{ margin: '28px 0', background: '#fff', border: '1px solid rgba(75,46,26,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ padding: '14px 20px', background: '#FDFAF7', borderBottom: '1px solid rgba(75,46,26,0.07)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', fontWeight: 700, color: '#2D1A0E', margin: 0 }}>{name}</h3>
                <div style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, color: verdictColor, background: `${verdictColor}15`, padding: '4px 12px', borderRadius: '100px' }}>{verdict}</span>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 600, color: '#166534', background: 'rgba(22,101,52,0.08)', padding: '4px 12px', borderRadius: '100px' }}>{price}</span>
                </div>
            </div>
            <div style={{ padding: '16px 20px' }}>
                <p style={{ fontFamily: 'Georgia, serif', fontSize: '13.5px', lineHeight: 1.7, color: '#4B2E1A', marginBottom: '14px' }}>{why}</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
                    {[
                        { label: '🏥 HEALTH & SAFETY', text: healthy, bg: '#F0FFF4', border: '#166534' },
                        { label: '🛒 HOW TO CHOOSE', text: howToChoose, bg: '#FDFAF7', border: '#D97706' },
                        { label: '🧹 HOW TO CLEAN', text: howToClean, bg: '#FDFAF7', border: '#0369A1' },
                        { label: '⚠️ AVOID', text: avoid, bg: '#FFF5F5', border: '#DC2626' },
                    ].map((item) => (
                        <div key={item.label} style={{ background: item.bg, padding: '10px 12px', borderRadius: '4px', borderLeft: `3px solid ${item.border}` }}>
                            <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '9px', fontWeight: 700, letterSpacing: '1px', color: item.border, marginBottom: '5px' }}>{item.label}</div>
                            <p style={{ fontFamily: 'Georgia, serif', fontSize: '12px', lineHeight: 1.55, color: '#6B5544', margin: 0 }}>{item.text}</p>
                        </div>
                    ))}
                </div>
                <div style={{ padding: '8px 12px', background: '#F8F4FF', borderRadius: '4px', borderLeft: '3px solid #7C3AED' }}>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '9px', fontWeight: 700, color: '#7C3AED', letterSpacing: '1px' }}>BRANDS: </span>
                    <span style={{ fontFamily: 'Georgia, serif', fontSize: '12px', color: '#6B5544', fontStyle: 'italic' }}>{brands}</span>
                </div>
            </div>
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