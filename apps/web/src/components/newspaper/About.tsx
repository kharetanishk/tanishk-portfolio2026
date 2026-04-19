export function AboutColumns() {
  return (
    <section
      id="about"
      style={{
        padding: "56px 40px",
        borderBottom: "1px solid var(--ink)",
        background: "var(--paper-dark)",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Header */}
        <div className="section-header" style={{ marginBottom: "40px" }}>
          <h2
            className="playfair"
            style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", fontVariant: "small-caps", fontWeight: 400 }}
          >
            The Man Behind the Code — A Profile
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "0",
          }}
        >
          {/* Column 1 */}
          <div
            className="fell"
            style={{
              fontStyle: "italic",
              fontSize: "14px",
              lineHeight: 1.8,
              borderRight: "1px solid var(--ink)",
              paddingRight: "36px",
              color: "var(--ink-mid)",
            }}
          >
            <p style={{ marginBottom: "16px" }}>
              My name is Tanishk Khare. I am a full-stack software developer based in Bhopal,
              Madhya Pradesh, India. For the past five years, I have been building production
              software for clients in the United States, United Kingdom, and Australia.
            </p>
            <p>
              I did not stumble into software. I chose it because I understood early that code
              is leverage &mdash; the ability to build systems that scale without proportionally
              scaling effort. I have spent every year since then getting sharper at that craft.
            </p>
          </div>

          {/* Column 2 */}
          <div
            className="fell"
            style={{
              fontStyle: "italic",
              fontSize: "14px",
              lineHeight: 1.8,
              borderRight: "1px solid var(--ink)",
              padding: "0 36px",
              color: "var(--ink-mid)",
            }}
          >
            <p style={{ marginBottom: "16px" }}>
              My primary stack is Next.js, React, TypeScript, Node.js, and PostgreSQL with Prisma.
              I have shipped SaaS platforms, e-commerce engines, FinTech dashboards, EdTech
              portals, and internal tooling &mdash; all in production, all serving real users.
            </p>
            <p>
              What differentiates me is not any single technology. It is the combination of
              technical depth, business understanding, and communication discipline. I treat
              client projects the way I would treat my own startup.
            </p>
          </div>

          {/* Column 3 — quick facts */}
          <div style={{ paddingLeft: "36px" }}>
            <h3
              className="playfair"
              style={{
                fontSize: "13px",
                fontStyle: "italic",
                marginBottom: "20px",
                borderBottom: "1px solid var(--border)",
                paddingBottom: "8px",
              }}
            >
              Quick Reference
            </h3>
            <dl style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                { label: "Location", value: "Bhopal, India" },
                { label: "Experience", value: "5+ years" },
                { label: "Projects Shipped", value: "40+" },
                { label: "Specialisation", value: "Next.js, SaaS, FinTech" },
                { label: "Client Timezone", value: "US/UK overlap available" },
                { label: "Languages", value: "English (fluent), Hindi" },
                { label: "Availability", value: "Open to new projects" },
                { label: "Engagement Types", value: "Contract · Retainer · Advisory" },
              ].map((item) => (
                <div key={item.label}>
                  <dt
                    style={{
                      fontSize: "9px",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      opacity: 0.55,
                      marginBottom: "2px",
                      fontVariant: "small-caps",
                    }}
                  >
                    {item.label}
                  </dt>
                  <dd
                    className="fell"
                    style={{ fontStyle: "italic", fontSize: "14px" }}
                  >
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
