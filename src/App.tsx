import { useCallback, useEffect, useRef, useState } from "react";
import costaAudio from "./assets/audios/costa.mp3";
import barranquillaAudio from "./assets/audios/barranquilla.mp3";
import cartagenaAudio from "./assets/audios/cartagena.mp3";
import guajiraAudio from "./assets/audios/guajira.mp3";
import santaMartaAudio from "./assets/audios/santa-marta.mp3";
import { CtaSection } from "./components/CtaSection";
import { HeroSection } from "./components/HeroSection";
import { JournalTimeline } from "./components/JournalTimeline";
import { MaterialSymbol } from "./components/MaterialSymbol";
import { itineraryDays } from "./data/itinerary";

type AudioRegion =
  | "barranquilla"
  | "cartagena"
  | "costa"
  | "guajira"
  | "santa-marta";

const audioSources: Record<AudioRegion, string> = {
  barranquilla: barranquillaAudio,
  cartagena: cartagenaAudio,
  costa: costaAudio,
  guajira: guajiraAudio,
  "santa-marta": santaMartaAudio,
};

function App() {
  const [activeRegion, setActiveRegion] = useState<AudioRegion>("costa");
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);
  const [showAudioHint, setShowAudioHint] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const activeRegionRef = useRef<AudioRegion>("costa");
  const isAudioUnlockedRef = useRef(false);

  const syncAudio = useCallback((region: AudioRegion, enabled: boolean) => {
    let audio = audioRef.current;

    if (!audio) {
      audio = new Audio();
      audio.loop = true;
      audio.preload = "auto";
      audio.volume = 0.9;
      audioRef.current = audio;
    }

    if (!enabled) {
      audio.pause();
      return;
    }

    if (!isAudioUnlockedRef.current) {
      return;
    }

    const nextSource = audioSources[region];

    if (!audio.src.endsWith(nextSource)) {
      audio.src = nextSource;
      audio.currentTime = 0;
    }

    const playPromise = audio.play();

    playPromise?.catch((error: unknown) => {
      if (!(error instanceof DOMException)) {
        return;
      }

      if (error.name === "AbortError") {
        return;
      }

      if (error.name === "NotAllowedError") {
        isAudioUnlockedRef.current = false;
        setIsAudioEnabled(false);
        setShowAudioHint(true);
      }
    });
  }, []);

  const enableAudioFromGesture = useCallback(
    (region: AudioRegion) => {
      isAudioUnlockedRef.current = true;
      activeRegionRef.current = region;
      setActiveRegion(region);
      setIsAudioEnabled(true);
      setShowAudioHint(false);
      syncAudio(region, true);
    },
    [syncAudio],
  );

  const disableAudio = useCallback(() => {
    isAudioUnlockedRef.current = false;
    setIsAudioEnabled(false);
    setShowAudioHint(true);
    if (audioRef.current) {
      audioRef.current.pause();
    }
  }, []);

  useEffect(() => {
    syncAudio(activeRegion, isAudioEnabled);
  }, [activeRegion, isAudioEnabled, syncAudio]);

  useEffect(() => {
    const audio = new Audio(audioSources.costa);
    audio.loop = true;
    audio.preload = "auto";
    audio.volume = 0.9;
    audioRef.current = audio;

    const autoplayPromise = audio.play();

    autoplayPromise
      ?.then(() => {
        isAudioUnlockedRef.current = true;
        activeRegionRef.current = "costa";
        setActiveRegion("costa");
        setIsAudioEnabled(true);
        setShowAudioHint(false);
      })
      .catch(() => {
        setShowAudioHint(true);
      });

    return () => {
      audio.pause();
      if (audioRef.current === audio) {
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const routeElement = document.getElementById("ruta");

      if (!routeElement) {
        return;
      }

      const routeTop = routeElement.getBoundingClientRect().top;
      const isHeroDominant = routeTop > window.innerHeight * 0.55;

      if (isHeroDominant && activeRegionRef.current !== "costa") {
        activeRegionRef.current = "costa";
        setActiveRegion("costa");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleRegionChange = (region: Exclude<AudioRegion, "costa">) => {
    if (!isAudioEnabled) {
      enableAudioFromGesture(region);
      return;
    }

    if (activeRegionRef.current !== region) {
      activeRegionRef.current = region;
      setActiveRegion(region);
    }
  };

  const handlePrimaryAction = () => {
    enableAudioFromGesture("costa");
    document.getElementById("ruta")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleToggleAudio = () => {
    if (isAudioEnabled) {
      disableAudio();
      return;
    }

    enableAudioFromGesture(activeRegionRef.current);
  };

  return (
    <div className="min-h-screen bg-(--color-paper) text-(--color-ink)">
      <button
        aria-label={isAudioEnabled ? "Silenciar ambiente" : "Activar ambiente"}
        className="fixed right-4 top-4 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-[rgba(255,248,235,0.82)] text-(--color-sepia-dark) shadow-[0_16px_36px_rgba(97,31,9,0.18)] backdrop-blur-md transition duration-300 hover:scale-[1.03] active:scale-95"
        onClick={handleToggleAudio}
        type="button"
      >
        <MaterialSymbol
          className="text-3xl"
          name={isAudioEnabled ? "volume_up" : "volume_off"}
        />
      </button>

      {showAudioHint && !isAudioEnabled ? (
        <div className="pointer-events-none fixed right-4 top-18 z-50 max-w-52 rounded-2xl border border-white/35 bg-[rgba(95,26,7,0.74)] px-4 py-3 text-sm italic text-white shadow-[0_14px_30px_rgba(49,13,4,0.22)] backdrop-blur-md">
          Toca el botón pa que se prenda esta vuelta.
        </div>
      ) : null}

      <HeroSection
        isAudioEnabled={isAudioEnabled}
        onPrimaryAction={handlePrimaryAction}
      />
      <JournalTimeline
        days={itineraryDays}
        onRegionChange={handleRegionChange}
      />
      <CtaSection />
    </div>
  );
}

export default App;
