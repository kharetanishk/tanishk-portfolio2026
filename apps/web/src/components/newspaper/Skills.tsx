const skillGroups = [
  {
    category: "Frontend",
    skills: [
      { name: "Next.js", level: "Expert", years: 5 },
      { name: "React", level: "Expert", years: 6 },
      { name: "TypeScript", level: "Expert", years: 5 },
      { name: "Tailwind CSS", level: "Advanced", years: 4 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: "Expert", years: 6 },
      { name: "Express / Fastify", level: "Advanced", years: 5 },
      { name: "REST & GraphQL", level: "Advanced", years: 5 },
      { name: "tRPC", level: "Advanced", years: 3 },
    ],
  },
  {
    category: "Data & Infra",
    skills: [
      { name: "PostgreSQL", level: "Advanced", years: 5 },
      { name: "Prisma ORM", level: "Expert", years: 4 },
      { name: "Redis", level: "Proficient", years: 3 },
      { name: "Docker", level: "Proficient", years: 3 },
    ],
  },
  {
    category: "Platforms",
    skills: [
      { name: "Vercel", level: "Expert", years: 4 },
      { name: "Stripe", level: "Advanced", years: 4 },
      { name: "Supabase", level: "Advanced", years: 3 },
      { name: "AWS", level: "Proficient", years: 3 },
    ],
  },
];

const levelWidth: Record<string, string> = {
  Expert: "100%",
  Advanced: "80%",
  Proficient: "60%",
  Familiar: "40%",
};

export function SkillsSection() {
  return (
    <section
      id="skills"
      style={{
        padding: "48px 40px",
        borderBottom: "1px solid var(--ink)",
        background: "var(--paper-dark)",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div className="section-header" style={{ marginBottom: "36px" }}>
          <h2
            className="playfair"
            style={{
              fontSize: "11px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              fontVariant: "small-caps",
              fontWeight: 400,
            }}
          >
            The Arsenal — Technologies &amp; Depth of Expertise
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            border: "1px solid var(--ink)",
          }}
        >
          {skillGroups.map((group, gi) => (
            <div
              key={group.category}
              style={{
                padding: "24px 20px",
                borderRight: gi < skillGroups.length - 1 ? "1px solid var(--ink)" : "none",
              }}
            >
              <h3
                style={{
                  fontSize: "10px",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "var(--red)",
                  marginBottom: "20px",
                  fontVariant: "small-caps",
                  paddingBottom: "8px",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                {group.category}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                        marginBottom: "4px",
                      }}
                    >
                      <span
                        className="playfair"
                        style={{ fontSize: "13px", fontWeight: 700 }}
                      >
                        {skill.name}
                      </span>
                      <span
                        className="fell"
                        style={{
                          fontSize: "10px",
                          fontStyle: "italic",
                          opacity: 0.6,
                          letterSpacing: "0.5px",
                        }}
                      >
                        {skill.level}
                      </span>
                    </div>
                    <div
                      style={{
                        height: "3px",
                        background: "var(--border)",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          height: "100%",
                          width: levelWidth[skill.level] ?? "60%",
                          background: "var(--ink)",
                          transition: "width 0.3s ease",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        fontSize: "10px",
                        opacity: 0.5,
                        marginTop: "2px",
                        fontVariant: "small-caps",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {skill.years}y exp
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
