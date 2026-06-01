'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { getAllRecipes } from '@/data/index';

const recipes = getAllRecipes();
const recipeCount = recipes.length;
const avgRating = (recipes.reduce((sum, r) => sum + (Number(r.rating) || 4.8), 0) / recipes.length).toFixed(1);

const PILLARS = [
    { icon: '🏡', title: 'Truly Authentic', body: 'Every recipe sourced from Vietnamese home cooks and street vendors — not fusion restaurant menus.' },
    { icon: '🌿', title: 'Fresh & Healthy', body: 'Vietnamese cuisine is naturally nutritious — vibrant herbs, lean proteins and crisp vegetables in every dish.' },
    { icon: '👨‍🍳', title: 'Beginner-Friendly', body: 'Clear step-by-step instructions with ingredient substitutions so anyone, anywhere can cook Vietnamese food.' },
    { icon: '🔬', title: 'Kitchen-Tested', body: 'Every recipe tested in a real home kitchen in Germany — no specialist equipment, no commercial wok burners.' },
];

const STATS = [
    { value: `${recipeCount}+`, label: 'Recipes' },
    { value: avgRating, label: 'Avg Rating' },
    { value: '3', label: 'Regions' },
    { value: '1', label: 'Kitchen' },
];

export default function WhyFlavorNest() {
    return (
        <section style={{ background: '#F5EDE3', padding: '64px 0 0' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 20px' }}>
                {/* Label */}
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
                    style={{ textAlign: 'center', marginBottom: 40 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: '#D97706', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 10 }}>Why FlavorNest?</div>
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, color: '#2D1A0E', margin: '0 0 10px', lineHeight: 1.15 }}>
                        Your Home. <span style={{ color: '#D97706', fontStyle: 'italic' }}>Our Nest.</span>
                    </h2>
                    <p style={{ fontSize: 15, color: 'rgba(75,46,26,0.55)', maxWidth: 480, margin: '0 auto', lineHeight: 1.6 }}>
                        Built in a small apartment in Germany, by someone who could not stop thinking about the food left behind.
                    </p>
                </motion.div>

                {/* Pillars grid — 2x2 on mobile, 4 col on desktop */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginBottom: 0 }}>
                    {PILLARS.map((p, i) => (
                        <motion.div key={p.title}
                            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                            style={{ background: '#fff', borderRadius: 20, padding: '20px', boxShadow: '0 2px 12px rgba(75,46,26,0.06)', border: '1px solid rgba(75,46,26,0.07)' }}>
                            <div style={{ width: 44, height: 44, borderRadius: 14, background: 'rgba(217,119,6,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, marginBottom: 12 }}>
                                {p.icon}
                            </div>
                            <div style={{ fontSize: 14, fontWeight: 700, color: '#2D1A0E', marginBottom: 6 }}>{p.title}</div>
                            <div style={{ fontSize: 13, color: 'rgba(75,46,26,0.6)', lineHeight: 1.6 }}>{p.body}</div>
                        </motion.div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', padding: '24px 0 0' }}>
                    <Link href="/stories/about" style={{ fontSize: 14, fontWeight: 600, color: '#D97706', textDecoration: 'none' }}>
                        Our full story →
                    </Link>
                </div>
            </div>

            {/* Stats bar */}
            <div style={{ background: '#2D1A0E', marginTop: 48 }}>
                <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 20px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
                    {STATS.map((s, i) => (
                        <motion.div key={s.label}
                            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                            style={{ padding: '28px 16px', textAlign: 'center', borderRight: i < STATS.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
                            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 800, color: '#D97706', lineHeight: 1 }}>{s.value}</div>
                            <div style={{ fontSize: 11, color: 'rgba(245,237,227,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 6 }}>{s.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}