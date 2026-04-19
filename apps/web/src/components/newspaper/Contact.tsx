import { SITE_CONFIG } from "@repo/config";

export function ContactSection() {
  const contactItems = [
    { label: "Email", value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
    { label: "Location", value: SITE_CONFIG.location, href: null },
    { label: "GitHub", value: "github.com/tanishkkhare", href: SITE_CONFIG.github },
    { label: "LinkedIn", value: "linkedin.com/in/tanishkkhare", href: SITE_CONFIG.linkedin },
    { label: "Timezone", value: "IST (UTC+5:30) · US/UK overlap available", href: null },
    { label: "Status", value: null, href: null, isStatus: true },
  ];

  return (
    <section
      id="contact"
      style={{
        padding: "64px 40px",
        borderBottom: "3px double var(--ink)",
        background: "var(--paper)",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
          }}
        >
          {/* LEFT */}
          <div>
            <p
              style={{
                fontSize: "10px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                opacity: 0.5,
                marginBottom: "16px",
              }}
            >
              Commission a Project
            </p>

            <h2
              className="playfair"
              style={{
                fontSize: "clamp(28px, 4vw, 48px)",
                fontStyle: "italic",
                fontWeight: 400,
                lineHeight: 1.2,
                marginBottom: "24px",
              }}
            >
              Let&rsquo;s Build Something Extraordinary.
            </h2>

            <div
              className="fell"
              style={{
                fontStyle: "italic",
                fontSize: "15px",
                lineHeight: 1.8,
                color: "var(--ink-light)",
                marginBottom: "36px",
              }}
            >
              <p style={{ marginBottom: "16px" }}>
                Whether you are a US startup looking to ship your first SaaS, a UK agency
                needing a reliable development partner, or a founder with a vision and a deadline
                &mdash; I want to hear from you.
              </p>
              <p>
                I respond to every inquiry personally within 24 hours. No gatekeepers,
                no account managers. You get me.
              </p>
            </div>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a
                href={`mailto:${SITE_CONFIG.email}?subject=Project Inquiry`}
                className="btn-ink"
                style={{ fontSize: "11px" }}
              >
                Commission a Project
              </a>
              <a
                href="https://cal.com/tanishkkhare"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ fontSize: "11px" }}
              >
                Schedule a Call
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div
            style={{
              borderLeft: "1px solid var(--ink)",
              paddingLeft: "60px",
            }}
          >
            <h3
              className="playfair"
              style={{
                fontSize: "13px",
                fontStyle: "italic",
                marginBottom: "28px",
                borderBottom: "1px solid var(--border)",
                paddingBottom: "12px",
              }}
            >
              Contact Information
            </h3>

            <dl style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {contactItems.map((item) => (
                <div key={item.label}>
                  <dt
                    style={{
                      fontSize: "9px",
                      letterSpacing: "2.5px",
                      textTransform: "uppercase",
                      opacity: 0.55,
                      marginBottom: "3px",
                      fontVariant: "small-caps",
                    }}
                  >
                    {item.label}
                  </dt>
                  {item.isStatus ? (
                    <dd style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span
                        style={{
                          display: "inline-block",
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#22c55e",
                          boxShadow: "0 0 0 2px rgba(34,197,94,0.25)",
                        }}
                      />
                      <span
                        className="fell"
                        style={{ fontStyle: "italic", fontSize: "14px", color: "#22c55e" }}
                      >
                        Available for new projects
                      </span>
                    </dd>
                  ) : item.href ? (
                    <dd>
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="fell"
                        style={{
                          fontStyle: "italic",
                          fontSize: "14px",
                          color: "var(--ink)",
                          textDecoration: "underline",
                          textUnderlineOffset: "3px",
                          textDecorationColor: "var(--sepia)",
                        }}
                      >
                        {item.value}
                      </a>
                    </dd>
                  ) : (
                    <dd
                      className="fell"
                      style={{ fontStyle: "italic", fontSize: "14px" }}
                    >
                      {item.value}
                    </dd>
                  )}
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
