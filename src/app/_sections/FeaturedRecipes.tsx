'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock, ChefHat, Star, ArrowRight } from 'lucide-react';

const DIFF_COLOR: Record<string, string> = {
    Easy: '#059669',
    Medium: '#D97706',
    Hard: '#DC2626',
};

function RecipeCard({ recipe, large = false, index = 0 }: { recipe: any; large?: boolean; index?: number }) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
        >
            <Link href={`/recipes/${recipe.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                <div
                    style={{
                        background: '#fff',
                        borderRadius: large ? 28 : 20,
                        overflow: 'hidden',
                        border: '1px solid rgba(75,46,26,0.07)',
                        boxShadow: '0 2px 16px rgba(75,46,26,0.07)',
                        transition: 'all 0.3s ease',
                        height: '100%',
                    }}
                    onMouseEnter={e => {
                        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 48px rgba(75,46,26,0.16)';
                        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                    }}
                    onMouseLeave={e => {
                        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 16px rgba(75,46,26,0.07)';
                        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                    }}
                >
                    {/* Image */}
                    <div style={{ position: 'relative', height: large ? 340 : 200, overflow: 'hidden' }}>
                        <Image
                            src={recipe.image}
                            alt={recipe.title}
                            fill
                            sizes={large ? '600px' : '400px'}
                            style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                        />
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,8,4,0.65) 0%, transparent 55%)' }} />
                        {/* Tag */}
                        {recipe.tag && (
                            <div style={{ position: 'absolute', top: 14, left: 14, background: '#D97706', color: '#fff', fontSize: 10, fontWeight: 700, padding: '4px 10px', borderRadius: 100, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                                {recipe.tag}
                            </div>
                        )}
                        {/* Rating */}
                        <div style={{ position: 'absolute', top: 14, right: 14, background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(8px)', color: '#fff', fontSize: 12, fontWeight: 600, padding: '4px 10px', borderRadius: 100, display: 'flex', alignItems: 'center', gap: 4 }}>
                            <Star size={11} fill="#F59E0B" color="#F59E0B" /> {recipe.rating}
                        </div>
                        {/* Subtitle over image bottom */}
                        <div style={{ position: 'absolute', bottom: 14, left: 16, right: 16 }}>
                            <div style={{ fontSize: large ? 11 : 10, fontWeight: 700, color: 'rgba(253,230,138,0.9)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>
                                {recipe.subtitle}
                            </div>
                            {large && (
                                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>
                                    {recipe.title}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Content */}
                    <div style={{ padding: large ? '20px 24px 24px' : '14px 16px 18px' }}>
                        {!large && (
                            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: '#2D1A0E', marginBottom: 8, lineHeight: 1.3 }}>
                                {recipe.title}
                            </div>
                        )}
                        {large && recipe.description && (
                            <div style={{ fontSize: 14, color: 'rgba(75,46,26,0.6)', lineHeight: 1.6, marginBottom: 14 }}>
                                {recipe.description?.slice(0, 100)}...
                            </div>
                        )}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: 'rgba(75,46,26,0.5)' }}>
                                    <Clock size={12} /> {recipe.time}
                                </span>
                                <span style={{ fontSize: 11, fontWeight: 600, color: DIFF_COLOR[recipe.difficulty] ?? '#D97706', background: `${DIFF_COLOR[recipe.difficulty] ?? '#D97706'}15`, padding: '2px 8px', borderRadius: 100 }}>
                                    {recipe.difficulty}
                                </span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, fontWeight: 600, color: '#D97706' }}>
                                Cook <ArrowRight size={12} />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.article>
    );
}

export default function FeaturedRecipes({ recipes }: { recipes: any[] }) {
    const display = recipes?.slice(0, 6) ?? [];
    const [hero, ...rest] = display;

    return (
        <section style={{ background: '#FEF0DC', padding: '80px 0' }}>
            <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}
                >
                    <div>
                        <div style={{ fontSize: 11, fontWeight: 700, color: '#D97706', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 8 }}>
                            Editor's Picks
                        </div>
                        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#2D1A0E', margin: 0, lineHeight: 1.1 }}>
                            Featured <span style={{ color: '#D97706', fontStyle: 'italic' }}>Recipes</span>
                        </h2>
                        <p style={{ fontSize: 15, color: 'rgba(75,46,26,0.55)', marginTop: 8 }}>
                            Handpicked classics from Hanoi, Hue and Saigon.
                        </p>
                    </div>
                    <Link href="/recipes" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 600, color: '#D97706', textDecoration: 'none', border: '1.5px solid rgba(217,119,6,0.3)', padding: '10px 20px', borderRadius: 100, whiteSpace: 'nowrap' }}>
                        View all recipes <ArrowRight size={14} />
                    </Link>
                </motion.div>

                {/* Layout: 1 large left + 2x2 right */}
                {display.length > 0 && (
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                        {/* Left — hero card */}
                        {hero && (
                            <div style={{ gridRow: 'span 2' }}>
                                <RecipeCard recipe={hero} large index={0} />
                            </div>
                        )}
                        {/* Right — 4 small cards */}
                        {rest.slice(0, 4).map((r, i) => (
                            <RecipeCard key={r.slug} recipe={r} index={i + 1} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}