import { MaterialSymbol } from './MaterialSymbol'

const stats = [
  { icon: 'calendar_today', label: '12 Soles' },
  { icon: 'map', label: '1,200 Leguas' },
  { icon: 'groups', label: '8 Amigos' },
]

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
            Última página
          </p>
          <h2 className="mt-4 font-[var(--font-display)] text-[clamp(4.5rem,9vw,8.5rem)] leading-[0.88] text-[var(--color-sepia-dark)]">
            ¿Vienes conmigo?
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-xl italic text-[var(--color-ink)]/78 md:text-2xl">
            El diario aún tiene páginas en blanco que debemos llenar juntos. El
            road trip de tu vida espera.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-5 md:flex-row md:gap-8">
            <a className="journal-button-primary w-full justify-center md:w-auto" href="#top">
              ¡Confirmar asistencia!
            </a>
            <a className="journal-button-outline w-full justify-center md:w-auto" href="#ruta">
              Ver detalles de la ruta
            </a>
          </div>

          <div className="mt-16 flex flex-wrap items-start justify-center gap-10 text-[var(--color-sepia-dark)]/68 md:mt-20 md:gap-16">
            {stats.map((stat) => (
              <div key={stat.label} className="flex min-w-28 flex-col items-center gap-2">
                <MaterialSymbol className="text-4xl" name={stat.icon} />
                <span className="font-[var(--font-display)] text-2xl">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
