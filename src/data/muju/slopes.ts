import { percentToDegree, Difficulty, Slope } from "../Util";

// https://www.mdysresort.com/ski/slope_lift.asp

export const slopes: Slope[] = [
    {
        id: 0,
        name: {
            ko: "서역기행",
            en: "Soyokgihang"
        },
        difficulty: Difficulty.BEGINNER,
        length: 3413,
        width: undefined,
        area: 70720,
        elevation: 332,
        minAngle: percentToDegree(4),
        avgAngle: percentToDegree(13.7),
        maxAngle: percentToDegree(24.1),
        connectedSlopeIds: [],
        connectedLiftIds: [],
    },

    {
        id: 1,
        name: {
            ko: "이스턴",
            en: "Eastern"
        },
        difficulty: Difficulty.BEGINNER,
        length: 374,
        width: undefined,
        area: 16870,
        elevation: 63,
        minAngle: percentToDegree(10),
        avgAngle: percentToDegree(17.9),
        maxAngle: percentToDegree(27.5),
        connectedSlopeIds: [],
        connectedLiftIds: [],
    },

    {
        id: 2,
        name: {
            ko: "루키힐",
            en: "Rookie Hill"
        },
        difficulty: Difficulty.INTERMEDIATE,
        length: 721,
        width: undefined,
        area: 33040,
        elevation: 150,
        minAngle: percentToDegree(16),
        avgAngle: percentToDegree(21.3),
        maxAngle: percentToDegree(29),
        connectedSlopeIds: [],
        connectedLiftIds: [],
    },

    {
        id: 3,
        name: {
            ko: "웨스턴",
            en: "Western"
        },
        difficulty: Difficulty.INTERMEDIATE,
        length: 305,
        width: undefined,
        area: 4790,
        elevation: 50,
        minAngle: percentToDegree(10),
        avgAngle: percentToDegree(16.7),
        maxAngle: percentToDegree(25),
        connectedSlopeIds: [],
        connectedLiftIds: [],
    },

    {
        id: 4,
        name: {
            ko: "터보",
            en: "Turbo"
        },
        difficulty: Difficulty.INTERMEDIATE,
        length: 1430,
        width: undefined,
        area: 47910,
        elevation: 265,
        minAngle: percentToDegree(3.1),
        avgAngle: percentToDegree(18.8),
        maxAngle: percentToDegree(32),
        connectedSlopeIds: [],
        connectedLiftIds: [],
    },

    {
        id: 5,
        name: {
            ko: "썬다운",
            en: "Sun Down"
        },
        difficulty: Difficulty.INTERMEDIATE,
        length: 577,
        width: undefined,
        area: 45040,
        elevation: 74,
        minAngle: percentToDegree(23),
        avgAngle: percentToDegree(27.6),
        maxAngle: percentToDegree(47),
        connectedSlopeIds: [],
        connectedLiftIds: [],
    },

    {
        id: 6,
        name: {
            ko: "프리웨이",
            en: "Freeway"
        },
        difficulty: Difficulty.ADVANCED,
        length: 879,
        width: undefined,
        area: 38032,
        elevation: 199,
        minAngle: percentToDegree(9.3),
        avgAngle: percentToDegree(23.1),
        maxAngle: percentToDegree(35),
        connectedSlopeIds: [],
        connectedLiftIds: [],
    },

    {
        id: 7,
        name: {
            ko: "파노라마",
            en: "Panorama"
        },
        difficulty: Difficulty.ADVANCED,
        length: 737,
        width: undefined,
        area: 23570,
        elevation: 178,
        minAngle: percentToDegree(17.2),
        avgAngle: percentToDegree(24.7),
        maxAngle: percentToDegree(62),
        connectedSlopeIds: [],
        connectedLiftIds: [],
    },

    {
        id: 8,
        name: {
            ko: "레이더스 하단",
            en: "Raiders Lower Zone"
        },
        difficulty: Difficulty.ADVANCED,
        length: 473,
        width: undefined,
        area: 18369,
        elevation: 85,
        minAngle: percentToDegree(25),
        avgAngle: percentToDegree(30.7),
        maxAngle: percentToDegree(36.2),
        connectedSlopeIds: [],
        connectedLiftIds: [],
    },

    {
        id: 9,
        name: {
            ko: "야마가",
            en: "Yamaga"
        },
        difficulty: Difficulty.ADVANCED,
        length: 1039,
        width: undefined,
        area: 42730,
        elevation: 267,
        minAngle: percentToDegree(15),
        avgAngle: percentToDegree(26.4),
        maxAngle: percentToDegree(50),
        connectedSlopeIds: [],
        connectedLiftIds: [],
    },

    {
        id: 10,
        name: {
            ko: "레이더스 상단",
            en: "Raiders Higher Zone"
        },
        difficulty: Difficulty.EXPERT,
        length: 480,
        width: undefined,
        area: 21360,
        elevation: 250,
        minAngle: percentToDegree(28),
        avgAngle: percentToDegree(39),
        maxAngle: percentToDegree(76),
        connectedSlopeIds: [],
        connectedLiftIds: [],
    },

    {
        id: 11,
        name: {
            ko: "스피츠 하단",
            en: "Spitz Lower Zone"
        },
        difficulty: Difficulty.BEGINNER,
        length: 720,
        width: undefined,
        area: 48000,
        elevation: 128,
        minAngle: percentToDegree(5),
        avgAngle: percentToDegree(17.7),
        maxAngle: percentToDegree(20),
        connectedSlopeIds: [],
        connectedLiftIds: [],
    },

    {
        id: 12,
        name: {
            ko: "실크로드 하단",
            en: "Silk Road Lower Zone"
        },
        difficulty: Difficulty.INTERMEDIATE,
        length: 1714,
        width: undefined,
        area: 95194,
        elevation: 302,
        minAngle: percentToDegree(10),
        avgAngle: percentToDegree(17.9),
        maxAngle: percentToDegree(27.5),
        connectedSlopeIds: [],
        connectedLiftIds: [],
    },

    {
        id: 13,
        name: {
            ko: "실크로드 상단",
            en: "Silk Road Upper"
        },
        difficulty: Difficulty.INTERMEDIATE,
        length: 4386,
        width: undefined,
        area: 103178,
        elevation: 473,
        minAngle: percentToDegree(6.5),
        avgAngle: percentToDegree(14.6),
        maxAngle: percentToDegree(26.5),
        connectedSlopeIds: [],
        connectedLiftIds: [],
    },

    {
        id: 14,
        name: {
            ko: "커넥션",
            en: "Connection"
        },
        difficulty: Difficulty.INTERMEDIATE,
        length: 1078,
        width: undefined,
        area: 72278,
        elevation: 156.7,
        minAngle: percentToDegree(5),
        avgAngle: percentToDegree(20.9),
        maxAngle: percentToDegree(28),
        connectedSlopeIds: [],
        connectedLiftIds: [],
    },

    {
        id: 15,
        name: {
            ko: "미뉴에트",
            en: "Minuet"
        },
        difficulty: Difficulty.ADVANCED,
        length: 1339,
        width: undefined,
        area: 75729,
        elevation: 398,
        minAngle: percentToDegree(20),
        avgAngle: percentToDegree(30.6),
        maxAngle: percentToDegree(55),
        connectedSlopeIds: [],
        connectedLiftIds: [],
    },
    
    {
        id: 16,
        name: {
            ko: "모차르트",
            en: "Mozart"
        },
        difficulty: Difficulty.EXPERT,
        length: 520,
        width: undefined,
        area: 18200,
        elevation: 90,
        minAngle: percentToDegree(26.5),
        avgAngle: percentToDegree(39.2),
        maxAngle: percentToDegree(50),
        connectedSlopeIds: [],
        connectedLiftIds: [],
    },

    {
        id: 17,
        name: {
            ko: "알레그로",
            en: "Allegro"
        },
        difficulty: Difficulty.EXPERT,
        length: 467,
        width: undefined,
        area: 14286,
        elevation: 171,
        minAngle: percentToDegree(28.0),
        avgAngle: percentToDegree(38.0),
        maxAngle: percentToDegree(51),
        connectedSlopeIds: [],
        connectedLiftIds: [],
    },

    {
        id: 18,
        name: {
            ko: "왈츠",
            en: "Waltz"
        },
        difficulty: Difficulty.EXPERT,
        length: 111,
        width: undefined,
        area: 1182,
        elevation: 14,
        minAngle: percentToDegree(4.5),
        avgAngle: percentToDegree(12.7),
        maxAngle: percentToDegree(14),
        connectedSlopeIds: [],
        connectedLiftIds: [],
    },

    {
        id: 19,
        name: {
            ko: "카덴자",
            en: "Cadenza"
        },
        difficulty: Difficulty.EXPERT,
        length: 252,
        width: undefined,
        area: 4085,
        elevation: 72,
        minAngle: percentToDegree(23.7),
        avgAngle: percentToDegree(29.4),
        maxAngle: percentToDegree(60),
        connectedSlopeIds: [],
        connectedLiftIds: [],
    },

    {
        id: 20,
        name: {
            ko: "폴카",
            en: "Polka"
        },
        difficulty: Difficulty.EXPERT,
        length: 428,
        width: undefined,
        area: 24899,
        elevation: 158,
        minAngle: percentToDegree(22.5),
        avgAngle: percentToDegree(38.3),
        maxAngle: percentToDegree(50),
        connectedSlopeIds: [],
        connectedLiftIds: [],
    }
];