'use client';
import StoryLayout, { StoryData } from '../../_components/StoryLayout';

const story: StoryData = {
    slug: 'rice-civilization',
    category: 'Culinary Culture',
    categoryHref: '/stories/culture',
    tag: 'History',
    tagColor: '#166534',
    title: 'Rice: The Architecture of Vietnamese Civilisation',
    subtitle: 'How a grain shaped a people, a landscape, and a cuisine',
    date: 'November 2024',
    readTime: '9 min read',
    heroImage: 'https://images.unsplash.com/photo-1536304993881-ff86e0c9e6a0?auto=format&fit=crop&w=1600&q=85',
    sections: [
        {
            body: `The Vietnamese word for "to eat" is an com — literally, "to eat rice." Not to eat food. To eat rice. For two thousand years, rice has not just fed Vietnam — it has organised it. The rice paddy determined where villages were built, how communities cooperated, what festivals were held, and how the Vietnamese landscape came to look the way it does.`,
        },
        {
            heading: 'The Hydraulic Civilisation',
            body: `Wet rice cultivation requires water management at a scale that no individual farmer can achieve alone. The terraced paddies of the northern mountains — some of them two thousand years old — represent thousands of hours of collective labour spread across generations. The irrigation systems of the Mekong Delta move water across hundreds of kilometres of flat delta land. This infrastructure did not build itself. It required the kind of sustained community cooperation that shaped Vietnamese social organisation at its most fundamental level.`,
            pullQuote: `Vietnam did not build its irrigation systems to grow rice. It grew rice and learned, over centuries, how to build its irrigation systems.`,
        },
        {
            heading: 'Two Rices, Two Vietnams',
            body: `Vietnam grows two fundamentally different types of rice in two fundamentally different landscapes. In the Red River Delta of the North, farmers grow sticky glutinous rice in cool-season paddies — the foundation of xoi, banh troi, and the sticky rice dishes that define Northern festive cooking. In the Mekong Delta of the South, the warm, flooded plains produce long-grain jasmine rice in three harvests per year — the rice that feeds the country and fills Vietnam's enormous rice export industry. These two rices produce two different cuisines, two different food cultures, two different relationships with the grain.`,
            image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=85',
            imageCaption: 'Mekong Delta rice paddies — three harvests per year, feeding a nation',
        },
        {
            heading: 'The Sacred Grain',
            body: `In Vietnamese cosmology, rice is not simply food — it is sacred. The Than Lua — the Rice Spirit — is one of the most ancient Vietnamese deities, propitiated at harvest time with offerings and ceremonies that predate Buddhism and Confucianism in Vietnam. The lunar new year — Tet — is timed to the agricultural calendar. Banh chung — the sticky rice cake stuffed with mung bean and pork, wrapped in banana leaves — is the most important food of Tet: its square shape represents the earth, its ingredients represent the agricultural bounty of the land. To make banh chung without understanding its symbolism is to miss the point entirely.`,
        },
        {
            heading: 'Com Binh Dan — The Democratic Rice',
            body: `The com binh dan — literally "common people's rice" — is Vietnam's most important food institution and its least celebrated. These are the neighbourhood rice shops that serve a changing daily menu of rice with three or four side dishes for less money than a coffee costs in a Western city. They feed construction workers, office clerks, students, and retirees. They are not celebrated in food guides. They are not photographed for social media. They are simply there, every day, providing the nutritional foundation on which Vietnamese society runs. To understand Vietnamese food culture, you must understand the com binh dan first.`,
            pullQuote: `The com binh dan does not aspire to be anything other than what it is. That is precisely why it is irreplaceable.`,
        },
    ],
    relatedLinks: [
        { label: 'Xoi Xeo Recipe', href: '/recipes/xoi-xeo', emoji: '🍚' },
        { label: 'Hue Royal Cuisine', href: '/stories/culture/hue-royal-cuisine', emoji: '👑' },
        { label: 'Northern Cuisine', href: '/recipes/north', emoji: '🏯' },
        { label: 'Pho History', href: '/stories/culture/pho-history', emoji: '📖' },
    ],
};

export default function Page() {
    return <StoryLayout story={story} />;
} 
