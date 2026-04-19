import { generateJsonLd } from "@repo/config";

export function JsonLdScript({
  type,
  data,
}: {
  type: "person" | "website" | "article";
  data?: Record<string, unknown>;
}) {
  const schema = generateJsonLd(type, data);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
