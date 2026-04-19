const DOMAINS: { label: string; skills: string[] }[] = [
  {
    label: "Agentic AI & Voice",
    skills: [
      "Anthropic Claude API",
      "Deepgram STT",
      "ElevenLabs TTS",
      "Twilio Media Streams",
      "Tool-Calling Architecture",
      "RAG Systems",
      "MCP Integration",
      "WebSockets",
    ],
  },
  {
    label: "Frontend",
    skills: [
      "React.js",
      "Next.js App Router",
      "TypeScript",
      "React Native / Expo",
      "Tailwind CSS",
      "Custom Design Systems",
    ],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Fastify", "Express.js", "REST API Design", "BullMQ", "WebSockets"],
  },
  {
    label: "DevOps & Cloud",
    skills: [
      "Docker & Compose",
      "AWS EC2",
      "Nginx",
      "CI/CD",
      "TLS/HTTPS",
      "systemd",
      "Pino Logging",
      "Linux Admin",
    ],
  },
  {
    label: "Data Layer",
    skills: ["PostgreSQL", "Prisma ORM", "Redis", "MongoDB"],
  },
  {
    label: "Architecture",
    skills: ["Turborepo", "pnpm Workspaces", "Zod", "Git", "Monorepo Patterns"],
  },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      style={{
        display: "grid",
        gridTemplateColumns: "280px 1fr",
        borderBottom: "3px solid var(--ink)",
      }}
    >
      <div style={{ padding: "24px", borderRight: "2px solid var(--ink)" }}>
        <p className="section-tag" style={{ marginBottom: "8px" }}>
          Technical Arsenal
        </p>
        <h3 className="font-headline" style={{ fontWeight: 900, fontSize: "32px", fontStyle: "italic", lineHeight: 1.1, marginBottom: "14px" }}>
          The Complete Stack
        </h3>
        <p className="font-body article-body" style={{ fontSize: "13px", lineHeight: 1.65, marginBottom: "14px" }}>
          Every tool listed here has been used in production, at scale, deployed on real servers,
          serving real users. Not a tutorial. Not a side project.
        </p>
        <div
          style={{
            borderLeft: "3px solid var(--red)",
            paddingLeft: "12px",
            marginTop: "14px",
          }}
        >
          <p className="font-accent article-body" style={{ fontStyle: "italic", fontSize: "13px", lineHeight: 1.7 }}>
            TypeScript + Zod end-to-end is non-negotiable for anything production. If your data
            contracts aren&apos;t typed and validated at runtime, you&apos;re building on sand.
          </p>
        </div>
      </div>
      <div style={{ padding: "24px" }}>
        {DOMAINS.map((domain) => (
          <div key={domain.label} style={{ marginBottom: "20px" }}>
            <p
              style={{
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "var(--red)",
                marginBottom: "8px",
              }}
            >
              {domain.label}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {domain.skills.map((s) => (
                <span
                  key={s}
                  className="font-accent skill-tag"
                  style={{
                    fontStyle: "italic",
                    fontSize: "11px",
                    padding: "3px 10px",
                    border: "1px solid var(--ink)",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
