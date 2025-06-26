
const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "/placeholder.svg",
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat application with AI integration. Built with Socket.io for real-time communication and OpenAI API for intelligent responses.",
      tech: ["Next.js", "Socket.io", "OpenAI", "MongoDB"],
      image: "/placeholder.svg",
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for data analysis with custom charts and real-time updates. Perfect for business intelligence and analytics.",
      tech: ["React", "D3.js", "Python", "FastAPI"],
      image: "/placeholder.svg",
      github: "https://github.com",
      live: "https://example.com"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                <div className="text-6xl">🚀</div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code →
                  </a>
                  <a 
                    href={project.live}
                    className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo →
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

export default Projects;
