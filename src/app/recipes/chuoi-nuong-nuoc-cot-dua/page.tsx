'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'chuoi-nuong-nuoc-cot-dua',
  title: `Chuối Nướng Nước Cốt Dừa (Charcoal-Grilled Banana in Warm Coconut Cream)`,
  subtitle: `A short, plump Mekong banana — the chuối xiêm, too starchy to eat raw, too sweet to ignore — grilled whole over charcoal until the skin blisters black and the interior turns to hot custard, then split open and drowned in warm coconut cream thickened with tapioca and sweetened with palm sugar. The Delta's four-ingredient dessert, and proof that the best recipes are the ones that got out of the way.`,
  category: 'DESSERT',
  difficulty: 'Easy',
  totalTime: '30 min',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/chuoi-nuong-nuoc-cot-dua.jpg',
  intro: `Đồng Tháp grows bananas the way it grows everything — abundantly, unceremoniously, and along every canal bank and garden fence in the province. The variety that matters here is chuối xiêm — the short, fat, slightly angular cooking banana that the Delta uses for every sweet preparation from chè to bánh tét — starchier than a Cavendish, sweeter when cooked, and with a dense, creamy flesh that holds its shape on a grill where a ripe dessert banana would collapse. It is the banana the Delta cooks, and cooking is what it was grown for: eaten raw it is chalky and tannic; grilled until its skin is black and its interior has caramelised, it becomes something approaching a hot, smoky, fruit-flavoured custard.

The grilling is the simplest technique the Delta applies to any ingredient: the whole banana, unpeeled, goes onto a charcoal grate over low embers and sits there, turned occasionally, for twelve to fifteen minutes. The skin blisters, blackens and chars. Inside the charring husk, the starch in the flesh gelatinises, the sugars caramelise, and the texture transforms from dense and mealy to soft, golden, almost molten — the banana's own sugars, concentrated by the heat and flavoured by the smoke that seeps through the charring skin, do all the work. When the skin is uniformly black and the banana gives completely under finger pressure, it is done. It is pulled off the grate, the charred skin is slit lengthwise, and the hot, golden, smoke-perfumed interior is revealed.

Into that opening goes the coconut cream — warm, thick, sweetened with palm sugar and thickened with a spoonful of tapioca starch until it coats a spoon and pools in the banana's opened belly like a sauce in a boat. The coconut cream does what it always does in the Delta dessert canon: it provides the fat, the richness and the tropics that the fruit's own acidity and sweetness need as a foil. The palm sugar — đường thốt nốt, the same Khmer sugar the Trà Vinh cốm dẹp used — gives the cream a caramel-toffee depth that white sugar cannot approach. And the tapioca thickens it just enough that it clings to the banana's hot surface rather than running off into the plate.

That is the recipe. Banana, charcoal, coconut cream, palm sugar. Four ingredients and a fire. It is sold at every market, every roadside, every canal-side stall in Đồng Tháp from dawn to dusk, for a price that rounds to nothing, and it is one of the most deeply satisfying desserts in Vietnamese cooking — not because it is complex but because it is complete: hot fruit, cold-ish cream, smoke, sugar, fat, acid, all in balance, all from the garden, all in a vessel made by the banana's own skin. The Delta did not overthink this one. It grilled what it grew, poured what it pressed, and the result needed nothing else.`,
  ingredientSections: [
    {
      title: 'The bananas',
      items: [
        {
          amount: 8,
          name: 'chuối xiêm (cooking bananas), slightly underripe — firm, with some green on the skin',
          note: `The short, plump, starchy cooking banana of the Mekong — sold as "burro banana," "apple banana" or "plátano manzano" at Latin American groceries in Europe. NOT Cavendish, which is too soft and too watery for the grill. The banana should be firm enough to hold its shape through 15 minutes of charcoal heat without collapsing — slightly underripe is better than fully ripe. If only Cavendish is available, use them firmer (barely yellow, green-tipped) and grill more gently.`,
        },
      ],
    },
    {
      title: 'The coconut cream sauce',
      items: [
        {
          amount: 400,
          unit: 'ml',
          name: 'coconut cream (full-fat, the thick top layer of a can)',
          note: `Thick, not thin — this is a sauce, not a drink. It should coat the back of a spoon before you even thicken it.`,
        },
        {
          amount: 60,
          unit: 'g',
          name: 'palm sugar (đường thốt nốt), shaved or crumbled',
          note: `The Mekong sweetener — toffee, butterscotch, mineral. Jaggery is the substitute. Brown sugar is the distant fallback. White sugar misses the register entirely.`,
        },
        { amount: 1, unit: 'tbsp', name: 'tapioca starch, slaked in 2 tbsp water', note: `The thickener. It gives the cream a glossy, clingy, slightly translucent body that holds on the banana's surface instead of pooling underneath.` },
        { amount: 0.25, unit: 'tsp', name: 'salt', note: `The pinch that sharpens everything sweet.` },
        { amount: 1, unit: 'tsp', name: 'vanilla extract (optional — not traditional, but pleasant)' },
      ],
    },
    {
      title: 'Optional toppings',
      items: [
        { amount: 3, unit: 'tbsp', name: 'roasted peanuts, coarsely crushed' },
        { amount: 2, unit: 'tbsp', name: 'toasted sesame seeds' },
        { amount: 2, unit: 'tbsp', name: 'toasted coconut flakes' },
      ],
    },
  ],
  steps: [
    {
      title: 'Grill the bananas whole and unpeeled — 12-15 minutes over low embers',
      description: `Burn your charcoal to glowing embers with no flame — exactly as for the bò nướng and the bánh tráng mè. Low, even, radiating heat — not fire. Lay the unpeeled bananas directly on the grate, not touching each other.

Grill 12-15 minutes, turning every 3-4 minutes with tongs. The skin will blister, bubble and char — progressively, until it is uniformly black on all sides. Do not panic at the blackening; the skin is the sacrificial shell and the banana inside is caramelising, not burning.

The banana is done when: the skin is uniformly charred (no yellow or green patches remaining), the whole fruit yields completely to gentle finger pressure (press the thickest point — it should feel like pressing a ripe avocado), and a faint sweet, smoky, caramel smell rises from the charring seams.

Pull it off. The skin will be papery-black and falling apart. The interior will be hot, golden, soft and smoky. That interior is the dessert.`,
      tip: `The charring skin is not waste — it is a functioning cooking vessel. As the skin blackens, its cellular structure collapses and the charring process generates volatile phenolic compounds (guaiacol, syringol) that are the chemical signature of smoke flavour. These compounds migrate inward through the softening flesh, perfuming it with the same smoky notes that a wood-smoked salmon or a charcoal-grilled pepper carries. The banana is being smoked from outside in, by its own skin, and the depth of char directly correlates to the depth of smoke flavour in the flesh. A lightly charred banana tastes of banana. A fully charred one tastes of banana and smoke, and the smoke is what makes it a dessert rather than a snack.`,
    },
    {
      title: 'Warm the coconut cream — sweet, thick, glossy',
      description: `While the bananas grill: heat the coconut cream with the palm sugar and salt in a small saucepan over low heat, stirring until the sugar dissolves completely and the cream is smooth and fragrant.

Stream in the slaked tapioca starch, stirring continuously. The cream will thicken within 30 seconds — from pourable to a glossy, spoon-coating, slowly-flowing sauce. Add the vanilla if using.

Taste: sweet, rich, faintly toffee from the palm sugar, with the salt sharpening the coconut's own flavour into something more present than plain sweetened cream. If it is too thick, thin with a splash of coconut milk. If too sweet, a squeeze of lime at serving cuts it — but the Delta serves it sweet and means it.

Hold warm. Do not let it boil — boiling breaks the emulsion and the cream splits into oily and watery phases, exactly as it did in the bún nước lèo broth.`,
      tip: `The tapioca thickener is doing specific work that flour or cornstarch cannot replicate. Tapioca starch gelatinises into a clear, glossy, elastic gel — the same transparency it gives to every bánh bột lọc and every tapioca pearl in the Vietnamese dessert canon — while flour and cornstarch gelatinise opaque and matte. On a golden banana, a glossy, translucent, slightly shimmering coconut sauce reads as luxury; an opaque, paste-like one reads as porridge. The starch is the difference between a sauce and a smother, and the sauce is what the banana wants.`,
    },
    {
      title: 'Split, pour, scatter — and eat while the smoke is still rising',
      description: `Take each grilled banana and slit the charred skin lengthwise with a knife — carefully, because steam will escape. Peel back the two flaps of skin to reveal the hot, golden, caramelised interior. The flesh may have split slightly along natural fault lines; this is fine and gives the cream more surface to pool in.

Set each opened banana on a plate or in a shallow bowl, skin-flaps to the sides as a frame. Pour a generous ladleful of the warm coconut cream directly into the opening — it should pool in the banana's belly, coat its surface, and overflow slightly at the edges.

Scatter crushed peanuts, sesame seeds and coconut flakes over the top if using. Serve immediately.

Eat with a spoon — scooping banana flesh and pooled cream together in each bite. The first spoonful should carry: the hot, smoky, caramel-sweet banana; the warm, rich, toffee-edged cream; and the crunch of peanut against both. The charred skin is not eaten but it perfumes the banana from below throughout the eating, and picking up the skin-flap and running a spoon along the inside to catch the last streak of caramelised flesh is the traditional closing act of every chuối nướng in the Delta.`,
      tip: `The banana-as-vessel is worth naming because it is the purest expression of a principle this collection has met in every province: the ingredient provides its own serving vessel. The coconut shell holds the dừa sáp ice cream. The banana leaf boxes the bánh phu thê. The snail shell holds the steamed snail. And the charred banana skin holds the grilled banana, cradling the cream in its opened belly, perfuming the flesh from below, and serving as the plate that goes into the fire and comes out holding the dessert. The skin is the most overqualified piece of packaging in Vietnamese cooking: it is a cooking vessel, a smoke generator, a serving dish, a flavour source and a structural cradle, all from the same piece of peel that every other cuisine in the world throws away.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
