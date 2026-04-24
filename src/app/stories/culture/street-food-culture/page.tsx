'use client';
import StoryLayout, { StoryData } from '../../_components/StoryLayout';

const story: StoryData = {
    slug: 'street-food-culture',
    category: 'Culinary Culture',
    categoryHref: '/stories/culture',
    tag: 'Culture',
    tagColor: '#EA580C',
    title: 'Why the Best Meals Are Eaten on the Street',
    subtitle: "The philosophy behind Vietnam's sidewalk food culture",
    date: 'December 2024',
    readTime: '5 min read',
    heroImage: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=1600&q=85',
    sections: [
        {
            body: `In Vietnam, the street is not where you eat because you have no other option. The street is where you eat because it is the best option. The vendor who has made nothing but banh mi for thirty years knows more about that sandwich than any chef.`,
        },
        {
            heading: 'Specialisation as Mastery',
            body: `Vietnamese street food is built on radical specialisation. A pho vendor makes pho. A banh mi cart makes banh mi. A bun cha stall makes bun cha. Nothing else. This is not limitation — it is philosophy. The vendor who has made one dish for twenty years has refined it to a degree of precision that a restaurant menu of forty items can never achieve. The charcoal used, the temperature of the broth, the exact ratio of fat to lean in the pork patties — these are not written down anywhere. They live in muscle memory.`,
            pullQuote: `A thirty-year-old banh mi recipe is not old. It is perfected.`,
        },
        {
            heading: 'The Plastic Stool as Equaliser',
            body: `Vietnamese street food is democratic in a way that restaurants rarely are. The plastic stool does not distinguish between a factory worker and a government official, between a tourist and a local, between someone who can afford more and someone who cannot. Everyone sits at the same low table, eats from the same bowls, pays approximately the same price. The street is one of the few spaces in Vietnamese society where economic difference becomes, for the duration of a meal, genuinely irrelevant.`,
            image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=85',
            imageCaption: 'Plastic stools, the great equaliser of Vietnamese street dining',
        },
        {
            heading: 'The Morning Ritual',
            body: `Vietnamese street food culture is overwhelmingly a morning phenomenon. The most celebrated dishes — pho, banh mi, bun cha, banh cuon, xoi xeo — are eaten before 9am. The best vendors often sell out by mid-morning. This is not accident. The logic is practical: ingredients are freshest in the morning, the heat has not yet made sitting outside uncomfortable, and the Vietnamese working day begins early enough that breakfast is a serious meal rather than an afterthought.`,
        },
        {
            heading: 'What Is Being Lost',
            body: `Urban development, food safety regulations, and rising rents are gradually displacing street food vendors from the cities where they have operated for generations. Hanoi's Old Quarter has seen dozens of historic food alleys transformed into souvenir shops. Saigon's street vendors operate under an increasingly uncertain regulatory environment. The knowledge carried by individual vendors — their suppliers, their techniques, their recipes — is not documented anywhere. When they retire or are displaced, it does not transfer. It disappears.`,
            pullQuote: `Every time a street vendor retires without passing on their recipe, Vietnam loses something it will never recover.`,
        },
    ],
    relatedLinks: [
        { label: 'Banh Mi Recipe', href: '/recipes/banh-mi-saigon', emoji: '🥖' },
        { label: 'Street Food Guide', href: '/recipes/street-food', emoji: '🥢' },
        { label: 'Travel Guide', href: '/stories/travel', emoji: '🗺️' },
        { label: 'Rice Civilisation', href: '/stories/culture/rice-civilization', emoji: '🌾' },
    ],
};

export default function Page() {
    return <StoryLayout story={story} />;
} 
