import { SITE_CONFIG, JSON_LD_PERSON, JSON_LD_WEBSITE, OG_DEFAULTS } from "./metadata";

export interface PageMeta {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  publishedAt?: string;
  tags?: string[];
  noIndex?: boolean;
}

export function generateMetadata(page: PageMeta) {
  const fullTitle = page.title.includes(SITE_CONFIG.name)
    ? page.title
    : `${page.title} | ${SITE_CONFIG.name}`;

  const canonical = `${SITE_CONFIG.url}${page.path}`;
  const ogImageUrl = page.ogImage ?? OG_DEFAULTS.images[0]!.url;

  return {
    title: fullTitle,
    description: page.description,
    keywords: SITE_CONFIG.keywords.join(", "),
    authors: [{ name: SITE_CONFIG.author, url: SITE_CONFIG.url }],
    creator: SITE_CONFIG.author,
    publisher: SITE_CONFIG.author,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical,
    },
    robots: page.noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large" as const,
            "max-snippet": -1,
          },
        },
    openGraph: {
      ...OG_DEFAULTS,
      title: fullTitle,
      description: page.description,
      url: canonical,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      ...(page.publishedAt
        ? { type: "article" as const, publishedTime: page.publishedAt }
        : {}),
    },
    twitter: {
      card: "summary_large_image" as const,
      title: fullTitle,
      description: page.description,
      images: [ogImageUrl],
    },
  };
}

export interface ArticleJsonLdData {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  tags?: string[];
  image?: string;
}

export function generateJsonLd(
  type: "person" | "website" | "article",
  data?: Partial<ArticleJsonLdData>
): object {
  switch (type) {
    case "person":
      return JSON_LD_PERSON;
    case "website":
      return JSON_LD_WEBSITE;
    case "article":
      return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: data?.title ?? "",
        description: data?.description ?? "",
        url: data?.url ?? SITE_CONFIG.url,
        datePublished: data?.publishedAt ?? new Date().toISOString(),
        dateModified: data?.publishedAt ?? new Date().toISOString(),
        author: {
          "@type": "Person",
          name: SITE_CONFIG.author,
          url: SITE_CONFIG.url,
        },
        publisher: {
          "@type": "Person",
          name: SITE_CONFIG.author,
          url: SITE_CONFIG.url,
        },
        image: data?.image ?? OG_DEFAULTS.images[0]!.url,
        keywords: data?.tags?.join(", ") ?? SITE_CONFIG.keywords.join(", "),
        inLanguage: "en",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": data?.url ?? SITE_CONFIG.url,
        },
      };
    default:
      return {};
  }
}
