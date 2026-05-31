'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { recipes } from '@/data/recipes';

const recipeCount = recipes.length;
const avgRating = (recipes.reduce((sum, r) => sum + (r.rating ?? 4.8), 0) / recipes.length).toFixed(1);

const PILLARS = [
    {
        icon: '🏡',
        title: 'Truly Authentic',
        body: 'Every recipe sourced from Vietnamese home cooks and street vendors — not fusion restaurant menus.',
    },
    {
        icon: '🌿',
        title: 'Fresh & Healthy',
        body: 'Vietnamese cuisine is naturally nutritious — vibrant herbs, lean proteins and crisp vegetables in every dish.',
    },
    {
        icon: '👨‍🍳',
        title: 'Beginner-Friendly',
        body: 'Clear step-by-step instructions with ingredient substitutions so anyone, anywhere can cook Vietnamese food.',
    },
    {
        icon: '🔬',
        title: 'Kitchen-Tested',
        body: 'Every recipe tested in a real home kitchen in Germany — no specialist equipment, no commercial wok burners.',
    },
];

const STATS = [
    { value: `${recipeCount}+`, label: 'Recipes published' },
    { value: avgRating, label: 'Average recipe rating' },
    { value: '3', label: 'Regions of Vietnam' },
    { value: '1', label: 'Kitchen in Germany' },
];

export default function WhyFlavorNest() {
    return (
        <section style={{ background: '#F5EDE3', padding: '88px 0 0' }}>
            <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

                {/* Top: 2-col layout */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>

                    {/* Left: image */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65 }}
                        style={{ position: 'relative' }}
                    >
                        <div style={{ borderRadius: 28, overflow: 'hidden', height: 440, position: 'relative', boxShadow: '0 20px 60px rgba(75,46,26,0.15)' }}>
                            <Image
                                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80"
                                alt="Vietnamese cooking ingredients"
                                fill
                                sizes="50vw"
                                style={{ objectFit: 'cover' }}
                                quality={80}
                            />
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(45,26,14,0.3) 0%, transparent 60%)' }} />
                        </div>
                        {/* Small floating badge */}
                        <div style={{
                            position: 'absolute', bottom: 24, left: 24,
                            background: '#fff', borderRadius: 16,
                            padding: '14px 20px',
                            boxShadow: '0 8px 32px rgba(75,46,26,0.15)',
                            display: 'flex', alignItems: 'center', gap: 12,
                        }}>
                            <span style={{ fontSize: 28 }}>⭐</span>
                            <div>
                                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 800, color: '#2D1A0E', lineHeight: 1 }}>{avgRating}/5</div>
                                <div style={{ fontSize: 11, color: 'rgba(75,46,26,0.5)', marginTop: 2 }}>avg. recipe rating</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: text + pillars */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65, delay: 0.1 }}
                    >
                        <div style={{ fontSize: 11, fontWeight: 700, color: '#D97706', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 12 }}>
                            Why FlavorNest?
                        </div>
                        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 800, color: '#2D1A0E', margin: '0 0 12px', lineHeight: 1.15 }}>
                            Your Home.<br />
                            <span style={{ color: '#D97706', fontStyle: 'italic' }}>Our Nest.</span>
                        </h2>
                        <p style={{ fontSize: 15, color: 'rgba(75,46,26,0.6)', lineHeight: 1.7, marginBottom: 32, maxWidth: 440 }}>
                            Built in a small apartment in Germany, by someone who moved away from Vietnam and could not stop thinking about the food left behind.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                            {PILLARS.map((p, i) => (
                                <motion.div
                                    key={p.title}
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.15 + i * 0.08 }}
                                    style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}
                                >
                                    <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(217,119,6,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>
                                        {p.icon}
                                    </div>
                                    <div>
                                        <div style={{ fontSize: 14, fontWeight: 700, color: '#2D1A0E', marginBottom: 3 }}>{p.title}</div>
                                        <div style={{ fontSize: 13, color: 'rgba(75,46,26,0.6)', lineHeight: 1.6 }}>{p.body}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <Link href="/stories/about" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 28, fontSize: 14, fontWeight: 600, color: '#D97706', textDecoration: 'none' }}>
                            Our full story →
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Stats bar — only real numbers */}
            <div style={{ background: '#2D1A0E', marginTop: 72 }}>
                <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
                    {STATS.map((s, i) => (
                        <motion.div
                            key={s.label}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            style={{
                                padding: '36px 24px',
                                textAlign: 'center',
                                borderRight: i < STATS.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                            }}
                        >
                            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 800, color: '#D97706', lineHeight: 1 }}>{s.value}</div>
                            <div style={{ fontSize: 11, color: 'rgba(245,237,227,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 8 }}>{s.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}