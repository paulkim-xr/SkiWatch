import { percentToDegree, Difficulty, Slope } from "../Util";

// https://www.o2resort.com/SKI/slopeOpen.jsp

export const slopes: Slope[] = [
    {
        id: 0,
        name: {
            ko: "드림1",
            en: "DREAM1",
            ja: "ダウライム1"
        },
        difficulty: Difficulty.BEGINNER,
        length: 556,
        width: 92,
        elevation: 51,
        avgAngle: percentToDegree(9),
        maxAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: undefined,
        minAngle: undefined
    },

    {
        id: 1,
        name: {
            ko: "드림2",
            en: "DREAM2",
            ja: "ダウライム2"
        },
        difficulty: Difficulty.BEGINNER,
        length: 963,
        width: 48,
        elevation: 112,
        avgAngle: percentToDegree(12),
        maxAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: undefined,
        minAngle: undefined
    },

    {
        id: 2,
        name: {
            ko: "헤드",
            en: "HEAD",
            ja: "ハエダウ"
        },
        difficulty: Difficulty.INTERMEDIATE,
        length: 1155,
        width: 33,
        elevation: 178,
        avgAngle: percentToDegree(15),
        maxAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: undefined,
        minAngle: undefined
    },

    {
        id: 3,
        name: {
            ko: "해피",
            en: "HAPPY",
            ja: "ハアハイ"
        },
        difficulty: Difficulty.INTERMEDIATE,
        length: 2144,
        width: 31,
        elevation: 388,
        avgAngle: percentToDegree(18),
        maxAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: undefined,
        minAngle: undefined
    },

    {
        id: 4,
        name: {
            ko: "글로리1",
            en: "GLORY1",
            ja: "ガウルラオライ1"
        },
        difficulty: Difficulty.ADVANCED,
        length: 561,
        width: 33,
        elevation: 172,
        avgAngle: percentToDegree(31),
        maxAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: undefined,
        minAngle: undefined
    },

    {
        id: 5,
        name: {
            ko: "글로리2",
            en: "GLORY2",
            ja: "ガウルラオライ2"
        },
        difficulty: Difficulty.ADVANCED,
        length: 628,
        width: 83,
        elevation: 172,
        avgAngle: percentToDegree(27),
        maxAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: undefined,
        minAngle: undefined
    },

    {
        id: 6,
        name: {
            ko: "글로리3",
            en: "GLORY3",
            ja: "ガウルラオライ3"
        },
        difficulty: Difficulty.ADVANCED,
        length: 3256,
        width: 39,
        elevation: 526,
        avgAngle: percentToDegree(19),
        maxAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: undefined,
        minAngle: undefined
    },

    {
        id: 7,
        name: {
            ko: "패션1",
            en: "PASSION1",
            ja: "ハアサヨン1"
        },
        difficulty: Difficulty.EXPERT,
        length: 1057,
        width: 37,
        elevation: 380,
        avgAngle: percentToDegree(36),
        maxAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: undefined,
        minAngle: undefined
    },

    {
        id: 8,
        name: {
            ko: "패션2",
            en: "PASSION2",
            ja: "ハアサヨン2"
        },
        difficulty: Difficulty.EXPERT,
        length: 735,
        width: 37,
        elevation: 234,
        avgAngle: percentToDegree(32),
        maxAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: undefined,
        minAngle: undefined
    },

    {
        id: 9,
        name: {
            ko: "첼린지1",
            en: "CHALLENGE1",
            ja: "カエルラインチャイ1"
        },
        difficulty: Difficulty.EXPERT,
        length: 582,
        width: 41,
        elevation: 225,
        avgAngle: percentToDegree(32),
        maxAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: undefined,
        minAngle: undefined
    },

    {
        id: 10,
        name: {
            ko: "첼린지2",
            en: "CHALLENGE2",
            ja: "カエルラインチャイ2"
        },
        difficulty: Difficulty.EXPERT,
        length: 807,
        width: 39,
        elevation: 369,
        avgAngle: percentToDegree(41),
        maxAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: undefined,
        minAngle: undefined
    },

    {
        id: 11,
        name: {
            ko: "첼린지3",
            en: "CHALLENGE3",
            ja: "カエルラインチャイ3"
        },
        difficulty: Difficulty.EXPERT,
        length: 753,
        width: 51,
        elevation: 37,
        avgAngle: percentToDegree(40),
        maxAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: undefined,
        minAngle: undefined
    },

    {
        id: 12,
        name: {
            ko: "하프파이프",
            en: "Halfpipe",
            ja: "ハアハウハアジャイハウ"
        },
        difficulty: Difficulty.PARK,
        length: 345,
        width: 24,
        area: undefined,
        elevation: 82,
        minAngle: undefined,
        avgAngle: percentToDegree(24),
        maxAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: []
    }
]