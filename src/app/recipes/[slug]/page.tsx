import Link from 'next/link';
import Image from 'next/image';

const RECIPES: Record<string, {
    title: string;
    subtitle: string;
    image: string;
    time: string;
    difficulty: string;
    rating: string;
    reviews: number;
    region: string;
    cal: number;
    description: string;
}> = {
    'pho-bo': {
        title: 'Hanoi Beef Pho',
        subtitle: 'Phở Bò Hà Nội',
        image: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=1600&q=80',
        time: '3 hrs',
        difficulty: 'Medium',
        rating: '4.9',
        reviews: 248,
        region: 'Northern',
        cal: 420,
        description: 'Slow-simmered bone broth, silky noodles, paper-thin beef — the iconic Hanoi morning ritual.',
    },
    'banh-mi-trung': {
        title: 'Egg Bánh Mì',
        subtitle: 'Bánh Mì Trứng Ốp La',
        image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=1600&q=80',
        time: '15 min',
        difficulty: 'Easy',
        rating: '4.7',
        reviews: 189,
        region: 'Southern',
        cal: 310,
        description: 'Crispy baguette with sunny-side-up egg, pâté, fresh herbs and a drizzle of Maggi — Saigon\'s 10-minute breakfast.',
    },
    'xoi-xeo': {
        title: 'Mung Bean Sticky Rice',
        subtitle: 'Xôi Xéo',
        image: 'https://images.unsplash.com/photo-1536304993881-ff86e0c9e6a0?auto=format&fit=crop&w=1600&q=80',
        time: '1 hr',
        difficulty: 'Easy',
        rating: '4.8',
        reviews: 134,
        region: 'Northern',
        cal: 380,
        description: 'Golden sticky rice topped with fried shallots and split mung bean — a beloved Hanoi street breakfast.',
    },
    'banh-cuon': {
        title: 'Steamed Rice Rolls',
        subtitle: 'Bánh Cuốn',
        image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=1600&q=80',
        time: '45 min',
        difficulty: 'Medium',
        rating: '4.8',
        reviews: 167,
        region: 'Northern',
        cal: 290,
        description: 'Silky steamed rice sheets filled with seasoned pork and wood ear mushrooms, served with nem chua and nuoc cham.',
    },
    'chao-long': {
        title: 'Pork Congee',
        subtitle: 'Cháo Lòng',
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1600&q=80',
        time: '1.5 hrs',
        difficulty: 'Easy',
        rating: '4.6',
        reviews: 98,
        region: 'Southern',
        cal: 340,
        description: 'Silky rice porridge with pork offal, ginger, and fresh herbs — Saigon\'s ultimate comfort breakfast.',
    },
    'banh-trang-tron': {
        title: 'Rice Paper Salad',
        subtitle: 'Bánh Tráng Trộn',
        image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1600&q=80',
        time: '20 min',
        difficulty: 'Easy',
        rating: '4.7',
        reviews: 212,
        region: 'Southern',
        cal: 220,
        description: 'Shredded rice paper tossed with quail eggs, dried shrimp, mango and a tangy-spicy dressing.',
    },
};

export default async function RecipeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const recipe = RECIPES[slug];

    if (!recipe) {
        return (
            <div style={{ minHeight: '100vh', background: '#FAFAF7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 16, fontFamily: "'DM Sans', system-ui, sans-serif" }}>
                <div style={{ fontSize: 60 }}>🍜</div>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, color: '#2D1A0E' }}>Recipe not found</p>
                <p style={{ fontSize: 13, color: 'rgba(75,46,26,0.5)' }}>Slug: {slug}</p>
                <Link href="/recipes" style={{ color: '#D97706', fontWeight: 600, textDecoration: 'none' }}>
                    ← Back to Recipes
                </Link>
            </div>
        );
    }

    return (
        <main style={{ minHeight: '100vh', background: '#FAFAF7', fontFamily: "'DM Sans', system-ui, sans-serif", paddingTop: 88 }}>
            <section style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px 48px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20, fontSize: 13, color: 'rgba(75,46,26,0.5)' }}>
                    <Link href="/" style={{ color: 'rgba(75,46,26,0.45)', textDecoration: 'none' }}>Home</Link>
                    <span>›</span>
                    <Link href="/recipes" style={{ color: 'rgba(75,46,26,0.45)', textDecoration: 'none' }}>Recipes</Link>
                    <span>›</span>
                    <span style={{ color: '#D97706', fontWeight: 600 }}>{recipe.title}</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: 48, alignItems: 'center' }}>
                    <div style={{ position: 'relative', height: 480, borderRadius: 24, overflow: 'hidden' }}>
                        <Image src={recipe.image} alt={recipe.title} fill style={{ objectFit: 'cover' }} sizes="(max-width:768px) 100vw, 50vw" priority />
                    </div>

                    <div>
                        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', color: '#D97706', textTransform: 'uppercase', marginBottom: 12 }}>
                            {recipe.region} Vietnam
                        </div>
                        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 700, color: '#2D1A0E', margin: 0, lineHeight: 1.1 }}>
                            {recipe.title}
                        </h1>
                        <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 22, color: '#D97706', margin: '8px 0 20px' }}>
                            {recipe.subtitle}
                        </p>
                        <p style={{ fontSize: 16, color: 'rgba(75,46,26,0.7)', lineHeight: 1.7, marginBottom: 32 }}>
                            {recipe.description}
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, padding: '24px', background: 'white', borderRadius: 16, border: '1px solid rgba(75,46,26,0.07)' }}>
                            {[
                                ['⏱', recipe.time, 'Time'],
                                ['📊', recipe.difficulty, 'Level'],
                                ['⭐', recipe.rating, `${recipe.reviews} reviews`],
                                ['🔥', `${recipe.cal}`, 'kcal'],
                            ].map(([icon, val, lbl]) => (
                                <div key={String(lbl)} style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: 18, marginBottom: 4 }}>{icon}</div>
                                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: '#2D1A0E' }}>{val}</div>
                                    <div style={{ fontSize: 11, color: 'rgba(75,46,26,0.5)', fontWeight: 500 }}>{lbl}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px 80px' }}>
                <div style={{ background: 'white', borderRadius: 24, padding: 48, textAlign: 'center', border: '1px dashed rgba(217,119,6,0.3)' }}>
                    <div style={{ fontSize: 40, marginBottom: 12 }}>👨‍🍳</div>
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, color: '#2D1A0E', margin: '0 0 8px' }}>
                        Full recipe coming soon
                    </h2>
                    <p style={{ color: 'rgba(75,46,26,0.55)', fontSize: 14, margin: 0 }}>
                        Ingredients, step-by-step instructions, and chef's tips will be added here.
                    </p>
                </div>

                <div style={{ marginTop: 32, textAlign: 'center' }}>
                    <Link href="/recipes/breakfast" style={{ color: '#D97706', fontWeight: 600, textDecoration: 'none' }}>
                        ← Back to Breakfast recipes
                    </Link>
                </div>
            </section>
        </main>
    );
}
