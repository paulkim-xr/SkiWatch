import { Stream, StreamType } from "../Util";

export const streams: Stream[] = [
    {
        name: {
            ko: "스키하우스",
            en: "Ski House"
        },
        type: StreamType.External,
        url: "http://118.46.149.144:8080/streaming/streamhls.jsp?ch=0"
        // url: "http://118.46.149.144:8080/ramdisk/cam0.m3u8"
    },
    {
        name: {
            ko: "오렌지",
            en: "Orange"
        },
        type: StreamType.External,
        url: "http://118.46.149.144:8080/streaming/streamhls.jsp?ch=1"
        // url: "http://118.46.149.144:8080/ramdisk/cam1.m3u8"
    },
    {
        name: {
            ko: "버금마루",
            en: "Beogeum Maru"
        },
        type: StreamType.External,
        url: "http://118.46.149.144:8080/streaming/streamhls.jsp?ch=2"
        // url: "http://118.46.149.144:8080/ramdisk/cam2.m3u8"
    },
    {
        name: {
            ko: "으뜸마루",
            en: "Eutteum Maru"
        },
        type: StreamType.External,
        url: "http://118.46.149.144:8080/streaming/streamhls.jsp?ch=3"
        // url: "http://118.46.149.144:8080/ramdisk/cam3.m3u8"
    },
];