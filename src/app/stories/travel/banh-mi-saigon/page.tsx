'use client';
import StoryLayout, { StoryData } from '../../_components/StoryLayout';

const story: StoryData = {
    slug: 'banh-mi-saigon',
    category: 'Travel Guide',
    categoryHref: '/stories/travel',
    tag: 'Street Food',
    tagColor: '#059669',
    title: 'Where to Eat Banh Mi in Saigon',
    subtitle: 'A baguette that conquered the world from a sidewalk cart',
    date: 'February 2025',
    readTime: '5 min read',
    heroImage: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=1600&q=85',
    sections: [
        {
            body: `No culinary invention tells Vietnam's history better than a banh mi. The French brought the baguette to Vietnam in the 19th century. Vietnam took it, made the crust thinner and more shattering, the crumb lighter and more airy, and then filled it with things no French baker ever imagined. The bread shatters when you bite — that perfect crust — and then everything inside hits at once: silky pate, smoky grilled pork, the sharp bite of pickled daikon, cool cucumber, and a ghost of Maggi. It costs 20,000 dong. It is extraordinary.`,
        },
        {
            heading: 'The Essential Addresses',
            body: `Banh Mi Huynh Hoa at 26 Le Thi Rieng is Saigon's most celebrated banh mi, and the queue confirms it. The bread is extraordinary — baked fresh throughout the day, the crust shatters audibly when you squeeze it. The filling is generous to the point of structural challenge: thick layers of cha lua, roast pork, head cheese, pate, and pickles that make the sandwich nearly impossible to hold in one hand. Worth every minute of the queue. Banh Mi 37 Nguyen Trai is the best budget option — a simpler menu, shorter queue, and a sandwich that loses nothing in comparison.`,
            pullQuote: `A Saigon banh mi should be overfull. Ingredients falling out is not a flaw. It is generosity.`,
        },
        {
            heading: 'The Hoi An Variation',
            body: `Banh Mi Phuong in Hoi An — immortalised by Anthony Bourdain as the best banh mi in the world — is worth a detour. The Hoi An version uses a slightly different bread, marginally softer, and a rotating selection of fillings that changes by the hour. The morning queue stretches around the block. Go anyway.`,
            image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=1200&q=85',
            imageCaption: 'Egg banh mi — the 7am version that Saigon runs on',
        },
        {
            heading: 'What to Order',
            body: `Banh mi dac biet — special, with everything — is the correct order for a first visit. Banh mi op la — with a fried egg — is the 7am version, eaten standing up before work. Banh mi thit nuong — with grilled lemongrass pork — is the version worth making at home. All of them should be eaten within five minutes of purchase. The crust softens quickly in Saigon's heat.`,
        },
        {
            heading: 'When to Go',
            body: `Breakfast (7 to 9am) and late night (9 to 11pm) are the two peak banh mi hours in Saigon. The morning version is eaten on the way to work. The night version is eaten after dinner, because the Vietnamese do not consider a banh mi to be a meal — it is a snack that happens to be extraordinarily filling. Both times are correct. Neither requires a table.`,
            pullQuote: `Eat it standing up, over the street, in the sun or the rain. That is when it tastes best.`,
        },
    ],
    relatedLinks: [
        { label: 'Banh Mi Recipe', href: '/recipes/banh-mi-saigon', emoji: '🥖' },
        { label: 'Southern Cuisine', href: '/recipes/south', emoji: '🌴' },
        { label: 'Street Food Guide', href: '/recipes/street-food', emoji: '🥢' },
        { label: 'All Travel Guides', href: '/stories/travel', emoji: '🗺️' },
    ],
};

export default function Page() {
    return <StoryLayout story={story} />;
} 
