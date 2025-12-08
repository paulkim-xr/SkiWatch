import { Stream, StreamType } from "../Util";

export const streams: Stream[] = [
    {
        name: {
            ko: "스키하우스",
            en: "Ski House",
            ja: "Ski ハウス"
        },
        type: StreamType.External,
        url: "http://118.46.149.144:8080/streaming/streamhls2.jsp?ch=0"
        // url: "http://118.46.149.144:8080/ramdisk/cam0.m3u8"
    },
    {
        name: {
            ko: "드림1",
            en: "Dream 1",
            ja: "Dream 1"
        },
        type: StreamType.External,
        url: "http://118.46.149.144:8080/streaming/streamhls2.jsp?ch=1"
        // url: "http://118.46.149.144:8080/ramdisk/cam1.m3u8"
    },
    {
        name: {
            ko: "버금마루",
            en: "Beogeum Maru",
            ja: "Beogeum Maru"
        },
        type: StreamType.External,
        url: "http://118.46.149.144:8080/streaming/streamhls2.jsp?ch=2"
        // url: "http://118.46.149.144:8080/ramdisk/cam2.m3u8"
    },
    {
        name: {
            ko: "으뜸마루",
            en: "Eutteum Maru",
            ja: "Eutteum Maru"
        },
        type: StreamType.External,
        url: "http://118.46.149.144:8080/streaming/streamhls2.jsp?ch=3"
        // url: "http://118.46.149.144:8080/ramdisk/cam3.m3u8"
    },
    {
        name: {
            ko: "글로리1",
            en: "Glory 1",
            ja: "Glory 1"
        },
        type: StreamType.External,
        url: "http://118.46.149.144:8080/streaming/streamhls2.jsp?ch=4"
        // url: "http://118.46.149.144:8080/ramdisk/cam20.m3u8"
    },
    {
        name: {
            ko: "해피",
            en: "Happy",
            ja: "Happy"
        },
        type: StreamType.External,
        url: "http://118.46.149.144:8080/streaming/streamhls2.jsp?ch=5"
        // url: "http://118.46.149.144:8080/ramdisk/cam21.m3u8"
    },
    {
        name: {
            ko: "드림2",
            en: "Dream 2",
            ja: "Dream 2"
        },
        type: StreamType.External,
        url: "http://118.46.149.144:8080/streaming/streamhls2.jsp?ch=6"
        // url: "http://118.46.149.144:8080/ramdisk/cam22.m3u8"
    },
    {
        name: {
            ko: "글로리3",
            en: "Glory 3",
            ja: "Glory 3"
        },
        type: StreamType.External,
        url: "http://118.46.149.144:8080/streaming/streamhls2.jsp?ch=7"
        // url: "http://118.46.149.144:8080/ramdisk/cam23.m3u8"
    },
];
