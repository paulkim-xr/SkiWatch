import { Resort } from "../Util";
import { lifts } from "./lifts";
import { slopes } from "./slopes";
import { streams } from "./streams";

const Muju: Resort = {
    name: {
        ko: "무주",
        en: "Muju"
    },
    homepage: "https://mdysresort.com/",
    weather: "https://www.weather.go.kr/w/index.do#dong/5273034000/35.88956946780578/127.73198583536177/",
    lifts: lifts,
    slopes: slopes,
    streams: streams
};

export default Muju;