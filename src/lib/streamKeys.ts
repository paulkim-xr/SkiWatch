import { Resort, Stream } from "@/data/Util";

export function getStreamKey(stream: Stream) {
  if (stream.metadata?.vivaldi) {
    const { serial, channel } = stream.metadata.vivaldi;
    return `vivaldi:${serial}:${channel}`;
  }
  if (stream.url) {
    return `url:${stream.url}`;
  }
  return `name:${stream.name.ko}-${stream.name.en}`;
}

export function getStreamIdentifier(resort: Resort, stream: Stream) {
  return `${resort.homepage}::${getStreamKey(stream)}`;
}
