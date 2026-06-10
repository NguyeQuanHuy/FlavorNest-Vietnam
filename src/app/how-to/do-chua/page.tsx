'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const SECTIONS = [
    {
        step: 1,
        title: 'What Đồ Chua Is and Why It Appears Everywhere',
        content: `Đồ chua — Vietnamese pickled daikon and carrot — is the bright, tangy, slightly sweet quick pickle that appears in nearly every Vietnamese dish that needs a fresh, acidic counterpoint. It is the crunch and the sourness inside a bánh mì, the refreshing element alongside grilled meats in a com tam plate, the topping on a bún thịt nướng bowl, and the palate-cleanser served with rich braised dishes. Its job is contrast: against fatty pork, dense pâté, sweet caramelised meat, and rich noodle dishes, đồ chua provides the bright, sour, crunchy relief that keeps each bite fresh.\n\nUnlike Western pickles, which are often fully fermented and intensely sour, đồ chua is a quick pickle — made in a few hours, with a balance of sweet and sour rather than pure acidity, and a texture that stays crisp rather than going soft. It is not preserved for months; it is made fresh, eaten within a week or two, and valued for its bright crunch as much as its flavour.\n\nThe two vegetables — daikon radish (củ cải trắng) and carrot (cà rốt) — are julienned into matchsticks and pickled together in a sweet-sour brine. The orange carrot and white daikon create the characteristic two-colour appearance, and the two vegetables contribute slightly different textures and flavours: the daikon mild and slightly peppery, the carrot sweeter and firmer.\n\nMaking đồ chua takes fifteen minutes of active work, costs almost nothing, and a jar in the refrigerator transforms simple meals — a bánh mì, a plate of grilled pork over rice, a bowl of noodles — into complete Vietnamese dishes with the bright acidic balance the cuisine depends on.`,
        tip: null,
    },
    {
        step: 2,
        title: 'The Vegetables — Selection and the Salting Step',
        content: `Daikon radish (củ cải trắng): choose firm, heavy daikon with smooth, unblemished white skin. A good daikon feels dense and solid; a light, spongy daikon is old and will not produce a crisp pickle. Avoid daikon with soft spots or a strong, pungent smell — these indicate age. Daikon is available at Asian grocery stores and increasingly at European supermarkets.\n\nCarrot: standard carrots work perfectly. Choose firm, bright orange carrots. The carrot provides colour, sweetness, and a slightly firmer texture than the daikon.\n\nRatio: the traditional ratio is roughly 2 parts daikon to 1 part carrot — the daikon is the primary vegetable, the carrot the accent. For a standard batch: 1 large daikon (about 400g) and 1 large carrot (about 150g).\n\nThe cut: julienne both vegetables into matchsticks approximately 4-5cm long and 3-4mm thick. The thickness matters — too thin and the pickle goes limp quickly; too thick and it does not absorb the brine properly. A mandoline with a julienne attachment produces the most uniform result quickly; by knife, slice into 3-4mm planks then into matchsticks.\n\nThe critical salting step: before pickling, the julienned vegetables must be salted and drained to remove excess water and to begin developing the crisp-tender texture. Place the matchsticks in a bowl, sprinkle with 1 tablespoon of salt and 1 tablespoon of sugar, and toss. Leave for 15-20 minutes. The salt and sugar draw water out of the vegetables through osmosis — you will see liquid pooling in the bowl.\n\nAfter salting, the vegetables will have softened slightly and released a significant amount of water. Rinse them under cold water to remove the excess salt, then — this is essential — squeeze them firmly with your hands to remove as much water as possible. Properly squeezed vegetables are the key to a crisp pickle that does not dilute the brine. The vegetables should feel pliable and slightly limp but still crunchy when bitten.`,
        tip: 'The squeeze after salting is the single most important step for crisp đồ chua. Vegetables that are not thoroughly squeezed release their remaining water into the brine, diluting it and causing the pickle to go soft and watery within a day or two. Squeeze firmly — the vegetables should give up a surprising amount of liquid. Well-squeezed đồ chua stays crisp for two weeks.',
    },
    {
        step: 3,
        title: 'The Brine — The Sweet-Sour Balance',
        content: `The brine for đồ chua is a simple balance of vinegar, sugar, water, and salt. The defining characteristic is that it is sweet-sour, not purely sour — the sugar balances the vinegar to produce a pickle that is bright and tangy but also rounded and pleasant, never harsh.\n\nThe standard brine ratio:\n\n250ml warm water\n250ml rice vinegar (or white vinegar)\n100g sugar\n1 tsp salt\n\nThis 1:1 ratio of water to vinegar, with sugar at roughly 40% of the liquid volume, produces the classic Vietnamese sweet-sour balance. Adjust to taste: more sugar for a sweeter Southern-style pickle, more vinegar for a sharper, more sour result.\n\nMixing: combine the warm water, sugar, and salt, and stir until the sugar and salt are completely dissolved. The warm water dissolves the sugar quickly; do not use hot water, which would partially cook the vegetables when added. Once the sugar is dissolved and the liquid has cooled to room temperature, add the vinegar. Adding the vinegar after the liquid has cooled preserves its bright, fresh acidity — vinegar added to hot liquid loses some of its sharpness.\n\nVinegar choice: rice vinegar is the traditional choice — milder and slightly sweeter than white vinegar, producing a gentler pickle. White vinegar is sharper and more aggressive; if using it, you may want slightly more sugar to balance. Avoid dark vinegars (balsamic, black vinegar) — they change the colour and flavour away from the bright, clean profile đồ chua requires.\n\nThe brine should taste assertively sweet-sour when you taste it on its own — strong enough that it will season the vegetables properly once they are submerged. A bland brine produces a bland pickle.`,
        tip: null,
    },
    {
        step: 4,
        title: 'Pickling — Assembly and Timing',
        content: `Pack the squeezed, drained vegetables into a clean glass jar. Glass is strongly preferred over plastic — the vinegar and the vegetable pigments can stain plastic, and glass does not retain odours between batches. Pack the vegetables fairly tightly but not so densely that the brine cannot circulate around them.\n\nPour the room-temperature brine over the vegetables until they are completely submerged. The vegetables must be fully covered by the brine — any vegetable sticking up above the liquid will not pickle properly and may spoil. If you run short of brine, top up with a little more vinegar-water mixture in the same proportions.\n\nSeal the jar and leave at room temperature for the first hour or two to begin the pickling, then refrigerate.\n\nTiming — when is it ready:\n\nAfter 1 hour: lightly pickled, still quite raw-tasting. Usable in a pinch but not fully developed.\nAfter 3-4 hours: the minimum for good đồ chua — the vegetables have absorbed the sweet-sour brine and developed the characteristic flavour. This is when it is ready to use.\nAfter 24 hours: fully developed and at its best — the flavour has fully penetrated the vegetables and the balance has settled.\nAfter 1 week: still excellent, perhaps slightly more sour as the pickling continues.\n\nFor immediate needs, đồ chua made in the morning is ready for a bánh mì at lunch. For best results, make it the day before you need it.\n\nThe vegetables will change colour slightly as they pickle — the daikon becomes slightly translucent and the carrot's orange may leach faintly into the brine. This is normal and indicates the pickling is working.`,
        tip: 'Make đồ chua the day before you need it for the best flavour, but keep a jar going continuously in the refrigerator. Because it keeps for two weeks and improves over the first day, having a jar always available means a bánh mì, a com tam plate, or a noodle bowl is always one ingredient closer to complete. Refill the jar before it runs out so there is always a batch at the ideal age.',
    },
    {
        step: 5,
        title: 'Storage and Keeping It Crisp',
        content: `Đồ chua keeps in its brine in a sealed glass jar in the refrigerator for up to 2 weeks. Always keep the vegetables submerged in the brine — vegetables exposed above the brine line dry out and can spoil.\n\nThe texture over time: properly made đồ chua (with the vegetables well-squeezed before pickling) stays crisp for the full two weeks. The crispness gradually softens after that, and while still safe to eat, the pickle loses the crunch that is its defining quality. For the best texture, use within the first week to ten days.\n\nKeeping the brine clean: always use clean utensils to remove đồ chua from the jar — never fingers, and never a utensil that has touched other food. Introducing contaminants into the brine shortens its life and can cause spoilage. A dedicated clean fork or chopsticks kept for the đồ chua jar is the practical solution.\n\nSigns it has gone off: đồ chua that has spoiled will smell off (beyond the normal vinegar tang), develop a slimy texture, or show cloudiness or mould in the brine. Properly made and stored đồ chua rarely spoils within two weeks, but if any of these signs appear, discard it.\n\nReusing the brine: the leftover brine after the vegetables are eaten can be reused once for a fresh batch of vegetables, though it will be slightly weaker — add a splash of fresh vinegar and a teaspoon of sugar to refresh it. After one reuse, discard the brine and make fresh — repeated reuse weakens the brine and increases the risk of spoilage.\n\nFreezing: đồ chua does not freeze well — the vegetables become mushy when thawed. It is a fresh pickle meant to be made in small batches and eaten within two weeks, not preserved long-term.`,
        tip: 'Label the jar with the date you made it. With a continuously refilled đồ chua jar, it is easy to lose track of how old a batch is. A small piece of tape with the date ensures you use it within the optimal window and know when to make a fresh batch. This simple habit guarantees you always have crisp, fresh đồ chua rather than a forgotten softening jar at the back of the refrigerator.',
    },
    {
        step: 6,
        title: 'How to Use Đồ Chua and Variations',
        content: `Bánh mì: the essential application. A generous handful of đồ chua inside the baguette provides the bright, crunchy, sour element that balances the rich pâté, the fatty cold cuts or grilled meat, and the mayonnaise. A bánh mì without đồ chua is missing its central balancing component.\n\nCom tam (broken rice): a small mound of đồ chua alongside the grilled pork, providing acidic contrast to the rich, caramelised meat and the scallion-oiled rice.\n\nBún thịt nướng (grilled pork noodle bowl): đồ chua is layered into the bowl with the noodles, herbs, and grilled pork, contributing crunch and acidity that the fish-sauce dressing complements.\n\nAlongside grilled and fried dishes: đồ chua serves as a fresh, palate-cleansing accompaniment to any rich grilled or fried Vietnamese dish — grilled pork, fried spring rolls, grilled fish.\n\nWith braised dishes: a side of đồ chua cuts the richness of a heavy kho braise, providing the acidic relief that makes the rich dish more balanced and easier to eat in quantity.\n\nVariations:\n\nĐồ chua with green papaya: substitute or add julienned green papaya for a different texture and a more neutral flavour. Common in some Southern Vietnamese preparations.\n\nĐồ chua with chilli and garlic: add sliced fresh chilli and a clove of sliced garlic to the brine for a spicier, more aromatic pickle.\n\nĐồ chua with kohlrabi (su hào): kohlrabi can replace some of the daikon for a firmer, slightly sweeter pickle — common in Northern Vietnamese versions.\n\nQuick đồ chua for immediate use: for a very fast version, toss the salted-and-squeezed vegetables directly with vinegar, sugar, and salt without a separate brine, and use within 30 minutes. Less developed in flavour but functional when there is no time to pickle properly.`,
        tip: 'Make a larger batch of đồ chua whenever you make bánh mì — the active work is the same for a small or large batch, and the pickle keeps for two weeks. A well-stocked đồ chua jar means that for the next two weeks, every bánh mì, com tam, and noodle bowl has its essential bright, crunchy, acidic component ready without any additional effort.',
    },
];

const RELATED = [
    { title: 'Bánh Mì', href: '/recipes/banh-mi', time: '30 min' },
    { title: 'Com Tam Saigon', href: '/recipes/com-tam', time: '45 min' },
    { title: 'How to Make Vietnamese Pickled Mustard Greens (Dưa Cải)', href: '/how-to/dua-cai', time: '9 min read' },
];

export default function DoChuaGuide() {
    return (
        <div style={{ minHeight: '100vh', background: '#FAFAF7', paddingTop: 88, fontFamily: "'DM Sans', sans-serif" }}>

            {/* Breadcrumb */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '24px 24px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(75,46,26,0.45)' }}>
                    <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                    <span>/</span>
                    <Link href="/how-to" style={{ color: 'inherit', textDecoration: 'none' }}>How To</Link>
                    <span>/</span>
                    <span style={{ color: '#059669' }}>Pickled Daikon & Carrot (Đồ Chua)</span>
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
                    How to Make Vietnamese Pickled Daikon & Carrot (Đồ Chua)
                </h1>

                <p style={{ fontSize: 17, color: 'rgba(75,46,26,0.6)', lineHeight: 1.75, marginBottom: 0 }}>
                    Salt, squeeze, sweet-sour brine — the quick pickle that gives bánh mì its crunch, balances com tam and noodle bowls, and stays crisp for two weeks in the refrigerator.
                </p>

                <div style={{ height: 1, background: 'rgba(75,46,26,0.08)', margin: '32px 0' }} />

                <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                    {[
                        { label: 'Skill Level', value: 'Easy' },
                        { label: 'Active Time', value: '15 minutes' },
                        { label: 'Ready In', value: '3–4 hours' },
                        { label: 'Keeps For', value: '2 weeks refrigerated' },
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
                        Recipes that use đồ chua
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