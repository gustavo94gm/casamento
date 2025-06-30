import { Card, CardContent } from "@/components/ui/card";
import { Gift, QrCode } from "lucide-react";
import Image from "next/image";

export default function Presentes() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-rose-50 to-amber-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-serif text-4xl md:text-5xl text-stone-700 mb-6">
          Presentes (Nosso baú de aventuras)
        </h2>
        <div className="w-24 h-px bg-rose-300 mx-auto mb-8"></div>

        <Card className="bg-white/90 border-rose-200 shadow-lg backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="mb-6">
              <Gift className="w-16 h-16 text-rose-400 mx-auto mb-4" />
              <h3 className="font-serif text-2xl text-stone-700 mb-4">
                Família e Amigos
              </h3>
            </div>

            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>Já temos uma caminhada e conquistas juntos.</p>
              <p>
                Se quiser nos presentear, pedimos que seja em dinheiro, pois
                temos muitos sonhos em vista. (Se quiser nos presentear,
                ficaremos gratos por contribuições em dinheiro, pois temos
                muitos sonhos a realizar.)
              </p>
              <p className="font-medium">Agradecemos de coração!</p>
              <p className="text-sm">
                Vocês podem nos presentear via digital, mas também teremos um
                bauzinho no dia da festa.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-rose-200">
              <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center space-x-2 text-stone-700">
                  <QrCode className="w-5 h-5 text-rose-400" />
                  <span className="font-medium">Presente Digital</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <Image
                    src="/image copy 14.png"
                    alt="QR Code para presente digital"
                    width={200}
                    height={200}
                    className="rounded"
                  />
                </div>
                <p className="text-sm text-stone-500">
                  Escaneie o QR Code para presentear digitalmente
                </p>
              </div>
            </div>

            {/* Galeria de fotos do casal */}
            <div className="mt-8 pt-6 border-t border-rose-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="relative group">
                  <Image
                    src="/image copy 15.png"
                    alt="Girassol - símbolo do nosso amor"
                    width={300}
                    height={200}
                    className="rounded-lg object-cover w-full h-48 transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
                </div>
                <div className="relative group">
                  <Image
                    src="/image copy 16.png"
                    alt="Nossa jornada juntos"
                    width={300}
                    height={200}
                    className="rounded-lg object-cover w-full h-48 transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
