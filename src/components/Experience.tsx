
const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Tech Startup",
      period: "2024 - Present",
      description: "Leading development of scalable web applications using React and Node.js",
      location: "Remote"
    },
    {
      title: "Frontend Developer Intern",
      company: "Digital Agency",
      period: "2023 - 2024",
      description: "Developed responsive web interfaces and improved user experience",
      location: "New York, NY"
    },
    {
      title: "Web Developer",
      company: "Freelance",
      period: "2022 - 2023",
      description: "Built custom websites and web applications for various clients",
      location: "Remote"
    }
  ];

  return (
    <section className="py-20 bg-black" id="experience">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Experience</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey and work experience in the tech industry.
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={exp.title}
              className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <p className="text-blue-400 text-lg font-medium">{exp.company}</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p className="text-gray-400 font-medium">{exp.period}</p>
                  <p className="text-gray-500 text-sm">{exp.location}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
