const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science (Spl in AI & ML)",
      school: "Vellore Institute of Technology",
      period: "2021 - 2025",
      description: "Focused on software engineering and AI/ML",
      location: "Tamil Nadu, India"
    }
  ];

  return (
    <section className="py-20 bg-black" id="education">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Education</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My educational background and continuous learning journey.
          </p>
        </div>
        
        <div className="flex flex-col gap-12">
          {education.map((edu, index) => (
            <div
              key={edu.degree}
              className="flex flex-col items-center md:flex-row md:items-center md:justify-between animate-fade-in gap-4 md:gap-0"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col items-center gap-2 md:flex-row md:items-center md:gap-6 w-full">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-black/80 mx-auto md:mx-0">
                  <span className="text-4xl">🎓</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white leading-tight text-center md:text-left">{edu.degree}</div>
                  <div className="text-lg text-gray-300 leading-tight text-center md:text-left">{edu.school}</div>
                  <div className="text-base text-gray-400 leading-tight text-center md:text-left">{edu.description}</div>
                </div>
              </div>
              <div className="text-lg text-white font-normal min-w-[160px] text-center md:text-right mt-2 md:mt-0 w-full">
                {edu.period}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
