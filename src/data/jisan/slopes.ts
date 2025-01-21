import { Difficulty, Slope } from "../Util"

// https://www.jisanresort.co.kr/w/ski/slopes/map.asp

export const slopes: Slope[] = [
    {
        id: 0,
        name: {
            ko: "1-1",
            en: "1-1"
        },
        difficulty: Difficulty.BEGINNER,
        length: 300,
        width: undefined,
        area: undefined,
        elevation: 42,
        minAngle: undefined,
        avgAngle: 5,
        maxAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [],
    },

    {
        id: 1,
        name: {
            ko: "1",
            en: "1"
        },
        difficulty: Difficulty.BEGINNER,
        length: 300,
        width: undefined,
        area: undefined,
        elevation: 44,
        minAngle: undefined,
        avgAngle: 7,
        maxAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [],
    },

    {
        id: 2,
        name: {
            ko: "2",
            en: "2"
        },
        difficulty: Difficulty.INTERMEDIATE,
        length: 700,
        width: undefined,
        area: undefined,
        elevation: 145,
        minAngle: undefined,
        avgAngle: 9,
        maxAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [],
    },

    {
        id: 3,
        name: {
            ko: "3",
            en: "3"
        },
        difficulty: Difficulty.INTERMEDIATE,
        length: 720,
        width: undefined,
        area: undefined,
        elevation: 145,
        minAngle: undefined,
        avgAngle: 9,
        maxAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [],
    },

    {
        id: 4,
        name: {
            ko: "5",
            en: "5"
        },
        difficulty: Difficulty.ADVANCED,
        length: 870,
        width: undefined,
        area: undefined,
        elevation: 209,
        minAngle: undefined,
        avgAngle: 21,
        maxAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [],
    },

    {
        id: 5,
        name: {
            ko: "6",
            en: "6"
        },
        difficulty: Difficulty.EXPERT,
        length: 900,
        width: undefined,
        area: undefined,
        elevation: 209,
        minAngle: undefined,
        avgAngle: 24,
        maxAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [],
    },

    {
        id: 6,
        name: {
            ko: "7",
            en: "7"
        },
        difficulty: Difficulty.IN_AD,
        length: 1200,
        width: undefined,
        area: undefined,
        elevation: 177,
        minAngle: undefined,
        avgAngle: 13,
        maxAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [],
    },
];