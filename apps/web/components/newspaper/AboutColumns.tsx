export function AboutColumns() {
  return (
    <section
      id="about-columns"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        borderBottom: "3px solid var(--ink)",
      }}
    >
      <div style={{ padding: "20px", borderRight: "1px solid var(--ink)" }}>
        <p className="section-tag" style={{ marginBottom: "8px" }}>
          The Engineer
        </p>
        <h3 className="font-headline" style={{ fontWeight: 700, fontSize: "22px", lineHeight: 1.15, marginBottom: "12px" }}>
          Built on CS Fundamentals. Driven by Shipping.
        </h3>
        <p className="font-accent article-body" style={{ fontSize: "13px", lineHeight: 1.7, fontStyle: "italic" }}>
          Tanishk Khare grew up in Durg, Chhattisgarh, and has spent the better part of his life
          learning to build things — not academically, but really, in production, with real
          consequences for failure. His path to becoming one of India&apos;s most capable young
          full-stack engineers was marked by two things: an obsession with how systems actually work,
          and a refusal to ship anything he wouldn&apos;t be proud to maintain in six months. At 22,
          he holds a CS50x certification from Harvard, ranks #2 in his BCA cohort at Shri
          Shankaracharya Mahavidyalaya, and was selected for Super 30 3.0 — the national programme by
          100xDevs that identifies the top 30 CS students in India. The academic record and
          community recognition back what the deployed URLs already prove.
        </p>
      </div>
      <div style={{ padding: "20px", borderRight: "1px solid var(--ink)" }}>
        <p className="section-tag" style={{ marginBottom: "8px" }}>
          The Philosophy
        </p>
        <h3 className="font-headline" style={{ fontWeight: 700, fontSize: "22px", marginBottom: "12px" }}>
          Architecture First. Then Code.
        </h3>
        <p className="font-accent article-body" style={{ fontSize: "13px", lineHeight: 1.7, fontStyle: "italic" }}>
          There is a category of developer who begins with the code. Tanishk is not that developer.
          Every system begins with a schema, a data flow, a set of typed contracts. Only then does
          the code follow — and when it does, it follows cleanly. This orientation is most visible in
          xTanBot.ai: an agent kernel designed before a single API call was made, a monorepo
          structured across seven typed packages before a route was written, a voice pipeline
          architected for sub-second latency before a WebSocket was opened. The result is a system
          that works in production — not just in a demo. &ldquo;TypeScript + Zod end-to-end is
          non-negotiable,&rdquo; he says. &ldquo;If your data contracts aren&apos;t typed and validated at
          runtime, you&apos;re building on sand.&rdquo;
        </p>
      </div>
      <div style={{ padding: "20px" }}>
        <p className="section-tag" style={{ marginBottom: "8px" }}>
          The Opportunity
        </p>
        <h3 className="font-headline" style={{ fontWeight: 700, fontSize: "22px", marginBottom: "12px" }}>
          The Arbitrage Is Real. The Window Is Closing.
        </h3>
        <p className="font-accent article-body" style={{ fontSize: "13px", lineHeight: 1.7, fontStyle: "italic" }}>
          A senior full-stack engineer with AI capability — Claude API depth, voice pipeline
          experience, DevOps ownership — costs $150,000–$250,000 per year in the United States. The
          same capability, delivered by Tanishk Khare from India, is available at a fraction of that
          cost. Not as a compromise. As an advantage. The companies that move first — that identify
          and lock in the best Indian engineering talent before the global market fully prices it in
          — are the ones building a compounding competitive edge. The arbitrage exists because of
          geography, not capability. Tanishk Khare is available for freelance projects globally. If
          you&apos;re reading this and you need AI systems, full-stack engineering, or production
          infrastructure — the decision is straightforward.
        </p>
      </div>
    </section>
  );
}
