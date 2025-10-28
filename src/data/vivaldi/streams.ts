import { Stream, StreamType } from "../Util";

const BASE_URL = "https://mice.sonohotelsresorts.com/daemyung.vp.utill.09_02_02_01.ds/dmparse.dm?areaType=S";
const DEFAULT_TOKEN = ";b64707e34a200ee658255a03b96b6fb175ab8122aaed3462f8bb9f162ceab445e2ea8e66c0a0e7035c03354d7df4ff4b0a25a4519cbd8a11a5851fd6f71fef597d786574210744785c5bced6b51b7295da116039f706d42e87001761f1ba197ba91707dfb5f8ef49643e10ca4510cdcdbbfe7dbca96af5961b7265c27533c0fde1bbb7d09fe329b921da6b36a37ded7851cd4e1c7ed48db6e7a08f693331782c";

type RawCamera = {
  ko: string;
  en: string;
  channel: number;
  serial: string;
};

const rawCameras: RawCamera[] = [
  { ko: "슬로프 전경", en: "Main Overview", channel: 8, serial: "TW0014A15451" },
  { ko: "발라드 상단", en: "Ballad Upper", channel: 11, serial: "TD0314A17496" },
  { ko: "발라드 하단", en: "Ballad Lower", channel: 2, serial: "TW0014A15451" },
  { ko: "재즈 상단", en: "Jazz Upper", channel: 4, serial: "XU0121A37907" },
  { ko: "재즈 하단", en: "Jazz Lower", channel: 1, serial: "TW0014A15451" },
  { ko: "테크노 상단", en: "Techno Upper", channel: 2, serial: "XU0121A37904" },
  { ko: "테크노 하단", en: "Techno Lower", channel: 5, serial: "XU0121A37904" },
  { ko: "블루스", en: "Blues", channel: 4, serial: "TW0014A15451" },
  { ko: "레게", en: "Reggae", channel: 10, serial: "TD0314A17496" },
  { ko: "펑키 상단", en: "Funky Upper", channel: 5, serial: "TW0014A15451" },
  { ko: "펑키 하단", en: "Funky Lower", channel: 8, serial: "XU0121A37904" },
  { ko: "힙합", en: "Hip-Hop", channel: 6, serial: "TW0014A15451" },
  { ko: "스키월드 정상", en: "Ski World Summit", channel: 9, serial: "TW0014A15451" },
  { ko: "스노위랜드 1", en: "Snowy Land 1", channel: 16, serial: "TD0314A17496" },
  { ko: "스노위랜드 2", en: "Snowy Land 2", channel: 12, serial: "TD0314A17496" },
];

const uniqueCameras = rawCameras.filter((camera, index, array) => {
  const key = `${camera.channel}:${camera.serial}`;
  return array.findIndex((item) => `${item.channel}:${item.serial}` === key) === index;
});

export const streams: Stream[] = [
  ...uniqueCameras.map<Stream>((camera) => ({
    name: { ko: camera.ko, en: camera.en },
    type: StreamType.Vivaldi,
    url: `${BASE_URL}#${camera.channel}-${camera.serial}`,
    metadata: {
      vivaldi: {
        channel: camera.channel,
        serial: camera.serial,
        token: DEFAULT_TOKEN,
      },
    },
  })),
];
