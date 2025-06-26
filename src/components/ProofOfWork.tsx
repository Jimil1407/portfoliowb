
import { Globe, Github } from 'lucide-react';

const ProofOfWork = () => {
  const projects = [
    {
      title: "OrbitToken",
      description: "A decentralized platform enables users launch their custom tokens, transfer tokens, view token balances, transfer SOL, and check account balances.",
      tech: ["React", "Web3.js", "TypeScript", "Recoil", "spl-token", "Tailwind CSS"],
      icon: "🚀",
      github: "https://github.com/Jimil1407",
      live: "https://example.com",
      featured: true
    },
    {
      title: "GhostGram - SaaS platform",
      description: "GhostGram is an anonymous messaging platform that lets users securely send and receive messages through unique, authenticated links.",
      tech: ["Next.js", "TypeScript", "Gemini", "MongoDB", "NextAuth", "Nodemailer", "Tailwind CSS", "Shadcn"],
      icon: "👻",
      github: "https://github.com/Jimil1407",
      live: "https://example.com",
      featured: true
    },
    {
      title: "CryptoTracker Pro",
      description: "Real-time cryptocurrency tracking platform with portfolio management, price alerts, and advanced analytics for traders and investors.",
      tech: ["React", "Node.js", "MongoDB", "WebSocket", "Chart.js", "Express"],
      icon: "₿",
      github: "https://github.com/Jimil1407",
      live: "https://example.com",
      featured: true
    },
    {
      title: "DevFlow",
      description: "A comprehensive developer workflow platform with project management, code collaboration, and deployment automation features.",
      tech: ["Next.js", "PostgreSQL", "Prisma", "Docker", "AWS", "TypeScript"],
      icon: "⚡",
      github: "https://github.com/Jimil1407",
      live: "https://example.com",
      featured: true
    }
  ];

  return (
    <section className="py-20 bg-black" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Proof of Work</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="group bg-black border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-500 hover:transform hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center text-2xl border border-gray-800">
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-gray-300 transition-all duration-300">
                    {project.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="bg-gray-900 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <a 
                  href={project.live}
                  className="relative flex-1 flex items-center justify-center space-x-2 bg-black text-white py-2.5 px-4 rounded-lg font-medium group/btn overflow-hidden"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 p-[1px]">
                    <div className="h-full w-full bg-black rounded-lg flex items-center justify-center space-x-2">
                      <Globe size={16} />
                      <span>Website</span>
                    </div>
                  </div>
                </a>
                <a 
                  href={project.github}
                  className="relative flex-1 flex items-center justify-center space-x-2 bg-black text-white py-2.5 px-4 rounded-lg font-medium group/btn overflow-hidden"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-gray-600 to-gray-400 p-[1px]">
                    <div className="h-full w-full bg-black rounded-lg flex items-center justify-center space-x-2">
                      <Github size={16} />
                      <span>Source</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofOfWork;
