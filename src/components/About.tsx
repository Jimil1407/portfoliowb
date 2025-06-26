
import { Link } from 'react-router-dom';

const About = () => {
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
    <section className="py-20 bg-gray-900/50" id="about">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A passionate developer who loves to create innovative solutions and push boundaries.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Started coding in 2022, fell in love with the process of turning ideas into reality. 
              From building simple websites to complex full-stack applications, I've been on a 
              continuous learning journey.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I believe in learning by doing, breaking things, and finding creative solutions. 
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open source, or diving deep into computer science fundamentals.
            </p>
            <Link 
              to="/journey"
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Read My Full Journey →
            </Link>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
            <h3 className="text-2xl font-bold text-white mb-6">Skills & Expertise</h3>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="bg-gray-800 p-4 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 text-center group animate-fade-in"
                  style={{ animationDelay: `${600 + index * 100}ms` }}
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
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
