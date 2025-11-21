import React from 'react';
import { ArrowRight } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section className="py-12 bg-white">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-600 rounded-[2.5rem] p-12 md:p-24 text-center md:text-left relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
                
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                <div className="relative z-10 max-w-2xl">
                    <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
                        Gotowy na skok <br/> wydajności?
                    </h2>
                    <p className="text-brand-100 text-lg md:text-xl leading-relaxed">
                        Nie marnuj kolejnego miesiąca na rozwiązania, które nie sprzedają. Umów się na bezpłatną konsultację strategiczną.
                    </p>
                </div>

                <div className="relative z-10 shrink-0">
                     <a href="#contact" className="inline-flex items-center gap-3 bg-white text-brand-600 px-8 py-5 rounded-full text-lg font-bold hover:bg-gray-50 transition-colors shadow-xl hover:shadow-2xl transform hover:-translate-y-1 duration-300">
                        Wyceń Projekt
                        <ArrowRight size={20} />
                     </a>
                </div>

            </div>
        </div>
    </section>
  );
};