'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

export default function VietnameseKnifeSkillsPage() {
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
            <motion.section style={{ position: 'relative', height: '80vh', minHeight: '480px', overflow: 'hidden', opacity: heroOpacity }}>
                <motion.div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/recipes/rau-thom.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', scale: heroScale }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(45,26,14,0.4) 0%, rgba(45,26,14,0.2) 40%, rgba(45,26,14,0.94) 100%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 24px 72px' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#D97706' }} />
                                <span style={{ color: '#D97706', fontSize: '12px', letterSpacing: '2px', fontWeight: 700, fontFamily: 'DM Sans, sans-serif' }}>
                                    HOW TO · KNIFE SKILLS · VIETNAMESE INGREDIENTS
                                </span>
                            </div>
                            <h1 style={{ fontFamily: 'Playfair Display, serif', color: '#FFF', fontSize: 'clamp(2rem, 5.5vw, 4rem)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '20px', maxWidth: '860px' }}>
                                Vietnamese Knife Skills: How to Cut Every Ingredient Correctly
                            </h1>
                            <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1rem, 1.8vw, 1.3rem)', maxWidth: '640px', lineHeight: 1.5, marginBottom: '28px' }}>
                                How you cut lemongrass determines whether it flavors your broth or sits in it unnoticed. How thin you slice the beef determines whether it cooks in the bowl or sits raw. Vietnamese prep is precise. This is the guide.
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
                    <Section>
                        Vietnamese cooking has specific prep requirements that generic knife skills guides never address. How do you bruise lemongrass without destroying it? How thin is "paper thin" for phở beef? How do you julienne daikon for đồ chua without it turning mushy? These are the techniques that determine whether a dish works.
                    </Section> How do you bruise lemongrass without destroying it? How thin is "paper thin" for phở beef? How do you julienne daikon for đồ chua without it turning mushy? These are the techniques that determine whether a dish works.
                </motion.p>

                <Section>
                    <DropCap>T</DropCap>he Vietnamese knife tradition is different from the European one. Vietnamese cooks historically used a single heavy cleaver for everything — chopping, slicing, smashing, scraping food from the board into the wok. The cleaver is still the tool of choice in most Vietnamese home kitchens and all professional ones. A Western chef's knife works for everything described in this guide, but if you want to cook Vietnamese food regularly, a Chinese cleaver (the lighter vegetable variety, not the heavy bone-chopper) is worth adding to your kitchen.
                </Section>

                <SectionDivider />
                <SectionHeader>The Foundation: Knife Grip and the Claw</SectionHeader>

                <Section>
                    Before any specific technique: the claw grip. Curl your non-knife hand so that your fingertips are tucked under and your knuckles face the blade. The flat side of the blade rests against your knuckles as you slice — they act as a guide. This is the single most important safety and efficiency technique in the kitchen. Without it, every slice is a navigation problem. With it, your fingers are protected and your slices are automatically even.
                </Section>

                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '32px 0', padding: '24px', background: '#FEF3E2', borderLeft: '4px solid #D97706', borderRadius: '0 8px 8px 0' }}>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', color: '#D97706', textTransform: 'uppercase', marginBottom: '12px' }}>THE CLAW — 3 RULES</p>
                    {['Fingertips tucked under, never pointing forward toward the blade.', 'Knuckles act as the blade guide — the knife side rests against them with every slice.', 'Move the claw hand backward with every slice — the knuckles control the thickness of each cut.'].map((r, i) => (
                        <div key={i} style={{ display: 'flex', gap: '12px', marginBottom: '8px' }}>
                            <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, color: '#D97706', flexShrink: 0 }}>{i + 1}.</span>
                            <p style={{ fontFamily: 'Georgia, serif', fontSize: '13px', color: '#4B2E1A', margin: 0, lineHeight: 1.6 }}>{r}</p>
                        </div>
                    ))}
                </motion.div>

                <SectionDivider />
                <SectionHeader>Aromatics: Lemongrass, Ginger, Galangal, Shallots</SectionHeader>

                <Section>
                    Vietnamese aromatics are harder to cut than they look. Lemongrass is fibrous and will dull a knife if you fight it. Ginger is slippery. Galangal is one of the hardest roots in Vietnamese cooking. Shallots are small and difficult to hold. Each has a specific technique.
                </Section>

                <CutCard
                    ingredient="Lemongrass"
                    nameVi="Sả"
                    color="#166534"
                    usedAs={['Bruised whole for broths', 'Finely minced for marinades and stir-fries']}
                    steps={[
                        { label: 'For broths', instruction: 'Peel the outer 2-3 layers (tough and flavorless). Cut the stalk into 8cm sections. Place on the cutting board and smash firmly with the flat side of the blade — you want to crack it open without shattering it. Tie the sections in a loose knot if the broth is long-simmered. The smashing releases the aromatic oils into the liquid.' },
                        { label: 'For marinades', instruction: 'Use only the bottom 10cm of the stalk — the pale, tender inner part. Remove all outer layers until you reach the pale yellow-white core. Slice into thin rings first, then rock-chop until very fine — almost a paste. Alternatively, use a mortar and pestle for a paste that disperses more evenly in marinades.' },
                    ]}
                    tip="Lemongrass that is not properly prepared contributes very little flavor. The aromatic oils are locked inside the fibrous cells — smashing (for broths) or fine mincing (for marinades) is what releases them."
                    commonMistake="Using the green tops (tough, flavorless, woody) instead of the pale inner stalk. The green tops can be used for broth but add very little."
                />

                <CutCard
                    ingredient="Ginger"
                    nameVi="Gừng"
                    color="#D97706"
                    usedAs={['Sliced for broths', 'Julienned for stir-fries', 'Grated for sauces and dipping sauces']}
                    steps={[
                        { label: 'Peeling', instruction: 'Use the edge of a spoon to scrape the skin off — the irregular shape makes a peeler wasteful. The spoon follows the contours and wastes almost no flesh. An alternative: leave the skin on for broths (it is food-safe and adds flavor).' },
                        { label: 'Slicing for broth', instruction: 'Cut against the grain into 3-4mm coins. For phở: char the cut side directly over a gas flame or under the broiler until blackened before adding to the broth. The char is the flavor, not a mistake.' },
                        { label: 'Julienne for stir-fries', instruction: 'Slice into 3mm coins. Stack several coins and cut into 3mm strips. These go directly into hot oil and cook in seconds. Ginger this size adds heat and fragrance without overwhelming.' },
                        { label: 'Grating', instruction: 'Freeze the ginger for 20 minutes first — frozen ginger grates cleaner, with less fiber. Use the fine side of a box grater or a ceramic ginger grater.' },
                    ]}
                    tip="Cold or frozen ginger is significantly easier to handle. Grate frozen ginger directly into sauces — the ice crystals that come with it add a tiny amount of water, which is inconsequential."
                    commonMistake="Cutting with the grain (along the fibers) produces stringy, tough pieces. Always cut across the grain — the slices should look like small coins, not long strips."
                />

                <CutCard
                    ingredient="Shallots"
                    nameVi="Hành Tím"
                    color="#7C3AED"
                    usedAs={['Thinly sliced for fried shallots', 'Minced for sauces and marinades', 'Halved and charred for broths']}
                    steps={[
                        { label: 'For fried shallots', instruction: 'Cut off the root end only — leave the top intact. Halve lengthwise through the root. Place cut-side down. Slice from root to tip as thinly as possible — 1-2mm rings. The root holds the layers together as you slice. Uniform thickness is critical for even frying.' },
                        { label: 'Minced', instruction: 'Halve lengthwise. Make horizontal cuts toward (but not through) the root. Make vertical lengthwise cuts. Slice across. The root holds everything together until the final cross-cuts. Mince until fine.' },
                        { label: 'For broth (charred)', instruction: 'Halve through the equator (not through the root). Place cut-side directly over gas flame with tongs until black and blistered — about 4-5 minutes. The char gives phở and bún bò Huế its characteristic smoky sweetness.' },
                    ]}
                    tip="Chilling shallots (and onions) in the refrigerator for 30 minutes before cutting significantly reduces the tear-inducing compounds released. Cut under good ventilation."
                    commonMistake="Cutting fried shallot rings too thick (they cook unevenly) or too thin (they burn before the inside cooks). 1-2mm is the target."
                />

                <SectionDivider />
                <SectionHeader>Proteins: Raw Beef for Phở, Pork Belly, Chicken</SectionHeader>

                <Section>
                    Vietnamese cooking demands specific protein cuts that Western recipes rarely specify. The paper-thin beef for phở, the 1cm pork belly slices for thịt kho, the fine mince for chả giò filling — each requires a different approach.
                </Section>

                <CutCard
                    ingredient="Raw Beef (for Phở Tái)"
                    nameVi="Thịt Bò Tái"
                    color="#DC2626"
                    usedAs={['Paper-thin slices placed raw in phở bowl, cooked by boiling broth']}
                    steps={[
                        { label: 'Freeze first', instruction: 'Place the beef (eye of round or sirloin) in the freezer for 20-30 minutes until firm but not frozen solid. Semi-frozen meat slices cleanly without slipping. Fully thawed beef compresses under the blade and tears.' },
                        { label: 'Slice against the grain', instruction: 'Identify the direction of the muscle fibers (they run lengthwise in most cuts). Slice perpendicular to them — across the grain. Each slice should be 1-2mm — literally translucent when held up to light. If you cannot see through the slice, it is too thick.' },
                        { label: 'Check the knife', instruction: 'A dull knife drags and tears instead of slicing. If the beef shreds rather than cuts cleanly, the knife needs sharpening. This is not a technique problem — it is a tool problem.' },
                    ]}
                    tip="The beef cooks entirely from the heat of the boiling broth poured over it. If the slices are too thick, the outside is overcooked before the inside is done. 1-2mm is not approximate — it is the actual target."
                    commonMistake="Slicing with the grain, which produces tough, chewy pieces that do not cook evenly in the bowl. Against-the-grain slices are tender and cook in seconds."
                />

                <CutCard
                    ingredient="Pork Belly"
                    nameVi="Thịt Ba Chỉ"
                    color="#D97706"
                    usedAs={['Thick slices for thịt kho', 'Thin slices for bún chả and stir-fries', 'Fine dice for spring roll filling']}
                    steps={[
                        { label: 'Thick slices for braising', instruction: 'Skin on or off depending on recipe. Slice across the pork belly into 1-1.5cm pieces — thick enough to hold their shape through long braising (thịt kho takes 1.5+ hours). Cut through skin, fat, and meat in one clean motion.' },
                        { label: 'Thin slices for grilling', instruction: 'Semi-freeze (15 minutes) for easier slicing. Slice across into 3-4mm pieces. These will be marinated and grilled or pan-fried over high heat — thin enough to cook through quickly without drying out.' },
                        { label: 'For filling (mince)', instruction: 'Cut into rough cubes, then rock-chop until finely minced. Vietnamese chả giò and bánh bao fillings use hand-minced pork, which has better texture than machine-ground (not as fine, slightly chunkier — this is correct).' },
                    ]}
                    tip="Partially frozen pork belly is dramatically easier to cut than room-temperature. 20 minutes in the freezer before any pork prep is always worth doing."
                    commonMistake="Cutting braising pieces too thin — they fall apart during the long cook time. 1cm minimum for any braised dish."
                />

                <SectionDivider />
                <SectionHeader>Vegetables: Daikon, Cucumber, Banana Blossom</SectionHeader>

                <CutCard
                    ingredient="Daikon (for Đồ Chua)"
                    nameVi="Củ Cải Trắng"
                    color="#0369A1"
                    usedAs={['Julienne for bánh mì pickles', 'Rounds for broth', 'Shredded for salads']}
                    steps={[
                        { label: 'Julienne for đồ chua', instruction: 'Peel the daikon. Cut into 8cm sections. Slice each section lengthwise into 2-3mm planks. Stack 3-4 planks and cut lengthwise into 2-3mm matchsticks. The goal: uniform matchsticks that pickle evenly and fit cleanly into a bánh mì without sticking out awkwardly.' },
                        { label: 'Salt before pickling', instruction: 'After julienning: toss with 1 tsp salt and let sit 10 minutes. The salt draws out excess moisture that would otherwise dilute the pickling liquid. Squeeze gently, rinse briefly, then proceed with the pickle.' },
                    ]}
                    tip="Consistent size matters for pickling — uniform pieces pickle at the same rate and have the same crunch. Uneven pieces produce some over-pickled and some under-pickled."
                    commonMistake="Skipping the salting step. Unsalted daikon releases water into the pickle brine, diluting the acidity and producing a flat-tasting result."
                />

                <CutCard
                    ingredient="Fresh Herbs (Chiffonade)"
                    nameVi="Rau Thơm"
                    color="#166534"
                    usedAs={['Fine shreds for garnish and salads', 'Rough torn for herb plates']}
                    steps={[
                        { label: 'Stack and roll', instruction: 'Stack 5-6 leaves of the same herb on top of each other. Roll them tightly into a cylinder from one side to the other. Hold the cylinder firmly and slice across into 1-3mm shreds with a sharp knife in a single clean motion — do not saw.' },
                        { label: 'For herb plates', instruction: 'Vietnamese herb plates use whole or roughly torn leaves — not chiffonade. Tear large leaves (perilla, lettuce) into 2-3 pieces. Leave small leaves (mint, cilantro, Thai basil) whole. The texture of torn herbs is better for wrapping around spring rolls than fine shreds.' },
                    ]}
                    tip="A dull knife bruises herbs. The black edges on cut herbs are oxidation from cell damage — a sharp knife cuts cleanly with minimal oxidation. If herbs turn black within minutes of cutting, the knife is not sharp enough."
                    commonMistake="Cutting herbs too far in advance. Cut just before serving — herbs oxidize and wilt within 30 minutes. The herb plate should be assembled at the last moment."
                />

                <SectionDivider />
                <SectionHeader>One Tool Worth Having: The Mandoline (Used Safely)</SectionHeader>

                <Section>
                    A mandoline slicer produces uniformly thin slices faster than any knife technique, and it is useful for certain Vietnamese prep tasks — very thin cucumber for bánh mì, uniform daikon for pickles, paper-thin green papaya for gỏi đu đủ. The problem is that mandolines are responsible for a disproportionate number of serious kitchen injuries. The blade is fixed, extremely sharp, and not forgiving.
                </Section>

                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '24px 0', background: '#FFF5F5', border: '1px solid rgba(220,38,38,0.15)', borderRadius: '4px', padding: '20px', borderLeft: '4px solid #DC2626' }}>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', color: '#DC2626', marginBottom: '12px' }}>MANDOLINE SAFETY — NON-NEGOTIABLE</p>
                    {[
                        'Always use the hand guard that came with the mandoline. Without it, one slip removes fingertips.',
                        'When the ingredient gets too small to grip safely, stop. Use a knife for the last 3-4cm.',
                        'Never use a mandoline when tired or distracted.',
                        'Cut-resistant gloves (level 5 protection) are a worthwhile investment — they allow more confident, safer use.',
                        'The mandoline is faster than a knife for large quantities. For small amounts, the knife is safer and nearly as fast.',
                    ].map((rule, i) => (
                        <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '8px' }}>
                            <span style={{ color: '#DC2626', fontWeight: 700, flexShrink: 0 }}>•</span>
                            <p style={{ fontFamily: 'Georgia, serif', fontSize: '13px', color: '#4B2E1A', margin: 0, lineHeight: 1.6 }}>{rule}</p>
                        </div>
                    ))}
                </motion.div>

                <SectionDivider />

                <Section>
                    Knife skills improve only through repetition. The first time you julienne daikon, it takes fifteen minutes and the pieces are uneven. The tenth time, it takes four minutes and the pieces are uniform. The fiftieth time, you do it without thinking while having a conversation. There is no shortcut to this — only practice. The techniques in this guide give you the correct method to practice. The speed comes on its own.
                </Section>

                {/* CTA */}
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '48px 0', padding: '28px', background: '#FEF3E2', borderLeft: '4px solid #D97706', borderRadius: '0 8px 8px 0' }}>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', color: '#D97706', textTransform: 'uppercase', marginBottom: '16px' }}>PRACTICE WITH THESE RECIPES</p>
                    {[
                        { title: 'Phở Bò — Paper-thin beef practice', slug: '/recipes/pho-bo-ha-noi' },
                        { title: 'Bánh Mì — Julienne daikon and carrot', slug: '/recipes/banh-mi' },
                        { title: 'Bún Chả — Lemongrass marinade prep', slug: '/recipes/bun-cha-hanoi' },
                        { title: 'How to Set Up a Vietnamese Kitchen', slug: '/how-to/vietnamese-kitchen-setup' },
                    ].map((r) => (
                        <Link key={r.slug} href={r.slug}
                            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid rgba(75,46,26,0.1)', textDecoration: 'none' }}>
                            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.95rem', color: '#2D1A0E', fontWeight: 600 }}>{r.title}</span>
                            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#D97706', fontWeight: 600, flexShrink: 0, marginLeft: '12px' }}>Go →</span>
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

// ── Sub-components ──────────────────────────────────────────────────────────

function CutCard({ ingredient, nameVi, color, usedAs, steps, tip, commonMistake }: {
    ingredient: string; nameVi: string; color: string;
    usedAs: string[]; steps: { label: string; instruction: string }[];
    tip: string; commonMistake: string;
}) {
    return (
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.55 }}
            style={{ margin: '28px 0', background: '#fff', border: '1px solid rgba(75,46,26,0.08)', borderRadius: '4px', overflow: 'hidden', borderLeft: `4px solid ${color}` }}>
            <div style={{ padding: '14px 20px', background: '#FDFAF7', borderBottom: '1px solid rgba(75,46,26,0.07)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                <div>
                    <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', fontWeight: 700, color: '#2D1A0E', margin: '0 0 2px' }}>{ingredient}</h3>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: color, fontWeight: 600, fontStyle: 'italic' }}>{nameVi}</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {usedAs.map((use, i) => (
                        <span key={i} style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 600, color: color, background: `${color}12`, padding: '3px 8px', borderRadius: '100px' }}>{use}</span>
                    ))}
                </div>
            </div>
            <div style={{ padding: '16px 20px' }}>
                {steps.map((step, i) => (
                    <div key={i} style={{ marginBottom: '14px' }}>
                        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, color: color, letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '6px' }}>{step.label}</p>
                        <p style={{ fontFamily: 'Georgia, serif', fontSize: '13.5px', lineHeight: 1.7, color: '#4B2E1A', margin: 0 }}>{step.instruction}</p>
                    </div>
                ))}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '4px' }}>
                    <div style={{ background: '#FFFBF0', padding: '10px 12px', borderRadius: '4px', borderLeft: `3px solid ${color}` }}>
                        <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '9px', fontWeight: 700, color: color, letterSpacing: '1px', marginBottom: '5px' }}>KEY INSIGHT</div>
                        <p style={{ fontFamily: 'Georgia, serif', fontSize: '12px', lineHeight: 1.55, color: '#6B5544', margin: 0, fontStyle: 'italic' }}>{tip}</p>
                    </div>
                    <div style={{ background: '#FFF5F5', padding: '10px 12px', borderRadius: '4px', borderLeft: '3px solid #DC2626' }}>
                        <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '9px', fontWeight: 700, color: '#DC2626', letterSpacing: '1px', marginBottom: '5px' }}>COMMON MISTAKE</div>
                        <p style={{ fontFamily: 'Georgia, serif', fontSize: '12px', lineHeight: 1.55, color: '#6B5544', margin: 0 }}>{commonMistake}</p>
                    </div>
                </div>
            </div>
        </motion.div>
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