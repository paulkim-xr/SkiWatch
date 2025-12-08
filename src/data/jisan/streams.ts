import { Stream, StreamType } from "../Util";

export const streams: Stream[] = [
    {
        name: {
            ko: "레몬",
            en: "Lemon",
            ja: "Lemon"
        },
        type: StreamType.HLS,
        url: "https://ant.livecity.co.kr:5443/jisancam/streams/jisan1.m3u8"
    },
    {
        name: {
            ko: "오렌지/뉴오렌지",
            en: "Orange/New Orange",
            ja: "オレンジ／New オレンジ"
        },
        type: StreamType.HLS,
        url: "https://ant.livecity.co.kr:5443/jisancam/streams/jisan2.m3u8"
    },
    {
        name: {
            ko: "5번/6번 슬로프",
            en: "Slope 5/6",
            ja: "コース 5／6"
        },
        type: StreamType.HLS,
        url: "https://ant.livecity.co.kr:5443/jisancam/streams/jisan3.m3u8"
    },
    {
        name: {
            ko: "블루",
            en: "Blue",
            ja: "ブルー"
        },
        type: StreamType.HLS,
	url: "https://ant.livecity.co.kr:5443/jisancam/streams/jisan4.m3u8"
    },
    {
        name: {
            ko: "실버",
            en: "Silver",
            ja: "シルバー"
        },
        type: StreamType.HLS,
        url: "https://ant.livecity.co.kr:5443/jisancam/streams/jisan5.m3u8"
    },
];
