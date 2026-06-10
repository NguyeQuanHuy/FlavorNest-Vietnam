'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const SECTIONS = [
    {
        step: 1,
        title: 'What the Phin Is and Why Vietnamese Coffee Tastes the Way It Does',
        content: `The phin — the small, individual-serve Vietnamese drip filter — is one of the simplest coffee brewing devices ever made. It is a four-piece metal cylinder: a perforated base plate that sits on top of a cup, a brewing chamber that holds the grounds, a gravity press plate that sits inside the chamber on top of the grounds, and a lid that keeps the brew warm during the slow drip. No moving parts, no electricity, no paper filters, no pressure. Just gravity, hot water, and time.\n\nThe result is coffee that is unlike what any other method produces from the same beans: thick, intensely concentrated, with a slightly syrupy body and a sweetness that develops from the slow extraction rather than being added to it. Vietnamese robusta beans — which are higher in caffeine, lower in acidity, and more intensely flavoured than the arabica beans used in most Western coffee cultures — are specifically suited to phin brewing, which extracts their full character without the bitterness that faster methods produce.\n\nThe phin is designed to make patience mandatory. The brew takes 4–6 minutes and cannot be rushed — water that drips too fast produces weak, under-extracted coffee; water that does not drip at all means the grind is too fine or the press is screwed down too tightly. Learning to read the drip rate and adjust accordingly is the central skill of phin brewing.\n\nThe resulting concentrate is typically served over sweetened condensed milk (ca phe sua) — the combination of intensely bitter coffee and extremely sweet milk is one of the most recognisable flavours in Vietnamese food culture — or over ice for ca phe sua da, the iced version that is Vietnam's most consumed coffee drink.`,
        tip: null,
    },
    {
        step: 2,
        title: 'Choosing the Right Phin',
        content: `Phins are made from stainless steel, aluminium, or occasionally tin-plated steel. Stainless steel is the correct choice for regular use — it does not corrode, does not impart a metallic taste, and cleans easily. Aluminium phins are lighter and cheaper but react with the acids in coffee over time and can produce a faint metallic note in the brew after extended use.\n\nSizes: phins are measured by their coffee capacity in grams, which corresponds roughly to serving size.\n\n4g–6g capacity (small, single cup): the most common size for personal use. Produces approximately 60–80ml of concentrate — correct for a standard Vietnamese ca phe sua or the base for a large ca phe sua da.\n\n8g–10g capacity (medium): for a larger cup or a double-strength brew. Used at Vietnamese coffee shops where the ratio of concentrate to milk requires more coffee to balance a larger glass.\n\n12g+ (large): for serving two people from one phin, or for preparing cold brew concentrate. Less practical for daily use.\n\nFor home use in Germany: buy a 6g stainless steel phin. This size is widely available at Vietnamese grocery stores for €3–8 and produces the correct Vietnamese coffee serving size without waste.\n\nThe press plate (the gravity insert) should move freely within the chamber when unloaded but create a firm, even seal when placed on the grounds. If it wobbles or has noticeable gaps at the edges, the phin will extract unevenly. Test in the store by pressing it into the chamber by hand — it should descend smoothly and feel snug.`,
        tip: 'Buy two phins of the same size. When one is in use, the second is clean and ready. For households that drink coffee daily, the extra 2 minutes required to clean and dry the phin between uses becomes frustrating when only one is available. Two phins eliminate this friction entirely.',
    },
    {
        step: 3,
        title: 'The Coffee — Grind, Beans, and Brands',
        content: `Vietnamese coffee is traditionally made from robusta beans, often roasted with butter, sugar, or — in the traditional Southern Vietnamese style — a small amount of fish sauce or chicory. This roasting process produces the dark, slightly caramelised, intensely fragrant beans that are the basis of authentic Vietnamese ca phe.\n\nFor authentic flavour in Germany: buy Vietnamese ground coffee specifically labelled for phin brewing. The most widely available brands at Vietnamese grocery stores are Trung Nguyen (multiple varieties — G7, Creative, Special) and Highlands Coffee. These are pre-ground to the correct coarseness for phin brewing and produce the characteristic Vietnamese coffee flavour.\n\nTrung Nguyen varieties: Creative 1 is the lightest and most accessible. Creative 3 is the most popular — a balanced blend of robusta and arabica with the characteristic butter-roast note. Creative 5 is the most intense, for those who prefer a very strong brew.\n\nGrind size: Vietnamese phin coffee requires a grind between medium-coarse and coarse — coarser than espresso, finer than French press. The correct grind produces a drip rate of one drop per second. If using pre-ground Vietnamese coffee, the grind is already correct for phin use.\n\nIf grinding your own: use 100% robusta beans if available. Set the grinder to medium-coarse — approximately the texture of coarse sand. Finer than this will clog the phin; coarser will produce watery under-extracted coffee.\n\nCondensed milk: Longevity brand (ông Thọ) or Eagle Brand are the Vietnamese standard. The sweetness level and consistency of these brands is calibrated to balance the intensity of Vietnamese robusta — lighter condensed milks from European brands produce a less balanced result.`,
        tip: 'Store Vietnamese coffee in an airtight container away from light and heat — the butter roasting process that gives it its characteristic flavour also makes the beans more sensitive to oxidation than standard roasts. An opened bag of Trung Nguyen stored in a sealed jar in a dark cupboard keeps well for 3 weeks; left open on the counter, the flavour deteriorates noticeably within a week.',
    },
    {
        step: 4,
        title: 'Brewing — Step by Step',
        content: `For one serving of ca phe sua da (iced coffee with condensed milk):\n\n2 tbsp condensed milk in the bottom of a tall glass\n1 phin (6g capacity)\n12–14g coffee (2 heaped tablespoons)\nHot water at 92–95°C — just off the boil, rested 30 seconds\nIce to fill the glass\n\nStep one — prepare the glass: place 2 tablespoons of condensed milk in the bottom of a tall glass. Set the phin base plate on top of the glass.\n\nStep two — add the coffee: remove the press plate. Add 12–14g of coffee to the phin chamber. Give the phin a gentle shake to level the grounds. Place the press plate on top of the grounds. Do not screw it down — place it gently so it rests on the grounds under its own weight only. The gravity press is the correct setting for most Vietnamese coffee; screwing it down tightly slows the drip too much and produces over-extracted, bitter coffee.\n\nStep three — bloom the grounds: pour approximately 20ml of hot water over the press plate. This wets the grounds completely and releases CO2 — a process called blooming that prevents the CO2 from creating channels in the grounds that would cause uneven extraction. Wait 20–30 seconds. The press plate will settle slightly as the grounds absorb the water.\n\nStep four — fill the chamber: fill the phin chamber with hot water to the rim. Place the lid on top. The drip will begin within 30–60 seconds. The correct drip rate is one drop per second — a steady, slow drip that produces approximately 60–80ml of concentrate in 4–6 minutes.\n\nStep five — serve: when the dripping stops, remove the phin. Stir the condensed milk and coffee concentrate together. Add ice to fill the glass. Drink immediately.`,
        tip: 'Heat the phin chamber with a small amount of hot water before brewing — rinse, discard, then proceed with the bloom. A cold phin drops the water temperature by 3–5°C during brewing, which is enough to affect extraction. Pre-warming takes 15 seconds and ensures the water maintains the correct temperature through the full 5-minute brew.',
    },
    {
        step: 5,
        title: 'Troubleshooting the Drip Rate',
        content: `The drip rate is the primary variable in phin brewing and the most common source of problems. Reading the drip rate accurately and knowing how to adjust it is the central skill of phin use.\n\nDripping too fast (faster than one drop per second, completing in under 3 minutes): the extract will be weak, pale, and under-flavoured. Causes: grind too coarse, press plate not making contact with grounds (too little coffee for the chamber size), or water temperature too low. Solutions: use more coffee to fill the chamber more fully, screw the press plate down a quarter-turn, or ensure the water is at 92–95°C.\n\nDripping too slowly (slower than one drop every 2 seconds, not completing in 10 minutes): the extract will be over-extracted, bitter, and astringent. Causes: grind too fine, press plate screwed down too tightly, or coffee packed too densely. Solutions: unscrew the press plate half a turn, use slightly less coffee, or check that the grind is correct.\n\nNo dripping at all: the phin is clogged. The grind is too fine or the press plate is screwed completely down. Remove the lid, carefully lift the press plate, and check if grounds have compacted completely. If they have, the grind is too fine for phin use. Restart with coarser grounds.\n\nInconsistent dripping — fast then slow: the grounds have channelled — water is finding a path through the grounds rather than percolating evenly. This happens when the grounds are not levelled before placing the press plate. Restart with levelled grounds.\n\nFor pre-ground Vietnamese coffee: inconsistent results almost always trace back to the press plate position. Start with the gravity press (no screwing) and adjust one quarter-turn at a time based on the drip rate you observe.`,
        tip: null,
    },
    {
        step: 6,
        title: 'Cleaning, Storage, and Vietnamese Coffee Variations',
        content: `Cleaning: discard the spent grounds immediately after use — do not let them sit in the phin, as the oils they contain will become rancid and affect the next brew. Rinse all four parts under hot running water. For the perforated base plate and press plate: use a small brush (an old toothbrush is ideal) to clear any grounds from the perforations. Dry completely before storing — wet metal stored enclosed develops a metallic smell that transfers to the coffee.\n\nDo not use soap on the phin interior. Like a cast iron pan, the phin develops a seasoned surface from coffee oils that improves extraction over time. Soap removes this seasoning. Water alone cleans adequately.\n\nStorage: store dry, disassembled, in a dry location. Stacking the phin assembled stores it compactly but traps moisture between the parts — always store disassembled.\n\nVariations:\n\nCà phê đen (black coffee): brew as above but omit the condensed milk. Drink hot or over ice.\n\nCà phê trứng (egg coffee): brew a concentrated extract and combine with a whipped mixture of egg yolk, condensed milk, and a small amount of cheese or butter. The phin provides the intensely bitter base that the sweet egg cream sits on top of.\n\nCà phê muối (salt coffee): a Hue speciality — brew the phin normally and combine with a lightly salted cream made from heavy cream and a pinch of salt. The salt suppresses bitterness and produces a gentler, more rounded coffee flavour. Serve in layers without stirring — the cream on top, the coffee beneath.\n\nCà phê cốt dừa (coconut coffee): combine the phin extract with sweetened coconut cream and ice. A Southern Vietnamese variation that is rapidly gaining international popularity.`,
        tip: 'Make a batch of phin concentrate ahead for ca phe sua da gatherings. Brew 3–4 phins consecutively, collecting the concentrate in a jar. Refrigerate — phin concentrate keeps for 48 hours refrigerated without significant flavour degradation. When serving, pour the cold concentrate over condensed milk and ice. This eliminates the 5-minute wait per person and allows you to serve Vietnamese iced coffee to multiple people simultaneously.',
    },
];

const RELATED = [
    { title: 'Cà Phê Sữa Đá (Vietnamese Iced Coffee)', href: '/recipes/ca-phe-sua-da', time: '8 min' },
    { title: 'Cà Phê Trứng (Vietnamese Egg Coffee)', href: '/recipes/ca-phe-trung', time: '10 min' },
    { title: 'Cà Phê Muối (Hue Salt Coffee)', href: '/recipes/ca-phe-muoi', time: '8 min' },
];

export default function PhinFilterGuide() {
    return (
        <div style={{ minHeight: '100vh', background: '#FAFAF7', paddingTop: 88, fontFamily: "'DM Sans', sans-serif" }}>

            {/* Breadcrumb */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '24px 24px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(75,46,26,0.45)' }}>
                    <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                    <span>/</span>
                    <Link href="/how-to" style={{ color: 'inherit', textDecoration: 'none' }}>How To</Link>
                    <span>/</span>
                    <span style={{ color: '#92400E' }}>How to Use a Vietnamese Phin Filter</span>
                </div>
            </div>

            {/* Hero */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '32px 24px 48px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                    <span style={{
                        fontSize: 10, fontWeight: 700, letterSpacing: '0.1em',
                        color: '#92400E', background: '#92400E15',
                        padding: '4px 12px', borderRadius: 100, textTransform: 'uppercase',
                    }}>Coffee</span>
                    <span style={{ fontSize: 12, color: 'rgba(75,46,26,0.4)' }}>⏱ 9 min read</span>
                </div>

                <h1 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                    fontWeight: 800, color: '#2D1A0E',
                    lineHeight: 1.15, marginBottom: 16,
                }}>
                    How to Use a Vietnamese Phin Filter
                </h1>

                <p style={{ fontSize: 17, color: 'rgba(75,46,26,0.6)', lineHeight: 1.75, marginBottom: 0 }}>
                    Water temperature, bloom time, one drop per second — the phin is designed to make patience mandatory, and the result justifies every minute of the wait.
                </p>

                <div style={{ height: 1, background: 'rgba(75,46,26,0.08)', margin: '32px 0' }} />

                <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                    {[
                        { label: 'Skill Level', value: 'Easy' },
                        { label: 'Brew Time', value: '4–6 minutes' },
                        { label: 'Correct Drip Rate', value: '1 drop per second' },
                        { label: 'Best Coffee', value: 'Trung Nguyen Creative 3' },
                    ].map(item => (
                        <div key={item.label}>
                            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', color: 'rgba(75,46,26,0.4)', textTransform: 'uppercase', marginBottom: 4 }}>{item.label}</div>
                            <div style={{ fontSize: 14, fontWeight: 600, color: '#2D1A0E' }}>{item.value}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 24px 80px' }}>
                {SECTIONS.map((section, i) => (
                    <motion.div
                        key={section.step}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.04 }}
                        style={{ marginBottom: 48 }}
                    >
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 16 }}>
                            <div style={{
                                width: 36, height: 36, borderRadius: '50%',
                                background: '#92400E', color: '#fff',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: 13, fontWeight: 700, flexShrink: 0, marginTop: 2,
                            }}>
                                {section.step}
                            </div>
                            <h2 style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: 20, fontWeight: 700,
                                color: '#2D1A0E', margin: 0, lineHeight: 1.3,
                            }}>
                                {section.title}
                            </h2>
                        </div>

                        <div style={{ paddingLeft: 52 }}>
                            {section.content.split('\n\n').map((para, j) => (
                                <p key={j} style={{
                                    fontSize: 15, color: 'rgba(75,46,26,0.75)',
                                    lineHeight: 1.8, marginBottom: 14,
                                }}>
                                    {para}
                                </p>
                            ))}

                            {section.tip && (
                                <div style={{
                                    background: '#FEF3C7',
                                    border: '1px solid #D97706',
                                    borderLeft: '4px solid #D97706',
                                    borderRadius: 10,
                                    padding: '14px 18px',
                                    marginTop: 16,
                                }}>
                                    <div style={{ fontSize: 11, fontWeight: 700, color: '#D97706', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6 }}>
                                        Pro Tip
                                    </div>
                                    <p style={{ fontSize: 13, color: '#92400E', lineHeight: 1.65, margin: 0 }}>
                                        {section.tip}
                                    </p>
                                </div>
                            )}
                        </div>

                        {i < SECTIONS.length - 1 && (
                            <div style={{ height: 1, background: 'rgba(75,46,26,0.06)', marginTop: 48 }} />
                        )}
                    </motion.div>
                ))}

                {/* Related */}
                <div style={{
                    background: '#fff', border: '1px solid rgba(75,46,26,0.08)',
                    borderRadius: 20, padding: '28px', marginTop: 16,
                }}>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: '#2D1A0E', marginBottom: 16 }}>
                        Vietnamese coffee recipes
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                        {RELATED.map(r => (
                            <Link key={r.href} href={r.href} style={{ textDecoration: 'none' }}>
                                <div
                                    style={{
                                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                        padding: '12px 16px', borderRadius: 12,
                                        background: '#FAFAF7', border: '1px solid rgba(75,46,26,0.06)',
                                        transition: 'all 0.18s',
                                    }}
                                    onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#92400E'; }}
                                    onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(75,46,26,0.06)'; }}
                                >
                                    <span style={{ fontSize: 14, fontWeight: 600, color: '#2D1A0E' }}>{r.title}</span>
                                    <span style={{ fontSize: 12, color: 'rgba(75,46,26,0.4)' }}>⏱ {r.time}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                <div style={{ marginTop: 40, textAlign: 'center' }}>
                    <Link href="/how-to" style={{
                        display: 'inline-flex', alignItems: 'center', gap: 6,
                        fontSize: 13, fontWeight: 600, color: '#D97706',
                        textDecoration: 'none',
                    }}>
                        ← Back to all guides
                    </Link>
                </div>
            </div>
        </div>
    );
}