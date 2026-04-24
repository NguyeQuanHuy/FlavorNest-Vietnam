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

const STORAGE_KEY = "fn_favorites";

function readStorage(): FavoriteRecipe[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeStorage(items: FavoriteRecipe[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // storage full or private mode
  }
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<FavoriteRecipe[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // Hydrate from localStorage after mount (avoids SSR mismatch)
  useEffect(() => {
    setFavorites(readStorage());
    setHydrated(true);
  }, []);

  // Sync across tabs
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) {
        setFavorites(readStorage());
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const isFavorited = useCallback(
    (id: string) => favorites.some((f) => f.id === id),
    [favorites]
  );

  const toggleFavorite = useCallback((recipe: Omit<FavoriteRecipe, "savedAt">) => {
    setFavorites((prev) => {
      const exists = prev.some((f) => f.id === recipe.id);
      const next = exists
        ? prev.filter((f) => f.id !== recipe.id)
        : [...prev, { ...recipe, savedAt: Date.now() }];
      writeStorage(next);
      return next;
    });
  }, []);

  const removeFavorite = useCallback((id: string) => {
    setFavorites((prev) => {
      const next = prev.filter((f) => f.id !== id);
      writeStorage(next);
      return next;
    });
  }, []);

  const clearFavorites = useCallback(() => {
    writeStorage([]);
    setFavorites([]);
  }, []);

  return {
    favorites,
    hydrated,
    count: favorites.length,
    isFavorited,
    toggleFavorite,
    removeFavorite,
    clearFavorites,
  };
}
