import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

const interestOptions = ["Wdrożenie Sklepu", "Redesign / UX", "Optymalizacja", "Dedykowane Moduły", "Migracja"];
const budgetOptions = ["< 20k PLN", "20k - 50k PLN", "50k - 100k PLN", "> 100k PLN"];

export const Contact: React.FC = () => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>("");

  const toggleInterest = (option: string) => {
    if (selectedInterests.includes(option)) {
      setSelectedInterests(selectedInterests.filter(item => item !== option));
    } else {
      setSelectedInterests([...selectedInterests, option]);
    }
  };

  return (
    <section id="contact" className="py-32 bg-white relative">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left: Content */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
                <h2 className="font-display text-5xl md:text-7xl font-semibold tracking-tighter text-dark-900 mb-8">
                Rozpocznijmy <br/>
                <span className="text-brand-600">współpracę.</span>
                </h2>
                <p className="text-xl text-gray-500 mb-12 leading-relaxed">
                    Wypełnij formularz, a my przygotujemy wstępną estymację i plan działania w ciągu 24h.
                </p>

                <div className="space-y-8 border-t border-gray-100 pt-12">
                    <div>
                        <p className="text-sm font-bold uppercase text-gray-400 mb-2">Email</p>
                        <a href="mailto:hello@time4ecommerce.pl" className="text-2xl font-medium text-dark-900 hover:text-brand-600 transition-colors">hello@time4ecommerce.pl</a>
                    </div>
                    <div>
                        <p className="text-sm font-bold uppercase text-gray-400 mb-2">Biuro</p>
                        <p className="text-xl text-dark-900">Warszawa, ul. Prosta 51</p>
                    </div>
                </div>
            </div>
          </div>

          {/* Right: Project Starter Form */}
          <div className="lg:col-span-7">
            <div className="bg-surface-50 rounded-[2.5rem] p-8 md:p-12 shadow-premium">
              <form className="space-y-10">
                
                {/* Section 1: Interests */}
                <div className="space-y-4">
                    <label className="text-sm font-bold uppercase tracking-wide text-gray-400">Czego potrzebujesz?</label>
                    <div className="flex flex-wrap gap-3">
                        {interestOptions.map((option) => (
                            <button
                                type="button"
                                key={option}
                                onClick={() => toggleInterest(option)}
                                className={`px-6 py-3 rounded-full text-sm font-medium border transition-all duration-300 ${
                                    selectedInterests.includes(option)
                                    ? 'bg-dark-900 text-white border-dark-900 shadow-lg'
                                    : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
                                }`}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Section 2: Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-wide text-gray-400">Imię i Nazwisko</label>
                        <input 
                        type="text" 
                        className="w-full bg-white border border-gray-200 rounded-xl p-4 text-dark-900 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all placeholder-gray-300"
                        placeholder="Jan Kowalski"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-wide text-gray-400">Email Firmowy</label>
                        <input 
                        type="email" 
                        className="w-full bg-white border border-gray-200 rounded-xl p-4 text-dark-900 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all placeholder-gray-300"
                        placeholder="jan@firma.pl"
                        />
                    </div>
                </div>

                {/* Section 3: Budget */}
                <div className="space-y-4">
                    <label className="text-sm font-bold uppercase tracking-wide text-gray-400">Przewidywany budżet</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {budgetOptions.map((option) => (
                            <button
                                type="button"
                                key={option}
                                onClick={() => setSelectedBudget(option)}
                                className={`px-4 py-3 rounded-xl text-sm font-medium border transition-all duration-300 flex items-center justify-center gap-2 ${
                                    selectedBudget === option
                                    ? 'bg-brand-50 text-brand-700 border-brand-500 ring-1 ring-brand-500'
                                    : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
                                }`}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Section 4: Message */}
                <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wide text-gray-400">Dodatkowe informacje</label>
                    <textarea 
                    rows={3}
                    className="w-full bg-white border border-gray-200 rounded-xl p-4 text-dark-900 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all placeholder-gray-300 resize-none"
                    placeholder="Opisz krótko swój projekt..."
                    ></textarea>
                </div>
                
                <div className="pt-4">
                  <button className="w-full bg-brand-600 text-white py-5 rounded-xl text-lg font-bold hover:bg-brand-700 transition-colors shadow-lg shadow-brand-500/30 flex items-center justify-center gap-3 group">
                    Wyślij zapytanie 
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-center text-xs text-gray-400 mt-4">
                    Klikając, akceptujesz politykę prywatności. Odpisujemy zazwyczaj do 2h.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};