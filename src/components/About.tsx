import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };
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
    <motion.section
      ref={ref}
      id="about"
      className="py-20 relative overflow-hidden"
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black"></div>
      <div className="relative z-10">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A passionate developer who loves to create innovative solutions and push boundaries.
            </p>
          </div>
          <div className="animate-fade-in text-center" style={{ animationDelay: '200ms' }}>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Started coding in 2022, fell in love with the process of turning ideas into reality. 
              From building simple websites to machine learning models, I've been on a 
              continuous learning journey.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I believe in learning by doing, breaking things, and finding creative solutions. 
              When I'm not coding, you'll find me exploring new technologies, recently started contributing to 
              open source, or diving deep into computer science fundamentals.
            </p>
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(80,80,120,0.10)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-block"
            >
              <Link
                to="/journey"
                className="inline-flex items-center bg-white text-black px-6 py-3 rounded-full font-medium shadow-xl transition-all duration-300"
              >
                Read My Full Journey →
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
