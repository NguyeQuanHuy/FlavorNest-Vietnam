'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'chao-de-tuy-hoa',
    title: 'Cháo Dê Tuy Hòa (Tuy Hòa Goat Rice Porridge)',
    subtitle: 'Goat bone broth with medicinal herbs — ginger, galangal, star anise, and dried longan — simmered into a rice porridge and topped with tender shredded goat meat, crispy fried shallots, fresh ginger julienne, and rau ram. The Tuy Hòa morning bowl eaten at small shops before 9am.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '2 hr',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/chao-de-tuy-hoa.jpg',
    intro: `Cháo dê Tuy Hòa is the goat porridge of Phú Yên's provincial capital — a morning bowl eaten at a handful of small shops near the Tuy Hòa central market from 6am until the pot runs out, which is typically around 9am. The shops that serve it have been serving it for generations, their porridge pots beginning in the middle of the night so that by dawn the goat bones have given everything they have to the broth and the broth has given everything it has to the rice. The specific character of cháo dê Tuy Hòa comes from the combination of goat bones and medicinal herbs — thu?c b?c, the dried Chinese medicinal ingredients that appear throughout Vietnamese tonic cooking — that are simmered alongside the bones: dried longan flesh (long nhãn) adds sweetness, star anise adds the specific warm depth it contributes to every long-cooked Vietnamese broth, ginger and galangal provide the aromatic backbone that complements the goat and supports the medicinal character. The result is a porridge that is simultaneously nourishing and fragrant, with the specific quality that Vietnamese people associate with morning tonic food: something that settles the body and clears the mind after sleep. Cháo dê Tuy Hòa is not a heavy breakfast — the porridge is lighter and silkier than the dense Vietnamese cháo gà or the thick bún bò that appears later in the morning. The goat meat is shredded and placed over the porridge in a modest quantity, enough to flavor each spoonful rather than to dominate it. The shallot oil and the fresh ginger and rau ram on top provide the finishing aromatics that lift the entire bowl. It is the bowl that Phú Yên people returning home after years away ask for on the first morning back.`,
    ingredientSections: [
        {
            title: 'Goat bone broth',
            items: [
                { amount: 800, unit: 'g', name: 'goat neck and rib bones (xuong dê)', note: 'blanched and rinsed' },
                { amount: 300, unit: 'g', name: 'goat shoulder meat (th?t dê vai)', note: 'bone-in — simmered in the broth for the first hour then shredded for topping' },
                { amount: 2, unit: 'L', name: 'water' },
                { amount: 3, name: 'shallots', note: 'halved and charred over flame' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: '3 slices, charred' },
            ],
        },
        {
            title: 'Thu?c b?c aromatics (medicinal herbs)',
            items: [
                { amount: 30, unit: 'g', name: 'dried longan flesh (long nhãn / long nhãn s?y)', note: 'adds subtle sweetness and the characteristic tonic note of Tuy Hòa cháo dê' },
                { amount: 2, name: 'star anise (h?i)', note: 'whole' },
                { amount: 1, name: 'cinnamon stick, 3cm' },
                { amount: 40, unit: 'g', name: 'fresh galangal (ri?ng)', note: '4 slices, lightly smashed' },
                { amount: 3, name: 'dried red dates (táo d?)', note: 'pitted — adds sweetness and the tonic quality' },
                { amount: 1, unit: 'tsp', name: 'dried turmeric powder', note: 'or 15g fresh turmeric' },
            ],
        },
        {
            title: 'Rice porridge',
            items: [
                { amount: 200, unit: 'g', name: 'jasmine rice', note: 'rinsed once — not washed completely, some starch retained for body' },
                { amount: 600, unit: 'ml', name: 'reserved goat bone broth', note: 'measured from the finished broth' },
                { amount: 400, unit: 'ml', name: 'water' },
                { amount: 2, unit: 'tbsp', name: 'goat fat or neutral oil', note: 'skimmed from the broth surface — adds richness and flavor to the porridge' },
                { amount: 3, name: 'shallots', note: 'thinly sliced — fried in the fat before adding rice' },
            ],
        },
        {
            title: 'Seasoning',
            items: [
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'salt' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
            ],
        },
        {
            title: 'Essential toppings',
            items: [
                { amount: 1, name: 'whole cooked goat shoulder', note: 'shredded while still warm — from the broth above' },
                { amount: 4, unit: 'tbsp', name: 'crispy fried shallots (hành phi)' },
                { amount: 3, unit: 'tbsp', name: 'shallot-infused oil' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: 'finely julienned — a generous amount, not a garnish' },
                { amount: 1, name: 'large bunch Vietnamese coriander (rau ram)', note: 'leaves only' },
                { amount: 4, name: 'spring onions', note: 'thinly sliced' },
                { amount: 1, unit: 'tsp', name: 'white pepper', note: 'freshly ground per bowl' },
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 2, name: 'fresh red chilies, sliced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Blanch bones and build the medicinal broth',
            description: 'Blanch goat bones and shoulder meat together in boiling water for 10 minutes. Drain and rinse thoroughly. Return to a clean pot with cold water, charred shallots, and charred ginger. Bring to a boil, reduce to the lowest simmer. Skim for 20 minutes. Add the dried longan, star anise, cinnamon, galangal slices, red dates, and turmeric. Simmer uncovered for 1.5 hours — the goat bones and medicinal herbs developing together into the specific tonic broth of cháo dê Tuy Hòa.',
            tip: 'The dried longan is the ingredient that most clearly marks cháo dê Tuy Hòa as a tonic food rather than simply a goat porridge. Its subtle sweetness and the specific warmth it adds to the broth are detectable in the finished porridge as a background note that no other ingredient produces. Do not omit it.',
        },
        {
            title: 'Remove the shoulder meat and strain the broth',
            description: 'After 1 hour of simmering, remove the shoulder meat — it should be almost but not completely tender at this stage. Set aside to cool. Continue simmering the bones for the remaining 30-45 minutes. Strain the broth through a fine-mesh sieve. Skim the golden goat fat from the surface — reserve 2-3 tablespoons for cooking the rice. Measure 600ml of broth for the porridge.',
            tip: 'Removing the shoulder meat at 1 hour rather than at the end of the full broth simmering prevents the meat from becoming fibrous and dry from overcooking. The meat continues to carry heat and cook slightly after removal — at 1 hour it will reach the perfect shredding texture as it cools.',
        },
        {
            title: 'Cook the porridge in goat broth',
            description: 'Heat the reserved goat fat in a medium pot over medium heat. Fry sliced shallots until golden — 3 minutes. Add the rinsed rice and stir for 2 minutes until each grain is coated in the golden fat. Add 600ml strained broth and 400ml water. Bring to a boil, reduce to a medium simmer. Cook for 25-30 minutes, stirring every 5-7 minutes, until the rice grains have bloomed and partially dissolved into a thick, silky consistency. The porridge should coat a spoon thickly.',
            tip: 'Cooking the rice in the goat fat before adding liquid is the technique that gives cháo dê Tuy Hòa its specific richness — the fat coats each grain and produces a porridge with more depth than water-cooked rice would achieve. The toasted rice character from the initial fry in fat is subtle but present in every spoonful.',
        },
        {
            title: 'Shred the goat shoulder',
            description: 'When the shoulder meat has cooled to a handleable temperature — warm but not hot — pull it from the bone in long strands, shredding along the grain. The shredded meat should still be moist and slightly warm. Season lightly with a few drops of fish sauce and white pepper. The goat shoulder shredded warm is the correct technique — cold goat compresses and the strands become matted rather than loose and individual.',
            tip: 'Shredding goat along the grain rather than across it produces longer, more elegant strands that sit on top of the porridge attractively and separate easily when eaten. Pulling across the grain produces short, chunky pieces that are less visually appealing and harder to eat with a spoon.',
        },
        {
            title: 'Season and finish the porridge',
            description: 'Taste the porridge and season with fish sauce, sugar, salt, and white pepper. The Tuy Hòa cháo dê should taste gently of the goat bone broth and the medicinal herbs — the longan sweetness detectable in the background, the galangal giving a faint warmth, the star anise a distant spice note. Not assertive in any single direction but complex in its completeness.',
            tip: 'The seasoning of cháo dê Tuy Hòa should be gentler than most Vietnamese porridges — the tonic herb character requires restraint from the salt and fish sauce so the medicinal notes can be perceived. Over-seasoned cháo dê tastes only of salt; correctly seasoned cháo dê tastes of the herbs and the goat together.',
        },
        {
            title: 'Build each bowl and serve',
            description: 'Ladle the hot porridge into deep bowls. Place shredded goat meat generously in the center. Top with julienned ginger — more than seems necessary, as the raw ginger heat is a key element of the bowl. Scatter rau ram leaves and sliced spring onion. Drizzle shallot-infused oil. Scatter crispy fried shallots. Grind white pepper generously over each bowl. Serve with lime wedges and sliced chili. The correct way to eat: stir the ginger and herbs into the porridge before the first spoonful so they wilt slightly in the heat. Then eat steadily, adding lime and chili to each spoonful to taste.',
            tip: 'The julienned ginger on cháo dê Tuy Hòa is not a garnish — it is a structural flavoring element that should be stirred into the porridge and eaten in every spoonful. The ginger heat against the warm, slightly sweet tonic porridge and the peppery rau ram is the specific combination that makes the Tuy Hòa morning bowl what it is.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
