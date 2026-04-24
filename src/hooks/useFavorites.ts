"use client";

import { useState, useEffect, useCallback } from "react";

export interface FavoriteRecipe {
  id: string;        // = slug, dùng làm unique key
  slug: string;
  title: string;
  image: string;
  category?: string;
  cookTime?: string;
  savedAt: number;   // Date.now() khi lưu
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

  // mounted = alias của hydrated — Navbar dùng tên này
  const mounted = hydrated;

  const persist = useCallback((items: FavoriteRecipe[]) => {
    setFavorites(items);
    try {
      localStorage.setItem(KEY, JSON.stringify(items));
    } catch {}
  }, []);

  /** Toggle thêm/bỏ — Navbar & RecipeCard dùng */
  const toggle = useCallback(
    (recipe: Omit<FavoriteRecipe, "id" | "savedAt">) => {
      const exists = favorites.some((f) => f.slug === recipe.slug);
      persist(
        exists
          ? favorites.filter((f) => f.slug !== recipe.slug)
          : [...favorites, { ...recipe, id: recipe.slug, savedAt: Date.now() }]
      );
    },
    [favorites, persist]
  );

  /** Xóa theo id — FavoritesPage dùng */
  const removeFavorite = useCallback(
    (id: string) => persist(favorites.filter((f) => f.id !== id)),
    [favorites, persist]
  );

  /** Xóa tất cả — FavoritesPage dùng */
  const clearFavorites = useCallback(() => persist([]), [persist]);

  /** Kiểm tra slug */
  const isFavorite = useCallback(
    (slug: string) => favorites.some((f) => f.slug === slug),
    [favorites]
  );

  return {
    favorites,
    hydrated,       // FavoritesPage dùng
    mounted,        // Navbar dùng (alias)
    toggle,
    isFavorite,
    removeFavorite,
    clearFavorites,
  };
}
