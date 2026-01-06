
import React, { useState } from 'react';
import { PACKAGES, WHATSAPP_NUMBER } from '../constants';
import { PricingPackage } from '../types';

const Pricing: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<PricingPackage | null>(null);

  const handleSelect = (pkg: PricingPackage) => {
    setSelectedPackage(pkg);
    const message = encodeURIComponent(
      `Olá Mercúrio Publicidade! Quero parar de perder tempo e contratar o pacote *${pkg.name}* AGORA.\n\n` +
      `*Detalhes:* \n` +
      `- Volume: ${pkg.artsPerType * 2} Artes Totais\n` +
      `- Valor: R$ ${pkg.price},00\n\n` +
      `Quais são os próximos passos para dominarmos meu nicho?`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <section id="pricing" className="py-24 bg-[#0a0f1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">O Preço do Sucesso</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Compare o valor do investimento com o custo de continuar sendo ignorado pelo seu público.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PACKAGES.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`relative flex flex-col bg-white/5 backdrop-blur-xl rounded-[2rem] p-10 shadow-2xl transition-all hover:translate-y-[-10px] border-2 ${pkg.popular ? 'border-teal-500 bg-teal-500/10' : 'border-white/10'}`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-10 -translate-y-1/2 bg-teal-500 text-slate-950 text-xs font-black uppercase tracking-widest px-6 py-2 rounded-full shadow-2xl">
                  Poder de Escala
                </div>
              )}
              
              <div className="mb-10">
                <h3 className="text-3xl font-black text-white mb-3 uppercase tracking-tight">{pkg.name}</h3>
                <p className="text-slate-400 text-lg leading-tight h-12 font-medium">{pkg.description}</p>
                
                <div className="mt-10 flex flex-col">
                  <div className="text-6xl md:text-7xl font-black text-white tracking-tighter leading-none mb-2">
                    {pkg.artsPerType * 2} <span className="text-2xl font-black text-teal-400 block mt-1">ARTES</span>
                  </div>
                  <div className="text-slate-500 text-sm font-bold uppercase tracking-widest">
                    Postagem Profissional Completa
                  </div>
                </div>

                <div className="mt-8 flex items-baseline gap-2">
                  <span className="text-3xl font-black text-white">R$ {pkg.price}</span>
                  <span className="text-slate-500 text-sm font-bold uppercase tracking-tighter">Investimento Único</span>
                </div>
              </div>

              <ul className="flex-1 space-y-5 mb-10">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-slate-200 font-medium">
                    <svg className="h-6 w-6 text-teal-400 shrink-0 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleSelect(pkg)}
                className={`w-full py-5 px-8 rounded-2xl font-black text-xl transition-all shadow-xl uppercase tracking-tighter ${
                  pkg.popular 
                    ? 'bg-teal-500 text-slate-950 hover:bg-teal-400 hover:scale-105' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Quero Vender Agora
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
