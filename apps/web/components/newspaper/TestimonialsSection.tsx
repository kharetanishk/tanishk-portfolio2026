const CARDS = [
  {
    quote:
      "Working with Tanishk was the best technical decision we made. He shipped our full platform in weeks, the code is genuinely excellent, and he communicates better than developers we pay three times more for locally. We came back for a second project without hesitation.",
    client: "— Freelance Client, Platform Build",
    role: "Production Web Platform · 2025",
  },
  {
    quote:
      "The voice AI system Tanishk built for us is unlike anything I've seen from a freelancer. He designed the architecture, wrote the agent kernel, set up the infrastructure, and delivered a working phone-callable AI assistant. That's a senior engineer's job. He's 22.",
    client: "— Tech Founder, AI Integration Project",
    role: "Agentic AI System · 2026",
  },
  {
    quote:
      "Tanishk's selection for Super 30 3.0 is well deserved. In a cohort of India's top CS students, his depth in AI systems, full-stack engineering, and production DevOps stood out. The work on xTanBot.ai alone demonstrates architectural thinking most engineers develop over a decade.",
    client: "— Developer Community Recognition",
    role: "Super 30 3.0 · 100xDevs · 2026",
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      style={{
        background: "var(--ink)",
        color: "var(--paper)",
        borderBottom: "3px solid var(--ink)",
      }}
    >
      <div
        className="font-accent"
        style={{
          padding: "16px 24px",
          borderBottom: "1px solid rgba(242,234,216,0.2)",
          fontSize: "11px",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          textAlign: "center",
          opacity: 0.7,
        }}
      >
        Letters of Commendation — From Clients &amp; The Developer Community
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        {CARDS.map((c, i) => (
          <div
            key={i}
            style={{
              padding: "24px",
              borderRight: i < 2 ? "1px solid rgba(242,234,216,0.15)" : "none",
              position: "relative",
            }}
          >
            <span
              className="font-headline"
              style={{
                position: "absolute",
                top: "14px",
                left: "18px",
                fontSize: "80px",
                lineHeight: 1,
                color: "rgba(242,234,216,0.1)",
              }}
            >
              &ldquo;
            </span>
            <p
              className="font-accent"
              style={{
                fontStyle: "italic",
                fontSize: "14px",
                lineHeight: 1.7,
                position: "relative",
                zIndex: 1,
                marginBottom: "16px",
              }}
            >
              {c.quote}
            </p>
            <p className="font-headline" style={{ fontWeight: 700, fontSize: "13px" }}>
              {c.client}
            </p>
            <p className="font-accent" style={{ fontStyle: "italic", fontSize: "12px", opacity: 0.7 }}>
              {c.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
