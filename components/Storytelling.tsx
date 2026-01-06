
import React from 'react';

const Storytelling: React.FC = () => {
  return (
    <section id="story" className="py-24 bg-[#0a0f1e] overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 md:order-1">
             <div className="absolute -left-10 -top-10 w-40 h-40 bg-teal-500/10 rounded-full filter blur-[80px]"></div>
             <img 
               src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
               alt="Análise de Dados e Crescimento" 
               className="rounded-2xl shadow-[0_0_50px_rgba(20,184,166,0.1)] relative z-10 border border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
             />
          </div>
          
          <div className="space-y-8 order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-black text-white leading-none tracking-tighter">
              A verdade dói: seu Instagram <span className="text-teal-400">não serve pra nada</span> se ninguém te vê.
            </h2>
            <div className="space-y-6 text-slate-300 text-xl leading-relaxed">
              <p>
                Cada dia que você passa sem postar conteúdo profissional é um dia que você <strong>deixa dinheiro na mesa.</strong> Ponto final.
              </p>
              <p>
                Enquanto você tenta "dar um jeitinho" no Canva ou espera ter tempo livre que nunca chega, o mercado te engole. Clientes procuram por você, encontram um perfil fantasma e <strong>compram do seu vizinho.</strong>
              </p>
              <p>
                Não estamos aqui para te vender "artes bonitinhas". Estamos aqui para tirar o peso da criação das suas costas e colocar <strong>autoridade</strong> no seu nome.
              </p>
              <div className="p-6 bg-teal-500/5 border-l-4 border-teal-500 rounded-r-xl">
                 <p className="font-bold text-white italic">
                  "O atendimento humanizado não é opcional, é nossa base. Você terá estrategistas reais pensando no seu lucro, não robôs gerando lixo digital."
                </p>
              </div>
              <p className="font-black text-white uppercase tracking-tighter text-2xl">
                Ou você domina o digital, ou ele te enterra. A escolha é sua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Storytelling;
