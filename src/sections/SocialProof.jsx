import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Carlos M.", text: "A integração entre treino e dieta mudou meu shape em 3 meses o que não mudou em 2 anos.", result: "Menos 8kg de gordura" },
  { name: "Ana Paula", text: "Pela primeira vez um profissional entende que minha rotina é corrida e ajustou tudo.", result: "Mais disposição" },
  { name: "Lucas R.", text: "O foco na biomecânica salvou meu ombro. Treino pesado e sem dor agora.", result: "Hipertrofia real" },
  { name: "Mariana S.", text: "Consultoria completa. Não é só um PDF, é um acompanhamento de verdade.", result: "Definição muscular" },
];

export default function SocialProof() {
  return (
    <section id="resultados" className="py-24 bg-brand-black overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-center">
        {/* Título com Fade-in Up */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl lg:text-5xl font-display font-black mb-4 uppercase"
        >
          RESULTADOS QUE <span className="text-brand-lime">FALAM POR SI</span>
        </motion.h2>
        
        {/* Descrição com Fade-in Up e leve delay */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-500"
        >
          O que meus alunos da consultoria integrada estão alcançando:
        </motion.p>
      </div>

      {/* Slider Infinito (Marquee) */}
      <div className="flex overflow-hidden group">
        <motion.div 
          className="flex gap-6 whitespace-nowrap w-max"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ 
            ease: "linear", 
            duration: 20, 
            repeat: Infinity 
          }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <div 
              key={i} 
              className="w-[350px] p-8 rounded-2xl bg-[#121212] border border-white/5 flex-shrink-0"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-brand-lime text-brand-lime" />)}
              </div>
              <p className="text-gray-300 whitespace-normal italic mb-6">"{t.text}"</p>
              <div className="flex justify-between items-center border-t border-white/10 pt-4">
                <span className="font-bold text-white">{t.name}</span>
                <span className="text-brand-lime text-xs font-bold uppercase">{t.result}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Selos de Autoridade */}
      <div className="container mx-auto px-6 mt-24">
        <div className="flex flex-wrap justify-center gap-12 items-center opacity-70">
          <div className="text-center group">
            <div className="w-24 h-24 rounded-full border-2 border-brand-lime/30 flex items-center justify-center mb-4 group-hover:shadow-[0_0_30px_rgba(217,255,0,0.2)] transition-all">
              <span className="text-xs font-black text-brand-lime">CREF</span>
            </div>
            <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Educação Física</p>
          </div>

          <div className="text-center group">
            <div className="w-24 h-24 rounded-full border-2 border-brand-lime/30 flex items-center justify-center mb-4 group-hover:shadow-[0_0_30px_rgba(217,255,0,0.2)] transition-all">
              <span className="text-xs font-black text-brand-lime">CRN</span>
            </div>
            <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Nutrição Clínica</p>
          </div>
        </div>
      </div>
    </section>
  );
}