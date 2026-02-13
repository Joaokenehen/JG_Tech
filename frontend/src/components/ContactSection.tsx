import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-12 rounded-[2.5rem] bg-slate-900/50 border border-slate-800 relative overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
          
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Quer conversar? <br />
            <span className="text-cyan-500">Me envie um e-mail!</span>
          </h2>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-xl mx-auto mb-10">
            Estou sempre aberto a novos desafios, parcerias ou apenas para trocar uma ideia sobre arquitetura de software.
          </p>

          <motion.a
            href="mailto:joao_quennehen@outlook.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-slate-950 font-black rounded-2xl text-xl hover:bg-cyan-500 hover:text-white transition-all shadow-2xl shadow-white/5"
          >
            <Mail size={24} />
            Enviar E-mail
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};