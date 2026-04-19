const reasons = [
  {
    number: "I",
    title: "Engineered for Production",
    body: "Every line of code I write is written as if it will be maintained by someone else in 18 months. Clean architecture, typed contracts, documented decisions. No spaghetti. No shortcuts.",
  },
  {
    number: "II",
    title: "The India Advantage, Delivered",
    body: "Top-tier engineering at a fraction of the cost of a Western agency — without sacrificing quality. You get the output of a senior developer who has shipped products used by tens of thousands.",
  },
  {
    number: "III",
    title: "Communication-First Culture",
    body: "Daily written updates. Async-first workflow. US/UK timezone overlap available. You will always know where the project stands. No chasing. No silence.",
  },
  {
    number: "IV",
    title: "Business-Minded Engineering",
    body: "I am not here to write elegant code in isolation. I am here to solve your business problem. Every technical decision I make is filtered through the question: does this move the needle?",
  },
];

export function WhySection() {
  return (
    <section
      id="why"
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
            Why Global Clients Choose Tanishk Khare
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            border: "1px solid var(--ink)",
          }}
        >
          {reasons.map((r, i) => (
            <div
              key={r.number}
              style={{
                padding: "28px 24px",
                borderRight: i < reasons.length - 1 ? "1px solid var(--ink)" : "none",
              }}
            >
              <div
                className="playfair"
                style={{
                  fontSize: "11px",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "var(--red)",
                  marginBottom: "12px",
                  fontStyle: "italic",
                }}
              >
                {r.number}.
              </div>
              <h3
                className="playfair"
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  marginBottom: "10px",
                  lineHeight: 1.3,
                }}
              >
                {r.title}
              </h3>
              <p
                className="fell"
                style={{
                  fontSize: "13px",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                  color: "var(--ink-light)",
                }}
              >
                {r.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
