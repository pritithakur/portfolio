"use client";

import { motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const About = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js", 
    "Tailwind CSS", "MongoDB", "PostgreSQL", "Express", "GraphQL"
  ];
  
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] to-[var(--background)] opacity-80 -z-10"></div>
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[var(--primary)]/10 dark:bg-[var(--primary)]/20"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
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
          className="flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[var(--foreground)]">
            About Me
          </h2>
          <div className="w-20 h-1 bg-[var(--accent)] mb-8"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left column: Photo and cards */}
            <div className="flex flex-col items-center">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative mb-8"
              >
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] flex items-center justify-center text-white text-4xl font-bold shadow-xl border-4 border-white dark:border-gray-800">
                  <div className="relative w-full h-full">
                    <Image 
                      src="/images/profile.jpeg" 
                      alt="Priti Thakur" 
                      fill
                      sizes="(max-width: 768px) 16rem, 20rem"
                      priority
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-md">
                  <span className="text-[var(--primary)] font-bold">Full Stack Developer</span>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 gap-4 w-full">
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-md"
                >
                  <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">Education</h3>
                  <p className="text-gray-600 dark:text-gray-400">Bachelor of Computer Science<br />University of Technology, 2016</p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-md"
                >
                  <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">Location</h3>
                  <p className="text-gray-600 dark:text-gray-400">San Francisco, California<br />Available for remote work</p>
                </motion.div>
              </div>
            </div>
            
            {/* Right column: Bio and skills */}
            <div className="flex flex-col">
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold text-[var(--foreground)] mb-4">
                  Hello there! 👋
                </h3>
                <div className="space-y-4">
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    I am a passionate Full Stack Developer with expertise in building modern web applications. 
                    With a strong foundation in both frontend and backend technologies, I strive to create 
                    seamless, intuitive, and high-performance digital experiences.
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    My journey in software development began with a curiosity about how things work on the web. 
                    Over time, I&apos;ve honed my skills in JavaScript, React, Node.js, and various other technologies 
                    that enable me to bring ideas to life.
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    I believe in continuous learning and staying updated with the latest industry trends. 
                    When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source 
                    projects, or enjoying outdoor activities.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="mt-8"
                ref={skillsRef}
              >
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">
                  Tech I work with
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: "var(--primary)", 
                        color: "white" 
                      }}
                      className="px-4 py-2 bg-[var(--primary-light)]/20 text-[var(--primary-dark)] dark:bg-[var(--primary)]/30 dark:text-[var(--primary-light)] rounded-full text-sm font-medium cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="mt-8 flex justify-center md:justify-start"
              >
                <div className="flex space-x-5">
                  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[var(--primary)] dark:text-gray-400 dark:hover:text-[var(--primary)] transition-colors duration-300">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[var(--primary)] dark:text-gray-400 dark:hover:text-[var(--primary)] transition-colors duration-300">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[var(--primary)] dark:text-gray-400 dark:hover:text-[var(--primary)] transition-colors duration-300">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 