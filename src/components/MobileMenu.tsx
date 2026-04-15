'use client'

import { useState } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import { handleSignOut } from '@/app/actions/auth-actions'

const MOBILE_LINKS = [
    { label: 'Home', href: '/' },
    {
        label: 'Recipes',
        href: '/recipes',
        children: [
            { name: 'Breakfast', desc: 'Món ăn sáng', url: '/recipes/breakfast' },
            { name: 'Main Dishes', desc: 'Món chính', url: '/recipes/main-dishes' },
            { name: 'Desserts', desc: 'Tráng miệng', url: '/recipes/desserts' },
            { name: 'Northern Cuisine', desc: 'Ẩm thực miền Bắc', url: '/recipes/north' },
            { name: 'Central Cuisine', desc: 'Ẩm thực miền Trung', url: '/recipes/central' },
            { name: 'Southern Cuisine', desc: 'Ẩm thực miền Nam', url: '/recipes/south' },
            { name: 'Street Food', desc: 'Món ăn đường phố', url: '/recipes/street-food' },
        ],
    },
    {
        label: 'Stories',
        href: '/stories',
        children: [
            { name: 'Culinary Culture', desc: 'Traditions & History', url: '/stories/culture' },
            { name: "Chef's Secrets", desc: 'Pro Tips & Techniques', url: '/stories/chef-secrets' },
            { name: 'Travel Guide', desc: 'Where to eat in VN', url: '/stories/travel' },
            { name: 'Behind the Scenes', desc: 'Our food journey', url: '/stories/about' },
        ],
    },
    { label: 'About', href: '/about' },
]

interface MobileMenuProps {
    session?: {
        user?: {
            name?: string | null
            email?: string | null
            image?: string | null
        }
    } | null
}

function getInitials(name: string) {
    return name.split(' ').map(w => w[0]).slice(-2).join('').toUpperCase()
}

function getGreeting() {
    const h = new Date().getHours()
    if (h < 12) return 'Good morning'
    if (h < 17) return 'Good afternoon'
    return 'Good evening'
}

export default function MobileMenu({ session }: MobileMenuProps) {
    const [open, setOpen] = useState(false)
    const [expanded, setExpanded] = useState<string | null>(null)
    const isLoggedIn = !!session?.user

    const close = () => {
        setOpen(false)
        setExpanded(null)
    }

    const drawer = open ? (
        <div style={{ position: 'fixed', inset: 0, zIndex: 9999 }}>
            <div className="absolute inset-0 bg-black/40" onClick={close} />
            <div className="absolute top-0 left-0 bg-white shadow-2xl flex flex-col" style={{ width: '82vw', maxWidth: '320px', height: '100dvh' }}>

                {/* Header */}
                <div className="flex items-center justify-between px-6 border-b border-fn-brown/8" style={{ height: '72px', flexShrink: 0 }}>
                    <div>
                        <span className="block text-lg font-bold text-fn-brown leading-none">FlavorNest</span>
                        <span className="text-[10px] text-fn-amber font-medium tracking-[0.2em] uppercase">Vietnam Gourmet</span>
                    </div>
                    <button onClick={close} className="p-2 text-fn-brown/50 hover:text-fn-amber transition-colors rounded-lg">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* User section */}
                {isLoggedIn ? (
                    <div style={{ background: 'linear-gradient(135deg, #2D1A0E 0%, #4B2E1A 100%)', padding: '16px 20px', flexShrink: 0 }}>
                        <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', margin: '0 0 10px', fontWeight: 500 }}>{getGreeting()} 👋</p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                            <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg, #D97706, #F59E0B)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 700, color: 'white', overflow: 'hidden', flexShrink: 0, border: '2px solid rgba(255,255,255,0.2)', position: 'relative' }}>
                                {session?.user?.image ? (
                                    <Image src={session.user.image} alt={session.user.name || ''} fill style={{ objectFit: 'cover', borderRadius: '50%' }} />
                                ) : (
                                    <span>{session?.user?.name ? getInitials(session.user.name) : '?'}</span>
                                )}
                            </div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <p style={{ fontSize: 14, fontWeight: 700, color: 'white', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                    Welcome, {session?.user?.name?.split(' ').pop()}!
                                </p>
                                <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', margin: '2px 0 0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                    {session?.user?.email}
                                </p>
                            </div>
                            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', flexShrink: 0 }} />
                        </div>
                        <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
                            <Link href="/account" onClick={close} style={{ flex: 1, textAlign: 'center', padding: '8px 10px', background: 'rgba(255,255,255,0.1)', borderRadius: 10, fontSize: 12, fontWeight: 600, color: 'white', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.12)' }}>
                                My Account
                            </Link>
                            <Link href="/favorites" onClick={close} style={{ flex: 1, textAlign: 'center', padding: '8px 10px', background: 'rgba(217,119,6,0.25)', borderRadius: 10, fontSize: 12, fontWeight: 600, color: '#FCD34D', textDecoration: 'none', border: '1px solid rgba(217,119,6,0.3)' }}>
                                ♡ Saved
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div style={{ background: '#FAFAF7', padding: '14px 20px', flexShrink: 0, borderBottom: '1px solid rgba(75,46,26,0.06)', display: 'flex', alignItems: 'center', gap: 12 }}>
                        <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(75,46,26,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(75,46,26,0.3)" strokeWidth="2" strokeLinecap="round">
                                <circle cx="12" cy="8" r="4" />
                                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                            </svg>
                        </div>
                        <div style={{ flex: 1 }}>
                            <p style={{ fontSize: 13, fontWeight: 600, color: '#4B2E1A', margin: 0 }}>Not signed in</p>
                            <p style={{ fontSize: 11, color: 'rgba(75,46,26,0.45)', margin: '1px 0 0' }}>Sign in to save recipes</p>
                        </div>
                        <Link href="/login" onClick={close} style={{ padding: '8px 14px', background: '#D97706', color: 'white', borderRadius: 100, fontSize: 12, fontWeight: 700, textDecoration: 'none' }}>
                            Sign In
                        </Link>
                    </div>
                )}

                {/* Nav links */}
                <nav className="flex-1 overflow-y-auto px-4 py-5">
                    {MOBILE_LINKS.map((link) => (
                        <div key={link.label} className="mb-1">
                            {link.children ? (
                                <>
                                    <button onClick={() => setExpanded(expanded === link.label ? null : link.label)}
                                        className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-fn-brown/70 hover:text-fn-amber hover:bg-fn-amber/5 font-medium transition-all text-left">
                                        <span>{link.label}</span>
                                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${expanded === link.label ? 'rotate-180' : ''}`} />
                                    </button>
                                    {expanded === link.label && (
                                        <div className="ml-4 mt-1 mb-2 border-l-2 border-fn-amber/20 pl-4 flex flex-col gap-0.5">
                                            <Link href={link.href} onClick={close} className="text-xs font-bold text-fn-amber uppercase tracking-wider py-2">
                                                View All {link.label} →
                                            </Link>
                                            {link.children.map((child) => (
                                                <Link key={child.url} href={child.url} onClick={close} className="flex flex-col py-2 group">
                                                    <span className="text-sm font-semibold text-fn-brown/80 group-hover:text-fn-amber transition-colors">{child.name}</span>
                                                    <span className="text-[11px] text-fn-brown/40">{child.desc}</span>
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <Link href={link.href} onClick={close} className="flex items-center px-4 py-3 rounded-xl text-fn-brown/70 hover:text-fn-amber hover:bg-fn-amber/5 font-medium transition-all">
                                    {link.label}
                                </Link>
                            )}
                        </div>
                    ))}

                    {/* Bottom */}
                    <div className="mt-6 pt-6 border-t border-fn-brown/8">
                        {isLoggedIn ? (
                            <form action={handleSignOut}>
                                <button type="submit" style={{ width: '100%', padding: '12px', background: 'transparent', color: 'rgba(75,46,26,0.55)', border: '1.5px solid rgba(75,46,26,0.12)', borderRadius: 16, fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>
                                    Sign Out →
                                </button>
                            </form>
                        ) : (
                            <>
                                <Link href="/login" onClick={close} className="block text-center bg-fn-brown text-white font-bold py-3.5 rounded-2xl hover:bg-fn-amber transition-colors">
                                    Sign In
                                </Link>
                                <Link href="/favorites" onClick={close} className="block text-center mt-3 text-fn-brown/60 hover:text-fn-amber font-medium py-2 text-sm transition-colors">
                                    ♡ My Favorites
                                </Link>
                            </>
                        )}
                    </div>
                </nav>
            </div>
        </div>
    ) : null

    return (
        <>
            <button onClick={() => setOpen(!open)} className="md:hidden flex items-center gap-2 transition-all" aria-label="Toggle menu">
                {isLoggedIn ? (
                    <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg, #D97706, #F59E0B)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: 'white', overflow: 'hidden', position: 'relative', border: '2px solid rgba(217,119,6,0.3)' }}>
                        {session?.user?.image ? (
                            <Image src={session.user.image} alt={session.user.name || ''} fill style={{ objectFit: 'cover', borderRadius: '50%' }} />
                        ) : (
                            session?.user?.name ? getInitials(session.user.name) : '?'
                        )}
                    </div>
                ) : (
                    <div className="p-2.5 text-fn-brown/70 hover:text-fn-amber bg-fn-brown/5 rounded-xl">
                        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </div>
                )}
            </button>
            {typeof document !== 'undefined' && createPortal(drawer, document.body)}
        </>
    )
}
