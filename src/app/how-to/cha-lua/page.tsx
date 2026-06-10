'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const SECTIONS = [
    {
        step: 1,
        title: 'What Chả Lụa Is and Why the Texture Is Everything',
        content: `Cha lua — Vietnamese steamed pork paste, also called gio lua in the North — is one of the most technically demanding preparations in Vietnamese home cooking. It is a cylindrical log of emulsified pork, wrapped in banana leaf and steamed until set into a smooth, dense, slightly bouncy mass that slices cleanly and holds its shape. It appears on the com tam plate, inside banh mi, on the bun thit nuong bowl, and at every Vietnamese celebration table as a matter of course.\n\nThe texture is the entire point and the entire challenge. Cha lua is not meatloaf and it is not sausage. It is an emulsion — fat and protein suspended together in a continuous matrix through mechanical action and heat — producing a surface so smooth it reflects light and an interior so uniform it shows no grain. Achieving this texture at home requires understanding two things: the meat must be genuinely cold throughout the entire preparation, and the grinding must be long enough to fully develop the protein network that holds everything together.\n\nCut corners on either of these requirements and the result is a grainy, crumbly paste that falls apart when sliced — edible but not cha lua. Do both correctly and the result is indistinguishable from the best Vietnamese deli counter, produced in a home kitchen with a food processor and patience.`,
        tip: null,
    },
    {
        step: 2,
        title: 'Choosing and Preparing the Pork',
        content: `The correct cut is lean pork leg or pork loin — not belly, not shoulder. Fat content is controlled precisely in cha lua: too little and the emulsion is dry and tight; too much and it breaks during steaming, producing a greasy, grainy result. Lean leg with approximately 10–15% fat content is the target. If the meat looks very lean, add 20g of pork back fat per 500g of meat. If it looks marbled, trim visible fat before grinding.\n\nFreshness matters more for cha lua than for almost any other pork preparation. The protein structures that form the emulsion are most effective in freshly purchased meat. Meat that has been frozen and thawed has partially degraded proteins that produce a weaker emulsion and a softer, less bouncy final texture. Buy the meat fresh the day you plan to make it.\n\nPrepare the meat by trimming all sinew, silver skin, and connective tissue — these do not emulsify and will appear as tough white strands in the finished product. Cut into 3–4cm cubes. Place on a tray and freeze for 25–30 minutes until the surface is firm but the interior is not frozen solid. The meat should feel very cold and slightly stiff when squeezed — this is the correct temperature for grinding into an emulsion. Room temperature meat produces a paste that is too soft and cannot develop the correct protein network.`,
        tip: 'Place the food processor bowl and blade in the freezer for 20 minutes before grinding. Cold equipment is as important as cold meat — a warm bowl warms the paste during processing and the emulsion breaks before it fully develops.',
    },
    {
        step: 3,
        title: 'Seasoning — The Flavour Base',
        content: `Cha lua has a subtle, clean flavour that relies on precise seasoning — not dominant individual notes but a background savoury depth that does not distract from the texture.\n\nFor 500g of prepared lean pork:\n\n1.5 tsp fish sauce — the primary seasoning. Use a good quality Vietnamese fish sauce; the flavour will be present in every slice.\n1 tsp sugar — balances the salt and adds a faint sweetness characteristic of Southern cha lua.\n0.5 tsp white pepper — background warmth.\n0.5 tsp garlic powder — optional but standard in most recipes.\n1 tbsp potato starch or tapioca starch — helps bind the emulsion and contributes to the bouncy texture.\n1 tsp baking powder — the ingredient that creates the characteristic slightly spongy, bouncy interior. Do not omit or substitute.\n2 tbsp ice water — added during processing to control temperature and consistency.\n\nFor Northern gio lua, the seasoning is plainer — fish sauce, white pepper, and a small amount of sugar only. No garlic, no baking powder, resulting in a denser, firmer product with a more neutral flavour.\n\nMix the seasoning ingredients together before adding to the meat, not one by one. Even distribution of seasoning through the paste requires it to be premixed.`,
        tip: 'The baking powder is what separates authentic cha lua texture from a simple ground pork roll. It creates tiny air pockets during steaming that give the paste its characteristic slight bounce when pressed. Without it, the result is dense and tight — still edible but missing the defining textural quality.',
    },
    {
        step: 4,
        title: 'Processing — The Critical Stage',
        content: `Remove the chilled meat and cold food processor bowl from the freezer. Working quickly, add half the meat to the processor and process for 30 seconds until roughly ground. Add the remaining meat and the premixed seasoning. Process continuously for 3–4 minutes, scraping down the sides every 60 seconds.\n\nDuring processing, add the ice water one tablespoon at a time through the feed tube. The paste will transform visibly: it begins grainy and rough, becomes smoother and slightly tacky, and finally develops into a pale, almost smooth mass that pulls away from the sides of the bowl cleanly and leaves a faint sheen on the blade.\n\nThe correct endpoint: the paste is very smooth — no visible grain — slightly sticky, pale pink to off-white in colour, and cohesive enough to hold its shape when a ball is pressed between your palms. When a small piece is dropped into a bowl of cold water, it should float and hold its shape rather than dissolving.\n\nIf the paste feels warm during processing — more than slightly cool to the touch — stop immediately, transfer to a bowl, and refrigerate for 10 minutes before continuing. An overheated emulsion cannot be rescued once the fat has broken out of suspension.\n\nTotal processing time: 4–6 minutes of continuous running. Less than this and the protein network is underdeveloped. More is acceptable — the texture only improves with longer processing up to about 8 minutes.`,
        tip: 'Test the emulsion before wrapping by poaching a teaspoon of the paste in simmering water for 3 minutes. The cooked piece should be smooth, slightly bouncy, and hold together cleanly. If it crumbles or is grainy, process for another 2 minutes and test again.',
    },
    {
        step: 5,
        title: 'Wrapping and Steaming',
        content: `Traditional cha lua is wrapped in banana leaf — the leaf imparts a faint grassy, green fragrance to the surface of the paste and produces the characteristic pale green exterior. Banana leaves are available frozen at Vietnamese and Asian grocery stores. Thaw, wipe clean with a damp cloth, and briefly pass over an open flame or hot pan to make them pliable and prevent cracking when folded.\n\nIf banana leaf is unavailable, plastic wrap works functionally — the texture will be identical but the fragrance will be absent. Double-wrap tightly in plastic wrap, then in foil.\n\nTo wrap in banana leaf: lay two overlapping pieces of banana leaf on a clean surface, shiny side down. Place the paste along one edge in a log shape, leaving 4cm clear at each end. Roll tightly, fold in the ends, and tie firmly with kitchen twine or banana leaf strips at 3cm intervals. The roll should feel firm when squeezed — any looseness will allow the paste to shift during steaming and produce an uneven shape.\n\nFor a standard batch of 500g, form one log approximately 20cm long and 6cm in diameter, or two smaller logs.\n\nSteam over high heat for 45 minutes for a large log, 30 minutes for smaller ones. The cha lua is done when it feels firm throughout when pressed with a fingertip and an internal temperature probe reads 72°C. Remove from the steamer and press under a weight — a heavy pan or a book — while cooling. This compression produces the dense, smooth cross-section that cha lua is known for. Cool completely before unwrapping.`,
        tip: 'Weight the cha lua while it is still warm, not after it has cooled. The paste is still slightly pliable in the first 20 minutes after steaming and the compression shapes the final texture. A cha lua cooled without compression has a slightly open, porous interior rather than the characteristic dense, smooth cut surface.',
    },
    {
        step: 6,
        title: 'Storage and How to Use Cha Lua',
        content: `Cha lua keeps refrigerated in its banana leaf wrapping for 3–4 days. Slice only as needed — the cut surface begins to dry and oxidise after a few hours of exposure. Rewrap the uncut portion tightly after each use.\n\nFor longer storage, freeze the unsliced log for up to 2 months. Thaw overnight in the refrigerator and slice cold — frozen and thawed cha lua slices more cleanly than room temperature, and the texture is essentially unchanged.\n\nTo serve: slice into rounds 5–7mm thick using a sharp knife with a single clean stroke — a sawing motion tears the surface and produces ragged edges. The cut surface should be smooth, slightly glossy, and pale pink to cream in colour with no visible grain.\n\nIn com tam: 2–3 slices alongside the grilled pork and fried egg, eaten with the broken rice and fish sauce dressing.\n\nIn banh mi: thin slices layered with pate, cold cuts, pickled vegetables, and cucumber. The cha lua adds a smooth, dense contrast to the other components.\n\nIn bun thit nuong and bun bo hue: sliced into half-moons or thin strips, placed on top of the noodles and broth as a garnish-component.\n\nEaten directly with nuoc cham: sliced thin, dipped in fish sauce with fresh chilli and lime — one of the simplest and most satisfying ways to eat it.`,
        tip: 'Make a double batch when making cha lua — the preparation time is almost identical for one log or two, and having a spare log in the freezer means banh mi, com tam, and bun bowls are all 10 minutes away from completion at any time.',
    },
];

const RELATED = [
    { title: 'Com Tam Saigon', href: '/recipes/com-tam', time: '45 min' },
    { title: 'Banh Mi', href: '/recipes/banh-mi', time: '30 min' },
    { title: 'How to Render Pork Fat & Make Tóp Mỡ', href: '/how-to/render-pork-fat', time: '9 min read' },
];

export default function ChaLuaGuide() {
    return (
        <div style={{ minHeight: '100vh', background: '#FAFAF7', paddingTop: 88, fontFamily: "'DM Sans', sans-serif" }}>

            {/* Breadcrumb */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '24px 24px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(75,46,26,0.45)' }}>
                    <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                    <span>/</span>
                    <Link href="/how-to" style={{ color: 'inherit', textDecoration: 'none' }}>How To</Link>
                    <span>/</span>
                    <span style={{ color: '#D97706' }}>Vietnamese Pork Paste (Chả Lụa)</span>
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
                    <span style={{ fontSize: 12, color: 'rgba(75,46,26,0.4)' }}>⏱ 11 min read</span>
                </div>

                <h1 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                    fontWeight: 800, color: '#2D1A0E',
                    lineHeight: 1.15, marginBottom: 16,
                }}>
                    How to Make Vietnamese Pork Paste (Chả Lụa / Giò Lụa)
                </h1>

                <p style={{ fontSize: 17, color: 'rgba(75,46,26,0.6)', lineHeight: 1.75, marginBottom: 0 }}>
                    Cold meat, cold bowl, long processing — the emulsion technique behind the smooth, bouncy pork paste that appears in banh mi, com tam, and every Vietnamese celebration table.
                </p>

                <div style={{ height: 1, background: 'rgba(75,46,26,0.08)', margin: '32px 0' }} />

                <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                    {[
                        { label: 'Skill Level', value: 'Advanced' },
                        { label: 'Active Time', value: '30 minutes' },
                        { label: 'Total Time', value: '2 hours' },
                        { label: 'Key Tool', value: 'Food processor, steamer' },
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
                        Recipes that use chả lụa
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