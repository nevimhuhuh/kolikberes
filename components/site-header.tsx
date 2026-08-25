import { CoinsIcon, PlusIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

const navItems = [
  { href: '#databaze', label: 'Databáze' },
  { href: '#mapa-mezd', label: 'Mapa mezd' },
  { href: '#o-projektu', label: 'O projektu' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-4 px-4 sm:px-6">
        <a
          href="#top"
          className="flex items-center gap-2 text-base font-semibold tracking-tight"
        >
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <CoinsIcon className="size-4" aria-hidden="true" />
          </span>
          KolikBeres<span className="-ml-1 text-muted-foreground">.cz</span>
        </a>

        <nav
          aria-label="Hlavní navigace"
          className="ml-auto hidden items-center gap-1 md:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button
          render={<a href="#formular" />}
          nativeButton={false}
          className="ml-auto md:ml-2"
        >
          <PlusIcon data-icon="inline-start" />
          <span className="hidden sm:inline">Přidat plat (Anonymně)</span>
          <span className="sm:hidden">Přidat plat</span>
        </Button>
      </div>

      <nav
        aria-label="Navigace sekcí"
        className="flex items-center gap-1 overflow-x-auto border-t border-border/70 px-4 py-2 md:hidden"
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="shrink-0 rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
