import { Difficulty, Slope } from "../Util"

// https://phoenixhnr.co.kr/static/pyeongchang/snowpark/slope-lift

export const slopes: Slope[] = [
    {
        id: 0,
        name: {
            ko: "스패로우",
            en: "Sparrow"
        },
        difficulty: Difficulty.BEGINNER,
        length: 978,
        width: undefined,
        elevation: 120,
        avgAngle: 6.98,
        maxAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: undefined,
        minAngle: undefined
    },
    {
        id: 1,
        name: {
            ko: "펭귄",
            en: "Penguin"
        },
        difficulty: Difficulty.BEGINNER,
        length: 665,
        width: undefined,
        elevation: 94,
        avgAngle: 8.33,
        maxAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: undefined,
        minAngle: undefined
    },
    {
        id: 2,
        name: {
            ko: "도도(강습전용)",
            en: "Dodo (Training Only)"
        },
        difficulty: Difficulty.BEGINNER,
        length: 350,
        width: undefined,
        elevation: 41,
        avgAngle: 6.68,
        maxAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: undefined,
        minAngle: undefined
    },
    {
        id: 3,
        name: {
            ko: "키위",
            en: "Kiwi"
        },
        difficulty: Difficulty.INTERMEDIATE,
        length: 550,
        width: undefined,
        elevation: 127.5,
        avgAngle: 13.0,
        maxAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: undefined,
        minAngle: undefined
    },
    {
        id: 4,
        name: {
            ko: "파노라마",
            en: "Panorama"
        },
        difficulty: Difficulty.INTERMEDIATE,
        length: 1450,
        width: undefined,
        elevation: 390,
        avgAngle: 9.97,
        maxAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: undefined,
        minAngle: undefined
    },
    {
        id: 5,
        name: {
            ko: "호크",
            en: "Hawk"
        },
        difficulty: Difficulty.INTERMEDIATE,
        length: 643,
        width: undefined,
        elevation: 128.35,
        avgAngle: 11.28,
        maxAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: undefined,
        minAngle: undefined
    },
    {
        id: 6,
        name: {
            ko: "밸리",
            en: "Valley"
        },
        difficulty: Difficulty.IN_AD,
        length: 1110,
        width: undefined,
        elevation: 294,
        avgAngle: 15.4,
        maxAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: undefined,
        minAngle: undefined
    },
    {
        id: 7,
        name: {
            ko: "듀크(이상호)",
            en: "Duke"
        },
        difficulty: Difficulty.IN_AD,
        length: 818,
        width: undefined,
        elevation: 216,
        avgAngle: 13.75,
        maxAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: undefined,
        minAngle: undefined
    },
    {
        id: 8,
        name: {
            ko: "슬로프스타일(SS/SBS)",
            en: "Slope Style (SS/SBS)"
        },
        difficulty: Difficulty.IN_AD,
        length: 602,
        width: undefined,
        elevation: 160.6,
        avgAngle: 14.93,
        maxAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: undefined,
        minAngle: undefined
    },
    {
        id: 9,
        name: {
            ko: "챔피온",
            en: "Champion"
        },
        difficulty: Difficulty.ADVANCED,
        length: 960,
        width: undefined,
        elevation: 277,
        avgAngle: 16.08,
        maxAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: undefined,
        minAngle: undefined
    },
    {
        id: 10,
        name: {
            ko: "환타지",
            en: "Fantasy"
        },
        difficulty: Difficulty.ADVANCED,
        length: 503,
        width: undefined,
        elevation: 89.5,
        avgAngle: 10.08,
        maxAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: undefined,
        minAngle: undefined
    },
    {
        id: 11,
        name: {
            ko: "디지",
            en: "Dizzy"
        },
        difficulty: Difficulty.EXPERT,
        length: 866,
        width: undefined,
        elevation: 238.7,
        avgAngle: 15.4,
        maxAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: undefined,
        minAngle: undefined
    },
    {
        id: 12,
        name: {
            ko: "모글",
            en: "Mogul"
        },
        difficulty: Difficulty.EXPERT,
        length: 319,
        width: undefined,
        elevation: 109.85,
        avgAngle: 19.0,
        maxAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: undefined,
        minAngle: undefined
    },
    {
        id: 13,
        name: {
            ko: "파라다이스",
            en: "Paradise"
        },
        difficulty: Difficulty.EXPERT,
        length: 912,
        width: undefined,
        elevation: 255.5,
        avgAngle: 15.65,
        maxAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: undefined,
        minAngle: undefined
    },
    {
        id: 14,
        name: {
            ko: "익스트림파크(상단)",
            en: "Extreme Park (Upper)"
        },
        difficulty: Difficulty.PARK,
        length: 765,
        width: undefined,
        elevation: 126,
        avgAngle: 9.35,
        maxAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: undefined,
        minAngle: undefined
    },
    {
        id: 15,
        name: {
            ko: "익스트림파크(하단)",
            en: "Extreme Park (Lower)"
        },
        difficulty: Difficulty.PARK,
        length: 765,
        width: undefined,
        elevation: 126,
        avgAngle: 9.35,
        maxAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: undefined,
        minAngle: undefined
    },
    {
        id: 16,
        name: {
            ko: "하프파이프",
            en: "Halfpipe"
        },
        difficulty: Difficulty.PARK,
        length: 168,
        width: undefined,
        elevation: 50.56,
        avgAngle: 16.73,
        maxAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: undefined,
        minAngle: undefined
    }
]