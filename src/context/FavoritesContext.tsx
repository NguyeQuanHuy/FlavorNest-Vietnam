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
      if (status === "loading") return;

      if (isLoggedIn) {
        const dbFavs = await getMyFavoritesAction();
        try {
          const raw = localStorage.getItem(KEY);
          if (raw) {
            const localFavs = JSON.parse(raw) as FavoriteRecipe[];
            const dbSlugs = new Set(dbFavs.map((f: FavoriteRecipe) => f.slug));
            const toMigrate = localFavs.filter(f => !dbSlugs.has(f.slug));
            for (const f of toMigrate) {
              await toggleFavoriteAction({
                slug: f.slug, title: f.title, image: f.image,
                category: f.category, cookTime: f.cookTime,
                subtitle: f.subtitle, difficulty: f.difficulty,
              });
            }
            if (toMigrate.length > 0) {
              const merged = await getMyFavoritesAction();
              if (!cancelled) {
                setFavorites(merged as FavoriteRecipe[]);
                localStorage.removeItem(KEY);
                setHydrated(true);
                return;
              }
            }
            localStorage.removeItem(KEY);
          }
        } catch {}
        if (!cancelled) {
          setFavorites(dbFavs as FavoriteRecipe[]);
          setHydrated(true);
        }
      } else {
        try {
          const raw = localStorage.getItem(KEY);
          if (raw && !cancelled) setFavorites(JSON.parse(raw));
        } catch {}
        if (!cancelled) setHydrated(true);
      }
    }

    load();
    return () => { cancelled = true; };
  }, [status, isLoggedIn, session?.user?.id]);

  const persistLocal = useCallback((items: FavoriteRecipe[]) => {
    try { localStorage.setItem(KEY, JSON.stringify(items)); } catch {}
  }, []);

  const toggle = useCallback(async (recipe: Omit<FavoriteRecipe, "savedAt">) => {
    const exists = favorites.some(f => f.slug === recipe.slug);
    const next = exists
      ? favorites.filter(f => f.slug !== recipe.slug)
      : [...favorites, { ...recipe, id: recipe.slug, savedAt: Date.now() }];

    // Cập nhật state ngay lập tức — realtime
    setFavorites(next);

    if (isLoggedIn) {
      const res = await toggleFavoriteAction(recipe as FavoriteRecipeData);
      if (!res.ok) setFavorites(favorites); // rollback
    } else {
      persistLocal(next);
    }
  }, [favorites, isLoggedIn, persistLocal]);

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
