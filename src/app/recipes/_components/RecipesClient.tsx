"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useMemo, useCallback, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Star, Clock, ChevronLeft, ChevronRight, ChevronDown, RotateCcw, MapPin } from "lucide-react";
import { useFavorites } from "@/hooks/useFavorites";
import { STORIES } from '@/data/stories-data'
import { getAllRecipes } from "@/data/index"

const RECIPES = getAllRecipes();

const STORY_CARDS = STORIES.map(s => ({
    slug: `stories/${s.slug}`,
    title: s.title,
    subtitle: s.subtitle,
    image: s.image,
    region: 'All',
    difficulty: 'Easy' as const,
    time: s.readTime,
    rating: '5.0',
    reviews: 0,
    description: s.excerpt,
    tags: [s.tag, s.category, s.title, s.subtitle],
    category: 'Stories',
}));

const ALL_CONTENT = [...RECIPES, ...STORY_CARDS];

const CATEGORIES = ["All", "Soup", "Noodles", "Rice", "Street Food", "Rolls"];
const REGIONS = ["All Regions", "Northern", "Central", "Southern"];
const DIFF_COLOR: Record<string, string> = { Easy: "#10b981", Medium: "#f59e0b", Hard: "#ef4444" };
const LS_KEY = "fn_favorites";

function HeartButton({ slug, recipe }: { slug: string; recipe: typeof RECIPES[0] }) {
    const { toggle, isFavorite, mounted } = useFavorites();
    const liked = mounted && isFavorite(slug);
    const [burst, setBurst] = useState(false);
    const [toast, setToast] = useState<"added" | "removed" | null>(null);

    const handleToggle = useCallback((e: React.MouseEvent) => {
        e.preventDefault(); e.stopPropagation();
        const next = !liked;
        toggle({ id: slug, slug, title: recipe.title, image: recipe.image, category: recipe.category, cookTime: recipe.time });
        if (next) setBurst(true);
        setToast(next ? "added" : "removed");
        setTimeout(() => setBurst(false), 600);
        setTimeout(() => setToast(null), 2000);
    }, [liked, slug, recipe, toggle]);

    return (
        <div style={{ position: "absolute", top: 12, right: 12, zIndex: 2 }}>
            <AnimatePresence>
                {toast && (
                    <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -4, scale: 0.9 }}
                        transition={{ duration: 0.22 }}
                        style={{ position: "absolute", top: 44, right: 0, background: liked ? "#4B2E1A" : "rgba(75,46,26,0.75)", color: "white", fontSize: 11, fontWeight: 600, padding: "5px 12px", borderRadius: 100, whiteSpace: "nowrap", pointerEvents: "none", backdropFilter: "blur(8px)" }}
                    >
                        {toast === "added" ? "♥ Saved" : "✕ Removed"}
                    </motion.div>
                )}
            </AnimatePresence>
            <motion.button onClick={handleToggle} whileTap={{ scale: 0.82 }} aria-label={liked ? "Remove from favorites" : "Add to favorites"}
                style={{ width: 36, height: 36, borderRadius: "50%", background: liked ? "rgba(217,119,6,0.92)" : "rgba(255,255,255,0.85)", backdropFilter: "blur(10px)", border: liked ? "none" : "1px solid rgba(255,255,255,0.6)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: liked ? "0 4px 16px rgba(217,119,6,0.35)" : "0 2px 8px rgba(0,0,0,0.15)", transition: "background 0.25s, box-shadow 0.25s", position: "relative", overflow: "hidden" }}
            >
                {burst && <motion.span initial={{ scale: 0.6, opacity: 0.8 }} animate={{ scale: 2.2, opacity: 0 }} transition={{ duration: 0.5 }} style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "rgba(217,119,6,0.3)", pointerEvents: "none" }} />}
                <motion.svg width="16" height="16" viewBox="0 0 24 24" animate={burst ? { scale: [1, 1.35, 1] } : { scale: 1 }} transition={{ duration: 0.35 }}>
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill={liked ? "white" : "none"} stroke={liked ? "none" : "rgba(75,46,26,0.5)"} strokeWidth="1.8" strokeLinecap="round" />
                </motion.svg>
            </motion.button>
        </div>
    );
}

function Highlight({ text, query }: { text: string; query: string }) {
    if (!query.trim()) return <>{text}</>;
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
    const parts = text.split(regex);
    return (
        <>
            {parts.map((part, i) =>
                regex.test(part) ? (
                    <mark key={i} style={{ background: "rgba(217,119,6,0.2)", color: "#92580A", borderRadius: 3, padding: "0 2px" }}>{part}</mark>
                ) : (
                    <span key={i}>{part}</span>
                )
            )}
        </>
    );
}

const PER_PAGE = 12;
const serif = { fontFamily: "'Playfair Display', Georgia, serif" };
const SORTS = [
    { id: 'popular', label: 'Most popular' },
    { id: 'rating', label: 'Highest rated' },
    { id: 'quickest', label: 'Quickest' },
] as const;

const PLACEHOLDER_BG = ['#F3E3CF', '#E9EFE2', '#F6E0D6', '#EDE6F3', '#E3EEF1'];

/** Branded placeholder for recipes that don't have a photo yet */
function NoPhoto({ title, subtitle }: { title: string; subtitle: string }) {
    const bg = PLACEHOLDER_BG[title.length % PLACEHOLDER_BG.length];
    return (
        <div aria-hidden className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center" style={{ background: bg }}>
            <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="#B45309" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.55 }}>
                <path d="M8 24h32a16 16 0 0 1-32 0Z" /><path d="M14 40h20" /><path d="M30 10 38 4M26 12l6-9" /><path d="M18 18c0-2 2-3 2-5M24 18c0-2 2-3 2-5" />
            </svg>
            <p className="mt-3 line-clamp-2 text-[17px] italic leading-snug" style={{ ...serif, color: '#7C4A1E' }}>{subtitle || title}</p>
            <p className="mt-1.5 text-[10.5px] font-semibold uppercase" style={{ color: 'rgba(124,74,30,0.55)', letterSpacing: '0.14em' }}>Photo coming soon</p>
        </div>
    );
}

export default function RecipesClient({ withImage }: { withImage: string[] }) {
    const hasImg = useMemo(() => new Set(withImage), [withImage]);
    const searchParams = useSearchParams();
    const router = useRouter();
    const urlSearch = searchParams.get("search") ?? "";
    const [activeCategory, setActiveCategory] = useState("All");
    const [activeRegion, setActiveRegion] = useState("All Regions");
    const [localQuery, setLocalQuery] = useState(urlSearch);
    const [sortBy, setSortBy] = useState<'popular' | 'rating' | 'quickest'>('popular');
    const [page, setPage] = useState(1);

    useEffect(() => { setLocalQuery(urlSearch); }, [urlSearch]);

    const filtered = useMemo(() => {
        const normalize = (str: string) =>
            str.toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/đ/g, "d").replace(/Đ/g, "d");

        const q = normalize(localQuery.trim());
        const words = q.split(/\s+/).filter(Boolean);

        return ALL_CONTENT.filter((r) => {
            const titleLower = (r.title + " " + r.subtitle).toLowerCase();
            const tagsLower = r.tags.map((t) => t.toLowerCase());

            const matchCat = (cat: string) => {
                if (cat === "All") return true;

                if (cat === "Rice") {
                    if (/\b(noodle|pho|bun|bún|phở|mi quang|vermicelli|tapioca)\b/.test(titleLower)) return false;
                    if (/\b(congee|chao|cháo)\b/.test(titleLower)) return false;
                    return /\b(rice|com|cơm|xoi|xôi)\b/.test(titleLower) || tagsLower.includes("rice");
                }

                if (cat === "Noodles") {
                    if (/\b(rice|com|cơm|xoi|xôi)\b/.test(titleLower) && !/\b(noodle|pho|bun|bún|phở|mì)\b/.test(titleLower)) return false;
                    return /\b(noodle|pho|bun|bún|phở|mì|mi quang|vermicelli|tapioca)\b/.test(titleLower) || tagsLower.includes("noodles");
                }

                if (cat === "Soup") {
                    return /\b(soup|canh|broth|pho|phở|bun bo|bún bò|bun rieu|bún riêu|congee|chao|cháo)\b/.test(titleLower);
                }

                if (cat === "Street Food") {
                    return tagsLower.some((t) => t.includes("street")) ||
                        /\b(banh mi|bánh mì|skewer|street)\b/.test(titleLower);
                }

                if (cat === "Rolls") {
                    return /\b(roll|cuon|cuốn|nem)\b/.test(titleLower) ||
                        tagsLower.some((t) => t.includes("roll") || t.includes("wrap"));
                }

                return false;
            };

            const catMatch = matchCat(activeCategory);
            const regionMatch = activeRegion === "All Regions" || r.region === activeRegion;

            const searchable = normalize([
                r.title, r.subtitle, r.description,
                ...r.tags, r.category, r.region,
            ].join(" "));

            const searchMatch = words.length === 0 || words.every(w => searchable.includes(w));

            return catMatch && regionMatch && searchMatch;
        }).sort((a, b) => {
            // recipes with a real photo first, so the grid never opens on blank tiles
            const ia = hasImg.has(a.slug) ? 0 : 1, ib = hasImg.has(b.slug) ? 0 : 1;
            if (ia !== ib) return ia - ib;
            if (sortBy === 'rating') return parseFloat(b.rating) - parseFloat(a.rating);
            if (sortBy === 'quickest') return parseInt(a.time) - parseInt(b.time);
            return b.reviews - a.reviews;
        });
    }, [activeCategory, activeRegion, localQuery, sortBy, hasImg]);

    const clearSearch = () => { setLocalQuery(""); router.replace("/recipes"); };
    const resetAll = () => { clearSearch(); setActiveCategory("All"); setActiveRegion("All Regions"); setSortBy('popular'); };
    const filtersOn = activeCategory !== "All" || activeRegion !== "All Regions" || !!localQuery;

    const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
    const pageItems = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);
    const goTo = (n: number) => {
        setPage(n);
        document.getElementById('recipes-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    const pages: (number | 'dots')[] = [];
    if (totalPages <= 7) { for (let i = 1; i <= totalPages; i++) pages.push(i); }
    else {
        pages.push(1);
        if (page > 3) pages.push('dots');
        for (let i = Math.max(2, page - 1); i <= Math.min(totalPages - 1, page + 1); i++) pages.push(i);
        if (page < totalPages - 2) pages.push('dots');
        pages.push(totalPages);
    }

    return (
        <main className="min-h-screen" style={{ background: '#FBF8F4', fontFamily: "'DM Sans', system-ui, sans-serif" }}>

            {/* ═══ HERO + SEARCH ═══ */}
            <header className="px-5 pb-10 pt-28 sm:px-6 sm:pt-36" style={{ background: '#F5EDE3' }}>
                <div className="mx-auto max-w-[1200px]">
                    <div className="mb-4 flex items-center gap-2">
                        <span className="h-px w-8" style={{ background: '#D97706' }} />
                        <span className="text-[11px] font-bold uppercase" style={{ color: '#D97706', letterSpacing: '0.18em' }}>Recipes</span>
                    </div>
                    <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                        <div className="max-w-2xl">
                            <h1 className="font-bold leading-[1.04]" style={{ ...serif, fontSize: 'clamp(2.2rem, 5.2vw, 3.8rem)', color: '#2D1A0E' }}>
                                {localQuery
                                    ? <>Results for <em style={{ color: '#D97706' }}>“{localQuery}”</em></>
                                    : <>Cook Vietnam, <em style={{ color: '#D97706' }}>one bowl at a time</em></>}
                            </h1>
                            <p className="mt-4 text-[16px] leading-relaxed" style={{ color: 'rgba(75,46,26,0.65)' }}>
                                {RECIPES.length}+ tested recipes — from Hà Nội’s misty mornings to Sài Gòn’s street corners.
                            </p>
                        </div>

                        {/* Search */}
                        <div className="relative w-full lg:max-w-[420px]">
                            <Search size={18} className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2" style={{ color: '#B8A08A' }} aria-hidden />
                            <label htmlFor="recipes-search" className="sr-only">Search recipes</label>
                            <input
                                id="recipes-search"
                                type="search"
                                value={localQuery}
                                onChange={e => setLocalQuery(e.target.value)}
                                placeholder="Search phở, bánh mì, chicken…"
                                className="w-full rounded-full border border-[#E8D9C8] bg-white py-4 pl-12 pr-12 text-[15px] text-[#2D1A0E] shadow-[0_10px_30px_-16px_rgba(75,46,26,0.35)] outline-none transition placeholder:text-[#B8A08A] focus:border-[#D97706] focus:ring-4 focus:ring-[#D97706]/10 [&::-webkit-search-cancel-button]:hidden"
                            />
                            {localQuery && (
                                <button type="button" onClick={clearSearch} aria-label="Clear search" className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full transition-colors hover:bg-[#F5EDE3]" style={{ color: '#8A6E58' }}>
                                    <X size={16} />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            {/* ═══ FILTER BAR (sticky) ═══ */}
            <div className="sticky top-[61px] z-30 border-b border-[rgba(75,46,26,0.08)] backdrop-blur-xl min-[641px]:top-[85px]" style={{ background: 'rgba(251,248,244,0.92)' }}>
                <div className="mx-auto flex max-w-[1200px] items-center gap-3 px-5 py-3 sm:px-6">
                    {/* Category chips */}
                    <div className="flex min-w-0 flex-1 gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                        {CATEGORIES.map(cat => {
                            const on = activeCategory === cat;
                            return (
                                <button
                                    key={cat}
                                    aria-pressed={on}
                                    onClick={() => setActiveCategory(cat)}
                                    className="relative flex-shrink-0 rounded-full px-4 py-2 text-[13.5px] font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[#D97706]"
                                    style={{ color: on ? '#fff' : '#4B2E1A' }}
                                >
                                    {on && <motion.span layoutId="recipes-chip" className="absolute inset-0 rounded-full" style={{ background: '#2D1A0E' }} transition={{ type: 'spring', stiffness: 420, damping: 36 }} />}
                                    {!on && <span className="absolute inset-0 rounded-full border border-[rgba(75,46,26,0.12)] bg-white transition-colors hover:border-[rgba(75,46,26,0.3)]" />}
                                    <span className="relative">{cat}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Region + sort selects */}
                    {[
                        { id: 'region', icon: <MapPin size={14} aria-hidden />, value: activeRegion, set: (v: string) => setActiveRegion(v), opts: REGIONS.map(r => ({ id: r, label: r })), label: 'Filter by region' },
                        { id: 'sort', icon: null, value: sortBy, set: (v: string) => setSortBy(v as typeof sortBy), opts: SORTS.map(s => ({ id: s.id, label: s.label })), label: 'Sort recipes' },
                    ].map(sel => (
                        <div key={sel.id} className={`relative flex-shrink-0 ${sel.id === 'sort' ? 'hidden sm:block' : ''}`}>
                            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#8A6E58' }}>{sel.icon}</span>
                            <select
                                aria-label={sel.label}
                                value={sel.value}
                                onChange={e => sel.set(e.target.value)}
                                className={`appearance-none rounded-full border border-[rgba(75,46,26,0.12)] bg-white py-2 pr-9 text-[13.5px] font-medium text-[#2D1A0E] outline-none transition-colors hover:border-[rgba(75,46,26,0.3)] focus-visible:ring-2 focus-visible:ring-[#D97706] ${sel.icon ? 'pl-8' : 'pl-4'}`}
                            >
                                {sel.opts.map(o => <option key={o.id} value={o.id}>{o.label}</option>)}
                            </select>
                            <ChevronDown size={15} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" style={{ color: '#8A6E58' }} aria-hidden />
                        </div>
                    ))}
                </div>
            </div>

            {/* ═══ GRID ═══ */}
            <section id="recipes-grid" className="mx-auto max-w-[1200px] scroll-mt-40 px-5 pb-24 pt-8 sm:px-6">
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                    <p className="text-[14px]" style={{ color: 'rgba(75,46,26,0.6)' }} aria-live="polite">
                        <strong style={{ color: '#2D1A0E' }}>{filtered.length}</strong> {filtered.length === 1 ? 'recipe' : 'recipes'}
                        {filtered.length > PER_PAGE && <> · page {page} of {totalPages}</>}
                    </p>
                    {filtersOn && (
                        <button onClick={resetAll} className="flex items-center gap-1.5 text-[13px] font-semibold transition-colors hover:text-[#D97706]" style={{ color: '#4B2E1A' }}>
                            <RotateCcw size={14} /> Reset filters
                        </button>
                    )}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${activeCategory}-${activeRegion}-${localQuery}-${sortBy}-${page}`}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-y-10"
                    >
                        {pageItems.map(recipe => {
                            const isStory = recipe.slug.startsWith('stories/');
                            const photo = hasImg.has(recipe.slug);
                            return (
                                <Link
                                    key={recipe.slug}
                                    href={isStory ? `/${recipe.slug}` : `/recipes/${recipe.slug}`}
                                    className="group block rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-[#D97706] focus-visible:ring-offset-4"
                                    style={{ textDecoration: 'none' }}
                                >
                                    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl sm:aspect-[4/3]" style={{ background: '#EFE7DC' }}>
                                        {photo ? (
                                            <Image src={recipe.image} alt={recipe.title} fill sizes="(max-width:768px) 50vw, (max-width:1024px) 33vw, 290px" quality={80} className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]" />
                                        ) : (
                                            <NoPhoto title={recipe.title} subtitle={recipe.subtitle} />
                                        )}
                                        {isStory ? (
                                            <span className="absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10.5px] font-bold uppercase text-white" style={{ background: '#7C3AED', letterSpacing: '0.08em' }}>Story</span>
                                        ) : (
                                            <HeartButton slug={recipe.slug} recipe={recipe} />
                                        )}
                                    </div>
                                    <div className="px-0.5 pt-3.5">
                                        <p className="truncate text-[11px] font-semibold uppercase" style={{ color: 'rgba(75,46,26,0.5)', letterSpacing: '0.08em' }}>
                                            {recipe.region !== 'All' ? recipe.region : recipe.category}
                                            {recipe.region !== 'All' && recipe.category && <> · {recipe.category}</>}
                                        </p>
                                        <h2 className="mt-1.5 line-clamp-2 text-[16px] font-bold leading-snug transition-colors duration-200 group-hover:text-[#B45309] sm:text-[18px]" style={{ ...serif, color: '#2D1A0E' }}>
                                            <Highlight text={recipe.title} query={localQuery} />
                                        </h2>
                                        <p className="mt-1 hidden truncate text-[13.5px] italic sm:block" style={{ ...serif, color: 'rgba(75,46,26,0.6)' }}>
                                            <Highlight text={recipe.subtitle} query={localQuery} />
                                        </p>
                                        <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12.5px]" style={{ color: 'rgba(75,46,26,0.6)' }}>
                                            {!isStory && (
                                                <span className="flex items-center gap-1 font-semibold" style={{ color: '#2D1A0E' }}>
                                                    <Star size={12.5} fill="#F59E0B" color="#F59E0B" aria-hidden /> {recipe.rating}
                                                </span>
                                            )}
                                            <span className="flex items-center gap-1"><Clock size={12} aria-hidden /> {recipe.time}</span>
                                            {!isStory && (
                                                <span className="hidden items-center gap-1.5 sm:flex">
                                                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: DIFF_COLOR[recipe.difficulty] }} />{recipe.difficulty}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </motion.div>
                </AnimatePresence>

                {/* Empty state */}
                {filtered.length === 0 && (
                    <div className="py-24 text-center">
                        <p className="text-[24px] font-bold" style={{ ...serif, color: '#2D1A0E' }}>No recipes found</p>
                        <p className="mt-2 text-[15px]" style={{ color: 'rgba(75,46,26,0.6)' }}>Try English or Vietnamese without accents — “pho”, “ga”, “banh”.</p>
                        <button onClick={resetAll} className="mt-6 rounded-full px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-[#D97706]" style={{ background: '#2D1A0E' }}>
                            Reset filters
                        </button>
                    </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <nav aria-label="Pagination" className="mt-14 flex items-center justify-center gap-1.5">
                        <button
                            onClick={() => goTo(Math.max(1, page - 1))}
                            disabled={page === 1}
                            aria-label="Previous page"
                            className="flex h-10 items-center gap-1 rounded-full border border-[rgba(75,46,26,0.12)] bg-white px-4 text-[13.5px] font-medium text-[#2D1A0E] transition-colors hover:border-[#2D1A0E] disabled:cursor-default disabled:opacity-40 disabled:hover:border-[rgba(75,46,26,0.12)]"
                        >
                            <ChevronLeft size={16} /> <span className="hidden sm:inline">Prev</span>
                        </button>
                        {pages.map((p, i) => p === 'dots' ? (
                            <span key={`d${i}`} className="w-6 text-center text-[13px]" style={{ color: 'rgba(75,46,26,0.4)' }}>…</span>
                        ) : (
                            <button
                                key={p}
                                onClick={() => goTo(p)}
                                aria-current={page === p ? 'page' : undefined}
                                className="h-10 min-w-10 rounded-full px-3 text-[13.5px] font-semibold transition-colors"
                                style={page === p ? { background: '#2D1A0E', color: '#fff' } : { color: '#4B2E1A' }}
                            >
                                {p}
                            </button>
                        ))}
                        <button
                            onClick={() => goTo(Math.min(totalPages, page + 1))}
                            disabled={page === totalPages}
                            aria-label="Next page"
                            className="flex h-10 items-center gap-1 rounded-full border border-[rgba(75,46,26,0.12)] bg-white px-4 text-[13.5px] font-medium text-[#2D1A0E] transition-colors hover:border-[#2D1A0E] disabled:cursor-default disabled:opacity-40 disabled:hover:border-[rgba(75,46,26,0.12)]"
                        >
                            <span className="hidden sm:inline">Next</span> <ChevronRight size={16} />
                        </button>
                    </nav>
                )}
            </section>
        </main>
    );
}
