import { Resort } from "../Util";
import { lifts } from "./lifts";
import { slopes } from "./slopes";
import { streams } from "./streams";

const Vivaldi: Resort = {
    name: {
        ko: "비발디파크",
        en: "Vivaldi Park"
    },
    homepage: "https://www.sonohotelsresorts.com/skiboard",
    weather: "https://www.weather.go.kr/w/index.do#dong/5172037000/37.64508331765885/127.68202103965271/",
    lifts: lifts,
    slopes: slopes,
    streams: streams
};

export default Vivaldi;