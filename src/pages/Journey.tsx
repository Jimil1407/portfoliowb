
import Navbar from '@/components/Navbar';

const Journey = () => {
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
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              My Journey
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From curiosity to creation - here's how my coding journey unfolded from 2022 to 2024
            </p>
          </div>

          <div className="space-y-12">
            {journeySteps.map((step, index) => (
              <div 
                key={step.year}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl font-bold">
                      {step.year}
                    </div>
                  </div>
                  
                  <div className="flex-1 bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-[1.02]">
                    <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{step.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {step.highlights.map((highlight, idx) => (
                        <div 
                          key={idx}
                          className="bg-gray-800 px-4 py-2 rounded-full text-sm text-center border border-gray-700 hover:border-blue-500 transition-colors"
                        >
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
