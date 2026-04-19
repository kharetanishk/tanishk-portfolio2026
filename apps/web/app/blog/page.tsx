import Link from "next/link";
import { getAllPosts } from "@repo/content";
import { Masthead } from "@/components/newspaper/Masthead";

export const metadata = {
  title: "The Dispatch — Engineering & Freelance Intelligence | Tanishk Khare",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const featured = posts.filter((p) => p.featured);
  const regular = posts.filter((p) => !p.featured);
  const hasFeatured = featured.length > 0;
  const featuredBlock = hasFeatured ? featured : [];
  const regularBlock = hasFeatured ? regular : posts;

  return (
    <main>
      <Masthead />
      <div style={{ padding: "16px 32px", borderBottom: "1px solid var(--ink)" }}>
        <nav className="font-accent" style={{ fontSize: "12px", marginBottom: "12px", opacity: 0.7 }}>
          <Link href="/">Home</Link>
          <span style={{ margin: "0 8px" }}>→</span>
          <span>The Dispatch</span>
        </nav>
        <h1 className="font-nameplate" style={{ fontSize: "clamp(40px, 8vw, 72px)", marginBottom: "8px" }}>
          THE DISPATCH
        </h1>
        <p className="font-accent" style={{ fontStyle: "italic", fontSize: "15px" }}>
          Engineering Intelligence · AI Systems · Freelance Insights · DevOps
        </p>
      </div>

      {featuredBlock.length > 0 ? (
        <section style={{ borderBottom: "3px solid var(--ink)" }}>
          <p className="section-tag" style={{ padding: "12px 32px" }}>
            Featured
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
            {featuredBlock.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="project-card"
                style={{
                  borderRight: i % 2 === 0 ? "1px solid var(--ink)" : "none",
                  borderBottom: "1px solid var(--ink)",
                  minHeight: "180px",
                }}
              >
                <p className="font-accent" style={{ fontSize: "10px", color: "var(--red)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>
                  {formatDate(post.publishedAt)}
                </p>
                <h2 className="font-headline" style={{ fontWeight: 900, fontSize: "22px", marginBottom: "10px", lineHeight: 1.2 }}>
                  {post.title}
                </h2>
                <p className="font-body article-body" style={{ fontSize: "13px", opacity: 0.85, marginBottom: "8px" }}>
                  {post.excerpt}
                </p>
                <p className="font-accent" style={{ fontSize: "11px", opacity: 0.6, fontStyle: "italic" }}>
                  {post.readingTime} · {post.category}
                </p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {regularBlock.length > 0 ? (
      <section>
        <p className="section-tag" style={{ padding: "12px 32px" }}>
          All dispatches
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          {regularBlock.map((post, idx) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="blog-card-link"
              style={{
                borderRight: (idx + 1) % 3 !== 0 ? "1px solid var(--ink)" : "none",
                borderBottom: "1px solid var(--ink)",
              }}
            >
              <p className="font-accent" style={{ fontSize: "10px", color: "var(--red)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "6px" }}>
                {formatDate(post.publishedAt)}
              </p>
              <h3 className="font-headline" style={{ fontWeight: 700, fontSize: "16px", marginBottom: "8px" }}>
                {post.title}
              </h3>
              <p className="font-body" style={{ fontSize: "12px", lineHeight: 1.6, opacity: 0.8 }}>
                {post.excerpt.slice(0, 140)}
                {post.excerpt.length > 140 ? "…" : ""}
              </p>
              <p className="font-accent" style={{ fontSize: "10px", marginTop: "8px", opacity: 0.55, fontStyle: "italic" }}>
                {post.readingTime}
              </p>
            </Link>
          ))}
        </div>
      </section>
      ) : null}
    </main>
  );
}
