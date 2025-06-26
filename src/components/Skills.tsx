import React from 'react';
import { FileCode, FileType2, Atom, CircleDashed, Server, Database, DatabaseZap, Cloud, Ship, GitBranch, Flame } from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', icon: FileCode },
    { name: 'TypeScript', icon: FileType2 },
    { name: 'React', icon: Atom },
    { name: 'Next.js', icon: CircleDashed },
    { name: 'Node.js', icon: Server },
    { name: 'Python', icon: FileCode },
    { name: 'MongoDB', icon: Database },
    { name: 'PostgreSQL', icon: DatabaseZap },
    { name: 'AWS', icon: Cloud },
    { name: 'Docker', icon: Ship },
    { name: 'Git', icon: GitBranch },
    { name: 'Firebase', icon: Flame }
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
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div 
                key={skill.name}
                className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 text-center group animate-fade-in"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  <Icon size={36} />
                </div>
                <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
