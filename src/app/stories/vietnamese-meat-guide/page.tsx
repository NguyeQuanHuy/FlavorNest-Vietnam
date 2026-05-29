'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

export default function VietnameseMeatGuidePage() {
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
                    backgroundImage: 'url(/images/recipes/thit-nuong.jpg)',
                    backgroundSize: 'cover', backgroundPosition: 'center', scale: heroScale
                }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(45,26,14,0.4) 0%, rgba(45,26,14,0.2) 35%, rgba(45,26,14,0.95) 100%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 24px 80px' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#D97706' }} />
                                <span style={{ color: '#D97706', fontSize: '12px', letterSpacing: '2px', fontWeight: 700, fontFamily: 'DM Sans, sans-serif' }}>
                                    MEAT GUIDE · VIETNAMESE PROTEINS · COMPLETE REFERENCE
                                </span>
                            </div>
                            <h1 style={{ fontFamily: 'Playfair Display, serif', color: '#FFF', fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '24px', maxWidth: '900px' }}>
                                The Vietnamese Meat Guide: Every Cut, Every Cooking Method, Every Dish
                            </h1>
                            <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', maxWidth: '720px', lineHeight: 1.5, marginBottom: '32px' }}>
                                Vietnamese cooking uses every part of every animal — and has a specific reason for each choice. This is not accident. It is one of the most thoughtful meat cultures in the world.
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
            <div style={{ maxWidth: '720px', margin: '0 auto', padding: '80px 24px 40px', fontFamily: 'Georgia, "Iowan Old Style", serif', color: '#2D1A0E' }}>

                <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                    style={{ fontSize: '1.45rem', lineHeight: 1.65, fontStyle: 'italic', color: '#4B2E1A', marginBottom: '48px', paddingLeft: '24px', borderLeft: '3px solid #D97706' }}>
                    In a Vietnamese kitchen, nothing is wasted. The bones make broth. The fat makes scallion oil. The offal becomes filling. The skin becomes crackle. Each cut of each animal has accumulated, over centuries of cooking, a specific set of applications that suit it perfectly. Understanding this is understanding Vietnamese food at its foundation.
                </motion.p>

                <Section>
                    <DropCap>V</DropCap>ietnamese cuisine is primarily a pork culture. Not exclusively — beef, chicken, duck, seafood, and freshwater fish all play essential roles — but pork is the animal that appears in more dishes, more preparations, and more combinations than any other protein. This reflects both agricultural history (pigs are efficient converters of food scraps) and culinary preference developed over millennia. The Vietnamese approach to pork is comprehensive: no cut is considered lesser, no preparation is considered too humble.
                </Section>

                <SectionDivider />

                {/* PORK */}
                <MeatSection
                    animal="Pork"
                    animalVi="Thịt Heo"
                    color="#D97706"
                    tagline="The foundation protein of Vietnamese cuisine — used in more dishes than any other meat"
                    intro="Pork appears in Vietnamese cooking from breakfast to dinner, from street food to celebration banquets. The Vietnamese approach to pork is total: belly, shoulder, leg, ribs, liver, blood, skin, and feet each have specific applications where they perform better than any other cut."
                    cuts={[
                        {
                            cut: 'Pork Belly (Ba Chỉ / Thịt Ba Rọi)',
                            color: '#D97706',
                            flavor: 'Rich, fatty, deeply savory — the most versatile pork cut',
                            bestFor: 'Thịt kho hột vịt (caramel braise), bún chả (grilled), bánh mì filling, bún thịt nướng',
                            why: 'The 3-layer structure — skin, fat, meat — produces different textures when cooked. Braised: the fat melts into the meat, the skin becomes gelatinous. Grilled: the fat renders and caramelizes. The belly handles both methods better than any other cut.',
                            buying: 'Skin-on for braised dishes — the skin adds body and richness. Skinless acceptable for grilling. Equal fat-to-meat ratio is ideal.',
                            cookingTip: 'For thịt kho: cut 2cm thick. For bún chả: slice 4mm thin. Semi-freeze before slicing thin for cleaner cuts.',
                        },
                        {
                            cut: 'Pork Shoulder (Thịt Vai)',
                            color: '#B45309',
                            flavor: 'Lean with good marbling — holds together through long cooking',
                            bestFor: 'Roast pork (thịt quay), filling for chả giò, bánh bao, slow braises',
                            why: 'Shoulder has enough fat to stay moist through roasting or long cooking but not so much that it becomes greasy. The grain structure makes it good for pulling and shredding.',
                            buying: 'Bone-in has more flavor. Boneless is easier to slice. Ask your butcher to tie it for even roasting.',
                            cookingTip: 'For thịt quay: score the skin deeply to allow fat to render. Rub with vinegar before roasting to help the skin crackle.',
                        },
                        {
                            cut: 'Pork Ribs (Sườn Heo)',
                            color: '#D97706',
                            flavor: 'Sweet bone marrow, meaty, responds beautifully to caramelization',
                            bestFor: 'Cơm tấm sườn nướng (grilled rib over broken rice), canh sườn chua ngọt, spare rib braises',
                            why: 'Vietnamese grilled pork ribs are marinated overnight in fish sauce, sugar, lemongrass, and garlic, then grilled until charred at the edges. The bone concentrates flavor during cooking and makes eating them an active, satisfying experience.',
                            buying: 'St. Louis-style cut (trimmed) or baby back. Avoid pre-marinated ribs — you want to apply the Vietnamese marinade.',
                            cookingTip: 'Marinate overnight minimum. Grill on high heat and do not move them constantly — let them char on each side for full flavor development.',
                        },
                        {
                            cut: 'Pork Mince / Ground Pork (Thịt Heo Xay)',
                            color: '#92400E',
                            flavor: 'Neutral canvas — absorbs marinades and sauces completely',
                            bestFor: 'Chả giò filling, bánh bao filling, some canh, nem (Vietnamese spring rolls), stuffed bitter melon',
                            why: 'Vietnamese cooks often hand-mince pork rather than using machine-ground meat — the texture is coarser and chunkier, which works better in fillings. The fat percentage matters: too lean and fillings are dry.',
                            buying: '70/30 lean-to-fat ratio preferred for fillings. Ask for coursely ground if available.',
                            cookingTip: 'For chả giò filling: mix with soaked glass noodles, wood ear mushroom, carrot, egg. Season with fish sauce and pepper. The noodles absorb moisture and prevent the filling from becoming dry during frying.',
                        },
                        {
                            cut: 'Vietnamese Pork Roll (Chả Lụa / Giò Lụa)',
                            color: '#166534',
                            flavor: 'Smooth, mild, slightly springy — the texture is the point',
                            bestFor: 'Bánh mì filling (essential), phở topping, bún bò Huế, xôi topping',
                            why: 'Chả lụa is made by processing lean pork with fish sauce into a paste, wrapping tightly in banana leaf, and steaming. The result is firm, smooth, mild, and completely unlike any Western sausage or cold cut. It is not a flavor vehicle — it is a texture element.',
                            buying: 'Vietnamese delis and Asian grocery stores. Vacuum-packed versions available but fresh from a Vietnamese deli is significantly better.',
                            cookingTip: 'Slice thin (3-4mm) for bánh mì. Slice thicker (7-8mm) for phở and bún. Do not cook — it is eaten cold or at room temperature.',
                        },
                    ]}
                />

                <SectionDivider />

                {/* BEEF */}
                <MeatSection
                    animal="Beef"
                    animalVi="Thịt Bò"
                    color="#DC2626"
                    tagline="The prestige protein — used less than pork but with extraordinary precision"
                    intro="Beef arrived in Vietnamese cooking later than pork, partly because cattle were working animals in the agricultural economy and slaughtering them was economically costly. This history shaped how beef is used: sparingly, respectfully, and with specific cuts applied to specific preparations with a precision that reflects the ingredient's value."
                    cuts={[
                        {
                            cut: 'Eye of Round / Beef Topside (Thịt Thăn Bò)',
                            color: '#DC2626',
                            flavor: 'Lean, mild, clean — the blank canvas for phở',
                            bestFor: 'Phở tái (raw beef in phở) — sliced paper-thin',
                            why: 'Lean beef sliced against the grain and paper-thin cooks completely in the 3-4 seconds it takes boiling broth to hit the bowl. The mild flavor does not compete with the complex broth. Any fat in the beef would congeal in the soup.',
                            buying: 'Ask specifically for eye of round or topside. Semi-freeze 20 minutes before slicing. Slice 1-2mm — genuinely translucent.',
                            cookingTip: 'Fan the raw slices over the cooked noodles, then pour boiling broth over them. They cook in the bowl. Never pre-cook them.',
                        },
                        {
                            cut: 'Beef Brisket (Gầu Bò)',
                            color: '#B91C1C',
                            flavor: 'Rich, gelatinous, deeply savory — long cooking transforms it',
                            bestFor: 'Phở bò (cooked brisket topping), bún bò Huế (slow-cooked chunks)',
                            why: 'Brisket has high collagen content that converts to gelatin during long cooking, giving the meat a soft, slightly sticky texture that is prized in Vietnamese beef dishes. A well-braised brisket should yield when pressed but hold its shape when sliced.',
                            buying: 'Point cut (higher fat) or flat cut (leaner). Point cut produces more flavor and better texture for Vietnamese braises.',
                            cookingTip: 'For phở brisket: simmer in the broth for 2-3 hours until tender. Remove, cool, slice cold for cleaner cuts. Reheat in broth before serving.',
                        },
                        {
                            cut: 'Beef Tendon (Gân Bò)',
                            color: '#D97706',
                            flavor: 'Almost no flavor alone — pure gelatinous texture',
                            bestFor: 'Phở bò (tendon topping) — for those who want textural contrast',
                            why: 'Beef tendon in phở is not about flavor — it is about texture. Properly cooked (minimum 3 hours), it becomes translucent, gelatinous, and yielding. It is eaten for the sensation of it, alongside the tender brisket and delicate raw beef.',
                            buying: 'Asian grocery stores. Requires minimum 3-hour simmer in broth before it is tender enough to eat.',
                            cookingTip: 'Add to the broth at the same time as the bones. After 3+ hours, it should yield completely when pressed. Cool and slice cold.',
                        },
                        {
                            cut: 'Beef Shank (Bắp Bò)',
                            color: '#DC2626',
                            flavor: 'Deeply beefy, meaty, with beautiful cross-section of meat and connective tissue',
                            bestFor: 'Bún bò Huế (bone-in shank chunks), some braised dishes',
                            why: 'The bone marrow inside the shank adds richness to any broth it cooks in. The meat itself is dense and meaty. In bún bò Huế, shank is cut into thick rounds with the bone in — the presentation is as important as the flavor.',
                            buying: 'Ask your butcher for cross-cut shank sections (osso buco style). 5-7cm thick sections.',
                            cookingTip: 'The marrow will begin to release into the broth after 1 hour of simmering. This adds depth that no other cut can provide.',
                        },
                    ]}
                />

                <SectionDivider />

                {/* CHICKEN */}
                <MeatSection
                    animal="Chicken"
                    animalVi="Thịt Gà"
                    color="#166534"
                    tagline="The everyday protein — simpler than pork, more delicate than beef"
                    intro="Vietnamese chicken cooking tends toward simplicity — the bird's clean flavor is an asset to be preserved rather than a canvas to be overwhelmed. This is why the most respected Vietnamese chicken dishes are often the most straightforward: a clear broth, a clean marinade, a precise grill."
                    cuts={[
                        {
                            cut: 'Whole Chicken (Gà Nguyên Con)',
                            color: '#166534',
                            flavor: 'Clean, mild, sweet when fresh — Vietnamese free-range chickens are notably more flavorful than supermarket birds',
                            bestFor: 'Phở gà (poached whole, then served as topping), gà luộc (plain poached chicken — a Tết staple)',
                            why: 'Poaching a whole chicken in gently simmering water produces the clearest, sweetest broth and the most evenly cooked meat. The Vietnamese technique of cold-water starting and gradual heating prevents protein coagulation that would cloud the broth.',
                            buying: 'Free-range or yellow chicken (gà ta) preferred — substantially more flavor than standard. Asian grocery stores often stock these.',
                            cookingTip: 'Start in cold water, bring slowly to a gentle simmer, never boil. When cooked, plunge into ice water to stop cooking and tighten the skin — this produces the smooth, firm texture prized in gà luộc.',
                        },
                        {
                            cut: 'Chicken Thigh (Đùi Gà)',
                            color: '#D97706',
                            flavor: 'More fat and collagen than breast — deeper flavor, more forgiving to cook',
                            bestFor: 'Grilled chicken (gà nướng), braised chicken (gà kho gừng), stir-fries',
                            why: 'Thigh meat stays moist through the high-heat grilling required for proper caramelization of Vietnamese marinades. Breast meat dries out before the exterior chars correctly.',
                            buying: 'Bone-in, skin-on preferred for grilling — the bone conducts heat evenly and the skin protects the meat.',
                            cookingTip: 'Score the thigh 3-4 times before marinating — allows the marinade to penetrate to the bone, which is where the flavor is most needed.',
                        },
                        {
                            cut: 'Chicken Breast (Ức Gà)',
                            color: '#0369A1',
                            flavor: 'Mild, lean, clean — works best when not overcooked by even one minute',
                            bestFor: 'Phở gà topping (shredded), gỏi gà (chicken salad), stuffed preparations',
                            why: 'For phở, poached chicken breast shredded by hand produces long, tender fibers that absorb broth. For gỏi gà, the clean flavor allows the herbs, lime, and fish sauce to be the flavor.',
                            buying: 'Standard supermarket chicken breast works for these applications. Free-range produces more flavor.',
                            cookingTip: 'For poaching: bring the water to a gentle simmer, add the breast, cover and turn off the heat. Let sit 15 minutes. The residual heat cooks it perfectly without drying it.',
                        },
                    ]}
                />

                <SectionDivider />

                {/* DUCK */}
                <MeatSection
                    animal="Duck"
                    animalVi="Vịt"
                    color="#7C3AED"
                    tagline="The prestige bird — richer than chicken, more complex, used for celebrations"
                    intro="Duck in Vietnam carries associations with celebration and occasion. It is more expensive than chicken, requires more skill to cook well, and has a richness that makes it a special-occasion protein. The Vietnamese approach to duck focuses on managing that richness — through acidic marinades, aromatic herbs, and cooking methods that render the fat correctly."
                    cuts={[
                        {
                            cut: 'Whole Duck (Vịt Nguyên Con)',
                            color: '#7C3AED',
                            flavor: 'Rich, gamey, deeply flavored — needs balancing aromatics',
                            bestFor: 'Vịt quay (Peking-style roast duck), vịt nấu chao (duck braised with fermented bean curd)',
                            why: 'Duck fat is extraordinarily flavorful when rendered correctly. Vietnamese roasted duck uses a sweet marinade that caramelizes on the skin while the fat renders through it, producing crackling skin and moist meat.',
                            buying: 'Fresh or frozen whole duck. Pekin (Long Island) duck most widely available.',
                            cookingTip: 'The secret Gordon Ramsay could not steal: a sweet-sour lacquer applied in multiple thin layers and dried between coats. Each layer builds depth of flavor and color.',
                        },
                        {
                            cut: 'Duck with Ginger (Vịt Nấu Gừng)',
                            color: '#D97706',
                            flavor: 'The ginger cuts the gaminess and replaces it with warmth',
                            bestFor: 'Vịt nấu gừng — duck braised with ginger, galangal, lemongrass, and turmeric',
                            why: 'Fresh ginger is the natural pairing for duck in Vietnamese cooking — it neutralizes the gamey notes while adding heat and complexity. The combination of ginger, galangal, and lemongrass is the Vietnamese solution to duck\'s intensity.',
                            buying: 'Duck legs or thighs preferred for braising — more fat and collagen than breast.',
                            cookingTip: 'Use young ginger (pale skin, milder heat) if available. Use 3x more ginger than you think you need. The ginger is not background — it is structural.',
                        },
                    ]}
                />

                <SectionDivider />
                <SectionHeader>Regional Differences: Which Regions Use Which Meats</SectionHeader>

                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '24px 0', background: '#fff', border: '1px solid rgba(75,46,26,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ padding: '12px 20px', background: '#2D1A0E' }}>
                        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '2px', color: '#D97706', textTransform: 'uppercase' }}>MEAT BY REGION</span>
                    </div>
                    {[
                        { region: 'Northern (Hanoi)', color: '#0369A1', meats: 'Pork dominant. Beef used sparingly and precisely — only in phở (tái, chín, gầu). Dog meat historically present but rare. River fish (cá chép, cá trôi) important.', signature: 'Phở bò, bún chả, chả giò' },
                        { region: 'Central (Huế)', color: '#D97706', meats: 'Pork heavily processed — chả Huế, nem Huế. Beef prominent in bún bò Huế (shank, oxtail). Shrimp paste used with virtually all proteins. Wild game (venison, boar) historically present.', signature: 'Bún bò Huế, bánh canh giò heo, nem lụi' },
                        { region: 'Southern (HCMC)', color: '#166534', meats: 'More varied than north — pork, chicken, duck, and freshwater seafood all prominent. Chinese-influenced char siu pork (xá xíu). Beef offal (bò kho) — Cambodian influence. Coconut used with most proteins.', signature: 'Cơm tấm sườn, hủ tiếu, thịt kho hột vịt' },
                        { region: 'Mekong Delta', color: '#7C3AED', meats: 'Freshwater fish dominates (cá lóc, cá tra, cá kèo). Snake, frog, and field rat historically eaten. Pork secondary. Coconut braising liquid used for most meats.', signature: 'Cá kho tộ, lẩu mắm, cháo lươn' },
                        { region: 'Northwest Mountains', color: '#DC2626', meats: 'Buffalo (trâu) common — dried, smoked, grilled. Wild boar. Mountain goat. Black pork (heo đen) from minority-raised pigs — smaller, more flavorful. Free-range chicken far superior to lowland birds.', signature: 'Thắng cố, thịt trâu khô, lợn cắp nách' },
                    ].map((row, i) => (
                        <div key={i} style={{ padding: '16px 20px', borderBottom: i < 4 ? '1px solid rgba(75,46,26,0.07)' : 'none', borderLeft: `4px solid ${row.color}` }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '6px', marginBottom: '6px' }}>
                                <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '14px', fontWeight: 700, color: '#2D1A0E' }}>{row.region}</span>
                                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 600, color: row.color, background: `${row.color}12`, padding: '2px 8px', borderRadius: '100px' }}>{row.signature}</span>
                            </div>
                            <p style={{ fontFamily: 'Georgia, serif', fontSize: '13px', color: '#6B5544', lineHeight: 1.65, margin: 0 }}>{row.meats}</p>
                        </div>
                    ))}
                </motion.div>

                <SectionDivider />
                <SectionHeader>The Rule of Nothing Wasted</SectionHeader>

                <Section>
                    The Vietnamese whole-animal approach is not a trend or a philosophical position — it is a practical tradition developed under conditions of scarcity and refined into something extraordinary over centuries. Pork blood becomes tiết canh (raw blood pudding) or dồi (blood sausage). Pig's ears become a salad ingredient — thinly sliced, cold, with vinegar and herbs. Pork skin becomes crackle for cơm tấm. Intestines are cleaned and grilled. Liver is ground into pâté for bánh mì. Nothing is wasted because nothing was ever considered waste in the first place.
                </Section>

                <Section>
                    This approach produces dishes of extraordinary flavor that exist nowhere else in the world, built from parts of the animal that other cuisines discard or ignore. The trotter braised in coconut water. The oxtail in bún bò Huế. The tendon in phở. Each of these appears in Vietnamese cooking not as an adventurous choice but as the obvious, correct use of an ingredient that has been understood for generations.
                </Section>

                <PullQuote>
                    "Nothing was ever considered waste in the first place."
                </PullQuote>

                <SectionDivider />

                {/* Recipe links */}
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '48px 0', padding: '28px', background: '#FEF3E2', borderLeft: '4px solid #D97706', borderRadius: '0 8px 8px 0' }}>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', color: '#D97706', textTransform: 'uppercase', marginBottom: '16px' }}>COOK THE BEST OF EACH MEAT</p>
                    {[
                        { title: 'Thịt Kho Hột Vịt — Pork Belly at Its Best', slug: '/recipes/thit-kho-hot-vit' },
                        { title: 'Phở Bò Hà Nội — Beef Done Right', slug: '/recipes/pho-bo-ha-noi' },
                        { title: 'Bún Chả Hà Nội — Grilled Pork Over Charcoal', slug: '/recipes/bun-cha-hanoi' },
                        { title: 'Mì Quảng — Shrimp and Pork Together', slug: '/recipes/mi-quang' },
                    ].map((r) => (
                        <Link key={r.slug} href={r.slug}
                            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid rgba(75,46,26,0.1)', textDecoration: 'none' }}>
                            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.95rem', color: '#2D1A0E', fontWeight: 600 }}>{r.title}</span>
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

// ── Sub-components ──────────────────────────────────────────────────────────

function MeatSection({ animal, animalVi, color, tagline, intro, cuts }: {
    animal: string; animalVi: string; color: string; tagline: string; intro: string;
    cuts: { cut: string; color: string; flavor: string; bestFor: string; why: string; buying: string; cookingTip: string }[];
}) {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                <div style={{ width: '6px', height: '48px', background: color, borderRadius: '3px', flexShrink: 0 }} />
                <div>
                    <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#2D1A0E', margin: '0 0 4px' }}>{animal}</h2>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 600, color, fontStyle: 'italic' }}>{animalVi} · {tagline}</span>
                </div>
            </div>
            <motion.p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#4B2E1A', marginBottom: '24px' }}>{intro}</motion.p>
            {cuts.map((cut, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-30px' }} transition={{ duration: 0.45, delay: i * 0.05 }}
                    style={{ margin: '16px 0', background: '#fff', border: '1px solid rgba(75,46,26,0.08)', borderRadius: '4px', overflow: 'hidden', borderLeft: `4px solid ${cut.color}` }}>
                    <div style={{ padding: '12px 20px', background: '#FDFAF7', borderBottom: '1px solid rgba(75,46,26,0.07)' }}>
                        <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', fontWeight: 700, color: '#2D1A0E', margin: '0 0 4px' }}>{cut.cut}</h3>
                        <span style={{ fontFamily: 'Georgia, serif', fontSize: '12px', color: '#6B5544', fontStyle: 'italic' }}>{cut.flavor}</span>
                    </div>
                    <div style={{ padding: '14px 20px' }}>
                        <div style={{ marginBottom: '10px' }}>
                            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 700, color: cut.color, letterSpacing: '1px', textTransform: 'uppercase' }}>BEST FOR: </span>
                            <span style={{ fontFamily: 'Georgia, serif', fontSize: '13px', color: '#4B2E1A' }}>{cut.bestFor}</span>
                        </div>
                        <p style={{ fontFamily: 'Georgia, serif', fontSize: '13px', lineHeight: 1.7, color: '#4B2E1A', marginBottom: '12px' }}>{cut.why}</p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                            <div style={{ background: '#FDFAF7', padding: '10px 12px', borderRadius: '4px' }}>
                                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '9px', fontWeight: 700, color: '#D97706', letterSpacing: '1px', marginBottom: '4px' }}>BUYING</div>
                                <p style={{ fontFamily: 'Georgia, serif', fontSize: '12px', color: '#6B5544', margin: 0, lineHeight: 1.5 }}>{cut.buying}</p>
                            </div>
                            <div style={{ background: '#F0FFF4', padding: '10px 12px', borderRadius: '4px', borderLeft: '3px solid #166534' }}>
                                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '9px', fontWeight: 700, color: '#166534', letterSpacing: '1px', marginBottom: '4px' }}>COOKING TIP</div>
                                <p style={{ fontFamily: 'Georgia, serif', fontSize: '12px', color: '#6B5544', margin: 0, lineHeight: 1.5 }}>{cut.cookingTip}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
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

function PullQuote({ children }: { children: React.ReactNode }) {
    return (
        <motion.blockquote initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            style={{ margin: '48px 0', padding: '24px 0', borderTop: '2px solid #D97706', borderBottom: '2px solid #D97706', fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', lineHeight: 1.4, color: '#4B2E1A', textAlign: 'center' }}>
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
