import { Lift } from "../Util";

// https://www.konjiamresort.co.kr/ski/liFt.dev

export const lifts: Lift[] = [
    {
        id: 0,
        name: {
            ko: "휘센",
            en: "Whisen",
            ja: "ハウィサエン"
        },
        length: 304,
        seats: 4,
        cabinNum: 26,
        speed: 5,
        capacity: 2400,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        rideTime: undefined,
        elevation: 304
    },

    {
        id: 1,
        name: {
            ko: "익시오",
            en: "Ixio",
            ja: "ジャイクサイジャオ"
        },
        length: 680,
        seats: 6,
        cabinNum: 44,
        speed: 5,
        capacity: 3600,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        rideTime: undefined,
        elevation: 680
    },

    {
        id: 2,
        name: {
            ko: "그램",
            en: "Gram",
            ja: "ガウラアム"
        },
        length: 853,
        seats: 6,
        cabinNum: 53,
        speed: 5,
        capacity: 3600,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        rideTime: undefined,
        elevation: 853
    },

    {
        id: 3,
        name: {
            ko: "씽큐",
            en: "ThinQ",
            ja: "サインタユ"
        },
        length: 1325,
        seats: 6,
        cabinNum: 80,
        speed: 5,
        capacity: 3600,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        rideTime: undefined,
        elevation: 1325
    },

    {
        id: 4,
        name: {
            ko: "CNP",
            en: "CNP",
            ja: "CNP"
        },
        length: 1306,
        seats: 6,
        cabinNum: 80,
        speed: 5,
        capacity: 3600,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        rideTime: undefined,
        elevation: 1306
    },
];