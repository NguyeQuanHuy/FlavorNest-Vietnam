'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'cha-ca-thang-long',
    title: 'Chả Cá Thăng Long (Hà Nội Turmeric Fish with Dill)',
    subtitle: 'Firm white fish marinated in turmeric, galangal, and fermented shrimp paste then pan-fried in a cast iron skillet at the table — finished with enormous quantities of fresh dill and spring onion that cook for 30 seconds in the sizzling fish fat, eaten over bún with roasted peanuts and mắm tôm dipping sauce. The most famous single-dish restaurant in Vietnamese culinary history.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '4 hr + 20 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/cha-ca-thang-long.jpg',
    intro: `Chả cá Thăng Long — also known as chả cá Lã Vọng after the restaurant on Hàng Sơn street in Hà Nội's Old Quarter that has served only this dish since the nineteenth century — is the preparation that Vietnamese food culture universally acknowledges as the signature dish of Hà Nội, the northern capital's most specific culinary achievement, and the preparation that most completely demonstrates what Vietnamese cooking can do with a single fish, a few aromatics, and the specific fermented funk of mắm tôm (fermented shrimp paste). The dish is simple in its components and complex in its execution: firm white fish (traditionally cá lăng, the giant catfish of the Red River, or cá quả, the snakehead fish) marinated for 3-4 hours in a paste of fresh turmeric, galangal, fermented shrimp paste, fish sauce, and dill, then pan-fried in a very small amount of oil until golden and fragrant, then finished at the table in the same pan with an almost absurd quantity of fresh dill and spring onion — so much dill that the fish disappears beneath the herbs for the 30 seconds they cook in the residual fish fat. The mắm tôm dipping sauce served alongside is the specific accompaniment that Vietnamese food culture considers non-negotiable: the intensely pungent fermented shrimp paste thinned with lime juice and sugar, spiked with minced chili and garlic, produces the specific funkiness that is simultaneously the most challenging and most rewarding element of the preparation for those encountering it for the first time. The Lã Vọng restaurant on Hàng Sơn street has served only chả cá for over a century, operates on two floors, and requires reservations — the only single-dish restaurant in Vietnamese culinary history that has achieved this institutional status.`,
    ingredientSections: [
        {
            title: 'Fish',
            items: [
                { amount: 700, unit: 'g', name: 'firm white fish fillets', note: 'cá lăng (giant catfish), cá quả (snakehead), or firm white fish like monkfish or halibut. Cut into 5x7cm pieces, 2cm thick. The firmness is critical — delicate fish falls apart in the pan.' },
            ],
        },
        {
            title: 'Turmeric-galangal marinade — 3-4 hours minimum',
            items: [
                { amount: 30, unit: 'g', name: 'fresh turmeric (nghệ tươi)', note: 'grated — the defining color and flavor of chả cá. Fresh produces a more vibrant result than dried.' },
                { amount: 30, unit: 'g', name: 'fresh galangal (riềng)', note: 'grated — the northern aromatic that most characterizes this preparation' },
                { amount: 2, unit: 'tbsp', name: 'mắm tôm (fermented shrimp paste)', note: 'the most challenging and most essential ingredient — its specific pungent depth is irreplaceable' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil', note: 'carries the turmeric and galangal oils into the fish' },
                { amount: 1, unit: 'tbsp', name: 'fresh dill, roughly chopped', note: 'added to the marinade — the herb permeates the fish during the long marination' },
            ],
        },
        {
            title: 'Tableside finishing',
            items: [
                { amount: 200, unit: 'g', name: 'fresh dill (thì là)', note: 'the seemingly excessive quantity that defines the preparation — an entire large bunch per serving. Added all at once over the fish.' },
                { amount: 8, name: 'spring onions', note: 'cut into 5cm pieces — added with the dill' },
                { amount: 3, unit: 'tbsp', name: 'neutral oil', note: 'for the tableside pan — the fish cooks in a generous amount of oil, not a light coating' },
            ],
        },
        {
            title: 'Mắm tôm dipping sauce — the non-negotiable accompaniment',
            items: [
                { amount: 3, unit: 'tbsp', name: 'mắm tôm (fermented shrimp paste)' },
                { amount: 2, unit: 'tbsp', name: 'fresh lime juice' },
                { amount: 1, unit: 'tbsp', name: 'sugar' },
                { amount: 3, unit: 'tbsp', name: 'warm water' },
                { amount: 2, name: 'garlic cloves', note: 'minced' },
                { amount: 2, name: 'bird\'s eye chilies', note: 'minced' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
            ],
        },
        {
            title: 'To serve — the Hà Nội way',
            items: [
                { amount: 400, unit: 'g', name: 'dried bún (rice vermicelli)', note: 'cooked and drained — the base for chả cá Thăng Long' },
                { amount: 100, unit: 'g', name: 'roasted peanuts', note: 'roughly crushed — scattered generously' },
                { amount: 4, unit: 'tbsp', name: 'crispy fried shallots' },
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 1, name: 'fresh red chili, sliced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Marinate the fish — 3-4 hours minimum, overnight better',
            description: 'Combine grated fresh turmeric, grated galangal, mắm tôm, fish sauce, sugar, black pepper, oil, and chopped dill. Mix to a rough paste. Coat the fish pieces thoroughly — press the marinade into every surface. Cover and refrigerate for minimum 3 hours. The long marination with mắm tôm is the technique that permeates the fish with the specific northern Vietnamese fermented character. At 1 hour the marinade coats the surface; at 3-4 hours it has penetrated the flesh and become integrated rather than applied.',
            tip: 'The mắm tôm in the marinade is the element that most surprises new cooks and most rewards the experience of making chả cá Thăng Long at home. The fermented shrimp paste has an aggressive, initially off-putting aroma that transforms completely during cooking into something warm, deeply savory, and specifically northern Vietnamese. The aroma of mắm tôm-marinated fish hitting a hot pan is one of the most distinctive cooking smells in the world — recognizable instantly to anyone who has eaten in Hà Nội.',
        },
        {
            title: 'Make the mắm tôm dipping sauce',
            description: 'Combine mắm tôm with lime juice, sugar, warm water, minced garlic, minced chili, and white pepper. Stir until sugar dissolves. The sauce should be pungent, complex, slightly sweet, bright from the lime, and funky in the specific way of fermented crustacean paste. For those new to mắm tôm: start with less paste and add more to taste. The sauce should be polarizing — intensely challenging and intensely rewarding simultaneously. This polarization is not a failure of the sauce but its specific character.',
            tip: 'Mắm tôm dipping sauce correctly made for chả cá Thăng Long is not merely intensely salty — it has the specific amino acid complexity of long-fermented shrimp that produces a flavor experience unlike any other condiment in the Vietnamese repertoire. The lime juice moderates the sharpest edges of the fermentation and produces a sauce that is complex rather than simply aggressive. Begin with 2 tablespoons of mắm tôm if making for the first time, and adjust upward.',
        },
        {
            title: 'Pan-fry the marinated fish — golden on both sides',
            description: 'Heat a cast iron skillet or heavy pan over medium-high heat until smoking. Add 3 tablespoons of oil. Add the marinated fish pieces — they will immediately spit and spatter from the mắm tôm marinade meeting the hot oil. Fry without moving for 3-4 minutes until the bottom is deeply golden and slightly crusted from the turmeric-galangal-mắm tôm caramelization. Flip carefully and fry the other side 3 minutes. The fish should be: deeply golden on both sides, fragrant with turmeric and the specific toasted-mắm tôm character that is different from and better than raw mắm tôm.',
            tip: 'The spatter from mắm tôm-marinated fish in hot oil is significant and produces the specific cooking experience of making chả cá at home — the initial aggressive smell that softens as the fermented paste caramelizes in the hot fat, and the subsequent warm, savory aroma that fills the room. This aroma transformation — from challenging raw mắm tôm to the deeply savory caramelized version — is the cooking experience that makes chả cá Thăng Long specifically rewarding to prepare.',
        },
        {
            title: 'The tableside dill moment — the defining visual',
            description: 'Transfer the pan with the golden fish to a portable burner at the table, or serve the fish directly from the kitchen pan kept hot. Add the entire quantity of fresh dill and spring onion pieces to the pan over the fish. The dill should essentially bury the fish. Cover briefly for 30 seconds — the steam from the fish fat wilts the dill. Uncover and toss once. The dill quantity — what seems like an entire herb plant for four servings — is not excessive. It is the preparation.',
            tip: 'The quantity of fresh dill in chả cá Thăng Long is the element that surprises every first-time cook and every first-time diner: the amount of dill used is roughly equivalent in volume to the fish itself. This is not garnish; it is co-equal to the fish in the dish. The dill wilts in 30 seconds from the heat of the pan and the fish fat, releasing its specific anise-adjacent aroma into every element simultaneously. A chả cá made with restrained dill is missing its defining character.',
        },
        {
            title: 'Assemble each bowl — the Hà Nội ritual',
            description: 'Each diner assembles their own bowl: a mound of bún in the base, a piece or two of the dill-covered fish placed on top, a generous scatter of roasted peanuts and crispy fried shallots, a spoonful of the mắm tôm dipping sauce over the entire bowl. Squeeze lime. The eating: lift a mouthful of bún, fish, dill, and peanuts together, dip into additional mắm tôm sauce as desired. The bowl has no fixed ratio — each diner adjusts fish-to-bún and mắm tôm intensity to their own preference. The pan at the center of the table replenishes from the kitchen as needed.',
            tip: 'The assembly of chả cá Thăng Long at the table — each diner building their own bowl rather than receiving a pre-assembled portion — is the eating format that the Lã Vọng restaurant has maintained for over a century and that produces the specific communal experience of the preparation. A dish where each person builds their own bowl is a different social experience from a plated dish, and chả cá specifically requires this format to be itself.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
