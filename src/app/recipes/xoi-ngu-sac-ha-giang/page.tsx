'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'xoi-ngu-sac-ha-giang',
  title: `Xôi Ngũ Sắc Hà Giang (Five-Colour Sticky Rice — The Cosmos on a Plate)`,
  subtitle: `Glutinous rice — soaked in FIVE plant-derived dyes (red from gấc fruit, yellow from turmeric, purple from lá cẩm, green from lá dứa, and the natural WHITE of undyed rice) — steamed and arranged on a plate in a five-colour mandala that the Tày and Nùng communities of the highland serve at every spring festival as an offering to heaven, to earth, and to the ancestors. The dish that is not eaten first but SEEN first, because the colours ARE the meaning, and the meaning IS the cosmos.`,
  category: 'DESSERT',
  difficulty: 'Medium',
  totalTime: '12 hr soaking + 1 hr steaming',
  rating: 4.9,
  baseServings: 8,
  heroImage: '/images/recipes/xoi-ngu-sac-ha-giang.jpg',
  intro: `Xôi ngũ sắc — literally "five-colour sticky rice" (ngũ = five, sắc = colour) — is the Tày and Nùng ethnic communities' most SYMBOLICALLY DENSE food: a plate of sticky rice in five colours, each colour extracted from a PLANT and each colour representing an ELEMENT of the highland cosmology:

RED (đỏ) — from gấc fruit (Momordica cochinchinensis) or lá cơm đỏ (Peristrophe roxburghiana): represents FIRE and PASSION. The same gấc-derived lycopene + beta-carotene the xôi gấc documented earlier in the collection — the living-red, the celebration-red, the red the Vietnamese altar demands.

YELLOW (vàng) — from turmeric (nghệ, Curcuma longa) or the gardenia fruit (dành dành, Gardenia jasminoides): represents EARTH and PROSPERITY. The curcumin's golden-yellow, the same pigment every turmeric-using recipe in the collection deployed, here as a COLOUR rather than as a spice (the turmeric is used at a higher concentration-per-rice-gram than the bún cá Châu Đốc's broth-turmeric, producing a VIVID yellow that the spice-level turmeric does not achieve).

PURPLE/BLACK (tím/đen) — from lá cẩm (Magenta plant, Peristrophe bivalvis) or lá trầm (black-bean-leaf extract): represents WATER and the ANCESTORS. The same black-as-ancestor colour the bánh ít lá gai documented — the colour that communicates with the dead, the colour the living cook for the non-living to receive.

GREEN (xanh lá) — from lá dứa (pandan, Pandanus amaryllifolius) or lá gừng (ginger leaf) or lá riềng (galangal leaf): represents WOOD/TREES and SPRING/RENEWAL. The chlorophyll's green, extracted by boiling the leaves and soaking the rice in the green water.

WHITE (trắng) — the natural, undyed glutinous rice: represents METAL and PURITY. The white is not a dye but an ABSENCE of dye — the rice's own colour, untouched, symbolising the element that requires no addition, the purity that exists before the transformation.

The five colours correspond to the Sino-Vietnamese NGŨ HÀNH (五行, wǔ xíng) — the five-element cosmological system (fire, earth, water, wood, metal) that the Tày, Nùng, Kinh and Chinese cultures share (the system originated in China and was adopted by the Vietnamese and the highland ethnic groups through centuries of cultural exchange). The xôi ngũ sắc is therefore: a COSMOLOGICAL MODEL in food — each colour is an element, each element is a direction (south=fire=red, centre=earth=yellow, north=water=black, east=wood=green, west=metal=white), and the plate's arrangement mirrors the compass: the five colours arranged in a MANDALA (red opposite black, green opposite white, yellow in the centre) that is: the universe in miniature, the cosmos on a plate, the highland's theology expressed in rice and plant-dye.

The BOTANICAL DYES are the xôi ngũ sắc's scientific fascination: each colour is produced by a different CLASS of plant pigment, each class has a different CHEMISTRY, and the chemistry determines the dyeing process:

RED — CAROTENOIDS (lycopene from gấc, or anthocyanins from the Peristrophe leaf): FAT-SOLUBLE (the gấc's lycopene dissolves in the rice's surface-lipid during soaking, producing an oil-phase dye that is: vivid, heat-stable, and resistant to washing — the same fat-soluble-pigment the bún đỏ's annatto documented).

YELLOW — CURCUMINOIDS (curcumin from turmeric): also FAT-SOLUBLE (the curcumin dissolves in the rice's lipid fraction, the same fat-based distribution every turmeric-using recipe exploited), and HEAT-STABLE (curcumin survives the 100°C steaming without degradation — the yellow stays vivid after cooking).

PURPLE — ANTHOCYANINS (from lá cẩm): WATER-SOLUBLE (the anthocyanins dissolve in the soaking-water, and the rice absorbs the dyed water through its starch granules' hydration — the dye enters WITH the water). Anthocyanins are pH-SENSITIVE: at acidic pH (<4): red; at neutral pH (6-7): purple; at alkaline pH (>8): blue-green. The lá cẩm's extract at the rice's natural pH (~6.5) produces PURPLE. Adding lime-juice (pH 2-3) would shift it to RED (but this would duplicate the red from gấc, so the purple is maintained at neutral pH). Adding baking soda (pH 8-9) would shift it to BLUE-GREEN (some Tày versions use this to create a blue variant, expanding the palette to 6+ colours).

GREEN — CHLOROPHYLL (from pandan or ginger/galangal leaves): FAT-SOLUBLE (chlorophyll dissolves in the leaf's own lipid, and the green dye transfers to the rice during soaking in the boiled-leaf extract). Chlorophyll is HEAT-SENSITIVE (it degrades at 100°C+ — the magnesium ion at the chlorophyll molecule's centre is replaced by hydrogen, converting the bright-green chlorophyll to dull-olive PHEOPHYTIN). The steaming therefore DULLS the green slightly (the bright-green of the raw-dyed rice shifts to a muted, sage-green in the finished xôi). The dulling is: accepted (the Tày tradition does not chase vivid-green; the muted sage-green is the "correct" green, the colour of the actual forest's leaves in winter light, not the neon-green of a food colouring).

WHITE — no pigment: the rice's own starch-scattering produces the white (the same optics every white food exploits — the starch granules scatter all wavelengths of visible light equally, and the equal-scattering is perceived as white).`,
  ingredientSections: [
    {
      title: 'The rice (one batch, divided into five)',
      items: [
        { amount: 1, unit: 'kg', name: 'glutinous rice (nếp), soaked 4-6 hr, drained, divided into 5 equal portions (200 g each)' },
      ],
    },
    {
      title: 'The five dyes',
      items: [
        {
          amount: 100,
          unit: 'g',
          name: 'RED: gấc fruit flesh (from 1-2 gấc arils) mixed with 100 ml water, or 50 g lá cơm đỏ boiled in 200 ml water',
          note: `Gấc: mash the red aril-flesh with water to release the lycopene + beta-carotene. Soak 200 g rice in this red water overnight. The fat-soluble carotenoids bond to the rice's surface-lipid = vivid, permanent red.`,
        },
        {
          amount: 30,
          unit: 'g',
          name: 'YELLOW: fresh turmeric, grated, or 2 tsp ground turmeric, dissolved in 200 ml warm water',
          note: `Soak 200 g rice in the yellow turmeric-water overnight. The curcumin bonds to the rice-starch's surface. More turmeric = more vivid yellow (the concentration is higher than cooking-level — this is DYE-level turmeric).`,
        },
        {
          amount: 100,
          unit: 'g',
          name: 'PURPLE: lá cẩm (Peristrophe bivalvis leaves), boiled in 300 ml water 15 min → deep purple extract',
          note: `Lá cẩm: boil the leaves until the water turns deep purple (the anthocyanins dissolve readily in hot water). Cool the extract. Soak 200 g rice overnight. The rice absorbs the purple water, each grain tinting from white to deep purple-violet. If unavailable: butterfly-pea flowers (hoa đậu biếc, Clitoria ternatea) produce a similar blue-purple anthocyanin.`,
        },
        {
          amount: 5,
          name: 'GREEN: pandan leaves (lá dứa), blended with 200 ml water, strained → green extract. Or: ginger/galangal leaves, boiled 15 min',
          note: `Pandan: blend the leaves to a pulp, strain through cloth, collect the green liquid (the chlorophyll transfers to the water along with the pandan's 2-AP aroma — the green rice will smell of pandan). Soak 200 g rice overnight. The chlorophyll-green dyes the rice surface.`,
        },
        {
          amount: 200,
          unit: 'g',
          name: 'WHITE: the undyed fifth portion — plain soaked nếp, no dye added',
        },
      ],
    },
  ],
  steps: [
    {
      title: 'Soak each portion in its dye overnight — the colour enters the grain',
      description: `DIVIDE the soaked, drained glutinous rice into 5 equal portions (200 g each). Place each portion in a separate bowl.

ADD THE DYES: pour each dye-extract over its designated rice-portion — the rice should be SUBMERGED in the coloured liquid (the liquid level should be 2-3 cm above the rice, ensuring every grain contacts the dye).

SOAK OVERNIGHT (8-12 hours): the long soak allows the dye molecules to migrate INTO the rice grains — not just coat the surface (a short soak produces a rice that is: coloured on the OUTSIDE but white on the INSIDE, and when steamed the interior's white bleeds through the surface-dye, diluting the colour. An overnight soak produces a rice that is: coloured THROUGHOUT, from surface to centre, and the colour survives the steaming intact).

The overnight soak's CHEMISTRY varies by dye:

RED (carotenoid): the fat-soluble lycopene migrates into the rice grain's LIPID FRACTION (the thin lipid layer coating each starch granule inside the grain's endosperm). The lipid-path migration is SLOW (8-10 hours for full penetration of a 3-4 mm rice grain — the lycopene must dissolve into the surface-lipid, then diffuse through the lipid-layer inward grain-by-grain). The result: a rice grain that is RED throughout its cross-section.

YELLOW (curcuminoid): same fat-soluble migration as the red — curcumin enters via the lipid fraction. 8-10 hour soak = yellow throughout.

PURPLE (anthocyanin): the WATER-SOLUBLE anthocyanins migrate into the rice grain via the AQUEOUS path (the starch granules absorb water, and the dissolved anthocyanins enter WITH the water). The aqueous-path migration is FASTER than the lipid-path (4-6 hours for full penetration — water diffuses through starch faster than fat diffuses through lipid). The result: the purple rice is often the DEEPEST-COLOURED of the five, because the dye had the easiest entry.

GREEN (chlorophyll): partially fat-soluble — the chlorophyll migrates via the lipid fraction, but chlorophyll molecules are LARGER than carotenoids and curcuminoids, and the larger size SLOWS the migration. The result: the green is often the PALEST of the five dyed colours (the lightest penetration), and some cooks compensate by using a MORE CONCENTRATED green extract.

WHITE: no dye. The rice soaks in plain water. The white grain remains white.

DRAIN in the morning: each portion's rice is now: uniformly dyed (red, yellow, purple, green) or white, and the colours are: VIVID (the overnight soak's full penetration producing colours that are intense, saturated, and extending from the grain's surface to its centre).`,
      tip: `The anthocyanin's pH-SENSITIVITY is the five-colour-palette's hidden EXPANDABILITY: by adjusting the pH of the lá cẩm extract, the Tày cook can produce MULTIPLE COLOURS from a SINGLE plant-source: purple at pH 6-7 (the default), red at pH 3-4 (add lime juice or vinegar), blue at pH 8-9 (add wood-ash water or baking soda). Some Tày villages produce a SEVEN-colour xôi by splitting the lá cẩm into three pH-adjusted batches (red, purple, blue) and combining them with the turmeric-yellow, the pandan-green, the gấc-red and the undyed-white. The anthocyanin is a CHAMELEON molecule — the same compound, seven colours, pH as the painter's brush.`,
    },
    {
      title: 'Steam each colour separately, arrange the mandala — the cosmos assembles',
      description: `STEAM EACH COLOUR SEPARATELY: the five portions must be steamed in SEPARATE compartments (or in sequence, one colour at a time) — steaming all five together in one basket would allow the dyes to BLEED between portions (the steam's condensation on one colour's surface drips onto the adjacent colour, carrying dissolved dye-molecules with it, and the red bleeds into the white, the purple bleeds into the yellow, and the mandala becomes a muddle).

Use: 5 small steamer baskets stacked (each colour in its own basket), or 1 large basket with DIVIDERS (banana-leaf or aluminium-foil walls between the colour-zones), or steam ONE COLOUR AT A TIME (20-25 minutes per colour, 5 rotations = 100-125 minutes total — the most labour-intensive but the most colour-pure method).

STEAM 20-25 minutes per colour: the same sticky-rice steaming every xôi in the collection documented (steamer basket over boiling water, lid on, the steam gelatinises the amylopectin). The steaming does NOT significantly alter the colours: the red (carotenoid) is heat-stable → stays red. The yellow (curcumin) is heat-stable → stays yellow. The purple (anthocyanin) is moderately heat-stable → the purple darkens slightly but remains purple. The green (chlorophyll) is heat-SENSITIVE → the bright-green shifts to muted sage-green (the chlorophyll→pheophytin degradation). The white remains white.

THE ARRANGEMENT (the mandala):

The five steamed colours are arranged on a large plate or a wide banana-leaf in the NGŨ HÀNH pattern:

CENTRE: YELLOW (earth — the centre-element, the stabiliser, the ground everything stands on). The yellow rice is mounded in the plate's centre.

TOP (south): RED (fire — the south's element, the passion, the living). The red rice is placed above the yellow.

BOTTOM (north): PURPLE/BLACK (water — the north's element, the depth, the ancestors). The purple rice is placed below the yellow.

LEFT (east): GREEN (wood — the east's element, the spring, the renewal, the sunrise). The green rice is placed to the left of the yellow.

RIGHT (west): WHITE (metal — the west's element, the purity, the autumn, the sunset). The white rice is placed to the right of the yellow.

The five colours, in their compass-positions, form a CROSS (or a quincunx) with the yellow at the centre — the visual is: a five-pointed, five-coloured, symmetrical, balanced MANDALA of rice on the plate, each colour a DIRECTION, each direction an ELEMENT, and the plate is a MAP of the cosmos: south-fire-red above, north-water-black below, east-wood-green left, west-metal-white right, and earth-yellow at the centre holding everything together.

THE OFFERING: before the family eats, the plate is placed on the ALTAR (the household's ancestor-altar or the village's communal-altar) as an OFFERING — the five colours offered to heaven, to earth, to the ancestors, and to the spirits of the four directions. The offering sits for 15-30 minutes (the time for the spirits to "receive" the essence of the food — the Vietnamese belief is that the spirits consume the food's SPIRITUAL ESSENCE while the physical food remains for the living to eat afterward). After the offering-period: the plate returns to the table, and the family eats.

THE EATING: the five colours are eaten MIXED — a spoonful that includes all five colours is the IDEAL bite (the five elements consumed together = balance, harmony, the cosmos ingested). The five colours taste: ALMOST IDENTICAL (the dyes contribute almost no flavour — the carotenoids are flavourless at this concentration, the curcumin contributes only a faint warmth, the anthocyanin is tasteless, the pandan-green contributes a faint floral 2-AP, and the white is plain rice). The five colours taste of: STICKY RICE — the same glutinous, amylopectin-rich, slightly sweet, cohesive, warm, comforting starch that every xôi in the collection has delivered. The COLOURS are for the EYES and the COSMOS. The TASTE is for the TONGUE and the BODY. And the two audiences — the spiritual (which sees the colours) and the physical (which tastes the rice) — are fed simultaneously, from the same plate.

Xôi ngũ sắc is the Hà Giang collection's most SYMBOLIC recipe — the recipe whose PURPOSE is not flavour (the five colours taste nearly identical) but MEANING (the five colours represent the five elements, the five directions, the cosmos's structure). The dish is: the collection's most THEOLOGICAL food (more symbolic than the bánh ít lá gai's black-for-ancestors, because the xôi ngũ sắc encodes an entire COSMOLOGY rather than a single symbolic association), the collection's most BOTANICAL food (five plant-species contributing five pigment-classes through five different chemical pathways — carotenoid, curcuminoid, anthocyanin, chlorophyll and no-pigment), and the collection's most BEAUTIFUL food (the five-colour mandala on the plate is, by any aesthetic standard, one of the most visually striking presentations in any cuisine). The colours ARE the recipe. The rice is the vehicle. And the cosmos is the diner.`,
      tip: `The COLOUR-THEOLOGY system (red=fire=living, black=ancestors, five-colours=cosmos) that the collection has now documented across multiple recipes represents one of Vietnamese food's most COMPLETE SEMIOTIC SYSTEMS — a system where colour IS meaning, food IS communication, and the kitchen IS the temple: xôi gấc (RED = celebration, living, joy — served at weddings, Tết, births), bánh ít lá gai (BLACK = ancestors, death, remembrance — served at death-anniversaries, Vu Lan), and xôi ngũ sắc (FIVE COLOURS = the complete cosmos, balance, harmony — served at the spring festival, the offering that says "the universe is in order"). The three preparations together form a THEOLOGICAL TRILOGY in rice: one colour for the living, one for the dead, five for the cosmos that contains them both. The kitchen that makes all three — over the course of a year's festivals — has performed a complete liturgical CYCLE in sticky rice.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
