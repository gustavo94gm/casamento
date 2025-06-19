import Image from "next/image";

export function ComCarinho() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-rose-50 to-amber-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-20 bg-gradient-to-b from-rose-400 to-amber-400 rounded-full"></div>
              <div className="pl-8">
                <p className="text-lg text-stone-600 leading-relaxed mb-4">
                  Gostamos muito de celebrar, e temos um apreço especial por
                  aquilo que vem de nossas origens.
                </p>
                <p className="text-lg text-stone-600 leading-relaxed mb-4">
                  Por isso, tudo está pensado com muito carinho e grande parte
                  está sendo preparado pelas nossas mãos e de nossas famílias.
                </p>
                <p className="text-lg text-stone-600 leading-relaxed font-medium">
                  Cada momento tem um toque artesanal e simples. Para nós, as
                  pessoas é que fazem o momento se tornar algo memorável.
                </p>
              </div>
            </div>

            {/* Decorative Quote */}
            <div className="relative mt-8 pl-8">
              <div className="absolute left-0 top-0 text-6xl text-rose-200 font-serif leading-none">
                &ldquo;
              </div>
              <p className="text-stone-500 italic text-sm pl-4">
                Com amor, carinho e as mãos de quem amamos
              </p>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-lg border-4 border-white/80">
              <Image
                src="/image copy 5.png"
                alt="Toque artesanal"
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent"></div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-amber-200 rounded-full opacity-50 animate-bounce"></div>
            <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-rose-200 rounded-full opacity-60"></div>
            <div className="absolute top-1/3 -right-2 w-6 h-6 bg-amber-300 rounded-full opacity-40"></div>

            {/* Artistic border accent */}
            <div className="absolute inset-0 rounded-2xl border-2 border-amber-200/30 transform rotate-1"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
