// src/lib/nav-data.ts

export type NavItem = {
  name: string;
  description: string;
  href: string;
  image: string;
  icon?: string;
};

// Recipes dropdown — column 1: by meal
export const RECIPE_CATEGORIES: NavItem[] = [
  { name: "Breakfast", description: "Phở, xôi and bánh mì to start the day", href: "/recipes/breakfast", image: "/images/recipes/xoi-xeo.jpg", icon: "bowl" },
  { name: "Main Dishes", description: "Everyday rice, braise and soup meals", href: "/recipes/main-dishes", image: "/images/recipes/ca-kho-to.jpg", icon: "recipe" },
  { name: "Street Food", description: "Quick bites from the sidewalk stalls", href: "/recipes/street-food", image: "/images/recipes/street-foods.jpg", icon: "bowl" },
  { name: "Desserts", description: "Chè, flan and sweet treats", href: "/recipes/desserts", image: "/images/recipes/tiramisu-caphe.jpg", icon: "star" },
  { name: "Drinks", description: "Coffee, teas and fresh juices", href: "/recipes/drinks", image: "/images/recipes/ca-phe-muoi.jpg", icon: "leaf" },
];

// Recipes dropdown — column 2: by region
export const RECIPE_REGIONS: NavItem[] = [
  { name: "Northern", description: "Clean, balanced flavours of Hà Nội", href: "/recipes/north", image: "/images/recipes/pho-bo-ha-noi.jpg", icon: "chopsticks" },
  { name: "Central", description: "Bold, spicy cooking of Huế and Hội An", href: "/recipes/central", image: "/images/recipes/bun-bo-hue.webp", icon: "fire" },
  { name: "Southern", description: "Sweet, herb-rich food of the Mekong", href: "/recipes/south", image: "/images/recipes/banh-xeo-mekong.jpg", icon: "leaf" },
];

// Stories dropdown — column 1: topics
export const STORY_TOPICS: NavItem[] = [
  { name: "Culture", description: "The heritage behind the dishes", href: "/stories/culture", image: "/images/recipes/nguoi-hoi-an.jpg", icon: "leaf" },
  { name: "Chef Secrets", description: "Techniques from Vietnamese kitchens", href: "/stories/chef-secrets", image: "/images/recipes/cung-dinh-hue.jpg", icon: "recipe" },
  { name: "Travel", description: "Eating your way through Vietnam", href: "/stories/travel", image: "/images/recipes/hoi-an.jpg", icon: "bookmark" },
];

// Stories dropdown — column 2: featured stories
export const STORY_REGIONS: NavItem[] = [
  { name: "The Symphony of Hanoi's Dawn", description: "A broth ten hours in the making", href: "/stories/symphony-of-hanois-dawn", image: "/images/recipes/phohanoi.jpg", icon: "bowl" },
  { name: "Secrets of the South: Bánh Xèo", description: "The South's crispiest pancake", href: "/stories/secrets-of-the-south-banh-xeo", image: "/images/recipes/banh-xeo-mien-tay.jpg", icon: "fire" },
  { name: "Hanoi's Egg Coffee", description: "How a milk shortage created a classic", href: "/stories/cafe-trung-hanoi-egg-coffee", image: "/images/stories/egg-coffee-hero.jpg", icon: "star" },
];

export const NAV_LINKS = [
  { label: "Home", href: "/", hasDropdown: false },
  { label: "Recipes", href: "/recipes", hasDropdown: true },
  { label: "Stories", href: "/stories", hasDropdown: true },
  { label: "How To", href: "/how-to", hasDropdown: false },
  { label: "Ingredients", href: "/ingredients", hasDropdown: false },
  { label: "Travel", href: "/travel", hasDropdown: false },
  { label: "About", href: "/about", hasDropdown: false },
];
