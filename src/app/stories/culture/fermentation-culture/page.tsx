'use client';
import StoryLayout, { StoryData } from '../../_components/StoryLayout';

const story: StoryData = {
    slug: 'fermentation-culture',
    category: 'Culinary Culture',
    categoryHref: '/stories/culture',
    tag: 'Traditions',
    tagColor: '#059669',
    title: "Vietnam's Secret Ingredient: Fermentation",
    subtitle: 'Mam, nuoc cham, and the alchemy of time',
    date: 'January 2025',
    readTime: '7 min read',
    heroImage: 'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=1600&q=85',
    sections: [
        {
            body: `The smell hits you before you see it — a deep, oceanic, almost aggressive fermented funk that Vietnamese cooks consider essential and first-time visitors find alarming. Fish sauce. Shrimp paste. Fermented tofu. These are not flavourings. They are the soul of Vietnamese cooking.`,
        },
        {
            heading: 'What Fermentation Does',
            body: `Fermentation is the transformation of ingredients by microorganisms — bacteria, yeasts, moulds — over time. In Vietnamese cooking, this process is applied primarily to seafood and produces a family of condiments that deliver umami, complexity, and a particular oceanic depth that no fresh ingredient can replicate. The process concentrates flavour, extends shelf life, and creates entirely new taste compounds that did not exist in the original ingredient.`,
            pullQuote: `Fermentation is patience made edible. Time is the ingredient no recipe lists.`,
        },
        {
            heading: 'Nuoc Mam — The National Condiment',
            body: `Vietnamese fish sauce — nuoc mam — is made by layering fresh anchovies with sea salt in large wooden barrels and allowing them to ferment for twelve to eighteen months. The liquid that drains from the bottom of the barrel is collected, filtered, and graded by protein content and colour. The first pressing — nuoc mam nhi — is the darkest, richest, and most expensive. Subsequent pressings are lighter and cheaper. Phu Quoc island produces what most Vietnamese consider the finest nuoc mam in the country, protected by a geographic indication that prevents the name from being used for fish sauce made elsewhere.`,
            image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1200&q=85',
            imageCaption: 'Fish sauce barrels — twelve to eighteen months of patience',
        },
        {
            heading: 'Mam Tom — The Acquired Taste',
            body: `Shrimp paste — mam tom — is fermentation taken further. Small shrimp are ground with salt and left to ferment in the sun for weeks, producing a thick, purple-grey paste with an aroma so assertive it requires commitment from everyone within a reasonable distance. Central and Southern Vietnamese cooking uses mam tom extensively — it is essential in bun bo Hue, com hen, and lau mam. Northerners use it more sparingly. In all cases, the paste is never used raw. A small amount mixed with lime juice and sugar, or dissolved into a broth, produces a depth of flavour that no amount of fresh seafood can substitute.`,
        },
        {
            heading: 'Dua Cai — Fermented Vegetables',
            body: `Vietnam's fermented vegetable tradition is less famous than its fish sauce culture but equally important. Dua cai — fermented mustard greens — are the essential accompaniment to thit kho tau, their sourness cutting the richness of braised pork belly and coconut water. Dua gia — bean sprout kimchi — is eaten with bun bo Hue. Ca muoi chua — salt-fermented eggplant — appears across the Central region. These are not condiments. They are structural components of their respective dishes — as essential as the protein itself.`,
            pullQuote: `Every great Vietnamese braise has a fermented counterpart on the table. The two are in conversation, not competition.`,
        },
        {
            heading: 'The Future of Vietnamese Fermentation',
            body: `As industrial food production has expanded in Vietnam, traditional fermentation methods have come under pressure. Factory-produced fish sauce uses chemical hydrolysis to produce a product in days that traditionally took eighteen months. The flavour is recognisably similar but lacks the complexity of the traditionally fermented version. A generation of young Vietnamese chefs and food producers is now working to document and revive traditional fermentation practices — recognising that this knowledge, accumulated over centuries, is irreplaceable once lost.`,
        },
    ],
    relatedLinks: [
        { label: 'Five Flavours', href: '/stories/culture/five-flavours', emoji: '⚖️' },
        { label: 'Clay Pot Fish', href: '/recipes/ca-kho-to', emoji: '🐟' },
        { label: 'Fermented Fish Hot Pot', href: '/recipes/lau-mam', emoji: '🍲' },
        { label: 'Street Food Culture', href: '/stories/culture/street-food-culture', emoji: '🥢' },
    ],
};

export default function Page() {
    return <StoryLayout story={story} />;
} 
