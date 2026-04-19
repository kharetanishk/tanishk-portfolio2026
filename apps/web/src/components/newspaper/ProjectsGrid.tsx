import type { Project } from "@repo/content";

interface ProjectsGridProps {
  projects: Project[];
}

const FALLBACK_PROJECTS = [
  {
    slug: "saas-analytics-dashboard",
    title: "SaaS Analytics Dashboard",
    client: "US SaaS Startup",
    clientCountry: "USA",
    category: "SaaS",
    summary: "End-to-end analytics platform with real-time data pipelines and Stripe billing.",
    techStack: ["Next.js 14", "Prisma", "PostgreSQL", "Stripe", "Vercel"],
    metrics: { timeToShip: "6 weeks", conversionIncrease: "340%", uptime: "99.9%" },
    featured: true,
    completedAt: "2024-12-01",
    content: "",
    problem: "",
    solution: "",
    result: "",
  },
  {
    slug: "ecommerce-platform",
    title: "Multi-Vendor E-Commerce Platform",
    client: "UK Fashion Brand",
    clientCountry: "UK",
    category: "E-Commerce",
    summary: "Full-featured marketplace with vendor management, inventory, and Stripe payouts.",
    techStack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    metrics: { revenue: "£2.4M in year 1", loadTime: "0.8s", conversion: "+28%" },
    featured: true,
    completedAt: "2024-09-15",
    content: "",
    problem: "",
    solution: "",
    result: "",
  },
  {
    slug: "fintech-dashboard",
    title: "FinTech Portfolio Dashboard",
    client: "Australian Investment Firm",
    clientCountry: "Australia",
    category: "FinTech",
    summary: "Real-time portfolio tracking with live market data, risk analysis, and PDF reports.",
    techStack: ["React", "Node.js", "PostgreSQL", "WebSocket"],
    metrics: { users: "12,000+", dataLatency: "<200ms", uptime: "99.99%" },
    featured: true,
    completedAt: "2024-07-01",
    content: "",
    problem: "",
    solution: "",
    result: "",
  },
];

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const displayProjects = projects.length > 0 ? projects : FALLBACK_PROJECTS;

  return (
    <section
      id="work"
      style={{
        padding: "48px 40px",
        borderBottom: "2px solid var(--ink)",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Section header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            marginBottom: "40px",
            borderBottom: "1px solid var(--ink)",
            paddingBottom: "24px",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "10px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                opacity: 0.5,
                marginBottom: "8px",
              }}
            >
              Portfolio
            </p>
            <h2
              className="playfair"
              style={{ fontSize: "32px", fontStyle: "italic", fontWeight: 400 }}
            >
              Selected Works &amp; Case Studies
            </h2>
          </div>
          <div
            className="fell"
            style={{
              fontStyle: "italic",
              fontSize: "14px",
              lineHeight: 1.7,
              color: "var(--ink-light)",
              paddingLeft: "32px",
              borderLeft: "1px solid var(--border)",
              alignSelf: "center",
            }}
          >
            Every project listed here was shipped to production, used by real users, and delivered
            measurable business outcomes. These are not mockups. These are results.
          </div>
        </div>

        {/* Projects grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            border: "1px solid var(--ink)",
          }}
        >
          {displayProjects.slice(0, 6).map((project, i) => {
            const metricsEntries = Object.entries(project.metrics ?? {}).slice(0, 1);
            const metricStr =
              metricsEntries.length > 0
                ? `${String(metricsEntries[0]![1])}`
                : null;

            return (
              <a
                key={project.slug}
                href={`/work/${project.slug}`}
                className="project-card"
                style={{
                  borderRight: (i + 1) % 3 !== 0 ? "1px solid var(--ink)" : "none",
                  borderBottom: i < 3 ? "1px solid var(--ink)" : "none",
                }}
              >
                {/* Large number background */}
                <div
                  className="playfair"
                  style={{
                    position: "absolute",
                    top: "-10px",
                    right: "16px",
                    fontSize: "120px",
                    fontWeight: 900,
                    color: "rgba(26,18,9,0.04)",
                    lineHeight: 1,
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Category tag */}
                <div
                  style={{
                    display: "inline-block",
                    background: "var(--red)",
                    color: "var(--paper)",
                    fontSize: "9px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    padding: "2px 8px",
                    marginBottom: "12px",
                  }}
                >
                  {project.category}
                </div>

                {/* Title */}
                <h3
                  className="playfair"
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    lineHeight: 1.3,
                    marginBottom: "10px",
                  }}
                >
                  {project.title}
                </h3>

                {/* Client */}
                <p
                  style={{
                    fontSize: "11px",
                    letterSpacing: "1px",
                    opacity: 0.6,
                    marginBottom: "12px",
                    textTransform: "uppercase",
                    fontVariant: "small-caps",
                  }}
                >
                  {project.client} &middot; {project.clientCountry}
                </p>

                {/* Summary */}
                <p
                  className="fell"
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.6,
                    fontStyle: "italic",
                    color: "var(--ink-light)",
                    marginBottom: "16px",
                  }}
                >
                  {project.summary}
                </p>

                {/* Tech stack */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
                  {(project.techStack ?? []).slice(0, 4).map((tech) => (
                    <span key={tech} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key metric */}
                {metricStr && (
                  <div
                    className="playfair"
                    style={{
                      fontSize: "15px",
                      fontStyle: "italic",
                      color: "var(--red)",
                      fontWeight: 700,
                    }}
                  >
                    &ldquo;{metricStr}&rdquo;
                  </div>
                )}
              </a>
            );
          })}
        </div>

        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <a href="/work" className="btn-outline">
            View All Case Studies &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
