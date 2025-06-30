"use client";

import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const weddingDate = new Date("2025-12-20T19:00:00-03:00");

    const calculateTimeLeft = () => {
      const now = new Date();
      const brasiliaTime = new Date(
        now.toLocaleString("en-US", { timeZone: "America/Sao_Paulo" })
      );

      const difference = weddingDate.getTime() - brasiliaTime.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();

    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return (
      <section className="py-16 bg-gradient-to-r from-rose-50 to-amber-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-8">
              <Clock className="w-8 h-8 text-rose-400" />
              <h2 className="text-4xl font-serif text-stone-700">
                Contagem Regressiva
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[0, 0, 0, 0].map((_, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-rose-200"
                >
                  <div className="text-4xl md:text-6xl font-bold text-stone-700 mb-2">
                    --
                  </div>
                  <div className="text-sm md:text-lg text-stone-600 font-medium uppercase tracking-wider">
                    {["Dias", "Horas", "Minutos", "Segundos"][index]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-r from-rose-50 to-amber-50">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Clock className="w-8 h-8 text-rose-400" />
            <h2 className="text-4xl font-serif text-stone-700">
              Contagem Regressiva
            </h2>
          </div>

          <p className="text-lg text-stone-600 mb-8">Faltam apenas...</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-rose-200 transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-6xl font-bold text-stone-700 mb-2">
                {timeLeft.days.toString().padStart(2, "0")}
              </div>
              <div className="text-sm md:text-lg text-stone-600 font-medium uppercase tracking-wider">
                Dias
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-rose-200 transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-6xl font-bold text-stone-700 mb-2">
                {timeLeft.hours.toString().padStart(2, "0")}
              </div>
              <div className="text-sm md:text-lg text-stone-600 font-medium uppercase tracking-wider">
                Horas
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-rose-200 transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-6xl font-bold text-stone-700 mb-2">
                {timeLeft.minutes.toString().padStart(2, "0")}
              </div>
              <div className="text-sm md:text-lg text-stone-600 font-medium uppercase tracking-wider">
                Minutos
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-rose-200 transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-6xl font-bold text-stone-700 mb-2 animate-pulse">
                {timeLeft.seconds.toString().padStart(2, "0")}
              </div>
              <div className="text-sm md:text-lg text-stone-600 font-medium uppercase tracking-wider">
                Segundos
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-rose-200">
            <p className="text-stone-600 text-lg">
              Para o grande dia de{" "}
              <span className="font-serif font-semibold text-rose-600">
                Alice & Vinícius
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
