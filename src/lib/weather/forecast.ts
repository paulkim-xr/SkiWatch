type KmaItem = {
  category: string;
  fcstValue: string;
  fcstDate: string;
  fcstTime: string;
};

export type WeatherCondition = "clear" | "cloudy" | "overcast" | "rain" | "snow" | "mixed" | "unknown";

export type ForecastSlot = {
  key: string;
  date: string;
  time: string;
  temperature?: number;
  precipitationType?: number;
  precipitationProbability?: number;
  precipitation?: number;
  precipitationRain?: number;
  precipitationSnow?: number;
  humidity?: number;
  sky?: number;
  windSpeed?: number;
  condition: WeatherCondition;
};

export type WeatherSummary = {
  condition: WeatherCondition;
  label: string;
  temperature?: number;
  humidity?: number;
  windSpeed?: number;
  precipitationText?: string;
  observedAt?: string;
};

export type WeatherResult = {
  summary: WeatherSummary;
  hourly: ForecastSlot[];
  raw: unknown;
};

const ZERO_LIKE_VALUES = new Set(["-", "0", "0.0", "강수없음", "적설없음", "강수 없음", "적설 없음"]);
const SNOW_MM_PER_CM = 10;

const CONDITION_LABELS: Record<WeatherCondition, string> = {
  clear: "Clear",
  cloudy: "Cloudy",
  overcast: "Overcast",
  rain: "Rain",
  snow: "Snow",
  mixed: "Rain/Snow",
  unknown: "—",
};

function getCondition(pty?: number, sky?: number): WeatherCondition {
  if (pty !== undefined && pty > 0) {
    if (pty === 1 || pty === 4 || pty === 5 || pty === 6) {
      return "rain";
    }
    if (pty === 3 || pty === 7) {
      return "snow";
    }
    return "mixed";
  }
  if (sky === 1) return "clear";
  if (sky === 3) return "cloudy";
  if (sky === 4) return "overcast";
  return "unknown";
}

function getPrecipitationText(pty?: number) {
  if (pty === undefined || pty === 0) return undefined;
  if (pty === 1) return "Rain";
  if (pty === 2) return "Rain/Snow";
  if (pty === 3) return "Snow";
  if (pty === 4) return "Shower";
  if (pty === 5) return "Drizzle";
  if (pty === 6) return "Freezing Rain";
  if (pty === 7) return "Snow";
  return "Precipitation";
}

function toSlotKey(item: KmaItem) {
  return `${item.fcstDate}${item.fcstTime}`;
}

function normalizeItems(items: KmaItem[]): ForecastSlot[] {
  const map = new Map<string, ForecastSlot>();
  items.forEach((item) => {
    const key = toSlotKey(item);
    const slot = map.get(key) ?? {
      key,
      date: item.fcstDate,
      time: item.fcstTime,
      condition: "unknown" as WeatherCondition,
    };
    const value = toNumber(item.fcstValue);
    switch (item.category) {
      case "T1H":
      case "TMP":
        slot.temperature = value;
        break;
      case "PTY":
        slot.precipitationType = value !== undefined ? Math.round(value) : undefined;
        break;
      case "SKY":
        slot.sky = value !== undefined ? Math.round(value) : undefined;
        break;
      case "REH":
        slot.humidity = value;
        break;
      case "POP":
        slot.precipitationProbability = clampPercentage(value);
        break;
      case "RN1":
      case "PCP": {
        const precipitation = toPrecipitation(item.fcstValue);
        if (precipitation !== undefined) {
          slot.precipitationRain = precipitation;
        }
        break;
      }
      case "SNO": {
        const snow = toPrecipitation(item.fcstValue);
        if (snow !== undefined) {
          slot.precipitationSnow = snow;
          if (snow > 0 && (!slot.precipitationType || slot.precipitationType === 0)) {
            slot.precipitationType = 3;
          }
        }
        break;
      }
      case "WSD":
        slot.windSpeed = value;
        break;
      default:
        break;
    }
    const rain = slot.precipitationRain ?? 0;
    const snow = slot.precipitationSnow ?? 0;
    if (slot.precipitationRain !== undefined || slot.precipitationSnow !== undefined) {
      slot.precipitation = rain + snow * SNOW_MM_PER_CM;
    }
    slot.condition = getCondition(slot.precipitationType, slot.sky);
    map.set(key, slot);
  });
  return Array.from(map.values()).sort((a, b) => (a.key > b.key ? 1 : -1));
}

function normalizeRawItem(item: any): KmaItem | null {
  if (!item) return null;
  const category = item.category ?? item.Category;
  const fcstValue =
    item.fcstValue ?? item.fcstvalue ?? item.FcstValue ?? item.obsrValue ?? item.obsrvalue ?? item.ObsrValue;
  const fcstDate =
    item.fcstDate ?? item.fcstdate ?? item.FcstDate ?? item.baseDate ?? item.base_date ?? item.BaseDate;
  const fcstTime =
    item.fcstTime ?? item.fcsttime ?? item.FcstTime ?? item.baseTime ?? item.base_time ?? item.BaseTime;

  if (!category || fcstValue === undefined || !fcstDate || !fcstTime) {
    return null;
  }

  return {
    category: String(category),
    fcstValue: String(fcstValue),
    fcstDate: String(fcstDate),
    fcstTime: String(fcstTime),
  };
}

function extractItems(data: any): KmaItem[] {
  if (!data) return [];
  const response = data.response ?? data.Response ?? data;
  const body = response?.body;
  const items = body?.items?.item ?? body?.Items?.Item ?? [];
  if (Array.isArray(items)) {
    return (items as any[])
      .map(normalizeRawItem)
      .filter(Boolean) as KmaItem[];
  }
  return [];
}

export function parseWeatherResponse(payload: any): WeatherResult {
  const items = extractItems(payload);
  const slots = normalizeItems(items);
  const firstSlot = slots[0];
  const precipitationText = getPrecipitationText(firstSlot?.precipitationType);
  const summary: WeatherSummary = {
    condition: firstSlot?.condition ?? "unknown",
    label: CONDITION_LABELS[firstSlot?.condition ?? "unknown"],
    temperature: firstSlot?.temperature,
    humidity: firstSlot?.humidity,
    windSpeed: firstSlot?.windSpeed,
    precipitationText,
    observedAt: firstSlot ? `${firstSlot.date} ${firstSlot.time}` : undefined,
  };

  return {
    summary,
    hourly: slots,
    raw: payload,
  };
}

export function formatKstSlot(slot: ForecastSlot) {
  const time = slot.time;
  if (!time) return "";
  const hours = time.slice(0, 2);
  const minutes = time.slice(2, 4);
  return `${hours}:${minutes}`;
}

export function conditionLabel(condition: WeatherCondition) {
  return CONDITION_LABELS[condition];
}

function toNumber(value: string | undefined) {
  if (value === undefined || value === null) return undefined;
  const trimmed = String(value).trim();
  if (!trimmed || trimmed === "-" || trimmed.toLowerCase() === "null") {
    return undefined;
  }
  if (trimmed.includes("미만")) {
    const match = trimmed.match(/-?\d+(?:\.\d+)?/);
    if (match) {
      const parsed = Number(match[0]);
      if (Number.isNaN(parsed)) {
        return undefined;
      }
      return Number((parsed / 2).toFixed(1));
    }
  }
  const directNumber = trimmed.match(/^-?\d+(?:\.\d+)?$/);
  if (directNumber) {
    return Number(directNumber[0]);
  }

  const rangeMatch = trimmed.match(/(-?\d+(?:\.\d+)?)[^\d.\-+]+(-?\d+(?:\.\d+)?)/);
  if (rangeMatch) {
    const first = Number(rangeMatch[1]);
    const second = Number(rangeMatch[2]);
    if (!Number.isNaN(first) && !Number.isNaN(second)) {
      const avg = (first + second) / 2;
      return Number(avg.toFixed(1));
    }
  }
  const match = trimmed.match(/-?\d+(?:\.\d+)?/);
  if (!match) return undefined;
  const parsed = Number(match[0]);
  return Number.isNaN(parsed) ? undefined : parsed;
}

function toPrecipitation(value: string | undefined) {
  if (value === undefined || value === null) return undefined;
  const trimmed = String(value).trim();
  if (!trimmed) return undefined;
  if (ZERO_LIKE_VALUES.has(trimmed)) {
    return 0;
  }
  const parsed = toNumber(trimmed);
  if (parsed !== undefined) {
    return parsed < 0 ? 0 : parsed;
  }
  return undefined;
}

function clampPercentage(value: number | undefined) {
  if (value === undefined || Number.isNaN(value)) return undefined;
  if (value < 0) return 0;
  if (value > 100) return 100;
  return value;
}
