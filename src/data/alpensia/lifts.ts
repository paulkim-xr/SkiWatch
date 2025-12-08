import { Lift } from "../Util";

// http://riderspark.com/rp_bbs/index.php?mid=alpensiaresort&document_srl=1324

export const lifts: Lift[] = [
    {
        id: 0,
        name: {
            ko: "리프트 1",
            en: "Lift 1",
            ja: "ライハウパウ 1"
        },
        length: 541,
        seats: 4,
        cabinNum: 45,
        speed: 5,
        capacity: 2400,
        connectedSlopeIds: [
            0
        ],
        connectedLiftIds: [],
        elevation: undefined,
        rideTime: undefined
    },

    {
        id: 1,
        name: {
            ko: "리프트 2",
            en: "Lift 2",
            ja: "ライハウパウ 2"
        },
        length: 664,
        seats: 6,
        cabinNum: 43,
        speed: 5,
        capacity: 3085,
        connectedSlopeIds: [
            1, 2, 3, 4, 5
        ],
        connectedLiftIds: [],
        elevation: undefined,
        rideTime: undefined
    },

    {
        id: 2,
        name: {
            ko: "리프트 3",
            en: "Lift 3",
            ja: "ライハウパウ 3"
        },
        length: 651,
        seats: 6,
        cabinNum: 44,
        speed: 5,
        capacity: 3085,
        connectedSlopeIds: [
            1, 2, 3, 4, 5
        ],
        connectedLiftIds: [],
        elevation: undefined,
        rideTime: undefined
    },
];