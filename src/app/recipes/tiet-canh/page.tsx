'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'tiet-canh',
  title: `Tiết Canh (Raw Blood Pudding — A Cultural Document)`,
  subtitle: `Fresh duck blood, mixed with fish sauce to prevent coagulation, poured over cooked duck offal and topped with crushed peanuts, herbs and mint — and allowed to set into a cool, trembling, iron-red gel. The most culturally significant and the most medically dangerous dish in the Vietnamese canon. This page documents the tradition; it does not recommend the practice.`,
  category: 'APPETIZER',
  difficulty: 'Hard',
  totalTime: '1 hr',
  rating: 4.5,
  baseServings: 4,
  heroImage: '/images/recipes/tiet-canh.jpg',
  intro: `This is a documentary page. It exists in this collection for the same reason a museum displays a weapon: to document, to explain, to contextualise, and not to encourage use. Tiết canh — raw blood pudding — is one of the oldest and most culturally embedded dishes in northern Vietnamese food culture, and it is also one of the most dangerous. The Vietnamese Ministry of Health has repeatedly warned against its consumption. Outbreaks of Streptococcus suis meningitis, Salmonella, E. coli and other bloodborne pathogens traced to tiết canh are documented in the medical literature every year. People have died.

The collection documents it because the collection's purpose is to record Vietnamese food as it is eaten, not as it ought to be eaten. Tiết canh is not a casual dish. It is a ritual dish — served at funerals, at ancestor-worship ceremonies (giỗ), at Tết, at gatherings where the slaughter of a duck or a pig is itself the event. The blood is the first product of the slaughter, and consuming it raw is, in the culture's understanding, consuming the animal's vitality at its most concentrated.

The dish is elegantly simple: fresh duck blood, caught during slaughter, is immediately mixed with diluted fish sauce — the salt and acid slow coagulation, giving the cook time. The treated blood is poured over a layer of cooked duck offal in a shallow bowl and set in a cool place for thirty to forty minutes, during which the blood gels into a firm, trembling custard. Over the set blood go crushed peanuts, torn mint, coriander and chili.

THE RISKS ARE NOT THEORETICAL. Raw blood from any animal can carry: Streptococcus suis (meningitis, sepsis, death — Vietnam has one of the highest S. suis infection rates in the world, tiết canh is the primary vector), Salmonella, E. coli, Campylobacter, Leptospira, and in poultry blood, avian influenza viruses. The fish sauce does not sterilise. The cold-setting does not sterilise. No step kills pathogens.

This collection does not recommend making tiết canh. It documents the tradition, explains its cultural logic, describes its risks honestly, and respects both the tradition that created it and the medicine that warns against it.`,
  ingredientSections: [
    {
      title: 'THE TRADITIONAL COMPONENTS (documented, not recommended)',
      items: [
        {
          amount: 300,
          unit: 'ml',
          name: 'fresh duck blood, caught at slaughter',
          note: `⚠️ THIS PAGE IS A CULTURAL DOCUMENT, NOT A PREPARATION GUIDE. Raw animal blood carries serious pathogen risks including Streptococcus suis (meningitis, sepsis, death), Salmonella, E. coli, and avian influenza. The Vietnamese Ministry of Health advises against consumption.`,
        },
        { amount: 2, unit: 'tbsp', name: 'fish sauce, diluted in 2 tbsp water', note: `An anticoagulant (slows clotting), NOT a preservative — does not kill pathogens.` },
      ],
    },
    {
      title: 'The cooked base',
      items: [
        { amount: 200, unit: 'g', name: 'duck offal: gizzard, liver, heart — boiled, minced or sliced thin' },
        { amount: 100, unit: 'g', name: 'cooked duck meat, shredded' },
      ],
    },
    {
      title: 'The topping',
      items: [
        { amount: 50, unit: 'g', name: 'roasted peanuts, coarsely crushed' },
        { amount: 30, unit: 'g', name: 'fresh mint (húng lủi), torn' },
        { amount: 30, unit: 'g', name: 'coriander (ngò rí), chopped' },
        { amount: 20, unit: 'g', name: 'rau răm, torn' },
        { amount: 2, name: 'bird\'s-eye chilies, sliced' },
        { amount: 1, name: 'lime, in wedges' },
      ],
    },
  ],
  steps: [
    {
      title: 'How it is made — documented for the cultural record',
      description: `The duck is slaughtered by a neck cut and the blood caught immediately in a bowl. The fish sauce solution is stirred in within seconds — sodium chloride and organic acids chelate the calcium ions the coagulation cascade requires, slowing clotting from 2-3 minutes to 30-40 minutes.

The cooked offal is spread in a thin layer across the bottom of shallow bowls, at room temperature. The treated blood is poured gently over to about 2 cm depth. The bowl is set in a cool place, undisturbed, for 30-40 minutes.

The blood gels by fibrin polymerisation — the same mechanism that forms a blood clot in a wound. Fibrinogen converts to fibrin, fibrin strands cross-link into a three-dimensional gel network trapping the liquid plasma. At 30-40 minutes the surface is smooth, deep red, and trembles when shaken. Crushed peanuts, mint, coriander, rau răm and chili are scattered over the set surface.`,
      tip: `The fish sauce's anticoagulant action is calcium chelation: the coagulation cascade requires free Ca²⁺ ions at several steps. The fish sauce's sodium chloride increases ionic strength, and its organic acids (citric, lactic, amino acids) chelate the free calcium, reducing availability to the cascade enzymes. Hospital anticoagulants (EDTA, citrate) work by the same mechanism at higher efficiency. The fish sauce is a low-tech anticoagulant, empirically discovered.`,
    },
    {
      title: 'Why it persists — and the safer alternatives',
      description: `Tiết canh persists because its cultural weight exceeds its medical risk in the perception of those who eat it — the same dynamic that preserves raw-milk cheese in France, fugu in Japan, and casu marzu in Sardinia. The blood is the first product of the slaughter, and communal eating of it is a ritual of shared participation in the killing that provided the meal. The risk is known. The acceptance is not ignorance — it is a calculation that values ritual at a price that includes the possibility of illness.

The calculation is becoming rarer: younger Vietnamese, urban Vietnamese, and Vietnamese influenced by public-health messaging are eating tiết canh less. The dish is moving from the family table to the cultural archive.

SAFER ALTERNATIVES that carry the iron-rich, mineral, protein-dense character of blood in cooked form: tiết luộc (boiled blood pudding — the blood is boiled into firm cubes and served in soups), huyết nấu cháo (blood congee), and the global blood-sausage tradition (black pudding, Blutwurst, morcilla, sundae). All of these eliminate the raw-consumption risk entirely while preserving blood's nutritional and textural qualities.`,
      tip: `⚠️ CRITICAL SAFETY SUMMARY:\n\nRaw animal blood can carry: Streptococcus suis (meningitis, sepsis — mortality 5-20% even with treatment), Salmonella, E. coli O157, Campylobacter, Leptospira, avian influenza (H5N1 in poultry).\n\nNo step in the traditional preparation kills these pathogens.\n\nThe Vietnamese Ministry of Health, the WHO, and every food-safety authority that has assessed the practice advises against consuming raw animal blood.\n\nThis page documents the tradition. It does not recommend the practice.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
