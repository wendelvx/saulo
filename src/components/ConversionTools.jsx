import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function ConversionTools() {
  const whatsappUrl = "https://wa.me/558899991074?text=Olá%20Saulo%2C%20vim%20pelo%20site%20e%20quero%20entender%20como%20funciona%20a%20estratégia%20integrada.";

  return (
    <>
      {/* Botão Flutuante (Desktop) - Fade In com Scale */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hidden md:flex items-center justify-center"
      >
        <MessageCircle size={28} />
      </motion.a>

      {/* Sticky Mobile CTA (Mobile) - Fade In Up Elegante */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
        className="fixed bottom-0 left-0 w-full p-4 bg-black/80 backdrop-blur-md border-t border-white/10 z-50 md:hidden"
      >
        <a 
          href={whatsappUrl}
          className="w-full bg-brand-lime text-black py-4 rounded-xl font-bold flex items-center justify-center gap-2 text-sm uppercase tracking-wider shadow-[0_-10px_30px_rgba(0,0,0,0.5)]"
        >
          <MessageCircle size={18} />
          Falar com Saulo no WhatsApp
        </a>
      </motion.div>
    </>
  );
}