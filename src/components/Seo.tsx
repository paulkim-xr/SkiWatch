import { useEffect } from "react";
import { useI18n } from "@/lib/i18n/context";
import { siteMetadata, buildCanonicalUrl } from "@/lib/seo/siteMetadata";

type SeoProps = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
};

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  if (typeof document === "undefined") return;
  let element = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, name);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  if (typeof document === "undefined") return;
  let element = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

export function Seo({ title, description, path, image }: SeoProps) {
  const { locale } = useI18n();

  useEffect(() => {
    const resolvedTitle = title ? `${title} | ${siteMetadata.siteName}` : siteMetadata.defaultTitle;
    const resolvedDescription = description ?? siteMetadata.defaultDescription;
    const canonical = buildCanonicalUrl(path ?? window.location.pathname);
    const ogImage = image ?? siteMetadata.shareImage;

    document.title = resolvedTitle;
    document.documentElement.lang = locale;

    setMeta("description", resolvedDescription);
    setMeta("og:title", resolvedTitle, "property");
    setMeta("og:description", resolvedDescription, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:site_name", siteMetadata.siteName, "property");
    setMeta("og:url", canonical, "property");
    setMeta("og:image", ogImage, "property");
    setMeta("og:locale", locale === "en" ? "en_US" : locale === "ja" ? "ja_JP" : "ko_KR", "property");

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", resolvedTitle);
    setMeta("twitter:description", resolvedDescription);
    setMeta("twitter:image", ogImage);

    setLink("canonical", canonical);
  }, [title, description, path, image, locale]);

  return null;
}
