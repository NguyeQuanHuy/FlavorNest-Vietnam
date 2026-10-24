'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'lau-mam-soc-trang',
  title: `Lẩu Mắm Sóc Trăng (Fermented Fish Hotpot — Mekong Delta's Deepest Pot)`,
  subtitle: `A bubbling cauldron of mắm cá linh — the Mekong Delta's fermented river-fish paste, dissolved into a pork-bone and lemongrass broth until the pot turns opaque, brown, violently funky and impossibly deep — into which the table dips: cá lóc, tôm, mực, thịt ba chỉ, đậu hũ, bông bí, and a jungle of Delta greens so tall it hides the pot. The hotpot that is the Mekong Delta's most extreme flavour experience and the pot that separates the initiated from the terrified.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '1 hr 30 min',
  rating: 4.9,
  baseServings: 6,
  heroImage: '/images/recipes/lau-mam-soc-trang.jpg',
  intro: `Lẩu mắm — the fermented-fish hotpot — is the Mekong Delta's signature communal dish, the pot every Delta family assembles for gatherings, every Delta restaurant offers as its centrepiece, and every Delta person argues about (whose province's version is best? Sóc Trăng, Cần Thơ, An Giang, Đồng Tháp — each claims supremacy, and each is correct within its own canal system). The Sóc Trăng version is the one this recipe documents, because the Sóc Trăng version draws on the province's THREE fermentation traditions (Khmer mắm bò hóc, Vietnamese mắm cá, Chinese preserved-fish techniques) and produces the Delta's most LAYERED fermented-fish broth.

The broth's identity is MẮM CÁ LINH — fermented from cá linh (Henicorhynchus siamensis, the Siamese mud carp, a small, bony, silver, seasonal Mekong fish that migrates downstream in vast shoals during the October-December flood season, when the Tonlé Sap's reversed flow pushes Cambodian-breeding fish into the Vietnamese Delta's canals). The cá linh run is the Mekong's annual protein-harvest: millions of fish, caught in nets stretched across the canals, and the surplus — always vast, always more than the fresh market can absorb — is FERMENTED in salt for 6-12 months, producing mắm cá linh: a thick, brown, chunky, intensely pungent paste whose free-glutamate content (800-1,400 mg/100g — the highest of any fermented-fish product in the collection, exceeding the mắm bò hóc's 600-1,200 and approaching premium fish sauce's 1,000-1,400) makes it the most umami-dense starting material any Vietnamese hotpot broth begins with.

The lẩu mắm's broth is built by dissolving the mắm cá linh paste into a simmering pork-bone stock — the same dissolution technique the bún nước lèo's mắm bò hóc used, but with a KEY DIFFERENCE: the lẩu mắm adds a SECOND round of aromatics that the bún nước lèo omits. The dissolved mắm broth is simmered with: lemongrass (citral — the universal funk-editor), sả ớt (lemongrass-chili paste, the southern version of the central coast's sa tế), and — the Sóc Trăng addition — a FRIED FISH component: a piece of cá lóc or cá sặc, pan-fried to golden-brown Maillard crispness, then DISSOLVED into the broth by simmering until the fried fish breaks apart, its Maillard-crusted surface releasing the browning products (melanoidins, pyrazines) into the mắm-infused liquid. The fried-fish dissolution enriches the broth with a ROASTED, TOASTED, CARAMELISED depth that the raw-mắm-only broth does not carry: the mắm provides the FERMENTED umami (bottom register), and the fried fish provides the MAILLARD umami (top register), and the two together produce a broth that is: umami from two sources, funky from one, toasted from the other, and deeper than either alone.

The vegetable accompaniment is the lẩu mắm's most VISUALLY SPECTACULAR element: the Delta's abundance expressed as a MOUNTAIN of raw and blanched greens — rau muống (water spinach), bông bí (squash blossoms), bắp chuối (banana blossom), rau nhút (water mimosa), rau đắng (bitter greens), cải thìa (bok choy), đậu bắp (okra), bông súng (water lily stems), kèo nèo (Neptunia prostrata) — piled on platters so tall they block the diners' view of each other across the table. The mountain is the Delta's boast: we have MORE greens than you can eat, and we will prove it by stacking them higher than the pot, and the pot will never empty the platters.`,
  ingredientSections: [
    {
      title: 'The broth — mắm + fried fish + pork bone',
      items: [
        {
          amount: 150,
          unit: 'g',
          name: 'mắm cá linh or mắm cá sặc (fermented freshwater fish paste)',
          note: `The DEEPEST mắm — free glutamate 800-1,400 mg/100g, the highest in the collection. Available at Vietnamese groceries (sold in jars, brown, chunky, intensely pungent). If unavailable: 100 g mắm cá (generic Vietnamese fermented fish paste) + 50 g mắm nêm approximates the funk-and-umami load but not the cá linh's specific riverine character.`,
        },
        { amount: 300, unit: 'g', name: 'pork bones, blanched', note: `The gelatin-body base — same structural role as in every bone-broth in the collection.` },
        {
          amount: 200,
          unit: 'g',
          name: 'cá lóc fillet or cá sặc, pan-fried golden on both sides',
          note: `The MAILLARD LAYER — pan-fried to a dark-golden Maillard crust, then simmered into the broth until it dissolves. The fried fish's melanoidins + the mắm's glutamate = dual-umami (roasted + fermented) in one broth.`,
        },
        { amount: 3, unit: 'L', name: 'water' },
        { amount: 3, name: 'stalks lemongrass, bruised and knotted' },
        { amount: 2, unit: 'tbsp', name: 'sả ớt (lemongrass-chili paste) or sa tế' },
        { amount: 2, unit: 'tbsp', name: 'sugar' },
        { amount: 1, unit: 'tbsp', name: 'fish sauce (adjust — the mắm is already very salty)' },
        { amount: 15, unit: 'g', name: 'ginger, bruised' },
      ],
    },
    {
      title: 'The dipping proteins',
      items: [
        { amount: 300, unit: 'g', name: 'cá lóc fillet, sliced 5 mm (for dipping — raw, cooked in the broth at the table)' },
        { amount: 200, unit: 'g', name: 'shrimp, shell-on' },
        { amount: 200, unit: 'g', name: 'squid (mực), cleaned, scored, sliced into rings' },
        { amount: 200, unit: 'g', name: 'pork belly, sliced thin' },
        { amount: 200, unit: 'g', name: 'firm tofu, cubed 3 cm' },
        { amount: 150, unit: 'g', name: 'fried fish balls (cá viên chiên)' },
      ],
    },
    {
      title: 'The green mountain — the Delta\'s abundance',
      items: [
        { amount: 200, unit: 'g', name: 'rau muống (water spinach), cut 10 cm lengths' },
        { amount: 100, unit: 'g', name: 'bông bí (squash blossoms)', note: `The Delta's most delicate green — the bright-orange flower of the bí đao (winter melon) or bí ngô (pumpkin), picked before the fruit sets, wilted in the hot broth for 15 seconds, emerging soft, sweet, petal-tender.` },
        { amount: 100, unit: 'g', name: 'bắp chuối (banana blossom), shredded' },
        { amount: 100, unit: 'g', name: 'rau nhút (water mimosa / Neptunia oleracea)', note: `The aquatic green — floating-leaf, hollow-stemmed, faintly astringent, the canal's own vegetable. The stems' hollow channels absorb broth on contact (same capillary mechanism as the rau muống's hollow stems and the lotus stem's air channels).` },
        { amount: 100, unit: 'g', name: 'bông súng (water lily stems), peeled, cut 10 cm', note: `The canal-harvested stem — crunchy, faintly sweet, the Delta's most AQUATIC vegetable (it grows IN the water, not beside it).` },
        { amount: 100, unit: 'g', name: 'đậu bắp (okra), halved lengthwise' },
        { amount: 100, unit: 'g', name: 'cải thìa (bok choy) or cải xanh (mustard greens)' },
        { amount: 100, unit: 'g', name: 'rau đắng đất (bitter herb — Glinus oppositifolius)', note: `The BITTER green — the same endorphin-triggering bitterness the canh cà đắng and the cháo cá lóc rau đắng documented. Added to the lẩu in the last minutes by the eaters who want the bitter-reward cycle.` },
      ],
    },
    {
      title: 'Noodles and condiments',
      items: [
        { amount: 500, unit: 'g', name: 'bún (rice vermicelli) or hủ tiếu (flat rice noodles), blanched' },
        { amount: 4, name: 'limes, in wedges' },
        { amount: 4, name: 'red chilies, sliced' },
        { amount: 30, unit: 'g', name: 'rau om (rice-paddy herb, Limnophila aromatica)', note: `The Delta's SIGNATURE herb — lemony, cumin-like, slightly dill-scented, growing wild in the rice paddies. Rau om + lẩu mắm is a fixed pairing the way húng quế + phở is a fixed pairing: the herb IS the dish's aromatic identity.` },
        { amount: 30, unit: 'g', name: 'ngò gai (sawtooth coriander)' },
      ],
    },
  ],
  steps: [
    {
      title: 'Build the broth — dissolve the mắm, dissolve the fried fish, two umamis merge',
      description: `PORK BONE STOCK: blanch the bones, rinse, simmer in 3 L water with ginger for 45 minutes. Skim. The stock: pale, gelatinous, pork-savoury — the base on which the mắm sits.

FRY THE FISH: while the stock simmers, pan-fry the cá lóc fillet in 2 tbsp oil — 3 minutes per side, dark golden, Maillard-crusted, fragrant. Set aside.

DISSOLVE THE MẮM: at minute 45, add the mắm cá linh paste to the stock. Stir vigorously 5 minutes — the paste resists dissolving (it is thick, chunky, fibrous with undissolved fish fragments), and the stirring breaks it apart progressively. Simmer 20 minutes — the fish fragments in the mắm disintegrate into the broth, the broth turns: OPAQUE (the suspended fish-protein particles scatter light), BROWN (the mắm's melanoidins and the Maillard products from the fried fish), and PUNGENT (the volatile sulfur compounds — dimethyl trisulfide, methanethiol — saturate the kitchen's air with the fermented-fish aroma that announces the lẩu mắm to the neighbourhood).

ADD THE FRIED FISH: drop the pan-fried cá lóc pieces into the simmering mắm-broth. Simmer 15 more minutes — the fried fish dissolves (its Maillard-crusted surface breaks apart, releasing the melanoidins and the pyrazines into the broth, enriching the fermented-funk base with a ROASTED-TOASTED top layer). By minute 80, the fried fish has vanished — its substance is now distributed through the broth.

ADD lemongrass, sả ớt, sugar. Taste — the broth should be: FUNKY-DOMINANT (the mắm cá linh's fermented-fish identity, the most aggressive funk in the collection — more aggressive than the bún nước lèo's mắm bò hóc, more aggressive than the mắm nhum, because the cá linh's fermentation is LONGER and at HIGHER fish-to-salt ratio), SWEET-BALANCED (the sugar rounds the funk from sharp to tolerable, the same sugar-and-funk partnership every mắm-based sauce in the collection deploys), ROASTED-DEEP (the dissolved fried fish's Maillard contribution, detectable as a warm, nutty, caramelised undertone beneath the funk), and LEMONGRASS-BRIGHT (the citral, cutting through everything, the editor that keeps the funk from overwhelming the palate).

Strain through a coarse sieve if desired (some Sóc Trăng cooks leave the broth unstrained — the suspended fish-fragments add body and authenticity; some strain for a smoother, less chunky broth). Both are correct.`,
      tip: `The DUAL-UMAMI structure (fermented mắm + Maillard fried fish) is the lẩu mắm's specific broth-architecture, and it is MORE complex than any single-umami broth in the collection: the mắm's glutamate is FREE (already cleaved from the fish's protein by the 6-12 months of autolytic fermentation — the same free-glutamate-from-autolysis the mắm nhum documented), while the fried fish's umami is MAILLARD-BOUND (the melanoidins — large, brown, polymeric molecules produced by the Maillard reaction — carry glutamate-like taste through a different receptor pathway, the CaSR calcium-sensing receptor, which responds to kokumi compounds including Maillard melanoidins). The two umami sources activate DIFFERENT receptor systems (free glutamate → mGluR1/mGluR4 taste receptors; Maillard melanoidins → CaSR kokumi receptor), and the dual activation produces a perceived savoury depth that single-source umami cannot match. The lẩu mắm's broth is, by this measure, the collection's most UMAMI-COMPLEX liquid.`,
    },
    {
      title: 'Set the pot at the table, pile the green mountain, dip everything — the Delta feast',
      description: `Transfer the broth to a hotpot burner at the table. Bring to a gentle, continuous bubble.

PILE THE GREEN MOUNTAIN: arrange the vegetable platters around the pot — rau muống in tall bundles (the stems standing upright like bamboo shoots), bông bí in golden-orange clusters, banana blossom in pink-white shreds, rau nhút in tangled, floating-leaf mats, bông súng in pale, peeled, crunchy batons, okra in green halved fingers, cải thìa in jade-green heads, and rau đắng in small, humble, dark-green piles. The platters should be TALL — the Delta's abundance is not shy, and the green mountain is the lẩu mắm's visual argument: "the Mekong gives us MORE than we can eat."

Set the protein platters: the raw cá lóc slices (pale, glistening), the shell-on shrimp (grey, curled), the scored squid rings (white, translucent), the sliced pork belly (pink, fat-marbled), the tofu cubes (white, firm), the fried fish balls (golden, round). Set the blanched noodles in individual bowls. Set the herbs (rau om, ngò gai), lime and chili on the side.

THE DIPPING SESSION (45-60 minutes, communal):

THE PROTEINS: each protein has its own DIPPING TIME in the bubbling broth — cá lóc slices (30-45 seconds — the thin fillet cooks fast, the flesh whitening and flaking, each piece exiting the pot coated in the opaque, funky, mắm-enriched broth), shrimp (2-3 minutes — the shell turns pink, the astaxanthin releasing, the shrimp curling to its just-done snap), squid (15-20 seconds — the scored surface cooks almost instantly, the squid curling from the score-marks' contraction, and OVER-DIPPING beyond 20 seconds produces the rubber the under-dipped squid avoids), pork belly (3-4 minutes — the fat renders into the broth, enriching it further, the lean sets firm), tofu (4-5 minutes — the soy-protein matrix absorbs the mắm-broth through its pores, each bite releasing a flood of fermented-fish-flavoured liquid).

THE GREENS: added by the handful, whenever the eaters want freshness between protein dips — rau muống (30 seconds — wilts, the hollow stems filling with broth), bông bí (15 seconds — the squash blossoms collapse from flower to soft petal in the heat, the most delicate and the fastest-cooking green), banana blossom (20 seconds — the shreds wilt but retain their sclerenchyma crunch), bông súng (40 seconds — the lily stems soften from crunchy-raw to tender-chewy), okra (1 minute — the pods' mucilage dissolves into the broth, thickening it slightly with each okra addition), rau đắng (30 seconds — the bitter green, for those who want the endorphin kick).

THE BROTH'S EVOLUTION: as in the lẩu lá rừng, the broth IMPROVES over the session — each protein's amino acids, each shrimp's inosinate, each mushroom's guanylate enriches the mắm's already-maximal glutamate base, and the nucleotide synergy AMPLIFIES the umami by 8-15x. The okra's mucilage thickens the broth. The pork belly's fat enriches it. And by minute 45, the final noodle course (bún or hủ tiếu, ladled into bowls with the evolved broth + the remnant proteins + the wilted greens) is the RICHEST, MOST COMPLEX, MOST UMAMI-SATURATED bowl of the entire session — the self-improving meal at its apex.

Tear rau om into the bowl at the end — the Delta's herb, its lemony-cumin-dill aroma cutting through the mắm's 45-minute-concentrated funk with a fresh, bright, green counterpoint that resets the palate one final time. Squeeze lime. Bite chili.

Lẩu mắm is the Mekong Delta's most EXTREME flavour experience — more extreme than the bún nước lèo (which dilutes the mắm in a larger broth volume), more extreme than the canh chua (which is sour, not funky), and occupying the MAXIMUM-FUNK position on the Vietnamese flavour spectrum. The lẩu mắm is not for beginners. It is for the eater who has eaten the bún nước lèo and thought "I want MORE," who has eaten the mắm nêm straight and thought "I want THIS in a pot," and who has sat at a Delta table and watched the green mountain disappear into the brown, bubbling, violently fragrant pot and thought "this is the Delta, and the Delta does not apologise."`,
      tip: `Rau om (Limnophila aromatica, rice-paddy herb) is the lẩu mắm's FIXED HERB — the aromatic the Delta palate insists on in THIS dish and in almost no other hotpot. Rau om's volatile profile (limonene, perillaldehyde, carvone — the same compound family that gives dill and caraway their aromas, plus a unique lemon-cumin note from the limonene-perillaldehyde combination) pairs with the mắm's fermented-fish funk by the same principle the lemongrass's citral pairs with it: the FRESH-TERPENE volatiles (limonene, citral) are perceived as "clean" and "bright" by the olfactory system, and their presence in the same sniff as the mắm's SULFUR-FUNK volatiles (dimethyl trisulfide, methanethiol) MASKS the funk partially (the clean-bright terpenes compete for the olfactory receptors' attention, reducing the perceived intensity of the sulfur compounds). The rau om does not eliminate the funk — it MODERATES it, keeping the funk at the level where it is delicious rather than at the level where it is overwhelming. The herb is the funk's VOLUME KNOB, and the Delta eater who tears more rau om into the bowl is turning the volume down, and the eater who adds less is leaving it up, and the calibration is personal.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
