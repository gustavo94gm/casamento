import Image from "next/image";

export default function Musica() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-amber-50 to-rose-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Image
            src="/image copy 13.png"
            alt="Música especial"
            width={1920}
            height={1080}
            className="mx-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-rose-100">
          <h2 className="text-3xl md:text-4xl font-bold text-rose-800 mb-6 font-serif">
            Sua Música Especial
          </h2>

          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Para tornar nossa recepção ainda mais especial, gostaríamos de
              contar com a sua ajuda! Pedimos que compartilhe conosco uma música
              especial para você(s).
            </p>

            <p className="font-semibold text-rose-700">
              Envie o nome da música até o dia 1º de novembro, junto com a
              confirmação de sua presença.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
