import { CoinsIcon } from 'lucide-react'

import { Separator } from '@/components/ui/separator'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="flex items-center gap-2 font-semibold">
            <span className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <CoinsIcon className="size-3.5" aria-hidden="true" />
            </span>
            KolikBeres.cz
          </span>
          <nav
            aria-label="Odkazy v zápatí"
            className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground"
          >
            <a href="#formular" className="hover:text-foreground">
              Přidat plat
            </a>
            <a href="#databaze" className="hover:text-foreground">
              Databáze
            </a>
            <a href="#mapa-mezd" className="hover:text-foreground">
              Mapa mezd
            </a>
            <a href="#o-projektu" className="hover:text-foreground">
              O projektu
            </a>
          </nav>
        </div>
        <Separator />
        <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
          Data jsou anonymní příspěvky uživatelů doplněné statistickým modelem
          pro rok 2026. Slouží k orientaci na trhu práce, nejde o oficiální
          statistiku ani o daňové poradenství.
        </p>
      </div>
    </footer>
  )
}
