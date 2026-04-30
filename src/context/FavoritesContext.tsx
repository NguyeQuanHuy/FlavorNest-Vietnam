"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";

export interface FavoriteRecipe {
  id: string;
  slug: string;
  title: string;
  image: string;
  category?: string;
  cookTime?: string;
  subtitle?: string;
  difficulty?: string;
  savedAt: number;
}

interface FavoritesContextValue {
  favorites: FavoriteRecipe[];
  count: number;
  hydrated: boolean;
  mounted: boolean;
  toggle: (recipe: Omit<FavoriteRecipe, "savedAt">) => void;
  toggleFavorite: (recipe: Omit<FavoriteRecipe, "savedAt">) => void;
  isFavorite: (slug: string) => boolean;
  isFavorited: (slug: string) => boolean;
  removeFavorite: (id: string) => void;
  clearFavorites: () => void;
}

const FavoritesContext = createContext<FavoritesContextValue | null>(null);

const KEY = "fn_favorites";

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<FavoriteRecipe[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setFavorites(JSON.parse(raw));
    } catch {}
    setHydrated(true);
  }, []);

  const persist = useCallback((items: FavoriteRecipe[]) => {
    setFavorites(items);
    try { localStorage.setItem(KEY, JSON.stringify(items)); } catch {}
  }, []);

  const toggle = useCallback((recipe: Omit<FavoriteRecipe, "savedAt">) => {
    setFavorites(prev => {
      const exists = prev.some(f => f.slug === recipe.slug);
      const next = exists
        ? prev.filter(f => f.slug !== recipe.slug)
        : [...prev, { ...recipe, id: recipe.slug, savedAt: Date.now() }];
      try { localStorage.setItem(KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  }, []);

  const removeFavorite = useCallback((id: string) => {
    setFavorites(prev => {
      const next = prev.filter(f => f.id !== id);
      try { localStorage.setItem(KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  }, []);

  const clearFavorites = useCallback(() => {
    setFavorites([]);
    try { localStorage.removeItem(KEY); } catch {}
  }, []);

  const isFavorite = useCallback((slug: string) => favorites.some(f => f.slug === slug), [favorites]);

  return (
    <FavoritesContext.Provider value={{
      favorites, count: favorites.length, hydrated, mounted: hydrated,
      toggle, toggleFavorite: toggle, isFavorite, isFavorited: isFavorite,
      removeFavorite, clearFavorites,
    }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavoritesContext() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error("useFavoritesContext must be used within FavoritesProvider");
  return ctx;
}
