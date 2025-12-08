import { Resort } from "../Util";
import { lifts } from "./lifts";
import { slopes } from "./slopes";
import { streams } from "./streams";

const Alpensia: Resort = {
    name: {
        ko: "알펜시아",
        en: "Alpensia",
        ja: "アルペンシア"
    },
    homepage: "https://www.alpensia.com/main.do",
    weather: "https://www.weather.go.kr/w/index.do#dong/5176038000/37.656374437920505/128.6733956273516",
    lifts: lifts,
    slopes: slopes,
    streams: streams
};

export default Alpensia;