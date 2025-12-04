import { Difficulty } from "@/data/Util";
import { LocalizedText, createText, Locale, getLocalizedText } from "./locales";

export const strings = {
  nav: {
    webcams: createText({ ko: "웹캠", en: "Webcams" }),
    slopes: createText({ ko: "슬로프", en: "Slopes" }),
    resorts: createText({ ko: "리조트", en: "Resorts" }),
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
    capture: createText({ ko: "캡처", en: "Capture" }),
    captureSaving: createText({ ko: "저장 중…", en: "Saving…" }),
    captureError: createText({ ko: "캡처를 사용할 수 없습니다", en: "Capture unavailable" }),
  },
  sidebar: {
    collapse: createText({ ko: "접기", en: "Collapse" }),
    expand: createText({ ko: "보기", en: "Expand" }),
    weather: createText({ ko: "날씨", en: "Weather" }),
    details: createText({ ko: "리조트 정보", en: "Resort details" }),
    newTab: createText({ ko: "새 탭", en: "New tab" }),
    externalTooltip: createText({
      ko: "이 카메라는 새 탭에서 열립니다.",
      en: "This camera opens in a new tab.",
    }),
    unavailable: createText({ ko: "준비중", en: "Unavailable" }),
    vivaldi: createText({ ko: "전용 플레이어", en: "Vivaldi player" }),
    favorites: createText({ ko: "즐겨찾기", en: "Favorites" }),
    favoriteAdd: createText({ ko: "즐겨찾기에 추가", en: "Add to favorites" }),
    favoriteRemove: createText({ ko: "즐겨찾기에서 제거", en: "Remove from favorites" }),
    favoriteReorder: createText({ ko: "즐겨찾기 순서 변경", en: "Reorder favorites" }),
  },
  analyticsConsent: {
    message: createText({
      ko: "이 사이트는 이용 행태를 파악하기 위해 Vercel에서 제공하는 분석 도구를 사용하며, 이 과정에서 1년간 유지되는 1차 쿠키가 저장됩니다. 언제든지 동의를 변경할 수 있습니다.",
      en: "We use a privacy-friendly analytics tool hosted by Vercel to understand how the site is used. This stores a first-party cookie for up to one year, and you can change your choice at any time.",
    }),
    allow: createText({ ko: "분석 허용", en: "Allow analytics" }),
    decline: createText({ ko: "거부", en: "Decline" }),
    close: createText({ ko: "닫기", en: "Close" }),
    settings: createText({ ko: "개인정보 설정", en: "Privacy settings" }),
  },
  notices: {
    title: createText({ ko: "알림 및 출처", en: "Notices & Credits" }),
    dataSources: createText({ ko: "데이터 출처", en: "Data sources" }),
    credits: createText({ ko: "사용한 라이브러리", en: "Libraries & tools" }),
    version: createText({ ko: "버전", en: "Version" }),
    builtWithLove: createText({ ko: "함께 만들어갑니다", en: "Built for riders" }),
  },
  slopes: {
    title: createText({ ko: "슬로프 정보", en: "Slope details" }),
    description: createText({
      ko: "모든 슬로프 데이터는 각 리조트에서 제공한 공식 자료를 기준으로 정리했습니다.",
      en: "All slope details are organized directly from each resort’s official data.",
    }),
    filterDifficulty: createText({ ko: "난이도", en: "Difficulty" }),
    filterResort: createText({ ko: "리조트", en: "Resort" }),
    allResorts: createText({ ko: "전체", en: "All resorts" }),
  },
  slopeTable: {
    headers: {
      resort: createText({ ko: "리조트", en: "Resort" }),
      name: createText({ ko: "이름", en: "Name" }),
      difficulty: createText({ ko: "난이도", en: "Difficulty" }),
      length: createText({ ko: "길이 (m)", en: "Length (m)" }),
      vertical: createText({ ko: "표고차 (m)", en: "Vertical (m)" }),
      avgGradient: createText({ ko: "평균 경사 (°)", en: "Avg slope (°)" }),
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
  seo: {
    webcamsTitle: createText({ ko: "실시간 웹캠", en: "Live Webcams" }),
    webcamsDescription: createText({
      ko: "한국 주요 스키장의 실시간 웹캠, 날씨, 리프트 정보를 한 화면에서 살펴보세요.",
      en: "Watch every major Korean ski resort in real time with curated webcams, weather links, and lift context.",
    }),
    slopesTitle: createText({ ko: "슬로프 데이터 탐색", en: "Slope Data Explorer" }),
    slopesDescription: createText({
      ko: "길이, 경사, 난이도 지표를 정렬해 리조트별 슬로프 특성을 비교하고 계획을 세우세요.",
      en: "Sort angle, distance, and difficulty metrics to compare ski runs across resorts before you visit.",
    }),
  },
  resortPage: {
    heading: createText({ ko: "리조트 개요", en: "Resort overview" }),
    webcams: createText({ ko: "웹캠", en: "Live webcams" }),
    weather: createText({ ko: "실시간 날씨", en: "Weather" }),
    slopes: createText({ ko: "슬로프", en: "Slope data" }),
    runs: createText({ ko: "코스", en: "runs" }),
    officialSite: createText({ ko: "공식 홈페이지", en: "Official site" }),
    externalWebcam: createText({ ko: "일부 카메라는 새 탭에서 열립니다.", en: "Some cameras open in a new tab." }),
    listTitle: createText({ ko: "모든 리조트", en: "All resorts" }),
    listDescription: createText({
      ko: "리조트를 선택해 날씨, 웹캠, 슬로프 정보를 한곳에서 확인하세요.",
      en: "Pick a resort to see live weather, webcams, and slope data in one place.",
    }),
    weatherLoading: createText({ ko: "날씨 정보를 불러오는 중…", en: "Loading weather…" }),
    weatherError: createText({ ko: "날씨 정보를 불러올 수 없습니다", en: "Weather data unavailable" }),
    refresh: createText({ ko: "새로고침", en: "Refresh" }),
    forecastPrevPage: createText({ ko: "이전", en: "Previous" }),
    forecastNextPage: createText({ ko: "다음", en: "Next" }),
    forecastPageLabel: createText({ ko: "페이지", en: "Page" }),
    retry: createText({ ko: "다시 시도", en: "Retry" }),
    weatherUpdating: createText({
      ko: "날씨 데이터를 업데이트 중입니다. 잠시 후 다시 시도해 주세요.",
      en: "Weather data is still updating. Please try again shortly.",
    }),
    currentConditions: createText({ ko: "현재 상태", en: "Current conditions" }),
    observedAt: createText({ ko: "업데이트", en: "Updated" }),
    humidity: createText({ ko: "습도", en: "Humidity" }),
    wind: createText({ ko: "풍속", en: "Wind" }),
    precip: createText({ ko: "강수", en: "Precip" }),
    precipAmount: createText({ ko: "강수량", en: "Precip (mm)" }),
    rain: createText({ ko: "비", en: "Rain" }),
    snow: createText({ ko: "눈", en: "Snow" }),
    date: createText({ ko: "날짜", en: "Date" }),
    time: createText({ ko: "시간", en: "Time" }),
    condition: createText({ ko: "상태", en: "Condition" }),
    temperature: createText({ ko: "기온", en: "Temp" }),
    precipChance: createText({ ko: "강수확률", en: "Precip (%)" }),
    historyTrend: createText({ ko: "48시간 추세", en: "48h trend" }),
    historyPrecip: createText({ ko: "강수량", en: "Precip" }),
    maxTempLabel: createText({ ko: "최고기온", en: "Max temp" }),
    minTempLabel: createText({ ko: "최저기온", en: "Min temp" }),
    rainChance: createText({ ko: "강수 확률", en: "Rain chance" }),
    snowChance: createText({ ko: "강설 확률", en: "Snow chance" }),
    periodAm: createText({ ko: "오전", en: "AM" }),
    periodPm: createText({ ko: "오후", en: "PM" }),
    fullWeather: createText({ ko: "상세 날씨", en: "Full weather" }),
    viewFullWeather: createText({ ko: "전체 날씨 보기", en: "View full weather" }),
    backToResort: createText({ ko: "리조트로 돌아가기", en: "Back to resort" }),
    weatherHeroDescription: createText({
      ko: "리조트 최근 날씨와 예보를 확인하세요.",
      en: "Check resort latest weather log and forecast.",
    }),
    weatherSectionNav: createText({ ko: "날씨 섹션", en: "Weather sections" }),
    officialForecastLink: createText({ ko: "기상청 상세예보", en: "Official KMA forecast" }),
    past48h: createText({ ko: "지난 48시간", en: "Past 48h" }),
    historyMetrics: createText({ ko: "요약", en: "Summary" }),
    recentObservations: createText({ ko: "최근 관측", en: "Recent observations" }),
    nearTermForecast: createText({ ko: "단기 예보", en: "Near-term forecast" }),
    upcoming48Digest: createText({ ko: "48시간 예보 요약", en: "Upcoming 48h digest" }),
    hourlyDetails: createText({ ko: "시간별 날씨 정보", en: "Hourly weather info" }),
    extendedForecast: createText({ ko: "중기 전망", en: "Extended outlook" }),
    dailyTrend: createText({ ko: "일별 최저·최고 추세", en: "Daily min/max trend" }),
    past6h: createText({ ko: "지난 6시간", en: "Past 6h" }),
    next6h: createText({ ko: "6시간 예보", en: "Next 6h" }),
    precipitationTotal: createText({ ko: "강수 합계", en: "Precip total" }),
    snowTotal: createText({ ko: "적설 합계", en: "Snow total" }),
    rainTotal: createText({ ko: "비 합계", en: "Rain total" }),
    maxWind: createText({ ko: "최대 풍속", en: "Max wind" }),
    viewMoreHistory: createText({ ko: "관측 더 보기", en: "Show more observations" }),
    conditions: {
      clear: createText({ ko: "맑음", en: "Clear" }),
      cloudy: createText({ ko: "구름", en: "Cloudy" }),
      overcast: createText({ ko: "흐림", en: "Overcast" }),
      rain: createText({ ko: "비", en: "Rain" }),
      snow: createText({ ko: "눈", en: "Snow" }),
      mixed: createText({ ko: "비/눈", en: "Mixed" }),
      unknown: createText({ ko: "-", en: "—" }),
    },
    airQuality: {
      title: createText({ ko: "대기질", en: "Air quality" }),
      pm10: createText({ ko: "미세먼지", en: "Fine dust" }),
      pm25: createText({ ko: "초미세먼지", en: "Ultrafine dust" }),
      weekly: createText({ ko: "주간 전망", en: "Weekly outlook" }),
      good: createText({ ko: "좋음", en: "Good" }),
      moderate: createText({ ko: "보통", en: "Moderate" }),
      bad: createText({ ko: "나쁨", en: "Bad" }),
      veryBad: createText({ ko: "매우 나쁨", en: "Very bad" }),
      updated: createText({ ko: "발표", en: "Issued" }),
      forecastDate: createText({ ko: "예보일", en: "Forecast" }),
      noData: createText({ ko: "대기질 정보를 불러올 수 없습니다", en: "Air-quality data unavailable" }),
    },
  },
  attribution: {
    weather: createText({
      ko: "기상자료 제공: 기상청 / 공공데이터포털 (공공누리 제1유형)",
      en: "Weather data provided by KMA / Public Data Portal (KOGL Type 1)",
    }),
    linkLabel: createText({ ko: "공공누리 라이선스 안내", en: "KOGL License" }),
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

export function formatResortPageTitle(resortName: string, locale: Locale): string {
  const suffix = getLocalizedText(strings.resortPage.heading, locale);
  return `${resortName} ${suffix}`.trim();
}

export function formatResortPageDescription(resortName: string, locale: Locale): string {
  if (locale === "ko") {
    return `${resortName}의 실시간 웹캠, 날씨, 슬로프 데이터를 한곳에서 확인하세요.`;
  }
  return `See live weather, webcams, and slope data for ${resortName}.`;
}
