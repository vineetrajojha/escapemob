import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Strategy from "@/components/Strategy";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import ProjectShowcase from "@/components/ProjectShowcase";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import SEOBlock from "@/components/SEOBlock";
import Footer from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden relative w-full transition-colors duration-300">
      {/* Fixed Background Elements (Grid & Glow) */}
      <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center">
        {/* Central Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10" />
        
        {/* Dashed Center Fade Grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--foreground) 1px, transparent 1px),
              linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 0 0",
            opacity: 0.05,
            maskImage: `
              repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
              repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
              radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
            `,
            WebkitMaskImage: `
              repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
              repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
              radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
            `,
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="strategy">
          <Strategy />
        </section>
        <section id="technologies">
          <Technologies />
        </section>
        <section id="projects">
          <ProjectShowcase />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="faqs">
          <FAQ />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <SEOBlock />
        <Footer />
      </div>
      <ThemeToggle />
    </main>
  );
}
