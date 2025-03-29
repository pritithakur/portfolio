const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "Eazydiner",
      duration: "2024 - Present",
      description: [
        "Built and maintained RESTful APIs for web applications",
        "Developed frontend using Nextjs, Tailwind CSS, and Material UI",
        "Implemented microservices architecture using Node.js and Express for sitemaps",
        "Developed responsive UI components with React and Tailwind CSS",
        "Automated tasks for metrics calculation and reporting using lambda functions"
      ]
    },
    {
      id: 2,
      title: "Web Developer",
      company: "Alotusinthemud",
      duration: "2023-2024",
      description: [
        "Designed and developed a website for a client using WordPress and Elementor",
        "Integrated payment gateway for secure transactions",
        "Optimized website performance and SEO",
        "Managed content updates and user feedback"
      ]
    },
    {
      id: 3,
      title: "Frontend Developer Intern",
      company: "Shoolini University",
      duration: "2022 - 2023",
      description: [
        "Worked on the university website using Laravel.",
        "Managed the content of the website.",
        "Regular updates and maintenance of the website.",
      ]
    }
  ];

  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp) => (
            <div key={exp.id} className="mb-12 relative pl-8 md:pl-10">
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 w-4 h-4 bg-blue-600 rounded-full"></div>
              
              {/* Vertical line */}
              {exp.id !== experiences.length && (
                <div className="absolute left-2 top-5 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700" style={{ height: 'calc(100% + 3rem)' }}></div>
              )}
              
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white">{exp.title}</h3>
                  <span className="text-blue-600 font-medium mt-1 md:mt-0">{exp.duration}</span>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">{exp.company}</p>
                <ul className="list-disc list-inside space-y-2">
                  {exp.description.map((item, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-400">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 