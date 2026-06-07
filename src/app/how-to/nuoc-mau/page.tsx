'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const SECTIONS = [
    {
        step: 1,
        title: 'What Nuoc Mau Is and Why Vietnamese Cooking Needs It',
        content: `Nuoc mau — Vietnamese caramel sauce — is not a dessert ingredient. It is a savoury colouring and flavouring agent used in braised dishes, kho preparations, and marinades across Vietnamese cooking. Its primary function is colour: a few tablespoons of nuoc mau turns a pale braising liquid into the deep, mahogany brown that identifies thit kho tau, ca kho to, and suon kho as properly made Vietnamese dishes rather than pale approximations.\n\nThe secondary function is flavour. Nuoc mau made correctly — cooked past the caramel stage to the edge of bitter — adds a dark, slightly bittersweet depth that balances the sweetness of sugar and the saltiness of fish sauce in a braise. It is not sweet in the finished dish. It is complex.\n\nNuoc mau is made from nothing but sugar and water. The technique is entirely about heat control and the courage to keep cooking past the point where most people stop. Pulled too early, it is pale and sweet — a syrup, not a caramel. Pulled at the correct point, it is near-black, slightly bitter, intensely aromatic, and stable enough to store for months.`,
        tip: null,
    },
    {
        step: 2,
        title: 'The Two Stages of Caramelisation — and Why Both Matter',
        content: `Sugar undergoes two distinct transformations when heated, and nuoc mau requires passing through both.\n\nStage one is caramelisation: the sugar melts, turns amber, and develops the classic sweet caramel flavour and aroma. This happens between 160–180°C. A sauce pulled at this stage is what Western recipes call caramel — golden, sweet, and useful for desserts. It is not nuoc mau.\n\nStage two is controlled burning: the caramel continues past sweet and into bitter as the sugar molecules break down further and the colour deepens from amber to dark brown to near-black. This happens between 180–200°C and takes only 30–60 additional seconds. The aroma shifts from sweet to complex — roasted, slightly smoky, with a bitterness that is pronounced in the pan but mellows dramatically when diluted into a braise.\n\nNuoc mau is pulled at the end of stage two, just before the sugar crosses from pleasantly bitter to acrid and burnt. This window is approximately 20–30 seconds wide. Understanding the visual and aromatic cues that signal this window is the entire skill of making nuoc mau.`,
        tip: 'Make nuoc mau in a light-coloured pan — stainless steel or a pale ceramic — so you can accurately judge the colour of the caramel as it darkens. A dark non-stick pan makes it impossible to see the colour change until it is too late.',
    },
    {
        step: 3,
        title: 'Ingredients and Equipment',
        content: `The recipe is two ingredients: sugar and water. The ratio is 200g sugar to 60ml water for a standard batch that fills a small jar.\n\nSugar: white granulated sugar is correct. Do not use brown sugar, palm sugar, or coconut sugar — their pre-existing molasses content interferes with the caramelisation process and produces an uneven result. The clean, neutral flavour of white sugar is what allows the caramel to develop its own complex character through heat alone.\n\nWater: plain cold water. The water does not contribute flavour — its function is to dissolve the sugar evenly before heating begins, preventing uneven crystallisation in the early stages.\n\nEquipment: a small, heavy-bottomed saucepan — stainless steel preferred. A heatproof jar or bottle for storage. A pastry brush and small bowl of water for washing down sugar crystals from the pan sides. Long tongs or oven mitts — the caramel reaches temperatures that cause serious burns on contact. A wooden spoon or heatproof silicone spatula for stirring.\n\nWork in a well-ventilated kitchen. Near-black caramel produces significant smoke in the final 30 seconds and the smoke alarm will trigger if the kitchen is not ventilated.`,
        tip: null,
    },
    {
        step: 4,
        title: 'The Cooking Process — Step by Step',
        content: `Combine sugar and water in the saucepan. Stir once to wet all the sugar, then place over medium heat. Do not stir again after this point — stirring a melting sugar syrup causes crystallisation that produces a grainy, unusable result. If crystals form on the sides of the pan, brush them down with a wet pastry brush.\n\nThe syrup will bubble vigorously for the first 3–4 minutes as the water evaporates. The bubbling will slow as the water cooks off and the sugar concentration increases. At this point the colour will begin to change — from clear to pale yellow to amber. This is stage one caramelisation and it happens quickly once it starts.\n\nAt pale amber — the colour of white wine — swirl the pan gently rather than stirring to even out any hot spots. Do not leave the stove. The colour will deepen rapidly from this point.\n\nAt medium amber — the colour of honey — reduce the heat slightly and watch closely. The caramel is entering the critical zone. The colour will shift from honey to dark amber to the target: a deep mahogany brown, almost black, with wisps of smoke beginning to rise from the surface.\n\nAt the moment you see the first wisps of smoke and the colour is deep mahogany — remove from heat immediately. The residual heat in the pan will continue the cooking for another 15–20 seconds. Swirl to even the colour.\n\nTotal cooking time from cold start: 12–18 minutes depending on pan size and heat level.`,
        tip: 'If the caramel seizes and hardens before reaching the correct colour, add 2 tbsp of hot water carefully — it will spatter — and return to medium heat. The hardened sugar will dissolve back into the liquid and you can continue. Cold water causes more violent spattering than hot.',
    },
    {
        step: 5,
        title: 'Adding Water to Stop the Cooking',
        content: `Once the caramel reaches deep mahogany, add 80ml of hot water to the pan. Stand back — the caramel is at 190°C and the water will cause an immediate, violent reaction as it hits the hot sugar. The mixture will bubble explosively, hiss, and may seize into a solid mass momentarily.\n\nReturn the pan to low heat and stir gently until any hardened caramel fully dissolves back into the liquid. This takes 1–2 minutes. The finished nuoc mau should be a pourable, dark brown syrup — the consistency of thin maple syrup when warm, thicker when cold.\n\nIf the nuoc mau tastes predominantly sweet rather than bittersweet, it was pulled too early. If it tastes acrid and unpleasant rather than pleasantly bitter, it was pulled too late. A correct nuoc mau tastes intensely bitter on its own but balances into complexity when added to a braising liquid with fish sauce and sugar.`,
        tip: 'Always use hot or boiling water when stopping the caramel — never cold. Cold water hitting caramel at 190°C causes a more violent explosion of steam and increases the risk of burns. Heat the water in a kettle before you start cooking the caramel so it is ready.',
    },
    {
        step: 6,
        title: 'Storage and How to Use Nuoc Mau in Vietnamese Cooking',
        content: `Pour the finished nuoc mau into a clean glass jar while still warm and pourable. It will thicken as it cools. Store at room temperature — the high sugar concentration prevents bacterial growth. Properly made nuoc mau keeps for 3–6 months at room temperature and indefinitely refrigerated.\n\nIf it hardens completely in the jar, place the jar in warm water for 5 minutes or microwave for 10 seconds to loosen.\n\nHow to use in cooking: nuoc mau is added at the beginning of a braise, after the aromatics have been fried and before the protein is added. Start with 1–2 tablespoons and adjust — it is easier to add more than to correct an over-darkened braise. The correct amount colours the sauce deep brown without making the finished dish taste bitter.\n\nFor thit kho tau: 2 tbsp nuoc mau per 500g pork belly, added with the fish sauce and coconut water at the start of braising.\n\nFor ca kho to: 1.5 tbsp per 400g fish, added with the fish sauce and sugar before the fish goes in.\n\nFor suon kho: 1.5 tbsp per 500g pork ribs, added with the seasoning before simmering.\n\nNuoc mau can also be brushed onto grilled meats — suon nuong, ga nuong — in the last 2 minutes of grilling to produce a dark, lacquered surface. Dilute with a small amount of fish sauce before brushing.`,
        tip: 'Label the jar with the date made and the batch number if you make nuoc mau regularly. Older batches that have been stored for months are slightly more bitter than fresh batches — reduce the quantity slightly when using old stock in delicate dishes like ca kho.',
    },
];

const RELATED = [
    { title: 'Thit Kho Tau (Caramelised Pork Belly)', href: '/recipes/thit-kho-tau', time: '1 hr 30 min' },
    { title: 'Ca Kho To (Clay Pot Caramelised Fish)', href: '/recipes/ca-kho-to', time: '45 min' },
    { title: 'How to Render Pork Fat & Make Top Mo', href: '/how-to/render-pork-fat', time: '9 min read' },
];

export default function NuocMauGuide() {
    return (
        <div style={{ minHeight: '100vh', background: '#FAFAF7', paddingTop: 88, fontFamily: "'DM Sans', sans-serif" }}>

            {/* Breadcrumb */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '24px 24px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(75,46,26,0.45)' }}>
                    <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                    <span>/</span>
                    <Link href="/how-to" style={{ color: 'inherit', textDecoration: 'none' }}>How To</Link>
                    <span>/</span>
                    <span style={{ color: '#D97706' }}>Vietnamese Caramel (Nước Màu)</span>
                </div>
            </div>

            {/* Hero */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '32px 24px 48px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                    <span style={{
                        fontSize: 10, fontWeight: 700, letterSpacing: '0.1em',
                        color: '#DC2626', background: '#DC262615',
                        padding: '4px 12px', borderRadius: 100, textTransform: 'uppercase',
                    }}>Essential</span>
                    <span style={{ fontSize: 12, color: 'rgba(75,46,26,0.4)' }}>⏱ 9 min read</span>
                </div>

                <h1 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                    fontWeight: 800, color: '#2D1A0E',
                    lineHeight: 1.15, marginBottom: 16,
                }}>
                    How to Make Vietnamese Caramel (Nước Màu)
                </h1>

                <p style={{ fontSize: 17, color: 'rgba(75,46,26,0.6)', lineHeight: 1.75, marginBottom: 0 }}>
                    Sugar and water, cooked past sweet into bittersweet mahogany — the dark, savoury colouring agent behind thit kho tau, ca kho to, and every properly made Vietnamese braise.
                </p>

                <div style={{ height: 1, background: 'rgba(75,46,26,0.08)', margin: '32px 0' }} />

                <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                    {[
                        { label: 'Skill Level', value: 'Essential' },
                        { label: 'Active Time', value: '15–20 minutes' },
                        { label: 'Key Tools', value: 'Stainless steel saucepan' },
                        { label: 'Used In', value: 'Thit Kho, Ca Kho To, Suon Kho' },
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
                                background: '#DC2626', color: '#fff',
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
                        Recipes that use nuoc mau
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
                                    onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#D97706'; }}
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