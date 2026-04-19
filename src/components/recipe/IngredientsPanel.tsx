"use client";

// ─────────────────────────────────────────────────────────────
//  components/recipe/IngredientsPanel.tsx
//  FlavorNest Vietnam — Interactive ingredients sidebar
//
//  Features:
//    - Scale servings (± buttons) → all amounts auto-recalculate
//    - Checkbox tick-off for each ingredient (strikethrough)
//    - localStorage persistence for checked state + servings
//    - Reset button for checked items
//    - "to taste" / "as needed" items stay unchanged when scaling
// ─────────────────────────────────────────────────────────────

import { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { IngredientGroup } from "@/data/types";
import { scaleAmount } from "@/lib/scale-amount";

interface IngredientsPanelProps {
    ingredients: IngredientGroup[];
    slug: string;
    baseServings: number;
    yieldLabel: string;
}

const MIN_SERVINGS = 1;
const MAX_SERVINGS = 24;

export function IngredientsPanel({
    ingredients,
    slug,
    baseServings,
    yieldLabel,
}: IngredientsPanelProps) {
    const [servings, setServings] = useState(baseServings);
    const [checkedKeys, setCheckedKeys] = useState<Set<string>>(new Set());
    const [isHydrated, setIsHydrated] = useState(false);

    // ─ Derived: scale factor ─
    const scaleFactor = servings / baseServings;

    // ─ localStorage keys (scoped per recipe) ─
    const checkedKey = `fn_checked_${slug}`;
    const servingsKey = `fn_servings_${slug}`;

    // ─ Hydrate from localStorage on mount ─
    useEffect(() => {
        try {
            // Load checked items
            const savedChecked = localStorage.getItem(checkedKey);
            if (savedChecked) {
                const parsed: string[] = JSON.parse(savedChecked);
                setCheckedKeys(new Set(parsed));
            }

            // Load custom servings
            const savedServings = localStorage.getItem(servingsKey);
            if (savedServings) {
                const parsed = parseInt(savedServings, 10);
                if (!isNaN(parsed) && parsed >= MIN_SERVINGS && parsed <= MAX_SERVINGS) {
                    setServings(parsed);
                }
            }
        } catch {
            // ignore storage errors
        }
        setIsHydrated(true);
    }, [checkedKey, servingsKey]);

    // ─ Persist checked items ─
    useEffect(() => {
        if (!isHydrated) return;
        try {
            if (checkedKeys.size === 0) {
                localStorage.removeItem(checkedKey);
            } else {
                localStorage.setItem(checkedKey, JSON.stringify(Array.from(checkedKeys)));
            }
        } catch { }
    }, [checkedKeys, checkedKey, isHydrated]);

    // ─ Persist servings ─
    useEffect(() => {
        if (!isHydrated) return;
        try {
            if (servings === baseServings) {
                localStorage.removeItem(servingsKey);
            } else {
                localStorage.setItem(servingsKey, String(servings));
            }
        } catch { }
    }, [servings, baseServings, servingsKey, isHydrated]);

    // ─ Build unique key for each ingredient (groupIdx_itemIdx) ─
    const toggleChecked = useCallback((key: string) => {
        setCheckedKeys((prev) => {
            const next = new Set(prev);
            if (next.has(key)) next.delete(key);
            else next.add(key);
            return next;
        });
    }, []);

    const clearChecked = useCallback(() => {
        setCheckedKeys(new Set());
    }, []);

    const resetServings = useCallback(() => {
        setServings(baseServings);
    }, [baseServings]);

    // ─ Servings controls ─
    const canDecrement = servings > MIN_SERVINGS;
    const canIncrement = servings < MAX_SERVINGS;

    // ─ Yield scaling label (e.g. "4 bowls" → "8 bowls") ─
    const scaledYield = useMemo(() => {
        return scaleAmount(yieldLabel, scaleFactor);
    }, [yieldLabel, scaleFactor]);

    const hasChecked = checkedKeys.size > 0;
    const hasCustomServings = servings !== baseServings;

    return (
        <aside className="lg:sticky lg:top-24 h-fit">
            {/* ── Section eyebrow ── */}
            <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-7 bg-fn-amber" />
                <span className="text-fn-amber uppercase tracking-fn-wide text-fn-xs font-semibold">
                    Ingredients
                </span>
            </div>
            <h2 className="font-heading text-3xl text-fn-brown-night mb-6">
                What you&apos;ll need
            </h2>

            {/* ── Servings scaler ── */}
            <div className="mb-8 p-5 rounded-fn-2xl bg-white border border-fn-brown/10 shadow-fn-soft">
                <div className="flex items-center justify-between mb-3">
                    <div>
                        <div className="text-fn-xs uppercase tracking-fn-wide text-fn-brown/50 font-semibold">
                            Servings
                        </div>
                        <div className="text-fn-xs text-fn-brown/40 mt-0.5">{scaledYield}</div>
                    </div>

                    {hasCustomServings && (
                        <button
                            onClick={resetServings}
                            className="text-fn-xs text-fn-amber hover:text-fn-amber-deep font-semibold transition-colors"
                            aria-label="Reset servings to original"
                        >
                            ↻ Reset
                        </button>
                    )}
                </div>

                <div className="flex items-center justify-center gap-4">
                    <motion.button
                        onClick={() => canDecrement && setServings((s) => s - 1)}
                        whileTap={{ scale: 0.9 }}
                        disabled={!canDecrement}
                        className="w-10 h-10 rounded-full bg-fn-beige hover:bg-fn-amber hover:text-white border border-fn-brown/10 flex items-center justify-center text-fn-xl font-bold text-fn-brown-deep transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                        aria-label="Decrease servings"
                    >
                        −
                    </motion.button>

                    <motion.div
                        key={servings}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        className="font-heading text-3xl font-bold text-fn-brown-night min-w-[2.5rem] text-center"
                    >
                        {servings}
                    </motion.div>

                    <motion.button
                        onClick={() => canIncrement && setServings((s) => s + 1)}
                        whileTap={{ scale: 0.9 }}
                        disabled={!canIncrement}
                        className="w-10 h-10 rounded-full bg-fn-beige hover:bg-fn-amber hover:text-white border border-fn-brown/10 flex items-center justify-center text-fn-xl font-bold text-fn-brown-deep transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                        aria-label="Increase servings"
                    >
                        +
                    </motion.button>
                </div>
            </div>

            {/* ── Ingredient groups ── */}
            {ingredients.map((group, groupIdx) => (
                <div key={group.section} className="mb-8">
                    <h3 className="font-heading text-fn-lg font-semibold text-fn-brown-deep mb-3 pb-2 border-b border-fn-brown/10">
                        {group.section}
                    </h3>

                    <ul className="space-y-0.5">
                        {group.items.map((ingredient, itemIdx) => {
                            const key = `${groupIdx}_${itemIdx}`;
                            const isChecked = checkedKeys.has(key);
                            const scaledAmount = scaleAmount(ingredient.amount, scaleFactor);

                            return (
                                <li key={key}>
                                    <button
                                        onClick={() => toggleChecked(key)}
                                        className={`
                      w-full flex items-start gap-3 px-2 py-2 rounded-fn-md
                      text-left transition-all
                      hover:bg-fn-beige
                      ${isChecked ? "opacity-40" : "opacity-100"}
                    `}
                                        aria-label={`Toggle ${ingredient.name}`}
                                    >
                                        {/* Checkbox */}
                                        <span
                                            className={`
                        flex-shrink-0 mt-1 w-[18px] h-[18px] rounded-[5px]
                        border-2 flex items-center justify-center transition-all
                        ${isChecked
                                                    ? "bg-fn-amber border-fn-amber"
                                                    : "border-fn-brown/30 hover:border-fn-amber"
                                                }
                      `}
                                        >
                                            {isChecked && (
                                                <motion.svg
                                                    initial={{ scale: 0, opacity: 0 }}
                                                    animate={{ scale: 1, opacity: 1 }}
                                                    transition={{ duration: 0.15 }}
                                                    width="10"
                                                    height="10"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="white"
                                                    strokeWidth="4"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <polyline points="20 6 9 17 4 12" />
                                                </motion.svg>
                                            )}
                                        </span>

                                        {/* Content */}
                                        <div className={`flex-1 text-fn-base text-fn-brown/85 leading-snug ${isChecked ? "line-through" : ""}`}>
                                            <span className="font-semibold text-fn-brown-night font-mono text-fn-sm mr-2">
                                                {scaledAmount}
                                            </span>
                                            <span>{ingredient.name}</span>
                                            {ingredient.nameVi && (
                                                <em className="text-fn-amber italic ml-1 text-fn-sm not-italic-on-check">
                                                    ({ingredient.nameVi})
                                                </em>
                                            )}
                                            {ingredient.note && (
                                                <span className="block text-fn-xs text-fn-brown/45 mt-0.5 italic">
                                                    {ingredient.note}
                                                </span>
                                            )}
                                        </div>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ))}

            {/* ── Clear checked button ── */}
            <AnimatePresence>
                {hasChecked && (
                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        className="mt-4"
                    >
                        <button
                            onClick={clearChecked}
                            className="w-full px-4 py-2.5 rounded-full border border-fn-amber/30 text-fn-amber hover:bg-fn-amber hover:text-white hover:border-fn-amber font-body font-semibold text-fn-sm transition-all"
                        >
                            ✕ Clear {checkedKeys.size} checked {checkedKeys.size === 1 ? "item" : "items"}
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </aside>
    );
}