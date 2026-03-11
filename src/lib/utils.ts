import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(value: number | undefined, suffix = "") {
  if (value === undefined) return "—";
  return `${Math.round(value)}${suffix}`;
}