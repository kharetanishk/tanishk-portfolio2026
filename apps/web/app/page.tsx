import { getFeaturedPosts, getFeaturedProjects } from "@repo/content";
import { AboutColumns } from "@/components/newspaper/AboutColumns";
import { BlogStrip } from "@/components/newspaper/BlogStrip";
import { ContactSection } from "@/components/newspaper/ContactSection";
import { HeroSection } from "@/components/newspaper/Hero";
import { LinksBar } from "@/components/newspaper/LinksBar";
import { Masthead } from "@/components/newspaper/Masthead";
import { OrnamentalDivider } from "@/components/newspaper/OrnamentalDivider";
import { ProjectsGrid } from "@/components/newspaper/ProjectsGrid";
import { SkillsSection } from "@/components/newspaper/SkillsSection";
import { TestimonialsSection } from "@/components/newspaper/TestimonialsSection";
import { WhySection } from "@/components/newspaper/WhySection";

export default function HomePage() {
  const featuredPosts = getFeaturedPosts(4);
  const featuredProjects = getFeaturedProjects(6);

  return (
    <main>
      <Masthead />
      <HeroSection />
      <LinksBar />
      <WhySection />
      <OrnamentalDivider />
      <ProjectsGrid projects={featuredProjects} />
      <OrnamentalDivider />
      <TestimonialsSection />
      <SkillsSection />
      <OrnamentalDivider />
      <BlogStrip posts={featuredPosts} />
      <AboutColumns />
      <ContactSection />
    </main>
  );
}
