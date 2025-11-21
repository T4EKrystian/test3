
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Studio', href: '#hero' },
  { label: 'Ekspertyza', href: '#services' },
  { label: 'Proces', href: '#process' },
  { label: 'Realizacje', href: '#work' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-3' : 'py-6'
        }`}
      >
        <div className="max-w-[90rem] mx-auto px-4 md:px-8 flex justify-center">
          <div className={`
            flex items-center justify-between w-full max-w-6xl
            ${isScrolled 
              ? 'bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg shadow-black/5 rounded-full py-3 pl-6 pr-3' 
              : 'bg-transparent py-2 px-4'}
            transition-all duration-500
          `}>
            
            {/* Logo */}
            <a href="#" className="text-xl font-display font-bold tracking-tighter text-dark-900 z-50 relative flex items-center gap-1">
              Time4<span className="text-brand-600">.</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center bg-white/50 rounded-full px-1 p-1 border border-gray-100/50 backdrop-blur-md mx-auto absolute left-1/2 -translate-x-1/2 shadow-sm">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-dark-900 hover:bg-white rounded-full transition-all duration-300"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="#contact"
                className="bg-dark-900 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-brand-600 transition-all duration-300 flex items-center gap-2 group shadow-lg shadow-brand-900/10 hover:shadow-brand-600/20"
              >
                Wycena
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 text-dark-900 bg-white/50 rounded-full border border-gray-100"
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-dark-900/20 backdrop-blur-sm md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              exit={{ y: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[2.5rem] p-6 pb-10 shadow-2xl min-h-[60vh] flex flex-col"
            >
              <div className="w-12 h-1.5 bg-gray-100 rounded-full mx-auto mb-8" />
              
              <div className="flex flex-col gap-2">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-display font-bold text-dark-900 py-4 border-b border-gray-50 active:text-brand-600 flex justify-between items-center group"
                  >
                    {item.label}
                    <ArrowRight size={20} className="text-gray-300 group-active:text-brand-600 opacity-0 group-active:opacity-100 -translate-x-4 group-active:translate-x-0 transition-all" />
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto pt-8">
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-dark-900 text-white py-5 rounded-2xl text-lg font-bold shadow-xl shadow-brand-900/20 active:scale-95 transition-transform"
                >
                  Rozpocznij Projekt <ArrowRight />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
