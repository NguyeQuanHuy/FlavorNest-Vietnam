import type { Metadata } from 'next'
import Script from 'next/script'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import RecipeContent from './RecipeContent'

// ── Type ──────────────────────────────────────────────────────────────────────
interface RecipeData {
    slug: string
    title: string
    subtitle: string
    description: string
    image: string
    category: string
    region: string
    difficulty: string
    time: string
    prepTime: string
    cookTime: string
    servings: number
    rating: string
    reviews: number
    author: string
    tags: string[]
    ingredients: { group: string; items: string[] }[]
    steps: { title: string; body: string; tip?: string }[]
    nutrition: { label: string; value: string }[]
}

// ── Data ──────────────────────────────────────────────────────────────────────
const RECIPE_DB: Record<string, RecipeData> = {
    'hanoi-beef-pho': {
        slug: 'hanoi-beef-pho',
        title: 'Hanoi Beef Pho',
        subtitle: 'Phở Bò Hà Nội',
        description: 'The soul of Hanoi in a bowl. This recipe has been passed down through generations — slow-simmered bone broth charred with onion and ginger, silky flat rice noodles, paper-thin beef slices, and an aromatic spice bundle that fills your kitchen with warmth.',
        image: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=1400&q=80',
        category: 'Soup',
        region: 'Northern',
        difficulty: 'Medium',
        time: '3 hrs',
        prepTime: '30 min',
        cookTime: '2.5 hrs',
        servings: 4,
        rating: '4.9',
        reviews: 248,
        author: 'Chef Mai Linh',
        tags: ['Beef', 'Noodles', 'Slow Cook', 'Northern'],
        ingredients: [
            {
                group: 'Broth',
                items: [
                    '2 kg beef bones (knuckle + marrow)',
                    '500g beef brisket',
                    '1 large onion, halved',
                    '5cm fresh ginger, halved',
                    '3 star anise',
                    '2 cinnamon sticks',
                    '5 whole cloves',
                    '1 tsp fennel seeds',
                    '2 tbsp fish sauce',
                    '1 tsp sugar',
                    'Salt to taste',
                    '3 liters water',
                ],
            },
            {
                group: 'Noodles & Toppings',
                items: [
                    '400g flat rice noodles (bánh phở)',
                    '300g beef sirloin, very thinly sliced',
                    '4 spring onions, thinly sliced',
                    '2 tbsp fried shallots',
                    'Fresh cilantro & Thai basil',
                ],
            },
            {
                group: 'Serve With',
                items: [
                    'Bean sprouts',
                    'Lime wedges',
                    'Sliced fresh chili',
                    'Hoisin sauce',
                    'Sriracha',
                ],
            },
        ],
        steps: [
            {
                title: 'Blanch the bones',
                body: 'Place beef bones in a large pot, cover with cold water. Bring to a boil and blanch for 10 minutes. Drain, rinse the bones and the pot thoroughly under cold water to remove impurities.',
                tip: 'This step is crucial for a clear, clean broth. Don\'t skip it.',
            },
            {
                title: 'Char the aromatics',
                body: 'Char the halved onion and ginger directly over an open flame or under the broiler until blackened in spots, about 5 minutes per side. This adds a deep, smoky sweetness to the broth.',
            },
            {
                title: 'Toast the spices',
                body: 'In a dry pan over medium heat, toast star anise, cinnamon sticks, cloves, and fennel seeds for 2-3 minutes until fragrant. Wrap them in a cheesecloth bundle or a spice bag.',
            },
            {
                title: 'Simmer the broth',
                body: 'Return bones to the pot with 3 liters of fresh water. Add charred onion, ginger, brisket, spice bundle, fish sauce, and sugar. Bring to a boil, then reduce to a gentle simmer. Skim any foam that rises. Simmer uncovered for at least 2 hours.',
                tip: 'The key is a gentle simmer, not a rolling boil — this keeps the broth clear and delicate.',
            },
            {
                title: 'Prepare the noodles',
                body: 'Soak dry rice noodles in cold water for 30 minutes until pliable. When ready to serve, blanch in boiling water for 30-60 seconds until just tender. Drain and divide into bowls.',
            },
            {
                title: 'Assemble & serve',
                body: 'Remove brisket, slice thinly. Strain the broth, adjust seasoning with fish sauce and salt. Place noodles in bowl, top with sliced brisket and raw sirloin. Ladle the boiling broth over — it will cook the raw beef. Garnish with spring onion, cilantro, and fried shallots. Serve immediately with the condiment plate.',
            },
        ],
        nutrition: [
            { label: 'Calories', value: '420 kcal' },
            { label: 'Protein', value: '38g' },
            { label: 'Carbs', value: '42g' },
            { label: 'Fat', value: '9g' },
            { label: 'Sodium', value: '1200mg' },
        ],
    },
}

const DIFF_COLOR: Record<string, string> = {
    Easy: '#10b981',
    Medium: '#f59e0b',
    Hard: '#ef4444',
}

// ── Static params ─────────────────────────────────────────────────────────────
export function generateStaticParams() {
    return Object.keys(RECIPE_DB).map(slug => ({ slug }))
}

// ── Per-recipe metadata ───────────────────────────────────────────────────────
export async function generateMetadata(
    { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
    const { slug } = await params
    const recipe = RECIPE_DB[slug]
    if (!recipe) return {}

    return {
        title: `${recipe.title} Recipe`,
        description: recipe.description,
        keywords: [recipe.title, recipe.subtitle, recipe.category, 'Vietnamese recipe', 'Vietnamese food'],
        openGraph: {
            type: 'article',
            title: `${recipe.title} (${recipe.subtitle})`,
            description: recipe.description,
            images: [{
                url: recipe.image,
                width: 1400,
                height: 800,
                alt: `${recipe.title} – FlavorNest Vietnam`,
            }],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${recipe.title} Recipe`,
            description: recipe.description,
            images: [recipe.image],
        },
        alternates: { canonical: `/recipes/${slug}` },
    }
}

// ── Recipe JSON-LD (Schema.org) ───────────────────────────────────────────────
function buildRecipeSchema(recipe: RecipeData) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Recipe',
        name: recipe.title,
        alternateName: recipe.subtitle,
        image: [recipe.image],
        description: recipe.description,
        prepTime: 'PT30M',
        cookTime: 'PT2H30M',
        totalTime: 'PT3H',
        recipeYield: `${recipe.servings} servings`,
        recipeCategory: recipe.category,
        recipeCuisine: 'Vietnamese',
        keywords: recipe.tags.join(', '),
        author: { '@type': 'Person', name: recipe.author },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: recipe.rating,
            reviewCount: recipe.reviews,
            bestRating: '5',
            worstRating: '1',
        },
        nutrition: {
            '@type': 'NutritionInformation',
            calories: '420 calories',
            proteinContent: '38g',
            carbohydrateContent: '42g',
            fatContent: '9g',
        },
        recipeIngredient: recipe.ingredients.flatMap(g => g.items),
        recipeInstructions: recipe.steps.map((step, i) => ({
            '@type': 'HowToStep',
            position: i + 1,
            name: step.title,
            text: step.body,
        })),
    }
}

// ── Page (Server Component) ───────────────────────────────────────────────────
export default async function RecipeDetailPage(
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params
    const recipe = RECIPE_DB[slug]

    if (!recipe) notFound()

    return (
        <>
            <Script
                id="recipe-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(buildRecipeSchema(recipe)) }}
            />

            <main style={{ minHeight: '100vh', background: '#FAFAF7', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
                <style>{`
                    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=Playfair+Display:ital,wght@0,700;1,600&display=swap');
                `}</style>

                {/* Hero */}
                <div style={{ position: 'relative', height: 'clamp(320px, 45vw, 520px)', overflow: 'hidden' }}>
                    <Image
                        src={recipe.image}
                        alt={`${recipe.title} – ${recipe.subtitle}`}
                        fill
                        style={{ objectFit: 'cover' }}
                        quality={90}
                        priority
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.65) 100%)' }} />

                    {/* Back */}
                    <Link href="/recipes" style={{ position: 'absolute', top: 100, left: 24, color: 'white', fontSize: 13, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6, textDecoration: 'none', background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(8px)', padding: '8px 16px', borderRadius: 100 }}>
                        ← All Recipes
                    </Link>

                    {/* Hero text */}
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 'clamp(20px, 4vw, 40px)' }}>
                        <div style={{ maxWidth: 900, margin: '0 auto' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                                <span style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', color: 'white', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 100 }}>
                                    {recipe.region} Vietnam
                                </span>
                                <span style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', color: 'white', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 100 }}>
                                    {recipe.category}
                                </span>
                            </div>
                            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 700, color: 'white', margin: 0, marginBottom: 4, lineHeight: 1.1 }}>
                                {recipe.title}
                            </h1>
                            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 16, fontStyle: 'italic', margin: 0 }}>{recipe.subtitle}</p>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 20px 80px' }}>

                    {/* Meta bar */}
                    <div style={{ background: 'white', borderRadius: 16, padding: '20px 24px', margin: '24px 0', display: 'flex', gap: 0, flexWrap: 'wrap', border: '1px solid rgba(75,46,26,0.07)', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                        {[
                            { icon: '⏱', label: 'Total Time', value: recipe.time },
                            { icon: '🔪', label: 'Prep', value: recipe.prepTime },
                            { icon: '🔥', label: 'Cook', value: recipe.cookTime },
                            { icon: '👤', label: 'Difficulty', value: recipe.difficulty, color: DIFF_COLOR[recipe.difficulty] },
                            { icon: '★', label: 'Rating', value: `${recipe.rating} (${recipe.reviews})`, color: '#D97706' },
                        ].map((item, i) => (
                            <div key={item.label} style={{ flex: '1 1 120px', padding: '0 20px', borderLeft: i > 0 ? '1px solid rgba(75,46,26,0.08)' : 'none', textAlign: 'center' }}>
                                <div style={{ fontSize: 18, marginBottom: 4 }}>{item.icon}</div>
                                <div style={{ fontSize: 11, color: 'rgba(75,46,26,0.4)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 3 }}>{item.label}</div>
                                <div style={{ fontSize: 14, fontWeight: 700, color: item.color ?? '#2D1A0E' }}>{item.value}</div>
                            </div>
                        ))}
                    </div>

                    {/* Description */}
                    <p style={{ fontSize: 16, color: 'rgba(75,46,26,0.65)', lineHeight: 1.75, margin: '0 0 32px' }}>
                        {recipe.description}
                    </p>

                    {/* Interactive: Ingredients + Steps (Client Component) */}
                    <RecipeContent recipe={recipe} />
                </div>
            </main>
        </>
    )
}
