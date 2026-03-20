const navItems = [
  { href: '#ruta', label: 'Ruta' },
]

export function Navbar() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="pointer-events-auto mx-auto flex w-full max-w-7xl items-center justify-between rounded-full border border-white/30 bg-[color:color-mix(in_oklab,var(--color-paper)_70%,transparent)] px-5 py-4 shadow-[0_20px_60px_rgba(62,39,35,0.14)] backdrop-blur-xl md:px-7">
        <a
          className="font-[var(--font-display)] text-3xl leading-none text-[var(--color-sepia-dark)] transition-transform duration-300 hover:scale-[1.02]"
          href="#top"
        >
          Roadtrip Caribe
        </a>

        <div className="hidden items-center gap-8 text-lg italic md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              className="story-link"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a className="journal-button-secondary hidden md:inline-flex" href="#cta">
          ¡Me uno!
        </a>
      </nav>
    </header>
  )
}
