"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="min-h-screen pt-24 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary-dark)] via-[var(--primary)] to-[var(--accent)] opacity-10 dark:opacity-20 -z-10"></div>
      
      {/* Geometric patterns */}
      <div className="absolute inset-0 -z-5 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border-4 border-[var(--primary)] opacity-10"
            style={{
              width: Math.random() * 400 + 50,
              height: Math.random() * 400 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 20 - 10],
              y: [0, Math.random() * 20 - 10],
              scale: [1, 1.05, 1],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: Math.random() * 10 + 15,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 md:px-6 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-[80vh] gap-12">
          {/* Text content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 text-[var(--foreground)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="block">Hi, I am</span>
              <span className="text-[var(--primary)] inline-block">Priti Thakur</span>
            </motion.h1>
            
            <motion.div
              className="h-1 w-32 bg-[var(--accent)] my-6"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
            
            <motion.h2 
              className="text-2xl md:text-3xl font-medium mb-6 text-[var(--foreground)] opacity-80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Full Stack Developer
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl text-[var(--foreground)] opacity-70 mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              I build exceptional and accessible digital experiences for the web. Passionate about creating intuitive and responsive user interfaces.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/#projects"
                  className="px-6 py-3 bg-[var(--primary)] text-white font-medium rounded-lg shadow-lg hover:bg-[var(--primary-dark)] transition-colors duration-300"
                >
                  View Projects
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="tel:9816797667"
                  className="px-6 py-3 bg-transparent border-2 border-[var(--primary)] text-[var(--primary)] font-medium rounded-lg hover:bg-[var(--primary)] hover:text-white transition-colors duration-300"
                >
                  Contact Me
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Social icons */}
            <motion.div 
              className="flex space-x-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.a 
                href="https://github.com/pritithakur" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: "var(--primary)" }}
                className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/priti-thakur-193078201/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: "var(--primary)" }}
                className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </motion.a>
              <motion.a 
                href="https://x.com/PritiThaku96307" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: "var(--primary)" }}
                className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Right side image with background removal effect */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="h-[400px] md:h-[500px] order-1 md:order-2 relative"
          >
            {/* Background glow effect */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] opacity-20 blur-3xl"></div>
            
            {/* Developer Image with background removal effect */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ 
                scale: imageLoaded ? 1 : 0.9, 
                opacity: imageLoaded ? 1 : 0 
              }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <div className="relative w-[90%] max-w-md h-[90%] rounded-2xl overflow-hidden">
                {/* SVG mask for the image */}
                <svg width="0" height="0" className="absolute">
                  <defs>
                    <linearGradient id="image-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
                    </linearGradient>
                    <mask id="image-mask">
                      <rect width="100%" height="100%" fill="white" />
                      <rect width="100%" height="100%" fill="url(#image-gradient)" />
                    </mask>
                  </defs>
                </svg>
                
                {/* Image container */}
                <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-lg">
                  {/* Decorative background */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary-light)]/5 to-[var(--accent)]/5"></div>
                  
                  {/* Light mode image */}
                  <div className="dark:hidden w-full h-full relative">
                    <div 
                      className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--background)]/40 z-10"
                    ></div>
                    <Image
                      src="/images/developer.avif"
                      alt="Developer Portrait"
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                      className="object-cover object-center"
                      style={{ 
                        filter: 'contrast(1.1) brightness(1.05)',
                        mixBlendMode: 'multiply'
                      }}
                      priority
                      onLoad={() => setImageLoaded(true)}
                    />
                  </div>
                  
                  {/* Dark mode image */}
                  <div className="hidden dark:block w-full h-full relative">
                    <div 
                      className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--background)]/40 z-10"
                    ></div>
                    <Image
                      src="/images/developer.avif"
                      alt="Developer Portrait"
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                      className="object-cover object-center"
                      style={{ 
                        filter: 'contrast(1.1) brightness(1.2)',
                        mixBlendMode: 'lighten'
                      }}
                      priority
                      onLoad={() => setImageLoaded(true)}
                    />
                  </div>
                  
                  {/* Border overlay */}
                  <div className="absolute inset-0 border-2 border-white/30 dark:border-gray-700/30 rounded-2xl z-20"></div>
                </div>
              </div>
            </motion.div>
            
            {/* Floating badges */}
            <motion.div
              className="absolute top-1/4 right-0 bg-white dark:bg-gray-800 shadow-lg rounded-full px-4 py-2 text-sm font-medium text-[var(--primary)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              whileHover={{ y: -5 }}
            >
              React
            </motion.div>
            <motion.div
              className="absolute bottom-1/4 left-0 bg-white dark:bg-gray-800 shadow-lg rounded-full px-4 py-2 text-sm font-medium text-[var(--accent)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              whileHover={{ y: -5 }}
            >
              Next.js
            </motion.div>
            <motion.div
              className="absolute top-1/2 left-0 bg-white dark:bg-gray-800 shadow-lg rounded-full px-4 py-2 text-sm font-medium text-[var(--secondary)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              whileHover={{ y: -5 }}
            >
              TypeScript
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
