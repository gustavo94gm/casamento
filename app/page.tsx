import { PaginaInicial } from "./components/hero/page";
import { Historia } from "./components/historia/page";
import { ComCarinho } from "./components/carinho/page";
import { Evento } from "./components/evento/page";
import { Programacao } from "./components/programacao/page";
import { Galeria } from "./components/galeria/page";
import { Confirmacao } from "./components/presenca/page";
import { Presentes } from "./components/presentes/page";
import { Musica } from "./components/musica/page";
import { Footer } from "./components/footer/page";

export default function WeddingLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-amber-50">
      <PaginaInicial />
      <Historia />
      <ComCarinho />
      <Evento />
      <Programacao />
      <Galeria />
      <Confirmacao />
      <Musica />
      <Presentes />
      <Footer />
    </div>
  );
}
