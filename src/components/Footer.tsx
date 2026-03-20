const footerLinks = ['Términos', 'Privacidad', 'Contacto']

export function Footer() {
  return (
    <footer className="mt-10 bg-[color:color-mix(in_oklab,var(--color-paper)_70%,var(--color-earth)_10%)] px-8 py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
        <div className="font-[var(--font-display)] text-4xl text-[var(--color-sepia-dark)]">
          Diario de la Expedición
        </div>

        <p className="text-center italic text-[var(--color-ink)]/62">
          © 2024 Memorias del Caribe.
          <br />
          Escrito a mano para el explorador curioso.
        </p>

        <div className="flex gap-8 font-[var(--font-display)] text-2xl text-[var(--color-earth)]">
          {footerLinks.map((link) => (
            <a key={link} className="story-link" href="#top">
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
