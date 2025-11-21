import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, BarChart, Layers } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12 md:mb-20">
          <h2 className="font-display text-4xl md:text-6xl font-semibold text-dark-900 mb-6 tracking-tighter leading-[1.1]">
            Nie jesteśmy zwykłym software housem. <span className="text-gray-400">Jesteśmy partnerem wzrostu.</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
            Większość agencji dostarcza kod. My dostarczamy przewagę konkurencyjną opartą o technologię, dane i design.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          
          {/* Large Feature */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-surface-50 rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden group hover:shadow-premium transition-shadow duration-500"
          >
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8 group-hover:scale-110 transition-transform duration-500">
                <BarChart className="text-brand-600" size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-dark-900 mb-4">Business Intelligence</h3>
              <p className="text-gray-500 text-base md:text-lg max-w-md leading-relaxed">
                Każda linijka kodu, którą piszemy, ma uzasadnienie biznesowe. Projektujemy lejki sprzedażowe, upsell i cross-sell na poziomie architektury systemu.
              </p>
            </div>
            {/* Decorative */}
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-tl from-brand-100/50 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </motion.div>

          {/* Tall Feature */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="bg-dark-900 text-white rounded-[2.5rem] p-8 md:p-14 flex flex-col justify-between relative overflow-hidden group"
          >
             <div>
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm mb-8">
                  <Zap className="text-white" size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">Core Web Vitals</h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  Szybkość to pieniądz. Gwarantujemy wyniki 90+ w Google PSI.
                </p>
             </div>
             <div className="mt-8 pt-8 border-t border-white/10">
                <div className="text-4xl font-bold text-brand-500">0.2s</div>
                <div className="text-sm text-gray-400 uppercase tracking-widest mt-1">TTFB</div>
             </div>
          </motion.div>

          {/* Small Feature */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-surface-50 rounded-[2.5rem] p-8 md:p-12 group hover:bg-white hover:shadow-premium transition-all duration-500 border border-transparent hover:border-gray-100"
          >
             <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-brand-50 transition-colors">
                <Layers className="text-dark-900" size={24} strokeWidth={1.5} />
             </div>
             <h3 className="text-xl md:text-2xl font-display font-bold text-dark-900 mb-3">Skalowalność</h3>
             <p className="text-gray-500 leading-relaxed text-sm md:text-base">
               Architektura gotowa na Black Friday. Obsługujemy piki ruchu bez zadyszki.
             </p>
          </motion.div>

          {/* Wide Feature */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-14 group hover:border-brand-200 transition-colors"
          >
             <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
                <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center shrink-0">
                   <Shield className="text-brand-600" size={32} strokeWidth={1.5} />
                </div>
                <div>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-dark-900 mb-2">Bezpieczeństwo klasy Enterprise</h3>
                    <p className="text-gray-500 leading-relaxed max-w-lg text-sm md:text-base">
                        Audyty bezpieczeństwa, ochrona przed atakami DDoS i regularne testy penetracyjne w standardzie.
                    </p>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};