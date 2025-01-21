import { Resort } from "../Util";
import { lifts } from "./lifts";
import { slopes } from "./slopes";
import { streams } from "./streams";

const O2: Resort = {
    name: {
        ko: "오투",
        en: "O2"
    },
    homepage: "https://www.o2resort.com/main.xhtml",
    weather: "https://www.weather.go.kr/w/index.do#dong/5119053500/37.176269951563/128.940538490386/",
    lifts: lifts,
    slopes: slopes,
    streams: streams
};

export default O2;