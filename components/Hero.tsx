import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Command, Cpu, ShieldCheck, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="hero" className="relative min-h-[100vh] flex flex-col justify-center items-center pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-white">
      
      {/* Background - Minimal Gradient Mesh */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[20%] w-[60%] h-[60%] bg-brand-500/5 rounded-full blur-[120px] pointer-events-none" 
      />

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Typography */}
          <div className="lg:col-span-7 text-left z-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-xs font-bold text-dark-900 mb-8 md:mb-10 uppercase tracking-widest"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              Agencja PrestaShop Platinum
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] leading-[1.05] md:leading-[0.95] font-semibold tracking-tighter text-dark-900 mb-8 md:mb-10"
            >
              E-commerce <br />
              bez limitów.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-2xl text-gray-500 max-w-lg font-normal leading-relaxed mb-10 md:mb-12"
            >
              Projektujemy systemy sprzedaży B2B i B2C, które wyprzedzają konkurencję architekturą, designem i konwersją.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 md:gap-6"
            >
              <a href="#contact" className="relative px-8 py-4 bg-dark-900 text-white rounded-full font-bold text-lg transition-all hover:bg-brand-600 active:scale-95 flex items-center justify-center gap-3 shadow-xl shadow-brand-900/10 group">
                Rozpocznij Projekt
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#work" className="px-8 py-4 bg-transparent text-dark-900 font-medium text-lg hover:text-brand-600 transition-colors flex items-center justify-center gap-2 group">
                Zobacz Realizacje <span className="block w-2 h-2 rounded-full bg-gray-300 group-hover:bg-brand-600 transition-colors"></span>
              </a>
            </motion.div>
          </div>

          {/* Right: Abstract Interface Composition */}
          <div className="lg:col-span-5 relative h-[500px] lg:h-[700px] w-full hidden lg:block perspective-1000">
            
            {/* Card 1: The Background Blur */}
            <motion.div 
              style={{ y: y1, rotate: 6 }}
              className="absolute top-0 right-10 w-[340px] h-[480px] bg-surface-50 rounded-[2.5rem] z-0 opacity-80" 
            />

            {/* Card 2: The Interface */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
              animate={{ opacity: 1, scale: 1, rotateY: -6 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
              style={{ rotateY: -6 }}
              className="absolute top-10 right-20 w-[380px] bg-white rounded-[2.5rem] shadow-premium border border-gray-100 overflow-hidden z-10"
            >
              {/* Mock Header */}
              <div className="h-20 border-b border-gray-50 flex items-center justify-between px-8 bg-white/80 backdrop-blur-md sticky top-0 z-20">
                <div className="font-display font-bold text-xl tracking-tight">Store<span className="text-brand-600">.</span></div>
                <div className="w-8 h-8 rounded-full bg-surface-50 flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                </div>
              </div>
              
              {/* Mock Content */}
              <div className="p-8 space-y-8 bg-white">
                
                <div className="space-y-2">
                    <div className="text-sm text-gray-400 font-medium uppercase tracking-wide">Przychód Dzisiaj</div>
                    <div className="text-5xl font-display font-bold text-dark-900 tracking-tighter">
                        42,500 <span className="text-xl text-gray-300 font-normal">PLN</span>
                    </div>
                    <div className="inline-flex items-center gap-1 text-green-600 text-sm font-bold bg-green-50 px-3 py-1 rounded-full">
                        <Zap size={12} fill="currentColor" /> +24%
                    </div>
                </div>

                <div className="space-y-4 pt-4">
                  <div className="flex justify-between text-sm font-medium text-gray-600">
                      <span>Conversion Rate</span>
                      <span className="text-dark-900">3.8%</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "65%" }}
                      transition={{ duration: 2, ease: "circOut" }}
                      className="h-full bg-brand-600 rounded-full" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="bg-surface-50 p-5 rounded-2xl border border-transparent hover:border-gray-200 transition-colors">
                        <Cpu size={20} className="mb-3 text-dark-900" />
                        <div className="text-[10px] text-gray-400 uppercase font-bold mb-1 tracking-wider">Speed Score</div>
                        <div className="text-xl font-bold">98/100</div>
                    </div>
                    <div className="bg-dark-900 text-white p-5 rounded-2xl shadow-lg shadow-black/10">
                        <ShieldCheck size={20} className="mb-3 text-white" />
                        <div className="text-[10px] text-gray-400 uppercase font-bold mb-1 tracking-wider">Security</div>
                        <div className="text-xl font-bold">Secure</div>
                    </div>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Floating Badge */}
            <motion.div 
              style={{ y: y2 }}
              className="absolute bottom-20 left-0 bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-glass border border-white/50 flex items-center gap-4 z-20"
            >
               <div className="bg-surface-100 p-3 rounded-xl text-dark-900">
                 <Command size={24} strokeWidth={1.5} />
               </div>
               <div>
                 <div className="text-base font-bold text-dark-900 leading-tight">System Ready</div>
                 <div className="text-xs text-gray-500">All systems operational</div>
               </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};