
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
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div 
              key={edu.degree}
              className="bg-black/50 p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                  <p className="text-blue-400 text-lg font-medium">{edu.school}</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p className="text-gray-400 font-medium">{edu.period}</p>
                  <p className="text-gray-500 text-sm">{edu.location}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
