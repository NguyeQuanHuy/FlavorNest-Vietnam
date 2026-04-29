"use client";

import Link from "next/link";

import Image from "next/image";
import { useState, useEffect, useMemo, Suspense, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { getDetailedAsLegacy } from "@/data/recipes-detailed";
import type { Recipe } from "@/data/recipes";
import { FNIcon } from "@/components/Icons";

// ─── Legacy recipe cards (rewritten clean, Vietnamese names preserved) ───
const LEGACY_CARDS: Array<{
    slug: string;
    title: string;
    subtitle: string;
    image: string;
    category: string;
    region: string;
    difficulty: string;
    time: string;
    rating: string;
    reviews: number;
    description: string;
    tags: string[];
}> = [
        {
            slug: "hanoi-beef-pho",
            title: "Hanoi Beef Pho",
            subtitle: "Phở Bò Hà Nội",
            image: '/images/recipes/bunchahanoi.jpg',
            category: "Soup", region: "Northern", difficulty: "Medium",
            time: "3 hrs", rating: "4.9", reviews: 248,
            description: "The soul of Hanoi in a bowl — slow-simmered bone broth, silky rice noodles, and paper-thin beef.",
            tags: ["Beef", "Noodles", "Slow Cook"],
        },
        {
            slug: "banh-mi",
            title: "Lemongrass Pork Bánh Mì",
            subtitle: "Bánh Mì Thịt Nướng",
            image: '/images/recipes/bunchahanoi.jpg',
            category: "Street Food", region: "Southern", difficulty: "Easy",
            time: "40 min", rating: "4.8", reviews: 183,
            description: "Crusty baguette loaded with smoky lemongrass pork, pickled daikon, and fresh herbs.",
            tags: ["Pork", "Sandwich", "Quick"],
        },
        {
            slug: "bun-cha-hanoi",
            title: "Hanoi Grilled Pork Vermicelli",
            subtitle: "Bún Chả Hà Nội",
            image: "https://images.unsplash.com/photo-1623682785702-f0c9fcfe2fc0?auto=format&fit=crop&w=800&q=80",
            category: "Noodles", region: "Northern", difficulty: "Easy",
            time: "45 min", rating: "4.7", reviews: 142,
            description: "Chargrilled pork patties in a sweet-savory dipping broth with fresh vermicelli and herbs.",
            tags: ["Pork", "Grilled", "Noodles"],
        },
        {
            slug: "fresh-spring-rolls",
            title: "Fresh Spring Rolls",
            subtitle: "Gỏi Cuốn Tôm Thịt",
            image: "https://images.unsplash.com/photo-1562802378-063ec186a863?auto=format&fit=crop&w=800&q=80",
            category: "Rolls", region: "Southern", difficulty: "Easy",
            time: "30 min", rating: "4.8", reviews: 196,
            description: "Light, fresh, and vibrant — shrimp and pork wrapped in rice paper with peanut dipping sauce.",
            tags: ["Shrimp", "No Cook", "Healthy"],
        },
        {
            slug: "banh-cuon",
            title: "Steamed Rice Rolls",
            subtitle: "Bánh Cuốn Hà Nội",
            image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=800&q=80",
            category: "Rolls", region: "Northern", difficulty: "Medium",
            time: "45 min", rating: "4.8", reviews: 167,
            description: "Silky steamed rice sheets rolled with seasoned pork and wood ear mushrooms.",
            tags: ["Pork", "Steamed", "Morning"],
        },
        {
            slug: "xoi-xeo",
            title: "Golden Sticky Rice with Mung Bean",
            subtitle: "Xôi Xéo",
            image: "https://images.unsplash.com/photo-1536304993881-ff86e0c9e6a0?auto=format&fit=crop&w=800&q=80",
            category: "Rice", region: "Northern", difficulty: "Easy",
            time: "1 hr", rating: "4.8", reviews: 134,
            description: "Golden sticky rice topped with split mung bean paste and crispy fried shallots.",
            tags: ["Rice", "Breakfast", "Vegan"],
        },
        {
            slug: "cha-ca-la-vong",
            title: "Turmeric Fish with Dill",
            subtitle: "Chả Cá Lã Vọng",
            image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
            category: "Grilled", region: "Northern", difficulty: "Medium",
            time: "40 min", rating: "4.9", reviews: 221,
            description: "Hanoi's most celebrated dish — turmeric fish sizzled tableside with fresh dill and spring onions.",
            tags: ["Fish", "Grilled", "Heritage"],
        },
        {
            slug: "bun-thang",
            title: "Hanoi Vermicelli Soup",
            subtitle: "Bún Thang",
            image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=800&q=80",
            category: "Soup", region: "Northern", difficulty: "Hard",
            time: "2 hrs", rating: "4.8", reviews: 76,
            description: "The most refined bowl in Vietnamese cuisine — crystal-clear broth with egg ribbons and shredded chicken.",
            tags: ["Chicken", "Soup", "Royal"],
        },
        // ── CENTRAL ──
        {
            slug: "bun-bo-hue",
            title: "Hue Spicy Beef Noodle Soup",
            subtitle: "Bún Bò Huế",
            image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=800&q=80",
            category: "Soup", region: "Central", difficulty: "Hard",
            time: "2.5 hrs", rating: "4.9", reviews: 312,
            description: "Lemongrass-perfumed beef broth, thick round noodles, sliced beef shank and pork knuckle. The royal city's greatest contribution to Vietnamese cuisine.",
            tags: ["Beef", "Spicy", "Lemongrass"],
        },
        {
            slug: "cao-lau",
            title: "Hoi An Cao Lau Noodles",
            subtitle: "Cao Lầu Hội An",
            image: "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=800&q=80",
            category: "Noodles", region: "Central", difficulty: "Medium",
            time: "1 hr", rating: "4.9", reviews: 287,
            description: "A dish so unique it can only truly be made in Hoi An — thick ash-treated noodles with roasted pork and crispy rice crackers.",
            tags: ["Pork", "Noodles", "Heritage"],
        },
        {
            slug: "mi-quang",
            title: "Quang-Style Turmeric Noodles",
            subtitle: "Mì Quảng",
            image: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=800&q=80",
            category: "Noodles", region: "Central", difficulty: "Medium",
            time: "1.5 hrs", rating: "4.8", reviews: 198,
            description: "Wide turmeric-yellow noodles with just enough broth to coat — topped with shrimp, pork, quail eggs and sesame rice crackers.",
            tags: ["Shrimp", "Pork", "Turmeric"],
        },
        {
            slug: "banh-beo",
            title: "Steamed Rice Cakes with Shrimp",
            subtitle: "Bánh Bèo",
            image: "https://images.unsplash.com/photo-1562802378-063ec186a863?auto=format&fit=crop&w=800&q=80",
            category: "Street Food", region: "Central", difficulty: "Medium",
            time: "45 min", rating: "4.7", reviews: 143,
            description: "Delicate steamed rice flour discs topped with dried shrimp, scallion oil and fish sauce. A traditional Hue snack eaten one tiny bowl at a time.",
            tags: ["Rice", "Shrimp", "Hue"],
        },
        {
            slug: "com-hen",
            title: "Baby Clam Rice",
            subtitle: "Cơm Hến",
            image: "https://images.unsplash.com/photo-1536304993881-ff86e0c9e6a0?auto=format&fit=crop&w=800&q=80",
            category: "Rice", region: "Central", difficulty: "Medium",
            time: "1 hr", rating: "4.8", reviews: 167,
            description: "One of Hue's most beloved hidden dishes — tiny river clams over cold rice with peanuts, sesame, cracklings and fermented shrimp paste.",
            tags: ["Clams", "Rice", "Hue"],
        },
        {
            slug: "banh-xeo-mien-trung",
            title: "Central-Style Sizzling Crepe",
            subtitle: "Bánh Xèo Miền Trung",
            image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=800&q=80",
            category: "Street Food", region: "Central", difficulty: "Medium",
            time: "40 min", rating: "4.7", reviews: 134,
            description: "Smaller and crispier than the southern version — eaten wrapped in mustard leaf with nuoc cham.",
            tags: ["Shrimp", "Pork", "Crispy"],
        },
        {
            slug: "phu-yen-chives-noodle-soup",
            title: "Phu Yen Chives Noodle Soup",
            subtitle: "Bánh Canh Hẹ Phú Yên",
            image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
            category: "Soup", region: "Central", difficulty: "Medium",
            time: "1 hr 30 min", rating: "4.9", reviews: 87,
            description: "Thick chewy noodles in a clear pork and dried anchovy broth, finished with fresh garlic chives. The breakfast of Phu Yen province.",
            tags: ["Coastal", "Pork", "Hometown"],
        },
        {
            slug: "ga-la-e-phu-yen",
            title: "Phu Yen Litsea Leaf Chicken",
            subtitle: "Gà Lá É Phú Yên",
            image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c7?auto=format&fit=crop&w=800&q=80",
            category: "Grilled", region: "Central", difficulty: "Medium",
            time: "45 min", rating: "4.8", reviews: 64,
            description: "Free-range chicken stir-fried with fresh litsea leaves — a wild herb unique to the central highlands. Intensely aromatic, slightly citrusy.",
            tags: ["Chicken", "Herbs", "Unique"],
        },
        // ── SOUTHERN ──
        {
            slug: "thit-kho-tau",
            title: "Caramelised Pork and Eggs",
            subtitle: "Thịt Kho Tàu",
            image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=800&q=80",
            category: "Soup", region: "Southern", difficulty: "Easy",
            time: "1.5 hrs", rating: "4.9", reviews: 387,
            description: "Pork belly and eggs slow-braised in coconut water until the sauce turns deep amber and glossy. Every family has their version.",
            tags: ["Pork", "Eggs", "Coconut"],
        },
        {
            slug: "com-tam-saigon",
            title: "Saigon Broken Rice Plate",
            subtitle: "Cơm Tấm Sài Gòn",
            image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=800&q=80",
            category: "Rice", region: "Southern", difficulty: "Easy",
            time: "35 min", rating: "4.9", reviews: 412,
            description: "The broken rice that was once a poor man's meal is now Saigon's most beloved dish — char-grilled pork chop, fried egg, scallion oil.",
            tags: ["Pork", "Rice", "Breakfast"],
        },
        {
            slug: "bun-thit-nuong",
            title: "Grilled Pork Vermicelli Bowl",
            subtitle: "Bún Thịt Nướng",
            image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
            category: "Noodles", region: "Southern", difficulty: "Easy",
            time: "35 min", rating: "4.8", reviews: 298,
            description: "Cold vermicelli, chargrilled pork, crispy spring roll, crushed peanuts and a flood of nuoc cham. Pure Saigon energy.",
            tags: ["Pork", "Noodles", "Peanuts"],
        },
        {
            slug: "banh-xeo-mien-tay",
            title: "Mekong Sizzling Crepe",
            subtitle: "Bánh Xèo Miền Tây",
            image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=800&q=80",
            category: "Street Food", region: "Southern", difficulty: "Medium",
            time: "45 min", rating: "4.9", reviews: 263,
            description: "The Southern version is enormous — a giant turmeric crepe filled with shrimp, pork belly and bean sprouts.",
            tags: ["Shrimp", "Pork", "Mekong"],
        },
        {
            slug: "hu-tieu-nam-vang",
            title: "Phnom Penh Noodle Soup",
            subtitle: "Hủ Tiếu Nam Vang",
            image: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=800&q=80",
            category: "Soup", region: "Southern", difficulty: "Medium",
            time: "2 hrs", rating: "4.8", reviews: 187,
            description: "A Saigon institution with Cambodian roots — clear pork broth with rice noodles, minced pork, prawns and a poached egg.",
            tags: ["Pork", "Shrimp", "Noodles"],
        },
        {
            slug: "ca-kho-to",
            title: "Clay Pot Caramelised Fish",
            subtitle: "Cá Kho Tộ",
            image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
            category: "Soup", region: "Southern", difficulty: "Easy",
            time: "45 min", rating: "4.8", reviews: 221,
            description: "Catfish braised in dark caramel with chilli and ginger in a clay pot — still sizzling when it arrives at the table.",
            tags: ["Fish", "Caramel", "Clay Pot"],
        },
        {
            slug: "lau-thai",
            title: "Thai-Style Hot Pot",
            subtitle: "Lẩu Thái",
            image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
            category: "Soup", region: "Southern", difficulty: "Easy",
            time: "40 min", rating: "4.7", reviews: 198,
            description: "Sour, spicy, lemongrass-scented broth filled with seafood, mushrooms and fresh vegetables. A weekend feast.",
            tags: ["Seafood", "Spicy", "Communal"],
        },
        {
            slug: "bo-luc-lac",
            title: "Shaking Beef",
            subtitle: "Bò Lúc Lắc",
            image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            category: "Grilled", region: "Southern", difficulty: "Easy",
            time: "25 min", rating: "4.9", reviews: 312,
            description: "Tender beef cubes wok-tossed in butter and garlic until caramelised outside, pink inside. Fast, brilliant, unforgettable.",
            tags: ["Beef", "Wok", "Quick"],
        },
        {
            slug: "lau-mam",
            title: "Fermented Fish Hot Pot",
            subtitle: "Lẩu Mắm Miền Tây",
            image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
            category: "Soup", region: "Southern", difficulty: "Medium",
            time: "1 hr", rating: "4.8", reviews: 143,
            description: "The boldest hot pot in Vietnam — fermented fish broth with eggplant, pork and a mountain of fresh herbs.",
            tags: ["Fermented", "Seafood", "Mekong"],
        },
        {
            slug: "banh-mi-saigon",
            title: "Saigon Banh Mi",
            subtitle: "Bánh Mì Sài Gòn",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
            category: "Street Food", region: "Southern", difficulty: "Easy",
            time: "30 min", rating: "4.9", reviews: 521,
            description: "The greatest sandwich in the world — a shatteringly crisp baguette filled with pate, cha lua, pickled daikon and fresh coriander.",
            tags: ["Pork", "Bread", "Street Food"],
        },
    ];

// ─── Convert RecipeDetailed (mapped as Recipe) to card format ───
const getDetailedCards = () => {
    const detailed: Recipe[] = getDetailedAsLegacy();
    return detailed.map((r) => ({
        slug: r.slug,
        title: r.title,
        subtitle: r.subtitle,
        image: r.image,
        category: r.category,
        region: inferRegion(r.category, r.slug),
        difficulty: r.difficulty,
        time: r.totalTime,
        rating: r.rating.toFixed(1),
        reviews: r.ratingCount,
        description: r.shortDescription,
        tags: r.tags.slice(0, 3),
    }));
};

// ─── Helper: infer region from slug or category for consistency ───
function inferRegion(category: string, slug: string): string {
    const northern = ['hanoi-beef-pho', 'pho-bo-ha-noi', 'bun-cha-hanoi', 'banh-cuon', 'xoi-xeo', 'cha-ca-la-vong', 'bun-thang', 'hanoi-beef-pho'];
    const central = ['bun-bo-hue', 'hue-spicy-beef-noodle-soup', 'cao-lau', 'mi-quang', 'banh-beo', 'com-hen', 'banh-xeo-mien-trung', 'banh-nam', 'phu-yen-chives-noodle-soup', 'ga-la-e-phu-yen'];
    const southern = ['thit-kho-tau', 'com-tam-saigon', 'com-tam', 'bun-thit-nuong', 'banh-xeo-mien-tay', 'hu-tieu-nam-vang', 'ca-kho-to', 'lau-thai', 'bo-luc-lac', 'lau-mam', 'banh-mi-saigon'];
    if (northern.includes(slug)) return "Northern";
    if (central.includes(slug)) return "Central";
    if (southern.includes(slug)) return "Southern";
    if (slug.includes("phu-yen") || slug.includes("hue")) return "Central";
    if (slug.includes("hanoi")) return "Northern";
    if (slug.includes("saigon") || slug.includes("mekong")) return "Southern";
    return "Northern";
}

// ─── Merge detailed (priority) + legacy cards, dedupe by slug ───
const RECIPES = (() => {
    const detailedCards = getDetailedCards();
    const detailedSlugs = new Set(detailedCards.map((c) => c.slug));
    const uniqueLegacy = LEGACY_CARDS.filter((c) => !detailedSlugs.has(c.slug));
    return [...detailedCards, ...uniqueLegacy];
})();

const CATEGORIES = ["All", "Soup", "Noodles", "Rice", "Street Food", "Rolls"];
const REGIONS = ["All Regions", "Northern", "Central", "Southern"];
const DIFF_COLOR: Record<string, string> = { Easy: "#10b981", Medium: "#f59e0b", Hard: "#ef4444" };

const LS_KEY = "fn_favorites";

// ─── localStorage helpers ───
function loadFavSlugs(): Set<string> {
    try {
        const raw = localStorage.getItem(LS_KEY);
        if (!raw) return new Set();
        const arr = JSON.parse(raw);
        return new Set(arr.map((x: string | { slug: string }) => (typeof x === "string" ? x : x.slug)));
    } catch {
        return new Set();
    }
}

function saveFav(slug: string, recipe: typeof RECIPES[0], add: boolean) {
    try {
        const raw = localStorage.getItem(LS_KEY);
        let arr: object[] = raw ? JSON.parse(raw) : [];
        if (add) {
            const alreadyIn = arr.some((x: object) => (x as { slug: string }).slug === slug);
            if (!alreadyIn) {
                arr.push({
                    slug,
                    title: recipe.title,
                    subtitle: recipe.subtitle,
                    image: recipe.image,
                    time: recipe.time,
                    difficulty: recipe.difficulty,
                    category: recipe.category,
                    savedAt: new Date().toISOString().split("T")[0],
                });
            }
        } else {
            arr = arr.filter((x: object) => (x as { slug: string }).slug !== slug);
        }
        localStorage.setItem(LS_KEY, JSON.stringify(arr));
    } catch { }
}

// ─── Heart Button ───
function HeartButton({ slug, recipe }: { slug: string; recipe: typeof RECIPES[0] }) {
    const [liked, setLiked] = useState(false);
    const [burst, setBurst] = useState(false);
    const [toast, setToast] = useState<"added" | "removed" | null>(null);

    useEffect(() => {
        setLiked(loadFavSlugs().has(slug));
    }, [slug]);

    const toggle = useCallback(
        (e: React.MouseEvent) => {
            e.preventDefault();
            e.stopPropagation();
            const next = !liked;
            setLiked(next);
            saveFav(slug, recipe, next);
            if (next) setBurst(true);
            setToast(next ? "added" : "removed");
            setTimeout(() => setBurst(false), 600);
            setTimeout(() => setToast(null), 2000);
        },
        [liked, slug, recipe]
    );

    return (
        <div style={{ position: "absolute", bottom: 14, right: 14 }}>
            <AnimatePresence>
                {toast && (
                    <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -4, scale: 0.9 }}
                        transition={{ duration: 0.22 }}
                        style={{
                            position: "absolute",
                            bottom: 44,
                            right: 0,
                            background: liked ? "#4B2E1A" : "rgba(75,46,26,0.75)",
                            color: "white",
                            fontSize: 11,
                            fontWeight: 600,
                            padding: "5px 12px",
                            borderRadius: 100,
                            whiteSpace: "nowrap",
                            pointerEvents: "none",
                            backdropFilter: "blur(8px)",
                        }}
                    >
                        {toast === "added" ? "♥ Saved" : "✕ Removed"}
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={toggle}
                whileTap={{ scale: 0.82 }}
                aria-label={liked ? "Remove from favorites" : "Add to favorites"}
                style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: liked ? "rgba(220,38,38,0.92)" : "rgba(255,255,255,0.85)",
                    backdropFilter: "blur(10px)",
                    border: liked ? "none" : "1px solid rgba(255,255,255,0.6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    boxShadow: liked ? "0 4px 16px rgba(220,38,38,0.35)" : "0 2px 8px rgba(0,0,0,0.15)",
                    transition: "background 0.25s, box-shadow 0.25s",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {burst && (
                    <motion.span
                        initial={{ scale: 0.6, opacity: 0.8 }}
                        animate={{ scale: 2.2, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        style={{
                            position: "absolute",
                            inset: 0,
                            borderRadius: "50%",
                            background: "rgba(220,38,38,0.3)",
                            pointerEvents: "none",
                        }}
                    />
                )}

                <motion.svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    animate={burst ? { scale: [1, 1.35, 1] } : { scale: 1 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                >
                    <path
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                        fill={liked ? "white" : "none"}
                        stroke={liked ? "none" : "rgba(75,46,26,0.5)"}
                        strokeWidth="1.8"
                        strokeLinecap="round"
                    />
                </motion.svg>
            </motion.button>
        </div>
    );
}

// ─── Highlight matching text ───
function Highlight({ text, query }: { text: string; query: string }) {
    if (!query.trim()) return <>{text}</>;
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
    const parts = text.split(regex);
    return (
        <>
            {parts.map((part, i) =>
                regex.test(part) ? (
                    <mark
                        key={i}
                        style={{
                            background: "rgba(217,119,6,0.2)",
                            color: "#92580A",
                            borderRadius: 3,
                            padding: "0 2px",
                        }}
                    >
                        {part}
                    </mark>
                ) : (
                    <span key={i}>{part}</span>
                )
            )}
        </>
    );
}

// ─── Inner component ───
function RecipesInner() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const urlSearch = searchParams.get("search") ?? "";
    const [activeCategory, setActiveCategory] = useState("All");
    const [activeRegion, setActiveRegion] = useState("All Regions");
    const [localQuery, setLocalQuery] = useState(urlSearch);
    const [hovered, setHovered] = useState<string | null>(null);
    const [sortBy, setSortBy] = useState<'popular' | 'rating' | 'quickest'>('popular');

    useEffect(() => {
        setLocalQuery(urlSearch);
    }, [urlSearch]);

    const filtered = useMemo(() => {
        const q = localQuery.toLowerCase().trim();
        return RECIPES.filter((r) => {
            const catMatch = activeCategory === "All" || r.category === activeCategory;
            const regionMatch = activeRegion === "All Regions" || r.region === activeRegion;
            const searchMatch =
                !q ||
                r.title.toLowerCase().includes(q) ||
                r.subtitle.toLowerCase().includes(q) ||
                r.description.toLowerCase().includes(q) ||
                r.tags.some((t) => t.toLowerCase().includes(q)) ||
                r.category.toLowerCase().includes(q) ||
                r.region.toLowerCase().includes(q);
            return catMatch && regionMatch && searchMatch;
        }).sort((a, b) => {
            if (sortBy === 'rating') return parseFloat(b.rating) - parseFloat(a.rating);
            if (sortBy === 'quickest') return parseInt(a.time) - parseInt(b.time);
            return b.reviews - a.reviews;
        });

    }, [activeCategory, activeRegion, localQuery, sortBy]);
    const clearSearch = () => {
        setLocalQuery("");
        router.replace("/recipes");
    };

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
      `}</style>

            {/* HERO */}
            <section style={{ background: "linear-gradient(135deg,#FEF3E2 0%,#FDE8C5 60%,#FBD99A 100%)", paddingTop: 120, paddingBottom: 64, paddingLeft: 20, paddingRight: 20 }}>
                <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                        <div style={{ width: 32, height: 1.5, background: "#D97706" }} />
                        <span style={{ color: "#D97706", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}>
                            FlavorNest Vietnam
                        </span>
                    </div>
                    <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(40px,6vw,72px)", fontWeight: 700, color: "#2D1A0E", lineHeight: 1.05, margin: "0 0 16px" }}>
                        {localQuery ? (
                            <>
                                Search: <span style={{ color: "#D97706", fontStyle: "italic" }}>&quot;{localQuery}&quot;</span>
                            </>
                        ) : (
                            <>
                                Explore All <span style={{ color: "#D97706", fontStyle: "italic" }}>Recipes</span>
                            </>
                        )}
                    </h1>
                    <p style={{ color: "rgba(75,46,26,0.6)", fontSize: 17, maxWidth: 480, lineHeight: 1.65, margin: "0 0 28px" }}>
                        Authentic Vietnamese recipes — from Hanoi&apos;s misty mornings to Saigon&apos;s vibrant street corners.
                    </p>
                    <div style={{ display: "flex", gap: 28 }}>
                        {[
                            [`${RECIPES.length}+`, "Recipes"],
                            ["3", "Regions"],
                            ["4.8★", "Avg Rating"],
                        ].map(([num, label]) => (
                            <div key={label}>
                                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#2D1A0E" }}>{num}</div>
                                <div style={{ fontSize: 12, color: "rgba(75,46,26,0.5)", fontWeight: 500, letterSpacing: "0.05em" }}>{label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FILTER BAR */}
            
<div style={{ position: "sticky", top: 72, zIndex: 40, background: "rgba(250,250,247,0.96)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(75,46,26,0.07)", padding: "10px 20px", marginTop: 8, borderRadius: "0 0 16px 16px", boxShadow: "0 8px 24px rgba(75,46,26,0.08)" }}>    {/* Search */}
    <div style={{ position: "relative", flexShrink: 0 }}>
      <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", display: "flex", alignItems: "center" }}>
        <FNIcon name="search" size={14} color="#D97706" />
      </span>
      <input
        className="search-bar"
        type="text"
        placeholder="Search recipes..."
        value={localQuery}
        onChange={(e) => setLocalQuery(e.target.value)}
        aria-label="Search recipes"
        style={{ paddingLeft: 34 }}
      />
      {localQuery && (
        <button
          onClick={clearSearch}
          style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center" }}
        >
          <FNIcon name="close" size={13} color="rgba(75,46,26,0.4)" />
        </button>
      )}
    </div>

    <div style={{ width: 1, height: 20, background: "rgba(75,46,26,0.1)", margin: "0 2px", flexShrink: 0 }} />

    {/* Category pills */}
    {CATEGORIES.map((cat) => (
      <button key={cat} onClick={() => setActiveCategory(cat)} className={`filter-pill ${activeCategory === cat ? "active" : ""}`}>
        {cat}
      </button>
    ))}

    <div style={{ width: 1, height: 20, background: "rgba(75,46,26,0.1)", margin: "0 2px", flexShrink: 0 }} />

    {/* Region pills */}
    {REGIONS.map((r) => (
      <button key={r} onClick={() => setActiveRegion(r)} className={`filter-pill ${activeRegion === r ? "active" : ""}`}>
        {r}
      </button>
    ))}

    <div style={{ width: 1, height: 20, background: "rgba(75,46,26,0.1)", margin: "0 2px", flexShrink: 0 }} />

    {/* Sort */}
    <div style={{ position: "relative", flexShrink: 0, display: "flex", alignItems: "center" }}>
      <FNIcon name="filter" size={13} color="rgba(75,46,26,0.5)" />
      <select
        value={sortBy}
        onChange={e => setSortBy(e.target.value as 'popular' | 'rating' | 'quickest')}
        style={{
          border: "1.5px solid rgba(75,46,26,0.12)",
          borderRadius: 100,
          padding: "7px 14px 7px 8px",
          fontSize: 13,
          fontWeight: 500,
          color: "rgba(75,46,26,0.7)",
          background: "transparent",
          cursor: "pointer",
          fontFamily: "inherit",
          outline: "none",
          flexShrink: 0,
        }}
      >
        <option value="popular">Most Popular</option>
        <option value="rating">Highest Rated</option>
        <option value="quickest">Quickest</option>
      </select>
    </div>
            
            {/* SEARCH BANNER */}
            <AnimatePresence>
                {localQuery && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        style={{ background: "rgba(217,119,6,0.07)", borderBottom: "1px solid rgba(217,119,6,0.15)" }}
                    >
                        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "12px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                            <p style={{ fontSize: 14, color: "#92580A", margin: 0, fontWeight: 500 }}>
                                Found <strong>{filtered.length}</strong> recipes for <strong>&quot;{localQuery}&quot;</strong>
                            </p>
                            <button
                                onClick={clearSearch}
                                style={{ fontSize: 12, color: "#D97706", fontWeight: 600, background: "none", border: "1px solid rgba(217,119,6,0.3)", borderRadius: 100, padding: "4px 14px", cursor: "pointer", fontFamily: "inherit" }}
                            >
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
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))", gap: 24 }}
                    >
                        {filtered.map((recipe, i) => (
                            <motion.div
                                key={recipe.slug}
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                            >
                                <Link
                                    href={`/recipes/${recipe.slug}`}
                                    className="recipe-card"
                                    onMouseEnter={() => setHovered(recipe.slug)}
                                    onMouseLeave={() => setHovered(null)}
                                >
                                    <div style={{ position: "relative", height: 220, overflow: "hidden", background: "#f0ebe4" }}>
                                        <Image
                                            src={recipe.image}
                                            alt={recipe.title}
                                            fill
                                            sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw"
                                            className="r-img"
                                            style={{ objectFit: "cover" }}
                                            quality={80}
                                        />
                                        <div
                                            style={{
                                                position: "absolute",
                                                inset: 0,
                                                background: "linear-gradient(to top,rgba(0,0,0,0.4) 0%,transparent 55%)",
                                                opacity: hovered === recipe.slug ? 1 : 0,
                                                transition: "opacity 0.3s",
                                            }}
                                        />

                                        <span style={{ position: "absolute", top: 14, left: 14, background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)", color: "#4B2E1A", fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "5px 12px", borderRadius: 100 }}>
                                            {recipe.category}
                                        </span>

                                        <span style={{ position: "absolute", top: 14, right: 14, background: "rgba(0,0,0,0.35)", backdropFilter: "blur(8px)", color: "white", fontSize: 11, fontWeight: 500, padding: "5px 11px", borderRadius: 100 }}>
                                            ⏱ {recipe.time}
                                        </span>

                                        <div style={{ position: "absolute", bottom: 14, left: 14, display: "flex", alignItems: "center", gap: 6 }}>
                                            <div style={{ width: 7, height: 7, borderRadius: "50%", background: DIFF_COLOR[recipe.difficulty] }} />
                                            <span style={{ color: "white", fontSize: 11, fontWeight: 600, textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}>{recipe.difficulty}</span>
                                        </div>

                                        <HeartButton slug={recipe.slug} recipe={recipe} />
                                    </div>

                                    <div style={{ padding: "18px 20px 20px" }}>
                                        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: "#D97706", textTransform: "uppercase", marginBottom: 6 }}>
                                            {recipe.region} Vietnam
                                        </div>
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
                                            {recipe.tags.map((tag) => (
                                                <span key={tag} className="tag-chip">
                                                    {tag}
                                                </span>
                                            ))}
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
                        <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontStyle: "italic", color: "rgba(75,46,26,0.5)" }}>
                            No recipes found for &quot;{localQuery}&quot;
                        </p>
                        <button
                            onClick={clearSearch}
                            style={{ marginTop: 16, padding: "10px 24px", borderRadius: 100, border: "1.5px solid rgba(75,46,26,0.15)", background: "transparent", color: "#D97706", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}
                        >
                            Clear search
                        </button>
                    </motion.div>
                )}
            </section>

export default function RecipesPage() {
    return (
        <Suspense
            fallback={
                <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#FAFAF7" }}>
                    <div style={{ textAlign: "center", color: "rgba(75,46,26,0.4)" }}>
                        <div style={{ fontSize: 36, marginBottom: 12 }}>🍜</div>
                        <p style={{ fontFamily: "system-ui" }}>Loading recipes...</p>
                    </div>
                </div>
            }
        >
            <RecipesInner />
        </Suspense>
    );
}
