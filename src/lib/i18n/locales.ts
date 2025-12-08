export const locales = ["ko", "en", "ja"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ko";

export type LocalizedText = Partial<Record<Locale, string>>;

export const localeLabels: Record<Locale, string> = {
  ko: "한국어",
  en: "English",
  ja: "日本語",
};

export function getLocalizedText(
  text: LocalizedText,
  locale: Locale,
  fallback: Locale = defaultLocale
): string {
  if (text[locale]) {
    return text[locale] as string;
  }

  if (text[fallback]) {
    return text[fallback] as string;
  }

  const first = Object.values(text).find(Boolean);
  return first ?? "";
}

export function createText(text: LocalizedText): LocalizedText {
  return text;
}
