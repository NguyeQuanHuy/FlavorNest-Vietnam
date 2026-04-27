'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const STATS = [
    { value: '100+', label: 'Recipes tested' },
    { value: '3', label: 'Regions covered' },
    { value: '1', label: 'Kitchen in Germany' },
    { value: '∞', label: 'Bowls of pho consumed' },
];

const VALUES = [
    {
        icon: '🏠',
        title: 'The Home Kitchen Test',
        body: `Every recipe on this site has been cooked in my apartment kitchen in Gotha, Thuringia — on a four-burner stove, with ingredients I can actually find at the Asian supermarket forty minutes away. If I can't make it work here, it doesn't go up.`,
    },
    {
        icon: '📖',
        title: 'Story Before Recipe',
        body: `I refuse to publish a recipe without telling you where it comes from, who taught it, and why it matters. A list of ingredients without context is just instructions. Context is what makes you care enough to actually cook it.`,
    },
    {
        icon: '🌱',
        title: 'Before It Disappears',
        body: `Every year, more young Vietnamese leave their villages for the cities. The recipes their grandmothers knew by heart — never written down because they lived in hands and instinct — are beginning to thin out. FlavorNest is, in small part, an attempt to slow that down.`,
    },
    {
        icon: '🤝',
        title: 'No Shortcuts, No Fakes',
        body: `I don't substitute fish sauce with soy. I don't simplify recipes to make them more "accessible." If the real version takes 10 hours, I write the 10-hour version — and I tell you honestly what you can skip and what you absolutely cannot.`,
    },
];

const JOURNEY = [
    {
        year: '2024',
        event: `I moved to Germany and quickly discovered that the food I missed most was completely invisible here. Not just hard to find — invisible. Nobody was writing about banh canh he in English. Nobody outside of Phu Yen province even knew it existed.`,
    },
    {
        year: '2026',
        event: `The first version of FlavorNest went live — twenty recipes, mostly from my mother's kitchen, written the way she taught them to me over phone calls that stretched past midnight German time.`,
    },
    {
        year: '2026',
        event: `The project expanded beyond Phu Yen. Northern pho, Hue bun bo, Saigon com tam. Stories about fermentation, rice civilisation, the royal kitchens of the Nguyen dynasty. The site became what I actually wanted it to be.`,
    },
    {
        year: '2026',
        event: `Still writing. Still testing. Still calling my mother when a recipe doesn't taste right. Some things do not change and should not.`,
    },
];

export default function AboutPage() {
    return (
        <main style={{ minHeight: '100vh', background: '#FAFAF7', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600;1,700&display=swap');
                * { box-sizing: border-box; }
                .stats-grid { grid-template-columns: repeat(4, 1fr); }
                @media (max-width: 640px) {
                    .founder-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
                    .founder-grid > div:first-child { margin: 0 auto; }
                    .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
                    .values-grid { grid-template-columns: 1fr !important; }
                    .journey-grid { grid-template-columns: 60px 1fr !important; gap: 20px !important; }
                    .cta-buttons { flex-direction: column !important; align-items: center !important; }
                }
`}</style>

            {/* ── HERO ── */}
            <section style={{ background: 'linear-gradient(135deg, #1A0E07 0%, #2D1A0E 100%)', padding: '140px 24px 100px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 75% 50%, rgba(217,119,6,0.09) 0%, transparent 60%)', pointerEvents: 'none' }} />
                <div style={{ maxWidth: 860, margin: '0 auto', position: 'relative' }}>
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(217,119,6,0.12)', border: '1px solid rgba(217,119,6,0.25)', borderRadius: 100, padding: '7px 18px', marginBottom: 28 }}>
                            <span style={{ fontSize: 13 }}>🍜</span>
                            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#FBB040' }}>Our Story</span>
                        </div>
                        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(38px, 6vw, 72px)', fontWeight: 800, color: 'white', margin: '0 0 24px', lineHeight: 1.05 }}>
                            This started with<br />
                            <span style={{ color: '#D97706', fontStyle: 'italic' }}>missing home.</span>
                        </h1>
                        <p style={{ fontSize: 19, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: 620, margin: 0 }}>
                            FlavorNest is a Vietnamese food blog built in a small apartment in Germany, by someone who moved away from Vietnam and could not stop thinking about what he left behind on the table.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ── STATS ── */}
            <section style={{ background: '#4B2E1A' }}>
                <div style={{
                    maxWidth: 860, margin: '0 auto', padding: '32px 24px',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: 0,
                }}
                    className="stats-grid"
                >
                    {STATS.map((s, i) => (
                        <div key={i} style={{
                            textAlign: 'center',
                            padding: '20px 0',
                            borderRight: i % 2 === 0 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                            borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                        }}>
                            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 800, color: '#D97706', margin: 0, lineHeight: 1 }}>{s.value}</p>
                            <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', margin: '8px 0 0' }}>{s.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── FOUNDER ── */}
            <section style={{ maxWidth: 860, margin: '0 auto', padding: '96px 24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48 }}>
                    <div style={{ width: 28, height: 1.5, background: '#D97706' }} />
                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#D97706', textTransform: 'uppercase' }}>The Founder</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 56, alignItems: 'start' }}
                    className="founder-grid">
                    {/* Photo */}
                    <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <div style={{ width: 200, height: 240, borderRadius: 24, overflow: 'hidden', position: 'relative', flexShrink: 0, boxShadow: '0 24px 60px rgba(75,46,26,0.2)', border: '3px solid rgba(217,119,6,0.2)' }}>
                            <Image
                                src="/images/team/huy-nguyen.jpg"
                                alt="Nguyen Quan Huy — Founder of FlavorNest Vietnam"
                                fill
                                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                                sizes="200px"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                    if (target.parentElement) {
                                        target.parentElement.style.background = 'linear-gradient(135deg, #D97706, #4B2E1A)';
                                        target.parentElement.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;font-family:Playfair Display,serif;font-size:48px;font-weight:700;color:white">QH</div>`;
                                    }
                                }}
                            />
                        </div>
                        <div style={{ marginTop: 20, textAlign: 'center' }}>
                            <p style={{ fontSize: 13, fontWeight: 700, color: '#2D1A0E', margin: '0 0 4px' }}>Nguyen Quan Huy</p>
                            <p style={{ fontSize: 11, color: '#D97706', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0 }}>Founder & Writer</p>
                            <p style={{ fontSize: 12, color: 'rgba(75,46,26,0.5)', margin: '6px 0 0', fontStyle: 'italic' }}>Gotha, Thuringia, Germany</p>
                        </div>
                    </motion.div>

                    {/* Bio */}
                    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
                        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, color: '#2D1A0E', margin: '0 0 28px', lineHeight: 1.15 }}>
                            I grew up in Phu Yen province,<br />
                            <span style={{ color: '#D97706', fontStyle: 'italic' }}>on the south-central coast of Vietnam.</span>
                        </h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: 18, fontSize: 17, lineHeight: 1.85, color: 'rgba(45,26,14,0.78)' }}>
                            <p style={{ margin: 0 }}>
                                My mother cooked every morning before the rest of the house woke up. Banh canh he — thick rice noodles in pork broth, finished with a fistful of raw garlic chives — was Sunday breakfast. Pork braised in coconut water with hard-boiled eggs was the smell of every Tet. I did not know any of this was special. It was just what food was.
                            </p>
                            <p style={{ margin: 0 }}>
                                Then I moved to Germany, and I found out what food was to everyone else. Good food — genuinely good food — but not my food. I searched for banh canh he in English and found nothing. I searched for ga la e — the chicken dish made with litsea leaves that grow wild in the hills above my hometown — and found nothing. It was as if the food I grew up eating did not exist outside the province where I was born.
                            </p>
                            <p style={{ margin: 0 }}>
                                That was when I understood that I needed to write it down.
                            </p>
                            <blockquote style={{ borderLeft: '3px solid #D97706', margin: '8px 0', padding: '4px 0 4px 24px' }}>
                                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontStyle: 'italic', color: '#4B2E1A', lineHeight: 1.5, margin: 0 }}>
                                    "FlavorNest is my attempt, in spare evenings and weekends, to bring that food into writing — and to share it with anyone willing to stand at a stove for a few hours."
                                </p>
                            </blockquote>
                            <p style={{ margin: 0 }}>
                                I am not a professional chef. I am not a food scientist. I am a person who misses home and has learned to cook my way back to it. Every recipe on this site was tested in my kitchen here in Gotha, usually late at night, often after calling my mother to ask why it didn't taste right. She always knows why.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── MISSION ── */}
            <section style={{ background: '#2D1A0E', padding: '96px 24px' }}>
                <div style={{ maxWidth: 860, margin: '0 auto' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                        <div style={{ width: 28, height: 1.5, background: '#D97706' }} />
                        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#D97706', textTransform: 'uppercase' }}>Why This Exists</span>
                    </div>
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 5vw, 52px)', fontWeight: 800, color: 'white', margin: '0 0 28px', lineHeight: 1.1 }}>
                        Some of the best dishes in Vietnam<br />
                        <span style={{ color: '#D97706', fontStyle: 'italic' }}>have never been written down.</span>
                    </h2>
                    <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.6)', lineHeight: 1.85, maxWidth: 680, margin: '0 0 56px' }}>
                        They live in grandmothers' hands, in village kitchens, in the muscle memory of cooks who have never needed a recipe because they have made the same dish every week for forty years. When those cooks are gone, the recipe goes with them. FlavorNest is, in small part, an attempt to write them down before that happens.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
                        {VALUES.map((v, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: '28px 24px' }}>
                                <span style={{ fontSize: 28, display: 'block', marginBottom: 14 }}>{v.icon}</span>
                                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: 'white', margin: '0 0 10px' }}>{v.title}</h3>
                                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, margin: 0 }}>{v.body}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── JOURNEY ── */}
            <section style={{ maxWidth: 860, margin: '0 auto', padding: '96px 24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 56 }}>
                    <div style={{ width: 28, height: 1.5, background: '#D97706' }} />
                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#D97706', textTransform: 'uppercase' }}>How We Got Here</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                    {JOURNEY.map((j, i) => (
                        <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                            style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 32, paddingBottom: i < JOURNEY.length - 1 ? 48 : 0, position: 'relative' }}>
                            {i < JOURNEY.length - 1 && (
                                <div style={{ position: 'absolute', left: 39, top: 40, bottom: 0, width: 1, background: 'rgba(75,46,26,0.12)' }} />
                            )}
                            <div style={{ textAlign: 'center', paddingTop: 4 }}>
                                <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#D97706', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', boxShadow: '0 0 0 6px rgba(217,119,6,0.1)' }}>
                                    <span style={{ fontSize: 11, fontWeight: 800, color: 'white' }}>{j.year.slice(2)}</span>
                                </div>
                                <p style={{ fontSize: 13, fontWeight: 700, color: '#D97706', margin: '8px 0 0' }}>{j.year}</p>
                            </div>
                            <div style={{ paddingTop: 8 }}>
                                <p style={{ fontSize: 16, color: 'rgba(45,26,14,0.75)', lineHeight: 1.8, margin: 0 }}>{j.event}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── CTA ── */}
            <section style={{ background: 'linear-gradient(135deg, #1A0E07, #2D1A0E)', padding: '80px 24px' }}>
                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
                    style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: 'white', margin: '0 0 16px', lineHeight: 1.15 }}>
                        Ready to cook something real?
                    </h2>
                    <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, margin: '0 0 36px' }}>
                        Start with the recipes I miss most — the ones from home.
                    </p>
                    <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link href="/recipes" style={{ display: 'inline-block', background: '#D97706', color: 'white', fontWeight: 700, fontSize: 15, padding: '14px 32px', borderRadius: 100, textDecoration: 'none', transition: 'all 0.2s' }}
                            onMouseEnter={e => (e.currentTarget.style.background = '#B45309')}
                            onMouseLeave={e => (e.currentTarget.style.background = '#D97706')}>
                            Browse All Recipes →
                        </Link>
                        <Link href="/stories" style={{ display: 'inline-block', background: 'rgba(255,255,255,0.08)', color: 'white', fontWeight: 600, fontSize: 15, padding: '14px 32px', borderRadius: 100, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.15)', transition: 'all 0.2s' }}
                            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.14)')}
                            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}>
                            Read the Stories
                        </Link>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
