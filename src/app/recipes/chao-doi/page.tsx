'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'chao-doi',
  title: `Cháo Dơi (Bat Congee — A Cultural Document)`,
  subtitle: `Fruit bats — cleaned, simmered with traditional Chinese medicinal herbs — cooked into a congee the Khmer and Vietnamese communities of Sóc Trăng once consumed as a folk-medicine tonic. This page documents a vanishing practice with full zoonotic-disease warnings. It does not recommend preparation or consumption.`,
  category: 'MAIN COURSE',
  difficulty: 'Hard',
  totalTime: '3 hr',
  rating: 4.0,
  baseServings: 4,
  heroImage: '/images/recipes/chao-doi.jpg',
  intro: `This is the collection's second documentary page — the second dish recorded for the cultural archive rather than for the kitchen, joining the tiết canh as a tradition the collection documents honestly while advising against. Cháo dơi — bat congee — is a folk-medicine preparation historically consumed in the Khmer and Vietnamese communities of Sóc Trăng, Bạc Liêu and parts of the western Mekong Delta, where fruit bats (Pteropus spp., the large flying foxes that roost in the sugar-palm and mangrove canopies) were hunted, cleaned, simmered with a mixture of traditional Chinese/Sino-Vietnamese medicinal herbs (thuốc Bắc), and cooked into a thick, dark, herbal congee believed to treat respiratory illness, night blindness, general weakness and — in the folk tradition's most persistent claim — asthma.

The practice was never mainstream. It was regional, seasonal (bats were hunted during the dry season when they congregated at known roost sites), and culturally specific (primarily among the Khmer and the Sino-Vietnamese communities whose traditional medicine systems included bat as a medicinal ingredient). It was sold at specialty stalls in Sóc Trăng's market — a single vendor, a single pot, a hand-lettered sign — and consumed by people who came specifically for it, usually on the advice of a traditional-medicine practitioner. It was not casual eating. It was medicinal eating, and the distinction matters because it explains the practice's persistence in the face of its sensory challenges: the congee is dark, gamey, strongly herbal and not, by any standard, delicious. People ate it because they believed it healed, not because they believed it tasted good.

THE PRACTICE SHOULD NOT CONTINUE, AND THIS PAGE SAYS SO DIRECTLY. The reasons are zoonotic:

Bats are the natural reservoir host for an extraordinary range of viruses that can and do jump to humans, including: coronaviruses (SARS-CoV, MERS-CoV, SARS-CoV-2 and related betacoronaviruses — the bat-to-human spillover pathway is the most probable origin of the COVID-19 pandemic), Nipah virus (mortality rate 40-75% in human outbreaks, carried by Pteropus fruit bats — the same genus hunted for cháo dơi), Hendra virus, Ebola virus (fruit bats are the suspected reservoir), Marburg virus, rabies and rabies-related lyssaviruses, and histoplasmosis (from the fungus Histoplasma capsulatum that grows in bat guano and can colonise the lungs).

The handling of live or freshly killed bats — the hunting, the killing, the cleaning, the butchering — is the highest-risk step, because the handler is exposed to the bat's blood, saliva, urine, faeces and respiratory secretions, all of which can carry live virus. Cooking at 100°C for the congee's 2-hour simmer inactivates most viruses (coronaviruses are destroyed above 70°C within minutes), but the pre-cooking handling provides ample opportunity for transmission through cuts, mucous membranes and aerosol exposure. The virus does not need the congee to be raw to reach the handler. It needs the handler to touch the bat.

The Vietnamese government, the WHO, and every public-health authority that has assessed the wildlife-food trade in Southeast Asia has recommended against the hunting, handling, sale and consumption of bats, specifically because of the zoonotic spillover risk. The cháo dơi tradition is fading — younger generations do not seek it, the stalls are fewer each year, and the COVID-19 pandemic accelerated the practice's decline by making the bat-to-human disease pathway viscerally, globally, undeniably real.

This page documents what the tradition was, explains why it existed (folk medicine, not gastronomy), and states why it should not continue (zoonotic disease risk that no medicinal belief justifies). The collection records the food. The collection also records the science. And the science, in this case, is a warning.`,
  ingredientSections: [
    {
      title: 'THE TRADITIONAL COMPONENTS (documented, NOT recommended)',
      items: [
        {
          amount: 2,
          name: 'fruit bats (Pteropus spp.), cleaned',
          note: `⚠️ THIS PAGE IS A CULTURAL DOCUMENT, NOT A PREPARATION GUIDE. Bats are reservoir hosts for coronaviruses (including SARS-CoV-2 relatives), Nipah virus (40-75% mortality), Ebola, Marburg, rabies and histoplasmosis. Handling live or freshly killed bats exposes the handler to blood, saliva and respiratory secretions that can carry live virus. The Vietnamese government and the WHO advise against hunting, handling and consuming bats. This collection does not recommend this practice under any circumstances.`,
        },
      ],
    },
    {
      title: 'The medicinal herb mix (thuốc Bắc)',
      items: [
        { amount: 30, unit: 'g', name: 'kỷ tử (goji berries / Lycium barbarum)', note: `Used in traditional Chinese medicine for eye health and general vitality.` },
        { amount: 20, unit: 'g', name: 'hoài sơn (Chinese yam / Dioscorea opposita)' },
        { amount: 15, unit: 'g', name: 'đương quy (Angelica sinensis)', note: `Used traditionally for blood circulation.` },
        { amount: 10, unit: 'g', name: 'táo đỏ (red dates / Ziziphus jujuba)' },
        { amount: 10, unit: 'g', name: 'ý dĩ (Job\'s tears / Coix lacryma-jobi)' },
        { amount: 5, unit: 'g', name: 'cam thảo (liquorice root / Glycyrrhiza glabra)' },
      ],
    },
    {
      title: 'The congee',
      items: [
        { amount: 200, unit: 'g', name: 'plain rice (gạo tẻ)' },
        { amount: 2, unit: 'L', name: 'water' },
        { amount: 20, unit: 'g', name: 'ginger, bruised' },
        { amount: 2, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tsp', name: 'salt' },
      ],
    },
  ],
  steps: [
    {
      title: 'What the tradition was — documented for the record',
      description: `The fruit bats were hunted at dusk from their roost trees — sugar palms, large ficus, mangrove stands — using nets, traps or long poles. They were killed by a blow to the head, then cleaned: the wings were cut off (membrane only, no edible flesh), the fur was singed over a flame and scraped, the viscera were removed, and the carcass was rinsed. The cleaned body — small, dark, resembling a very small, very lean piece of dark game meat — was then simmered in water with the medicinal herb mix for 1-2 hours until the flesh fell from the bones.

The herbal broth and the shredded bat meat were then combined with rice and simmered into a thick, dark, strongly herbal congee — the herbs' bitterness and the bat's gamey flavour producing a medicinal-tasting porridge that was consumed warm, typically one bowl, once per week, as a tonic.

The folk-medicine claims: the bat's flesh was believed to be "cooling" (in the traditional hot-cold medical framework), to strengthen the lungs (respiratory illness was the primary indication), to improve night vision (possibly by association — bats are nocturnal), and to restore general vitality. None of these claims are supported by evidence-based medicine. The herbs in the mix (goji, angelica, jujube) have documented pharmacological properties in their own right, and a congee made with the herbs alone — without the bat — would deliver whatever genuine medicinal benefit the preparation contains.`,
      tip: `The folk-medicine logic that assigned healing properties to bat flesh followed the "doctrine of signatures" — the pre-scientific principle that an animal's characteristics transfer to the eater. Bats fly at night, therefore bat flesh treats night blindness. Bats have strong lungs (for sustained flight), therefore bat flesh strengthens human lungs. This logic, while internally consistent within the traditional framework, has no basis in biochemistry: the proteins in bat flesh are digested to the same amino acids as any other protein, and no tissue-specific property survives the digestive process. The herbs, by contrast, contain well-characterised bioactive compounds (polysaccharides in goji, ferulic acid in angelica, triterpenes in jujube) that have demonstrated pharmacological activity in peer-reviewed research. The irony: the medicine was in the herbs, not in the bat. The bat was the doctrine's tax, and the tax carried a viral risk the doctrine could not have foreseen.`,
    },
    {
      title: 'Why it should not continue — the zoonotic case, stated plainly',
      description: `The zoonotic risk of bat handling and consumption is not hypothetical — it is epidemiologically documented:

NIPAH VIRUS: first identified in Malaysia (1999), traced to fruit bats (Pteropus vampyrus and P. hypomelanus). Human outbreaks in Bangladesh and India (2001-present) are linked to consumption of date-palm sap contaminated by bat urine. Mortality rate: 40-75%. No vaccine. No specific treatment.

CORONAVIRUSES: SARS-CoV (2003) originated in horseshoe bats; SARS-CoV-2 (2019) is most likely of bat origin (direct or via intermediate host). The COVID-19 pandemic killed over 7 million people globally. The bat-coronavirus reservoir is the single most significant zoonotic threat identified by the WHO.

EBOLA / MARBURG: fruit bats are the suspected reservoir for both filoviruses. Ebola outbreaks in Central and West Africa (2014-2016 epidemic: 11,000+ deaths) are linked to contact with bat-contaminated bushmeat.

RABIES and LYSSAVIRUSES: bat bites and scratches transmit rabies and related lyssaviruses. Post-exposure prophylaxis is effective; without it, rabies is nearly 100% fatal.

HISTOPLASMOSIS: the fungus Histoplasma capsulatum grows in bat guano and can infect the lungs of anyone who disturbs bat roosts during hunting. Chronic histoplasmosis mimics tuberculosis.

The cooking step (boiling for 2 hours) inactivates most viruses in the meat. But the HANDLING — hunting, killing, cleaning, butchering — exposes the handler to live virus through cuts, eyes, nose and mouth, and no cooking step retroactively protects against a virus that entered the handler's body an hour before the pot was lit.

The practice is declining. The stalls are fewer. The younger generation does not seek it. The COVID-19 pandemic made the risk legible to everyone, not just to epidemiologists. And the herbs — the genuinely pharmacologically active components of the preparation — are available without the bat, in any traditional-medicine shop, for a fraction of the price and none of the risk.

This page exists so the tradition is not forgotten. It also exists so the risk is not forgotten. Both deserve the record.`,
      tip: `⚠️ CRITICAL SAFETY SUMMARY:\n\nBats are reservoir hosts for: coronaviruses (SARS, MERS, COVID-19), Nipah virus (40-75% mortality), Ebola, Marburg, rabies, lyssaviruses, and histoplasmosis.\n\nHandling live or dead bats exposes the handler to blood, saliva, urine and respiratory secretions that can carry live virus.\n\nCooking destroys viruses in the meat but does NOT protect against pre-cooking transmission during handling.\n\nThe Vietnamese government and the WHO advise against hunting, handling, selling and consuming bats.\n\nThe medicinal herbs in the preparation are available without the bat and deliver whatever genuine pharmacological benefit the preparation contains.\n\nThis page documents the tradition. It does not recommend the practice. The collection respects the culture and respects the science, and the science says: stop.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
