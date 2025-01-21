import { Difficulty, Slope } from "../Util"

// https://www.yongpyong.co.kr/kor/skiNboard/introduce.do

export const slopes: Slope[] = [
    {
        id: 0,
        name: {
            ko: "옐로우",
            en: "Yellow"
        },
        difficulty: Difficulty.BEGINNER,
        length: 600,
        width: undefined,
        area: undefined,
        elevation: 61,
        minAngle: 4.0,
        avgAngle: 6.8,
        maxAngle: 9.6,
        connectedSlopeIds: [],
        connectedLiftIds: [],
    },
    
    {
        id: 1,
        name: {
            ko: "뉴옐로우",
            en: "New Yellow"
        },
        difficulty: Difficulty.BEGINNER,
        length: 350,
        width: undefined,
        area: undefined,
        elevation: 60,
        minAngle: 4.0,
        avgAngle: 6.3,
        maxAngle: 9.6,
        connectedSlopeIds: [],
        connectedLiftIds: [],
    },

    {
        id: 2,
        name: {
            ko: "핑크",
            en: "Pink"
        },
        difficulty: Difficulty.BE_IN,
        length: 600,
        width: undefined,
        area: undefined,
        elevation: 91,
        minAngle: 5.1,
        avgAngle: 8.0,
        maxAngle: 13.0,
        connectedSlopeIds: [],
        connectedLiftIds: [],
    },

    {
        id: 3,
        name: {
            ko: "메가그린",
            en: "Mega Green"
        },
        difficulty: Difficulty.BE_IN,
        length: 1000,
        width: undefined,
        area: undefined,
        elevation: 108,
        minAngle: 6.8,
        avgAngle: 8.5,
        maxAngle: 15.6,
        connectedSlopeIds: [],
        connectedLiftIds: [],
    },

    {
        id: 4,
        name: {
            ko: "레드파라다이스",
            en: "Red Paradise"
        },
        difficulty: Difficulty.INTERMEDIATE,
        length: 1000,
        width: undefined,
        area: undefined,
        elevation: 150,
        minAngle: 7.4,
        avgAngle: 12.4,
        maxAngle: 20.3,
        connectedSlopeIds: [],
        connectedLiftIds: [],
    },

    {
        id: 5,
        name: {
            ko: "골드파라다이스",
            en: "Gold Paradise"
        },
        difficulty: Difficulty.INTERMEDIATE,
        length: 1520,
        width: undefined,
        area: undefined,
        elevation: 222,
        minAngle: 4.6,
        avgAngle: 7.97,
        maxAngle: 11.9,
        connectedSlopeIds: [],
        connectedLiftIds: [],
    },

    {
        id: 6,
        name: {
            ko: "실버파라다이스",
            en: "Silver Paradise"
        },
        difficulty: Difficulty.INTERMEDIATE,
        length: 1460,
        width: undefined,
        area: undefined,
        elevation: 269,
        minAngle: 6.3,
        avgAngle: 10.2,
        maxAngle: 16.2,
        connectedSlopeIds: [],
        connectedLiftIds: [],
    },

    {
        id: 7,
        name: {
            ko: "레인보우파라다이스",
            en: "Rainbow Paradise"
        },
        difficulty: Difficulty.INTERMEDIATE,
        length: 5600,
        width: undefined,
        area: undefined,
        elevation: 702,
        minAngle: 4.0,
        avgAngle: 7.4,
        maxAngle: 14.6,
        connectedSlopeIds: [],
        connectedLiftIds: [],
    },

    {
        id: 8,
        name: {
            ko: "골드 환타스틱",
            en: "Gold Fantastic"
        },
        difficulty: Difficulty.IN_AD,
        length: 1850,
        width: undefined,
        area: undefined,
        elevation: 333,
        minAngle: 2.9,
        avgAngle: 10.2,
        maxAngle: 18.3,
        connectedSlopeIds: [],
        connectedLiftIds: [],
    },

    {
        id: 9,
        name: {
            ko: "골드밸리",
            en: "Gold Valley"
        },
        difficulty: Difficulty.ADVANCED,
        length: 1850,
        width: undefined,
        area: undefined,
        elevation: 333,
        minAngle: 4.0,
        avgAngle: 11.3,
        maxAngle: 23.3,
        connectedSlopeIds: [],
        connectedLiftIds: [],
    },

    {
        id: 10,
        name: {
            ko: "뉴레드",
            en: "New Red"
        },
        difficulty: Difficulty.ADVANCED,
        length: 500,
        width: undefined,
        area: undefined,
        elevation: 194,
        minAngle: 14.0,
        avgAngle: 19.8,
        maxAngle: 22.8,
        connectedSlopeIds: [],
        connectedLiftIds: [],
    },

    {
        id: 11,
        name: {
            ko: "블루",
            en: "Blue"
        },
        difficulty: Difficulty.ADVANCED,
        length: 300,
        width: undefined,
        area: undefined,
        elevation: 80,
        minAngle: 6.3,
        avgAngle: 16.2,
        maxAngle: 19.8,
        connectedSlopeIds: [],
        connectedLiftIds: [],
    },

    {
        id: 12,
        name: {
            ko: "레인보우4",
            en: "Rainbow 4"
        },
        difficulty: Difficulty.ADVANCED,
        length: 635,
        width: undefined,
        area: undefined,
        elevation: 180,
        minAngle: 8.5,
        avgAngle: 15.6,
        maxAngle: 24.7,
        connectedSlopeIds: [],
        connectedLiftIds: [],
    },

    {
        id: 13,
        name: {
            ko: "레드",
            en: "Red"
        },
        difficulty: Difficulty.EXPERT,
        length: 1000,
        width: undefined,
        area: undefined,
        elevation: 194,
        minAngle: 5.1,
        avgAngle: 11.9,
        maxAngle: 26.6,
        connectedSlopeIds: [],
        connectedLiftIds: [],
    },

    {
        id: 14,
        name: {
            ko: "실버",
            en: "Silver"
        },
        difficulty: Difficulty.EXPERT,
        length: 1000,
        width: undefined,
        area: undefined,
        elevation: 263,
        minAngle: 4.0,
        avgAngle: 16.2,
        maxAngle: 26.1,
        connectedSlopeIds: [],
        connectedLiftIds: [],
    },

    {
        id: 15,
        name: {
            ko: "뉴골드",
            en: "New Gold"
        },
        difficulty: Difficulty.EXPERT,
        length: 650,
        width: undefined,
        area: undefined,
        elevation: 180,
        minAngle: 10.2,
        avgAngle: 17.2,
        maxAngle: 25.2,
        connectedSlopeIds: [],
        connectedLiftIds: [],
    },

    {
        id: 16,
        name: {
            ko: "레인보우 1",
            en: "Rainbow 1"
        },
        difficulty: Difficulty.EXPERT,
        length: 1607,
        width: undefined,
        area: undefined,
        elevation: 500,
        minAngle: 8.5,
        avgAngle: 17.2,
        maxAngle: 29.7,
        connectedSlopeIds: [],
        connectedLiftIds: [],
    },

    {
        id: 17,
        name: {
            ko: "레인보우 2",
            en: "Rainbow 2"
        },
        difficulty: Difficulty.EXPERT,
        length: 752,
        width: undefined,
        area: undefined,
        elevation: 500,
        minAngle: 8.5,
        avgAngle: 21.3,
        maxAngle: 29.2,
        connectedSlopeIds: [],
        connectedLiftIds: [],
    },

    {
        id: 18,
        name: {
            ko: "레인보우 3",
            en: "Rainbow 3"
        },
        difficulty: Difficulty.EXPERT,
        length: 1046,
        width: undefined,
        area: undefined,
        elevation: 500,
        minAngle: 8.5,
        avgAngle: 18.3,
        maxAngle: 26.1,
        connectedSlopeIds: [],
        connectedLiftIds: [],
    },

    {
        id: 19,
        name: {
            ko: "드래곤파크",
            en: "Dragon Park"
        },
        difficulty: Difficulty.PARK,
        length: 1046,
        width: undefined,
        area: undefined,
        elevation: 500,
        minAngle: 8.5,
        avgAngle: 18.3,
        maxAngle: 26.1,
        connectedSlopeIds: [],
        connectedLiftIds: [],
    },
]