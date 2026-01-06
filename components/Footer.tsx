
import React from 'react';
import { WHATSAPP_NUMBER } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="mb-8 flex flex-col items-center">
           <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-2xl bg-slate-800 overflow-hidden shadow-lg border border-teal-900/50">
               <svg viewBox="0 0 100 100" className="w-12 h-12">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#14b8a6" strokeWidth="2" />
                  <path d="M50 10 L50 90 M10 50 L90 50" stroke="#14b8a6" strokeWidth="1" />
                  <circle cx="50" cy="50" r="15" fill="#f59e0b" />
                  <path d="M30 70 Q50 60 70 70" stroke="#0ea5e9" strokeWidth="4" fill="none" />
               </svg>
            </div>
           <span className="text-2xl font-bold text-white tracking-tight">
              Mercúrio <span className="text-teal-500">Publicidade</span>
            </span>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8 text-sm uppercase tracking-widest font-semibold">
          <a href="#story" className="hover:text-white transition-colors">A Jornada</a>
          <a href="#benefits" className="hover:text-white transition-colors">Vantagens</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pacotes</a>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="hover:text-white transition-colors">WhatsApp</a>
        </div>
        <div className="border-t border-slate-800 pt-8">
          <p>© {new Date().getFullYear()} Mercúrio Publicidade. Transformando presença digital em resultados reais.</p>
          <p className="text-xs mt-2 italic">Dúvidas? Entre em contato pelo WhatsApp: +55 (67) 9894-9484</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
