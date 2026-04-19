"use client";

import { generateJsonLd, type ArticleJsonLdData } from "@repo/config";

interface JsonLdProps {
  type: "person" | "website" | "article";
  data?: Partial<ArticleJsonLdData>;
}

export function JsonLd({ type, data }: JsonLdProps) {
  const schema = generateJsonLd(type, data);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
