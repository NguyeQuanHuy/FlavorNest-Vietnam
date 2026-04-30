export interface SouthernRecipe {
  slug: string
  title: string
  subtitle: string
  image: string
  region: 'Southern'
  difficulty: 'Easy' | 'Medium' | 'Hard'
  time: string
  rating: string
  reviews: number
  cal: number
  tag: string
  tagColor: string
  description: string
  tags: string[]
  category: string
}

export const SOUTHERN_RECIPES: SouthernRecipe[] = [
  { slug: 'thit-kho-tau', title: 'Caramelised Pork & Eggs', subtitle: 'Thit kho tau', image: '/images/recipes/thit-kho-tau.jpg', region: 'Southern', difficulty: 'Easy', time: '1.5 hrs', rating: '4.9', reviews: 387, cal: 480, tag: 'Southern Soul', tagColor: '#D97706', description: "Pork belly and eggs slow-braised in coconut water until the sauce turns deep amber and glossy.", tags: ['Pork', 'Eggs', 'Coconut', 'Slow Cook'], category: 'Southern' },
  { slug: 'com-tam-saigon', title: 'Saigon Broken Rice Plate', subtitle: 'Com tam Sai Gon', image: '/images/recipes/com-tam.jpg', region: 'Southern', difficulty: 'Easy', time: '35 min', rating: '4.9', reviews: 412, cal: 510, tag: 'Saigon Icon', tagColor: '#EA580C', description: "Char-grilled pork chop, fried egg, steamed pork cake and scallion oil over broken rice.", tags: ['Pork', 'Rice', 'Breakfast', 'Classic'], category: 'Southern' },
  { slug: 'bun-thit-nuong', title: 'Grilled Pork Vermicelli Bowl', subtitle: 'Bun thit nuong', image: '/images/recipes/bun-thit-nuong.jpg', region: 'Southern', difficulty: 'Easy', time: '35 min', rating: '4.8', reviews: 298, cal: 390, tag: 'Lunch Classic', tagColor: '#059669', description: "Cold vermicelli, chargrilled pork, crispy spring roll, crushed peanuts and a flood of nuoc cham.", tags: ['Pork', 'Noodles', 'Cold', 'Peanuts'], category: 'Southern' },
  { slug: 'banh-xeo-mien-tay', title: 'Mekong Sizzling Crepe', subtitle: 'Banh xeo mien Tay', image: '/images/recipes/banh-xeo-mien-tay.jpg', region: 'Southern', difficulty: 'Medium', time: '45 min', rating: '4.9', reviews: 263, cal: 380, tag: 'Mekong Special', tagColor: '#D97706', description: "A giant turmeric crêpe filled with shrimp, pork belly and bean sprouts.", tags: ['Shrimp', 'Pork', 'Crispy', 'Mekong'], category: 'Southern' },
  { slug: 'hu-tieu-nam-vang', title: 'Phnom Penh Noodle Soup', subtitle: 'Hu tieu Nam Vang', image: '/images/recipes/hu-tieu-nam-vang.webp', region: 'Southern', difficulty: 'Medium', time: '2 hrs', rating: '4.8', reviews: 187, cal: 420, tag: 'Saigon Favourite', tagColor: '#7C3AED', description: "Clear, slightly sweet pork broth with rice noodles, minced pork, prawns and a poached egg.", tags: ['Pork', 'Shrimp', 'Noodles', 'Clear Broth'], category: 'Southern' },
  { slug: 'ca-kho-to', title: 'Clay Pot Caramelised Fish', subtitle: 'Ca kho to', image: '/images/recipes/ca-kho-to.jpg', region: 'Southern', difficulty: 'Easy', time: '45 min', rating: '4.8', reviews: 221, cal: 320, tag: 'River Delta Classic', tagColor: '#166534', description: "Catfish braised in dark caramel with chilli and ginger in a clay pot.", tags: ['Fish', 'Caramel', 'Clay Pot', 'Spicy'], category: 'Southern' },
  { slug: 'lau-thai', title: 'Thai-Style Hot Pot', subtitle: 'Lau Thai', image: '/images/recipes/lau-thai.jpg', region: 'Southern', difficulty: 'Easy', time: '40 min', rating: '4.7', reviews: 198, cal: 350, tag: 'Social Feast', tagColor: '#BE185D', description: "Sour, spicy, lemongrass-scented broth filled with seafood, mushrooms and fresh vegetables.", tags: ['Seafood', 'Spicy', 'Communal', 'Hot Pot'], category: 'Southern' },
  { slug: 'bo-luc-lac', title: 'Shaking Beef', subtitle: 'Bo luc lac', image: '/images/recipes/bo-luc-lac.jpg', region: 'Southern', difficulty: 'Easy', time: '25 min', rating: '4.9', reviews: 312, cal: 420, tag: 'Restaurant Star', tagColor: '#D97706', description: "Tender beef cubes wok-tossed in butter, garlic and oyster sauce with a beautiful crust.", tags: ['Beef', 'Wok', 'Quick', 'French-Inspired'], category: 'Southern' },
  { slug: 'lau-mam', title: 'Fermented Fish Hot Pot', subtitle: 'Lau mam mien Tay', image: '/images/recipes/lau-mam-mien-tay.jpg', region: 'Southern', difficulty: 'Medium', time: '1 hr', rating: '4.8', reviews: 143, cal: 420, tag: 'Mekong Bold', tagColor: '#B45309', description: "Fermented fish broth with eggplant, pork, prawns and a mountain of fresh herbs.", tags: ['Fermented', 'Seafood', 'Hot Pot', 'Mekong'], category: 'Southern' },
  { slug: 'banh-mi-saigon', title: 'Saigon Banh Mi', subtitle: 'Banh mi Sai Gon', image: '/images/recipes/banh-mi-thit-nuong.jpeg', region: 'Southern', difficulty: 'Easy', time: '30 min', rating: '4.9', reviews: 521, cal: 380, tag: 'Saigon Street Icon', tagColor: '#EA580C', description: "A shatteringly crisp baguette filled with pate, cha lua, pickled daikon and fresh coriander.", tags: ['Pork', 'Bread', 'Street Food', 'Classic'], category: 'Southern' },
]
