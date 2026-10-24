'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'lau-ca-linh-bong-dien-dien',
  title: `Lẩu Cá Linh Bông Điên Điển (Mekong Flood-Season Hotpot — River Fish with Golden Flowers)`,
  subtitle: `Cá linh — the tiny, silver, bony, seasonal Mekong fish that arrives with the October flood and vanishes by December — simmered in a sour tamarind broth and eaten alongside bông điên điển: the bright-yellow, pea-shaped flowers of the Sesbania tree that blooms along the flooded canals at the same moment the fish arrives. The dish that exists for 8-10 weeks per year, that cannot be preserved, frozen or shipped, and that the Mekong Delta waits 10 months to eat again.`,
  category: 'MAIN COURSE',
  difficulty: 'Easy',
  totalTime: '45 min',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/lau-ca-linh-bong-dien-dien.jpg',
  intro: `This is the collection's most SEASONAL recipe — more seasonal than any other dish in the project, because the cá linh and the bông điên điển are available for a window of roughly 8-10 weeks per year (mid-October to late December), and outside that window NEITHER ingredient exists in the market at any price. The dish is the Mekong Delta's most precise CALENDAR FOOD: eat it in November and you eat the flood; try to eat it in March and you eat nothing, because the fish has migrated back to Cambodia and the flower has dropped from the tree.

THE FISH: cá linh (Henicorhynchus siamensis, the Siamese mud carp) is a small (8-12 cm, 20-40 g), silver, bony, river-migrating fish that breeds in Cambodia's Tonlé Sap lake during the wet season (June-September). When the Mekong's annual flood recedes (October-December), the Tonlé Sap's reversed flow pushes billions of juvenile cá linh downstream into the Vietnamese Mekong Delta's canals, where the An Giang, Đồng Tháp and Sóc Trăng fishing communities catch them in vast quantities. The fish arrives ALL AT ONCE (the migration is a pulse, not a trickle — the canal goes from empty to silver-with-fish in 2-3 days), and the Delta's food economy responds accordingly: every market sells cá linh by the kilogram, every household cooks it daily, the surplus is fermented into mắm cá linh (the lẩu mắm's ingredient — the fermentation extends the 8-week fresh window into a year-round condiment), and the restaurants add "lẩu cá linh" to their menus in chalk (not in print — the dish will be erased in December).

The cá linh is EATEN WHOLE — head, bones, tail, viscera, everything. The fish is too small and too bony to fillet (the Y-bones are numerous, fine and impossible to remove from a 10 cm fish), and the Delta eater does not try: the fish is dropped WHOLE into the simmering hotpot broth, cooked for 3-4 minutes, and eaten whole — the eater chews through the soft bones (the bones' collagen converts to gelatin in the broth's 95°C in 3-4 minutes, softening them from rigid to yielding), spits out any large bone fragments that resist, and swallows the rest. The whole-fish eating delivers: CALCIUM (the softened bones dissolve partially on the tongue, releasing calcium carbonate — a serving of 6-8 whole cá linh delivers roughly 200-300 mg of calcium, comparable to a glass of milk), OMEGA-3 (the visceral fat, particularly the liver's DHA-rich oil, is consumed along with the flesh), and the COMPLETE FLAVOUR of the fish (the viscera's bitterness, the roe's richness, the flesh's sweetness — the whole fish's flavour is MORE COMPLEX than the fillet's, because the fillet discards the organs that carry the most intense flavour compounds).

THE FLOWER: bông điên điển (Sesbania sesban, the sesban tree, a leguminous, fast-growing, nitrogen-fixing tree that grows wild along the Delta's canal banks) produces bright-yellow, pea-shaped, 2-3 cm flowers during the October-December flood season — the SAME WINDOW the cá linh migrates. The synchrony is ecological: the Sesbania blooms when the floodwater reaches its roots (the flooding triggers the flowering), and the cá linh migrates when the floodwater recedes (the recession triggers the downstream push). The two events overlap for 8-10 weeks, and the overlap is the dish: the fish and the flower, arriving together, eaten together, disappearing together.

The flower's flavour is: MILD (faintly sweet, faintly vegetal, no bitterness, no funk — the flower is one of the mildest-tasting edible flowers in any cuisine), CRISP (the petals' turgor provides a gentle crunch that the broth's heat softens in 10-15 seconds — the flower must be added LAST and eaten IMMEDIATELY, or the crunch vanishes), and YELLOW (the bright, vivid, saffron-like yellow of the Sesbania's carotenoid pigments — the yellow petals floating on the brown-amber tamarind broth is the dish's VISUAL SIGNATURE, the image that every Mekong Delta person associates with "flood season food").

The broth is SOUR — a tamarind-based canh chua (sour soup) format that is the Delta's default fish-broth base (the same sour broth the canh chua cá lóc uses, here applied to a different fish and enriched by the cá linh's whole-body dissolution into the liquid). The sourness is the fish's MANAGEMENT — the tamarind's tartaric acid cuts through the cá linh's oily, fishy, viscera-rich flavour, keeping the broth BRIGHT and REFRESHING rather than heavy and cloying. The sour broth + the sweet fish + the mild flower = the Delta's flood-season triad: acid + protein + beauty.`,
  ingredientSections: [
    {
      title: 'The fish',
      items: [
        {
          amount: 600,
          unit: 'g',
          name: 'cá linh (Siamese mud carp), whole, cleaned (scales scraped, gutted — or left whole with viscera for the traditional full-flavour version)',
          note: `SEASONAL — available mid-October to late December in Mekong Delta markets. If outside the season or outside Vietnam: this dish CANNOT be authentically made. No substitute replicates the cá linh's specific size (too small to fillet, eaten whole), flavour (the juvenile-fish's mild, sweet, clean taste), or cultural meaning (the flood's arrival on the plate). Frozen cá linh exists but the texture degrades significantly (the ice crystals rupture the tiny fish's delicate cell walls, producing a mushy, fall-apart texture the fresh fish's firm, intact flesh does not have).`,
        },
      ],
    },
    {
      title: 'The flower',
      items: [
        {
          amount: 200,
          unit: 'g',
          name: 'bông điên điển (Sesbania sesban flowers), pistils removed, petals separated',
          note: `SEASONAL — same October-December window as the fish. The flowers are: bright yellow, pea-shaped, 2-3 cm. Remove the green calyx and the pistil (which is slightly bitter); use only the yellow petals. If unavailable: the dish loses its visual identity and its textural flower-crunch, but the fish-in-sour-broth can be made without it — the flower is the beauty, not the structure.`,
        },
      ],
    },
    {
      title: 'The sour broth',
      items: [
        { amount: 50, unit: 'g', name: 'tamarind pulp, soaked in 200 ml warm water, strained', note: `The PRIMARY acid — tartaric acid, the Delta's sour-source alongside the la giang the lẩu lá rừng used. Tamarind's sour is ROUNDER and FRUITIER than lime's citric acid, and it withstands prolonged simmering without degrading (lime's volatile citral evaporates; tamarind's tartaric acid is heat-stable).` },
        { amount: 1.5, unit: 'L', name: 'water' },
        { amount: 2, name: 'tomatoes, quartered', note: `The SECONDARY acid — the tomato's citric and malic acids reinforce the tamarind, and the tomato's lycopene adds an orange-red tint to the broth.` },
        { amount: 100, unit: 'g', name: 'bạc hà (taro stem / elephant ear stem), peeled, cut 5 cm, soaked in lime water', note: `The Delta's sour-soup vegetable — spongy, porous, absorbing broth through its air-channel architecture (the same capillary-absorption the lotus stem and the rau muống's hollow stems documented). Each piece, bitten, releases a warm mouthful of tamarind broth.` },
        { amount: 100, unit: 'g', name: 'đậu bắp (okra), halved (optional — the mucilage thickens the broth)' },
        { amount: 2, name: 'stalks lemongrass, bruised' },
        { amount: 15, unit: 'g', name: 'ginger, bruised' },
        { amount: 2, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tbsp', name: 'sugar' },
        { amount: 1, unit: 'tsp', name: 'salt' },
        { amount: 2, name: 'red chilies, halved' },
      ],
    },
    {
      title: 'Herbs and accompaniments',
      items: [
        { amount: 30, unit: 'g', name: 'rau om (rice-paddy herb) — the Delta\'s fixed sour-soup herb' },
        { amount: 30, unit: 'g', name: 'ngò gai (sawtooth coriander)' },
        { amount: 100, unit: 'g', name: 'bean sprouts' },
        { amount: 100, unit: 'g', name: 'rau muống, cut 10 cm' },
        { amount: 4, name: 'bowls of hot steamed rice' },
        { amount: 2, name: 'limes, in wedges' },
      ],
    },
  ],
  steps: [
    {
      title: 'Build the sour broth — tamarind + tomato + bạc hà, the Delta\'s canh chua base',
      description: `Bring 1.5 L water to a boil. Add the strained tamarind liquid, lemongrass, ginger, tomatoes and chilies. Simmer 10 minutes — the tamarind's tartaric acid dissolves fully, the tomatoes soften and release their citric acid and lycopene, and the broth turns: AMBER-ORANGE (the tamarind's brown + the tomato's red + the lemongrass's pale gold), SOUR (the tartaric + citric acids, pH roughly 3.5-4.0 — more sour than the lẩu lá rừng's lá giang broth at pH 4.5-5.0), and AROMATIC (the lemongrass's citral + the ginger's gingerol + the tamarind's own faint, date-like, slightly sweet fermented-fruit aroma).

Add the bạc hà (taro stem) pieces — they sink and begin absorbing the sour broth through their spongy, air-channelled structure. Add the okra if using.

Season: fish sauce, sugar, salt. The broth's balance should be: SOUR-DOMINANT (the tamarind leads, the tomato supports — the Delta's canh chua is SOUR-first, unlike the north's canh chua which is milder and sweeter), SWEET-SECONDARY (the sugar rounds the acid, the tomato's fructose adds a fruit-sweet undertone), and SAVOURY-TERTIARY (the fish sauce provides the umami baseline that the cá linh will amplify once added).

The broth is now a WAITING VESSEL — sour, aromatic, hot, ready for the fish that will arrive in 8-10 weeks, or in 5 minutes, depending on whether you are reading this recipe in October or in March.`,
      tip: `Tamarind's TARTARIC ACID is the Mekong Delta's preferred cooking-acid for sour soups — preferred over lime's citric acid (which is volatile and fades during prolonged cooking), over vinegar's acetic acid (which is harsh and one-dimensional), and over the lá giang's malic acid (which is available only in the highlands). Tartaric acid's advantages: it is HEAT-STABLE (it does not degrade or evaporate at 100°C — the broth stays sour from the first minute to the last), it is FRUITY (the tamarind pulp contributes date-like, fig-like, tropical-fruit aromatic compounds alongside the acid, giving the sourness a DEPTH that pure citric acid lacks), and it is AVAILABLE YEAR-ROUND (the tamarind pod is dried and shelf-stable, unlike the seasonal lá giang or the perishable lime). The tamarind is the Delta's all-season sour, and the cá linh is the Delta's one-season fish, and the combination — all-season acid + one-season protein — is the flood's recipe.`,
    },
    {
      title: 'Add the fish whole, simmer 3-4 minutes, scatter the flowers — the 8-week window opens',
      description: `THE FISH: gently lower the cleaned whole cá linh into the simmering sour broth — one fish at a time, or a handful at a time if the pot is large (the small fish cook fast and do not need individual attention). The fish sink, the broth clouds slightly (the fish's surface proteins denature on contact, releasing a fine protein haze — the same rapid-scum every fish broth in the collection has produced, but here the fish are so SMALL that the scum is minimal and does not need skimming).

Simmer 3-4 minutes — NOT longer. The cá linh is TINY (20-40 g), and 3-4 minutes at 95°C is enough to: cook the flesh through (opaque, white, flaking from the spine), soften the bones (the collagen in the fine, hair-thin Y-bones converts to gelatin, the bones becoming soft enough to chew and swallow — at 5+ minutes the flesh over-cooks and becomes mushy while the bones are already adequately softened at minute 3-4), and release the fish's amino acids into the broth (the cá linh's glycine and glutamate dissolve into the sour liquid, enriching the tamarind broth with a FISH-SWEET undertone that the tamarind-only broth lacked). The 3-4 minute window is the cá linh's SWEET SPOT: the fish is cooked, the bones are edible, the broth is enriched, and the flesh has not yet disintegrated.

THE FLOWERS — LAST: scatter the bông điên điển petals across the broth's surface IN THE FINAL 10 SECONDS before serving. The petals float — bright yellow on amber-orange, the flood season's colours on the flood season's broth. The petals' crunch lasts 10-15 seconds in the hot liquid (the turgor-maintained cell walls soften progressively as the cell membranes denature in the heat, releasing the vacuolar water that maintained the turgor pressure — the same turgor-collapse every blanched vegetable in the collection has undergone, here happening in the bowl rather than in the pot). The 10-15 second window is the flower's CRUNCH WINDOW — the shortest crunch-window in the collection (shorter than the cháo lươn's 3-minute bánh tráng, shorter than the xôi phồng's 5-minute crust), and the window is the reason the flowers go in LAST: add them to the pot 5 minutes before serving and they arrive at the table as soft, limp, crunchless yellow rags. Add them at the table and they arrive as crisp, bright, turgor-intact petals that the eater experiences for 10 seconds before the broth takes their crunch away.

THE BOWL: ladle the sour broth into bowls — each serving gets 4-6 whole cá linh (silver, small, the spine visible through the translucent cooked flesh), pieces of bạc hà (spongy, broth-saturated), tomato quarters (soft, red, acid-spent), and okra halves (mucilaginous, tender). Scatter the yellow điên điển petals on the surface — 15-20 petals per bowl, floating vivid yellow on the amber broth, the visual that IS the Mekong flood season.

Tear rau om and ngò gai into the bowl. Add bean sprouts and rau muống (raw or briefly blanched). Squeeze lime — the citric acid's sharp, bright pop on top of the tamarind's rounder, deeper sour produces a DUAL-ACID broth that is more complex than either acid alone.

EAT: spoon the broth — sour, sweet, fishy, the tamarind's date-like depth carrying the cá linh's dissolved glycine. Pick up a whole cá linh with chopsticks — the fish is small enough to eat in 2-3 bites. Bite — the flesh flakes (mild, sweet, clean — the juvenile fish's flavour is gentler than the adult cá lóc's, less assertive, more delicate), the softened bones yield (the gelatin-converted Y-bones chew like very fine noodles rather than like bones — the texture is not "crunchy bone" but "chewy fibre"), and — if the fish was left whole with viscera — the roe or the liver provides a burst of intense, concentrated, slightly bitter, deeply savoury ORGAN FLAVOUR that the flesh alone does not carry. The whole-fish eating is the cá linh's specific format, and the format is the flood's gift: a fish so small it must be eaten whole, and a flavour so complete BECAUSE it is eaten whole.

Bite a bông điên điển petal (if caught within the 10-second window): a gentle, turgor-crisp, faintly sweet, yellow crunch — the mildest, most beautiful, most ephemeral bite in the collection. The petal dissolves in 3 seconds — it was never meant to last, and its brevity is its meaning: the flower blooms for 8 weeks, the crunch lasts for 10 seconds, and both are gone before you are ready.

Lẩu cá linh bông điên điển is the collection's most EPHEMERAL recipe — the recipe with the narrowest availability window (8-10 weeks/year), the shortest crunch window (10 seconds for the flower), and the most direct relationship between ECOLOGY and FOOD: the Mekong's flood cycle drives the fish's migration, the migration drives the flower's bloom, and the cook's only contribution is to put the two in the same pot at the same time and add tamarind. The river makes the dish. The river takes the dish away. And the 10 months between December and October are the WAITING — the waiting the Delta has done every year for centuries, the waiting that makes the first bowl of November the most anticipated meal in the Mekong calendar.`,
      tip: `The cá linh's annual migration — from Cambodia's Tonlé Sap to Vietnam's Mekong Delta — is one of the world's largest freshwater fish migrations: an estimated 50-70 billion individual fish move downstream in the October-December window, making the cá linh migration one of the highest-biomass animal movements on earth (comparable to the East African wildebeest migration in total biomass moved). The migration's driver is HYDROLOGICAL: the Tonlé Sap's water level drops as the monsoon ends (the lake shrinks from 16,000 km² to 2,700 km² between October and March), and the falling water pushes the juvenile cá linh — hatched in the lake during the wet season — downstream through the Mekong's channels into Vietnam. The fish's arrival in the Delta is therefore a direct, predictable, annually repeating consequence of the MONSOON CYCLE — the same monsoon that fills the rice paddies, floods the canals, drowns the Sesbania trees' roots (triggering their flowering), and produces the ecological SYNCHRONY that puts the fish and the flower on the same plate in the same week. The lẩu cá linh bông điên điển is not a recipe that a cook invented. It is a recipe that the MONSOON wrote, and the cook merely transcribes.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
