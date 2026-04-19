const testimonials = [
  {
    quote:
      "Tanishk is the best freelance developer I have ever hired — full stop. He delivered our entire analytics SaaS platform in six weeks, communicated every single day, and the code is some of the cleanest I have reviewed. We are now on our third project together.",
    name: "Marcus T.",
    role: "Co-Founder & CEO",
    company: "Growth Analytics Co.",
    country: "United States",
    rating: 5,
  },
  {
    quote:
      "We searched for three months for a developer who could handle our architecture requirements. Tanishk understood the problem faster than developers we had interviewed who had ten years more experience. Exceptional communicator. Zero surprises.",
    name: "Priya S.",
    role: "Head of Engineering",
    company: "UK FinTech Scale-up",
    country: "United Kingdom",
    rating: 5,
  },
  {
    quote:
      "I was skeptical about hiring a freelancer from India for such a critical project. Tanishk completely changed my perspective. Not only was the delivery flawless, but his proactiveness in surfacing problems early saved us weeks of potential rework.",
    name: "James K.",
    role: "Product Director",
    company: "SaaS Platform",
    country: "Australia",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      style={{
        background: "var(--ink)",
        color: "var(--paper)",
        padding: "56px 40px",
        borderBottom: "2px solid var(--ink)",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            borderBottom: "1px solid rgba(242,234,216,0.2)",
            paddingBottom: "24px",
            marginBottom: "40px",
          }}
        >
          <h2
            style={{
              fontSize: "11px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              fontVariant: "small-caps",
              color: "var(--paper)",
              opacity: 0.8,
            }}
          >
            Letters of Commendation &mdash; From Clients Across the Globe
          </h2>
        </div>

        {/* Three columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              style={{
                padding: "0 36px",
                borderRight: i < testimonials.length - 1
                  ? "1px solid rgba(242,234,216,0.15)"
                  : "none",
                position: "relative",
              }}
            >
              {/* Large quote mark */}
              <div
                className="playfair"
                style={{
                  fontSize: "80px",
                  lineHeight: 1,
                  color: "rgba(242,234,216,0.08)",
                  position: "absolute",
                  top: "-10px",
                  left: "28px",
                  userSelect: "none",
                  fontStyle: "italic",
                }}
              >
                &ldquo;
              </div>

              {/* Quote */}
              <blockquote
                className="fell"
                style={{
                  fontStyle: "italic",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "rgba(242,234,216,0.9)",
                  marginBottom: "24px",
                  position: "relative",
                  zIndex: 1,
                  paddingTop: "32px",
                }}
              >
                {t.quote}
              </blockquote>

              {/* Attribution */}
              <div
                style={{
                  borderTop: "1px solid rgba(242,234,216,0.2)",
                  paddingTop: "16px",
                }}
              >
                <div
                  className="playfair"
                  style={{ fontSize: "15px", fontWeight: 700, marginBottom: "4px" }}
                >
                  {t.name}
                </div>
                <div
                  className="fell"
                  style={{
                    fontSize: "12px",
                    fontStyle: "italic",
                    opacity: 0.65,
                    marginBottom: "2px",
                  }}
                >
                  {t.role} &mdash; {t.company}
                </div>
                <div
                  style={{
                    fontSize: "10px",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    opacity: 0.5,
                    fontVariant: "small-caps",
                  }}
                >
                  {t.country}
                </div>
                {/* Stars */}
                <div style={{ marginTop: "8px", color: "var(--red)", fontSize: "12px" }}>
                  {"★".repeat(t.rating)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
