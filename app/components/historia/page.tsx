import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";

export function Historia() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-amber-50 to-rose-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-stone-700 mb-6">
            Nossa História
          </h2>
          <div className="w-24 h-px bg-rose-300 mx-auto mb-8"></div>

          {/* Text and Image Layout */}
          <div className="grid lg:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
            <div className="lg:col-span-2">
              <p className="text-lg text-stone-600 leading-relaxed text-left">
                Queridos familiares e amigos, <br />
                Esse cantinho virtual é feito de carinho, memórias e spoilers do
                nosso grande dia. Estamos ansiosos para celebrar este momento
                tão especial ao lado de pessoas importantes para nós. Vocês
                fazem parte da nossa trajetória ímpar e par. Aperte o cinto,
                escolha a trilha sonora e embarque conosco nessa estrada chamada
                vida. Ela tem amor, humor, e, se Deus quiser, muitas novas
                histórias.
              </p>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-lg border-4 border-white/80">
                <Image
                  src="/nossa-historia.png"
                  alt="Memórias especiais"
                  width={400}
                  height={256}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/20 to-transparent"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-rose-200 rounded-full opacity-60"></div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-amber-200 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Introduction */}
          <div className="text-center mb-12">
            <p className="text-lg text-stone-600 font-medium">
              Alguns marcos importantes da nossa história...
            </p>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-rose-200"></div>

          <div className="space-y-16">
            {/* Timeline Item 1 - Primeiro Olhar */}
            <div className="flex items-center">
              <div className="w-1/2 pr-8 text-right">
                <Card className="bg-white/80 border-rose-200 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl text-stone-700 mb-2">
                      Primeiro Olhar
                    </h3>
                    <p className="text-stone-600 text-sm">2013</p>
                    <p className="text-stone-600 mt-2">Onde tudo começou...</p>
                  </CardContent>
                </Card>
              </div>
              <div className="w-8 h-8 bg-rose-400 rounded-full border-4 border-white shadow-md z-10"></div>
              <div className="w-1/2 pl-8">
                <div className="relative overflow-hidden rounded-lg shadow-md border-2 border-white/80 max-w-xs">
                  <Image
                    src="/image.png"
                    alt="Primeiro olhar"
                    width={300}
                    height={200}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Timeline Item 2 - Pedido de Namoro */}
            <div className="flex items-center">
              <div className="w-1/2 pr-8">
                <div className="relative overflow-hidden rounded-lg shadow-md border-2 border-white/80 max-w-xs ml-auto">
                  <Image
                    src="/image copy.png"
                    alt="Pedido de namoro"
                    width={300}
                    height={200}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="w-8 h-8 bg-rose-400 rounded-full border-4 border-white shadow-md z-10"></div>
              <div className="w-1/2 pl-8">
                <Card className="bg-white/80 border-rose-200 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl text-stone-700 mb-2">
                      Pedido de Namoro
                    </h3>
                    <p className="text-stone-600 text-sm">2013</p>
                    <p className="text-stone-600 mt-2">O início da jornada</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Timeline Item 3 - Noivado */}
            <div className="flex items-center">
              <div className="w-1/2 pr-8 text-right">
                <Card className="bg-white/80 border-rose-200 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl text-stone-700 mb-2">
                      Noivado
                    </h3>
                    <p className="text-stone-600 text-sm">2020</p>
                    <p className="text-stone-600 mt-2">O pedido especial</p>
                  </CardContent>
                </Card>
              </div>
              <div className="w-8 h-8 bg-rose-400 rounded-full border-4 border-white shadow-md z-10"></div>
              <div className="w-1/2 pl-8">
                <div className="relative overflow-hidden rounded-lg shadow-md border-2 border-white/80 max-w-xs">
                  <Image
                    src="/image copy 2.png"
                    alt="Noivado"
                    width={300}
                    height={200}
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Timeline Item 4 - Casamento */}
            <div className="flex items-center">
              <div className="w-1/2 pr-8">
                <div className="relative overflow-hidden rounded-lg shadow-md border-2 border-white/80 max-w-xs ml-auto">
                  <Image
                    src="/image copy 3.png"
                    alt="Casamento"
                    width={300}
                    height={200}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="w-8 h-8 bg-rose-400 rounded-full border-4 border-white shadow-md z-10">
                <Heart className="w-4 h-4 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="w-1/2 pl-8">
                <Card className="bg-white/80 border-rose-200 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl text-stone-700 mb-2">
                      Casamento
                    </h3>
                    <p className="text-stone-600 text-sm">2025</p>
                    <p className="text-stone-600 mt-2">Nosso grande dia!</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Special Memory Image */}
        <div className="mt-20 text-center">
          <div className="relative inline-block">
            <div className="relative overflow-hidden rounded-2xl shadow-xl border-4 border-white/90">
              <Image
                src="/image copy 4.png"
                alt="Momento especial"
                width={500}
                height={400}
                className="h-auto w-[43rem] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-900/10 to-transparent"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-3 -right-3 w-10 h-10 bg-rose-200 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-amber-200 rounded-full opacity-40"></div>
            <div className="absolute top-1/2 -left-6 w-6 h-6 bg-rose-300 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
