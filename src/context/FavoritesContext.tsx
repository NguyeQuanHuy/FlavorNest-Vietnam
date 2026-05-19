"use client";

import {
  createContext, useContext, useState, useEffect,
  useCallback, type ReactNode
} from "react";
import { useSession } from "next-auth/react";
import {
  toggleFavoriteAction,
  getMyFavoritesAction,
  removeFavoriteAction,
  clearFavoritesAction,
  type FavoriteRecipeData,
} from "@/app/actions/favorites";

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

interface FavoritesCtx {
  favorites: FavoriteRecipe[];
  count: number;
  hydrated: boolean;
  mounted: boolean;
  toggle: (recipe: Omit<FavoriteRecipe, "savedAt">) => Promise<void>;
  toggleFavorite: (recipe: Omit<FavoriteRecipe, "savedAt">) => Promise<void>;
  isFavorite: (slug: string) => boolean;
  isFavorited: (slug: string) => boolean;
  removeFavorite: (idOrSlug: string) => Promise<void>;
  clearFavorites: () => Promise<void>;
}

const Ctx = createContext<FavoritesCtx | null>(null);
const KEY = "fn_favorites";

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const { data: session, status } = useSession();
  const isLoggedIn = status === "authenticated" && !!session?.user?.id;

  const [favorites, setFavorites] = useState<FavoriteRecipe[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // Load từ DB hoặc localStorage
useEffect(() => {
    let cancelled = false;

    async function load() {
      // Set hydrated ngay với localStorage trước
      try {
        const raw = localStorage.getItem(KEY);
        if (raw && !cancelled) setFavorites(JSON.parse(raw));
      } catch {}
      if (!cancelled) setHydrated(true);

      // Sau đó nếu đã login, sync với DB
      if (isLoggedIn) {
        const dbFavs = await getMyFavoritesAction();
        if (!cancelled) {
          setFavorites(dbFavs as FavoriteRecipe[]);
          localStorage.removeItem(KEY);
        }
      }
    }

    if (status !== "loading") {
      load();
    }

    return () => { cancelled = true; };
  }, [status, isLoggedIn, session?.user?.id]);

  const persistLocal = useCallback((items: FavoriteRecipe[]) => {
    try { localStorage.setItem(KEY, JSON.stringify(items)); } catch {}
  }, []);

const toggle = useCallback(async (recipe: Omit<FavoriteRecipe, "savedAt">) => {
    // Dùng functional update để tránh stale closure
    let next: FavoriteRecipe[] = [];
    setFavorites(prev => {
      const exists = prev.some(f => f.slug === recipe.slug);
      next = exists
        ? prev.filter(f => f.slug !== recipe.slug)
        : [...prev, { ...recipe, id: recipe.slug, savedAt: Date.now() }];
      return next;
    });

    if (isLoggedIn) {
      const res = await toggleFavoriteAction(recipe as FavoriteRecipeData);
      if (!res.ok) {
        // rollback về state trước
        setFavorites(prev => {
          const exists = prev.some(f => f.slug === recipe.slug);
          return exists
            ? prev.filter(f => f.slug !== recipe.slug)
            : [...prev, { ...recipe, id: recipe.slug, savedAt: Date.now() }];
        });
      }
    } else {
      persistLocal(next);
    }
  }, [isLoggedIn, persistLocal]);

  const removeFavorite = useCallback(async (idOrSlug: string) => {
    const target = favorites.find(f => f.id === idOrSlug || f.slug === idOrSlug);
    if (!target) return;
    const next = favorites.filter(f => f.id !== target.id);
    setFavorites(next);
    if (isLoggedIn) {
      const res = await removeFavoriteAction(target.slug);
      if (!res.ok) setFavorites(favorites);
    } else {
      persistLocal(next);
    }
  }, [favorites, isLoggedIn, persistLocal]);

  const clearFavorites = useCallback(async () => {
    const prev = favorites;
    setFavorites([]);
    if (isLoggedIn) {
      const res = await clearFavoritesAction();
      if (!res.ok) setFavorites(prev);
    } else {
      persistLocal([]);
    }
  }, [favorites, isLoggedIn, persistLocal]);

  const isFavorite = useCallback((slug: string) => favorites.some(f => f.slug === slug), [favorites]);

  return (
    <Ctx.Provider value={{
      favorites,
      count: favorites.length,
      hydrated,
      mounted: hydrated,
      toggle,
      toggleFavorite: toggle,
      isFavorite,
      isFavorited: isFavorite,
      removeFavorite,
      clearFavorites,
    }}>
      {children}
    </Ctx.Provider>
  );
}

export function useFavoritesContext() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useFavoritesContext must be used within FavoritesProvider");
  return ctx;
}
