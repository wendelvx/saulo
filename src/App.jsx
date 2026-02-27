import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import TheGap from "./sections/TheGap";
import Experience from "./sections/Experience";
import Methodology from "./sections/Methodology";
import SocialProof from "./sections/SocialProof";
import CostOfInaction from "./sections/CostOfInaction";
import FAQ from "./sections/FAQ";
import Footer from "./components/Footer"; // Importando o novo Footer
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
      <Experience />
      <Methodology />
      <SocialProof />
      <CostOfInaction />
      <FAQ />

      {/* Footer Componentizado */}
      <Footer />
      
    </main>
  );
}

export default App;