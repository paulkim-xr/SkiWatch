import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  Locale,
  defaultLocale,
  getLocalizedText,
  LocalizedText,
} from "@/lib/i18n/locales";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const STORAGE_KEY = "skiwatch-locale";

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

function getInitialLocale(): Locale {
  if (typeof window === "undefined") {
    return defaultLocale;
  }

  const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
  if (stored) {
    return stored;
  }

  const browserLocale = window.navigator.language.slice(0, 2);
  return ["ko", "en"].includes(browserLocale) ? (browserLocale as Locale) : defaultLocale;
}

export function LocaleProvider({ children }: PropsWithChildren) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
  }, []);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
    }),
    [locale, setLocale]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
}

export function useI18n() {
  const { locale, setLocale } = useLocale();

  const t = useCallback(
    (text: LocalizedText) => getLocalizedText(text, locale),
    [locale]
  );

  return {
    locale,
    setLocale,
    t,
  };
}
