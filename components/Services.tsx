import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, BarChart3, Smartphone, Zap, Layers, Code, ArrowUpRight } from 'lucide-react';

const BentoItem = ({ title, desc, icon: Icon, className, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay }}
    className={`group relative overflow-hidden rounded-[2rem] bg-surface-50 p-6 md:p-10 border border-transparent hover:border-gray-100 hover:bg-white hover:shadow-premium transition-all duration-500 cursor-pointer ${className}`}
  >
    <div className="relative z-10 h-full flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-6">
            <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-dark-900 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                <Icon size={24} strokeWidth={1.5} />
            </div>
            <div className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-gray-400">
                <ArrowUpRight size={24} />
            </div>
        </div>
        
        <h3 className="text-xl md:text-2xl font-display font-semibold text-dark-900 mb-3 tracking-tight group-hover:text-brand-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-500 leading-relaxed text-sm md:text-lg">
          {desc}
        </p>
      </div>
    </div>
    
    {/* Subtle gradient on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-brand-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
  </motion.div>
);

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 md:mb-20 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
             className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-brand-600 uppercase bg-brand-50 rounded-full"
          >
            Ekspertyza
          </motion.div>
          <h2 className="font-display text-4xl md:text-6xl font-semibold text-dark-900 mb-6 tracking-tighter">
            Technologia, która <br />
            <span className="text-gray-400">napędza sprzedaż.</span>
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          
          <BentoItem 
            title="Wdrożenia PrestaShop"
            desc="Architektura skalowalna do milionów SKU. Budujemy sklepy od podstaw na najnowszym silniku 8.x z podejściem Headless Ready."
            icon={ShoppingBag}
            className="md:col-span-2 md:min-h-[360px]"
            delay={0.1}
          />
          
          <BentoItem 
            title="Mobile First / PWA"
            desc="Interfejsy, które działają jak natywne aplikacje. Błyskawiczne ładowanie i UX klasy Apple."
            icon={Smartphone}
            className="md:col-span-1 bg-dark-900 !text-white hover:!bg-black hover:!border-gray-800"
            delay={0.2}
          />

          <BentoItem 
            title="Integracje ERP"
            desc="Pełna automatyzacja z Subiekt, Comarch, SAP. Synchronizacja stanów i zamówień w czasie rzeczywistym."
            icon={Layers}
            className="md:col-span-1"
            delay={0.3}
          />

          <BentoItem 
            title="Core Web Vitals"
            desc="Wyniki 95+ w Google PageSpeed. Szybkość to wyższa konwersja, lepsze SEO i niższy koszt CPC."
            icon={Zap}
            className="md:col-span-1"
            delay={0.4}
          />

          <BentoItem 
            title="Audyty & UX"
            desc="Analizujemy ścieżki zakupowe i eliminujemy porzucone koszyki dzięki analityce behawioralnej."
            icon={BarChart3}
            className="md:col-span-1"
            delay={0.5}
          />

          <BentoItem 
            title="Rozwój Custom B2B"
            desc="Dedykowane moduły, cenniki indywidualne, kredyty kupieckie i zaawansowane konfiguratory produktów."
            icon={Code}
            className="md:col-span-3 md:flex md:items-center md:gap-10 bg-surface-100"
            delay={0.6}
          />
          
        </div>
      </div>
    </section>
  );
};