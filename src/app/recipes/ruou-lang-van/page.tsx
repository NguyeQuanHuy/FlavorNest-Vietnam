'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';
const recipe: RecipeData = {
  slug: 'ruou-lang-van',
  title: `Rượu Làng Vân (Village Rice Wine — Vĩnh Phúc's Legendary Distillate)`,
  subtitle: `Sticky rice inoculated with men lá (wild-yeast starter from forest leaves), fermented 7-10 days, pot-distilled to a clear 40-45% ABV spirit carrying the ghost of 2-AP rice aroma and the men lá's 500-year ester fingerprint.`,
  category: 'DESSERT',
  difficulty: 'Hard',
  totalTime: '10-14 days + distillation',
  rating: 4.8,
  baseServings: 10,
  heroImage: '/images/recipes/ruou-lang-van.jpg',
  intro: `Rượu làng Vân = 500-year village distillate. Men lá (leaf-yeast starter): rice powder + 20-30 forest leaf species → colonised by ambient Saccharomycopsis fibuligera (saccharification), Saccharomyces cerevisiae (fermentation), Rhizopus/Aspergillus (amylase). Each family's men lá = different microbial community = different ester fingerprint = different wine from same rice. The men lá IS the family's wine.\n\nFermentation = TWO-PHASE RELAY: Phase 1 (days 1-3): moulds produce amylase → starch→sugar (saccharification, mash reaches 15-20% sugar). Phase 2 (days 3-10): S. cerevisiae converts sugar→ethanol (10-14% ABV). Microbial succession: mould → amylolytic yeast → alcohol yeast, each creating conditions that favour successor and doom itself.\n\nDistillation separates by boiling point: foreshots (methanol, 64.7°C — DISCARD, toxic), hearts (ethanol, 78.4°C — the keeper, 55-65% ABV), tails (water + fusels — discard or blend sparingly). Rice (low pectin) + men lá (predictable microbiology) + foreshots-discard = traditional safety. Rest 1-3 months for hydrogen-bonded ethanol-water cluster formation → smoothness.`,
  ingredientSections: [
    { title: 'The rice', items: [
      { amount: 2, unit: 'kg', name: 'nếp (glutinous rice), soaked 8-12 hr' },
    ]},
    { title: 'The starter', items: [
      { amount: 2, name: 'men lá balls, crushed to powder', note: `Sold as "men rượu" at Vietnamese markets. Each ball = dried microorganism community + rice powder + forest-leaf substrate. If unavailable: Chinese jiuqu (酒曲).` },
    ]},
    { title: 'Equipment', items: [
      { amount: 1, name: 'earthenware crock (5-10 L) with loose lid' },
      { amount: 1, name: 'pot-still: pot + condensing tube + cold-water basin + collecting jar', note: `Home distillation legality varies by country — check local laws. In Vietnam: traditional, widely practiced. In Germany and many others: requires license.` },
    ]},
  ],
  steps: [
    {
      title: 'Steam, cool to 30-35°C, inoculate, seal crock — 7-10 day fermentation',
      description: `Steam nếp 30-35 min. Cool to 30-35°C on a tray (>40°C kills yeast, <25°C = competing bacteria win). Sprinkle crushed men lá evenly, toss to coat every grain. Pack into crock (not compacted — moulds need intergrain air). Make central well (progress indicator: liquid accumulates as starch→sugar). Seal loosely (CO₂ must vent). 25-30°C, 7-10 days undisturbed.\n\nDay 1-2: mould mycelium visible (white fuzz = "men lá is working"). Day 3: well half-filled with sweet amber liquid. Day 5: well overflowing. Day 7-10: entire rice mass dissolved → cloudy, sour-boozy, 10-14% ABV mash.`,
      tip: `Microbial RELAY: moulds colonise first (aerobic, need intergrain air) → produce amylase → starch→sugar. Accumulating sugar favours amylolytic yeast (S. fibuligera) → outcompetes mould. Rising ethanol favours S. cerevisiae → outcompetes S. fibuligera. Each organism creates conditions that doom itself and favour its successor. The relay is self-organising — the cook's only job is to set the starting conditions and wait.`,
    },
    {
      title: 'Distill — foreshots (discard), hearts (keep), tails (discard or blend sparingly)',
      description: `Strain mash. Pour into pot-still. Heat moderately.\n\n60-78°C: FORESHOTS — methanol + harsh volatiles. Discard first 50-100 ml per 5 L wash. Sharp, solvent smell. TOXIC — do not drink.\n\n78-85°C: HEARTS — ethanol-rich, clear, 55-65% ABV. Collect until flame test fails (chopstick dipped in distillate, lit: blue flame = >40% ABV, sputters = done). Faint rice aroma (2-AP carried through still) + ester fingerprint (ethyl acetate 50-200 mg/L, isoamyl acetate 5-20 mg/L = fruity-banana-pear, the men lá's legacy).\n\n85-100°C: TAILS — fusel alcohols (headache compounds). Discard or blend 5-10% back.\n\nDilute hearts to 40-45% with soft water. Rest 1-3 months in glass jar (not plastic). Fresh distillate = sharp; rested = smooth (ethanol-water hydrogen-bond clusters form over time, softening the burn).\n\nYield: ~400-600 ml of 40% spirit from 2 kg rice. In the cup: clear, 2-AP popcorn-floral on the nose, TRPV1 warmth on the tongue (same receptor as capsaicin, different mechanism — ethanol's hydroxyl opens ion channel directly), ester finish 3-5 sec after sip. "The men lá's autobiography, the village's inheritance, 500 years in a 3 cm ball."`,
      tip: `METHANOL SAFETY: foreshots contain methanol (liver → formaldehyde → formic acid → optic nerve damage). 10-30 ml = blindness, 60-240 ml = fatal. Traditional rice fermentation = LOW methanol (rice has almost no pectin, the methanol precursor; fruit mash = high pectin = more methanol). Foreshots-discard removes what little forms. Village saying: "the first cup is poison, the second is medicine, the third is pleasure" — folk wisdom encoding foreshots-hearts-tails in three words.`,
    },
  ],
};
export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
