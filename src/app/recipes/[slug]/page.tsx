'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
    tags: string[]
    ingredients: { group: string; items: string[] }[]
    steps: { title: string; body: string; tip?: string }[]
    nutrition: { label: string; value: string }[]
}

const RECIPE_DB: Record<string, RecipeData> = {
    'hanoi-beef-pho': {
        slug: 'hanoi-beef-pho',
        title: 'Hanoi Beef Pho',
        subtitle: 'Phở Bò Hà Nội',
        description: "At five in the morning, Hanoi still hasn't decided to wake up. The alleys are quiet, the air smells faintly of charcoal, and somewhere nearby a pot has been simmering since midnight. That pot is what this recipe is about.\n\nAuthentic Hanoi beef pho is defined by restraint. The broth should be crystal-clear, gently sweet, and deeply aromatic — not a single spice dominating the others. Achieving that takes two things no shortcut can replace: blanching the bones first, and charring the onion and ginger until they're genuinely black. Everything else follows from there.",
        image: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=1400&q=80',
        category: 'Soup', region: 'Northern', difficulty: 'Medium',
        time: '3 hrs', prepTime: '30 min', cookTime: '2.5 hrs',
        servings: 4, rating: '4.9', reviews: 248,
        tags: ['Beef', 'Noodles', 'Slow Cook', 'Northern', 'Gluten Free'],
        ingredients: [
            {
                group: 'Broth',
                items: ['2 kg beef bones (knuckle + marrow)', '500g beef brisket', '1 large onion, halved', '5cm fresh ginger, halved', '3 star anise', '2 cinnamon sticks', '5 whole cloves', '1 tsp fennel seeds', '2 tbsp fish sauce', '1 tsp sugar', 'Salt to taste', '3 liters water'],
            },
            {
                group: 'Noodles & Toppings',
                items: ['400g flat rice noodles (bánh phở)', '300g beef sirloin, very thinly sliced', '4 spring onions, thinly sliced', '2 tbsp fried shallots', 'Fresh cilantro & Thai basil'],
            },
            {
                group: 'Serve With',
                items: ['Bean sprouts', 'Lime wedges', 'Sliced fresh chili', 'Hoisin sauce', 'Sriracha'],
            },
        ],
        steps: [
            { title: 'Blanch the bones', body: 'Place beef bones in a large pot, cover with cold water. Bring to a boil and blanch for 10 minutes. Drain, rinse bones and pot thoroughly under cold water to remove impurities.', tip: "This step is crucial for a clear broth. Don't skip it." },
            { title: 'Char the aromatics', body: 'Char the halved onion and ginger directly over an open flame or under the broiler until blackened in spots, about 5 minutes per side. This adds deep, smoky sweetness to the broth.' },
            { title: 'Toast the spices', body: 'In a dry pan over medium heat, toast star anise, cinnamon sticks, cloves, and fennel seeds for 2-3 minutes until fragrant. Wrap in a cheesecloth bundle or spice bag.' },
            { title: 'Simmer the broth', body: 'Return bones to the pot with 3 liters of fresh water. Add charred onion, ginger, brisket, spice bundle, fish sauce, and sugar. Bring to a boil, then reduce to a gentle simmer. Skim any foam. Simmer uncovered for at least 2 hours.', tip: 'A gentle simmer — not a rolling boil — keeps the broth crystal clear.' },
            { title: 'Prepare the noodles', body: 'Soak dry rice noodles in cold water for 30 minutes. When ready to serve, blanch in boiling water for 30-60 seconds until just tender. Drain and divide into bowls.' },
            { title: 'Assemble & serve', body: 'Remove brisket and slice thinly. Strain the broth, adjust seasoning. Place noodles in bowl, top with sliced brisket and raw sirloin. Ladle boiling broth over — it will cook the raw beef. Garnish with spring onion, cilantro, fried shallots. Serve immediately.' },
        ],
        nutrition: [
            { label: 'Calories', value: '420 kcal' },
            { label: 'Protein', value: '38g' },
            { label: 'Carbs', value: '42g' },
            { label: 'Fat', value: '9g' },
            { label: 'Sodium', value: '1200mg' },
        ],
    },
    'bun-cha-hanoi': {
        slug: 'bun-cha-hanoi',
        title: 'Hanoi Grilled Pork Vermicelli',
        subtitle: 'Bún Chả Hà Nội',
        description: "Smoky chargrilled pork patties in a warm tangy broth, paired with cool rice vermicelli and a mountain of fresh herbs. The dish that made Barack Obama and Anthony Bourdain sit on plastic stools in Hanoi.\n\nBún chả is not complicated, but it demands good pork and genuine charcoal heat. The magic is in the contrast — hot smoky meat, cool noodles, bright herbs, and a sweet-sour broth that ties everything together.",
        image: 'https://images.unsplash.com/photo-1742893368398-128bded9c656?auto=format&fit=crop&w=1400&q=80',
        category: 'Noodles', region: 'Northern', difficulty: 'Easy',
        time: '45 min', prepTime: '20 min', cookTime: '25 min',
        servings: 4, rating: '4.8', reviews: 218,
        tags: ['Pork', 'Grilled', 'Noodles', 'Northern'],
        ingredients: [
            {
                group: 'Pork Patties',
                items: ['400g ground pork (not too lean)', '2 shallots, finely minced', '2 cloves garlic, minced', '1 tbsp fish sauce', '1 tsp sugar', '1/2 tsp black pepper', '1 tbsp vegetable oil'],
            },
            {
                group: 'Dipping Broth',
                items: ['3 tbsp fish sauce', '2 tbsp sugar', '3 tbsp rice vinegar', '200ml warm water', '1 clove garlic, minced', '1 red chilli, sliced', '1 tsp lime juice'],
            },
            {
                group: 'To Serve',
                items: ['300g dried rice vermicelli', 'Fresh mint leaves', 'Fresh perilla (tía tô)', 'Bean sprouts', 'Lettuce leaves'],
            },
        ],
        steps: [
            { title: 'Mix the pork', body: 'Combine ground pork with shallots, garlic, fish sauce, sugar, pepper, and oil. Mix well and marinate for at least 20 minutes. Shape into small flat patties about 4cm wide.' },
            { title: 'Make the dipping broth', body: 'Dissolve sugar in warm water. Add fish sauce, vinegar, and lime juice. Taste — it should balance sweet, sour, and salty. Add garlic and chilli. Warm gently before serving.' },
            { title: 'Grill the pork', body: 'Grill patties over charcoal or under a hot broiler for 4-5 minutes per side until caramelised and slightly charred.', tip: 'Charcoal gives the best flavour. A cast iron griddle on maximum heat is the best indoor alternative.' },
            { title: 'Cook the noodles', body: 'Boil rice vermicelli for 3-4 minutes. Drain and rinse with cold water. Divide into portions.' },
            { title: 'Assemble & serve', body: 'Place warm dipping broth in individual bowls. Add 2-3 pork patties to the broth. Serve noodles on the side with fresh herbs. Dip noodles and herbs into the broth to eat.' },
        ],
        nutrition: [
            { label: 'Calories', value: '480 kcal' },
            { label: 'Protein', value: '32g' },
            { label: 'Carbs', value: '55g' },
            { label: 'Fat', value: '14g' },
            { label: 'Sodium', value: '980mg' },
        ],
    },
}

const DIFF_COLOR: Record<string, string> = {
    Easy: '#10b981', Medium: '#f59e0b', Hard: '#ef4444',
}

export default function RecipeDetailPage({ params }: { params: { slug: string } }) {
    const recipe = RECIPE_DB[params.slug]
    const [servings, setServings] = useState(recipe?.servings ?? 4)
    const [checkedSteps, setCheckedSteps] = useState<Set<number>>(new Set())
    const [checkedIngredients, setCheckedIngredients] = useState<Set<string>>(new Set())
    const [showStickyTitle, setShowStickyTitle] = useState(false)
    const heroRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setShowStickyTitle(!entry.isIntersecting),
            { threshold: 0, rootMargin: '-80px 0px 0px 0px' }
        )
        if (heroRef.current) observer.observe(heroRef.current)
        return () => observer.disconnect()
    }, [])

    if (!recipe) {
        return (
            <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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

    const toggleIngredient = (key: string) => {
        const next = new Set(checkedIngredients)
        next.has(key) ? next.delete(key) : next.add(key)
        setCheckedIngredients(next)
    }

    const totalIngCount = recipe.ingredients.reduce((acc, g) => acc + g.items.length, 0)
    const checkedIngCount = checkedIngredients.size

    return (
        <main style={{ minHeight: '100vh', background: '#FAFAF7', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=Playfair+Display:ital,wght@0,700;1,600&display=swap');
                * { box-sizing: border-box; }
                .step-item { display: flex; gap: 16px; padding: 18px 0; border-bottom: 1px solid rgba(75,46,26,0.06); cursor: pointer; transition: opacity 0.25s; }
                .step-item.done { opacity: 0.38; }
                .step-num { width: 34px; height: 34px; border-radius: 50%; background: rgba(217,119,6,0.1); color: #D97706; font-weight: 700; font-size: 13px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: all 0.25s; }
                .step-item.done .step-num { background: #10b981; color: white; }
                .counter-btn { width: 28px; height: 28px; border-radius: 50%; border: 1.5px solid rgba(75,46,26,0.18); background: white; color: #4B2E1A; font-size: 16px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.15s; line-height: 1; padding: 0; }
                .counter-btn:hover { border-color: #D97706; color: #D97706; }
                .ing-row { display: flex; align-items: center; gap: 10px; padding: 7px 0; border-bottom: 1px solid rgba(75,46,26,0.05); cursor: pointer; user-select: none; transition: opacity 0.2s; }
                .ing-row:last-child { border-bottom: none; }
                .ing-row.checked { opacity: 0.38; }
                .checkbox { width: 17px; height: 17px; border-radius: 5px; border: 1.5px solid rgba(75,46,26,0.22); background: white; flex-shrink: 0; display: flex; align-items: center; justify-content: center; transition: all 0.18s; }
                .checkbox.checked { background: #D97706; border-color: #D97706; }
                .ing-scroll::-webkit-scrollbar { width: 4px; }
                .ing-scroll::-webkit-scrollbar-track { background: transparent; }
                .ing-scroll::-webkit-scrollbar-thumb { background: rgba(75,46,26,0.12); border-radius: 100px; }
            `}</style>

            {/* ── STICKY TITLE BAR ── */}
            <AnimatePresence>
                {showStickyTitle && (
                    <motion.div
                        initial={{ opacity: 0, y: -16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.22 }}
                        style={{
                            position: 'fixed', top: 80, left: 0, right: 0, zIndex: 45,
                            background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(20px)',
                            borderBottom: '1px solid rgba(75,46,26,0.08)',
                            padding: '10px 24px',
                            boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                        }}
                    >
                        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
                                <Link href="/recipes" style={{ fontSize: 12, color: 'rgba(75,46,26,0.4)', textDecoration: 'none', fontWeight: 600, flexShrink: 0 }}>← Recipes</Link>
                                <span style={{ color: 'rgba(75,46,26,0.2)' }}>›</span>
                                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 700, color: '#2D1A0E', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                    {recipe.title}
                                </h2>
                                <span style={{ fontSize: 12, color: 'rgba(75,46,26,0.35)', flexShrink: 0, fontStyle: 'italic', display: 'none' }}>{recipe.subtitle}</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
                                <span style={{ fontSize: 12, color: '#D97706', fontWeight: 700 }}>★ {recipe.rating}</span>
                                <span style={{ fontSize: 11, color: 'rgba(75,46,26,0.4)', fontWeight: 500 }}>⏱ {recipe.time}</span>
                                <span style={{ fontSize: 11, fontWeight: 700, color: DIFF_COLOR[recipe.difficulty], background: `${DIFF_COLOR[recipe.difficulty]}15`, padding: '3px 10px', borderRadius: 100 }}>{recipe.difficulty}</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ── HERO ── */}
            <div ref={heroRef} style={{ position: 'relative', height: 'clamp(300px, 42vw, 500px)', overflow: 'hidden' }}>
                <Image src={recipe.image} alt={recipe.title} fill style={{ objectFit: 'cover' }} quality={90} priority />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.72) 100%)' }} />

                <Link href="/recipes" style={{ position: 'absolute', top: 100, left: 24, color: 'white', fontSize: 12, fontWeight: 600, textDecoration: 'none', background: 'rgba(0,0,0,0.28)', backdropFilter: 'blur(8px)', padding: '7px 14px', borderRadius: 100 }}>
                    ← All Recipes
                </Link>

                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 'clamp(20px,4vw,40px)' }}>
                    <div style={{ maxWidth: 900, margin: '0 auto' }}>
                        <div style={{ display: 'flex', gap: 8, marginBottom: 10, flexWrap: 'wrap' }}>
                            {recipe.tags.map(tag => (
                                <span key={tag} style={{ background: 'rgba(255,255,255,0.14)', backdropFilter: 'blur(8px)', color: 'white', fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: 100 }}>{tag}</span>
                            ))}
                        </div>
                        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px,5vw,52px)', fontWeight: 700, color: 'white', margin: '0 0 4px', lineHeight: 1.1 }}>
                            {recipe.title}
                        </h1>
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 15, fontStyle: 'italic', margin: 0 }}>{recipe.subtitle}</p>
                    </div>
                </div>
            </div>

            {/* ── CONTENT ── */}
            <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 20px 80px' }}>

                {/* Meta bar */}
                <div style={{ background: 'white', borderRadius: 16, padding: '14px 16px', margin: '20px 0 24px', display: 'flex', gap: 0, flexWrap: 'wrap', border: '1px solid rgba(75,46,26,0.07)', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
                    {[
                        { icon: '⏱', label: 'Total', value: recipe.time },
                        { icon: '🔪', label: 'Prep', value: recipe.prepTime },
                        { icon: '🔥', label: 'Cook', value: recipe.cookTime },
                        { icon: '👤', label: 'Skill', value: recipe.difficulty, color: DIFF_COLOR[recipe.difficulty] },
                        { icon: '★', label: 'Rating', value: `${recipe.rating} (${recipe.reviews})`, color: '#D97706' },
                    ].map((item, i) => (
                        <div key={item.label} style={{ flex: '1 1 90px', padding: '0 12px', borderLeft: i > 0 ? '1px solid rgba(75,46,26,0.08)' : 'none', textAlign: 'center' }}>
                            <div style={{ fontSize: 15, marginBottom: 2 }}>{item.icon}</div>
                            <div style={{ fontSize: 10, color: 'rgba(75,46,26,0.4)', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 2 }}>{item.label}</div>
                            <div style={{ fontSize: 13, fontWeight: 700, color: item.color ?? '#2D1A0E' }}>{item.value}</div>
                        </div>
                    ))}
                </div>

                {/* Description */}
                {recipe.description.split('\n\n').map((para, i) => (
                    <p key={i} style={{ fontSize: 16, color: 'rgba(75,46,26,0.65)', lineHeight: 1.8, margin: '0 0 16px' }}>{para}</p>
                ))}

                {/* ── TWO COLUMN ── */}
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.65fr)', gap: 22, marginTop: 28, alignItems: 'start' }}>

                    {/* ── LEFT: STICKY SCROLLABLE INGREDIENTS ── */}
                    <div style={{
                        position: 'sticky',
                        top: showStickyTitle ? 142 : 90,
                        maxHeight: `calc(100vh - ${showStickyTitle ? 158 : 106}px)`,
                        display: 'flex',
                        flexDirection: 'column',
                        background: 'white',
                        borderRadius: 20,
                        border: '1px solid rgba(75,46,26,0.07)',
                        boxShadow: '0 4px 20px rgba(75,46,26,0.06)',
                        overflow: 'hidden',
                        transition: 'top 0.25s, max-height 0.25s',
                    }}>
                        {/* Fixed header */}
                        <div style={{ padding: '18px 18px 12px', borderBottom: '1px solid rgba(75,46,26,0.07)', flexShrink: 0 }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 700, color: '#2D1A0E', margin: 0 }}>Ingredients</h2>
                                {checkedIngCount > 0 && (
                                    <span style={{ fontSize: 10, color: '#10b981', fontWeight: 700, background: 'rgba(16,185,129,0.1)', padding: '3px 9px', borderRadius: 100 }}>
                                        {checkedIngCount}/{totalIngCount}
                                    </span>
                                )}
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#FAFAF7', borderRadius: 10, padding: '7px 11px' }}>
                                <span style={{ fontSize: 12, color: 'rgba(75,46,26,0.5)', fontWeight: 600, flex: 1 }}>Servings</span>
                                <button className="counter-btn" onClick={() => setServings(Math.max(1, servings - 1))}>−</button>
                                <span style={{ fontSize: 14, fontWeight: 700, color: '#2D1A0E', minWidth: 20, textAlign: 'center' }}>{servings}</span>
                                <button className="counter-btn" onClick={() => setServings(servings + 1)}>+</button>
                            </div>
                        </div>

                        {/* Scrollable list */}
                        <div className="ing-scroll" style={{ overflowY: 'auto', padding: '10px 18px 14px', flex: 1 }}>
                            {recipe.ingredients.map(group => (
                                <div key={group.group} style={{ marginBottom: 14 }}>
                                    <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#D97706', marginBottom: 5, paddingBottom: 4, borderBottom: '1px solid rgba(217,119,6,0.1)' }}>
                                        {group.group}
                                    </div>
                                    {group.items.map(item => {
                                        const key = `${group.group}:${item}`
                                        const checked = checkedIngredients.has(key)
                                        return (
                                            <div key={item} className={`ing-row ${checked ? 'checked' : ''}`} onClick={() => toggleIngredient(key)}>
                                                <div className={`checkbox ${checked ? 'checked' : ''}`}>
                                                    {checked && (
                                                        <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                                                            <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    )}
                                                </div>
                                                <span style={{ fontSize: 13, color: checked ? 'rgba(75,46,26,0.3)' : 'rgba(75,46,26,0.78)', textDecoration: checked ? 'line-through' : 'none', flex: 1, lineHeight: 1.4, transition: 'all 0.2s' }}>
                                                    {item}
                                                </span>
                                            </div>
                                        )
                                    })}
                                </div>
                            ))}

                            {/* Ingredient progress */}
                            <div style={{ marginTop: 6, paddingTop: 10, borderTop: '1px solid rgba(75,46,26,0.06)' }}>
                                <div style={{ height: 3, background: 'rgba(75,46,26,0.07)', borderRadius: 100, overflow: 'hidden' }}>
                                    <div style={{ height: '100%', width: `${(checkedIngCount / totalIngCount) * 100}%`, background: 'linear-gradient(90deg, #D97706, #F59E0B)', borderRadius: 100, transition: 'width 0.3s ease' }} />
                                </div>
                                <p style={{ fontSize: 11, color: checkedIngCount === totalIngCount ? '#10b981' : 'rgba(75,46,26,0.35)', margin: '5px 0 0', textAlign: 'right', fontWeight: checkedIngCount === totalIngCount ? 700 : 400 }}>
                                    {checkedIngCount === totalIngCount && totalIngCount > 0 ? '✅ All ingredients ready!' : `${totalIngCount - checkedIngCount} remaining`}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ── RIGHT: STEPS ── */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: '#2D1A0E', margin: 0 }}>Instructions</h2>
                            <span style={{ fontSize: 12, color: 'rgba(75,46,26,0.38)', fontWeight: 500 }}>{checkedSteps.size}/{recipe.steps.length} done</span>
                        </div>

                        <div style={{ height: 4, background: 'rgba(75,46,26,0.07)', borderRadius: 100, marginBottom: 18, overflow: 'hidden' }}>
                            <div style={{ height: '100%', width: `${(checkedSteps.size / recipe.steps.length) * 100}%`, background: 'linear-gradient(90deg, #D97706, #F59E0B)', borderRadius: 100, transition: 'width 0.4s ease' }} />
                        </div>

                        {recipe.steps.map((step, i) => (
                            <div key={i} className={`step-item ${checkedSteps.has(i) ? 'done' : ''}`} onClick={() => toggleStep(i)}>
                                <div className="step-num">{checkedSteps.has(i) ? '✓' : i + 1}</div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontSize: 15, fontWeight: 600, color: '#2D1A0E', marginBottom: 6 }}>{step.title}</div>
                                    <p style={{ fontSize: 14, color: 'rgba(75,46,26,0.65)', lineHeight: 1.72, margin: 0 }}>{step.body}</p>
                                    {step.tip && (
                                        <div style={{ background: 'rgba(217,119,6,0.07)', borderLeft: '3px solid #D97706', borderRadius: '0 8px 8px 0', padding: '8px 12px', marginTop: 10 }}>
                                            <span style={{ fontSize: 12, color: '#92580A', fontWeight: 700 }}>💡 Tip: </span>
                                            <span style={{ fontSize: 12, color: '#92580A' }}>{step.tip}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* Nutrition */}
                        <div style={{ background: 'white', borderRadius: 20, padding: '20px', marginTop: 22, border: '1px solid rgba(75,46,26,0.07)' }}>
                            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: '#2D1A0E', margin: '0 0 14px' }}>Nutrition per serving</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 8 }}>
                                {recipe.nutrition.map(n => (
                                    <div key={n.label} style={{ textAlign: 'center', background: '#FAFAF7', borderRadius: 12, padding: '11px 6px' }}>
                                        <div style={{ fontSize: 14, fontWeight: 700, color: '#2D1A0E' }}>{n.value}</div>
                                        <div style={{ fontSize: 10, color: 'rgba(75,46,26,0.45)', fontWeight: 600, marginTop: 2 }}>{n.label}</div>
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