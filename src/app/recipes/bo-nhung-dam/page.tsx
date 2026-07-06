'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'bo-nhung-dam',
    title: 'Bò Nhúng D?m (Vietnamese Beef in Vinegar Fondue)',
    subtitle: 'Thinly sliced beef dipped into a simmering pot of coconut vinegar and lemongrass, wrapped in rice paper with rice vermicelli, fresh herbs, and green mango — served with the fermented anchovy dipping sauce that is specific to this dish and no other.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '1 hr',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/bo-nhung-dam.jpg',
    intro: `Bò nhúng d?m is the southern Vietnamese beef fondue that is fundamentally a social occasion — a pot of simmering coconut vinegar and lemongrass at the center of the table, plates of raw thinly sliced beef, a mountain of fresh herbs and vegetables, rice paper, rice vermicelli, and a dipping sauce of m?m nêm (fermented anchovy paste) that is specific to this dish. The cooking is done at the table by the diners: each person picks up a slice of beef with chopsticks, swirls it in the hot acidulated broth for 10-15 seconds until it turns from red to pale pink, then assembles their own wrap. The coconut vinegar (gi?m d?a) is the defining ingredient — the acidity cooks the beef through contact rather than heat alone, and the coconut note from the vinegar gives the broth a tropical sweetness that the European fondue tradition has no equivalent for. The wrapping is elaborate: a sheet of dampened rice paper laid on the hand, rice vermicelli placed first, then the dipped beef, then slices of green mango or green banana, fresh herbs (the plate here is extensive — rau ram, perilla, mint, culantro, mustard leaf), and sometimes a thin slice of pickled shallot. The whole assembly is rolled loosely and dipped entirely into the m?m nêm sauce. Bò nhúng d?m is a weekend dish, a celebration dish, a dish eaten slowly over two hours with cold beer and good company.`,
    ingredientSections: [
        {
            title: 'Vinegar broth (l?u d?m)',
            items: [
                { amount: 500, unit: 'ml', name: 'coconut vinegar (gi?m d?a)', note: 'the defining ingredient — mild, slightly sweet, tropical acidity. Available at Vietnamese grocers. Substitute: 300ml rice vinegar + 200ml coconut water for a close approximation.' },
                { amount: 300, unit: 'ml', name: 'water' },
                { amount: 3, name: 'lemongrass stalks', note: 'bruised and tied in a bundle' },
                { amount: 3, name: 'shallots', note: 'halved' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: '3 slices, smashed' },
                { amount: 2, unit: 'tbsp', name: 'sugar', note: 'balances the acidity of the vinegar' },
                { amount: 1, unit: 'tsp', name: 'salt' },
                { amount: 1, name: 'fresh red chili', note: 'halved — for gentle heat in the broth' },
            ],
        },
        {
            title: 'Beef',
            items: [
                { amount: 600, unit: 'g', name: 'beef sirloin or eye fillet (th?t bò)', note: 'sliced paper-thin — 2-3mm maximum. Freeze for 30 minutes before slicing for cleaner cuts. Or ask the butcher to slice for shabu-shabu.' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce', note: 'light seasoning before serving' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 1, unit: 'tsp', name: 'sesame oil', note: 'a few drops — for fragrance' },
            ],
        },
        {
            title: 'M?m nêm dipping sauce (essential)',
            items: [
                { amount: 4, unit: 'tbsp', name: 'fermented anchovy paste (m?m nêm)', note: 'the defining dipping sauce for bò nhúng d?m — cannot be substituted with fish sauce. Available at Vietnamese grocers.' },
                { amount: 2, unit: 'tbsp', name: 'fresh pineapple', note: 'finely minced or blended — adds sweetness and breaks down the m?m nêm intensity' },
                { amount: 2, unit: 'tbsp', name: 'fresh lime juice' },
                { amount: 1, unit: 'tbsp', name: 'sugar' },
                { amount: 2, name: 'garlic cloves', note: 'minced' },
                { amount: 2, name: 'bird\'s eye chilies', note: 'minced — m?m nêm sauce is traditionally quite spicy' },
                { amount: 2, unit: 'tbsp', name: 'water', note: 'to adjust consistency' },
                { amount: 50, unit: 'g', name: 'roasted peanuts', note: 'roughly crushed — stirred into the sauce' },
            ],
        },
        {
            title: 'Wrapping ingredients — the full table',
            items: [
                { amount: 16, name: 'sheets dried rice paper (bánh tráng)', note: '22-25cm diameter — dampened briefly in water before wrapping' },
                { amount: 200, unit: 'g', name: 'dried rice vermicelli', note: 'soaked in cold water 20 minutes, blanched 2 minutes, drained' },
                { amount: 1, name: 'green mango', note: 'finely julienned — for the sour crunch inside the wrap' },
                { amount: 1, name: 'green banana or young banana', note: 'thinly sliced — traditional addition in southern version' },
                { amount: 1, name: 'head butter lettuce or mustard leaf (c?i xanh)', note: 'leaves separated' },
                { amount: 1, name: 'bunch rau ram (Vietnamese coriander)' },
                { amount: 1, name: 'bunch mint' },
                { amount: 1, name: 'bunch perilla (tía tô)' },
                { amount: 1, name: 'stalk culantro (ngò gai)', note: 'thinly sliced' },
                { amount: 3, name: 'spring onions', note: 'cut into 5cm pieces' },
                { amount: 100, unit: 'g', name: 'bean sprouts' },
                { amount: 2, name: 'cucumbers', note: 'julienned' },
            ],
        },
    ],
    steps: [
        {
            title: 'Prepare the vinegar broth',
            description: 'Combine coconut vinegar, water, lemongrass bundle, shallots, ginger, sugar, salt, and chili in a pot. Bring to a gentle simmer and cook for 15 minutes to allow the lemongrass and aromatics to infuse the broth. Taste: the broth should be pleasantly sour with a faint coconut sweetness, the lemongrass clearly present. Adjust the sugar if the vinegar is very sharp. This broth goes to the table in a portable burner or electric hot pot — it must remain at a gentle simmer throughout the meal.',
            tip: 'The broth should be simmering, not boiling vigorously. Aggressively boiling vinegar broth cooks the beef too fast and unevenly. A gentle simmer cooks each slice in 10-15 seconds to the correct pale pink.',
        },
        {
            title: 'Slice the beef paper-thin',
            description: 'Freeze the beef sirloin for 30 minutes until firm but not frozen solid. Using a very sharp knife, slice against the grain into sheets 2-3mm thick — almost translucent. Arrange in overlapping rows on a plate. Season lightly with fish sauce, black pepper, and a few drops of sesame oil just before serving. The beef should be cold when it goes to the table — it cooks in seconds in the hot broth.',
            tip: 'Paper-thin slicing is the technique that makes bò nhúng d?m work. Thick slices take too long in the broth, overcooking the outside before the inside is done. 2-3mm slices cook completely in 10-15 seconds of contact with the simmering vinegar.',
        },
        {
            title: 'Make the m?m nêm dipping sauce',
            description: 'Blend or finely mince the fresh pineapple until nearly smooth. In a bowl, combine m?m nêm with pineapple, lime juice, sugar, and water. Stir to combine — the pineapple\'s natural bromelain enzyme begins breaking down the m?m nêm, mellowing its intensity. Add minced garlic and chili. Stir in crushed peanuts. Taste: the sauce should be funky, sweet-sour, spicy, and deeply savory. It is an aggressive sauce intentionally — small amounts transform the wrap completely.',
            tip: 'M?m nêm sauce made 30 minutes before serving is noticeably better than freshly made — the pineapple has time to work on the fermented paste and the garlic mellows. Make it first, before preparing anything else.',
        },
        {
            title: 'Prepare the table',
            description: 'Set the portable burner or hot pot at the center of the table with the vinegar broth simmering. Arrange the raw beef slices on a plate nearby. Set out all the wrapping ingredients: dampened rice paper sheets on a flat plate, blanched vermicelli, julienned green mango and cucumber, all fresh herbs in separate clusters, bean sprouts, and lettuce leaves. Place individual small bowls of m?m nêm sauce and lime wedges at each place setting. The table should look abundant — this is a communal feast.',
            tip: 'Have everything prepared and at the table before the broth comes to temperature. Once the pot is simmering, the pace of the meal is continuous — diners should not be waiting for ingredients to be prepared.',
        },
        {
            title: 'Cook the beef — the table technique',
            description: 'Each diner picks up a slice of raw beef with chopsticks. Swirl it in the simmering vinegar broth for 10-15 seconds — the beef turns from red to pale pink throughout. Remove immediately. For well-done preference: 20-25 seconds. The vinegar begins cooking the beef on contact through acid denaturation even before the heat finishes the process — this is why the beef turns pale faster than in plain water fondue.',
            tip: 'Overcooking is the most common mistake. 10-15 seconds for medium, 20 for well-done. Beef left in the broth for 30+ seconds is tough and grey. Teach first-time diners the timing before starting.',
        },
        {
            title: 'Assemble the wrap — the southern Vietnamese method',
            description: 'Dampen a sheet of rice paper briefly in water until just pliable. Lay on a flat surface or on the hand. Place a small amount of vermicelli in the center. Add the dipped beef slice while still hot. Add slices of green mango, cucumber, bean sprouts, and 3-4 different fresh herbs. Roll loosely from the bottom, fold the sides in, continue rolling. The wrap should be soft, generous, and slightly loose. Dip the entire wrap into the m?m nêm sauce. Eat in one or two bites.',
            tip: 'The wrap must be eaten immediately after assembling — the hot beef wilts the herbs and softens the rice paper. Assemble one wrap at a time, eat it, then assemble the next. This is the correct rhythm of bò nhúng d?m.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
