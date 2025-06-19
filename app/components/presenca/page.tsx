import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageCircle } from "lucide-react";
import Image from "next/image";

export function Confirmacao() {
  const phoneNumber = "+5547917148​03";
  const whatsappMessage =
    "Olá! Gostaria de confirmar minha presença no casamento.";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(
    /\D/g,
    ""
  )}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-rose-50 to-amber-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-stone-700 mb-6">
          Confirmação de Presença
        </h2>
        <div className="w-24 h-px bg-rose-300 mx-auto mb-8"></div>

        <Card className="bg-white/90 border-rose-200 shadow-lg overflow-hidden">
          <CardContent className="p-0">
            <div className="relative h-64 md:h-80 w-full">
              <Image
                src="/image copy 11.png"
                alt="Foto do casal"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="p-8">
              <p className="text-xl text-stone-700 mb-8 leading-relaxed font-medium">
                Vocês são muito importantes para nós.
              </p>

              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Para que possamos organizar tudo, pedimos que confirme sua
                presença no número{" "}
                <strong className="text-rose-500">(47) 99171-4803</strong> até o
                dia <strong className="text-rose-500">1º de novembro</strong>.
              </p>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Informações de contato */}
                <div className="space-y-6">
                  <div className="flex items-center justify-center gap-4 text-stone-700">
                    <Phone className="w-6 h-6 text-rose-400" />
                    <span className="text-xl font-medium">(47) 99171-4803</span>
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition-colors duration-200 font-medium shadow-lg hover:shadow-xl"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Confirmar pelo WhatsApp
                  </a>
                </div>

                {/* QR Code */}
                <div className="flex flex-col items-center space-y-4">
                  <p className="text-sm text-stone-600 font-medium">
                    Ou escaneie o QR Code:
                  </p>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <Image
                      src="/image copy 12.png"
                      alt="QR Code para WhatsApp"
                      width={150}
                      height={150}
                      className="w-32 h-32 md:w-40 md:h-40"
                    />
                  </div>
                  <p className="text-xs text-stone-500 text-center max-w-xs">
                    Escaneie com a câmera do seu celular para abrir o WhatsApp
                    diretamente
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
