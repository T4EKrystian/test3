import React from 'react';

const stats = [
  { value: "12+", label: "Lat doświadczenia" },
  { value: "50M+", label: "Przychód klientów" },
  { value: "300+", label: "Projektów" },
];

export const Stats: React.FC = () => {
  return (
    <section className="py-20 border-y border-gray-100 bg-surface-50/50">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <p className="text-sm font-mono uppercase text-gray-400 tracking-wider mb-2">Zaufali nam</p>
            <h3 className="text-2xl font-display font-semibold text-dark-900">
              Liderzy branży e-commerce w Polsce
            </h3>
          </div>
          
          <div className="flex gap-12 md:gap-20">
            {stats.map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-display font-bold text-dark-900 mb-1 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-gray-500 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};