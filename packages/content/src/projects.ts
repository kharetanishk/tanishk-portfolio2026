import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface ProjectMetrics {
  [key: string]: string | number;
}

export interface Project {
  slug: string;
  title: string;
  client: string;
  clientCountry: string;
  summary: string;
  problem: string;
  solution: string;
  result: string;
  metrics: ProjectMetrics;
  techStack: string[];
  category: string;
  featured: boolean;
  completedAt: string;
  liveUrl?: string;
  githubUrl?: string;
  coverImage?: string;
  content: string;
}

/** Resolved relative to monorepo root: `packages/content/work/` */
function resolveWorkDir(): string {
  const candidates = [
    path.join(process.cwd(), "packages", "content", "work"),
    path.join(process.cwd(), "..", "..", "packages", "content", "work"),
    path.join(__dirname, "..", "work"),
    path.resolve(__dirname, "..", "..", "..", "packages", "content", "work"),
  ];
  for (const dir of candidates) {
    if (fs.existsSync(dir)) return dir;
  }
  return path.join(process.cwd(), "packages", "content", "work");
}

function parseProjectFile(filePath: string, slug: string): Project {
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: String(data["title"] ?? ""),
    client: String(data["client"] ?? ""),
    clientCountry: String(data["clientCountry"] ?? ""),
    summary: String(data["summary"] ?? ""),
    problem: String(data["problem"] ?? ""),
    solution: String(data["solution"] ?? ""),
    result: String(data["result"] ?? ""),
    metrics: (data["metrics"] as ProjectMetrics) ?? {},
    techStack: Array.isArray(data["techStack"]) ? (data["techStack"] as string[]) : [],
    category: String(data["category"] ?? ""),
    featured: Boolean(data["featured"] ?? false),
    completedAt: String(data["completedAt"] ?? new Date().toISOString()),
    liveUrl: data["liveUrl"] ? String(data["liveUrl"]) : undefined,
    githubUrl: data["githubUrl"] ? String(data["githubUrl"]) : undefined,
    coverImage: data["coverImage"] ? String(data["coverImage"]) : undefined,
    content,
  };
}

export function getAllProjects(): Project[] {
  const dir = resolveWorkDir();
  if (!fs.existsSync(dir)) return [];

  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const projects = files.map((file) => {
    const slug = file.replace(/\.(mdx|md)$/, "");
    return parseProjectFile(path.join(dir, file), slug);
  });

  return projects.sort(
    (a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime()
  );
}

export function getProjectBySlug(slug: string): Project | null {
  const dir = resolveWorkDir();
  const mdxPath = path.join(dir, `${slug}.mdx`);
  const mdPath = path.join(dir, `${slug}.md`);

  if (fs.existsSync(mdxPath)) return parseProjectFile(mdxPath, slug);
  if (fs.existsSync(mdPath)) return parseProjectFile(mdPath, slug);
  return null;
}

export function getFeaturedProjects(limit = 6): Project[] {
  return getAllProjects()
    .filter((p) => p.featured)
    .slice(0, limit);
}
