'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-xeo-tom-nhay',
    title: 'Bánh Xèo Tôm Nhảy (Sizzling Crêpe with Live Shrimp)',
    subtitle: 'The legendary Quy Nhơn bánh xèo — a thin, shatteringly crisp turmeric crêpe filled with live shrimp that curl and "jump" as they cook inside the hot pan, served with mustard leaf wrapping and the specific dipping sauce of Bình Định province.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '1 hr',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/banh-xeo-tom-nhay.jpg',
    intro: `Bánh xèo tôm nhảy — literally "sizzling crêpe with jumping shrimp" — is the version of bánh xèo that food travelers seek out specifically when they reach Quy Nhơn in Bình Định province. It is smaller and thinner than the southern bánh xèo of Saigon, crispier and less coconut-heavy than the central coast versions of Đà Nẵng, and defined by one element that no other regional version uses: live shrimp (tôm nhảy — "jumping shrimp") placed directly into the hot crêpe batter while still alive, so that they curl and cook inside the pan in their shells, steaming inside the crispy crêpe. The shrimp cooked this way retain a sweetness and juiciness that pre-cooked shrimp cannot approach. The crêpe itself is the thinnest of any Vietnamese bánh xèo — almost translucent in parts, with a surface that shatters rather than bends, achieved through a specific batter ratio and the technique of spreading it extremely thin in a small pan. The wrapping herb in Bình Định is specifically mustard leaf (cải xanh) rather than the lettuce used in southern versions. The dipping sauce is lighter and more herb-forward than the thick peanut sauce of Saigon. Bánh xèo tôm nhảy is the regional dish that most clearly demonstrates how a single preparation — the crêpe — becomes a completely different dish through the combination of specific local ingredients, specific technique, and the taste memory of the people who grew up eating it.`,
    ingredientSections: [
        {
            title: 'Crêpe batter',
            items: [
                { amount: 200, unit: 'g', name: 'rice flour (bột gạo)', note: 'fine-ground white rice flour — not glutinous' },
                { amount: 30, unit: 'g', name: 'cornstarch (bột bắp)', note: 'produces extra crispiness' },
                { amount: 400, unit: 'ml', name: 'coconut milk (nước cốt dừa)', note: 'full-fat — use less than southern version for a thinner, crispier result' },
                { amount: 150, unit: 'ml', name: 'water', note: 'adjust for batter consistency' },
                { amount: 1, unit: 'tsp', name: 'turmeric powder', note: 'for the characteristic golden-yellow color' },
                { amount: 0.5, unit: 'tsp', name: 'salt' },
                { amount: 3, name: 'spring onions', note: 'thinly sliced — stirred into the batter' },
            ],
        },
        {
            title: 'Filling',
            items: [
                { amount: 400, unit: 'g', name: 'very fresh small-to-medium shrimp (tôm nhảy)', note: 'live if possible — the defining element. Shell-on, head-on. If live shrimp unavailable, use the freshest possible raw whole shrimp.' },
                { amount: 200, unit: 'g', name: 'pork belly', note: 'thinly sliced 3mm — briefly stir-fried before adding to crêpe' },
                { amount: 150, unit: 'g', name: 'bean sprouts (giá)', note: 'added to the crêpe for crunch' },
                { amount: 3, name: 'shallots', note: 'thinly sliced' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil', note: 'per crêpe — bánh xèo tôm nhảy requires more oil than most crêpes for the proper crispy base' },
            ],
        },
        {
            title: 'Bình Định dipping sauce (nước chấm Bình Định)',
            items: [
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 3, unit: 'tbsp', name: 'fresh lime juice' },
                { amount: 2, unit: 'tbsp', name: 'sugar' },
                { amount: 4, unit: 'tbsp', name: 'water' },
                { amount: 2, name: 'garlic cloves, minced' },
                { amount: 1, name: 'bird\'s eye chili, minced' },
                { amount: 1, unit: 'tbsp', name: 'roasted peanuts, crushed', note: 'stirred into the sauce — specific to Bình Định style' },
                { amount: 1, unit: 'tsp', name: 'hoisin sauce', note: 'a small amount — adds depth without dominating' },
            ],
        },
        {
            title: 'Wrapping herbs and leaves',
            items: [
                { amount: 1, name: 'head mustard leaf (cải xanh)', note: 'the traditional Bình Định wrap. Substitute: butter lettuce if unavailable — different but functional.' },
                { amount: 1, name: 'bunch Vietnamese coriander (rau răm)' },
                { amount: 1, name: 'bunch mint' },
                { amount: 1, name: 'bunch perilla (tía tô)' },
                { amount: 1, name: 'cucumber', note: 'sliced into thin batons' },
                { amount: 2, name: 'limes, cut in wedges' },
            ],
        },
    ],
    steps: [
        {
            title: 'Mix the batter and rest',
            description: 'Combine rice flour, cornstarch, turmeric, and salt in a large bowl. Gradually whisk in the coconut milk and water until completely smooth — no lumps. The batter should be thin and pourable, slightly thinner than full-fat milk. The Bình Định batter is thinner than southern bánh xèo batter — this produces the paper-thin, translucent crêpe specific to tôm nhảy. Stir in the sliced spring onion. Rest for minimum 30 minutes.',
            tip: 'The batter for bánh xèo tôm nhảy should be noticeably thinner than you expect. If it looks like cream, add more water. The thinner the batter, the thinner and crispier the final crêpe.',
        },
        {
            title: 'Prepare the shrimp',
            description: 'If using live shrimp: keep them in a bowl of cold water until the moment of cooking — they should still be moving when they go into the pan. Use small-to-medium shrimp that will cook through quickly inside the closed crêpe. If using raw shrimp: ensure they are whole, shell-on, and as fresh as possible. Do not peel. The shell protects the flesh and adds flavor during the steam cooking inside the crêpe.',
            tip: 'Tôm nhảy means the shrimp are alive when they hit the pan. The curling and movement inside the hot crêpe as they cook is both the visual spectacle and the reason the flesh is so sweet and juicy. Even if you cannot source live shrimp, use the freshest whole raw shrimp available.',
        },
        {
            title: 'Cook the pork',
            description: 'In a small pan, stir-fry the sliced pork belly with the shallots over high heat for 2-3 minutes until just cooked through and slightly caramelized at the edges. Season with a small pinch of salt and pepper. Set aside. The pork goes into the crêpe with the shrimp — it is secondary to the shrimp but provides richness.',
            tip: 'Pre-cooking the pork ensures it is done before the crêpe closes. Raw pork added directly to the crêpe would require a longer cooking time, which would either overcook the shrimp or undercook the pork.',
        },
        {
            title: 'The critical technique — thin crêpe in a small hot pan',
            description: 'Use a small non-stick pan or well-seasoned cast iron — 20-22cm diameter. Heat over medium-high until very hot. Add 2 tablespoons of oil and swirl to coat. Pour in a ladleful (about 80ml) of batter and immediately tilt and swirl the pan to spread it as thin as possible across the entire surface. The batter should sizzle loudly and begin setting immediately. Move fast — you have 5 seconds to spread it before it sets.',
            tip: 'The Bình Định bánh xèo is significantly smaller and thinner than southern versions. A 20cm pan produces the correct size. Larger pans produce a thicker crêpe that cannot achieve the same crispiness.',
        },
        {
            title: 'Add filling and close',
            description: 'Immediately after spreading the batter, place 4-5 live or raw shrimp on one half of the crêpe. Add a few pieces of cooked pork and a small handful of bean sprouts alongside the shrimp. Cover the pan with a lid for 2-3 minutes — the trapped steam cooks the shrimp inside while the bottom of the crêpe crisps from the oil. The shrimp should be fully pink and cooked through when you open the lid.',
            tip: 'The lid creates a steam chamber that cooks the shrimp through without burning the crêpe bottom. Without the lid the top of the filling remains raw while the crêpe base burns.',
        },
        {
            title: 'Fold, crisp, and serve',
            description: 'When the crêpe bottom is deeply golden and the shrimp are cooked, fold the empty half over the filled half using a spatula. Press gently for 30 seconds to seal. The crêpe should shatter slightly rather than fold — this is correct crispiness. Slide onto a plate and serve immediately. Arrange mustard leaves, herbs, and cucumber alongside. Serve the dipping sauce with crushed peanuts stirred in.',
            tip: 'Bánh xèo tôm nhảy must be eaten immediately — within 3 minutes of cooking. The crêpe loses its shatter-crisp texture as it sits. In Quy Nhơn restaurants, the pans are at the table or within 5 meters. Eat as each crêpe comes off the pan.',
        },
        {
            title: 'How to eat — the Bình Định way',
            description: 'Take a mustard leaf. Place a broken piece of the crêpe with shrimp on the leaf. Add rau răm, mint, a sliver of cucumber. Roll loosely. Dip the entire wrap into the nước chấm Bình Định. Eat in one bite. The mustard leaf provides a slightly bitter, peppery note that specifically complements the sweet shrimp and crispy crêpe — it is not interchangeable with lettuce.',
            tip: 'The wrap should be loose — bánh xèo is not a tight spring roll. The lettuce (or mustard leaf) is a vehicle, not a seal. The filling should be accessible and the crêpe should be able to shatter between the teeth through the leaf.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}