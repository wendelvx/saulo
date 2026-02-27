import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { 
    q: "Qual a diferença real entre o presencial e o online?", 
    a: "A precisão técnica é a mesma. O acompanhamento presencial (Juazeiro do Norte) oferece o ajuste físico direto, enquanto o online utiliza tecnologia de análise de movimento para garantir que a distância não comprometa sua evolução e segurança." 
  },
  { 
    q: "Vou gastar muito com suplementos?", 
    a: "Pelo contrário. O planejamento serve justamente para otimizar o seu bolso. Você só investe no que a alimentação sólida não consegue suprir, eliminando o desperdício de dinheiro com marketing de produtos desnecessários." 
  },
  { 
    q: "Por que um iniciante deveria investir nisso agora?", 
    a: "O maior prejuízo de quem começa sozinho é o tempo perdido e o risco de lesão. Ter um plano unificado desde o dia um é o investimento mais inteligente para acelerar o resultado e economizar meses de tentativas frustradas." 
  },
  { 
    q: "Como o plano é gerenciado no dia a dia?", 
    a: "Tudo é centralizado em um aplicativo exclusivo. Seu treino e dieta rodam em sincronia: a comida serve de combustível exato para a carga de cada dia, permitindo um monitoramento real e constante da sua performance." 
  },
  { 
    q: "Tenho lesão ou patologia, posso treinar?", 
    a: "Nesse cenário, o método deixa de ser opcional e se torna obrigatório. A biomecânica protege a sua estrutura enquanto a bioquímica auxilia na recuperação. O custo de treinar sem esse cuidado é agravar o quadro e ser forçado a parar." 
  },
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section id="faq" className="py-24 px-6 bg-brand-black">
      <div className="container mx-auto max-w-3xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* font-display para o título principal */}
          <h2 className="text-3xl lg:text-5xl font-display font-black uppercase tracking-tight italic text-white">
            Dúvidas <span className="text-brand-lime">Frequentes</span>
          </h2>
          {/* font-body para o texto de suporte */}
          <p className="font-body text-gray-500 mt-4 italic text-lg">
            Esclarecimentos sobre o custo do erro e a eficiência do investimento.
          </p>
        </motion.div>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-white/10">
              <button 
                onClick={() => setActive(active === i ? null : i)}
                className="w-full py-6 flex justify-between items-center text-left hover:text-brand-lime transition-all group"
              >
                {/* font-display para as perguntas */}
                <span className={`text-lg font-display font-bold transition-colors ${active === i ? 'text-brand-lime' : 'text-white uppercase tracking-tighter'}`}>
                  {faq.q}
                </span>
                <div className={`transition-transform duration-300 ${active === i ? 'rotate-180 text-brand-lime' : 'text-gray-500'}`}>
                  {active === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <AnimatePresence>
                {active === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    {/* font-body para as respostas */}
                    <p className="font-body pb-6 text-gray-400 leading-relaxed text-base border-l-2 border-brand-lime pl-4">
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