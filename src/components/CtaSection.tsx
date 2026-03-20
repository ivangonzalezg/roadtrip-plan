import costaCollage from "../assets/images/costa-1.png";
import { MaterialSymbol } from "./MaterialSymbol";

export function CtaSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 md:px-8">
      <div
        id="cta"
        className="story-shell festival-panel relative overflow-hidden rounded-[3rem] px-6 py-16 text-center sm:px-8 md:px-14 md:py-24"
      >
        <div className="pointer-events-none absolute -bottom-12 -left-10 opacity-[0.18]">
          <MaterialSymbol
            className="text-[15rem] text-(--color-earth) md:text-[20rem]"
            name="sticker"
          />
        </div>

        <div className="pointer-events-none absolute -right-8 bottom-0 hidden md:block">
          <img
            alt=""
            aria-hidden="true"
            className="w-52 rotate-[-8deg] opacity-70 drop-shadow-[0_16px_26px_rgba(97,31,9,0.16)]"
            src={costaCollage}
          />
        </div>

        <div className="relative">
          <p
            id="recuerdos"
            className="text-sm uppercase tracking-[0.28em] text-(--color-earth)/78"
          >
            Sin tanta vuelta
          </p>
          <h2 className="mt-4 font-(--font-display) text-[clamp(4.5rem,9vw,8.5rem)] leading-[0.88] text-(--color-sepia-dark)">
            Estás jodido si te pierdes esta vaina
          </h2>

          <div className="mx-auto mt-10 max-w-2xl rounded-[2rem] border border-[rgba(90,24,8,0.12)] bg-[rgba(255,248,235,0.7)] px-6 py-6 text-left shadow-[0_18px_40px_rgba(97,31,9,0.1)] backdrop-blur-sm sm:px-7">
            <p className="text-xs uppercase tracking-[0.24em] text-(--color-earth)/78">
              Itinerario original
            </p>
            <p className="mt-3 text-lg leading-relaxed text-[color-mix(in_oklab,var(--color-ink)_90%,transparent)]">
              Si quieres ver el plan completo con más detalle, horarios y
              etapas del recorrido, aquí puedes descargar el CSV original del
              itinerario.
            </p>

            <a
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--color-coral),var(--color-earth)_62%,var(--color-sand))] px-5 py-3 font-(--font-display) text-[1rem] [color:#fff] shadow-[0_14px_28px_rgba(170,47,4,0.2)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(170,47,4,0.24)] sm:text-[1.05rem]"
              download
              href="/documents/itinerario.csv"
            >
              <MaterialSymbol className="text-[1.2rem] [color:#fff]" name="download" />
              <span className="[color:#fff] [text-shadow:0_1px_0_rgba(0,0,0,0.55),0_0_10px_rgba(0,0,0,0.14)]">
                Descargar itinerario
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
