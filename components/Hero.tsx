
import React from 'react';
import { WHATSAPP_NUMBER } from '../constants';

const Hero: React.FC = () => {
  const genericMessage = encodeURIComponent("Olá Mercúrio Publicidade! Chega de ser invisível. Quero transformar meu Instagram em uma máquina de vendas!");
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${genericMessage}`;

  return (
    <section className="pt-32 pb-32 px-4 overflow-hidden bg-[#0a0f1e]">
      <div className="max-w-7xl mx-auto text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-[800px] h-[800px] bg-teal-500/5 rounded-full blur-[120px] opacity-40"></div>
        
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-teal-400 uppercase bg-teal-500/10 rounded-full border border-teal-500/30">
          Chega de ser invisível no digital
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tighter">
          Seu concorrente está <span className="text-teal-400">roubando</span> seus clientes enquanto você não posta.
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
          O amadorismo custa caro. A <strong>Mercúrio Publicidade</strong> assume sua comunicação para transformar seu Instagram em uma máquina de vendas imparável.
        </p>
        
        <div className="flex justify-center">
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-teal-500 text-slate-950 px-12 py-6 rounded-2xl font-black text-2xl hover:bg-teal-400 transition-all transform hover:scale-105 shadow-[0_20px_50px_rgba(20,184,166,0.3)] uppercase tracking-tight"
          >
            Quero Dominar o Mercado
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
