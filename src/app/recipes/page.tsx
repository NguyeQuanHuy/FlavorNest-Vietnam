"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useMemo, Suspense, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { getAllRecipes } from "@/data/index";
import { FNIcon } from "@/components/Icons";
import { useFavorites } from "@/hooks/useFavorites";

const RECIPES = getAllRecipes();

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
    const [sortBy, setSortBy] = useState<'popular' | 'rating' | 'quickest'>('popular');

    useEffect(() => { setLocalQuery(urlSearch); }, [urlSearch]);

    const filtered = useMemo(() => {
        const q = localQuery.toLowerCase().trim();
        return RECIPES.filter((r) => {
            const catMatch = activeCategory === "All" || r.category === activeCategory;
            const regionMatch = activeRegion === "All Regions" || r.region === activeRegion;
            const searchMatch = !q || r.title.toLowerCase().includes(q) || r.subtitle.toLowerCase().includes(q) || r.description.toLowerCase().includes(q) || r.tags.some((t) => t.toLowerCase().includes(q)) || r.category.toLowerCase().includes(q) || r.region.toLowerCase().includes(q);
            return catMatch && regionMatch && searchMatch;
        }).sort((a, b) => {
            if (sortBy === 'rating') return parseFloat(b.rating) - parseFloat(a.rating);
            if (sortBy === 'quickest') return parseInt(a.time) - parseInt(b.time);
            return b.reviews - a.reviews;
        });
    }, [activeCategory, activeRegion, localQuery, sortBy]);

    const clearSearch = () => { setLocalQuery(""); router.replace("/recipes"); };

    return (
        <main style={{ minHeight: "100vh", background: "#FAFAF7", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            <style>{`
        * { box-sizing: border-box; }
        .recipe-card { background:white; border-radius:20px; overflow:hidden; border:1px solid rgba(75,46,26,0.07); transition:all 0.35s cubic-bezier(0.34,1.56,0.64,1); cursor:pointer; text-decoration:none; display:block; }
        .recipe-card:hover { transform:translateY(-6px); box-shadow:0 24px 60px rgba(75,46,26,0.13); border-color:rgba(217,119,6,0.2); }
        .recipe-card:hover .r-img { transform:scale(1.07); }
        .r-img { transition:transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94); }
        .filter-pill { border:1.5px solid rgba(75,46,26,0.12); border-radius:100px; padding:7px 18px; font-size:13px; font-weight:500; color:rgba(75,46,26,0.55); background:transparent; cursor:pointer; transition:all 0.18s; white-space:nowrap; font-family:inherit; }
        .filter-pill:hover { color:#D97706; border-color:rgba(217,119,6,0.4); }
        .filter-pill.active { background:#4B2E1A; color:white; border-color:#4B2E1A; }
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
            <section style={{ background: "linear-gradient(135deg,#FEF3E2 0%,#FDE8C5 60%,#FBD99A 100%)", paddingTop: 120, paddingBottom: 64, paddingLeft: 20, paddingRight: 20 }}>
                <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                        <div style={{ width: 32, height: 1.5, background: "#D97706" }} />
                        <span style={{ color: "#D97706", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}>FlavorNest Vietnam</span>
                    </div>
                    <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(40px,6vw,72px)", fontWeight: 700, color: "#2D1A0E", lineHeight: 1.05, margin: "0 0 16px" }}>
                        {localQuery ? (<>Search: <span style={{ color: "#D97706", fontStyle: "italic" }}>&quot;{localQuery}&quot;</span></>) : (<>Explore All <span style={{ color: "#D97706", fontStyle: "italic" }}>Recipes</span></>)}
                    </h1>
                    <p style={{ color: "rgba(75,46,26,0.6)", fontSize: 17, maxWidth: 480, lineHeight: 1.65, margin: "0 0 28px" }}>
                        Authentic Vietnamese recipes — from Hanoi&apos;s misty mornings to Saigon&apos;s vibrant street corners.
                    </p>
                    <div style={{ display: "flex", gap: 28 }}>
                        {[[`${RECIPES.length}+`, "Recipes"], ["3", "Regions"], ["4.8★", "Avg Rating"]].map(([num, label]) => (
                            <div key={label}>
                                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#2D1A0E" }}>{num}</div>
                                <div style={{ fontSize: 12, color: "rgba(75,46,26,0.5)", fontWeight: 500, letterSpacing: "0.05em" }}>{label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FILTER BAR */}
            <div style={{ position: "sticky", top: 76, zIndex: 40, background: "rgba(250,250,247,0.96)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(75,46,26,0.07)", padding: "8px 24px", marginTop: 8, borderRadius: "0 0 16px 16px", boxShadow: "0 8px 24px rgba(75,46,26,0.08)" }}>
                <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 8, overflowX: "auto", alignItems: "center", flexWrap: "nowrap", padding: "4px 0" }}>
                    <div style={{ position: "relative", flexShrink: 0 }}>
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
                    <div style={{ width: 1, height: 20, background: "rgba(75,46,26,0.1)", margin: "0 2px", flexShrink: 0 }} />
                    {CATEGORIES.map((cat) => (
                        <button key={cat} onClick={() => setActiveCategory(cat)} className={`filter-pill ${activeCategory === cat ? "active" : ""}`}>{cat}</button>
                    ))}
                    <div style={{ width: 1, height: 20, background: "rgba(75,46,26,0.1)", margin: "0 2px", flexShrink: 0 }} />
                    {REGIONS.map((r) => (
                        <button key={r} onClick={() => setActiveRegion(r)} className={`filter-pill ${activeRegion === r ? "active" : ""}`}>{r}</button>
                    ))}
                    <div style={{ width: 1, height: 20, background: "rgba(75,46,26,0.1)", margin: "0 2px", flexShrink: 0 }} />
                    <div style={{ position: "relative", flexShrink: 0, display: "flex", alignItems: "center" }}>
                        <FNIcon name="filter" size={13} color="rgba(75,46,26,0.5)" />
                        <select value={sortBy} onChange={e => setSortBy(e.target.value as 'popular' | 'rating' | 'quickest')}
                            style={{ border: "1.5px solid rgba(75,46,26,0.12)", borderRadius: 100, padding: "7px 14px 7px 8px", fontSize: 13, fontWeight: 500, color: "rgba(75,46,26,0.7)", background: "transparent", cursor: "pointer", fontFamily: "inherit", outline: "none", flexShrink: 0 }}>
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
            <section style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 20px 80px" }}>
                {!localQuery && (
                    <p style={{ fontSize: 13, color: "rgba(75,46,26,0.4)", marginBottom: 28, fontWeight: 500 }}>
                        {filtered.length} recipes found
                    </p>
                )}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${activeCategory}-${activeRegion}-${localQuery}`}
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
                        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))", gap: 24 }}
                    >
                        {filtered.map((recipe, i) => (
                            <motion.div key={recipe.slug} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}>
                                <Link href={`/recipes/${recipe.slug}`} className="recipe-card" onMouseEnter={() => setHovered(recipe.slug)} onMouseLeave={() => setHovered(null)}>
                                    <div style={{ position: "relative", height: 220, overflow: "hidden", background: "#f0ebe4" }}>
                                        <Image src={recipe.image} alt={recipe.title} fill sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw" className="r-img" style={{ objectFit: "cover" }} quality={80} />
                                        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(0,0,0,0.4) 0%,transparent 55%)", opacity: hovered === recipe.slug ? 1 : 0, transition: "opacity 0.3s" }} />
                                        <span style={{ position: "absolute", top: 14, left: 14, background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)", color: "#4B2E1A", fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "5px 12px", borderRadius: 100 }}>{recipe.category}</span>
                                        <span style={{ position: "absolute", top: 14, right: 14, background: "rgba(0,0,0,0.35)", backdropFilter: "blur(8px)", color: "white", fontSize: 11, fontWeight: 500, padding: "5px 11px", borderRadius: 100 }}>⏱ {recipe.time}</span>
                                        <div style={{ position: "absolute", bottom: 14, left: 14, display: "flex", alignItems: "center", gap: 8 }}>
                                            <div style={{ width: 7, height: 7, borderRadius: "50%", background: DIFF_COLOR[recipe.difficulty] }} />
                                            <span style={{ color: "white", fontSize: 11, fontWeight: 600, textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}>{recipe.difficulty}</span>
                                        </div>
                                        <HeartButton slug={recipe.slug} recipe={recipe} />
                                    </div>
                                    <div style={{ padding: "18px 20px 20px" }}>
                                        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: "#D97706", textTransform: "uppercase", marginBottom: 6 }}>{recipe.region} Vietnam</div>
                                        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#2D1A0E", margin: "0 0 2px", lineHeight: 1.2 }}>
                                            <Highlight text={recipe.title} query={localQuery} />
                                        </h2>
                                        <p style={{ fontSize: 12, color: "rgba(75,46,26,0.4)", fontStyle: "italic", margin: "0 0 10px" }}>
                                            <Highlight text={recipe.subtitle} query={localQuery} />
                                        </p>
                                        <p style={{ fontSize: 13.5, color: "rgba(75,46,26,0.62)", lineHeight: 1.6, margin: "0 0 14px" }}>
                                            <Highlight text={recipe.description} query={localQuery} />
                                        </p>
                                        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 14 }}>
                                            {recipe.tags.map((tag) => <span key={tag} className="tag-chip">{tag}</span>)}
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 13, borderTop: "1px solid rgba(75,46,26,0.07)" }}>
                                            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                                                <span style={{ color: "#D97706", fontSize: 13, fontWeight: 700 }}>★ {recipe.rating}</span>
                                                <span style={{ color: "rgba(75,46,26,0.35)", fontSize: 12 }}>({recipe.reviews})</span>
                                            </div>
                                            <span style={{ fontSize: 12, fontWeight: 600, color: "#D97706" }}>View Recipe →</span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
                {filtered.length === 0 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: "center", padding: "80px 20px" }}>
                        <div style={{ fontSize: 48, marginBottom: 14 }}>🔍</div>
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
