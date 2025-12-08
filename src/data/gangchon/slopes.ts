import { Difficulty, percentToDegree, Slope } from "../Util"

// https://www.elysian.co.kr/about-gangchon/sky#ski-resort-introduction
// http://riderspark.com/rp_bbs/elysian

export const slopes: Slope[] = [
    {
        id: 0,
        name: {
            ko: "팬더",
            en: "Panda",
            ja: "ハアンダオ"
        },
        difficulty: Difficulty.BEGINNER,
        length: 306,
        width: undefined,
        elevation: 116 - 95,
        maxAngle: undefined,
        avgAngle: percentToDegree(9),
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: undefined,
        minAngle: undefined
    },

    {
        id: 1,
        name: {
            ko: "래빗",
            en: "Rabbit",
            ja: "ラアバイス"
        },
        difficulty: Difficulty.BEGINNER,
        length: 436,
        width: undefined,
        elevation: 129 - 95,
        avgAngle: undefined,
        maxAngle: percentToDegree(13),
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: undefined,
        minAngle: undefined
    },

    {
        id: 2,
        name: {
            ko: "드래곤/래빗",
            en: "Dragon/Rabbit",
            ja: "ダウラアガオン/ラアバイス"
        },
        difficulty: Difficulty.INTERMEDIATE,
        length: 1500,
        width: undefined,
        elevation: 260 - 95,
        maxAngle: percentToDegree(23),
        avgAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: undefined,
        minAngle: undefined
    },

    {
        id: 3,
        name: {
            ko: "호스/제브라",
            en: "Horse/Zebra",
            ja: "ハオサウ/チャエバウラア"
        },
        difficulty: Difficulty.INTERMEDIATE,
        length: 1032,
        width: undefined,
        elevation: 260 - 95,
        maxAngle: percentToDegree(35),
        avgAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: undefined,
        minAngle: undefined
    },

    {
        id: 4,
        name: {
            ko: "호스/페가수스",
            en: "Horse/Pegasus",
            ja: "ハオサウ/ハエガアサウサウ"
        },
        difficulty: Difficulty.INTERMEDIATE,
        length: 1045,
        width: undefined,
        elevation: 260 - 88,
        maxAngle: percentToDegree(31),
        avgAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: undefined,
        minAngle: undefined
    },

    {
        id: 5,
        name: {
            ko: "디어",
            en: "Deer",
            ja: "ダイジャオ"
        },
        difficulty: Difficulty.INTERMEDIATE,
        length: 945,
        width: undefined,
        elevation: 260 - 88,
        maxAngle: percentToDegree(33),
        avgAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: undefined,
        minAngle: undefined
    },

    {
        id: 6,
        name: {
            ko: "퓨마",
            en: "Puma",
            ja: "ハユマア"
        },
        difficulty: Difficulty.INTERMEDIATE,
        length: 1175,
        width: undefined,
        elevation: 260 - 140,
        maxAngle: percentToDegree(16),
        avgAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: undefined,
        minAngle: undefined
    },

    {
        id: 7,
        name: {
            ko: "레퍼드",
            en: "Leopard",
            ja: "ラエハオダウ"
        },
        difficulty: Difficulty.ADVANCED,
        length: 518,
        width: undefined,
        elevation: 212 - 88,
        maxAngle: percentToDegree(52),
        avgAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: undefined,
        minAngle: undefined
    },

    {
        id: 8,
        name: {
            ko: "재규어",
            en: "Jaguar",
            ja: "チャアガユジャオ"
        },
        difficulty: Difficulty.ADVANCED,
        length: 524,
        width: undefined,
        elevation: undefined,
        maxAngle: percentToDegree(54),
        avgAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        area: undefined,
        minAngle: undefined
    },
];