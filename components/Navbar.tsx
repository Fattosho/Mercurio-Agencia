
import React from 'react';
import { WHATSAPP_NUMBER } from '../constants';

const Navbar: React.FC = () => {
  const genericMessage = encodeURIComponent("Olá Mercúrio Publicidade! Vi o site e gostaria de entender como vocês podem transformar o meu Instagram.");
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${genericMessage}`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f1e]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-800/50 overflow-hidden shadow-lg border border-teal-500/20">
               <svg viewBox="0 0 100 100" className="w-10 h-10">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#14b8a6" strokeWidth="2" />
                  <path d="M50 10 L50 90 M10 50 L90 50" stroke="#14b8a6" strokeWidth="1" />
                  <circle cx="50" cy="50" r="15" fill="#f59e0b" />
                  <path d="M30 70 Q50 60 70 70" stroke="#0ea5e9" strokeWidth="4" fill="none" />
               </svg>
            </div>
            <span className="text-xl font-extrabold tracking-tight text-white">
              Mercúrio <span className="text-teal-400">Publicidade</span>
            </span>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#story" className="text-slate-300 hover:text-teal-400 font-medium transition-colors">A Jornada</a>
            <a href="#benefits" className="text-slate-300 hover:text-teal-400 font-medium transition-colors">Vantagens</a>
            <a href="#pricing" className="text-slate-300 hover:text-teal-400 font-medium transition-colors">Planos</a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-teal-500 text-slate-950 px-6 py-2.5 rounded-xl font-bold hover:bg-teal-400 transition-all shadow-md">
              Falar com Especialista
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
