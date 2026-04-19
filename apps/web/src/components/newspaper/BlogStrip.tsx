import type { BlogPost } from "@repo/content";

interface BlogStripProps {
  posts: BlogPost[];
}

const FALLBACK_POSTS = [
  {
    slug: "nextjs-performance-optimization",
    title: "The Complete Next.js Performance Optimization Guide for 2025",
    excerpt: "How I cut LCP by 60% and achieved sub-second loads on a high-traffic SaaS dashboard using edge caching, RSC, and image optimization.",
    publishedAt: "2025-04-01",
    readingTime: "8 min read",
    readingTimeMinutes: 8,
    tags: ["Next.js", "Performance"],
    category: "engineering",
    featured: true,
    content: "",
    seoTitle: "",
    seoDesc: "",
  },
  {
    slug: "best-freelancer-india",
    title: "Why I Am One of the Best Freelancers in India (And What That Actually Means)",
    excerpt: "Bold claim? Yes. Backed by results? Absolutely. Here is what it actually means to be at the top of your craft as a freelance developer in India.",
    publishedAt: "2025-03-15",
    readingTime: "11 min read",
    readingTimeMinutes: 11,
    tags: ["Freelancing", "India"],
    category: "freelancing",
    featured: true,
    content: "",
    seoTitle: "",
    seoDesc: "",
  },
  {
    slug: "building-saas-with-nextjs",
    title: "Building a SaaS in 6 Weeks: Architecture Decisions That Made It Possible",
    excerpt: "A technical breakdown of how I architected and shipped a full SaaS analytics platform for a US startup in under 6 weeks.",
    publishedAt: "2025-02-20",
    readingTime: "10 min read",
    readingTimeMinutes: 10,
    tags: ["SaaS", "Architecture"],
    category: "engineering",
    featured: false,
    content: "",
    seoTitle: "",
    seoDesc: "",
  },
  {
    slug: "hiring-indian-developers",
    title: "The US Founder's Guide to Hiring Indian Developers: Separating Signal from Noise",
    excerpt: "After working with dozens of US founders, I know exactly what questions to ask, what red flags to watch for, and how to evaluate Indian freelancers.",
    publishedAt: "2025-01-10",
    readingTime: "9 min read",
    readingTimeMinutes: 9,
    tags: ["Hiring", "India", "Freelancing"],
    category: "freelancing",
    featured: false,
    content: "",
    seoTitle: "",
    seoDesc: "",
  },
];

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export function BlogStrip({ posts }: BlogStripProps) {
  const displayPosts = posts.length > 0 ? posts : FALLBACK_POSTS;

  return (
    <section
      id="blog"
      style={{
        padding: "48px 40px",
        borderBottom: "1px solid var(--ink)",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            borderBottom: "2px solid var(--ink)",
            paddingBottom: "12px",
            marginBottom: "32px",
          }}
        >
          <h2
            className="playfair"
            style={{ fontSize: "22px", fontStyle: "italic", fontWeight: 400 }}
          >
            Dispatches from the Workshop
          </h2>
          <a
            href="/blog"
            className="fell"
            style={{
              fontStyle: "italic",
              fontSize: "13px",
              color: "var(--red)",
              textDecoration: "underline",
              textUnderlineOffset: "3px",
            }}
          >
            Read all articles &rarr;
          </a>
        </div>

        {/* Four columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            border: "1px solid var(--ink)",
          }}
        >
          {displayPosts.slice(0, 4).map((post, i) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="blog-card"
              style={{
                borderRight: i < 3 ? "1px solid var(--ink)" : "none",
              }}
            >
              {/* Date */}
              <div
                style={{
                  fontSize: "10px",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: "var(--red)",
                  fontVariant: "small-caps",
                  marginBottom: "10px",
                }}
              >
                {formatDate(post.publishedAt)}
              </div>

              {/* Title */}
              <h3
                className="playfair"
                style={{
                  fontSize: "15px",
                  fontWeight: 700,
                  lineHeight: 1.35,
                  marginBottom: "10px",
                }}
              >
                {post.title}
              </h3>

              {/* Excerpt */}
              <p
                className="fell"
                style={{
                  fontSize: "12px",
                  lineHeight: 1.65,
                  fontStyle: "italic",
                  color: "var(--ink-light)",
                  marginBottom: "12px",
                }}
              >
                {post.excerpt.length > 120 ? post.excerpt.slice(0, 120) + "…" : post.excerpt}
              </p>

              {/* Reading time */}
              <div
                style={{
                  fontSize: "10px",
                  letterSpacing: "1px",
                  opacity: 0.5,
                  fontVariant: "small-caps",
                }}
              >
                {post.readingTime}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
