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
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=200&q=80",
  },
  {
    name: "Main Dishes",
    description: "Balanced everyday meals",
    href: "/recipes/main-dishes",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=200&q=80",
  },
  {
    name: "Desserts",
    description: "Sweet finishing treats",
    href: "/recipes/desserts",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=200&q=80",
  },
  {
    name: "Specialty Drinks",
    description: "Creative refreshing drinks",
    href: "/recipes/drinks",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=200&q=80",
  },
];

export const RECIPE_REGIONS: NavItem[] = [
  {
    name: "Northern Cuisine",
    description: "Balanced, subtle flavors",
    href: "/recipes/north",
    image: "https://images.unsplash.com/photo-1583032015879-e5022cb87c3b?w=200&q=80",
  },
  {
    name: "Central Cuisine",
    description: "Bold & spicy dishes",
    href: "/recipes/central",
    image: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=200&q=80",
  },
  {
    name: "Southern Cuisine",
    description: "Sweet tropical richness",
    href: "/recipes/south",
    image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=200&q=80",
  },
  {
    name: "Street Food",
    description: "Quick street bites",
    href: "/recipes/street-food",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&q=80",
  },
];

export const STORY_TOPICS: NavItem[] = [
  {
    name: "Chef Secrets",
    description: "Voices from the kitchen",
    href: "/stories/chef-secrets",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=200&q=80",
  },
  {
    name: "Culture",
    description: "Heritage behind the dishes",
    href: "/stories/culture",
    image: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?w=200&q=80",
  },
  {
    name: "Travel",
    description: "Journey through flavors",
    href: "/stories/travel",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=200&q=80",
  },
  {
    name: "About Stories",
    description: "Our storytelling ethos",
    href: "/stories/about",
    image: "https://images.unsplash.com/photo-1511909525232-61113c912358?w=200&q=80",
  },
];

export const STORY_REGIONS: NavItem[] = [
  {
    name: "Hanoi's Dawn",
    description: "Symphony of the North",
    href: "/stories/symphony-of-hanois-dawn",
    image: "https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?w=200&q=80",
  },
  {
    name: "Southern Banh Xeo",
    description: "Secrets of the South",
    href: "/stories/secrets-of-the-south-banh-xeo",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=200&q=80",
  },
  {
    name: "All Chef Stories",
    description: "Behind the kitchen doors",
    href: "/stories/chef-secrets",
    image: "https://images.unsplash.com/photo-1583077874340-79db6564672e?w=200&q=80",
  },
  {
    name: "Travel Tales",
    description: "From every region",
    href: "/stories/travel",
    image: "https://images.unsplash.com/photo-1576866209830-589e1bfbaa8d?w=200&q=80",
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "/", hasDropdown: false },
  { label: "Recipes", href: "/recipes", hasDropdown: true },
  { label: "Stories", href: "/stories", hasDropdown: true },
  { label: "About", href: "/about", hasDropdown: false },
];
