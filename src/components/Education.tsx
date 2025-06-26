const Education = () => {
  const education = [
    {
      degree: "Bachelor's in Computer Science",
      school: "University Name",
      period: "2021 - 2025",
      description: "Focused on software engineering and web technologies",
      location: "City, State"
    },
    {
      degree: "Full Stack Web Development",
      school: "Online Certification",
      period: "2022",
      description: "Comprehensive course covering modern web development stack",
      location: "Online"
    },
    {
      degree: "JavaScript Algorithms and Data Structures",
      school: "freeCodeCamp",
      period: "2022",
      description: "Certification in JavaScript fundamentals and problem-solving",
      location: "Online"
    }
  ];

  return (
    <section className="py-20 bg-gray-900" id="education">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Education</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My educational background and continuous learning journey.
          </p>
        </div>
        
        <div className="flex flex-col gap-12">
          {education.map((edu, index) => (
            <div key={edu.degree} className="flex items-center justify-between animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-black/80">
                  <span className="text-4xl">🎓</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white leading-tight">{edu.degree}</div>
                  <div className="text-lg text-gray-300 leading-tight">{edu.school}</div>
                  <div className="text-base text-gray-400 leading-tight">{edu.description}</div>
                </div>
              </div>
              <div className="text-right text-lg text-white font-normal min-w-[160px]">
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
