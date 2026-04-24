'use client';
import StoryLayout, { StoryData } from '../../_components/StoryLayout';

const story: StoryData = {
    slug: 'five-flavours',
    category: 'Culinary Culture',
    categoryHref: '/stories/culture',
    tag: 'Philosophy',
    tagColor: '#7C3AED',
    title: 'The Five Flavours of Vietnamese Cooking',
    subtitle: 'Why balance is the most important ingredient',
    date: 'February 2025',
    readTime: '6 min read',
    heroImage: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=1600&q=85',
    sections: [
        {
            body: `Vietnamese cooking is governed by ngu vi — the five flavours: sour, bitter, sweet, spicy and salty. Every great dish holds them in tension, never letting one dominate. This is not just culinary preference. It is philosophy. It is how the Vietnamese understand the world.`,
        },
        {
            heading: 'Chua — Sour',
            body: `Sourness in Vietnamese cooking comes primarily from lime juice, tamarind, vinegar-pickled vegetables, and fermented ingredients. It cuts through fat, brightens broths, and wakes up the palate. The sourness in a bowl of bun rieu — crab tomato soup — is not decoration. It is the structural element that makes the richness of crab and pork bearable across an entire bowl.`,
            pullQuote: `Sourness is Vietnamese cooking's most honest flavour. It asks nothing of you except attention.`,
        },
        {
            heading: 'Dang — Bitter',
            body: `Bitterness is the most subtle of the five and the most misunderstood. It appears in the fresh herbs that accompany almost every Vietnamese meal — perilla, fish mint, bitter melon — and in the char on grilled meats. The slight bitterness of rau muong — morning glory — stir-fried with garlic provides counterpoint to the sweet richness of a braised pork dish. Vietnamese cooks rarely seek bitterness directly. They allow it to arrive through the natural character of ingredients.`,
        },
        {
            heading: 'Ngot — Sweet',
            body: `Sweetness in Vietnamese cooking is rarely the aggressive sweetness of dessert. It is the background sweetness of young coconut water in a braise, of caramelised shallots, of slowly simmered bones releasing their collagen into a broth. Rock sugar — duong phen — is preferred over refined sugar because its sweetness is rounder and less sharp. In the South, this sweetness is more present and more welcome than in the North, where cooks regard excessive sweetness with mild suspicion.`,
            image: 'https://images.unsplash.com/photo-1562802378-063ec186a863?auto=format&fit=crop&w=1200&q=85',
            imageCaption: 'Balance on a plate — fresh rolls carry all five flavours simultaneously',
        },
        {
            heading: 'Cay — Spicy',
            body: `Central Vietnam is the home of spice in Vietnamese cooking. Hue cuisine uses more chilli than anywhere else in the country — the royal city's food is both the most refined and the most fiercely hot. Fresh red chillies, dried chilli flakes, and fermented chilli paste (tuong ot) are deployed not for shock value but for the way heat opens up flavour and promotes perspiration in a hot climate. A bowl of bun bo Hue without sweat is a bowl of bun bo Hue that has not done its job.`,
        },
        {
            heading: 'Man — Salty',
            body: `Salt in Vietnamese cooking arrives almost entirely through fermented condiments — fish sauce, shrimp paste, soy sauce, fermented tofu. This is significant: these are not simply salty. They carry umami, complexity, and the particular depth that comes from microbial fermentation. Nuoc mam — Vietnamese fish sauce — is the foundation of the cuisine in the way that olive oil is the foundation of Italian cooking. To remove it is not to make the dish lighter. It is to make it unrecognisable.`,
            pullQuote: `Nuoc mam is not a condiment. It is the soul of the cuisine in liquid form.`,
        },
        {
            heading: 'The Balance',
            body: `What makes Vietnamese cooking extraordinary is not the individual flavours but the way they are held simultaneously. A single bite of goi cuon — fresh spring roll — contains sour lime in the dipping sauce, bitterness from perilla, sweetness from shrimp, mild spice from chilli, and saltiness from fish sauce. Nothing dominates. Everything is present. This is the governing principle of the cuisine and the reason Vietnamese food tastes unlike anything else — not because of any single ingredient, but because of the relationships between them.`,
        },
    ],
    relatedLinks: [
        { label: 'Pho History', href: '/stories/culture/pho-history', emoji: '📖' },
        { label: 'Fermentation Culture', href: '/stories/culture/fermentation-culture', emoji: '🧪' },
        { label: 'Fresh Spring Rolls', href: '/recipes/goi-cuon', emoji: '🌿' },
        { label: "Chef's Secrets", href: '/stories/chef-secrets', emoji: '👨‍🍳' },
    ],
};

export default function Page() {
    return <StoryLayout story={story} />;
} 
