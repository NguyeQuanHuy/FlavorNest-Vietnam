'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'khoai-deo-quang-binh',
    title: `Quảng Bình Chewy Dried Sweet Potato`,
    subtitle: `Khoai Dẻo Quảng Bình — Sun-dried sweet potato from the coastal sand dunes — chewy, intensely sweet, the oldest preserved snack of the province.`,
    category: 'DESSERT',
    difficulty: 'Easy',
    totalTime: '48 hrs',
    rating: 4.8,
    baseServings: 10,
    heroImage: `https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1600&q=85`,
    intro: `Khoai dẻo is the simplest food in this entire collection — sliced sweet potato, steamed until cooked, then sun-dried on bamboo racks until the interior becomes dense, chewy, and intensely sweet, with a slightly caramelised exterior that develops during the drying as the natural sugars concentrate and undergo slow Maillard reactions in the coastal sun. The product is part jerky, part candy, part dried fruit — a category of its own that has no Western equivalent.\n\nThe sweet potatoes used are grown in the sandy coastal soil of Quảng Bình's dune belt — the thin strip of sandy land between the sea and the interior plain where the soil is too poor for rice but ideal for khoai lang (Ipomoea batatas). The coastal sand drains fast, warms quickly in the sun, and produces sweet potatoes with a higher sugar content and denser flesh than the waterlogged clay-soil varieties of the Mekong Delta. The Quảng Bình khoai lang is orange-fleshed, firm, and so dense with natural sugar that a fully dried slice is nearly as sweet as caramel.\n\nKhoai dẻo is eaten as a between-meal snack, packed for travel, given to schoolchildren, and sent in packages to Quảng Bình diaspora worldwide. It keeps for 2-3 months at room temperature. In the province's coastal villages, making khoai dẻo at harvest season — when the sweet potatoes are pulled from the sandy fields in October and November — is a community activity that fills the beach dunes with the smell of steamed sweet potato and the sight of orange slices laid out on hundreds of bamboo racks in the low coastal sun.`,
    ingredientSections: [
        {
            title: `Sweet potato`,
            items: [
                { amount: 1, unit: 'kg', name: `orange-fleshed sweet potato (khoai lang Quang Binh)`, note: `dense, high-sugar coastal variety; substitute: any firm orange sweet potato — Beauregard or Japanese sweet potato in Germany` },
            ],
        },
        {
            title: `Optional light seasoning`,
            items: [
                { amount: 0.5, unit: 'tsp', name: `salt`, note: `very light dusting after steaming — some Quảng Bình families include, others omit` },
                { amount: 1, unit: 'tbsp', name: `sesame seeds`, note: `scattered over wet surface before drying — pressed in` },
            ],
        },
    ],
    steps: [
        {
            title: `Select and prepare`,
            description: `Choose the densest, firmest sweet potatoes available — soft, watery flesh produces khoai dẻo that is mushy rather than chewy after drying. Wash thoroughly. Do not peel — the skin holds the slice together during drying and develops a pleasant, slightly chewy texture in the finished product. Slice into 7-8mm rounds. Uniform thickness is critical — slices of uneven thickness dry at different rates, producing some pieces that are overdried and brittle while others remain underdried and soft.`,
        },
        {
            title: `Steam until fully cooked`,
            description: `Steam sliced sweet potato rounds over vigorously boiling water for 12-15 minutes until completely soft throughout — a skewer should meet no resistance at the thickest point. Do not undercook: underdone sweet potato dries to a hard, starchy disc rather than the chewy, sweet result. Immediately after steaming: if using salt, dust lightly over the hot surface — the heat helps the salt dissolve into the surface. If using sesame, scatter immediately and press gently.`,
            tip: `The steaming step gelatinises the sweet potato's starch — converting the raw crystalline starch into an amorphous gel. During subsequent drying, this gelatinised starch recrystallises in a different, denser arrangement that produces the characteristic chewy texture of khoai dẻo. Raw-dried sweet potato (not steamed first) dries to a hard, powdery texture because the raw starch cannot recrystallise into the same chewy gel structure.`,
        },
        {
            title: `Sun-dry — 24 to 48 hours`,
            description: `Arrange steamed rounds on bamboo mats or wire racks in full direct sun. Allow space between each slice — they must not touch. In Quảng Bình coastal sun (strong, low humidity): 24-36 hours produces the correct texture. In Germany in summer: 36-48 hours on a south-facing surface. Turn once after 12-16 hours. The slice is done when the surface is dry and slightly tacky, the exterior has darkened from orange to deep amber in places, and the slice bends without breaking — this flexibility is the key indicator of khoai dẻo vs over-dried khoai khô. A slice that breaks when bent is overdried; a slice that doesn't bend at all is underdried.`,
            tip: `The bend-without-break test is the Quảng Bình standard for khoai dẻo quality. The word dẻo means chewy/flexible — the opposite of giòn (crispy/brittle). The moisture content of finished khoai dẻo should be approximately 20-25% — enough to maintain flexibility, low enough to prevent mould. In Germany's more humid climate, slightly extend the drying time and store in an airtight container with a silica gel packet to prevent moisture reabsorption.`,
        },
        {
            title: `Store and eat`,
            description: `Store in an airtight container or zip-lock bag at room temperature for up to 2 months. In Quảng Bình, khoai dẻo is eaten cold, straight from the container — the chewiness is the experience, and it develops fully at room temperature rather than when cold. Warm briefly (30 seconds at 150°C) to restore the surface caramelisation and intensify the sweetness if the slices have been stored. In Germany, khoai dẻo made from Beauregard sweet potato is excellent — slightly less dense than the coastal Quảng Bình variety but produces a recognisable result with the bend-without-break quality intact.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}