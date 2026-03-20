import { CtaSection } from './components/CtaSection'
import { FloatingActionButton } from './components/FloatingActionButton'
import { Footer } from './components/Footer'
import { HeroSection } from './components/HeroSection'
import { JournalTimeline } from './components/JournalTimeline'
import { Navbar } from './components/Navbar'
import { itineraryDays } from './data/itinerary'

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)]">
      <Navbar />
      <HeroSection />
      <JournalTimeline days={itineraryDays} />
      <CtaSection />
      <Footer />
      <FloatingActionButton />
    </div>
  )
}

export default App
