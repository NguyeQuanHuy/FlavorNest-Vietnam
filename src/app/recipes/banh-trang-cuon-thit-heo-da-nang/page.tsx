'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-trang-cuon-thit-heo-da-nang',
    title: 'Bánh Tráng Cuốn Thịt Heo Đà Nẵng (Đà Nẵng Pork and Rice Paper Rolls)',
    subtitle: 'Thinly sliced boiled pork belly and pork skin rolled in sesame rice paper with fresh herbs, cucumber, green banana, starfruit, and pickled vegetables — dipped in mắm nêm thinned with pineapple. The Đà Nẵng street food where the sesame cracker wrapper and the mắm nêm dipping sauce are the two elements that make it unreproducible anywhere else.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '1 hr',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/banh-trang-cuon-thit-heo-da-nang.jpg',
    intro: `Bánh tráng cuốn thịt heo Đà Nẵng is the pork and rice paper roll of the central Vietnamese city — one of the most celebrated street food preparations in a city that Vietnamese food culture considers one of the three great eating destinations in the country (alongside Hà Nội and Hội An). The preparation is deceptively simple in its components and specific in every detail: boiled pork belly and pork skin, sliced thin; an abundance of fresh herbs and raw vegetables; and the two elements that make this Đà Nẵng rather than anywhere else — bánh tráng mè (sesame seed rice crackers, specifically from Tuy An district in Phú Yên, which the Đà Nẵng kitchen considers the only acceptable version) and mắm nêm (the fermented anchovy paste of central Vietnam, thinned with fresh pineapple juice rather than lime, which is the specifically Đà Nẵng version of the dipping sauce). The bánh tráng mè is not the same as the thin, soft rice paper used for fresh spring rolls — it is a cracker, toasted and slightly brittle, with toasted sesame seeds embedded in its surface, that softens slightly from the moisture of the vegetables and pork without losing its structural integrity through the eating period. The mắm nêm, thinned with pineapple and seasoned with garlic and chili, is the fermented sauce that most specifically defines central Vietnamese coastal eating — its intensely pungent, complex fermented character is the condiment that makes the plain boiled pork and fresh vegetables taste complete rather than simply fresh. The specific combination of the sesame cracker, the boiled pork skin (a textural element that has no equivalent in other Vietnamese roll preparations), the astringent green banana, the sour starfruit, and the pungent mắm nêm produces a sensory experience that is simultaneously rich, fresh, astringent, pungent, and satisfying — the full range of Vietnamese flavor and texture philosophy compressed into a single roll.`,
    ingredientSections: [
        {
            title: 'Pork',
            items: [
                { amount: 400, unit: 'g', name: 'pork belly (ba chỉ)', note: 'boiled whole in seasoned water for 30 minutes until cooked through and the skin is tender. Cooled completely before slicing.' },
                { amount: 200, unit: 'g', name: 'pork skin (bì heo)', note: 'boiled separately until tender — 20-25 minutes. Cooled, sliced into thin strips 3mm wide. The pork skin provides the specific gelatinous-chewy texture that distinguishes this preparation.' },
                { amount: 1, unit: 'tbsp', name: 'salt', note: 'for the boiling water' },
                { amount: 3, name: 'spring onions', note: 'bruised — added to the boiling water for fragrance' },
                { amount: 20, unit: 'g', name: 'fresh ginger', note: 'smashed — added to the boiling water' },
            ],
        },
        {
            title: 'Bánh tráng mè — the Đà Nẵng wrapper',
            items: [
                { amount: 20, name: 'bánh tráng mè Tuy An (sesame rice crackers)', note: 'the specific Tuy An sesame crackers from Phú Yên that Đà Nẵng uses exclusively. Available at Vietnamese specialty markets. Do not substitute with plain rice paper — the sesame and the slight crunch are essential.' },
            ],
        },
        {
            title: 'Fresh vegetables and herbs — abundant',
            items: [
                { amount: 1, name: 'head butter lettuce', note: 'leaves separated' },
                { amount: 1, name: 'bunch mint' },
                { amount: 1, name: 'bunch Vietnamese coriander (rau răm)' },
                { amount: 1, name: 'bunch perilla (tía tô)' },
                { amount: 1, name: 'bunch Vietnamese balm (rau kinh giới)' },
                { amount: 1, name: 'cucumber', note: 'julienned into batons' },
                { amount: 1, name: 'green unripe banana (chuối xanh)', note: 'peeled and thinly sliced — soaked in water with a squeeze of lime to prevent browning. The astringency is essential.' },
                { amount: 1, name: 'star fruit (khế chua)', note: 'thinly sliced — the sourness provides contrast. Substitute: green mango julienned.' },
                { amount: 100, unit: 'g', name: 'đồ chua (pickled daikon and carrot)', note: 'drained' },
                { amount: 100, unit: 'g', name: 'bean sprouts', note: 'blanched briefly' },
            ],
        },
        {
            title: 'Mắm nêm Đà Nẵng — pineapple-thinned',
            items: [
                { amount: 4, unit: 'tbsp', name: 'mắm nêm (fermented anchovy paste)' },
                { amount: 3, unit: 'tbsp', name: 'fresh pineapple juice', note: 'or 2 tbsp pounded fresh pineapple — the specifically Đà Nẵng thinning agent, not lime' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 2, unit: 'tbsp', name: 'warm water' },
                { amount: 2, name: 'garlic cloves', note: 'minced and briefly fried in oil' },
                { amount: 2, name: 'bird\'s eye chilies', note: 'minced' },
                { amount: 2, unit: 'tbsp', name: 'fresh pineapple pieces', note: 'small chunks — placed in the dipping sauce bowl for eating alongside' },
            ],
        },
    ],
    steps: [
        {
            title: 'Boil the pork belly and skin',
            description: 'Place pork belly in cold water with salt, bruised spring onions, and smashed ginger. Bring to a boil, skim for 5 minutes, reduce to a gentle simmer. Cook for 30 minutes until the belly is cooked through and the skin yields completely when pierced with a chopstick. In a separate pot, boil the pork skin for 20-25 minutes until tender throughout. Remove both and cool completely at room temperature — minimum 30 minutes. Refrigerate briefly before slicing for the cleanest cuts.',
            tip: 'Cooling the pork belly completely before slicing is the technique that produces clean, thin slices that hold together rather than falling apart. Warm pork belly compresses and tears when sliced; completely cooled pork belly slices cleanly into the thin, even pieces that layer properly in the bánh tráng cuốn roll. The pork skin specifically must be cooled until it has firmed — it is almost impossible to slice warm pork skin cleanly.',
        },
        {
            title: 'Slice the pork — thin and even',
            description: 'Slice the cooled pork belly into 3-4mm slices across the grain — each slice should show the layered fat-and-meat cross-section that is the visual signature of thinly sliced ba chỉ. Slice the pork skin into strips 3mm wide and 5cm long. Arrange both on a serving plate. The pork belly and pork skin are presented separately on the table so each diner can choose their ratio in each roll.',
            tip: 'The combination of pork belly and pork skin in bánh tráng cuốn thịt heo is the specifically Đà Nẵng element that distinguishes this preparation from Hội An and Huế versions of similar pork-and-rice-paper preparations. The pork skin provides a gelatinous chew that contrasts with the tender belly fat and the crispy sesame cracker in a way that produces three distinct textures in each bite.',
        },
        {
            title: 'Make the mắm nêm Đà Nẵng sauce',
            description: 'Briefly fry minced garlic in a small amount of oil until golden. Combine mắm nêm with fresh pineapple juice, sugar, warm water, fried garlic, and minced chili. Stir until combined. Place a few small pineapple chunks in each dipping bowl — they are eaten alongside the roll, providing bursts of sweetness between dips. The pineapple-thinned mắm nêm of Đà Nẵng is less sharp than the lime-thinned versions used in other regions — the pineapple\'s sweetness rounds the fermented paste character rather than cutting through it.',
            tip: 'Pineapple rather than lime for thinning mắm nêm is the specifically Đà Nẵng convention that produces a measurably different sauce character: the pineapple\'s enzyme content (bromelain) interacts with the amino acids in the fermented paste and produces a slightly smoother, less sharp flavor than lime\'s citric acid produces. This difference is immediately perceptible when the two versions are tasted side by side.',
        },
        {
            title: 'Prepare the full vegetable and herb table',
            description: 'Arrange the entire vegetable and herb spread on the table: the green banana slices (kept in lime water until the moment of serving to prevent browning), the star fruit slices, cucumber batons, đồ chua, bean sprouts, and the full herb plate of mint, rau răm, perilla, and rau kinh giới. The vegetable spread for bánh tráng cuốn thịt heo Đà Nẵng is more extensive than for most Vietnamese roll preparations — the specific combination of green banana astringency, star fruit sourness, and the multiple herb dimensions is what makes the roll complete.',
            tip: 'The green banana in bánh tráng cuốn Đà Nẵng is the element most frequently omitted by home cooks outside Vietnam who cannot source unripe banana, and its absence is the most clearly perceptible omission in the roll. The astringency of raw green banana — the mouth-drying quality that comes from its high tannin content — provides the specific counterpoint to the fatty pork belly and the rich mắm nêm that neither cucumber nor green mango fully replicates.',
        },
        {
            title: 'Roll and eat — the Đà Nẵng technique',
            description: 'Take one bánh tráng mè. Place it on the palm of one hand or on the table. Layer: one lettuce leaf, a few herbs (rau răm, mint, perilla, rau kinh giới), 2-3 slices of pork belly, 3-4 strips of pork skin, a few green banana slices, a slice of star fruit, some cucumber, đồ chua, and bean sprouts. Roll from the bottom up into a loose cylinder — not as tight as chả giò, because the slightly brittle bánh tráng mè will crack if rolled too tightly. Dip the end into the mắm nêm sauce and bite. The sequence of flavors: sesame cracker, then herbs and fresh vegetables, then fatty pork and gelatinous skin, then the astringent green banana, then the pungent mắm nêm arriving at the very end.',
            tip: 'The loose rolling technique for bánh tráng cuốn thịt heo — looser than most Vietnamese rolls because the sesame cracker is slightly brittle — is the technique that preserves the cracker\'s structural integrity through the eating period. A tightly rolled bánh tráng mè will crack along the fold lines as the filling compresses the cracker. Loosely rolled, it maintains its form for the 30-60 seconds between assembly and eating.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
