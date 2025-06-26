
import { useEffect, useState } from 'react';

const GitHubContributions = () => {
  const [contributions, setContributions] = useState<number[][]>([]);

  useEffect(() => {
    // Generate mock contribution data (in a real app, you'd fetch from GitHub API)
    const generateMockData = () => {
      const weeks = 52;
      const daysPerWeek = 7;
      const data: number[][] = [];
      
      for (let week = 0; week < weeks; week++) {
        const weekData: number[] = [];
        for (let day = 0; day < daysPerWeek; day++) {
          // Random contribution count (0-4 for different intensity levels)
          weekData.push(Math.floor(Math.random() * 5));
        }
        data.push(weekData);
      }
      return data;
    };

    setContributions(generateMockData());
  }, []);

  const getContributionColor = (count: number) => {
    const colors = [
      'bg-gray-800', // 0 contributions
      'bg-green-900', // 1-2 contributions
      'bg-green-700', // 3-4 contributions
      'bg-green-500', // 5-6 contributions
      'bg-green-400'  // 7+ contributions
    ];
    return colors[Math.min(count, colors.length - 1)];
  };

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Tech Startup",
      period: "2024 - Present",
      description: "Leading development of scalable web applications using React and Node.js"
    },
    {
      title: "Frontend Developer Intern",
      company: "Digital Agency",
      period: "2023 - 2024",
      description: "Developed responsive web interfaces and improved user experience"
    }
  ];

  const education = [
    {
      degree: "Bachelor's in Computer Science",
      school: "University Name",
      period: "2021 - 2025",
      description: "Focused on software engineering and web technologies"
    },
    {
      degree: "Full Stack Web Development",
      school: "Online Certification",
      period: "2022",
      description: "Comprehensive course covering modern web development stack"
    }
  ];

  const projects = [
    {
      name: "E-Commerce Platform",
      description: "Full-stack online store with payment integration",
      tech: ["React", "Node.js", "MongoDB"],
      stars: 24
    },
    {
      name: "Task Manager",
      description: "Collaborative productivity application",
      tech: ["Vue.js", "Firebase"],
      stars: 18
    },
    {
      name: "Weather Dashboard",
      description: "Real-time weather tracking application",
      tech: ["JavaScript", "API Integration"],
      stars: 12
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Proof of Work</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My GitHub activity, professional experience, and educational background
          </p>
        </div>
        
        {/* GitHub Contributions */}
        <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 mb-12 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white">GitHub Contributions</h3>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Less</span>
              <div className="flex space-x-1">
                {[0, 1, 2, 3, 4].map((level) => (
                  <div
                    key={level}
                    className={`w-3 h-3 rounded-sm ${getContributionColor(level)}`}
                  ></div>
                ))}
              </div>
              <span>More</span>
            </div>
          </div>
          
          <div className="overflow-x-auto mb-6">
            <div className="flex space-x-1" style={{ minWidth: '800px' }}>
              {contributions.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col space-y-1">
                  {week.map((dayCount, dayIndex) => (
                    <div
                      key={`${weekIndex}-${dayIndex}`}
                      className={`w-3 h-3 rounded-sm ${getContributionColor(dayCount)} hover:ring-2 hover:ring-blue-500 transition-all cursor-pointer hover:scale-110`}
                      title={`${dayCount} contributions`}
                    ></div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-gray-400">
              <span className="text-white font-semibold">1,247</span> contributions in the last year
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Projects Section */}
          <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="mr-3">🚀</span>
              Featured Projects
            </h3>
            <div className="space-y-4">
              {projects.map((project, index) => (
                <div key={project.name} className="border-l-4 border-blue-500 pl-4 hover:bg-gray-800/50 p-3 rounded transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-white">{project.name}</h4>
                    <span className="text-yellow-400 text-sm">⭐ {project.stars}</span>
                  </div>
                  <p className="text-gray-300 text-sm mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 animate-fade-in" style={{ animationDelay: '600ms' }}>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="mr-3">💼</span>
              Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={exp.title} className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-white">{exp.title}</h4>
                  <p className="text-blue-400 text-sm">{exp.company}</p>
                  <p className="text-gray-400 text-sm mb-2">{exp.period}</p>
                  <p className="text-gray-300 text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 animate-fade-in" style={{ animationDelay: '800ms' }}>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="mr-3">🎓</span>
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={edu.degree} className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-white">{edu.degree}</h4>
                  <p className="text-blue-400 text-sm">{edu.school}</p>
                  <p className="text-gray-400 text-sm mb-2">{edu.period}</p>
                  <p className="text-gray-300 text-sm">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubContributions;
