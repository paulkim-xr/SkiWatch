import { Resort } from "../Util";
import { lifts } from "./lifts";
import { slopes } from "./slopes";
import { streams } from "./streams";

const Phoenix: Resort = {
    name: {
        ko: "휘닉스팤크",
        en: "Phoenix Park"
    },
    homepage: "https://phoenixhnr.co.kr/page/main/pyeongchang?q%5BhmpgDivCd%5D=PP&page=1&size=4",
    weather: "https://www.weather.go.kr/w/index.do#dong/5176034000/37.5835498839915/128.324835376419/",
    lifts: lifts,
    slopes: slopes,
    streams: streams
};

export default Phoenix;