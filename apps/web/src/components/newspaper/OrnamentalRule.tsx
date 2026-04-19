export function OrnamentalRule() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        padding: "12px 40px",
        color: "var(--sepia)",
        fontSize: "20px",
      }}
    >
      <div style={{ flex: 1, height: "1px", background: "var(--ink)", opacity: 0.25 }} />
      <span style={{ letterSpacing: "12px" }}>❧ ✦ ❧</span>
      <div style={{ flex: 1, height: "1px", background: "var(--ink)", opacity: 0.25 }} />
    </div>
  );
}
