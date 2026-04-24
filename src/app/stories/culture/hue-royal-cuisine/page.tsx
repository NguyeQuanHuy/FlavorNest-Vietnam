'use client';
import StoryLayout, { StoryData } from '../../_components/StoryLayout';

const story: StoryData = {
    slug: 'hue-royal-cuisine',
    category: 'Culinary Culture',
    categoryHref: '/stories/culture',
    tag: 'Heritage',
    tagColor: '#BE185D',
    title: "The Lost Art of Hue's Royal Cuisine",
    subtitle: 'How the imperial kitchen shaped Central Vietnamese cooking',
    date: 'October 2024',
    readTime: '7 min read',
    heroImage: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=1600&q=85',
    sections: [
        {
            body: `When the Nguyen emperors moved the capital to Hue in 1802, they brought their chefs with them — and demanded that every meal be both beautiful and extraordinary. The result was a royal cuisine of unparalleled refinement, where fifty small dishes replaced one large one, and every bite was a considered act of aesthetics.`,
        },
        {
            heading: 'The Imperial Kitchen',
            body: `The Nguyen dynasty ruled Vietnam from 1802 to 1945, and for 143 years the imperial kitchen in Hue was the most demanding culinary institution in the country. The emperor's meals required a minimum of fifty dishes, served simultaneously, each one prepared by a specialist cook. There were cooks who made only soups, cooks who worked only with vegetables, cooks dedicated entirely to rice preparations. The organisational complexity of producing a single imperial meal would not look out of place in a modern Michelin three-star kitchen.`,
            pullQuote: `The Nguyen emperors did not eat. They staged performances in which food happened to be the medium.`,
        },
        {
            heading: 'Small Dishes, Maximum Complexity',
            body: `The defining characteristic of Hue royal cuisine is the small dish — the bite-sized, individually crafted preparation that demands as much skill as a full-sized dish but delivers it in a single mouthful. Banh beo — steamed rice cakes in individual saucers. Banh nam — flat banana-leaf parcels of translucent rice dough. Banh loc — clear tapioca dumplings with shrimp and pork. Each of these dishes requires a separate set of techniques, separate equipment, and a cook who has spent years learning to execute it correctly. The imperial court created the conditions in which this level of specialisation was not only possible but required.`,
            image: 'https://images.unsplash.com/photo-1562802378-063ec186a863?auto=format&fit=crop&w=1200&q=85',
            imageCaption: 'Banh beo — one of dozens of Hue royal snacks still made today',
        },
        {
            heading: 'The Democratisation of Royal Food',
            body: `When the last Nguyen emperor, Bao Dai, abdicated in 1945, the imperial kitchen dispersed. The cooks returned to their home villages and neighbourhoods, carrying with them the techniques and recipes of the royal table. Within a generation, dishes that had been made exclusively for emperors were being sold from street stalls and home kitchens across Hue. The democratisation was complete and irreversible. Today, banh beo costs almost nothing and is eaten standing up outside the market. It is no less extraordinary for that.`,
        },
        {
            heading: 'What Survives',
            body: `Not everything survived the transition from palace to street. The most elaborate imperial preparations — the carved vegetable sculptures, the multi-day braised dishes, the ceremonial rice cakes made only for specific festivals — exist now only in cookbooks and the memories of the oldest Hue families. What did survive is a cooking culture with an unusually high tolerance for difficulty and complexity, an aesthetic sensibility that prioritises beauty alongside flavour, and a repertoire of small dishes that remain among the most technically demanding in Vietnamese cuisine. Hue is the only city in Vietnam where the market food regularly looks like it was designed.`,
            pullQuote: `In Hue, even the cheapest street food carries the memory of the imperial table. You taste it in every bite.`,
        },
    ],
    relatedLinks: [
        { label: 'Banh Beo Recipe', href: '/recipes/banh-beo', emoji: '🫙' },
        { label: 'Bun Bo Hue', href: '/recipes/bun-bo-hue', emoji: '🍜' },
        { label: 'Central Cuisine', href: '/recipes/central', emoji: '🌶️' },
        { label: 'Rice Civilisation', href: '/stories/culture/rice-civilization', emoji: '🌾' },
    ],
};

export default function Page() {
    return <StoryLayout story={story} />;
} 
