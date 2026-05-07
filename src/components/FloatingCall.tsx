import { Phone } from "lucide-react";

export function FloatingCall() {
  return (
    <a
      href="tel:+34930645821"
      aria-label="Llamar al restaurante"
      className="fixed bottom-6 right-6 z-50 group flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-warm)] transition-transform hover:scale-110"
    >
      <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
      <Phone className="relative h-6 w-6" />
    </a>
  );
}
