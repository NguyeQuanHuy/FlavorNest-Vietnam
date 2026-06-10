'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const SECTIONS = [
    {
        step: 1,
        title: 'What Kho Is and How It Differs From Western Braising',
        content: `Kho — the Vietnamese braising method — is one of the most fundamental cooking techniques in the cuisine, and one of the most misunderstood by cooks approaching it from a Western background. It is not a braise in the French sense: it does not begin with searing, it does not use stock, and it does not produce a thin jus that is then reduced separately. Kho is a single-vessel, continuous-reduction method where the protein and the sauce cook together from beginning to end, with the sauce reducing progressively around the protein until it becomes a thick, concentrated glaze that clings to every surface.\n\nThe word kho translates roughly as "to braise dry" — an accurate description of the endpoint. A properly finished kho dish has almost no free liquid in the pot. The sauce has reduced to a coating: dark, syrupy, and intensely flavoured. The protein — pork belly, fish, chicken, eggs, tofu — has absorbed the sauce throughout its entire depth during the long, slow reduction, carrying the flavour all the way through rather than wearing it only on the surface.\n\nThis is why kho dishes taste different from Western braises even when made with similar ingredients. The progressive reduction concentrates the flavours of coconut water, fish sauce, and caramel into the protein itself rather than leaving them in a surrounding liquid that is served separately. There is no sauce to spoon over; the sauce has become the food.`,
        tip: null,
    },
    {
        step: 2,
        title: 'The Four Flavour Components of Every Kho',
        content: `Every Vietnamese kho dish is built on four flavour components in varying proportions. Understanding these components allows you to apply the kho method to any protein rather than following a single fixed recipe.\n\nSweet: coconut water is the primary sweetener in most Southern kho dishes — light, slightly floral, with a natural sugar that caramelises beautifully during reduction. Plain water with sugar can substitute, but the flavour is simpler. Palm sugar or white sugar is added in small amounts alongside to deepen sweetness.\n\nSalty: fish sauce is the salt in Vietnamese kho. Its role is dual — seasoning and umami. The quality of the fish sauce determines the quality of the finished dish more directly than any other ingredient. Use the best available: Phu Quoc 40N or equivalent. Soy sauce substitutes the fish sauce in vegetarian versions.\n\nBitter-sweet depth: nuoc mau — Vietnamese dark caramel — provides colour and a controlled bitterness that prevents the dish from tasting simply sweet. It is the ingredient that gives kho its characteristic mahogany colour and the faint bittersweet note that balances the coconut water sweetness. Without it, the sauce is pale and one-dimensional.\n\nAromatic: garlic and shallots fried in oil at the start of cooking provide the aromatic base that carries through the entire reduction. Additional aromatics — ginger for fish kho, lemongrass for pork kho, chilli for heat — are added depending on the protein and regional tradition.`,
        tip: 'Taste all four components before combining them. Fish sauce, coconut water, sugar, and nuoc mau each have distinct flavour profiles that are easy to adjust individually before the reduction begins. Adjusting the balance after 45 minutes of braising is much harder than getting it right at the start.',
    },
    {
        step: 3,
        title: 'The Universal Kho Ratio',
        content: `The following ratio produces a balanced kho braising liquid for 500–600g of any protein. It is a starting point — adjust based on the sweetness of your coconut water and the saltiness of your fish sauce.\n\nFor 500g protein:\n\n300ml coconut water (canned or fresh young coconut)\n3 tbsp fish sauce\n2 tbsp nuoc mau (Vietnamese dark caramel)\n1 tsp sugar\n3 cloves garlic, minced\n2 shallots, sliced\n1.5 tbsp neutral oil\nBlack pepper to taste\n\nThis ratio produces a sauce that is dark amber, balanced between sweet and savoury, with a slight bitterness from the nuoc mau that rounds out during reduction.\n\nAdjustments by protein type:\n\nPork belly (thit kho tau): increase coconut water to 400ml — the longer cooking time (60+ minutes) requires more liquid to sustain the reduction. Add 2 hard-boiled eggs in the last 20 minutes.\n\nFish (ca kho to): reduce coconut water to 200ml and add 1 tbsp caramel. Fish kho is drier and more intensely seasoned than pork kho — less liquid, shorter cooking time (30–35 minutes).\n\nChicken (ga kho gung): replace coconut water with plain water and increase sugar to 1.5 tsp. Add 2 tbsp fresh ginger, minced. Chicken absorbs flavour faster than pork — cooking time is 25–30 minutes.\n\nTofu (dau phu kho): use firm tofu, pan-fried golden before braising. Reduce fish sauce to 2 tbsp and replace remaining salt with 1 tbsp soy sauce for a cleaner flavour. Cooking time 20 minutes.`,
        tip: null,
    },
    {
        step: 4,
        title: 'The Cooking Sequence — Five Steps That Never Change',
        content: `Regardless of protein, every Vietnamese kho follows the same five-step sequence. This sequence is not arbitrary — each step builds on the previous one in a way that produces flavour complexity the steps cannot produce individually.\n\nStep one — fry the aromatics: heat oil in a heavy pot or clay pot over medium heat. Add shallots and cook 2 minutes until golden. Add garlic and stir 1 minute until fragrant. The aromatic base built here infuses the entire dish.\n\nStep two — coat the protein with caramel: add the nuoc mau to the aromatics and stir for 30 seconds. Add the protein and turn continuously for 2 minutes until every surface is coated with the dark caramel. This coating step creates a flavour layer directly on the protein that survives the entire reduction.\n\nStep three — add fish sauce and sugar: add fish sauce and sugar, stir to distribute evenly with the caramel coating.\n\nStep four — add coconut water and bring to a boil: pour in the coconut water. The liquid should just cover or nearly cover the protein. Bring to a boil, then reduce to the gentlest possible simmer — the surface should barely tremble. Cover and cook for the time appropriate to the protein.\n\nStep five — uncover and reduce: remove the lid for the final 15–20 minutes. The sauce will reduce progressively from a thin liquid to a thickened glaze. Turn the protein gently every 5 minutes. The dish is finished when the sauce is thick, dark, and coats the protein in a glossy film with very little free liquid remaining in the pot.`,
        tip: 'The covered and uncovered phases serve different functions. The covered phase cooks the protein through gently in a humid environment. The uncovered phase concentrates the sauce. Never combine them by leaving the lid off throughout — the protein will dry out before the sauce reduces correctly.',
    },
    {
        step: 5,
        title: 'Heat Management — The Most Important Variable',
        content: `Kho is destroyed by incorrect heat. Too high and the sauce burns before the protein is cooked through — the sugars in the coconut water and nuoc mau carbonise at temperatures above 180°C and the bitter, acrid flavour of burnt caramel permeates the dish irreversibly. Too low and the sauce never reduces — after an hour of gentle bubbling the liquid is still thin and the protein has not developed the lacquered surface that defines a properly made kho.\n\nThe correct heat for the covered phase is the absolute lowest setting your burner can produce — a setting where the surface of the liquid shows a single occasional bubble every few seconds rather than continuous simmering. Vietnamese clay pots are traditionally used for kho because their thickness and poor heat conductivity naturally prevents overheating; a thin stainless steel pot on a powerful burner requires more active management.\n\nThe correct heat for the uncovered reduction phase is slightly higher — medium-low — enough to drive evaporation but not enough to scorch the thickening sauce on the bottom of the pot. Stir the sauce off the bottom every 3–4 minutes during this phase. As the sauce approaches its final concentration it becomes vulnerable to burning in the last 5 minutes — reduce heat further and stir more frequently.\n\nSigns the heat is too high: the sauce around the edges of the pot is darker than the sauce in the centre; the bottom of the pot shows brown deposits that are not dissolving into the sauce; the sauce smells of burnt sugar rather than caramelised sugar.\n\nSigns the heat is too low: after 45 minutes the sauce is still thin and watery; the protein looks pale and poached rather than beginning to take on colour from the sauce.`,
        tip: 'If the sauce reduces too fast during the covered phase and is already thick before the protein is cooked through, add 50ml of warm coconut water and continue. Cold liquid hitting a hot pot causes a violent reaction and can cause the caramel to seize. Always add warm liquid.',
    },
    {
        step: 6,
        title: 'Finishing, Serving, and the Second-Day Rule',
        content: `A kho dish is finished when the sauce coats the back of a spoon thickly and the protein releases from the pot bottom cleanly without sticking. The surface of the protein should be mahogany-dark and glistening, and the sauce remaining in the pot should be a small amount of concentrated, syrupy liquid — not a pool of thin sauce and not a completely dry, blackened pot.\n\nSeason at the end, not throughout. Taste the sauce at the finishing stage — the reduction has concentrated all the seasoning, so what tasted balanced at the start of cooking will now taste more intense. If it is too salty, add a small amount of coconut water and reduce briefly. If it is too sweet, add 0.5 tsp fish sauce. If it is flat and lacks depth, add 1 tsp nuoc mau.\n\nServing: kho is always served over plain steamed white rice — the concentrated sauce is designed to be diluted and balanced by plain rice at the table. The dish is too intense to eat alone. Accompaniments: sliced cucumber (essential — the cool, neutral crunch contrasts the rich, sweet-salty sauce), and canh (a clear vegetable soup) to balance the richness of the kho.\n\nThe second-day rule: kho dishes taste significantly better on the second day. The protein continues to absorb the sauce as it cools and rests, and the flavours meld overnight into something more cohesive and complex than the freshly finished dish. This is not a coincidence — it is why Vietnamese home cooks routinely make kho the day before a meal. Reheat gently over low heat with 2 tbsp water or coconut water to loosen the sauce, which will have thickened and partially set when cold.`,
        tip: 'Make kho in a clay pot whenever possible. The porous clay absorbs heat slowly and releases it evenly, preventing the hot spots that burn the sauce in thin metal pots. Clay also imparts a very faint mineral note to the finished dish that Vietnamese cooks consider part of the authentic flavour of ca kho to and thit kho tau.',
    },
];

const RELATED = [
    { title: 'Thit Kho Tau (Caramelised Pork Belly)', href: '/recipes/thit-kho-tau', time: '1 hr 30 min' },
    { title: 'Ca Kho To (Clay Pot Caramelised Fish)', href: '/recipes/ca-kho-to', time: '45 min' },
    { title: 'How to Make Vietnamese Caramel (Nuoc Mau)', href: '/how-to/nuoc-mau', time: '9 min read' },
    { title: 'How to Make Vietnamese Coconut Caramel Braise Base', href: '/how-to/coconut-caramel-braise', time: '10 min read' },
];

export default function KhoBraiseGuide() {
    return (
        <div style={{ minHeight: '100vh', background: '#FAFAF7', paddingTop: 88, fontFamily: "'DM Sans', sans-serif" }}>

            {/* Breadcrumb */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '24px 24px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(75,46,26,0.45)' }}>
                    <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                    <span>/</span>
                    <Link href="/how-to" style={{ color: 'inherit', textDecoration: 'none' }}>How To</Link>
                    <span>/</span>
                    <span style={{ color: '#D97706' }}>Braise Vietnamese-Style (Kho)</span>
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
                    How to Braise Vietnamese-Style (Kho)
                </h1>

                <p style={{ fontSize: 17, color: 'rgba(75,46,26,0.6)', lineHeight: 1.75, marginBottom: 0 }}>
                    Coconut water, fish sauce, dark caramel — the four flavour components, the five-step sequence, and the heat management that produces the mahogany-glazed kho that every Vietnamese home cook knows.
                </p>

                <div style={{ height: 1, background: 'rgba(75,46,26,0.08)', margin: '32px 0' }} />

                <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                    {[
                        { label: 'Skill Level', value: 'Intermediate' },
                        { label: 'Active Time', value: '20 minutes' },
                        { label: 'Braise Time', value: '30 min – 1.5 hrs' },
                        { label: 'Applies To', value: 'Pork, Fish, Chicken, Tofu' },
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
                        Recipes and guides that use the kho method
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