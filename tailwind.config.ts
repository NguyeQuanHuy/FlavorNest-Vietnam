import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            // ── Brand Colors (from FlavorNest Design System) ──
            colors: {
                // Brown scale — text, surfaces, dark sections
                "fn-brown": "#4B2E1A",          // Primary text, headings
                "fn-brown-deep": "#3F2305",     // Logo/accent variant
                "fn-brown-ink": "#2D1A0E",      // Footer background
                "fn-brown-night": "#1C1009",    // Hero overlay, darkest surface
                "fn-brown-wood": "#2A1508",     // "Popular Categories" bg
                "fn-brown-soft": "#6B4226",     // Hover states on brown text

                // Amber — accent + CTAs
                "fn-amber": "#D97706",          // Primary CTA, accent (honey)
                "fn-amber-2": "#F59E0B",        // Italic highlights, gradients
                "fn-amber-deep": "#B45309",     // CTA hover state

                // Surfaces — backgrounds, washes
                "fn-beige": "#F5EDE3",          // Page cream / default surface
                "fn-beige-soft": "#FDFCFB",     // Lighter cream (near white)
                "fn-ivory": "#EAD9C8",          // Story section wash
                "fn-cream": "#FAF5EF",          // Elevated surface

                // Secondary — difficulty, herbs, newsletter
                "fn-forest": "#166534",         // "Easy" difficulty, green accents
            },

            // ── Typography ──
            fontFamily: {
                // Match variable names from layout.tsx
                heading: ["var(--font-playfair)", "Georgia", "serif"],
                body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
                // Keep legacy aliases for backward compatibility
                display: ["var(--font-playfair)", "Georgia", "serif"],
                sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
            },

            // ── Font sizes (editorial scale) ──
            fontSize: {
                "fn-xs": "0.75rem",     // 12px — micro-labels
                "fn-sm": "0.875rem",    // 14px — metadata
                "fn-base": "1rem",      // 16px — body
                "fn-lg": "1.125rem",    // 18px — lead paragraph
                "fn-xl": "1.5rem",      // 24px — h4
                "fn-2xl": "2rem",       // 32px — h3
                "fn-3xl": "2.5rem",     // 40px — h2
                "fn-4xl": "3.5rem",     // 56px — h1, hero
            },

            // ── Spacing (mirrors design system 4-base scale) ──
            spacing: {
                "fn-1": "4px",
                "fn-2": "8px",
                "fn-4": "16px",
                "fn-6": "24px",
                "fn-8": "32px",
                "fn-12": "48px",
                "fn-16": "64px",
                "fn-24": "96px",   // section rhythm
            },

            // ── Border Radius ──
            borderRadius: {
                "fn-sm": "8px",
                "fn-md": "12px",
                "fn-lg": "16px",
                "fn-xl": "20px",          // buttons
                "fn-2xl": "24px",         // standard cards
                "fn-3xl": "32px",         // recipe hero cards ⭐
                "recipe": "32px",         // alias for recipe cards
            },

            // ── Shadows (brown-tinted, never grey) ──
            boxShadow: {
                "fn-soft": "0 10px 40px -10px rgba(63, 35, 5, 0.03)",
                "fn-card": "0 4px 24px rgba(75, 46, 26, 0.10)",
                "fn-hover": "0 20px 60px rgba(75, 46, 26, 0.18)",
                "fn-cta": "0 8px 32px rgba(217, 119, 6, 0.4)",
                "fn-cta-hover": "0 12px 40px rgba(217, 119, 6, 0.5)",
                "fn-nav": "0 1px 0 rgba(75, 46, 26, 0.04), 0 4px 16px rgba(0, 0, 0, 0.04)",
            },

            // ── Layout ──
            maxWidth: {
                "fn-content": "1280px",   // max-w-7xl equivalent with semantic name
            },

            // ── Animation durations ──
            transitionDuration: {
                "fn-fast": "200ms",
                "fn-base": "300ms",
                "fn-slow": "500ms",
                "fn-slower": "700ms",     // image zoom on card hover
            },

            // ── Animation easing (signature ease-out) ──
            transitionTimingFunction: {
                "fn-ease": "cubic-bezier(0.22, 1, 0.36, 1)",
            },

            // ── Letter spacing (for eyebrows) ──
            letterSpacing: {
                "fn-wide": "0.18em",      // UPPERCASE eyebrow labels
            },

            // ── Backdrop blur (for glass morphism) ──
            backdropBlur: {
                "fn-nav": "16px",         // navbar frosted
                "fn-glass": "24px",       // hero glass cards
            },
        },
    },
    plugins: [],
};

export default config;