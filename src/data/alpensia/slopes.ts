import { Difficulty, percentToDegree, Slope } from "../Util"

// https://www.alpensia.com/ski/introduction-slope.do

export const slopes: Slope[] = [
    {
        id: 0,
        name: {
            ko: "알파",
            en: "Alpha"
        },
        difficulty: Difficulty.BEGINNER,
        length: 648,
        width: undefined,
        area: 32481,
        elevation: 78,
        minAngle: undefined,
        avgAngle: percentToDegree(6.9),
        maxAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [
            0
        ],
    },

    {
        id: 1,
        name: {
            ko: "브라보",
            en: "Bravo"
        },
        difficulty: Difficulty.ADVANCED,
        length: 1351,
        width: undefined,
        area: 49115,
        elevation: 194,
        minAngle: undefined,
        avgAngle: percentToDegree(8.6),
        maxAngle: undefined,
        connectedSlopeIds: [
            0
        ],
        connectedLiftIds: [
            1, 2
        ],
    },

    {
        id: 2,
        name: {
            ko: "찰리",
            en: "Charlie"
        },
        difficulty: Difficulty.EXPERT,
        length: 374,
        width: undefined,
        area: 13794,
        elevation: 194,
        minAngle: undefined,
        avgAngle: percentToDegree(21.1),
        maxAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [
            1, 2
        ],
    },

    {
        id: 3,
        name: {
            ko: "델타",
            en: "Delta"
        },
        difficulty: Difficulty.ADVANCED,
        length: 634,
        width: undefined,
        area: 12990,
        elevation: 170,
        minAngle: undefined,
        avgAngle: percentToDegree(16.5),
        maxAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [
            1, 2
        ],
    },

    {
        id: 4,
        name: {
            ko: "에코",
            en: "Echo"
        },
        difficulty: Difficulty.ADVANCED,
        length: 762,
        width: undefined,
        area: 43110,
        elevation: 194,
        minAngle: undefined,
        avgAngle: percentToDegree(15.9),
        maxAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [
            1, 2
        ],
    },

    {
        id: 5,
        name: {
            ko: "폭스트롯",
            en: "Foxtrot"
        },
        difficulty: Difficulty.EXPERT,
        length: 826,
        width: undefined,
        area: 26158,
        elevation: 194,
        minAngle: undefined,
        avgAngle: percentToDegree(14.4),
        maxAngle: undefined,
        connectedSlopeIds: [],
        connectedLiftIds: [
            1, 2
        ],
    },  
];