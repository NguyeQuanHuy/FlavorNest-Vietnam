import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getRecipeDetailed } from "@/data/recipes-detailed";
import { RecipeSchema } from "@/components/RecipeSchema";
import { IngredientsPanel } from "@/components/recipe/IngredientsPanel";

// ─────────────────────────────────────────────────────────────
//  Legacy fallback data — 6 placeholder recipes from v1
//  (to be migrated to RECIPES_DETAILED over time)
// ─────────────────────────────────────────────────────────────
const LEGACY_RECIPES: Record<string, {
    title: string;
    subtitle: string;
    image: string;
    time: string;
    difficulty: string;
    rating: string;
    reviews: number;
    region: string;
    cal: number;
    description: string;
}> = {
    "pho-bo": {
        title: "Hanoi Beef Pho",
        subtitle: "Phở Bò Hà Nội",
        image: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=1600&q=80",
        time: "3 hrs",
        difficulty: "Medium",
        rating: "4.9",
        reviews: 248,
        region: "Northern",
        cal: 420,
        description: "Slow-simmered bone broth, silky noodles, paper-thin beef — the iconic Hanoi morning ritual.",
    },
    "banh-mi-trung": {
        title: "Egg Bánh Mì",
        subtitle: "Bánh Mì Trứng Ốp La",
        image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=1600&q=80",
        time: "15 min",
        difficulty: "Easy",
        rating: "4.7",
        reviews: 189,
        region: "Southern",
        cal: 310,
        description: "Crispy baguette with sunny-side-up egg, pâté, fresh herbs and a drizzle of Maggi — Saigon's 10-minute breakfast.",
    },
    "xoi-xeo": {
        title: "Mung Bean Sticky Rice",
        subtitle: "Xôi Xéo",
        image: "https://images.unsplash.com/photo-1536304993881-ff86e0c9e6a0?auto=format&fit=crop&w=1600&q=80",
        time: "1 hr",
        difficulty: "Easy",
        rating: "4.8",
        reviews: 134,
        region: "Northern",
        cal: 380,
        description: "Golden sticky rice topped with fried shallots and split mung bean — a beloved Hanoi street breakfast.",
    },
    "banh-cuon": {
        title: "Steamed Rice Rolls",
        subtitle: "Bánh Cuốn",
        image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=1600&q=80",
        time: "45 min",
        difficulty: "Medium",
        rating: "4.8",
        reviews: 167,
        region: "Northern",
        cal: 290,
        description: "Silky steamed rice sheets filled with seasoned pork and wood ear mushrooms, served with nem chua and nuoc cham.",
    },
    "chao-long": {
        title: "Pork Congee",
        subtitle: "Cháo Lòng",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1600&q=80",
        time: "1.5 hrs",
        difficulty: "Easy",
        rating: "4.6",
        reviews: 98,
        region: "Southern",
        cal: 340,
        description: "Silky rice porridge with pork offal, ginger, and fresh herbs — Saigon's ultimate comfort breakfast.",
    },
    "banh-trang-tron": {
        title: "Rice Paper Salad",
        subtitle: "Bánh Tráng Trộn",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1600&q=80",
        time: "20 min",
        difficulty: "Easy",
        rating: "4.7",
        reviews: 212,
        region: "Southern",
        cal: 220,
        description: "Shredded rice paper tossed with quail eggs, dried shrimp, mango and a tangy-spicy dressing.",
    },
};

// ─────────────────────────────────────────────────────────────
//  Page component — tries detailed first, falls back to legacy
// ─────────────────────────────────────────────────────────────
export default async function RecipeDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    // Try to load from RECIPES_DETAILED first (full schema + Rich Results)
    const detailedRecipe = getRecipeDetailed(slug);

    if (detailedRecipe) {
        return <DetailedRecipeView recipe={detailedRecipe} />;
    }

    // Fallback to legacy placeholder recipes
    const legacyRecipe = LEGACY_RECIPES[slug];

    if (!legacyRecipe) {
        notFound();
    }

    return <LegacyRecipeView slug={slug} recipe={legacyRecipe} />;
}

// ─────────────────────────────────────────────────────────────
//  DETAILED VIEW — full recipe with Schema.org + ingredients + steps
// ─────────────────────────────────────────────────────────────
function DetailedRecipeView({
    recipe,
}: {
    recipe: NonNullable<ReturnType<typeof getRecipeDetailed>>;
}) {
    return (
        <main className="min-h-screen bg-fn-beige font-body pt-[88px]">
            {/* Google Schema.org Recipe + Breadcrumb */}
            <RecipeSchema recipe={recipe} />

            {/* ── Breadcrumb ── */}
            <section className="max-w-fn-content mx-auto px-6 pb-6 pt-4">
                <div className="flex items-center gap-2 text-fn-sm text-fn-brown/50">
                    <Link href="/" className="hover:text-fn-amber transition-colors">
                        Home
                    </Link>
                    <span>›</span>
                    <Link href="/recipes" className="hover:text-fn-amber transition-colors">
                        Recipes
                    </Link>
                    <span>›</span>
                    <span className="text-fn-amber font-medium">{recipe.title}</span>
                </div>
            </section>

            {/* ── Hero ── */}
            <section className="max-w-fn-content mx-auto px-6 pb-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <div className="relative h-[480px] rounded-fn-3xl overflow-hidden shadow-fn-card">
                        <Image
                            src={recipe.image}
                            alt={recipe.imageAlt}
                            fill
                            className="object-cover"
                            sizes="(max-width:768px) 100vw, 50vw"
                            priority
                            quality={85}
                        />
                        {recipe.isNew && (
                            <span className="absolute top-5 left-5 bg-fn-amber text-white px-4 py-1.5 rounded-full text-fn-xs font-semibold uppercase tracking-fn-wide">
                                ✨ New
                            </span>
                        )}
                    </div>

                    {/* Content */}
                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            <div className="h-[1px] w-7 bg-fn-amber" />
                            <span className="text-fn-amber uppercase tracking-fn-wide text-fn-xs font-body font-semibold">
                                {recipe.cuisine} · {recipe.category}
                            </span>
                        </div>

                        <h1 className="font-heading text-4xl md:text-5xl font-bold text-fn-brown-night leading-tight">
                            {recipe.title}
                        </h1>

                        <p className="font-heading italic text-fn-amber text-2xl md:text-3xl mt-2 mb-6">
                            {recipe.subtitle}
                        </p>

                        <p className="text-fn-brown/70 text-fn-lg leading-relaxed mb-8">
                            {recipe.shortDescription}
                        </p>

                        {/* Stats grid */}
                        <div className="grid grid-cols-4 gap-4 p-6 bg-white rounded-fn-2xl border border-fn-brown/7 shadow-fn-soft">
                            {[
                                { icon: "⏱", val: recipe.totalTime, lbl: "Total" },
                                { icon: "📊", val: recipe.difficulty, lbl: "Level" },
                                { icon: "⭐", val: recipe.rating.toFixed(1), lbl: `${recipe.ratingCount} reviews` },
                                { icon: "🍽", val: recipe.yield.split(" ")[0], lbl: recipe.yield.split(" ").slice(1).join(" ") },
                            ].map((s) => (
                                <div key={s.lbl} className="text-center">
                                    <div className="text-lg mb-1">{s.icon}</div>
                                    <div className="font-heading text-lg font-bold text-fn-brown-night">
                                        {s.val}
                                    </div>
                                    <div className="text-fn-xs text-fn-brown/50 font-medium">
                                        {s.lbl}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Full description ── */}
            <section className="max-w-3xl mx-auto px-6 pb-12">
                <div className="prose prose-lg text-fn-brown/80 whitespace-pre-line leading-relaxed">
                    {recipe.description}
                </div>

                {recipe.storySnippet && (
                    <blockquote className="mt-8 pl-6 border-l-4 border-fn-amber italic font-heading text-fn-xl text-fn-brown-ink">
                        {recipe.storySnippet}
                    </blockquote>
                )}
            </section>

            {/* ── Ingredients + Instructions grid ── */}
            <section className="max-w-fn-content mx-auto px-6 pb-24">
                <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
                    {/* Ingredients (left sticky sidebar) — interactive with scaler */}
                    <IngredientsPanel
                        ingredients={recipe.ingredients}
                        slug={recipe.slug}
                        baseServings={recipe.servings}
                        yieldLabel={recipe.yield}
                    />

                    {/* Instructions (right main) */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-[1px] w-7 bg-fn-amber" />
                            <span className="text-fn-amber uppercase tracking-fn-wide text-fn-xs font-semibold">
                                Instructions
                            </span>
                        </div>
                        <h2 className="font-heading text-3xl text-fn-brown-night mb-8">
                            Step by step
                        </h2>

                        <ol className="space-y-8">
                            {recipe.instructions.map((step) => (
                                <li key={step.step} className="relative pl-14">
                                    {/* Step number bubble */}
                                    <span className="absolute left-0 top-0 w-10 h-10 rounded-full bg-fn-amber text-white font-heading font-bold text-xl flex items-center justify-center shadow-fn-cta">
                                        {step.step}
                                    </span>

                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="font-heading text-fn-xl font-semibold text-fn-brown-night">
                                                {step.title}
                                            </h3>
                                            {step.duration && (
                                                <span className="text-fn-xs text-fn-brown/50 font-medium">
                                                    · {step.duration}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-fn-base text-fn-brown/75 leading-relaxed">
                                            {step.description}
                                        </p>
                                        {step.tip && (
                                            <div className="mt-3 p-3 rounded-fn-md bg-fn-amber/5 border-l-2 border-fn-amber text-fn-sm text-fn-brown-deep italic">
                                                <strong className="not-italic font-semibold">Tip:</strong> {step.tip}
                                            </div>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ol>

                        {/* Chef tips */}
                        {recipe.tips && recipe.tips.length > 0 && (
                            <div className="mt-16 p-8 bg-fn-ivory rounded-fn-2xl">
                                <h3 className="font-heading text-fn-2xl text-fn-brown-night mb-4">
                                    Chef's secrets
                                </h3>
                                <ul className="space-y-3">
                                    {recipe.tips.map((tip, idx) => (
                                        <li key={idx} className="flex gap-3 text-fn-base text-fn-brown/80">
                                            <span className="text-fn-amber flex-shrink-0">★</span>
                                            <span>{tip}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Nutrition */}
                        {recipe.nutrition && (
                            <div className="mt-8 p-6 bg-white rounded-fn-2xl border border-fn-brown/7">
                                <h3 className="font-heading text-fn-xl text-fn-brown-night mb-3">
                                    Nutrition (per serving)
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-fn-sm">
                                    <div>
                                        <div className="text-fn-brown/50 text-fn-xs uppercase tracking-wider">Calories</div>
                                        <div className="font-heading font-bold text-fn-brown-night text-fn-lg">
                                            {recipe.nutrition.calories}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-fn-brown/50 text-fn-xs uppercase tracking-wider">Protein</div>
                                        <div className="font-heading font-bold text-fn-brown-night text-fn-lg">
                                            {recipe.nutrition.protein}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-fn-brown/50 text-fn-xs uppercase tracking-wider">Fat</div>
                                        <div className="font-heading font-bold text-fn-brown-night text-fn-lg">
                                            {recipe.nutrition.fat}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-fn-brown/50 text-fn-xs uppercase tracking-wider">Carbs</div>
                                        <div className="font-heading font-bold text-fn-brown-night text-fn-lg">
                                            {recipe.nutrition.carbs}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Back link */}
                <div className="mt-20 text-center">
                    <Link
                        href="/recipes"
                        className="text-fn-amber hover:text-fn-amber-deep font-body font-semibold"
                    >
                        ← Back to all recipes
                    </Link>
                </div>
            </section>
        </main>
    );
}

// ─────────────────────────────────────────────────────────────
//  LEGACY VIEW — placeholder for recipes without full schema yet
// ─────────────────────────────────────────────────────────────
function LegacyRecipeView({
    slug,
    recipe,
}: {
    slug: string;
    recipe: typeof LEGACY_RECIPES[keyof typeof LEGACY_RECIPES];
}) {
    return (
        <main
            style={{
                minHeight: "100vh",
                background: "#FAFAF7",
                fontFamily: "'DM Sans', system-ui, sans-serif",
                paddingTop: 88,
            }}
        >
            <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 48px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20, fontSize: 13, color: "rgba(75,46,26,0.5)" }}>
                    <Link href="/" style={{ color: "rgba(75,46,26,0.45)", textDecoration: "none" }}>Home</Link>
                    <span>›</span>
                    <Link href="/recipes" style={{ color: "rgba(75,46,26,0.45)", textDecoration: "none" }}>Recipes</Link>
                    <span>›</span>
                    <span style={{ color: "#D97706", fontWeight: 600 }}>{recipe.title}</span>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: 48, alignItems: "center" }}>
                    <div style={{ position: "relative", height: 480, borderRadius: 24, overflow: "hidden" }}>
                        <Image src={recipe.image} alt={recipe.title} fill style={{ objectFit: "cover" }} sizes="(max-width:768px) 100vw, 50vw" priority />
                    </div>

                    <div>
                        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", color: "#D97706", textTransform: "uppercase", marginBottom: 12 }}>
                            {recipe.region} Vietnam
                        </div>
                        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px, 5vw, 52px)", fontWeight: 700, color: "#2D1A0E", margin: 0, lineHeight: 1.1 }}>
                            {recipe.title}
                        </h1>
                        <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: 22, color: "#D97706", margin: "8px 0 20px" }}>
                            {recipe.subtitle}
                        </p>
                        <p style={{ fontSize: 16, color: "rgba(75,46,26,0.7)", lineHeight: 1.7, marginBottom: 32 }}>
                            {recipe.description}
                        </p>

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, padding: "24px", background: "white", borderRadius: 16, border: "1px solid rgba(75,46,26,0.07)" }}>
                            {[
                                ["⏱", recipe.time, "Time"],
                                ["📊", recipe.difficulty, "Level"],
                                ["⭐", recipe.rating, `${recipe.reviews} reviews`],
                                ["🔥", `${recipe.cal}`, "kcal"],
                            ].map(([icon, val, lbl]) => (
                                <div key={String(lbl)} style={{ textAlign: "center" }}>
                                    <div style={{ fontSize: 18, marginBottom: 4 }}>{icon}</div>
                                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: "#2D1A0E" }}>{val}</div>
                                    <div style={{ fontSize: 11, color: "rgba(75,46,26,0.5)", fontWeight: 500 }}>{lbl}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 80px" }}>
                <div style={{ background: "white", borderRadius: 24, padding: 48, textAlign: "center", border: "1px dashed rgba(217,119,6,0.3)" }}>
                    <div style={{ fontSize: 40, marginBottom: 12 }}>👨‍🍳</div>
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, color: "#2D1A0E", margin: "0 0 8px" }}>
                        Full recipe coming soon
                    </h2>
                    <p style={{ color: "rgba(75,46,26,0.55)", fontSize: 14, margin: 0 }}>
                        Ingredients, step-by-step instructions, and chef's tips will be added here.
                    </p>
                    <p style={{ color: "rgba(75,46,26,0.4)", fontSize: 11, margin: "8px 0 0" }}>
                        Slug: {slug}
                    </p>
                </div>

                <div style={{ marginTop: 32, textAlign: "center" }}>
                    <Link href="/recipes/breakfast" style={{ color: "#D97706", fontWeight: 600, textDecoration: "none" }}>
                        ← Back to Breakfast recipes
                    </Link>
                </div>
            </section>
        </main>
    );
}