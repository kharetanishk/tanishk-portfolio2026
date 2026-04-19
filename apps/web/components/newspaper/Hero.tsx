export function HeroSection() {
  return (
    <section
      className="hero-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 420px",
        borderBottom: "3px solid var(--ink)",
        minHeight: "520px",
      }}
    >
      {/* LEFT */}
      <div
        style={{
          padding: "24px 24px 24px 0",
          borderRight: "2px solid var(--ink)",
        }}
      >
        <p
          className="font-accent"
          style={{
            fontStyle: "italic",
            fontSize: "13px",
            borderBottom: "1px solid var(--ink)",
            paddingBottom: "6px",
            marginBottom: "10px",
          }}
        >
          Exclusive Interview with India&apos;s Leading AI &amp; Full-Stack Engineer
        </p>

        <h1
          className="font-headline"
          style={{
            fontWeight: 900,
            fontSize: "clamp(38px, 5.5vw, 72px)",
            lineHeight: 1.0,
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
            marginBottom: "12px",
          }}
        >
          INDIA&apos;S TOP 30. SHIPS AI VOICE SYSTEMS.
        </h1>
        <p
          style={{
            fontSize: "0.55em",
            fontStyle: "italic",
            color: "var(--red)",
            marginBottom: "16px",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Tanishk Khare — 22. Super 30 3.0. Five Live Products. Zero Missed Deadlines.
        </p>

        <p
          className="font-accent"
          style={{
            fontStyle: "italic",
            fontSize: "17px",
            borderTop: "2px solid var(--ink)",
            borderBottom: "2px solid var(--ink)",
            padding: "10px 0",
            marginBottom: "16px",
            lineHeight: 1.45,
          }}
        >
          From Bhilai to the global internet — a 22-year-old engineer rewriting what agentic AI,
          voice systems, and production infrastructure look like when built by India&apos;s finest.
        </p>

        <p
          className="font-accent"
          style={{
            fontSize: "11px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "14px",
            opacity: 0.7,
          }}
        >
          By the Global Tech Desk · AI Systems &amp; Full-Stack Engineering · April 2026
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
            marginBottom: "16px",
          }}
        >
          <p
            className="font-accent article-body"
            style={{ fontSize: "13px", lineHeight: 1.7, fontStyle: "italic" }}
          >
            In a field where most developers claim full-stack but mean they&apos;ve used a CSS
            framework, Tanishk Khare means it differently. At 22, he has shipped xTanBot.ai — a
            production-grade agentic AI voice assistant where users call a phone number and speak to
            Claude in real time, with sub-second latency, tool-calling capabilities, and the kind
            of infrastructure discipline that most senior engineers don&apos;t bother with.
            Selected for Super 30 3.0 by 100xDevs — the national programme that identifies the top 30
            CS students in India — Tanishk represents a new category of developer: one who designs
            the agent kernel before writing a line of code.
          </p>
          <p
            className="font-accent article-body"
            style={{ fontSize: "13px", lineHeight: 1.7, fontStyle: "italic" }}
          >
            Five live production systems. Zero missed deadlines. Clients ranging from a yoga
            wellness brand with 350,000 YouTube subscribers to a 90-country visa portal to a
            production clinic management SaaS. Every one deployed on Docker, behind Nginx, on AWS
            EC2, with TLS, CI/CD, and zero downtime. &ldquo;Owning the whole stack matters,&rdquo; he
            says. &ldquo;A beautiful frontend with a flaky backend is useless.&rdquo; The record speaks for
            itself: when a client hires Tanishk Khare, they get Silicon Valley-grade engineering at a
            fraction of the cost, with a communication ethic and delivery speed that embarrasses
            most local alternatives.
          </p>
        </div>

        <blockquote className="pullquote font-headline">
          &ldquo;I don&apos;t just call the API — I design the kernel. That&apos;s the difference between a toy
          and a production system.&rdquo;
          <footer
            className="font-accent"
            style={{
              marginTop: "10px",
              fontSize: "12px",
              fontStyle: "normal",
              color: "var(--ink)",
              opacity: 0.8,
            }}
          >
            — Tanishk Khare
          </footer>
        </blockquote>
      </div>

      {/* RIGHT */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            flex: 1,
            minHeight: "360px",
            position: "relative",
            background:
              "linear-gradient(135deg, #2c2010 0%, #0d0a05 100%)",
            backgroundImage: `
              radial-gradient(circle, rgba(242,234,216,0.06) 1px, transparent 1px),
              linear-gradient(135deg, #2c2010 0%, #0d0a05 100%)
            `,
            backgroundSize: "8px 8px, 100% 100%",
            overflow: "hidden",
          }}
        >
          <div
            className="font-headline"
            style={{
              position: "absolute",
              fontSize: "120px",
              fontWeight: 900,
              opacity: 0.12,
              color: "var(--paper)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -55%)",
              userSelect: "none",
            }}
          >
            TK
          </div>
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "24px",
              textAlign: "center",
            }}
          >
            <p
              className="font-headline"
              style={{
                fontStyle: "italic",
                fontWeight: 900,
                fontSize: "28px",
                color: "var(--paper)",
                marginBottom: "8px",
              }}
            >
              Tanishk Khare
            </p>
            <p
              className="font-accent"
              style={{
                fontSize: "12px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                opacity: 0.75,
                borderTop: "1px solid rgba(242,234,216,0.3)",
                borderBottom: "1px solid rgba(242,234,216,0.3)",
                padding: "4px 0",
                marginBottom: "12px",
                color: "var(--paper)",
              }}
            >
              Full-Stack Engineer &amp; AI Systems Builder
            </p>
            <span
              className="font-headline"
              style={{
                display: "inline-block",
                background: "var(--red)",
                color: "var(--paper)",
                fontWeight: 700,
                fontSize: "10px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                padding: "3px 10px",
              }}
            >
              Super 30 3.0 · India&apos;s Top 30 CS
            </span>
            <span
              className="font-headline"
              style={{
                display: "inline-block",
                marginTop: "6px",
                background: "var(--red)",
                color: "var(--paper)",
                fontWeight: 700,
                fontSize: "10px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                padding: "3px 10px",
              }}
            >
              Five Live Products · Zero Missed Deadlines
            </span>
            <p
              className="font-accent"
              style={{
                marginTop: "16px",
                fontSize: "10px",
                opacity: 0.4,
                fontStyle: "italic",
                color: "var(--paper)",
              }}
            >
              [ Replace with professional photo ]
            </p>
          </div>
        </div>

        <div
          className="font-accent"
          style={{
            background: "var(--ink)",
            color: "var(--paper)",
            padding: "10px 16px",
            fontStyle: "italic",
            fontSize: "11.5px",
            borderTop: "2px solid var(--red)",
          }}
        >
          Tanishk Khare — Full-Stack Engineer &amp; AI Systems Builder, Bhilai, India. Builder of
          xTanBot.ai. Super 30 3.0 (2026). Available for global clients.
        </div>

        <div
          style={{
            background: "var(--paper-dark)",
            borderTop: "1px solid var(--ink)",
            padding: "16px",
          }}
        >
          <p
            className="font-accent"
            style={{
              fontSize: "13px",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              borderBottom: "1px solid var(--ink)",
              paddingBottom: "6px",
              marginBottom: "10px",
            }}
          >
            The Record, By Numbers
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 0,
              border: "1px solid var(--ink)",
            }}
          >
            {[
              { n: "5+", l: "Live Products" },
              { n: "0", l: "Missed Deadlines" },
              { n: "Top 30", l: "CS Students India" },
              { n: "Sub-1s", l: "AI Voice Latency" },
            ].map((s, idx) => (
              <div
                key={s.l}
                style={{
                  textAlign: "center",
                  border: "1px solid var(--ink)",
                  padding: "10px",
                  background: "var(--paper)",
                  borderTop: idx < 2 ? "1px solid var(--ink)" : undefined,
                }}
              >
                <div
                  className="font-headline"
                  style={{
                    fontWeight: 900,
                    fontSize: "28px",
                    color: "var(--red)",
                    lineHeight: 1,
                  }}
                >
                  {s.n}
                </div>
                <div
                  className="font-accent"
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    opacity: 0.75,
                    marginTop: "4px",
                  }}
                >
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
