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
        
        <div className="grid grid-cols-2 gap-6 w-full max-w-3xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="group relative bg-black rounded-2xl overflow-hidden p-[2px] animate-fade-in w-full aspect-square"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none z-0 animate-gradient-move bg-[conic-gradient(from_0deg,_#fff_0deg,_#f59e42_90deg,_#fff_180deg,_#f59e42_270deg,_#fff_360deg)]"></div>
              {/* Card Content */}
              <div className="relative z-10 bg-black rounded-2xl h-full flex flex-col p-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center text-xl border border-gray-800">
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-extrabold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed text-left text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6 text-left">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs border border-white text-white bg-transparent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3 mt-auto">
                  <a 
                    href={project.live}
                    className="flex-1 flex items-center justify-center gap-2 text-center bg-white text-black py-2 px-4 rounded-full transition-all duration-200 hover:scale-105 text-xs font-semibold border border-white relative group shadow-sm hover:shadow-md min-h-[36px]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Globe size={14} />
                    Website
                  </a>
                  <a 
                    href={project.github}
                    className="flex-1 flex items-center justify-center gap-2 text-center bg-white text-black py-2 px-4 rounded-full transition-all duration-200 hover:scale-105 text-xs font-semibold border border-white relative group shadow-sm hover:shadow-md min-h-[36px]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={14} />
                    Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofOfWork;
