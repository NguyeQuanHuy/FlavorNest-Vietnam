'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'bia-hoi',
    title: 'Hanoi Fresh Draft Beer',
    subtitle: 'Bia hoi — Hanoi street culture in liquid form. Light, cheap, fresh-brewed daily.',
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '5 min',
    rating: 4.8,
    baseServings: 1,
    heroImage: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=1600&q=85',
    intro: 'Bia hoi is not really a recipe — it is a ritual. A light fresh-brewed draft beer (around 3% ABV) is delivered daily by motorbike to corner kegs across Hanoi, served on plastic stools on the sidewalk and poured into thick handled glass mugs. It costs around 8,000 to 12,000 VND (about 30 cents) and must be drunk the same day or it goes flat. This page is less a recipe than a guide to ordering and pairing it properly — bia hoi is rarely brewed at home and almost never tastes the same in a bottle. The real recipe is knowing where to sit and what to order alongside.',
    ingredientSections: [
        {
            title: 'The beer',
            items: [
                { amount: 1, name: 'fresh bia hoi', note: 'from a Hanoi corner keg, served the same day brewed' },
                { amount: 1, name: 'thick glass mug', note: 'pre-chilled' },
                { amount: 1, name: 'plastic stool on a sidewalk', note: 'low to the ground, optional but recommended' },
            ],
        },
        {
            title: 'Classic snacks (do not skip)',
            items: [
                { amount: 1, name: 'plate of nem chua', note: 'fermented pork sausage, sliced' },
                { amount: 1, name: 'plate of lac rang', note: 'salted roasted peanuts' },
                { amount: 1, name: 'plate of lac luoc', note: 'boiled green soybeans' },
                { amount: 1, name: 'plate of pho cuon', note: 'fresh rolled phở with beef and herbs' },
            ],
        },
        {
            title: 'For brewing at home (light Hanoi-style lager)',
            items: [
                { amount: 4, unit: 'L', name: 'water' },
                { amount: 800, unit: 'g', name: 'pilsner malt extract' },
                { amount: 30, unit: 'g', name: 'Saaz hops', note: 'noble hops, low alpha' },
                { amount: 11, unit: 'g', name: 'lager yeast', note: 'cold-fermenting strain' },
                { amount: 100, unit: 'g', name: 'flaked rice', note: 'for body and lightness' },
            ],
        },
    ],
    steps: [
        {
            title: 'Find your corner',
            description: 'Bia hoi joints are not on Google Maps. Look for plastic stools on the sidewalk after 4pm, a steel keg under a faded yellow sign, and locals already on their second glass. The unwritten rule: if there are office workers in shirts, the beer is fresh.',
        },
        {
            title: 'Order plural',
            description: 'You do not order one bia hoi. You order two, immediately, because the second arrives before you finish the first. Locals raise the glass slightly, say "mot, hai, ba — yo!" (one, two, three — cheers!) and drink in unison. Repeat until dinner.',
        },
        {
            title: 'Pair with snacks',
            description: 'Bia hoi is light and slightly sweet — it asks for salt, fat and acid alongside. Order at minimum: nem chua (fermented pork), peanuts, boiled soybeans. For the full evening: add pho cuon (fresh rolled pho), nem ran (fried spring rolls) and bo ne (sizzling beef). The food is the point as much as the beer.',
        },
        {
            title: 'For the home brewer',
            description: 'Mash flaked rice and pilsner malt at 65 degrees for 60 minutes. Boil 60 minutes adding Saaz hops at 10 minutes from the end. Cool to 12 degrees, pitch lager yeast, ferment for 14 days at 12 degrees, then lager at 2 degrees for 21 days. Serve fresh, unfiltered, with low carbonation. The result will be close to bia hoi, but never identical — the magic is partly the Hanoi sidewalk.',
            tip: 'Bia hoi is best within 24 hours of brewing. There is a reason no one ever bottles it.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
