// ─────────────────────────────────────────────────────────────
//  components/RecipeSchema.tsx
//  FlavorNest Vietnam — Schema.org Recipe injection component
//
//  Injects both Recipe + BreadcrumbList JSON-LD into the page.
//  This component is a Server Component (no 'use client').
//
//  Usage:
//    import { RecipeSchema } from "@/components/RecipeSchema";
//    <RecipeSchema recipe={recipe} />
//
//  Place this at the top of the recipe detail page, right after
//  the opening <main> tag. Google will parse it automatically
//  when crawling the page.
// ─────────────────────────────────────────────────────────────

import type { RecipeDetailed } from "@/data/types";
import {
    generateRecipeSchema,
    generateBreadcrumbSchema,
} from "@/lib/recipe-schema";

interface RecipeSchemaProps {
    recipe: RecipeDetailed;
}

export function RecipeSchema({ recipe }: RecipeSchemaProps) {
    const recipeSchema = generateRecipeSchema(recipe);
    const breadcrumbSchema = generateBreadcrumbSchema(recipe);

    return (
        <>
            {/* Recipe structured data — enables Rich Results */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(recipeSchema),
                }}
            />

            {/* Breadcrumb structured data — enables breadcrumb trail */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema),
                }}
            />
        </>
    );
}