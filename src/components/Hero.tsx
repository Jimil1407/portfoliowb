import { useState, useEffect } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Hi, I'm Jimil";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden" id="home">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Remove blue/purple blobs for a pure black look */}
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          {text}
          <span className="animate-pulse">|</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-500">
          22, interested in ML, DevOps ,coding, anything which brings a change. My other interests also include cricket, football
          & geopolitics. 

        </p>
        
        <p className="text-lg text-gray-400 mb-12 animate-fade-in delay-700">
          If you're working on something real, let's connect.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-1000">
            {/* Book a meet button */}
            
            {/* Get in touch button */}
          <div className="relative inline-block rounded-2xl">
            <div className="absolute inset-0 rounded-2xl p-[1.5px] bg-[conic-gradient(from_0deg,theme(colors.blue.400),theme(colors.pink.400),theme(colors.purple.400),theme(colors.blue.400))] animate-spin-slow"></div>
            <button className="relative z-10 bg-white text-black px-8 py-3 rounded-2xl font-medium shadow-xl"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get in touch
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
