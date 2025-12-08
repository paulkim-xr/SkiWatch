import { Resort } from "../Util";
import { lifts } from "./lifts";
import { slopes } from "./slopes";
import { streams } from "./streams";

const Konjiam: Resort = {
    name: {
        ko: "곤지암",
        en: "Konjiam",
        ja: "ゴンジアム"
    },
    homepage: "https://www.konjiamresort.co.kr/main.dev",
    weather: "https://www.weather.go.kr/w/index.do#dong/4146125300/37.33691985016501/127.29351991528104/",
    lifts: lifts,
    slopes: slopes,
    streams: streams
};

export default Konjiam;