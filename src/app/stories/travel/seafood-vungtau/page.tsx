'use client';
import StoryLayout, { StoryData } from '../../_components/StoryLayout';

const story: StoryData = {
    slug: 'seafood-vungtau',
    category: 'Travel Guide',
    categoryHref: '/stories/travel',
    tag: 'Seafood Paradise',
    tagColor: '#0284C7',
    title: 'Where to Eat Seafood in Vung Tau',
    subtitle: 'Where Saigonese escape the city to eat the ocean',
    date: 'October 2024',
    readTime: '5 min read',
    heroImage: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1600&q=85',
    sections: [
        {
            body: `Two hours from Saigon, the ocean opens up — and so does the menu. Nothing frozen. Everything alive until this morning. The fishing boats come in at 4am. By 7am, the seafood restaurants on Tran Phu boulevard have filled their tanks. By noon, those tanks are half-empty — and the city visitors are sitting with cold beer, cracked crab claws, and grilled squid that tastes of nothing but the sea it came from two hours ago.`,
        },
        {
            heading: 'What to Eat',
            body: `Vung Tau's signature dishes are built around what arrived that morning. Crab (cua) — steamed, grilled, or cooked in tamarind sauce — is the essential order. Scallops (so diep) grilled with spring onion oil and crushed peanuts are eaten by the dozen. Clams (ngheu) stir-fried with lemongrass and chilli arrive in a bowl the size of a mixing bowl. Grilled mantis shrimp (bong bong nuong) is the local delicacy that Saigon restaurants rarely carry. Order everything that looks alive and unfamiliar. You will not regret it.`,
            pullQuote: `The rule in Vung Tau: if you can see it swimming, order it.`,
        },
        {
            heading: 'Where to Go',
            body: `The seafood restaurants on Tran Phu and Ha Long streets on the Back Beach are the primary destination. Ganh Hao on Tran Hung Dao is the most celebrated address for crab — a large open-air restaurant that fills by 6pm and requires reservations on weekends. The Vung Tau fish market (Cho Ca) on the waterfront is worth visiting at dawn when the boats come in — not for eating but for understanding where the food comes from.`,
            image: 'https://images.unsplash.com/photo-1559181567-c3190ca9be38?auto=format&fit=crop&w=1200&q=85',
            imageCaption: 'Fresh seafood — the reason Saigonese drive two hours to Vung Tau on weekends',
        },
        {
            heading: 'The Vung Tau Breakfast',
            body: `Vung Tau has its own breakfast culture distinct from Saigon. Banh khot — miniature turmeric rice cakes topped with shrimp, cooked in a cast-iron mould pan — are the city's most beloved morning dish. Found at markets and street stalls from 6am. Eaten hot, wrapped in mustard leaf, dipped in nuoc cham. If you drive down from Saigon on a Saturday morning and eat banh khot for breakfast before the seafood lunch, you will have constructed a nearly perfect food day.`,
            pullQuote: `Banh khot for breakfast. Crab for lunch. Cold beer throughout. This is the Vung Tau formula.`,
        },
        {
            heading: 'When to Go',
            body: `Weekends year-round bring Saigonese day-trippers, so weekday visits offer shorter queues and more relaxed dining. The dry season (November to April) means calmer seas and fresher fish. Avoid major Vietnamese holidays — Tet in particular — when the city is overwhelmed with visitors and many restaurants run out of their best seafood by noon.`,
        },
    ],
    relatedLinks: [
        { label: 'Southern Cuisine', href: '/recipes/south', emoji: '🌴' },
        { label: 'Lau Thai Recipe', href: '/recipes/lau-thai', emoji: '🍲' },
        { label: 'All Travel Guides', href: '/stories/travel', emoji: '🗺️' },
        { label: 'Street Food Culture', href: '/stories/culture/street-food-culture', emoji: '🥢' },
    ],
};

export default function Page() {
    return <StoryLayout story={story} />;
} 
