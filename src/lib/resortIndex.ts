import { resorts } from "@/data/data";
import { Resort, Stream } from "@/data/Util";
import { getStreamIdentifier } from "@/lib/streamKeys";
import { LocalizedText, defaultLocale, getLocalizedText } from "@/lib/i18n/locales";

const manualResortSlugs: Record<string, string> = {
  "https://www.konjiamresort.co.kr/main.dev": "konjiam",
  "https://jisanresort.co.kr/w/ski/": "jisan",
  "https://www.sonohotelsresorts.com/skiboard": "vivaldi",
  "https://www.elysian.co.kr/": "elysian-gangchon",
  "https://oakvalley.co.kr/ski/introduction/slope": "oakvalley",
  "https://www.wellihillipark.com/snowpark": "wellihilli",
  "https://phoenixhnr.co.kr/page/main/pyeongchang?q%5BhmpgDivCd%5D=PP&page=1&size=4": "phoenix",
  "https://www.yongpyong.co.kr/kor/skiNboard/introduce.do": "yongpyong",
  "https://www.alpensia.com/main.do": "alpensia",
  "https://www.high1.com/ski/index.do": "high1",
  "https://www.o2resort.com/main.xhtml": "o2",
  "https://mdysresort.com/": "muju",
  "https://www.edenvalley.co.kr/": "eden-valley",
};

type StreamEntry = {
  id: string;
  slug: string;
  stream: Stream;
};

export type ResortEntry = {
  slug: string;
  resort: Resort;
  streams: StreamEntry[];
};

function slugify(text: string): string {
  return text
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .toLowerCase();
}

function slugifyLocalized(text: LocalizedText | undefined, fallback: string) {
  if (!text) return fallback;
  const value =
    text.en?.trim() ||
    text.ko?.trim() ||
    getLocalizedText(text, defaultLocale).trim() ||
    fallback;
  const slugged = slugify(value);
  return slugged || fallback;
}

const ensureUnique = (value: string, tracker: Map<string, number>) => {
  const current = tracker.get(value);
  if (current === undefined) {
    tracker.set(value, 1);
    return value;
  }
  const nextCount = current + 1;
  tracker.set(value, nextCount);
  return `${value}-${nextCount}`;
};

export const resortEntries: ResortEntry[] = resorts.map((resort, index) => {
  const baseSlug =
    manualResortSlugs[resort.homepage] ||
    slugifyLocalized(resort.name, `resort-${index + 1}`);
  const streamTracker = new Map<string, number>();
  const streams = resort.streams.map((stream, streamIndex) => {
    const slugBase = slugifyLocalized(stream.name, `stream-${streamIndex + 1}`);
    const slug = ensureUnique(slugBase, streamTracker);
    const id = getStreamIdentifier(resort, stream);
    return { slug, stream, id };
  });
  return {
    slug: baseSlug,
    resort,
    streams,
  };
});

const entryBySlug = new Map(resortEntries.map((entry) => [entry.slug, entry]));
const entryByHomepage = new Map(resortEntries.map((entry) => [entry.resort.homepage, entry]));
const streamRouteById = new Map<string, { resortSlug: string; streamSlug: string }>();

resortEntries.forEach((entry) => {
  entry.streams.forEach((stream) => {
    streamRouteById.set(stream.id, { resortSlug: entry.slug, streamSlug: stream.slug });
  });
});

export function findResortBySlug(slug: string) {
  return entryBySlug.get(slug);
}

export function getResortSlug(resort: Resort) {
  return entryByHomepage.get(resort.homepage)?.slug;
}

export function findStreamBySlugs(resortSlug: string, streamSlug: string) {
  const resortEntry = entryBySlug.get(resortSlug);
  if (!resortEntry) {
    return undefined;
  }
  const streamEntry = resortEntry.streams.find((item) => item.slug === streamSlug);
  if (!streamEntry) {
    return undefined;
  }
  return {
    resortSlug: resortEntry.slug,
    resort: resortEntry.resort,
    stream: streamEntry.stream,
    streamId: streamEntry.id,
  };
}

export function getRouteForStream(resort: Resort, stream: Stream) {
  const streamId = getStreamIdentifier(resort, stream);
  const route = streamRouteById.get(streamId);
  if (route) {
    return route;
  }
  const entry = entryByHomepage.get(resort.homepage);
  if (!entry) {
    return undefined;
  }
  const streamEntry = entry.streams.find((item) => item.id === streamId);
  if (!streamEntry) {
    return undefined;
  }
  return {
    resortSlug: entry.slug,
    streamSlug: streamEntry.slug,
  };
}

export function getAllWebcamRouteParams() {
  return resortEntries.flatMap((entry) =>
    entry.streams.map((stream) => ({
      resort: entry.slug,
      stream: stream.slug,
    }))
  );
}

export function getAllResortSlugs() {
  return resortEntries.map(({ slug }) => ({ slug }));
}
