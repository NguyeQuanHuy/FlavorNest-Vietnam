'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ca-phe-chon-bmt',
    title: `Buôn Ma Thuột Civet Coffee`,
    subtitle: `Cà Phê Chồn — Vietnam's rarest coffee: Robusta beans processed through Asian palm civet, slow-brewed phin filter style in the capital of Vietnamese coffee.`,
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '30 min',
    rating: 4.9,
    baseServings: 2,
    heroImage: `https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=85`,
    intro: `Buôn Ma Thuột is the undisputed capital of Vietnamese coffee — a city built on Robusta, where the volcanic red basalt soil of Đắk Lắk province produces more coffee by volume than any other province in Vietnam, and Vietnam itself is the world's second-largest coffee producer. In this context, cà phê chồn (civet coffee, kopi luwak in Indonesian) is the rarest and most expensive expression of the region's defining crop — Robusta beans that have been consumed and partially digested by the Asian palm civet (Paradoxurus hermaphroditus, chồn hương in Vietnamese), then collected, cleaned, roasted, and brewed.\n\nThe civet's digestive process is not merely a novelty. The animal's stomach enzymes — specifically proteases — partially break down the proteins in the coffee bean that contribute to bitterness during roasting. The beans also absorb civet gut bacteria and digestive compounds during their 24-36 hour transit, which introduce additional chemical complexity. The result, when properly processed and roasted, is a coffee with measurably lower bitterness, higher smoothness, and a distinctive earthy, chocolatey depth that regular Robusta — already known for its strength and bitterness — does not possess.\n\nAuthentic cà phê chồn from Buôn Ma Thuột is produced by a small number of farms in the Cư M'Gar and Krông Ana districts where wild civets are still present in the coffee plantations and collect beans naturally. Farmed civet coffee — where civets are caged and force-fed — is considered both ethically problematic and inferior in quality; the stress hormones in caged civets measurably alter the bean's chemical profile. This recipe documents the brewing of authentic wild-collected cà phê chồn in the Vietnamese phin filter style.`,
    ingredientSections: [
        {
            title: `Coffee`,
            items: [
                { amount: 24, unit: 'g', name: `ca phe chon Buon Ma Thuot (authentic civet coffee)`, note: `ground medium-coarse for phin filter; buy from Trung Nguyen Legend, Chon Coffee, or direct farm suppliers in Dak Lak; approx. 2 tbsp per cup` },
                { amount: 200, unit: 'ml', name: `water`, note: `94-96°C — just off the boil; never boiling water directly on coffee grounds` },
            ],
        },
        {
            title: `Phin filter setup`,
            items: [
                { amount: 1, name: `Vietnamese phin filter (ca phe phin)`, note: `stainless steel, 3-4 cup size; available at Vietnamese grocers and online in Germany` },
                { amount: 1, name: `glass or ceramic cup`, note: `preheated with hot water — cold cup drops extraction temperature` },
            ],
        },
        {
            title: `Serving options`,
            items: [
                { amount: 2, unit: 'tbsp', name: `sweetened condensed milk (sua dac)`, note: `for ca phe sua da — the Vietnamese standard; placed in cup before brewing` },
                { amount: 4, name: `ice cubes`, note: `for ca phe sua da (iced) — Dak Lak style in the highland heat` },
            ],
        },
    ],
    steps: [
        {
            title: `Understanding cà phê chồn — what the civet actually does`,
            description: `The Asian palm civet (Paradoxurus hermaphroditus) selects the ripest, most aromatic coffee cherries by smell — its olfactory selectivity means that the beans entering the digestive system are already higher quality than the average harvest. During the 24-36 hour gut transit, three processes occur: the proteases partially hydrolyse the bean proteins that produce bitter compounds during roasting; the fermentation bacteria produce short-chain fatty acids that add complexity; and the mucilage surrounding the bean (normally washed off during wet processing) is completely removed by digestion, eliminating a source of off-flavours. The collected beans are then washed, sun-dried, and roasted — typically lighter than standard Robusta to preserve the enzymatic complexity.`,
            tip: `Wild-collected vs farmed civet coffee is the most important quality distinction. Wild civets roam freely through the plantation selecting beans at night; farmed civets are caged and fed specific beans without selection. The stress cortisol in caged civets is detectable in the finished coffee as a subtle harshness that contradicts the smoothness the process is supposed to produce. Authentic Đắk Lắk wild cà phê chồn carries a certificate of wild collection from the farm. If no such certificate exists, the coffee is almost certainly farmed — and ethically questionable.`,
        },
        {
            title: `Preheat everything`,
            description: `Fill the serving cup with hot water and leave for 60 seconds — a cold cup drops the brew temperature by 5-8°C and under-extracts the civet coffee's complex compounds. Discard the preheating water. Place the phin filter base plate on the rim of the warm cup. The phin must fit the cup rim snugly — a phin that sits inside the cup rather than resting on the rim produces condensation drip contamination.`,
        },
        {
            title: `Dose and tamp the coffee`,
            description: `Add 24g of medium-coarse ground cà phê chồn to the phin chamber — approximately 2 heaped tablespoons. Tap the phin gently on the counter twice to settle the grounds evenly. Place the press disc (phím ép) on top of the grounds and press down gently with one finger — light pressure only, not packed tight. Over-tamping slows the extraction to a drip that takes 15+ minutes and over-extracts bitter compounds; under-tamping produces a flow that is too fast and under-extracts the smooth complexity that cà phê chồn is prized for. The correct tamp leaves the press disc resting on the grounds under its own weight plus very light finger pressure.`,
            tip: `Cà phê chồn ground for phin filter should be medium-coarse — coarser than espresso grind, finer than French press. At this grind, the phin filter should drip at a rate of approximately 1 drop per second during the main extraction phase. If it drips faster: grind finer or tamp slightly more. If it drips slower than 1 drop per 2 seconds: grind coarser or reduce tamp pressure. The 1-drop-per-second target produces a 4-5 minute total brew time for 100ml — the Vietnamese phin standard.`,
        },
        {
            title: `The bloom — 30 seconds`,
            description: `Pour 20-30ml of hot water (94-96°C) over the grounds — just enough to wet the entire surface. Replace the phin lid. Wait 30 seconds. This bloom phase allows CO₂ trapped in freshly roasted coffee to escape before full extraction begins. With cà phê chồn — which is often roasted lighter than standard Vietnamese Robusta — the bloom is more pronounced than with dark-roasted coffee. You will see the grounds swell and small bubbles form at the surface. A vigorous bloom indicates fresh-roasted coffee; no bloom indicates stale coffee regardless of price.`,
        },
        {
            title: `Full extraction — 4 to 5 minutes`,
            description: `After the bloom, add the remaining hot water to fill the phin chamber to the top — approximately 170ml more for a 200ml total. Replace the lid. The coffee should begin dripping through the filter holes within 30-60 seconds and maintain a steady drip for 4-5 minutes. The liquid entering the cup will progress from a dark, almost black first extract to a progressively lighter amber as extraction completes. Total yield: approximately 80-100ml of concentrated coffee per cup.`,
            tip: `The Vietnamese phin produces a concentrate, not a diluted cup — 80-100ml of very strong coffee. This concentrate is drunk as-is (đen đá — black iced), diluted with hot water (americano style), or mixed with condensed milk over ice (sua đá). Cà phê chồn is most commonly served black in Buôn Ma Thuột — the complex flavour profile is best appreciated without milk masking it. Add condensed milk only after tasting the black version first.`,
        },
        {
            title: `Serve — the Buôn Ma Thuột way`,
            description: `For đen nóng (black hot): drink directly from the cup once extraction is complete. The coffee should be smooth, full-bodied, with low bitterness and a lingering chocolatey-earthy finish. For sua đá (iced with condensed milk): place 2 tbsp condensed milk in the cup before brewing — the coffee drips directly onto the milk. Once brewing is complete, stir briefly and pour over ice cubes in a tall glass. The condensed milk sweetness against the civet coffee's earthy depth is the classic Đắk Lắk coffee experience. Drink slowly — a cup of authentic cà phê chồn at Buôn Ma Thuột price (400,000-600,000 VND per cup) deserves more than 5 minutes of attention.`,
            tip: `In Buôn Ma Thuột coffee culture, cà phê chồn is drunk in the early morning before 8am — the first cup of the day, when the palate is clearest and the civet coffee's subtlety is most perceptible. The city's cà phê chồn specialists — Chon Coffee on Phan Bội Châu street, Trung Nguyên Legend café near the market — open at 6am specifically for this morning ritual. The coffee is not rushed. Locals spend 30-45 minutes over a single cup, watching the city wake up.`,
        },
        {
            title: `Sourcing in Germany`,
            description: `Authentic Đắk Lắk cà phê chồn is available online from several Vietnamese coffee exporters who ship to Europe — Trung Nguyên Legend, Chon Coffee Đắk Lắk, and Highlands Coffee all offer genuine wild-collected products with provenance documentation. Prices in Germany range from €30-80 per 100g depending on certification and roast date. Vietnamese community shops in Berlin (Dong Xuan Center), Frankfurt (Vietnamesisches Einkaufszentrum), and Hamburg occasionally stock vacuum-sealed bags. The phin filter — essential for authentic preparation — costs €3-8 at Vietnamese grocery stores and is the single most cost-effective piece of coffee equipment available.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}