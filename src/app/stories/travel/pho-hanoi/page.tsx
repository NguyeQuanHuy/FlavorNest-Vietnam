'use client';
import StoryLayout, { StoryData } from '../../_components/StoryLayout';

const story: StoryData = {
    slug: 'pho-hanoi',
    category: 'Travel Guide',
    categoryHref: '/stories/travel',
    tag: 'Street Food',
    tagColor: '#D97706',
    title: 'Where to Eat Pho in Hanoi',
    subtitle: 'The bowl that haunts you long after you have left',
    date: 'March 2025',
    readTime: '6 min read',
    heroImage: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=1600&q=85',
    sections: [
        {
            body: `At 6am on a cold Hanoi morning, a plastic stool on Bat Dan street is the best seat in the world. The broth has been simmering since 3am. You smell it before you see the stall — that low, bone-deep perfume of charred ginger and star anise that only comes with hours of patience. This is not fast food. This is devotion in a bowl.`,
        },
        {
            heading: 'What Makes Hanoi Pho Different',
            body: `Hanoi pho is defined by restraint. The broth is clear, golden, and deeply savoury — built on beef bones, charred onion and ginger, and a precise spice bundle of star anise, cinnamon, cloves, and cardamom. The noodles are flat and silky. The beef is sliced paper-thin and added raw to the bowl, cooked only by the boiling broth poured over at service. There are no bean sprouts, no basil plate, no hoisin sauce. A small dish of sliced chilli and a wedge of lime arrive on the side. That is all. Northerners consider anything more to be interference.`,
            pullQuote: `Hanoi pho is not garnished. It is complete.`,
        },
        {
            heading: 'Where to Go',
            body: `Pho Bat Dan at 49 Bat Dan street in the Old Quarter is the most famous bowl in Hanoi — a queue forms before 6am and the pot sells out by mid-morning. The rules are non-negotiable: join the queue, take a bowl when it is your turn, sit wherever there is space. No reservations. No exceptions. The broth is extraordinary. Pho Thin at 13 Lo Duc street is the other essential address — famous for its stir-fried beef variation, where the meat is flash-fried in the wok before being added to the bowl. Both are worth the queue.`,
            image: 'https://images.unsplash.com/photo-1583032015879-e5022cb87c3b?auto=format&fit=crop&w=1200&q=85',
            imageCaption: 'Hanoi Old Quarter at dawn — the hour when pho is at its best',
        },
        {
            heading: 'When to Go',
            body: `Early morning, between 6 and 8am, is the canonical time for pho in Hanoi. The best vendors sell out before 10am. Going at lunch is acceptable. Going at dinner is possible but misses the point — pho in Hanoi is a morning ritual, eaten before the city fully wakes up, when the air is still cool and the broth is at its most concentrated.`,
        },
        {
            heading: 'What to Order',
            body: `Pho bo — beef pho — is the default. Specify tai (rare beef, added raw) or chin (well-done, cooked in the broth). Tai chin — both together — is the most popular order. Pho ga — chicken pho — is equally traditional and slightly lighter. Ask for them pho (extra broth) if you want more liquid. Gau (brisket with tendon) and nam (flank) are for the dedicated. A small dish of fried breadsticks (quay) to dip into the broth is essential and not optional.`,
            pullQuote: `Order tai chin, ask for extra broth, and do not let anyone watch you eat the fried breadstick. It gets messy. That is the point.`,
        },
    ],
    relatedLinks: [
        { label: 'Hanoi Beef Pho Recipe', href: '/recipes/hanoi-beef-pho', emoji: '🍜' },
        { label: 'Northern Cuisine', href: '/recipes/north', emoji: '🏯' },
        { label: 'Pho History', href: '/stories/culture/pho-history', emoji: '📖' },
        { label: 'All Travel Guides', href: '/stories/travel', emoji: '🗺️' },
    ],
};

export default function Page() {
    return <StoryLayout story={story} />;
}