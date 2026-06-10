'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const SECTIONS = [
    {
        step: 1,
        title: 'Why Ordering Matters as Much as Choosing the Restaurant',
        content: `Walking into a good Vietnamese restaurant and ordering incorrectly produces a worse meal than walking into the same restaurant and ordering well. This is not a theoretical concern — Vietnamese menus abroad are structured in ways that make it easy to accidentally order the tourist version of a dish when the local version exists on the same menu, to miss the condiments that complete a preparation, or to eat in a sequence that prevents you from tasting what each dish is designed to deliver.\n\nVietnamese food is also highly interactive. Unlike a Western set meal where each course arrives complete, Vietnamese dining requires the diner to assemble, season, and customise each bowl, plate, and wrap. A pho arrives unfinished — the herbs, lime, and chilli are the final act of cooking performed at the table. A bun bowl arrives undressed — the nuoc cham alongside is not a dipping sauce but the seasoning that the dish cannot function without. Missing these interactions produces food that is technically correct but experientially flat.\n\nOrdering like a local means knowing the vocabulary, knowing the customisation system, knowing which dishes have hidden versions that are better than the standard, and knowing the rhythm of a Vietnamese meal — what comes first, what comes alongside, what is eaten together and what is eaten separately.\n\nThis guide covers all of these. It draws on the way Vietnamese people — in Vietnam and in the diaspora — actually navigate menus, communicate with staff, and eat. It is not comprehensive across all Vietnamese regional cuisines, but it covers the most common situations in Vietnamese restaurants outside Vietnam.`,
        tip: null,
    },
    {
        step: 2,
        title: 'The Vietnamese Menu — How It Is Structured and How to Read It',
        content: `Vietnamese restaurant menus outside Vietnam typically follow one of two structures: the regional single-focus menu (pho-only or pho-and-bun, common in quick-service restaurants) and the comprehensive menu covering appetisers, soups, rice dishes, noodle dishes, and stir-fries.\n\nFor the regional focused menu: do not over-think it. A pho specialist serves pho — the question is which cut of beef and which size. The cuts are where most non-Vietnamese diners make uninformed choices.\n\nFor the comprehensive menu: the appetiser section (cuon, cha gio, goi) is where the kitchen's ingredient quality is most visible — order one item from here first. The soup section and noodle section are typically the kitchen's strengths. The stir-fry section often uses the same protein preparations as the noodle dishes but with less complexity — skip it unless the restaurant has a specific stir-fry reputation.\n\nBeef cuts in pho: understanding the Vietnamese terms for beef cuts determines whether you enjoy pho or merely eat it.\n\nBo tai — rare beef sliced thin, added raw to the hot broth where it cooks in 30 seconds. Order this if you want tender, just-cooked beef.\nBo chin — fully cooked brisket, braised until tender. Richer and denser than tai.\nGan — tendon, slow-braised until gelatinous and soft. Essential for textural complexity.\nSach — tripe, clean-flavoured and slightly chewy. Not for everyone but authentic.\nNam — flank, slightly firmer than brisket with more flavour.\n\nThe correct order for a first pho: tai, chin, gan (rare beef, brisket, and tendon). This combination gives you the full range of textures the dish is capable of delivering.`,
        tip: 'Ask for tai on the side (tai để riêng) when ordering pho with rare beef. When the beef arrives in the broth, it continues cooking from the residual heat and becomes overdone before you can eat it. Rare beef on the side allows you to add it incrementally and control the doneness precisely.',
    },
    {
        step: 3,
        title: 'The Vocabulary of Customisation',
        content: `Vietnamese food is one of the most customisable cuisines in the world, and the customisation system is built into how orders are communicated. Knowing the vocabulary gives you access to options that are never listed on the menu.\n\nÍt (ee-t) — less of something. Ít mỡ = less fat. Ít ngọt = less sweet. Ít cay = less spicy. Used for any component you want reduced.\n\nNhiều (nyew) — more of something. Nhiều hành = more spring onion. Nhiều rau = more herbs. Nhiều nước dùng = more broth. The request for extra broth (thêm nước dùng) at a good pho restaurant will almost always be fulfilled without charge.\n\nKhông (khome) — without. Không mì chính = without MSG. Không hành = without raw onion. Không đường = without sugar.\n\nThêm (tem) — extra, add more. Thêm ớt = extra chilli. Thêm chanh = extra lime. Thêm nước mắm = extra fish sauce.\n\nTái chín (tai chin) — half rare, half cooked. For pho, this means some rare sliced beef and some fully cooked beef in the same bowl. The most common order among Vietnamese diners who want both textures.\n\nTo (toh) — large size. Nhỏ (nyaw) — small. Most Vietnamese quick-service restaurants have three sizes (nhỏ, vừa, to) but often only list two on the English menu.\n\nThese phrases work in any Vietnamese restaurant worldwide. They do not require fluency — delivering them with the correct word even if the pronunciation is imperfect will be understood immediately by Vietnamese staff, who hear them constantly.`,
        tip: 'Learn "cho tôi thêm" (cho toy tem) — "please give me more." This three-word phrase, combined with the name of anything on the table, is the most useful phrase for Vietnamese dining outside Vietnam. Cho tôi thêm rau (more herbs), cho tôi thêm chanh (more lime), cho tôi thêm nước mắm (more fish sauce).',
    },
    {
        step: 4,
        title: 'What to Order That Is Not on the Menu',
        content: `The most interesting items in many Vietnamese restaurants are never listed. They exist for community members who know to ask, or they are daily preparations that the kitchen makes for staff and regulars but does not advertise to the general public.\n\nCom binh dan (everyday home-style rice): at Vietnamese community-facing restaurants, asking for com binh dan — or simply "cơm thường" (regular rice) — often produces a plate of whatever the kitchen has made that day for its own meal. This is typically the most authentically Vietnamese food in the building: a piece of braised pork, a fried egg, some pickled vegetables, a ladle of clear soup, and white rice. It is never on the menu and it is often the best thing available.\n\nSpecial offal cuts: Vietnamese restaurants that serve the full pho menu often have tendon, tripe, and soft tendon (gân non) that are not listed because they require explanation and are not ordered by most non-Vietnamese customers. Ask specifically for gân (tendon) and sách (tripe) — if the kitchen has them, they will be added.\n\nExtra broth (nước dùng riêng): ask for a small bowl of plain broth alongside any pho or bun bo order. Drink it as a soup course before the noodle bowl — this is how many Vietnamese people eat it, and a great broth deserves to be tasted without the distraction of noodles and toppings.\n\nSeasonal specials: Vietnamese restaurants in communities with strong Vietnamese grocery supply chains often have dishes that appear on a handwritten board or are mentioned by staff but not on the printed menu. Ask "hôm nay có gì đặc biệt không?" (what is special today?) — even in broken Vietnamese, this question is understood and appreciated.`,
        tip: null,
    },
    {
        step: 5,
        title: 'The Rhythm of a Vietnamese Meal — Sequence and Sharing',
        content: `A Vietnamese meal outside a quick-service context follows a different logic from a Western meal. Understanding the sequence prevents the confusion of receiving everything at once and not knowing what to eat first, or of eating individual dishes in isolation when they were meant to be eaten together.\n\nAll dishes arrive simultaneously or in rapid succession — this is the Vietnamese meal structure, not a service failure. Vietnamese food is not served in sequential courses. The soup, the rice dish, and the salad arrive together and are eaten together, with each diner managing their own bowl while sharing from common plates.\n\nBegin with the soup or broth: if a noodle soup is ordered, begin with it while it is hot. Noodle soups lose their character as they cool — the broth becomes less fragrant, the noodles absorb liquid and become soft, and the herbs wilt into the broth rather than providing a fresh contrast.\n\nShare everything except individual bowls: rice dishes, appetisers, stir-fries, and grilled items are shared from central plates. Individual noodle soups and bun bowls belong to the person who ordered them. The shared dishes are the substance of the meal; the individual bowl is the anchor.\n\nDipping sauces are not interchangeable: the nuoc cham for cha gio is different from the nuoc cham for goi cuon which is different from the hoisin-peanut sauce for the goi cuon. Each sauce is calibrated for its specific dish. Using the wrong sauce with the wrong dish produces a combination that works but misses the intended balance.\n\nRice is eaten throughout the meal, not as a separate course: Vietnamese white rice is served and eaten continuously alongside all dishes simultaneously, not as a carbohydrate phase before or after the protein. A bite of braised pork, a spoonful of rice, a piece of pickled vegetable, another spoonful of rice — this is the rhythm.`,
        tip: 'At a Vietnamese restaurant serving rice dishes and noodle soups together, order both types. The rice dish provides substance and the noodle soup provides the broth that refreshes between bites of the richer rice preparations. Vietnamese home meals almost always include a clear soup (canh) alongside rice precisely for this reason.',
    },
    {
        step: 6,
        title: 'Practical Phrases for Ordering in Any Vietnamese Restaurant',
        content: `The following phrases cover the situations that arise most commonly when ordering Vietnamese food outside Vietnam. They are written in Southern Vietnamese pronunciation, which is the most common among Vietnamese diaspora communities worldwide.\n\nOrdering:\n"Cho tôi một tô phở bò tái chín" — I would like one bowl of pho with rare and cooked beef.\n"Cho tôi một đĩa cơm tấm sườn" — I would like a plate of broken rice with grilled pork ribs.\n"Cho tôi gọi thêm" — I would like to order more.\n\nCustomising:\n"Ít hành lá" — less spring onion\n"Nhiều rau thơm" — more fresh herbs\n"Không bột ngọt" — no MSG\n"Cay vừa thôi" — medium spice only\n"Cho tôi thêm nước dùng" — please give me more broth\n\nAsking questions:\n"Món này có gì?" — What is in this dish?\n"Cái này ngon không?" — Is this good?\n"Hôm nay có gì đặc biệt không?" — What is special today?\n\nRequesting:\n"Cho tôi thêm chanh" — Please give me more lime\n"Thêm ớt tươi" — Extra fresh chilli\n"Cho tôi thêm nước mắm" — Please give me more fish sauce\n"Tính tiền cho tôi" — The bill please\n\nExpressing appreciation:\n"Ngon quá" — This is delicious\n"Cảm ơn nhiều" — Thank you very much\n\nNone of these phrases requires tonal accuracy to be understood — the context of a restaurant, combined with any approximation of the words, is sufficient for Vietnamese staff to understand the request. The willingness to attempt Vietnamese is itself appreciated and often results in better service and more honest recommendations.`,
        tip: 'Save these phrases in your phone as a note before visiting a Vietnamese restaurant. Reading from a phone is entirely acceptable — Vietnamese restaurant staff see this regularly from heritage Vietnamese speakers who grew up outside Vietnam and are not fluent. The attempt matters more than the fluency.',
    },
];

const RELATED = [
    { title: 'How to Eat Vietnamese Food in Foreign Countries', href: '/how-to/eat-vietnamese-abroad', time: '11 min read' },
    { title: 'How to Balance Vietnamese Flavors', href: '/how-to/balance-flavors', time: '10 min read' },
    { title: 'Crystal-Clear Pho Broth', href: '/recipes/pho-bo-ha-noi', time: '8 hrs' },
];

export default function OrderVietnameseFoodGuide() {
    return (
        <div style={{ minHeight: '100vh', background: '#FAFAF7', paddingTop: 88, fontFamily: "'DM Sans', sans-serif" }}>

            {/* Breadcrumb */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '24px 24px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(75,46,26,0.45)' }}>
                    <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                    <span>/</span>
                    <Link href="/how-to" style={{ color: 'inherit', textDecoration: 'none' }}>How To</Link>
                    <span>/</span>
                    <span style={{ color: '#D97706' }}>Order Vietnamese Food Like a Local</span>
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
                    How to Order Vietnamese Food Like a Local
                </h1>

                <p style={{ fontSize: 17, color: 'rgba(75,46,26,0.6)', lineHeight: 1.75, marginBottom: 0 }}>
                    Beef cuts, customisation vocabulary, off-menu dishes, meal rhythm, and the phrases that unlock a better experience at any Vietnamese restaurant anywhere in the world.
                </p>

                <div style={{ height: 1, background: 'rgba(75,46,26,0.08)', margin: '32px 0' }} />

                <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                    {[
                        { label: 'Applies To', value: 'All Vietnamese restaurants' },
                        { label: 'First Order', value: 'Phở tái chín gân' },
                        { label: 'Key Phrase', value: '"Cho tôi thêm..."' },
                        { label: 'Best Off-Menu', value: 'Cơm bình dân' },
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