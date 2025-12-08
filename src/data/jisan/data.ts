import { Resort } from "../Util";
import { lifts } from "./lifts";
import { slopes } from "./slopes";
import { streams } from "./streams";

const Jisan: Resort = {
    name: {
        ko: "지산",
        en: "Jisan",
        ja: "チサン"
    },
    homepage: "https://jisanresort.co.kr/w/ski/",
    weather: "https://www.weather.go.kr/w/index.do#dong/4150034000/37.2167714356273/127.345183861823/",
    lifts: lifts,
    slopes: slopes,
    streams: streams
};

export default Jisan;