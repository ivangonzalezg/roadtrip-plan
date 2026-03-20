import { CtaSection } from "./components/CtaSection";
import { FloatingActionButton } from "./components/FloatingActionButton";
import { HeroSection } from "./components/HeroSection";
import { JournalTimeline } from "./components/JournalTimeline";
import { itineraryDays } from "./data/itinerary";

function App() {
  return (
    <div className="min-h-screen bg-(--color-paper) text-(--color-ink)">
      <HeroSection />
      <JournalTimeline days={itineraryDays} />
      <CtaSection />
      <FloatingActionButton />
    </div>
  );
}

export default App;
