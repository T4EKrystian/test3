import React from 'react';
import { ShoppingBag, Facebook, Linkedin, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary-600 text-white p-1.5 rounded-lg">
                <ShoppingBag size={20} />
              </div>
              <span className="text-lg font-bold text-secondary-900">Time4eCommerce</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Tworzymy nowoczesne i skuteczne sklepy internetowe. Twój partner w cyfrowej transformacji sprzedaży.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-secondary-900 mb-4">Oferta</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-primary-600 transition-colors">Wdrożenia PrestaShop</a></li>
              <li><a href="#" className="hover:text-primary-600 transition-colors">Integracje B2B</a></li>
              <li><a href="#" className="hover:text-primary-600 transition-colors">Audyty UX/UI</a></li>
              <li><a href="#" className="hover:text-primary-600 transition-colors">Optymalizacja szybkości</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-secondary-900 mb-4">Firma</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-primary-600 transition-colors">O nas</a></li>
              <li><a href="#" className="hover:text-primary-600 transition-colors">Realizacje</a></li>
              <li><a href="#" className="hover:text-primary-600 transition-colors">Kariera</a></li>
              <li><a href="#" className="hover:text-primary-600 transition-colors">Kontakt</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-secondary-900 mb-4">Informacje</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-primary-600 transition-colors">Polityka Prywatności</a></li>
              <li><a href="#" className="hover:text-primary-600 transition-colors">Regulamin</a></li>
              <li><a href="#" className="hover:text-primary-600 transition-colors">RODO</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Time4eCommerce. Wszelkie prawa zastrzeżone.
          </p>
          <p className="text-xs text-gray-400">
            Designed with passion for e-commerce.
          </p>
        </div>
      </div>
    </footer>
  );
};