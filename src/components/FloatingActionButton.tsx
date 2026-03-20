import { MaterialSymbol } from './MaterialSymbol'

export function FloatingActionButton() {
  return (
    <a
      aria-label="Abrir el diario de viaje"
      className="fixed bottom-6 right-6 z-40 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-earth)] text-white shadow-[0_18px_40px_rgba(62,39,35,0.35)] transition duration-300 hover:scale-105 active:scale-95 md:hidden"
      href="#bitacora"
    >
      <MaterialSymbol className="text-3xl" name="menu_book" />
    </a>
  )
}
