import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-4">
            Experience & Leadership
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-4 md:ml-0 space-y-12 md:space-y-0">
          {EXPERIENCE.map((exp, index) => (
            <div key={index} className="md:flex md:gap-8 group relative mb-12 last:mb-0">
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 md:left-1/2 md:-ml-[9px] w-5 h-5 rounded-full border-4 border-white dark:border-slate-900 bg-blue-600 z-10 group-hover:scale-125 transition-transform"></div>

              {/* Date (Left Side on Desktop) */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`md:w-1/2 mb-4 md:mb-0 ${index % 2 === 0 ? 'md:order-1 md:text-right md:pr-12 pl-8' : 'md:order-2 md:pl-12 pl-8'}`}
              >
                <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium mb-1 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full text-sm">
                  <Calendar size={14} />
                  {exp.duration}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-2">{exp.role}</h3>
                <h4 className="text-lg text-slate-600 dark:text-slate-300 font-medium">{exp.company}</h4>
                <span className="inline-block mt-2 text-xs font-semibold tracking-wider text-slate-500 uppercase border border-slate-200 dark:border-slate-700 px-2 py-1 rounded">
                  {exp.type}
                </span>
              </motion.div>

              {/* Content (Right Side on Desktop for even, Left for odd) */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-2 md:pl-12 pl-8' : 'md:order-1 md:text-right md:pr-12 pl-8'}`}
              >
                <ul className={`space-y-3 text-slate-600 dark:text-slate-400 leading-relaxed ${index % 2 !== 0 ? 'md:flex md:flex-col md:items-end' : ''}`}>
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className={`mt-2 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0 ${index % 2 !== 0 ? 'md:order-2 md:mt-2.5' : ''}`}></span>
                      <span className={index % 2 !== 0 ? 'md:text-right' : ''}>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
