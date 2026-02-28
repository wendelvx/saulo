import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Texto e Conteúdo - Mantido EXATAMENTE como você enviou */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 order-2 lg:order-1"
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

          <a 
  href="https://wa.me/558899991074?text=Olá%20Saulo%2C%20vim%20pelo%20site%20e%20quero%20entender%20como%20funciona%20a%20estratégia%20integrada."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-brand-lime text-black px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(217,255,0,0.3)] text-center"
>
  QUERO MINHA CONSULTORIA
</a>
        </motion.div>

        {/* Imagem do Saulo - Enquadramento Moderno e Elegante */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center order-1 lg:order-2"
        >
          {/* Brilho de fundo (Glow) suave */}
          <div className="absolute inset-0 bg-brand-lime/10 blur-[120px] rounded-full" />
          
          {/* Container "Bento" Clean: fundo branco para casar com a foto e borda sutil */}
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-white shadow-2xl">
            <img 
              src="/saulo-vitorino.webp" 
              alt="Saulo Vitorino" 
              className="relative z-10 max-h-[500px] lg:max-h-[600px] w-full object-contain"
            />
            
            {/* Gradiente de fusão: suaviza a base branca da foto com o fundo preto do site */}
            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent z-20 pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}