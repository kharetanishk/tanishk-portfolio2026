import { getFeaturedProjects, getFeaturedPosts } from "@repo/content";
import { Masthead } from "@/components/newspaper/Masthead";
import { HeroSection } from "@/components/newspaper/Hero";
import { WhySection } from "@/components/newspaper/Why";
import { OrnamentalRule } from "@/components/newspaper/OrnamentalRule";
import { ProjectsGrid } from "@/components/newspaper/ProjectsGrid";
import { TestimonialsSection } from "@/components/newspaper/Testimonials";
import { SkillsSection } from "@/components/newspaper/Skills";
import { BlogStrip } from "@/components/newspaper/BlogStrip";
import { AboutColumns } from "@/components/newspaper/About";
import { ContactSection } from "@/components/newspaper/Contact";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects(6);
  const recentPosts = getFeaturedPosts(4);

  return (
    <main>
      <Masthead />
      <HeroSection />
      <WhySection />
      <OrnamentalRule />
      <ProjectsGrid projects={featuredProjects} />
      <OrnamentalRule />
      <TestimonialsSection />
      <SkillsSection />
      <BlogStrip posts={recentPosts} />
      <AboutColumns />
      <ContactSection />
    </main>
  );
}
