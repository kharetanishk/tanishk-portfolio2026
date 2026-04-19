export function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        padding: "48px 40px",
        borderBottom: "2px solid var(--ink)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "60% 40%",
          gap: "40px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* LEFT COLUMN */}
        <div style={{ borderRight: "1px solid var(--ink)", paddingRight: "40px" }}>
          {/* Kicker */}
          <p
            className="fell"
            style={{
              fontStyle: "italic",
              fontSize: "13px",
              letterSpacing: "1px",
              marginBottom: "16px",
              color: "var(--sepia)",
              borderBottom: "1px solid var(--border)",
              paddingBottom: "8px",
            }}
          >
            Exclusive Interview with India&rsquo;s Leading Freelance Developer
          </p>

          {/* Headline */}
          <h1
            className="playfair"
            style={{
              fontSize: "clamp(38px, 5.5vw, 72px)",
              fontWeight: 900,
              lineHeight: 1.05,
              textTransform: "uppercase",
              letterSpacing: "-1px",
              marginBottom: "12px",
            }}
          >
            India Ships World-Class Software.
            <br />
            <em
              style={{
                color: "var(--red)",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "0.65em",
                textTransform: "none",
              }}
            >
              And His Name is Tanishk Khare.
            </em>
          </h1>

          {/* Deck */}
          <div
            className="fell"
            style={{
              borderTop: "1px solid var(--ink)",
              borderBottom: "1px solid var(--ink)",
              padding: "10px 0",
              fontStyle: "italic",
              fontSize: "15px",
              lineHeight: 1.6,
              marginBottom: "20px",
              color: "var(--ink-mid)",
            }}
          >
            From Bhopal to Silicon Valley &mdash; one developer rewriting the narrative of what
            Indian engineering talent can deliver for global clients
          </div>

          {/* Byline */}
          <p
            style={{
              fontSize: "10px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontVariant: "small-caps",
              marginBottom: "20px",
              opacity: 0.65,
            }}
          >
            By Tanishk Khare &middot; Bhopal, Madhya Pradesh &middot; Available Worldwide
          </p>

          {/* Body text */}
          <div
            className="newspaper-body drop-cap fell"
            style={{ fontSize: "14px", marginBottom: "24px", color: "var(--ink-mid)" }}
          >
            <p style={{ marginBottom: "12px" }}>
              I have been building production software for global clients for over five years. Not
              prototypes. Not MVPs-that-never-ship. Real products — SaaS platforms, e-commerce
              engines, FinTech dashboards — that are used by thousands of people and trusted by
              businesses in the United States, United Kingdom, and Australia.
            </p>
            <p>
              What sets my work apart is not just technical skill — it is the intersection of
              engineering discipline, business understanding, and relentless delivery. When a client
              says &ldquo;we need this in six weeks,&rdquo; I do not negotiate the deadline. I
              execute. Every sprint. Every time.
            </p>
          </div>

          {/* Pullquote */}
          <blockquote className="pullquote" style={{ marginBottom: "24px" }}>
            &ldquo;The best freelancer in India that I have ever worked with &mdash; full stop.&rdquo;
            <footer
              style={{
                fontSize: "11px",
                fontStyle: "normal",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                marginTop: "8px",
                opacity: 0.7,
                color: "var(--ink)",
              }}
            >
              &mdash; US SaaS Founder, Series A
            </footer>
          </blockquote>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="#contact" className="btn-ink">
              Commission a Project
            </a>
            <a href="#work" className="btn-outline">
              See Case Studies &rarr;
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div>
          {/* Photo placeholder */}
          <div
            style={{
              background: "linear-gradient(160deg, var(--ink-mid) 0%, var(--ink) 100%)",
              aspectRatio: "4/5",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              marginBottom: "12px",
              overflow: "hidden",
            }}
          >
            {/* Red flag label */}
            <div
              style={{
                position: "absolute",
                top: "20px",
                left: "0",
                background: "var(--red)",
                color: "var(--paper)",
                padding: "5px 14px",
                fontSize: "10px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontVariant: "small-caps",
              }}
            >
              India&rsquo;s Finest Developer
            </div>

            {/* TK initials */}
            <div
              className="playfair"
              style={{
                fontSize: "clamp(80px, 15vw, 140px)",
                fontWeight: 900,
                color: "rgba(242, 234, 216, 0.08)",
                position: "absolute",
                userSelect: "none",
                lineHeight: 1,
              }}
            >
              TK
            </div>

            {/* Badge */}
            <div style={{ textAlign: "center", zIndex: 1 }}>
              <div
                className="playfair"
                style={{
                  fontSize: "28px",
                  fontWeight: 700,
                  color: "var(--paper)",
                  marginBottom: "6px",
                }}
              >
                Tanishk Khare
              </div>
              <div
                style={{
                  fontSize: "11px",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "rgba(242,234,216,0.65)",
                  fontVariant: "small-caps",
                }}
              >
                Full-Stack Developer
              </div>
            </div>
          </div>

          {/* Caption */}
          <p
            className="fell"
            style={{
              fontSize: "11px",
              fontStyle: "italic",
              color: "var(--ink-light)",
              textAlign: "center",
              marginBottom: "28px",
              opacity: 0.8,
            }}
          >
            Tanishk Khare, Bhopal, India &mdash; Available for global engagements
          </p>

          {/* Stats grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              border: "1px solid var(--ink)",
            }}
          >
            {[
              { number: "40+", label: "Projects Shipped" },
              { number: "0", label: "Missed Deadlines" },
              { number: "3", label: "Continents Served" },
              { number: "4×", label: "Faster Delivery" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  padding: "20px 16px",
                  textAlign: "center",
                  borderRight: i % 2 === 0 ? "1px solid var(--ink)" : "none",
                  borderBottom: i < 2 ? "1px solid var(--ink)" : "none",
                  background: i % 2 === 0 ? "var(--paper)" : "var(--paper-dark)",
                }}
              >
                <div
                  className="playfair"
                  style={{
                    fontSize: "36px",
                    fontWeight: 900,
                    color: "var(--red)",
                    lineHeight: 1,
                    marginBottom: "4px",
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    fontSize: "10px",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    fontVariant: "small-caps",
                    opacity: 0.7,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
