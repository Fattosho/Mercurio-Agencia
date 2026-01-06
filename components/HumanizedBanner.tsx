
import React from 'react';

const HumanizedBanner: React.FC = () => {
  return (
    <section className="bg-slate-950 py-20 text-white overflow-hidden relative border-y border-white/5">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[500px] h-[500px] bg-teal-500/10 rounded-full opacity-30 filter blur-[100px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase">
          Gente de verdade gera <span className="text-teal-400">lucro de verdade.</span>
        </h2>
        <p className="text-slate-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium">
          Odeia falar com bots? Nós também. Na <strong>Mercúrio Publicidade</strong>, você tem acesso direto aos especialistas. Sem intermediários, sem desculpas. Apenas resultados focados na sua realidade comercial.
        </p>
        <div className="mt-12 inline-flex items-center gap-4 bg-teal-500/10 border border-teal-500/20 px-8 py-4 rounded-2xl">
           <div className="flex -space-x-3">
              <img src="https://i.pravatar.cc/150?u=4" className="w-12 h-12 rounded-full border-2 border-slate-950" alt="Specialist 1" />
              <img src="https://i.pravatar.cc/150?u=5" className="w-12 h-12 rounded-full border-2 border-slate-950" alt="Specialist 2" />
           </div>
           <span className="text-teal-400 font-black uppercase tracking-widest text-sm">Time de Especialistas Ativo</span>
        </div>
      </div>
    </section>
  );
};

export default HumanizedBanner;
