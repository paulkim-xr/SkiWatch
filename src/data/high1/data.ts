import { Resort } from "../Util";
import { lifts } from "./lifts";
import { slopes } from "./slopes";
import { streams } from "./streams";

const High1: Resort = {
    name: {
        ko: "하이원",
        en: "High1"
    },
    homepage: "https://www.high1.com/ski/index.do",
    weather: "https://www.weather.go.kr/w/index.do#dong/5177025300/37.20814465709975/128.82597024482814/",
    lifts: lifts,
    slopes: slopes,
    streams: streams
};

export default High1;