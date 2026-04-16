'use client'

/**
 * FlavorNest Vietnam — Recipe Detail Page
 * src/app/recipes/[slug]/page.tsx
 *
 * Features:
 * - Sticky title bar on scroll
 * - Sticky scrollable ingredients with checkboxes
 * - Step-by-step with progress tracking
 * - Pro Tips section
 * - Related Recipes
 * - Save / Share / Print actions
 * - JSON-LD Recipe schema for SEO
 */

import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ─── Types ────────────────────────────────────────────────────────────────────
interface RecipeData {
    slug: string
    title: string
    subtitle: string
    story: string       // rich narrative paragraph(s)
    description: string // short for SEO/meta
    image: string
    category: string
    region: string
    difficulty: 'Easy' | 'Medium' | 'Hard'
    time: string
    prepTime: string
    cookTime: string
    servings: number
    rating: string
    reviews: number
    calories: number
    tags: string[]
    ingredients: { group: string; items: string[] }[]
    steps: { title: string; body: string; tip?: string }[]
    proTips: { icon: string; title: string; body: string }[]
    nutrition: { label: string; value: string }[]
    relatedSlugs: string[]
}

// ─── Recipe Database ──────────────────────────────────────────────────────────
const RECIPE_DB: Record<string, RecipeData> = {

    // ── Bánh Mì ───────────────────────────────────────────────────────────────
    'banh-mi': {
        slug: 'banh-mi',
        title: 'Lemongrass Pork Bánh Mì',
        subtitle: 'Bánh Mì Thịt Nướng',
        description: 'A shatteringly crispy baguette loaded with lemongrass-grilled pork, silky pâté, pickled daikon, jalapeño and Maggi mayo. The sandwich that changed the world.',
        story: `There is a moment — just before you bite into a bánh mì — when everything is still perfect. The baguette crackles under your fingers. You can smell the lemongrass from the pork, the tang of pickled daikon, the faint anise of fresh cilantro. Then you bite, and all of those things hit at once.\n\nBánh mì is what happens when two great food cultures collide without either one losing itself. The French brought the baguette to Vietnam in the 19th century. The Vietnamese kept the crunch and the pâté, added fish sauce and lemongrass and pickles and chilli, and created something entirely new — a sandwich that is simultaneously Hanoi and Paris, familiar and unlike anything else.\n\nThe best bánh mì in the world are sold from carts on Vietnamese street corners, assembled in thirty seconds by someone who has been doing it for decades. This recipe cannot quite replicate that. But it comes close — and on a Sunday morning, close is extraordinary.`,
        image: 'https://images.unsplash.com/photo-1677354469642-3e4fc5dbbb4a?auto=format&fit=crop&w=1400&q=80',
        category: 'Street Food', region: 'Southern', difficulty: 'Easy',
        time: '40 min', prepTime: '25 min', cookTime: '15 min',
        servings: 4, rating: '4.9', reviews: 412, calories: 580,
        tags: ['Pork', 'Street Food', 'Quick', 'French-Inspired', 'Sandwich'],
        ingredients: [
            {
                group: 'Lemongrass Pork',
                items: [
                    '500g pork shoulder or tenderloin, thinly sliced',
                    '2 stalks lemongrass, white part only, finely minced',
                    '3 cloves garlic, minced',
                    '2 tbsp fish sauce',
                    '1 tbsp oyster sauce',
                    '1 tsp sugar',
                    '1/2 tsp white pepper',
                    '1 tbsp neutral oil',
                ],
            },
            {
                group: 'Pickled Vegetables',
                items: [
                    '200g daikon radish, julienned',
                    '2 medium carrots, julienned',
                    '3 tbsp rice vinegar',
                    '2 tbsp sugar',
                    '1 tsp salt',
                    '100ml warm water',
                ],
            },
            {
                group: 'Maggi Mayo',
                items: [
                    '4 tbsp good-quality mayonnaise',
                    '1 tbsp Maggi seasoning sauce',
                    '1 tsp lime juice',
                ],
            },
            {
                group: 'Assembly',
                items: [
                    '4 Vietnamese-style baguettes (or thin French baguettes)',
                    '100g smooth chicken liver pâté',
                    '1 cucumber, thinly sliced lengthways',
                    '2 jalapeños, thinly sliced',
                    'Large handful fresh cilantro',
                    'Sriracha to serve',
                ],
            },
        ],
        steps: [
            {
                title: 'Pickle the vegetables',
                body: 'Combine rice vinegar, sugar, salt, and warm water in a bowl. Stir until dissolved. Add julienned daikon and carrot. Let sit for at least 20 minutes — they should soften slightly and turn lightly pink. Drain before using.',
                tip: 'Make these the night before and refrigerate. They get better overnight and will keep for a week.',
            },
            {
                title: 'Mix the Maggi mayo',
                body: 'Combine mayonnaise, Maggi seasoning sauce, and lime juice. Whisk until smooth. Taste — it should be umami-forward with a bright citrus finish. Refrigerate until needed.',
            },
            {
                title: 'Marinate the pork',
                body: 'Slice pork as thinly as possible — partially freezing it for 20 minutes first makes this much easier. Combine with lemongrass, garlic, fish sauce, oyster sauce, sugar, white pepper, and oil. Toss to coat. Marinate for at least 15 minutes, or up to overnight.',
                tip: 'The thinner the pork, the more surface area for the marinade — and the faster it cooks, so you get more caramelisation without drying it out.',
            },
            {
                title: 'Grill the pork',
                body: 'Heat a grill pan or cast iron skillet over high heat until smoking. Cook pork in a single layer — do not crowd the pan — for 2-3 minutes per side until deeply caramelised and slightly charred at the edges. Work in batches.',
                tip: 'Resist the urge to move the pork constantly. Let it sit until it releases naturally — that\'s when the crust has formed.',
            },
            {
                title: 'Warm the baguettes',
                body: 'Place baguettes in a 180°C oven for 4-5 minutes until the crust is shatteringly crisp. Alternatively, a dry pan over medium heat for 2 minutes per side works perfectly.',
            },
            {
                title: 'Assemble',
                body: 'Split baguettes lengthways without cutting all the way through. Spread a generous layer of pâté on the bottom half. Add a streak of Maggi mayo on the top half. Layer with pork, cucumber, pickled vegetables, jalapeño slices, and a pile of fresh cilantro. Close, press gently, and serve immediately.',
                tip: 'Serve the moment it\'s assembled. A bánh mì waits for no one — the baguette starts to soften within minutes.',
            },
        ],
        proTips: [
            {
                icon: '🥖',
                title: 'The baguette is everything',
                body: "A Vietnamese bánh mì baguette is lighter, airier, and crispier than a French one — the crust shatters rather than cheeks. Look for Vietnamese bakeries or use the thinnest, crispiest French baguette you can find. Never use a thick, chewy sourdough.",
            },
            {
                icon: '🧊',
                title: 'Freeze the pork for thin slices',
                body: "Put your pork in the freezer for 20-25 minutes before slicing. Partially frozen meat cuts paper-thin without a deli slicer, and thin slices are essential for fast caramelisation.",
            },
            {
                icon: '🥢',
                title: 'Maggi is non-negotiable',
                body: "Maggi seasoning sauce is the secret weapon. It is deeply umami, slightly sweet, and entirely Vietnamese in spirit despite its Swiss origins. Do not substitute soy sauce — the flavour profile is completely different.",
            },
            {
                icon: '🌿',
                title: 'Be generous with the cilantro',
                body: "In Vietnam, cilantro is not a garnish — it is a main ingredient. Pack it in. The fresh herbal brightness is what makes a bánh mì sing against the rich pork and pâté.",
            },
        ],
        nutrition: [
            { label: 'Calories', value: '580 kcal' },
            { label: 'Protein', value: '34g' },
            { label: 'Carbs', value: '58g' },
            { label: 'Fat', value: '22g' },
            { label: 'Sodium', value: '1100mg' },
        ],
        relatedSlugs: ['hanoi-beef-pho', 'bun-cha-hanoi', 'fresh-spring-rolls'],
    },

    // ── Hanoi Beef Pho ────────────────────────────────────────────────────────
    'hanoi-beef-pho': {
        slug: 'hanoi-beef-pho',
        title: 'Hanoi Beef Pho',
        subtitle: 'Phở Bò Hà Nội',
        description: 'The soul of Hanoi in a bowl. Crystal-clear bone broth simmered for hours, silky flat rice noodles, paper-thin beef slices.',
        story: "At five in the morning, Hanoi still hasn't decided to wake up. The alleys are quiet, the air smells faintly of charcoal, and somewhere nearby a pot has been simmering since midnight. That pot is what this recipe is about.\n\nAuthentic Hanoi beef pho is defined by restraint. The broth should be crystal-clear, gently sweet, and deeply aromatic — not a single spice dominating the others. Achieving that takes two things no shortcut can replace: blanching the bones first, and charring the onion and ginger until they're genuinely black. Everything else follows from there.",
        image: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=1400&q=80',
        category: 'Soup', region: 'Northern', difficulty: 'Medium',
        time: '3 hrs', prepTime: '30 min', cookTime: '2.5 hrs',
        servings: 4, rating: '4.9', reviews: 248, calories: 420,
        tags: ['Beef', 'Noodles', 'Slow Cook', 'Northern', 'Gluten Free'],
        ingredients: [
            { group: 'Broth', items: ['2 kg beef bones (knuckle + marrow)', '500g beef brisket', '1 large onion, halved', '5cm fresh ginger, halved', '3 star anise', '2 cinnamon sticks', '5 whole cloves', '1 tsp fennel seeds', '2 tbsp fish sauce', '1 tsp sugar', 'Salt to taste', '3 liters water'] },
            { group: 'Noodles & Toppings', items: ['400g flat rice noodles (bánh phở)', '300g beef sirloin, very thinly sliced', '4 spring onions, thinly sliced', '2 tbsp fried shallots', 'Fresh cilantro & Thai basil'] },
            { group: 'Serve With', items: ['Bean sprouts', 'Lime wedges', 'Sliced fresh chili', 'Hoisin sauce', 'Sriracha'] },
        ],
        steps: [
            { title: 'Blanch the bones', body: 'Place beef bones in a large pot, cover with cold water. Bring to a boil and blanch for 10 minutes. Drain, rinse bones and pot thoroughly.', tip: "Don't skip this — it's what makes the broth clear." },
            { title: 'Char the aromatics', body: 'Char onion and ginger over open flame until blackened in spots, about 5 minutes per side.' },
            { title: 'Toast the spices', body: 'Toast star anise, cinnamon, cloves, and fennel seeds in a dry pan for 2-3 minutes. Wrap in cheesecloth.' },
            { title: 'Simmer the broth', body: 'Return bones to pot with 3L fresh water. Add charred aromatics, brisket, spice bundle, fish sauce, sugar. Gentle simmer for 2+ hours.', tip: 'Gentle simmer, never rolling boil — keeps it clear.' },
            { title: 'Prepare noodles', body: 'Soak noodles 30 minutes in cold water. Blanch 30-60 seconds before serving.' },
            { title: 'Assemble', body: 'Place noodles in bowl, add sliced brisket and raw sirloin. Ladle boiling broth over. Garnish and serve immediately.' },
        ],
        proTips: [
            { icon: '🔥', title: 'Char, not toast', body: "The onion and ginger need to be genuinely blackened — not just golden. The char is what gives the broth its signature depth and slightly smoky sweetness." },
            { icon: '⏰', title: 'Time is the ingredient', body: "Two hours is the minimum. Three is better. The longer the simmer, the more gelatin is extracted from the bones, and the more silky and full-bodied the broth becomes." },
            { icon: '🧊', title: 'Freeze the sirloin', body: "Freeze raw sirloin for 20 minutes before slicing. Partially frozen beef cuts paper-thin, and paper-thin is essential — the boiling broth should cook it in seconds." },
        ],
        nutrition: [
            { label: 'Calories', value: '420 kcal' }, { label: 'Protein', value: '38g' },
            { label: 'Carbs', value: '42g' }, { label: 'Fat', value: '9g' }, { label: 'Sodium', value: '1200mg' },
        ],
        relatedSlugs: ['bun-cha-hanoi', 'banh-mi'],
    },

    // ── Bún Chả ───────────────────────────────────────────────────────────────
    'bun-cha-hanoi': {
        slug: 'bun-cha-hanoi',
        title: 'Hanoi Grilled Pork Vermicelli',
        subtitle: 'Bún Chả Hà Nội',
        description: 'Smoky chargrilled pork patties in a warm tangy broth, paired with cool rice vermicelli and fresh herbs.',
        story: "In 2016, Barack Obama and Anthony Bourdain sat on plastic stools in a Hanoi alleyway and ate bún chả together. The image went around the world. People wanted to know: what is this dish?\n\nBún chả is Hanoi's great lunch. Smoky chargrilled pork patties dunked into a warm sweet-sour broth, cool vermicelli on the side, a mountain of herbs, and the ritual of dipping and eating at your own pace. It is the opposite of a fast meal — it asks you to slow down.",
        image: 'https://images.unsplash.com/photo-1742893368398-128bded9c656?auto=format&fit=crop&w=1400&q=80',
        category: 'Noodles', region: 'Northern', difficulty: 'Easy',
        time: '45 min', prepTime: '20 min', cookTime: '25 min',
        servings: 4, rating: '4.8', reviews: 218, calories: 480,
        tags: ['Pork', 'Grilled', 'Noodles', 'Northern'],
        ingredients: [
            { group: 'Pork Patties', items: ['400g ground pork', '2 shallots, minced', '2 cloves garlic, minced', '1 tbsp fish sauce', '1 tsp sugar', '1/2 tsp black pepper', '1 tbsp oil'] },
            { group: 'Dipping Broth', items: ['3 tbsp fish sauce', '2 tbsp sugar', '3 tbsp rice vinegar', '200ml warm water', '1 clove garlic, minced', '1 red chilli, sliced', '1 tsp lime juice'] },
            { group: 'To Serve', items: ['300g dried rice vermicelli', 'Fresh mint', 'Fresh perilla (tía tô)', 'Bean sprouts', 'Lettuce'] },
        ],
        steps: [
            { title: 'Mix & marinate pork', body: 'Combine pork with shallots, garlic, fish sauce, sugar, pepper, oil. Shape into small flat patties. Marinate 20 minutes.' },
            { title: 'Make dipping broth', body: 'Dissolve sugar in warm water. Add fish sauce, vinegar, lime. Adjust to balance sweet, sour, salty. Add garlic and chilli.' },
            { title: 'Grill the pork', body: 'Grill over charcoal or high heat, 4-5 minutes per side until caramelised and charred.', tip: 'Charcoal is essential for authentic flavour. Indoors, use a cast iron griddle at maximum heat.' },
            { title: 'Cook noodles', body: 'Boil vermicelli 3-4 minutes. Drain and rinse cold.' },
            { title: 'Serve', body: 'Place warm broth in individual bowls with 2-3 patties. Serve noodles and herbs alongside. Dip everything into the broth.' },
        ],
        proTips: [
            { icon: '🔥', title: 'Charcoal is the secret', body: "Bún chả over gas just is not the same. If you have access to a charcoal grill, use it. The smoke is half the dish." },
            { icon: '🌿', title: 'Perilla is essential', body: "Tía tô (Vietnamese perilla) has a distinctive minty-anise flavour that no other herb replicates. Find it at any Asian grocery store." },
        ],
        nutrition: [
            { label: 'Calories', value: '480 kcal' }, { label: 'Protein', value: '32g' },
            { label: 'Carbs', value: '55g' }, { label: 'Fat', value: '14g' }, { label: 'Sodium', value: '980mg' },
        ],
        relatedSlugs: ['hanoi-beef-pho', 'banh-mi'],
    },
}

// Related recipe card thumbnails
const RELATED_META: Record<string, { title: string; subtitle: string; image: string; time: string; difficulty: string }> = {
    'hanoi-beef-pho': { title: 'Hanoi Beef Pho', subtitle: 'Phở Bò Hà Nội', image: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=600&q=75', time: '3 hrs', difficulty: 'Medium' },
    'bun-cha-hanoi': { title: 'Hanoi Grilled Pork Vermicelli', subtitle: 'Bún Chả Hà Nội', image: 'https://images.unsplash.com/photo-1742893368398-128bded9c656?auto=format&fit=crop&w=600&q=75', time: '45 min', difficulty: 'Easy' },
    'banh-mi': { title: 'Lemongrass Pork Bánh Mì', subtitle: 'Bánh Mì Thịt Nướng', image: 'https://images.unsplash.com/photo-1677354469642-3e4fc5dbbb4a?auto=format&fit=crop&w=600&q=75', time: '40 min', difficulty: 'Easy' },
    'fresh-spring-rolls': { title: 'Fresh Spring Rolls', subtitle: 'Gỏi Cuốn Tôm Thịt', image: 'https://images.unsplash.com/photo-1602375850899-c389c4a0fc70?auto=format&fit=crop&w=600&q=75', time: '45 min', difficulty: 'Easy' },
}

const DIFF_COLOR: Record<string, string> = { Easy: '#10b981', Medium: '#f59e0b', Hard: '#ef4444' }
const LS_KEY = 'fn_favorites'

function fadeUp(delay = 0) {
    return {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    }
}

// ─── Page Component ───────────────────────────────────────────────────────────
export default function RecipeDetailPage({ params }: { params: { slug: string } }) {
    const recipe = RECIPE_DB[params.slug]

    const [servings, setServings] = useState(recipe?.servings ?? 4)
    const [checkedSteps, setCheckedSteps] = useState<Set<number>>(new Set())
    const [checkedIngredients, setCheckedIngredients] = useState<Set<string>>(new Set())
    const [showStickyTitle, setShowStickyTitle] = useState(false)
    const [isSaved, setIsSaved] = useState(false)
    const [saveToast, setSaveToast] = useState(false)
    const heroRef = useRef<HTMLDivElement>(null)

    // Sticky title on scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setShowStickyTitle(!entry.isIntersecting),
            { threshold: 0, rootMargin: '-80px 0px 0px 0px' }
        )
        if (heroRef.current) observer.observe(heroRef.current)
        return () => observer.disconnect()
    }, [])

    // Check if saved in localStorage
    useEffect(() => {
        if (!recipe) return
        try {
            const stored = JSON.parse(localStorage.getItem(LS_KEY) || '[]')
            setIsSaved(stored.some((x: { slug: string }) => x.slug === recipe.slug))
        } catch { }
    }, [recipe])

    if (!recipe) {
        return (
            <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui' }}>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 52, marginBottom: 16 }}>🍜</div>
                    <h1 style={{ fontFamily: "'Playfair Display', serif", color: '#4B2E1A', marginBottom: 12 }}>Recipe not found</h1>
                    <Link href="/recipes" style={{ color: '#D97706', fontWeight: 600, textDecoration: 'none' }}>← Back to Recipes</Link>
                </div>
            </main>
        )
    }

    // JSON-LD Schema
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Recipe',
        name: recipe.title,
        description: recipe.description,
        image: recipe.image,
        author: { '@type': 'Organization', name: 'FlavorNest Vietnam' },
        datePublished: '2025-01-01',
        prepTime: `PT${recipe.prepTime.replace(' ', '')}`,
        cookTime: `PT${recipe.cookTime.replace(' ', '')}`,
        totalTime: `PT${recipe.time.replace(' ', '')}`,
        recipeYield: `${recipe.servings} servings`,
        recipeCategory: recipe.category,
        recipeCuisine: 'Vietnamese',
        nutrition: { '@type': 'NutritionInformation', calories: `${recipe.calories} calories` },
        aggregateRating: { '@type': 'AggregateRating', ratingValue: recipe.rating, reviewCount: recipe.reviews },
        recipeIngredient: recipe.ingredients.flatMap(g => g.items),
        recipeInstructions: recipe.steps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.title, text: s.body })),
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

    const handleSave = () => {
        try {
            const stored = JSON.parse(localStorage.getItem(LS_KEY) || '[]')
            let next
            if (isSaved) {
                next = stored.filter((x: { slug: string }) => x.slug !== recipe.slug)
            } else {
                next = [...stored, { slug: recipe.slug, title: recipe.title, subtitle: recipe.subtitle, image: recipe.image, time: recipe.time, difficulty: recipe.difficulty, category: recipe.category, savedAt: new Date().toISOString().split('T')[0] }]
            }
            localStorage.setItem(LS_KEY, JSON.stringify(next))
            setIsSaved(!isSaved)
            setSaveToast(true)
            setTimeout(() => setSaveToast(false), 2500)
        } catch { }
    }

    const handleShare = async () => {
        try {
            await navigator.share({ title: recipe.title, text: recipe.description, url: window.location.href })
        } catch {
            navigator.clipboard.writeText(window.location.href)
        }
    }

    const totalIngCount = recipe.ingredients.reduce((acc, g) => acc + g.items.length, 0)
    const checkedIngCount = checkedIngredients.size

    return (
        <>
            {/* JSON-LD SEO */}
            <Script id="recipe-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <main style={{ minHeight: '100vh', background: '#FAFAF7', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
                <style>{`
                    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=Playfair+Display:ital,wght@0,700;1,600&display=swap');
                    * { box-sizing: border-box; }
                    .step-item { display: flex; gap: 16px; padding: 18px 0; border-bottom: 1px solid rgba(75,46,26,0.06); cursor: pointer; transition: opacity 0.25s; }
                    .step-item.done { opacity: 0.38; }
                    .step-num { width: 34px; height: 34px; border-radius: 50%; background: rgba(217,119,6,0.1); color: #D97706; font-weight: 700; font-size: 13px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: all 0.25s; }
                    .step-item.done .step-num { background: #10b981; color: white; }
                    .counter-btn { width: 28px; height: 28px; border-radius: 50%; border: 1.5px solid rgba(75,46,26,0.18); background: white; color: #4B2E1A; font-size: 16px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.15s; padding: 0; }
                    .counter-btn:hover { border-color: #D97706; color: #D97706; }
                    .ing-row { display: flex; align-items: center; gap: 10px; padding: 7px 0; border-bottom: 1px solid rgba(75,46,26,0.05); cursor: pointer; user-select: none; }
                    .ing-row:last-child { border-bottom: none; }
                    .ing-row.checked { opacity: 0.36; }
                    .checkbox { width: 17px; height: 17px; border-radius: 5px; border: 1.5px solid rgba(75,46,26,0.22); background: white; flex-shrink: 0; display: flex; align-items: center; justify-content: center; transition: all 0.18s; }
                    .checkbox.checked { background: #D97706; border-color: #D97706; }
                    .ing-scroll::-webkit-scrollbar { width: 4px; }
                    .ing-scroll::-webkit-scrollbar-thumb { background: rgba(75,46,26,0.12); border-radius: 100px; }
                    .action-btn { display: flex; align-items: center; gap: 7px; padding: 10px 18px; border-radius: 100px; border: 1.5px solid rgba(75,46,26,0.12); background: white; font-size: 13px; font-weight: 600; color: rgba(75,46,26,0.65); cursor: pointer; font-family: inherit; transition: all 0.18s; }
                    .action-btn:hover { border-color: rgba(217,119,6,0.35); color: #D97706; background: rgba(217,119,6,0.04); }
                    .action-btn.saved { background: rgba(220,38,38,0.07); border-color: rgba(220,38,38,0.3); color: #DC2626; }
                    .rel-card { border-radius: 18px; overflow: hidden; text-decoration: none; display: block; background: white; border: 1px solid rgba(75,46,26,0.07); transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s; }
                    .rel-card:hover { transform: translateY(-5px); box-shadow: 0 20px 44px rgba(75,46,26,0.12); }
                    .rel-card:hover .rel-img { transform: scale(1.06); }
                    .rel-img { transition: transform 0.5s ease; }
                    @media print {
                        .no-print { display: none !important; }
                        .sticky-bar { display: none !important; }
                    }
                `}</style>

                {/* ── STICKY TITLE BAR ── */}
                <AnimatePresence>
                    {showStickyTitle && (
                        <motion.div className="sticky-bar no-print"
                            initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
                            transition={{ duration: 0.22 }}
                            style={{ position: 'fixed', top: 80, left: 0, right: 0, zIndex: 45, background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(75,46,26,0.08)', padding: '10px 24px', boxShadow: '0 4px 24px rgba(0,0,0,0.05)' }}>
                            <div style={{ maxWidth: 960, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
                                    <Link href="/recipes" style={{ fontSize: 12, color: 'rgba(75,46,26,0.4)', textDecoration: 'none', fontWeight: 600, flexShrink: 0 }}>← Recipes</Link>
                                    <span style={{ color: 'rgba(75,46,26,0.2)' }}>›</span>
                                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 700, color: '#2D1A0E', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{recipe.title}</h2>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
                                    <span style={{ fontSize: 12, color: '#D97706', fontWeight: 700 }}>★ {recipe.rating}</span>
                                    <span style={{ fontSize: 11, color: 'rgba(75,46,26,0.4)' }}>⏱ {recipe.time}</span>
                                    <span style={{ fontSize: 11, fontWeight: 700, color: DIFF_COLOR[recipe.difficulty], background: `${DIFF_COLOR[recipe.difficulty]}15`, padding: '3px 10px', borderRadius: 100 }}>{recipe.difficulty}</span>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* ── HERO ── */}
                <div ref={heroRef} style={{ position: 'relative', height: 'clamp(300px, 44vw, 520px)', overflow: 'hidden' }}>
                    <Image src={recipe.image} alt={recipe.title} fill style={{ objectFit: 'cover' }} quality={90} priority />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.75) 100%)' }} />

                    <Link href="/recipes" className="no-print" style={{ position: 'absolute', top: 100, left: 24, color: 'white', fontSize: 12, fontWeight: 600, textDecoration: 'none', background: 'rgba(0,0,0,0.28)', backdropFilter: 'blur(8px)', padding: '7px 14px', borderRadius: 100 }}>
                        ← All Recipes
                    </Link>

                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 'clamp(20px,4vw,48px)' }}>
                        <div style={{ maxWidth: 960, margin: '0 auto' }}>
                            <div style={{ display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
                                {recipe.tags.map(tag => (
                                    <span key={tag} style={{ background: 'rgba(255,255,255,0.14)', backdropFilter: 'blur(8px)', color: 'white', fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: 100 }}>{tag}</span>
                                ))}
                            </div>
                            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px,5.5vw,58px)', fontWeight: 700, color: 'white', margin: '0 0 6px', lineHeight: 1.08 }}>
                                {recipe.title}
                            </h1>
                            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, fontStyle: 'italic', margin: 0 }}>{recipe.subtitle}</p>
                        </div>
                    </div>
                </div>

                {/* ── CONTENT ── */}
                <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 20px 80px' }}>

                    {/* Meta bar */}
                    <div style={{ background: 'white', borderRadius: 16, padding: '14px 16px', margin: '20px 0 0', display: 'flex', flexWrap: 'wrap', border: '1px solid rgba(75,46,26,0.07)', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
                        {[
                            { icon: '⏱', label: 'Total', value: recipe.time },
                            { icon: '🔪', label: 'Prep', value: recipe.prepTime },
                            { icon: '🔥', label: 'Cook', value: recipe.cookTime },
                            { icon: '👤', label: 'Skill', value: recipe.difficulty, color: DIFF_COLOR[recipe.difficulty] },
                            { icon: '★', label: 'Rating', value: `${recipe.rating} (${recipe.reviews})`, color: '#D97706' },
                            { icon: '🔥', label: 'Calories', value: `${recipe.calories} kcal` },
                        ].map((item, i) => (
                            <div key={item.label} style={{ flex: '1 1 90px', padding: '0 12px', borderLeft: i > 0 ? '1px solid rgba(75,46,26,0.08)' : 'none', textAlign: 'center' }}>
                                <div style={{ fontSize: 14, marginBottom: 2 }}>{item.icon}</div>
                                <div style={{ fontSize: 9, color: 'rgba(75,46,26,0.38)', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: 2 }}>{item.label}</div>
                                <div style={{ fontSize: 12, fontWeight: 700, color: item.color ?? '#2D1A0E' }}>{item.value}</div>
                            </div>
                        ))}
                    </div>

                    {/* Action buttons */}
                    <div className="no-print" style={{ display: 'flex', gap: 10, margin: '16px 0 0', flexWrap: 'wrap' }}>
                        <button className={`action-btn ${isSaved ? 'saved' : ''}`} onClick={handleSave}>
                            {isSaved ? '♥ Saved' : '♡ Save Recipe'}
                        </button>
                        <button className="action-btn" onClick={handleShare}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>
                            Share
                        </button>
                        <button className="action-btn" onClick={() => window.print()}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="6 9 6 2 18 2 18 9" /><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><rect x="6" y="14" width="12" height="8" /></svg>
                            Print
                        </button>

                        {/* Save toast */}
                        <AnimatePresence>
                            {saveToast && (
                                <motion.span initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
                                    style={{ display: 'flex', alignItems: 'center', fontSize: 13, color: isSaved ? '#DC2626' : '#10b981', fontWeight: 600, padding: '0 4px' }}>
                                    {isSaved ? '♥ Added to favorites!' : '✕ Removed from favorites'}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* ── STORY ── */}
                    <motion.div {...fadeUp(0)} style={{ margin: '32px 0 28px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                            <div style={{ width: 26, height: 1.5, background: '#D97706' }} />
                            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', color: '#D97706', textTransform: 'uppercase' }}>The Story</span>
                        </div>
                        {recipe.story.split('\n\n').map((para, i) => (
                            <p key={i} style={{ fontSize: 16.5, color: 'rgba(75,46,26,0.68)', lineHeight: 1.82, margin: '0 0 18px', fontFamily: "'DM Sans', system-ui" }}>
                                {i === 0 ? <><strong style={{ color: '#2D1A0E' }}>{para.slice(0, para.indexOf(' ', 30) + 1)}</strong>{para.slice(para.indexOf(' ', 30) + 1)}</> : para}
                            </p>
                        ))}
                    </motion.div>

                    {/* ── TWO COLUMN: INGREDIENTS + STEPS ── */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.65fr)', gap: 22, alignItems: 'start' }}>

                        {/* ── LEFT: STICKY INGREDIENTS ── */}
                        <div style={{
                            position: 'sticky',
                            top: showStickyTitle ? 142 : 90,
                            maxHeight: `calc(100vh - ${showStickyTitle ? 158 : 106}px)`,
                            display: 'flex', flexDirection: 'column',
                            background: 'white', borderRadius: 20,
                            border: '1px solid rgba(75,46,26,0.07)',
                            boxShadow: '0 4px 20px rgba(75,46,26,0.06)',
                            overflow: 'hidden', transition: 'top 0.25s, max-height 0.25s',
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

                            {/* Scrollable */}
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
                                                        {checked && <svg width="9" height="9" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                                                    </div>
                                                    <span style={{ fontSize: 13, color: checked ? 'rgba(75,46,26,0.3)' : 'rgba(75,46,26,0.78)', textDecoration: checked ? 'line-through' : 'none', flex: 1, lineHeight: 1.4, transition: 'all 0.2s' }}>
                                                        {item}
                                                    </span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                ))}

                                {/* Progress */}
                                <div style={{ marginTop: 6, paddingTop: 10, borderTop: '1px solid rgba(75,46,26,0.06)' }}>
                                    <div style={{ height: 3, background: 'rgba(75,46,26,0.07)', borderRadius: 100, overflow: 'hidden' }}>
                                        <div style={{ height: '100%', width: `${(checkedIngCount / totalIngCount) * 100}%`, background: 'linear-gradient(90deg, #D97706, #F59E0B)', borderRadius: 100, transition: 'width 0.3s ease' }} />
                                    </div>
                                    <p style={{ fontSize: 11, color: checkedIngCount === totalIngCount ? '#10b981' : 'rgba(75,46,26,0.35)', margin: '5px 0 0', textAlign: 'right', fontWeight: checkedIngCount === totalIngCount ? 700 : 400 }}>
                                        {checkedIngCount === totalIngCount && totalIngCount > 0 ? '✅ All ready!' : `${totalIngCount - checkedIngCount} remaining`}
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
                            <motion.div {...fadeUp(0.1)} style={{ background: 'white', borderRadius: 20, padding: '20px', marginTop: 22, border: '1px solid rgba(75,46,26,0.07)' }}>
                                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: '#2D1A0E', margin: '0 0 14px' }}>Nutrition per serving</h3>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 8 }}>
                                    {recipe.nutrition.map(n => (
                                        <div key={n.label} style={{ textAlign: 'center', background: '#FAFAF7', borderRadius: 12, padding: '11px 6px' }}>
                                            <div style={{ fontSize: 14, fontWeight: 700, color: '#2D1A0E' }}>{n.value}</div>
                                            <div style={{ fontSize: 10, color: 'rgba(75,46,26,0.45)', fontWeight: 600, marginTop: 2 }}>{n.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* ── PRO TIPS ── */}
                    {recipe.proTips && recipe.proTips.length > 0 && (
                        <motion.div {...fadeUp(0)} style={{ marginTop: 48 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                                <div style={{ width: 26, height: 1.5, background: '#D97706' }} />
                                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', color: '#D97706', textTransform: 'uppercase' }}>Chef's Notes</span>
                            </div>
                            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: '#2D1A0E', margin: '0 0 20px' }}>Pro Tips</h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
                                {recipe.proTips.map((tip, i) => (
                                    <motion.div key={tip.title} {...fadeUp(i * 0.08)}
                                        style={{ background: 'white', borderRadius: 18, padding: '22px', border: '1px solid rgba(75,46,26,0.07)', boxShadow: '0 2px 12px rgba(75,46,26,0.04)' }}>
                                        <div style={{ fontSize: 26, marginBottom: 10 }}>{tip.icon}</div>
                                        <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: '#2D1A0E', margin: '0 0 8px' }}>{tip.title}</h4>
                                        <p style={{ fontSize: 13.5, color: 'rgba(75,46,26,0.6)', lineHeight: 1.72, margin: 0 }}>{tip.body}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* ── RELATED RECIPES ── */}
                    {recipe.relatedSlugs && recipe.relatedSlugs.length > 0 && (
                        <motion.div {...fadeUp(0)} style={{ marginTop: 56 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                                <div style={{ width: 26, height: 1.5, background: '#D97706' }} />
                                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', color: '#D97706', textTransform: 'uppercase' }}>Keep Cooking</span>
                            </div>
                            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: '#2D1A0E', margin: '0 0 20px' }}>You Might Also Love</h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
                                {recipe.relatedSlugs.map((slug, i) => {
                                    const meta = RELATED_META[slug]
                                    if (!meta) return null
                                    return (
                                        <motion.div key={slug} {...fadeUp(i * 0.08)}>
                                            <Link href={`/recipes/${slug}`} className="rel-card">
                                                <div style={{ position: 'relative', height: 160, overflow: 'hidden', background: '#f0ebe4' }}>
                                                    <Image src={meta.image} alt={meta.title} fill className="rel-img" style={{ objectFit: 'cover' }} sizes="260px" quality={70} />
                                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(45,26,14,0.7) 0%, transparent 55%)' }} />
                                                    <div style={{ position: 'absolute', bottom: 12, left: 12 }}>
                                                        <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 700, color: 'white', margin: 0, lineHeight: 1.2 }}>{meta.title}</p>
                                                        <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', margin: '2px 0 0', fontStyle: 'italic' }}>{meta.subtitle}</p>
                                                    </div>
                                                </div>
                                                <div style={{ padding: '12px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                    <span style={{ fontSize: 11, color: 'rgba(75,46,26,0.4)' }}>⏱ {meta.time}</span>
                                                    <span style={{ fontSize: 11, fontWeight: 700, color: DIFF_COLOR[meta.difficulty], background: `${DIFF_COLOR[meta.difficulty]}12`, padding: '2px 8px', borderRadius: 6 }}>{meta.difficulty}</span>
                                                </div>
                                            </Link>
                                        </motion.div>
                                    )
                                })}
                            </div>
                        </motion.div>
                    )}
                </div>
            </main>
        </>
    )
}