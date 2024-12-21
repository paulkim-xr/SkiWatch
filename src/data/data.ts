export enum StreamType {
  HLS,
  IFrame,
  External,
  Unavailable,
}

export interface Stream {
  name: string;
  type: StreamType;
  url: string;
}

export interface ResortStreams {
  name: string;
  weather: string;
  streams: Stream[];
}

export const streamData: ResortStreams[] = [
  {
    name: "곤지암",
    weather: "https://www.weather.go.kr/w/index.do#dong/4146125300/37.33691985016501/127.29351991528104/%EA%B2%BD%EA%B8%B0%20%EA%B4%91%EC%A3%BC%EC%8B%9C%20%EB%8F%84%EC%B2%99%EB%A9%B4/SCH/%EA%B3%A4%EC%A7%80%EC%95%94%EB%A6%AC%EC%A1%B0%ED%8A%B8%20%EC%8A%A4%ED%82%A4%EC%9E%A5",
    streams: [
      {
        name: "정상 휴게소",
        type: StreamType.External,
        url: "http://konjiam.live.cdn.cloudn.co.kr/konjiam/cam01.stream/playlist.m3u8"
      },
      {
        name: "정상부 슬로프",
        type: StreamType.External,
        url: "http://konjiam.live.cdn.cloudn.co.kr/konjiam/cam02.stream/playlist.m3u8"
      },
      {
        name: "중간 슬로프",
        type: StreamType.External,
        url: "http://konjiam.live.cdn.cloudn.co.kr/konjiam/cam05.stream/playlist.m3u8"
      },
      {
        name: "초중급 베이스",
        type: StreamType.External,
        url: "http://konjiam.live.cdn.cloudn.co.kr/konjiam/cam03.stream/playlist.m3u8"
      },
      {
        name: "중상급 베이스",
        type: StreamType.External,
        url: "http://konjiam.live.cdn.cloudn.co.kr/konjiam/cam04.stream/playlist.m3u8"
      },
    ]
  },

  {
    name: "지산",
    weather: "https://www.weather.go.kr/w/index.do#dong/4150034000/37.2167714356273/127.345183861823/%EA%B2%BD%EA%B8%B0%20%EC%9D%B4%EC%B2%9C%EC%8B%9C%20%EB%A7%88%EC%9E%A5%EB%A9%B4/SCH/%EC%A7%80%EC%82%B0%ED%8F%AC%EB%A0%88%EC%8A%A4%ED%8A%B8%EB%A6%AC%EC%A1%B0%ED%8A%B8%20%EC%8A%A4%ED%82%A4%EC%9E%A5",
    streams: [
      {
        name: "레몬",
        type: StreamType.HLS,
        url: "https://ant.livecity.co.kr:5443/jisancam/streams/jisan1.m3u8"
      },
      {
        name: "오렌지/뉴오렌지",
        type: StreamType.HLS,
        url: "https://ant.livecity.co.kr:5443/jisancam/streams/jisan2.m3u8"
      },
      {
        name: "5번/6번 슬로프",
        type: StreamType.HLS,
        url: "https://ant.livecity.co.kr:5443/jisancam/streams/jisan3.m3u8"
      },
      {
        name: "블루",
        type: StreamType.HLS,
        url: "https://ant.livecity.co.kr:5443/jisancam/streams/jisan4.m3u8"
      },
      {
        name: "실버",
        type: StreamType.HLS,
        url: "https://ant.livecity.co.kr:5443/jisancam/streams/jisan5.m3u8"
      },
    ]
  },

  // {
  //   name: "비발디",
  //   weather: "https://www.weatheri.co.kr/leisure/leisure05.php?rid=11D10302&k=6&a_name=%EB%8C%80%EB%AA%85%EB%B9%84%EB%B0%9C%EB%94%94%ED%8C%8C%ED%81%AC",
  //   streams: [
  //     {
  //       name: "스키장 정상",
  //       type: StreamType.Unavailable,
  //       url: ""
  //     },
  //     {
  //       name: "발라드",
  //       type: StreamType.Unavailable,
  //       url: ""
  //     },
  //     {
  //       name: "재즈",
  //       type: StreamType.Unavailable,
  //       url: ""
  //     },
  //     {
  //       name: "테크노",
  //       type: StreamType.Unavailable,
  //       url: ""
  //     },
  //     {
  //       name: "블루스",
  //       type: StreamType.Unavailable,
  //       url: ""
  //     },
  //     {
  //       name: "힙합",
  //       type: StreamType.Unavailable,
  //       url: ""
  //     },
  //     {
  //       name: "스키장 전경",
  //       type: StreamType.Unavailable,
  //       url: ""
  //     },
  //   ]
  // },
  {
    name: "비발디",
    weather: "https://www.weather.go.kr/w/index.do#dong/5172037000/37.64508331765885/127.68202103965271/%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%ED%99%8D%EC%B2%9C%EA%B5%B0%20%EC%84%9C%EB%A9%B4/SCH/%EC%86%8C%EB%85%B8%EB%B2%A8%EB%B9%84%EB%B0%9C%EB%94%94%ED%8C%8C%ED%81%AC",
    streams: [
      {
        name: "공식 홈페이지",
        type: StreamType.External,
        url: "https://www.sonohotelsresorts.com/skiboard/status"
      },
    ]
  },

  {
    name: "엘리시안강촌",
    weather: "https://www.weather.go.kr/w/index.do#dong/4182025000/37.822145126315334/127.58991724984118/%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%B6%98%EC%B2%9C%EC%8B%9C%20%EB%82%A8%EC%82%B0%EB%A9%B4/SCH/%EC%97%98%EB%A6%AC%EC%8B%9C%EC%95%88%EA%B0%95%EC%B4%8C",
    streams: [
      {
        name: "스키하우스, 알프하우스, 챌린지하우스, 눈썰매장",
        type: StreamType.IFrame,
        url: "https://www.youtube.com/embed/XMwm6A_745w"
      },
      {
        name: "페가수스, 디어래퍼드, 디어하단, 드래곤",
        type: StreamType.IFrame,
        url: "https://www.youtube.com/embed/O-12c9lGP34"
      },
    ]
  },

  {
    name: "오크밸리",
    weather: "https://www.weather.go.kr/w/index.do#dong/5113033000/37.4031964505172/127.817056509833/%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%9B%90%EC%A3%BC%EC%8B%9C%20%EC%A7%80%EC%A0%95%EB%A9%B4/SCH/%EC%98%A4%ED%81%AC%EB%B0%B8%EB%A6%AC%20%EC%8A%A4%ED%82%A4%EC%9E%A5",
    streams: [
      {
        name: "스노우파크 옥탑",
        type: StreamType.HLS,
        url: "https://cctv-oak9.ktcdn.co.kr/cctv/ch2.stream/chunklist.m3u8"
      },
      {
        name: "I 슬로프",
        type: StreamType.HLS,
        url: "https://cctv-oak9.ktcdn.co.kr/cctv/ch9.stream/chunklist.m3u8"
      },
      {
        name: "G 슬로프",
        type: StreamType.HLS,
        url: "https://cctv-oak9.ktcdn.co.kr/cctv/ch7.stream/chunklist.m3u8"
      },
      {
        name: "F 슬로프",
        type: StreamType.HLS,
        url: "https://cctv-oak9.ktcdn.co.kr/cctv/ch6.stream/chunklist.m3u8"
      },
      {
        name: "플라워리프트 하차장",
        type: StreamType.HLS,
        url: "https://cctv-oak9.ktcdn.co.kr/cctv/ch5.stream/chunklist.m3u8"
      },
    ]
  },

  {
    name: "웰리힐리",
    weather: "https://www.weather.go.kr/w/index.do#dong/5173033000/37.4855522986022/128.247790847244/%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%ED%9A%A1%EC%84%B1%EA%B5%B0%20%EB%91%94%EB%82%B4%EB%A9%B4/SCH/%EC%9B%B0%EB%A6%AC%ED%9E%90%EB%A6%AC%ED%8C%8C%ED%81%AC%20%EC%8A%A4%EB%85%B8%EC%9A%B0%ED%8C%8C%ED%81%AC",
    // weather: "https://hosting.coreintec.com/weather/iframe/wellihilli/",
    streams: [
      {
        name: "알파",
        type: StreamType.HLS,
        url: "https://live.wellihillipark.com/wellihillipark/_definst_/cam02.stream/playlist.m3u8"
      },
      {
        name: "베이스",
        type: StreamType.HLS,
        url: "https://live.wellihillipark.com/wellihillipark/_definst_/cam03.stream/playlist.m3u8"
      },
      {
        name: "리조트 전경",
        type: StreamType.HLS,
        url: "https://live.wellihillipark.com/wellihillipark/_definst_/cam04.stream/playlist.m3u8"
      },
      {
        name: "정상광장",
        type: StreamType.HLS,
        url: "https://live.wellihillipark.com/wellihillipark/_definst_/cam05.stream/playlist.m3u8"
      },
      {
        name: "패밀리",
        type: StreamType.HLS,
        url: "https://live.wellihillipark.com/wellihillipark/_definst_/cam06.stream/playlist.m3u8"
      },
      {
        name: "워터플래닛",
        type: StreamType.HLS,
        url: "https://live.wellihillipark.com/wellihillipark/_definst_/cam07.stream/playlist.m3u8"
      },
    ]
  },

  {
    name: "휘닉스파크",
    weather: "https://www.weather.go.kr/w/index.do#dong/5176034000/37.5805715284306/128.322414371847/%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%ED%8F%89%EC%B0%BD%EA%B5%B0%20%EB%B4%89%ED%8F%89%EB%A9%B4/SCH/%ED%9C%98%EB%8B%89%EC%8A%A4%20%EC%8A%A4%EB%85%B8%EC%9A%B0%ED%8C%8C%ED%81%AC",
    streams: [
      {
        name: "호크/스패로우",
        type: StreamType.HLS,
        url: "https://streaming.phoenixhnr.co.kr/hls/yh_02.m3u8"
      },
      {
        name: "도도",
        type: StreamType.HLS,
        url: "https://streaming.phoenixhnr.co.kr/hls/sp_01.m3u8"
      },
      {
        name: "불새마루",
        type: StreamType.HLS,
        url: "https://streaming.phoenixhnr.co.kr/hls/ht_01.m3u8"
      },
      {
        name: "베이스",
        type: StreamType.HLS,
        url: "https://streaming.phoenixhnr.co.kr/hls/bc_02.m3u8"
      },
      {
        name: "펭귄",
        type: StreamType.HLS,
        url: "https://streaming.phoenixhnr.co.kr/hls/bc_01.m3u8"
      },
      {
        name: "스노우 빌리지",
        type: StreamType.HLS,
        url: "https://streaming.phoenixhnr.co.kr/hls/yh_01.m3u8"
      },
    ]
  },

  {
    name: "용평",
    weather: "https://www.weather.go.kr/w/index.do#dong/5176038000/37.64575528879609/128.6805216545055/%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%ED%8F%89%EC%B0%BD%EA%B5%B0%20%EB%8C%80%EA%B4%80%EB%A0%B9%EB%A9%B4/SCH/%EB%AA%A8%EB%82%98%EC%9A%A9%ED%8F%89%20%EC%8A%A4%ED%82%A4%EC%9E%A5",
    streams: [
      {
        name: "옐로우",
        type: StreamType.HLS,
        url: "https://live.yongpyong.co.kr/Ycam1/cam03.stream/playlist.m3u8"
      },
      {
        name: "핑크",
        type: StreamType.HLS,
        url: "https://live.yongpyong.co.kr/Ycam1/cam07.stream/playlist.m3u8"
      },
      {
        name: "베이스 전경 / 레드 슬로프",
        type: StreamType.HLS,
        url: "https://live.yongpyong.co.kr/Ycam1/cam10.stream/playlist.m3u8"
      },
      {
        name: "메가그린",
        type: StreamType.HLS,
        url: "https://live.yongpyong.co.kr/Ycam1/cam01.stream/playlist.m3u8"
      },
      {
        name: "골드 베이스",
        type: StreamType.HLS,
        url: "https://live.yongpyong.co.kr/Ycam1/cam06.stream/playlist.m3u8"
      },
      {
        name: "골드 정상",
        type: StreamType.HLS,
        url: "https://live.yongpyong.co.kr/Ycam1/cam04.stream/playlist.m3u8"
      },
      {
        name: "레인보우 베이스",
        type: StreamType.HLS,
        url: "https://live.yongpyong.co.kr/Ycam1/cam08.stream/playlist.m3u8"
      },
      {
        name: "레인보우 정상",
        type: StreamType.HLS,
        url: "https://live.yongpyong.co.kr/Ycam1/cam14.stream/playlist.m3u8"
      },
      {
        name: "레인보우 파라다이스 초입",
        type: StreamType.HLS,
        url: "https://live.yongpyong.co.kr/Ycam1/cam09.stream/playlist.m3u8"
      },
      {
        name: "발왕산 숲길",
        type: StreamType.HLS,
        url: "https://live.yongpyong.co.kr/Ycam1/cam15.stream/playlist.m3u8"
      },
      {
        name: "용평 진입로",
        type: StreamType.HLS,
        url: "https://live.yongpyong.co.kr/Ycam1/cam05.stream/playlist.m3u8"
      },
      {
        name: "피크 아일랜드",
        type: StreamType.HLS,
        url: "https://live.yongpyong.co.kr/Ycam1/cam11.stream/playlist.m3u8"
      },
    ]
  },

  {
    name: "알펜시아",
    weather: "https://www.weather.go.kr/w/index.do#dong/5176038000/37.656374437920505/128.6733956273516/%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%ED%8F%89%EC%B0%BD%EA%B5%B0%20%EB%8C%80%EA%B4%80%EB%A0%B9%EB%A9%B4/SCH/%EC%95%8C%ED%8E%9C%EC%8B%9C%EC%95%84%EB%A6%AC%EC%A1%B0%ED%8A%B8%20%EC%8A%A4%ED%82%A4700",
    streams: [
      {
        name: "현장웹캠",
        type: StreamType.IFrame,
        url: "https://www.youtube.com/embed/fStEQyg7SWc"
      },
    ]
  },

  // {
  //   name: "하이원",
  //   streams: [
  //     {
  //       name: "제우스2 입구",
  //       type: StreamType.HLS,
  //       url: "http://59.30.12.195:1935/live/_definst_/ch1.stream/playlist.m3u8"
  //     },
  //     {
  //       name: "헤라2 입구",
  //       type: StreamType.HLS,
  //       url: "http://59.30.12.195:1935/live/_definst_/ch2.stream/playlist.m3u8"
  //     },
  //     {
  //       name: "하이원 탑",
  //       type: StreamType.HLS,
  //       url: "http://59.30.12.195:1935/live/_definst_/ch3.stream/playlist.m3u8"
  //     },
  //     {
  //       name: "아테나1",
  //       type: StreamType.HLS,
  //       url: "http://59.30.12.195:1935/live/_definst_/ch4.stream/playlist.m3u8"
  //     },
  //     {
  //       name: "마운틴 허브",
  //       type: StreamType.HLS,
  //       url: "http://59.30.12.195:1935/live/_definst_/ch5.stream/playlist.m3u8"
  //     },
  //     {
  //       name: "아테나2",
  //       type: StreamType.HLS,
  //       url: "http://59.30.12.195:1935/live/_definst_/ch6.stream/playlist.m3u8"
  //     },
  //     {
  //       name: "마운틴 베이스",
  //       type: StreamType.HLS,
  //       url: "http://59.30.12.195:1935/live/_definst_/ch7.stream/playlist.m3u8"
  //     },
  //     {
  //       name: "아테나2 하단",
  //       type: StreamType.HLS,
  //       url: "http://59.30.12.195:1935/live/_definst_/ch8.stream/playlist.m3u8"
  //     },
  //     {
  //       name: "빅토리아 상단",
  //       type: StreamType.HLS,
  //       url: "http://59.30.12.195:1935/live/_definst_/ch9.stream/playlist.m3u8"
  //     },
  //     {
  //       name: "제우스2",
  //       type: StreamType.HLS,
  //       url: "http://59.30.12.195:1935/live/_definst_/ch10.stream/playlist.m3u8"
  //     },
  //     {
  //       name: "밸리 허브",
  //       type: StreamType.HLS,
  //       url: "http://59.30.12.195:1935/live/_definst_/ch11.stream/playlist.m3u8"
  //     },
  //     {
  //       name: "빅토리아1",
  //       type: StreamType.HLS,
  //       url: "http://59.30.12.195:1935/live/_definst_/ch12.stream/playlist.m3u8"
  //     },
  //     {
  //       name: "제우스3",
  //       type: StreamType.HLS,
  //       url: "http://59.30.12.195:1935/live/_definst_/ch13.stream/playlist.m3u8"
  //     },
  //     {
  //       name: "제우스3 중단부",
  //       type: StreamType.HLS,
  //       url: "http://59.30.12.195:1935/live/_definst_/ch14.stream/playlist.m3u8"
  //     },
  //     {
  //       name: "아폴로4 중단부",
  //       type: StreamType.HLS,
  //       url: "http://59.30.12.195:1935/live/_definst_/ch15.stream/playlist.m3u8"
  //     },
  //     {
  //       name: "아폴로 베이스",
  //       type: StreamType.HLS,
  //       url: "http://59.30.12.195:1935/live/_definst_/ch16.stream/playlist.m3u8"
  //     },
  //     {
  //       name: "제우스3 하단",
  //       type: StreamType.HLS,
  //       url: "http://59.30.12.195:1935/live/_definst_/ch17.stream/playlist.m3u8"
  //     },
  //     {
  //       name: "밸리 베이스",
  //       type: StreamType.HLS,
  //       url: "http://59.30.12.195:1935/live/_definst_/ch18.stream/playlist.m3u8"
  //     },
  //   ]
  // },

  {
    name: "하이원",
    weather: "https://www.weather.go.kr/w/index.do#dong/5177025300/37.20403827333288/128.83883509780551/%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%A0%95%EC%84%A0%EA%B5%B0%20%EA%B3%A0%ED%95%9C%EC%9D%8D/SCH/%ED%95%98%EC%9D%B4%EC%9B%90%EB%A6%AC%EC%A1%B0%ED%8A%B8%20%EC%8A%A4%ED%82%A4%EC%9E%A5",
    streams: [
      {
        name: "제우스2 입구",
        type: StreamType.External,
        url: "http://www.high1.com/webcam/pop_webcam.do?ch=1"
      },
      {
        name: "헤라2 입구",
        type: StreamType.External,
        url: "http://www.high1.com/webcam/pop_webcam.do?ch=2"
      },
      {
        name: "하이원 탑",
        type: StreamType.External,
        url: "http://www.high1.com/webcam/pop_webcam.do?ch=3"
      },
      {
        name: "아테나1",
        type: StreamType.External,
        url: "http://www.high1.com/webcam/pop_webcam.do?ch=4"
      },
      {
        name: "마운틴 허브",
        type: StreamType.External,
        url: "http://www.high1.com/webcam/pop_webcam.do?ch=5"
      },
      {
        name: "아테나2",
        type: StreamType.External,
        url: "http://www.high1.com/webcam/pop_webcam.do?ch=6"
      },
      {
        name: "마운틴 베이스",
        type: StreamType.External,
        url: "http://www.high1.com/webcam/pop_webcam.do?ch=7"
      },
      {
        name: "아테나2 하단",
        type: StreamType.External,
        url: "http://www.high1.com/webcam/pop_webcam.do?ch=8"
      },
      {
        name: "빅토리아 상단",
        type: StreamType.External,
        url: "http://www.high1.com/webcam/pop_webcam.do?ch=9"
      },
      {
        name: "제우스2",
        type: StreamType.External,
        url: "http://www.high1.com/webcam/pop_webcam.do?ch=10"
      },
      {
        name: "밸리 허브",
        type: StreamType.External,
        url: "http://www.high1.com/webcam/pop_webcam.do?ch=11"
      },
      {
        name: "빅토리아1",
        type: StreamType.External,
        url: "http://www.high1.com/webcam/pop_webcam.do?ch=12"
      },
      {
        name: "제우스3",
        type: StreamType.External,
        url: "http://www.high1.com/webcam/pop_webcam.do?ch=13"
      },
      {
        name: "제우스3 중단부",
        type: StreamType.External,
        url: "http://www.high1.com/webcam/pop_webcam.do?ch=14"
      },
      {
        name: "아폴로4 중단부",
        type: StreamType.External,
        url: "http://www.high1.com/webcam/pop_webcam.do?ch=15"
      },
      {
        name: "아폴로 베이스",
        type: StreamType.External,
        url: "http://www.high1.com/webcam/pop_webcam.do?ch=16"
      },
      {
        name: "제우스3 하단",
        type: StreamType.External,
        url: "http://www.high1.com/webcam/pop_webcam.do?ch=17"
      },
      {
        name: "밸리 베이스",
        type: StreamType.External,
        url: "http://www.high1.com/webcam/pop_webcam.do?ch=18"
      },
    ]
  },

  // {
  //   name: "오투",
  //   streams: [
  //     {
  //       name: "스키하우스",
  //       type: StreamType.HLS,
  //       url: "http://118.46.149.144:8080/ramdisk/cam0.m3u8"
  //     },
  //     {
  //       name: "오렌지",
  //       type: StreamType.HLS,
  //       url: "http://118.46.149.144:8080/ramdisk/cam1.m3u8"
  //     },
  //     {
  //       name: "버금마루",
  //       type: StreamType.HLS,
  //       url: "http://118.46.149.144:8080/ramdisk/cam2.m3u8"
  //     },
  //     {
  //       name: "으뜸마루",
  //       type: StreamType.HLS,
  //       url: "http://118.46.149.144:8080/ramdisk/cam3.m3u8"
  //     },
  //   ]
  // },

  {
    name: "오투",
    weather: "https://www.weather.go.kr/w/index.do#dong/5119053500/37.176269951563/128.940538490386/%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%ED%83%9C%EB%B0%B1%EC%8B%9C%20%ED%99%A9%EC%A7%80%EB%8F%99/SCH/%EC%98%A4%ED%88%AC%EB%A6%AC%EC%A1%B0%ED%8A%B8%20%EC%8A%A4%ED%82%A4%EC%9E%A5",
    streams: [
      {
        name: "스키하우스",
        type: StreamType.External,
        url: "http://118.46.149.144:8080/streaming/streamhls.jsp?ch=0"
      },
      {
        name: "오렌지",
        type: StreamType.External,
        url: "http://118.46.149.144:8080/streaming/streamhls.jsp?ch=1"
      },
      {
        name: "버금마루",
        type: StreamType.External,
        url: "http://118.46.149.144:8080/streaming/streamhls.jsp?ch=2"
      },
      {
        name: "으뜸마루",
        type: StreamType.External,
        url: "http://118.46.149.144:8080/streaming/streamhls.jsp?ch=3"
      },
    ]
  },

  // {
  //   name: "무주",
  //   streams: [
  //     {
  //       name: "설천봉 정상",
  //       type: StreamType.HLS,
  //       url: "http://muju.live.cdn.cloudn.co.kr/mujuresort/_definst_/cam07.stream/playlist.m3u8"
  //     },
  //     {
  //       name: "설천상단슬로프",
  //       type: StreamType.HLS,
  //       url: "http://muju.live.cdn.cloudn.co.kr/mujuresort/_definst_/cam06.stream/playlist.m3u8"
  //     },
  //     {
  //       name: "모차르트, 미뉴에트",
  //       type: StreamType.HLS,
  //       url: "http://muju.live.cdn.cloudn.co.kr/mujuresort/_definst_/cam08.stream/playlist.m3u8"
  //     },
  //     {
  //       name: "폴카",
  //       type: StreamType.HLS,
  //       url: "http://muju.live.cdn.cloudn.co.kr/mujuresort/_definst_/cam09.stream/playlist.m3u8"
  //     },
  //     {
  //       name: "실크로드, 미뉴에트 하단",
  //       type: StreamType.HLS,
  //       url: "http://muju.live.cdn.cloudn.co.kr/mujuresort/_definst_/cam10.stream/playlist.m3u8"
  //     },
  //     {
  //       name: "만선봉 정상",
  //       type: StreamType.HLS,
  //       url: "http://muju.live.cdn.cloudn.co.kr/mujuresort/_definst_/cam02.stream/playlist.m3u8"
  //     },
  //     {
  //       name: "하이디하우스",
  //       type: StreamType.HLS,
  //       url: "http://muju.live.cdn.cloudn.co.kr/mujuresort/_definst_/cam03.stream/playlist.m3u8"
  //     },
  //     {
  //       name: "서역기행, 썬다운",
  //       type: StreamType.HLS,
  //       url: "http://muju.live.cdn.cloudn.co.kr/mujuresort/_definst_/cam04.stream/playlist.m3u8"
  //     },
  //     {
  //       name: "커넥션",
  //       type: StreamType.HLS,
  //       url: "http://muju.live.cdn.cloudn.co.kr/mujuresort/_definst_/cam11.stream/playlist.m3u8"
  //     },
  //     {
  //       name: "설천하우스",
  //       type: StreamType.HLS,
  //       url: "http://muju.live.cdn.cloudn.co.kr/mujuresort/_definst_/cam05.stream/playlist.m3u8"
  //     },
  //     {
  //       name: "만선하우스",
  //       type: StreamType.HLS,
  //       url: "http://muju.live.cdn.cloudn.co.kr/mujuresort/_definst_/cam01.stream/playlist.m3u8"
  //     },
  //   ]
  // },

  {
    name: "무주",
    weather: "https://www.weather.go.kr/w/index.do#dong/5273034000/35.89090319690769/127.73686354262368/%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EB%AC%B4%EC%A3%BC%EA%B5%B0%20%EC%84%A4%EC%B2%9C%EB%A9%B4/SCH/%EB%AC%B4%EC%A3%BC%EB%8D%95%EC%9C%A0%EC%82%B0%EB%A6%AC%EC%A1%B0%ED%8A%B8%20%EC%8A%A4%ED%82%A4%EC%9E%A5",
    streams: [
      {
        name: "설천봉 정상",
        type: StreamType.External,
        url: "http://www.mdysresort.com/guide/webcam_popup.asp?cam_num=07"
      },
      {
        name: "설천상단슬로프",
        type: StreamType.External,
        url: "http://www.mdysresort.com/guide/webcam_popup.asp?cam_num=06"
      },
      {
        name: "모차르트, 미뉴에트",
        type: StreamType.External,
        url: "http://www.mdysresort.com/guide/webcam_popup.asp?cam_num=08"
      },
      {
        name: "폴카",
        type: StreamType.External,
        url: "http://www.mdysresort.com/guide/webcam_popup.asp?cam_num=09"
      },
      {
        name: "실크로드, 미뉴에트 하단",
        type: StreamType.External,
        url: "http://www.mdysresort.com/guide/webcam_popup.asp?cam_num=10"
      },
      {
        name: "만선봉 정상",
        type: StreamType.External,
        url: "http://www.mdysresort.com/guide/webcam_popup.asp?cam_num=02"
      },
      {
        name: "하이디하우스",
        type: StreamType.External,
        url: "http://www.mdysresort.com/guide/webcam_popup.asp?cam_num=03"
      },
      {
        name: "서역기행, 썬다운",
        type: StreamType.External,
        url: "http://www.mdysresort.com/guide/webcam_popup.asp?cam_num=04"
      },
      {
        name: "커넥션",
        type: StreamType.External,
        url: "http://www.mdysresort.com/guide/webcam_popup.asp?cam_num=11"
      },
      {
        name: "설천하우스",
        type: StreamType.External,
        url: "http://www.mdysresort.com/guide/webcam_popup.asp?cam_num=05"
      },
      {
        name: "만선하우스",
        type: StreamType.External,
        url: "http://www.mdysresort.com/guide/webcam_popup.asp?cam_num=01"
      },
    ]
  },

  {
    name: "에덴밸리",
    weather: "https://www.weather.go.kr/w/index.do#dong/4833033000/35.4248265727876/128.985235423114/%EA%B2%BD%EB%82%A8%20%EC%96%91%EC%82%B0%EC%8B%9C%20%EC%9B%90%EB%8F%99%EB%A9%B4/SCH/%EC%97%90%EB%8D%B4%EB%B0%B8%EB%A6%AC%EB%A6%AC%EC%A1%B0%ED%8A%B8%20%EC%8A%A4%ED%82%A4%EC%9E%A5",
    streams: [
      {
        name: "베이직",
        type: StreamType.Unavailable,
        url: "https://rtsp.me/embed/b5FsND7i/"
      },
      {
        name: "쥬피터",
        type: StreamType.Unavailable,
        url: "https://rtsp.me/embed/iHQDh9S3/"
      },
      {
        name: "우라누스",
        type: StreamType.Unavailable,
        url: "https://rtsp.me/embed/h6RyNKYB/"
      },
      {
        name: "광장",
        type: StreamType.Unavailable,
        url: "https://rtsp.me/embed/ftRQtKZD/"
      },
    ]
  }
];
