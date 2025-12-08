import { Lift } from "../Util";

// https://www.o2resort.com/SKI/liftInfo.jsp

export const lifts: Lift[] = [
    {
        id: 0,
        name: {
            ko: "애플",
            en: "Apple",
            ja: "ジャアハウル"
        },
        length: 615,
        seats: 4,
        cabinNum: undefined,
        speed: undefined,
        capacity: 2400,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        rideTime: 220,
        elevation: undefined
    },

    {
        id: 1,
        name: {
            ko: "체리",
            en: "Cherry",
            ja: "カエライ"
        },
        length: 1030,
        seats: 6,
        cabinNum: undefined,
        speed: undefined,
        capacity: 3085,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        rideTime: 360,
        elevation: undefined
    },

    {
        id: 2,
        name: {
            ko: "오렌지",
            en: "Orange",
            ja: "ジャオラエンチャイ"
        },
        length: 526,
        seats: 8,
        cabinNum: undefined,
        speed: undefined,
        capacity: 3600,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        rideTime: 180,
        elevation: undefined
    },

    {
        id: 3,
        name: {
            ko: "토마토",
            en: "Tomato",
            ja: "パオマアパオ"
        },
        length: 865,
        seats: 6,
        cabinNum: undefined,
        speed: undefined,
        capacity: 3085,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        rideTime: 300,
        elevation: undefined
    },

    {
        id: 4,
        name: {
            ko: "스위트셔틀",
            en: "Sweet Shuttle",
            ja: "サウジャウィパウサヨパウル"
        },
        length: 2161,
        seats: 8,
        cabinNum: undefined,
        speed: undefined,
        capacity: 2400,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        rideTime: 630,
        elevation: undefined
    },
]