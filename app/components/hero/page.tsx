import { Heart, Calendar } from "lucide-react";

export default function PaginaInicial() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-100/80 to-amber-100/80">
      <div className="absolute inset-0 bg-[url('/começo.png')] bg-cover bg-center opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"></div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <Heart className="w-16 h-16 text-rose-400 mx-auto mb-6 animate-pulse" />
          <h1 className="font-serif text-6xl md:text-8xl text-stone-700 mb-4 tracking-wide">
            Alice <span className="text-rose-400">&</span> Vinícius
          </h1>
          <div className="w-32 h-px bg-rose-300 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-stone-600 font-light mb-8">
            Celebrando nosso amor!
          </p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-rose-200">
          <div className="flex items-center justify-center gap-4 text-stone-700 mb-4">
            <Calendar className="w-6 h-6 text-rose-400" />
            <span className="text-2xl font-serif">20 de dezembro de 2025</span>
          </div>
          <div className="flex items-center justify-center gap-4 text-stone-600">
            <span className="text-lg">19:00</span>
            <span className="w-2 h-2 bg-rose-300 rounded-full"></span>
            <span className="text-lg">Ivoti, RS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
