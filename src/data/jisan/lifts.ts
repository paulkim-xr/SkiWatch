import { Lift } from "../Util";

// https://www.jisanresort.co.kr/w/ski/slopes/map.asp

export const lifts: Lift[] = [
    {
        id: 0,
        name: {
            ko: "레몬",
            en: "Lemon"
        },
        length: 300,
        seats: 4,
        cabinNum: undefined,
        speed: undefined,
        capacity: 1280,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        elevation: 42,
        rideTime: undefined
    },

    {
        id: 1,
        name: {
            ko: "오렌지",
            en: "Orange"
        },
        length: 300,
        seats: 4,
        cabinNum: undefined,
        speed: undefined,
        capacity: 2400,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        elevation: 44,
        rideTime: undefined
    },

    
    {
        id: 2,
        name: {
            ko: "뉴오렌지",
            en: "New Orange"
        },
        length: 716,
        seats: 6,
        cabinNum: undefined,
        speed: undefined,
        capacity: 3200,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        elevation: 145,
        rideTime: undefined
    },

    
    {
        id: 3,
        name: {
            ko: "블루",
            en: "Blue"
        },
        length: 760,
        seats: 4,
        cabinNum: undefined,
        speed: undefined,
        capacity: 2400,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        elevation: 145,
        rideTime: undefined
    },

    
    {
        id: 4,
        name: {
            ko: "실버",
            en: "Silver"
        },
        length: 652,
        seats: 6,
        cabinNum: undefined,
        speed: undefined,
        capacity: 3200,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        elevation: 209,
        rideTime: undefined
    },
];