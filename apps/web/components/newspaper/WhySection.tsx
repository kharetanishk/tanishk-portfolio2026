const ITEMS = [
  {
    roman: "I",
    title: "Agentic AI & Voice Systems — Not Just CRUD",
    body: "Most Indian developers build forms and dashboards. Tanishk builds agent kernels, voice pipelines, and LLM systems that run in production. xTanBot.ai — a real phone-callable AI voice assistant using Claude, Deepgram, and ElevenLabs — is the proof. When you need AI that actually works, not a ChatGPT wrapper, this is the difference.",
  },
  {
    roman: "II",
    title: "From LLM Kernel to Docker Infra — One Engineer",
    body: "No handoffs. No 'that's the DevOps person's job.' Tanishk owns the entire stack: React/Next.js frontend, Node.js/Fastify API, PostgreSQL schema, Docker Compose, AWS EC2, Nginx reverse proxy, TLS/HTTPS, CI/CD pipelines. Five live production systems prove it. Zero downtime in all of them.",
  },
  {
    roman: "III",
    title: "Super 30 3.0 — Top 30 CS Students in India",
    body: "In 2026, Tanishk was selected for Super 30 3.0 by 100xDevs — Harkirat Singh's national programme identifying the top 30 CS students in India through rigorous competitive assessment. Rank #2 in his BCA batch. CS50x Harvard certified. The academic and community recognition backs the production record.",
  },
  {
    roman: "IV",
    title: "Ships On Time. Communicates Daily. Never Disappears.",
    body: "Five clients. Five on-time deliveries. Zero ghost jobs. Daily progress updates, async-first workflow designed for US/UK timezone overlap, English technical fluency. 'When a client hires Tanishk,' one client said, 'they always know exactly what's happening.' That alone is rarer than any technical skill.",
  },
];

export function WhySection() {
  return (
    <section id="about">
      <div
        style={{
          background: "var(--red)",
          color: "var(--paper)",
          textAlign: "center",
          padding: "10px 24px",
        }}
      >
        <p
          className="font-headline"
          style={{
            fontWeight: 900,
            fontSize: "14px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
          }}
        >
          Why Global Clients Choose Tanishk Khare Over Any Other Developer in India
        </p>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          borderBottom: "3px solid var(--ink)",
        }}
      >
        {ITEMS.map((item, i) => (
          <div
            key={item.roman}
            style={{
              borderRight: i < ITEMS.length - 1 ? "1px solid var(--ink)" : "none",
              padding: "20px 18px",
            }}
          >
            <p
              className="font-headline"
              style={{
                fontSize: "12px",
                color: "var(--red)",
                marginBottom: "8px",
                fontStyle: "italic",
              }}
            >
              {item.roman}.
            </p>
            <h3
              className="font-headline"
              style={{ fontWeight: 700, fontSize: "15px", marginBottom: "10px", lineHeight: 1.25 }}
            >
              {item.title}
            </h3>
            <p
              className="font-accent article-body"
              style={{ fontSize: "13px", lineHeight: 1.65, fontStyle: "italic" }}
            >
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
