import Link from "next/link";
import { notFound } from "next/navigation";
import {
  SITE_CONFIG,
  generateMetadata as buildSeoMetadata,
} from "@repo/config";
import { getAllProjects, getProjectBySlug } from "@repo/content";
import { Markdown } from "@/components/Markdown";
import { Masthead } from "@/components/newspaper/Masthead";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return buildSeoMetadata({
    title: project.title,
    description: project.summary,
    path: `/work/${project.slug}`,
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const metrics = Object.entries(project.metrics);

  return (
    <main>
      <Masthead />
      <article style={{ maxWidth: "960px", margin: "0 auto", padding: "28px 32px 48px" }}>
        <p className="font-accent" style={{ fontSize: "10px", color: "var(--red)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
          {project.category}
        </p>
        <h1 className="font-headline" style={{ fontWeight: 900, fontSize: "clamp(26px, 4vw, 40px)", margin: "12px 0" }}>
          {project.title}
        </h1>
        <p className="font-accent" style={{ fontStyle: "italic", opacity: 0.8, marginBottom: "24px" }}>
          {project.client} · {project.clientCountry} · Completed {new Date(project.completedAt).toLocaleDateString("en-GB")}
        </p>

        {metrics.length > 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
              gap: "12px",
              marginBottom: "28px",
              border: "2px solid var(--ink)",
              padding: "16px",
              background: "var(--paper-dark)",
            }}
          >
            {metrics.map(([k, v]) => (
              <div key={k} style={{ textAlign: "center", border: "1px solid var(--ink)", padding: "12px", background: "var(--paper)" }}>
                <div className="font-headline" style={{ fontWeight: 900, fontSize: "24px", color: "var(--red)" }}>
                  {String(v)}
                </div>
                <div className="section-tag" style={{ marginTop: "6px", fontSize: "9px" }}>
                  {k.replace(/([A-Z])/g, " $1").trim()}
                </div>
              </div>
            ))}
          </div>
        ) : null}

        <section style={{ marginBottom: "20px" }}>
          <h2 className="font-headline" style={{ fontSize: "20px", marginBottom: "8px" }}>
            Problem
          </h2>
          <p className="font-body article-body" style={{ fontSize: "14px" }}>
            {project.problem}
          </p>
        </section>
        <section style={{ marginBottom: "20px" }}>
          <h2 className="font-headline" style={{ fontSize: "20px", marginBottom: "8px" }}>
            Solution
          </h2>
          <p className="font-body article-body" style={{ fontSize: "14px" }}>
            {project.solution}
          </p>
        </section>
        <section style={{ marginBottom: "24px" }}>
          <h2 className="font-headline" style={{ fontSize: "20px", marginBottom: "8px" }}>
            Result
          </h2>
          <p className="font-body article-body" style={{ fontSize: "14px" }}>
            {project.result}
          </p>
        </section>

        <h2 className="font-headline" style={{ fontSize: "18px", marginBottom: "10px" }}>
          Tech stack
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "28px" }}>
          {project.techStack.map((t) => (
            <span key={t} className="font-accent" style={{ border: "1px solid var(--ink)", padding: "4px 10px", fontStyle: "italic", fontSize: "11px" }}>
              {t}
            </span>
          ))}
        </div>

        {project.content ? (
          <div style={{ borderTop: "2px solid var(--ink)", paddingTop: "20px" }}>
            <Markdown content={project.content} />
          </div>
        ) : null}

        {project.liveUrl ? (
          <p style={{ marginTop: "20px" }}>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-accent"
              style={{ fontStyle: "italic", borderBottom: "2px solid var(--red)", color: "var(--red)" }}
            >
              View live: {project.liveUrl}
            </a>
          </p>
        ) : null}

        <section
          style={{
            marginTop: "36px",
            padding: "20px",
            border: "2px solid var(--ink)",
            background: "var(--paper-dark)",
          }}
        >
          <h2 className="font-headline" style={{ fontSize: "18px", marginBottom: "10px" }}>
            Hire Tanishk for similar work
          </h2>
          <p className="font-body article-body" style={{ marginBottom: "12px", fontSize: "14px" }}>
            Agentic AI, voice pipelines, Next.js SaaS, and production DevOps — shipped end-to-end.
          </p>
          <a
            href={`mailto:${SITE_CONFIG.email}?subject=Project inquiry`}
            className="font-accent"
            style={{
              display: "inline-block",
              padding: "10px 24px",
              border: "2px solid var(--ink)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontSize: "12px",
            }}
          >
            Email {SITE_CONFIG.email}
          </a>
        </section>

        <p style={{ marginTop: "24px" }}>
          <Link href="/work" className="font-accent" style={{ fontStyle: "italic", borderBottom: "1px solid var(--ink)" }}>
            ← Back to Selected Works
          </Link>
        </p>
      </article>
    </main>
  );
}
