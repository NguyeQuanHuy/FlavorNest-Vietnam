'use client'

import { useState, useCallback } from 'react'

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

interface Props {
    recipe: RecipeData
}

export default function RecipeContent({ recipe }: Props) {
    const [servings, setServings] = useState(recipe.servings)
    const [checkedSteps, setCheckedSteps] = useState<Set<number>>(new Set())

    const toggleStep = useCallback((i: number) => {
        setCheckedSteps(prev => {
            const next = new Set(prev)
            next.has(i) ? next.delete(i) : next.add(i)
            return next
        })
    }, [])

    const ratio = servings / recipe.servings

    return (
        <>
            <style>{`
                .step-item { display: flex; gap: 20px; padding: 20px 0; border-bottom: 1px solid rgba(75,46,26,0.06); cursor: pointer; transition: opacity 0.2s; }
                .step-item.done { opacity: 0.45; }
                .step-num { width: 36px; height: 36px; border-radius: 50%; background: rgba(217,119,6,0.1); color: #D97706; font-weight: 700; font-size: 14px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: all 0.2s; }
                .step-item.done .step-num { background: #10b981; color: white; }
                .counter-btn { width: 32px; height: 32px; border-radius: 50%; border: 1.5px solid rgba(75,46,26,0.18); background: white; color: #4B2E1A; font-size: 18px; display: flex; align-items: center; justify-content: center; cursor: pointer; font-weight: 300; transition: all 0.15s; }
                .counter-btn:hover { border-color: #D97706; color: #D97706; }
                .ing-item { display: flex; justify-content: space-between; align-items: center; padding: 9px 0; border-bottom: 1px solid rgba(75,46,26,0.05); font-size: 14px; }
            `}</style>

            {/* Two columns: Ingredients + Steps */}
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.5fr)', gap: 28 }}>

                {/* Left: Ingredients */}
                <div style={{ background: 'white', borderRadius: 20, padding: '24px', border: '1px solid rgba(75,46,26,0.07)', height: 'fit-content', position: 'sticky', top: 96 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: '#2D1A0E', margin: 0 }}>Ingredients</h2>
                        {/* Serving adjuster */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            <button className="counter-btn" onClick={() => setServings(s => Math.max(1, s - 1))}>−</button>
                            <span style={{ fontSize: 14, fontWeight: 700, color: '#2D1A0E', minWidth: 52, textAlign: 'center' }}>{servings} servings</span>
                            <button className="counter-btn" onClick={() => setServings(s => s + 1)}>+</button>
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

                {/* Right: Steps + Nutrition */}
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
        </>
    )
}
