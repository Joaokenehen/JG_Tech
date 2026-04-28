import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, Check } from 'lucide-react';
import { useState } from 'react';

export const ContactSection = () => {
  const email = "joaokenehen.dev@outlook.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {

    if (copied) return;

    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="inline-flex p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 mb-4">
            <Mail className="w-12 h-12 text-cyan-400" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            VAMOS <span className="text-cyan-500">CONVERSAR?</span>
          </h2>

          <div className="flex flex-col items-center gap-4 pt-8">
            <div className="relative flex flex-col items-center">
              <motion.div 
                className={`group relative ${copied ? 'cursor-default' : 'cursor-pointer'}`}
                onClick={handleCopy}
              >
                <span className="text-sm font-mono text-slate-500 uppercase tracking-[0.3em] mb-2 block">
                  E-mail para contato
                </span>
                <span className={`text-2xl md:text-3xl font-bold transition-colors ${copied ? 'text-cyan-400' : 'text-white group-hover:text-cyan-400'}`}>
                  {email}
                </span>
                
                <div className={`h-px transition-all duration-500 mx-auto mt-2 shadow-[0_0_10px_#06b6d4] ${copied ? 'w-full bg-cyan-400' : 'w-0 group-hover:w-full bg-cyan-500'}`} />

                <AnimatePresence>
                  {copied && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: -40 }}
                      exit={{ opacity: 0 }}
                      className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-cyan-500 text-slate-950 text-sm font-bold rounded-full shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                    >
                      <Check size={14} /> Copiado!
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            <a 
              href={`mailto:${email}`}
              className="mt-6 inline-flex items-center gap-3 px-10 py-5 bg-cyan-500 text-slate-950 font-black rounded-2xl hover:bg-cyan-400 hover:scale-105 transition-all shadow-2xl shadow-cyan-500/20 group"
            >
              ENVIAR MENSAGEM
              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};