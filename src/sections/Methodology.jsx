import { motion } from "framer-motion";
import { Activity, Microscope, CheckCircle2 } from "lucide-react";

export default function Methodology() {
  const points = [
    "Ajuste de macros baseado na carga de treino semanal",
    "Periodização nutricional para fases de ganho ou corte",
    "Suplementação estratégica baseada em exames e objetivos",
    "Correção biomecânica via análise de vídeo (Consultoria)"
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Elemento Visual de Fundo (Glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-lime/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-lime font-bold tracking-[0.2em] text-sm uppercase"
          >
            O Diferencial Técnico
          </motion.span>
          <h2 className="text-4xl lg:text-6xl font-display font-black mt-4 mb-6">
            Metodologia <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Cérebro Único</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Esqueça o nutricionista que não entende de agachamento e o treinador que ignora sua microbiota. Saulo Vitorino une as duas áreas em uma única estratégia integrada.
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
                  <h3 className="text-xl font-bold mb-2 text-white">Biomecânica (CREF)</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Treinos desenhados para a sua estrutura óssea e muscular, focando em máxima tensão mecânica e segurança articular.
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
                  <h3 className="text-xl font-bold mb-2 text-white">Bioquímica (CRN)</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Nutrição funcional que respeita seus hormônios e metabolismo, garantindo energia para o treino e queima calórica eficiente.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Lado Direito: Checklist de Entrega */}
          <div className="lg:pl-12">
            <h4 className="text-2xl font-bold mb-8 text-white">Como funciona a entrega:</h4>
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
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
            
            <div className="mt-10 p-6 rounded-xl border border-brand-lime/20 bg-brand-lime/5">
              <p className="text-brand-lime font-medium text-sm">
                "O resultado estético é apenas o subproduto de um corpo que funciona em perfeita harmonia química e mecânica."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}