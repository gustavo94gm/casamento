import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-stone-100 border-t border-rose-200">
      <div className="max-w-4xl mx-auto text-center">
        <Heart className="w-8 h-8 text-rose-400 mx-auto mb-4" />
        <p className="text-stone-600 mb-2">Alice & Vinícius</p>
        <p className="text-sm text-stone-500">
          20 de Dezembro, 2025 • Ivoti, RS
        </p>
      </div>
    </footer>
  );
}
