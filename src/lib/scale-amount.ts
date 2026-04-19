// ─────────────────────────────────────────────────────────────
//  lib/scale-amount.ts
//  FlavorNest Vietnam — Ingredient amount scaler
//
//  Parses ingredient amount strings and scales them by a factor.
//  Examples:
//    "500 g (1.1 lb)"    × 2  → "1000 g (2.2 lb)"
//    "1/2 tsp"           × 2  → "1 tsp"
//    "1 thumb-sized piece" × 2 → "2 thumb-sized pieces"
//    "1 tsp to taste"    × 2  → "1 tsp to taste"  (keeps "to taste")
//    "to taste"          × 2  → "to taste"         (no numbers, unchanged)
// ─────────────────────────────────────────────────────────────

// ── Words that indicate "don't scale this" ──
const UNSCALABLE_MARKERS = [
    "to taste",
    "as needed",
    "for garnish",
    "optional",
    "a pinch",
    "a dash",
    "a splash",
];

// ── Convert "1/2" or "1 1/2" to decimal ──
function parseFraction(str: string): number | null {
    const trimmed = str.trim();

    // Mixed: "1 1/2"
    const mixedMatch = trimmed.match(/^(\d+)\s+(\d+)\/(\d+)$/);
    if (mixedMatch) {
        const [, whole, num, den] = mixedMatch;
        return parseInt(whole, 10) + parseInt(num, 10) / parseInt(den, 10);
    }

    // Simple fraction: "1/2"
    const fractionMatch = trimmed.match(/^(\d+)\/(\d+)$/);
    if (fractionMatch) {
        const [, num, den] = fractionMatch;
        return parseInt(num, 10) / parseInt(den, 10);
    }

    // Decimal or whole: "1.5" or "500"
    const numMatch = trimmed.match(/^(\d+(?:\.\d+)?)$/);
    if (numMatch) {
        return parseFloat(numMatch[1]);
    }

    return null;
}

// ── Format number back to readable string ──
function formatNumber(n: number): string {
    // Round to avoid floating point ugliness
    const rounded = Math.round(n * 100) / 100;

    // Whole number
    if (Number.isInteger(rounded)) {
        return String(rounded);
    }

    // Try common fractions for small numbers (< 10)
    if (rounded < 10) {
        const fractionMap: Record<string, string> = {
            "0.25": "1/4",
            "0.33": "1/3",
            "0.5": "1/2",
            "0.67": "2/3",
            "0.75": "3/4",
        };

        const whole = Math.floor(rounded);
        const decimal = Math.round((rounded - whole) * 100) / 100;
        const decimalStr = decimal.toFixed(2).replace(/0+$/, "").replace(/\.$/, "");

        if (fractionMap[decimalStr]) {
            return whole > 0 ? `${whole} ${fractionMap[decimalStr]}` : fractionMap[decimalStr];
        }
    }

    // Fallback: decimal with 1-2 places
    return rounded.toFixed(rounded < 1 ? 2 : 1).replace(/\.?0+$/, "");
}

// ── Scale all numbers inside a string by factor ──
function scaleNumbersInString(str: string, factor: number): string {
    // Match: mixed fractions "1 1/2", simple fractions "1/2", decimals "1.5", whole "500"
    // Preserve leading/trailing whitespace and surrounding text

    // Replace mixed fractions first (longest match)
    let result = str.replace(
        /(?<![\w\/])(\d+)\s+(\d+)\/(\d+)(?![\w\/])/g,
        (_match, whole, num, den) => {
            const value = parseInt(whole, 10) + parseInt(num, 10) / parseInt(den, 10);
            return formatNumber(value * factor);
        }
    );

    // Then simple fractions
    result = result.replace(
        /(?<![\w\d])(\d+)\/(\d+)(?![\w\d])/g,
        (_match, num, den) => {
            const value = parseInt(num, 10) / parseInt(den, 10);
            return formatNumber(value * factor);
        }
    );

    // Then decimals and whole numbers
    result = result.replace(
        /(?<![\w\/\d.])(\d+(?:\.\d+)?)(?![\w\d\/])/g,
        (_match, numStr) => {
            const value = parseFloat(numStr);
            return formatNumber(value * factor);
        }
    );

    return result;
}

// ─────────────────────────────────────────────────────────────
//  Main scaler — scale an amount string by factor
// ─────────────────────────────────────────────────────────────
export function scaleAmount(amount: string, factor: number): string {
    // No scaling needed
    if (factor === 1) return amount;

    // Check if this amount is "unscalable" (to taste, as needed, etc.)
    const lowerAmount = amount.toLowerCase();
    const isUnscalable = UNSCALABLE_MARKERS.some((marker) =>
        lowerAmount.includes(marker)
    );

    if (isUnscalable) {
        // Return original, don't touch numbers
        return amount;
    }

    // Check if any number exists at all
    const hasNumber = /\d/.test(amount);
    if (!hasNumber) {
        return amount;
    }

    // Scale all numbers
    return scaleNumbersInString(amount, factor);
}

// ─────────────────────────────────────────────────────────────
//  Helper — check if an amount has scalable numbers
//  Used by UI to grey out non-scalable items visually
// ─────────────────────────────────────────────────────────────
export function isScalable(amount: string): boolean {
    if (!/\d/.test(amount)) return false;

    const lowerAmount = amount.toLowerCase();
    return !UNSCALABLE_MARKERS.some((marker) => lowerAmount.includes(marker));
}