import { motion } from "framer-motion";
import { ArrowRight, XCircle, CheckCircle2 } from "lucide-react";

export default function Experience() {
  const comparison = {
    before: [
      "Treina pesado, mas o espelho não muda.",
      "Ajusta a dieta no 'feeling' e na tentativa e erro.",
      "Sente que faz muito, mas avança pouco.",
      "Vive em ciclos de motivação e frustração."
    ],
    after: [
      "Cada treino tem uma função metabólica clara.",
      "Cada refeição tem um propósito fisiológico.",
      "Seu corpo responde porque existe coerência.",
      "Você entende o 'porquê' de cada ajuste."
    ]
  };

  return (
    <section className="py-24 px-6 bg-brand-black relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-display font-black uppercase italic">
            A Experiência da <span className="text-brand-lime">Transformação</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Lado: Antes */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/5 relative overflow-hidden group"
          >
            <span className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-6 block">Estado Atual</span>
            <ul className="space-y-6">
              {comparison.before.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-500 group-hover:text-gray-400 transition-colors">
                  <XCircle size={20} className="shrink-0 mt-1 opacity-50" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Lado: Depois */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-8 rounded-3xl bg-brand-lime/5 border border-brand-lime/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <CheckCircle2 size={120} className="text-brand-lime" />
            </div>
            <span className="text-xs font-bold tracking-widest text-brand-lime uppercase mb-6 block">Com Estratégia Integrada</span>
            <ul className="space-y-6">
              {comparison.after.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white">
                  <CheckCircle2 size={20} className="text-brand-lime shrink-0 mt-1" />
                  <span className="text-lg font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}