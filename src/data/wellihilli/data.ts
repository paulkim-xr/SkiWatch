import { Resort } from "../Util";
import { lifts } from "./lifts";
import { slopes } from "./slopes";
import { streams } from "./streams";

const WelliHilli: Resort = {
    name: {
        ko: "웰리힐리파크",
        en: "WelliHilli Park",
        ja: "ウェリーヒリパーク"
    },
    homepage: "https://www.wellihillipark.com/snowpark",
    weather: "https://www.weather.go.kr/w/index.do#dong/5173033000/37.4855522986022/128.247790847244/",
    lifts: lifts,
    slopes: slopes,
    streams: streams
};

export default WelliHilli;