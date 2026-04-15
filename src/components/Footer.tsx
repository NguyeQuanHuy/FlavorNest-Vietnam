/**
 * FlavorNest Vietnam — Premium Footer
 * src/components/Footer.tsx
 */

import Link from 'next/link'

const RECIPE_LINKS = [
    { label: 'Breakfast', href: '/recipes/breakfast' },
    { label: 'Main Dishes', href: '/recipes/main-dishes' },
    { label: 'Desserts', href: '/recipes/desserts' },
    { label: 'Street Food', href: '/recipes/street-food' },
    { label: 'Specialty Drinks', href: '/recipes/drinks' },
]

const REGION_LINKS = [
    { label: 'Northern Cuisine', href: '/recipes/north' },
    { label: 'Central Cuisine', href: '/recipes/central' },
    { label: 'Southern Cuisine', href: '/recipes/south' },
]

const STORY_LINKS = [
    { label: 'Culinary Culture', href: '/stories/culture' },
    { label: "Chef's Secrets", href: '/stories/chef-secrets' },
    { label: 'Travel Guide', href: '/stories/travel' },
    { label: 'Behind the Scenes', href: '/stories/about' },
]

const SOCIAL = [
    {
        label: 'Instagram',
        href: 'https://instagram.com/flavornest_vietnam',
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
    {
        label: 'YouTube',
        href: 'https://youtube.com/@flavornest_vietnam',
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
    {
        label: 'Pinterest',
        href: 'https://pinterest.com/flavornest_vietnam',
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.03-2.83.19-.77 1.27-5.38 1.27-5.38s-.32-.65-.32-1.61c0-1.51.88-2.63 1.97-2.63.93 0 1.38.7 1.38 1.54 0 .94-.6 2.34-.91 3.64-.26 1.09.54 1.97 1.6 1.97 1.92 0 3.4-2.02 3.4-4.94 0-2.59-1.86-4.39-4.51-4.39-3.07 0-4.88 2.3-4.88 4.68 0 .93.36 1.92.8 2.46.09.11.1.2.07.32-.08.34-.27 1.09-.3 1.24-.05.2-.17.24-.38.15-1.42-.66-2.31-2.75-2.31-4.42 0-3.6 2.61-6.9 7.53-6.9 3.95 0 7.02 2.82 7.02 6.57 0 3.93-2.47 7.08-5.91 7.08-1.15 0-2.24-.6-2.61-1.3l-.71 2.65c-.26.99-.95 2.23-1.41 2.98.95.29 1.95.45 2.99.45 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
            </svg>
        ),
    },
]

export default function Footer() {
    return (
        <footer style={{ background: '#2D1A0E', fontFamily: "'DM Sans', system-ui, sans-serif" }}>

            {/* ── Top newsletter band ── */}
            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '52px 24px' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
                    <div style={{ maxWidth: 460 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                            <div style={{ width: 24, height: 1.5, background: '#D97706' }} />
                            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#D97706', textTransform: 'uppercase' }}>Stay in the Nest</span>
                        </div>
                        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(22px,3vw,32px)', fontWeight: 700, color: 'white', margin: '0 0 10px', lineHeight: 1.2 }}>
                            New recipes, every week.
                        </h3>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', margin: 0, lineHeight: 1.7 }}>
                            Join 50,000+ home cooks who get our best Vietnamese recipes delivered before they go live.
                        </p>
                    </div>
                    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', flexShrink: 0 }}>
                        <input
                            type="email"
                            placeholder="your@email.com"
                            style={{ padding: '12px 18px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.06)', color: 'white', fontSize: 14, fontFamily: 'inherit', outline: 'none', minWidth: 220 }}
                        />
                        <button style={{ padding: '12px 24px', borderRadius: 100, background: '#D97706', color: 'white', fontSize: 14, fontWeight: 700, border: 'none', cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap' }}>
                            Subscribe →
                        </button>
                    </div>
                </div>
            </div>

            {/* ── Main footer grid ── */}
            <div style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 24px 48px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.8fr) minmax(0,1fr) minmax(0,1fr) minmax(0,1fr)', gap: 48 }}>

                    {/* Brand column */}
                    <div>
                        <div style={{ marginBottom: 20 }}>
                            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: 'white', display: 'block', lineHeight: 1 }}>FlavorNest</span>
                            <span style={{ fontSize: 10, color: '#D97706', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: 3, display: 'block' }}>Vietnam Gourmet</span>
                        </div>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, margin: '0 0 24px', maxWidth: 280 }}>
                            Documenting the authentic flavours of Vietnam — one recipe, one story, one memory at a time.
                        </p>

                        {/* Social icons */}
                        <div style={{ display: 'flex', gap: 10 }}>
                            {SOCIAL.map(s => (
                                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                                    title={s.label}
                                    style={{ width: 38, height: 38, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'all 0.2s' }}
                                    onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = '#D97706'; el.style.color = '#D97706'; el.style.background = 'rgba(217,119,6,0.1)'; }}
                                    onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = 'rgba(255,255,255,0.12)'; el.style.color = 'rgba(255,255,255,0.5)'; el.style.background = 'transparent'; }}
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Recipes column */}
                    <div>
                        <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', color: '#D97706', textTransform: 'uppercase', margin: '0 0 18px' }}>Recipes</h4>
                        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                            {RECIPE_LINKS.map(l => (
                                <li key={l.href}>
                                    <Link href={l.href} style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', textDecoration: 'none', transition: 'color 0.15s', display: 'block' }}
                                        onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                                        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                                    >
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Regions column */}
                    <div>
                        <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', color: '#D97706', textTransform: 'uppercase', margin: '0 0 18px' }}>Regions</h4>
                        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                            {REGION_LINKS.map(l => (
                                <li key={l.href}>
                                    <Link href={l.href} style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', textDecoration: 'none', transition: 'color 0.15s' }}
                                        onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                                        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                                    >
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', color: '#D97706', textTransform: 'uppercase', margin: '28px 0 18px' }}>Stories</h4>
                        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                            {STORY_LINKS.map(l => (
                                <li key={l.href}>
                                    <Link href={l.href} style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', textDecoration: 'none', transition: 'color 0.15s' }}
                                        onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                                        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                                    >
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company column */}
                    <div>
                        <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', color: '#D97706', textTransform: 'uppercase', margin: '0 0 18px' }}>Company</h4>
                        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                            {[
                                { label: 'About FlavorNest', href: '/stories/about' },
                                { label: 'All Recipes', href: '/recipes' },
                                { label: 'Travel Guide', href: '/stories/travel' },
                                { label: 'My Account', href: '/account' },
                                { label: 'Privacy Policy', href: '/privacy' },
                            ].map(l => (
                                <li key={l.href}>
                                    <Link href={l.href} style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', textDecoration: 'none', transition: 'color 0.15s' }}
                                        onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                                        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                                    >
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Trust badge */}
                        <div style={{ marginTop: 32, padding: '14px 16px', background: 'rgba(217,119,6,0.08)', border: '1px solid rgba(217,119,6,0.18)', borderRadius: 14 }}>
                            <p style={{ fontSize: 12, color: '#D97706', fontWeight: 700, margin: '0 0 4px' }}>🏆 Trusted by 50K+ cooks</p>
                            <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', margin: 0, lineHeight: 1.5 }}>100+ recipes tested in real home kitchens across Vietnam.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Bottom bar ── */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '20px 24px' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
                    <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', margin: 0 }}>
                        © {new Date().getFullYear()} FlavorNest Vietnam. All rights reserved.
                    </p>
                    <div style={{ display: 'flex', gap: 20 }}>
                        {[
                            { label: 'Privacy Policy', href: '/privacy' },
                            { label: 'Terms of Use', href: '/terms' },
                            { label: 'Sitemap', href: '/sitemap.xml' },
                        ].map(l => (
                            <Link key={l.href} href={l.href} style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', textDecoration: 'none', transition: 'color 0.15s' }}
                                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.25)')}
                            >
                                {l.label}
                            </Link>
                        ))}
                    </div>
                    <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)', margin: 0 }}>
                        Made with ♥ in Vietnam
                    </p>
                </div>
            </div>
        </footer>
    )
}
