'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'luon-nuong-rieng-me',
    title: `Grilled Eel with Galangal and Fermented Rice`,
    subtitle: `Lươn Nướng Riềng Mẻ — Northern Vietnamese freshwater eel grilled on skewers with galangal and fermented rice paste — the most complexly flavoured grilled dish of the Red River Delta.`,
    category: 'MAIN COURSE',
    difficulty: 'Hard',
    totalTime: '3 hrs',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1600&q=85`,
    intro: `Lươn nướng riềng mẻ is the grilled eel preparation of the Red River Delta — a dish that combines two of the most distinctive ingredients in the northern Vietnamese flavour arsenal: riềng (galangal, Alpinia galanga) and mẻ (fermented cooked rice), producing a marinade whose complexity and depth have no equivalent in the Vietnamese grilling tradition. The combination of galangal's peppery-medicinal-citrus character with the lactic acid sourness and amino acid depth of the fermented rice produces a marinade that is simultaneously pungent, sour, warming, and deeply savoury — four dimensions in a single paste applied to the eel before grilling.\n\nLươn (freshwater eel, Monopterus albus — the Asian swamp eel) is the serpentine fish of the northern Vietnamese paddy fields and waterways — an air-breathing fish capable of moving across wet ground, found throughout the Red River Delta's irrigation channels, rice paddies, and muddy waterway margins. Its flesh is dark, rich, and high in fat — significantly more fatty than most freshwater fish — with a distinctive earthy sweetness that reflects its bottom-feeding diet. The high fat content makes it ideal for grilling: the eel's own fat bastes the flesh during cooking, keeping it moist despite the intense charcoal heat, and the fat droplets falling onto the coals produce the aromatic smoke that is part of the finished dish's flavour.\n\nMẻ (fermented cooked rice) is the northern Vietnamese souring agent that most distinguishes northern cooking from southern. Made by cooking white rice to a thick porridge, cooling, and leaving it to ferment at room temperature for 3-5 days, mẻ develops a clean lactic sourness, a slightly funky depth from the bacterial fermentation, and a thick, porridge-like consistency that clings to the eel surface during grilling and caramelises to a complex crust that tamarind or vinegar marinades cannot produce. The Maillard reactions between mẻ's residual starch and its denatured proteins during grilling produce a crust whose flavour complexity is specific to this fermented ingredient.`,
    ingredientSections: [
        {
            title: `Freshwater eel`,
            items: [
                { amount: 600, unit: 'g', name: `fresh freshwater eel (luon / Monopterus albus)`, note: `cleaned, gutted, cut into 6-8cm sections; or ask fishmonger to prepare — eel is difficult to clean at home; substitute: unagi (Japanese eel) from Asian grocers in Germany` },
                { amount: 2, unit: 'tbsp', name: `coarse salt`, note: `rubbed to remove slime` },
                { amount: 1, unit: 'tbsp', name: `rice wine (ruou gao)` },
            ],
        },
        {
            title: `Riềng-mẻ marinade (the northern signature)`,
            items: [
                { amount: 60, unit: 'g', name: `fresh galangal (rieng tuoi / Alpinia galanga)`, note: `grated or pounded to a fine paste — the dominant aromatic` },
                { amount: 4, unit: 'tbsp', name: `me (fermented cooked rice)`, note: `3-5 day fermented, strained to remove large pieces — the souring and crust agent; substitute: 2 tbsp plain rice congee + 1.5 tbsp rice vinegar + 0.5 tsp miso paste` },
                { amount: 4, name: `lemongrass stalks, inner white only, minced to paste` },
                { amount: 5, name: `garlic cloves, minced to paste` },
                { amount: 3, name: `shallots, minced` },
                { amount: 2, unit: 'tbsp', name: `fish sauce (nuoc mam)` },
                { amount: 1, unit: 'tbsp', name: `soy sauce` },
                { amount: 1, unit: 'tsp', name: `sugar` },
                { amount: 0.5, unit: 'tsp', name: `black pepper` },
                { amount: 1, unit: 'tbsp', name: `neutral oil` },
                { amount: 1, unit: 'tsp', name: `turmeric powder`, note: `colour and earthy warmth` },
            ],
        },
        {
            title: `Make mẻ at home (3 to 5 days ahead)`,
            items: [
                { amount: 100, unit: 'g', name: `cooked white rice (com trang)`, note: `slightly overcooked, sticky` },
                { amount: 50, unit: 'ml', name: `warm water` },
                { amount: 0.25, unit: 'tsp', name: `salt` },
            ],
        },
        {
            title: `Northern dipping sauce`,
            items: [
                { amount: 3, unit: 'tbsp', name: `fish sauce` },
                { amount: 2, unit: 'tbsp', name: `lime juice` },
                { amount: 1, unit: 'tbsp', name: `sugar` },
                { amount: 3, unit: 'tbsp', name: `warm water` },
                { amount: 20, unit: 'g', name: `fresh galangal, minced fine`, note: `galangal in the dipping sauce — the riềng thread continued` },
                { amount: 2, name: `garlic cloves, minced` },
                { amount: 2, name: `bird's eye chili, sliced` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 1, name: `bunch kinh gioi (Vietnamese lemon balm)`, note: `the northern herb; substitute: lemon balm + mint` },
                { amount: 1, name: `bunch rau ram` },
                { amount: 1, name: `bunch mint` },
                { amount: 20, name: `sheets rice paper (banh trang)` },
                { amount: 1, name: `cucumber, julienned` },
                { amount: 2, name: `limes, wedged` },
                { amount: 4, name: `portions steamed white rice or bun` },
            ],
        },
    ],
    steps: [
        {
            title: `Make the mẻ — 3 to 5 days ahead`,
            description: `Combine slightly overcooked white rice, warm water, and salt in a clean glass jar. Mix thoroughly until the rice is evenly distributed in a loose paste. Cover the jar loosely with cheesecloth secured with a rubber band — allows CO₂ from fermentation to escape while keeping contaminants out. Leave at room temperature (24-28°C) for 3-5 days. The mẻ is ready when it smells cleanly sour (lactic fermentation), has a slight fizz when stirred, and tastes acidic but not rancid. Strain through a fine sieve before using — the strained liquid and soft rice paste are both used in the marinade. Refrigerate the finished mẻ for up to 2 weeks.`,
            tip: `Mẻ is the northern Vietnamese souring agent that most clearly distinguishes northern from southern cooking — tamarind dominates in the south, mẻ in the north. The fermentation produces lactic acid (clean sourness), acetic acid (vinegar note), and a range of amino acids from the rice starch's partial breakdown that produce the umami depth absent from simple vinegar. The starch remaining in the mẻ is the crucial element for grilling: when the mẻ-coated eel hits the charcoal heat, the starch undergoes rapid dextrinisation and then Maillard browning with the adjacent amino acids, producing a caramelised crust with complexity impossible to achieve with liquid acid alone.`,
        },
        {
            title: `Clean the eel — the essential slime removal`,
            description: `Rub eel pieces thoroughly with coarse salt — the salt draws out the thick mucus coating that makes raw eel impossible to grip and grill. Massage each piece firmly with the salted hands for 1-2 minutes, rinse under cold water, and repeat once more. Toss with rice wine and rest 5 minutes — the rice wine removes any residual muddy odour. Rinse again. The cleaned eel should feel tacky but not slimy. Thread each section onto flat metal skewers — flat skewers prevent the eel from rotating on the skewer during grilling, which would produce uneven cooking. Two parallel skewers per portion hold the eel sections most securely.`,
            tip: `The salt-slime removal is the step that makes or breaks lươn nướng riềng mẻ at home. Eel produces significantly more mucus than any other fish — the Monopterus albus skin contains a dense network of mucus-secreting goblet cells that coat the body in a thick, slippery layer that prevents the marinade from adhering and causes the eel to slip off skewers during grilling. Two rounds of coarse salt massage remove approximately 90% of the mucus. The remaining 10% caramelises slightly during grilling and contributes to the finished crust's complexity — a fact unknown to most home cooks who assume all mucus is undesirable.`,
        },
        {
            title: `Make the riềng-mẻ marinade`,
            description: `Combine galangal paste, strained mẻ, lemongrass paste, garlic paste, shallots, fish sauce, soy sauce, sugar, black pepper, oil, and turmeric. Mix into a thick, fragrant paste. The galangal paste should be prominent — grate fresh galangal on a fine grater or pound in a mortar to extract maximum juice and fibre. Galangal's flavour compounds (primarily methyl cinnamate and 1,8-cineole) require mechanical cell-breaking to be released — a rough chop produces minimal flavour compared to a fine paste. The combination of galangal's peppery warmth, mẻ's sourness and starch body, and turmeric's earthy colour should be immediately apparent in the paste's aroma.`,
        },
        {
            title: `Marinate — 1 to 2 hours`,
            description: `Coat the skewered eel sections thoroughly with the riềng-mẻ marinade. The mẻ's thick, porridge-like consistency clings to the cleaned eel surface — ensure the marinade coats all surfaces including the cut ends. Rest at room temperature for 1-2 hours. The mẻ's lactic acid begins a partial surface cure during this marination period, firming the eel exterior slightly — this firming helps the crust form more rapidly and evenly during grilling. The galangal's methyl cinnamate penetrates the eel flesh during marination, providing the characteristic galangal warmth throughout the piece rather than only on the surface.`,
        },
        {
            title: `Grill over moderate charcoal — 12 to 15 minutes`,
            description: `Prepare charcoal at moderate heat — not high. The mẻ coating contains starch that burns rapidly at high heat, producing bitter rather than caramelised crust. Moderate heat allows the starch to caramelise gradually, producing the complex Maillard crust that is the dish's defining textural element. Grill the skewered eel 4-5 minutes per side, turning twice total. The mẻ coating will darken progressively — pale to golden to deep amber. The eel fat will begin dripping onto the coals, producing aromatic smoke that rises and infuses the exterior of the grilling eel. The finished eel should be deep amber-brown, slightly caramelised at the edges, and the flesh inside should flake when pressed through the crust.`,
            tip: `The eel fat dripping onto charcoal coals is not a problem to be managed but a flavour mechanism to be exploited. The fat ignites briefly on the hot coals and produces a flame that chars the exterior of the rotating eel in a specific way — the flame-char produces pyrazines and furans that are different from the Maillard compounds of the mẻ crust itself. The combination of Maillard (from the mẻ starch-protein caramelisation), pyrazine (from the flame-char of the fat), and the galangal's methyl cinnamate produces the specific complex flavour of correctly grilled lươn nướng riềng mẻ that simpler preparations cannot replicate.`,
        },
        {
            title: `Make the galangal dipping sauce and serve`,
            description: `Combine fish sauce, lime juice, sugar, warm water, minced fresh galangal, garlic, and chili. Stir until dissolved. The galangal in the dipping sauce continues the riềng thread from the marinade into the condiment — the diner tastes galangal in three layers simultaneously: in the marinade crust, in the eel flesh that absorbed it during marination, and in the dipping sauce. This three-layer single-ingredient threading is a specific flavour design principle of the northern Vietnamese kitchen. Serve grilled eel on skewers at the table with the galangal dipping sauce, kinh giới, rau răm, mint, rice paper, cucumber, and lime. Remove eel from skewers at the table and wrap in rice paper with herbs — dip in galangal sauce. The crunch of the mẻ-caramelised crust, the yielding richness of the eel flesh, the peppery warmth of the galangal, and the lactic sourness of the mẻ crust arriving together is the Red River Delta eating experience.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}