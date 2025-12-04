"use client";

import { CurrentWeatherCard } from "./CurrentWeatherCard";

type HeroCurrentWeatherProps = {
  resortSlug: string;
};

export function HeroCurrentWeather({ resortSlug }: HeroCurrentWeatherProps) {
  return <CurrentWeatherCard resortSlug={resortSlug} variant="hero" />;
}
