import { Stream } from "@/data/Util";

export type DashboardItemType = "webcam" | "weather" | "slopes";

export type DashboardItem = {
  id: string;
  type: DashboardItemType;
  resortSlug: string;
  label: string;
  span: 1 | 2;
  // Specific to webcam
  stream?: Stream;
};
