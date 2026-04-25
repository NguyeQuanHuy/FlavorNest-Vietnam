'use client';
import StoryLayout, { StoryData } from '../../_components/StoryLayout';

const story: StoryData = {
    slug: 'banh-xeo-mekong',
    category: 'Travel Guide',
    categoryHref: '/stories/travel',
    tag: 'Local Favourite',
    tagColor: '#EA580C',
    title: 'Where to Eat Banh Xeo in the Mekong Delta',
    subtitle: 'The sizzling crepe that sounds like a rainstorm hitting a hot pan',
    date: 'November 2024',
    readTime: '5 min read',
    heroImage: '/images/recipes/banh-xeo.jpg',
    sections: [
        {
            body: `The name means sizzling cake — and the sound it makes when batter hits the wok is half the experience. Turmeric-yellow rice flour crepe, enormous, crispy-edged and stuffed fat with shrimp, pork belly, bean sprouts, and mung bean. You break it apart with your hands, wrap pieces in mustard leaf and herbs, dip into nuoc cham. No cutlery. No pretension. Just an ancient, perfect pleasure.`,
        },
        {
            heading: 'Mekong vs Saigon vs Central',
            body: `Three distinct versions of banh xeo exist across Vietnam. The Central version (banh xeo mien Trung) is small, thin, and extremely crispy — made with minimal batter and maximum heat. The Saigon version is larger and richer, with coconut milk in the batter. The Mekong Delta version is the largest of all — a full 30cm pan, filled generously, eaten communally. All three are excellent. The Mekong version is the most convivial, best suited to eating with a group of people who do not mind using their hands.`,
            pullQuote: `Banh xeo is not a dish you eat politely. It is a dish you eat joyfully.`,
        },
        {
            heading: 'Where to Go',
            body: `In Can Tho — the Mekong Delta's largest city — the floating market stalls and the riverside restaurants on Hai Ba Trung street serve the local version. Banh Xeo Muoi Xiem in Can Tho is the most-cited address among local food writers: a family restaurant that has been making the same recipe since the 1980s. In Saigon, Banh Xeo 46A on Dinh Cong Trang is the essential address for the Southern city version — still run by the founding family, still using the same cast iron pan.`,
            image: '/images/recipes/banh-xeo-mekong.jpg',
            imageCaption: 'Mekong Delta — the river basin that produces Vietnam most abundant cuisine',
        },
        {
            heading: 'How to Eat It',
            body: `Tear a piece of crepe with your fingers — the crispy edge first, where the batter has caramelised against the pan. Place it on a mustard leaf or large lettuce leaf. Add bean sprouts and a sprig each of mint and perilla. Roll tightly, dip in nuoc cham, eat in one bite. The crepe loses its crunch within minutes of leaving the pan. Eat fast. Order another.`,
        },
    ],
    relatedLinks: [
        { label: 'Banh Xeo Recipe', href: '/recipes/banh-xeo-mien-tay', emoji: '🥞' },
        { label: 'Southern Cuisine', href: '/recipes/south', emoji: '🌴' },
        { label: 'Street Food Culture', href: '/stories/culture/street-food-culture', emoji: '🥢' },
        { label: 'All Travel Guides', href: '/stories/travel', emoji: '🗺️' },
    ],
};

export default function Page() {
    return <StoryLayout story={story} />;
} 
