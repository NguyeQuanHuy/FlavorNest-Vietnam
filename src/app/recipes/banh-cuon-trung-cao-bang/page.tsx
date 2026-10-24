'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'banh-cuon-trung-cao-bang',
  title: `Bánh Cuốn Trứng Cao Bằng — Steamed Rice Rolls with Egg`,
  subtitle: 'Rice batter steamed over cloth into translucent sheets, each enclosing a whole soft-cooked egg — where the Tày people of Cao Bằng transformed Hanoi\\\'s delicate bánh cuốn into a hearty highland breakfast by adding the one protein source every household keeps.',
  category: 'MAIN COURSE',
  difficulty: 'Hard',
  totalTime: '2 hrs',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/banh-cuon-trung-cao-bang.jpg',
  intro: `Bánh cuốn Cao Bằng is a lesson in how altitude and economics reshape a recipe. In Hanoi, bánh cuốn is a gossamer sheet of steamed rice batter filled with minced pork and wood ear mushrooms — a refined, protein-modest dish where the wrapper IS the experience. When this technique traveled 270 kilometers north to Cao Bằng province — where the elevation climbs to 400-600 meters, winters drop to 5-8°C, and the subsistence economy historically limited meat consumption to festivals — the filling changed. The Tày and Nùng communities of Cao Bằng replaced the pork filling with a whole egg: a protein source that required no slaughtering, no refrigeration, and no market trip, because every highland household kept chickens. The egg sits inside the rice sheet like a yolk inside its albumen — a biological container wrapped in an engineered one.

The physics of bánh cuốn production is a study in thin-film technology. Rice batter — a suspension of rice starch granules (15-25 μm diameter) in water at 60-65% hydration — is ladled onto a taut cloth stretched over a pot of boiling water. The batter must spread to a uniform thickness of 0.5-1.0mm within 2-3 seconds before the steam begins gelatinizing the starch from below. This is a non-Newtonian fluid dynamics problem: the batter is shear-thinning (its viscosity decreases when force is applied), which is why the cook tilts and swirls the pot rather than spreading the batter with a tool — the gravitational shear force causes the batter to flow and self-level, while a spatula would create drag marks and thickness variations that become visible defects in the cooked sheet.

The gelatinization proceeds as a wavefront from bottom to top. Steam at 100°C contacts the cloth, passes through it, and hits the bottom surface of the batter. At 65-75°C, the rice starch granules absorb water and swell irreversibly — their crystalline structure (primarily amylopectin in Vietnamese rice flour, which is 75-80% amylopectin) melts into an amorphous gel. This wavefront moves upward at approximately 0.3-0.5mm per second, meaning a 1mm-thick sheet gelatinizes completely in 2-3 seconds. The cook knows the sheet is done not by timing but by SIGHT: raw batter is opaque white (light scattering from unswollen starch granules), and gelatinized batter is translucent (the swollen granules have the same refractive index as the surrounding water, so light passes through without scattering). The transition from white to clear sweeps across the sheet like a tide — when the last white patch disappears, the sheet is done.

The Cao Bằng variation introduces a thermal engineering challenge that Hanoi bánh cuốn avoids entirely: how to cook an egg INSIDE a rice sheet without overcooking the sheet or undercooking the egg. A whole raw egg cracked onto the batter requires 3-4 minutes of steaming to set the white (egg white proteins denature at 62-65°C for ovotransferrin, 80°C for ovalbumin), but the rice sheet is fully cooked in 30 seconds. The extended steaming should destroy the sheet — turning it from tender-translucent to tough-rubbery as the starch retrogrades and the gel matrix over-crosslinks. The Cao Bằng solution is elegant: they use a THICKER batter (1.5-2.0mm instead of 0.5-1.0mm) and a lower steam intensity (the pot is kept at a gentle simmer, not a rolling boil). The thicker sheet has more thermal mass and more water content, so it resists over-gelatinization. The lower steam intensity means the egg cooks at 85-90°C instead of 100°C — the proteins denature more slowly, the yolk stays creamy rather than chalky, and the sheet has time to steam without toughening. It is a negotiation between two ingredients with incompatible cooking requirements, resolved by finding the narrow parameter window where both can coexist.

The egg itself undergoes phase transitions that the cook orchestrates through steam management. The egg white is a 10% protein solution in water. As temperature rises: at 62°C, ovotransferrin (12% of white proteins) denatures first, creating the initial haziness — the white starts to set but remains mostly liquid. At 70°C, ovalbumin (54% of white proteins) denatures, and the white solidifies into a soft, translucent gel. At 80°C, the gel becomes fully opaque and firm. The yolk is a different system entirely: an emulsion of lipoproteins and phospholipids in a water-protein matrix. At 65°C, the yolk begins to thicken. At 70°C, it becomes a creamy paste. At 75°C+, it turns to the dry, crumbly, sulfurous solid that characterizes a hard-boiled egg. The Cao Bằng cook aims for white at 75-80°C (set but tender) and yolk at 65-70°C (creamy, flowing). This requires the OUTSIDE of the egg to reach 80°C while the CENTER stays at 70°C — a 10°C gradient across 15-20mm of egg, maintained by the gentle steam and the insulating rice sheet that moderates heat transfer to the egg surface.

The dipping sauce for Cao Bằng bánh cuốn is another departure from Hanoi. Where Hanoi uses nước chấm — a diluted fish sauce with lime and sugar — Cao Bằng uses a concentrated bone broth seasoned with shallot oil and sometimes a drop of mắc mật fruit extract. The broth provides glutamate and collagen-derived gelatin that coats the mouth alongside the rice sheet\\\'s starch coating, creating a double-layer lubrication effect. The shallot oil (allyl sulfides in a lipid carrier) provides aromatics that are fat-soluble and therefore persist on the palate longer than the water-soluble aromatics of lime juice and fish sauce. The result: Cao Bằng bánh cuốn has a LONGER finish than Hanoi bánh cuốn — the flavors linger for 15-20 seconds after swallowing, compared to 5-8 seconds for the Hanoi version. Highland food, designed for cold mornings, rewards slow eating.`,
  ingredientSections: [
    {
      title: 'Rice Batter (Bột Bánh Cuốn)',
      items: [
        { amount: 300, unit: 'g', name: 'rice flour (bột gạo)', note: 'Must be WET-MILLED rice flour, not dry-milled. Wet-milling produces smaller, more uniform starch granules (10-15 μm vs 20-30 μm for dry-milled) that hydrate more evenly and create a smoother, more translucent sheet. In Germany: Asian markets carry "Bột Bánh Cuốn" — this is pre-mixed with tapioca starch at the correct ratio. If using plain rice flour (Reismehl), add tapioca starch as below.' },
        { amount: 50, unit: 'g', name: 'tapioca starch (bột năng)', note: 'Provides amylopectin-rich supplementation: tapioca is 83% amylopectin vs rice at 75-80%. The extra amylopectin increases sheet elasticity by 30-40%, preventing tearing during the rolling step. If using pre-mixed Bột Bánh Cuốn, omit this.' },
        { amount: 600, unit: 'ml', name: 'water', note: 'The batter ratio is approximately 1:1.7 flour-to-water by weight. This produces a viscosity similar to heavy cream — thin enough to self-level on the cloth but thick enough to form a coherent film. Too thin: the sheet has holes. Too thick: uneven spreading and tough texture.' },
        { amount: 1, unit: 'tbsp', name: 'vegetable oil', note: 'Mixed into the batter to reduce surface adhesion on the cloth. The oil creates a hydrophobic micro-layer at the batter-cloth interface, allowing the cooked sheet to peel away cleanly. Without oil: 30-40% of sheets tear during removal.' },
        { amount: 0.5, unit: 'tsp', name: 'salt', note: 'Strengthens the starch gel matrix by promoting ionic crosslinking between amylopectin chains. Also seasons the bland rice sheet from within.' },
      ]
    },
    {
      title: 'Egg Filling',
      items: [
        { amount: 8, name: 'eggs, at room temperature', note: 'Room temperature is critical — a cold egg (4°C from the refrigerator) takes 40-60 seconds longer to reach the target yolk temperature, during which time the rice sheet overcooks. In Cao Bằng, eggs come straight from the hen, at 25-30°C. In Germany: remove eggs from the refrigerator 2 hours before cooking. Use free-range (Freilandhaltung) for richer yolk color and flavor — the higher beta-carotene content from outdoor foraging produces a deeper orange yolk that is visually striking through the translucent rice sheet.' },
        { amount: 2, unit: 'tbsp', name: 'fried shallots (hành phi)', note: 'Sprinkled on the batter before the egg is cracked on. The shallots provide texture contrast (crispy against soft) and allyl sulfide aromatics that complement the egg\\\'s sulfur compounds rather than conflicting with them — both are organosulfur molecules, and the brain interprets them as harmonious.' },
      ]
    },
    {
      title: 'Dipping Broth (Nước Chấm Cao Bằng)',
      items: [
        { amount: 500, unit: 'ml', name: 'pork or chicken bone broth', note: 'Simmered for 4-6 hours minimum to extract gelatin. The gelatin concentration should be 3-5% — test by refrigerating a spoonful: it should set to a soft gel, not liquid (too weak) or rubber (too strong). The gelatin creates the distinctive mouth-coating texture that differentiates Cao Bằng dipping broth from Hanoi fish sauce.' },
        { amount: 3, unit: 'tbsp', name: 'fish sauce', note: 'Added to the broth for glutamate reinforcement. The broth provides gelatin-bound umami; the fish sauce provides free glutamate — two different delivery mechanisms for the same taste, perceived at different speeds (free glutamate hits immediately, gelatin-bound releases slowly as body heat melts the gelatin).' },
        { amount: 3, unit: 'tbsp', name: 'shallot oil (mỡ hành)', note: 'Made by frying thinly sliced shallots in neutral oil until golden, then removing the shallots (reserved as topping). The oil carries allyl methyl sulfide and dipropyl disulfide — fat-soluble aromatics that persist on the palate for 15-20 seconds.' },
        { amount: 1, unit: 'tsp', name: 'sugar', note: 'Balances the salt of the fish sauce and the mineral notes of the bone broth.' },
        { amount: 1, name: 'lime, juiced', note: 'Added at serving, not during cooking — citric acid at boiling temperature accelerates Maillard browning of the broth\\\'s amino acids, darkening the color and creating bitter compounds. Cold addition preserves the bright acid character.' },
      ]
    },
    {
      title: 'Accompaniments',
      items: [
        { amount: 200, unit: 'g', name: 'chả lụa (Vietnamese pork sausage), sliced', note: 'The protein-dense counterpoint to the starch-and-egg rolls. Sliced 3-4mm thick — thin enough to pick up with chopsticks alongside a roll piece, thick enough to maintain its bouncy (giòn) texture on the tooth.' },
        { amount: 100, unit: 'g', name: 'fresh herbs: Vietnamese coriander (rau răm), mint, perilla', note: 'The aromatic palate-cleansers between bites. Each herb provides different volatile compounds: rau răm = decanal (waxy-citrus), mint = menthol (cooling), perilla = perillaldehyde (cinnamon-mint). The variety prevents sensory adaptation — each bite smells different.' },
        { amount: 50, unit: 'g', name: 'fried shallots (hành phi)', note: 'Sprinkled over the finished rolls. The Maillard products from frying (pyrazines, furanones) provide roasted-savory notes that contrast with the clean, steamed character of the rice sheet.' },
      ]
    }
  ],
  steps: [
    {
      title: 'Prepare the batter — the 2-hour hydration that most recipes skip',
      description: `Combine rice flour, tapioca starch, salt, and water in a large bowl. Whisk until completely smooth — no lumps. The batter should have the consistency of heavy cream: it should coat the back of a spoon but run off in a steady stream when tilted. If too thick, add water 1 tablespoon at a time. If too thin, add rice flour 1 tablespoon at a time.

Add the vegetable oil and whisk to incorporate. The oil will not dissolve — it forms micro-droplets suspended in the starch-water matrix. These droplets will migrate to the bottom surface of the sheet during steaming (oil is less dense than the batter but is pushed down by the steam pressure from above), creating the anti-stick layer at the cloth interface.

REST the batter for minimum 2 hours at room temperature, or overnight in the refrigerator. During resting, the starch granules fully hydrate — absorbing water into their amylopectin matrix until they swell to 1.5-2× their dry diameter. This pre-hydration means that when steam hits the batter, the gelatinization is FASTER and more UNIFORM (the granules are already water-saturated, so the heat only needs to melt the crystalline structure, not also hydrate the granules). Un-rested batter produces sheets with opaque spots — partially gelatinized granules that didn\\\'t have time to hydrate fully before the heat set them.

Stir the batter before each sheet — the starch settles during standing. The batter should be homogeneous each time.`,
      tip: `The 2-hour rest is the difference between translucent and opaque sheets. Here\\\'s why: starch gelatinization has TWO sequential steps — (1) hydration (water entering the granule) and (2) melting (the crystalline amylopectin structure collapsing into an amorphous gel). Step 1 takes 1-2 hours at room temperature but only seconds at 65°C+. Step 2 takes 2-3 seconds at 100°C regardless of prior hydration. If you skip the rest, both steps must happen simultaneously during the 30-second steaming window. Step 1 becomes the bottleneck: some granules fully hydrate and gelatinize (becoming translucent), while others are still absorbing water when the heat sets them (remaining opaque). The sheet has a mottled, inconsistent appearance. With the 2-hour rest, step 1 is complete before the batter touches the cloth — all granules are equally hydrated — and step 2 proceeds uniformly, producing the signature glass-clear sheet. Pre-hydration is the cheapest quality improvement in all of Vietnamese cooking: it costs nothing but time.`
    },
    {
      title: 'Set up the steaming station — cloth tension is everything',
      description: `Fill a wide, deep pot (minimum 30cm diameter) with water to 5cm below the rim. Stretch a piece of fine-weave cotton cloth (muslin or cheesecloth, washed and wrung) taut across the top of the pot. The cloth must be DRUM-TIGHT — no sag, no wrinkles. Secure it with a rubber band, kitchen twine, or the pot\\\'s own rim and a ring. The cloth surface should be absolutely flat and horizontal.

Bring the water to a gentle simmer — NOT a rolling boil. You should see small bubbles breaking the surface, and steady steam rising through the cloth, but the cloth should not billow or vibrate. The steam should feel hot when you hold your palm 10cm above the cloth, but it should not be aggressive enough to cook your hand in a second.

Prepare a flat plate or board as a receiving surface, lightly oiled. Have a thin, flexible spatula or a bamboo stick ready for peeling the cooked sheets from the cloth. Cao Bằng cooks use a bamboo stick about 30cm long, slightly curved — the curve matches the natural peel angle that minimizes tearing force on the sheet.

Keep a bowl of oil and a brush beside the steaming station — after each sheet is peeled, brush the cloth lightly with oil before ladling the next batch of batter. The oil refreshes the anti-stick surface that degrades with each sheet.`,
      tip: `Why cloth tension matters: the batter must form a uniform-thickness film on the cloth surface. On a sagging cloth, the batter pools in the center (gravity) and thins at the edges — the center overcooks (too thick, takes longer to gelatinize, gets tough) while the edges undercook (too thin, tears when peeled). On a taut cloth, the batter self-levels to a uniform 1.5-2.0mm under gravity and surface tension, like water on a flat table. Additionally, a taut cloth transmits steam uniformly — every point on the cloth receives the same steam flux. A sagging cloth has variable distance from the water surface: the center (closer to the water) gets more intense steam, the edges (farther) get less. This creates a radial temperature gradient on the batter — the center gelatinizes first, the edges lag. The result: the sheet cooks from center to edge, creating a TIME gradient in the starch gel that manifests as a texture gradient (firm center, soft edges). Professional bánh cuốn makers test cloth tension by dropping a coin on it — if it bounces, the tension is correct.`
    },
    {
      title: 'Steam the egg-filled rolls — the 3.5-minute negotiation',
      description: `Stir the batter. Ladle 60-80ml of batter onto the cloth in a circular motion, starting from the center and spiraling outward. Immediately tilt and rotate the pot (or use the back of the ladle in one quick sweep) to spread the batter into a circle approximately 25cm in diameter and 1.5-2.0mm thick. You have 2-3 seconds before the bottom surface begins to set.

Sprinkle a pinch of fried shallots across the batter surface. Then, working quickly, crack one egg directly onto the center of the batter. The egg will sit on top of the still-liquid batter, its weight creating a slight depression. Do NOT break the yolk.

Cover the pot with a domed lid (a flat lid presses down on the egg). Steam for 3-3.5 minutes at a gentle simmer. During this time:

0-30 seconds: The rice batter gelatinizes from bottom to top. The sheet turns from white to translucent. The egg white begins to haze around the edges.

30-90 seconds: The egg white sets from the outside inward. The area closest to the cloth (heated by direct steam) sets first. The top of the egg white, exposed to the cooler air under the lid, remains partially liquid.

90-180 seconds: The egg white fully sets. The yolk begins to thicken from a liquid to a creamy paste (65-70°C). The rice sheet, now fully cooked, begins its slow over-gelatinization — the thicker batter and gentle steam keep this process slow enough that the sheet remains tender.

180-210 seconds: The yolk reaches the target 65-70°C — creamy, flowing when cut, deeply orange. The white is fully set but tender. The rice sheet is still pliable enough to roll.

Check by lifting the lid: the egg white should be uniformly opaque with no liquid patches. The yolk should jiggle slightly when the pot is tapped — a firm jiggle means 65°C (perfect), a lazy jiggle means 60°C (underdone), and no jiggle means 75°C+ (overcooked, yolk will be crumbly).

Use the bamboo stick or spatula to gently peel one edge of the sheet from the cloth, then fold the sheet over the egg — fold one side, then the other, creating a rectangular package with the egg in the center. Lift the entire roll onto the oiled plate. The roll should be translucent enough that the egg is visible as a golden shadow inside.

Repeat for each roll. Re-oil the cloth between sheets. Re-stir the batter between sheets. Work in a rhythm: ladle, spread, shallots, crack, cover, wait, fold, lift. Each roll takes 4-5 minutes from ladle to plate.`,
      tip: `The 3.5-minute cook time is a narrow window determined by competing kinetics. The rice sheet reaches "done" at 30 seconds and begins to over-crosslink at 4 minutes — the amylopectin chains, which initially form a soft, hydrated gel, slowly re-associate into tighter crystalline structures (retrogradation) under continued heat, increasing firmness. Meanwhile, the egg yolk reaches "done" (65-70°C creamy) at 3-3.5 minutes but crosses into "overcooked" (75°C chalky) at 4.5 minutes. The overlap zone where BOTH the sheet and the egg are in their ideal state is 3-3.5 minutes — a 30-second window. This is why gentle steam matters: at a rolling boil (100°C), the egg reaches 70°C at 2 minutes but the cooking rate is so fast that by 2.5 minutes the yolk is already at 80°C — the window narrows to 10-15 seconds, which is unrepeatable. At a gentle simmer (85-90°C), the thermal gradient is gentler, the yolk temperature rises more slowly, and the 30-second window stretches into a forgiving 60-second window. Gentle steam is not laziness — it is precision.`
    },
    {
      title: 'Prepare the Cao Bằng dipping broth',
      description: `While the rolls steam, bring the bone broth to a gentle simmer. Add fish sauce and sugar, tasting and adjusting — the broth should be savory-forward with a subtle sweetness, not sweet-forward. The gelatin in the broth should give it a slightly viscous body — it should coat the inside of the bowl when swirled, leaving a thin film that slowly slides down (this is the gelatin at work, creating the mouth-coating effect).

In a small pan, heat 3 tablespoons of neutral oil over medium heat. Add thinly sliced shallots and fry, stirring constantly, until golden brown — 4-5 minutes. The shallots go from translucent to golden to burned in a narrow window: remove them at GOLDEN, when the edges are just turning dark. Strain the shallots from the oil — both are used separately (the shallots as topping, the oil stirred into the broth).

Stir the shallot oil into the hot broth. The oil creates a thin lipid layer on the surface that traps the broth\\\'s volatile aroma compounds — when the diner brings the bowl to their nose, they first smell the shallot oil aromatics, then the broth vapors that escape through breaks in the oil film. This two-phase aroma delivery (lipid-phase first, aqueous-phase second) is more complex than a single-phase broth.

Ladle the broth into individual dipping bowls. Add lime juice at the table, not in the pot — each diner adjusts acid to their preference. Float a few fried shallots on the surface of each bowl.`,
      tip: `The Cao Bằng dipping broth is a study in umami LAYERING versus umami CONCENTRATION. Hanoi\\\'s nước chấm is concentrated umami: fish sauce (1200-1400 mg glutamate/100ml) diluted with water and balanced with sugar and lime. It delivers one massive umami hit that peaks at 1-2 seconds and fades by 5 seconds. The Cao Bằng bone broth approach layers THREE umami sources that release at different speeds: (1) free glutamate from fish sauce — immediate hit, peaks at 1 second; (2) peptide-bound glutamate from bone broth proteins — released by salivary enzymes over 5-10 seconds; (3) gelatin-encapsulated amino acids — released as body heat melts the gelatin coating in the mouth over 10-20 seconds. The result: umami that BUILDS over 20 seconds rather than PEAKING at 2 seconds. On a cold Cao Bằng morning at 8°C, this extended umami curve transforms a 5-minute breakfast into a 15-minute meditation — each sip of broth continuing to release flavor long after the liquid has been swallowed. The broth was engineered for slow mornings, not fast commutes.`
    },
    {
      title: 'Serve — the highland breakfast ritual',
      description: `Arrange 2 rolls per serving on individual plates, seam-side down. The rolls should be plump and slightly translucent — the golden shadow of the egg visible through the rice sheet like morning light through mountain fog.

Top each roll with a teaspoon of shallot oil drizzled in a thin line along the length — the oil creates a visual sheen and carries aromatics directly to the surface. Scatter fried shallots generously across the top.

Alongside each plate: a bowl of the warm dipping broth with lime wedge, sliced chả lụa arranged in overlapping semicircles, and a plate of fresh herbs (rau răm, mint, perilla).

To eat: cut the roll crosswise with chopsticks, revealing the egg cross-section — the set white forming a white ring around the creamy golden yolk, all encased in the glass-clear rice sheet. The visual is three concentric circles of increasing translucency: opaque white → golden yolk → clear rice sheet. Dip the cut piece into the broth, allowing the gelatin-rich liquid to coat all surfaces. The broth seeps into the rice sheet\\\'s starch matrix, softening it further and delivering umami directly into the roll\\\'s texture.

Alternate between bites of roll-with-egg (rich, warm, substantial) and bites of chả lụa-with-herb (bouncy, cool, aromatic). The thermal contrast between the warm roll and the room-temperature chả lụa keeps the palate from adapting to either temperature — each bite feels fresh.

On a cold morning in Cao Bằng, the meal is eaten slowly: the bone broth stays warm for 15-20 minutes (the gelatin acts as a thermal buffer, releasing heat slowly as it cools — the same property that keeps gelatin desserts from melting quickly), and each roll holds its heat inside the insulating rice sheet. The egg inside remains warm for 10 minutes after plating — thermal mass of the yolk (high water content, high specific heat capacity of 3.7 J/g·K) retains heat while the thin rice sheet dissipates it slowly. Cold-weather food, engineered for cold weather.`,
      tip: `The cross-section of a Cao Bằng bánh cuốn trứng is a miniature masterclass in concentric thermal engineering. From outside to inside: (1) the rice sheet at 55-60°C — cooling rapidly due to its thinness (0.1mm effective thermal mass); (2) the egg white at 65-70°C — set into a gel that retains heat better than the sheet; (3) the egg yolk at 70-75°C — the densest, highest-thermal-mass element, cooling last. When you cut the roll and eat it, your mouth experiences a THERMAL GRADIENT from the cooler exterior to the warmer interior — each progressive layer is slightly warmer than the last. This inside-out warming effect is the opposite of most hot foods, where the exterior is hottest and the center coolest. The unusual thermal profile activates thermoreceptors in a sequence (cool→warm→hot) that feels like the food is "blooming" in your mouth — a sensation the Tày describe as "nóng từ trong ra" (warm from the inside out). This thermal bloom is unique to filled foods where the filling has higher thermal mass than the wrapper — a physics of comfort that the highlands invented long before anyone wrote it down.`
    }
  ],
  tags: ['Bánh Cuốn', 'Cao Bằng', 'Egg', 'Steamed', 'Breakfast'],
  description: `Rice batter (0.5-1.0mm) steamed over taut cloth — gelatinization wavefront sweeps bottom-to-top in 2-3 seconds, turning opaque white to translucent as swollen starch granules match the refractive index of surrounding water. Cao Bằng\\\'s egg variant negotiates incompatible cook times: rice sheet done at 30 seconds, egg yolk at 3.5 minutes — resolved by thicker batter (1.5-2.0mm) and gentle steam (85-90°C) creating a 60-second overlap window. Bone broth dipping sauce layers three umami speeds: free glutamate (1 second), peptide-bound (5-10 seconds), gelatin-encapsulated (10-20 seconds) — building umami that extends 4× longer than Hanoi\\\'s concentrated fish sauce hit. Thermal bloom: concentric layers cool outside-in, creating the rare inside-out warming sensation on the tongue.`
};

export default function BanhCuonTrungCaoBangPage() {
  return <RecipeLayout recipe={recipe} />;
}
