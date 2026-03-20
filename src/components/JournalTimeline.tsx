import { useEffect, useRef } from "react";
import type { JournalEntryData } from "./JournalEntry";
import { JournalEntry } from "./JournalEntry";

type JournalTimelineProps = {
  days: JournalEntryData[];
  onRegionChange: (
    region: JournalEntryData["audioRegion"],
  ) => void;
};

export function JournalTimeline({
  days,
  onRegionChange,
}: JournalTimelineProps) {
  const routeRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const routeElement = routeRef.current;

    if (!routeElement) {
      return;
    }

    const entries = Array.from(
      routeElement.querySelectorAll<HTMLElement>("[data-audio-region]"),
    );

    if (entries.length === 0) {
      return;
    }

    const updateActiveRegion = () => {
      const viewportCenter = window.innerHeight / 2;
      const nextEntry = entries
        .map((entry) => {
          const rect = entry.getBoundingClientRect();
          const entryCenter = rect.top + rect.height / 2;
          const distanceToCenter = Math.abs(entryCenter - viewportCenter);

          return {
            distanceToCenter,
            entry,
            isVisible: rect.bottom > 0 && rect.top < window.innerHeight,
          };
        })
        .filter((entry) => entry.isVisible)
        .sort((entryA, entryB) => entryA.distanceToCenter - entryB.distanceToCenter)[0]
        ?.entry;

      const nextRegion = nextEntry?.dataset.audioRegion as
        | JournalEntryData["audioRegion"]
        | undefined;

      if (nextRegion) {
        onRegionChange(nextRegion);
      }
    };

    updateActiveRegion();
    window.addEventListener("scroll", updateActiveRegion, { passive: true });
    window.addEventListener("resize", updateActiveRegion);

    return () => {
      window.removeEventListener("scroll", updateActiveRegion);
      window.removeEventListener("resize", updateActiveRegion);
    };
  }, [onRegionChange]);

  return (
    <main id="bitacora" className="relative mx-auto max-w-6xl px-6 md:px-8">
      <section id="ruta" ref={routeRef}>
        {days.map((day, index) => (
          <JournalEntry
            key={`${day.dayLabel}-${day.location}`}
            day={day}
            index={index}
          />
        ))}
      </section>
    </main>
  );
}
