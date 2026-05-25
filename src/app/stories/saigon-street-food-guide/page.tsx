'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

export default function SaigonStreetFoodGuidePage() {
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
                <motion.div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/recipes/com-tam-sai-gon.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', scale: heroScale }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(45,26,14,0.3) 0%, rgba(45,26,14,0.15) 35%, rgba(45,26,14,0.93) 100%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 24px 80px' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#D97706' }} />
                                <span style={{ color: '#D97706', fontSize: '12px', letterSpacing: '2px', fontWeight: 700, fontFamily: 'DM Sans, sans-serif' }}>
                                    SAIGON · HO CHI MINH CITY · STREET FOOD GUIDE 2026
                                </span>
                            </div>
                            <h1 style={{ fontFamily: 'Playfair Display, serif', color: '#FFF', fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '24px', maxWidth: '900px' }}>
                                Saigon Street Food Guide: What to Eat in Ho Chi Minh City
                            </h1>
                            <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', maxWidth: '720px', lineHeight: 1.5, marginBottom: '32px' }}>
                                Saigon eats differently from Hanoi. Sweeter, richer, more abundant, more chaotic — and available at every hour of the day and night. This is the guide to eating it correctly.
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
                    Saigon does not close. There is no hour of the day or night when you cannot find something extraordinary to eat on a Saigon street — breakfast carts at 5am, lunch stalls that open at 10 and sell out by 1, afternoon snack vendors who appear at 3 and vanish at 6, midnight bánh mì carts that do their best business at 11pm. The city is in perpetual motion and perpetual appetite.
                </motion.p>

                <Section>
                    <DropCap>S</DropCap>aigon — Ho Chi Minh City to the official record, Sài Gòn to everyone who lives there — is the food capital of Vietnam, a claim that Hanoians will contest loudly and incorrectly. The south has more abundant ingredients, a sweeter palate, a more cosmopolitan history, and a street food culture that is denser, louder, and more varied than anywhere else in the country. The coconut enters everything. The portions are larger. The opening hours are effectively nonexistent. This is not hyperbole — it is geography and history made edible.
                </Section>

                <Section>
                    The southern food culture was shaped by the Mekong Delta — the rice bowl of Vietnam, where three harvests a year produce abundance rather than scarcity, and where the rivers provide freshwater fish, crab, and shrimp in quantities that the northern coast cannot match. It was further shaped by the Chinese communities of Chợ Lớn (Saigon's Chinatown), who brought Cantonese technique and ingredient vocabulary. By the Khmer culinary traditions of the delta. By the American military presence of the 1960s, which introduced new ingredients and created new hybridizations. Saigon food is the product of everyone who ever passed through — and everyone left something behind.
                </Section>

                <PullQuote>
                    "Saigon food is the product of everyone who ever passed through — and everyone left something behind."
                </PullQuote>

                <SectionDivider />
                <SectionHeader>Breakfast: The Saigon Morning (5am – 10am)</SectionHeader>

                <DishEntry
                    name="Cơm Tấm Sườn Bì Chả"
                    time="5am – 11am, and again at dinner"
                    price="35,000 – 60,000 VND (€1.30 – €2.20)"
                    description="Saigon's most beloved breakfast — and dinner, because the city eats it twice. Fragrant broken rice (tấm — intentionally cracked grains that cook softer and absorb sauce better than whole rice) topped with a charcoal-grilled pork chop (sườn), shredded pork skin with toasted rice powder (bì), and a steamed egg meatloaf (chả). Finished with scallion oil, a fried egg on request, pickled vegetables, and a small bowl of sweet-savory fish sauce dipping sauce. The combination of textures — the char of the pork, the crunch of the bì, the silk of the egg meatloaf — is uniquely Saigonese. No northern Vietnamese city eats this."
                    tip="The sườn should have slightly charred edges — ask for 'sườn nướng than' (charcoal-grilled ribs) if the menu shows options. Eat the chả first while it's hot — it firms up quickly."
                    where="Cơm Tấm Thuận Kiều (multiple locations, District 5) — the standard bearer. Any cơm tấm cart on any residential street before 9am — the ones without signs, with motorbikes parked three deep outside."
                />

                <DishEntry
                    name="Hủ Tiếu Nam Vang"
                    time="6am – 2pm"
                    price="40,000 – 65,000 VND (€1.50 – €2.40)"
                    description="The Saigon noodle soup that Hanoians rarely eat and Saigonese eat constantly. Hủ tiếu is a rice noodle soup with roots in Cambodian-Chinese cooking (Nam Vang is the Vietnamese name for Phnom Penh), brought to Saigon by Teochew Chinese immigrants. The broth is clear and sweet from dried squid and pork bones. The noodles are thin and springy. Toppings: pork slices, shrimp, quail eggs, fried shallots, fresh chives. Served 'nước' (with broth) or 'khô' (dry, broth on the side). The dry version — tossed in soy and lard, broth separate — is the one locals prefer."
                    tip="Order 'hủ tiếu khô' (dry) for the version Saigonese actually eat. Mix the noodles quickly before they stick. Drink the broth separately, as a soup course."
                    where="Hủ Tiếu Nam Vang Thanh Xuân (278 Võ Văn Tần, District 3). Hủ Tiếu Mỹ Tho stalls in District 5 for the Mekong Delta variation — thicker noodles, stronger broth."
                />

                <SectionDivider />
                <SectionHeader>The All-Day Classics</SectionHeader>

                <DishEntry
                    name="Bánh Mì Sài Gòn"
                    time="6am – midnight (some carts: 24 hours)"
                    price="20,000 – 40,000 VND (€0.75 – €1.50)"
                    description="The Saigon version of bánh mì is sweeter, more generously filled, and more creative than the Hanoi version. The baguette is slightly softer (the southern humidity affects the crust). The fillings lean toward multiple proteins — pâté, Vietnamese ham (chả lụa), roasted pork, headcheese — with pickled daikon and carrot, cucumber, cilantro, and a liberal application of Maggi seasoning sauce and homemade chili paste. Some carts add butter. Some add fried egg. Some, famously, add everything. The benchmark bánh mì in Saigon is Bánh Mì Huỳnh Hoa on Lê Thị Riêng — a queue that forms at 3pm for a cart that opens at 4pm, selling sandwiches so overstuffed they require two hands."
                    tip="Bánh Mì Huỳnh Hoa is genuinely worth the queue. Arrive 30 minutes early. The bánh mì cart on your street corner at 6am is also genuinely excellent and requires no queue."
                    where="Bánh Mì Huỳnh Hoa (26 Lê Thị Riêng, District 1) — opens 4pm, sells out by 8pm. Bánh Mì 37 Nguyễn Trãi (District 1) — classic, reliable, no queue."
                />

                <DishEntry
                    name="Bún Thịt Nướng"
                    time="10am – 8pm"
                    price="35,000 – 55,000 VND (€1.30 – €2.00)"
                    description="A room-temperature noodle bowl that is entirely Saigonese — unknown in Hanoi, ubiquitous in the south. Rice vermicelli at the base, topped with grilled lemongrass pork (char-marked, slightly sweet from the marinade), crushed peanuts, fried shallots, sliced spring roll, fresh herbs, and bean sprouts. A generous pour of nước chấm — the dipping sauce adjusted for southern palates, sweeter and slightly less acidic than the northern version — goes over everything. The dish is assembled cold and eaten mixed, the warm pork the only heat in the bowl."
                    tip="Mix everything thoroughly before eating — the sauce needs to reach every noodle. The fried spring roll (chả giò) on top should arrive crispy. If it's soft, it's been sitting too long."
                    where="Any bún thịt nướng cart in residential neighborhoods. Bún Thịt Nướng Cô Ba Quận 3 (District 3) — a neighborhood classic."
                />

                <DishEntry
                    name="Bánh Xèo Miền Tây"
                    time="10am – 9pm"
                    price="45,000 – 80,000 VND (€1.65 – €3.00)"
                    description="The Mekong Delta version of the sizzling crêpe — larger, thinner, more coconut-forward than the central Vietnamese version. The batter is made with rice flour, coconut milk, and turmeric, producing a crêpe that shatters at the edges like glass. Inside: shrimp, pork belly lardons, bean sprouts, mung beans. Eaten wrapped in mustard leaf with fresh perilla, mint, and rice paddy herb, then dipped in a sweet-tangy nước chấm. The Saigon version uses a pan rather than a wok, producing a larger, flatter crêpe. The experience of eating it — the crackle, the herbs, the briny shrimp — is one of the great sensory events of Vietnamese street food."
                    tip="The batter must hit a screaming-hot pan. The sizzle (xèo) is the signal that the temperature is correct. A quiet pan produces a pale, soggy crêpe. Eat within 60 seconds of being made."
                    where="Bánh Xèo Mười Xiềm (204 Đinh Công Tráng, District 1) — the famous one. Bánh Xèo 46A Đinh Công Tráng — same street, same quality, less queue."
                />

                <SectionDivider />
                <SectionHeader>Evening and Night (6pm – Midnight)</SectionHeader>

                <DishEntry
                    name="Ốc (Vietnamese Snails and Shellfish)"
                    time="5pm – midnight"
                    price="80,000 – 200,000 VND (€3.00 – €7.30) per table"
                    description="The Saigon evening ritual. Groups of friends gather at plastic tables on District 4's Vĩnh Khánh Street — the seafood street — and spend two hours cracking shells, arguing about dipping sauces, and drinking iced Saigon beer. Ốc encompasses everything with a shell: periwinkles (ốc len), blood cockles (sò huyết), razor clams (nghêu), sea snails in various sizes (ốc bươu, ốc mỡ), mantis shrimp (tôm tít), and crab (cua). Each comes with its designated sauce — tamarind, ginger-fish sauce, lemongrass butter, salt-chili-lime — and the correct pairing is not negotiable."
                    tip="Arrive hungry and with at least three people — ốc is a communal activity, not a solo meal. Bring wet wipes. Everything will end up on your hands."
                    where="Vĩnh Khánh Street, District 4 — arrive after 7pm for the full atmosphere. Ốc Đào (Bình Thạnh) for a less touristy experience."
                />

                <DishEntry
                    name="Bánh Mì Đêm (Midnight Bánh Mì)"
                    time="9pm – 3am"
                    price="25,000 – 45,000 VND (€0.90 – €1.65)"
                    description="Saigon at midnight still has bánh mì carts. This is one of the more important facts about the city. The midnight bánh mì is not a lesser version of the daytime sandwich — it is often better, because the clientele at midnight is hungry in a different way (post-work, post-drinking, post-everything) and the vendors know it. The cart on Phạm Ngũ Lão that opens at 10pm and closes when the bread runs out serves one of the best bánh mì in the city. There is no sign. There is always a queue."
                    tip="The midnight bánh mì tastes different because you are hungry differently at midnight. Do not overthink it. Find a cart, order, eat standing up."
                    where="Phạm Ngũ Lão area, District 1 — multiple carts operating after 10pm. Bùi Viện Walking Street area for the tourist version; residential streets in District 3 and Bình Thạnh for the real thing."
                />

                <SectionDivider />

                {/* Saigon vs Hanoi comparison */}
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '40px 0', padding: '28px', background: '#fff', border: '1px solid rgba(75,46,26,0.1)', borderRadius: '4px' }}>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', color: '#D97706', textTransform: 'uppercase', marginBottom: '20px' }}>
                        SAIGON VS HANOI: THE FOOD DIFFERENCES
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                        {[
                            { city: 'Saigon', color: '#D97706', points: ['Sweeter flavor profile across all dishes', 'Coconut milk in soups and braises', 'Street food available 24 hours', 'Larger portions, more protein toppings', 'Bean sprouts and Thai basil standard', 'French and Chinese influence visible'] },
                            { city: 'Hanoi', color: '#2D1A0E', points: ['Subtler, more restrained flavors', 'Clear broths, less coconut', 'Best food finished by 9am', 'Smaller portions, more refined', 'Minimal herb plate (traditional)', 'Chinese-influenced but more conservative'] },
                        ].map((col) => (
                            <div key={col.city}>
                                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', color: col.color, textTransform: 'uppercase', marginBottom: '12px' }}>{col.city}</div>
                                {col.points.map((point) => (
                                    <div key={point} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: col.color, flexShrink: 0, marginTop: '6px' }} />
                                        <span style={{ fontFamily: 'Georgia, serif', fontSize: '13px', color: '#4B2E1A', lineHeight: 1.5 }}>{point}</span>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Rules */}
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '48px 0', padding: '32px', background: '#FEF3E2', borderLeft: '4px solid #D97706', borderRadius: '0 8px 8px 0' }}>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', color: '#D97706', textTransform: 'uppercase', marginBottom: '16px' }}>
                        HOW TO EAT IN SAIGON: 5 RULES
                    </p>
                    {[
                        { rule: 'Eat at any hour.', detail: 'Unlike Hanoi, Saigon has no sacred eating times. The city accommodates hunger around the clock.' },
                        { rule: 'Leave District 1 for meals.', detail: 'District 1 has tourist restaurants. Districts 3, 4, 5, and Bình Thạnh have the food Saigonese eat.' },
                        { rule: 'Embrace the sweet.', detail: 'Saigon food is sweeter than northern Vietnamese food. This is not a flaw. It is a choice the south has made for centuries.' },
                        { rule: 'Mix everything.', detail: 'Saigon noodle bowls (bún thịt nướng, hủ tiếu khô) are designed to be mixed. Eat them unmixed and you miss the point.' },
                        { rule: 'Find the queue.', detail: 'In Saigon as in Hanoi: the queue is the review. The cart with 20 motorbikes and no sign is serving the best food on the street.' },
                    ].map((item, i) => (
                        <div key={i} style={{ display: 'flex', gap: '16px', paddingBottom: '12px', marginBottom: '12px', borderBottom: i < 4 ? '1px solid rgba(75,46,26,0.1)' : 'none' }}>
                            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', fontWeight: 700, color: '#D97706', flexShrink: 0, minWidth: '28px' }}>{String(i + 1).padStart(2, '0')}</span>
                            <div>
                                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 600, color: '#2D1A0E' }}>{item.rule} </span>
                                <span style={{ fontFamily: 'Georgia, serif', fontSize: '13px', color: '#6B5544', fontStyle: 'italic' }}>{item.detail}</span>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Related */}
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '48px 0', padding: '28px', background: '#fff', border: '1px solid rgba(75,46,26,0.1)', borderRadius: '4px' }}>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', color: '#D97706', textTransform: 'uppercase', marginBottom: '16px' }}>
                        MAKE THESE SAIGON CLASSICS AT HOME
                    </p>
                    {[
                        { title: 'Saigon Broken Rice (Cơm Tấm Sườn Bì Chả)', slug: 'com-tam-suon-bi-cha' },
                        { title: 'Bánh Mì Thịt Nướng', slug: 'banh-mi' },
                        { title: 'Crispy Vietnamese Sizzling Crêpe (Bánh Xèo)', slug: 'banh-xeo' },
                    ].map((recipe) => (
                        <Link key={recipe.slug} href={`/recipes/${recipe.slug}`}
                            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid rgba(75,46,26,0.07)', textDecoration: 'none' }}>
                            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', color: '#2D1A0E', fontWeight: 600 }}>{recipe.title}</span>
                            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#D97706', fontWeight: 600 }}>Recipe →</span>
                        </Link>
                    ))}
                </motion.div>

                {/* Cross-link to Hanoi guide */}
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '32px 0', padding: '20px 24px', background: '#2D1A0E', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                    <div>
                        <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', color: '#D97706', marginBottom: '4px' }}>ALSO READ</div>
                        <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', color: '#F5EDE3', fontWeight: 600 }}>The Honest Hanoi Street Food Guide</span>
                    </div>
                    <Link href="/stories/hanoi-street-food-guide"
                        style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 600, color: '#D97706', textDecoration: 'none', whiteSpace: 'nowrap' }}>
                        Read the guide →
                    </Link>
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
    name: string; time: string; price: string; description: string; tip: string; where: string;
}) {
    return (
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.55 }}
            style={{ margin: '32px 0', background: '#fff', border: '1px solid rgba(75,46,26,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ padding: '16px 24px', borderBottom: '1px solid rgba(75,46,26,0.07)', background: '#FDFAF7', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', fontWeight: 700, color: '#2D1A0E', margin: 0 }}>{name}</h3>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
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