import { Difficulty, Resort, StreamType, type Lift, type Slope, type Stream } from "@/data/Util";
import type { LocalizedText } from "@/lib/i18n/locales";

type JsonStreamType = "HLS" | "IFrame" | "External" | "Unavailable" | "Vivaldi";
type JsonDifficulty = "BEGINNER" | "BE_IN" | "INTERMEDIATE" | "IN_AD" | "ADVANCED" | "EXPERT" | "PARK";

export type JsonStream = Omit<Stream, "type"> & {
  type: JsonStreamType;
};

export type JsonSlope = Omit<Slope, "difficulty"> & {
  difficulty: JsonDifficulty;
};

export type JsonResort = Omit<Resort, "streams" | "slopes" | "lifts"> & {
  lifts: Lift[];
  slopes: JsonSlope[];
  streams: JsonStream[];
};

const streamTypeMap: Record<JsonStreamType, StreamType> = {
  HLS: StreamType.HLS,
  IFrame: StreamType.IFrame,
  External: StreamType.External,
  Unavailable: StreamType.Unavailable,
  Vivaldi: StreamType.Vivaldi,
};

const difficultyMap: Record<JsonDifficulty, Difficulty> = {
  BEGINNER: Difficulty.BEGINNER,
  BE_IN: Difficulty.BE_IN,
  INTERMEDIATE: Difficulty.INTERMEDIATE,
  IN_AD: Difficulty.IN_AD,
  ADVANCED: Difficulty.ADVANCED,
  EXPERT: Difficulty.EXPERT,
  PARK: Difficulty.PARK,
};

function isLocalizedText(value: unknown): value is LocalizedText {
  if (!value || typeof value !== "object") {
    return false;
  }
  return "ko" in value || "en" in value || "ja" in value;
}

function isJsonStreamType(value: unknown): value is JsonStreamType {
  return typeof value === "string" && value in streamTypeMap;
}

function isJsonDifficulty(value: unknown): value is JsonDifficulty {
  return typeof value === "string" && value in difficultyMap;
}

function normalizeLift(value: unknown): Lift | null {
  if (!value || typeof value !== "object") {
    return null;
  }
  const lift = value as Lift;
  if (typeof lift.id !== "number" || !isLocalizedText(lift.name) || !Array.isArray(lift.connectedSlopeIds) || !Array.isArray(lift.connectedLiftIds)) {
    return null;
  }
  return lift;
}

function normalizeSlope(value: unknown): Slope | null {
  if (!value || typeof value !== "object") {
    return null;
  }
  const slope = value as JsonSlope;
  if (
    typeof slope.id !== "number" ||
    !isLocalizedText(slope.name) ||
    !isJsonDifficulty(slope.difficulty) ||
    !Array.isArray(slope.connectedSlopeIds) ||
    !Array.isArray(slope.connectedLiftIds)
  ) {
    return null;
  }
  return {
    ...slope,
    difficulty: difficultyMap[slope.difficulty],
  };
}

function normalizeStream(value: unknown): Stream | null {
  if (!value || typeof value !== "object") {
    return null;
  }
  const stream = value as JsonStream;
  if (!isLocalizedText(stream.name) || !isJsonStreamType(stream.type) || typeof stream.url !== "string") {
    return null;
  }
  return {
    ...stream,
    type: streamTypeMap[stream.type],
  };
}

export function normalizeJsonResorts(value: unknown): Resort[] | null {
  if (!Array.isArray(value)) {
    return null;
  }

  const resorts = value
    .map((entry) => {
      if (!entry || typeof entry !== "object") {
        return null;
      }
      const resort = entry as JsonResort;
      if (
        !isLocalizedText(resort.name) ||
        typeof resort.homepage !== "string" ||
        typeof resort.weather !== "string" ||
        !Array.isArray(resort.lifts) ||
        !Array.isArray(resort.slopes) ||
        !Array.isArray(resort.streams)
      ) {
        return null;
      }

      const lifts = resort.lifts.map(normalizeLift);
      const slopes = resort.slopes.map(normalizeSlope);
      const streams = resort.streams.map(normalizeStream);
      if (lifts.some((lift) => !lift) || slopes.some((slope) => !slope) || streams.some((stream) => !stream)) {
        return null;
      }

      return {
        name: resort.name,
        homepage: resort.homepage,
        weather: resort.weather,
        lifts: lifts as Lift[],
        slopes: slopes as Slope[],
        streams: streams as Stream[],
      } satisfies Resort;
    })
    .filter(Boolean) as Resort[];

  return resorts.length > 0 ? resorts : null;
}

export function serializeResorts(resorts: Resort[]): JsonResort[] {
  return resorts.map((resort) => ({
    ...resort,
    slopes: resort.slopes.map((slope) => ({
      ...slope,
      difficulty: Difficulty[slope.difficulty] as JsonDifficulty,
    })),
    streams: resort.streams.map((stream) => ({
      ...stream,
      type: StreamType[stream.type] as JsonStreamType,
    })),
  }));
}
