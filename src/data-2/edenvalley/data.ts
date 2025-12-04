import { Resort } from "../Util";
import { lifts } from "./lifts";
import { slopes } from "./slopes";
import { streams } from "./streams";

const EdenValley: Resort = {
    name: {
        ko: "에덴밸리",
        en: "Eden Valley"
    },
    homepage: "https://www.edenvalley.co.kr/",
    weather: "https://www.weather.go.kr/w/index.do#dong/4833033000/35.4248265727876/128.985235423114",
    lifts: lifts,
    slopes: slopes,
    streams: streams
};

export default EdenValley;