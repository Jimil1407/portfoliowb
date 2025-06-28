const Experience = () => {
  const experiences = [
    {
      logo: "https://www.ey.com/content/dam/ey-unified-site/ey-com/en-in/generic/images/ey-logo-black.png",
      title: "SDE - Ernst & Young",
      description: "Building full stack apps",
      period: "October 2025 - present"
    },
    {
      logo: "https://media.licdn.com/dms/image/v2/D560BAQErz1LG1tXsew/company-logo_200_200/company-logo_200_200/0/1666092569253/matalia_stock_broking_pvtltd_logo?e=1756339200&v=beta&t=0W4HRCmzRcQLPdOG-_d3camrH3VUD_rmkpgg5A_qY1E",
      title: "Quant Developer - Matalia FinTech",
      description: "Built high performance trading algorithms",
      period: "September 2023 - November 2023"
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
            <div
              key={exp.title}
              className="flex flex-col items-center md:flex-row md:items-center md:justify-between animate-fade-in gap-4 md:gap-0"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col items-center gap-2 md:flex-row md:items-center md:gap-6 w-full">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/5 mx-auto md:mx-0">
                  {exp.logo.startsWith('http') ? (
                    <img 
                      src={exp.logo} 
                      alt={`${exp.title} logo`}
                      className="w-10 h-10 object-contain"
                    />
                  ) : (
                    <span className="text-4xl">{exp.logo}</span>
                  )}
                </div>
                <div>
                  <div className="text-2xl font-bold text-white leading-tight text-center md:text-left">{exp.title}</div>
                  <div className="text-lg text-gray-300 leading-tight text-center md:text-left">{exp.description}</div>
                </div>
              </div>
              <div className="text-lg text-white font-normal min-w-[160px] text-center md:text-right mt-2 md:mt-0 w-full">
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
