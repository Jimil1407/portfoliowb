
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
    },
    {
      title: "EcoTrack",
      description: "Environmental impact tracking application that helps users monitor their carbon footprint and adopt sustainable practices.",
      tech: ["React Native", "Firebase", "Node.js", "Express", "Chart.js"],
      icon: "🌱",
      github: "https://github.com/Jimil1407",
      live: "https://example.com",
      featured: true
    },
    {
      title: "TaskMaster AI",
      description: "AI-powered task management system with intelligent prioritization, deadline prediction, and productivity analytics.",
      tech: ["Vue.js", "Python", "FastAPI", "OpenAI", "PostgreSQL", "Redis"],
      icon: "🤖",
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
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="group bg-gradient-to-br from-gray-900/50 to-black border border-gray-800/50 rounded-2xl p-8 hover:border-gray-700/50 transition-all duration-500 hover:transform hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center text-2xl border border-gray-700/50">
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="bg-gray-800/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700/50 hover:border-gray-600 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <a 
                  href={project.live}
                  className="flex-1 flex items-center justify-center space-x-2 bg-white text-black py-2.5 px-4 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white font-medium group/btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe size={16} />
                  <span>Website</span>
                </a>
                <a 
                  href={project.github}
                  className="flex-1 flex items-center justify-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white py-2.5 px-4 rounded-lg transition-all duration-300 font-medium border border-gray-700 hover:border-gray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={16} />
                  <span>Source</span>
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
