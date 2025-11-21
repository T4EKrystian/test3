import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    quote: "Time4eCommerce całkowicie zmieniło nasze postrzeganie sprzedaży online. Nowy design i architektura podwoiły naszą konwersję w ciągu 3 miesięcy.",
    author: "Michał Wójcik",
    role: "CEO",
    company: "Lumina Fashion",
    metric: "+115% wzrostu przychodów r/r"
  },
  {
    quote: "Szukaliśmy partnera, który zrozumie specyfikę B2B. Stworzyli system, który zautomatyzował 80% naszej obsługi klienta.",
    author: "Anna Kowalska",
    role: "Dyrektor Operacyjny",
    company: "TechParts Polska",
    metric: "Oszczędność 40h tygodniowo"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-dark-900 text-white overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-20 flex items-end justify-between">
            <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tighter">
                Wyniki mówią <br />
                <span className="text-gray-500">same za siebie.</span>
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {testimonials.map((item, i) => (
            <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white/5 border border-white/10 rounded-[2rem] p-10 md:p-14 relative backdrop-blur-sm hover:bg-white/10 transition-colors duration-500"
            >
              <Quote className="text-brand-500 mb-8 opacity-50" size={40} />
              
              <p className="text-xl md:text-2xl font-light leading-relaxed mb-12 text-gray-200">
                "{item.quote}"
              </p>
              
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-t border-white/10 pt-8">
                <div>
                    <div className="font-bold text-lg">{item.author}</div>
                    <div className="text-sm text-gray-500">{item.role}, {item.company}</div>
                </div>
                <div className="bg-brand-600/20 text-brand-400 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                    {item.metric}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};