export interface BreakfastRecipe {
  slug: string
  title: string
  subtitle: string
  image: string
  region: 'Northern' | 'Central' | 'Southern'
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

export const BREAKFAST_RECIPES: BreakfastRecipe[] = [
  { slug: 'pho-bo', title: 'Hanoi Beef Pho', subtitle: 'Phở Bò Hà Nội', image: '/images/recipes/phohanoi.jpg', region: 'Northern', difficulty: 'Medium', time: '3 hrs', rating: '4.9', reviews: 248, cal: 420, tag: 'Popular', tagColor: '#D97706', description: "Slow-simmered bone broth, silky rice noodles, paper-thin slices of beef — the dish that defines Hanoi mornings.", tags: ['Beef', 'Noodles', 'Slow Cook', 'Heritage'], category: 'Breakfast' },
  { slug: 'banh-mi-trung', title: 'Egg Banh Mi', subtitle: 'Bánh Mì Ốp La', image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80', region: 'Southern', difficulty: 'Easy', time: '15 min', rating: '4.7', reviews: 189, cal: 310, tag: 'Quick & Easy', tagColor: '#059669', description: "A crusty French baguette loaded with a sunny-side-up egg, chicken pâté, pickled daikon and carrots.", tags: ['Bread', 'Eggs', 'Quick', 'Street Food'], category: 'Breakfast' },
  { slug: 'xoi-xeo', title: 'Mung Bean Sticky Rice', subtitle: 'Xôi Xéo', image: 'https://images.unsplash.com/photo-1579856896394-07dfa10d7c5b?auto=format&fit=crop&w=800&q=80', region: 'Northern', difficulty: 'Easy', time: '1 hr', rating: '4.8', reviews: 134, cal: 380, tag: 'Popular', tagColor: '#D97706', description: "Golden glutinous rice steamed over split mung bean, topped with crispy fried shallots and turmeric-infused scallion oil.", tags: ['Rice', 'Vegan', 'Mung Bean', 'Northern'], category: 'Breakfast' },
  { slug: 'banh-cuon', title: 'Steamed Rice Rolls', subtitle: 'Bánh Cuốn', image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=800&q=80', region: 'Northern', difficulty: 'Medium', time: '45 min', rating: '4.8', reviews: 167, cal: 290, tag: 'Popular', tagColor: '#D97706', description: "Translucent sheets of steamed rice batter rolled around seasoned minced pork and wood ear mushrooms.", tags: ['Rice Flour', 'Pork', 'Steamed', 'Heritage'], category: 'Breakfast' },
  { slug: 'chao-long', title: 'Pork Congee', subtitle: 'Cháo Lòng', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80', region: 'Southern', difficulty: 'Easy', time: '1.5 hrs', rating: '4.6', reviews: 98, cal: 340, tag: 'Comfort Food', tagColor: '#7C3AED', description: "Silky rice porridge with pork offal in a ginger-scented broth — Saigon's ultimate restorative breakfast.", tags: ['Rice', 'Pork', 'Slow Cook', 'Comfort'], category: 'Breakfast' },
  { slug: 'banh-trang-tron', title: 'Rice Paper Salad', subtitle: 'Bánh Tráng Trộn', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80', region: 'Southern', difficulty: 'Easy', time: '20 min', rating: '4.7', reviews: 212, cal: 220, tag: 'Street Snack', tagColor: '#BE185D', description: "Rice paper tossed with quail eggs, dried shrimp, green mango and a fiery-tangy tamarind dressing.", tags: ['Rice Paper', 'Vegetarian', 'Tangy', 'Quick'], category: 'Breakfast' },
]
