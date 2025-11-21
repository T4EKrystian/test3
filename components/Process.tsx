import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';
import { ProcessStep } from '../types';

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description: "Analiza biznesowa, warsztaty UX i wybór technologii. Tworzymy mapę drogową sukcesu.",
    tags: ["Audit", "Strategy", "UX Research"]
  },
  {
    number: "02",
    title: "Design",
    description: "Prototypowanie high-fidelity. Tworzymy design system, który skaluje się wraz z Twoim biznesem.",
    tags: ["UI/UX", "Design System", "Prototyping"]
  },
  {
    number: "03",
    title: "Development",
    description: "Kodowanie w oparciu o headless architecture lub monolit PrestaShop. Czysty kod, testy automatyczne.",
    tags: ["Development", "Testing", "Deployment"]
  },
  {
    number: "04",
    title: "Growth",
    description: "Wdrożenie produkcyjne to dopiero początek. Optymalizujemy konwersję i skalujemy sprzedaż.",
    tags: ["Analytics", "Optimization", "Scaling"]
  }
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 md:py-32 bg-dark-900 text-white relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 md:mb-24 text-center md:text-left">
          <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tighter mb-6">
            Proces <span className="text-gray-600">Delivery</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto md:mx-0">
            Eliminujemy chaos. Nasz proces to sprawdzona struktura, która gwarantuje terminowość i jakość.
          </p>
        </div>

        <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[60px] left-0 w-full h-[1px] bg-gray-800">
                <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="h-full bg-brand-500"
                />
            </div>

            {/* Connecting Line (Mobile) */}
            <div className="absolute top-4 bottom-0 left-[19px] w-[1px] bg-gray-800 md:hidden">
                <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="w-full bg-brand-500"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {steps.map((step, i) => (
                <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative group pl-16 md:pl-0"
                >
                {/* Desktop Circle indicator */}
                <div className="w-4 h-4 bg-dark-900 border-2 border-gray-700 rounded-full mb-8 relative z-10 group-hover:border-brand-500 group-hover:scale-125 transition-all duration-300 hidden md:block mx-auto md:mx-0">
                    <div className="absolute inset-0 bg-brand-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Mobile Circle Indicator */}
                <div className="absolute left-3 top-1 w-4 h-4 bg-dark-900 border-2 border-gray-700 rounded-full z-10 group-hover:border-brand-500 transition-all duration-300 md:hidden">
                     <div className="absolute inset-0 bg-brand-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <div className="text-sm font-mono text-brand-500 mb-2 md:mb-3">0{i + 1}</div>
                
                <h3 className="text-2xl font-display font-semibold mb-3 text-gray-100">
                    {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {step.description}
                </p>
                </motion.div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};