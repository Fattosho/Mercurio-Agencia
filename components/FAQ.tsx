
import React, { useState } from 'react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#0a0f1e]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Dúvidas Frequentes</h2>
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === idx ? 'border-teal-500/50 bg-teal-500/5' : 'border-white/10 bg-white/5'}`}>
              <button
                className="w-full flex justify-between items-center p-6 text-left hover:bg-white/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-semibold text-white text-lg">{faq.question}</span>
                <svg
                  className={`w-6 h-6 text-teal-400 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === idx && (
                <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-white/5">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
