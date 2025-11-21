import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '../types';

const faqData: FAQItem[] = [
  {
    question: "Jaki jest minimalny budżet na wdrożenie?",
    answer: "Realizujemy projekty od 25,000 PLN netto. Dedykowane wdrożenia B2B z integracjami ERP zazwyczaj zaczynają się od 50,000 PLN. Stawiamy na jakość i długofalowy zwrot z inwestycji."
  },
  {
    question: "Jak długo trwa wdrożenie sklepu?",
    answer: "Standardowy sklep PrestaShop uruchamiamy w 6-8 tygodni. Zaawansowane systemy B2B lub projekty headless mogą zająć 3-5 miesięcy, w zależności od stopnia skomplikowania integracji."
  },
  {
    question: "Czy zapewniacie wsparcie po wdrożeniu?",
    answer: "Tak. Większość naszych klientów (90%+) decyduje się na stałą opiekę SLA. Gwarantujemy czas reakcji, aktualizacje bezpieczeństwa i ciągły rozwój funkcjonalności w modelu abonamentowym."
  },
  {
    question: "Czy migrujecie dane z innych platform?",
    answer: "Oczywiście. Mamy doświadczenie w migracjach z WooCommerce, Magento, Shoper czy IdoSell. Przenosimy historię zamówień, bazę klientów, produkty i strukturę SEO (z przekierowaniami 301)."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-surface-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-dark-900 mb-4 tracking-tighter">
            Pytania i odpowiedzi
          </h2>
          <p className="text-gray-500">Wszystko, co musisz wiedzieć przed startem.</p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left"
              >
                <span className="text-lg md:text-xl font-medium text-dark-900 pr-8">
                  {item.question}
                </span>
                <span className={`shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                  {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 md:px-8 pb-8 text-gray-500 leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};