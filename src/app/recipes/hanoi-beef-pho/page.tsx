import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Users, ChefHat, Star, ArrowLeft, Flame } from 'lucide-react'
import { getRecipeBySlug } from "@/data/recipes";
import { notFound } from "next/navigation";

// ── SEO Metadata ──────────────────────────────────────────────────────────
export const metadata: Metadata = {
    title: 'Hanoi Beef Pho Recipe (Phở Bò) – Authentic & Easy | FlavorNest Vietnam',
    description:
        'Make authentic Hanoi beef pho at home with this step-by-step recipe. A rich, clear bone broth simmered with star anise and charred ginger — the real deal, no shortcuts.',
    keywords: [
        'hanoi beef pho recipe',
        'phở bò hà nội',
        'authentic vietnamese pho',
        'how to make pho broth',
        'vietnamese noodle soup',
    ],
    openGraph: {
        title: 'Hanoi Beef Pho – Authentic Vietnamese Recipe',
        description: 'The real Hanoi pho, made at home. Bone broth simmered low and slow with charred aromatics and warming spices.',
        images: [{ url: '/recipes/phobo.jpg', width: 1200, height: 630 }],
    },
}

// ── Structured Data ───────────────────────────────────────────────────────
const recipeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: 'Hanoi Beef Pho (Phở Bò Hà Nội)',
    description: 'Authentic Hanoi-style beef pho with a clear bone broth simmered for hours with charred ginger, onion, star anise and cinnamon.',
    images: [{ url: '/recipes/phobo1.jpg', width: 1200, height: 630 }],
    author: { '@type': 'Organization', name: 'FlavorNest Vietnam' },
    prepTime: 'PT20M',
    cookTime: 'PT3H',
    totalTime: 'PT3H20M',
    recipeYield: '4 servings',
    recipeCategory: 'Soup',
    recipeCuisine: 'Vietnamese',
    keywords: 'pho, beef pho, vietnamese soup, hanoi pho',
    nutrition: { '@type': 'NutritionInformation', calories: '420 calories' },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', ratingCount: '324' },
    recipeIngredient: [
        '2 lbs beef marrow bones',
        '1 lb beef knuckle bones',
        '1 large onion, halved',
        '3-inch fresh ginger, halved',
        '3 star anise',
        '1 cinnamon stick',
        '3 whole cloves',
        '1 tsp coriander seeds',
        '¼ cup fish sauce',
        '1 tbsp rock sugar',
        '14 oz flat rice noodles',
        '½ lb beef eye round, paper-thin sliced',
        '¼ lb cooked brisket, sliced',
    ],
}

// ─────────────────────────────────────────────────────────────────────────────
export default function HanoiBeefPhoPage() {
    return (
        <>
            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(recipeSchema) }}
            />

            <article className="min-h-screen bg-[#F5EDE3] dark:bg-[#1C1009]">

                {/* ── HERO IMAGE ── */}
                <div className="relative h-[55vh] min-h-[400px] max-h-[640px] overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=1600&q=85"
                        alt="Steaming bowl of authentic Hanoi beef pho with fresh herbs and lime"
                        fill priority quality={88} sizes="100vw"
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C1009]/80 via-[#1C1009]/20 to-transparent" />

                    {/* Back link */}
                    <div className="absolute top-6 left-5 lg:left-8 z-10">
                        <Link href="/recipes" className="inline-flex items-center gap-2 text-white/80 hover:text-[#D97706] text-sm font-medium transition-colors bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                            <ArrowLeft className="w-4 h-4" /> All Recipes
                        </Link>
                    </div>

                    {/* Hero text */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-10 max-w-4xl mx-auto">
                        <div className="flex flex-wrap gap-2 mb-3">
                            <span className="bg-[#D97706] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">Soup</span>
                            <span className="bg-[#166534] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">Gluten Free</span>
                            <span className="bg-white/15 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">Hanoi Classic</span>
                        </div>
                        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-white font-extrabold leading-tight">
                            Hanoi Beef Pho
                            <em className="block text-[#F59E0B] text-2xl sm:text-3xl font-medium mt-1">Phở Bò Hà Nội</em>
                        </h1>
                    </div>
                </div>

                {/* ── MAIN CONTENT ── */}
                <div className="max-w-4xl mx-auto px-5 lg:px-8">

                    {/* Meta bar */}
                    <div className="flex flex-wrap gap-4 py-6 border-b border-[#D97706]/12">
                        {[
                            { icon: <Clock className="w-4 h-4" />, label: 'Prep', val: '20 min' },
                            { icon: <Flame className="w-4 h-4" />, label: 'Cook', val: '3 hours' },
                            { icon: <Users className="w-4 h-4" />, label: 'Serves', val: '4 people' },
                            { icon: <ChefHat className="w-4 h-4" />, label: 'Skill', val: 'Medium' },
                            { icon: <Star className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />, label: 'Rating', val: '4.9 (324)' },
                        ].map(m => (
                            <div key={m.label} className="flex items-center gap-2 bg-white dark:bg-[#2a150a] rounded-2xl px-4 py-2.5 shadow-sm border border-[#D97706]/8">
                                <span className="text-[#D97706]">{m.icon}</span>
                                <div>
                                    <div className="text-[9px] text-[#4B2E1A]/45 dark:text-[#F5EDE3]/38 uppercase font-bold tracking-wider">{m.label}</div>
                                    <div className="text-sm font-bold text-[#4B2E1A] dark:text-[#F5EDE3]">{m.val}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ── INTRO ── */}
                    <section className="py-8 prose-custom">
                        <p className="text-lg text-[#4B2E1A]/75 dark:text-[#F5EDE3]/65 leading-relaxed">
                            At five in the morning, Hanoi still hasn't decided to wake up. The alleys are quiet,
                            the air smells faintly of charcoal, and somewhere nearby a pot has been simmering
                            since midnight. That pot is what this recipe is about.
                        </p>
                        <p className="mt-4 text-[#4B2E1A]/68 dark:text-[#F5EDE3]/58 leading-relaxed">
                            <strong className="text-[#4B2E1A] dark:text-[#F5EDE3]">Authentic Hanoi beef pho</strong> is
                            defined by restraint. The broth should be crystal-clear, gently sweet, and deeply
                            aromatic — not a single spice dominating the others. Achieving that takes two things
                            no shortcut can replace: blanching the bones first, and charring the onion and ginger
                            until they're genuinely black. Everything else follows from there.
                        </p>
                    </section>

                    {/* ── 2-COL: Ingredients + Steps ── */}
                    <div className="grid md:grid-cols-[280px_1fr] gap-8 pb-16">

                        {/* INGREDIENTS */}
                        <aside>
                            <div className="bg-white dark:bg-[#2a150a] rounded-3xl p-6 shadow-sm border border-[#D97706]/8 md:sticky md:top-24">
                                <h2 className="font-display text-2xl font-bold text-[#4B2E1A] dark:text-[#F5EDE3] mb-4">🛒 Ingredients</h2>
                                <p className="text-xs text-[#4B2E1A]/40 mb-4">Tap to check off</p>

                                {[
                                    {
                                        group: 'The Broth',
                                        items: ['2 lbs beef marrow bones', '1 lb beef knuckle bones', '1 large onion, halved', '3-inch ginger, halved', '3 star anise', '1 cinnamon stick', '3 whole cloves', '1 tsp coriander seeds, toasted', '¼ cup fish sauce', '1 tbsp rock sugar', 'Salt to taste', '4 litres cold water'],
                                    },
                                    {
                                        group: 'Bowl Build',
                                        items: ['14 oz flat rice noodles', '½ lb beef eye round, paper-thin', '¼ lb cooked brisket, sliced', '3 spring onions, sliced', 'Cilantro leaves'],
                                    },
                                    {
                                        group: 'Herb Plate',
                                        items: ['Bean sprouts', 'Thai basil', '2 limes, wedged', 'Fresh jalapeño', 'Hoisin + sriracha'],
                                    },
                                ].map(g => (
                                    <div key={g.group} className="mt-4">
                                        <div className="text-[9px] font-extrabold uppercase tracking-[.18em] text-[#D97706] mb-2">{g.group}</div>
                                        <ul className="space-y-1">
                                            {g.items.map(item => (
                                                <li key={item} className="flex items-start gap-2 py-1 px-2 rounded-lg hover:bg-[#D97706]/5 cursor-pointer transition-colors text-sm text-[#4B2E1A] dark:text-[#F5EDE3]/80">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#D97706] flex-shrink-0 mt-1.5" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </aside>

                        {/* INSTRUCTIONS */}
                        <div className="py-2">
                            <h2 className="font-display text-2xl font-bold text-[#4B2E1A] dark:text-[#F5EDE3] mb-7">
                                👨‍🍳 Step-by-Step
                            </h2>

                            <ol className="space-y-8">
                                {[
                                    {
                                        title: 'Blanch the bones',
                                        body: 'Put all bones in a pot, cover with cold water, and boil hard for 10 minutes. You\'ll see a lot of grey foam — that\'s exactly what you\'re getting rid of. Drain, rinse every bone under cold water, and clean the pot. This one step is the entire reason restaurant pho tastes cleaner than most home versions.',
                                        tip: 'Don\'t skip this. Ever. The foam is blood and impurities — leave it in and your broth will be cloudy and slightly gamey no matter how long you simmer.',
                                    },
                                    {
                                        title: 'Char the aromatics',
                                        body: 'Hold the onion halves and ginger directly over a gas flame with tongs until genuinely charred — about 5 minutes, turning as needed. If you don\'t have gas, broil them cut-side up at maximum heat for 8–10 minutes. You want real black edges, not just brown.',
                                        tip: 'This caramelisation gives the broth its amber colour and a subtle smokiness. It\'s not optional.',
                                    },
                                    {
                                        title: 'Build the broth',
                                        body: 'Return the blanched bones to the clean pot. Add charred onion, charred ginger, star anise, cinnamon, cloves, and coriander. Cover with 4 litres of cold water. Bring to the gentlest possible simmer over medium heat — you want lazy bubbles, never a rolling boil. Skim the surface for the first 20 minutes.',
                                        tip: 'A hard boil permanently emulsifies fat into the broth and makes it cloudy. Keep it gentle the entire time.',
                                    },
                                    {
                                        title: 'Season and keep simmering',
                                        body: 'After 1 hour, add fish sauce, rock sugar, and 1 tsp salt. Keep simmering uncovered for another 1.5–2 hours, skimming every 30 minutes. The broth is done when it\'s deeply golden, aromatic, and tastes assertively savoury with a gentle sweetness.',
                                    },
                                    {
                                        title: 'Strain and hold',
                                        body: 'Strain everything through a fine-mesh sieve. Discard the solids. Return the clear broth to the pot and keep it at the lowest possible simmer. Taste and adjust — it should be slightly over-seasoned because it will dilute once ladled over noodles.',
                                    },
                                    {
                                        title: 'Cook the noodles',
                                        body: 'Soak dried noodles in cold water for 30 minutes. Bring a separate pot to a full boil, cook the noodles for 30–60 seconds (no longer), drain, and divide into 4 deep bowls.',
                                        tip: 'Noodles keep cooking in the hot broth. Pull them early.',
                                    },
                                    {
                                        title: 'Assemble and serve',
                                        body: 'Arrange cooked brisket and raw beef slices over the noodles. Scatter spring onion and cilantro on top. Ladle the nearly boiling broth directly over the raw beef — the heat will cook it on contact to silky, pink perfection. Serve immediately with the herb plate.',
                                        tip: 'The broth must be close to boiling when it hits the bowl. This is non-negotiable.',
                                    },
                                ].map((step, i) => (
                                    <li key={i} className="flex gap-5 items-start">
                                        <div className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-sm mt-0.5" style={{ background: 'linear-gradient(135deg,#D97706,#B45309)' }}>
                                            {i + 1}
                                        </div>
                                        <div className={`flex-1 pb-8 ${i < 6 ? 'border-b border-[#D97706]/8' : ''}`}>
                                            <h3 className="font-bold text-[#4B2E1A] dark:text-[#F5EDE3] mb-2">{step.title}</h3>
                                            <p className="text-sm text-[#4B2E1A]/65 dark:text-[#F5EDE3]/55 leading-relaxed mb-3">{step.body}</p>
                                            {step.tip && (
                                                <div className="flex items-start gap-2 bg-[#D97706]/8 rounded-xl px-3 py-2.5 text-xs text-[#4B2E1A]/72 dark:text-[#F5EDE3]/55">
                                                    <span className="text-[#D97706] flex-shrink-0">💡</span>
                                                    <span>{step.tip}</span>
                                                </div>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ol>

                            {/* Pro Tips */}
                            <div className="mt-10 bg-[#166534]/8 border-l-4 border-[#166534] rounded-r-2xl p-5">
                                <h3 className="font-bold text-[#166534] mb-3 flex items-center gap-2">💡 Pro Tips</h3>
                                <ul className="space-y-2">
                                    {[
                                        'Freeze leftover broth in 2-cup portions — it keeps for 3 months and is the best weeknight shortcut you can have.',
                                        'Raw beef thickness matters. Ask your butcher to slice it on a meat slicer, or freeze the beef 30 minutes before slicing at home.',
                                        'For Phở Gà (chicken pho), replace bones with one whole chicken and reduce simmer time to 1.5 hours.',
                                    ].map((tip, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-[#4B2E1A]/70 dark:text-[#F5EDE3]/60">
                                            <span className="text-[#166534] flex-shrink-0">✦</span> {tip}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Nutrition */}
                            <div className="mt-8 bg-white dark:bg-[#2a150a] rounded-2xl p-5 border border-[#D97706]/8 shadow-sm">
                                <h3 className="font-display text-lg font-bold text-[#4B2E1A] dark:text-[#F5EDE3] mb-4">Nutrition per serving</h3>
                                <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                                    {[['🔥', '420 kcal', 'Calories'], ['💪', '38g', 'Protein'], ['🌾', '42g', 'Carbs'], ['🫒', '8g', 'Fat'], ['🌿', '2g', 'Fibre'], ['🧂', '1,240mg', 'Sodium']].map(([icon, val, lbl]) => (
                                        <div key={lbl} className="text-center bg-[#F5EDE3] dark:bg-[#1C1009] rounded-xl py-3">
                                            <div className="text-lg mb-0.5">{icon}</div>
                                            <div className="font-bold text-[#D97706] text-sm">{val}</div>
                                            <div className="text-[10px] text-[#4B2E1A]/45 dark:text-[#F5EDE3]/35">{lbl}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Related */}
                    <div className="pb-16">
                        <h2 className="font-display text-2xl font-bold text-[#4B2E1A] dark:text-[#F5EDE3] mb-6">You Might Also Love</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {[
                                { slug: 'bun-cha-hanoi', title: "Bún Chả Hà Nội", time: '45 min', img: '/recipes/bunchahanoi1.jpg' },
                                { slug: 'vietnamese-chicken-pho', title: 'Chicken Pho (Phở Gà)', time: '2 hrs', img: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=500&q=75' },
                                { slug: 'bun-rieu', title: 'Crab & Tomato Vermicelli', time: '1h 20m', img: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=500&q=75' },
                            ].map(r => (
                                <Link key={r.slug} href={`/recipes/${r.slug}`} className="group bg-white dark:bg-[#2a150a] rounded-2xl overflow-hidden border border-[#D97706]/8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                                    <div className="relative h-36 overflow-hidden">
                                        <Image src={r.img} alt={r.title} fill sizes="33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" quality={70} />
                                    </div>
                                    <div className="p-3.5">
                                        <div className="font-bold text-sm text-[#4B2E1A] dark:text-[#F5EDE3] group-hover:text-[#D97706] transition-colors">{r.title}</div>
                                        <div className="text-xs text-[#4B2E1A]/45 mt-0.5 flex items-center gap-1"><Clock className="w-3 h-3" />{r.time}</div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}