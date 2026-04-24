'use client';
import StoryLayout, { StoryData } from '../../_components/StoryLayout';

const story: StoryData = {
    slug: 'bun-bo-hue',
    category: 'Travel Guide',
    categoryHref: '/stories/travel',
    tag: 'Street Food',
    tagColor: '#BE185D',
    title: "Where to Eat Bun Bo in Hue",
    subtitle: "The royal city's fiery, forgotten masterpiece",
    date: 'December 2024',
    readTime: '6 min read',
    heroImage: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=1600&q=85',
    sections: [
        {
            body: `Ask any Vietnamese chef which noodle soup deserves more global fame, and most will say: Bun Bo Hue. While pho gets the headlines, Hue's royal noodle soup quietly sits there being more complex, more layered, more brazenly spiced. The broth is lemongrass-forward and shrimp-paste-deep, tinted red from annatto oil. Thick round noodles. Slices of beef shank. A chunk of pork knuckle. It is theatrical and delicious.`,
        },
        {
            heading: 'The Broth',
            body: `The defining characteristic of bun bo Hue is its broth — built on lemongrass, shrimp paste (mam ruoc), annatto oil, and a long simmer of pork and beef bones. The result is something entirely different from pho: opaque, reddish-orange, intensely savoury with a funky depth from the shrimp paste, and a persistent warmth from chilli that builds throughout the bowl. In Hue, the spice level is calibrated for people who grew up eating it. First-time visitors should specify nhe (light spice) unless they are prepared.`,
            pullQuote: `Bun bo Hue does not ask if you are ready. It arrives and you decide.`,
        },
        {
            heading: 'Where to Go',
            body: `Bun Bo Mu Rot on Nguyen Cong Tru street is the address Hue residents give when asked. A family operation that has been running the same recipe for three generations. Queue forms at 6am. Sells out by 9am. No exceptions. Dong Ba market — Hue's central market — has a covered food hall where a dozen bun bo vendors operate side by side from dawn. The competition keeps the quality high and the prices reasonable. Arrive hungry.`,
            image: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&w=1200&q=85',
            imageCaption: 'Hue — the imperial city that gave Vietnam its spiciest noodle soup',
        },
        {
            heading: 'What to Order',
            body: `A full bowl contains beef shank (bo), pork knuckle (gio heo), and Vietnamese pork sausage (cha hue). Crab cake (cha cua) is the optional addition that makes the bowl extraordinary — a steamed puck of crab and pork that dissolves into the broth. Order it. On the side: rau song — a plate of banana blossom, bean sprouts, perilla, and Vietnamese mint. Wrap a piece of pork knuckle in banana blossom with herbs and eat it in one bite. This is the correct technique.`,
        },
        {
            heading: 'When to Go',
            body: `Bun bo Hue is a morning dish — eaten between 6 and 9am. Hue's rainy season (September to November) produces the best eating conditions: the soup tastes demonstrably better when the city is grey and damp and the morning air carries a chill. December to February is the peak tourist season but also the coldest period, when a bowl of fiery bun bo Hue is exactly what the temperature requires.`,
            pullQuote: `There is no bad time to eat bun bo Hue. There is only the correct morning time and the less correct afternoon time.`,
        },
    ],
    relatedLinks: [
        { label: 'Bun Bo Hue Recipe', href: '/recipes/bun-bo-hue', emoji: '🍜' },
        { label: 'Central Cuisine', href: '/recipes/central', emoji: '🌶️' },
        { label: 'Hue Royal Cuisine', href: '/stories/culture/hue-royal-cuisine', emoji: '👑' },
        { label: 'All Travel Guides', href: '/stories/travel', emoji: '🗺️' },
    ],
};

export default function Page() {
    return <StoryLayout story={story} />;
} 
