import { motion } from "framer-motion";

export default function CostOfInaction() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-brand-black to-[#050505] text-center">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-12 rounded-[40px] border border-white/5 bg-[#080808] relative overflow-hidden"
        >
          {/* Efeito de brilho sutil ao fundo */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-red-500/5 blur-[100px] rounded-full" />
          
          {/* Título com fade-in up */}
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl lg:text-4xl font-display font-black mb-6 uppercase"
          >
            Quanto custa continuar <br />
            <span className="text-red-500">treinando errado</span> por mais 2 anos?
          </motion.h3>

          {/* Texto com fade-in up e delay */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 text-lg mb-8"
          >
            O tempo é o único recurso que você não recupera. O custo de não decidir hoje é somar mais meses de estagnação e frustração ao seu histórico.
          </motion.p>

          {/* Linha divisória com fade-in */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="h-px w-24 bg-brand-lime mx-auto mb-8" 
          />

          {/* Frase final com fade-in up e delay */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-brand-lime font-bold text-xl uppercase italic"
          >
            A decisão mais cara é não fazer nada.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}