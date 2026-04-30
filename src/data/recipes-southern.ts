export interface NorthernRecipe {
  slug: string
  title: string
  subtitle: string
  image: string
  region: 'Northern'
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

export const NORTHERN_RECIPES: NorthernRecipe[] = [
  { slug: 'hanoi-beef-pho', title: 'Hanoi Beef Pho', subtitle: 'Phở Bò Hà Nội', image: '/images/recipes/pho-bo-ha-noi.webp', region: 'Northern', difficulty: 'Medium', time: '3 hrs', rating: '4.9', reviews: 248, cal: 420, tag: 'Iconic', tagColor: '#D97706', description: "The national soul food — slow-charred bones, star anise and cinnamon simmered for hours into a clear, fragrant broth.", tags: ['Beef', 'Noodles', 'Slow Cook', 'Heritage'], category: 'Northern' },
  { slug: 'bun-cha-hanoi', title: 'Hanoi Grilled Pork Vermicelli', subtitle: 'Bún Chả Hà Nội', image: '/images/recipes/bunchahanoi.jpg', region: 'Northern', difficulty: 'Easy', time: '45 min', rating: '4.7', reviews: 142, cal: 380, tag: 'Street Classic', tagColor: '#059669', description: "Chargrilled pork patties and belly strips in sweet-savory dipping broth — the dish Obama and Bourdain made famous.", tags: ['Pork', 'Grilled', 'Noodles', 'Street Food'], category: 'Northern' },
  { slug: 'banh-cuon', title: 'Steamed Rice Rolls', subtitle: 'Bánh Cuốn Hà Nội', image: '/images/recipes/banh-cuon.jpg', region: 'Northern', difficulty: 'Medium', time: '45 min', rating: '4.8', reviews: 167, cal: 290, tag: 'Morning Ritual', tagColor: '#7C3AED', description: "Silky translucent rice sheets rolled around seasoned minced pork and wood ear mushrooms — a Hanoi breakfast ritual.", tags: ['Rice Flour', 'Pork', 'Steamed', 'Heritage'], category: 'Northern' },
  { slug: 'xoi-xeo', title: 'Mung Bean Sticky Rice', subtitle: 'Xôi Xéo', image: '/images/recipes/xoi-xeo.jpg', region: 'Northern', difficulty: 'Easy', time: '1 hr', rating: '4.8', reviews: 134, cal: 380, tag: 'Breakfast', tagColor: '#EA580C', description: "Golden glutinous rice steamed over split mung bean, crowned with crispy fried shallots and turmeric scallion oil.", tags: ['Rice', 'Vegan', 'Mung Bean', 'Quick'], category: 'Northern' },
  { slug: 'cha-ca-la-vong', title: 'Turmeric Fish with Dill', subtitle: 'Chả Cá Lã Vọng', image: '/images/recipes/cha-ca-la-vong.jpg', region: 'Northern', difficulty: 'Medium', time: '40 min', rating: '4.9', reviews: 89, cal: 340, tag: 'Heritage', tagColor: '#D97706', description: "Hanoi's most celebrated dish — snakehead fish sizzled tableside with dill and spring onion.", tags: ['Fish', 'Turmeric', 'Dill', 'Heritage'], category: 'Northern' },
  { slug: 'bun-thang', title: 'Hanoi Vermicelli Soup', subtitle: 'Bún Thang', image: '/images/recipes/bun-thang.jpg', region: 'Northern', difficulty: 'Hard', time: '2 hrs', rating: '4.8', reviews: 76, cal: 310, tag: 'Royal Kitchen', tagColor: '#BE185D', description: "Crystal-clear chicken broth with egg ribbons, shredded chicken and Vietnamese ham — the Sunday dish of Hanoi's old families.", tags: ['Chicken', 'Noodles', 'Refined', 'Heritage'], category: 'Northern' },
]
