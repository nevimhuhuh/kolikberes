import { ArrowDownIcon, CalendarIcon, ShieldCheckIcon, UserXIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { formatKc, KRAJ_MEDIAN, SAMPLE_ENTRIES, median } from '@/lib/salary-data'

const odznaky = [
  { icon: ShieldCheckIcon, label: '100% Anonymní' },
  { icon: UserXIcon, label: 'Bez registrace' },
  { icon: CalendarIcon, label: 'Data pro rok 2026' },
]

export function HeroSection() {
  const medianVsech = median(SAMPLE_ENTRIES.map((e) => e.mzda))
  const nejvyssiKraj = Object.entries(KRAJ_MEDIAN).sort(
    (a, b) => b[1] - a[1],
  )[0]

  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="flex flex-col items-start gap-6">
          <Badge variant="secondary" className="h-7 px-3 text-[13px]">
            {SAMPLE_ENTRIES.length}+ anonymních příspěvků z celé ČR
          </Badge>

          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Zjisti, kolik reálně berou ostatní v ČR
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Anonymní databáze mezd a benefitů podle oborů a krajů.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              render={<a href="#formular" />}
              nativeButton={false}
            >
              Zadat plat a zobrazit data
              <ArrowDownIcon data-icon="inline-end" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              render={<a href="#databaze" />}
              nativeButton={false}
            >
              Prohlédnout databázi
            </Button>
          </div>

          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2">
            {odznaky.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground"
              >
                <Icon className="size-4 text-primary" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm sm:grid-cols-2 lg:grid-cols-1">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Medián databáze
            </span>
            <span className="font-mono text-3xl font-semibold tabular-nums">
              {formatKc(medianVsech)}
            </span>
            <span className="text-sm text-muted-foreground">
              hrubá měsíční mzda napříč obory
            </span>
          </div>
          <div className="h-px bg-border sm:hidden lg:block" />
          <div className="flex flex-col gap-1">
            <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Nejlépe placený kraj
            </span>
            <span className="font-mono text-3xl font-semibold tabular-nums">
              {nejvyssiKraj[0]}
            </span>
            <span className="text-sm text-muted-foreground">
              medián {formatKc(nejvyssiKraj[1])}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
