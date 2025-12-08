import { Stream, StreamType } from "../Util";

export const streams: Stream[] = [
    {
        name: {
            ko: "스키하우스, 알프하우스, 챌린지하우스, 눈썰매장",
            en: "Ski House, Alp House, Challenge House, Snow Sled",
            ja: "Ski ハウス, Alp ハウス, Challenge ハウス, 雪そり"
        },
        type: StreamType.IFrame,
        url: "https://www.youtube.com/embed/lDg9E7h3nGE"
    },
    {
        name: {
            ko: "페가수스, 디어래퍼드, 디어하단, 드래곤",
            en: "Pegasus, Deer-Leopard, Deer Lower Zone, Dragon",
            ja: "ペガサス, ディア-レオパード, ディア 下部, ドラゴン"
        },
        type: StreamType.IFrame,
        url: "https://www.youtube.com/embed/O6_8VBu4FSA"
    },
];
