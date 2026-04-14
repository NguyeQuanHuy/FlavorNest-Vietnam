'use client'

import { useState } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

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

export default function MobileMenu() {
    const [open, setOpen] = useState(false)
    const [expanded, setExpanded] = useState<string | null>(null)

    const close = () => {
        setOpen(false)
        setExpanded(null)
    }

    const drawer = open ? (
        <div style={{ position: 'fixed', inset: 0, zIndex: 9999 }}>
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/40"
                onClick={close}
            />

            {/* Drawer */}
            <div
                className="absolute top-0 left-0 bg-white shadow-2xl flex flex-col"
                style={{ width: '82vw', maxWidth: '320px', height: '100dvh' }}
            >
                {/* Header */}
                <div
                    className="flex items-center justify-between px-6 border-b border-fn-brown/8"
                    style={{ height: '72px', flexShrink: 0 }}
                >
                    <div>
                        <span className="block text-lg font-bold text-fn-brown leading-none">FlavorNest</span>
                        <span className="text-[10px] text-fn-amber font-medium tracking-[0.2em] uppercase">Vietnam Gourmet</span>
                    </div>
                    <button
                        onClick={close}
                        className="p-2 text-fn-brown/50 hover:text-fn-amber transition-colors rounded-lg"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Scrollable links */}
                <nav className="flex-1 overflow-y-auto px-4 py-5">
                    {MOBILE_LINKS.map((link) => (
                        <div key={link.label} className="mb-1">
                            {link.children ? (
                                <>
                                    <button
                                        onClick={() => setExpanded(expanded === link.label ? null : link.label)}
                                        className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-fn-brown/70 hover:text-fn-amber hover:bg-fn-amber/5 font-medium transition-all text-left"
                                    >
                                        <span>{link.label}</span>
                                        <ChevronDown
                                            className={`w-4 h-4 transition-transform duration-200 ${expanded === link.label ? 'rotate-180' : ''
                                                }`}
                                        />
                                    </button>

                                    {expanded === link.label && (
                                        <div className="ml-4 mt-1 mb-2 border-l-2 border-fn-amber/20 pl-4 flex flex-col gap-0.5">
                                            <Link
                                                href={link.href}
                                                onClick={close}
                                                className="text-xs font-bold text-fn-amber uppercase tracking-wider py-2"
                                            >
                                                View All {link.label} →
                                            </Link>
                                            {link.children.map((child) => (
                                                <Link
                                                    key={child.url}
                                                    href={child.url}
                                                    onClick={close}
                                                    className="flex flex-col py-2 group"
                                                >
                                                    <span className="text-sm font-semibold text-fn-brown/80 group-hover:text-fn-amber transition-colors">
                                                        {child.name}
                                                    </span>
                                                    <span className="text-[11px] text-fn-brown/40">{child.desc}</span>
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <Link
                                    href={link.href}
                                    onClick={close}
                                    className="flex items-center px-4 py-3 rounded-xl text-fn-brown/70 hover:text-fn-amber hover:bg-fn-amber/5 font-medium transition-all"
                                >
                                    {link.label}
                                </Link>
                            )}
                        </div>
                    ))}

                    {/* Bottom CTA */}
                    <div className="mt-6 pt-6 border-t border-fn-brown/8">
                        <Link
                            href="/login"
                            onClick={close}
                            className="block text-center bg-fn-brown text-white font-bold py-3.5 rounded-2xl hover:bg-fn-amber transition-colors"
                        >
                            Sign In
                        </Link>
                        <Link
                            href="/favorites"
                            onClick={close}
                            className="block text-center mt-3 text-fn-brown/60 hover:text-fn-amber font-medium py-2 text-sm transition-colors"
                        >
                            ♡ My Favorites
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    ) : null

    return (
        <>
            {/* Hamburger button */}
            <button
                onClick={() => setOpen(!open)}
                className="md:hidden p-2.5 text-fn-brown/70 hover:text-fn-amber bg-fn-brown/5 rounded-xl transition-all"
                aria-label="Toggle menu"
            >
                {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Portal renders drawer directly into <body>, escaping any parent overflow/height constraints */}
            {typeof document !== 'undefined' && createPortal(drawer, document.body)}
        </>
    )
}