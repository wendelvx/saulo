export default function Footer() {
  return (
    <footer className="py-20 border-t border-white/5 bg-black text-center space-y-4 pb-32 md:pb-20">
      {/* Logo com font-display */}
      <div className="font-display font-black text-xl opacity-50 tracking-tighter uppercase">
        SAULO <span className="text-brand-lime italic font-light">VITORINO</span>
      </div>

      {/* Credenciais e Texto com font-body */}
      <div className="font-body space-y-2">
        <p className="text-gray-500 text-xs font-bold tracking-widest uppercase">
          CREF 3918/G | CRN 22529/P
        </p>
        <p className="text-gray-600 text-[10px] lg:text-xs max-w-xs mx-auto leading-relaxed">
          Alta Performance e Saúde • Atendimento Presencial & Online
        </p>
      </div>

      <div className="pt-8">
        <p className="font-body text-[9px] text-gray-800 uppercase tracking-[0.4em]">
          Desenvolvido com Tecnologia Premium
        </p>
      </div>
    </footer>
  );
}