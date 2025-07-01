import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Heart, Music, Bed } from "lucide-react";

export default function Programacao() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-amber-50 to-rose-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-stone-700 mb-6">
            Cronograma da Recepção
          </h2>
          <div className="w-24 h-px bg-rose-300 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Schedule Timeline */}
          <Card className="bg-white/90 border-rose-200 shadow-lg">
            <CardContent className="p-8">
              <h3 className="font-serif text-2xl text-stone-700 mb-6 text-center">
                Programação da Noite
              </h3>

              <div className="space-y-6">
                {/* Timeline Items */}
                <div className="flex items-center gap-4 p-4 bg-rose-50/50 rounded-lg">
                  <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-medium text-rose-600">
                      20:00
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium text-stone-700">
                      Bem-vindos à celebração no Espaço Naturelle
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-amber-50/50 rounded-lg">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-medium text-amber-600">
                      20:30
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium text-stone-700">
                      Flashs com os noivos
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-rose-50/50 rounded-lg">
                  <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-medium text-rose-600">
                      21:00
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium text-stone-700">
                      Sabores com história
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-amber-50/50 rounded-lg">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-medium text-amber-600">
                      22:30
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium text-stone-700">
                      Momento dançante
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-rose-50/50 rounded-lg">
                  <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-medium text-rose-600">
                      23:59
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium text-stone-700">
                      Amor em doces fatias
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-amber-50/50 rounded-lg">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-medium text-amber-600">
                      02:00
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium text-stone-700">
                      Lanchinho na madrugada
                    </h4>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Right Column - Venue Information and Image */}
          <div className="space-y-8">
            {/* Venue Information */}
            <Card className="bg-white/90 border-amber-200 shadow-lg">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl text-stone-700 mb-6 text-center">
                  Informações do Local
                </h3>

                <div className="space-y-6">
                  <div className="bg-amber-50/50 rounded-lg p-4">
                    <h4 className="font-medium text-stone-700 mb-2 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-amber-600" />
                      Estacionamento
                    </h4>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      O local possui um estacionamento pequeno, mas fiquem
                      tranquilos, pois é bem afastado da cidade e há bastante
                      espaço.
                    </p>
                  </div>

                  <div className="bg-rose-50/50 rounded-lg p-4">
                    <h4 className="font-medium text-stone-700 mb-2 flex items-center gap-2">
                      <Heart className="w-5 h-5 text-rose-400" />
                      Crianças e piscina
                    </h4>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      O local conta com uma piscina, no entanto, pedimos
                      atenção, pois não podemos circular dentro do salão de
                      festas com roupas molhadas. Teremos uma pessoa que ficará
                      de olho nas crianças. Há um espaço com campo de futebol
                      que pode e será utilizado durante toda festa.
                    </p>
                  </div>

                  <div className="bg-green-50/50 rounded-lg p-4">
                    <h4 className="font-medium text-stone-700 mb-3 flex items-center gap-2">
                      <Bed className="w-5 h-5 text-green-600" />
                      Hospedagem
                    </h4>
                    <p className="text-sm text-stone-600 mb-3">
                      Para quem precisa de hospedagem, separamos algumas opções
                      próximas ao local:
                    </p>
                    <div className="space-y-2">
                      <a
                        href="https://kleinvillehoteis.com.br/dois-irmaos/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm text-green-700 hover:text-green-800 hover:underline transition-colors"
                      >
                        • Klein Ville Hotéis - Dois Irmãos
                      </a>
                      <a
                        href="https://www.hotelvisao.com.br/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm text-green-700 hover:text-green-800 hover:underline transition-colors"
                      >
                        • Hotel Visão - Ivoti
                      </a>
                      <a
                        href="https://kolonistenhaus.com.br/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm text-green-700 hover:text-green-800 hover:underline transition-colors"
                      >
                        • Kolonisten Haus - Presidente Lucena
                      </a>
                      <a
                        href="https://all.accor.com/ssr/app/ibis/rates/8175/index.pt-br.shtml?destination=novo-hamburgo-hamburgberg-novo-hamburgo-rs-brazil&compositions=1&dateIn=2025-06-19&dateOut=2025-06-20&nights=1&hideWDR=false&accessibleRoom=false"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm text-green-700 hover:text-green-800 hover:underline transition-colors"
                      >
                        • Ibis - Novo Hamburgo
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Venue Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-lg border-4 border-white/80">
                <Image
                  src="/image copy 7.png"
                  alt="Espaço Naturelle - Vista do local da festa"
                  width={600}
                  height={400}
                  className="w-full h-[370px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent"></div>

                {/* Decorative overlay */}
                <div className="absolute top-6 right-6">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                    <Music className="w-6 h-6 text-amber-600" />
                  </div>
                </div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-rose-200 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-amber-200 rounded-full opacity-50"></div>
              <div className="absolute top-1/3 -left-3 w-6 h-6 bg-rose-300 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
