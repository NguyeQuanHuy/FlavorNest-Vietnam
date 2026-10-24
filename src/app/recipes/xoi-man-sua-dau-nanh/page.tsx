'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'xoi-man-sua-dau-nanh',
  title: `Xôi Mặn + Sữa Đậu Nành Nóng (Savoury Sticky Rice with Hot Soy Milk)`,
  subtitle: `A fist of glutinous rice — steamed with turmeric, topped with a fried egg, a scoop of pork floss, a drizzle of scallion oil and a spoonful of fried shallots — paired with a glass of fresh hot soy milk from the cart next door. The Saigon sidewalk breakfast that costs less than a bus ticket, takes three minutes to eat, and carries a working person to lunch.`,
  category: 'MAIN COURSE',
  difficulty: 'Easy',
  totalTime: '1 hr',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/xoi-man-sua-dau-nanh.jpg',
  intro: `At five-thirty in the morning, before the motorbikes have filled the streets and before the phở stalls have finished ladling their first bowls, the xôi carts are already working. They sit at every major intersection in Sài Gòn — a woman behind a glass case, a mound of steamed sticky rice inside it, a tray of toppings beside it, and a queue of people on motorbikes who have stopped for exactly ninety seconds to buy breakfast. The transaction is wordless: the customer points (xôi mặn — savoury; or xôi ngọt — sweet), the vendor scoops, wraps, hands it over in a banana leaf or a plastic bag, and the customer tucks it into the motorbike's front basket and rides to work eating it one-handed at traffic lights. Beside the xôi cart, or sometimes attached to it, is the sữa đậu nành vendor: hot fresh soy milk, made that morning from soaked, ground, boiled and strained soybeans, served in a plastic bag with a straw or in a small glass, sweet, steaming, and tasting of the bean in a way that no Tetra Pak has ever approached.

Xôi mặn — savoury sticky rice — is Sài Gòn's most democratic breakfast. It is cheaper than phở, faster than bánh mì, more portable than bún, and more filling than all of them per đồng. A fist-sized serving of turmeric-tinted glutinous rice, packed into a banana leaf, carries 400 calories of complex carbohydrate and enough fat (from the scallion oil and the fried egg) to sustain a construction worker, a schoolteacher or an office clerk until noon. It is not beautiful food. It is not instagram food. It is the food that actually feeds the city, six mornings out of seven, and the city does not photograph it because the city is too busy eating it.

The toppings define the xôi's register — and xôi mặn's register is built from the southern pantry: a fried egg (the lacy-edged, crispy-bottomed, runny-yolked egg that also tops the cơm tấm); chà bông (pork floss — the dried, shredded, sweetened pork product that is the Delta's answer to protein portability); mỡ hành (scallion oil); hành phi (fried shallots); and occasionally a few slices of lạp xưởng (Chinese sausage), a sliver of chả lụa (steamed pork loaf), or a scattering of đậu phộng rang (roasted peanuts). The rice itself is often tinted yellow with turmeric or with dầu điều (annatto oil), giving it the golden colour that the southern eye expects from anything called mặn.

The sữa đậu nành beside it is the liquid partner, and it is a food in its own right. Fresh soy milk — made by soaking dried soybeans overnight, grinding them with water, boiling the slurry, and straining through cloth — is one of the oldest plant-based foods in the Vietnamese breakfast vocabulary, predating every imported milk and every coffee chain, and tasting of nothing but the bean. Hot, sweet, steaming, and carried in a plastic bag that the drinker bites a corner off and sips through the hole: this is the Sài Gòn morning, distilled to two objects held in two hands on a motorbike in traffic.`,
  ingredientSections: [
    {
      title: 'The sticky rice',
      items: [
        { amount: 400, unit: 'g', name: 'glutinous rice (gạo nếp)', note: `Soaked 4-6 hours, drained well.` },
        { amount: 1, unit: 'tsp', name: 'ground turmeric or 1 tbsp annatto oil (dầu điều)', note: `For the golden colour. Tossed through the soaked, drained rice before steaming.` },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
        { amount: 1, unit: 'tbsp', name: 'neutral oil' },
      ],
    },
    {
      title: 'The toppings — xôi mặn assembly',
      items: [
        { amount: 4, name: 'eggs, fried lacy-crisp with runny yolks', note: `The same aggressive fried egg as the cơm tấm — generous oil, crispy edges, liquid centre.` },
        { amount: 80, unit: 'g', name: 'chà bông / ruốc (pork floss)', note: `The sweet, dried, shredded pork product sold in every Vietnamese grocer. Its concentrated sweetness and fibre against the sticky rice is the xôi mặn's signature pairing.` },
        { amount: 3, unit: 'tbsp', name: 'mỡ hành (scallion oil): scallion greens scalded in hot oil' },
        { amount: 3, unit: 'tbsp', name: 'hành phi (fried shallots)' },
        { amount: 100, unit: 'g', name: 'lạp xưởng (Chinese sausage), sliced and fried (optional)' },
        { amount: 100, unit: 'g', name: 'chả lụa (steamed pork loaf), sliced (optional)' },
        { amount: 3, unit: 'tbsp', name: 'đậu phộng rang (roasted peanuts), coarsely crushed' },
        { amount: 2, unit: 'tbsp', name: 'soy sauce or fish sauce, for drizzling' },
      ],
    },
    {
      title: 'The sữa đậu nành (fresh soy milk)',
      items: [
        { amount: 200, unit: 'g', name: 'dried soybeans, soaked overnight (12 hours)', note: `The soybeans should have doubled in size and a bean split in half should be uniformly pale yellow throughout — no hard, dark centre.` },
        { amount: 1.2, unit: 'L', name: 'water (for blending)' },
        { amount: 60, unit: 'g', name: 'sugar', note: `The Saigon soy milk is sweet — distinctly, unapologetically sweet, in the same register as the phở broth and the cơm tấm nước chấm. Adjust to your own line.` },
        { amount: 0.25, unit: 'tsp', name: 'salt' },
        { amount: 1, unit: 'tsp', name: 'vanilla extract (optional — some vendors add a drop)' },
      ],
    },
  ],
  steps: [
    {
      title: 'Steam the golden sticky rice — 30 minutes, firm and separate',
      description: `Toss the soaked, drained glutinous rice with the turmeric (or annatto oil), salt and oil until evenly coloured. Spread in a steamer lined with muslin or banana leaf.

Steam over hard-boiling water 30-35 minutes until every grain is cooked through, translucent and tender, but still firm and separate — not mushy, not porridge-like. Fluff with a fork halfway through and sprinkle a tablespoon of water over if the surface is drying out.

The xôi should be golden, fragrant, and hold its shape when scooped — a firm, compact, slightly sticky mass that can be moulded by hand into a ball or a cylinder without falling apart. This is the portability spec: xôi that crumbles cannot be carried in a banana leaf on a motorbike.`,
      tip: `The turmeric in the xôi is purely visual — its flavour contribution at this dose is negligible, and its job is to turn the rice from white to golden, which is the colour code that tells a Saigon eye "this is xôi mặn, not xôi ngọt." Xôi ngọt (sweet) is white, purple (from black glutinous rice), or green (from pandan). Xôi mặn is golden. The colour IS the label, and the vendor's glass case — with its golden mound on one side and its white or purple mound on the other — is a menu written in pigment rather than in words.`,
    },
    {
      title: 'Make the sữa đậu nành — grind, boil, strain, sweeten',
      description: `Drain the soaked soybeans and rinse. Blend with the 1.2 L water in a high-powered blender for 3-4 minutes until completely smooth — no grit, no chunks. The slurry should be thick, white and foamy.

Pour the slurry into a large pot through a fine-mesh nut-milk bag or a muslin cloth, squeezing firmly to extract every drop of milk. The residue in the cloth is okara — soybean pulp — and it can be composted or used in cooking (stir-fried with vegetables, added to pancake batter).

Bring the strained milk to a rolling boil over medium heat, stirring frequently — soy milk foams violently when it boils and will overflow a pot in seconds if unattended. Boil 10 minutes. The boiling is not optional: raw soy milk contains trypsin inhibitors that interfere with protein digestion and that are denatured by 10 minutes of sustained boiling.

Stir in the sugar, salt and vanilla. Taste: sweet, beany, clean, with a warmth that feels like nourishment before it feels like flavour. Serve immediately, hot, in glasses or — the Saigon way — in a plastic bag with a straw.`,
      tip: `The 10-minute boil is a food-safety step disguised as a cooking step. Raw soybean contains Kunitz trypsin inhibitor and Bowman-Birk inhibitor — proteins that bind to and inactivate the digestive enzyme trypsin in the human gut, causing bloating, cramps and poor protein absorption. Ten minutes at 100°C denatures both inhibitors completely, rendering the milk safe and digestible. Every traditional soy-milk culture — Chinese, Japanese, Vietnamese — boils its milk for at least this long, and the practice predates the biochemical understanding by centuries. The grandmothers knew the rule before the scientists knew the reason.`,
    },
    {
      title: 'Assemble the xôi mặn — scoop, top, drizzle, wrap',
      description: `Scoop a generous fist of the golden sticky rice onto a banana leaf, a plate, or into a small bowl. Press it gently into a compact mound.

On top, in layers: a drizzle of mỡ hành (the scallion oil sizzled and poured), a generous scoop of chà bông (pork floss), a fried egg set crown-like on top with the yolk unbroken, a scatter of fried shallots, crushed peanuts, and — if using — sliced lạp xưởng and chả lụa. Drizzle soy sauce or fish sauce lightly over everything.

Serve the hot sữa đậu nành alongside in a glass.

The eating: break the egg yolk with a spoon so it runs into the rice. Tear the fried egg white into the sticky rice. Mix everything — pork floss, scallion oil, shallots, peanuts — into the golden mass until every bite carries every topping. Eat with a spoon, alternating with sips of the hot soy milk. The xôi is dense, savoury, sticky and protein-rich; the soy milk is light, sweet, hot and cleansing; and together they form the Saigon sidewalk breakfast that has sent ten million people to work for the price of a parking meter.`,
      tip: `Xôi mặn + sữa đậu nành is the simplest, cheapest and most nutritionally complete breakfast in Sài Gòn's vocabulary: the glutinous rice provides complex carbohydrate (sustained energy), the egg provides complete protein and fat, the pork floss provides additional protein and iron, the peanuts provide fat and micronutrients, and the soy milk provides plant protein, calcium and fluid. Total cost at a Saigon cart: roughly 20,000-30,000 VNĐ — less than one euro. Total preparation time at the cart: 45 seconds. Total eating time for the customer: 3 minutes at a traffic light. No dish in this collection, and possibly no dish in any cuisine, delivers more nutrition per second per đồng. The xôi cart is not a restaurant. It is a refuelling station, and the city runs on it.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
