import { Resort } from "../Util";
import { lifts } from "./lifts";
import { slopes } from "./slopes";
import { streams } from "./streams";

const OakValley: Resort = {
    name: {
        ko: "오크밸리",
        en: "Oak Valley"
    },
    homepage: "https://oakvalley.co.kr/ski/introduction/slope",
    weather: "https://www.weather.go.kr/w/index.do#dong/5113033000/37.4031964505172/127.817056509833/",
    lifts: lifts,
    slopes: slopes,
    streams: streams
};

export default OakValley;