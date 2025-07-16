import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TechSphere from './TechSphere';

const Hero = () => {
  const fullText = "Hi, I'm Jimil";
  
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

  return (
    <motion.section
      ref={ref}
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center relative overflow-hidden pt-16 md:pt-0"
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Remove blue/purple blobs for a pure black look */}
      </div>
      
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left px-6 h-full self-center mx-auto md:pl-12">
        <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-white mb-4 md:mb-6 animate-fade-in">
          {fullText}
        </h1>
        
        <p className="text-base sm:text-lg md:text-2xl text-gray-300 mb-3 md:mb-4 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-500">
          22, interested in ML, DevOps ,coding, anything which brings a change. My other interests also include cricket, football
          & geopolitics. 

        </p>
        
        <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-8 md:mb-12 animate-fade-in delay-700">
          Let's connect if you're interested in my work.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in delay-1000 mb-8">
          <div className="relative inline-block rounded-2xl">
            <div className="absolute inset-0 rounded-2xl p-[1.5px]"></div>
            <motion.button
              className="relative z-10 bg-white text-black px-8 py-3 rounded-2xl font-medium shadow-xl transition-all duration-300 hidden sm:inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get in touch
            </motion.button>
          </div>
        </div>
      </div>
      
      <div className="flex-1 flex justify-center items-center w-full md:w-auto mt-8 md:mt-0 h-full">
        <TechSphere />
      </div>
     
    </motion.section>
  );
};

export default Hero;
