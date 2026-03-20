import heroImage from "../assets/hero.png";
import { MaterialSymbol } from "./MaterialSymbol";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24"
    >
      <div className="absolute inset-0">
        <img
          alt="Paisaje vibrante de la costa Caribe colombiana"
          className="h-full w-full object-cover object-center sepia-[0.32] brightness-[0.82] saturate-[0.9]"
          src={heroImage}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_34%),linear-gradient(180deg,rgba(0,0,0,0.16),rgba(0,0,0,0.03)_42%,var(--color-paper)_100%)]" />
      </div>

      <div className="hero-card relative z-10 max-w-5xl text-center">
        <h1 className="mt-4 font-(--font-display) text-[clamp(4rem,8vw,7.25rem)] leading-[0.88] text-white drop-shadow-[0_15px_40px_rgba(0,0,0,0.45)]">
          Ey, este roadtrip
          <span className="mt-2 block text-(--color-sand)">
            hay que vivirlo
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg italic text-white/86 sm:text-xl">
          Doce días de playa, carretera, pueblos con sabor, desierto, mar y plan
          del bueno por toda la costa Caribe colombiana.
        </p>

        <div className="mt-12 flex flex-col items-center gap-3 text-white/92">
          <a className="journal-button-primary" href="#ruta">
            Ver la ruta
          </a>
          <div className="flex flex-col items-center">
            <span className="text-lg italic">Desliza para empezar</span>
            <MaterialSymbol
              className="hero-bounce text-5xl"
              name="expand_more"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
