"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/work" },
  { label: "Arsenal", href: "/#skills" },
  { label: "Dispatches", href: "/blog" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Engage", href: "/#contact" },
  { label: "GitHub", href: "https://github.com/tanishk-khare", external: true },
  { label: "LinkedIn", href: "https://linkedin.com/in/tanishk-khare", external: true },
];

export function MastheadNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Section navigation"
      style={{
        borderBottom: "2px solid var(--ink)",
        padding: "8px 32px",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      {NAV.map((item, i) => {
        const isActive =
          !item.external &&
          (item.href === pathname ||
            (item.href === "/blog" && pathname.startsWith("/blog")) ||
            (item.href === "/work" && pathname.startsWith("/work")));

        const baseStyle: CSSProperties = {
          textDecoration: "none",
          padding: "4px 16px",
          borderRight: "1px solid var(--ink)",
          borderLeft: i === 0 ? "1px solid var(--ink)" : undefined,
          textTransform: "uppercase",
          fontFamily: "'IM Fell English', serif",
          fontSize: "11px",
          letterSpacing: "0.06em",
          transition: "background 0.15s ease, color 0.15s ease",
          background: isActive ? "var(--ink)" : "transparent",
          color: isActive ? "var(--paper)" : "var(--ink)",
        };

        if (item.external) {
          return (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              style={baseStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--ink)";
                e.currentTarget.style.color = "var(--paper)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "var(--ink)";
              }}
            >
              {item.label}
            </a>
          );
        }

        return (
          <Link
            key={item.label}
            href={item.href}
            style={baseStyle}
            onMouseEnter={(e) => {
              if (!isActive) {
                e.currentTarget.style.background = "var(--ink)";
                e.currentTarget.style.color = "var(--paper)";
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "var(--ink)";
              }
            }}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
