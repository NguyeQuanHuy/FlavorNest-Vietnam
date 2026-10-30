'use client'

// ─────────────────────────────────────────────────────────────────────────────
//  app/favorites/_components/FavoritesClient.tsx
//  Saved recipes: calm grid, sort, undo after remove, actionable empty state.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Clock, ArrowRight, Search, X } from 'lucide-react'
import { useFavorites, type FavoriteRecipe } from '@/hooks/useFavorites'

export interface Suggestion {
    slug: string; title: string; image: string
    category?: string; cookTime?: string; difficulty?: string; subtitle?: string
}

const serif = { fontFamily: "'Playfair Display', Georgia, serif" }
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
type Sort = 'recent' | 'az'

// ─── One card (used for saved recipes and for suggestions) ──────────────────
function RecipeCard({ r, saved, onHeart, index }: {
    r: Suggestion; saved: boolean; onHeart: () => void; index: number
}) {
    return (
        <motion.article
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.18 } }}
            transition={{ duration: 0.35, ease: EASE, delay: Math.min(index, 8) * 0.03 }}
            className="group relative"
        >
            <Link href={`/recipes/${r.slug}`} className="block" style={{ textDecoration: 'none' }}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl" style={{ background: '#EFE3D5' }}>
                    {r.image && (
                        <Image
                            src={r.image} alt={r.title} fill
                            sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 280px"
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        />
                    )}
                </div>
                <div className="px-0.5 pt-3">
                    {r.category && (
                        <p className="text-[10.5px] font-bold uppercase" style={{ color: '#B45309', letterSpacing: '0.12em' }}>{r.category}</p>
                    )}
                    <h3 className="mt-1 line-clamp-2 text-[16px] font-bold leading-snug transition-colors group-hover:text-[#B45309] sm:text-[17px]" style={{ ...serif, color: '#2D1A0E' }}>
                        {r.title}
                    </h3>
                    {(r.cookTime || r.difficulty) && (
                        <p className="mt-1.5 flex items-center gap-1.5 text-[12.5px]" style={{ color: 'rgba(75,46,26,0.55)' }}>
                            {r.cookTime && <><Clock size={12} aria-hidden /> {r.cookTime}</>}
                            {r.cookTime && r.difficulty && <span aria-hidden>·</span>}
                            {r.difficulty}
                        </p>
                    )}
                </div>
            </Link>
            <motion.button
                type="button"
                whileTap={{ scale: 0.85 }}
                onClick={onHeart}
                aria-pressed={saved}
                aria-label={saved ? `Remove ${r.title} from saved` : `Save ${r.title}`}
                className="absolute right-2.5 top-2.5 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 shadow-[0_6px_16px_-8px_rgba(45,26,14,0.5)] backdrop-blur transition-transform hover:scale-105"
            >
                <Heart size={18} strokeWidth={2.2} color="#D97706" fill={saved ? '#D97706' : 'none'} />
            </motion.button>
        </motion.article>
    )
}

function SkeletonGrid() {
    return (
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4" aria-hidden>
            {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="animate-pulse">
                    <div className="aspect-[4/3] rounded-2xl" style={{ background: '#EFE3D5' }} />
                    <div className="mt-3 h-3 w-1/3 rounded" style={{ background: '#EFE3D5' }} />
                    <div className="mt-2 h-4 w-3/4 rounded" style={{ background: '#EFE3D5' }} />
                </div>
            ))}
        </div>
    )
}

// ─────────────────────────────────────────────────────────────────────────────
export default function FavoritesClient({ suggestions }: { suggestions: Suggestion[] }) {
    const { favorites, hydrated, toggle, removeFavorite, clearFavorites, isFavorite } = useFavorites()
    const [sort, setSort] = useState<Sort>('recent')
    const [query, setQuery] = useState('')
    const [confirmAll, setConfirmAll] = useState(false)
    const [undo, setUndo] = useState<FavoriteRecipe | null>(null)
    const undoTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

    const list = useMemo(() => {
        const q = query.trim().toLowerCase()
        const items = favorites.filter(f => !q || `${f.title} ${f.category ?? ''}`.toLowerCase().includes(q))
        return sort === 'az'
            ? [...items].sort((a, b) => a.title.localeCompare(b.title))
            : [...items].sort((a, b) => b.savedAt - a.savedAt)
    }, [favorites, sort, query])

    const remove = (r: FavoriteRecipe) => {
        removeFavorite(r.slug)
        setUndo(r)
        if (undoTimer.current) clearTimeout(undoTimer.current)
        undoTimer.current = setTimeout(() => setUndo(null), 5000)
    }
    const restore = () => {
        if (!undo) return
        const { savedAt: _s, ...rest } = undo
        void _s
        toggle(rest)
        setUndo(null)
    }
    useEffect(() => () => { if (undoTimer.current) clearTimeout(undoTimer.current) }, [])

    useEffect(() => {
        if (!confirmAll) return
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setConfirmAll(false)
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [confirmAll])

    const count = favorites.length
    const empty = hydrated && count === 0

    return (
        <main className="min-h-screen pb-24 pt-[104px] sm:pt-[136px]" style={{ background: '#FBF8F4', fontFamily: "'DM Sans', sans-serif" }}>
            <div className="mx-auto max-w-[1120px] px-5 sm:px-6">

                {/* ── Header ── */}
                <header className="flex flex-col gap-5 border-b pb-6 sm:flex-row sm:items-end sm:justify-between" style={{ borderColor: 'rgba(75,46,26,0.1)' }}>
                    <div>
                        <p className="text-[11px] font-bold uppercase" style={{ color: '#D97706', letterSpacing: '0.18em' }}>Your cookbook</p>
                        <h1 className="mt-2 font-bold leading-[1.05]" style={{ ...serif, fontSize: 'clamp(2rem, 4.6vw, 3rem)', color: '#2D1A0E' }}>Saved recipes</h1>
                        <p className="mt-2 text-[15px]" style={{ color: 'rgba(75,46,26,0.6)' }} aria-live="polite">
                            {!hydrated ? ' ' : count === 0 ? 'Nothing here yet.' : `${count} ${count === 1 ? 'recipe' : 'recipes'} saved`}
                        </p>
                    </div>

                    {hydrated && count > 0 && (
                        <div className="flex flex-wrap items-center gap-2">
                            {count > 6 && (
                                <div className="relative">
                                    <Search size={15} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: '#B8A08A' }} aria-hidden />
                                    <label htmlFor="fav-q" className="sr-only">Search saved recipes</label>
                                    <input
                                        id="fav-q" type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search saved"
                                        className="h-10 w-[180px] rounded-full border border-[#E8D9C8] bg-white pl-9 pr-3 text-[16px] text-[#2D1A0E] outline-none placeholder:text-[#B8A08A] focus:border-[#D97706] sm:text-[14px] [&::-webkit-search-cancel-button]:hidden"
                                    />
                                </div>
                            )}
                            <div className="flex rounded-full p-1" style={{ background: '#F1E7DA' }} role="group" aria-label="Sort">
                                {([['recent', 'Recent'], ['az', 'A–Z']] as [Sort, string][]).map(([id, label]) => (
                                    <button key={id} aria-pressed={sort === id} onClick={() => setSort(id)} className="relative rounded-full px-3.5 py-1.5 text-[13px] font-semibold" style={{ color: sort === id ? '#2D1A0E' : 'rgba(75,46,26,0.6)' }}>
                                        {sort === id && <motion.span layoutId="fav-sort" className="absolute inset-0 rounded-full bg-white shadow-sm" transition={{ type: 'spring', stiffness: 450, damping: 35 }} />}
                                        <span className="relative">{label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </header>

                {/* ── Body ── */}
                <div className="pt-8">
                    {!hydrated ? (
                        <SkeletonGrid />
                    ) : empty ? (
                        <motion.section initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: EASE }}>
                            <div className="mx-auto max-w-[440px] py-6 text-center sm:py-10">
                                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full" style={{ background: '#FEF3C7' }}>
                                    <Heart size={26} color="#D97706" strokeWidth={2} />
                                </span>
                                <h2 className="mt-5 text-[24px] font-bold leading-tight" style={{ ...serif, color: '#2D1A0E' }}>Start your own cookbook</h2>
                                <p className="mt-2 text-[15px] leading-relaxed" style={{ color: 'rgba(75,46,26,0.62)' }}>
                                    Tap the <Heart size={14} className="inline -mt-0.5" color="#D97706" fill="#D97706" aria-label="heart" /> on any recipe and it will be waiting for you here.
                                </p>
                                <Link href="/recipes" className="group mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-[#B45309]" style={{ background: '#2D1A0E', textDecoration: 'none' }}>
                                    Browse recipes <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                                </Link>
                            </div>

                            {suggestions.length > 0 && (
                                <div className="mt-10">
                                    <div className="mb-5 flex items-center gap-4">
                                        <h2 className="text-[13px] font-bold uppercase" style={{ color: 'rgba(75,46,26,0.55)', letterSpacing: '0.14em' }}>Start with a classic</h2>
                                        <span className="h-px flex-1" style={{ background: 'rgba(75,46,26,0.1)' }} />
                                    </div>
                                    <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4">
                                        {suggestions.map((s, i) => (
                                            <RecipeCard key={s.slug} r={s} index={i} saved={isFavorite(s.slug)} onHeart={() => toggle({ ...s, id: s.slug })} />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </motion.section>
                    ) : (
                        <>
                            <motion.div layout className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
                                <AnimatePresence mode="popLayout">
                                    {list.map((r, i) => (
                                        <RecipeCard key={r.slug} r={r} index={i} saved onHeart={() => remove(r)} />
                                    ))}
                                </AnimatePresence>
                            </motion.div>
                            {list.length === 0 && (
                                <p className="py-16 text-center text-[15px]" style={{ color: 'rgba(75,46,26,0.6)' }}>No saved recipe matches “{query}”.</p>
                            )}
                            <div className="mt-14 flex justify-center">
                                <button onClick={() => setConfirmAll(true)} className="text-[13px] underline underline-offset-4 transition-colors hover:text-[#B91C1C]" style={{ color: 'rgba(75,46,26,0.45)' }}>
                                    Remove all saved recipes
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>

            {/* ── Undo toast ── */}
            <AnimatePresence>
                {undo && (
                    <motion.div
                        role="status"
                        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 16 }} transition={{ duration: 0.25, ease: EASE }}
                        className="fixed inset-x-0 bottom-[calc(20px+env(safe-area-inset-bottom))] z-[90] mx-auto flex w-[min(92vw,420px)] items-center gap-3 rounded-2xl px-4 py-3 shadow-[0_18px_40px_-16px_rgba(0,0,0,0.5)]"
                        style={{ background: '#2D1A0E' }}
                    >
                        <p className="min-w-0 flex-1 truncate text-[14px] text-white/90">Removed <strong className="text-white">{undo.title}</strong></p>
                        <button onClick={restore} className="rounded-full px-3 py-1.5 text-[13px] font-bold" style={{ color: '#F59E0B' }}>Undo</button>
                        <button onClick={() => setUndo(null)} aria-label="Dismiss" className="text-white/50 hover:text-white"><X size={16} /></button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ── Remove-all confirm ── */}
            <AnimatePresence>
                {confirmAll && (
                    <motion.div className="fixed inset-0 z-[120] flex items-center justify-center p-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <div className="absolute inset-0" style={{ background: 'rgba(20,11,5,0.45)', backdropFilter: 'blur(3px)' }} onClick={() => setConfirmAll(false)} />
                        <motion.div
                            role="alertdialog" aria-modal="true" aria-labelledby="fav-confirm-title"
                            initial={{ opacity: 0, y: 12, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: 0.97 }} transition={{ duration: 0.22, ease: EASE }}
                            className="relative w-full max-w-[360px] rounded-3xl bg-white p-7 text-center shadow-[0_30px_80px_-20px_rgba(45,26,14,0.4)]"
                        >
                            <h3 id="fav-confirm-title" className="text-[21px] font-bold" style={{ ...serif, color: '#2D1A0E' }}>Remove all {count} recipes?</h3>
                            <p className="mt-2 text-[14px] leading-relaxed" style={{ color: 'rgba(75,46,26,0.6)' }}>This can’t be undone.</p>
                            <div className="mt-6 flex gap-2.5">
                                <button autoFocus onClick={() => setConfirmAll(false)} className="h-11 flex-1 rounded-full border text-[14px] font-semibold" style={{ borderColor: 'rgba(75,46,26,0.15)', color: '#4B2E1A' }}>Keep them</button>
                                <button onClick={() => { clearFavorites(); setConfirmAll(false) }} className="h-11 flex-1 rounded-full text-[14px] font-semibold text-white" style={{ background: '#B91C1C' }}>Remove all</button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    )
}
