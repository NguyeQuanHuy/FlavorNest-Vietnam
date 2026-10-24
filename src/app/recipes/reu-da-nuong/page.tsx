'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'reu-da-nuong',
  title: `Rêu Đá Nướng (Grilled River-Stone Moss — Hà Giang)`,
  subtitle: `Freshwater moss — the dark-green, silky, mineral-rich filamentous algae that grows on river stones in Hà Giang's fast-flowing mountain streams — cleaned, seasoned with mắc khén, garlic and chili, wrapped in banana leaf and grilled over charcoal. The dish that eats the river itself, compressed into a smoky, green, iron-flavoured cake.`,
  category: 'VEGETARIAN',
  difficulty: 'Easy',
  totalTime: '30 min',
  rating: 4.7,
  baseServings: 4,
  heroImage: '/images/recipes/reu-da-nuong.jpg',
  intro: `Rêu đá — river-stone moss — is one of the most unusual ingredients in the Vietnamese food system: a wild-foraged, non-vascular, photosynthetic organism that is neither plant nor animal but algae — principally Cladophora spp. and Spirogyra spp., the filamentous green algae that form dark, silky, hair-like mats on the surfaces of submerged stones in fast-flowing, cold, oxygen-rich mountain streams. The Tày, the H'Mông, the Dao and the Thái of Hà Giang, Lào Cai, Yên Bái and the far northern highlands have eaten it for as long as they have lived beside the streams that grow it, and it is — alongside the rau dớn (fiddlehead fern) and the rau rừng (various forest greens) — one of the highland's original foraged foods, predating any cultivated vegetable on the highland table.

The moss is harvested by hand from the stream stones — peeled off in dark, wet, rubbery sheets, rinsed in the current to remove grit and aquatic insects, and carried to the kitchen in baskets. The cleaning is critical and repetitive: the moss is washed in multiple changes of water (river sand, tiny snails and insect larvae hide in the filaments), then squeezed dry — each squeeze compresses the moss from a loose, spongy mass into a dense, dark-green cake that holds its shape like a thick pancake.

The flavour is pure terroir — mineral, iron-rich, faintly iodine, with a green-vegetal note that is closer to seaweed (nori, kombu) than to any land plant, because the algae's cell chemistry is closer to marine algae than to terrestrial vegetables. The texture after grilling is unique in the collection: silky-soft at the interior (the filaments compress into a smooth, almost pâté-like mass when squeezed and heated) and faintly crispy at the surface where the charcoal or the banana leaf's contact dehydrated it. It is a texture that has no analogue in lowland Vietnamese food, and it is a texture the highland eaters prize specifically because it cannot be faked: no cultivated green produces it, and no preparation of any cultivated green replicates the silky-mineral-iron mouthfeel of a pressed, grilled, river-stone moss cake.

Hà Giang — the northernmost province, bordering China, home to the Đồng Văn Karst Plateau and the Nho Quế River's limestone canyon — is the moss's heartland, because the province's rivers run cold, fast, clean and mineral-rich over limestone beds that provide the calcium and the pH the Cladophora requires. The moss appears at every highland market from September through March (the cool season, when the streams run clear and the algae's growth peaks), sold in compressed cakes the size of a small dinner plate, dark green, wet, smelling of river stone and mountain rain.`,
  ingredientSections: [
    {
      title: 'The moss',
      items: [
        {
          amount: 400,
          unit: 'g',
          name: 'rêu đá (fresh river-stone moss), cleaned and squeezed',
          note: `Cleaned: washed in 5+ changes of water until no grit, no sand, no insects remain. Squeezed into a dense cake. OUTSIDE VIETNAM: freshwater Cladophora (also foraged and eaten in Laos, Thailand, Myanmar and Yunnan — called "khai" in Lao/Thai) is occasionally available at specialist Southeast Asian groceries. There is no European or American substitute — the organism is specific and the flavour is unreplicable. Dried river moss (sold online as "Lao river weed") rehydrates to approximately 60% of the fresh texture.`,
        },
      ],
    },
    {
      title: 'The seasoning',
      items: [
        { amount: 1, unit: 'tbsp', name: 'mắc khén, toasted and ground' },
        { amount: 4, name: 'cloves garlic, pounded' },
        { amount: 3, name: 'shallots, minced' },
        { amount: 2, name: 'bird\'s-eye chilies, minced' },
        { amount: 1, unit: 'tbsp', name: 'fish sauce' },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
        { amount: 1, unit: 'tbsp', name: 'neutral oil' },
      ],
    },
    {
      title: 'For grilling',
      items: [
        { amount: 4, name: 'pieces of banana leaf, softened over flame' },
        { amount: 1, name: 'charcoal grill with embers' },
      ],
    },
  ],
  steps: [
    {
      title: 'Wash, squeeze, season — the moss becomes a cake',
      description: `Wash the moss in 5-6 changes of clean water — submerge, agitate, lift, drain, repeat. After each wash check for grit by running a fingertip through the filaments: any grittiness = wash again. The moss is clean when the water runs clear and the filaments feel silky-smooth between the fingers.

Squeeze the clean moss in a cloth — wring hard, pressing out as much water as possible. The moss compresses from a loose, spongy mass into a dense, dark-green cake about 2 cm thick. This cake is the cooking unit.

Crumble the cake into a bowl. Add the mắc khén, garlic, shallots, chili, fish sauce, salt and oil. Mix with your hands — the seasoning distributes through the moss's filamentous mass, and the oil coats the filaments (preventing them from sticking to the banana leaf during grilling).

Re-form the seasoned moss into 4 flat cakes, each about 10 cm across and 1.5 cm thick. The cakes should hold together — the filaments' natural interlock (the same tangling that holds the moss to the river stone) holds the seasoned cake in shape without any binder.`,
      tip: `The moss's filamentous structure — long, branching, interlocking threads of algal cells — is the reason the cake holds together without egg, without flour, without any binder. The filaments tangle like wet hair, and the entanglement provides structural cohesion: each filament is locked in place by its neighbours, and the cake resists crumbling because breaking it requires breaking thousands of individual filament-to-filament contact points simultaneously. The structure is analogous to felt (interlocked wool fibres) or to papier-mâché (interlocked cellulose fibres), and it is the only food in this collection that holds itself together by fibre entanglement rather than by protein coagulation or starch gelatinisation.`,
    },
    {
      title: 'Wrap in banana leaf and grill 10-12 minutes — or grill directly',
      description: `BANANA-LEAF METHOD (preferred): place each moss cake on a softened banana leaf. Fold the leaf over — the same parcel technique the nhệch nướng used. Secure with toothpicks. Grill the parcels over embers, 8 cm above the coals, 5-6 minutes per side. The leaf chars; inside, the moss steams and grills simultaneously.

DIRECT-GRILL METHOD: press the moss cakes into a lightly oiled grill basket or lay them directly on a fine-mesh grate (the cakes are too soft for a standard grate — they fall through). Grill 3-4 minutes per side — the surface dehydrates and crisps to a dark, slightly charred shell while the interior stays soft and silky.

STIR-FRY METHOD (the quickest): heat oil in a wok, crumble the seasoned moss in, stir-fry 4-5 minutes with the garlic and chili until the moss is dry, fragrant and lightly crispy. This method produces a drier, crumblier product — good as a rice topping, less dramatic as a standalone dish.

The grilled cake is done when: the banana leaf is charred black (if wrapped), the cake feels firm when pressed (not squishy — the interior moisture has steamed and the filaments have set), and the aroma rising from the parcel is mắc khén-garlic-charcoal-mineral, the highland's aromatic signature in concentrated form.`,
      tip: `The moss's mineral content — iron, calcium, magnesium, potassium — is accumulated from the river water that flows over the algal filaments continuously for the weeks of the organism's growth. The limestone rivers of Hà Giang are particularly mineral-rich (calcium carbonate-saturated, with dissolved iron from the laterite soil), and the moss that grows in them concentrates these minerals in its cell walls at levels significantly higher than any terrestrial vegetable: roughly 15-20 mg iron per 100 g dry weight (comparable to the blood cockle), and 200+ mg calcium per 100 g dry weight (higher than milk). The mineral concentration is tasted — the iron-mineral tang of the grilled moss cake is the river's own mineral signature, absorbed through the algae's cell walls and delivered to the tongue. You are eating the river's dissolved minerals, concentrated by the moss into an edible form.`,
    },
    {
      title: 'Unwrap, eat with rice — the river on a plate',
      description: `Unwrap the charred banana leaf. The moss cake inside is: dark green (darker than before grilling — the chlorophyll has deepened under heat), firm at the surface, silky-soft at the interior, and smelling of charcoal, mắc khén, garlic and the river's own mineral signature.

Cut or break the cake into pieces. Eat with hot steamed rice — the moss's intense mineral-green flavour and the mắc khén's numbing tingle need the rice's neutral starch as a platform, the same way every strongly flavoured highland ingredient in this collection needs rice as its base.

Each bite: the surface crunch (thin, charred, dehydrated filaments), then the interior's silky melt (compressed filaments softened by the steam into a smooth, almost pâté-like texture), then the flavour — mineral, iron, green, faintly iodine, with the mắc khén's tingle arriving at the finish and the garlic's warmth underneath. The mouthfeel is unlike anything in the lowland canon: it is not crunchy (like a vegetable), not chewy (like a mushroom), not soft (like a leaf). It is SILKY — a smooth, dense, compressed mass that the tongue spreads rather than the teeth chew, and that dissolves over 3-4 seconds into the rice's starch like a savoury, mineral, green butter.

Rêu đá is the collection's most ancient foraged ingredient — older than the fiddlehead (which is a vascular plant), older than the bông điên điển (which is an angiosperm), older than any ingredient in the project except perhaps the rice itself. Algae predate plants by a billion years, and the highland communities who eat river moss are eating the evolutionary ancestor of everything green in their garden. The river grew it. The stone held it. The hand picked it. And the fire cooked it into a cake that tastes of the deep time the organism carries in its cells.`,
      tip: `Rêu đá completes the collection's foraged-wild-green file at its most extreme endpoint: neem (An Giang, canal bank, bitter leaf), bông điên điển (Đồng Tháp, floodplain, delicate flower), lá cách (Cà Mau, mangrove, numbing leaf), rau dớn (Tuyên Quang, forest floor, fern frond), and now rêu đá (Hà Giang, river stone, filamentous algae). Five organisms from five ecosystems, spanning the full botanical range from angiosperm to pteridophyte to algae. The foraged-green file is a phylogenetic tree of Vietnamese eating: the most recent organisms (flowering plants) at the southern, lowland end; the most ancient organisms (algae) at the northern, highland end. The collection eats its way down the tree of life from the newest to the oldest, and the oldest is a moss on a river stone in the northernmost province, tasting of iron and a billion years.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
