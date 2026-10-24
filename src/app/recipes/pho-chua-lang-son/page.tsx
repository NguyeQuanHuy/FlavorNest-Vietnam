'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'pho-chua-lang-son',
  title: `Phở Chua Lạng Sơn — Cold Sour Pho with Roasted Pork`,
  subtitle: 'Room-temperature rice noodles tossed in a sour-sweet-savory dressing with roast pork, liver pâté, duck egg, and peanuts — a Tày-Nùng border dish that refuses every rule of Vietnamese pho.',
  category: 'MAIN COURSE',
  difficulty: 'Hard',
  totalTime: '4 hrs 30 min',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/pho-chua-lang-son.jpg',
  intro: `Phở chua is not pho. The name is a linguistic trap — the word phở here refers only to the flat rice noodle, not to the soup, not to the broth, not to anything that defines phở bò or phở gà in the national imagination. In Lạng Sơn, 154 kilometers northeast of Hanoi where Vietnam presses against the Chinese border at the Friendship Pass, the Tày and Nùng ethnic minorities created a noodle dish that inverts every assumption: no broth, no heat, no slurping. Phở chua is served at room temperature, dressed rather than souped, assembled rather than ladled. It is closer to a composed salad than to anything served at Phở Thìn on Lò Đức street. The dish exists because of geography — at 250-800 meters elevation, Lạng Sơn winters drop to 3-5°C, and a cold-dressed noodle that could be prepared in advance and eaten without reheating became the practical solution for market days and festive gatherings where feeding dozens simultaneously made hot-broth service logistically impossible.

The dressing is where the architecture lives. The sour component is rice vinegar — not lime, not tamarind, not the fermented sourness of canh chua — but a clean, acetic acid sourness at pH 3.0-3.5 that cuts through the fat of roast pork without destroying the delicate starch structure of the noodle. At this pH, the rice noodle surface proteins undergo mild acid denaturation that actually STRENGTHENS the noodle — creating a firmer, more elastic texture than hot-broth pho achieves. This is the opposite of what happens when you drop phở noodles into 95°C broth, where the starch granules continue swelling and the noodle softens toward collapse. The vinegar arrests gelatinization at the perfect point: tender but with bite, slippery but with grip. Sugar balances the acid at a 1:2 ratio (sugar:vinegar), and fish sauce provides the glutamate floor — but at half the concentration of a standard nước chấm, because the dressing must coat, not pool.

The protein assembly is a thesis on textural contrast engineered through five different cooking methods applied to five different animal products. Thịt quay (roasted pork belly) provides the crispy-skin-to-soft-fat-to-tender-meat gradient — three textures in one slice. Chả lụa (pork roll) adds the bouncy, emulsified texture of a forcemeat processed to 15°C below body temperature. Gan (liver pâté) contributes the creamy, iron-rich spread that melts on the warm noodle. Trứng vịt (duck egg, hard-boiled and quartered) gives the chalky-crumbly yolk against the rubbery white. And finally, giò tai (pressed ear) delivers the cartilaginous crunch that no other component can provide. Five proteins, five textures, five temperatures of preparation — all served at one temperature. This is not random abundance. This is Tày engineering.

The peanut is not a garnish. Roasted peanuts crushed to 2-3mm fragments serve as the textural bridge between the slippery noodle and the dressed proteins — they catch in the dressing, absorb the vinegar-sugar solution through their porous structure, and deliver a concentrated burst of sour-sweet-nutty with each crunch. Without peanuts, phở chua collapses into a one-dimensional slippery experience. The herbs — Vietnamese coriander (rau răm), mint, and Thai basil — arrive as whole leaves, not chopped, because the essential oils must release in the mouth during chewing, not in the bowl during assembly. Chopped herbs oxidize in vinegar within 4-5 minutes, turning brown and bitter. Whole leaves stay vivid for 20-30 minutes. This is why phở chua vendors in Kỳ Lừa market always place herbs on TOP, never toss them in.

Phở chua exists in a family of Southeast Asian room-temperature noodle dishes that share the same thermal logic: Shan khao swè in Myanmar, khao piak sen in Laos, and the cold rice noodle salads of Yunnan province just across the border. The Lạng Sơn version distinguishes itself through the roast pork belly — a technique that arrived via Cantonese xiu rou (char siu) and was adapted by Tày cooks who replaced the Cantonese maltose glaze with local honey and mắc mật leaf. The result is a dish that sits at the exact intersection of Tày highland culture, Cantonese roasting tradition, and Vietnamese nước chấm philosophy — three culinary civilizations in one bowl that is not a bowl, one pho that is not pho.`,
  ingredientSections: [
    {
      title: 'Fresh Phở Noodles — Room Temperature',
      items: [
        { amount: 600, unit: 'g', name: 'fresh flat rice noodles (bánh phở)', note: 'Fresh, not dried — dried noodles lack the surface starch that catches the dressing. Width 3-5mm. If using dried, cook and rinse in cold water, but texture will be 30% less optimal.' },
        { amount: 2, unit: 'tbsp', name: 'neutral oil', note: 'Toss with cooked noodles immediately to prevent sticking. The oil film also helps dressing adhere uniformly rather than pooling at the bottom.' },
      ]
    },
    {
      title: 'Roast Pork Belly (Thịt Quay)',
      items: [
        { amount: 800, unit: 'g', name: 'skin-on pork belly, in one piece', note: 'Choose a piece with even fat-to-meat ratio. The skin must be DRY — pat with paper towels, then air-dry uncovered in the refrigerator for 12-24 hours. Moisture is the enemy of crackling.' },
        { amount: 2, unit: 'tbsp', name: 'rice vinegar', note: 'Rubbed into scored skin — acetic acid denatures surface collagen, accelerating bubble formation during roasting. This is the secret to crackling.' },
        { amount: 1, unit: 'tbsp', name: 'five-spice powder', note: 'For the meat side only. Star anise + cinnamon + clove + Sichuan pepper + fennel — the Cantonese inheritance.' },
        { amount: 2, unit: 'tsp', name: 'salt', note: 'Rubbed into the scored skin. Salt draws moisture to the surface where heat evaporates it — the drier the skin, the better the crackling.' },
        { amount: 1, unit: 'tbsp', name: 'honey', note: 'Local Lạng Sơn substitution for Cantonese maltose. Applied in the last 10 minutes of roasting for color and caramelization.' },
      ]
    },
    {
      title: 'Sour Dressing (Nước Phở Chua)',
      items: [
        { amount: 120, unit: 'ml', name: 'rice vinegar', note: 'Must be rice vinegar — not white distilled, not apple cider. Rice vinegar has 4-5% acetic acid (vs 5-7% for distilled) and contains amino acids from the rice fermentation that add umami. pH target: 3.0-3.5.' },
        { amount: 60, unit: 'g', name: 'granulated sugar', note: '1:2 ratio sugar-to-vinegar by volume. The sugar is not just for sweetness — it increases viscosity of the dressing by 15-20%, helping it coat noodles instead of running off.' },
        { amount: 3, unit: 'tbsp', name: 'fish sauce', note: 'Half the concentration of standard nước chấm. Too much fish sauce overwhelms the vinegar clarity that defines phở chua. The glutamate should be a floor, not a wall.' },
        { amount: 2, unit: 'tbsp', name: 'garlic oil (mỡ tỏi)', note: 'Fried garlic in oil — the allicin converts to ajoene and diallyl disulfide during frying, producing the sweet-nutty garlic flavor without the raw bite.' },
        { amount: 1, unit: 'tbsp', name: 'toasted sesame oil', note: 'Added last, off heat. Sesame oil oxidizes rapidly above 70°C, converting nutty sesamol into bitter compounds. Cold addition preserves the aroma.' },
      ]
    },
    {
      title: 'Protein Assembly',
      items: [
        { amount: 200, unit: 'g', name: 'Vietnamese pork roll (chả lụa)', note: 'The emulsified pork sausage — bouncy texture from myosin extraction at <15°C. Slice 3mm thick on the bias for maximum surface area.' },
        { amount: 150, unit: 'g', name: 'pork liver pâté (gan xay)', note: 'Smooth pâté, not chunky. The iron-rich creaminess melts on warm noodles. If unavailable in Europe, chicken liver pâté is an acceptable substitute — spread thin on noodle surface.' },
        { amount: 4, name: 'duck eggs, hard-boiled and quartered', note: 'Duck eggs have 30% more fat in the yolk than chicken eggs — the chalky, orange yolk crumbles into the dressing and enriches it. Chicken eggs work but lack the richness.' },
        { amount: 150, unit: 'g', name: 'pressed pig ear (giò tai)', note: 'The cartilaginous crunch component. Sliced 2mm thin. The collagen-to-elastin ratio in ear means it NEVER fully softens — permanent textural contrast. Substitute: extra chả lụa if unavailable.' },
      ]
    },
    {
      title: 'Toppings and Herbs',
      items: [
        { amount: 100, unit: 'g', name: 'roasted peanuts, coarsely crushed', note: 'Crush to 2-3mm fragments — not powder, not halves. This specific size catches in the dressing, absorbs liquid through porous structure, and delivers concentrated sour-sweet-nutty bursts.' },
        { amount: 3, unit: 'tbsp', name: 'fried shallots (hành phi)', note: 'Crispy fried shallots add Maillard sweetness. Made by cold-start frying: shallots + cold oil → heat together → dehydrate inside-out → pull at golden, carryover completes.' },
        { amount: 1, name: 'bunch Vietnamese coriander (rau răm)', note: 'WHOLE LEAVES only — do not chop. Chopped rau răm oxidizes in vinegar within 4-5 minutes, turning brown and releasing bitter polygodial. Whole leaves release oils only when chewed.' },
        { amount: 1, name: 'bunch Thai basil (húng quế)', note: 'Whole leaves. Linalool and eugenol are membrane-bound — chewing ruptures cells and releases aroma at the moment of eating, not during assembly.' },
        { amount: 1, name: 'bunch mint (húng lủi)', note: 'Menthol activates TRPM8 cold receptors — the cooling sensation contrasts with the vinegar acid sting on TRPV1, creating a thermal illusion: the dish feels simultaneously cool and sharp.' },
        { amount: 2, name: 'fresh red chilies, sliced', note: 'Capsaicin for those who want the TRPV1 heat channel activated alongside the TRPM8 cold from mint — the sensory crossfire that makes phở chua addictive.' },
      ]
    }
  ],
  steps: [
    {
      title: 'Prepare and roast the pork belly — 12-hour dry + 1 hour 40 minutes roasting',
      description: `Score the pork skin in a crosshatch pattern at 1cm intervals, cutting through the skin but NOT into the fat layer beneath. The scoring serves two purposes: it increases surface area for heat penetration by 40-60%, and it creates channels for rendered fat to escape during roasting — trapped fat steams the skin from below and prevents crackling. Rub rice vinegar into the scored skin, then salt. Rub five-spice powder into the meat side only. Place skin-side up on a wire rack over a tray, uncovered, in the refrigerator for 12-24 hours.

When ready to roast, preheat oven to 180°C (350°F). Roast the pork belly skin-side up for 1 hour 20 minutes at 180°C — this renders the subcutaneous fat slowly without burning the skin. The internal temperature should reach 75°C. Then increase to 220°C (430°F) for the final 15-20 minutes — this is the crackling phase. The skin temperature jumps from 160°C to 200°C+, and the remaining moisture in the skin flash-evaporates, creating the bubbles that become crackling. In the last 10 minutes, brush honey onto the skin edges (not the bubbled crackling areas) for Lạng Sơn-style caramelization.

The pork is ready when the skin sounds hollow when tapped and the crackling is golden-amber with visible bubbles. Rest for 20 minutes before slicing — cutting too early releases steam that softens the crackling from below.`,
      tip: `The physics of crackling: pork skin is 85% collagen and 15% water. At 160°C, water vaporizes faster than it can escape through the dense collagen matrix, creating pressurized steam pockets that inflate the skin into bubbles. The collagen simultaneously denatures and crosslinks, hardening the bubble walls into a rigid, glass-like structure. This is why dry skin is essential — additional moisture creates larger, weaker bubbles that collapse. The vinegar pre-treatment accelerates collagen denaturation at the surface by 20-30%, giving the bubbles a head start before the interior moisture arrives. Temperature is non-negotiable: below 200°C, the bubbles form but the walls remain pliable and deflate on cooling. Above 240°C, the sugar in the skin caramelizes past the Maillard zone into pyrolysis — bitter, black, inedible. The 220°C window is a 20-degree precision requirement.`
    },
    {
      title: 'Make the sour dressing — the architectural foundation',
      description: `Combine rice vinegar and sugar in a small saucepan over low heat. Stir until sugar dissolves completely — about 2-3 minutes at 50-60°C. Do NOT boil. Boiling drives off volatile acetic acid compounds that carry the bright, sharp top-note sourness; what remains is a flat, dull acid. Remove from heat and add fish sauce. Stir to combine. The solution should taste aggressively sour-sweet with a savory undertone — it will mellow significantly once it hits the starchy noodle surface.

In a separate small pan, make the garlic oil: slice 6-8 garlic cloves thinly, add to 3 tablespoons of cold neutral oil, then heat together over medium-low. This cold-start method dehydrates the garlic evenly before browning — hot-oil frying burns the exterior while the interior remains raw and acrid. When garlic turns light golden (about 4-5 minutes), remove from heat immediately — carryover heat will take it to perfect golden. Strain the garlic chips (save for topping), add the garlic-infused oil to the dressing.

Add toasted sesame oil last, off heat. Whisk everything together. The dressing should be thin enough to flow freely but viscous enough to coat a spoon lightly — if it runs like water, add 1 teaspoon more sugar. Taste: the sourness should hit first (acetic acid, fast-acting), followed by sweetness (sucrose, 0.5-second delay), followed by umami (glutamate, 1-2 second delay), followed by the nutty sesame finish. If any layer is missing, adjust.`,
      tip: `Why rice vinegar and not lime juice? Acetic acid (vinegar) and citric acid (lime) are both sour, but they interact with starch completely differently. Citric acid at pH 2.5-3.0 causes partial hydrolysis of the amylose chains in rice noodles — the noodles literally dissolve over 15-20 minutes, becoming mushy and releasing free starch that clouds the dressing. Acetic acid at the same pH causes surface protein denaturation WITHOUT starch hydrolysis — the noodle actually becomes firmer. This is why phở chua can sit for 30+ minutes and maintain noodle integrity, while a lime-dressed noodle salad must be eaten within 10 minutes. The Tày figured this out empirically over centuries of market-day cooking: vinegar-dressed noodles could be prepared at dawn and served through midday. Lime-dressed noodles could not. Function selected the acid.`
    },
    {
      title: 'Cook and dress the noodles — timing is the entire game',
      description: `Bring a large pot of water to a rolling boil. If using fresh phở noodles, blanch for 30-45 seconds only — fresh noodles are already partially gelatinized during the sheet-steaming process, and they need only rehydration and heat-through, not full cooking. If using dried phở noodles, cook according to package (usually 6-8 minutes), then rinse thoroughly in cold water to arrest cooking and remove surface starch.

Drain the noodles thoroughly — excess water dilutes the dressing by up to 40% and turns the bottom of the bowl into a puddle. Spread the noodles on a clean kitchen towel for 2-3 minutes to air-dry the surface, then transfer to a large mixing bowl. Immediately toss with 2 tablespoons of neutral oil — this oil film serves three functions: prevents sticking, creates a hydrophobic barrier that slows dressing absorption (keeping noodles firm longer), and provides a fat-phase carrier for the sesame oil aromatics in the dressing.

Add half the dressing to the oiled noodles and toss with chopsticks or tongs, lifting and turning — do not stir, which compresses the noodles. The dressing should coat every strand evenly. The noodles should glisten but not pool. Reserve the remaining dressing for tableside adjustment — each diner\\'s sourness tolerance varies, and the dressing continues to absorb over time.`,
      tip: `The oil barrier is a technique shared with Chinese liangpi (cold skin noodles) and Japanese hiyashi chuka — all cold noodle dishes use a fat film to manage dressing absorption rate. Without oil, the starch surface absorbs dressing through capillary action within 3-5 minutes, leaving the noodle exterior dry and the interior over-seasoned. The oil film reduces absorption rate by 60-70%, extending the optimal eating window from 5 minutes to 25-30 minutes. This is engineering for market-day service — a vendor who dresses 50 portions at 6 AM needs them to be edible at 10 AM. The oil makes this possible.`
    },
    {
      title: 'Slice and arrange the protein assembly — five textures, one temperature',
      description: `Slice the rested roast pork belly 5mm thick, perpendicular to the score lines — each slice should show the three-layer cross-section: crackling on top (2-3mm, glass-like), fat layer in the middle (5-8mm, translucent and soft), lean meat at the bottom (10-15mm, tender and pink). Slice the chả lụa 3mm thick on the bias — the diagonal cut increases surface area by 40% compared to straight cuts, maximizing dressing contact. Quarter the duck eggs lengthwise, revealing the deep orange yolk. Slice the pressed pig ear 2mm thin — translucent slices that show the cartilage structure.

Spread the liver pâté in thin smears across a plate — it will be placed directly on the warm noodles where residual heat (35-40°C) will soften it further, allowing it to melt into the surface and create a flavor-rich base layer that every subsequent component sits on.

Arrange all proteins on a serving platter in separated sections — phở chua is traditionally assembled at the table by each diner, not pre-mixed in the kitchen. This is both practical (different people want different protein ratios) and textural (pre-mixed proteins exchange moisture and lose their individual textures within 10 minutes — the crackling softens, the pâté firms up, the egg yolk absorbs dressing and becomes pasty).`,
      tip: `The five-protein system is not abundance for display — it is a calculated textural spectrum. Mapping on a hardness scale from 1 (soft) to 10 (hard): liver pâté = 1 (creamy, spreadable), duck egg yolk = 3 (chalky, crumbly), roast pork meat = 4 (tender, fibrous), chả lụa = 6 (bouncy, elastic), pig ear = 8 (crunchy, cartilaginous), pork crackling = 9 (glass-like, shattering). The noodle sits at 2-3 (slippery, soft). Every bite that combines 2-3 proteins with noodle creates a DIFFERENT textural experience — this is why phở chua never becomes boring despite having no broth, no heat variation, no temperature contrast. The texture IS the dynamism. Remove any one protein and you create a gap in the spectrum that the mouth notices as monotony.`
    },
    {
      title: 'Assemble the bowl — architecture, not decoration',
      description: `Place a generous nest of dressed noodles in each bowl — twist them with chopsticks into a loose mound rather than dropping them flat. The height creates air pockets that keep the noodles from compressing into a solid mass. Smear liver pâté across the top surface of the noodle mound — the residual heat begins melting it immediately. Arrange roast pork slices along one side, chả lụa along another, duck egg quarters in the center, and pig ear slices fanning across the top.

Spoon 2-3 tablespoons of the remaining dressing over the proteins — it should cascade down through the noodle mound, picking up pâté and fat on the way down. Scatter crushed peanuts generously — they should land on every surface, catching in every crevice. Add fried shallots on top of the peanuts. Finally, place whole herb leaves — rau răm, Thai basil, mint — across the top in distinct clusters, not mixed together.

Serve immediately with extra dressing, sliced chilies, and additional peanuts on the side. The bowl is eaten by mixing from the bottom up with chopsticks — pulling dressed noodles from the bottom through the protein layer, catching herbs and peanuts on the way up. Each bite should be different.`,
      tip: `The assembly order follows a principle of descending fragility: noodles (most robust) at the bottom, then pâté (melts and integrates), then sliced proteins (maintain structure), then peanuts (absorb liquid), then herbs (wilt fastest) on top. This order ensures that as the diner mixes from bottom to top, each component is encountered at its optimal state. Reversing the order — herbs at the bottom — means they sit in dressing for the entire meal, oxidizing and releasing bitter compounds. Peanuts at the bottom means they absorb all the dressing before the noodles get any. The architecture is the recipe.`
    },
    {
      title: 'The Lạng Sơn way of eating — ritual, not just consumption',
      description: `Phở chua is eaten at room temperature — never reheated, never served steaming. If the weather is cold (Lạng Sơn winters reach 3-5°C), the dish is eaten at indoor temperature, around 18-22°C. The thermal neutrality is the point: without heat to volatilize aromatics automatically, the herbs must be chewed to release their oils, the peanuts must be crushed to release their aroma, and the pork crackling must be bitten to release the rendered fat trapped beneath. Cold food makes the eater work for the flavor. This is active eating, not passive consumption.

Mix each bite individually with chopsticks — pull 3-4 noodle strands, catch one piece of protein, one herb leaf, several peanut fragments, and drag everything through the dressing pooling at the bottom of the bowl. The perfect bite has all five textures represented. If the sourness fades (the starch absorbs acid continuously), add more dressing from the side bowl.

In Lạng Sơn, phở chua is a festival food — eaten at weddings, Tết gatherings, market days, and the annual Lồng Tồng spring festival. It is assembled by teams of women who prepare components in industrial quantities: 20-30 kg of pork belly roasted over charcoal, hundreds of eggs boiled and quartered, kilograms of peanuts roasted and crushed. The assembly line is the preparation method — no single cook makes a complete bowl.`,
      tip: `The thermodynamics of cold eating: when food is served at 20-25°C instead of 70-80°C, the volatile aromatic compounds (responsible for 80% of perceived flavor) remain bound to the food matrix instead of evaporating into the air. This means cold phở chua has LESS aroma when you lean over the bowl, but MORE flavor when you eat it — the aromatics release in your mouth, not in the air above the bowl. This is why phở chua tastes richer than it smells, the exact inverse of hot pho. The Tày did not design this intentionally — they designed for practicality (room-temperature service for large gatherings) — but the sensory consequence is a dish that rewards chewing over sniffing, action over anticipation. Every aromatic must be mechanically released: mint menthol from torn cell walls, rau răm polygodial from crushed tissue, basil linalool from ruptured oil glands. The mouth becomes the extraction vessel that heat would normally be.`
    }
  ],
  tags: ['Pork', 'Lạng Sơn', 'Cold Noodle', 'Tày Cuisine'],
  description: `Phở chua is assembled at room temperature: vinegar-dressed rice noodles at pH 3.0-3.5 that actually strengthen the noodle rather than dissolving it. Five proteins spanning the entire textural spectrum from creamy liver pâté (1/10) to glass-like crackling (9/10) ensure no two bites are alike. The cold service forces every aromatic to release in the mouth rather than the air — a dish that rewards chewing over sniffing, the exact thermodynamic inverse of hot pho. Border cuisine from the Tày-Nùng highlands where feeding fifty at a wedding demanded noodles that stayed perfect for four hours. The architecture is the recipe.`
};

export default function PhosChuaLangSonPage() {
  return <RecipeLayout recipe={recipe} />;
}
