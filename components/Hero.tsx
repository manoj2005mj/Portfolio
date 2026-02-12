import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import { SKILLS } from '../constants';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
      {/* Background Blobs - Blue and Black Theme */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-black dark:bg-black rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-800 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 font-medium text-sm">
            Available for Internships & Research
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-display text-slate-900 dark:text-white leading-tight mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Manoj M J</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-2 font-medium">
            ML Researcher & AI Developer
          </p>
          <p className="text-lg text-slate-500 dark:text-slate-400 mb-8 max-w-lg leading-relaxed">
            Specializing in Agentic AI, LLMS, and RAG.
            Building systems that bridge the gap between complex data and actionable insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects" 
              onClick={(e) => scrollToSection(e, '#projects')}
              className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors flex items-center justify-center shadow-lg hover:shadow-blue-500/25 w-full sm:w-auto text-center cursor-pointer"
            >
              View Projects <ArrowRight size={18} className="ml-2" />
            </a>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, '#contact')}
              className="px-8 py-3 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center justify-center w-full sm:w-auto text-center cursor-pointer"
            >
              Contact Me <FileText size={18} className="ml-2" />
            </a>
          </div>
        </motion.div>

        {/* Right: Photo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl rotate-6 opacity-50 blur-lg"></div>
            {/* 
              IMPORTANT: Ensure your photo is named 'profile.jpg' and placed in the root/public directory.
            */}
            <img 
              src="Assets/image.png" 
              alt="Manoj M J" 
              className="relative w-full h-full object-cover rounded-2xl border-4 border-white dark:border-slate-800 shadow-2xl z-10"
              onError={(e) => {
                // Fallback if local image fails
                (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=Manoj+M+J&background=0D8ABC&color=fff&size=400";
              }}
            />
            {/* Removed the Floating KVPY Badge */}
          </div>
        </motion.div>
      </div>

      {/* Skills Carousel */}
      <div className="mt-24 w-full bg-slate-50 dark:bg-slate-800/50 py-8 border-y border-slate-200 dark:border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 mb-4">
          <p className="text-center text-sm font-medium text-slate-500 uppercase tracking-widest">Technical Arsenal</p>
        </div>
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee whitespace-nowrap flex gap-8">
            {/* Triple render for smooth infinite loop */}
            {[...SKILLS, ...SKILLS, ...SKILLS].map((skill, index) => (
              <span 
                key={`${skill}-${index}`} 
                className="inline-block px-6 py-2 rounded-lg bg-white dark:bg-slate-700 shadow-sm border border-slate-100 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-medium hover:border-blue-500 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Add custom animation for marquee in global CSS or style tag
const marqueeStyle = `
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-marquee {
    animation: marquee 30s linear infinite;
  }
  .animate-marquee:hover {
    animation-play-state: paused;
  }
`;

export default Hero;