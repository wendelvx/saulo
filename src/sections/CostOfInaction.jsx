import { motion } from "framer-motion";

export default function CostOfInaction() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-brand-black to-[#050505] text-center">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-12 rounded-[40px] border border-white/5 bg-[#080808] relative overflow-hidden"
        >
          {/* Efeito de brilho sutil ao fundo */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-red-500/5 blur-[100px] rounded-full" />
          
          <h3 className="text-2xl lg:text-4xl font-display font-black mb-6 uppercase">
            Quanto custa continuar <br />
            <span className="text-red-500">treinando errado</span> por mais 2 anos?
          </h3>
          <p className="text-gray-400 text-lg mb-8">
            O tempo é o único recurso que você não recupera. O custo de não decidir hoje é somar mais meses de estagnação e frustração ao seu histórico.
          </p>
          <div className="h-px w-24 bg-brand-lime mx-auto mb-8" />
          <p className="text-brand-lime font-bold text-xl uppercase italic">
            A decisão mais cara é não fazer nada.
          </p>
        </motion.div>
      </div>
    </section>
  );
}