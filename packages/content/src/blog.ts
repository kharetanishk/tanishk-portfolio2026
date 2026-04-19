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

const BLOG_DIR = path.join(process.cwd(), "packages", "content", "blog");

function resolveContentDir(base: string): string {
  if (fs.existsSync(base)) return base;
  const alt = path.join(__dirname, "..", "blog");
  if (fs.existsSync(alt)) return alt;
  const root = path.resolve(__dirname, "../../..");
  return path.join(root, "packages", "content", "blog");
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
  const dir = resolveContentDir(BLOG_DIR);
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
  const dir = resolveContentDir(BLOG_DIR);
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
