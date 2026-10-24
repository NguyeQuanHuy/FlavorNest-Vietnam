'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'mam-ca-ruong-chiem-hoa',
  title: `Mắm Cá Ruộng Chiêm Hóa (Fermented Rice-Paddy Carp of the Tày)`,
  subtitle: `Small carp raised in the flooded rice terraces themselves, layered in stoneware jars with galangal, cooked sticky rice and a wild leaf-yeast starter, and sealed for three months — until fish, rice and time collapse into one sweet-sour, bone-soft, profoundly savoury ferment. The mountain north's answer to the mắm of the Mekong, and the taste of an entire farming system in a jar.`,
  category: 'MAIN COURSE',
  difficulty: 'Hard',
  totalTime: '3 months',
  rating: 4.7,
  baseServings: 8,
  heroImage: '/images/recipes/mam-ca-ruong-chiem-hoa.jpg',
  intro: `To understand mắm cá ruộng you have to start not in the kitchen but in the field, because the fish is grown in the food. Across the valleys of Chiêm Hóa, the Tày practice rice-fish co-culture: when the terraces are flooded and the seedlings transplanted, fingerling carp go into the paddies with them. All season the fish patrol the warm shallow water between the rice stems, eating insects, larvae, weeds and fallen pollen — working as pest control and fertilizer plant while the rice grows over their heads. At harvest the water is drawn down and the paddies give up two crops at once: grain, and a wriggling silver by-catch of cá ruộng, paddy carp, fat on a season of rice-field living. It is one of the oldest integrated farming systems in Asia, and mắm cá ruộng is its pantry expression — the mechanism by which a one-week glut of small fish becomes a year of seasoning.

The ferment itself is where the northern mountains part company with every mắm this collection has met in the south. Mekong mắm — the cá linh and cá sặc of Vĩnh Long — is a salt-driven ferment: fish and heavy salt, with the fish's own enzymes and halophilic bacteria doing slow work in a briny environment. Mắm cá ruộng is a rice-and-yeast-driven ferment, closer in spirit to Japanese narezushi or Isan pla ra than to the salt mắm of the Delta: the cleaned fish are salted only moderately, then layered in jars with cooked glutinous rice and men lá — the wild fermentation starter of the northern mountains, cakes of rice flour inoculated with yeasts and moulds cultured on a household's secret blend of forest leaves. The starter's enzymes saccharify the rice into sugars; lactic acid bacteria ferment the sugars into acid; the acid and the fish's own enzymes then take the fish apart from within — softening the bones to edibility, breaking protein into free amino acids, and steering the whole jar toward a flavour that is not the salt-forward punch of southern mắm but something rounder: sweet, sour, deeply savoury, faintly winey from the yeast, with galangal running through all of it.

Three months is the traditional minimum and the jar is checked, not timed: opened when the fish have turned rosy-tan, the rice has melted to a porridge-like matrix, the aroma has crossed from raw ferment to something closer to aged cheese and rice wine, and a rib pressed between two fingers bends instead of snapping. The finished mắm is eaten two ways, and a proper Chiêm Hóa introduction offers both: raw from the jar, mashed into a dip and buried under herbs, for those raised on it — and chưng, steamed or gently fried with minced pork, egg and more galangal into a hot, mellow, gateway-friendly paste that even a nervous first-timer spoons over rice with enthusiasm. Boiled pork belly, cool cucumber, a mountain of leaves: the ferment is the salt pole of the meal, and everything around it is arranged to meet it.

A word of honest framing for the overseas kitchen: this is a genuine home-fermentation project with real food-safety stakes, and this recipe documents the traditional method with modern guardrails — salt percentages measured, jars sanitized, and a firm rule that anything that smells wrong is wrong. The men lá starter can be approximated abroad with rice-wine yeast balls from any Vietnamese or Chinese grocer; the paddy carp with small farmed carp or crucian carp from an Asian fishmonger. What cannot be substituted is the patience. The Tày say the jar knows the household — that the same recipe ferments differently in different houses — and after three months of living with one in your kitchen corner, you will not think that is superstition.`,
  ingredientSections: [
    {
      title: 'The fish',
      items: [
        {
          amount: 2,
          unit: 'kg',
          name: 'small paddy carp (cá ruộng) or small common/crucian carp, 10-15 cm, absolutely fresh',
          note: `In Europe: live or same-day small carp from an Asian or Eastern European fishmonger. Scaled, gutted, gills removed, heads on or off by preference — and every fish washed until the water runs completely clear, then drained bone-dry. Blood and moisture are the two great enemies of a clean ferment. Fish with any off odour are disqualified before the jar, not discovered after.`,
        },
        {
          amount: 120,
          unit: 'g',
          name: 'coarse salt (6% of fish weight — weigh it, do not eyeball it)',
          note: `The safety floor. Traditional jars run saltier or leaner by feel; the documented version holds 6% because that is enough to suppress dangerous bacteria while the acid builds, and not so much that the lactic ferment stalls. A scale is the most important tool in this recipe.`,
        },
        { amount: 3, unit: 'tbsp', name: 'rice wine (rượu trắng)', note: `Tossed through the salted fish — a surface antiseptic and a yeast-friendly welcome mat, both.` },
      ],
    },
    {
      title: 'The ferment matrix',
      items: [
        {
          amount: 500,
          unit: 'g',
          name: 'glutinous rice, cooked (xôi), cooled to blood-warm',
          note: `The fuel. Its starch will be saccharified into the sugars that feed the entire ferment. Cooked firm, never wet — a soggy xôi makes a sloppy jar.`,
        },
        {
          amount: 2,
          name: 'men lá starter balls (or Vietnamese/Chinese rice-wine yeast balls, "men rượu"), crushed to powder',
          note: `The engine. True men lá — the leaf-cultured wild starter of the Tày — is a household heirloom; the yeast balls sold at every Asian grocer for making rượu nếp are its honest commercial cousin and work reliably. Crush fine and toss through the warm (not hot) rice: above ~45°C the cultures die and the jar goes nowhere.`,
        },
        {
          amount: 80,
          unit: 'g',
          name: 'galangal (riềng), half pounded to fibres, half julienned',
          note: `Generous and non-negotiable — galangal is the ferment's aromatic spine, its antimicrobial edge is a genuine hurdle against spoilage organisms, and its piney heat is what the finished mắm tastes of after the umami.`,
        },
        { amount: 4, name: 'cloves garlic, sliced (optional, some households)' },
        { amount: 2, name: 'red chilies, whole (optional)' },
        {
          amount: 1,
          name: 'stoneware or glass jar, 3 L, with a good seal — sanitized in boiling water and dried completely',
          note: `Stoneware breathes slightly and is traditional; glass lets you watch, which for a first jar is worth a great deal. Never metal, never a jar that smells of its past life.`,
        },
      ],
    },
    {
      title: 'To serve (both schools)',
      items: [
        { amount: 300, unit: 'g', name: 'pork belly, boiled and sliced thin (for the raw school)' },
        { amount: 150, unit: 'g', name: 'minced pork + 2 eggs + extra galangal (for the chưng/steamed school)' },
        { amount: 1, name: 'platter of herbs, cucumber, young banana leaf-wrapped rice or plain hot rice' },
        { amount: 1, name: 'small bowl of the mắm, mashed, with chili and a squeeze of lime' },
      ],
    },
  ],
  steps: [
    {
      title: 'Salt the fish hard and let them weep — 24 hours',
      description: `Toss the cleaned, dry fish thoroughly with the weighed salt and the rice wine, massaging salt into every cavity. Pack into a bowl, cover, and refrigerate (or hold in a cold room, below 10°C) for 24 hours, turning once.

They will weep a surprising volume of brine. Drain it all, and pat the fish dry again. They should now be noticeably firmer, their surfaces tacky, their smell clean and saline.

This pre-salt is doing double duty: pulling water out of the flesh (drier fish, safer jar, denser final texture) and loading the tissue with the salt that will police the ferment's first, most dangerous weeks. Skipping or shortening it is where home mắm goes wrong before it begins.`,
      tip: `Fermentation safety is hurdle technology — no single barrier does the job; the stack does. This recipe erects four hurdles in sequence: salt (24h penetration, 6% by weight), dehydration (the weep, then dry packing), competitive inoculation (a massive dose of friendly yeast and LAB from the starter, claiming the territory first), and finally acid (the pH crash of week two, after which little hostile can grow). Every traditional ferment on earth — from sauerkraut to narezushi to this jar — is some arrangement of these same hurdles, worked out empirically centuries before anyone could name them.`,
    },
    {
      title: 'Marry rice, starter and galangal — the matrix',
      description: `While the fish drains its last hour, cook the glutinous rice and spread it to cool to blood-warm — comfortably touchable, no hotter. Toss it with the crushed starter powder and half the pounded galangal until evenly distributed. It should smell sweetly of rice and faintly of yeast already.

Mix the drained fish with the remaining galangal, the garlic and chilies if using.

Everything that enters the jar from here on is either fish, matrix, or nothing. Wash your hands, sanitize your tools, and work with the calm of someone who will not get a second attempt for three months.`,
      tip: `The rice is the technology that separates this whole northern family of ferments from the southern salt-mắm. Salt-only ferments rely on the fish's own enzymes working slowly in brine — months to years, salt-forward results. Adding a starch plus amylase-rich starter changes the energy economy entirely: the mould and yeast enzymes saccharify the rice within days, the lactic bacteria convert those sugars to acid within weeks, and the acid both preserves and actively tenderizes — dissolving bone mineral, denaturing protein, and steering flavour toward sweet-sour-winey instead of purely saline. Same fish, opposite chemistry. It is the difference between anchovy and narezushi, drawn across one country.`,
    },
    {
      title: 'Pack the jar in strata — fish, matrix, fish, matrix — and seal',
      description: `Lay a 2 cm bed of rice matrix in the jar bottom. Then alternate: a snug single layer of fish, a covering layer of matrix pressed gently down, another of fish — finishing with a thick cap of matrix that no fish breaks through. Press each layer to exclude air pockets; the jar should be full to within 4-5 cm of the rim, never higher (the ferment will produce gas and a little liquid, and it needs headroom, not an escape).

Wipe the jar's inner rim scrupulously clean, seal, and label with the date — you will not trust your memory in month three.

Some Tày households weight the top layer with a boiled flat stone; a small sanitized plate does the same job of keeping everything below the developing liquid line.`,
      tip: `The strata are an oxygen-management architecture. Lactic fermentation wants anaerobic conditions; spoilage moulds want air. Packing fish fully enclosed in rice matrix, pressing out pockets, capping with starch and weighting the top means that as the ferment's own brine rises, everything of consequence ends up submerged in an acidifying, oxygen-poor bath — while any stray aerobic activity is confined to a sacrificial top surface you can inspect and, if needed, skim. The jar is not a container. It is a designed environment, and the packing order is the design.`,
    },
    {
      title: 'Ferment three months, cool and dark — check, smell, trust the signs',
      description: `Stand the jar in a cool (ideally 15-22°C), dark corner. Weeks 1-2: expect faint bubbling, a rising liquid line, and a smell that moves from sweet rice toward yeasty-sour — all correct. Open only to inspect the surface briefly at weeks 2 and 6; skim and discard any dry surface film beyond a thin white bloom (kahm yeast — harmless, skim it), and re-seal.

HARD STOPS, stated without softening: any fuzzy mould in colours (green, black, pink), any smell of ammonia, rot or sulphur beyond a rich ferment funk, any slime — the jar is discarded entire. No rescuing, no tasting to check. A correct jar smells increasingly like rice wine, aged cheese and galangal; a wrong one announces itself, and you must believe it.

At three months: the fish rosy-tan and intact but yielding, the rice collapsed to a tan porridge, a rib bending softly between two fingers, the taste — go on — sweet-sour, winey, profoundly umami, salt in the second rank. It will hold, refrigerated and sealed, for months more, deepening.`,
      tip: `The bending rib is the ferment's most remarkable trick made tangible: three months of lactic acid has partially demineralized the skeleton — the same acid-dissolves-calcium chemistry as a childhood egg-in-vinegar experiment, run slowly through an entire fish — while enzymes softened the collagen around it. The result is whole small fish eaten bones and all, no hour of braising required, plus a ferment unusually rich in the calcium those bones surrendered into it. Huế softened its goby bones with heat and time; the mountain does it with acid and more time. The destination — waste nothing of a small fish — is the same as ever.`,
    },
    {
      title: 'Serve it both ways — raw for the raised, chưng for the arriving',
      description: `The raw school: lift out a fish or two, mash roughly with a little of the surrounding matrix, brighten with chili and a squeeze of lime, and serve as the dip at the centre of a spread of boiled pork belly, cucumber, and as many leaves as the garden gives. Cold ferment, warm rice, cool herbs — the Chiêm Hóa working lunch.

The chưng school: mash two fish with the minced pork, eggs and extra julienned galangal, steam 20 minutes (or fry gently) into a firm, sliceable, mellow paste, and serve hot over rice. The heat rounds every sharp edge; this is the version that has converted every skeptic in the history of the dish, and there is no shame in entering here.

Either way, small doses: a fish seasons a meal, a jar seasons a season. That arithmetic — one paddy's by-catch stretched across a year of rice — is the entire reason the jar exists, and eating it any other way misses what it is.`,
      tip: `Step back and the jar contains the whole farming system that made it: rice fed the fish in the field, rice ferments the fish in the jar, and the finished mắm is spooned back over rice at the table — one grain, three roles, zero waste, in a landscape where protein was scarce and winters are real. The Mekong's mắm preserved an annual flood; the mountain's mắm preserves an agricultural symbiosis. This collection keeps finding that Vietnam's most distinctive flavours are preservation strategies wearing festival clothes — and mắm cá ruộng may be the purest case: it does not just taste of a place. It tastes of a place's entire annual plan.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
