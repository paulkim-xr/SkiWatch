import { Stream, StreamType } from "../Util";

export const streams: Stream[] = [
    {
        name: {
            ko: "알파",
            en: "Alpha",
            ja: "Alpha"
        },
        type: StreamType.HLS,
        url: "https://live.wellihillipark.com/wellihillipark/_definst_/cam02.stream/playlist.m3u8"
    },
    {
        name: {
            ko: "베이스",
            en: "Base",
            ja: "ベース"
        },
        type: StreamType.HLS,
        url: "https://live.wellihillipark.com/wellihillipark/_definst_/cam03.stream/playlist.m3u8"
    },
    {
        name: {
            ko: "리조트 전경",
            en: "Resort Overview",
            ja: "Resort 全景"
        },
        type: StreamType.HLS,
        url: "https://live.wellihillipark.com/wellihillipark/_definst_/cam04.stream/playlist.m3u8"
    },
    {
        name: {
            ko: "정상광장",
            en: "Summit Plaza",
            ja: "山頂 広場"
        },
        type: StreamType.HLS,
        url: "https://live.wellihillipark.com/wellihillipark/_definst_/cam05.stream/playlist.m3u8"
    },
    {
        name: {
            ko: "패밀리",
            en: "Family",
            ja: "Family"
        },
        type: StreamType.HLS,
        url: "https://live.wellihillipark.com/wellihillipark/_definst_/cam06.stream/playlist.m3u8"
    },
    {
        name: {
            ko: "워터플래닛",
            en: "Water Planet",
            ja: "Water Planet"
        },
        type: StreamType.HLS,
        url: "https://live.wellihillipark.com/wellihillipark/_definst_/cam07.stream/playlist.m3u8"
    },
];