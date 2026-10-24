'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'nuoc-mia-gung',
  title: `Nước Mía Gừng (Sugarcane Juice Simmered with Ginger)`,
  subtitle: `Fresh-pressed sugarcane juice — green, sweet, grassy, tasting of the field — simmered with bruised ginger until the kitchen smells of warm sugar and spice and the liquid darkens to a pale amber that coats the throat on the way down. The Vietnamese remedy for sore throat, dry cough, and the voice that left after three days of fever. Not medicine. Not quite food. The warm drink the mother makes when the tea is too thin and the soup is too much.`,
  category: 'DESSERT',
  difficulty: 'Easy',
  totalTime: '20 min',
  rating: 4.7,
  baseServings: 4,
  heroImage: '/images/recipes/nuoc-mia-gung.jpg',
  intro: `Nước mía — sugarcane juice — is Vietnam's street drink: pressed from fresh sugarcane stalks through a heavy steel roller mill at every street corner, poured over ice, served in a plastic cup with a straw, and drunk standing in the shade while the motorbikes pass. It is the cheapest drink in the Vietnamese street economy, the sweetest, and the most refreshing — pure sucrose dissolved in the cane's own water, with a grassy, green, faintly vegetal flavour that processed sugar does not carry because processing strips the volatiles that make sugarcane taste like a plant rather than like a chemical.

Nước mía gừng is nước mía's medicinal cousin — the same juice, simmered with ginger, and served warm rather than iced. The transformation is small in technique (add ginger, apply heat) and large in function: the cold street drink becomes a warm throat remedy, the refreshment becomes a treatment, and the cup changes hands from the street vendor to the mother.

The folk-medicine logic: sore throat and dry cough are classified as "khô" (dry) conditions in the Vietnamese framework — the throat's mucous membranes are dehydrated, inflamed and irritated, and the treatment is to MOISTEN (the sugarcane's water + the sucrose's hygroscopic moisture-retention) and to WARM (the ginger's gingerol promotes vasodilation in the throat's blood vessels, increasing blood flow and — with it — the delivery of immune cells and the clearing of inflammatory mediators). The sugarcane moistens from above (coating the throat with a sweet, slightly viscous liquid), the ginger warms from below (the vasodilation increases tissue temperature by 0.5-1°C locally), and the combination — moist + warm — is the folk treatment for dry + cold.

The pharmacology is, as with the khổ qua and the rau đắng, more supportive than the folk language suggests but more plausible than a sceptic assumes. Ginger's gingerol is a documented anti-inflammatory (it inhibits cyclooxygenase-2 and 5-lipoxygenase, the same enzyme targets as ibuprofen, though at much lower potency), a documented anti-emetic (it reduces nausea by antagonising serotonin's 5-HT3 receptor — the mechanism by which the pharmaceutical ondansetron works), and a documented promoter of salivation and gastric motility (it stimulates the cholinergic receptors in the salivary glands and the stomach wall). The sugarcane's sucrose provides rapidly available glucose (the body's primary fuel during illness, when appetite is suppressed and glycogen stores are depleted). And the warm water provides hydration — the single most important intervention for any febrile illness.

Nước mía gừng is not medicine. It is food-that-helps, drink-that-soothes, warmth-that-comforts — the same liminal category the cháo trắng and the canh bí đao occupy, where the line between nutrition and treatment is blurred by the Vietnamese kitchen's refusal to draw it.`,
  ingredientSections: [
    {
      title: 'The sugarcane juice',
      items: [
        {
          amount: 1,
          unit: 'L',
          name: 'fresh sugarcane juice (nước mía), or reconstituted from cane sugar',
          note: `FRESH: pressed from sugarcane stalks through a roller mill — available at Vietnamese/Chinese/Thai groceries, at street stalls, or from raw cane fed through a home juicer. The fresh juice is green-tinged, slightly cloudy, and tastes of grass and raw sugar. RECONSTITUTED (if fresh cane is unavailable): dissolve 200 g unrefined cane sugar (đường thốt nốt, panela, jaggery, or muscovado — any minimally processed cane sugar that retains the cane's minerals and molasses) in 1 L warm water. White refined sugar works functionally but lacks the cane's vegetal flavour and its mineral trace.`,
        },
      ],
    },
    {
      title: 'The ginger',
      items: [
        {
          amount: 60,
          unit: 'g',
          name: 'fresh ginger, bruised and sliced',
          note: `Generous — the ginger must be perceptible in every sip, not as a ghost but as a PRESENCE. Bruise the pieces (press with a knife blade to crack the cells and release the volatile oils) before adding to the juice. Old ginger (darker skin, drier flesh, higher gingerol concentration) is preferred over young ginger (pale, juicy, milder) for the medicinal version — the old ginger's stronger bite is the throat's signal that the treatment is arriving.`,
        },
      ],
    },
    {
      title: 'Optional additions',
      items: [
        { amount: 1, name: 'kumquat (quất) or calamansi, halved and squeezed', note: `A few drops of citrus acid brighten the sweetness and add vitamin C. The kumquat's own bitter-sweet-sour profile is the Vietnamese sore-throat's traditional citrus partner.` },
        { amount: 2, name: 'pandan leaves, knotted', note: `Simmered with the juice for 5 minutes — adds a sweet, vanilla-green fragrance without competing with the ginger.` },
        { amount: 1, unit: 'tbsp', name: 'honey (added off-heat, below 60°C)', note: `The throat-coating upgrade — honey's viscosity coats the irritated mucosa, and its hydrogen-peroxide-generating enzymatic activity (from glucose oxidase, active only in raw/lightly heated honey) provides a mild, local antimicrobial effect.` },
      ],
    },
  ],
  steps: [
    {
      title: 'Simmer the juice with ginger — 15 minutes, gentle, the kitchen fills with warm sugar-spice',
      description: `Pour the sugarcane juice into a pot. Add the bruised, sliced ginger. Add the pandan leaves if using. Bring to a gentle simmer — NOT a hard boil (boiling drives off the ginger's volatile gingerol faster than the liquid can absorb it, and the finished drink loses its therapeutic bite; boiling also caramelises the sugarcane's sucrose at the pot's bottom, producing a burnt-sugar note that the clean, grassy cane flavour does not want).

Simmer gently 12-15 minutes. The juice transforms: it darkens from pale green to pale amber (the heat drives a mild Maillard reaction between the cane's amino acids and its sucrose, producing melanoidins that tint the liquid), the ginger's gingerol dissolves into the sugary liquid (gingerol is partially fat-soluble but also water-soluble at the concentrations present in a 60 g dose, and the sugarcane's own trace lipids assist the dissolution), and the kitchen fills with the smell of warm sugar, fresh ginger and — if pandan is present — a sweet, vanilla-green undertone.

Taste at 12 minutes: the drink should be: sweet (the cane's sucrose, unchanged — the simmer does not significantly reduce the sugar content), warm-spicy (the ginger's gingerol, dissolved into the sweetness, felt in the throat and the sinus), and faintly grassy (the cane's own volatile esters, partially retained despite the heat). If the ginger is too mild: simmer 5 more minutes, or add a few thin slices of raw ginger directly to the cups (the raw ginger's uncooked gingerol is sharper than the simmered ginger's partially decarboxylated zingerone).

Remove from heat. Remove the ginger slices and pandan (or leave them — they continue to infuse as the drink cools). If using honey: add now, stirring until dissolved — below 60°C, the honey's glucose oxidase remains active and its antibacterial hydrogen-peroxide generation continues in the drink.

If using kumquat: squeeze into individual cups at serving, not into the pot (the citric acid's brightness fades in 5 minutes, and the kumquat's volatile oils dissipate in hot liquid).`,
      tip: `The ginger's gingerol concentration in the finished drink depends on the simmer time and the temperature: gingerol is thermally unstable and converts to zingerone (a less pungent, sweeter, more rounded compound) via retro-aldol reaction at temperatures above 80°C. A 15-minute simmer converts roughly 30-40% of the gingerol to zingerone, producing a drink that is BOTH sharp (remaining gingerol, felt in the throat) and warm-sweet (converted zingerone, felt on the tongue). A longer simmer converts more gingerol, making the drink mellower; a shorter simmer retains more gingerol, making it sharper. The mother calibrates by taste: more ginger-bite for a sorer throat (shorter simmer, or add raw ginger to the cup), less for a milder irritation (longer simmer, or reduce the ginger dose).`,
    },
    {
      title: 'Serve warm — sipped slowly, the throat coated, the sinus cleared',
      description: `Pour the warm nước mía gừng into cups — small cups, 150-200 ml, not large glasses. The drink is sipped, not gulped — the slow sipping keeps the warm, slightly viscous, ginger-infused liquid in contact with the throat's irritated mucosa for the maximum time, which is the therapeutic intent: contact time IS treatment time, and a gulped drink passes the throat in 1 second while a sipped drink bathes it for 3-5 seconds per sip.

The sip: the sugarcane's sweetness arrives first (the tongue's sweet receptors fire on contact), then the ginger's warmth (the gingerol activates the TRPV1 receptor in the throat — the same receptor capsaicin activates, but gingerol's activation is gentler, warmer and more diffuse, felt as a spreading warmth rather than as a sharp burn). The warmth expands through the sinus (the volatile gingerol, carried in the drink's steam, enters the nasal passages via the retronasal route and activates TRPA1 receptors — the sinus-clearing sensation). The throat is coated (the sucrose's hygroscopic moisture-retention keeps the liquid film on the mucosa for 30-60 seconds after the sip, longer than plain water's 5-10 seconds).

Drink 2-3 cups over an hour — between meals, not with meals (the sugar content is high enough to suppress appetite if drunk immediately before eating, and the sick person needs to eat as well as drink).

The nước mía gừng is the Vietnamese kitchen's gentlest intervention — gentler than the cháo (which requires eating), gentler than the canh (which requires sitting at a table), gentler than any solid food (which requires chewing). It is a DRINK, delivered in a cup, sipped in bed, requiring nothing of the sick person except the strength to hold a cup and the patience to sip slowly. And if the sick person cannot hold the cup, the mother holds it, and the sipping is assisted, and the assistance is the love, and the love is the medicine the pharmacology cannot measure.`,
      tip: `Nước mía gừng occupies the lowest rung of the Vietnamese recovery ladder — below the cháo trắng (which requires eating), below the súp gà (which requires spoon-work), below everything solid. It is the intervention for the person who cannot eat at all — whose throat is too sore for porridge, whose stomach is too nauseous for soup, whose energy is too low for anything except lying still and sipping from a cup held by someone else's hand. The drink provides: glucose (immediate energy from the sucrose), water (hydration), electrolytes (the unrefined cane sugar contains potassium, calcium, magnesium and iron in trace amounts), and gingerol (anti-inflammatory, anti-emetic, vasodilatory). Four therapeutic inputs from two ingredients, delivered in a cup, at the bedside, by the person who is not sick — and the delivery is the fifth input, and the fifth is the one no pharmacy stocks.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
