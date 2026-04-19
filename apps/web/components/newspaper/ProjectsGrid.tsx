import Link from "next/link";
import type { Project } from "@repo/content";

const FALLBACK: Project[] = [
  {
    slug: "xtanbot-ai-voice-assistant",
    title: "xTanBot.ai — Agentic AI Voice Assistant",
    client: "Personal Flagship",
    clientCountry: "India",
    category: "Agentic AI / Voice AI",
    summary:
      "Production phone-callable assistant: Twilio, Deepgram, ElevenLabs, Claude, Fastify, Redis, BullMQ, Turborepo.",
    problem: "",
    solution: "",
    result: "",
    metrics: { highlight: "Sub-second conversational AI latency" },
    techStack: ["TypeScript", "Claude", "Twilio", "Deepgram", "ElevenLabs"],
    featured: true,
    completedAt: "2026-03-01",
    liveUrl: "https://tanishk-khare.me",
    content: "",
  },
  {
    slug: "anubha-nutrition-saas",
    title: "Anubha Nutrition SaaS",
    client: "Bitcode Softwares / Anubha Nutrition",
    clientCountry: "India",
    category: "SaaS / Healthcare",
    summary: "Clinic and nutrition management — live patients, Docker, AWS EC2, Nginx, TLS.",
    problem: "",
    solution: "",
    result: "",
    metrics: { highlight: "Zero downtime · Live patients daily" },
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Docker", "AWS"],
    featured: true,
    completedAt: "2026-02-01",
    liveUrl: "https://anubhanutrition.in",
    content: "",
  },
  {
    slug: "voice-portfolio",
    title: "AI Voice Portfolio",
    client: "Personal",
    clientCountry: "India",
    category: "AI / Voice",
    summary: "Voice-navigable portfolio — speak; Claude answers as Tanishk.",
    problem: "",
    solution: "",
    result: "",
    metrics: { highlight: "Voice-navigable portfolio, live in production" },
    techStack: ["Next.js", "Claude", "Deepgram", "ElevenLabs"],
    featured: true,
    completedAt: "2025-12-01",
    liveUrl: "https://tanishk-khare.me",
    content: "",
  },
  {
    slug: "yoga-for-cure-platform",
    title: "Yoga for Cure",
    client: "Yoga for Cure",
    clientCountry: "India",
    category: "Wellness",
    summary: "High-traffic platform for a brand with 350,000+ YouTube subscribers.",
    problem: "",
    solution: "",
    result: "",
    metrics: { highlight: "350,000+ YouTube subscriber audience" },
    techStack: ["Next.js", "Node.js", "Cloud"],
    featured: true,
    completedAt: "2025-06-01",
    liveUrl: "https://yogaforcure.in",
    content: "",
  },
  {
    slug: "visa-house-portal",
    title: "Visa House",
    client: "Visa House",
    clientCountry: "India",
    category: "Immigration Tech",
    summary: "Visa consultation portal covering 90+ countries.",
    problem: "",
    solution: "",
    result: "",
    metrics: { highlight: "90+ countries covered" },
    techStack: ["Next.js", "Node.js", "PostgreSQL"],
    featured: false,
    completedAt: "2025-04-01",
    liveUrl: "https://visahouse.co.in",
    content: "",
  },
  {
    slug: "clinicd",
    title: "ClinicD — OPD Management",
    client: "Tanishk Khare",
    clientCountry: "India",
    category: "Healthcare SaaS",
    summary: "Generalised OPD management for clinics — Next.js, Prisma, Docker.",
    problem: "",
    solution: "",
    result: "",
    metrics: { highlight: "Generalised clinic management SaaS" },
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Docker"],
    featured: false,
    completedAt: "2025-08-01",
    liveUrl: "https://clinicd.tanishk-khare.me",
    content: "",
  },
];

interface ProjectsGridProps {
  projects: Project[];
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const list = projects.length > 0 ? projects : FALLBACK;

  return (
    <section id="work">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          borderBottom: "1px solid var(--ink)",
        }}
      >
        <div style={{ padding: "20px 24px", borderRight: "1px solid var(--ink)" }}>
          <h2
            className="font-headline"
            style={{
              fontWeight: 900,
              fontStyle: "italic",
              fontSize: "42px",
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            Selected Works &amp; Case Studies
          </h2>
          <p
            className="font-accent"
            style={{
              fontSize: "12px",
              fontStyle: "italic",
              opacity: 0.65,
              marginTop: "8px",
            }}
          >
            Proof of craft. Every project is a real problem solved with real engineering, live in
            production.
          </p>
        </div>
        <div style={{ padding: "20px 24px", display: "flex", alignItems: "center" }}>
          <p className="font-accent" style={{ fontStyle: "italic", fontSize: "15px", lineHeight: 1.6 }}>
            &ldquo;A portfolio is not a collection of screenshots. It is a record of problems
            eliminated, systems built, and businesses accelerated. Judge accordingly.&rdquo;
          </p>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          borderBottom: "3px solid var(--ink)",
        }}
      >
        {list.slice(0, 9).map((project, idx) => {
          const metricEntries = Object.entries(project.metrics ?? {});
          const firstMetric =
            metricEntries.length > 0 ? String(metricEntries[0]![1]) : "";

          return (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="project-card col-rule"
              style={{
                borderRight: (idx + 1) % 3 === 0 ? "none" : "1px solid var(--ink)",
                borderBottom: idx < list.length - 3 ? "1px solid var(--ink)" : undefined,
              }}
            >
              <span
                className="font-headline"
                style={{
                  position: "absolute",
                  top: "-8px",
                  right: "8px",
                  fontSize: "52px",
                  fontWeight: 900,
                  color: "rgba(26,18,9,0.07)",
                  pointerEvents: "none",
                }}
              >
                {String(idx + 1).padStart(2, "0")}
              </span>
              <p
                className="font-accent"
                style={{
                  fontSize: "10px",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "var(--red)",
                  marginBottom: "6px",
                }}
              >
                {project.category}
              </p>
              <h3
                className="font-headline"
                style={{
                  fontWeight: 700,
                  fontSize: "17px",
                  lineHeight: 1.2,
                  marginBottom: "8px",
                  borderBottom: "1px solid rgba(26,18,9,0.2)",
                  paddingBottom: "8px",
                }}
              >
                {project.title}
              </h3>
              <p
                className="font-accent"
                style={{ fontStyle: "italic", fontSize: "11px", opacity: 0.65 }}
              >
                {project.client} · {project.clientCountry}
              </p>
              <p
                className="font-body"
                style={{ fontSize: "12.5px", lineHeight: 1.65, marginTop: "8px", marginBottom: "10px" }}
              >
                {project.summary}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginBottom: "8px" }}>
                {project.techStack.slice(0, 5).map((t) => (
                  <span
                    key={t}
                    className="font-accent"
                    style={{
                      fontStyle: "italic",
                      fontSize: "10px",
                      letterSpacing: "0.08em",
                      padding: "2px 7px",
                      border: "1px solid var(--ink)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              {firstMetric ? (
                <p
                  className="font-headline"
                  style={{
                    fontWeight: 700,
                    fontSize: "13px",
                    color: "var(--red)",
                    fontStyle: "italic",
                    marginTop: "8px",
                  }}
                >
                  {firstMetric}
                </p>
              ) : null}
              {project.liveUrl ? (
                <p className="font-accent" style={{ fontStyle: "italic", fontSize: "11px", marginTop: "8px" }}>
                  {project.liveUrl.replace(/^https?:\/\//, "")}
                </p>
              ) : null}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
