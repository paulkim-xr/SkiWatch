import { Lift } from "../Util";

// https://www.yongpyong.co.kr/kor/skiNboard/introduce.do

export const lifts: Lift[] = [
    {
        id: 0,
        name: {
            ko: "골드",
            en: "Gold",
            ja: "ガオルダウ"
        },
        length: 1689,
        seats: 6,
        cabinNum: undefined,
        speed: undefined,
        capacity: 3200,
        connectedSlopeIds: [
            5, 8, 9, 15
        ],
        connectedLiftIds: [],
        rideTime: undefined,
        elevation: undefined
    },

    {
        id: 1,
        name: {
            ko: "뉴골드",
            en: "New Gold",
            ja: "ナユガオルダウ"
        },
        length: 720,
        seats: 4,
        cabinNum: undefined,
        speed: undefined,
        capacity: 720,
        connectedSlopeIds: [
            5, 15
        ],
        connectedLiftIds: [],
        rideTime: undefined,
        elevation: undefined
    },

    {
        id: 2,
        name: {
            ko: "브릿지",
            en: "Bridge",
            ja: "バウライスチャイ"
        },
        length: 366,
        seats: 2,
        cabinNum: undefined,
        speed: undefined,
        capacity: 900,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        rideTime: undefined,
        elevation: undefined
    },

    {
        id: 3,
        name: {
            ko: "레드",
            en: "Red",
            ja: "ラエダウ"
        },
        length: 905,
        seats: 4,
        cabinNum: undefined,
        speed: undefined,
        capacity: 2400,
        connectedSlopeIds: [
            4, 10, 11, 13
        ],
        connectedLiftIds: [],
        rideTime: undefined,
        elevation: undefined
    },

    {
        id: 4,
        name: {
            ko: "뉴레드",
            en: "New Red",
            ja: "ナユラエダウ"
        },
        length: 550,
        seats: 3,
        cabinNum: undefined,
        speed: undefined,
        capacity: 1350,
        connectedSlopeIds: [
            4, 10, 11, 13
        ],
        connectedLiftIds: [],
        rideTime: undefined,
        elevation: undefined
    },

    {
        id: 5,
        name: {
            ko: "블루",
            en: "Blue",
            ja: "バウルラウ"
        },
        length: 600,
        seats: 2,
        cabinNum: undefined,
        speed: undefined,
        capacity: 900,
        connectedSlopeIds: [
            4, 10, 11, 13
        ],
        connectedLiftIds: [],
        rideTime: undefined,
        elevation: undefined
    },

    {
        id: 6,
        name: {
            ko: "핑크",
            en: "Pink",
            ja: "ハインタウ"
        },
        length: 630,
        seats: 3,
        cabinNum: undefined,
        speed: undefined,
        capacity: 1350,
        connectedSlopeIds: [
            2
        ],
        connectedLiftIds: [],
        rideTime: undefined,
        elevation: undefined
    },

    {
        id: 7,
        name: {
            ko: "옐로우",
            en: "Yellow",
            ja: "ジャイェルラオジャウ"
        },
        length: 496,
        seats: 4,
        cabinNum: undefined,
        speed: undefined,
        capacity: 1800,
        connectedSlopeIds: [
            0, 1, 2
        ],
        connectedLiftIds: [],
        rideTime: undefined,
        elevation: undefined
    },

    {
        id: 8,
        name: {
            ko: "뉴옐로우",
            en: "New Yellow",
            ja: "ナユジャイェルラオジャウ"
        },
        length: 348,
        seats: 4,
        cabinNum: undefined,
        speed: undefined,
        capacity: 1800,
        connectedSlopeIds: [
            0, 1
        ],
        connectedLiftIds: [],
        rideTime: undefined,
        elevation: undefined
    },

    {
        id: 9,
        name: {
            ko: "실버",
            en: "Silver",
            ja: "サイルバオ"
        },
        length: 700,
        seats: 4,
        cabinNum: undefined,
        speed: undefined,
        capacity: 1800,
        connectedSlopeIds: [
            6, 14
        ],
        connectedLiftIds: [],
        rideTime: undefined,
        elevation: undefined
    },

    {
        id: 10,
        name: {
            ko: "메가그린",
            en: "Mega Green",
            ja: "マエガアガウライン"
        },
        length: 568,
        seats: 6,
        cabinNum: undefined,
        speed: undefined,
        capacity: 3200,
        connectedSlopeIds: [
            3
        ],
        connectedLiftIds: [],
        rideTime: undefined,
        elevation: undefined
    },

    {
        id: 11,
        name: {
            ko: "그린",
            en: "Green",
            ja: "ガウライン"
        },
        length: 598,
        seats: 4,
        cabinNum: undefined,
        speed: undefined,
        capacity: 2400,
        connectedSlopeIds: [
            3
        ],
        connectedLiftIds: [],
        rideTime: undefined,
        elevation: undefined
    },

    {
        id: 12,
        name: {
            ko: "레인보우",
            en: "Rainbow",
            ja: "ラエジャインバオジャウ"
        },
        length: 1421,
        seats: 4,
        cabinNum: undefined,
        speed: undefined,
        capacity: 2400,
        connectedSlopeIds: [
            7, 12, 16, 17, 18
        ],
        connectedLiftIds: [],
        rideTime: undefined,
        elevation: undefined
    },

    {
        id: 13,
        name: {
            ko: "발왕산 관광케이블카",
            en: "Gondola",
            ja: "バアルジャワンサアン ガワンガワンタエジャイバウルタア"
        },
        length: 3742,
        seats: 8,
        cabinNum: undefined,
        speed: undefined,
        capacity: 1800,
        connectedSlopeIds: [
            7, 12, 16, 17, 18
        ],
        connectedLiftIds: [],
        rideTime: undefined,
        elevation: undefined
    },
]