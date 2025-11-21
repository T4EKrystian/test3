import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ProjectCase } from '../types';

const cases: ProjectCase[] = [
  {
    id: 1,
    client: "Lumina Fashion",
    category: "Fashion & Apparel",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop",
    stats: "+145% Revenue"
  },
  {
    id: 2,
    client: "TechCore B2B",
    category: "Industrial Parts",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
    stats: "Automated Logistics"
  },
  {
    id: 3,
    client: "EcoHome",
    category: "Home & Garden",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=1000&auto=format&fit=crop",
    stats: "3.5x Conversion"
  }
];

export const Work: React.FC = () => {
  return (
    <section id="work" className="py-32 bg-white border-t border-gray-100">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-dark-900 mb-4 tracking-tight">
              Wybrane realizacje
            </h2>
            <p className="text-gray-500 text-lg max-w-xl">
              Sklepy, które nie tylko wyglądają, ale przede wszystkim sprzedają. Zobacz jak pomagamy markom rosnąć.
            </p>
          </div>
          <a href="#contact" className="hidden md:flex items-center gap-2 text-dark-900 font-medium border-b border-dark-900 pb-1 hover:opacity-60 transition-opacity">
            Zobacz całe portfolio <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="group relative cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-[2rem] aspect-[4/5] mb-6">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                <img 
                  src={item.image} 
                  alt={item.client} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                <div className="absolute top-6 right-6 z-20 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide shadow-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {item.stats}
                </div>
              </div>
              
              <div className="flex justify-between items-start px-2">
                <div>
                  <h3 className="text-2xl font-display font-bold text-dark-900 mb-1">
                    {item.client}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {item.category}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-dark-900 group-hover:text-white group-hover:border-dark-900 transition-all duration-300">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
           <a href="#contact" className="inline-flex items-center gap-2 text-dark-900 font-medium border-b border-dark-900 pb-1">
            Zobacz całe portfolio <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};