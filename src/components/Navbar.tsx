import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { href: "#sobre", label: "Sobre nosotros" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#carta", label: "Carta" },
  { href: "#galeria", label: "Galería" },
  { href: "#reservas", label: "Reservas" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-[0_2px_20px_-10px_rgba(0,0,0,0.25)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="La Taverna Napoletana" className="h-12 w-12 rounded-full bg-cream object-contain p-1 ring-1 ring-primary/20" />
          <div className="hidden sm:block leading-tight">
            <div className={`font-display text-lg font-bold ${scrolled ? "text-primary" : "text-cream"}`}>La Taverna</div>
            <div className={`text-[10px] tracking-[0.3em] uppercase ${scrolled ? "text-foreground/70" : "text-cream/80"}`}>Napoletana</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-accent ${
                scrolled ? "text-foreground" : "text-cream"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:+34930645821"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-warm)] transition-transform hover:scale-105"
        >
          <Phone className="h-4 w-4" />
          930 64 58 21
        </a>

        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden p-2 ${scrolled ? "text-foreground" : "text-cream"}`}
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-current" />
            <span className="block h-0.5 w-6 bg-current" />
            <span className="block h-0.5 w-6 bg-current" />
          </div>
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border px-6 py-4 space-y-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-foreground font-medium">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
