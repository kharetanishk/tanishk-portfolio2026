import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@repo/content";
import {
  SITE_CONFIG,
  generateJsonLd,
  generateMetadata as buildSeoMetadata,
} from "@repo/config";
import { Markdown } from "@/components/Markdown";
import { Masthead } from "@/components/newspaper/Masthead";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return buildSeoMetadata({
    title: post.seoTitle || post.title,
    description: post.seoDesc || post.excerpt,
    path: `/blog/${post.slug}`,
    publishedAt: post.publishedAt,
    tags: post.tags,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const all = getAllPosts();
  const related = all
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);
  const fallbackRelated = all.filter((p) => p.slug !== post.slug).slice(0, 3);
  const showRelated = related.length > 0 ? related : fallbackRelated;

  const articleLd = generateJsonLd("article", {
    title: post.title,
    description: post.excerpt,
    url: `${SITE_CONFIG.url}/blog/${post.slug}`,
    publishedAt: post.publishedAt,
    tags: post.tags,
  });

  const dateLabel = new Date(post.publishedAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const body = post.content.trim();
  const firstParaEnd = body.indexOf("\n\n");
  const firstChunk = firstParaEnd > 0 ? body.slice(0, firstParaEnd) : body;
  const rest = firstParaEnd > 0 ? body.slice(firstParaEnd + 2) : "";
  const twoCol = rest.length > 0;

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <Masthead />
      <article style={{ maxWidth: "1100px", margin: "0 auto", padding: "24px 32px 48px" }}>
        <p
          className="font-accent"
          style={{
            fontSize: "10px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--red)",
            marginBottom: "8px",
          }}
        >
          {post.category}
        </p>
        <h1
          className="font-headline"
          style={{
            fontWeight: 900,
            fontSize: "clamp(28px, 4vw, 44px)",
            lineHeight: 1.1,
            marginBottom: "12px",
          }}
        >
          {post.title}
        </h1>
        <p
          className="font-accent"
          style={{
            fontStyle: "italic",
            fontSize: "17px",
            borderTop: "2px solid var(--ink)",
            borderBottom: "2px solid var(--ink)",
            padding: "10px 0",
            marginBottom: "12px",
          }}
        >
          {post.excerpt}
        </p>
        <p className="font-accent" style={{ fontSize: "12px", opacity: 0.75, marginBottom: "24px" }}>
          By Tanishk Khare · {dateLabel} · {post.readingTimeMinutes} min read
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: twoCol ? "1fr 1fr" : "1fr",
            gap: "28px",
            borderTop: "1px solid var(--ink)",
            paddingTop: "20px",
          }}
        >
          <div className="drop-cap font-accent article-body">
            <Markdown content={twoCol ? firstChunk : body} />
          </div>
          {twoCol ? (
            <div className="font-accent article-body">
              <Markdown content={rest} />
            </div>
          ) : null}
        </div>

        <section
          style={{
            marginTop: "40px",
            padding: "20px",
            border: "2px solid var(--ink)",
            background: "var(--paper-dark)",
          }}
        >
          <h2 className="font-headline" style={{ fontSize: "18px", marginBottom: "10px" }}>
            About the Author
          </h2>
          <p className="font-accent article-body" style={{ fontStyle: "italic", fontSize: "13px", marginBottom: "12px" }}>
            Tanishk Khare — Full-Stack Engineer &amp; AI Systems Builder, India. Super 30 3.0 (2026).
            Builder of xTanBot.ai and production SaaS for global clients.
          </p>
          <a
            href="mailto:tanishk16012004@gmail.com"
            className="font-accent"
            style={{
              display: "inline-block",
              padding: "8px 20px",
              border: "2px solid var(--ink)",
              fontSize: "12px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Hire Tanishk for your next build
          </a>
        </section>

        {showRelated.length > 0 ? (
          <section style={{ marginTop: "32px" }}>
            <h2 className="font-headline" style={{ fontSize: "20px", marginBottom: "12px" }}>
              Related dispatches
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, border: "1px solid var(--ink)" }}>
              {showRelated.map((r, i) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="blog-card-link"
                  style={{ borderRight: i < 2 ? "1px solid var(--ink)" : "none", padding: "14px" }}
                >
                  <p className="font-headline" style={{ fontWeight: 700, fontSize: "14px" }}>
                    {r.title}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        <p style={{ marginTop: "28px" }}>
          <Link href="/blog" className="font-accent" style={{ fontStyle: "italic", borderBottom: "1px solid var(--ink)" }}>
            ← Back to The Dispatch
          </Link>
        </p>
      </article>
    </main>
  );
}
