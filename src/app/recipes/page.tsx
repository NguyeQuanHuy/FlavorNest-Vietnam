import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'All Recipes | FlavorNest Vietnam',
    description: '100+ authentic Vietnamese recipes from Hanoi, Hue and Saigon — crafted for every home kitchen.',
}

const RECIPES = [
    {
        slug: 'hanoi-beef-pho',
        title: 'Hanoi Beef Pho',
        subtitle: 'Phở Bò Hà Nội',
        image: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=800&q=80',
        category: 'Soup',
        region: 'Northern',
        difficulty: 'Medium',
        time: '3 hrs',
        rating: '4.9',
    },
    {
        slug: 'banh-mi',
        title: 'Lemongrass Pork Bánh Mì',
        subtitle: 'Bánh Mì Thịt Nướng',
        image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=800&q=80',
        category: 'Street Food',
        region: 'Southern',
        difficulty: 'Easy',
        time: '40 min',
        rating: '4.8',
    },
    {
        slug: 'bun-cha-hanoi',
        title: 'Hanoi Grilled Pork Vermicelli',
        subtitle: 'Bún Chả Hà Nội',
        image: 'https://images.unsplash.com/photo-1623682785702-f0c9fcfe2fc0?auto=format&fit=crop&w=800&q=80',
        category: 'Noodles',
        region: 'Northern',
        difficulty: 'Easy',
        time: '45 min',
        rating: '4.7',
    },
    {
        slug: 'fresh-spring-rolls',
        title: 'Fresh Spring Rolls',
        subtitle: 'Gỏi Cuốn Tôm Thịt',
        image: 'https://images.unsplash.com/photo-1562802378-063ec186a863?auto=format&fit=crop&w=800&q=80',
        category: 'Rolls',
        region: 'Southern',
        difficulty: 'Easy',
        time: '30 min',
        rating: '4.8',
    },
    {
        slug: 'com-tam',
        title: 'Saigon Broken Rice Plate',
        subtitle: 'Cơm Tấm Sài Gòn',
        image: 'https://images.unsplash.com/photo-1558030137-a56c1b004fa3?auto=format&fit=crop&w=800&q=80',
        category: 'Rice',
        region: 'Southern',
        difficulty: 'Easy',
        time: '35 min',
        rating: '4.9',
    },
    {
        slug: 'bun-bo-hue',
        title: 'Hue Spicy Beef Noodle',
        subtitle: 'Bún Bò Huế',
        image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=800&q=80',
        category: 'Soup',
        region: 'Central',
        difficulty: 'Hard',
        time: '2.5 hrs',
        rating: '4.9',
    },
]

const DIFF_STYLES: Record<string, string> = {
    Easy: 'bg-emerald-50 text-emerald-700',
    Medium: 'bg-amber-50 text-amber-700',
    Hard: 'bg-red-50 text-red-600',
}

const CATEGORIES = ['All', 'Soup', 'Noodles', 'Rice', 'Street Food', 'Rolls']
const REGIONS = ['All Regions', 'Northern', 'Central', 'Southern']

export default function RecipesPage() {
    return (
        <main className="min-h-screen bg-[#FAFAF8]">

            {/* Header */}
            <section className="bg-[#F5EDE3] pt-32 pb-16 px-5">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-px bg-[#D97706]" />
                        <span className="text-[#D97706] text-[11px] font-bold uppercase tracking-[.2em]">
                            FlavorNest Vietnam
                        </span>
                    </div>
                    <h1 className="font-display text-5xl sm:text-6xl font-extrabold text-[#4B2E1A] mb-4">
                        All <span className="text-[#D97706] italic">Recipes</span>
                    </h1>
                    <p className="text-[#4B2E1A]/60 text-lg max-w-xl">
                        100+ authentic Vietnamese recipes tested in real home kitchens.
                    </p>
                </div>
            </section>

            {/* Filter bar */}
            <section className="sticky top-[80px] z-40 bg-white/90 backdrop-blur-xl border-b border-[#D97706]/10 py-3 px-5">
                <div className="max-w-7xl mx-auto flex gap-3 overflow-x-auto">
                    {CATEGORIES.map(cat => (
                        <Link
                            key={cat}
                            href={cat === 'All' ? '/recipes' : `/recipes?cat=${cat.toLowerCase()}`}
                            className="whitespace-nowrap text-[13px] font-semibold px-5 py-2 rounded-full border border-[#D97706]/20 text-[#4B2E1A]/65 hover:text-[#D97706] hover:border-[#D97706]/45 transition-all"
                        >
                            {cat}
                        </Link>
                    ))}
                    <div className="w-px h-8 bg-[#D97706]/15 self-center mx-1" />
                    {REGIONS.map(region => (
                        <Link
                            key={region}
                            href={region === 'All Regions' ? '/recipes' : `/recipes?region=${region.toLowerCase()}`}
                            className="whitespace-nowrap text-[13px] font-semibold px-5 py-2 rounded-full border border-[#D97706]/20 text-[#4B2E1A]/65 hover:text-[#D97706] hover:border-[#D97706]/45 transition-all"
                        >
                            {region}
                        </Link>
                    ))}
                </div>
            </section>

            {/* Recipe grid */}
            <section className="max-w-7xl mx-auto px-5 py-16">
                <p className="text-sm text-[#4B2E1A]/45 mb-8">{RECIPES.length} recipes</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {RECIPES.map(recipe => (
                        <Link
                            key={recipe.slug}
                            href={`/recipes/${recipe.slug}`}
                            className="group bg-white rounded-3xl overflow-hidden border border-[#4B2E1A]/8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                        >
                            {/* Image */}
                            <div className="relative h-52 overflow-hidden">
                                <Image
                                    src={recipe.image}
                                    alt={recipe.title}
                                    fill
                                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                                    className="object-cover group-hover:scale-[1.06] transition-transform duration-500"
                                    quality={80}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#4B2E1A] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                                    {recipe.category}
                                </span>
                                <span className="absolute top-3 right-3 bg-black/35 backdrop-blur-sm text-white text-[10px] px-2.5 py-1 rounded-full">
                                    {recipe.time}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <h2 className="font-semibold text-[15px] text-[#4B2E1A] leading-snug mb-0.5 group-hover:text-[#D97706] transition-colors">
                                    {recipe.title}
                                </h2>
                                <p className="text-[11px] text-[#4B2E1A]/45 italic mb-4">
                                    {recipe.subtitle}
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${DIFF_STYLES[recipe.difficulty]}`}>
                                            {recipe.difficulty}
                                        </span>
                                        <span className="text-[10px] text-[#4B2E1A]/40 bg-[#4B2E1A]/5 px-2.5 py-1 rounded-full">
                                            {recipe.region}
                                        </span>
                                    </div>
                                    <span className="text-[#D97706] text-xs font-semibold">
                                        ★ {recipe.rating}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    )
}