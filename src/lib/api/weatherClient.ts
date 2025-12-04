const defaultBase = (import.meta.env.VITE_WEATHER_API_BASE_URL as string | undefined)?.replace(/\/+$/, "");

const apiBase = (
  defaultBase && defaultBase.length > 0 ? defaultBase : "https://api.pk3d.dev/weather/v0"
).replace(/\/+$/, "");

export function buildWeatherApiUrl(path: string) {
  const trimmed = path.replace(/^\/+/, "");
  return `${apiBase}/${trimmed}`;
}

function withApiHeaders(init?: RequestInit): RequestInit {
  const headers = new Headers(init?.headers ?? {});
  headers.set("Accept", "application/json");
  const apiKey =
    (import.meta.env.VITE_WEATHER_API_KEY as string | undefined) ??
    "pk3d_key_prod_4b5d82ce1d4d9e6aac4f19df";
  if (apiKey) {
    headers.set("x-api-key", apiKey);
  }
  return { ...init, headers };
}

export async function fetchWeatherApi(path: string, init?: RequestInit) {
  const url = buildWeatherApiUrl(path);
  return fetch(url, withApiHeaders(init));
}

export function withWeatherApiHeaders(init?: RequestInit) {
  return withApiHeaders(init);
}
