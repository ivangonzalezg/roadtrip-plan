import { MaterialSymbol } from './MaterialSymbol'

export type JournalEntryData = {
  dayLabel: string
  imageAlt: string
  imageUrl: string
  location: string
  schedule: Array<{
    description: string
    label: string
  }>
  title: string
  transport: string
  transportIcon: string
  variant: 'brown' | 'blue' | 'green'
}

type JournalEntryProps = {
  day: JournalEntryData
  index: number
}

const panelClasses: Record<JournalEntryData['variant'], string> = {
  blue:
    'bg-[color:color-mix(in_oklab,var(--color-sky)_12%,transparent)] ring-1 ring-[color:color-mix(in_oklab,var(--color-sky)_30%,transparent)]',
  brown:
    'bg-[color:color-mix(in_oklab,var(--color-earth)_11%,transparent)] ring-1 ring-[color:color-mix(in_oklab,var(--color-earth)_20%,transparent)]',
  green:
    'bg-[color:color-mix(in_oklab,var(--color-jungle)_11%,transparent)] ring-1 ring-[color:color-mix(in_oklab,var(--color-jungle)_26%,transparent)]',
}

const accentClasses: Record<JournalEntryData['variant'], string> = {
  blue: 'text-[var(--color-jungle)]',
  brown: 'text-[var(--color-earth)]',
  green: 'text-[var(--color-jungle)]',
}

const imageClasses = [
  'aspect-[4/3]',
  'aspect-[4/3]',
  'aspect-video',
  'aspect-video',
  'aspect-[4/3]',
  'aspect-[4/5]',
  'aspect-[4/3]',
  'aspect-video',
  'aspect-[4/3]',
  'aspect-video',
  'h-[500px]',
  'aspect-video',
]

export function JournalEntry({ day, index }: JournalEntryProps) {
  const reverseDesktop = index % 2 === 1
  const imageSizing = imageClasses[index] ?? 'aspect-[4/3]'

  return (
    <article className="journal-entry story-shell grid items-center gap-8 py-16 md:grid-cols-12 md:gap-12 md:py-20">
      <div
        className={[
          'polaroid-frame md:col-span-7',
          reverseDesktop ? 'md:order-2' : '',
        ].join(' ')}
      >
        <img
          alt={day.imageAlt}
          className={[
            'w-full object-cover',
            imageSizing,
            index === 0 || index === 8 ? 'grayscale-[0.15]' : '',
            index === 10 ? 'brightness-110' : '',
          ].join(' ')}
          src={day.imageUrl}
        />
      </div>

      <div
        className={[
          'rounded-[2rem] p-7 md:col-span-5 md:p-8',
          panelClasses[day.variant],
          reverseDesktop ? 'md:order-1' : '',
        ].join(' ')}
      >
        <span
          className={[
            'font-[var(--font-display)] text-3xl',
            accentClasses[day.variant],
          ].join(' ')}
        >
          {day.dayLabel}: {day.location}
        </span>

        <h2 className="mt-2 font-[var(--font-display)] text-5xl leading-[0.92] text-[var(--color-sepia-dark)] sm:text-6xl">
          {day.title}
        </h2>

        <div className="mt-5 space-y-4 text-lg italic text-[color:color-mix(in_oklab,var(--color-ink)_90%,transparent)]">
          {day.schedule.map((item) => (
            <p key={item.label}>
              <strong>{item.label}:</strong> {item.description}
            </p>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-3 text-sm text-[var(--color-jungle)]">
          <MaterialSymbol className="text-xl" name={day.transportIcon} />
          <span className="font-semibold italic">{day.transport}</span>
        </div>
      </div>
    </article>
  )
}
