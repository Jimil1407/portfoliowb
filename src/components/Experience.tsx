const Experience = () => {
  const experiences = [
    {
      logo: "✈️",
      title: "Freelance",
      description: "building full stack apps",
      period: "2024 - present"
    },
    {
      logo: "\u25B2",
      title: "Full Stack Development - TA",
      description: "Stealth Startup",
      period: "Feb 2024 - June 2024"
    }
  ];

  return (
    <section className="py-20 bg-black" id="experience">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Experience</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey and work experience in the tech industry.
          </p>
        </div>
        
        <div className="flex flex-col gap-12">
          {experiences.map((exp, index) => (
            <div key={exp.title} className="flex items-center justify-between animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/5">
                  <span className="text-4xl">{exp.logo}</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white leading-tight">{exp.title}</div>
                  <div className="text-lg text-gray-300 leading-tight">{exp.description}</div>
                </div>
              </div>
              <div className="text-right text-lg text-white font-normal min-w-[160px]">
                {exp.period}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
