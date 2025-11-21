import React from 'react';
import { motion } from 'framer-motion';

const techStack = [
  "PrestaShop", "Vue.js", "React", "Symfony", "Elasticsearch", "Redis", "Google Cloud", "Meta Ads", "AWS"
];

export const Trust: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-surface-50 overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-4 mb-10 md:mb-12 text-center">
        <p className="text-xs md:text-sm font-mono uppercase text-gray-400 tracking-wider mb-4">Powered By Modern Tech</p>
      </div>

      {/* Infinite Marquee */}
      <div className="relative flex overflow-x-hidden group">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="py-4 whitespace-nowrap flex gap-8 md:gap-16 items-center"
        >
          {[...techStack, ...techStack, ...techStack].map((tech, i) => (
            <span key={i} className="text-3xl md:text-6xl font-display font-bold text-gray-200 uppercase hover:text-dark-900 transition-colors cursor-default select-none">
              {tech}
            </span>
          ))}
        </motion.div>
        
        <div className="absolute inset-y-0 left-0 w-10 md:w-40 bg-gradient-to-r from-surface-50 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-10 md:w-40 bg-gradient-to-l from-surface-50 to-transparent z-10" />
      </div>

      {/* Stats Grid */}
      <div className="max-w-5xl mx-auto px-4 mt-12 md:mt-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-200 pt-12">
          <div className="text-center md:text-left">
            <div className="text-3xl md:text-4xl font-bold text-dark-900 mb-1">12+</div>
            <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">Lat na rynku</div>
          </div>
          <div className="text-center md:text-left">
            <div className="text-3xl md:text-4xl font-bold text-dark-900 mb-1">300+</div>
            <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">Projektów</div>
          </div>
          <div className="text-center md:text-left">
            <div className="text-3xl md:text-4xl font-bold text-dark-900 mb-1">50M+</div>
            <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">GMV Klientów</div>
          </div>
          <div className="text-center md:text-left">
            <div className="text-3xl md:text-4xl font-bold text-dark-900 mb-1">24/7</div>
            <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">Wsparcie SLA</div>
          </div>
        </div>
      </div>
    </section>
  );
};