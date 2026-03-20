import { MaterialSymbol } from './MaterialSymbol'

export function CtaSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 md:px-8">
      <div
        id="cta"
        className="story-shell relative overflow-hidden rounded-[3rem] bg-[color:color-mix(in_oklab,white_45%,var(--color-paper))] px-6 py-16 text-center shadow-[0_24px_70px_rgba(62,39,35,0.12)] ring-1 ring-white/40 sm:px-8 md:px-14 md:py-24"
      >
        <div className="pointer-events-none absolute -bottom-24 -left-14 opacity-[0.06]">
          <MaterialSymbol className="text-[15rem] md:text-[20rem]" name="sticker" />
        </div>

        <div className="relative">
          <p
            id="recuerdos"
            className="text-sm uppercase tracking-[0.28em] text-[var(--color-earth)]/70"
          >
            Sin tanta vuelta
          </p>
          <h2 className="mt-4 font-[var(--font-display)] text-[clamp(4.5rem,9vw,8.5rem)] leading-[0.88] text-[var(--color-sepia-dark)]">
            Estás jodido si te pierdes esta vaina
          </h2>
        </div>
      </div>
    </section>
  )
}
