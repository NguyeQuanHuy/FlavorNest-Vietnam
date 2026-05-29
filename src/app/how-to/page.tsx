'use client';

import Link from 'next/link';


const GUIDES = [
    {
        category: 'Broths & Soups',
        color: '#D97706',
        items: [
            { title: 'How to Make a Crystal-Clear Pho Broth', slug: 'pho-bo-ha-noi', desc: 'Blanching bones, charring aromatics, the correct simmer. Everything that separates great phở from average.', time: '8 hrs', level: 'Advanced' },
            { title: 'How to Build Bún Bò Huế Broth', slug: 'hue-spicy-beef-noodle-soup', desc: 'Lemongrass oil, annatto color, mắm ruốc — the three elements that make this broth unmistakable.', time: '3 hrs', level: 'Intermediate' },
            { title: 'How to Make Canh Chua (Vietnamese Sour Soup)', slug: 'canh-chua', desc: 'Tamarind souring, pineapple sweetness, fresh herbs. The soup of the Mekong Delta.', time: '40 min', level: 'Easy' },
        ],
    },
    {
        category: 'Rolling & Wrapping',
        color: '#166534',
        items: [
            { title: 'How to Roll Perfect Gỏi Cuốn (Fresh Spring Rolls)', slug: 'fresh-spring-rolls', desc: 'Wet the rice paper correctly, layer the filling strategically, roll tight. The technique takes 3 tries to master.', time: '30 min', level: 'Easy' },
            { title: 'How to Wrap Bánh Cuốn (Steamed Rice Rolls)', slug: 'banh-uot-dau-he', desc: 'Spreading the batter thin, peeling the sheet without tearing, rolling with filling inside. The most delicate technique in Vietnamese cooking.', time: '45 min', level: 'Intermediate' },
            { title: 'How to Make Bánh Mì at Home', slug: 'banh-mi', desc: 'The bread, the pâté, the pickles — assembled in the right order. Why each layer matters.', time: '30 min', level: 'Easy' },
        ],
    },
    {
        category: 'Sauces & Condiments',
        color: '#7C3AED',
        items: [
            { title: 'How to Balance Nước Chấm (Vietnamese Dipping Sauce)', slug: 'nuoc-cham-guide', desc: 'The 3:2:4 ratio of fish sauce, sugar, water. How to adjust for each dish. Why fresh lime matters.', time: '5 min', level: 'Easy' },
            { title: 'How to Make Scallion Oil (Dầu Hành)', slug: 'banh-uot-dau-he', desc: 'Hot oil poured over sliced scallions until they sizzle. The technique that makes cơm tấm taste like Saigon.', time: '10 min', level: 'Easy' },
            { title: 'How to Make Vietnamese Pickled Vegetables (Đồ Chua)', slug: 'banh-mi', desc: 'Julienne the daikon and carrot, salt to draw moisture, pickle in rice vinegar. The crunch that makes bánh mì great.', time: '40 min', level: 'Easy' },
        ],
    },
    {
        category: 'Coffee',
        color: '#92400E',
        items: [
            { title: 'How to Use a Vietnamese Phin Filter', slug: 'ca-phe-sua-da', desc: 'Water temperature, bloom time, why you wait. The phin is designed to make patience mandatory.', time: '8 min', level: 'Easy' },
            { title: 'How to Make Cà Phê Trứng (Egg Coffee)', slug: 'ca-phe-trung', desc: 'Whipping the egg yolk to ribbon stage, spooning it over hot coffee, eating the foam with a spoon first.', time: '10 min', level: 'Easy' },
            { title: 'How to Make Cà Phê Muối (Salt Coffee)', slug: 'ca-phe-muoi', desc: 'Salted cream over dark coffee. Why the layers must stay separate. The Huế technique.', time: '8 min', level: 'Easy' },
        ],
    },
    {
        category: 'Rice & Noodles',
        color: '#0369A1',
        items: [
            { title: 'How to Cook Perfect Vietnamese Jasmine Rice', slug: 'com-tam', desc: 'The wash, the ratio, the rest. Why rice cooker results differ from stovetop. The 10-minute rest is not optional.', time: '25 min', level: 'Easy' },
            { title: 'How to Cook Phở Noodles (Bánh Phở)', slug: 'pho-bo-ha-noi', desc: 'Fresh vs dried, correct blanching time, why you never cook them in the broth. The starch question.', time: '5 min', level: 'Easy' },
            { title: 'How to Make Mì Quảng at Home', slug: 'mi-quang', desc: 'Annatto oil, the concentrated broth, the sesame cracker. Why this dish is not a soup.', time: '75 min', level: 'Intermediate' },
        ],
    },
    {
        category: 'Essential Techniques',
        color: '#2D1A0E',
        items: [
            { title: 'How to Char Vietnamese Aromatics (Onion & Ginger)', slug: 'pho-bo-ha-noi', desc: 'Direct flame or broiler, the correct level of blackening, why char adds sweetness not bitterness.', time: '10 min', level: 'Easy' },
            { title: 'How to Make Crispy Fried Shallots', slug: 'dong-suong-rau-cau', desc: 'Cold oil start, low heat, pulling them before they look done. The single most reusable Vietnamese technique.', time: '20 min', level: 'Easy' },
            { title: 'How to Use the Vietnamese Herb Plate', slug: 'vietnamese-herb-plate-guide', desc: 'Which herbs go with which dishes, in what order, in what quantity. The herb plate is half the dish.', time: '5 min', level: 'Essential', isStory: true },
            { title: 'How to Make a Crystal-Clear Vietnamese Broth', slug: 'vietnamese-broth', desc: 'Blanch bones first, never boil during long simmer, strain through fine mesh. The 3 rules that separate great phở from mediocre.', time: '7 min read', level: 'Advanced', isHowTo: true },
            { title: 'How to Marinate Meat Vietnamese Style', slug: 'marinate-meat', desc: 'The 4-element formula: fish sauce, sugar, aromatics, fat. How long to marinate each protein. 3 classic Vietnamese marinades.', time: '6 min read', level: 'Intermediate', isHowTo: true },
            { title: 'How to Balance Vietnamese Flavors', slug: 'balance-flavors', desc: 'Sweet, sour, salty, bitter, spicy — the 5-element framework. How to fix any dish that tastes wrong. The nước chấm practice exercise.', time: '7 min read', level: 'Essential', isHowTo: true },
            { title: 'Nêm Nếm: How to Season Vietnamese Food So It Actually Tastes Right', slug: 'season-vietnamese-food', desc: 'Fish sauce, sugar, lime, MSG — what each one does and when to add it. The 4-stage tasting sequence. How to fix any dish that tastes bland, harsh, or flat.', time: '8 min read', level: 'Essential', isHowTo: true },
            { title: 'How to Make Vietnamese Rice Paper (Bánh Tráng) from Scratch', slug: 'rice-paper', desc: 'Rice flour + tapioca batter, cloth-steaming technique, cold-start method. Why Tây Ninh rice paper is different. 6 troubleshooting fixes.', time: '45 min', level: 'Intermediate', isHowTo: true },
            { title: 'How to Make Crispy Fried Shallots (Hành Phi)', slug: 'fried-shallots', desc: 'Cold-start in oil, pull when pale gold not golden-brown, spread immediately. The technique that tops phở, cơm tấm, bánh cuốn, and everything else.', time: '15 min', level: 'Easy', isHowTo: true },
            { title: 'How to Steam Food Vietnamese Style (Hấp)', slug: 'steam-food', desc: '3 rules of Vietnamese steaming, complete time reference for 12 ingredients, aromatics in the water, cá hấp and gà hấp technique notes.', time: '7 min read', level: 'Intermediate', isHowTo: true },
        ],
    },
    {
        category: 'Kitchen & Equipment',
        color: '#92400E',
        items: [
            { title: 'How to Set Up a Vietnamese Kitchen', slug: 'vietnamese-kitchen-setup', desc: 'Carbon steel wok vs non-stick, how to clean dishes safely, what you actually need vs what you don\'t.', time: '8 min read', level: 'Essential', isHowTo: true },
            { title: 'How to Season and Care for a Carbon Steel Wok', slug: 'season-wok', desc: 'Strip the factory coating, build seasoning in 4 layers, daily 60-second care routine. Troubleshooting sticky, patchy, or rusty seasoning.', time: '7 min read', level: 'Essential', isHowTo: true },
            { title: 'Vietnamese Knife Skills: How to Cut Every Ingredient Correctly', slug: 'knife-skills', desc: 'How to bruise lemongrass, slice paper-thin beef for phở, julienne daikon for đồ chua, chiffonade herbs without bruising. The claw grip explained.', time: '8 min read', level: 'Essential', isHowTo: true },
        ],
    },
    { title: 'Nêm Nếm: How to Season Vietnamese Food So It Actually Tastes Right', slug: 'season-vietnamese-food', desc: '6 seasoning agents and what each one does. The 4-stage tasting sequence. How to fix any dish that tastes bland, harsh, flat, or sour.', time: '8 min read', level: 'Essential', isHowTo: true },
];

const LEVEL_COLOR: Record<string, string> = {
    Easy: '#166534',
    Intermediate: '#D97706',
    Advanced: '#DC2626',
    Essential: '#7C3AED',
};

export default function HowToPage() {
    return (
        <div style={{ minHeight: '100vh', background: '#FAFAF7', paddingTop: '100px', paddingBottom: '80px', fontFamily: 'DM Sans, sans-serif' }}>

            {/* Hero */}
            <div style={{ maxWidth: '900px', margin: '0 auto', padding: '48px 24px 56px', textAlign: 'center' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                    <div style={{ width: '32px', height: '2px', background: '#D97706' }} />
                    <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', color: '#D97706', textTransform: 'uppercase' }}>Technique Guides</span>
                    <div style={{ width: '32px', height: '2px', background: '#D97706' }} />
                </div>
                <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 700, color: '#2D1A0E', lineHeight: 1.1, marginBottom: '20px' }}>
                    How To Cook Vietnamese Food
                </h1>
                <p style={{ fontSize: '1.1rem', color: 'rgba(75,46,26,0.6)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
                    The techniques behind the recipes. Learn the building blocks of Vietnamese cooking — from broth clarity to herb plate assembly — and every recipe becomes easier.
                </p>
            </div>

            {/* Guides grid */}
            <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
                {GUIDES.map((group) => (
                    <div key={group.category} style={{ marginBottom: '56px' }}>
                        {/* Category header */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                            <div style={{ width: '4px', height: '28px', background: group.color, borderRadius: '2px', flexShrink: 0 }} />
                            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 700, color: '#2D1A0E', margin: 0 }}>{group.category}</h2>
                        </div>

                        {/* Cards */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
                            {group.items.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.isHowTo ? `/how-to/${item.slug}` : item.isStory ? `/stories/${item.slug}` : `/recipes/${item.slug}`}
                                    style={{ textDecoration: 'none', display: 'block' }}
                                >
                                    <div style={{
                                        background: '#fff',
                                        border: '1px solid rgba(75,46,26,0.08)',
                                        borderRadius: '8px',
                                        padding: '20px',
                                        height: '100%',
                                        transition: 'box-shadow 0.2s, transform 0.2s',
                                        cursor: 'pointer',
                                        borderLeft: `4px solid ${group.color}`,
                                    }}
                                        onMouseEnter={e => {
                                            (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 32px rgba(75,46,26,0.12)';
                                            (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)';
                                        }}
                                        onMouseLeave={e => {
                                            (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                                            (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                                        }}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px', gap: '8px' }}>
                                            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', fontWeight: 700, color: '#2D1A0E', margin: 0, lineHeight: 1.4 }}>{item.title}</h3>
                                        </div>
                                        <p style={{ fontSize: '13px', color: 'rgba(75,46,26,0.6)', lineHeight: 1.6, margin: '0 0 16px' }}>{item.desc}</p>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'space-between' }}>
                                            <div style={{ display: 'flex', gap: '8px' }}>
                                                <span style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(75,46,26,0.45)', background: 'rgba(75,46,26,0.05)', padding: '3px 8px', borderRadius: '100px' }}>⏱ {item.time}</span>
                                                <span style={{ fontSize: '11px', fontWeight: 600, color: LEVEL_COLOR[item.level], background: `${LEVEL_COLOR[item.level]}15`, padding: '3px 8px', borderRadius: '100px' }}>{item.level}</span>
                                            </div>
                                            <span style={{ fontSize: '13px', color: group.color, fontWeight: 600 }}>Read →</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom CTA */}
            <div style={{ maxWidth: '600px', margin: '0 auto', padding: '48px 24px 0', textAlign: 'center' }}>
                <p style={{ fontSize: '1rem', color: 'rgba(75,46,26,0.5)', marginBottom: '24px', lineHeight: 1.6 }}>
                    Ready to cook? Browse the full recipe collection.
                </p>
                <Link href="/recipes" style={{ display: 'inline-block', background: '#D97706', color: 'white', fontWeight: 600, fontSize: '14px', padding: '14px 32px', borderRadius: '100px', textDecoration: 'none', letterSpacing: '0.05em' }}>
                    Browse All Recipes →
                </Link>
            </div>
        </div>
    );
}
