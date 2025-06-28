import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';

const Journey = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const journeySteps = [
    {
      year: "2022",
      title: "The Beginning",
      description: "Started my coding journey with curiosity and determination. Learned the fundamentals of programming and discovered my passion for web development.",
      highlights: ["First 'Hello World'", "HTML/CSS Basics", "JavaScript Introduction"]
    },
    {
      year: "2023", 
      title: "Building Foundations",
      description: "Dove deeper into modern web technologies. Built my first projects and started understanding the importance of clean, maintainable code.",
      highlights: ["React Mastery", "Node.js Backend", "Database Design", "Git/GitHub"]
    },
    {
      year: "2024",
      title: "Growing & Creating",
      description: "Focused on creating meaningful projects and contributing to open source. Enhanced my skills in full-stack development and modern frameworks.",
      highlights: ["Full-Stack Projects", "Open Source Contributions", "Advanced React Patterns", "Cloud Technologies"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-24 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <br></br>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6">
              My Journey
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              From curiosity to creation - here's how my coding journey unfolded from 2022 to 2024
            </p>
          </div>

          {/* Roadmap Timeline */}
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-700 h-full"></div>
            
            <div className="space-y-16">
              {journeySteps.map((step, index) => (
                <div 
                  key={step.year}
                  className="relative animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-blue-500 rounded-full border-3 border-black shadow-lg z-10"></div>
                  
                  {/* Content Container */}
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Year Badge */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-lg font-bold shadow-lg border-3 border-black hover:bg-blue-500 transition-colors duration-300">
                        {step.year}
                      </div>
                    </div>
                    
                    {/* Content Card */}
                    <div className="flex-1 w-full">
                      <div className="bg-gray-900/90 p-8 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-[1.02] shadow-xl backdrop-blur-sm">
                        <div className="flex items-center mb-4">
                          <div className="w-3 h-3 bg-blue-400 rounded-full mr-3 shadow-sm"></div>
                          <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                        </div>
                        <p className="text-gray-300 mb-6 leading-relaxed">{step.description}</p>
                        
                        {/* Highlights Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          {step.highlights.map((highlight, idx) => (
                            <div 
                              key={idx}
                              className="bg-gray-800/80 px-4 py-3 rounded-xl text-sm text-center border border-gray-600 hover:border-blue-400 hover:bg-gray-700/80 transition-all duration-300 shadow-sm"
                            >
                              {highlight}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* End Cap */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-4 h-4 bg-blue-500 rounded-full border-3 border-black shadow-lg"></div>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Journey;
