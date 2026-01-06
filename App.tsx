
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Storytelling from './components/Storytelling';
import HumanizedBanner from './components/HumanizedBanner';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0f1e] text-slate-200 selection:bg-teal-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Storytelling />
        <HumanizedBanner />
        
        <section id="benefits" className="py-20 bg-[#0a0f1e]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="w-16 h-16 bg-teal-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-500 group-hover:text-slate-950 transition-all duration-300 border border-teal-500/20">
                  <svg className="w-8 h-8 text-teal-400 group-hover:text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Ganhe Tempo</h3>
                <p className="text-slate-400">Não gaste mais horas tentando aprender design. Foque em fechar vendas enquanto nós cuidamos do visual.</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-teal-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-500 group-hover:text-slate-950 transition-all duration-300 border border-teal-500/20">
                  <svg className="w-8 h-8 text-teal-400 group-hover:text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Profissionalismo</h3>
                <p className="text-slate-400">Sua vitrine digital passará confiança imediata para novos clientes com artes harmônicas e de alta qualidade.</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-teal-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-500 group-hover:text-slate-950 transition-all duration-300 border border-teal-500/20">
                  <svg className="w-8 h-8 text-teal-400 group-hover:text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Legendas que Vendem</h3>
                <p className="text-slate-400">Nada de posts sem texto. Escrevemos legendas que convidam o cliente a agir e comprar de você.</p>
              </div>
            </div>
          </div>
        </section>

        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
