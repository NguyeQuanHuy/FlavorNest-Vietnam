'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'chao-long',
    title: 'Vietnamese Pork Offal Congee',
    subtitle: 'Chao long — silky rice porridge enriched with pork offal, fresh herbs and a violent crack of black pepper. The classic working-class breakfast.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '2 hrs',
    rating: 4.7,
    baseServings: 4,
    heroImage: '/images/recipes/chao-long.jpg',
    intro: 'Chao long is the breakfast Vietnamese workers reach for at 6am — cheap, filling, deeply restorative. The broth is built on pork bones simmered with toasted rice until the grains break down into something between a porridge and a soup. The toppings are unapologetic: poached pork heart, kidney, liver, intestine and blood, all sliced thin and arranged on top. The first spoonful is a test; by the third, you understand why this dish has been a Vietnamese morning ritual for centuries.',
    ingredientSections: [
        {
            title: 'Broth and rice',
            items: [
                { amount: 800, unit: 'g', name: 'pork bones', note: 'split, blanched and rinsed' },
                { amount: 200, unit: 'g', name: 'pork belly', note: 'whole piece' },
                { amount: 100, unit: 'g', name: 'jasmine rice' },
                { amount: 30, unit: 'g', name: 'glutinous rice', note: 'for silky texture' },
                { amount: 2.5, unit: 'L', name: 'water' },
                { amount: 1, name: 'large yellow onion', note: 'charred whole' },
                { amount: 30, unit: 'g', name: 'ginger', note: 'charred' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'rock sugar' },
                { amount: 1, unit: 'tsp', name: 'sea salt' },
            ],
        },
        {
            title: 'Pork offal toppings',
            items: [
                { amount: 200, unit: 'g', name: 'pork liver', note: 'sliced thin' },
                { amount: 200, unit: 'g', name: 'pork heart', note: 'cleaned, sliced' },
                { amount: 150, unit: 'g', name: 'pork kidney', note: 'cleaned, sliced' },
                { amount: 200, unit: 'g', name: 'pork intestine', note: 'cleaned thoroughly, sliced' },
                { amount: 150, unit: 'g', name: 'pork blood (huyet)', note: 'cubed, optional but traditional' },
                { amount: 150, unit: 'g', name: 'cha lua (Vietnamese pork sausage)', note: 'sliced' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 4, unit: 'tbsp', name: 'crispy fried shallots' },
                { amount: 4, name: 'spring onions', note: 'sliced' },
                { amount: 1, name: 'small bunch cilantro', note: 'chopped' },
                { amount: 1, name: 'bunch Vietnamese coriander (rau ram)' },
                { amount: 1, unit: 'tsp', name: 'freshly cracked black pepper' },
                { amount: 2, name: 'limes', note: 'cut in wedges' },
                { amount: 3, name: 'birds eye chillies', note: 'sliced' },
                { amount: 1, name: 'small bowl fish sauce dip with chilli and lime' },
            ],
        },
    ],
    steps: [
        {
            title: 'Toast the rice',
            description: 'In a dry heavy pot, toast both rice varieties together over medium heat for 5 minutes, stirring constantly, until pale gold and nutty-smelling. This is the secret to deeply flavoured chao — untoasted rice gives a flat porridge.',
            tip: 'Aim for the colour of straw, not toast. Burnt rice turns the whole pot bitter.',
        },
        {
            title: 'Char the aromatics',
            description: 'Place ginger and onion directly over an open flame until the skins blacken and the kitchen smells smoky, about 4 minutes. Do not rinse off the char.',
        },
        {
            title: 'Build the broth',
            description: 'Add the toasted rice, blanched pork bones, pork belly, charred ginger and onion to the pot with 2.5L water. Bring to a gentle simmer. Skim foam aggressively for the first 10 minutes. Reduce heat to low and simmer uncovered for 90 minutes, stirring occasionally so the rice does not catch on the bottom.',
            tip: 'Never let it boil hard. A lazy simmer keeps the broth clean and the pork tender.',
        },
        {
            title: 'Pull the pork belly',
            description: 'After 45 minutes, lift the pork belly out and plunge into ice water for 5 minutes. Slice thin against the grain and reserve. Continue simmering the bones in the rice for the remaining 45 minutes.',
        },
        {
            title: 'Clean and prep the offal',
            description: 'Rub heart, kidney and intestine with salt and rice vinegar, then rinse thoroughly under cold water until completely clean. Slice thin. Liver should be sliced last and kept separate.',
            tip: 'Improperly cleaned offal tastes funky in a bad way. Salt-vinegar rub is non-negotiable.',
        },
        {
            title: 'Poach the offal in stages',
            description: 'Bring a small pot of salted water to a gentle simmer. Poach intestine for 5 minutes, kidney for 4 minutes, heart for 3 minutes, liver for 90 seconds only. Plunge each into ice water immediately to stop cooking. Cube and gently warm the pork blood if using.',
            tip: 'Overcooked liver turns chalky in seconds. Pull it the moment it changes colour.',
        },
        {
            title: 'Strain and season the chao',
            description: 'Strain bones from the porridge. The texture should be silky — somewhere between thick soup and loose porridge. If too thick, splash in hot water; if too thin, simmer uncovered a few more minutes. Season with fish sauce, rock sugar and salt. Taste and adjust.',
        },
        {
            title: 'Assemble and serve',
            description: 'Ladle hot chao into 4 deep bowls. Arrange sliced pork belly, offal, blood and cha lua over the top in neat sections. Scatter fried shallots, spring onion, cilantro and rau ram. Crack black pepper over the top with conviction. Serve immediately with the fish sauce dip, lime and chilli on the side. Eaten the way Vietnamese workers eat it — fast, hot, with extra pepper.',
            tip: 'The pepper is not optional. A heavy hand of fresh-cracked black pepper is what defines a proper bowl of chao long.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}