const siteUrl =
  (typeof process !== "undefined" && process.env["NEXT_PUBLIC_SITE_URL"]) ||
  "https://tanishk-khare.me";

export const SITE_CONFIG = {
  name: "Tanishk Khare",
  title:
    "Tanishk Khare — Full-Stack Engineer & AI Systems Builder | India's Top Freelancer",
  description:
    "Tanishk Khare is a 22-year-old full-stack engineer from India — Super 30 3.0 selected (top 30 CS students in India), builder of xTanBot.ai (production agentic AI voice assistant), and freelance developer trusted for Next.js, Node.js, voice AI, and DevOps. Available for global clients.",
  url: siteUrl,
  author: "Tanishk Khare",
  location: "Bhilai / Bhopal, Chhattisgarh / Madhya Pradesh, India",
  email: "tanishk16012004@gmail.com",
  phone: "+91-6260440241",
  github: "https://github.com/tanishk-khare",
  linkedin: "https://linkedin.com/in/tanishk-khare",
  websiteLegacy: "https://tanishk-khare.me",
  tagline:
    "Full-stack engineer who ships agentic AI systems, voice pipelines, and the cloud infrastructure that keeps them running — with clean architecture and TypeScript contracts.",
  keywords: [
    "best freelancer india",
    "top freelance developer india",
    "agentic AI developer india",
    "voice AI developer india",
    "nextjs developer india",
    "hire full stack developer india",
    "tanishk khare",
    "freelance typescript developer india",
    "claude api developer india",
    "production nextjs developer",
    "full stack engineer india",
    "top cs student india",
    "super 30 100xdevs developer",
    "hire developer india",
    "best software developer india",
    "freelance AI developer india",
    "twilio deepgram elevenlabs developer",
    "react developer india",
    "node.js developer india",
    "docker devops india",
    "aws developer india",
    "fastify developer india",
    "turborepo monorepo developer india",
    "prisma developer india",
    "bhopal developer",
    "chhattisgarh developer",
    "india us startup developer",
    "offshore developer india quality",
    "agentic ai india",
    "voice pipeline developer",
    "hire nextjs developer india",
    "super 30 developer india",
    "100xdevs developer",
    "anthropic claude developer india",
  ],
} as const;

export const JSON_LD_PERSON = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tanishk Khare",
  url: siteUrl,
  email: "tanishk16012004@gmail.com",
  image: `${siteUrl}/images/tanishk-khare.jpg`,
  jobTitle: "Full-Stack Engineer & AI Systems Builder",
  birthDate: "2004-01-16",
  description:
    "22-year-old full-stack engineer from India. Selected for Super 30 3.0 by 100xDevs (2026). Rank #2 in BCA at Shri Shankaracharya Mahavidyalaya, Bhilai. Builder of xTanBot.ai (agentic AI voice assistant), production SaaS at anubhanutrition.in, and freelance platforms for yogaforcure.in and visahouse.co.in. CS50x Harvard certified.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bhilai",
    addressRegion: "Chhattisgarh",
    addressCountry: "IN",
  },
  sameAs: [
    "https://github.com/tanishk-khare",
    "https://linkedin.com/in/tanishk-khare",
    "https://tanishk-khare.me",
  ],
  knowsAbout: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Fastify",
    "PostgreSQL",
    "Prisma",
    "Docker",
    "AWS EC2",
    "Nginx",
    "Anthropic Claude API",
    "Agentic AI",
    "Tool Calling",
    "Deepgram",
    "ElevenLabs",
    "Twilio Media Streams",
    "Redis",
    "BullMQ",
    "Turborepo",
    "pnpm workspaces",
    "WebSockets",
    "Zod",
    "Voice AI",
    "DevOps",
    "CI/CD",
  ],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Shri Shankaracharya Mahavidyalaya, Bhilai",
      description: "BCA — Rank #2 in batch (2023–2026)",
    },
    {
      "@type": "EducationalOrganization",
      name: "Harvard University",
      description: "CS50x (edX)",
    },
  ],
  award: [
    {
      "@type": "Award",
      name: "Super 30 3.0",
      description:
        "Selected as one of the top 30 CS students in India by 100xDevs / Harkirat Singh community (2026)",
    },
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Full-Stack Software Engineer & AI Systems Developer",
    occupationalCategory: "15-1252.00 Software Developers",
    skills: [
      "Full-Stack Web Application Development (React/Next.js + Node.js/Fastify)",
      "Agentic AI & LLM Integration (Claude, tool-calling, RAG, agent kernels)",
      "Voice AI Systems (Deepgram + ElevenLabs + Twilio real-time pipelines)",
      "DevOps & Cloud Infrastructure (Docker, AWS EC2, Nginx, CI/CD, Linux)",
      "SaaS Product Engineering (architecture → build → deploy → maintain)",
      "API Design & Backend Architecture",
    ],
  },
  nationality: {
    "@type": "Country",
    name: "India",
  },
  workLocation: {
    "@type": "Place",
    name: "Bhilai / Bhopal, India",
  },
  seeks: {
    "@type": "Demand",
    name: "Freelance & Contract Engineering Engagements",
    description:
      "Agentic AI, voice AI, Next.js/Node.js production systems, and DevOps for US, UK, and global startups",
  },
} as const;

export const JSON_LD_WEBSITE = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Tanishk Khare — Full-Stack Engineer & AI Systems Builder, India",
  url: siteUrl,
  description:
    "Portfolio and authority site of Tanishk Khare: Super 30 3.0 selected engineer, builder of xTanBot.ai and production SaaS. Hire for agentic AI, voice AI, Next.js, and DevOps.",
  author: {
    "@type": "Person",
    name: "Tanishk Khare",
    url: siteUrl,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/blog?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
  inLanguage: "en",
} as const;

export const OG_DEFAULTS = {
  type: "website" as const,
  locale: "en_US",
  siteName: "Tanishk Khare",
  images: [
    {
      url: `${siteUrl}/images/og-default.jpg`,
      width: 1200,
      height: 630,
      alt: "Tanishk Khare — Full-Stack Engineer & AI Systems Builder, India",
    },
  ],
} as const;
