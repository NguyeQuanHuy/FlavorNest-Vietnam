"use client";

import { useState, useEffect, useCallback } from "react";

export interface FavoriteRecipe {
  id: string;
  slug: string;
  title: string;
  image: string;
  category?: string;
  cookTime?: string;
  savedAt: number;
}

const KEY = "fn_favorites";

export function useFavorites() {
  const [favorites, setFavorites] = useState<FavoriteRecipe[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setFavorites(JSON.parse(raw));
    } catch {}
    setHydrated(true);
  }, []);

  const mounted = hydrated;

  const persist = useCallback((items: FavoriteRecipe[]) => {
    setFavorites(items);
    try {
      localStorage.setItem(KEY, JSON.stringify(items));
    } catch {}
  }, []);

  const toggle = useCallback(
    (recipe: Omit<FavoriteRecipe, "savedAt">) => {
      const exists = favorites.some((f) => f.slug === recipe.slug);
      persist(
        exists
          ? favorites.filter((f) => f.slug !== recipe.slug)
          : [...favorites, { ...recipe, id: recipe.slug, savedAt: Date.now() }]
      );
    },
    [favorites, persist]
  );

  const toggleFavorite = toggle;

  const isFavorite = useCallback(
    (slug: string) => favorites.some((f) => f.slug === slug),
    [favorites]
  );

  const isFavorited = isFavorite;

  const removeFavorite = useCallback(
    (id: string) => persist(favorites.filter((f) => f.id !== id)),
    [favorites, persist]
  );

  const clearFavorites = useCallback(() => persist([]), [persist]);

  // NavFavoriteIcon dùng
  const count = favorites.length;

  return {
    favorites,
    count,
    hydrated,
    mounted,
    toggle,
    toggleFavorite,
    isFavorite,
    isFavorited,
    removeFavorite,
    clearFavorites,
  };
}
