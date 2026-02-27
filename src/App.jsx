import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import TheGap from "./sections/TheGap";
import Methodology from "./sections/Methodology";
import SocialProof from "./sections/SocialProof";
import FAQ from "./sections/FAQ";
import ConversionTools from "./components/ConversionTools";

function App() {
  // Captura o progresso do scroll (de 0 a 1)
  const { scrollYProgress } = useScroll();
  
  // Cria uma mola (spring) para o movimento não ser travado e parecer "fluido"
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="bg-brand-black min-h-screen text-brand-ice selection:bg-brand-lime selection:text-black antialiased">
      
      {/* Progress Bar Premium 
        - fixed top-0: sempre visível no topo
        - h-1: fina e elegante
        - origin-left: para crescer da esquerda para a direita
        - z-[110]: acima da Navbar (que é z-100)
        - shadow: brilho neon suave para o look premium
      */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-brand-lime origin-left z-[110] shadow-[0_0_15px_rgba(217,255,0,0.6)]"
        style={{ scaleX }}
      />

      {/* Elementos Fixos */}
      <Navbar />
      <ConversionTools />

      {/* Seções de Conteúdo */}
      <Hero />
      
      {/* Divisor Suave entre seções */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      <TheGap />
      <Methodology />
      <SocialProof />
      <FAQ />

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 bg-black text-center space-y-4 pb-32 md:pb-20">
        <div className="font-display font-black text-xl opacity-50">
          SAULO <span className="text-brand-lime italic font-light">VITORINO</span>
        </div>
        <p className="text-gray-600 text-xs max-w-xs mx-auto">
          CREF 000000-G/XX | CRN 00000/P<br />
          Estratégia Integrada de Performance e Saúde.
        </p>
        <p className="text-[10px] text-gray-800 uppercase tracking-[0.3em] pt-8">
          Desenvolvido com Tecnologia Premium
        </p>
      </footer>
    </main>
  );
}

export default App;