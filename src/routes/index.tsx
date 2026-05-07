import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Instagram, Star, ExternalLink, Flame, ChefHat, Leaf } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { FloatingCall } from "@/components/FloatingCall";
import logo from "@/assets/logo.png";
import heroOven from "@/assets/hero-oven.jpg";
import pizzaMargherita from "@/assets/pizza-margherita.jpg";
import pizzaMortazza from "@/assets/pizza-mortazza.jpg";
import pizzaTartufata from "@/assets/pizza-tartufata.jpg";
import carbonara from "@/assets/spaghetti-carbonara.jpg";
import boxOpen from "@/assets/pizza-box-open.jpg";
import boxes from "@/assets/pizza-boxes.jpg";
import dough from "@/assets/dough-hands.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "La Taverna Napoletana — Auténtica pizza napolitana en Mataró" },
      {
        name: "description",
        content:
          "Pizza napolitana artesanal en Mataró. Masa de larga fermentación, ingredientes frescos italianos y horno de leña. Reserva: 930 64 58 21.",
      },
      { property: "og:title", content: "La Taverna Napoletana — Mataró" },
      { property: "og:description", content: "Auténtica pizza napolitana en el corazón de Mataró." },
      { property: "og:type", content: "restaurant.restaurant" },
      { property: "og:image", content: heroOven },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "La Taverna Napoletana",
          servesCuisine: ["Italian", "Neapolitan", "Pizza"],
          priceRange: "€€",
          telephone: "+34930645821",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Muralla de Sant Llorenç, 14",
            addressLocality: "Mataró",
            addressRegion: "Barcelona",
            addressCountry: "ES",
          },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "50" },
        }),
      },
    ],
  }),
  component: Index,
});

const specialties = [
  {
    name: "Pizza Mortazza",
    desc: "Mortadella di Bologna IGP, crema de burrata y pistacho de Bronte sobre masa napolitana.",
    img: pizzaMortazza,
    icon: "🍕",
  },
  {
    name: "Pizza La Tartufata",
    desc: "Mozzarella fior di latte, champiñón y crema de trufa negra. Aromática y profunda.",
    img: pizzaTartufata,
    icon: "🍕",
  },
  {
    name: "Spaghetti Carbonara",
    desc: "Receta romana clásica: guanciale crujiente, pecorino, yema y pimienta negra.",
    img: carbonara,
    icon: "🍝",
  },
];

const menu = {
  Pizzas: [
    ["Margherita D.O.P.", "San Marzano, fior di latte, albahaca, aceite EVO", "11.50"],
    ["Diavola", "Tomate, mozzarella, salami picante, aceite de chile", "13.00"],
    ["Mortazza", "Mortadella, burrata, pistacho de Bronte", "15.50"],
    ["Tartufata", "Crema de trufa, champiñón, fior di latte", "16.50"],
    ["Quattro Formaggi", "Mozzarella, gorgonzola, parmigiano, provolone", "14.00"],
  ],
  Pastas: [
    ["Spaghetti Carbonara", "Guanciale, pecorino, yema, pimienta", "13.50"],
    ["Tagliatelle al Ragù", "Ragú napolitano de larga cocción", "13.00"],
    ["Gnocchi alla Sorrentina", "Tomate, mozzarella, albahaca", "12.50"],
  ],
  Entrantes: [
    ["Burrata Pugliese", "Burrata cremosa, tomates cherry, albahaca", "10.00"],
    ["Tabla de Salumi", "Selección de embutidos italianos", "14.00"],
    ["Bruschette al Pomodoro", "Pan tostado, tomate, ajo y albahaca", "7.50"],
  ],
  Postres: [
    ["Tiramisú della Casa", "Receta tradicional, mascarpone y café", "6.50"],
    ["Panna Cotta", "Frutos rojos o caramelo", "5.50"],
    ["Cannolo Siciliano", "Ricotta dulce y pistacho", "6.00"],
  ],
};

const reviews = [
  { text: "Las mejores pizzas napolitanas de Mataró. Masa perfecta y trato excelente.", name: "Marta G.", stars: 5 },
  { text: "Servicio genial, ambiente acogedor. Volveremos seguro.", name: "Jordi P.", stars: 5 },
  { text: "Ambiente íntimo, perfecto para una cena en pareja. Pizza Mortazza espectacular.", name: "Lucía R.", stars: 5 },
  { text: "Auténticos sabores italianos. Como estar en Nápoles sin salir de Mataró.", name: "Andrea T.", stars: 5 },
];

const gallery = [
  { src: pizzaMargherita, h: "row-span-2" },
  { src: heroOven, h: "" },
  { src: dough, h: "" },
  { src: boxOpen, h: "row-span-2" },
  { src: pizzaTartufata, h: "" },
  { src: boxes, h: "" },
];

const schedule = [
  ["Lunes", "Cerrado"],
  ["Martes", "19:30 – 23:30"],
  ["Miércoles", "19:30 – 23:30"],
  ["Jueves", "19:30 – 23:30"],
  ["Viernes", "19:30 – 23:30"],
  ["Sábado", "19:30 – 23:30"],
  ["Domingo", "19:30 – 23:30"],
];

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Navbar />
      <FloatingCall />

      {/* HERO */}
      <section className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden">
        <img
          src={heroOven}
          alt="Horno de leña napolitano"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover scale-110"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center text-cream">
          <p className="font-script text-2xl md:text-3xl text-accent animate-float-up">Benvenuti a</p>
          <h1 className="mt-2 font-display text-5xl font-bold leading-[1.05] md:text-7xl lg:text-8xl animate-float-up [animation-delay:120ms]">
            Auténtica pizza napolitana<br />
            <span className="italic text-accent">en el corazón de Mataró</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-cream/85 animate-float-up [animation-delay:240ms]">
            Ingredientes frescos, masa artesanal de larga fermentación y un ambiente que te transporta directamente a Italia.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-float-up [animation-delay:360ms]">
            <a
              href="tel:+34930645821"
              className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground shadow-[var(--shadow-warm)] transition-all hover:scale-105"
            >
              <Phone className="h-5 w-5" />
              Reservar ahora
            </a>
            <a
              href="#carta"
              className="inline-flex items-center gap-2 rounded-full border-2 border-cream/60 px-8 py-4 font-semibold text-cream backdrop-blur-sm transition-all hover:bg-cream hover:text-primary"
            >
              Ver carta
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/70 text-xs tracking-[0.4em] uppercase">
          Scroll ↓
        </div>
      </section>

      {/* SOBRE NOSOTROS */}
      <section id="sobre" className="section-pad">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          <div className="relative">
            <img
              src={dough}
              loading="lazy"
              width={1024}
              height={640}
              alt="Masa artesanal hecha a mano"
              className="rounded-2xl object-cover shadow-[var(--shadow-warm)]"
            />
            <div className="absolute -bottom-8 -right-4 rounded-xl bg-primary px-6 py-5 text-primary-foreground shadow-[var(--shadow-warm)] hidden sm:block">
              <div className="font-script text-3xl text-accent">72h</div>
              <div className="text-xs uppercase tracking-widest">de fermentación</div>
            </div>
          </div>

          <div>
            <p className="font-script text-2xl text-primary">La nostra storia</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl font-bold text-foreground">
              Sobre nosotros
            </h2>
            <div className="mt-4 h-1 w-16 bg-accent" />
            <p className="mt-6 text-lg leading-relaxed text-foreground/85">
              <strong>La Taverna Napoletana</strong> nace con una misión clara: traer a Mataró el verdadero
              sabor de Nápoles. Una cocina honesta, hecha con calma, con ingredientes seleccionados y la
              técnica heredada de generaciones de pizzaiolos.
            </p>
            <p className="mt-4 text-foreground/75">
              Nuestra masa fermenta lentamente para conseguir esa textura ligera y crujiente que solo
              tiene la auténtica pizza napolitana. Tomate San Marzano, mozzarella fior di latte y
              aceite de oliva virgen extra son la base de todo lo que hacemos.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { i: <Flame className="h-5 w-5" />, t: "Horno de leña" },
                { i: <Leaf className="h-5 w-5" />, t: "Producto fresco" },
                { i: <ChefHat className="h-5 w-5" />, t: "Receta tradicional" },
              ].map((f) => (
                <div key={f.t} className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">{f.i}</span>
                  <span className="text-sm font-semibold text-foreground">{f.t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ESPECIALIDADES */}
      <section id="especialidades" className="section-pad bg-charcoal text-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(oklch(0.78 0.12 75 / 0.4) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="font-script text-2xl text-accent">Le specialità</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl font-bold">Nuestras especialidades</h2>
            <p className="mx-auto mt-4 max-w-xl text-cream/70">
              Tres platos que definen lo que somos. Sabores intensos, técnica y producto.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {specialties.map((s, i) => (
              <article
                key={s.name}
                className="group relative overflow-hidden rounded-2xl bg-card text-card-foreground shadow-[var(--shadow-warm)] transition-transform duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.img}
                    loading="lazy"
                    width={1024}
                    height={768}
                    alt={s.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-secondary font-semibold tracking-widest uppercase">
                    <span>{s.icon}</span>
                    <span>Signature</span>
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-bold text-primary">{s.name}</h3>
                  <p className="mt-2 text-sm text-foreground/75">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CARTA */}
      <section id="carta" className="section-pad" style={{ background: "var(--gradient-warm)" }}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="font-script text-2xl text-primary">Il menù</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl font-bold text-foreground">Nuestra carta</h2>
            <div className="mx-auto mt-4 h-1 w-16 bg-accent" />
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-2">
            {Object.entries(menu).map(([cat, items]) => (
              <div key={cat} className="rounded-2xl border border-border bg-card/70 backdrop-blur p-8 shadow-[var(--shadow-soft)]">
                <h3 className="font-display text-3xl font-bold text-primary">{cat}</h3>
                <div className="mt-2 mb-6 h-px bg-gradient-to-r from-primary/40 to-transparent" />
                <ul className="space-y-5">
                  {items.map(([name, desc, price]) => (
                    <li key={name} className="flex items-baseline gap-3">
                      <div className="flex-1">
                        <div className="flex items-baseline gap-3">
                          <span className="font-display text-lg font-semibold text-foreground">{name}</span>
                          <span className="flex-1 border-b border-dotted border-border/70" />
                          <span className="font-display text-lg font-bold text-primary">{price}€</span>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://glovoapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-4 font-semibold text-secondary-foreground shadow-[var(--shadow-warm)] transition-transform hover:scale-105"
            >
              Pedir a domicilio en Glovo
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* RESEÑAS */}
      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-center">
            <div>
              <p className="font-script text-2xl text-primary">Le recensioni</p>
              <h2 className="mt-2 font-display text-4xl md:text-5xl font-bold text-foreground">
                Lo que dicen<br />nuestros clientes
              </h2>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-accent text-accent" />
                  ))}
                </div>
                <span className="font-display text-3xl font-bold text-foreground">4,8</span>
              </div>
              <p className="mt-2 text-muted-foreground">Más de 50 reseñas reales en Google</p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {reviews.map((r) => (
                <figure key={r.name} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-1">
                  <div className="flex">
                    {Array.from({ length: r.stars }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <blockquote className="mt-3 font-display italic text-lg text-foreground leading-snug">
                    “{r.text}”
                  </blockquote>
                  <figcaption className="mt-4 text-sm font-semibold text-primary">— {r.name}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section id="galeria" className="section-pad bg-muted">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="font-script text-2xl text-primary">La galleria</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl font-bold text-foreground">Galería</h2>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
            {gallery.map((g, i) => (
              <div key={i} className={`overflow-hidden rounded-xl ${g.h} group`}>
                <img
                  src={g.src}
                  loading="lazy"
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESERVAS */}
      <section id="reservas" className="section-pad bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(oklch(0.97 0.012 75 / 0.6) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-script text-2xl text-accent">Prenota un tavolo</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl font-bold">Reserva tu mesa</h2>
            <p className="mt-4 text-cream/85 max-w-md">
              Disfruta de una experiencia napolitana auténtica. Reservar es la mejor manera de
              asegurar tu sitio, especialmente fines de semana.
            </p>
            <a
              href="tel:+34930645821"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-cream px-8 py-4 text-lg font-bold text-primary shadow-2xl transition-transform hover:scale-105"
            >
              <Phone className="h-5 w-5" />
              930 64 58 21
            </a>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = "tel:+34930645821";
            }}
            className="rounded-2xl bg-cream/10 border border-cream/20 backdrop-blur p-8 space-y-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input required placeholder="Nombre" className="w-full rounded-lg bg-cream/95 px-4 py-3 text-foreground placeholder:text-foreground/50 outline-none ring-accent focus:ring-2" />
              <input required type="tel" placeholder="Teléfono" className="w-full rounded-lg bg-cream/95 px-4 py-3 text-foreground placeholder:text-foreground/50 outline-none ring-accent focus:ring-2" />
              <input required type="number" min="1" placeholder="Personas" className="w-full rounded-lg bg-cream/95 px-4 py-3 text-foreground placeholder:text-foreground/50 outline-none ring-accent focus:ring-2" />
              <input required type="date" className="w-full rounded-lg bg-cream/95 px-4 py-3 text-foreground placeholder:text-foreground/50 outline-none ring-accent focus:ring-2" />
            </div>
            <button className="w-full rounded-lg bg-accent px-6 py-3.5 font-bold text-charcoal transition-transform hover:scale-[1.02]">
              Reservar mesa
            </button>
            <p className="text-xs text-cream/70 text-center">Te confirmaremos por teléfono en menos de 1 hora.</p>
          </form>
        </div>
      </section>

      {/* HORARIOS + UBICACIÓN */}
      <section id="contacto" className="section-pad">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2">
          <div>
            <p className="font-script text-2xl text-primary">Orari</p>
            <h2 className="mt-2 font-display text-4xl font-bold text-foreground flex items-center gap-3">
              <Clock className="h-8 w-8 text-primary" /> Horarios
            </h2>
            <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]">
              {schedule.map(([day, hours], i) => (
                <div
                  key={day}
                  className={`flex items-center justify-between px-6 py-4 ${
                    i !== schedule.length - 1 ? "border-b border-border" : ""
                  } ${hours === "Cerrado" ? "bg-muted" : ""}`}
                >
                  <span className="font-display text-lg font-semibold text-foreground">{day}</span>
                  <span className={`font-medium ${hours === "Cerrado" ? "text-muted-foreground italic" : "text-primary"}`}>
                    {hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="font-script text-2xl text-primary">Dove siamo</p>
            <h2 className="mt-2 font-display text-4xl font-bold text-foreground flex items-center gap-3">
              <MapPin className="h-8 w-8 text-primary" /> Ubicación
            </h2>
            <p className="mt-4 text-foreground/80">
              Muralla de Sant Llorenç, 14<br />
              08301 Mataró, Barcelona
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-soft)]">
              <iframe
                title="Mapa La Taverna Napoletana"
                src="https://www.google.com/maps?q=Muralla+de+Sant+Llorenç+14+Mataró&output=embed"
                loading="lazy"
                className="h-72 w-full"
              />
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Muralla+de+Sant+Llorenç+14+Mataró"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Cómo llegar <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-charcoal text-cream pt-16 pb-8">
        <div className="mx-auto max-w-7xl px-6 grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logo} alt="" className="h-14 w-14 rounded-full bg-cream object-contain p-1" />
              <div>
                <div className="font-display text-xl font-bold">La Taverna Napoletana</div>
                <div className="text-xs tracking-[0.3em] uppercase text-cream/60">Mataró · Barcelona</div>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm text-cream/70">
              Auténtica pizza napolitana, pasta italiana y ambiente acogedor. A taste of Naples,
              straight to your table.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg text-accent">Contacto</h4>
            <ul className="mt-3 space-y-2 text-sm text-cream/80">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> <a href="tel:+34930645821" className="hover:text-accent">930 64 58 21</a></li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5" /> Muralla de Sant Llorenç, 14<br />Mataró</li>
              <li className="flex items-center gap-2"><Instagram className="h-4 w-4" /> <a href="https://instagram.com/lataverna.napoletana" target="_blank" rel="noopener noreferrer" className="hover:text-accent">@lataverna.napoletana</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-accent">Pedidos</h4>
            <ul className="mt-3 space-y-2 text-sm text-cream/80">
              <li><a href="https://glovoapp.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent">Pedir en Glovo →</a></li>
              <li><a href="#carta" className="hover:text-accent">Ver carta</a></li>
              <li><a href="#reservas" className="hover:text-accent">Reservar mesa</a></li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl border-t border-cream/10 px-6 pt-6 text-center text-xs text-cream/50">
          © {new Date().getFullYear()} La Taverna Napoletana — Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}
