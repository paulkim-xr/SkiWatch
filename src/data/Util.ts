export enum StreamType {
    HLS,
    IFrame,
    External,
    Unavailable,
}

export interface Resort {
    name: Name;
    weather: string;
    lifts: Lift[];
    slopes: Slope[];
    streams: Stream[];
}

export interface Lift {
    id: number;
    name: Name;
    length: number;
    seats: number | undefined;
    cabinNum: number | undefined;
    speed: number | undefined;
    capacity: number | undefined;
    connectedSlopeIds: number[];
    connectedLiftIds: number[] | undefined;
}

export interface Slope {
    id: number;
    name: Name;
    difficulty: Difficulty;
    length: number;
    width: number | undefined;
    avgAngle: number;
    maxAngle: number | undefined;
    connectedSlopeIds: number[] | undefined;
    connectedLiftIds: number[];
}

export enum Difficulty {
    BEGINNER, INTERMEDIATE, HARD
}

export interface Stream {
    name: Name;
    type: StreamType;
    url: string;
}

export interface Name {
    ko: string;
    en: string;
}