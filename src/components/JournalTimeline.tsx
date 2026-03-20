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
      <section id="ruta">
        {days.map((day, index) => (
          <JournalEntry key={`${day.dayLabel}-${day.location}`} day={day} index={index} />
        ))}
      </section>
    </main>
  )
}
