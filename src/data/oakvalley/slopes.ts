import { percentToDegree, Difficulty, Slope } from "../Util";

// https://oakvalley.co.kr/ski/introduction/slope
// http://riderspark.com/rp_bbs/oakvalley

export const slopes: Slope[] = [
    {
        id: 0,
        name: {
            ko: "A",
            en: "A",
            ja: "A"
        },
        difficulty: Difficulty.INTERMEDIATE,
        length: 1610,
        width: 52,
        elevation: 262,
        avgAngle: percentToDegree(16),
        maxAngle: percentToDegree(30),
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: 73314,
        minAngle: undefined
    },
    {
        id: 1,
        name: {
            ko: "B",
            en: "B",
            ja: "B"
        },
        difficulty: Difficulty.ADVANCED,
        length: 885,
        width: 49,
        elevation: 205,
        avgAngle: percentToDegree(23),
        maxAngle: percentToDegree(40),
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: 36317,
        minAngle: undefined
    },
    {
        id: 2,
        name: {
            ko: "C",
            en: "C",
            ja: "C"
        },
        difficulty: Difficulty.ADVANCED,
        length: 375,
        width: 46,
        elevation: 197,
        avgAngle: percentToDegree(32),
        maxAngle: percentToDegree(46),
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: 15691,
        minAngle: undefined
    },
    {
        id: 3,
        name: {
            ko: "D",
            en: "D",
            ja: "D"
        },
        difficulty: Difficulty.INTERMEDIATE,
        length: 885,
        width: 55,
        area: 46052,
        elevation: 230,
        minAngle: undefined,
        avgAngle: percentToDegree(29),
        maxAngle: percentToDegree(38),
        connectedSlopeIds: [],
        connectedLiftIds: []
    },
    {
        id: 4,
        name: {
            ko: "D-1",
            en: "D-1",
            ja: "D-1"
        },
        difficulty: Difficulty.INTERMEDIATE,
        length: 240,
        width: 45,
        elevation: 94,
        avgAngle: percentToDegree(27),
        maxAngle: percentToDegree(36),
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: 8727,
        minAngle: undefined
    },
    {
        id: 5,
        name: {
            ko: "E",
            en: "E",
            ja: "E"
        },
        difficulty: Difficulty.INTERMEDIATE,
        length: 485,
        width: 50,
        elevation: 120,
        avgAngle: percentToDegree(20),
        maxAngle: percentToDegree(31),
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: 5731,
        minAngle: undefined
    },
    {
        id: 6,
        name: {
            ko: "F",
            en: "F",
            ja: "F"
        },
        difficulty: Difficulty.INTERMEDIATE,
        length: 604,
        width: 49,
        elevation: 143,
        avgAngle: percentToDegree(25),
        maxAngle: percentToDegree(42),
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: 17134,
        minAngle: undefined
    },
    {
        id: 7,
        name: {
            ko: "G",
            en: "G",
            ja: "G"
        },
        difficulty: Difficulty.INTERMEDIATE,
        length: 724,
        width: 51,
        elevation: 171,
        avgAngle: percentToDegree(19),
        maxAngle: percentToDegree(29),
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: 28793,
        minAngle: undefined
    },
    {
        id: 8,
        name: {
            ko: "H",
            en: "H",
            ja: "H"
        },
        difficulty: Difficulty.BEGINNER,
        length: 625,
        width: 45,
        elevation: 99,
        avgAngle: percentToDegree(11),
        maxAngle: percentToDegree(25),
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: 30592,
        minAngle: undefined
    },

    {
        id: 9,
        name: {
            ko: "I",
            en: "I",
            ja: "I"
        },
        difficulty: Difficulty.BEGINNER,
        length: 550,
        width: 46,
        elevation: 49,
        avgAngle: percentToDegree(9),
        maxAngle: percentToDegree(16),
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: 21585,
        minAngle: undefined
    }
]