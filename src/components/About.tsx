
const About = () => {
  const skills = [
    { name: 'JavaScript/TypeScript', level: 95 },
    { name: 'React/Next.js', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'Database Design', level: 85 },
    { name: 'Cloud Technologies', level: 75 }
  ];

  return (
    <section className="py-20 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A passionate developer who loves to create innovative solutions and push boundaries.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Started coding at 15, fell in love with the process of turning ideas into reality. 
              From building simple websites to complex full-stack applications, I've been on a 
              continuous learning journey.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I believe in learning by doing, breaking things, and finding creative solutions. 
              When I'm not coding, you'll find me reading about history, playing cricket, or 
              diving deep into computer science fundamentals.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Problem Solver', 'Fast Learner', 'Team Player', 'Innovation Driven'].map((trait) => (
                <span 
                  key={trait}
                  className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm border border-gray-700 hover:border-gray-600 transition-colors"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Skills & Expertise</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={skill.name} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
