export type WeatherStation = {
  stationId: string;
  name: string;
  latitude: number;
  longitude: number;
};

export const weatherStations: Record<string, WeatherStation> = {
  konjiam: { stationId: "108", name: "Seoul", latitude: 37.5665, longitude: 126.978 },
  jisan: { stationId: "108", name: "Seoul", latitude: 37.339, longitude: 127.28 },
  vivaldi: { stationId: "101", name: "Chuncheon", latitude: 37.7151, longitude: 127.7144 },
  "elysian-gangchon": { stationId: "101", name: "Chuncheon", latitude: 37.82, longitude: 127.62 },
  oakvalley: { stationId: "114", name: "Wonju", latitude: 37.34, longitude: 127.92 },
  wellihilli: { stationId: "114", name: "Wonju", latitude: 37.34, longitude: 128.18 },
  phoenix: { stationId: "95", name: "Daegwallyeong", latitude: 37.57, longitude: 128.32 },
  yongpyong: { stationId: "95", name: "Daegwallyeong", latitude: 37.64, longitude: 128.68 },
  alpensia: { stationId: "95", name: "Daegwallyeong", latitude: 37.66, longitude: 128.67 },
  high1: { stationId: "129", name: "Taebaek", latitude: 37.209, longitude: 128.98 },
  o2: { stationId: "129", name: "Taebaek", latitude: 37.178, longitude: 128.91 },
  muju: { stationId: "135", name: "Muju", latitude: 35.89, longitude: 127.73 },
  "eden-valley": { stationId: "159", name: "Yangsan", latitude: 35.42, longitude: 129.04 },
};

export function getWeatherStation(resortSlug: string) {
  return weatherStations[resortSlug];
}
