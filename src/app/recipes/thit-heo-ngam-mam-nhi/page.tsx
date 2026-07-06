'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'thit-heo-ngam-mam-nhi',
    title: 'Th?t Heo Ngâm M?m Nhi (Pork Belly Cured in Premium Fish Sauce)',
    subtitle: 'Thin slices of pork belly cured for 3 days in m?m nhi — the first-press premium fish sauce of Phú Yên and Bình Ð?nh — with garlic, chili, and sugar until the fish sauce penetrates every fiber and the pork is transformed into something simultaneously raw and cured. Eaten at room temperature with hot steamed rice.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '3 days curing + 10 min prep',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/thit-heo-ngam-mam-nhi.jpg',
    intro: `Th?t heo ngâm m?m nhi is the cured pork preparation that is possible only in the provinces where m?m nhi — the first-press, premium fish sauce produced from anchovies caught along the Phú Yên and Bình Ð?nh coast — is made. M?m nhi is the equivalent of extra-virgin olive oil in the fish sauce world: unfiltered, unblended, taken from the very first run of liquid from the fermenting fish barrels, with an intensity, sweetness, and complexity that processed fish sauce cannot approach. It is the fish sauce that the fishing families of Sông C?u and Tam Quan keep for themselves and give to close relatives, the fish sauce that appears in no ordinary recipe because ordinary recipes do not deserve it. In th?t heo ngâm m?m nhi, this extraordinary fish sauce is used as a curing medium: thin slices of pork belly are submerged in m?m nhi combined with garlic, sliced chili, and a small amount of sugar, and left for 3 days. During this time the salt in the fish sauce penetrates the pork through osmosis and partially denatures the proteins — the pork undergoes a form of cold cooking that changes its texture from raw to something between raw and cooked, firm and yielding, without any heat being applied. The cured pork is eaten at room temperature, placed directly on hot steamed rice so the m?m nhi soaks into the grains. It is the simplest preparation in Phú Yên cooking and, because of the quality of the fish sauce, one of the most extraordinary. Outside Phú Yên, m?m nhi can be sourced from Vietnamese specialty shops or ordered online — the specific product from Sông C?u or Tam Quan is what to look for.`,
    ingredientSections: [
        {
            title: 'Pork',
            items: [
                { amount: 500, unit: 'g', name: 'pork belly (th?t ba ch? heo)', note: 'skin-on, as fresh as possible. Sliced 3-4mm thin against the grain into pieces 6-8cm long. The fat-to-lean ratio of pork belly is essential — lean pork alone produces dry, tough cured meat.' },
            ],
        },
        {
            title: 'Curing liquid',
            items: [
                { amount: 200, unit: 'ml', name: 'm?m nhi (premium first-press fish sauce from Phú Yên/Bình Ð?nh)', note: 'this is the essential ingredient — the dish exists because of this specific fish sauce. Sông C?u or Tam Quan m?m nhi preferred. If unavailable: use the highest-quality Vietnamese fish sauce available (Phú Qu?c or Three Crabs brand). The result will be excellent but different.' },
                { amount: 1, unit: 'tbsp', name: 'sugar', note: 'balances the intensity of the m?m nhi and assists the curing' },
                { amount: 6, name: 'garlic cloves', note: 'thinly sliced' },
                { amount: 3, name: 'bird\'s eye chilies', note: 'thinly sliced — adjust to heat preference' },
                { amount: 1, name: 'shallot', note: 'thinly sliced' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 4, unit: 'portions', name: 'hot steamed jasmine rice', note: 'must be hot — the contrast of cold cured pork against hot rice is the essential eating experience' },
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 1, name: 'fresh red chili, sliced', note: 'extra chili for those who want more heat' },
                { amount: 1, name: 'cucumber', note: 'sliced — to eat alongside as freshness contrast' },
                { amount: 1, name: 'small bunch rau ram', note: 'leaves only' },
            ],
        },
    ],
    steps: [
        {
            title: 'Select and slice the pork',
            description: 'Choose pork belly that is evenly layered — approximately equal thickness of fat and lean meat in each layer. Slice against the grain into pieces 3-4mm thick, about 6-8cm long. The slices must be thin and uniform — thick slices do not cure through completely in 3 days, producing a raw center that is texturally unpleasant. Rinse briefly under cold water and pat absolutely dry with paper towels.',
            tip: 'Freeze the pork belly for 20 minutes before slicing — the slight firmness allows cleaner, more uniform cuts. Uneven slices cure at different rates, producing some pieces correctly cured and others that are either over-salted or under-penetrated.',
        },
        {
            title: 'Prepare the m?m nhi curing liquid',
            description: 'Combine the m?m nhi with sugar, stir until the sugar dissolves. Add sliced garlic, chili, and shallot. Taste the curing liquid — it should be intensely savory and salty, with the complexity of the m?m nhi clear: sweeter and more layered than regular fish sauce, with a clean oceanic depth. The garlic and chili will mellow during the 3-day cure.',
            tip: 'Taste the m?m nhi straight before combining — this is the only preparation in this recipe where the fish sauce quality is directly detectable without any other cooking masking it. The difference between m?m nhi and regular fish sauce is immediately clear at this stage.',
        },
        {
            title: 'Submerge and cure — 3 days',
            description: 'Place the pork slices in a clean glass jar or ceramic container with a tight lid. Pour the m?m nhi curing liquid over, ensuring every piece of pork is completely submerged. If the pork floats, weigh it down with a small clean stone or a zip-lock bag filled with water. Seal and refrigerate. Leave undisturbed for 3 days. Do not taste before day 3 — the curing is not complete until then.',
            tip: 'Glass or ceramic containers only — the acidity and salt of m?m nhi react with metal and plastic over 3 days and can produce off-flavors. A clean glass jar with a tight lid is ideal. The jar should be filled enough that the pork stays submerged throughout.',
        },
        {
            title: 'Check the cure at 72 hours',
            description: 'After exactly 3 days, remove one piece of pork and examine it: the color should have changed throughout — no longer raw pink, now a translucent, slightly darker color similar to prosciutto or gravlax. Cut the piece in half — the center should show the same color change as the exterior. Taste: the pork should be firmly cured, intensely savory from the m?m nhi, with the garlic and chili flavors integrated throughout. If the center is still raw-pink, cure for another 12-24 hours.',
            tip: 'The color change of the pork center is the most reliable indicator of complete curing — more reliable than time alone, since refrigerator temperature variations affect curing speed. The color change throughout is the confirmation that the m?m nhi has fully penetrated.',
        },
        {
            title: 'Serve cold against hot rice',
            description: 'Remove the cured pork slices from the m?m nhi. Arrange on a plate — do not cook, do not heat. The pork is eaten as it comes from the cure, at room temperature. Serve alongside a bowl of very hot steamed rice, cucumber slices, rau ram, lime wedges, and extra chili. The correct eating method: place a slice of cured pork on top of the hot rice in the bowl, let it warm slightly from the rice steam, eat together. The contrast of the cold, salty, complex cured pork against the plain hot rice is the point of the dish.',
            tip: 'The pork must be served cold or at room temperature — not heated. Cooking the cured pork changes its character completely, producing something closer to sautéed pork in fish sauce. The 3-day cold cure produces a specific texture — firm, slightly translucent, somewhere between raw and cooked — that is the dish. Heat destroys it.',
        },
        {
            title: 'Store and use the remaining m?m nhi',
            description: 'The m?m nhi remaining after curing has absorbed pork flavor and is now even more complex — use it as a dipping sauce for other dishes, as a finishing condiment on plain rice, or as the base for another batch of cured pork. The cured pork itself keeps refrigerated in the m?m nhi for up to 1 week after the initial 3-day cure is complete. Remove slices as needed and serve cold.',
            tip: 'The used curing m?m nhi — now infused with pork flavor and garlic — is one of the most complex condiments in Vietnamese cooking. Keep it refrigerated and use it within 2 weeks. It makes an extraordinary dipping sauce for plain boiled vegetables or fresh tofu.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
