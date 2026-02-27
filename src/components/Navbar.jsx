import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-[100] border-b border-white/5 bg-black/50 backdrop-blur-xl"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Clique no logo volta para o topo */}
        <a href="#" className="font-display font-black text-xl tracking-tighter">
          SAULO <span className="text-brand-lime italic font-light">VITORINO</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-gray-400">
          <a href="#metodologia" className="hover:text-brand-lime transition-colors">Metodologia</a>
          <a href="#resultados" className="hover:text-brand-lime transition-colors">Resultados</a>
          <a href="#faq" className="hover:text-brand-lime transition-colors">FAQ</a>
        </div>

        <a 
          href="https://wa.me/558899991074?text=Olá Saulo, vim pelo site e quero entender como funciona a estratégia integrada."
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 border border-brand-lime/50 text-brand-lime rounded-full text-xs font-bold hover:bg-brand-lime hover:text-black transition-all"
        >
          CONSULTORIA
        </a>
      </div>
    </motion.nav>
  );
}