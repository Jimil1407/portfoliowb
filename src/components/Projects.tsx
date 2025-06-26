const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "🛒",
      github: "https://github.com/Jimil1407",
      live: "https://example.com",
      featured: true
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat application with AI integration. Built with Socket.io for real-time communication and OpenAI API for intelligent responses.",
      tech: ["Next.js", "Socket.io", "OpenAI", "MongoDB"],
      image: "🤖",
      github: "https://github.com/Jimil1407",
      live: "https://example.com",
      featured: true
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for data analysis with custom charts and real-time updates. Perfect for business intelligence and analytics.",
      tech: ["React", "D3.js", "Python", "FastAPI"],
      image: "📊",
      github: "https://github.com/Jimil1407",
      live: "https://example.com",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative task management platform with real-time updates and team features.",
      tech: ["React", "Firebase", "Material-UI"],
      image: "✅",
      github: "https://github.com/Jimil1407",
      live: "https://example.com",
      featured: false
    },
    {
      title: "Weather App",
      description: "Beautiful weather application with location-based forecasts and interactive maps.",
      tech: ["JavaScript", "Weather API", "CSS3"],
      image: "🌤️",
      github: "https://github.com/Jimil1407",
      live: "https://example.com",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio website with smooth animations and responsive design.",
      tech: ["React", "Tailwind", "Framer Motion"],
      image: "💼",
      github: "https://github.com/Jimil1407",
      live: "https://example.com",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section className="py-20 bg-gray-900" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
        </div>
        
        {/* Featured Projects */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.title}
              className="group relative bg-black rounded-2xl overflow-hidden p-[2px] animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Gradient Border */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none z-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500"></div>
              {/* Card Content */}
              <div className="relative z-10 bg-black rounded-2xl h-full flex flex-col p-7">
                <div className="h-12 w-12 flex items-center justify-center mb-4 text-3xl">
                  {project.image}
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-3 text-left">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-base leading-relaxed text-left">{project.description}</p>
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
                <div className="flex space-x-4 mt-auto">
                  <a 
                    href={project.live}
                    className="flex-1 flex items-center justify-center gap-2 text-center bg-white text-black py-2 px-4 rounded-lg transition-all duration-200 hover:scale-105 text-sm font-semibold border-2 border-transparent bg-clip-padding relative group shadow-sm hover:shadow-md"
                    style={{ borderImage: 'linear-gradient(90deg, #22d3ee, #6366f1, #a21caf) 1' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Website
                  </a>
                  <a 
                    href={project.github}
                    className="flex-1 flex items-center justify-center gap-2 text-center bg-white text-black py-2 px-4 rounded-lg transition-all duration-200 hover:scale-105 text-sm font-semibold border-2 border-transparent bg-clip-padding relative group shadow-sm hover:shadow-md"
                    style={{ borderImage: 'linear-gradient(90deg, #22d3ee, #6366f1, #a21caf) 1' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h9.75A2.25 2.25 0 0019.5 18.75V11.25A2.25 2.25 0 0017.25 9H15.75z" />
                    </svg>
                    Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">Other Projects</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <div 
              key={project.title}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: `${600 + index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">{project.image}</span>
                <h4 className="text-lg font-semibold text-white">{project.title}</h4>
              </div>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-3">
                <a 
                  href={project.github}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code →
                </a>
                <a 
                  href={project.live}
                  className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
