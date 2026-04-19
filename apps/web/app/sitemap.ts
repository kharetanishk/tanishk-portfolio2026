import type { MetadataRoute } from "next";
import { getAllPosts, getAllProjects } from "@repo/content";

const base = "https://tanishk-khare.me";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts().map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const projects = getAllProjects().map((p) => ({
    url: `${base}/work/${p.slug}`,
    lastModified: new Date(p.completedAt),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const last = new Date();

  return [
    { url: base, lastModified: last, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/blog`, lastModified: last, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/work`, lastModified: last, changeFrequency: "weekly", priority: 0.9 },
    ...posts,
    ...projects,
  ];
}
