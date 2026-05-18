// ─────────────────────────────────────────────────────────────────────────
//  src/app/categories/[slug]/page.tsx
//  Dynamic category page — /categories/pho, /categories/bun, etc.
// ─────────────────────────────────────────────────────────────────────────
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { recipes } from '@/data/recipes'
import { CATEGORY_MAP, CATEGORY_SLUGS } from '../_data/categoryMap'

// ── Static params for SSG ───────────────────────────────────────────────
export function generateStaticParams() {
    return CATEGORY_SLUGS.map(slug => ({ slug }))
}

// ── SEO metadata per category ───────────────────────────────────────────
export async function generateMetadata(
    { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
    const { slug } = await params
    const config = CATEGORY_MAP[slug]
    if (!config) return {}

    return {
        title: `${config.title} Recipes — FlavorNest Vietnam`,
        description: config.description,
        openGraph: {
            title: `${config.title} (${config.subtitle}) Recipes`,
            description: config.description,
            images: [config.heroImage],
        },
    }
}

// ── Page component ──────────────────────────────────────────────────────
export default async function CategoryPage(
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params
    const config = CATEGORY_MAP[slug]
    if (!config) notFound()

    // Filter recipes: by category + optional tag filter
    const filtered = recipes.filter(r => {
        if (r.category !== config.category) return false
        if (config.tagFilter && config.tagFilter.length > 0) {
            const tags = (r.tags ?? []).map(t => t.toLowerCase())
            return config.tagFilter.some(tf => tags.includes(tf.toLowerCase()))
        }
        return true
    })

    return (
        <main style={{ background: '#F5EDE3', minHeight: '100vh', fontFamily: "'Manrope', 'DM Sans', sans-serif" }}>
            {/* ── Hero banner ────────────────────────────────────────── */}
            <section style={{ position: 'relative', height: 420, overflow: 'hidden' }}>
                <Image
                    src={config.heroImage}
                    alt={config.title}
                    fill
                    sizes="100vw"
                    quality={88}
                    priority
                    style={{ objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(13,6,2,0.4) 0%, rgba(13,6,2,0.85) 100%)' }} />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 24px', textAlign: 'center' }}>
                    <div style={{ maxWidth: 720 }}>
                        <Link href="/categories" style={{ display: 'inline-block', fontSize: 12, fontWeight: 700, color: '#D97706', textTransform: 'uppercase', letterSpacing: '0.18em', textDecoration: 'none', marginBottom: 14 }}>
                            ← All Categories
                        </Link>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', margin: '0 0 8px', fontStyle: 'italic' }}>{config.subtitle}</p>
                        <h1 style={{ fontSize: 'clamp(40px, 6vw, 64px)', fontWeight: 700, color: 'white', margin: '0 0 16px', lineHeight: 1.05 }}>
                            {config.title}
                        </h1>
                        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.75)', margin: 0, lineHeight: 1.65, maxWidth: 580, marginInline: 'auto' }}>
                            {config.description}
                        </p>
                        <p style={{ fontSize: 12, color: '#D97706', fontWeight: 700, marginTop: 18, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                            {filtered.length} {filtered.length === 1 ? 'recipe' : 'recipes'}
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Recipes grid ───────────────────────────────────────── */}
            <section style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 24px 96px' }}>
                {filtered.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '80px 0' }}>
                        <p style={{ fontSize: 18, color: '#4B2E1A', marginBottom: 16 }}>No recipes here yet.</p>
                        <p style={{ fontSize: 14, color: 'rgba(75,46,26,0.6)' }}>We are working on adding more recipes to this category soon.</p>
                        <Link href="/recipes" style={{ display: 'inline-block', marginTop: 24, padding: '12px 28px', background: '#D97706', color: 'white', borderRadius: 100, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>
                            Browse All Recipes →
                        </Link>
                    </div>
                ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
                        {filtered.map(r => (
                            <Link
                                key={r.slug}
                                href={`/recipes/${r.slug}`}
                                style={{ display: 'block', background: 'white', borderRadius: 16, overflow: 'hidden', textDecoration: 'none', boxShadow: '0 2px 12px rgba(75,46,26,0.06)', transition: 'transform 0.2s, box-shadow 0.2s' }}
                                className="category-card"
                            >
                                <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                                    <Image src={r.image} alt={r.imageAlt ?? r.title} fill sizes="(max-width:768px) 100vw, 33vw" style={{ objectFit: 'cover' }} quality={80} />
                                </div>
                                <div style={{ padding: '16px 18px 20px' }}>
                                    <p style={{ fontSize: 11, color: 'rgba(75,46,26,0.5)', margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>{r.subtitle}</p>
                                    <h3 style={{ fontSize: 18, fontWeight: 700, color: '#2D1A0E', margin: '0 0 8px', lineHeight: 1.25 }}>{r.title}</h3>
                                    <p style={{ fontSize: 12, color: 'rgba(75,46,26,0.6)', margin: 0 }}>
                                        {r.totalTime} · {r.difficulty} · ⭐ {r.rating}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </section>

            <style>{`
                .category-card:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 12px 32px rgba(75,46,26,0.12);
                }
            `}</style>
        </main>
    )
}