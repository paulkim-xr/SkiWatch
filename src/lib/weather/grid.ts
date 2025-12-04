const DEGRAD = Math.PI / 180.0;
const RE = 6371.00877; // Earth radius (km)
const GRID = 5.0; // Grid spacing (km)
const SLAT1 = 30.0; // 1st standard parallel
const SLAT2 = 60.0; // 2nd standard parallel
const OLON = 126.0; // Reference longitude
const OLAT = 38.0; // Reference latitude
const XO = 43.0; // Reference point X (GRID)
const YO = 136.0; // Reference point Y (GRID)

const re = RE / GRID;
const slat1 = SLAT1 * DEGRAD;
const slat2 = SLAT2 * DEGRAD;
const olon = OLON * DEGRAD;
const olat = OLAT * DEGRAD;

const sn = Math.log(Math.cos(slat1) / Math.cos(slat2)) /
  Math.log(Math.tan(Math.PI * 0.25 + slat2 * 0.5) / Math.tan(Math.PI * 0.25 + slat1 * 0.5));
const sf = Math.pow(Math.tan(Math.PI * 0.25 + slat1 * 0.5), sn) * Math.cos(slat1) / sn;
const ro = re * sf / Math.pow(Math.tan(Math.PI * 0.25 + olat * 0.5), sn);

export function toGrid(lat: number, lon: number) {
  let ra = Math.tan(Math.PI * 0.25 + (lat) * DEGRAD * 0.5);
  ra = re * sf / Math.pow(ra, sn);
  let theta = lon * DEGRAD - olon;
  if (theta > Math.PI) theta -= 2.0 * Math.PI;
  if (theta < -Math.PI) theta += 2.0 * Math.PI;
  theta *= sn;

  const x = Math.floor(ra * Math.sin(theta) + XO + 0.5);
  const y = Math.floor(ro - ra * Math.cos(theta) + YO + 0.5);
  return { nx: x, ny: y };
}
