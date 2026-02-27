import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function ConversionTools() {
  const whatsappUrl = "https://wa.me/558899991074?text=Olá Saulo, vim pelo site e quero entender como funciona a estratégia integrada.";

  return (
    <>
      {/* Botão Flutuante (Desktop e Mobile) */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hidden md:flex items-center justify-center"
      >
        <MessageCircle size={28} />
      </motion.a>

      {/* Sticky Mobile CTA (Apenas Mobile) */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-black/80 backdrop-blur-md border-t border-white/10 z-50 md:hidden">
        <a 
          href={whatsappUrl}
          className="w-full bg-brand-lime text-black py-4 rounded-xl font-bold flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
        >
          <MessageCircle size={18} />
          Falar com Saulo no WhatsApp
        </a>
      </div>
    </>
  );
}