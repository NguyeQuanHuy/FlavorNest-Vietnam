"use client";

import { useState, useEffect, useCallback } from "react";
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

const KEY = "fn_favorites";

export function useFavorites() {
  const { data: session, status } = useSession();
  const isLoggedIn = status === "authenticated" && !!session?.user?.id;

  const [favorites, setFavorites] = useState<FavoriteRecipe[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // ── Load từ DB hoặc localStorage tuỳ theo trạng thái login ──
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
            const toMigrate = localFavs.filter((f) => !dbSlugs.has(f.slug));
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
        // Chưa login → localStorage + lắng nghe thay đổi realtime
        try {
          const raw = localStorage.getItem(KEY);
          if (raw && !cancelled) setFavorites(JSON.parse(raw));
        } catch {}
        if (!cancelled) setHydrated(true);

        // Sync badge khi component khác thay đổi localStorage
        const onStorage = (e: StorageEvent) => {
          if (e.key !== KEY) return;
          try {
            setFavorites(e.newValue ? JSON.parse(e.newValue) : []);
          } catch {}
        };
        window.addEventListener("storage", onStorage);
        return () => window.removeEventListener("storage", onStorage);
      }
    }

    load();
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, isLoggedIn, session?.user?.id]);

  const mounted = hydrated;

  const persistLocal = useCallback((items: FavoriteRecipe[]) => {
      try {
        localStorage.setItem(KEY, JSON.stringify(items));
        window.dispatchEvent(new StorageEvent("storage", { key: KEY, newValue: JSON.stringify(items) }));
      } catch {}
    }, []);

  // ── Toggle (add/remove) ──
  const toggle = useCallback(
    async (recipe: Omit<FavoriteRecipe, "savedAt">) => {
      const exists = favorites.some((f) => f.slug === recipe.slug);

      // Optimistic update
      const next = exists
        ? favorites.filter((f) => f.slug !== recipe.slug)
        : [
          ...favorites,
          { ...recipe, id: recipe.slug, savedAt: Date.now() },
        ];
      setFavorites(next);

      if (isLoggedIn) {
        const data: FavoriteRecipeData = {
          slug: recipe.slug,
          title: recipe.title,
          image: recipe.image,
          category: recipe.category,
          cookTime: recipe.cookTime,
          subtitle: recipe.subtitle,
          difficulty: recipe.difficulty,
        };
        const res = await toggleFavoriteAction(data);
        if (!res.ok) {
          // rollback nếu DB lỗi
          setFavorites(favorites);
        }
      } else {
        persistLocal(next);
      }
    },
    [favorites, isLoggedIn, persistLocal]
  );

  const toggleFavorite = toggle;

  const isFavorite = useCallback(
    (slug: string) => favorites.some((f) => f.slug === slug),
    [favorites]
  );

  const isFavorited = isFavorite;

  const removeFavorite = useCallback(
    async (idOrSlug: string) => {
      const target = favorites.find(
        (f) => f.id === idOrSlug || f.slug === idOrSlug
      );
      if (!target) return;

      const next = favorites.filter((f) => f.id !== target.id);
      setFavorites(next);

      if (isLoggedIn) {
        const res = await removeFavoriteAction(target.slug);
        if (!res.ok) setFavorites(favorites);
      } else {
        persistLocal(next);
      }
    },
    [favorites, isLoggedIn, persistLocal]
  );

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
