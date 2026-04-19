import {
  Calendar,
  FileText,
  Github,
  Globe,
  Linkedin,
  Mail,
} from "lucide-react";

const LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/tanishk-khare",
    Icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/tanishk-khare",
    Icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:tanishk16012004@gmail.com",
    Icon: Mail,
  },
  {
    label: "Schedule Call",
    href: "https://cal.com/tanishkkhare",
    Icon: Calendar,
  },
  {
    label: "Download CV",
    href: "/resume.pdf",
    Icon: FileText,
  },
  {
    label: "tanishk-khare.me",
    href: "https://tanishk-khare.me",
    Icon: Globe,
  },
];

export function LinksBar() {
  return (
    <div
      className="links-bar"
      style={{
        background: "var(--paper-dark)",
        borderBottom: "2px solid var(--ink)",
      }}
    >
      {LINKS.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="links-bar__link"
        >
          <link.Icon size={14} strokeWidth={2} aria-hidden />
          {link.label}
        </a>
      ))}
    </div>
  );
}
