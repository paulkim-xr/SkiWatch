import { Lift } from "../Util";

// https://oakvalley.co.kr/ski/introduction/slope

export const lifts: Lift[] = [
    {
        id: 0,
        name: {
            ko: "플라워",
            en: "Flower"
        },
        length: 483,
        seats: 6,
        cabinNum: 33,
        speed: 5,
        capacity: 3200,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        rideTime: undefined,
        elevation: undefined
    },

    {
        id: 1,
        name: {
            ko: "버드",
            en: "Bird"
        },
        length: 495,
        seats: 4,
        cabinNum: 39,
        speed: 5,
        capacity: 2400,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        rideTime: undefined,
        elevation: undefined
    },

    {
        id: 2,
        name: {
            ko: "마운틴",
            en: "Mountain"
        },
        length: 931,
        seats: 8,
        cabinNum: undefined,
        speed: 5,
        capacity: 3400,
        connectedSlopeIds: [],
        connectedLiftIds: [],
        rideTime: undefined,
        elevation: undefined
    },
]