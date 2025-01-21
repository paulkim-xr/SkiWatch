import { Stream, StreamType } from "../Util";

export const streams: Stream[] = [
    {
        name: {
            ko: "호크/스패로우",
            en: "Hawk/Sparrow"
        },
        type: StreamType.HLS,
        url: "https://streaming.phoenixhnr.co.kr/hls/yh_02.m3u8"
    },
    {
        name: {
            ko: "도도",
            en: "Dodo"
        },
        type: StreamType.HLS,
        url: "https://streaming.phoenixhnr.co.kr/hls/sp_01.m3u8"
    },
    {
        name: {
            ko: "불새마루",
            en: "Bulsae Maru"
        },
        type: StreamType.HLS,
        url: "https://streaming.phoenixhnr.co.kr/hls/ht_01.m3u8"
    },
    {
        name: {
            ko: "베이스",
            en: "Base"
        },
        type: StreamType.HLS,
        url: "https://streaming.phoenixhnr.co.kr/hls/bc_02.m3u8"
    },
    {
        name: {
            ko: "펭귄",
            en: "Penguin"
        },
        type: StreamType.HLS,
        url: "https://streaming.phoenixhnr.co.kr/hls/bc_01.m3u8"
    },
    {
        name: {
            ko: "스노우 빌리지",
            en: "Snow Village"
        },
        type: StreamType.HLS,
        url: "https://streaming.phoenixhnr.co.kr/hls/yh_01.m3u8"
    },
];