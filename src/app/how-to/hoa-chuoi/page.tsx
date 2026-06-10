'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const SECTIONS = [
    {
        step: 1,
        title: 'What Banana Blossom Is and How Vietnamese Cooking Uses It',
        content: `Hoa chuoi — banana blossom, also called banana flower or banana heart — is the large, purple-red flower that hangs at the end of a banana bunch. It is not a fruit and it does not taste like banana. Raw, it has a firm, slightly astringent, mildly bitter flavour with a texture somewhere between artichoke heart and firm cabbage. Cooked, it becomes tender and absorbs surrounding flavours completely, functioning as a neutral, substantial base for sauces and broths.\n\nIn Vietnamese cooking, banana blossom appears in two primary forms. Shredded raw, it is the bulk ingredient in goi hoa chuoi — banana blossom salad — where it provides the crunch and volume that the herbs, protein, and dressing build on. Cooked, it appears in bun bo Hue as a recommended accompaniment — diners add raw shredded banana blossom to their bowl alongside bean sprouts and herbs — and in vegetarian dishes as a meat substitute where its dense, fibrous texture provides satisfying chew.\n\nInternationally, banana blossom has become well-known as a vegan pulled pork substitute, which is a reasonable application but a narrow one. In Vietnamese cooking it has been a vegetable in its own right for generations — not imitating anything, but valued for its own flavour, texture, and the way it absorbs dressing and broth.`,
        tip: null,
    },
    {
        step: 2,
        title: 'Choosing a Fresh Banana Blossom',
        content: `Fresh banana blossoms are available at Vietnamese and Southeast Asian grocery stores, typically sold whole. They range from small — the size of a large pear — to large — the size of a football — depending on the variety of banana plant.\n\nChoose a blossom that is deep purple-red to burgundy in colour, firm and tight with no loose or separating outer layers, and heavy for its size. The cut end at the stalk should look fresh — pale cream or light yellow, not brown or dried out. Avoid blossoms with outer layers that are yellowing, spotted, or pulling away from the body — these are past their prime and will have a stronger bitter flavour and a less pleasant texture.\n\nFor most Vietnamese recipes, a medium blossom (400–600g) is sufficient for 4 servings when shredded — the weight is deceptive because the outer layers are discarded and the inner core is what is used.\n\nCanned banana blossom: widely available in brine or water at Asian grocery stores. The texture is softer and the flavour is more neutral than fresh — suitable for cooked applications and as a vegan protein substitute but not ideal for raw salads where texture is the primary quality being sought. If using canned, drain thoroughly and press dry before use.`,
        tip: 'Buy banana blossom the day you plan to use it. Once cut, the exposed surfaces oxidise rapidly and turn brown within minutes. A whole uncut blossom keeps refrigerated for 2–3 days, but a cut one must be used immediately.',
    },
    {
        step: 3,
        title: 'Preparing the Acidulated Water',
        content: `Banana blossom oxidises quickly when cut — the exposed surfaces turn brown and grey within 2–3 minutes of contact with air, producing an unappealing colour and a slightly more bitter flavour. Acidulated water — water with lime juice or vinegar added — prevents this oxidation by lowering the pH around the cut surfaces.\n\nPrepare the acidulated water before beginning to cut. For a large bowl of water (2 litres): add the juice of 2 limes or 3 tbsp white vinegar. Stir to distribute. As each piece of banana blossom is cut, place it immediately into this water.\n\nThe ratio is not critical — the goal is a moderately acidic environment, not a pickling solution. A few tablespoons of acid in a large bowl of water is sufficient. The banana blossom can sit in this water for up to 30 minutes without any negative effect on texture or flavour; beyond this it begins to absorb the acidic liquid and taste slightly pickled.\n\nFor the final salad preparation, the acidulated water also serves as a brief soak that removes some of the raw bitterness from the shredded blossom — a 10-minute soak significantly mellows the astringency that some people find off-putting in raw banana blossom.`,
        tip: null,
    },
    {
        step: 4,
        title: 'Removing the Outer Layers and Florets',
        content: `Work over a large bowl of acidulated water. The banana blossom has two distinct structures that require different treatment: the tough outer bracts (the dark purple-red leaves) and the small florets that are nestled between each bract.\n\nOuter bracts: pull back and remove the outer 6–8 dark purple bracts — they are too tough and bitter to eat and are discarded. After removing these, the remaining bracts become progressively paler and more tender toward the centre. These inner bracts are what is used.\n\nFlorets: as you remove each outer bract, you will find a row of small pale florets attached to the base of the bract. These are edible but their texture is different — slightly waxy and firm with a small hard stamen in the centre. The stamen must be removed from each floret before eating — it is indigestible and has a strong bitter taste. Pull the stamen out with your fingernails or a small knife. This is tedious but necessary.\n\nFor large-volume restaurant preparation, florets are sometimes discarded entirely. For home cooking at smaller scale, keeping and preparing the florets is worth the effort — they add a pleasant textural variation to the finished salad.\n\nAs you work through the outer layers, you will reach a pale, almost white core. This is the heart of the blossom — the most tender, least bitter part, and the best for raw applications. Halve it and place immediately in the acidulated water.`,
        tip: 'Wear disposable gloves or rub your hands with lime juice before starting. The sap from banana blossom is sticky, dark, and stains skin and surfaces brown. It is difficult to remove once it has oxidised on skin — gloves are far more practical than attempting to clean stained hands afterward.',
    },
    {
        step: 5,
        title: 'Shredding for Salad — The Correct Technique',
        content: `Remove the pale inner bracts and the heart from the acidulated water. Working quickly, stack several bracts together and slice across them into thin shreds — 1–2mm wide — using a sharp knife. Place the shredded pieces back into the acidulated water immediately after cutting each batch.\n\nFor the heart: halve it lengthwise, then slice each half crosswise into thin half-moons, then shred the half-moons into thin strips. The heart is denser than the outer bracts and takes slightly more pressure to cut cleanly.\n\nThe goal is uniform thin shreds that will tangle with the herbs and dressing in the finished salad rather than remaining as distinct flat pieces. Shreds that are too thick are unpleasant in texture — fibrous and difficult to eat. Shreds that are too thin lose their crunch quickly once dressed.\n\nOnce all the shredding is done, drain the acidulated water and squeeze the shredded banana blossom firmly in your hands or in a clean cloth to remove as much liquid as possible. Excess moisture prevents the dressing from adhering and dilutes the flavour of the salad. The squeezed blossom should feel relatively dry and springy.\n\nFor the florets: add them whole to the salad after shredding the bracts and heart. Their different shape and texture add visual and textural interest.`,
        tip: 'Shred the banana blossom as close to serving time as possible, even after the acidulated water soak. Dressed banana blossom salad is best eaten within 20 minutes of assembly — after this, the shreds absorb the dressing, lose their crunch, and the salad becomes flat and wet.',
    },
    {
        step: 6,
        title: 'Cooking Banana Blossom and Storage',
        content: `For cooked applications — stir-fries, braises, soups — the shredded or sliced banana blossom does not need to be soaked as long in acidulated water. A brief rinse is sufficient since the cooking process will change the colour anyway.\n\nFor vegetarian bun bo Hue accompaniment: serve the shredded raw banana blossom in a separate plate alongside the soup, with bean sprouts and fresh herbs. Each diner adds it to their own bowl — it wilts slightly in the hot broth, taking on the lemongrass and shrimp paste flavour of the soup while retaining some texture.\n\nFor stir-fries (hoa chuoi xao): slice the inner bracts into larger pieces — 3–4cm. Stir-fry with garlic, fish sauce, and a small amount of sugar over high heat for 3–4 minutes until just tender. The texture should retain some firmness — overcooked banana blossom becomes completely soft and loses the quality that makes it interesting.\n\nFor vegan braised banana blossom: halve the heart and braise in coconut water, soy sauce, lemongrass, and chilli for 20–25 minutes until the core is tender throughout. The texture after long braising resembles braised jackfruit — dense, fibrous, and capable of absorbing a great deal of flavour.\n\nStorage: prepared raw shredded banana blossom in acidulated water keeps for up to 4 hours in the refrigerator, covered. Drain and squeeze dry immediately before serving. Uncut whole blossoms keep for 2–3 days refrigerated, wrapped loosely.`,
        tip: 'Add a thin layer of neutral oil to the surface of the acidulated water when storing prepared banana blossom. The oil creates a barrier that further slows oxidation and keeps the shredded blossom pale and fresh-looking for longer.',
    },
];

const RELATED = [
    { title: 'Bun Bo Hue (Hue Spicy Beef Noodle Soup)', href: '/recipes/hue-spicy-beef-noodle-soup', time: '3 hrs' },
    { title: 'Goi Ga Hanh Tay (Vietnamese Chicken Salad)', href: '/recipes/goi-ga-hanh-tay', time: '35 min' },
    { title: 'How to Properly Wash & Store Fresh Herbs', href: '/how-to/wash-store-fresh-herbs', time: '6 min read' },
];

export default function HoaChuoiGuide() {
    return (
        <div style={{ minHeight: '100vh', background: '#FAFAF7', paddingTop: 88, fontFamily: "'DM Sans', sans-serif" }}>

            {/* Breadcrumb */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '24px 24px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(75,46,26,0.45)' }}>
                    <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                    <span>/</span>
                    <Link href="/how-to" style={{ color: 'inherit', textDecoration: 'none' }}>How To</Link>
                    <span>/</span>
                    <span style={{ color: '#D97706' }}>Prepare Banana Blossom (Hoa Chuối)</span>
                </div>
            </div>

            {/* Hero */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '32px 24px 48px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                    <span style={{
                        fontSize: 10, fontWeight: 700, letterSpacing: '0.1em',
                        color: '#DC2626', background: '#DC262615',
                        padding: '4px 12px', borderRadius: 100, textTransform: 'uppercase',
                    }}>Essential Techniques</span>
                    <span style={{ fontSize: 12, color: 'rgba(75,46,26,0.4)' }}>⏱ 9 min read</span>
                </div>

                <h1 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                    fontWeight: 800, color: '#2D1A0E',
                    lineHeight: 1.15, marginBottom: 16,
                }}>
                    How to Prepare Banana Blossom (Hoa Chuối)
                </h1>

                <p style={{ fontSize: 17, color: 'rgba(75,46,26,0.6)', lineHeight: 1.75, marginBottom: 0 }}>
                    Acidulated water, gloves, and the right shredding technique — how to prepare the crunchy, slightly bitter blossom used in gỏi hoa chuối and bún bò Huế without it turning brown.
                </p>

                <div style={{ height: 1, background: 'rgba(75,46,26,0.08)', margin: '32px 0' }} />

                <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                    {[
                        { label: 'Skill Level', value: 'Easy' },
                        { label: 'Prep Time', value: '20 minutes' },
                        { label: 'Key Tool', value: 'Sharp knife, gloves' },
                        { label: 'Used In', value: 'Gỏi hoa chuối, Bún bò Huế' },
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
                        Recipes that use banana blossom
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
                                    onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#DC2626'; }}
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