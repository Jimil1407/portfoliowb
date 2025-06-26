
const Skills = () => {
  const skills = [
    { name: 'JavaScript', icon: '⚡' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Git', icon: '📚' },
    { name: 'Firebase', icon: '🔥' }
  ];

  return (
    <section className="py-20 bg-black" id="skills">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Skills & Expertise</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 text-center group animate-fade-in"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
