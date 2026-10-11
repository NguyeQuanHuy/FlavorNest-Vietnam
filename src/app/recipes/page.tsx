"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useMemo, useCallback, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FNIcon } from "@/components/Icons";
import { useFavorites } from "@/hooks/useFavorites";
import { STORIES } from '@/data/stories-data'
import { getAllRecipes, getIngredientPreviewMap } from '@/data/index'

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
        <div style={{ position: "absolute", bottom: 14, right: 14 }}>
            <AnimatePresence>
                {toast && (
                    <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -4, scale: 0.9 }}
                        transition={{ duration: 0.22 }}
                        style={{ position: "absolute", bottom: 44, right: 0, background: liked ? "#4B2E1A" : "rgba(75,46,26,0.75)", color: "white", fontSize: 11, fontWeight: 600, padding: "5px 12px", borderRadius: 100, whiteSpace: "nowrap", pointerEvents: "none", backdropFilter: "blur(8px)" }}
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

function RecipesInner() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const urlSearch = searchParams.get("search") ?? "";
    const [activeCategory, setActiveCategory] = useState("All");
    const [activeRegion, setActiveRegion] = useState("All Regions");
    const [localQuery, setLocalQuery] = useState(urlSearch);
    const [hovered, setHovered] = useState<string | null>(null);
    const ingredientMap = useMemo(() => getIngredientPreviewMap(), [])
    const [sortBy, setSortBy] = useState<'popular' | 'rating' | 'quickest'>('popular');
    const [page, setPage] = useState(1);
    const PER_PAGE = 12;

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
            if (sortBy === 'rating') return parseFloat(b.rating) - parseFloat(a.rating);
            if (sortBy === 'quickest') return parseInt(a.time) - parseInt(b.time);
            return b.reviews - a.reviews;
        });
    }, [activeCategory, activeRegion, localQuery, sortBy]);
    useEffect(() => { setPage(1); }, [activeCategory, activeRegion, localQuery, sortBy]);

    const clearSearch = () => { setLocalQuery(""); router.replace("/recipes"); };

    return (
        <main style={{ minHeight: "100vh", background: "transparent", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            <style>{`
        * { box-sizing: border-box; }
        .recipe-card { background:white; border-radius:0; overflow:hidden; border:none; cursor:pointer; text-decoration:none; display:block; position:relative; } .recipe-card::before, .recipe-card::after { content:''; position:absolute; width:20px; height:20px; opacity:0; transition:opacity 0.25s ease; z-index:10; pointer-events:none; } .recipe-card::before { top:0; left:0; border-top:3px solid #D97706; border-left:3px solid #D97706; } .recipe-card::after { bottom:0; right:0; border-bottom:3px solid #D97706; border-right:3px solid #D97706; } .recipe-card:hover::before, .recipe-card:hover::after { opacity:0; }
        .recipe-card:hover .r-img { transform:scale(1.04); }
        .r-img { transition:transform 0.5s ease; }
        .filter-pill { border:1.5px solid rgba(75,46,26,0.12); border-radius:100px; padding:7px 18px; font-size:13px; font-weight:500; color:rgba(75,46,26,0.55); background:transparent; cursor:pointer; transition:all 0.18s; white-space:nowrap; font-family:inherit; }
        .filter-pill:hover { color:#D97706; border-color:rgba(217,119,6,0.4); }
        .filter-pill.active { background:#4B2E1A; color:white; border-color:#4B2E1A; }
        .recipes-grid-inner { grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); }
        @media (max-width: 768px) {
          .recipes-hero { padding-top: 90px !important; padding-bottom: 14px !important; }
          .recipes-hero h1 { font-size: 24px !important; margin-bottom: 6px !important; line-height: 1.15 !important; }
          .recipes-hero-desc { font-size: 13px !important; padding-left: 0 !important; line-height: 1.45 !important; }
          .recipes-hero > div > div:first-child { margin-bottom: 8px !important; }
          .recipes-hero > div > div:nth-child(3) { margin-bottom: 0 !important; }
          .recipes-filter-bar { padding: 6px 12px !important; margin-top: 0 !important; }
          #recipes-grid { padding: 20px 14px 60px !important; }
          #recipes-grid > p { margin-bottom: 14px !important; font-size: 12px !important; }
          .filter-pill { font-size: 11px !important; padding: 6px 12px !important; }
          .search-bar { font-size: 13px !important; padding: 8px 16px 8px 38px !important; max-width: 200px !important; }
          .recipes-grid-inner { grid-template-columns: 1fr 1fr !important; gap: 18px 12px !important; }
          .recipe-card-img { aspect-ratio: 4/5 !important; }
          .recipe-card h2 { font-size: 13px !important; font-weight: 700 !important; margin: 6px 0 0 !important; line-height: 1.25 !important; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
          .recipe-card p { display: none !important; }
          .recipe-card > div:last-child { padding: 8px 4px 12px !important; }
          .recipe-card > div:last-child > div:first-child { font-size: 9px !important; letter-spacing: 0.1em !important; margin-bottom: 0 !important; padding-bottom: 0 !important; border: none !important; color: rgba(75,46,26,0.55) !important; }
          .recipe-card h2 { font-size: 15px !important; margin: 8px 0 2px !important; }
          .recipe-card p { font-size: 11px !important; }
          .recipe-card > div:last-child { padding: 10px 2px 14px !important; }
          .recipe-card > div:last-child > div:first-child { font-size: 9px !important; margin-bottom: 4px !important; padding-bottom: 4px !important; }
        }
        .search-bar { background:white; border:1.5px solid rgba(75,46,26,0.1); border-radius:100px; padding:10px 18px 10px 44px; font-size:14px; font-family:inherit; color:#4B2E1A; outline:none; transition:border-color 0.2s,box-shadow 0.2s; width:100%; max-width:320px; }
        .search-bar:focus { border-color:#D97706; box-shadow:0 0 0 3px rgba(217,119,6,0.1); }
        .search-bar::placeholder { color:rgba(75,46,26,0.35); }
       .tag-chip { font-size:10px; font-weight:600; letter-spacing:0.04em; color:rgba(75,46,26,0.45); background:rgba(75,46,26,0.05); padding:3px 9px; border-radius:6px; }
        ::-webkit-scrollbar { height: 3px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(75,46,26,0.15); border-radius: 100px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(217,119,6,0.4); }
      `}</style>

            {/* HERO */}
            <section className="recipes-hero" style={{ position: "relative", background: "#F5EDE3", paddingTop: 132, paddingBottom: 44, paddingLeft: 20, paddingRight: 20 }}>
                <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                        <div style={{ width: 32, height: 2, background: "#D97706" }} />
                        <span style={{ color: "#D97706", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>FlavorNest Vietnam</span>
                    </div>
                    <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px,4.6vw,56px)", fontWeight: 700, color: "#2D1A0E", lineHeight: 1.08, margin: "0 0 16px", letterSpacing: "-0.01em" }}>
                        {localQuery ? (<>Search: <span style={{ color: "#D97706", fontStyle: "italic" }}>&quot;{localQuery}&quot;</span></>) : (<>Discover <span style={{ color: "#D97706", fontStyle: "italic" }}> Our flavorful Recipes</span></>)}
                    </h1>
                    <div style={{ maxWidth: 600 }}>
                        <p className="recipes-hero-desc" style={{ color: "rgba(75,46,26,0.65)", fontSize: 17, lineHeight: 1.7, margin: 0 }}>
                            {localQuery ? (
                                <>
                                    <span style={{ color: "#2D1A0E", fontWeight: 500 }}>{localQuery}</span>
                                    {` `}is a Vietnamese dish made with
                                    {` `}<span style={{ color: "#2D1A0E", fontWeight: 500 }}>
                                        {filtered.length > 0
                                            ? filtered.slice(0, 3).map(r => r.subtitle).join(", ")
                                            : "fresh ingredients"}
                                    </span>
                                    {` `}— explore all {filtered.length} matching recipes below.
                                </>
                            ) : (
                                <>
                                    Authentic Vietnamese recipes — from{` `}
                                    <span style={{ color: "#2D1A0E", fontWeight: 500 }}>Hanoi&apos;s misty mornings</span>
                                    {` `}to{` `}
                                    <span style={{ color: "#2D1A0E", fontWeight: 500 }}>Saigon&apos;s vibrant street corners</span>.
                                </>
                            )}
                        </p>
                    </div>
                </div>
            </section>

            {/* FILTER BAR */}
            <div className="recipes-filter-bar" style={{ position: "sticky", top: 76, zIndex: 40, background: "rgba(250,250,247,0.96)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(75,46,26,0.1)", padding: "0 20px" }}>
                <div className="[scrollbar-width:none] [&::-webkit-scrollbar]:hidden" style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 22, overflowX: "auto", alignItems: "center", flexWrap: "nowrap" }}>
                    <div style={{ position: "relative", flexShrink: 0, width: 210 }}>
                        <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", display: "flex", alignItems: "center" }}>
                            <FNIcon name="search" size={14} color="#D97706" />
                        </span>
                        <input className="search-bar" type="text" placeholder="Search recipes..." value={localQuery} onChange={(e) => setLocalQuery(e.target.value)} aria-label="Search recipes" style={{ paddingLeft: 34 }} />
                        {localQuery && (
                            <button onClick={clearSearch} style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center" }}>
                                <FNIcon name="close" size={13} color="rgba(75,46,26,0.4)" />
                            </button>
                        )}
                    </div>
                    <div style={{ width: 1, height: 20, background: "rgba(75,46,26,0.12)", flexShrink: 0 }} />
                    {CATEGORIES.map((t) => {
                        const isActive = activeCategory === t;
                        return (
                            <button
                                key={t}
                                aria-pressed={isActive}
                                onClick={() => setActiveCategory(t)}
                                className={isActive ? "text-[#2D1A0E]" : "text-[rgba(75,46,26,0.5)] hover:text-[#2D1A0E]"}
                                style={{ position: "relative", flexShrink: 0, padding: "16px 0", fontSize: 14, fontWeight: 500, letterSpacing: "0.01em", cursor: "pointer", whiteSpace: "nowrap", background: "none", border: "none", transition: "color 0.2s", fontFamily: "inherit" }}
                            >
                                {t}
                                {isActive && (
                                    <motion.span
                                        layoutId="recipes-cat-underline"
                                        transition={{ type: "spring", stiffness: 420, damping: 36 }}
                                        style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 2, background: "#D97706" }}
                                    />
                                )}
                            </button>
                        );
                    })}
                    <div style={{ width: 1, height: 20, background: "rgba(75,46,26,0.12)", flexShrink: 0 }} />
                    {REGIONS.map((t) => {
                        const isActive = activeRegion === t;
                        return (
                            <button
                                key={t}
                                aria-pressed={isActive}
                                onClick={() => setActiveRegion(t)}
                                className={isActive ? "text-[#2D1A0E]" : "text-[rgba(75,46,26,0.5)] hover:text-[#2D1A0E]"}
                                style={{ position: "relative", flexShrink: 0, padding: "16px 0", fontSize: 14, fontWeight: 500, letterSpacing: "0.01em", cursor: "pointer", whiteSpace: "nowrap", background: "none", border: "none", transition: "color 0.2s", fontFamily: "inherit" }}
                            >
                                {t}
                                {isActive && (
                                    <motion.span
                                        layoutId="recipes-region-underline"
                                        transition={{ type: "spring", stiffness: 420, damping: 36 }}
                                        style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 2, background: "#D97706" }}
                                    />
                                )}
                            </button>
                        );
                    })}
                    <div style={{ marginLeft: "auto", flexShrink: 0, display: "flex", alignItems: "center", gap: 6, paddingLeft: 8 }}>
                        <FNIcon name="filter" size={13} color="rgba(75,46,26,0.5)" />
                        <select value={sortBy} onChange={e => setSortBy(e.target.value as 'popular' | 'rating' | 'quickest')} aria-label="Sort recipes"
                            style={{ border: "none", padding: "6px 2px", fontSize: 14, fontWeight: 500, color: "#2D1A0E", background: "transparent", cursor: "pointer", fontFamily: "inherit", outline: "none" }}>
                            <option value="popular">Most Popular</option>
                            <option value="rating">Highest Rated</option>
                            <option value="quickest">Quickest</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* SEARCH BANNER */}
            <AnimatePresence>
                {localQuery && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} style={{ background: "rgba(217,119,6,0.07)", borderBottom: "1px solid rgba(217,119,6,0.15)" }}>
                        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "12px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                            <p style={{ fontSize: 14, color: "#92580A", margin: 0, fontWeight: 500 }}>
                                Found <strong>{filtered.length}</strong> recipes for <strong>&quot;{localQuery}&quot;</strong>
                            </p>
                            <button onClick={clearSearch} style={{ fontSize: 12, color: "#D97706", fontWeight: 600, background: "none", border: "1px solid rgba(217,119,6,0.3)", borderRadius: 100, padding: "4px 14px", cursor: "pointer", fontFamily: "inherit" }}>
                                Clear search ✕
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* GRID */}
            <section id="recipes-grid" style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 20px 80px" }}>
                {!localQuery && (
                    <p style={{ fontSize: 13, color: "rgba(75,46,26,0.4)", marginBottom: 28, fontWeight: 500 }}>
                        {filtered.length} recipes found
                    </p>
                )}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${activeCategory}-${activeRegion}-${localQuery}`}
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
                        className="recipes-grid-inner" style={{ display: "grid", gap: "34px 22px" }}
                    >
                        {filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE).map((recipe, i) => (
                            <motion.div key={recipe.slug} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0 }}>
                                <Link href={recipe.slug.startsWith('stories/') ? `/${recipe.slug}` : `/recipes/${recipe.slug}`} className="recipe-card group" style={{ background: "transparent" }}>
                                    <div className="recipe-card-img" style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", background: "#EFE7DC", borderRadius: 12 }}>
                                        <span aria-hidden style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Playfair Display', serif", fontSize: 46, fontWeight: 700, color: "rgba(75,46,26,0.16)" }}>{recipe.title.charAt(0)}</span>
                                        <Image src={recipe.image} alt={recipe.title} fill sizes="(max-width:768px) 50vw, 300px" className="r-img" style={{ objectFit: "cover" }} quality={80} onError={e => { e.currentTarget.style.display = "none"; }} />
                                        <HeartButton slug={recipe.slug} recipe={recipe} />
                                    </div>
                                    <div style={{ padding: "14px 2px 0" }}>
                                        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.09em", color: "rgba(75,46,26,0.5)", textTransform: "uppercase" }}>
                                            {recipe.category}{recipe.region !== 'All' && <> · {recipe.region}</>}
                                        </div>
                                        <h2 className="text-[#2D1A0E] transition-colors duration-200 group-hover:text-[#D97706]" style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, margin: "9px 0 6px", lineHeight: 1.25 }}>
                                            <Highlight text={recipe.title} query={localQuery} />
                                        </h2>
                                        <p style={{ fontSize: 13.5, color: "rgba(75,46,26,0.6)", lineHeight: 1.55, margin: 0, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                                            <Highlight text={recipe.subtitle} query={localQuery} />
                                        </p>
                                        <div style={{ display: "flex", alignItems: "center", gap: 7, marginTop: 10, fontSize: 12.5, color: "rgba(75,46,26,0.55)" }}>
                                            {recipe.category !== 'Stories' && (
                                                <>
                                                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: DIFF_COLOR[recipe.difficulty], flexShrink: 0 }} />
                                                    {recipe.difficulty}
                                                    <span aria-hidden>·</span>
                                                </>
                                            )}
                                            {recipe.time}
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
                {/* Pagination */}
                {filtered.length > PER_PAGE && (() => {
                    const totalPages = Math.ceil(filtered.length / PER_PAGE);
                    const goTo = (n: number) => { setPage(n); document.getElementById('recipes-grid')?.scrollIntoView({ behavior: 'instant', block: 'start' }); };
                    const pages: (number | 'dots')[] = [];
                    if (totalPages <= 5) {
                        for (let i = 1; i <= totalPages; i++) pages.push(i);
                    } else {
                        pages.push(1);
                        if (page > 3) pages.push('dots');
                        const start = Math.max(2, page - 1);
                        const end = Math.min(totalPages - 1, page + 1);
                        for (let i = start; i <= end; i++) pages.push(i);
                        if (page < totalPages - 2) pages.push('dots');
                        pages.push(totalPages);
                    }
                    return (
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 4, position: 'sticky', bottom: 24, zIndex: 30 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)', padding: '8px 10px', borderRadius: 100, boxShadow: '0 4px 24px rgba(75,46,26,0.12)', border: '1px solid rgba(75,46,26,0.08)' }}>
                                <button
                                    aria-label="Previous page"
                                    onClick={() => goTo(Math.max(1, page - 1))}
                                    disabled={page === 1}
                                    style={{ width: 34, height: 34, border: 'none', borderRadius: '50%', background: 'transparent', color: page === 1 ? 'rgba(75,46,26,0.25)' : '#4B2E1A', fontSize: 18, fontWeight: 500, cursor: page === 1 ? 'default' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    ‹
                                </button>

                                {pages.map((p, idx) => p === 'dots' ? (
                                    <span key={`dots-${idx}`} style={{ width: 20, textAlign: 'center', color: 'rgba(75,46,26,0.35)', fontSize: 13, letterSpacing: 1 }}>…</span>
                                ) : (
                                    <button
                                        key={p}
                                        onClick={() => goTo(p)}
                                        aria-current={page === p ? 'page' : undefined}
                                        style={{ minWidth: 32, height: 32, padding: '0 8px', borderRadius: 16, border: 'none', background: page === p ? '#D97706' : 'transparent', color: page === p ? 'white' : 'rgba(75,46,26,0.65)', fontSize: 13, fontWeight: page === p ? 700 : 500, cursor: 'pointer', fontFamily: 'inherit', transition: 'background 0.15s' }}
                                    >
                                        {p}
                                    </button>
                                ))}

                                <button
                                    aria-label="Next page"
                                    onClick={() => goTo(Math.min(totalPages, page + 1))}
                                    disabled={page === totalPages}
                                    style={{ width: 34, height: 34, border: 'none', borderRadius: '50%', background: 'transparent', color: page === totalPages ? 'rgba(75,46,26,0.25)' : '#4B2E1A', fontSize: 18, fontWeight: 500, cursor: page === totalPages ? 'default' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    ›
                                </button>
                            </div>
                        </div>
                    );
                })()}
                {filtered.length === 0 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: "center", padding: "80px 20px" }}>
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            style={{ marginBottom: 20 }}
                        >
                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                                <circle cx="11" cy="11" r="7" stroke="#D97706" strokeWidth="1.5" />
                                <path d="M20 20L16.5 16.5" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M8 11h6M11 8v6" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </motion.div>
                        <p style={{
                            fontFamily: "var(--font-playfair), Georgia, serif",
                            fontSize: 22, fontWeight: 600, color: "#2D1A0E", marginBottom: 10,
                        }}>
                            No recipes found
                        </p>
                        <p style={{ fontSize: 14, color: "rgba(75,46,26,0.5)", marginBottom: 20 }}>
                            Try searching in English or Vietnamese without accents
                        </p>
                        <button onClick={clearSearch} style={{ marginTop: 16, padding: "10px 24px", borderRadius: 100, border: "1.5px solid rgba(75,46,26,0.15)", background: "transparent", color: "#D97706", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
                            Clear search
                        </button>
                    </motion.div>
                )}
            </section>
        </main>
    );
}

export default function RecipesPage() {
    return (
        <Suspense fallback={
            <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#FAFAF7" }}>
                <div style={{ textAlign: "center", color: "rgba(75,46,26,0.4)" }}>
                    <div style={{ fontSize: 36, marginBottom: 12 }}>🍜</div>
                    <p style={{ fontFamily: "system-ui" }}>Loading recipes...</p>
                </div>
            </div>
        }>
            <RecipesInner />
        </Suspense>
    );
}
