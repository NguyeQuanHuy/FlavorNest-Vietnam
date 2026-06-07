'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const SECTIONS = [
    {
        step: 1,
        title: 'What Makes Banh Xeo Batter Different From Every Other Crepe',
        content: `Banh xeo — the Vietnamese sizzling crepe — is defined by its batter before anything else. The name literally means sizzling cake, named for the sound the batter makes the moment it hits the hot oiled pan: a loud, aggressive hiss that announces the dish is being made correctly. If the pan is not hot enough to produce that sound, the crepe will not crisp. If the batter is wrong, it will not shatter.\n\nThe batter is rice flour, coconut milk, water, turmeric, and salt. No egg. No wheat flour. The absence of egg is what makes the result possible — egg proteins set into a soft, pliable texture that cannot become genuinely brittle. Rice starch, cooked in fat at high heat, produces a surface that shatters like glass when you fold and bite through it. The coconut milk adds fat and a faint sweetness that balances the turmeric's earthiness.\n\nThe turmeric is not optional and not merely decorative. Its primary function is colour — the deep, saturated yellow that identifies banh xeo instantly — but it also contributes a faint bitterness and an earthy note that is part of the dish's flavour identity. A pale banh xeo is an under-seasoned banh xeo.`,
        tip: null,
    },
    {
        step: 2,
        title: 'The Regional Variations and Which to Make',
        content: `Banh xeo varies significantly across Vietnam's three regions, and the batter is different in each.\n\nSouthern banh xeo (Saigon style) is large — 30–35cm across — thin, and extremely crispy. The batter uses a higher proportion of water to coconut milk, which produces a lighter, crispier result. Fillings are generous: pork belly, shrimp, bean sprouts, mung beans. It is eaten by tearing pieces and wrapping in mustard leaf or lettuce with fresh herbs.\n\nCentral banh xeo (Hue and Da Nang style) is smaller — 10–12cm — thicker, and chewier. The batter uses more coconut milk and less water, producing a richer, slightly softer crepe. Regional additions include spring onion cooked into the batter and a smaller, more intense filling. It is eaten whole rather than torn.\n\nNorthern banh xeo is less common and uses a simpler batter without coconut milk — closer to a plain rice crepe seasoned with turmeric.\n\nThis guide covers the Southern style, which is the most widely known internationally and produces the most dramatic crispy result.`,
        tip: 'If you have never made banh xeo before, start with the Southern style. The large pan size and thin batter are more forgiving of technique errors than the smaller Central version, which requires more precise heat control.',
    },
    {
        step: 3,
        title: 'The Batter — Ratios, Resting, and Why Both Matter',
        content: `The base recipe for Southern banh xeo batter (makes 6–8 crepes):\n\n200g rice flour — not glutinous rice flour, not all-purpose flour. Plain white rice flour. The starch granules in rice flour are what produce the crispy texture.\n\n400ml cold water — the higher the water ratio relative to coconut milk, the crispier the result. Southern style uses more water than coconut milk.\n\n200ml coconut milk — full-fat, from a can. Light coconut milk produces a less rich, less flavourful result.\n\n1 tsp turmeric powder — or 2 tsp freshly grated turmeric for a more intense colour and flavour.\n\n0.75 tsp salt.\n\n2 stalks spring onion, green parts only, sliced into thin rings — added to the batter, not the filling, for a faint onion flavour distributed through every bite.\n\nCombine all ingredients and whisk until completely smooth with no lumps. The batter should have the consistency of thin cream — it should coat the back of a spoon very lightly and run off in a continuous stream.\n\nRest the batter for a minimum of 30 minutes at room temperature before cooking. Resting allows the rice starch to fully hydrate, which produces a more even, cohesive crepe. Batter cooked immediately after mixing produces crepes that tear more easily and have an uneven texture. Overnight resting in the refrigerator produces the best results.`,
        tip: 'Stir the batter before each crepe — the rice flour settles to the bottom within minutes. A batter poured without stirring first will be thin and watery at the beginning of the batch and thick and starchy at the end, producing wildly inconsistent results.',
    },
    {
        step: 4,
        title: 'Pan, Heat, and Oil — The Three Variables',
        content: `Pan: a 28–30cm non-stick or well-seasoned carbon steel pan or wok. The pan must have a lid — the crepe is covered for the first 2 minutes of cooking to steam the filling before the lid is removed to crisp the surface. A pan without a lid produces an undercooked filling and an overcooked exterior.\n\nHeat: high. Banh xeo requires genuine high heat — the pan should be hot enough that a drop of water flicked onto the surface evaporates immediately with a sharp hiss. Insufficient heat is the most common reason banh xeo fails to crisp. The fat in the coconut milk batter requires high heat to fry rather than simply dry out.\n\nOil: 1–1.5 tablespoons of neutral oil per crepe, added to the hot pan and swirled to coat the entire surface including the sides before the batter is poured. The oil layer between the pan and the batter is what produces the crispy, almost fried texture on the underside of the crepe. Insufficient oil produces a pale, matte surface that is dry rather than crisp.\n\nThe combination of high heat and adequate oil is non-negotiable. A banh xeo that is cooked with insufficient heat or insufficient oil will be soft, pale, and have none of the textural drama that defines the dish.`,
        tip: 'Heat the pan for at least 2 minutes over high heat before adding oil. A pan that has been on high heat long enough holds its temperature when the batter hits it. A pan that was just turned to high heat will drop temperature when the cold batter is added and the first crepe will always be the worst one — which is normal and expected.',
    },
    {
        step: 5,
        title: 'The Cooking Process — Pour, Cover, Uncover, Fold',
        content: `Add 1 tbsp oil to the hot pan and swirl immediately to coat. Add the filling ingredients for one crepe: 2–3 slices pork belly (pre-cooked), 3–4 shrimp, a small handful of bean sprouts, a spoonful of cooked mung beans. Stir-fry briefly for 30–60 seconds until the shrimp turns pink.\n\nSpread the filling to one half of the pan. Stir the batter once, then pour approximately 80–100ml in a thin, even stream around the edge of the pan first, then fill in the centre. Tilt the pan immediately to spread the batter into a thin, even layer covering the entire surface — work quickly, the batter begins to set within seconds on a hot pan.\n\nCover the pan with a lid and reduce heat to medium-high. Cook covered for 2 minutes — this steams the filling through while the underside of the crepe begins to crisp.\n\nRemove the lid. The surface of the crepe should appear set and dry, and the edges should be pulling away from the pan and beginning to turn golden. If the centre still looks wet, cover for another 30 seconds.\n\nAdd a drizzle of oil around the edges of the crepe. Cook uncovered for another 2–3 minutes until the underside is deep golden and the edges are visibly crisp and lacy. The crepe is ready when it can be lifted cleanly from the pan with a spatula and feels rigid rather than soft.\n\nFold in half over the filling and slide onto a plate. Serve immediately — banh xeo loses its crunch within 3–4 minutes of leaving the pan.`,
        tip: 'The lacy, crispy edges are a sign of correct technique — they form when the thin outer edge of the batter crisps faster than the centre. If the edges are not lacy, the pan was not hot enough or the batter was too thick.',
    },
    {
        step: 6,
        title: 'Troubleshooting — Why Banh Xeo Goes Wrong',
        content: `Crepe tears when folding: the batter was too thin, the crepe was not cooked long enough before folding, or the heat was too low. Ensure the batter has the correct consistency, cook until the edges pull away cleanly, and always test with a spatula before folding.\n\nCrepe is soft and pale instead of crispy: the pan was not hot enough, not enough oil was used, or the batter had too much coconut milk relative to water. Increase heat, add more oil before pouring each crepe, and adjust the batter ratio toward more water.\n\nCrepe sticks to the pan: the pan was not hot enough when the oil was added, or the pan surface is damaged. Always add oil to a hot pan, swirl immediately, and pour the batter before the oil begins to smoke.\n\nFilling is raw inside a cooked crepe: the filling was added raw rather than partially cooked, or the lid was not used. Pre-cook the pork and use the lid for the first 2 minutes of every crepe.\n\nBatter produces inconsistent crepes across the batch: the batter was not stirred between crepes. The rice flour settles continuously — stir every time without exception.\n\nCrepe is too thick: too much batter was poured, or the pan was not tilted quickly enough after pouring. Use a measuring cup or ladle of consistent size for each crepe and tilt immediately after pouring.`,
        tip: null,
    },
];

const RELATED = [
    { title: 'Banh Xeo (Vietnamese Sizzling Crepe)', href: '/recipes/banh-xeo', time: '45 min' },
    { title: 'Fresh Spring Rolls (Goi Cuon)', href: '/recipes/fresh-spring-rolls', time: '30 min' },
    { title: 'How to Make Nuoc Cham', href: '/how-to/nuoc-cham-guide', time: '5 min' },
];

export default function BanhXeoBatterGuide() {
    return (
        <div style={{ minHeight: '100vh', background: '#FAFAF7', paddingTop: 88, fontFamily: "'DM Sans', sans-serif" }}>

            {/* Breadcrumb */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '24px 24px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(75,46,26,0.45)' }}>
                    <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                    <span>/</span>
                    <Link href="/how-to" style={{ color: 'inherit', textDecoration: 'none' }}>How To</Link>
                    <span>/</span>
                    <span style={{ color: '#D97706' }}>Banh Xeo Batter</span>
                </div>
            </div>

            {/* Hero */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '32px 24px 48px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                    <span style={{
                        fontSize: 10, fontWeight: 700, letterSpacing: '0.1em',
                        color: '#D97706', background: '#D9770615',
                        padding: '4px 12px', borderRadius: 100, textTransform: 'uppercase',
                    }}>Essential Techniques</span>
                    <span style={{ fontSize: 12, color: 'rgba(75,46,26,0.4)' }}>⏱ 10 min read</span>
                </div>

                <h1 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                    fontWeight: 800, color: '#2D1A0E',
                    lineHeight: 1.15, marginBottom: 16,
                }}>
                    How to Make Banh Xeo Batter
                </h1>

                <p style={{ fontSize: 17, color: 'rgba(75,46,26,0.6)', lineHeight: 1.75, marginBottom: 0 }}>
                    Rice flour, coconut milk, turmeric — the exact ratio, the resting time, and the pan technique that produces the shatteringly crisp Southern Vietnamese sizzling crepe.
                </p>

                <div style={{ height: 1, background: 'rgba(75,46,26,0.08)', margin: '32px 0' }} />

                <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                    {[
                        { label: 'Skill Level', value: 'Intermediate' },
                        { label: 'Batter Rest Time', value: '30 min – overnight' },
                        { label: 'Key Tools', value: '30cm pan with lid' },
                        { label: 'Makes', value: '6–8 crepes' },
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
                                background: '#D97706', color: '#fff',
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
                        Recipes that use this technique
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