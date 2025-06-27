import React from 'react';
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiPython, SiMongodb, SiPostgresql, SiAmazon, SiDocker, SiGit, SiFirebase } from 'react-icons/si';

const skills = [
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#fff' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#3C873A' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
  { name: 'AWS', icon: SiAmazon, color: '#FF9900' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' }
];

const Skills = () => {
  return (
    <section className="py-20 bg-black" id="skills">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Skills & Expertise</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </div>
        
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3 animate-fade-in" style={{ animationDelay: '200ms' }}>
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div 
                key={skill.name}
                className="bg-gray-900/50 p-3 rounded-xl border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 text-center group animate-fade-in"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <div className="mb-2 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  <Icon size={28} color={skill.color} />
                </div>
                <span className="text-gray-300 text-xs font-medium">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
