import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProofOfWork from '@/components/ProofOfWork';
import Experience from '@/components/Experience';
import GitHubContributions from '@/components/GitHubContributions';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import ScrollToTop from '@/components/ScrollToTop';
import { useHashScroll } from '@/hooks/use-hash-scroll';
import About from '@/components/About';

const Index = () => {
  // Handle hash-based navigation
  useHashScroll();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <ProofOfWork />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="github">
        <GitHubContributions />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <ScrollToTop />
    </div>
  );
};

export default Index;
