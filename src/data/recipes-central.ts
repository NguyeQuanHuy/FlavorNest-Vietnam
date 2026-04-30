export interface CentralRecipe {
  slug: string
  title: string
  subtitle: string
  image: string
  region: 'Central'
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

export const CENTRAL_RECIPES: CentralRecipe[] = [
  { slug: 'bun-bo-hue', title: 'Hue Spicy Beef Noodle Soup', subtitle: 'Bun bo Hue', image: '/images/recipes/bun-bo-hue.webp', region: 'Central', difficulty: 'Hard', time: '2.5 hrs', rating: '4.9', reviews: 312, cal: 480, tag: "Hue's Finest", tagColor: '#DC2626', description: "Lemongrass-perfumed beef broth, thick round noodles, sliced beef shank, pork knuckle and crab paste.", tags: ['Beef', 'Spicy', 'Lemongrass', 'Slow Cook'], category: 'Central' },
  { slug: 'cao-lau', title: 'Hoi An Cao Lau Noodles', subtitle: 'Cao lau Hoi An', image: '/images/recipes/cao-lau-hoi-an.jpg', region: 'Central', difficulty: 'Medium', time: '1 hr', rating: '4.9', reviews: 287, cal: 420, tag: 'Hoi An Only', tagColor: '#7C3AED', description: "Thick ash-treated noodles with roasted pork, crispy rice crackers and fresh herbs.", tags: ['Pork', 'Noodles', 'Heritage', 'Unique'], category: 'Central' },
  { slug: 'mi-quang', title: 'Quang-Style Turmeric Noodles', subtitle: 'Mi Quang', image: '/images/recipes/mi-quang.jpg', region: 'Central', difficulty: 'Medium', time: '1.5 hrs', rating: '4.8', reviews: 198, cal: 440, tag: 'Da Nang Staple', tagColor: '#D97706', description: "Wide turmeric-yellow noodles topped with shrimp, pork, quail eggs and sesame rice crackers.", tags: ['Shrimp', 'Pork', 'Turmeric', 'Noodles'], category: 'Central' },
  { slug: 'banh-beo', title: 'Steamed Rice Cakes with Shrimp', subtitle: 'Banh beo', image: '/images/recipes/banh-beo.webp', region: 'Central', difficulty: 'Medium', time: '45 min', rating: '4.7', reviews: 143, cal: 280, tag: 'Royal Snack', tagColor: '#BE185D', description: "Delicate steamed rice discs topped with dried shrimp, scallion oil and fish sauce.", tags: ['Rice', 'Shrimp', 'Steamed', 'Hue'], category: 'Central' },
  { slug: 'com-hen', title: 'Baby Clam Rice', subtitle: 'Com hen', image: '/images/recipes/com-hen.jpg', region: 'Central', difficulty: 'Medium', time: '1 hr', rating: '4.8', reviews: 167, cal: 380, tag: 'Hue Hidden Gem', tagColor: '#059669', description: "Tiny river clams over cold rice with herbs, peanuts, sesame and fermented shrimp paste.", tags: ['Clams', 'Rice', 'Fermented', 'Spicy'], category: 'Central' },
  { slug: 'banh-xeo-mien-trung', title: 'Central-Style Sizzling Crepe', subtitle: 'Banh xeo mien Trung', image: '/images/recipes/banh-xeo-mien-trung.jpg', region: 'Central', difficulty: 'Medium', time: '40 min', rating: '4.7', reviews: 134, cal: 350, tag: 'Street Favourite', tagColor: '#EA580C', description: "Thinner and crispier than the southern version — filled with shrimp, pork and bean sprouts.", tags: ['Shrimp', 'Pork', 'Crispy', 'Central'], category: 'Central' },
  { slug: 'banh-nam', title: 'Flat Steamed Rice Dumplings', subtitle: 'Banh nam', image: '/images/recipes/banh-nam.jpg', region: 'Central', difficulty: 'Hard', time: '1.5 hrs', rating: '4.6', reviews: 98, cal: 240, tag: 'Hue Heritage', tagColor: '#166534', description: "Paper-thin rice flour parcels steamed in banana leaf with seasoned pork and wood ear mushroom.", tags: ['Pork', 'Banana Leaf', 'Steamed', 'Delicate'], category: 'Central' },
  { slug: 'chao-long-hue', title: 'Hue Pork Congee', subtitle: 'Chao long Hue', image: '/images/recipes/chao-long-hue.jpg', region: 'Central', difficulty: 'Easy', time: '1.5 hrs', rating: '4.7', reviews: 112, cal: 320, tag: 'Morning Comfort', tagColor: '#D97706', description: "Silky rice porridge with pork offal, fresh herbs, ginger and crispy shallots.", tags: ['Pork', 'Congee', 'Comfort', 'Breakfast'], category: 'Central' },
  { slug: 'phu-yen-chives-noodle-soup', title: 'Phu Yen Chives Noodle Soup', subtitle: 'Banh canh he Phu Yen', image: '/images/recipes/banh-canh-he.jpg', region: 'Central', difficulty: 'Medium', time: '1 hr 30 min', rating: '4.9', reviews: 87, cal: 385, tag: 'Phu Yen Special', tagColor: '#0284C7', description: "Thick chewy noodles in a pork and dried anchovy broth, finished with fresh garlic chives.", tags: ['Coastal', 'Pork', 'Noodles', 'Hometown'], category: 'Central' },
  { slug: 'ga-la-e-phu-yen', title: 'Phu Yen Litsea Leaf Chicken', subtitle: 'Ga la e Phu Yen', image: '/images/recipes/ga-la-e-phu-yen.jpg', region: 'Central', difficulty: 'Medium', time: '45 min', rating: '4.8', reviews: 64, cal: 340, tag: 'Phu Yen Hidden Gem', tagColor: '#166534', description: "Free-range chicken stir-fried with fresh litsea leaves — a wild herb unique to the central highlands.", tags: ['Chicken', 'Herbs', 'Phu Yen', 'Unique'], category: 'Central' },
]
