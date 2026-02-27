import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Texto e Conteúdo */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-lime/30 bg-brand-lime/10 text-brand-lime text-sm font-bold mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
            CREF + CRN: AUTORIDADE DUPLA
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-display font-black leading-tight mb-6 text-white">
            Onde a dieta e o treino finalmente <span className="text-brand-lime">falam a mesma língua.</span>
          </h1>
          
          <p className="text-lg text-gray-400 mb-8 max-w-lg">
            A estagnação acaba aqui. Uma estratégia única que une bioquímica e biomecânica para transformar seu corpo.
          </p>

          <button className="bg-brand-lime text-black px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(217,255,0,0.3)]">
            QUERO MINHA CONSULTORIA
          </button>
        </motion.div>

        {/* Imagem do Saulo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          {/* Círculo de brilho atrás da foto */}
          <div className="absolute inset-0 bg-brand-lime/20 blur-[120px] rounded-full" />
          
          {/* Substitua pela foto real do Saulo */}
          <img 
            src="/saulo-vitorino.png" 
            alt="Saulo Vitorino" 
            className="relative z-10 max-h-[600px] object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}