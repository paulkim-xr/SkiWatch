import { useCallback, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "skiwatch-favorites";

function readInitial(): string[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((item) => typeof item === "string") : [];
  } catch {
    return [];
  }
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>(readInitial);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    } catch {
      /* noop */
    }
  }, [favorites]);

  const favoriteSet = useMemo(() => new Set(favorites), [favorites]);

  const addFavorite = useCallback((id: string) => {
    setFavorites((prev) => (prev.includes(id) ? prev : [...prev, id]));
  }, []);

  const removeFavorite = useCallback((id: string) => {
    setFavorites((prev) => prev.filter((item) => item !== id));
  }, []);

  const toggleFavorite = useCallback(
    (id: string) => {
      setFavorites((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
    },
    []
  );

  const setFavoritesOrder = useCallback((nextIds: string[]) => {
    setFavorites(nextIds.filter((id, index) => nextIds.indexOf(id) === index));
  }, []);

  return {
    favorites,
    favoriteSet,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    setFavoritesOrder,
  };
}
