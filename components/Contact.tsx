import React from 'react';
import { Mail, Github, Linkedin, ArrowUp } from 'lucide-react';
import { SOCIALS } from '../constants';

const Contact: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-slate-900 text-white pt-24 pb-8 relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl font-bold font-display mb-6">Let's Connect</h2>
          <p className="text-slate-400 max-w-lg mb-10 text-lg">
            I'm currently looking for internships and research opportunities. 
            Feel free to reach out for collaborations or just a friendly hello.
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 w-full max-w-lg sm:max-w-none mx-auto">
            <a 
              href={`mailto:${SOCIALS.email}`}
              className="flex items-center justify-center gap-3 px-6 py-3 bg-slate-800 hover:bg-blue-600 rounded-full transition-all duration-300 border border-slate-700 hover:border-blue-500 w-full sm:w-auto"
            >
              <Mail size={20} />
              <span>Email Me</span>
            </a>
            <a 
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-3 bg-slate-800 hover:bg-[#0077b5] rounded-full transition-all duration-300 border border-slate-700 hover:border-[#0077b5] w-full sm:w-auto"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a 
              href={SOCIALS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all duration-300 border border-slate-700 w-full sm:w-auto"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Manoj M J. Built with React & Tailwind.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="p-3 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors text-slate-400 hover:text-white shadow-lg shadow-slate-900/50"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Contact;