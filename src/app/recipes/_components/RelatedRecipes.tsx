'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { recipes } from '@/data/recipes';

interface RelatedRecipesProps {
    currentSlug: string;
    category: string;
}

export default function RelatedRecipes({ currentSlug, category }: RelatedRecipesProps) {
    const normCat = category.toLowerCase().replace(/\s+/g, ' ').trim();

    const sameCat = recipes.filter(r =>
        r.slug !== currentSlug &&
        r.category.toLowerCase() === normCat
    );

    const otherCat = recipes.filter(r =>
        r.slug !== currentSlug &&
        r.category.toLowerCase() !== normCat
    );

    const hashCode = (s: string) => {
        let h = 0;
        for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0;
        return Math.abs(h);
    };

    const shuffled = [...sameCat].sort((a, b) => {
        const ha = hashCode(a.slug + currentSlug);
        const hb = hashCode(b.slug + currentSlug);
        return ha - hb;
    });

    const fillers = [...otherCat].sort((a, b) => {
        const ha = hashCode(a.slug + currentSlug + 'f');
        const hb = hashCode(b.slug + currentSlug + 'f');
        return ha - hb;
    });

    const related = [...shuffled.slice(0, 6)];
    if (related.length < 6) {
        related.push(...fillers.slice(0, 6 - related.length));
    }

    if (related.length === 0) return null;

    return (
        <section style={{ maxWidth: 1100, margin: '0 auto 60px', padding: '0 24px' }}>
            <h2
                style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
                    fontWeight: 700,
                    color: '#2D1A0E',
                    marginBottom: 8,
                    paddingBottom: 12,
                    borderBottom: '2px solid #D97706',
                }}
            >
                You May Also Love
            </h2>
            <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.95rem',
                color: 'rgba(75,46,26,0.6)',
                marginBottom: 28,
            }}>
                More delicious Vietnamese recipes to explore
            </p>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '24px',
                }}
            >
                {related.map((r, i) => (
                    <motion.div
                        key={r.slug}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.4, delay: i * 0.08 }}
                    >
                        <Link
                            href={`/recipes/${r.slug}`}
                            style={{ textDecoration: 'none', display: 'block' }}
                        >
                            <div
                                style={{
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    backgroundColor: '#fff',
                                    boxShadow: '0 2px 12px rgba(75,46,26,0.08)',
                                    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                                    cursor: 'pointer',
                                }}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                                    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px rgba(75,46,26,0.15)';
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                                    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 12px rgba(75,46,26,0.08)';
                                }}
                            >
                                <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', backgroundColor: '#F5EDE3', overflow: 'hidden' }}>
                                    <Image
                                        src={r.image}
                                        alt={r.imageAlt || r.title}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        style={{ objectFit: 'cover' }}
                                        unoptimized
                                    />
                                    <span
                                        style={{
                                            position: 'absolute',
                                            top: 12,
                                            left: 12,
                                            backgroundColor: '#D97706',
                                            color: '#fff',
                                            fontFamily: "'DM Sans', sans-serif",
                                            fontSize: '0.7rem',
                                            fontWeight: 600,
                                            padding: '4px 10px',
                                            borderRadius: '20px',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.5px',
                                        }}
                                    >
                                        {r.category}
                                    </span>
                                </div>

                                <div style={{ padding: '16px 18px 20px' }}>
                                    <h3
                                        style={{
                                            fontFamily: "'Playfair Display', serif",
                                            fontSize: '1.05rem',
                                            fontWeight: 700,
                                            color: '#2D1A0E',
                                            margin: 0,
                                            marginBottom: 6,
                                            lineHeight: 1.3,
                                            display: '-webkit-box',
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        {r.title}
                                    </h3>
                                    <p
                                        style={{
                                            fontFamily: "'DM Sans', sans-serif",
                                            fontSize: '0.85rem',
                                            color: 'rgba(75,46,26,0.6)',
                                            margin: 0,
                                            marginBottom: 10,
                                            lineHeight: 1.5,
                                            display: '-webkit-box',
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        {r.shortDescription}
                                    </p>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                                        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', color: 'rgba(75,46,26,0.5)' }}>
                                            ⏱ {r.totalTime}
                                        </span>
                                        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', color: 'rgba(75,46,26,0.5)' }}>
                                            📊 {r.difficulty}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
