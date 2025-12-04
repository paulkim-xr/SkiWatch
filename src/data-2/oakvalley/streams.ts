import { Stream, StreamType } from "../Util";

export const streams: Stream[] = [
    {
        name: {
            ko: "스노우파크 옥탑",
            en: "Snow Park Roof"
        },
        type: StreamType.HLS,
        url: "https://cctv-oak9.ktcdn.co.kr/cctv/ch2.stream/chunklist.m3u8"
    },
    {
        name: {
            ko: "I 슬로프",
            en: "I Slope"
        },
        type: StreamType.HLS,
        url: "https://cctv-oak9.ktcdn.co.kr/cctv/ch9.stream/chunklist.m3u8"
    },
    {
        name: {
            ko: "G 슬로프",
            en: "G Slope"
        },
        type: StreamType.HLS,
        url: "https://cctv-oak9.ktcdn.co.kr/cctv/ch7.stream/chunklist.m3u8"
    },
    {
        name: {
            ko: "F 슬로프",
            en: "F Slope"
        },
        type: StreamType.HLS,
        url: "https://cctv-oak9.ktcdn.co.kr/cctv/ch6.stream/chunklist.m3u8"
    },
    {
        name: {
            ko: "플라워리프트 하차장",
            en: "Flower Lift Unloading Area"
        },
        type: StreamType.HLS,
        url: "https://cctv-oak9.ktcdn.co.kr/cctv/ch5.stream/chunklist.m3u8"
    },
];