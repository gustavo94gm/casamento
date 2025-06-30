import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Music, MapPin, Calendar, CircleAlert } from "lucide-react";

export default function Evento() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-rose-50 to-amber-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-stone-700 mb-6">
            Detalhes do Evento
          </h2>
          <div className="w-24 h-px bg-rose-300 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Ceremony */}
            <Card className="bg-white/90 border-rose-200 shadow-lg">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-rose-400" />
                  </div>
                  <h3 className="font-serif text-2xl text-stone-700 mb-2">
                    Cerimônia
                  </h3>
                </div>

                <div className="space-y-6">
                  {/* Church Image */}
                  <div className="relative overflow-hidden rounded-lg shadow-md border-2 border-rose-200/50">
                    <Image
                      src="/image (3).png"
                      alt="Igreja Evangélica de Confissão Luterana de Ivoti"
                      width={400}
                      height={250}
                      className="w-full h-[28rem] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/20 to-transparent"></div>
                  </div>

                  {/* Ceremony Details */}
                  <div className="space-y-4 text-stone-600">
                    <div className="bg-rose-50/50 rounded-lg p-4">
                      <p className="text-sm leading-relaxed mb-3">
                        <strong>
                          Nossa cerimônia ocorrerá na Igreja Evangélica de
                          Confissão Luterana de Ivoti, às 19h.
                        </strong>
                      </p>
                      <p className="text-sm flex leading-relaxed text-amber-700">
                        <div className="flex mr-2">
                          <CircleAlert className="w-5 h-5 text-amber-700" />
                        </div>{" "}
                        A igreja não possui estacionamento próprio, por isso
                        sugerimos que cheguem com 20 minutos de antecedência
                        para encontrarem um local próximo e não perderem nenhum
                        momento!
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-rose-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-sm">
                          Igreja Evangélica de Confissão Luterana
                        </p>
                        <p className="text-xs text-stone-500 mt-1">
                          R. Pastor Ernesto Schlieper, 100 - Sete de Setembro,
                          Ivoti - RS
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-rose-400" />
                      <span className="text-sm">
                        20 de dezembro de 2025 - 19:00
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reception */}
            <Card className="bg-white/90 border-rose-200 shadow-lg">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Music className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="font-serif text-2xl text-stone-700 mb-2">
                    Recepção
                  </h3>
                </div>

                <div className="space-y-6">
                  {/* Reception Details */}
                  <div className="space-y-4 text-stone-600">
                    <div className="bg-amber-50/50 rounded-lg p-4">
                      <p className="text-sm leading-relaxed">
                        <strong>
                          Vocês estão convidados a se dirigir ao Espaço
                          Naturelle.
                        </strong>
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-sm">Espaço Naturelle</p>
                        <p className="text-xs text-stone-500 mt-1">
                          Rua Flores do Campo, 170, Ivoti - RS
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-amber-600" />
                      <span className="text-sm">Logo após a cerimônia</span>
                    </div>
                  </div>

                  {/* Reception Venue Image */}
                  <div className="relative overflow-hidden rounded-lg shadow-md border-2 border-amber-200/50">
                    <Image
                      src="/image (1).png"
                      alt="Espaço Naturelle"
                      width={400}
                      height={250}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent"></div>
                  </div>

                  {/* Maps Button */}
                  <div className="mt-4">
                    <a
                      href="https://www.google.com/maps/place/Espa%C3%A7o+Naturelle/@-29.5936667,-51.1824574,18.71z/data=!4m6!3m5!1s0x95195b9f2781259f:0x2e17dc7b34324468!8m2!3d-29.5946505!4d-51.1823146!16s%2Fg%2F11sbx5bd__?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium w-full justify-center"
                    >
                      <MapPin className="w-4 h-4" />
                      Abrir no Google Maps
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Connection Image - Third Element */}
          <div className="flex justify-center">
            <Card className="bg-white/90 border-amber-200 shadow-lg w-full max-w-4xl">
              <CardContent className="p-6">
                <div className="relative overflow-hidden rounded-xl shadow-md border-2 border-amber-200/50">
                  <Image
                    src="/image copy 6.png"
                    alt="Conexão cerimônia e recepção"
                    width={1920}
                    height={1080}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent"></div>

                  {/* Decorative overlay */}
                  <div className="absolute top-4 right-4">
                    <div className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center">
                      <Heart className="w-4 h-4 text-rose-400" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
