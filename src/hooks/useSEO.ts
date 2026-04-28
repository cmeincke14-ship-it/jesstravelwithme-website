import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
}

const SITE_NAME = "Jess Travel With Me";
const BASE_URL = "https://jesstravelwithme.com";
const DEFAULT_DESCRIPTION =
  "Professional travel planning with Jess Meincke. Specializing in European adventures, all-inclusive resorts, Disney vacations, and luxury cruises. Complimentary service, stress-free planning, personalized itineraries.";
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`;

export function useSEO({
  title,
  description,
  canonical = "/",
  ogImage = DEFAULT_IMAGE,
  schema,
}: SEOProps = {}) {
  useEffect(() => {
    const pageTitle = title
      ? `${title} | ${SITE_NAME}`
      : `${SITE_NAME} | Personal Travel Agent Jessica Meincke`;
    const pageDescription = description || DEFAULT_DESCRIPTION;
    const canonicalUrl = `${BASE_URL}${canonical}`;

    document.title = pageTitle;

    const setMeta = (selector: string, value: string) => {
      const el = document.querySelector(selector) as HTMLMetaElement | null;
      if (el) el.content = value;
    };

    setMeta('meta[name="title"]', pageTitle);
    setMeta('meta[name="description"]', pageDescription);
    setMeta('meta[property="og:title"]', pageTitle);
    setMeta('meta[property="og:description"]', pageDescription);
    setMeta('meta[property="og:url"]', canonicalUrl);
    setMeta('meta[property="og:image"]', ogImage);
    setMeta('meta[name="twitter:title"]', pageTitle);
    setMeta('meta[name="twitter:description"]', pageDescription);
    setMeta('meta[name="twitter:url"]', canonicalUrl);
    setMeta('meta[name="twitter:image"]', ogImage);

    let canonicalEl = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;
    if (!canonicalEl) {
      canonicalEl = document.createElement("link");
      canonicalEl.rel = "canonical";
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.href = canonicalUrl;

    const schemaId = "page-schema";
    let schemaEl = document.getElementById(schemaId);
    if (schema) {
      if (!schemaEl) {
        schemaEl = document.createElement("script");
        schemaEl.id = schemaId;
        schemaEl.setAttribute("type", "application/ld+json");
        document.head.appendChild(schemaEl);
      }
      schemaEl.textContent = JSON.stringify(schema);
    } else if (schemaEl) {
      schemaEl.remove();
    }
  }, [title, description, canonical, ogImage, schema]);
}
