Simple website to see all webcams of Korean ski resorts in one place.

[곤지암](https://www.konjiamresort.co.kr/ski/liveCam.dev)

[지산](https://www.jisanresort.co.kr/m/ski/slopes/webcam.asp)

[비발디](https://www.sonohotelsresorts.com/skiboard/status)

[엘리시안강촌](https://www.elysian.co.kr/about-gangchon/sky#guide-to-using-slopes)

[오크밸리](https://oakvalley.co.kr/ski/introduction/realtime#ski-hall)

[웰리힐리](https://www.wellihillipark.com/home/customer/webcam)

[휘닉스파크](https://phoenixhnr.co.kr/page/pyeongchang/guide/operation/sketchMovie)

[용평](https://www.yongpyong.co.kr/kor/guide/realTimeNews/ypResortWebcam.do)

[알펜시아](https://www.alpensia.com/guide/web-cam.do)

[하이원](https://www.high1.com/ski/slopeView.do?key=748&mode=p)

[오투](https://www.o2resort.com/SKI/liftInfo.jsp)

[무주](https://www.mdysresort.com/guide/webcam.asp)

[에덴밸리](https://www.edenvalley.co.kr/CS/cam_pop1.asp)

## Remote resort data

The app fetches resort data JSON at runtime from the public `data` branch URL by default:

```text
https://raw.githubusercontent.com/paulkim-xr/SkiWatch/data/resorts.json
```

If `VITE_RESORT_DATA_URL` is set at build time, it overrides that default. This works on GitHub Pages because the fetch happens in the browser after load.

Accepted JSON shapes:

```json
[
  {
    "name": { "ko": "예시", "en": "Example" },
    "homepage": "https://example.com",
    "weather": "https://example.com/weather",
    "lifts": [],
    "slopes": [],
    "streams": []
  }
]
```

or:

```json
{
  "resorts": [
    {
      "name": { "ko": "예시", "en": "Example" },
      "homepage": "https://example.com",
      "weather": "https://example.com/weather",
      "lifts": [],
      "slopes": [],
      "streams": []
    }
  ]
}
```

Example GitHub raw URL:

```text
https://raw.githubusercontent.com/<owner>/<repo>/<branch>/path/to/resorts.json
```

If the remote file fails to load or is invalid, the app falls back to the bundled dataset.

`resorts.json` is intended to be hand-edited, so enum-like values should use readable strings:

```json
{
  "difficulty": "BEGINNER",
  "type": "HLS"
}
```

To bootstrap a JSON file from the current TypeScript data, run:

```bash
npm run export:resorts -- ./resorts.json
```

That writes a single JSON payload you can move to a dedicated data branch or repo and then reference with `VITE_RESORT_DATA_URL`.
