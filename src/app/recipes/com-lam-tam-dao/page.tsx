'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'com-lam-tam-dao',
  title: `Cơm Lam Tam Đảo (Bamboo-Tube Rice — Tam Đảo Mountain Style)`,
  subtitle: `Sticky rice steamed inside green bamboo tubes over a charcoal fire — the same bamboo-vessel technique the Đắk Lắk Ê Đê collection documented — here in the NORTHERN HIGHLAND version: Tam Đảo mountain, Vĩnh Phúc province, where the Sán Dìu and Tày communities cook the rice with sesame salt and lá dong instead of coconut milk, producing a leaner, drier, more grain-forward cơm lam that tastes of bamboo and highland-autumn smoke rather than of bamboo and tropical coconut.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '1 hr 30 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/com-lam-tam-dao.jpg',
  intro: `The collection has already documented the cơm lam Ê Đê (Đắk Lắk #1) — the central highland's Ê Đê version, made with coconut milk, eaten with lá é salt and grilled meat. This recipe documents the NORTHERN HIGHLAND's version from Tam Đảo — the mountain that rises 1,400 m above the Red River Delta's flat alluvial plain, only 80 km from Hà Nội but climatically and culturally a different world (cool-season temperatures of 15-18°C, mist-shrouded forests of pine and magnolia, and ethnic communities — principally Sán Dìu and Tày — whose food culture is distinct from both the Kinh lowland and the central highland).

The two cơm lam versions share the SAME PHYSICS (green bamboo as vessel + insulator + flavour source, the same trans-2-hexenal and cis-3-hexenol infusion the Đắk Lắk page documented) but differ in EVERYTHING ELSE:

THE RICE: the Tam Đảo version uses nếp cái hoa vàng — "golden-flower glutinous rice," a northern highland landrace variety with smaller, rounder grains, a higher amylopectin content (roughly 95-98% vs the standard nếp's 90-95%), and a faint, natural FLORAL AROMA that the standard glutinous rice does not carry (the variety's name refers to the golden colour of its unhusked panicle, and the floral aroma is from 2-acetyl-1-pyrroline — the same 2-AP the jasmine rice and the pandan documented, here at roughly 0.06-0.10 ppm, slightly higher than standard nếp's 0.02-0.04 ppm). The nếp cái hoa vàng is the northern highland's PRESTIGE RICE — grown on mountain-terrace paddies at 400-800 m elevation, harvested once per year (October — the same autumn window the Tam Đảo tourism season peaks), and priced 2-3x standard glutinous rice.

NO COCONUT MILK: the Tam Đảo version uses WATER ONLY (with a pinch of salt) as the rice's steaming liquid — no coconut milk, no coconut cream, no tropical-fat enrichment. The absence is GEOGRAPHIC: coconut palms do not grow at Tam Đảo's elevation and latitude (the coconut, Cocos nucifera, requires tropical lowland temperatures — mean annual >24°C — and the Tam Đảo's cool-season 15-18°C is below the coconut's survival threshold). The Ê Đê cook adds coconut milk because the coconut palm grows beside the longhouse. The Sán Dìu cook does not because it does not grow beside the mountain hut. The ingredient IS the geography, and the geography IS the flavour: the Tam Đảo cơm lam is LEANER, DRIER, more purely GRAIN-FLAVOURED than the Đắk Lắk version — the rice's own 2-AP floral note and the bamboo's trans-2-hexenal green note are the ONLY flavours, unmasked by the coconut's heavy lauric acid.

THE CONDIMENT: where the Ê Đê eat cơm lam with muối ớt lá é (eugenol-forward, the highland's clove-warm spice), the Tam Đảo eat it with MUỐI VỪ NG (sesame salt) — toasted black sesame seeds pounded with coarse salt, producing a dry, nutty, grain-on-grain condiment (rice + sesame, both seeds, both toasted, both grain-warm) that complements the lean rice without introducing any spice-heat or herbal complexity. The sesame salt is the SIMPLEST condiment in the collection — two ingredients, one action (pound), zero heat — and its simplicity matches the cơm lam's lean, unadorned, mountain aesthetic.

THE BAMBOO: the Tam Đảo bamboo species is principally nứa (Neohouzeaua dulloa) or vầu (Indosasa angustata) — different species from the Đắk Lắk's tre or lồ ô, but the same genus-family and the same volatile-compound profile (the trans-2-hexenal and cis-3-hexenol are universal to freshly cut bamboo regardless of species — the compounds are produced by the enzymatic oxidation of linolenic acid in the bamboo's cell membranes when the cell walls are ruptured by cutting, and every bamboo species contains linolenic acid). The Tam Đảo bamboo's distinction is its DIAMETER: the northern mountain bamboo is typically NARROWER (3-4 cm inner diameter, vs the Đắk Lắk's 5-6 cm), producing a THINNER rice cylinder that cooks FASTER (25-35 minutes vs 40-50 minutes for the thicker central-highland tube) and that, when split, reveals a more COMPACT, more DENSE, more concentrated rice column.

THE CONTEXT: the Tam Đảo cơm lam is a TOURIST-AND-LOCAL dish — the Tam Đảo mountain resort town (built by the French in 1904 as a hill station, now a weekend retreat for Hà Nội's middle class) serves cơm lam at every restaurant, every homestay, every roadside stall along the winding mountain road. The Hà Nội family drives 80 km on a Saturday morning, eats gà đồi (recipe #2 in this collection) + cơm lam + rau su su (chayote greens) at a mountain-view restaurant, and drives home by sundown. The cơm lam is the mountain meal's STARCH COURSE — eaten alongside the gà đồi's steamed chicken, the meal that is Tam Đảo's weekend identity and Vĩnh Phúc's tourism economy.`,
  ingredientSections: [
    {
      title: 'The rice',
      items: [
        { amount: 400, unit: 'g', name: 'nếp cái hoa vàng (golden-flower glutinous rice) or any good-quality nếp, soaked 4-6 hr, drained', note: `The northern prestige rice — floral (2-AP 0.06-0.10 ppm), round-grained, high amylopectin. If unavailable: standard nếp works, with less floral aroma.` },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
      ],
    },
    {
      title: 'The bamboo tubes',
      items: [
        { amount: 4, name: 'fresh green bamboo tubes (nứa or vầu), 25-35 cm long, 3-4 cm inner diameter, one end sealed by natural node', note: `NARROWER than the Đắk Lắk's 5-6 cm tubes. The narrow tube = thinner rice cylinder = faster cooking (25-35 min). Must be GREEN (freshly cut, moist, inner membrane intact for volatile infusion).` },
        { amount: 4, name: 'lá dong (Phrynium placentarium) plugs or banana-leaf wads to seal the open end', note: `Lá dong — the northern wrapping leaf (the same leaf the bánh chưng uses). The lá dong plug adds a faint, green, slightly astringent aroma to the rice's top end that banana leaf does not carry.` },
      ],
    },
    {
      title: 'Muối vừng (sesame salt)',
      items: [
        { amount: 3, unit: 'tbsp', name: 'black sesame seeds, toasted until popping' },
        { amount: 1, unit: 'tbsp', name: 'coarse salt' },
      ],
    },
    {
      title: 'To serve alongside',
      items: [
        { amount: 1, name: 'gà đồi Tam Đảo (steamed hill chicken — recipe #2) or grilled pork' },
        { amount: 200, unit: 'g', name: 'rau su su xào tỏi (chayote greens stir-fried with garlic — Tam Đảo\'s signature vegetable)', note: `Su su (chayote, Sechium edule) grows prolifically on Tam Đảo's cool slopes. The tender shoots and leaves are: mild, sweet, crunchy, the mountain's own green.` },
      ],
    },
  ],
  steps: [
    {
      title: 'Load the narrow tubes, seal with lá dong, lean over coals — 25-35 minutes',
      description: `LOAD: fill each narrow bamboo tube with the soaked, drained nếp cái hoa vàng — fill to 3-4 cm below the open end (the rice swells 30-40% during steaming). Add a pinch of salt. Add water to just COVER the rice (roughly 50-60 ml per narrow tube — NO coconut milk. The water is the steaming medium only; the flavour comes from the rice and the bamboo, not from an added fat).

PLUG with a lá dong wad — press firmly. The lá dong's waxy surface creates a tighter seal than banana leaf (the wax repels the steam's condensate, preventing the plug from softening and falling out during the 25-35 minute steaming).

LEAN the tubes against the charcoal fire's stones at a 60° angle — the same angle the Đắk Lắk recipe documented (the angle ensures the sealed-node end at the bottom receives the most heat, and the steam rises upward through the rice column). The narrower tubes sit CLOSER to the coals than the wider Đắk Lắk tubes would (the thinner bamboo wall transmits heat faster — the same thermal conductivity, 0.15-0.30 W/m·K, but through a thinner wall, so the heat reaches the rice sooner).

ROTATE every 8-10 minutes (more frequently than the Đắk Lắk's 10-15 min, because the narrower tube's smaller circumference means each rotation exposes a larger fraction of the tube's surface to the fire's direct radiant heat).

THE BAMBOO'S INFUSION: identical to the Đắk Lắk process — the green bamboo's inner membrane releases trans-2-hexenal (green-leaf), cis-3-hexenol (green-fresh), furfural (sweet-bread), and vanillin (warm-sweet) as the tube heats. The volatiles migrate inward through the steam to the rice, infusing every grain. The narrower tube means a SHORTER migration distance (the rice column's centre is 1.5-2 cm from the bamboo wall, vs 2.5-3 cm in the wider Đắk Lắk tube), and the shorter distance produces a MORE UNIFORMLY INFUSED rice — every grain, even the centre grains, receives the bamboo's full volatile suite.

AT 25-35 MINUTES: the tube sounds SOLID when tapped (no sloshing). The outer bamboo is charred (the fire-side is black, the away-side is brown-green). The rice is done — the nếp cái hoa vàng has absorbed all the water, gelatinised completely, and formed a cohesive, sticky, fragrant cylinder.

MAKE THE MUỐI VỪNG while the rice steams: toast the black sesame seeds in a dry pan 2-3 minutes until popping and fragrant (the same seed-popping the mè láo documented — the moisture inside each seed flash-evaporates, cracking the coat). Pound in a mortar with the coarse salt — 10-15 strikes, COARSELY (the sesame should be cracked, not powdered — the visible seed-halves and the visible salt crystals are the condiment's rustic aesthetic). The muối vừng should smell: SESAME-DOMINANT (the sesamol's warm-nutty), salt-sharp, and nothing else. Two ingredients. One mortar. Done.`,
      tip: `The nếp cái hoa vàng's elevated 2-AP (0.06-0.10 ppm vs standard nếp's 0.02-0.04 ppm) means the Tam Đảo cơm lam carries a DOUBLE AROMATIC: the bamboo's trans-2-hexenal (green, fresh, grassy) AND the rice's own 2-AP (popcorn-like, floral, basmati-adjacent). The two aromatics occupy DIFFERENT olfactory channels (trans-2-hexenal is detected by the OR1A1 receptor; 2-AP is detected by a different, unidentified receptor) and are perceived as SEPARATE NOTES rather than a blend — the nose reads "green bamboo" AND "floral rice" independently, the way a chord's notes are distinguishable even though they sound simultaneously. The standard-nếp Đắk Lắk cơm lam carries the bamboo's note alone (the rice's 2-AP is below the detection threshold at 0.02-0.04 ppm); the nếp-cái-hoa-vàng Tam Đảo cơm lam carries BOTH notes. The prestige rice's premium is audible in the nose.`,
    },
    {
      title: 'Split the tube, tear the rice, dip in sesame salt — the mountain lunch',
      description: `SPLIT: hold the tube vertically. Strike lengthwise with a heavy knife — the charred bamboo cracks along the grain, and the two halves separate. Inside: the cơm lam cylinder — narrower and more compact than the Đắk Lắk's (3-4 cm diameter vs 5-6 cm), the surface glossy with the bamboo membrane's released starch, the colour: WHITE-to-CREAM (no coconut milk's golden tint — the Tam Đảo cơm lam is PALER than the Đắk Lắk's, and the paleness is the coconut's absence made visible).

PEEL the bamboo halves away. The inner membrane clings to the rice in translucent strips — edible, chewy, part of the experience (the same membrane-as-food the Đắk Lắk page documented).

TEAR: break the rice cylinder into chunks by hand. Each chunk is: sticky (the nếp cái hoa vàng's 95-98% amylopectin ensures maximum cohesion — the chunk does not crumble but tears, the grains stretching in sticky threads between the separating hands), FRAGRANT (the bamboo's green-grassy + the rice's floral-popcorn, the double aromatic, released in a warm cloud when the tube is split), and LEAN (no fat on the tongue — no coconut cream, no oil, just pure gelatinised-starch + bamboo-volatile + 2-AP-floral. The leanness is the Tam Đảo version's IDENTITY: the central highland's cơm lam is rich and tropical; the northern highland's is spare and grain-pure).

DIP in muối vừng — press a chunk of torn rice into the sesame salt, picking up 5-10 cracked sesame-seed halves and a few salt crystals on the sticky surface. Bite:

The RICE: sticky, warm, bamboo-infused, floral (the 2-AP arriving at the retronasal olfactory as the chewing releases the volatile from the starch matrix — the same delayed-release the phở noodle's in-mouth starch-dissolution produces for its volatiles). The stickiness coats the tongue in a thick, grain-warm, amylopectin-rich film.

The SESAME: the cracked seeds crunch (each half-seed is a tiny, oil-rich, 2 mm disc that fractures between the teeth — the same micro-crunch the mè láo's seeds provided in the pulled-candy matrix, here on the sticky-rice surface). The sesamol's warm-nutty aroma releases from the cracked seeds and BLENDS with the rice's 2-AP and the bamboo's trans-2-hexenal — three aromatics, three sources (seed, grain, tree), each one from a different kingdom of the mountain's landscape: the sesame from the field, the rice from the terrace, the bamboo from the forest.

The SALT: the coarse crystals dissolve on the tongue in 3-5 seconds, providing the salty-mineral punch that the lean, unseasoned rice needs. The salt is the only seasoning — no fish sauce, no sugar, no chili, no acid. The muối vừng's TWO-INGREDIENT simplicity is the Tam Đảo aesthetic: the mountain provides sesame, salt, rice and bamboo, and the cook adds nothing the mountain did not provide.

EAT ALONGSIDE: gà đồi Tam Đảo (the steamed chicken — the protein, the fat-source the rice does not provide), rau su su (the mountain green — mild, sweet, crunchy, stir-fried with garlic to a bright jade). The three together — cơm lam + gà đồi + rau su su — are the TAM ĐẢO SET MEAL, the mountain's equivalent of the Ê Đê's cơm ống nứa thịt nướng (the complete highland set from one landscape), here assembled from the northern highland's specific ingredients: the 2-AP rice, the hill chicken, the chayote, the bamboo, the sesame — all from within 5 km of the mountain restaurant's terrace, and all visible from the terrace's view: the bamboo forest below, the rice terraces mid-slope, the chayote trellises beside the house, and the chickens foraging in the yard.

CƠM LAM PAIR COMPLETE: Đắk Lắk (central highland, Ê Đê, coconut milk, lá é salt, wide tube, rich-tropical) ↔ Tam Đảo (northern highland, Sán Dìu/Tày, water only, sesame salt, narrow tube, lean-grain-pure). Same vessel, same physics, same bamboo volatiles — different rice, different fat, different condiment, different geography, different culture, different taste. The bamboo is the constant. Everything else is the variable. And the variable is the mountain.`,
      tip: `The Tam Đảo cơm lam — made without coconut milk — is nutritionally LEANER than the Đắk Lắk version: roughly 150 kcal per 100 g (almost entirely from the glutinous rice's carbohydrate) vs the Đắk Lắk's roughly 200 kcal per 100 g (the coconut milk adding 40-50 kcal of fat). The leanness is not a deficiency — it is a DESIGN: the Tam Đảo meal compensates for the rice's missing fat with the gà đồi's chicken fat (the hill chicken's skin is fatty, and the steaming renders the fat into the cooking liquid, which is served alongside as a dipping broth). The FAT SOURCE has moved from INSIDE the rice (Đắk Lắk: coconut milk IN the tube) to BESIDE the rice (Tam Đảo: chicken fat ON THE PLATE). Same total fat per meal, different fat-architecture, different eating experience: the Đắk Lắk cơm lam is rich in every bite; the Tam Đảo cơm lam alternates lean bites (rice) with rich bites (chicken), and the ALTERNATION is the northern highland's eating rhythm — lean-rich-lean-rich, the same contrast-enhancement every alternating-dip system in the collection deployed.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
