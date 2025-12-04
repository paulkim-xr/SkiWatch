const KST_OFFSET_MS = 9 * 60 * 60 * 1000;

type UltraShortMode = "now" | "forecast";

const MODE_RELEASE_MINUTE: Record<UltraShortMode, number> = {
  now: 10, // 초단기실황은 매 정시 +10분 이후 최신 본문 제공
  forecast: 45, // 초단기예보는 매시 30분 생성, 45분 이후 API에 노출
};

const MODE_BASE_MINUTE: Record<UltraShortMode, number> = {
  now: 0,
  forecast: 30,
};

const VILLAGE_RELEASE_MINUTE = 45;
const VILLAGE_BASE_HOURS = [2, 5, 8, 11, 14, 17, 20, 23];

function getKstDate(now: Date) {
  return new Date(now.getTime() + KST_OFFSET_MS);
}

function formatDate(date: Date) {
  const year = date.getUTCFullYear();
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
  const day = date.getUTCDate().toString().padStart(2, "0");
  return `${year}${month}${day}`;
}

function formatTime(date: Date) {
  const hour = date.getUTCHours().toString().padStart(2, "0");
  const minute = date.getUTCMinutes().toString().padStart(2, "0");
  return `${hour}${minute}`;
}

export function getUltraShortBaseDateTime(mode: UltraShortMode = "forecast", now: Date = new Date()) {
  const kst = getKstDate(now);
  const releaseMinute = MODE_RELEASE_MINUTE[mode];
  const baseMinute = MODE_BASE_MINUTE[mode];

  if (kst.getUTCMinutes() < releaseMinute) {
    kst.setUTCHours(kst.getUTCHours() - 1);
  }
  kst.setUTCMinutes(baseMinute, 0, 0);

  return {
    baseDate: formatDate(kst),
    baseTime: formatTime(kst),
  };
}

export function getVillageBaseDateTime(now: Date = new Date()) {
  const kst = getKstDate(now);
  const minutesSinceMidnight = kst.getUTCHours() * 60 + kst.getUTCMinutes();
  let targetHour = VILLAGE_BASE_HOURS[VILLAGE_BASE_HOURS.length - 1];
  let foundRelease = false;

  for (const hour of VILLAGE_BASE_HOURS) {
    const releaseMinutes = hour * 60 + VILLAGE_RELEASE_MINUTE;
    if (minutesSinceMidnight >= releaseMinutes) {
      targetHour = hour;
      foundRelease = true;
    }
  }

  if (!foundRelease) {
    targetHour = VILLAGE_BASE_HOURS[VILLAGE_BASE_HOURS.length - 1];
    kst.setUTCDate(kst.getUTCDate() - 1);
  }

  kst.setUTCHours(targetHour, 0, 0, 0);
  return {
    baseDate: formatDate(kst),
    baseTime: `${targetHour.toString().padStart(2, "0")}00`,
  };
}
