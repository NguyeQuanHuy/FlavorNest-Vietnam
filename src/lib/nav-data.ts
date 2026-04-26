// src/lib/nav-data.ts

export type NavItem = {
  name: string;
  description: string;
  href: string;
  image: string;
};

export const RECIPE_CATEGORIES: NavItem[] = [
  {
    name: "Breakfast",
    description: "Light & energizing start",
    href: "/recipes/breakfast",
    image: "/images/recipes/xoi-xeo.jpg",
  },
  {
    name: "Main Dishes",
    description: "Balanced everyday meals",
    href: "/recipes/main-dishes",
    image: "/images/recipes/ca-kho-to.jpg",
  },
  {
    name: "Desserts",
    description: "Sweet finishing treats",
    href: "/recipes/desserts",
    image: "/images/recipes/tiramisu-caphe.jpg",
  },
  {
    name: "Specialty Drinks",
    description: "Creative refreshing drinks",
    href: "/recipes/drinks",
    image: "/images/recipes/ca-phe-muoi.jpg",
  },
];

export const RECIPE_REGIONS: NavItem[] = [
  {
    name: "Northern Cuisine",
    description: "Balanced, subtle flavors",
    href: "/recipes/north",
    image: "/images/recipes/pho-bo-ha-noi.jpg",
  },
  {
    name: "Central Cuisine",
    description: "Bold & spicy dishes",
    href: "/recipes/central",
    image: "/images/recipes/bun-bo-hue.webp",
  },
  {
    name: "Southern Cuisine",
    description: "Sweet tropical richness",
    href: "/recipes/south",
    image: "/images/recipes/banh-xeo-mekong.jpg",
  },
  {
    name: "Street Food",
    description: "Quick street bites",
    href: "/recipes/street-food",
    image: "/images/recipes/street-foods.jpg",
  },
];

export const STORY_TOPICS: NavItem[] = [
  {
    name: "Chef Secrets",
    description: "Voices from the kitchen",
    href: "/stories/chef-secrets",
    image: "/images/recipes/cung-dinh-hue.jpg",
  },
  {
    name: "Culture",
    description: "Heritage behind the dishes",
    href: "/stories/culture",
    image: "/images/recipes/nguoi-hoi-an.jpg",
  },
  {
    name: "Travel",
    description: "Journey through flavors",
    href: "/stories/travel",
    image: "/images/recipes/hoi-an.jpg",
  },
  {
    name: "About Stories",
    description: "Our storytelling ethos",
    href: "/stories/about",
    image: "/images/recipes/ricefield.jpeg",
  },
];

export const STORY_REGIONS: NavItem[] = [
  {
    name: "Hanoi's Dawn",
    description: "Symphony of the North",
    href: "/stories/symphony-of-hanois-dawn",
    image: "/images/recipes/phohanoi.jpg",
  },
  {
    name: "Southern Banh Xeo",
    description: "Secrets of the South",
    href: "/stories/secrets-of-the-south-banh-xeo",
    image: "/images/recipes/banh-xeo-mien-tay.jpg",
  },
  {
    name: "All Chef Stories",
    description: "Behind the kitchen doors",
    href: "/stories/chef-secrets",
    image: "/images/recipes/hue.jpg",
  },
  {
    name: "Travel Tales",
    description: "From every region",
    href: "/stories/travel",
    image: "/images/recipes/hoi-an (2).jpg",
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "/", hasDropdown: false },
  { label: "Recipes", href: "/recipes", hasDropdown: true },
  { label: "Stories", href: "/stories", hasDropdown: true },
  { label: "About", href: "/about", hasDropdown: false },
];