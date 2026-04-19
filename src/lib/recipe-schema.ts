// ─────────────────────────────────────────────────────────────
//  lib/recipe-schema.ts
//  FlavorNest Vietnam — Google Schema.org Recipe JSON-LD helper
//
//  Converts a RecipeDetailed object into structured data
//  following schema.org/Recipe spec for Google Rich Results.
//
//  Usage in a recipe page:
//    import { generateRecipeSchema } from "@/lib/recipe-schema";
//    const schema = generateRecipeSchema(recipe);
//    // Then inject <script type="application/ld+json">
//    // with JSON.stringify(schema)
//
//  Ref: https://developers.google.com/search/docs/appearance/structured-data/recipe
// ─────────────────────────────────────────────────────────────

import type { RecipeDetailed } from "@/data/types";

// ── Site config ──
const SITE_URL = "https://flavor-nest-vietnam.vercel.app";
const ORGANIZATION_NAME = "FlavorNest Vietnam";

// ── Map difficulty to ISO-style text Google understands ──
const mapDifficulty = (difficulty: string): string => {
    const map: Record<string, string> = {
        Easy: "Easy",
        Medium: "Medium",
        Hard: "Advanced",
    };
    return map[difficulty] || "Medium";
};

// ── Convert "1 hr 30 min" → ISO 8601 "PT1H30M" ──
// Google requires ISO 8601 duration format for all time fields.
export const toISODuration = (time: string): string => {
    if (!time) return "PT0M";

    const hrMatch = time.match(/(\d+)\s*hr/i);
    const minMatch = time.match(/(\d+)\s*min/i);

    const hours = hrMatch ? parseInt(hrMatch[1], 10) : 0;
    const minutes = minMatch ? parseInt(minMatch[1], 10) : 0;

    let iso = "PT";
    if (hours > 0) iso += `${hours}H`;
    if (minutes > 0) iso += `${minutes}M`;
    if (hours === 0 && minutes === 0) iso = "PT0M";

    return iso;
};

// ── Flatten ingredient groups into flat string array ──
// Google expects each ingredient as a full string like "1 kg pork bones".
const flattenIngredients = (recipe: RecipeDetailed): string[] => {
    const result: string[] = [];

    for (const group of recipe.ingredients) {
        for (const item of group.items) {
            const parts = [item.amount, item.name].filter(Boolean);
            result.push(parts.join(" "));
        }
    }

    return result;
};

// ── Convert instructions into HowToStep format ──
const formatInstructions = (recipe: RecipeDetailed) => {
    return recipe.instructions.map((step) => ({
        "@type": "HowToStep" as const,
        name: step.title,
        text: step.description,
        position: step.step,
        // Google shows this in the cooking timer UI when present
        ...(step.duration && { duration: toISODuration(step.duration) }),
    }));
};

// ── Format nutrition data (per serving) ──
const formatNutrition = (recipe: RecipeDetailed) => {
    if (!recipe.nutrition) return undefined;

    return {
        "@type": "NutritionInformation" as const,
        calories: `${recipe.nutrition.calories} calories`,
        proteinContent: recipe.nutrition.protein,
        fatContent: recipe.nutrition.fat,
        carbohydrateContent: recipe.nutrition.carbs,
        ...(recipe.nutrition.sodium && { sodiumContent: recipe.nutrition.sodium }),
        ...(recipe.nutrition.fiber && { fiberContent: recipe.nutrition.fiber }),
        servingSize: "1 serving",
    };
};

// ─────────────────────────────────────────────────────────────
//  Main generator — returns the full JSON-LD object
// ─────────────────────────────────────────────────────────────
export function generateRecipeSchema(recipe: RecipeDetailed) {
    const recipeUrl = `${SITE_URL}/recipes/${recipe.slug}`;

    return {
        "@context": "https://schema.org",
        "@type": "Recipe",

        // Identity
        name: recipe.title,
        alternateName: recipe.subtitle,
        url: recipeUrl,
        mainEntityOfPage: recipeUrl,

        // Media
        image: [recipe.image],
        ...(recipe.video && {
            video: {
                "@type": "VideoObject",
                name: recipe.title,
                description: recipe.shortDescription,
                thumbnailUrl: recipe.image,
                contentUrl: recipe.video,
            },
        }),

        // Descriptions
        description: recipe.shortDescription,

        // Authorship
        author: {
            "@type": "Organization",
            name: recipe.author || ORGANIZATION_NAME,
            url: SITE_URL,
        },
        publisher: {
            "@type": "Organization",
            name: ORGANIZATION_NAME,
            url: SITE_URL,
            logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}/logo.png`,
            },
        },

        // Dates (ISO 8601)
        datePublished: recipe.datePublished,
        dateModified: recipe.dateModified || recipe.datePublished,

        // Timing (ISO 8601 durations)
        prepTime: toISODuration(recipe.prepTime),
        cookTime: toISODuration(recipe.cookTime),
        totalTime: toISODuration(recipe.totalTime),

        // Classification
        recipeCategory: recipe.category,
        recipeCuisine: recipe.cuisine,
        recipeYield: recipe.yield,
        keywords: recipe.keywords.join(", "),
        suitableForDiet: [],
        cookingMethod: recipe.category === "Soup" ? "Simmering" : undefined,

        // Difficulty (not standard schema but Google accepts it)
        ...(recipe.difficulty && {
            difficulty: mapDifficulty(recipe.difficulty),
        }),

        // Ratings (important for Rich Results)
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: recipe.rating.toFixed(1),
            reviewCount: recipe.ratingCount,
            bestRating: "5",
            worstRating: "1",
        },

        // Ingredients (flat string array, Google requirement)
        recipeIngredient: flattenIngredients(recipe),

        // Instructions (HowToStep format)
        recipeInstructions: formatInstructions(recipe),

        // Nutrition (per serving)
        ...(recipe.nutrition && { nutrition: formatNutrition(recipe) }),
    };
}

// ─────────────────────────────────────────────────────────────
//  Breadcrumb schema — helps Google show breadcrumb trail
//  in search results (e.g. Home > Recipes > Hue Beef Soup)
// ─────────────────────────────────────────────────────────────
export function generateBreadcrumbSchema(recipe: RecipeDetailed) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: SITE_URL,
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Recipes",
                item: `${SITE_URL}/recipes`,
            },
            {
                "@type": "ListItem",
                position: 3,
                name: recipe.title,
                item: `${SITE_URL}/recipes/${recipe.slug}`,
            },
        ],
    };
}