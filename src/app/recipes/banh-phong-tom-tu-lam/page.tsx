'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-phong-tom-tu-lam',
    title: 'Bánh Phồng Tôm Tự Làm (Homemade Shrimp Crackers)',
    subtitle: 'Fresh shrimp ground to a paste with garlic and seasoning, combined with tapioca starch into a dough that is steamed into logs, sliced paper-thin, sun-dried for two days until translucent, then fried in hot oil where each disc expands to four times its size in seconds — the Vietnamese shrimp cracker made at home where the shrimp flavor is unmistakably real.',
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '3 days',
    rating: 4.9,
    baseServings: 8,
    heroImage: '/images/recipes/banh-phong-tom-tu-lam.jpg',
    intro: `Bánh phồng tôm — Vietnamese shrimp crackers — are one of the most widely eaten snack foods in Vietnam and one of the most recognizable Vietnamese food items internationally, appearing on airline trays, in supermarket aisles worldwide, and as the ubiquitous accompaniment to Vietnamese restaurant meals from Ho Chi Minh City to Paris. The commercial version, manufactured primarily in factories around Bình Dương and exported globally, is made from a combination of shrimp, tapioca starch, and flavoring that produces the familiar light, airy cracker that puffs instantly in hot oil. The homemade version — bánh phồng tôm tự làm — is a different object: the shrimp flavor is unmistakably real because the shrimp proportion is significantly higher than in commercial production, the crackers are thicker and slightly denser when fried, and the specific sweetness of fresh shrimp ground into the dough produces a flavor depth that the commercial version, with its dried shrimp and shrimp paste approximations, cannot approach. Making bánh phồng tôm at home requires three days and patience with the drying phase, but the technique itself is simple and the ingredients are few. The process: fresh shrimp ground to a smooth paste with garlic, fish sauce, and seasoning; combined with tapioca starch and a small amount of glutinous rice flour into a pliable dough; shaped into logs and steamed until completely set; sliced paper-thin with a sharp knife or mandoline; dried in the sun or a low oven for two days until each slice is translucent, rigid, and completely dry; then fried in oil at 190°C where each dry disc expands explosively in 3-5 seconds. The expansion — from a flat 3mm disc to a curved, airy cracker three or four times larger — is the specific physical phenomenon that makes bánh phồng tôm what it is, and watching it happen in the hot oil is one of the most satisfying moments in Vietnamese home cooking.`,
    ingredientSections: [
        {
            title: 'Shrimp dough',
            items: [
                { amount: 300, unit: 'g', name: 'fresh shrimp, peeled and deveined', note: 'the higher shrimp proportion vs commercial crackers is what makes homemade worth making. Very fresh — the shrimp flavor carries through the entire drying and frying process.' },
                { amount: 3, name: 'garlic cloves', note: 'minced' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
                { amount: 0.5, unit: 'tsp', name: 'salt' },
                { amount: 1, unit: 'tsp', name: 'sesame oil' },
            ],
        },
        {
            title: 'Starch mixture',
            items: [
                { amount: 250, unit: 'g', name: 'tapioca starch (bột năng)', note: 'the primary starch — produces the characteristic airy expansion when fried' },
                { amount: 50, unit: 'g', name: 'glutinous rice flour (bột nếp)', note: 'small amount — adds cohesion and a slight chewiness to the expanded cracker' },
                { amount: 100, unit: 'ml', name: 'warm water', note: 'added gradually — the dough should be pliable but not sticky' },
                { amount: 1, unit: 'tsp', name: 'baking powder', note: 'aids the expansion in the hot oil' },
            ],
        },
        {
            title: 'For frying',
            items: [
                { amount: 500, unit: 'ml', name: 'neutral oil', note: 'for deep frying — must reach 190°C for full expansion' },
            ],
        },
        {
            title: 'Optional colorings',
            items: [
                { amount: 1, unit: 'tsp', name: 'turmeric powder', note: 'for golden-yellow crackers' },
                { amount: 1, unit: 'tsp', name: 'dried pandan powder or matcha', note: 'for green crackers' },
                { amount: 1, unit: 'tsp', name: 'beetroot powder', note: 'for pink crackers — divide the dough and add different colorings to each portion for a colorful batch' },
            ],
        },
    ],
    steps: [
        {
            title: 'Day 1: Make the shrimp paste and dough',
            description: 'Process the fresh shrimp with garlic, fish sauce, sugar, pepper, salt, and sesame oil in a food processor until completely smooth — no chunks. The paste should be uniform, slightly sticky, and smell intensely of fresh shrimp. Combine tapioca starch, glutinous rice flour, and baking powder in a large bowl. Add the shrimp paste to the starch mixture. Add warm water gradually while mixing — knead until a smooth, pliable dough forms that does not stick to the hands. Divide into 3-4 portions. Roll each into a log 4-5cm in diameter. Wrap each log tightly in plastic wrap.',
            tip: 'The dough consistency is the most critical element of homemade bánh phồng tôm — too wet and the crackers will not hold their shape when sliced; too dry and they crack during slicing and do not expand fully when fried. The correct dough feels like firm Play-Doh: it holds its shape when pressed but bends without cracking.',
        },
        {
            title: 'Day 1: Steam the logs',
            description: 'Steam the wrapped dough logs over boiling water for 30-35 minutes until completely set throughout. Test by unwrapping one end and pressing the center — it should feel firm and spring back, not soft or doughy. Cool completely at room temperature — minimum 2 hours, or overnight in the refrigerator. The cooled logs must be firm enough to slice paper-thin without crumbling.',
            tip: 'Cooling the steamed logs completely before slicing is essential — warm logs are too soft to slice cleanly and the slices will stick together. Refrigerating overnight produces the firmest logs and the cleanest slices. A log that has not cooled fully will compress and smear rather than cut cleanly.',
        },
        {
            title: 'Day 1-2: Slice paper-thin',
            description: 'Using a very sharp knife or a mandoline set to 2-3mm, slice each cooled log into rounds as thin as possible. The slices should be semi-transparent when held to light — this thinness is what allows the full expansion in the hot oil. Arrange the slices in a single layer on bamboo mats, mesh racks, or parchment paper — they must not overlap. If adding colors: divide the dough before steaming and add the colorings to each portion.',
            tip: 'The paper-thin slicing of bánh phồng tôm is the step that most clearly determines the final quality. A slice that is 3mm thick will expand adequately; a slice that is 5mm thick will expand insufficiently and remain dense. A mandoline produces more consistent thickness than hand-slicing and is recommended for this step.',
        },
        {
            title: 'Day 2-3: Sun-dry or oven-dry until completely rigid',
            description: 'SUN METHOD: Place the racks of sliced crackers in direct sunlight for 2 full days, bringing indoors at night. The crackers are ready when they are completely rigid, completely dry, and slightly translucent — they should snap cleanly when bent. OVEN METHOD: Place in an oven at 60-70°C with the door slightly ajar. Dry for 6-8 hours, turning once. The crackers must be completely dry before frying — any retained moisture produces splattering and prevents full expansion.',
            tip: 'The snap test is the only reliable way to confirm drying is complete: pick up a cracker and bend it between two fingers. If it snaps cleanly with a dry cracking sound, it is ready to fry. If it bends without snapping, it needs more drying time. A partially dried cracker will not expand fully and will produce dangerous oil splattering when fried.',
        },
        {
            title: 'Fry at 190°C — watch the expansion',
            description: 'Heat oil to 190°C in a wok or deep pot. Drop one dried cracker into the oil as a test — it should immediately begin expanding and within 3-5 seconds should have reached its full expanded size. If the expansion is slow or incomplete, the oil is not hot enough. Fry 3-4 crackers at a time, pressing them lightly with a slotted spoon to keep them submerged during the 10-15 seconds of frying. Remove when fully expanded and just beginning to turn very lightly golden. Drain on paper towels.',
            tip: 'The expansion of bánh phồng tôm in 190°C oil is one of the most satisfying phenomena in Vietnamese cooking to watch — the flat, rigid, translucent disc enters the oil and within 3-5 seconds has become a curved, airy, opaque cracker three to four times its original size. The expansion happens because the moisture retained in the tapioca starch (even after drying) converts to steam instantly at 190°C and inflates the cracker from within. Cooler oil produces a slower expansion and a denser result.',
        },
        {
            title: 'Store the dried crackers — fry to order',
            description: 'The dried unfired crackers store in an airtight container at room temperature for up to 3 months — this is their long-storage state. Fry only what will be eaten immediately — fried bánh phồng tôm loses its crispiness within 2-3 hours of frying as it absorbs ambient moisture. Serve immediately after frying with any dipping sauce or as an accompaniment to meals. The homemade version is best appreciated plain or with a light dipping sauce that does not overpower the genuine shrimp flavor.',
            tip: 'The long shelf life of dried unfried bánh phồng tôm — 3 months in an airtight container — means a single batch of making produces a 3-month supply of crackers that can be fried fresh in 30 seconds at any meal. This is the practical genius of the preparation: 3 days of work once produces crackers for months of instant frying.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
