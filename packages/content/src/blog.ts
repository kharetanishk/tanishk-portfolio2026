import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  tags: string[];
  category: string;
  readingTime: string;
  readingTimeMinutes: number;
  featured: boolean;
  seoTitle: string;
  seoDesc: string;
  ogImage?: string;
}

/** Resolved relative to monorepo root: `packages/content/blog/` */
function resolveBlogDir(): string {
  const candidates = [
    path.join(process.cwd(), "packages", "content", "blog"),
    path.join(process.cwd(), "..", "..", "packages", "content", "blog"),
    path.join(__dirname, "..", "blog"),
    path.resolve(__dirname, "..", "..", "..", "packages", "content", "blog"),
  ];
  for (const dir of candidates) {
    if (fs.existsSync(dir)) return dir;
  }
  return path.join(process.cwd(), "packages", "content", "blog");
}

function parseBlogFile(filePath: string, slug: string): BlogPost {
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  return {
    slug,
    title: String(data["title"] ?? ""),
    excerpt: String(data["excerpt"] ?? ""),
    content,
    publishedAt: String(data["publishedAt"] ?? new Date().toISOString()),
    tags: Array.isArray(data["tags"]) ? (data["tags"] as string[]) : [],
    category: String(data["category"] ?? "engineering"),
    readingTime: stats.text,
    readingTimeMinutes: Math.ceil(stats.minutes),
    featured: Boolean(data["featured"] ?? false),
    seoTitle: String(data["seoTitle"] ?? data["title"] ?? ""),
    seoDesc: String(data["seoDesc"] ?? data["excerpt"] ?? ""),
    ogImage: data["ogImage"] ? String(data["ogImage"]) : undefined,
  };
}

export function getAllPosts(): BlogPost[] {
  const dir = resolveBlogDir();
  if (!fs.existsSync(dir)) return [];

  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.(mdx|md)$/, "");
    return parseBlogFile(path.join(dir, file), slug);
  });

  return posts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | null {
  const dir = resolveBlogDir();
  const mdxPath = path.join(dir, `${slug}.mdx`);
  const mdPath = path.join(dir, `${slug}.md`);

  if (fs.existsSync(mdxPath)) return parseBlogFile(mdxPath, slug);
  if (fs.existsSync(mdPath)) return parseBlogFile(mdPath, slug);
  return null;
}

export function getFeaturedPosts(limit = 4): BlogPost[] {
  return getAllPosts()
    .filter((p) => p.featured)
    .slice(0, limit);
}
