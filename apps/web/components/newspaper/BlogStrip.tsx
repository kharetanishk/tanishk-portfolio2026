import Link from "next/link";
import type { BlogPost } from "@repo/content";

const FALLBACK: BlogPost[] = [
  {
    slug: "xtanbot-agentic-voice-ai-architecture",
    title: "Building xTanBot.ai: A Production-Grade Agentic AI Voice Assistant Architecture",
    excerpt: "",
    content: "",
    publishedAt: "2026-04-10",
    tags: [],
    category: "engineering",
    readingTime: "12 min read",
    readingTimeMinutes: 12,
    featured: true,
    seoTitle: "",
    seoDesc: "",
  },
  {
    slug: "best-freelancer-india-tanishk-khare",
    title: "Why Tanishk Khare Is One of the Best Freelancers in India for AI & Full-Stack Development",
    excerpt: "",
    content: "",
    publishedAt: "2026-04-05",
    tags: [],
    category: "freelancing",
    readingTime: "10 min read",
    readingTimeMinutes: 10,
    featured: true,
    seoTitle: "",
    seoDesc: "",
  },
  {
    slug: "agentic-ai-claude-tool-calling",
    title: "Agentic AI With Anthropic Claude: Tool-Calling Architecture That Actually Works in Production",
    excerpt: "",
    content: "",
    publishedAt: "2026-03-20",
    tags: [],
    category: "engineering",
    readingTime: "11 min read",
    readingTimeMinutes: 11,
    featured: false,
    seoTitle: "",
    seoDesc: "",
  },
  {
    slug: "docker-aws-nodejs-production",
    title: "Docker + AWS EC2 + Nginx: The Production Deployment Stack I Use for Every Node.js Project",
    excerpt: "",
    content: "",
    publishedAt: "2026-02-28",
    tags: [],
    category: "devops",
    readingTime: "9 min read",
    readingTimeMinutes: 9,
    featured: false,
    seoTitle: "",
    seoDesc: "",
  },
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

interface BlogStripProps {
  posts: BlogPost[];
}

export function BlogStrip({ posts }: BlogStripProps) {
  const display = posts.length > 0 ? posts.slice(0, 4) : FALLBACK;

  return (
    <section id="blog">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          padding: "12px 24px",
          borderBottom: "1px solid var(--ink)",
        }}
      >
        <h2 className="font-headline" style={{ fontWeight: 900, fontStyle: "italic", fontSize: "28px" }}>
          Dispatches from the Workshop
        </h2>
        <Link
          href="/blog"
          className="font-accent"
          style={{
            fontStyle: "italic",
            fontSize: "11px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            borderBottom: "1px solid var(--ink)",
          }}
        >
          Read all dispatches →
        </Link>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          borderBottom: "3px solid var(--ink)",
        }}
      >
        {display.map((post, i) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="blog-card-link col-rule"
            style={{
              borderRight: i < 3 ? "1px solid var(--ink)" : "none",
            }}
          >
            <p
              className="font-accent"
              style={{
                fontSize: "10px",
                letterSpacing: "0.1em",
                color: "var(--red)",
                textTransform: "uppercase",
                marginBottom: "6px",
              }}
            >
              {formatDate(post.publishedAt)}
            </p>
            <p className="section-tag" style={{ marginBottom: "4px" }}>
              {post.category}
            </p>
            <h3 className="font-headline" style={{ fontWeight: 700, fontSize: "15px", lineHeight: 1.3, marginBottom: "8px" }}>
              {post.title}
            </h3>
            <p className="font-body" style={{ fontSize: "12px", lineHeight: 1.6, opacity: 0.75 }}>
              {post.excerpt.length > 0
                ? post.excerpt.slice(0, 100) + (post.excerpt.length > 100 ? "…" : "")
                : "Engineering dispatch — full article inside."}
            </p>
            <p className="font-accent" style={{ fontStyle: "italic", fontSize: "10px", opacity: 0.5, marginTop: "6px" }}>
              {post.readingTime}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
