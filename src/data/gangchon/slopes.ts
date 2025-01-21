import { Difficulty, percentToDegree, Slope } from "../Util"

// https://www.elysian.co.kr/about-gangchon/sky#ski-resort-introduction
// http://riderspark.com/rp_bbs/elysian

export const slopes: Slope[] = [
    {
        id: 0,
        name: {
            ko: "팬더",
            en: "Panda"
        },
        difficulty: Difficulty.BEGINNER,
        length: 306,
        width: undefined,
        elevation: 116 - 95,
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
            ko: "래빗",
            en: "Rabbit"
        },
        difficulty: Difficulty.BEGINNER,
        length: 436,
        width: undefined,
        elevation: 129 - 95,
        avgAngle: percentToDegree(13),
        maxAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: undefined,
        minAngle: undefined
    },

    {
        id: 2,
        name: {
            ko: "드래곤/래빗",
            en: "Dragon/Rabbit"
        },
        difficulty: Difficulty.INTERMEDIATE,
        length: 1500,
        width: undefined,
        elevation: 260 - 95,
        avgAngle: percentToDegree(23),
        maxAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: undefined,
        minAngle: undefined
    },

    {
        id: 3,
        name: {
            ko: "호스/제브라",
            en: "Horse/Zebra"
        },
        difficulty: Difficulty.INTERMEDIATE,
        length: 1032,
        width: undefined,
        elevation: 260 - 95,
        avgAngle: percentToDegree(35),
        maxAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: undefined,
        minAngle: undefined
    },

    {
        id: 4,
        name: {
            ko: "호스/페가수스",
            en: "Horse/Pegasus"
        },
        difficulty: Difficulty.INTERMEDIATE,
        length: 1045,
        width: undefined,
        elevation: 260 - 88,
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
            ko: "디어",
            en: "Deer"
        },
        difficulty: Difficulty.INTERMEDIATE,
        length: 945,
        width: undefined,
        elevation: 260 - 88,
        avgAngle: percentToDegree(33),
        maxAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: undefined,
        minAngle: undefined
    },

    {
        id: 6,
        name: {
            ko: "퓨마",
            en: "Puma"
        },
        difficulty: Difficulty.INTERMEDIATE,
        length: 1175,
        width: undefined,
        elevation: 260 - 140,
        avgAngle: percentToDegree(16),
        maxAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: undefined,
        minAngle: undefined
    },

    {
        id: 7,
        name: {
            ko: "레퍼드",
            en: "Leopard"
        },
        difficulty: Difficulty.ADVANCED,
        length: 518,
        width: undefined,
        elevation: 212 - 88,
        avgAngle: percentToDegree(52),
        maxAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: undefined,
        minAngle: undefined
    },

    {
        id: 8,
        name: {
            ko: "재규어",
            en: "Jaguar"
        },
        difficulty: Difficulty.ADVANCED,
        length: 524,
        width: undefined,
        elevation: undefined,
        avgAngle: percentToDegree(54),
        maxAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: undefined,
        minAngle: undefined
    },
];