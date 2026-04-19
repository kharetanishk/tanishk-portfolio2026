export function ContactSection() {
  const rows = [
    { label: "EMAIL", value: "tanishk16012004@gmail.com", href: "mailto:tanishk16012004@gmail.com" },
    { label: "PHONE", value: "+91-6260440241", href: "tel:+916260440241" },
    { label: "LOCATION", value: "Bhilai / Bhopal, Chhattisgarh & MP, India", href: null },
    {
      label: "GITHUB",
      value: "github.com/tanishk-khare",
      href: "https://github.com/tanishk-khare",
      external: true,
    },
    {
      label: "LINKEDIN",
      value: "linkedin.com/in/tanishk-khare",
      href: "https://linkedin.com/in/tanishk-khare",
      external: true,
    },
    {
      label: "TIMEZONE",
      value: "IST (UTC+5:30) · US EST/PST overlap available",
      href: null,
    },
  ] as const;

  return (
    <section id="contact">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          borderBottom: "4px double var(--ink)",
        }}
      >
        <div style={{ padding: "32px 24px", borderRight: "2px solid var(--ink)" }}>
          <h2
            className="font-headline"
            style={{
              fontWeight: 900,
              fontStyle: "italic",
              fontSize: "48px",
              lineHeight: 1,
              letterSpacing: "-0.02em",
              marginBottom: "16px",
            }}
          >
            Let&apos;s Build Something That Runs in Production.
          </h2>
          <p
            className="font-accent"
            style={{
              fontStyle: "italic",
              fontSize: "15px",
              lineHeight: 1.7,
              marginBottom: "24px",
              maxWidth: "400px",
            }}
          >
            If you have a product to build, an AI system to architect, or infrastructure that needs
            to stop being a liability — and you care about the quality of the outcome — this is the
            right conversation.
          </p>
          <a
            href="mailto:tanishk16012004@gmail.com"
            className="font-accent"
            style={{
              display: "inline-block",
              background: "var(--ink)",
              color: "var(--paper)",
              fontStyle: "italic",
              fontSize: "13px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              padding: "12px 32px",
              border: "2px solid var(--ink)",
              marginRight: "12px",
              transition: "background 0.15s ease, color 0.15s ease",
            }}
          >
            Commission a Project
          </a>
          <a
            href="https://cal.com/tanishkkhare"
            target="_blank"
            rel="noopener noreferrer"
            className="font-accent"
            style={{
              display: "inline-block",
              background: "transparent",
              color: "var(--ink)",
              fontStyle: "italic",
              fontSize: "13px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              padding: "12px 32px",
              border: "2px solid var(--ink)",
              transition: "background 0.15s ease, color 0.15s ease",
            }}
          >
            Schedule a Call
          </a>
        </div>
        <div style={{ padding: "32px 24px" }}>
          {rows.map((row) => (
            <div
              key={row.label}
              style={{
                display: "flex",
                gap: "12px",
                padding: "14px 0",
                borderBottom: "1px solid rgba(26,18,9,0.15)",
                alignItems: "baseline",
              }}
            >
              <span
                className="section-tag"
                style={{ minWidth: "88px", margin: 0 }}
              >
                {row.label}
              </span>
              <span className="font-accent" style={{ fontStyle: "italic", fontSize: "14px" }}>
                {row.href ? (
                  <a
                    href={row.href}
                    {...("external" in row && row.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {row.value}
                  </a>
                ) : (
                  row.value
                )}
              </span>
            </div>
          ))}
          <div
            style={{
              display: "flex",
              gap: "12px",
              padding: "14px 0",
              alignItems: "center",
            }}
          >
            <span className="section-tag" style={{ minWidth: "88px", margin: 0 }}>
              STATUS
            </span>
            <span className="font-accent" style={{ fontStyle: "italic", fontSize: "14px" }}>
              <span style={{ color: "#2d6a2d", marginRight: "6px" }}>●</span>
              Available for new projects — 2026
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
