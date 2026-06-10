'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const SECTIONS = [
    {
        step: 1,
        title: 'Why Vietnamese Food Outside Vietnam Is Often Not Vietnamese Food',
        content: `There is a version of Vietnamese food that exists outside Vietnam — in the pho shops of Berlin, the banh mi counters of London, the pho chains of California — and there is the actual thing. The gap between them ranges from acceptable to significant, and knowing how to navigate it determines whether a Vietnamese meal abroad is satisfying or disappointing.\n\nThe problem is not dishonesty. Most Vietnamese restaurants outside Vietnam are run by people who genuinely know Vietnamese food. The problem is adaptation: the ingredients are different (the specific varieties of herbs, the fish sauce brands, the rice paper quality), the customer base has different expectations (less funk, less sourness, more sweetness, more accessible heat levels), and the economics are different (fresh herbs at European prices are expensive in the quantities Vietnamese cooking actually requires them).\n\nThe result is food that resembles Vietnamese food but has been adjusted in ways that are difficult to articulate without reference to the original. The pho broth is slightly sweeter and less complex. The herbs plate arrives with iceberg lettuce instead of rau ram. The nuoc cham has been thinned and sweetened to the point where it no longer functions as a seasoning but as a mild condiment.\n\nThis guide is not about complaining about adaptation. It is about knowing what to look for, what to order, what to ask for, and — when the restaurant version does not deliver — how to supplement at the table to get closer to the experience the dish was intended to provide.`,
        tip: null,
    },
    {
        step: 2,
        title: 'How to Identify a Good Vietnamese Restaurant Abroad',
        content: `The signals that a Vietnamese restaurant outside Vietnam is likely to produce authentic food are consistent across countries and cities. None of them require you to speak Vietnamese or have insider knowledge.\n\nThe herbs plate is the single most reliable indicator. A restaurant that serves a real rau song — with actual rau ram (Vietnamese coriander), fresh mint, Thai basil, and bean sprouts alongside pho or bun — is a restaurant that has sourced authentic ingredients and cares about serving them correctly. A restaurant that serves iceberg lettuce with a few mint leaves has either not bothered or cannot source the correct herbs. Order pho and observe what arrives.\n\nThe fish sauce on the table or in the nuoc cham. Thin, sweet, pale nuoc cham has been adapted. Dark, assertive, genuinely sour nuoc cham that makes you blink slightly when you taste it directly — that is correctly made. Ask for extra fish sauce alongside and taste it — it should smell intensely of anchovy and sea, not faintly of salt water.\n\nThe presence of hoisin sauce and Sriracha on the table alongside pho is a Americanised convention that does not exist in Vietnam. Its presence is not disqualifying but it signals a restaurant that has adapted to a broad international audience rather than a specifically Vietnamese one.\n\nThe menu: a restaurant with 80 items covering Thai, Chinese, and Japanese alongside Vietnamese is unlikely to produce excellent Vietnamese food — the kitchen is spread too thin. A restaurant with 20–30 items, all Vietnamese, with regional specificity (dishes labelled Hanoi style, Hue style, Southern style) is a restaurant run by someone who cares about the distinctions.\n\nThe clientele: a Vietnamese restaurant that is mostly Vietnamese and Vietnamese-diaspora customers is almost always better than one that is mostly non-Vietnamese. The community eats where the food is correct.`,
        tip: 'Search Google Maps in any city using "phở" with the diacritic rather than "pho" without it. Restaurants that use correct Vietnamese diacritics in their listings are more likely to be run by people who take the cuisine seriously. It is a small signal but a consistent one.',
    },
    {
        step: 3,
        title: 'How to Order — What to Ask For and What to Avoid',
        content: `Ordering Vietnamese food outside Vietnam requires knowing which dishes travel well and which do not, and which menu items reveal the quality of a kitchen most honestly.\n\nOrder to test the kitchen:\n\nPho bo: the broth is the test. A great pho broth takes 6–8 hours of careful simmering and spicing. A mediocre one takes less. The difference is immediately apparent — a great broth has depth, sweetness from the charred aromatics, warmth from the spices, and a clean finish. A mediocre broth is flat, slightly salty, and one-dimensional. Order it without additions first, taste the plain broth, and judge from there.\n\nGoi cuon (fresh spring rolls): these require fresh herbs, fresh rice paper, properly cooked shrimp and pork, and a correctly made peanut-hoisin dipping sauce. If all four components are right, the kitchen is executing correctly across multiple preparation categories simultaneously. If any is wrong — limp rice paper, missing herbs, bottled peanut sauce — you have diagnosed the kitchen's limitations.\n\nCom tam: the quality of the scallion oil and the fish sauce dressing over the rice tells you immediately whether the kitchen understands Vietnamese flavour. Com tam seasoned correctly is one of the most satisfying dishes in Vietnamese cooking. Com tam as a plain plate of rice with a piece of grilled pork is a missed opportunity.\n\nAvoid at mediocre restaurants:\n\nBanh xeo: requires a hot wok, correct batter technique, and fresh herbs alongside. Difficult to execute well under volume pressure. Often arrives soft rather than crisp.\n\nBun bo hue: the shrimp paste component is the one most commonly omitted or diluted abroad. Without mam ruoc, bun bo hue is just spicy noodle soup, not the specific Hue dish.`,
        tip: null,
    },
    {
        step: 4,
        title: 'How to Eat the Dishes Correctly',
        content: `Watching how Vietnamese people eat Vietnamese food reveals conventions that menus never explain and that most non-Vietnamese diners miss — conventions that significantly affect how much the dish delivers.\n\nPho: add the herbs and bean sprouts to the bowl, not to the side plate. Tear the Thai basil into the broth. Add a squeeze of lime. Add chilli to taste. Stir once. The addition of the fresh elements to the hot broth is not optional garnish — it is the completion of the dish. The first spoonful should come after the additions are in. Hoisin sauce goes on the side as a dipping sauce for meat, not stirred into the broth — stirring hoisin into pho broth changes its character entirely.\n\nGoi cuon: pick up a roll, tear a piece of lettuce from the plate, wrap the roll loosely, dip in the sauce, and eat in two bites. The lettuce is structural — it prevents the rice paper from sticking to your fingers and provides a textural contrast. Do not dip the entire roll in the sauce and then bite — the sauce is for the dipped end only.\n\nBanh mi: eat within 5 minutes of receiving it. The baguette goes soft within 10 minutes of assembly from the moisture of the fillings. A banh mi eaten immediately is a different experience from one that has sat for 15 minutes.\n\nCom tam: mix the scallion oil and fish sauce dressing through the rice before eating anything else. The rice is meant to be seasoned, not eaten plain alongside the toppings. Pour the dressing over the rice, toss with a spoon, then eat the rice and toppings together in each bite.\n\nBun bowls: add the fish sauce dressing over the noodles and toss before eating. Bun noodle bowls arrive undressed — the dressing is the small bowl of nuoc cham alongside. Pour it over, toss, eat.`,
        tip: 'Ask for extra herbs if the herbs plate arrives sparse. In Vietnam, the herbs plate is refilled without asking. Outside Vietnam, the economics of fresh herbs mean the initial serving is often minimal. Asking specifically for more rau ram, more mint, and more bean sprouts is not demanding — it is asking for the dish as it is intended to be served.',
    },
    {
        step: 5,
        title: 'Supplementing at the Table — What to Bring or Ask For',
        content: `When a Vietnamese restaurant abroad does not have everything the dish requires, there are specific ways to supplement at the table that bring the dish closer to the intended experience.\n\nFish sauce on the side: ask for a small dish of plain fish sauce alongside any dish. Use it to adjust the seasoning of the dish individually — a splash over com tam rice, a few drops stirred into a bun bowl that tastes flat. Most Vietnamese restaurants have good quality fish sauce in the kitchen even if the front-of-house versions are diluted.\n\nFresh chilli: ask for fresh bird's eye chilli sliced alongside any dish. Chilli from the kitchen is always fresher and more intense than the chilli sauce in bottles on the table.\n\nLime wedges: ask for additional lime with pho, bun bowls, and grilled dishes. The standard serving is rarely enough.\n\nBring from home: if you live near a Vietnamese or Asian grocery store and plan to visit a Vietnamese restaurant, a small zip-lock bag of rau ram, a fresh lime, and a small bottle of Chin-su fish sauce takes up no space and transforms a mediocre Vietnamese restaurant meal into something considerably closer to the real thing. This is not considered unusual in Vietnamese culture — bringing your own condiments and herbs is entirely normal.\n\nFor pho specifically: a container of freshly made nuoc cham from home can replace the weakened version a restaurant provides. Pour the restaurant's version away and use your own alongside the broth.`,
        tip: 'Keep a small bottle of good Vietnamese fish sauce — Phu Quoc or Chin-su — in your bag or car when going out for Vietnamese food. The difference between a correctly seasoned bowl and an under-seasoned one is often two drops of quality fish sauce. This single addition resolves the most common complaint about Vietnamese food abroad: that it tastes flat.',
    },
    {
        step: 6,
        title: 'Finding Authentic Vietnamese Food in Germany Specifically',
        content: `Germany has one of the largest Vietnamese communities outside Southeast Asia — approximately 200,000 Vietnamese-Germans, concentrated in Berlin, Hamburg, Frankfurt, and the former East German states where Vietnamese guest workers settled in the 1980s. This community has maintained a genuine, largely unadapted Vietnamese food culture that is accessible if you know where to look.\n\nBerlin: the Vietnamese community in Berlin-Lichtenberg and Marzahn (former East Berlin) maintains the most authentic Vietnamese food scene in Germany. Dong Xuan Center in Lichtenberg is a Vietnamese wholesale market that also houses food stalls serving dishes for the community rather than for tourists — banh mi pate cha, bun bo hue, banh cuon, and com binh dan (everyday home-cooking style rice dishes) that are not on any tourist-facing menu. The food here is the closest to Vietnamese street food available in Germany.\n\nHamburg, Frankfurt, Dusseldorf: larger Vietnamese communities in these cities maintain community-facing restaurants and grocery stores in specific neighbourhoods. Finding them requires walking the streets of the Vietnamese commercial districts rather than searching online — many community-facing establishments have no internet presence.\n\nAsian grocery stores: the Vietnamese grocery stores that supply the community are often the best places to eat lunch in any German city. Many operate small food counters serving pho, bun, and rice dishes at lunch. The food is made for Vietnamese customers, priced for Vietnamese budgets, and requires no menu navigation — point at what looks good.\n\nThe Vietnamese Buddhist community: Vietnamese Buddhist temples in German cities often serve vegetarian Vietnamese food at festivals and community events that is completely authentic — the community cooks for the community, not for outsiders. These meals are often open to anyone who attends respectfully.`,
        tip: 'Learn to say "cho tôi thêm rau thơm" (please give me more fresh herbs) and "nước mắm thêm" (extra fish sauce). In a Vietnamese restaurant staffed by Vietnamese speakers, these two phrases delivered in Vietnamese signal that you know what the dish is supposed to taste like — and the quality of service and food often improves immediately.',
    },
];

const RELATED = [
    { title: 'How to Build a Vietnamese Pantry from Scratch', href: '/how-to/vietnamese-pantry', time: '12 min read' },
    { title: 'How to Balance Vietnamese Flavors', href: '/how-to/balance-flavors', time: '10 min read' },
    { title: 'How to Make Dipping Salt (Muối Ớt Chanh)', href: '/how-to/muoi-ot-chanh', time: '7 min read' },
];

export default function EatVietnameseFoodAbroadGuide() {
    return (
        <div style={{ minHeight: '100vh', background: '#FAFAF7', paddingTop: 88, fontFamily: "'DM Sans', sans-serif" }}>

            {/* Breadcrumb */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '24px 24px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(75,46,26,0.45)' }}>
                    <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                    <span>/</span>
                    <Link href="/how-to" style={{ color: 'inherit', textDecoration: 'none' }}>How To</Link>
                    <span>/</span>
                    <span style={{ color: '#D97706' }}>Eat Vietnamese Food Abroad</span>
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
                    <span style={{ fontSize: 12, color: 'rgba(75,46,26,0.4)' }}>⏱ 11 min read</span>
                </div>

                <h1 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                    fontWeight: 800, color: '#2D1A0E',
                    lineHeight: 1.15, marginBottom: 16,
                }}>
                    How to Eat Vietnamese Food in Foreign Countries
                </h1>

                <p style={{ fontSize: 17, color: 'rgba(75,46,26,0.6)', lineHeight: 1.75, marginBottom: 0 }}>
                    How to identify a good restaurant, what to order first, how to eat each dish correctly, and what to bring or ask for when the restaurant version does not deliver what the dish was intended to be.
                </p>

                <div style={{ height: 1, background: 'rgba(75,46,26,0.08)', margin: '32px 0' }} />

                <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                    {[
                        { label: 'Applies To', value: 'All countries outside Vietnam' },
                        { label: 'Germany Focus', value: 'Berlin Dong Xuan Center' },
                        { label: 'Test Dish', value: 'Phở bo — order this first' },
                        { label: 'Key Indicator', value: 'The herbs plate' },
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
                        Cook it yourself instead
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