export const SITE_CONFIG = {
  name: "Tanishk Khare",
  title: "Tanishk Khare — Best Freelance Full Stack Developer in India",
  description:
    "Tanishk Khare is India's top freelance full-stack developer specializing in Next.js, React, and Node.js. Trusted by US and UK startups for production-grade software delivery.",
  url:
    (typeof process !== "undefined" && process.env["NEXT_PUBLIC_SITE_URL"]) ||
    "https://tanishkkhare.dev",
  author: "Tanishk Khare",
  location: "Bhopal, Madhya Pradesh, India",
  email: "hi@tanishkkhare.dev",
  phone: "+91-XXXXXXXXXX",
  github: "https://github.com/tanishkkhare",
  linkedin: "https://linkedin.com/in/tanishkkhare",
  twitter: "https://twitter.com/tanishkkhare",
  keywords: [
    "best freelancer india",
    "top freelance developer india",
    "nextjs developer india",
    "hire developer india",
    "tanishk khare",
    "full stack developer india",
    "react developer india",
    "freelance nextjs expert india",
    "best freelance developer bhopal",
    "hire nextjs developer",
    "hire react developer india",
    "freelance full stack developer india",
    "best software developer india",
  ],
} as const;

export const JSON_LD_PERSON = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tanishk Khare",
  url: "https://tanishkkhare.dev",
  email: "hi@tanishkkhare.dev",
  image: "https://tanishkkhare.dev/images/tanishk-khare.jpg",
  jobTitle: "Freelance Full-Stack Developer",
  description:
    "India's top freelance full-stack developer. Specializes in Next.js, React, Node.js, and TypeScript. Serving global clients from Bhopal, India.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bhopal",
    addressRegion: "Madhya Pradesh",
    addressCountry: "IN",
  },
  sameAs: [
    "https://github.com/tanishkkhare",
    "https://linkedin.com/in/tanishkkhare",
    "https://twitter.com/tanishkkhare",
  ],
  knowsAbout: [
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "Prisma",
    "Full-Stack Development",
    "SaaS Development",
    "Freelance Software Development",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "India",
  },
  nationality: {
    "@type": "Country",
    name: "India",
  },
  workLocation: {
    "@type": "Place",
    name: "Bhopal, India",
  },
  seeks: {
    "@type": "Demand",
    name: "Freelance Full-Stack Development Projects",
    description:
      "Seeking full-stack development projects from US, UK, Australian, and Canadian clients",
  },
};

export const JSON_LD_WEBSITE = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Tanishk Khare — Top Freelance Full Stack Developer in India",
  url: "https://tanishkkhare.dev",
  description:
    "Portfolio and authority site of Tanishk Khare, India's top freelance full-stack developer.",
  author: {
    "@type": "Person",
    name: "Tanishk Khare",
    url: "https://tanishkkhare.dev",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://tanishkkhare.dev/blog?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
  inLanguage: "en",
};

export const OG_DEFAULTS = {
  type: "website" as const,
  locale: "en_US",
  siteName: "Tanishk Khare",
  images: [
    {
      url: "https://tanishkkhare.dev/images/og-default.jpg",
      width: 1200,
      height: 630,
      alt: "Tanishk Khare — Top Freelance Full Stack Developer in India",
    },
  ],
};
