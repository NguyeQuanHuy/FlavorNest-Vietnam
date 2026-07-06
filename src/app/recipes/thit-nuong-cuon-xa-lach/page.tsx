'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'thit-nuong-cuon-xa-lach',
    title: 'Th?t Nu?ng Cu?n Xà Lách (Grilled Pork Lettuce Wraps)',
    subtitle: 'Chargrilled lemongrass pork skewers wrapped in fresh butter lettuce with rice vermicelli, cucumber, fresh herbs, and dipped in nu?c ch?m. The Vietnamese wrap that requires no cooking skill to eat and considerable skill to make correctly.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '45 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/thit-nuong-cuon-xa-lach.jpg',
    intro: `Th?t nu?ng cu?n xà lách is the Vietnamese eating experience in its most complete form: grilled meat, fresh herbs, rice vermicelli, and dipping sauce, assembled by the diner at the table. The lettuce is the wrapper — butter lettuce or green leaf, soft enough to roll without cracking. Inside goes a piece of chargrilled pork, still warm from the grill, a tangle of cold rice vermicelli, slices of cucumber, a few sprigs of mint and perilla, and sometimes a slice of fresh chili. Rolled loosely, dipped entirely into nu?c ch?m, eaten in one or two bites. The genius of this dish is that no two bites are the same — the ratio of meat to herb to noodle shifts with each wrap. It is the most participatory Vietnamese dish, the one that requires the diner to become briefly a cook. The pork marinade here is a classic lemongrass formula: fish sauce, sugar, garlic, lemongrass, and a touch of oil. Grilled over charcoal it develops a caramelized exterior that is the specific flavor Vietnamese expats spend years trying to recreate abroad.`,
    ingredientSections: [
        {
            title: 'Pork marinade',
            items: [
                { amount: 600, unit: 'g', name: 'pork shoulder or neck (th?t c? heo)', note: 'sliced 5-6mm thin, or minced and formed into patties for nem nu?ng style' },
                { amount: 3, name: 'lemongrass stalks', note: 'inner stalk only, very finely minced' },
                { amount: 4, name: 'garlic cloves, minced' },
                { amount: 2, name: 'shallots, minced' },
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2, unit: 'tbsp', name: 'sugar' },
                { amount: 1, unit: 'tbsp', name: 'oyster sauce' },
                { amount: 1, unit: 'tbsp', name: 'neutral oil' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric powder', note: 'for color — optional but traditional' },
            ],
        },
        {
            title: 'Nu?c ch?m dipping sauce',
            items: [
                { amount: 4, unit: 'tbsp', name: 'fish sauce' },
                { amount: 4, unit: 'tbsp', name: 'fresh lime juice', note: 'about 3 limes' },
                { amount: 3, unit: 'tbsp', name: 'sugar' },
                { amount: 5, unit: 'tbsp', name: 'water' },
                { amount: 2, name: 'garlic cloves, finely minced' },
                { amount: 1, name: 'bird\'s eye chili, minced' },
            ],
        },
        {
            title: 'Table wrapping ingredients',
            items: [
                { amount: 1, name: 'head butter lettuce or green leaf lettuce', note: 'leaves separated, washed and dried — must be supple enough to roll without cracking' },
                { amount: 200, unit: 'g', name: 'dried rice vermicelli', note: 'soaked in cold water 30 min, then blanched 2 min — or cooked to package instructions' },
                { amount: 1, name: 'cucumber', note: 'sliced into thin batons' },
                { amount: 1, name: 'bunch mint (húng l?i)' },
                { amount: 1, name: 'bunch perilla (tía tô)', note: 'or Vietnamese shiso' },
                { amount: 1, name: 'bunch Vietnamese coriander (rau ram)', note: 'optional but recommended' },
                { amount: 50, unit: 'g', name: 'roasted peanuts, roughly crushed', note: 'for scattering inside the wrap' },
                { amount: 2, name: 'fresh red chilies, sliced', note: 'for those who want extra heat' },
            ],
        },
    ],
    steps: [
        {
            title: 'Marinate the pork — minimum 2 hours',
            description: 'Combine all marinade ingredients: finely minced lemongrass, garlic, shallots, fish sauce, sugar, oyster sauce, oil, pepper, and turmeric. Add the sliced pork and mix thoroughly until every piece is coated. Marinate for minimum 2 hours at room temperature, or up to overnight in the refrigerator. The lemongrass needs time to penetrate the pork.',
            tip: 'The lemongrass must be minced almost to a paste — large pieces burn before the pork cooks and do not perfume the meat. A food processor or mortar produces the right consistency.',
        },
        {
            title: 'Prepare the nu?c ch?m',
            description: 'Combine fish sauce, fresh lime juice, sugar, and water. Stir until sugar dissolves completely. Add minced garlic and chili. Taste: the ratio should be balanced — equally sweet, sour, and salty, with the fish sauce providing depth without being identifiable. Divide into individual small bowls — one per diner.',
            tip: 'Nu?c ch?m made 30 minutes before serving is better than made immediately before — the garlic mellows and integrates. Made more than 2 hours ahead it becomes too fishy.',
        },
        {
            title: 'Prepare the table ingredients',
            description: 'Cook the rice vermicelli, rinse with cold water and allow to cool to room temperature. Arrange on a large plate. Separate the lettuce leaves. Arrange herbs, cucumber batons, and peanuts in separate clusters on a large platter. Everything should be at room temperature or slightly cool when the hot grilled pork arrives — the contrast is part of the dish.',
            tip: 'Present the wrapping ingredients generously. The table should look abundant — this is a communal dish and the visual abundance is part of the hospitality signal.',
        },
        {
            title: 'Grill over maximum heat',
            description: 'Grill the marinated pork over charcoal or on a very hot griddle pan. For thin slices: 2-3 minutes per side until deeply caramelized with slight char at the edges. For skewers: 4-5 minutes per side. The marinade sugar caramelizes at high heat to produce the characteristic slightly-charred, sticky exterior. Do not cook on medium heat — the pork will steam and the caramelization will not form.',
            tip: 'Charcoal produces the flavor; a hot griddle pan produces the caramelization. Both work. A non-stick pan on medium heat produces neither.',
        },
        {
            title: 'Arrange on the table and let diners assemble',
            description: 'Bring the hot grilled pork directly from the grill to the table. The wrapping is done by each diner: take a lettuce leaf, add a small amount of vermicelli, a piece of pork, cucumber batons, herbs, and a few peanuts. Roll loosely — not tight, the wrap should be soft and generous. Dip the entire wrap into the nu?c ch?m and eat in one or two bites.',
            tip: 'Demonstrate the rolling technique once — the instinct is to roll tight like a spring roll. The correct th?t nu?ng cu?n wrap is loose and casual, almost sloppy. The looseness allows more sauce to penetrate.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
