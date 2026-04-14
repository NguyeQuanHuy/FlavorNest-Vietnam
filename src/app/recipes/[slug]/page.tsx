'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

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

// ── Component ─────────────────────────────────────────────────────────────────
export default function RecipeDetailPage({ params }: { params: { slug: string } }) {
    const recipe = RECIPE_DB[params.slug]
    const [servings, setServings] = useState(recipe?.servings ?? 4)
    const [activeTab, setActiveTab] = useState<'ingredients' | 'steps'>('ingredients')
    const [checkedSteps, setCheckedSteps] = useState<Set<number>>(new Set())

    if (!recipe) {
        return (
            <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui' }}>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 48, marginBottom: 16 }}>🍜</div>
                    <h1 style={{ color: '#4B2E1A' }}>Recipe not found</h1>
                    <Link href="/recipes" style={{ color: '#D97706', fontWeight: 600 }}>← Back to Recipes</Link>
                </div>
            </main>
        )
    }

    const toggleStep = (i: number) => {
        const next = new Set(checkedSteps)
        next.has(i) ? next.delete(i) : next.add(i)
        setCheckedSteps(next)
    }

    const ratio = servings / recipe.servings

    return (
        <main style={{ minHeight: '100vh', background: '#FAFAF7', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=Playfair+Display:ital,wght@0,700;1,600&display=swap');
                .tab-btn { background: none; border: none; cursor: pointer; font-family: inherit; padding: 10px 24px; font-size: 14px; font-weight: 600; color: rgba(75,46,26,0.45); border-bottom: 2.5px solid transparent; transition: all 0.2s; }
                .tab-btn.active { color: #4B2E1A; border-bottom-color: #D97706; }
                .step-item { display: flex; gap: 20px; padding: 20px 0; border-bottom: 1px solid rgba(75,46,26,0.06); cursor: pointer; transition: opacity 0.2s; }
                .step-item.done { opacity: 0.45; }
                .step-num { width: 36px; height: 36px; border-radius: 50%; background: rgba(217,119,6,0.1); color: #D97706; font-weight: 700; font-size: 14px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: all 0.2s; }
                .step-item.done .step-num { background: #10b981; color: white; }
                .counter-btn { width: 32px; height: 32px; border-radius: 50%; border: 1.5px solid rgba(75,46,26,0.18); background: white; color: #4B2E1A; font-size: 18px; display: flex; align-items: center; justify-content: center; cursor: pointer; font-weight: 300; transition: all 0.15s; }
                .counter-btn:hover { border-color: #D97706; color: #D97706; }
                .ing-item { display: flex; justify-content: space-between; align-items: center; padding: 9px 0; border-bottom: 1px solid rgba(75,46,26,0.05); font-size: 14px; }
            `}</style>

            {/* Hero */}
            <div style={{ position: 'relative', height: 'clamp(320px, 45vw, 520px)', overflow: 'hidden' }}>
                <Image
                    src={recipe.image}
                    alt={recipe.title}
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

                {/* Two columns */}
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.5fr)', gap: 28 }}>

                    {/* Left: Ingredients */}
                    <div style={{ background: 'white', borderRadius: 20, padding: '24px', border: '1px solid rgba(75,46,26,0.07)', height: 'fit-content', position: 'sticky', top: 96 }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: '#2D1A0E', margin: 0 }}>Ingredients</h2>
                            {/* Serving adjuster */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                <button className="counter-btn" onClick={() => setServings(Math.max(1, servings - 1))}>−</button>
                                <span style={{ fontSize: 14, fontWeight: 700, color: '#2D1A0E', minWidth: 52, textAlign: 'center' }}>{servings} servings</span>
                                <button className="counter-btn" onClick={() => setServings(servings + 1)}>+</button>
                            </div>
                        </div>

                        {recipe.ingredients.map(group => (
                            <div key={group.group} style={{ marginBottom: 20 }}>
                                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#D97706', marginBottom: 8 }}>{group.group}</div>
                                {group.items.map(item => (
                                    <div key={item} className="ing-item">
                                        <span style={{ color: 'rgba(75,46,26,0.75)' }}>{item}</span>
                                        {ratio !== 1 && (
                                            <span style={{ fontSize: 11, color: '#D97706', fontWeight: 600, background: 'rgba(217,119,6,0.08)', padding: '2px 8px', borderRadius: 6 }}>×{ratio.toFixed(1)}</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* Right: Steps */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: '#2D1A0E', margin: 0 }}>Instructions</h2>
                            <span style={{ fontSize: 12, color: 'rgba(75,46,26,0.4)', fontWeight: 500 }}>
                                {checkedSteps.size}/{recipe.steps.length} done
                            </span>
                        </div>

                        {/* Progress bar */}
                        <div style={{ height: 4, background: 'rgba(75,46,26,0.07)', borderRadius: 100, marginBottom: 24, overflow: 'hidden' }}>
                            <div style={{ height: '100%', width: `${(checkedSteps.size / recipe.steps.length) * 100}%`, background: 'linear-gradient(90deg, #D97706, #F59E0B)', borderRadius: 100, transition: 'width 0.4s ease' }} />
                        </div>

                        <div>
                            {recipe.steps.map((step, i) => (
                                <div key={i} className={`step-item ${checkedSteps.has(i) ? 'done' : ''}`} onClick={() => toggleStep(i)}>
                                    <div className="step-num">
                                        {checkedSteps.has(i) ? '✓' : i + 1}
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontSize: 15, fontWeight: 600, color: '#2D1A0E', marginBottom: 6, fontFamily: "'DM Sans', system-ui" }}>
                                            {step.title}
                                        </div>
                                        <p style={{ fontSize: 14, color: 'rgba(75,46,26,0.65)', lineHeight: 1.7, margin: 0, marginBottom: step.tip ? 10 : 0 }}>
                                            {step.body}
                                        </p>
                                        {step.tip && (
                                            <div style={{ background: 'rgba(217,119,6,0.07)', borderLeft: '3px solid #D97706', borderRadius: '0 8px 8px 0', padding: '8px 12px', marginTop: 10 }}>
                                                <span style={{ fontSize: 12, color: '#92580A', fontWeight: 600 }}>💡 Tip: </span>
                                                <span style={{ fontSize: 12, color: '#92580A' }}>{step.tip}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Nutrition */}
                        <div style={{ background: 'white', borderRadius: 20, padding: '24px', marginTop: 28, border: '1px solid rgba(75,46,26,0.07)' }}>
                            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: '#2D1A0E', margin: '0 0 16px' }}>Nutrition (per serving)</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 8 }}>
                                {recipe.nutrition.map(n => (
                                    <div key={n.label} style={{ textAlign: 'center', background: '#FAFAF7', borderRadius: 12, padding: '12px 8px' }}>
                                        <div style={{ fontSize: 15, fontWeight: 700, color: '#2D1A0E' }}>{n.value}</div>
                                        <div style={{ fontSize: 10, color: 'rgba(75,46,26,0.45)', fontWeight: 600, letterSpacing: '0.04em', marginTop: 2 }}>{n.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}