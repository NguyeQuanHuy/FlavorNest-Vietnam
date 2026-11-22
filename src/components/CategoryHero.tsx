// ─────────────────────────────────────────────────────────────────────────────
//  components/CategoryHero.tsx
//  Compact header for recipe category pages (Breakfast, Main Dishes, Street Food,
//  Desserts, Drinks): breadcrumb · one-line title · one-line intro · quiet stats.
//  Pairs with the .ed-* card styles and .cat-grid / .cat-filter in globals.css.
// ─────────────────────────────────────────────────────────────────────────────

import Link from 'next/link'

interface Stat { value: string | number; label: string; prefix?: string }

interface Props {
    crumb: string            // last breadcrumb item, e.g. "Breakfast"
    title?: string           // plain part of the title
    accent: string           // italic amber part of the title
    intro: string            // one short sentence
    stats: Stat[]
}

const dot = <span aria-hidden style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(75,46,26,0.3)' }} />

export default function CategoryHero({ crumb, title = 'Vietnamese', accent, intro, stats }: Props) {
    return (
        <section className="cat-hero" style={{ background: 'linear-gradient(180deg, #FDF4E7 0%, #FAFAF7 100%)', padding: '108px 24px 32px', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12.5, marginBottom: 18 }}>
                    {[['Home', '/'], ['Recipes', '/recipes'], [crumb, '']].map(([label, href], i) => (
                        <span key={label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            {i > 0 && <span style={{ color: 'rgba(75,46,26,0.3)' }}>›</span>}
                            {href
                                ? <Link href={href} style={{ color: 'rgba(75,46,26,0.45)', textDecoration: 'none', fontWeight: 500 }}>{label}</Link>
                                : <span style={{ color: '#B45309', fontWeight: 600 }}>{label}</span>}
                        </span>
                    ))}
                </nav>

                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '14px 40px' }}>
                    <div style={{ maxWidth: 620 }}>
                        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 3.6vw, 44px)', fontWeight: 700, color: '#2D1A0E', margin: 0, lineHeight: 1.1, letterSpacing: '-0.01em' }}>
                            {title} <span style={{ color: '#D97706', fontStyle: 'italic' }}>{accent}</span>
                        </h1>
                        <p style={{ margin: '10px 0 0', fontSize: 15.5, lineHeight: 1.6, color: 'rgba(75,46,26,0.62)' }}>{intro}</p>
                    </div>
                    <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'rgba(75,46,26,0.55)', whiteSpace: 'nowrap' }}>
                        {stats.map((s, i) => (
                            <span key={i} style={{ display: 'contents' }}>
                                {i > 0 && dot}
                                <span>{s.prefix ? `${s.prefix} ` : ''}<strong style={{ color: '#2D1A0E', fontWeight: 700 }}>{s.value}</strong>{s.label ? ` ${s.label}` : ''}</span>
                            </span>
                        ))}
                    </p>
                </div>
            </div>
        </section>
    )
}
