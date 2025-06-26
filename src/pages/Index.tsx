
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import GitHubContributions from '@/components/GitHubContributions';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <GitHubContributions />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
