'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

export default function VietnameseCoffeeCulturePage() {
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
                <motion.div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/recipes/ca-phe-sua-da.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', scale: heroScale }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(45,26,14,0.3) 0%, rgba(45,26,14,0.15) 35%, rgba(45,26,14,0.93) 100%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 24px 80px' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#D97706' }} />
                                <span style={{ color: '#D97706', fontSize: '12px', letterSpacing: '2px', fontWeight: 700, fontFamily: 'DM Sans, sans-serif' }}>
                                    VIETNAMESE COFFEE · CULTURE · HISTORY
                                </span>
                            </div>
                            <h1 style={{ fontFamily: 'Playfair Display, serif', color: '#FFF', fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '24px', maxWidth: '900px' }}>
                                Vietnamese Coffee Culture: Why the World's Second-Largest Coffee Producer Drinks It Differently
                            </h1>
                            <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', maxWidth: '720px', lineHeight: 1.5, marginBottom: '32px' }}>
                                Vietnam produces more coffee than almost anyone on earth. It drinks it slower than anyone on earth. The two facts are connected.
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', color: 'rgba(255,255,255,0.6)', fontSize: '14px', fontFamily: 'DM Sans, sans-serif' }}>
                                <span>By Quan Huy Nguyen</span>
                                <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'currentColor' }} />
                                <span>May 26, 2026</span>
                                <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'currentColor' }} />
                                <span>7 min read</span>
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
                    In Vietnam, coffee is not a morning fuel. It is not a quick hit consumed standing up in a paper cup on the way to somewhere else. It is a reason to sit down. A reason to talk, or not to talk. A reason to watch the street for an hour. The plastic chair is mandatory. The phin filter dripping slowly is mandatory. The complete absence of hurry is mandatory.
                </motion.p>

                <Section>
                    <DropCap>V</DropCap>ietnam is the second-largest coffee producer in the world, after Brazil. It grows approximately 30 million 60-kilogram bags per year, most of it robusta — the bold, high-caffeine variety that the specialty coffee world spent decades dismissing and is now reconsidering. The Vietnamese robusta that fills the Central Highlands of Đắk Lắk, Lâm Đồng, and Gia Lai is not the robusta of instant coffee sachets, though it ends up there too. At its best, it is dark, earthy, slightly chocolatey, with a bitterness that the Vietnamese palate has learned — over 160 years — to treat not as a flaw but as a feature.
                </Section>

                <Section>
                    Coffee came to Vietnam with French missionaries in 1857. The first plants were arabica, brought from Ethiopia via France, planted in the highlands that reminded the colonizers of plantation conditions elsewhere. The arabica did not thrive — Vietnam's climate was too hot, too humid, too much. Robusta, which arrived later and proved more tolerant of the conditions, took over. The French built a colonial economy around it. Vietnamese laborers cultivated it. After independence, after war, after reunification, it was one of the crops that rebuilt the country: the government invested in coffee cultivation in the 1980s and within two decades had turned Vietnam into one of the dominant forces in global coffee production.
                </Section>

                <PullQuote>
                    "The phin filter was not designed for convenience. It was designed for patience."
                </PullQuote>

                <SectionDivider />
                <SectionHeader>The Phin Filter: Slow by Design</SectionHeader>

                <Section>
                    The defining instrument of Vietnamese coffee is the phin — a small, individual aluminum filter that sits on top of a glass and drips coffee slowly, one drop at a time, for three to five minutes. It holds approximately two tablespoons of ground coffee. It produces a concentrate of extraordinary intensity. It is the opposite of an espresso machine in every conceivable way: cheap, manual, slow, individual, and completely indifferent to your schedule.
                </Section>

                <Section>
                    The phin filter was not designed for convenience. It was designed for patience. You place it on the glass, add the coffee, pour a small amount of hot water to let the grounds bloom, then fill it and wait. There is nothing to do while you wait except sit there. The Vietnamese coffee shop culture — the culture of plastic chairs on sidewalks, of hours spent watching the street, of conversations that go nowhere because there is nowhere they need to go — is a direct consequence of an instrument that makes rushing impossible.
                </Section>

                <Section>
                    The water temperature matters. Too hot and the coffee turns bitter — the phin filter has no pressure to force extraction quickly, so longer contact with too-hot water over-extracts. The ideal temperature is 90-92°C, just below boiling. Vietnamese coffee connoisseurs will tell you to boil the water, let it sit for 30 seconds, then pour. This is not fussiness. It is the difference between a cup that tastes like the coffee was speaking and one that tastes like the coffee was shouting.
                </Section>

                <SectionDivider />
                <SectionHeader>The Drinks: A Complete Guide</SectionHeader>

                <CoffeeCard
                    name="Cà Phê Sữa Đá"
                    english="Vietnamese Iced Coffee with Condensed Milk"
                    description="The foundation. Strong dark-roast robusta dripped through a phin filter into a glass of condensed milk, then poured over crushed ice. The condensed milk — sweetened, thick, slightly caramelized — rounds the bitterness into something sweet and deeply satisfying. The contrast between the black concentrate and the white milk swirling through ice is one of the great visual pleasures of Vietnamese street food culture."
                    howTo="Pour condensed milk (2-3 tablespoons) into the bottom of a glass. Place the phin on top, add coffee, brew. When done, stir vigorously. Pour over a glass of crushed ice. Drink through a wide straw so each sip contains both the dark coffee and the melted milk."
                    note="Use sweetened condensed milk, not evaporated milk. The distinction matters enormously."
                />

                <CoffeeCard
                    name="Cà Phê Trứng"
                    english="Egg Coffee"
                    description="Invented in Hanoi in the 1940s by Nguyễn Văn Giảng, a bartender at the Sofitel Metropole hotel, when condensed milk was rationed during the French war. He whipped egg yolk with sugar until pale and thick, then spooned it over strong black coffee. The result — a warm drink topped with a custardy, vanilla-scented foam — tastes like a liquid tiramisu. It is one of the great accidental inventions of food history."
                    howTo="Brew a strong black coffee in a phin (no milk). Whisk 2 egg yolks with 2 tablespoons condensed milk and a pinch of vanilla until pale, thick, and ribbon-like — about 3-4 minutes by hand. Spoon the foam over the hot coffee. Eat the foam first with a spoon, then stir and drink."
                    note="The eggs must be very fresh. The foam should hold its shape for several minutes — if it collapses immediately, whisk longer."
                />

                <CoffeeCard
                    name="Cà Phê Muối"
                    english="Salt Coffee"
                    description="A Huế specialty that has been spreading slowly through Vietnam for decades and has recently found an international audience. Strong coffee, served with a thick cream layer that has been gently salted. The salt amplifies the sweetness of the condensed milk while cutting the bitterness of the robusta, creating a balance that tastes simultaneously familiar and surprising. Anthony Bourdain tried it in Huế and could not adequately explain why it worked. It works."
                    howTo="Brew strong black coffee. Whip heavy cream with a pinch of salt and a tablespoon of condensed milk until it forms soft peaks. Pour the coffee into a glass. Spoon the salted cream gently on top — do not stir. Drink through the cream layer so each sip passes through the salt before hitting the coffee."
                    note="The salt layer must stay distinct from the coffee below. Stirring destroys the effect."
                />

                <CoffeeCard
                    name="Cà Phê Đen"
                    english="Vietnamese Black Coffee"
                    description="The purist's version. Nothing but coffee and water — no milk, no sugar, no ice. Served hot in a small glass, sometimes on a saucer with a single sugar cube on the side that most Vietnamese drinkers ignore. The flavor of properly brewed Vietnamese robusta black is intense, slightly smoky, with dark chocolate and earth notes that arabica cannot replicate. Many Western specialty coffee drinkers who have dismissed robusta have not tried it brewed correctly at origin."
                    howTo="Phin filter, 2 tablespoons fine-ground dark roast robusta, 90°C water. Brew slowly. Drink hot, before it cools. No sugar if you want to taste what the coffee actually is."
                    note="Vietnamese black coffee is stronger than espresso. Sip it slowly. It is not a drink for the impatient."
                />

                <CoffeeCard
                    name="Bạc Xỉu"
                    english="White Coffee (Milk-Forward)"
                    description="The gentle introduction to Vietnamese coffee for those who find cà phê sữa đá too intense. The ratio is reversed — mostly milk, a small amount of coffee — producing a sweet, creamy drink that is technically coffee but functions more like a flavored milk. Popular in Saigon, where the hotter climate and sweeter palate produce a different coffee culture than Hanoi. Older generations in the south remember bạc xỉu as the drink of childhood — given to children alongside adults who drank the full-strength version."
                    howTo="Same phin setup, but pour only a small amount of coffee concentrate over a much larger amount of condensed milk and ice. The coffee should tint the milk, not dominate it."
                    note="Bạc xỉu is a Saigon drink. Order it in Hanoi and the server will look at you strangely."
                />

                <SectionDivider />
                <SectionHeader>The Café as Social Institution</SectionHeader>

                <Section>
                    The Vietnamese coffee shop is not a place you go to work on your laptop in forty-five minutes before a meeting. It is a place you go to sit. The chairs are designed for lingering — low, slightly uncomfortable after the first hour, but positioned perfectly to watch the street. The tables are small. The music, when there is any, is at a volume that permits conversation. The staff will refill your water glass and otherwise leave you entirely alone for as long as you wish to remain.
                </Section>

                <Section>
                    This is a deliberate choice. Vietnamese café culture is built on the premise that time spent sitting and talking, or sitting and thinking, or sitting and doing nothing in particular, is not wasted time. It is the point of the exercise. The coffee is the reason to sit down. What happens after you sit down is the reason you stayed.
                </Section>

                <Section>
                    The rise of global coffee chains in Vietnamese cities — the Starbucks on Nguyễn Huệ, the Highlands Coffee on every corner — has not displaced the traditional café culture. It has added a layer on top of it. The plastic-stool sidewalk café has not disappeared. The grandmother who has been running the same three-table operation on the same alley for thirty years has not closed. She has simply acquired neighbors who sell cold brew in mason jars. They coexist, largely without friction, because they are not really competing for the same thing. The chain sells convenience and air conditioning. The grandmother's stall sells something that has no English word: the feeling of belonging somewhere specific, at a specific time of day, in a specific city, doing nothing in particular and being exactly where you are supposed to be.
                </Section>

                <PullQuote>
                    "The grandmother's stall sells something that has no English word: belonging somewhere specific."
                </PullQuote>

                <SectionDivider />

                {/* Stats callout */}
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', margin: '48px 0' }}>
                    {[
                        { num: '#2', label: 'Largest coffee producer in the world', sub: 'after Brazil' },
                        { num: '81%', label: 'Of production is Robusta', sub: 'most in the world' },
                        { num: '$550M', label: 'Vietnamese coffee market 2026', sub: 'growing 8% yearly' },
                    ].map((stat) => (
                        <div key={stat.label} style={{ background: '#FEF3E2', padding: '20px', borderTop: '3px solid #D97706', textAlign: 'center' }}>
                            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: 700, color: '#D97706', lineHeight: 1 }}>{stat.num}</div>
                            <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#4B2E1A', marginTop: '8px', lineHeight: 1.4, fontWeight: 600 }}>{stat.label}</div>
                            <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#8B6F5A', marginTop: '4px' }}>{stat.sub}</div>
                        </div>
                    ))}
                </motion.div>

                <Section>
                    Vietnam's coffee is now finding serious appreciation in the specialty coffee world — single-origin robusta from Đắk Lắk appearing on pour-over menus in London and Tokyo, natural-process lots from Lâm Đồng winning international competitions. This is new. For most of its history, Vietnamese robusta was blended, anonymized, and shipped in containers to become someone else's espresso without credit. The shift toward traceability and single-origin recognition is changing not just the economics but the story: Vietnamese coffee, grown by half a million smallholder families in the Central Highlands, is beginning to be understood as what it always was — one of the world's great coffee origins, misclassified for decades by a market that valued bean type over terroir.
                </Section>

                <Section>
                    In the meantime, on the plastic stool on the sidewalk in Hanoi or Saigon, the phin keeps dripping. The condensed milk settles at the bottom of the glass. Someone is watching the street. The coffee is taking its time. So is everyone who drinks it.
                </Section>

                <SectionDivider />

                {/* Recipe links */}
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '48px 0', padding: '28px', background: '#FEF3E2', borderLeft: '4px solid #D97706', borderRadius: '0 8px 8px 0' }}>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', color: '#D97706', textTransform: 'uppercase', marginBottom: '16px' }}>
                        MAKE THESE AT HOME
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {[
                            { title: 'Cà Phê Sữa Đá — Vietnamese Iced Coffee', slug: 'ca-phe-sua-da' },
                            { title: 'Cà Phê Trứng — Hanoi Egg Coffee', slug: 'ca-phe-trung' },
                            { title: 'Cà Phê Muối — Huế Salt Coffee', slug: 'ca-phe-muoi' },
                        ].map((recipe) => (
                            <Link key={recipe.slug} href={`/recipes/${recipe.slug}`}
                                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid rgba(75,46,26,0.1)', textDecoration: 'none' }}>
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

function CoffeeCard({ name, english, description, howTo, note }: {
    name: string; english: string; description: string; howTo: string; note: string;
}) {
    return (
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.55 }}
            style={{ margin: '28px 0', background: '#fff', border: '1px solid rgba(75,46,26,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ padding: '14px 24px', borderBottom: '1px solid rgba(75,46,26,0.07)', background: '#2D1A0E' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.15rem', fontWeight: 700, color: '#F5EDE3', margin: '0 0 2px' }}>{name}</h3>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#D97706', letterSpacing: '0.05em' }}>{english}</span>
            </div>
            <div style={{ padding: '18px 24px' }}>
                <p style={{ fontFamily: 'Georgia, serif', fontSize: '14px', lineHeight: 1.75, color: '#4B2E1A', marginBottom: '14px' }}>{description}</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    <div style={{ background: '#FDFAF7', padding: '12px', borderRadius: '4px', borderLeft: '3px solid #D97706' }}>
                        <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', color: '#D97706', marginBottom: '6px' }}>HOW TO MAKE</div>
                        <p style={{ fontFamily: 'Georgia, serif', fontSize: '12px', lineHeight: 1.6, color: '#6B5544', margin: 0 }}>{howTo}</p>
                    </div>
                    <div style={{ background: '#FFF8E8', padding: '12px', borderRadius: '4px', borderLeft: '3px solid #92580A' }}>
                        <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', color: '#92580A', marginBottom: '6px' }}>NOTE</div>
                        <p style={{ fontFamily: 'Georgia, serif', fontSize: '12px', lineHeight: 1.6, color: '#6B5544', margin: 0, fontStyle: 'italic' }}>{note}</p>
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