import { MaterialSymbol } from "./MaterialSymbol";

export type JournalEntryData = {
  dayLabel: string;
  highlight: string;
  highlightIcon: string;
  imageAlt: string;
  imageUrl: string;
  location: string;
  story: string[];
  title: string;
  variant: "brown" | "blue" | "green";
};

type JournalEntryProps = {
  day: JournalEntryData;
  index: number;
};

const panelClasses: Record<JournalEntryData["variant"], string> = {
  blue: "festival-panel bg-[color:color-mix(in_oklab,var(--color-sky)_16%,white)] ring-1 ring-[color:color-mix(in_oklab,var(--color-sky)_38%,transparent)]",
  brown:
    "festival-panel bg-[color:color-mix(in_oklab,var(--color-earth)_10%,white)] ring-1 ring-[color:color-mix(in_oklab,var(--color-earth)_26%,transparent)]",
  green:
    "festival-panel bg-[color:color-mix(in_oklab,var(--color-jungle)_12%,white)] ring-1 ring-[color:color-mix(in_oklab,var(--color-jungle)_30%,transparent)]",
};

const accentClasses: Record<JournalEntryData["variant"], string> = {
  blue: "text-[var(--color-sky)]",
  brown: "text-[var(--color-earth)]",
  green: "text-[var(--color-jungle)]",
};

const imageClasses = [
  "aspect-[4/3]",
  "aspect-[4/3]",
  "aspect-video",
  "aspect-video",
  "aspect-[4/3]",
  "aspect-[4/5]",
  "aspect-[4/3]",
  "aspect-video",
  "aspect-[4/3]",
  "aspect-video",
  "h-[500px]",
  "aspect-video",
];

export function JournalEntry({ day, index }: JournalEntryProps) {
  const reverseDesktop = index % 2 === 1;
  const imageSizing = imageClasses[index] ?? "aspect-[4/3]";

  return (
    <article className="journal-entry story-shell grid items-center gap-8 py-16 md:grid-cols-12 md:gap-12 md:py-20">
      <div
        className={[
          "polaroid-frame md:col-span-7",
          reverseDesktop ? "md:order-2" : "",
        ].join(" ")}
      >
        <img
          alt={day.imageAlt}
          className={[
            "w-full object-cover",
            imageSizing,
            index === 0 || index === 8 ? "grayscale-[0.15]" : "",
            index === 10 ? "brightness-110" : "",
          ].join(" ")}
          src={day.imageUrl}
        />
      </div>

      <div
        className={[
          "story-card rounded-4xl p-7 md:col-span-5 md:p-8",
          panelClasses[day.variant],
          reverseDesktop ? "md:order-1" : "",
        ].join(" ")}
      >
        <span
          className={[
            "font-(--font-display) text-3xl",
            accentClasses[day.variant],
          ].join(" ")}
        >
          {day.dayLabel}: {day.location}
        </span>

        <h2 className="mt-2 font-(--font-display) text-5xl leading-[0.92] text-(--color-sepia-dark) sm:text-6xl">
          {day.title}
        </h2>

        <div className="mt-5 space-y-4 text-lg italic leading-relaxed text-[color-mix(in_oklab,var(--color-ink)_90%,transparent)]">
          {day.story.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-3 rounded-full bg-[rgba(255,249,239,0.78)] px-4 py-3 text-sm text-(--color-sepia-dark) shadow-[0_10px_30px_rgba(62,39,35,0.08)]">
          <MaterialSymbol
            className="text-xl text-(--color-coral)"
            name={day.highlightIcon}
          />
          <span className="font-semibold italic">{day.highlight}</span>
        </div>
      </div>
    </article>
  );
}
