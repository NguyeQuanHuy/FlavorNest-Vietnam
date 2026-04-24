'use client';
import StoryLayout, { StoryData } from '../../_components/StoryLayout';

const story: StoryData = {
    slug: 'pho-history',
    category: 'Culinary Culture',
    categoryHref: '/stories/culture',
    tag: 'Deep Dive',
    tagColor: '#D97706',
    title: 'The 100-Year History of Pho',
    subtitle: 'How a humble noodle soup became a national identity',
    date: 'March 2025',
    readTime: '8 min read',
    heroImage: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=1600&q=85',
    sections: [
        {
            body: `Nobody agrees on where pho came from. Some say it evolved from the French pot-au-feu. Others trace it to the Chinese noodle soups that arrived with Cantonese labourers in the late 19th century. What everyone agrees on is that by the 1920s, Hanoi's street corners smelled of star anise and charred ginger at 5am — and that smell has never really left.`,
        },
        {
            heading: 'The French Connection',
            body: `The word pho itself may derive from the French feu — fire, as in pot-au-feu, the slow-simmered French beef broth that colonial officers would have eaten in Hanoi's French Quarter restaurants. Vietnamese cooks working in those kitchens observed the technique and made it their own: the same long-simmered bones, but seasoned with fish sauce instead of salt, spiced with star anise and cinnamon instead of bouquet garni, and served with rice noodles instead of crusty bread.`,
            pullQuote: `The French gave Vietnam a technique. Vietnam gave it a soul.`,
        },
        {
            heading: 'Born in Nam Dinh, Raised in Hanoi',
            body: `Historians place the earliest pho vendors in Nam Dinh province, south of Hanoi, around 1910. These were itinerant street sellers carrying a portable stove and a single large pot balanced on a shoulder pole — the ganh pho. They moved through residential streets in the early morning, their arrival announced by the tap of a chopstick against the side of the pot. By the 1930s, the dish had moved permanently to Hanoi's Old Quarter, where fixed stalls replaced the shoulder pole vendors and the recipe began to stabilise into what we recognise today.`,
            image: 'https://images.unsplash.com/photo-1583032015879-e5022cb87c3b?auto=format&fit=crop&w=1200&q=85',
            imageCaption: 'Hanoi Old Quarter — where pho found its permanent home',
        },
        {
            heading: 'The Great Division',
            body: `The 1954 partition of Vietnam at the 17th parallel did more to shape pho than any single cook. When one million Northerners migrated south following the Geneva Accords, they brought their pho recipe with them. But Saigon had different tastes — sweeter, more abundant, more tropical. Southern pho acquired bean sprouts, fresh basil, hoisin sauce, and chilli. The Northern purists were horrified. They still are. In Hanoi today, a proper bowl of pho bo arrives with nothing but sliced beef, broth, and a few spring onions. The herbs table is not a feature of the Northern tradition. It is a Southern invention.`,
        },
        {
            heading: 'Pho Goes to War',
            body: `During the American War, pho became scarce in the North. Beef was rationed. Some vendors substituted pork, others chicken, others nothing at all — a thin, underpopulated broth that Hanoians ate anyway because it was what there was. The wartime pho ga — chicken pho — emerged partly from necessity and became its own beloved tradition. After reunification in 1975, the full beef version returned, and the reunified country discovered that it had two regional versions of its national dish that would never fully agree with each other.`,
        },
        {
            heading: 'The Diaspora Bowl',
            body: `The post-1975 Vietnamese diaspora carried pho to every continent. Vietnamese refugees opened restaurants in Paris, in Los Angeles, in Sydney, in Berlin — and pho was always on the menu, always the dish that connected the community to home. In Westminster, California — nicknamed Little Saigon — the pho restaurants that opened in the late 1970s are now multigenerational institutions. The recipe has not changed significantly in forty years. Some things do not need to.`,
            pullQuote: `Wherever Vietnamese people went, pho followed. It is not just a dish. It is a form of memory.`,
        },
    ],
    relatedLinks: [
        { label: 'Five Flavours', href: '/stories/culture/five-flavours', emoji: '⚖️' },
        { label: 'Hanoi Beef Pho Recipe', href: '/recipes/hanoi-beef-pho', emoji: '🍜' },
        { label: 'Northern Cuisine', href: '/recipes/north', emoji: '🏯' },
        { label: 'Travel Guide', href: '/stories/travel', emoji: '🗺️' },
    ],
};

export default function Page() {
    return <StoryLayout story={story} />;
} 
