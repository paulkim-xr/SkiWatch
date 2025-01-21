export enum StreamType {
    HLS,
    IFrame,
    External,
    Unavailable,
}

export type Resort = {
    name: Name;
    homepage: string;
    weather: string;
    lifts: Lift[];
    slopes: Slope[];
    streams: Stream[];
}

export type Lift = {
    id: number;
    name: Name;
    length: number; // m
    elevation: number | undefined;
    seats: number | undefined;
    cabinNum: number | undefined;
    speed: number | undefined; // m/s
    rideTime: number | undefined; // seconds
    capacity: number | undefined; // ppl/hour
    connectedSlopeIds: number[];
    connectedLiftIds: number[];
}

export type Slope = {
    id: number;
    name: Name;
    difficulty: Difficulty;
    length: number | undefined; // m
    width: number | undefined; // m
    area: number | undefined; //  m^2
    elevation: number | undefined; // m
    minAngle: number | undefined; // degree
    avgAngle: number | undefined; // degree
    maxAngle: number | undefined; // degree
    connectedSlopeIds: number[];
    connectedLiftIds: number[];
}

export enum Difficulty {
    BEGINNER, BE_IN, INTERMEDIATE, IN_AD, ADVANCED, EXPERT, PARK
}

export type Stream = {
    name: Name;
    type: StreamType;
    url: string;
}

export type Name = {
    ko: string;
    en: string;
}

export function degreeToPercent(degree: number) {
    return Math.tan(degree / 180 * Math.PI) * 100;
}

export function percentToDegree(percent: number) {
    return Math.atan(percent / 100) / Math.PI * 180;
}