// ─────────────────────────────────────────────────────────────
//  data/types.ts
//  FlavorNest Vietnam — Shared TypeScript types for recipes
//
//  Extends Recipe from recipes.ts with full schema for:
//  - Google Schema.org Recipe Rich Results
//  - Detailed cooking pages with ingredients + instructions
//  - Bilingual support (English content + Vietnamese dish names)
// ─────────────────────────────────────────────────────────────

import type { Difficulty, Category } from "./recipes";

// ── Ingredient structure ──
export interface Ingredient {
    name: string;              // "Pork bones"
    nameVi?: string;           // "Xương heo" (Vietnamese name, optional)
    amount: string;            // "1 kg (2.2 lb)"
    note?: string;             // "ask butcher for marrow bones"
}

// ── Ingredients grouped by section ──
export interface IngredientGroup {
    section: string;           // "For the broth" | "For toppings" | "For garnish"
    items: Ingredient[];
}

// ── Cooking instruction step ──
export interface InstructionStep {
    step: number;              // 1, 2, 3...
    title: string;             // "Prepare the broth"
    description: string;       // Full paragraph instructions
    duration?: string;         // "20 min" (optional timer)
    tip?: string;              // Inline chef tip (optional)
}

// ── Nutrition facts ──
export interface Nutrition {
    calories: number;          // 420
    protein: string;           // "28 g"
    fat: string;               // "12 g"
    carbs: string;             // "48 g"
    sodium?: string;           // "980 mg" (optional)
    fiber?: string;            // "3 g" (optional)
}

// ── Full recipe with cooking details ──
export interface RecipeDetailed {
    // ─ Identity ─
    slug: string;
    title: string;             // English title — "Hue Spicy Beef Noodle Soup"
    subtitle: string;          // Vietnamese name — "Bún Bò Huế"

    // ─ Descriptions ─
    shortDescription: string;  // 1-2 sentences, for cards
    description: string;       // 2-3 paragraphs, hero story
    storySnippet?: string;     // Personal/cultural anecdote (optional)

    // ─ Media ─
    image: string;
    imageAlt: string;
    video?: string;            // YouTube URL (optional)

    // ─ Timing ─
    prepTime: string;          // "30 min"
    cookTime: string;          // "2 hrs 30 min"
    totalTime: string;         // "3 hrs"

    // ─ Metadata ─
    servings: number;
    yield: string;             // "4 bowls" | "12 buns"
    difficulty: Difficulty;
    category: Exclude<Category, "All">;
    cuisine: string;           // "Vietnamese"

    // ─ Engagement ─
    rating: number;            // 4.9
    ratingCount: number;       // 324
    tags: string[];
    isFeatured?: boolean;
    isNew?: boolean;

    // ─ Cooking data ─
    ingredients: IngredientGroup[];
    instructions: InstructionStep[];
    tips?: string[];           // Chef's secrets (optional)
    variations?: string[];     // Regional/dietary variants (optional)

    // ─ Nutrition (per serving) ─
    nutrition?: Nutrition;

    // ─ SEO ─
    keywords: string[];        // ["bun bo hue recipe", "vietnamese beef soup", ...]

    // ─ Publishing ─
    datePublished: string;     // "2026-04-19" (ISO format)
    dateModified?: string;     // "2026-04-19"
    author: string;            // "FlavorNest Vietnam"
}