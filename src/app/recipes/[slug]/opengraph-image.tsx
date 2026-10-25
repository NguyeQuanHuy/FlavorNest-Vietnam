import { ImageResponse } from 'next/og';
import { recipes } from '@/data/recipes';

export const alt = 'FlavorNest Vietnam Recipe';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const recipe = recipes.find(r => r.slug === slug);

    if (!recipe) {
        return new ImageResponse(
            (
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#F5EDE3',
                        fontFamily: 'sans-serif',
                        fontSize: 48,
                        color: '#2D1A0E',
                    }}
                >
                    FlavorNest Vietnam
                </div>
            ),
            { ...size }
        );
    }

    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#2D1A0E',
                    position: 'relative',
                    fontFamily: 'sans-serif',
                }}
            >
                {/* Top accent bar */}
                <div
                    style={{
                        width: '100%',
                        height: 6,
                        background: 'linear-gradient(to right, #D97706, #F59E0B, #D97706)',
                        display: 'flex',
                    }}
                />

                {/* Main content */}
                <div
                    style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        padding: '48px 64px',
                        gap: 20,
                    }}
                >
                    {/* Category badge */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <span
                            style={{
                                backgroundColor: '#D97706',
                                color: '#fff',
                                fontSize: 16,
                                fontWeight: 700,
                                padding: '6px 18px',
                                borderRadius: 24,
                                textTransform: 'uppercase',
                                letterSpacing: 1,
                            }}
                        >
                            {recipe.category}
                        </span>
                        <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16 }}>
                            ⭐ {recipe.rating.toFixed(1)}  ·  ⏱ {recipe.totalTime}  ·  📊 {recipe.difficulty}
                        </span>
                    </div>

                    {/* Title */}
                    <div
                        style={{
                            fontSize: 56,
                            fontWeight: 800,
                            color: '#F5EDE3',
                            lineHeight: 1.15,
                            maxWidth: '90%',
                            display: 'flex',
                        }}
                    >
                        {recipe.title}
                    </div>

                    {/* Short description */}
                    <div
                        style={{
                            fontSize: 22,
                            color: 'rgba(245,237,227,0.7)',
                            lineHeight: 1.5,
                            maxWidth: '80%',
                            display: 'flex',
                        }}
                    >
                        {(recipe.shortDescription || '').slice(0, 120)}
                    </div>
                </div>

                {/* Bottom brand bar */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '20px 64px',
                        borderTop: '1px solid rgba(217,119,6,0.3)',
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span style={{ fontSize: 28 }}>🍜</span>
                        <span style={{ fontSize: 22, fontWeight: 700, color: '#D97706' }}>
                            FlavorNest Vietnam
                        </span>
                    </div>
                    <span style={{ fontSize: 16, color: 'rgba(245,237,227,0.4)' }}>
                        flavor-nest-vietnam.vercel.app
                    </span>
                </div>
            </div>
        ),
        { ...size }
    );
}
