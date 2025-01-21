import { Resort } from "../Util";
import { lifts } from "./lifts";
import { slopes } from "./slopes";
import { streams } from "./streams";

const Gangchon: Resort = {
    name: {
        ko: "엘리시안 강촌",
        en: "Elysian Gangchon"
    },
    homepage: "https://www.elysian.co.kr/",
    weather: "https://www.weather.go.kr/w/index.do#dong/4182025000/37.822145126315334/127.58991724984118",
    lifts: lifts,
    slopes: slopes,
    streams: streams
};

export default Gangchon;