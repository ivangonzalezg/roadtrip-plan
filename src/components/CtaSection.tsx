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
        </div>
      </div>
    </section>
  );
}
