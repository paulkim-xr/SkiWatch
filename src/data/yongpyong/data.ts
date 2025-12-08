import { Resort } from "../Util";
import { lifts } from "./lifts";
import { slopes } from "./slopes";
import { streams } from "./streams";

const Yongpyong: Resort = {
    name: {
        ko: "용평",
        en: "Yongpyong",
        ja: "ヨンピョン"
    },
    homepage: "https://www.yongpyong.co.kr/kor/skiNboard/introduce.do",
    weather: "https://www.weather.go.kr/w/index.do#dong/5176038000/37.64575528879609/128.6805216545055/",
    lifts: lifts,
    slopes: slopes,
    streams: streams
};

export default Yongpyong;