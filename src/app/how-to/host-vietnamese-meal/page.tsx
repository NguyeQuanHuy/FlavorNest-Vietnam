'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const SECTIONS = [
    {
        step: 1,
        title: 'The Structure of a Vietnamese Home Meal',
        content: `A Vietnamese home meal — bữa cơm gia đình — is not structured like a Western dinner. There are no courses. There is no single main dish that the meal revolves around. Instead, the meal is a collection of dishes presented simultaneously, shared from the centre of the table, and eaten with rice as the constant anchor. Understanding this structure is the foundation of hosting a Vietnamese meal that feels authentic rather than like a Western dinner with Vietnamese dishes.\n\nThe canonical structure of a Vietnamese family meal has four components, each playing a specific role:\n\nCơm (rice): the foundation. Plain steamed white rice, present at every meal, eaten throughout. Everything else is, in a sense, an accompaniment to the rice — the Vietnamese phrase for the non-rice dishes, "đồ ăn," literally translates as "things to eat with rice."\n\nMón mặn (the salty/savoury main dishes): one or two protein dishes — a braise (kho), a stir-fry (xào), a grilled or fried dish. These are the most intensely flavoured components, eaten in small amounts with large amounts of rice.\n\nMón canh (the soup): a clear, light soup served alongside, not as a separate course. It refreshes the palate between bites of the richer savoury dishes and provides liquid to the meal. Almost every Vietnamese home meal includes a canh.\n\nMón rau (the vegetable): a simple vegetable dish — stir-fried greens, boiled vegetables with a dipping sauce, or pickled vegetables. Provides freshness and balance.\n\nThis four-part structure — rice, savoury, soup, vegetable — is the template. A simple meal has one dish in each category. A feast has several, but the structure remains.`,
        tip: null,
    },
    {
        step: 2,
        title: 'Planning the Menu — Balance Across the Five Flavours and the Cooking Methods',
        content: `A well-planned Vietnamese meal balances not just flavours but cooking methods and textures. The goal is variety across the table so that each dish provides a contrast to the others, and no two dishes compete for the same role.\n\nBalance the cooking methods: a meal where every dish is fried is heavy and monotonous. The ideal spread includes a braise (rich, deep, sauce-heavy), a stir-fry (light, fresh, quick), a soup (clear, refreshing), and a fresh or pickled element (raw, crunchy, acidic). Each cooking method produces a different texture and intensity, and the contrast between them is what makes a Vietnamese meal satisfying rather than one-note.\n\nBalance the proteins: do not serve three pork dishes. A balanced meal might pair a pork braise with a fish or seafood dish, or a chicken stir-fry with a tofu dish. Variety in protein keeps the meal interesting and reflects the Vietnamese principle of variety within a single meal.\n\nBalance the intensity: one or two dishes should be intensely flavoured (a kho, a strongly seasoned grilled dish) and the others should be lighter (the canh, the simple stir-fried vegetable). A meal of all intensely flavoured dishes overwhelms the palate; a meal of all light dishes feels insubstantial. The contrast between intense and light is essential.\n\nA simple three-dish home meal (serves 4):\nThịt kho tàu (caramelised pork belly) — the rich savoury anchor\nCanh chua (sour soup) or a simple clear vegetable soup — the refreshing element\nRau muống xào tỏi (stir-fried morning glory with garlic) — the fresh vegetable\nPlus rice and a small dish of nuoc cham or fish sauce with chilli.\n\nThis combination covers all five flavours, three cooking methods, and provides the rice-savoury-soup-vegetable structure in its simplest complete form.`,
        tip: 'Plan the meal around one make-ahead dish and the rest quick. A kho braise tastes better the next day and can be made entirely in advance. With the braise done, the remaining dishes — a quick stir-fry, a fast soup — take 20 minutes total. This is how Vietnamese home cooks routinely produce a multi-dish meal on a weeknight without spending hours at the stove.',
    },
    {
        step: 3,
        title: 'Setting the Table — The Vietnamese Way',
        content: `The Vietnamese table is arranged for sharing. Unlike a Western place setting where each diner has their own portion, the Vietnamese table places all the shared dishes in the centre within reach of everyone, with each diner having only their own rice bowl, chopsticks, and a small dipping dish.\n\nEach place setting consists of: a rice bowl (bát/chén), a pair of chopsticks (đũa), a soup spoon (muỗng/thìa) — typically the flat-bottomed ceramic Asian spoon — and a small dipping dish for individual sauce.\n\nThe shared dishes are placed in the centre of the table on a shared serving plate or in the cooking pot itself. A communal serving spoon or a pair of communal chopsticks (đũa cả) should be provided for each shared dish — Vietnamese etiquette increasingly favours serving spoons over diners using their own chopsticks to take from shared plates, particularly since the pandemic.\n\nThe rice is served from a communal rice pot or rice cooker, often by the youngest person at the table or the host, who fills each person's bowl. The first bowl of rice is traditionally offered to the eldest person at the table as a gesture of respect.\n\nThe canh (soup) is placed in a large communal bowl with a ladle, and diners serve themselves small amounts into their own bowls throughout the meal.\n\nChopstick etiquette: never stand chopsticks upright in a bowl of rice — this resembles incense sticks at a funeral and is considered deeply inauspicious. Rest chopsticks across the top of the rice bowl or on a chopstick rest when not in use. Do not point with chopsticks or use them to gesture.\n\nThe overall arrangement should allow every diner to reach every shared dish without standing. For larger tables, dishes are duplicated or a lazy Susan is used so that all dishes are accessible to all diners.`,
        tip: 'Provide a separate small dish of nuoc cham or fish sauce with sliced chilli for each diner rather than one communal sauce dish. Vietnamese diners customise their dipping sauce — adding more chilli, more lime — to their personal taste, and individual dishes allow this without affecting others. It also reflects the Vietnamese attention to individual preference within a shared meal.',
    },
    {
        step: 4,
        title: 'Serving Order and Timing',
        content: `Because a Vietnamese meal is not coursed, the timing challenge is different from a Western dinner. The goal is to have all dishes ready at approximately the same time and at the correct temperature, then to bring them to the table together.\n\nDishes that hold well, made first: braises (kho) improve with time and can be made hours or a day ahead. Pickled vegetables are made in advance. These are ready before the meal begins and simply need reheating (for the braise) or plating (for the pickles).\n\nDishes made just before serving: stir-fries must be made at the last minute — a stir-fry that sits for 15 minutes loses its fresh texture and the vegetables become limp. The soup can be made 30 minutes ahead and kept warm. Grilled and fried dishes are best straight from the heat.\n\nThe practical sequence for a host: make the braise and pickles in advance. Prepare all the ingredients for the stir-fry and soup (washing, cutting, measuring) before guests arrive — this is the mise en place that makes last-minute cooking fast. When guests are seated, make the soup first (it holds), then the stir-fry last (it does not). Bring everything to the table together.\n\nRice timing: start the rice cooker so the rice finishes 10 minutes before the meal. Rice held warm in the cooker for up to an hour remains good; rice that finishes too early and sits for two hours becomes slightly dry and clumped.\n\nServing temperature: the braise should be hot, the soup hot, the stir-fry hot from the wok, and the pickles and fresh vegetables at room temperature or cool. The contrast between the hot cooked dishes and the cool fresh elements is part of the meal's design.`,
        tip: null,
    },
    {
        step: 5,
        title: 'Eating Etiquette and Hosting Customs',
        content: `Vietnamese meal etiquette reflects the cultural values of respect for elders, communal sharing, and hospitality. Understanding these customs allows a host to create a meal that feels authentically Vietnamese, and allows a guest to participate respectfully.\n\nThe eldest eats first: traditionally, no one begins eating until the eldest person at the table has started. Younger diners may also invite elders to eat with the phrase "mời ông/bà/cô/chú ăn cơm" (please eat, [respectful term for the person]) before beginning. This invitation, extended around the table by the younger members to the elder ones, is a fundamental gesture of Vietnamese mealtime respect.\n\nServing others before yourself: a host and the younger people at the table watch the shared dishes and offer choice pieces to elders and guests. Placing a good piece of fish or meat into a guest's or elder's bowl is a gesture of care, not an imposition. As a host, keeping guests' rice bowls filled and offering them the best portions is the core of Vietnamese hospitality.\n\nTake small amounts, return often: rather than loading the bowl with a large portion of everything, Vietnamese diners take small amounts of one or two dishes, eat them with rice, and return to the shared plates for more. This keeps the food fresh on the plate and the meal interactive throughout.\n\nThe rice bowl is held: the rice bowl is lifted close to the mouth while eating, held in the non-dominant hand, with rice pushed into the mouth with chopsticks. Eating with the bowl left on the table and reaching down to it is considered slightly lazy in traditional etiquette.\n\nFinishing: it is polite to finish the rice in your bowl — leaving rice is considered wasteful. When finished, rest the chopsticks across the top of the bowl. As a host, do not rush to clear dishes while anyone is still eating.\n\nThe host eats last and least: traditional Vietnamese hosts prioritise their guests throughout the meal, ensuring everyone is well-fed before attending to their own plate. This is a gesture of hospitality, not self-denial.`,
        tip: 'As a host, prepare slightly more food than you think you need. In Vietnamese culture, running out of food is a significant hosting failure — abundance is a sign of generosity and care. Leftovers are entirely acceptable and often sent home with guests; an empty pot before everyone is full is not.',
    },
    {
        step: 6,
        title: 'Hosting for Non-Vietnamese Guests and Special Occasions',
        content: `Hosting a Vietnamese meal for guests unfamiliar with the cuisine requires a few accommodations that preserve authenticity while making the experience accessible.\n\nExplain the structure briefly: a short explanation that the meal is shared, that rice is eaten throughout, and that diners take small amounts and return for more prevents the common guest error of treating one dish as a personal main course. This explanation takes thirty seconds and transforms the meal for guests who would otherwise be confused.\n\nDemonstrate the assembly: for interactive dishes — goi cuon that guests wrap themselves, or a bun bowl that needs dressing — demonstrate the first one. Show how to wrap the spring roll, how much sauce to use, how to dress the noodle bowl. Guests who see it done once participate confidently.\n\nManage the chilli: serve chilli on the side rather than cooking it into dishes, so that guests with lower heat tolerance can eat comfortably while those who want heat can add it. This is also the authentic Vietnamese approach — heat is customised at the table.\n\nFor special occasions and feasts: a Vietnamese celebration meal (Tết, weddings, death anniversaries) expands the four-part structure into a larger spread — multiple savoury dishes, a more elaborate soup, special-occasion dishes like nem (spring rolls), bánh chưng (for Tết), and a whole steamed or roasted protein as a centrepiece. The structure remains the same; the scale increases. A celebration meal might have six to eight shared dishes plus rice, but they still divide into savoury mains, soup, vegetables, and special items.\n\nThe lẩu (hot pot) option: for a relaxed, interactive gathering, a Vietnamese lẩu — a simmering pot of broth at the centre of the table into which diners cook their own thinly sliced meat, seafood, vegetables, and noodles — is the most social way to host. It requires minimal last-minute cooking from the host (the preparation is all in advance — slicing, arranging platters), the cooking happens at the table over conversation, and it naturally embodies the communal, shared nature of Vietnamese dining.`,
        tip: 'For a first Vietnamese meal hosted for non-Vietnamese guests, consider lẩu (hot pot) as the format. It removes the timing pressure of coordinating multiple dishes, it is naturally interactive and social, it accommodates dietary restrictions easily (guests cook what they want from shared platters), and the communal cooking at the table creates exactly the warm, shared atmosphere that defines Vietnamese hospitality.',
    },
];

const RELATED = [
    { title: 'Thit Kho Tau (Caramelised Pork Belly)', href: '/recipes/thit-kho-tau', time: '1 hr 30 min' },
    { title: 'How to Order Vietnamese Food Like a Local', href: '/how-to/order-vietnamese-food', time: '11 min read' },
    { title: 'How to Braise Vietnamese-Style (Kho)', href: '/how-to/kho-braise', time: '11 min read' },
];

export default function HostVietnameseMealGuide() {
    return (
        <div style={{ minHeight: '100vh', background: '#FAFAF7', paddingTop: 88, fontFamily: "'DM Sans', sans-serif" }}>

            {/* Breadcrumb */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '24px 24px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(75,46,26,0.45)' }}>
                    <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                    <span>/</span>
                    <Link href="/how-to" style={{ color: 'inherit', textDecoration: 'none' }}>How To</Link>
                    <span>/</span>
                    <span style={{ color: '#D97706' }}>Host a Vietnamese Home Meal</span>
                </div>
            </div>

            {/* Hero */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '32px 24px 48px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                    <span style={{
                        fontSize: 10, fontWeight: 700, letterSpacing: '0.1em',
                        color: '#D97706', background: '#D9770615',
                        padding: '4px 12px', borderRadius: 100, textTransform: 'uppercase',
                    }}>Food Culture</span>
                    <span style={{ fontSize: 12, color: 'rgba(75,46,26,0.4)' }}>⏱ 12 min read</span>
                </div>

                <h1 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                    fontWeight: 800, color: '#2D1A0E',
                    lineHeight: 1.15, marginBottom: 16,
                }}>
                    How to Host a Vietnamese Home Meal
                </h1>

                <p style={{ fontSize: 17, color: 'rgba(75,46,26,0.6)', lineHeight: 1.75, marginBottom: 0 }}>
                    Rice, savoury, soup, vegetable — the four-part structure, how to balance the menu, set the table, time the dishes, and host with the etiquette and generosity that defines a Vietnamese family meal.
                </p>

                <div style={{ height: 1, background: 'rgba(75,46,26,0.08)', margin: '32px 0' }} />

                <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                    {[
                        { label: 'Meal Structure', value: 'Rice + savoury + soup + veg' },
                        { label: 'Simplest Complete', value: '3 dishes + rice' },
                        { label: 'Key Custom', value: 'The eldest eats first' },
                        { label: 'Easiest Format', value: 'Lẩu (hot pot)' },
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
                        Related guides and recipes
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