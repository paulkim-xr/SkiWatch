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
  streams: Stream[];
}

export const streamData: ResortStreams[] = [
  {
    name: "곤지암",
    streams: [
      {
        name: "정상 휴게소",
        type: StreamType.HLS,
        url: "https://konjiam.live.cdn.cloudn.co.kr/konjiam/cam01.stream/playlist.m3u8"
      },
      {
        name: "정상부 슬로프",
        type: StreamType.HLS,
        url: "https://konjiam.live.cdn.cloudn.co.kr/konjiam/cam02.stream/playlist.m3u8"
      },
      {
        name: "중간 슬로프",
        type: StreamType.HLS,
        url: "https://konjiam.live.cdn.cloudn.co.kr/konjiam/cam05.stream/playlist.m3u8"
      },
      {
        name: "초중급 베이스",
        type: StreamType.HLS,
        url: "https://konjiam.live.cdn.cloudn.co.kr/konjiam/cam03.stream/playlist.m3u8"
      },
      {
        name: "중상급 베이스",
        type: StreamType.HLS,
        url: "https://konjiam.live.cdn.cloudn.co.kr/konjiam/cam04.stream/playlist.m3u8"
      },
    ]
  },

  {
    name: "지산",
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

  {
    name: "비발디",
    streams: [
      {
        name: "스키장 정상",
        type: StreamType.Unavailable,
        url: ""
      },
      {
        name: "발라드",
        type: StreamType.Unavailable,
        url: ""
      },
      {
        name: "재즈",
        type: StreamType.Unavailable,
        url: ""
      },
      {
        name: "테크노",
        type: StreamType.Unavailable,
        url: ""
      },
      {
        name: "블루스",
        type: StreamType.Unavailable,
        url: ""
      },
      {
        name: "힙합",
        type: StreamType.Unavailable,
        url: ""
      },
      {
        name: "스키장 전경",
        type: StreamType.Unavailable,
        url: ""
      },
    ]
  },

  {
    name: "엘리시안강촌",
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
    streams: [
      {
        name: "스키광장",
        type: StreamType.Unavailable,
        url: ""
      },
      {
        name: "I 슬로프",
        type: StreamType.Unavailable,
        url: ""
      },
      {
        name: "G 슬로프",
        type: StreamType.Unavailable,
        url: ""
      },
      {
        name: "F 슬로프",
        type: StreamType.Unavailable,
        url: ""
      },
    ]
  },

  {
    name: "웰리힐리",
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
    streams: [
      {
        name: "베이직",
        type: StreamType.Unavailable,
        url: ""
      },
      {
        name: "쥬피터",
        type: StreamType.Unavailable,
        url: ""
      },
      {
        name: "우라누스",
        type: StreamType.Unavailable,
        url: ""
      },
      {
        name: "광장",
        type: StreamType.Unavailable,
        url: ""
      },
    ]
  }
];
