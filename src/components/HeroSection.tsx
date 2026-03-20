import heroImage from "../assets/images/hero.png";
import { MaterialSymbol } from "./MaterialSymbol";

type HeroSectionProps = {
  isAudioEnabled: boolean;
  onPrimaryAction: () => void;
};

export function HeroSection({
  isAudioEnabled,
  onPrimaryAction,
}: HeroSectionProps) {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      <div className="absolute inset-0">
        <img
          alt="Paisaje vibrante de la costa Caribe colombiana"
          className="h-full w-full object-cover object-center brightness-[0.6] saturate-[1.08]"
          decoding="async"
          fetchPriority="high"
          loading="eager"
          src={heroImage}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,214,10,0.28),transparent_24%),radial-gradient(circle_at_right,rgba(0,180,216,0.24),transparent_28%),linear-gradient(180deg,rgba(50,13,5,0.22),rgba(50,13,5,0.08)_38%,var(--color-paper)_100%)]" />
      </div>

      <div className="hero-card relative z-10 max-w-5xl text-center">
        <div className="mx-auto flex max-w-max items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[0.95rem] font-semibold uppercase tracking-[0.18em] text-white/92 shadow-[0_10px_30px_rgba(49,13,4,0.18)] backdrop-blur-sm">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-(--color-sand)" />
          Costa Caribe colombiana
        </div>

        <h1 className="mt-6 font-(--font-display) text-[clamp(4rem,8vw,7.25rem)] leading-[0.9] text-white drop-shadow-[0_15px_40px_rgba(0,0,0,0.45)]">
          Ey, este roadtrip
          <span className="mt-1 block text-(--color-sand)">
            hay que vivirlo
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-xl italic text-white/90 sm:text-2xl">
          Doce días de playa, carretera, pueblos con sabor, desierto, mar y plan
          del bueno por toda la costa Caribe colombiana.
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 text-white/92">
          <button
            className="journal-button-primary cursor-pointer"
            onClick={onPrimaryAction}
            type="button"
          >
            {isAudioEnabled ? "Sigue el viaje" : "Dale play al paseo"}
          </button>
          <div className="flex flex-col items-center">
            <span className="rounded-full bg-white/10 px-4 py-1 text-base italic tracking-[0.08em] text-white/88 backdrop-blur-sm">
              Baja y mira cómo se prende el viaje
            </span>
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
