import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { EDUCATION } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-10">
          <div className="p-3 bg-blue-600 rounded-lg text-white">
            <GraduationCap size={24} />
          </div>
          <h2 className="text-3xl font-bold font-display text-slate-900 dark:text-white">
            Education
          </h2>
        </div>

        <div className="space-y-8">
          {EDUCATION.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {edu.institution}
                </h3>
                <span className="text-sm font-medium text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full whitespace-nowrap">
                  {edu.duration}
                </span>
              </div>
              <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-2">{edu.degree}</p>
              {edu.score && (
                <p className="text-slate-600 dark:text-slate-300 font-medium">
                  {edu.score}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;