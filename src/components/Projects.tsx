"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Projects = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with product management, cart functionality, user authentication, and payment processing.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
      image: "/images/project-1.jpg",
      demoLink: "https://project1.example.com",
      codeLink: "https://github.com/yourusername/project1"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["Next.js", "Firebase", "Tailwind CSS", "React DnD"],
      image: "/images/project-2.jpg",
      demoLink: "https://project2.example.com",
      codeLink: "https://github.com/yourusername/project2"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current weather conditions and forecasts for multiple locations with interactive visualizations.",
      technologies: ["React", "Chart.js", "OpenWeather API", "Geolocation API"],
      image: "/images/project-3.jpg",
      demoLink: "https://project3.example.com",
      codeLink: "https://github.com/yourusername/project3"
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description: "A dashboard that provides analytics and insights for social media accounts, including engagement metrics and audience demographics.",
      technologies: ["Vue.js", "D3.js", "Node.js", "Express", "Social Media APIs"],
      image: "/images/project-4.jpg",
      demoLink: "https://project4.example.com",
      codeLink: "https://github.com/yourusername/project4"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 -z-10"></div>

      {/* Animated background shapes */}
      <div className="absolute inset-0 -z-5 overflow-hidden opacity-30">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/10 dark:bg-blue-500/20"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: Math.random() * 10 + 10,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
            Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mb-8"></div>
          <p className="text-lg text-center max-w-3xl text-gray-600 dark:text-gray-400">
            Here are some of the projects I've worked on. Each project represents different challenges and technologies
            I've used to create meaningful digital experiences.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              variants={item}
              key={project.id}
              className={`bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${
                activeProjectIndex === index ? 'ring-4 ring-blue-500 scale-[1.02]' : 'hover:shadow-xl hover:-translate-y-2'
              }`}
              onMouseEnter={() => setActiveProjectIndex(index)}
              onMouseLeave={() => setActiveProjectIndex(null)}
            >
              <div className="relative h-60 w-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                {/* Placeholder gradient with animated overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600">
                  <motion.div 
                    className="absolute inset-0 bg-black opacity-0 flex items-center justify-center"
                    animate={{ 
                      opacity: activeProjectIndex === index ? 0.5 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.h3 
                      className="text-white text-2xl font-bold"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ 
                        scale: activeProjectIndex === index ? 1 : 0.8,
                        opacity: activeProjectIndex === index ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      View Details
                    </motion.h3>
                  </motion.div>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-2xl font-bold z-10">{project.title}</h3>
                  </div>
                </div>
                
                {/* Uncomment and add your image path when available
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                */}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <motion.span 
                        key={idx} 
                        className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full"
                        whileHover={{ scale: 1.05, backgroundColor: "#3b82f6", color: "#ffffff" }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <motion.a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Live Demo
                  </motion.a>
                  <motion.a 
                    href={project.codeLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-200 text-gray-800 text-sm font-medium rounded hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 