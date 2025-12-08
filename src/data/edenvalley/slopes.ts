import { Difficulty, percentToDegree, Slope } from "../Util"

// https://www.edenvalley.co.kr/ski/View.asp?location=01
// http://riderspark.com/rp_bbs/edenvalley

export const slopes: Slope[] = [
    {
        id: 0,
        name: {
            ko: "베이직",
            en: "Basic",
            ja: "バエジャイチャイク"
        },
        difficulty: Difficulty.BEGINNER,
        length: 587,
        width: 49,
        area: 34385,
        elevation: undefined,
        minAngle: undefined,
        avgAngle: percentToDegree(12.0),
        maxAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [
            0, 1, 2
        ],
    },

    {
        id: 1,
        name: {
            ko: "메인",
            en: "Main",
            ja: "マエジャイン"
        },
        difficulty: Difficulty.BEGINNER,
        length: 454,
        width: 45,
        area: 43162,
        elevation: undefined,
        minAngle: undefined,
        avgAngle: percentToDegree(10.0),
        maxAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [
            0, 1, 2
        ],
    },

    {
        id: 2,
        name: {
            ko: "쥬피터",
            en: "Jupiter",
            ja: "チャユハイパオ"
        },
        difficulty: Difficulty.INTERMEDIATE,
        length: 1023,
        width: 42,
        area: 25580,
        elevation: undefined,
        minAngle: undefined,
        avgAngle: percentToDegree(17.0),
        maxAngle: undefined,
        connectedSlopeIds: [
            1
        ],
        connectedLiftIds: [],
    },

    {
        id: 3,
        name: {
            ko: "새턴",
            en: "Saturn",
            ja: "サアパオン"
        },
        difficulty: Difficulty.INTERMEDIATE,
        length: 851,
        width: 49,
        area: 24999,
        elevation: undefined,
        minAngle: undefined,
        avgAngle: 12.4,
        maxAngle: undefined,
        connectedSlopeIds: [
            1
        ],
        connectedLiftIds: [],
    },

    {
        id: 4,
        name: {
            ko: "우라누스",
            en: "Uranus",
            ja: "ジャウラアナウサウ"
        },
        difficulty: Difficulty.INTERMEDIATE,
        length: 1495,
        width: 54,
        area: 56476,
        elevation: undefined,
        minAngle: undefined,
        avgAngle: percentToDegree(16.0),
        maxAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [
            0, 1, 2
        ],
    },

    {
        id: 5,
        name: {
            ko: "머큐리",
            en: "Mercury",
            ja: "マオタユライ"
        },
        difficulty: Difficulty.ADVANCED,
        length: 949,
        width: 50,
        area: 23402,
        elevation: undefined,
        minAngle: undefined,
        avgAngle: percentToDegree(27.0),
        maxAngle: undefined,
        connectedSlopeIds: [
            1
        ],
        connectedLiftIds: [],
    },

    {
        id: 6,
        name: {
            ko: "비너스",
            en: "Venus",
            ja: "バイナオサウ"
        },
        difficulty: Difficulty.ADVANCED,
        length: 862,
        width: 46,
        area: 18416,
        elevation: undefined,
        minAngle: undefined,
        avgAngle: percentToDegree(30.0),
        maxAngle: undefined,
        connectedSlopeIds: [
            1
        ],
        connectedLiftIds: [],
    },
];
