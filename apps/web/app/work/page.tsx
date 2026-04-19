import Link from "next/link";
import { getAllProjects } from "@repo/content";
import { Masthead } from "@/components/newspaper/Masthead";

export const metadata = {
  title: "Selected Works & Case Studies | Tanishk Khare",
};

export default function WorkIndexPage() {
  const projects = getAllProjects();
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const gridProjects = rest.length > 0 ? rest : featured.length === 0 ? projects : [];

  return (
    <main>
      <Masthead />
      <header style={{ padding: "20px 32px", borderBottom: "3px solid var(--ink)" }}>
        <h1 className="font-headline" style={{ fontWeight: 900, fontSize: "clamp(32px, 5vw, 52px)", marginBottom: "8px" }}>
          SELECTED WORKS
        </h1>
        <p className="font-accent" style={{ fontStyle: "italic", fontSize: "14px" }}>
          6 Production Systems · 5 Live URLs · 3 Countries · 0 Missed Deadlines
        </p>
      </header>

      {featured.length > 0 ? (
        <section style={{ borderBottom: "3px solid var(--ink)" }}>
          <p className="section-tag" style={{ padding: "12px 32px" }}>
            Featured
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
            {featured.map((p, i) => {
              const m = Object.entries(p.metrics)[0];
              return (
                <Link
                  key={p.slug}
                  href={`/work/${p.slug}`}
                  className="work-card-hover project-card"
                  style={{
                    borderRight: i % 2 === 0 ? "1px solid var(--ink)" : "none",
                    borderBottom: "1px solid var(--ink)",
                    minHeight: "200px",
                  }}
                >
                  <p className="font-accent" style={{ fontSize: "10px", color: "var(--red)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "6px" }}>
                    {p.category}
                  </p>
                  <h2 className="font-headline" style={{ fontWeight: 900, fontSize: "22px", marginBottom: "8px" }}>
                    {p.title}
                  </h2>
                  <p className="font-accent" style={{ fontStyle: "italic", fontSize: "12px", opacity: 0.75, marginBottom: "8px" }}>
                    {p.client} · {p.clientCountry}
                  </p>
                  {m ? (
                    <p className="font-headline" style={{ color: "var(--red)", fontStyle: "italic", fontSize: "18px", fontWeight: 700 }}>
                      {String(m[1])}
                    </p>
                  ) : null}
                  {p.liveUrl ? (
                    <p className="font-accent" style={{ fontSize: "11px", marginTop: "10px" }}>
                      {p.liveUrl.replace(/^https?:\/\//, "")}
                    </p>
                  ) : null}
                </Link>
              );
            })}
          </div>
        </section>
      ) : null}

      {gridProjects.length > 0 ? (
      <section>
        <p className="section-tag" style={{ padding: "12px 32px" }}>
          {rest.length > 0 ? "All case studies" : "Case studies"}
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
          {gridProjects.map((p, idx) => {
            const m = Object.entries(p.metrics)[0];
            return (
              <Link
                key={p.slug}
                href={`/work/${p.slug}`}
                className="project-card"
                style={{
                  borderRight: (idx + 1) % 3 !== 0 ? "1px solid var(--ink)" : "none",
                  borderBottom: "1px solid var(--ink)",
                }}
              >
                <p className="font-accent" style={{ fontSize: "10px", color: "var(--red)", textTransform: "uppercase", marginBottom: "6px" }}>
                  {p.category}
                </p>
                <h3 className="font-headline" style={{ fontWeight: 700, fontSize: "16px", marginBottom: "6px" }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: "12px", marginBottom: "8px" }}>
                  {p.client} · {flagEmoji(p.clientCountry)}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginBottom: "8px" }}>
                  {p.techStack.slice(0, 4).map((t) => (
                    <span key={t} className="font-accent" style={{ fontSize: "10px", border: "1px solid var(--ink)", padding: "2px 6px", fontStyle: "italic" }}>
                      {t}
                    </span>
                  ))}
                </div>
                {m ? (
                  <p className="font-headline" style={{ color: "var(--red)", fontWeight: 700, fontStyle: "italic", fontSize: "14px" }}>
                    {String(m[1])}
                  </p>
                ) : null}
              </Link>
            );
          })}
        </div>
      </section>
      ) : null}
    </main>
  );
}

function flagEmoji(country: string) {
  const c = country.toLowerCase();
  if (c.includes("india")) return "🇮🇳";
  if (c.includes("usa") || c.includes("united states")) return "🇺🇸";
  if (c.includes("uk")) return "🇬🇧";
  return "🌐";
}
