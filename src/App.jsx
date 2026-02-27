import Hero from "./sections/Hero";
import TheGap from "./sections/TheGap";
// Importe outras seções conforme criarmos

function App() {
  return (
    <main className="bg-brand-black selection:bg-brand-lime selection:text-black">
      <Hero />
      <TheGap />
      {/* S3: Metodologia virá aqui */}
      <section className="h-[50vh] flex items-center justify-center">
        <p className="text-gray-600 italic">Seção de Metodologia em construção...</p>
      </section>
    </main>
  );
}

export default App;