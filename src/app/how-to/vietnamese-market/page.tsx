'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const SECTIONS = [
    {
        step: 1,
        title: 'What a Vietnamese Wet Market Is and Why It Is Worth Learning',
        content: `The Vietnamese chợ — the traditional wet market — is the heart of Vietnamese food culture and one of the most rewarding and intimidating experiences for a visitor or a diaspora Vietnamese returning to the country. It is a dense, loud, fragrant maze of vendors selling live fish, just-slaughtered meat, mountains of fresh herbs, exotic fruit, and prepared foods, organised by an internal logic that is invisible to the uninitiated but immediately navigable once understood.\n\nThe wet market is where the freshest ingredients in Vietnamese cooking come from. The herbs were picked that morning. The fish is still alive in tubs. The meat was butchered hours ago, not days. The produce has not travelled through a cold chain and a distribution centre. For Vietnamese home cooking, the wet market is the source of the quality that supermarket ingredients cannot match.\n\nIt is also a place governed by social conventions — around bargaining, around how to handle goods, around the relationships between regular customers and their preferred vendors — that determine whether you get a fair price and good quality or whether you are treated as a tourist to be overcharged. Learning these conventions transforms the market from an intimidating chaos into one of the great pleasures of Vietnamese food life.\n\nThis guide covers how the market is organised, how to choose vendors and goods, how bargaining actually works, and the practical etiquette of shopping at a chợ — whether in Vietnam or at the Vietnamese wet-market-style sections of Asian wholesale centres in Germany like Berlin's Dong Xuan Center.`,
        tip: null,
    },
    {
        step: 2,
        title: 'The Layout — How a Vietnamese Market Is Organised',
        content: `A Vietnamese wet market follows a consistent internal organisation across the country, grouped by product type. Understanding this layout lets you navigate efficiently rather than wandering.\n\nThe dry goods and entrance zone: the outer edges and entrance of the market typically hold dry goods — rice, dried noodles, spices, dried shrimp and fish, sauces, and household items. These vendors are the least time-sensitive and are positioned where foot traffic is highest.\n\nThe produce zone: fruits and vegetables occupy a large central area, often organised so that herbs are grouped together, leafy greens together, root vegetables together, and fruit in its own section. The herb vendors are the ones to find first for Vietnamese cooking — the variety and freshness of herbs at a good market herb stall is unmatched.\n\nThe meat zone: fresh meat — pork, beef, chicken — is sold at dedicated butcher stalls, typically toward the centre or rear. The meat is displayed unrefrigerated on tables, which is normal for a wet market where the meat is sold within hours of slaughter and turnover is rapid. The smell and the lack of refrigeration are not signs of poor hygiene in a busy market — they are the nature of fresh-slaughtered meat sold the same day.\n\nThe seafood zone: fish and shellfish, often the most dramatic part of the market, with live fish in tubs, shellfish on ice, and vendors who will kill and clean the fish to order. This zone is wettest — the floors are constantly hosed down, hence the name "wet market."\n\nThe prepared food zone: cooked food, fresh tofu, fermented products, prepared pastes, and ready-to-eat items. Often where the market's food stalls cluster, serving breakfast and lunch to shoppers and vendors.\n\nThe timing of the market: a Vietnamese wet market is busiest and freshest in the early morning — the best selection is between 5am and 8am, when the day's deliveries have just arrived and the best produce has not yet been picked over. By mid-afternoon, the selection is reduced and the freshest items are gone, though prices may drop as vendors clear their remaining stock.`,
        tip: 'Go to the market early — before 8am for the best selection. The Vietnamese phrase "đi chợ sớm" (go to market early) reflects a cultural practice rooted in practicality: the freshest fish, the best cuts of meat, and the first-picked herbs go to the early shoppers. By noon, the quality has declined and the best items are gone.',
    },
    {
        step: 3,
        title: 'Choosing a Vendor and Building a Relationship',
        content: `At a Vietnamese market, the relationship between a customer and their preferred vendors — mối — is the foundation of getting good quality at fair prices. A vendor who knows you as a regular gives you the best produce, the fair price without bargaining, and sometimes extra (the "thêm" — a free handful of herbs or an extra chilli thrown in).\n\nFor the visitor or occasional shopper, you cannot build a long-term relationship in one visit, but you can choose vendors well and conduct yourself in a way that gets fair treatment.\n\nChoosing a produce vendor: look for the stall with the highest turnover and the freshest-looking goods. A busy stall has fresh stock because it sells quickly; a quiet stall may have older goods sitting longer. The herbs should look vibrant and recently cut, not wilted. The vegetables should be free of yellowing and damage.\n\nChoosing a meat vendor: the busiest butcher stall is usually the freshest, for the same reason — high turnover means the meat was butchered recently. The meat should be a fresh colour (bright red beef, pink pork, not grey or brown at the edges), should smell clean, and the vendor's area should look organised and frequently cleaned.\n\nChoosing a fish vendor: the fish should be alive (in the tubs) or, if not live, should have clear eyes, red gills, and firm flesh. A good fish vendor will kill and clean the fish in front of you — this is the guarantee of freshness. Buy fish that is alive or was clearly alive very recently.\n\nReturning to the same vendor: even on a short trip, returning to the same vendor on a second visit begins to establish you as someone who comes back — and Vietnamese vendors treat returning customers noticeably better. If you find a good herb stall or butcher, return to it rather than spreading your purchases across many vendors.`,
        tip: null,
    },
    {
        step: 4,
        title: 'How Bargaining Actually Works',
        content: `Bargaining at a Vietnamese market is real but more limited and more subtle than visitors often assume. Understanding when and how it applies prevents both overpaying and the social awkwardness of bargaining where it is not appropriate.\n\nWhere bargaining applies: bargaining is expected for produce, fruit, and non-fixed-price goods, particularly at tourist-area markets where the initial price quoted to a foreigner is often inflated. It is also common for larger purchases and for clearing end-of-day stock.\n\nWhere bargaining does not apply: many everyday transactions at neighbourhood markets have fixed, fair prices that locals pay without negotiation. Meat and fish are often sold by weight at relatively fixed prices. Bargaining aggressively over a small amount with a neighbourhood vendor who quoted a fair price is considered rude and marks you as someone who does not understand the culture.\n\nThe approach: ask the price ("bao nhiêu?" — how much?). If the price seems high, you can counter gently — offer roughly 70-80% of the quoted price and meet somewhere in the middle. The negotiation should be friendly, not aggressive. A smile and a light manner get better results than confrontation. If the vendor will not move and the price is fair, accept it.\n\nThe foreigner price: at tourist-area markets, foreigners are routinely quoted prices two to three times higher than locals pay. This is where bargaining matters most. Knowing the approximate fair price (ask a local, or observe what others pay) gives you the anchor to negotiate from. At neighbourhood markets serving locals, the foreigner markup is smaller and the fair price is closer to the quoted price.\n\nThe graceful exit: if you cannot reach an agreeable price, the polite move is to thank the vendor and walk away. Often, the vendor will call you back with a better offer. If they do not, the price was likely their genuine floor.\n\nKnowing numbers in Vietnamese: learning to understand prices in Vietnamese (the numbers, and "nghìn" for thousand, since prices are in thousands of dong) dramatically improves your bargaining position — it signals that you understand what is being said and cannot be easily misled on the price.`,
        tip: 'Carry small denominations of cash. Vendors at wet markets deal in cash and small amounts. Paying for a 30,000 dong purchase with a 500,000 note creates a change problem and marks you as a tourist. Small bills let you pay the exact or close amount, which is smoother and more local.',
    },
    {
        step: 5,
        title: 'Selecting the Best Produce, Meat, and Seafood',
        content: `The skill of selecting good ingredients at a wet market is the difference between bringing home superb produce and bringing home the items the vendor wanted to clear. These selection criteria apply at any wet market and at the Vietnamese sections of Asian markets abroad.\n\nHerbs (rau thơm): should be vibrant green, crisp, and fragrant when you smell them. Avoid wilted, yellowing, or slimy herbs. Vietnamese herbs are sold in large bunches — a good vendor will let you select your own bunch or will choose a fresh one for you. Smell the rau ram (Vietnamese coriander) and mint — the fragrance should be strong and clean.\n\nLeafy greens: should be firm and crisp with no yellowing or sliminess at the cut ends. Morning glory (rau muống) should snap cleanly when bent. Mustard greens should be firm and unblemished.\n\nFruit: ripeness depends on the fruit and when you plan to eat it. For mango, a green mango for goi should be very firm; a ripe mango for eating should yield slightly to pressure and smell fragrant at the stem end. Ask the vendor to select fruit for "today" (hôm nay) or "tomorrow" (ngày mai) — they will choose the appropriate ripeness.\n\nPork: should be pink with white, firm fat — not grey, and the fat should not be yellow. The most prized cut for Vietnamese cooking is pork belly with even layers of meat and fat. For kho, ask for "ba chỉ" (pork belly); for grilling, "sườn" (ribs) or "thịt nạc vai" (shoulder).\n\nBeef: bright red, firm, with white fat. For pho, the bones (xương) and brisket (gầu) are bought from the same butcher. For stir-fry, the tenderloin (thăn) or flank.\n\nSeafood: fish should be alive or have clear eyes, red gills, firm flesh, and a clean sea smell. Shrimp should be firm with intact shells and no black spots. Clams and mussels should be closed (live) or close when tapped. Reject any shellfish that is open and does not close.`,
        tip: 'Watch what the Vietnamese grandmothers buy and where. The older women at a wet market — the bà — are the most experienced and discerning shoppers, and they go to the vendors with the best quality. Observing which stalls attract the serious local shoppers is the fastest way to identify the best vendors in an unfamiliar market.',
    },
    {
        step: 6,
        title: 'Practical Etiquette and the Vietnamese Market Abroad',
        content: `Market etiquette: handle goods minimally and respectfully. At a Vietnamese market, it is acceptable to inspect produce, but excessive squeezing and handling of fruit and vegetables that you do not buy is frowned upon. Let the vendor select and hand you the goods where possible — this is both the custom and the way to get the freshest items, as the vendor takes pride in choosing good produce for a respectful customer.\n\nBring your own bag: Vietnamese markets traditionally use minimal packaging, and bringing a sturdy reusable bag (or the traditional woven market basket — giỏ) is both practical and environmentally appropriate. Many purchases come wrapped in newspaper, banana leaf, or thin plastic.\n\nThe morning routine: shopping at the wet market is a daily activity in Vietnamese life, not a weekly stock-up. Vietnamese home cooks buy fresh ingredients each morning for that day's meals, which is why the food is so fresh and why the markets are busiest in the early hours. Adopting this rhythm — buying what you need for the day rather than for the week — is the key to cooking with genuinely fresh ingredients.\n\nThe Vietnamese market abroad: in Germany, the closest equivalent to a Vietnamese wet market is the Dong Xuan Center in Berlin-Lichtenberg — a Vietnamese wholesale market with fresh produce, herbs, meat, seafood, and prepared foods serving the Vietnamese community. Similar Vietnamese and pan-Asian wholesale markets exist in other German cities with large Vietnamese populations. These markets follow many of the same conventions — the freshest herbs in Germany, vendors who know their regular customers, and prices below supermarket levels for Vietnamese ingredients.\n\nAt these markets abroad, the same principles apply: go early for the best selection, find a good herb and produce vendor and return to them, observe what the Vietnamese community buys, and bring cash and your own bags. The relationships and the rhythm translate directly, even thousands of kilometres from Vietnam.`,
        tip: 'At Berlin\'s Dong Xuan Center or any Vietnamese market abroad, eat lunch at the food stalls after shopping. The vendors and shoppers eat there, the food is made for the Vietnamese community rather than for outsiders, and it is some of the most authentic Vietnamese food available outside Vietnam — and the most affordable. A bowl of bun bo Hue at a Dong Xuan stall is closer to the real thing than most sit-down Vietnamese restaurants in Germany.',
    },
];

const RELATED = [
    { title: 'How to Eat Vietnamese Food in Foreign Countries', href: '/how-to/eat-vietnamese-abroad', time: '11 min read' },
    { title: 'How to Build a Vietnamese Pantry from Scratch', href: '/how-to/vietnamese-pantry', time: '12 min read' },
    { title: 'How to Select and Prepare Fresh Seafood', href: '/how-to/select-fresh-seafood', time: '11 min read' },
];

export default function VietnameseMarketGuide() {
    return (
        <div style={{ minHeight: '100vh', background: '#FAFAF7', paddingTop: 88, fontFamily: "'DM Sans', sans-serif" }}>

            {/* Breadcrumb */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '24px 24px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(75,46,26,0.45)' }}>
                    <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                    <span>/</span>
                    <Link href="/how-to" style={{ color: 'inherit', textDecoration: 'none' }}>How To</Link>
                    <span>/</span>
                    <span style={{ color: '#D97706' }}>Navigate a Vietnamese Market</span>
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
                    How to Navigate a Vietnamese Market (Chợ)
                </h1>

                <p style={{ fontSize: 17, color: 'rgba(75,46,26,0.6)', lineHeight: 1.75, marginBottom: 0 }}>
                    How the wet market is organised, how to choose vendors and build relationships, how bargaining actually works, and how to select the freshest produce, meat, and seafood — in Vietnam and at Berlin's Dong Xuan Center.
                </p>

                <div style={{ height: 1, background: 'rgba(75,46,26,0.08)', margin: '32px 0' }} />

                <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                    {[
                        { label: 'Best Time', value: 'Before 8am' },
                        { label: 'Key Concept', value: 'Mối — your regular vendor' },
                        { label: 'Bargaining', value: 'Produce yes, meat usually no' },
                        { label: 'Germany', value: 'Dong Xuan Center, Berlin' },
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
                        Related guides
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