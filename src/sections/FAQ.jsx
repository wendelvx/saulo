import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "Preciso de suplementos?", a: "Não obrigatoriamente. A suplementação entra apenas para facilitar sua rotina ou cobrir lacunas que a alimentação sólida não consegue suprir estrategicamente." },
  { q: "Sou iniciante, serve para mim?", a: "Com certeza. O acompanhamento integrado é ideal para quem está começando, pois evita que você perca tempo com erros comuns de treino e dieta." },
  { q: "Como funciona o acesso?", a: "Todo o seu plano (treino, dieta e suporte) é entregue via aplicativo exclusivo, com vídeos demonstrativos de cada exercício." },
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section className="py-24 px-6 bg-[#0A0A0A]">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-display font-black mb-12 text-center uppercase tracking-tight">
          Dúvidas <span className="text-brand-lime">Frequentes</span>
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-white/10">
              <button 
                onClick={() => setActive(active === i ? null : i)}
                className="w-full py-6 flex justify-between items-center text-left hover:text-brand-lime transition-colors"
              >
                <span className="text-lg font-bold">{faq.q}</span>
                {active === i ? <Minus size={20} /> : <Plus size={20} />}
              </button>
              
              <AnimatePresence>
                {active === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-gray-500 leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}