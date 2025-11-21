
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, Zap, ShieldCheck, CreditCard, Globe } from 'lucide-react';

export const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax & Mouse Move Effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = clientX / innerWidth;
    const y = clientY / innerHeight;
    mouseX.set(x);
    mouseY.set(y);
  };

  const springConfig = { damping: 30, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [5, -5]), springConfig); // Reduced rotation for smoother feel
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-5, 5]), springConfig);
  
  const yText = useTransform(scrollY, [0, 300], [0, 100]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);
  const scaleHero = useTransform(scrollY, [0, 300], [1, 0.95]);

  return (
    <section 
      ref={ref}
      onMouseMove={handleMouseMove}
      id="hero" 
      className="relative min-h-[100vh] flex flex-col justify-center items-center pt-32 pb-20 overflow-hidden bg-white perspective-2000"
    >
      
      {/* Background - Dynamic Mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[80vw] h-[80vw] bg-gradient-to-br from-brand-100/40 to-purple-100/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-gradient-to-tr from-blue-100/40 to-brand-50/40 rounded-full blur-[100px]" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
          backgroundSize: '60px 60px' 
        }} 
      />

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-0">
        
        {/* Left: Typography */}
        <motion.div 
          style={{ y: yText, opacity: opacityText }}
          className="lg:w-1/2 text-center lg:text-left z-20"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-100 shadow-lg shadow-brand-500/5 text-xs font-bold text-brand-600 mb-8 uppercase tracking-widest"
          >
            <Zap size={14} fill="currentColor" />
            Agencja E-commerce Nowej Generacji
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl sm:text-7xl xl:text-8xl leading-[0.95] font-bold tracking-tighter text-dark-900 mb-8"
          >
            Sprzedaż <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">zaprojektowana.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-500 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed mb-10"
          >
            Tworzymy sklepy internetowe, które łączą wybitny design z inżynierią konwersji. PrestaShop, Headless, B2B.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <a href="#contact" className="px-8 py-4 bg-dark-900 text-white rounded-full font-bold text-lg transition-all hover:bg-brand-600 hover:shadow-lg hover:shadow-brand-500/25 active:scale-95 flex items-center gap-3 group">
              Rozpocznij Projekt
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#work" className="px-8 py-4 bg-white border border-gray-200 text-dark-900 rounded-full font-bold text-lg transition-all hover:border-gray-400 flex items-center gap-3">
              Realizacje
            </a>
          </motion.div>
        </motion.div>

        {/* Right: 3D Composition */}
        <div className="lg:w-1/2 w-full relative h-[500px] lg:h-[700px] flex items-center justify-center perspective-1000">
          
          <motion.div
            style={{ rotateX, rotateY, scale: scaleHero }}
            className="relative w-[320px] md:w-[400px] h-[500px] md:h-[600px] preserve-3d"
          >
            
            {/* Main Card - The Shop Interface */}
            <motion.div 
              initial={{ opacity: 0, z: -100, rotateY: 15 }}
              animate={{ opacity: 1, z: 0, rotateY: 0 }}
              transition={{ duration: 1, type: "spring" }}
              className="absolute inset-0 bg-white rounded-[2.5rem] shadow-2xl border border-white/50 flex flex-col overflow-hidden backface-hidden"
              style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)' }}
            >
                {/* Header */}
                <div className="h-16 border-b border-gray-100 flex items-center justify-between px-6 bg-white/80 backdrop-blur-sm">
                    <div className="font-display font-bold text-lg">Store.</div>
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-gray-200" />
                        <div className="w-3 h-3 rounded-full bg-gray-200" />
                    </div>
                </div>
                {/* Product Image Area */}
                <div className="flex-1 bg-surface-50 p-6 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200" />
                    <motion.img 
                        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop"
                        alt="Product"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] drop-shadow-2xl rotate-[-15deg] group-hover:rotate-0 transition-transform duration-700 ease-out"
                    />
                </div>
                {/* Footer UI */}
                <div className="h-32 bg-white border-t border-gray-100 p-6">
                    <div className="flex justify-between items-center mb-4">
                        <div className="text-2xl font-bold text-dark-900">599.00 PLN</div>
                        <div className="flex text-yellow-400 text-xs">
                            <Star fill="currentColor" size={14} />
                            <Star fill="currentColor" size={14} />
                            <Star fill="currentColor" size={14} />
                            <Star fill="currentColor" size={14} />
                            <Star fill="currentColor" size={14} />
                        </div>
                    </div>
                    <div className="w-full py-3 bg-dark-900 text-white text-center rounded-xl font-bold text-sm cursor-pointer hover:bg-brand-600 transition-colors">
                        Dodaj do koszyka
                    </div>
                </div>
            </motion.div>

            {/* Floating Element 1: Conversion Stats */}
            <motion.div 
                initial={{ opacity: 0, x: 50, y: -20, z: 60 }}
                animate={{ opacity: 1, x: 0, y: 0, z: 60 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -right-12 md:-right-24 top-20 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 z-20 w-48 backface-hidden"
            >
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                    <TrendingUp size={20} />
                </div>
                <div>
                    <div className="text-xs text-gray-500 font-bold uppercase">Konwersja</div>
                    <div className="text-lg font-bold text-dark-900">+24.5%</div>
                </div>
            </motion.div>

            {/* Floating Element 2: Secure Badge */}
            <motion.div 
                initial={{ opacity: 0, x: -50, y: 50, z: 40 }}
                animate={{ opacity: 1, x: 0, y: 0, z: 40 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="absolute -left-12 md:-left-20 bottom-40 bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-lg border border-gray-100 z-20 backface-hidden"
            >
                <ShieldCheck size={32} className="text-brand-600 mb-2" />
                <div className="text-xs font-bold text-gray-400 uppercase">Security</div>
                <div className="text-sm font-bold text-dark-900">Enterprise Grade</div>
            </motion.div>

            {/* Floating Element 3: Global Sales */}
            <motion.div 
                initial={{ opacity: 0, y: 50, z: 80 }}
                animate={{ opacity: 1, y: 0, z: 80 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="absolute -bottom-10 right-0 md:right-10 bg-dark-900 text-white p-5 rounded-2xl shadow-2xl z-30 flex items-center gap-4 backface-hidden"
            >
                 <Globe size={24} className="text-brand-400" />
                 <div>
                    <div className="text-xs text-gray-400 font-bold uppercase">Global Reach</div>
                    <div className="font-bold">Multi-currency</div>
                 </div>
            </motion.div>

             {/* Floating Element 4: Payment */}
            <motion.div 
                initial={{ opacity: 0, scale: 0, z: 100 }}
                animate={{ opacity: 1, scale: 1, z: 100 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="absolute top-[-20px] left-10 w-12 h-12 bg-brand-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-500/40 z-30 backface-hidden"
            >
                 <CreditCard size={20} />
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};
