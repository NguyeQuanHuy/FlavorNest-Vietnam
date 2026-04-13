// ─────────────────────────────────────────────────────────────────────────────
//  app/recipes/[slug]/page.tsx
//  FlavorNest Vietnam — Recipe Detail Page
//
//  Renders any recipe from RECIPE_CONTENT by slug.
//  EASY TO SCALE: add new recipes to lib/recipeContent.ts only.
//  This page file never needs to change.
// ─────────────────────────────────────────────────────────────────────────────
import type { FavoriteRecipe } from '@/app/favorites/page'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { notFound } from 'next/navigation'
export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate mỗi giờ
import SaveButton from '@/components/SaveButton'
import { RECIPES, CATEGORIES } from '@/data/recipes'



import {
    RECIPE_CONTENT,
    getRecipeBySlug,
    getRelatedRecipes,
    type RecipeContent,
} from '@/lib/recipeContent'




type Props = {
    params: Promise<{ slug: string }>
}

// ── Static params — pre-build all recipe pages at build time ──────────────
export async function generateStaticParams() {
    return RECIPE_CONTENT.map(r => ({ slug: r.slug }))
}

// ── Per-page SEO metadata ─────────────────────────────────────────────────
export async function generateMetadata({
    params,
}: Props): Promise<Metadata> {
    const { slug } = await params
    const r = getRecipeBySlug(slug)
    if (!r) return { title: 'Recipe Not Found' }
    return {
        title: r.title,
        description: r.tagline,
        openGraph: {
            title: `${r.title} – FlavorNest Vietnam`,
            description: r.tagline,
            images: [{ url: r.image, width: 1200, height: 800, alt: r.imageAlt }],
        },
    }
}

// ── Tailwind colour maps (full strings for JIT safety) ────────────────────
const DIFF_BG: Record<string, string> = {
    Easy: 'bg-[#166534]/10 text-[#166534]',
    Medium: 'bg-[#D97706]/12 text-[#D97706]',
    Hard: 'bg-red-50 text-red-600',
}

// ── Helper for Schema Time ────────────────────────────────────────────────
const formatSchemaTime = (str: string) => {
    const num = str.match(/\d+/)?.[0] || '0'
    const unit = str.toLowerCase().includes('hr') ? 'H' : 'M'
    return `PT${num}${unit}`
}

// ─────────────────────────────────────────────────────────────────────────────
export default async function RecipeDetailPage({
    params,
}: Props) {
    const { slug } = await params
    const r = getRecipeBySlug(slug)
    if (!r) notFound()

    const related = getRelatedRecipes(r.related)

    // Recipe JSON-LD schema for Google Rich Results
    const recipeSchema = {
        '@context': 'https://schema.org',
        '@type': 'Recipe',
        name: r.title,
        image: [r.image],
        description: r.tagline,
        author: { '@type': 'Organization', name: 'FlavorNest Vietnam' },
        prepTime: formatSchemaTime(r.prepTime),
        cookTime: formatSchemaTime(r.cookTime),
        recipeYield: `${r.servings} servings`,
        recipeCategory: r.category,
        recipeCuisine: 'Vietnamese',
        nutrition: { '@type': 'NutritionInformation', calories: r.nutrition.find(n => n.label === 'Calories')?.value ?? '' },
        recipeIngredient: r.ingredients.flatMap(g => g.items),
        recipeInstructions: r.steps.map((s, i) => ({
            '@type': 'HowToStep',
            name: s.title,
            text: s.text,
            url: `https://flavornest-vietnam.com/recipes/${r.slug}#step-${i + 1}`,
        })),
        ...(r.rating ? {
            aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: r.rating,
                bestRating: '5',
                worstRating: '1',
                ratingCount: '100',
            },
        } : {}),
    }

    return (
        <>
            <Script
                id={`schema-${r.slug}`}
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(recipeSchema) }}
            />

            <article className="min-h-screen bg-[#F5EDE3] dark:bg-[#1C1009]">

                {/* ══════════════════════════════════════════════════
            HERO IMAGE
        ══════════════════════════════════════════════════ */}
                <section className="relative h-[70vh] min-h-[480px] max-h-[780px] overflow-hidden">
                    <Image
                        src={r.image}
                        alt={r.imageAlt}
                        fill
                        priority
                        quality={88}
                        sizes="100vw"
                        className="object-cover scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#1C1009]/55 via-[#1C1009]/28 to-[#1C1009]/80" />

                    {/* Breadcrumb */}
                    <nav
                        aria-label="Breadcrumb"
                        className="relative z-10 max-w-5xl mx-auto px-5 pt-28"
                    >
                        <ol className="flex items-center gap-2 text-white/50 text-xs">
                            <li><Link href="/" className="hover:text-[#F59E0B] transition-colors">Home</Link></li>
                            <li aria-hidden>/</li>
                            <li><Link href="/recipes" className="hover:text-[#F59E0B] transition-colors">Recipes</Link></li>
                            <li aria-hidden>/</li>
                            <li className="text-white/80">{r.title}</li>
                        </ol>
                    </nav>

                    {/* Hero content */}
                    <div
                        className="absolute bottom-0 left-0 right-0 z-10 pb-10"
                        style={{ background: 'linear-gradient(to top, rgba(28,16,9,.9) 0%, transparent 100%)' }}
                    >
                        <div className="max-w-5xl mx-auto px-5">
                            {/* Badges */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="text-[11px] font-bold uppercase tracking-wider bg-[#D97706] text-white px-3 py-1.5 rounded-full">
                                    {r.category}
                                </span>
                                <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full ${DIFF_BG[r.difficulty]}`}>
                                    {r.difficulty}
                                </span>
                            </div>

                            {/* H1 */}
                            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-white font-extrabold leading-tight mb-3 max-w-2xl">
                                {r.title}
                                <br />
                                <em className="text-[#F59E0B] text-2xl sm:text-3xl font-medium">{r.subtitle}</em>
                            </h1>

                            {/* Meta pills */}
                            <div className="flex flex-wrap gap-3">
                                {[
                                    { icon: '⏱', label: 'Prep', val: r.prepTime },
                                    { icon: '🔥', label: 'Cook', val: r.cookTime },
                                    { icon: '🍽', label: 'Serves', val: `${r.servings} people` },
                                    { icon: '⭐', label: 'Rating', val: `${r.rating} / 5` },
                                ].map(m => (
                                    <div key={m.label} className="flex items-center gap-2 bg-black/32 backdrop-blur-sm rounded-2xl px-4 py-2">
                                        <span className="text-lg">{m.icon}</span>
                                        <div>
                                            <div className="text-white/45 text-[9px] uppercase font-bold tracking-wider">{m.label}</div>
                                            <div className="text-white font-bold text-sm">{m.val}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════════════════
            ACTION BAR
        ══════════════════════════════════════════════════ */}
                {/* ══════════════════════════════════════════════════
    {/* --- ACTION BAR --- */}
                <div className="flex items-center gap-2.5">

                    {/* Nút Save này OK vì nó gọi từ file Client riêng */}
                    <SaveButton recipe={r} />

                    {/* NÚT PRINT: Bỏ onClick đi, chỉ để CSS để hiển thị */}
                    <button className="flex items-center gap-1.5 text-xs font-bold border border-[#D97706]/20 text-[#4B2E1A] dark:text-[#F5EDE3] hover:border-[#D97706] hover:bg-[#D97706]/5 px-5 py-2.5 rounded-xl transition-all shadow-sm">
                        <span>🖨️</span> Print
                    </button>

                    {/* NÚT SHARE: Bỏ onClick đi */}
                    <button className="flex items-center gap-1.5 text-xs font-bold border border-[#D97706]/20 text-[#4B2E1A] dark:text-[#F5EDE3] hover:border-[#D97706] hover:bg-[#D97706]/5 px-5 py-2.5 rounded-xl transition-all shadow-sm">
                        <span>📤</span> Share
                    </button>
                </div>
                2-COLUMN BODY
                {/* --- ACTION BAR --- */}
                <div className="max-w-5xl mx-auto px-5 lg:px-8">
                    <div className="flex flex-wrap items-center justify-between gap-4 py-6 border-b border-[#D97706]/12">

                        {/* Nut quay lai */}
                        <Link
                            href="/recipes"
                            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#4B2E1A]/60 dark:text-[#F5EDE3]/50 hover:text-[#D97706] transition-all"
                        >
                            Quay lại danh sách
                        </Link>

                        {/* Nhóm cac nut tương tac */}
                        <div className="flex items-center gap-2.5">

                            {/* Nut Save - Da tach thanh Component rieng */}
                            <SaveButton recipe={r} />

                            {/* Nut Print - Khong de onClick o day */}
                            <button
                                className="flex items-center gap-2 text-xs font-bold border border-[#D97706]/20 text-[#4B2E1A] dark:text-[#F5EDE3] hover:border-[#D97706] hover:bg-[#D97706]/5 px-5 py-2.5 rounded-xl transition-all shadow-sm"
                            >
                                <span>🖨️</span> In công thức
                            </button>

                            {/* Nut Share */}
                            <button
                                className="flex items-center gap-2 text-xs font-bold border border-[#D97706]/20 text-[#4B2E1A] dark:text-[#F5EDE3] hover:border-[#D97706] hover:bg-[#D97706]/5 px-5 py-2.5 rounded-xl transition-all shadow-sm"
                            >
                                <span>📤</span> Chia sẻ
                            </button>

                        </div>
                    </div>
                </div>
                <div className="max-w-5xl mx-auto px-5 lg:px-8 grid md:grid-cols-[300px_1fr] gap-8 lg:gap-12 py-12">

                    {/* ── LEFT: Sticky ingredients ── */}
                    <aside>
                        <div className="bg-white dark:bg-[#2a150a] rounded-3xl p-6 shadow-[0_4px_24px_rgba(75,46,26,.10)] border border-[#D97706]/8 md:sticky md:top-28">
                            <h2 className="font-display text-2xl text-[#4B2E1A] dark:text-[#F5EDE3] font-bold mb-1">
                                🛒 Ingredients
                            </h2>
                            <p className="text-xs text-[#4B2E1A]/42 dark:text-[#F5EDE3]/32 mb-4">
                                Tap each item to check off as you cook.
                            </p>

                            {/* Servings display */}
                            <div className="flex items-center gap-3 mb-5 p-3 bg-[#F5EDE3] dark:bg-[#1C1009] rounded-2xl">
                                <span className="text-xs text-[#4B2E1A]/52 dark:text-[#F5EDE3]/42 flex-1">Serves</span>
                                <span className="font-extrabold text-[#4B2E1A] dark:text-[#F5EDE3]">{r.servings}</span>
                                <span className="text-xs text-[#4B2E1A]/42 dark:text-[#F5EDE3]/35">people</span>
                            </div>

                            {/* Ingredient groups */}
                            <ul className="space-y-0.5">
                                {r.ingredients.map(grp => (
                                    <li key={grp.group}>
                                        <div className="text-[9px] font-extrabold uppercase tracking-[.18em] text-[#D97706] mt-4 mb-2 px-1">
                                            {grp.group}
                                        </div>
                                        <ul className="space-y-0.5">
                                            {grp.items.map((item, idx) => (
                                                <li
                                                    key={idx}
                                                    className="flex items-start gap-2.5 py-1.5 px-2.5 rounded-xl hover:bg-[#D97706]/6 transition-colors cursor-pointer group"
                                                >
                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#D97706] flex-shrink-0 mt-1.5" />
                                                    <span className="text-sm text-[#4B2E1A] dark:text-[#F5EDE3]/80 leading-relaxed">
                                                        {item}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    {/* ── RIGHT: Story + Steps + Nutrition + Tips ── */}
                    <div className="space-y-14">

                        {/* Story */}
                        <section aria-labelledby="story-heading">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-7 h-px bg-[#D97706]" />
                                <span className="text-[#D97706] text-[11px] font-bold uppercase tracking-[.18em]">The Story</span>
                            </div>
                            <h2 id="story-heading" className="font-display text-2xl sm:text-3xl text-[#4B2E1A] dark:text-[#F5EDE3] font-bold mb-4">
                                {r.storyTitle}
                            </h2>
                            <div className="space-y-3 text-[#4B2E1A]/68 dark:text-[#F5EDE3]/58 text-[15px] leading-relaxed">
                                {r.story.map((para, i) => (
                                    <p key={i}>{para}</p>
                                ))}
                            </div>
                        </section>

                        {/* Instructions */}
                        <section aria-labelledby="instructions-heading">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-7 h-px bg-[#D97706]" />
                                <span className="text-[#D97706] text-[11px] font-bold uppercase tracking-[.18em]">Instructions</span>
                            </div>
                            <h2 id="instructions-heading" className="font-display text-2xl sm:text-3xl text-[#4B2E1A] dark:text-[#F5EDE3] font-bold mb-7">
                                Step-by-Step
                            </h2>
                            <ol className="space-y-7">
                                {r.steps.map((step, i) => (
                                    <li key={i} id={`step-${i + 1}`} className="flex gap-5 items-start">
                                        {/* Step number badge */}
                                        <div
                                            className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-sm mt-0.5"
                                            style={{ background: 'linear-gradient(135deg, #D97706, #B45309)' }}
                                        >
                                            {i + 1}
                                        </div>
                                        <div className={`flex-1 pb-7 ${i < r.steps.length - 1 ? 'border-b border-[#D97706]/8' : ''}`}>
                                            <h3 className="font-bold text-[#4B2E1A] dark:text-[#F5EDE3] mb-2">{step.title}</h3>
                                            <p className="text-sm text-[#4B2E1A]/65 dark:text-[#F5EDE3]/55 leading-relaxed mb-3">
                                                {step.text}
                                            </p>
                                            {step.tip && (
                                                <div className="flex items-start gap-2 bg-[#D97706]/8 rounded-xl px-3 py-2.5 text-xs text-[#4B2E1A]/72 dark:text-[#F5EDE3]/55">
                                                    <span className="text-[#D97706] flex-shrink-0 mt-0.5">💡</span>
                                                    <span>{step.tip}</span>
                                                </div>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </section>

                        {/* Nutrition */}
                        <section aria-labelledby="nutrition-heading">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-7 h-px bg-[#D97706]" />
                                <span className="text-[#D97706] text-[11px] font-bold uppercase tracking-[.18em]">Nutrition</span>
                            </div>
                            <h2 id="nutrition-heading" className="font-display text-2xl text-[#4B2E1A] dark:text-[#F5EDE3] font-bold mb-5">
                                Per Serving
                            </h2>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-3">
                                {r.nutrition.map(n => (
                                    <div
                                        key={n.label}
                                        className="text-center bg-[#F5EDE3] dark:bg-[#1C1009] rounded-2xl py-3.5 px-2"
                                    >
                                        <div className="text-xl mb-1">{n.icon}</div>
                                        <div className="font-display text-lg font-bold text-[#D97706]">{n.value}</div>
                                        <div className="text-xs text-[#4B2E1A]/52 dark:text-[#F5EDE3]/38 mt-0.5">{n.label}</div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-[10px] text-[#4B2E1A]/32 dark:text-[#F5EDE3]/22">
                                Values are estimates. Actual nutrition may vary by ingredients and portion size.
                            </p>
                        </section>

                        {/* Pro Tips */}
                        <section aria-labelledby="tips-heading">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-7 h-px bg-[#166534]" />
                                <span className="text-[#166534] text-[11px] font-bold uppercase tracking-[.18em]">Pro Tips from the Nest</span>
                            </div>
                            <div className="bg-[#166534]/7 border-l-4 border-[#166534] rounded-r-2xl p-5">
                                <ul className="space-y-3">
                                    {r.tips.map((tip, i) => (
                                        <li key={i} className="flex items-start gap-2.5 text-sm text-[#4B2E1A]/72 dark:text-[#F5EDE3]/60 leading-relaxed">
                                            <span className="text-[#166534] mt-0.5 flex-shrink-0">✦</span>
                                            <span dangerouslySetInnerHTML={{
                                                __html: tip.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-[#166534]">$1</strong>')
                                            }} />
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Variations */}
                            {r.variations && r.variations.length > 0 && (
                                <div className="mt-5 bg-[#D97706]/7 border-l-4 border-[#D97706] rounded-r-2xl p-5">
                                    <div className="text-[#D97706] text-[11px] font-bold uppercase tracking-[.18em] mb-3">Variations</div>
                                    <ul className="space-y-2.5">
                                        {r.variations.map((v, i) => (
                                            <li key={i} className="flex items-start gap-2.5 text-sm text-[#4B2E1A]/70 dark:text-[#F5EDE3]/58 leading-relaxed">
                                                <span className="text-[#D97706] mt-0.5 flex-shrink-0">→</span>
                                                <span dangerouslySetInnerHTML={{
                                                    __html: v.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-[#D97706]">$1</strong>')
                                                }} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </section>

                    </div>
                </div>

                {/* ══════════════════════════════════════════════════
            RELATED RECIPES
        ══════════════════════════════════════════════════ */}
                {related.length > 0 && (
                    <section
                        className="bg-[#EAD9C8]/35 dark:bg-[#2a150a]/45 py-16 px-5 lg:px-8"
                        aria-labelledby="related-heading"
                    >
                        <div className="max-w-5xl mx-auto">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-7 h-px bg-[#D97706]" />
                                <span className="text-[#D97706] text-[11px] font-bold uppercase tracking-[.18em]">Keep Cooking</span>
                            </div>
                            <h2 id="related-heading" className="font-display text-3xl text-[#4B2E1A] dark:text-[#F5EDE3] font-bold mb-8">
                                You Might Also Love
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                                {related.map(rel => (
                                    <Link
                                        key={rel.slug}
                                        href={`/recipes/${rel.slug}`}
                                        className="group bg-white dark:bg-[#2a150a] rounded-3xl overflow-hidden shadow-[0_4px_24px_rgba(75,46,26,.10)] border border-[#D97706]/8 hover:shadow-[0_16px_48px_rgba(75,46,26,.16)] hover:-translate-y-2 transition-all duration-400"
                                    >
                                        <div className="relative h-40 overflow-hidden">
                                            <Image
                                                src={rel.image}
                                                alt={rel.imageAlt}
                                                fill
                                                sizes="(max-width:640px) 100vw, 33vw"
                                                className="object-cover group-hover:scale-[1.06] transition-transform duration-500"
                                                quality={75}
                                            />
                                        </div>
                                        <div className="p-4">
                                            <div className="flex gap-1.5 mb-2">
                                                <span className="text-[10px] font-bold uppercase tracking-wider bg-[#166534]/10 text-[#166534] px-2 py-0.5 rounded-full">
                                                    {rel.category}
                                                </span>
                                                <span className="text-[10px] font-bold uppercase tracking-wider bg-[#D97706]/10 text-[#D97706] px-2 py-0.5 rounded-full">
                                                    {rel.difficulty}
                                                </span>
                                            </div>
                                            <h3 className="font-display font-bold text-base text-[#4B2E1A] dark:text-[#F5EDE3] group-hover:text-[#D97706] transition-colors leading-snug">
                                                {rel.title}
                                            </h3>
                                            <p className="text-[11px] text-[#4B2E1A]/45 dark:text-[#F5EDE3]/38 mt-1.5">
                                                {rel.totalTime} · ⭐ {rel.rating}
                                            </p>
                                            <div className="mt-3 text-[#D97706] text-xs font-bold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                                                Cook it
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                                                    <path strokeLinecap="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

            </article>
        </>
    )
}