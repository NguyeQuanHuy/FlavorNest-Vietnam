'use client'

// ─────────────────────────────────────────────────────────────────────────────
//  app/menu-decoder/_components/ComposedDishCard.tsx
//  Card for a dish that is not in our list, explained from its menu words
//  (src/data/menu-compose.ts): what it is, what it's made with, typical
//  allergens, spice level — clearly labelled as a best guess.
// ─────────────────────────────────────────────────────────────────────────────

import Image from 'next/image'
import { Flame, Leaf, Info, ChevronRight } from 'lucide-react'
import { ALLERGEN_INFO, DISHES, type Dish } from '@/data/menu-decoder'
import type { ComposedDish } from '@/data/menu-compose'
import type { DishLinks } from './MenuDecoderClient'

const serif = { fontFamily: "'Playfair Display', Georgia, serif" }
const SPICE_LABEL = ['Mild', 'A little heat', 'Spicy', 'Very spicy'] as const

/** "12. Bún bò xào 13,90 €" → "Bún bò xào" */
export const cleanMenuLine = (line: string) =>
    line.replace(/^\s*[\dA-Za-z]{1,3}[.)]\s+/, '').replace(/\d+[.,]\d{2}\s*(€|eur)?/gi, '').replace(/\s{2,}/g, ' ').trim()

export default function ComposedDishCard({ dish, links, onOpenDish, dark = false }: {
    dish: ComposedDish
    links: DishLinks
    onOpenDish?: (d: Dish) => void
    dark?: boolean
}) {
    const similar = dish.similar ? DISHES.find(d => d.id === dish.similar) : undefined
    const img = similar ? links[similar.id]?.image : undefined
    const ink = dark ? '#fff' : '#2D1A0E'
    const soft = dark ? 'rgba(245,237,227,0.7)' : 'rgba(75,46,26,0.65)'

    return (
        <div className="rounded-2xl p-3.5" style={{ background: dark ? '#fff' : '#fff', border: '1px solid rgba(75,46,26,0.08)' }}>
            <div className="flex gap-3.5">
                <span className="relative flex h-[76px] w-[76px] flex-shrink-0 items-center justify-center overflow-hidden rounded-xl" style={{ background: 'linear-gradient(135deg,#FDF4E7,#F5E1C8)' }}>
                    {img
                        ? <Image src={img} alt="" fill sizes="152px" className="object-cover opacity-90" />
                        : <span className="text-[32px]" aria-hidden>{dish.emoji}</span>}
                    {img && <span className="absolute inset-x-0 bottom-0 bg-black/45 py-0.5 text-center text-[9px] font-semibold uppercase tracking-wide text-white">similar</span>}
                </span>
                <div className="min-w-0 flex-1">
                    <p className="flex items-center gap-1 text-[10.5px] font-bold uppercase" style={{ color: '#B45309', letterSpacing: '0.08em' }}>
                        <Info size={11} /> Explained from the menu words
                    </p>
                    <p className="text-[17px] font-bold leading-tight" style={{ ...serif, color: dark ? '#2D1A0E' : ink }}>{cleanMenuLine(dish.line)}</p>
                    <p className="mt-0.5 text-[13.5px] font-semibold leading-snug" style={{ color: '#4B2E1A' }}>{dish.title}</p>
                    {dish.note && <p className="mt-0.5 text-[11.5px] italic" style={{ color: 'rgba(75,46,26,0.5)' }}>Menu says: {cleanMenuLine(dish.note)}</p>}
                </div>
            </div>

            {dish.desc && <p className="mt-2.5 text-[13px] leading-relaxed" style={{ color: dark ? 'rgba(75,46,26,0.7)' : soft }}>{dish.desc}</p>}

            {/* spice + vegetarian */}
            <div className="mt-2.5 flex flex-wrap items-center gap-2">
                <span className="flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[12px] font-semibold" style={{ background: dish.spice ? '#FEE2E2' : '#DCFCE7', color: dish.spice ? '#B91C1C' : '#15803D' }}>
                    {dish.spice > 0 && <span className="flex">{[1, 2, 3].map(n => <Flame key={n} size={12} fill={n <= dish.spice ? '#DC2626' : 'none'} color={n <= dish.spice ? '#DC2626' : 'rgba(185,28,28,0.3)'} />)}</span>}
                    {SPICE_LABEL[dish.spice]}
                </span>
                {dish.vegetarian && (
                    <span className="flex items-center gap-1 rounded-full px-2.5 py-1 text-[12px] font-semibold" style={{ background: '#DCFCE7', color: '#15803D' }}><Leaf size={12} /> Vegetarian</span>
                )}
                {dish.spice === 0 && dish.kind === 'savory' && (
                    <span className="text-[11.5px]" style={{ color: 'rgba(75,46,26,0.5)' }}>chilli usually comes on the side</span>
                )}
            </div>

            {/* made with */}
            {dish.madeWith.length > 0 && (
                <p className="mt-2.5 text-[12.5px] leading-relaxed" style={{ color: 'rgba(75,46,26,0.75)' }}>
                    <strong style={{ color: '#4B2E1A' }}>Made with:</strong> {dish.madeWith.join(' · ')}
                </p>
            )}

            {/* allergens */}
            {(dish.allergens.length > 0 || dish.fishSauceLikely) && (
                <div className="mt-2 flex flex-wrap gap-1.5">
                    <span className="py-0.5 text-[12px] font-semibold" style={{ color: '#4B2E1A' }}>May contain:</span>
                    {dish.allergens.map(a => (
                        <span key={a} className="rounded-full px-2 py-0.5 text-[11.5px] font-semibold" style={{ background: '#FEF3C7', color: '#92400E' }}>
                            {ALLERGEN_INFO[a].emoji} {ALLERGEN_INFO[a].label} <span style={{ opacity: 0.6 }}>· {ALLERGEN_INFO[a].de}</span>
                        </span>
                    ))}
                    {dish.fishSauceLikely && (
                        <span className="rounded-full px-2 py-0.5 text-[11.5px] font-semibold" style={{ background: '#FEF3C7', color: '#92400E' }} title="Fish sauce is in almost every savoury Vietnamese dish">
                            🐟 Fish sauce (almost always) <span style={{ opacity: 0.6 }}>· Fisch</span>
                        </span>
                    )}
                </div>
            )}

            {dish.vegetarian && (
                <p className="mt-2 text-[12px]" style={{ color: '#15803D' }}>Strict vegetarian? Ask for <strong>“không nước mắm”</strong> (no fish sauce).</p>
            )}

            {dish.unknown.length > 0 && (
                <p className="mt-2 text-[11.5px]" style={{ color: 'rgba(75,46,26,0.45)' }}>Words we don’t know yet: {dish.unknown.slice(0, 4).join(', ')}</p>
            )}

            <div className="mt-2.5 flex items-center justify-between gap-2 border-t pt-2.5" style={{ borderColor: 'rgba(75,46,26,0.07)' }}>
                <p className="text-[11px] leading-snug" style={{ color: 'rgba(75,46,26,0.45)' }}>Best guess from the dish name — recipes vary, ask the staff to be sure.</p>
                {similar && onOpenDish && (
                    <button onClick={() => onOpenDish(similar)} className="flex flex-shrink-0 items-center gap-0.5 text-[12px] font-semibold" style={{ color: '#D97706' }}>
                        Similar: {similar.vi.split(' / ')[0]} <ChevronRight size={14} />
                    </button>
                )}
            </div>
        </div>
    )
}
