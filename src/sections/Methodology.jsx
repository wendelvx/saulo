import { motion } from "framer-motion";
import { Activity, Microscope, CheckCircle2 } from "lucide-react";

export default function Methodology() {
  const points = [
    "Ajuste de macros baseado na sua carga de treino semanal",
    "Periodização nutricional para fases de ganho ou definição",
    "Suplementação estratégica baseada em exames e objetivos",
    "Ajuste técnico refinado (Presencial ou via análise de vídeo)"
  ];

  return (
    <section id="metodologia" className="py-24 px-6 relative overflow-hidden">
      {/* Elemento Visual de Fundo (Glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-lime/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-lime font-bold tracking-[0.2em] text-sm uppercase"
          >
            Meu Diferencial Técnico
          </motion.span>
          <h2 className="text-4xl lg:text-6xl font-display font-black mt-4 mb-6 uppercase italic">
            Metodologia <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Cérebro Único</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Eu elimino o abismo entre a sua alimentação e o seu treino. Em vez de profissionais que não se comunicam, você tem uma <span className="text-white font-medium">estratégia única e integrada</span>, desenhada por quem domina as duas áreas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Lado Esquerdo: Cards Técnicos */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-brand-lime text-black">
                  <Activity size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white italic uppercase">Biomecânica</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Seja no acompanhamento presencial ou na consultoria, cada exercício é ajustado para a sua estrutura, garantindo máxima tensão mecânica com segurança total.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-brand-lime text-black">
                  <Microscope size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white italic uppercase">Bioquímica</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Nutrição funcional que respeita seu metabolismo. O foco é fornecer o substrato exato para sua performance no treino e recuperação acelerada.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Lado Direito: Checklist de Entrega */}
          <div className="lg:pl-12">
            <h4 className="text-2xl font-bold mb-8 text-white uppercase italic tracking-tighter">
              O que você recebe na <br /> Estratégia Integrada:
            </h4>
            <ul className="space-y-4">
              {points.map((point, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <CheckCircle2 size={20} className="text-brand-lime shrink-0" />
                  <span className="text-lg">{point}</span>
                </motion.li>
              ))}
            </ul>
            
            <div className="mt-10 p-6 rounded-xl border border-brand-lime/20 bg-brand-lime/5">
              <p className="text-brand-lime font-medium text-sm italic">
                "Atendimento presencial em Juazeiro Do Norte e consultoria de alto nível para onde você estiver."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}