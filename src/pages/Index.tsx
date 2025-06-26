
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProofOfWork from '@/components/ProofOfWork';
import Experience from '@/components/Experience';
import GitHubContributions from '@/components/GitHubContributions';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <ProofOfWork />
      <Experience />
      <GitHubContributions />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
};

export default Index;
