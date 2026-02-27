import { motion } from "framer-motion";
import { Dumbbell, UtensilsOff, ZapOff } from "lucide-react";

const cards = [
  {
    title: "Treino sem Dieta",
    description: "Você se esforça na academia, mas o espelho não muda porque falta o combustível e a recuperação correta.",
    icon: <Dumbbell className="text-brand-lime" size={32} />
  },
  {
    title: "Dieta sem Treino",
    description: "Você perde peso, mas fica com aspecto de flacidez e sem energia, perdendo massa magra essencial.",
    icon: <UtensilsOff className="text-brand-lime" size={32} />
  },
  {
    title: "Falta de Ajuste",
    description: "Estratégias genéricas que não consideram sua bioquímica individual. O resultado? Estagnação.",
    icon: <ZapOff className="text-brand-lime" size={32} />
  }
];

export default function TheGap() {
  return (
    <section className="py-24 px-6 bg-[#0F0F0F]">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl lg:text-5xl font-display font-black mb-6 uppercase tracking-tight">
            Por que <span className="text-brand-lime">90% das pessoas</span> falham no longo prazo?
          </h2>
          <p className="text-gray-400 text-lg">
            O erro não está na sua força de vontade, mas no abismo entre o que você come e como você treina. Sem integração, não há evolução.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl bg-brand-black border border-white/5 hover:border-brand-lime/30 transition-colors group"
            >
              <div className="mb-6 p-3 w-fit rounded-lg bg-brand-lime/5 group-hover:bg-brand-lime/10 transition-colors">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-brand-lime transition-colors">
                {card.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}