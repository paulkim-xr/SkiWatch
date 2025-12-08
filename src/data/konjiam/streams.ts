import { Stream, StreamType } from "../Util";

export const streams: Stream[] = [
    {
        name: {
            ko: "정상 휴게소",
            en: "Summit Rest Area",
            ja: "山頂 休憩所"
        },
        type: StreamType.External,
        url: "http://konjiam.live.cdn.cloudn.co.kr/konjiam/cam01.stream/playlist.m3u8"
    },
    {
        name: {
            ko: "정상부 슬로프",
            en: "Summit Slope",
            ja: "山頂 コース"
        },
        type: StreamType.External,
        url: "http://konjiam.live.cdn.cloudn.co.kr/konjiam/cam02.stream/playlist.m3u8"
    },
    {
        name: {
            ko: "중간 슬로프",
            en: "Middle Slope",
            ja: "中腹 コース"
        },
        type: StreamType.External,
        url: "http://konjiam.live.cdn.cloudn.co.kr/konjiam/cam05.stream/playlist.m3u8"
    },
    {
        name: {
            ko: "초중급 베이스",
            en: "Beginners Base",
            ja: "初級 ベース"
        },
        type: StreamType.External,
        url: "http://konjiam.live.cdn.cloudn.co.kr/konjiam/cam03.stream/playlist.m3u8"
    },
    {
        name: {
            ko: "중상급 베이스",
            en: "Intermediate-Advanced Base",
            ja: "中上級 ベース"
        },
        type: StreamType.External,
        url: "http://konjiam.live.cdn.cloudn.co.kr/konjiam/cam04.stream/playlist.m3u8"
    },
];