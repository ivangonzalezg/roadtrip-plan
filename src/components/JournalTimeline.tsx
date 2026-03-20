import type { JournalEntryData } from './JournalEntry'
import { JournalEntry } from './JournalEntry'

type JournalTimelineProps = {
  days: JournalEntryData[]
}

export function JournalTimeline({ days }: JournalTimelineProps) {
  return (
    <main
      id="bitacora"
      className="relative mx-auto max-w-6xl px-6 pb-20 pt-10 md:px-8"
    >
      <section className="story-shell rounded-[2.5rem] bg-white/32 px-6 py-10 shadow-[0_18px_50px_rgba(62,39,35,0.08)] ring-1 ring-white/30 backdrop-blur-sm sm:px-8 md:px-10">
        <div className="grid gap-5 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-earth)]/80">
              Diario de ruta
            </p>
            <h2
              id="ruta"
              className="mt-3 font-[var(--font-display)] text-5xl leading-[0.94] text-[var(--color-sepia-dark)] sm:text-6xl"
            >
              Doce días entre murallas, sierras y desierto.
            </h2>
          </div>
          <p className="max-w-xl text-lg italic text-[var(--color-ink)]/80">
            La experiencia conserva el pulso editorial del mockup original:
            fotos dominantes, bloques de texto orgánicos y una alternancia que
            hace avanzar la historia como páginas arrancadas de un cuaderno de
            viaje.
          </p>
        </div>
      </section>

      <section className="mt-10">
        {days.map((day, index) => (
          <JournalEntry key={`${day.dayLabel}-${day.location}`} day={day} index={index} />
        ))}
      </section>
    </main>
  )
}
