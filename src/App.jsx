import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import TheGap from "./sections/TheGap";
import Experience from "./sections/Experience"; // Nova Seção
import Methodology from "./sections/Methodology";
import SocialProof from "./sections/SocialProof";
import CostOfInaction from "./sections/CostOfInaction"; // Nova Seção
import FAQ from "./sections/FAQ";
import ConversionTools from "./components/ConversionTools";

function App() {
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="bg-brand-black min-h-screen text-brand-ice selection:bg-brand-lime selection:text-black antialiased">
      
      {/* Progress Bar Premium */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-brand-lime origin-left z-[110] shadow-[0_0_15px_rgba(217,255,0,0.6)]"
        style={{ scaleX }}
      />

      {/* Elementos Fixos */}
      <Navbar />
      <ConversionTools />

      {/* Seções de Conteúdo */}
      <Hero />
      
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      <TheGap />

      {/* Experiência Mental: Onde o usuário se visualiza no projeto */}
      <Experience />

      <Methodology />

      <SocialProof />

      {/* Gatilho de Urgência: O impacto de não agir agora */}
      <CostOfInaction />

      <FAQ />

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 bg-black text-center space-y-4 pb-32 md:pb-20">
        <div className="font-display font-black text-xl opacity-50">
          SAULO <span className="text-brand-lime italic font-light">VITORINO</span>
        </div>
        <p className="text-gray-600 text-xs max-w-xs mx-auto">
          CREF 000000-G/XX | CRN 00000/P<br />
          Estratégia Integrada • Presencial & Online
        </p>
        <p className="text-[10px] text-gray-800 uppercase tracking-[0.3em] pt-8">
          Desenvolvido com Tecnologia Premium
        </p>
      </footer>
    </main>
  );
}

export default App;