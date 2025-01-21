import { Stream, StreamType } from "../Util";

export const streams: Stream[] = [
    {
        name: {
            ko: "레몬",
            en: "Lemon"
        },
        type: StreamType.HLS,
        url: "https://ant.livecity.co.kr:5443/jisancam/streams/jisan1.m3u8"
    },
    {
        name: {
            ko: "오렌지/뉴오렌지",
            en: "Orange/New Orange"
        },
        type: StreamType.HLS,
        url: "https://ant.livecity.co.kr:5443/jisancam/streams/jisan2.m3u8"
    },
    {
        name: {
            ko: "5번/6번 슬로프",
            en: "Slope 5/6"
        },
        type: StreamType.HLS,
        url: "https://ant.livecity.co.kr:5443/jisancam/streams/jisan3.m3u8"
    },
    {
        name: {
            ko: "블루",
            en: "Blue"
        },
        type: StreamType.HLS,
        url: "https://ant.livecity.co.kr:5443/jisancam/streams/jisan4.m3u8"
    },
    {
        name: {
            ko: "실버",
            en: "Silver"
        },
        type: StreamType.HLS,
        url: "https://ant.livecity.co.kr:5443/jisancam/streams/jisan5.m3u8"
    },
];