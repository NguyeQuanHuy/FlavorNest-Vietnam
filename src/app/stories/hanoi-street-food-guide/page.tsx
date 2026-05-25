'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

export default function HanoiStreetFoodGuidePage() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);
    const { scrollYProgress } = useScroll({
        target: mounted ? scrollRef : undefined,
        offset: ['start start', 'end end'],
    });

    const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);

    return (
        <article ref={scrollRef} style={{ backgroundColor: '#FAFAF7' }}>

            {/* Hero */}
            <motion.section style={{ position: 'relative', height: '100vh', minHeight: '600px', overflow: 'hidden', opacity: heroOpacity }}>
                <motion.div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/recipes/do-an-duong-pho.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', scale: heroScale }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(45,26,14,0.35) 0%, rgba(45,26,14,0.2) 35%, rgba(45,26,14,0.93) 100%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 24px 80px' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#D97706' }} />
                                <span style={{ color: '#D97706', fontSize: '12px', letterSpacing: '2px', fontWeight: 700, fontFamily: 'DM Sans, sans-serif' }}>
                                    HANOI · STREET FOOD GUIDE · 2026
                                </span>
                            </div>
                            <h1 style={{ fontFamily: 'Playfair Display, serif', color: '#FFF', fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '24px', maxWidth: '900px' }}>
                                The Honest Hanoi Street Food Guide: What to Eat, Where, and When
                            </h1>
                            <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', maxWidth: '720px', lineHeight: 1.5, marginBottom: '32px' }}>
                                Not a list of tourist traps. A guide to how Hanoians actually eat — what they order at 6am, where they go after work, and why the best meals have no English menu.
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', color: 'rgba(255,255,255,0.6)', fontSize: '14px', fontFamily: 'DM Sans, sans-serif' }}>
                                <span>By Quan Huy Nguyen</span>
                                <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'currentColor' }} />
                                <span>May 26, 2026</span>
                                <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'currentColor' }} />
                                <span>9 min read</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 1, 0] }} transition={{ delay: 1.5, duration: 2.5, repeat: Infinity }}
                    style={{ position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)', color: 'rgba(255,255,255,0.6)', fontSize: '11px', letterSpacing: '2px', fontFamily: 'DM Sans, sans-serif', textAlign: 'center' }}>
                    SCROLL TO READ ↓
                </motion.div>
            </motion.section>

            {/* Body */}
            <div style={{ maxWidth: '720px', margin: '0 auto', padding: '80px 24px 40px', fontFamily: 'Georgia, "Iowan Old Style", "Palatino Linotype", serif', color: '#2D1A0E' }}>

                {/* Lead */}
                <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                    style={{ fontSize: '1.45rem', lineHeight: 1.65, fontStyle: 'italic', color: '#4B2E1A', marginBottom: '48px', paddingLeft: '24px', borderLeft: '3px solid #D97706' }}>
                    Hanoi is the greatest street food city in Asia. This is not a casual opinion — it is a considered position held by people who have eaten seriously across the continent. The food is cheap, specific, time-sensitive, deeply local, and almost impossible to eat badly if you follow three rules: eat early, eat where locals eat, and never order anything that comes with a laminated photograph menu.
                </motion.p>

                <Section>
                    <DropCap>H</DropCap>anoi's street food culture operates on a logic that rewards the early riser and punishes the late sleeper. The best stalls open before dawn and sell out by mid-morning. The woman who has been making the same bún thang for thirty years on Cầu Gỗ street starts her broth at 3am and closes when the pot is empty — usually by 10am. The phở cart on the corner of Hàng Đồng has no sign, no menu, and no fixed address; it appears at 5:30am and disappears by 8. Knowing this is not a travel tip. It is the first principle of eating in Hanoi.
                </Section>

                <Section>
                    The second principle is geography. Hanoi's Old Quarter — the 36 streets area around Hoàn Kiếm Lake — is where the tourists go and where the prices are highest. It is not where the best food is. The best food is in the residential neighborhoods: Đống Đa, Hai Bà Trưng, Long Biên, Tây Hồ. These are the places where a grandmother has been making the same dish from the same spot for decades, where the clientele is entirely local, and where the cook's reputation rests entirely on the quality of what comes out of the pot.
                </Section>

                <PullQuote>
                    "The best stalls open before dawn and sell out by mid-morning. Eat early or eat elsewhere."
                </PullQuote>

                <SectionDivider />
                <SectionHeader>Breakfast: The Sacred Hours (5am – 9am)</SectionHeader>

                <Section>
                    Hanoi breakfast is non-negotiable. It is not a meal you eat at a hotel buffet with scrambled eggs and toast. It is a hot, broth-based ritual eaten on the street, usually in under fifteen minutes, before the city fully wakes up. The plastic stool is mandatory. The disposable chopsticks are mandatory. The feeling of eating something extraordinary before most tourists have opened their eyes is, arguably, mandatory.
                </Section>

                <DishEntry
                    name="Phở Bò"
                    time="5am – 9am"
                    price="30,000 – 50,000 VND (€1.10 – €1.80)"
                    description="Hanoi-style beef phở is the dish by which all other phở is measured. The broth is clear — not murky, not cloudy, not orange — and deeply savory from 8+ hours of simmering beef bones with charred aromatics and a specific spice bundle. The noodles are flat and silky. The beef arrives in two forms: well-done brisket (chín) and raw eye-round that cooks in the bowl when the boiling broth is poured over it (tái). A small plate of fresh herbs and bean sprouts arrives on the side — in Hanoi, unlike Saigon, the bean sprouts and Thai basil are optional, not structural."
                    tip="Order 'phở tái chín' for a bowl with both raw and cooked beef. Ask for 'ít béo' (less fatty) if you want a leaner broth. Squeeze lime, not lemon. Eat immediately — the noodles continue cooking in the broth."
                    where="Phở Gia Truyền Bát Đàn (49 Bát Đàn, Hoàn Kiếm) — queue from 6am, sell out by 8:30. Phở Thìn (13 Lò Đúc, Hai Bà Trưng) — stir-fried phở variant, different technique, equally legendary."
                />

                <DishEntry
                    name="Bún Thang"
                    time="6am – 10am"
                    price="40,000 – 60,000 VND (€1.50 – €2.20)"
                    description="The most refined bowl in Hanoi. Bún thang is what happens when a cuisine that values subtlety applies itself to a noodle soup. The broth is made from chicken and dried shrimp — pale gold, clear as glass, deeply savory without any heaviness. The toppings are arranged with care: shredded chicken breast, egg ribbons cut thin as paper, cha lụa (pork roll) sliced into matchsticks, dried shrimp, and fried shallots. Everything in the bowl is neutral in color — yellow, white, and gold — and the flavors are gentle and layered. It is the soup you eat when you want to understand what 'balance' means in Vietnamese cooking."
                    tip="Add a small spoonful of mắm tôm (fermented shrimp paste) to the broth if offered — it sounds alarming and transforms the soup. This is authentic, not tourist-modified."
                    where="Bún Thang Bà Đức (48 Hàng Hành, Hoàn Kiếm) — open from 6:30am, closes when sold out. Look for the queue."
                />

                <DishEntry
                    name="Bánh Cuốn"
                    time="6am – 11am"
                    price="35,000 – 50,000 VND (€1.30 – €1.80)"
                    description="Silky steamed rice sheets, each one made to order on a cloth stretched over a pot of boiling water, rolled around a filling of minced pork and wood ear mushroom. Finished with crispy fried shallots, a scatter of dried shrimp, sliced cha lụa, and fresh herbs. The dipping sauce — nước chấm with a hint of sweetness — arrives warm, not cold. The skill is entirely in the making: the sheet must be paper-thin, translucent, and peeled off the cloth without tearing."
                    tip="Watch the cook make your order. The technique is hypnotic — a ladle of batter, a quick spread, steam, a bamboo spatula peeling the sheet off in one practiced motion. Each sheet takes 90 seconds. Each bowl contains 5-6 sheets."
                    where="Bánh Cuốn Thanh Vân (14 Hàng Gà, Hoàn Kiếm) — open from 6am. Bánh Cuốn Nóng on Tô Hiến Thành — less touristy, equally excellent."
                />

                <SectionDivider />
                <SectionHeader>Lunch: The Proper Meal (11am – 2pm)</SectionHeader>

                <DishEntry
                    name="Bún Chả"
                    time="11am – 2pm only"
                    price="40,000 – 60,000 VND (€1.50 – €2.20)"
                    description="Bún chả is strictly a lunch dish in Hanoi — the charcoal grills fire up in the morning, the patties are made by hand until noon, and by 2pm the shops close. It is one of the few Vietnamese dishes that truly does not exist outside its natural context: a bowl of warm, golden dipping broth with grilled pork patties and slices of pork belly, alongside a platter of cold rice vermicelli, fresh herbs, and pickled green papaya. You assemble each bite yourself, dipping noodle-wrapped in lettuce into the broth. Anthony Bourdain and Barack Obama ate bún chả here in 2016. The shop on Lê Văn Hưu still has the table."
                    tip="Order 'bún chả đầy đủ' (full order) to get both the patties and pork belly. The chả viên (pork patties) should have slightly charred edges. If they are pale, they are not done right."
                    where="Bún Chả Hương Liên (24 Lê Văn Hưu) — the Obama table is upstairs, preserved. Bún Chả 34 Hàng Điếu — less famous, better value, same quality."
                />

                <DishEntry
                    name="Bún Đậu Mắm Tôm"
                    time="10am – 3pm"
                    price="50,000 – 80,000 VND (€1.80 – €3.00)"
                    description="The dish that separates the adventurous from the cautious. Bún đậu mắm tôm is a Hanoi lunch platter: rice vermicelli, deep-fried tofu with a crispy-custardy interior, sliced boiled pork, crispy pork intestine, and nem chua (fermented pork). Everything is dipped into mắm tôm — fermented shrimp paste, diluted with a squeeze of lime and a pinch of sugar, whisked until aerated and slightly pink. The smell is intense. The taste, to everyone who gets past the smell, is extraordinary."
                    tip="The mắm tôm should be whisked vigorously until it lightens in color and becomes slightly foamy — this aerates it and softens the fermented edge. Add lime juice, not vinegar."
                    where="Bún Đậu Mắm Tôm Cô Liên (36 Nguyễn Siêu) — outdoor seating, excellent intestines. Bún Đậu Gốc Đa (Hoàn Kiếm) — more tourist-friendly introduction to the dish."
                />

                <SectionDivider />
                <SectionHeader>Afternoon and Evening (3pm – 10pm)</SectionHeader>

                <DishEntry
                    name="Chả Cá Lã Vọng"
                    time="11am – 9pm"
                    price="150,000 – 200,000 VND (€5.50 – €7.30) per person"
                    description="Arguably Hanoi's greatest dish. Snakehead fish marinated in turmeric and galangal-fermented shrimp paste, finished tableside in a pan of sizzling dill and spring onions so abundant it looks like a green bouquet. Eaten with rice vermicelli, roasted peanuts, fresh herbs, and mắm tôm. The dish was invented at a restaurant on Hàng Sơn street, which was subsequently renamed Chả Cá street after the dish. Chả Cá Lã Vọng at number 14 has been serving the same recipe since the 1870s — one of the oldest restaurants in Vietnam. It is expensive by Hanoi standards and worth every đồng."
                    tip="The fish goes into the pan already half-cooked. Your job is to stir it gently with the dill and spring onion until fragrant — do not let it sit too long or it overcooks. Eat immediately from the pan."
                    where="Chả Cá Lã Vọng (14 Chả Cá, Hoàn Kiếm) — the original since 1870s. Chả Cá Thăng Long (19-21 Đường Thành) — better value, same technique."
                />

                <DishEntry
                    name="Cà Phê Trứng"
                    time="7am – 10pm"
                    price="35,000 – 55,000 VND (€1.30 – €2.00)"
                    description="Egg coffee — invented in Hanoi in the 1940s when condensed milk was scarce and a bartender named Nguyễn Văn Giảng substituted whipped egg yolk. The result: a small glass of strong Vietnamese robusta coffee topped with a thick, custardy foam of egg yolk, condensed milk, and a pinch of vanilla, served warm. You eat the foam with a spoon, stir it in, and drink the rest. It should taste like a liquid tiramisu. It is the best coffee drink in Vietnam and, in the view of many serious coffee people, in the world."
                    tip="Order it 'nóng' (hot) for the traditional version. The café must be trusted — a badly made egg coffee uses too much sweetened condensed milk and tastes only sweet. A well-made one is balanced, custardy, bitter-sweet."
                    where="Cà Phê Trứng Giảng (39 Nguyễn Hữu Huân) — the original, founded by the inventor's family. Cà Phê Đinh (13 Đinh Tiên Hoàng) — rooftop view of Hoàn Kiếm Lake."
                />

                <SectionDivider />

                {/* Practical guide */}
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '48px 0', padding: '32px', background: '#FEF3E2', borderLeft: '4px solid #D97706', borderRadius: '0 8px 8px 0' }}>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', color: '#D97706', textTransform: 'uppercase', marginBottom: '16px' }}>
                        HOW TO EAT IN HANOI: THE RULES
                    </p>
                    {[
                        { rule: 'Eat by the clock.', detail: 'Phở at 6am. Bún chả at noon. Chả cá at dinner. Each dish has its hour and it matters.' },
                        { rule: 'Sit on the plastic stool.', detail: 'The smaller and lower the stool, the better the food. This is not a joke.' },
                        { rule: 'No laminated photo menus.', detail: 'If the menu has photographs, walk past. Single-dish stalls with handwritten prices are where you want to be.' },
                        { rule: 'Learn three phrases.', detail: '"Cho tôi một bát" (one bowl please). "Ít béo" (less fat). "Ngon quá" (delicious) — the last one will make the cook smile.' },
                        { rule: 'Bring small bills.', detail: 'Most stalls do not make change for large notes. Carry 10,000 and 20,000 VND notes.' },
                        { rule: 'The queue is the review.', detail: 'If locals are queuing at 6am, the food is worth queuing for. No queue at a tourist-area restaurant means the locals know something.' },
                    ].map((item, i) => (
                        <div key={i} style={{ display: 'flex', gap: '16px', paddingBottom: '12px', marginBottom: '12px', borderBottom: i < 5 ? '1px solid rgba(75,46,26,0.1)' : 'none' }}>
                            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', fontWeight: 700, color: '#D97706', flexShrink: 0, minWidth: '28px' }}>{String(i + 1).padStart(2, '0')}</span>
                            <div>
                                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 600, color: '#2D1A0E' }}>{item.rule} </span>
                                <span style={{ fontFamily: 'Georgia, serif', fontSize: '13px', color: '#6B5544', fontStyle: 'italic' }}>{item.detail}</span>
                            </div>
                        </div>
                    ))}
                </motion.div>

                <Section>
                    Hanoi will feed you extraordinarily well for almost no money. A full day of eating — phở at breakfast, bánh cuốn mid-morning, bún chả at lunch, afternoon egg coffee, evening chả cá — will cost under 400,000 VND (roughly €15) per person, including drinks. This is not budget eating. This is some of the finest food in Asia, priced at what it is worth to the people who eat it every day: affordable, abundant, and completely uninterested in your approval.
                </Section>

                <Section>
                    Go early. Bring cash. Sit on the small stool. Order whatever the person next to you is having. That is the entire guide.
                </Section>

                <SectionDivider />

                {/* Recipe links */}
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '48px 0', padding: '28px', background: '#fff', border: '1px solid rgba(75,46,26,0.1)', borderRadius: '4px' }}>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', color: '#D97706', textTransform: 'uppercase', marginBottom: '16px' }}>
                        MAKE THESE AT HOME
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {[
                            { title: 'Authentic Hanoi Beef Phở', slug: 'pho-bo-ha-noi' },
                            { title: 'Hanoi Grilled Pork Vermicelli (Bún Chả)', slug: 'bun-cha-hanoi' },
                            { title: 'Bánh Ướt with Scallion Oil', slug: 'banh-uot-dau-he' },
                        ].map((recipe) => (
                            <Link key={recipe.slug} href={`/recipes/${recipe.slug}`}
                                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid rgba(75,46,26,0.07)', textDecoration: 'none' }}>
                                <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', color: '#2D1A0E', fontWeight: 600 }}>{recipe.title}</span>
                                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#D97706', fontWeight: 600 }}>Recipe →</span>
                            </Link>
                        ))}
                    </div>
                </motion.div>

                <div style={{ marginTop: '48px', textAlign: 'center' }}>
                    <Link href="/stories" style={{ color: '#D97706', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, textDecoration: 'none', fontSize: '14px' }}>
                        ← Back to all stories
                    </Link>
                </div>
            </div>
        </article>
    );
}

// ── Sub-components ──────────────────────────────────────────────────────────

function Section({ children }: { children: React.ReactNode }) {
    return (
        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6 }}
            style={{ fontSize: '1.15rem', lineHeight: 1.85, marginBottom: '28px', color: '#2D1A0E' }}>
            {children}
        </motion.p>
    );
}

function SectionHeader({ children }: { children: React.ReactNode }) {
    return (
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '48px 0 24px' }}>
            <div style={{ width: '28px', height: '2px', background: '#D97706', flexShrink: 0 }} />
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: 700, color: '#2D1A0E', margin: 0 }}>
                {children}
            </h2>
        </motion.div>
    );
}

function DishEntry({ name, time, price, description, tip, where }: {
    name: string; time: string; price: string;
    description: string; tip: string; where: string;
}) {
    return (
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.55 }}
            style={{ margin: '32px 0', background: '#fff', border: '1px solid rgba(75,46,26,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ padding: '16px 24px', borderBottom: '1px solid rgba(75,46,26,0.07)', background: '#FDFAF7', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', fontWeight: 700, color: '#2D1A0E', margin: 0 }}>{name}</h3>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 600, color: '#D97706', background: 'rgba(217,119,6,0.1)', padding: '3px 10px', borderRadius: '100px' }}>⏰ {time}</span>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 600, color: '#166534', background: 'rgba(22,101,52,0.08)', padding: '3px 10px', borderRadius: '100px' }}>💵 {price}</span>
                </div>
            </div>
            <div style={{ padding: '20px 24px' }}>
                <p style={{ fontFamily: 'Georgia, serif', fontSize: '14px', lineHeight: 1.75, color: '#4B2E1A', marginBottom: '16px' }}>{description}</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div style={{ background: '#FFFBF0', padding: '12px', borderRadius: '4px', borderLeft: '3px solid #D97706' }}>
                        <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', color: '#D97706', marginBottom: '6px' }}>PRO TIP</div>
                        <p style={{ fontFamily: 'Georgia, serif', fontSize: '12px', lineHeight: 1.6, color: '#6B5544', margin: 0, fontStyle: 'italic' }}>{tip}</p>
                    </div>
                    <div style={{ background: '#F0F7F0', padding: '12px', borderRadius: '4px', borderLeft: '3px solid #166534' }}>
                        <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', color: '#166534', marginBottom: '6px' }}>WHERE TO EAT</div>
                        <p style={{ fontFamily: 'Georgia, serif', fontSize: '12px', lineHeight: 1.6, color: '#6B5544', margin: 0 }}>{where}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

function PullQuote({ children }: { children: React.ReactNode }) {
    return (
        <motion.blockquote initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            style={{ margin: '48px 0', padding: '24px 0', borderTop: '2px solid #D97706', borderBottom: '2px solid #D97706', fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', lineHeight: 1.4, color: '#4B2E1A', textAlign: 'center', fontWeight: 400 }}>
            {children}
        </motion.blockquote>
    );
}

function DropCap({ children }: { children: React.ReactNode }) {
    return (
        <span style={{ float: 'left', fontFamily: 'Playfair Display, serif', fontSize: '5rem', fontWeight: 700, lineHeight: 0.85, color: '#D97706', paddingRight: '12px', paddingTop: '6px' }}>
            {children}
        </span>
    );
}

function SectionDivider() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '48px 0', gap: '12px' }}>
            {[0, 1, 2].map(i => <span key={i} style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#D97706', opacity: 0.6 }} />)}
        </div>
    );
}