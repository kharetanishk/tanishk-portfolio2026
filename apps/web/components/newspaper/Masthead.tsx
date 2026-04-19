import { MastheadNav } from "./MastheadNav";

export function Masthead() {
  return (
    <header
      style={{
        borderTop: "4px solid var(--ink)",
        background: "var(--paper)",
      }}
    >
      {/* Band 1 */}
      <div
        style={{
          background: "var(--paper-dark)",
          borderTop: "4px solid var(--ink)",
          borderBottom: "1px solid var(--ink)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "4px 32px",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        <span
          className="font-accent"
          style={{ fontSize: "11px", lineHeight: 1.4 }}
        >
          EST. 2024 · VOL. I · NO. 1 · BHILAI, CHHATTISGARH, INDIA
        </span>
        <span
          className="font-nameplate"
          style={{ fontSize: "14px", opacity: 0.6 }}
        >
          ❧ Infrastructure to Influence ❧
        </span>
        <span className="font-accent" style={{ fontSize: "11px" }}>
          OPEN TO GLOBAL CLIENTS · 2026
        </span>
      </div>

      {/* Band 2 */}
      <div
        style={{
          textAlign: "center",
          padding: "18px 32px 10px",
          borderBottom: "3px double var(--ink)",
        }}
      >
        <p
          className="font-accent"
          style={{
            fontStyle: "italic",
            fontSize: "11px",
            letterSpacing: "0.12em",
            opacity: 0.7,
            marginBottom: "8px",
          }}
        >
          The Portfolio of Record for World-Class Engineering &amp; AI Systems
        </p>
        <div
          className="font-nameplate"
          style={{
            fontSize: "clamp(56px, 10vw, 112px)",
            color: "var(--ink)",
            lineHeight: 1,
            textShadow: "2px 2px rgba(0,0,0,0.08)",
          }}
        >
          Tanishk Khare
        </div>
        <div
          className="font-accent"
          style={{
            fontSize: "13px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            borderTop: "1px solid var(--ink)",
            borderBottom: "1px solid var(--ink)",
            padding: "5px 0",
            marginTop: "8px",
            opacity: 0.8,
          }}
        >
          Full-Stack Engineer · AI Systems Builder · India&apos;s Finest · Global Clientele
        </div>
      </div>

      {/* Band 3 */}
      <div
        style={{
          background: "var(--ink)",
          color: "var(--paper)",
          padding: "6px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
          fontFamily: "'IM Fell English', serif",
          fontSize: "11px",
        }}
      >
        <a href="https://tanishk-khare.me" style={{ color: "var(--paper)" }}>
          tanishk-khare.me
        </a>
        <span style={{ textAlign: "center" }}>
          ★ AVAILABLE FOR HIRE — GLOBAL CLIENTS WELCOME ★
        </span>
        <a href="mailto:tanishk16012004@gmail.com" style={{ color: "var(--paper)" }}>
          tanishk16012004@gmail.com
        </a>
      </div>

      <MastheadNav />
    </header>
  );
}
