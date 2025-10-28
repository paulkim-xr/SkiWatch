import { Difficulty } from "@/data/Util";
import { LocalizedText, createText, Locale, getLocalizedText } from "./locales";

export const strings = {
  nav: {
    webcams: createText({ ko: "웹캠", en: "Webcams" }),
    slopes: createText({ ko: "슬로프", en: "Slopes" }),
  },
  themeToggle: {
    light: createText({ ko: "밝게", en: "Light" }),
    dark: createText({ ko: "어둡게", en: "Dark" }),
  },
  language: {
    label: createText({ ko: "언어", en: "Language" }),
  },
  player: {
    emptyTitle: createText({ ko: "선택된 영상이 없습니다", en: "No stream selected" }),
    emptyBody: createText({
      ko: "목록에서 보고 싶은 카메라를 선택하세요.",
      en: "Choose a camera from the list.",
    }),
  },
  sidebar: {
    collapse: createText({ ko: "접기", en: "Collapse" }),
    expand: createText({ ko: "보기", en: "Expand" }),
    weather: createText({ ko: "날씨", en: "Weather" }),
    newTab: createText({ ko: "새 탭", en: "New tab" }),
    externalTooltip: createText({
      ko: "이 카메라는 새 탭에서 열립니다.",
      en: "This camera opens in a new tab.",
    }),
    unavailable: createText({ ko: "준비중", en: "Unavailable" }),
    vivaldi: createText({ ko: "전용 플레이어", en: "Vivaldi player" }),
  },
  slopes: {
    title: createText({ ko: "슬로프 정보", en: "Slope details" }),
    description: createText({
      ko: "난이도, 각도, 길이와 같은 주요 지표를 정렬하고 필터링해 리조트별 슬로프를 비교하세요.",
      en: "Sort and filter key metrics like difficulty, angle, and length to compare runs across resorts.",
    }),
  },
  slopeTable: {
    headers: {
      resort: createText({ ko: "리조트", en: "Resort" }),
      name: createText({ ko: "이름", en: "Name" }),
      difficulty: createText({ ko: "난이도", en: "Difficulty" }),
      length: createText({ ko: "길이 (m)", en: "Length (m)" }),
      width: createText({ ko: "폭 (m)", en: "Width (m)" }),
      area: createText({ ko: "면적 (m²)", en: "Area (m²)" }),
      elevation: createText({ ko: "표고차 (m)", en: "Vertical (m)" }),
      minAngle: createText({ ko: "최소각도 (°)", en: "Min angle (°)" }),
      avgAngle: createText({ ko: "평균각도 (°)", en: "Avg angle (°)" }),
      maxAngle: createText({ ko: "최대각도 (°)", en: "Max angle (°)" }),
    },
    filters: {
      none: createText({ ko: "선택 안함", en: "All" }),
      min: createText({ ko: "최소", en: "Min" }),
      max: createText({ ko: "최대", en: "Max" }),
      search: createText({ ko: "검색...", en: "Search..." }),
    },
  },
};

export const difficultyLabels: Record<Difficulty, LocalizedText> = {
  [Difficulty.BEGINNER]: createText({ ko: "초급", en: "Beginner" }),
  [Difficulty.BE_IN]: createText({ ko: "초중급", en: "Lower intermediate" }),
  [Difficulty.INTERMEDIATE]: createText({ ko: "중급", en: "Intermediate" }),
  [Difficulty.IN_AD]: createText({ ko: "중상급", en: "Upper intermediate" }),
  [Difficulty.ADVANCED]: createText({ ko: "상급", en: "Advanced" }),
  [Difficulty.EXPERT]: createText({ ko: "최상급", en: "Expert" }),
  [Difficulty.PARK]: createText({ ko: "파크", en: "Park" }),
};

export function formatRangePlaceholder(label: LocalizedText, value: number | undefined, locale: Locale) {
  const base = getLocalizedText(label, locale);
  if (value === undefined) {
    return base;
  }
  return locale === "ko" ? `${base} (${value})` : `${base} (${value})`;
}

export function formatSearchPlaceholder(count: number, locale: Locale): string {
  return locale === "ko" ? `검색... (${count})` : `Search... (${count})`;
}
