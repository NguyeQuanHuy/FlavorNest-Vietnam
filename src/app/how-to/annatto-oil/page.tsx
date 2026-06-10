'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const SECTIONS = [
    {
        step: 1,
        title: 'What Annatto Oil Is and Where It Appears',
        content: `Dầu điều — annatto oil, also called dầu màu điều — is the vivid orange-red colouring oil that gives many Vietnamese dishes their characteristic warm, appetising hue. It is made by infusing neutral oil with annatto seeds (hạt điều màu) — the small, brick-red seeds of the achiote tree — which release their fat-soluble orange pigment into the oil when gently heated. The result is a clear, brilliant orange-red oil with a very mild, faintly peppery, slightly earthy flavour.\n\nThe critical thing to understand about annatto oil is that it is primarily a colouring agent, not a flavouring one. Its job is visual: to give bún bò Huế its signature red-orange broth, to lend mì Quảng its golden colour, to make grilled meats and the fat layer of bánh mì fillings look rich and appetising. The flavour contribution is minimal and subtle — it should never dominate or be individually detectable in the finished dish.\n\nAnnatto seeds are sometimes confused with cashew nuts because the Vietnamese word "điều" refers to both the cashew tree and the annatto plant in different contexts. The colouring seeds (hạt điều màu) are not cashews — they are hard, brick-red, triangular seeds sold specifically for making colouring oil. They are inedible whole and are always strained out after the oil is infused.\n\nMaking annatto oil at home takes ten minutes, costs almost nothing, and produces a far better result than the bottled annatto oil or — worse — the artificial orange food colourings that some shortcut recipes substitute. A jar of homemade dầu điều in the refrigerator is one of the most useful colour-and-finish tools in a Vietnamese kitchen.`,
        tip: null,
    },
    {
        step: 2,
        title: 'Sourcing Annatto Seeds',
        content: `Annatto seeds (hạt điều màu / hạt điều nhuộm) are available at Vietnamese and Latin American grocery stores — annatto (called achiote) is also fundamental to Latin American and Filipino cooking, so any store serving those communities will carry the seeds. In Germany, Vietnamese grocery stores and larger Asian supermarkets stock them; online sources cover any gaps.\n\nWhat to look for: the seeds should be a deep, vivid brick-red colour. Fresh annatto seeds are intensely coloured; old seeds fade toward a dull brown-red and produce a weaker, less vivid oil. Buy seeds that look bright and have a slightly waxy surface.\n\nQuantity: a small bag of annatto seeds — typically 100g — is enough to make many batches of oil. The seeds keep almost indefinitely in a sealed container in a cool, dark place; they are dried and do not spoil, though their colouring power slowly diminishes over a year or more.\n\nDistinguishing annatto from cashews: if you are uncertain whether what you have bought is the correct seed, the test is simple — annatto colouring seeds are small (3-5mm), hard, triangular, and brick-red. They are not the large, cream-coloured, kidney-shaped cashew nuts. If the package is labelled "hạt điều màu" or "achiote" or "annatto," it is the correct colouring seed.\n\nGround annatto powder: also available, and more convenient for some applications, but it produces a slightly cloudy oil with fine sediment that the whole seeds do not. For a clear, brilliant oil, the whole seeds are preferable. The powder is useful when annatto colour needs to be added directly to a dish without making oil first.`,
        tip: 'Buy whole annatto seeds rather than powder for making oil. The whole seeds release their colour cleanly into the oil and are strained out completely, leaving a clear, brilliant orange oil. Powder leaves a fine sediment that clouds the oil and can settle into the dish, producing a slightly gritty texture and a less vivid colour.',
    },
    {
        step: 3,
        title: 'Making the Oil — The Gentle-Heat Method',
        content: `The single most important principle in making annatto oil is gentle, controlled heat. The pigment in annatto seeds is released into oil at moderate temperatures — but if the oil gets too hot, the pigment burns, turning the oil brown and bitter instead of brilliant orange. A burnt batch of annatto oil is unusable and must be discarded.\n\nFor approximately 200ml of annatto oil:\n\n200ml neutral oil (refined vegetable, sunflower, or rice bran oil)\n3 tbsp annatto seeds (about 30g)\n\nOptional aromatics: 2 cloves garlic (lightly smashed), 1 shallot (sliced) — these add a faint background flavour and are used in some regional versions.\n\nPlace the oil and annatto seeds in a small saucepan. If using the optional aromatics, add them now. Heat over the lowest possible setting — the oil should never reach a simmer or sizzle vigorously. The correct temperature is around 120-140°C — warm enough to extract the colour, cool enough never to burn it.\n\nWithin 2-3 minutes, the oil will begin to take on colour, turning from clear to pale orange to deep orange-red. Small bubbles may rise gently from the seeds — this is fine, but the oil should not be bubbling vigorously or smoking. If it begins to smoke, remove from the heat immediately; it is too hot.\n\nContinue heating gently for 4-5 minutes total, until the oil reaches a deep, brilliant orange-red. Stir occasionally to distribute the heat evenly. The seeds will give up most of their colour in this time — when the oil is a rich orange-red and the seeds have faded slightly, the extraction is complete.\n\nRemove from the heat and allow to cool for 5 minutes with the seeds still in the oil — the residual heat continues to extract colour as it cools.`,
        tip: 'Watch the colour, not the clock. The exact timing depends on the freshness of your seeds and the precise heat level. The oil is ready when it reaches a deep, brilliant orange-red — not pale orange (under-extracted) and not brown (burnt). The moment it reaches the rich red-orange colour, remove it from the heat regardless of how much time has passed.',
    },
    {
        step: 4,
        title: 'Straining and Storing',
        content: `Once the oil has cooled to warm (not hot), strain out the seeds and any aromatics. Pour through a fine mesh sieve into a clean, dry glass jar. The seeds are completely spent at this point — they have given up their colour and have no further use. Discard them.\n\nFor a perfectly clear oil: line the sieve with a piece of muslin cloth or a coffee filter to catch any fine particles. This produces a crystal-clear, brilliant oil with no sediment — important for applications where the oil is used as a visible finishing element.\n\nStorage: store the strained annatto oil in a sealed glass jar in the refrigerator. It keeps for up to 1 month refrigerated. The oil may solidify slightly when cold depending on the type of oil used — it returns to liquid at room temperature within a few minutes.\n\nFor longer storage, the oil can be frozen in an ice cube tray and used cube by cube — frozen annatto oil keeps for several months. Most cooks, however, make small batches as needed since the process is so quick.\n\nThe colour will remain vivid for the full month of refrigerated storage — unlike the chlorophyll in pandan extract, which fades quickly, the annatto pigment is stable and does not lose its colour over time in the refrigerator.\n\nA note on staining: annatto oil stains everything it touches — clothing, wooden cutting boards, plastic containers, skin. Use a glass jar for storage (glass does not stain), wipe spills immediately, and be careful when pouring. An annatto stain on a wooden spoon or plastic container is essentially permanent.`,
        tip: 'Make annatto oil in a dedicated small saucepan if you cook with it regularly. The vivid pigment can leave a faint orange residue on the pan that is harmless but persistent. A small dedicated pan avoids any concern about the colour transferring to other dishes, and the residue actually speeds up subsequent batches.',
    },
    {
        step: 5,
        title: 'Using Annatto Oil in Vietnamese Dishes',
        content: `Annatto oil is used in two ways: stirred into a dish during cooking to colour the whole preparation, or brushed onto a surface as a finishing colour. The amount needed is small — annatto oil is potent, and a tablespoon colours a large pot of broth.\n\nBún bò Huế: the most important application. Annatto oil is what gives bún bò Huế its characteristic red-orange broth. Add 2-3 tbsp to the broth near the end of cooking, or use annatto oil as the base for frying the lemongrass and chilli paste (sa tế) that flavours the soup. The oil colours the broth without adding a detectable flavour of its own.\n\nMì Quảng: the Central Vietnamese turmeric-and-annatto noodle dish gets its golden-orange colour partly from annatto oil. Used to colour the broth and to fry the aromatics for the dish.\n\nGrilled meats: brush annatto oil onto grilled pork, chicken, or ribs during cooking to give them a rich, appetising red-gold colour and a glossy finish. Common in com tam grilled pork and in many barbecue preparations.\n\nBánh mì fillings: the fat layer and some of the meat fillings in banh mi are coloured with a small amount of annatto oil to make them look richer and more appetising.\n\nXôi gấc substitute: while traditional xôi gấc (red sticky rice) uses the gac fruit for its colour, annatto oil can provide a similar red-orange colour to sticky rice when gac is unavailable — though the flavour is different.\n\nFried rice and stir-fries: a small amount added to fried rice or a stir-fry gives the dish a warm golden colour that makes it look richer than plain oil would.\n\nThe key principle in all applications: use just enough to achieve the colour you want. Too much annatto oil makes a dish look artificially, garishly orange and can introduce a faint waxy texture. The goal is a natural, warm, appetising colour — not a neon one.`,
        tip: null,
    },
    {
        step: 6,
        title: 'Troubleshooting and Variations',
        content: `Oil turned brown instead of orange-red: the oil was too hot and the pigment burned. This batch is unusable — the burnt annatto has a bitter flavour and a muddy brown colour. Discard it and start again with lower heat. This is the single most common error in making annatto oil and the reason gentle heat is emphasised throughout.\n\nOil is pale and weakly coloured: either the heat was too low and the extraction was incomplete, or the annatto seeds were old and had lost their colouring power. For weak extraction, return the oil to gentle heat with the seeds for another 2-3 minutes. For old seeds, the only solution is fresher seeds — old annatto simply cannot produce a vivid oil.\n\nOil is cloudy with sediment: fine particles from the seeds passed through the sieve. Strain again through muslin cloth or a coffee filter for a clear result. Sediment does not affect the flavour but does affect the visual clarity.\n\nVariations:\n\nAnnatto-garlic oil: add 3-4 smashed garlic cloves to the oil during heating. Strain out with the seeds. The oil takes on a faint garlic background that suits grilled meat applications.\n\nAnnatto-lemongrass oil: add 1 stalk of bruised lemongrass during heating. Produces an oil with a faint citrus note, suited to bún bò Huế and Central Vietnamese dishes.\n\nAnnatto-shallot oil: add 1 sliced shallot during heating, fried gently until golden. The shallot adds sweetness and the oil becomes a dual-purpose colour-and-flavour base.\n\nAnnatto sa tế (chilli-annatto paste): the foundation of bún bò Huế's flavour. Fry minced lemongrass, garlic, and chilli in annatto oil until fragrant, producing a brilliant red, intensely flavoured paste that both colours and flavours the soup. This is the most important Vietnamese application of annatto oil — the colour and the chilli heat combined in one preparation.`,
        tip: 'Make a batch of annatto sa tế (the chilli-lemongrass-annatto paste) at the same time as plain annatto oil. The plain oil handles general colouring needs while the sa tế provides the colour-and-flavour-and-heat base for bún bò Huế and other Central Vietnamese dishes. Both keep for weeks refrigerated, and having both ready makes these dishes significantly faster to prepare.',
    },
];

const RELATED = [
    { title: 'Bún Bò Huế (Hue Spicy Beef Noodle Soup)', href: '/recipes/hue-spicy-beef-noodle-soup', time: '3 hrs' },
    { title: 'How to Char Vietnamese Aromatics', href: '/how-to/char-aromatics', time: '8 min read' },
    { title: 'How to Make Scallion Oil (Mỡ Hành)', href: '/how-to/mo-hanh', time: '8 min read' },
];

export default function AnnattoOilGuide() {
    return (
        <div style={{ minHeight: '100vh', background: '#FAFAF7', paddingTop: 88, fontFamily: "'DM Sans', sans-serif" }}>

            {/* Breadcrumb */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '24px 24px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(75,46,26,0.45)' }}>
                    <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                    <span>/</span>
                    <Link href="/how-to" style={{ color: 'inherit', textDecoration: 'none' }}>How To</Link>
                    <span>/</span>
                    <span style={{ color: '#059669' }}>Annatto Oil (Dầu Điều)</span>
                </div>
            </div>

            {/* Hero */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '32px 24px 48px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                    <span style={{
                        fontSize: 10, fontWeight: 700, letterSpacing: '0.1em',
                        color: '#059669', background: '#05996915',
                        padding: '4px 12px', borderRadius: 100, textTransform: 'uppercase',
                    }}>Sauces & Condiments</span>
                    <span style={{ fontSize: 12, color: 'rgba(75,46,26,0.4)' }}>⏱ 8 min read</span>
                </div>

                <h1 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                    fontWeight: 800, color: '#2D1A0E',
                    lineHeight: 1.15, marginBottom: 16,
                }}>
                    How to Make Annatto Oil (Dầu Điều)
                </h1>

                <p style={{ fontSize: 17, color: 'rgba(75,46,26,0.6)', lineHeight: 1.75, marginBottom: 0 }}>
                    Gentle heat, the right seeds, and watching the colour — the ten-minute colouring oil that gives bún bò Huế its red-orange broth and mì Quảng its golden hue, without artificial dyes.
                </p>

                <div style={{ height: 1, background: 'rgba(75,46,26,0.08)', margin: '32px 0' }} />

                <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                    {[
                        { label: 'Skill Level', value: 'Easy' },
                        { label: 'Active Time', value: '10 minutes' },
                        { label: 'Keeps For', value: '1 month refrigerated' },
                        { label: 'Key Rule', value: 'Never let it burn' },
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
                                background: '#059669', color: '#fff',
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
                        Recipes and guides that use annatto oil
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
                                    onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#059669'; }}
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