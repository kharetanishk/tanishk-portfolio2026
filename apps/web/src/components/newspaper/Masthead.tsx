import { SITE_CONFIG } from "@repo/config";

export function Masthead() {
  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Arsenal", href: "#skills" },
    { label: "Dispatches", href: "#blog" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Engage", href: "#contact" },
    { label: "GitHub", href: SITE_CONFIG.github, external: true },
    { label: "LinkedIn", href: SITE_CONFIG.linkedin, external: true },
  ];

  return (
    <header className="masthead" role="banner">
      {/* Top strip */}
      <div
        style={{
          background: "var(--paper-dark)",
          borderBottom: "1px solid var(--ink)",
          padding: "6px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "10px",
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        <span style={{ opacity: 0.7 }}>
          Established 2024 &middot; Vol. I &middot; No. 1 &middot; Bhopal, Madhya Pradesh, India
        </span>
        <span
          className="fraktur"
          style={{ fontSize: "16px", letterSpacing: "3px", color: "var(--sepia)" }}
        >
          ❧ Infrastructure to Influence ❧
        </span>
        <span style={{ opacity: 0.7 }}>Open to Global Clients &middot; April 2026</span>
      </div>

      {/* Nameplate */}
      <div
        className="nameplate"
        style={{
          padding: "32px 24px 24px",
          borderBottom: "1px solid var(--ink)",
        }}
      >
        <p
          className="fell"
          style={{
            fontStyle: "italic",
            fontSize: "13px",
            letterSpacing: "2px",
            marginBottom: "8px",
            opacity: 0.75,
          }}
        >
          The Authoritative Record of One Developer&rsquo;s Work, Craft &amp; Ambition
        </p>
        <span className="nameplate-name">Tanishk Khare</span>
        <div
          style={{
            borderTop: "2px solid var(--ink)",
            borderBottom: "2px solid var(--ink)",
            padding: "6px 0",
            marginTop: "12px",
            fontSize: "11px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            fontVariant: "small-caps",
          }}
        >
          Full-Stack Developer &nbsp;&middot;&nbsp; India&rsquo;s Finest &nbsp;&middot;&nbsp; Global Clientele
        </div>
      </div>

      {/* Dateline band */}
      <div
        style={{
          background: "var(--ink)",
          color: "var(--paper)",
          padding: "8px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "11px",
          letterSpacing: "1.5px",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        <a
          href={SITE_CONFIG.url}
          style={{ opacity: 0.8, color: "var(--paper)", fontStyle: "italic" }}
          className="fell"
        >
          tanishkkhare.dev
        </a>
        <span
          style={{
            fontVariant: "small-caps",
            letterSpacing: "3px",
            fontSize: "12px",
            color: "var(--paper)",
          }}
        >
          &#9733; Available for Hire &mdash; Global Clients Welcome &#9733;
        </span>
        <a
          href={`mailto:${SITE_CONFIG.email}`}
          style={{ opacity: 0.8, color: "var(--paper)", fontStyle: "italic" }}
          className="fell"
        >
          {SITE_CONFIG.email}
        </a>
      </div>

      {/* Section nav */}
      <nav
        aria-label="Main navigation"
        style={{
          borderTop: "1px solid var(--ink)",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {navLinks.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="nav-link"
            style={{
              borderRight: i < navLinks.length - 1 ? "1px solid var(--ink)" : "none",
            }}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
