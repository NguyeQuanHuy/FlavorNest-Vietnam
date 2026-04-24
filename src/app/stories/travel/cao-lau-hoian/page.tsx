'use client';
import StoryLayout, { StoryData } from '../../_components/StoryLayout';

const story: StoryData = {
    slug: 'cao-lau-hoian',
    category: 'Travel Guide',
    categoryHref: '/stories/travel',
    tag: 'Hidden Gem',
    tagColor: '#7C3AED',
    title: 'Where to Eat Cao Lau in Hoi An',
    subtitle: 'A dish you can only truly eat in one town on Earth',
    date: 'January 2025',
    readTime: '5 min read',
    heroImage: 'https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=1600&q=85',
    sections: [
        {
            body: `Legend says the noodles can only be made with water from a single ancient Cham well in Hoi An's old town. Whether or not you believe the legend, cao lau is undeniably tied to one place. Take it out of Hoi An and something changes. The noodles are thick and chewy — ash-treated, slightly yellow, with a texture between Chinese noodles and Japanese udon. Topped with crispy rice crackers, sliced char siu pork, and a thicket of fresh herbs, with just enough broth to moisten everything. It is not a soup. It is its own category.`,
        },
        {
            heading: 'What Makes It Unique',
            body: `Cao lau noodles are treated with ash-lye water, a technique that gives them their distinctive texture and slight alkalinity. The ash traditionally comes from wood burned on the Cham Islands offshore, and the water from a specific well in the old town. In practice, most restaurants now use commercially produced lye water — but the technique and the flavour remain distinctive. No other Vietnamese noodle dish tastes quite like cao lau, and no version made outside Hoi An fully replicates the one eaten here.`,
            pullQuote: `Cao lau is the rare dish that refuses to travel. It insists you come to it.`,
        },
        {
            heading: 'Where to Go',
            body: `Truong Minh Luong at 45 Tran Phu in the old town is the most celebrated address — a small shophouse with outdoor seating and a recipe unchanged for decades. Arrive before 10am. Co Ba Hoi An near the market is the local favourite — simpler surroundings, shorter queue, equally good bowl. Avoid any restaurant on the main tourist drag that lists cao lau alongside twenty other dishes — the best cao lau comes from vendors who make only cao lau.`,
            image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=85',
            imageCaption: 'Hoi An old town — lanterns, ancient streets, and the best noodles in Central Vietnam',
        },
        {
            heading: 'When to Go',
            body: `Morning is the canonical time — the old town is quieter, the air is cooler, and the cao lau vendors are at their freshest. Hoi An's tourist peak (December to February) means queues and crowds. The shoulder seasons — April, May, September, October — offer shorter waits and better light for photographs. Avoid midday in summer: eating outdoors in 38C heat changes the experience significantly.`,
        },
    ],
    relatedLinks: [
        { label: 'Cao Lau Recipe', href: '/recipes/cao-lau', emoji: '🍜' },
        { label: 'Central Cuisine', href: '/recipes/central', emoji: '🌶️' },
        { label: 'Hue Royal Cuisine', href: '/stories/culture/hue-royal-cuisine', emoji: '👑' },
        { label: 'All Travel Guides', href: '/stories/travel', emoji: '🗺️' },
    ],
};

export default function Page() {
    return <StoryLayout story={story} />;
} 
