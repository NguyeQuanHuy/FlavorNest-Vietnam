'use client'
// ─────────────────────────────────────────────────────────────────────────────
//  app/favorites/page.tsx
//  FlavorNest Vietnam — My Favorites Page
//
//  Architecture:
//    - FavoritesPage   → Server-safe shell, manages localStorage state
//    - RecipeCard      → Reusable card with unsave action
//    - EmptyState      → Shown when collection is empty
//    - SkeletonCard    → Shown during hydration to prevent layout shift
//
//  localStorage key: "fn_favs"
//  Shape stored: FavoriteRecipe[]
//
//  EASY TO SCALE:
//    - Swap localStorage with an API call (SWR / React Query) when auth is ready
//    - RecipeCard is already decoupled — drop it into any other page
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Heart, Clock, ChefHat, Compass,
    BookOpen, Trash2, Sparkles,
} from 'lucide-react'

// ── Types ─────────────────────────────────────────────────────────────────
export interface FavoriteRecipe {
    slug: string
    title: string
    subtitle?: string   // Vietnamese name
    image: string
    imageAlt: string
    cookTime: string
    difficulty: 'Easy' | 'Medium' | 'Hard'
    category: string
    savedAt: number   // timestamp — used for "Recently saved" sort
}

// ── localStorage key ──────────────────────────────────────────────────────
const LS_KEY = 'fn_favs'

// ── localStorage helpers ──────────────────────────────────────────────────
function readFavorites(): FavoriteRecipe[] {
    if (typeof window === 'undefined') return []
    try {
        const raw = localStorage.getItem(LS_KEY)
        return raw ? (JSON.parse(raw) as FavoriteRecipe[]) : []
    } catch {
        return []
    }
}

function writeFavorites(items: FavoriteRecipe[]): void {
    try {
        localStorage.setItem(LS_KEY, JSON.stringify(items))
    } catch { /* quota exceeded — fail silently */ }
}

// ── Utility ───────────────────────────────────────────────────────────────
function timeAgo(ts: number): string {
    const diff = Date.now() - ts
    const mins = Math.floor(diff / 60_000)
    if (mins < 60) return `${mins || 1}m ago`
    const hrs = Math.floor(diff / 3_600_000)
    if (hrs < 24) return `${hrs}h ago`
    const days = Math.floor(diff / 86_400_000)
    return `${days}d ago`
}

const DIFF_STYLES: Record<FavoriteRecipe['difficulty'], string> = {
    Easy: 'bg-emerald-50   text-emerald-700  border-emerald-100',
    Medium: 'bg-amber-50     text-amber-700    border-amber-100',
    Hard: 'bg-red-50       text-red-600      border-red-100',
}

// ── Demo seed (injected once so the page isn't empty on first visit) ──────
// Remove this block when you have real savedAt data from the recipe detail page.
const DEMO_RECIPES: FavoriteRecipe[] = [
    {
        slug: 'hanoi-beef-pho',
        title: 'Hanoi Beef Pho',
        subtitle: 'Phở Bò Hà Nội',
        image: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=800&q=80',
        imageAlt: 'Steaming bowl of Hanoi beef pho',
        cookTime: '3 hrs',
        difficulty: 'Medium',
        category: 'Soup',
        savedAt: Date.now() - 2 * 60_000,
    },
    {
        slug: 'banh-mi',
        title: 'Lemongrass Pork Bánh Mì',
        subtitle: 'Bánh Mì Thịt Nướng',
        image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=800&q=80',
        imageAlt: 'Vietnamese banh mi sandwich',
        cookTime: '40 min',
        difficulty: 'Easy',
        category: 'Street Food',
        savedAt: Date.now() - 45 * 60_000,
    },
    {
        slug: 'bun-cha-hanoi',
        title: 'Hanoi Grilled Pork Vermicelli',
        subtitle: 'Bún Chả Hà Nội',
        image: 'https://images.unsplash.com/photo-1623682785702-f0c9fcfe2fc0?auto=format&fit=crop&w=800&q=80',
        imageAlt: 'Bun Cha with grilled pork and noodles',
        cookTime: '45 min',
        difficulty: 'Easy',
        category: 'Noodles',
        savedAt: Date.now() - 3 * 3_600_000,
    },
    {
        slug: 'fresh-spring-rolls',
        title: 'Fresh Spring Rolls',
        subtitle: 'Gỏi Cuốn Tôm Thịt',
        image: 'https://images.unsplash.com/photo-1562802378-063ec186a863?auto=format&fit=crop&w=800&q=80',
        imageAlt: 'Vietnamese fresh spring rolls',
        cookTime: '45 min',
        difficulty: 'Easy',
        category: 'Rolls',
        savedAt: Date.now() - 24 * 3_600_000,
    },
    {
        slug: 'com-tam',
        title: 'Saigon Broken Rice Plate',
        subtitle: 'Cơm Tấm Sài Gòn',
        image: 'https://images.unsplash.com/photo-1558030137-a56c1b004fa3?auto=format&fit=crop&w=800&q=80',
        imageAlt: 'Saigon broken rice with pork chop',
        cookTime: '35 min',
        difficulty: 'Easy',
        category: 'Rice',
        savedAt: Date.now() - 2 * 86_400_000,
    },
]

// ─────────────────────────────────────────────────────────────────────────────
//  Main page
// ─────────────────────────────────────────────────────────────────────────────
export default function FavoritesPage() {
    // `mounted` prevents hydration mismatch — localStorage is client-only
    const [mounted, setMounted] = useState(false)
    const [favorites, setFavorites] = useState<FavoriteRecipe[]>([])
    const [removing, setRemoving] = useState<string | null>(null)  // slug being removed

    // ── Hydrate from localStorage after mount ──────────────────────────────
    useEffect(() => {
        const stored = readFavorites()
        // Seed demo data on first visit so the page is never empty
        if (stored.length === 0) {
            writeFavorites(DEMO_RECIPES)
            setFavorites(DEMO_RECIPES)
        } else {
            // Sort: most recently saved first
            setFavorites([...stored].sort((a, b) => b.savedAt - a.savedAt))
        }
        setMounted(true)
    }, [])

    // ── Remove a single recipe ──────────────────────────────────────────────
    const handleRemove = useCallback((slug: string) => {
        setRemoving(slug)
        // Brief delay so the exit animation plays before state update
        setTimeout(() => {
            setFavorites(prev => {
                const next = prev.filter(r => r.slug !== slug)
                writeFavorites(next)
                return next
            })
            setRemoving(null)
        }, 320)
    }, [])

    // ── Clear all ─────────────────────────────────────────────────────────
    const handleClearAll = useCallback(() => {
        writeFavorites([])
        setFavorites([])
    }, [])

    // ─────────────────────────────────────────────────────────────────────────
    //  Render
    // ─────────────────────────────────────────────────────────────────────────
    return (
        <div className="relative min-h-screen bg-[#FAFAF8]">

            {/* ══════════════════════════════════════════════════════════════════
          PAGE HEADER
      ════════════════════════════════════════════════
                <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-20 pb-10">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">

                        {/* Title block */}
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div>
                    {/* Eyebrow */}
                    <div className="flex items-center gap-2 mb-2">
                        <Heart className="w-4 h-4 text-[#E67E22] fill-[#E67E22]" />
                        <span className="text-[#E67E22] text-xs font-bold uppercase tracking-[.18em]">
                            My Collection
                        </span>
                    </div>

                    <h1 className="font-semibold text-4xl sm:text-5xl text-[#5C4033] leading-tight">
                        My Favorites
                    </h1>

                    {/* Count pill — shows only after hydration */}
                    {mounted && favorites.length > 0 && (
                        <p className="text-[#5C4033]/55 text-sm mt-2">
                            {favorites.length} recipe{favorites.length !== 1 ? 's' : ''} saved
                        </p>
                    )}
                </div>

                {/* Actions — only when there are favorites */}
                {mounted && favorites.length > 0 && (
                    <div className="flex items-center gap-3">
                        <Link
                            href="/recipes"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-[#5C4033]/60 hover:text-[#E67E22] transition-colors"
                        >
                            <Compass className="w-4 h-4" />
                            Browse More
                        </Link>
                        <button
                            onClick={handleClearAll}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5C4033]/40 hover:text-red-500 transition-colors px-3 py-1.5 rounded-full hover:bg-red-50 border border-transparent hover:border-red-100"
                        >
                            <Trash2 className="w-3.5 h-3.5" />
                            Clear all
                        </button>
                    </div>
                )}
            </div>
            {/* Hết phần Header */}
    /* ══════════════════════════════════════════════════════════════════
            CONTENT
      ════════════════════════════════════════════════════════════════════ */}
            < div className="max-w-7xl mx-auto px-5 lg:px-8 py-10" >

                {/* — Loading skeletons (before hydration) — */}
                {!mounted && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <SkeletonCard key={i} />
                        ))}
                    </div>
                )}

                {/* — Empty state — */}
                {mounted && favorites.length === 0 && <EmptyState />}

                {/* — Recipe grid — */}
                {mounted && favorites.length > 0 && (
                    <motion.div
                        layout
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
                    >
                        <AnimatePresence mode="popLayout">
                            {favorites.map((recipe, i) => (
                                <RecipeCard
                                    key={recipe.slug}
                                    recipe={recipe}
                                    index={i}
                                    isRemoving={removing === recipe.slug}
                                    onRemove={handleRemove}
                                />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                )}
            </div>
// ─────────────────────────────────────────────────────────────────────────────
            //  RecipeCard
            //  Reusable — import and drop into any page that shows saved recipes
            // ─────────────────────────────────────────────────────────────────────────────
            interface RecipeCardProps {
                recipe: FavoriteRecipe
            index: number
            isRemoving: boolean
    onRemove: (slug: string) => void
}

            function RecipeCard({recipe, index, isRemoving, onRemove}: RecipeCardProps) {
    const [confirmOpen, setConfirmOpen] = useState(false)

    const handleUnsave = (e: React.MouseEvent) => {
                e.preventDefault()
        e.stopPropagation()
            // First click → show confirm tooltip; second click → remove
            if (confirmOpen) {
                onRemove(recipe.slug)
            } else {
                setConfirmOpen(true)
            // Auto-close confirm after 2.5 s if user doesn't click again
            setTimeout(() => setConfirmOpen(false), 2500)
        }
    }

            return (
            <motion.div
                layout
                initial={{ opacity: 0, y: 22, scale: 0.97 }}
                animate={{ opacity: isRemoving ? 0 : 1, y: 0, scale: isRemoving ? 0.93 : 1 }}
                exit={{ opacity: 0, scale: 0.92, y: -12 }}
                transition={{
                    layout: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                    default: { duration: 0.42, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 },
                }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="group relative"
            >
                {/* ── Confirm tooltip ── */}
                <AnimatePresence>
                    {confirmOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 6, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 4, scale: 0.96 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-12 right-3 z-20 bg-[#5C4033] text-white text-xs font-medium px-3 py-1.5 rounded-xl shadow-lg whitespace-nowrap pointer-events-none"
                        >
                            Click again to remove
                            <div className="absolute -top-1.5 right-3.5 w-3 h-3 bg-[#5C4033] rotate-45 rounded-sm" />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* ── Card ── */}
                <Link
                    href={`/recipes/${recipe.slug}`}
                    className="block bg-white rounded-2xl overflow-hidden border border-[#5C4033]/8 shadow-sm hover:shadow-md transition-shadow duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E67E22]"
                >
                    {/* Image */}
                    <div className="relative h-44 overflow-hidden bg-[#5C4033]/5">
                        <Image
                            src={recipe.image}
                            alt={recipe.imageAlt}
                            fill
                            sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                            className="object-cover group-hover:scale-[1.05] transition-transform duration-500"
                            quality={78}
                        />

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Category badge */}
                        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#5C4033] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                            {recipe.category}
                        </span>

                        {/* Saved time badge */}
                        <span className="absolute bottom-3 left-3 bg-black/40 backdrop-blur-sm text-white text-[9px] px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Saved {timeAgo(recipe.savedAt)}
                        </span>

                        {/* Unsave button */}
                        <button
                            type="button"
                            onClick={handleUnsave}
                            aria-label={confirmOpen ? 'Confirm remove from favorites' : 'Remove from favorites'}
                            className={`
              absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center
              transition-all duration-200 shadow-sm
              ${confirmOpen
                                    ? 'bg-red-500 text-white scale-110'
                                    : 'bg-white/90 text-[#E67E22] hover:bg-red-50 hover:text-red-500 opacity-0 group-hover:opacity-100'
                                }
            `}
                        >
                            <Heart className="w-3.5 h-3.5 fill-current" />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                        {/* Title */}
                        <h2 className="font-semibold text-[15px] text-[#5C4033] leading-snug mb-0.5 line-clamp-1">
                            {recipe.title}
                        </h2>
                        {recipe.subtitle && (
                            <p className="text-[11px] text-[#5C4033]/45 italic mb-3 line-clamp-1">
                                {recipe.subtitle}
                            </p>
                        )}

                        {/* Meta row */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                {/* Cook time */}
                                <div className="flex items-center gap-1 text-[#5C4033]/55">
                                    <Clock className="w-3.5 h-3.5" />
                                    <span className="text-xs">{recipe.cookTime}</span>
                                </div>
                                {/* Chef hat */}
                                <div className="flex items-center gap-1 text-[#5C4033]/55">
                                    <ChefHat className="w-3.5 h-3.5" />
                                </div>
                            </div>

                            {/* Difficulty badge */}
                            <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${DIFF_STYLES[recipe.difficulty]}`}>
                                {recipe.difficulty}
                            </span>
                        </div>
                    </div>
                </Link>
            </motion.div>
            )
}

            // ─────────────────────────────────────────────────────────────────────────────
            //  EmptyState
            // ─────────────────────────────────────────────────────────────────────────────
            function EmptyState() {
    return (
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center justify-center py-28 text-center"
            >
                {/* Icon group */}
                <div className="relative mb-6">
                    <div className="w-20 h-20 bg-[#E67E22]/10 rounded-3xl flex items-center justify-center">
                        <BookOpen className="w-9 h-9 text-[#E67E22]/60" />
                    </div>
                    <div className="absolute -top-1.5 -right-1.5 w-7 h-7 bg-[#5C4033]/8 rounded-full flex items-center justify-center">
                        <Sparkles className="w-3.5 h-3.5 text-[#5C4033]/40" />
                    </div>
                    <div className="absolute -bottom-1 -left-2 w-6 h-6 bg-[#E67E22]/15 rounded-full flex items-center justify-center">
                        <Heart className="w-3 h-3 text-[#E67E22]/50" />
                    </div>
                </div>

                <h2 className="font-semibold text-2xl text-[#5C4033] mb-2">
                    Your collection is empty
                </h2>
                <p className="text-[#5C4033]/50 text-sm max-w-xs leading-relaxed mb-7">
                    Save recipes you love and find them here anytime — no account required.
                </p>

                <Link
                    href="/recipes"
                    className="inline-flex items-center gap-2.5 bg-[#5C4033] hover:bg-[#4a3229] text-white font-semibold text-sm px-7 py-3.5 rounded-2xl transition-all duration-250 hover:-translate-y-0.5 hover:shadow-lg"
                >
                    <Compass className="w-4 h-4" />
                    Explore Recipes
                </Link>

                <Link
                    href="/"
                    className="mt-4 text-xs text-[#5C4033]/38 hover:text-[#E67E22] transition-colors"
                >
                    ← Back to home
                </Link>
            </motion.div>
            )
}

            // ─────────────────────────────────────────────────────────────────────────────
            //  SkeletonCard — shown during SSR / before hydration
            //  Prevents layout shift and gives perceived performance
            // ─────────────────────────────────────────────────────────────────────────────
            function SkeletonCard() {
    return (
            <div className="bg-white rounded-2xl overflow-hidden border border-[#5C4033]/8 shadow-sm animate-pulse">
                {/* Image placeholder */}
                <div className="h-44 bg-[#5C4033]/8" />
                <div className="p-4 space-y-2.5">
                    <div className="h-4 bg-[#5C4033]/8 rounded-full w-4/5" />
                    <div className="h-3 bg-[#5C4033]/6 rounded-full w-2/5" />
                    <div className="flex items-center justify-between pt-1">
                        <div className="h-3 bg-[#5C4033]/6 rounded-full w-16" />
                        <div className="h-5 bg-[#5C4033]/6 rounded-full w-14" />
                    </div>
                </div>
            </div>
            )
}