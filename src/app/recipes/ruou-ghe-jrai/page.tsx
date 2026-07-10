'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ruou-ghe-jrai',
    title: `Jrai Earthenware Jar Wine`,
    subtitle: `Rượu Ghè Jrai — The ceremonial fermented rice wine of Kon Tum's Jrai people, brewed in ancient glazed earthenware jars with a seven-plant forest starter.`,
    category: 'APPETIZER',
    difficulty: 'Hard',
    totalTime: '720 hrs',
    rating: 4.9,
    baseServings: 8,
    heroImage: `https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1600&q=85`,
    intro: `Rượu ghè is the Jrai people's most sacred communal preparation — a fermented rice wine brewed in glazed earthenware jars (ghè) that have been passed down through Jrai families for generations, some of the most valued ghè being over 100 years old and carrying the accumulated microbial community of a century of fermentations. The Jrai are the second-largest ethnic group in the Central Highlands after the Bahnar, with the largest concentration in Gia Lai province and significant communities throughout Kon Tum's western districts near the Cambodian border.\n\nThe word ghè refers specifically to the glazed stoneware jar — distinct from the clay pot (hũ đất) of Vietnamese lowland fermentation and the bamboo cylinder (ống lồ ô) of K'Ho and Bahnar cơm lam. The Jrai ghè is typically 40-80 litres in volume, glazed internally with a rice-husk ash glaze, and valued as a household treasure — a large, well-seasoned ghè is part of a Jrai family's dowry and is never sold at any price. The jar's internal microbial community, built up over decades of fermentations, is what gives Jrai rượu ghè its specific character. A new jar produces a simpler, cleaner wine; a hundred-year-old jar produces something with extraordinary complexity.\n\nThe Jrai starter (men rượu ghè) differs from both K'Ho and M'Nông starters in its botanical composition — it uses plants specific to the Gia Lai-Kon Tum lowland forest transition zone, including the root of the cây mật gấu (Mahonia nepalensis — the Nepal barberry), the bark of the cây sung rừng (wild fig), and dried flowers of the cây tầm gửi (mistletoe) on highland pine. This combination produces a wine that is simultaneously more floral and more bitter than the K'Ho or M'Nông versions — the barberry root contributes berberine compounds with a distinctive bitter-floral note found nowhere else in Vietnamese fermented beverages.`,
    ingredientSections: [
        {
            title: `Fermented rice base`,
            items: [
                { amount: 1, unit: 'kg', name: `glutinous rice (gao nep)`, note: `washed, soaked 10 hours, steamed until fully cooked — spread to cool completely` },
                { amount: 200, unit: 'g', name: `regular white rice (gao te)`, note: `the Jrai blend — 80:20 glutinous to white` },
                { amount: 60, unit: 'g', name: `men ruou ghe Jrai (Jrai fermentation starter)`, note: `from Jrai vendors at Kon Tum or Pleiku market; substitute: 40g commercial banh men + 5g barberry root powder + 3g dried fig bark + 2g galangal powder` },
            ],
        },
        {
            title: `Jrai starter substitute (men ghè approximation)`,
            items: [
                { amount: 40, unit: 'g', name: `commercial banh men ruou`, note: `base yeast-mould cake` },
                { amount: 5, unit: 'g', name: `barberry root powder (Berberis/Mahonia)`, note: `available at German health food stores (Reformhaus) as Berberitze — contributes berberine bitter-floral note` },
                { amount: 3, unit: 'g', name: `dried fig bark or fig leaf powder`, note: `approximates cây sung rừng bark` },
                { amount: 3, unit: 'g', name: `galangal powder (bot rieng)` },
                { amount: 2, unit: 'g', name: `dried mistletoe (Viscum album)`, note: `available at German herb shops — use sparingly, small amounts only` },
            ],
        },
        {
            title: `Vessel`,
            items: [
                { amount: 1, name: `glazed stoneware jar (ghe) or large glass fermentation vessel`, note: `5-10L minimum; clean glazed ceramic is the closest substitute for authentic ghe` },
                { amount: 1, name: `banana leaf for sealing` },
                { amount: 1, name: `forest clay or food-safe sealant` },
                { amount: 4, name: `long rattan or metal straws for drinking` },
                { amount: 2, unit: 'L', name: `clean cold water`, note: `added progressively during ceremony` },
            ],
        },
        {
            title: `Ceremony accompaniments`,
            items: [
                { amount: 500, unit: 'g', name: `grilled pork or chicken (thit nuong)` },
                { amount: 4, name: `portions com lam (bamboo tube rice)` },
                { amount: 1, name: `bunch highland herbs` },
            ],
        },
    ],
    steps: [
        {
            title: `The Jrai ghè — understanding the jar`,
            description: `The Jrai ghè is not merely a container — it is an active participant in the fermentation. A well-seasoned ghè has a porous inner surface colonised by generations of Saccharomyces, Aspergillus, and Rhizopus communities specific to the Jrai highland environment. When new rice is packed into a seasoned ghè, these resident microorganisms begin inoculating the fresh batch within hours — the jar itself is the starter. This is why old Jrai families produce the most complex wine: they are not following a recipe, they are continuing a biological tradition that has been running for a century. For home production in Germany, a clean glazed ceramic crock simulates the ghè's non-reactive surface; the commercial starter substitute compensates for the absence of resident microorganisms.`,
            tip: `If you have access to a ceramic vessel that has been used for fermentation before — a kimchi pot, a kombucha crock, a wine demijohn — it will carry some residual microbial community that improves the Jrai rượu ghè substitute. The first batch in any vessel is always the simplest; subsequent batches improve as the vessel develops its own resident community. In this sense, making rượu ghè regularly is more important than making it perfectly the first time.`,
        },
        {
            title: `Cook and cool the rice blend`,
            description: `Wash glutinous and white rice together until water runs clear. Soak 10 hours in cold water. Drain completely. Steam in a bamboo steamer for 30 minutes until all grains are translucent and sticky. Spread on a wide bamboo mat or tray and fan until completely cool — body temperature or below. The Jrai steam their rice over a specific combination of water and lemongrass leaves — the lemongrass steam adds a faint aromatic note to the cooked rice that persists through fermentation. At home: add 2 bruised lemongrass stalks to the steaming water beneath the rice.`,
        },
        {
            title: `Prepare and apply the Jrai starter`,
            description: `Grind the men ghè starter cake and all substitute ingredients to a coarse powder in a mortar. The powder should smell simultaneously of fermentation, forest bitterness, and the floral note of the barberry. The berberine in the barberry root gives the powder a faint yellow colour. Spread cooled rice on a clean surface. Sprinkle starter powder evenly and mix gently with clean dry hands — every grain should be dusted. The barberry's berberine provides additional antimicrobial protection beyond what commercial starters offer, allowing the fermentation to proceed with less competition from unwanted organisms.`,
            tip: `Berberine (from Mahonia/Berberis) is the compound responsible for Jrai rượu ghè's distinctive bitter-floral quality — it is the same alkaloid found in goldenseal and Oregon grape root, well-studied for its antimicrobial and antifungal properties. At the small quantities used in the starter (5g per kg of rice), it does not produce detectable bitterness in the finished wine but contributes a floral complexity that experienced Jrai wine drinkers identify as the signature of their community's wine versus the K'Ho or M'Nông versions.`,
        },
        {
            title: `Pack the ghè`,
            description: `Transfer the inoculated rice to the clean glazed jar in layers, pressing each layer gently but not compacting. Fill to 80% capacity. The Jrai tradition places a small bundle of dried lemongrass at the very bottom of the jar before packing the rice — the lemongrass provides additional aromatic compounds to the initial fermentation phase and is a ritual element connecting the wine to the Jrai agricultural calendar. Seal the top with banana leaf pressed firmly into the jar opening, then cover with clay or plastic wrap secured with a rubber band. The seal must allow CO₂ to escape without letting oxygen or insects enter.`,
        },
        {
            title: `Ferment — 30 to 45 days`,
            description: `Place the sealed jar in a stable warm location — 26-30°C ideal. The Jrai store their ghè in the longhouse communal space, away from direct sunlight, where the temperature is naturally stable. In Germany in summer, a shaded indoor location works well; in winter, near a radiator. Do not disturb for 30 days minimum. After 2 weeks, a faint sweet-sour fermentation smell should be detectable through the seal. At 30 days, briefly open and assess: the wine should smell of alcohol, grain, and the distinctive bitter-floral barberry note. At 45 days, the wine has developed maximum complexity.`,
        },
        {
            title: `The Jrai ceremony — opening and drinking`,
            description: `Jrai rượu ghè ceremonies follow a precise protocol that differs from both K'Ho and M'Nông traditions. The ghè is placed at the centre of the communal space — traditionally the longhouse floor — and all participants sit around it in a circle. The jar is opened by the eldest woman of the household (the Jrai are matrilineal — women own the property, including the ghè). She inserts the rattan straws and takes the first sip to assess the wine's quality before inviting others to drink. Water is added by the eldest woman throughout the ceremony. Drinking order follows the kinship hierarchy, not simple age seniority — this is specific to Jrai protocol and differs from the Bahnar and K'Ho seniority-by-age conventions.`,
            tip: `The Jrai matrilineal protocol — eldest woman opens the jar, controls water addition, determines drinking order by kinship — is the most culturally specific element of rượu ghè and the detail that most clearly differentiates Jrai ceremony from other highland jar wine traditions. In a home setting in Germany, the person who made the wine assumes the ceremonial role: opens the jar, takes the first sip, invites others in the order they choose. The spirit of the protocol — one person controls the pace and quality of the communal drinking — is what matters.`,
        },
        {
            title: `Progressive water addition and final broth`,
            description: `Add 200ml cold water to the jar after the initial tasting. Wait 10 minutes for the water to percolate through the fermented rice. Drink through rattan or metal straws inserted to the bottom of the jar. As wine level drops, add water in 150-200ml increments — the Jrai pace is slower than K'Ho, with longer pauses between additions to allow full flavour extraction from the remaining fermented rice. The ceremony is considered complete when the added water equals the original volume of fermented rice and the wine drawn through the straw tastes primarily of water with a faint grain note. This final diluted drawing is drunk by the youngest participant — in Jrai tradition, the last and least concentrated portion belongs to the youngest, not the eldest.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}