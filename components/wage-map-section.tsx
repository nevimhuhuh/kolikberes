'use client'

import * as React from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { cn } from '@/lib/utils'
import { formatKc, hrubaNaCistou, KRAJ_MEDIAN, type Kraj } from '@/lib/salary-data'

export function WageMapSection() {
  const [typ, setTyp] = React.useState<'hruba' | 'cista'>('hruba')

  const kraje = Object.entries(KRAJ_MEDIAN)
    .map(([kraj, hruba]) => ({
      kraj: kraj as Kraj,
      hodnota: typ === 'hruba' ? hruba : hrubaNaCistou(hruba),
    }))
    .sort((a, b) => b.hodnota - a.hodnota)

  const maximum = kraje[0]?.hodnota ?? 1
  const minimum = kraje[kraje.length - 1]?.hodnota ?? 0

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            <CardTitle className="text-2xl tracking-tight">
              Mapa mezd podle krajů
            </CardTitle>
            <CardDescription>
              Medián měsíční mzdy ve všech 14 krajích ČR. Rozdíl mezi nejlépe a
              nejhůř placeným krajem je{' '}
              <span className="font-mono font-medium text-foreground tabular-nums">
                {formatKc(maximum - minimum)}
              </span>
              .
            </CardDescription>
          </div>
          <ToggleGroup
            variant="outline"
            spacing={0}
            value={[typ]}
            onValueChange={(value) => {
              if (value[0]) setTyp(value[0] as 'hruba' | 'cista')
            }}
            aria-label="Typ mzdy"
          >
            <ToggleGroupItem value="hruba">Hrubá</ToggleGroupItem>
            <ToggleGroupItem value="cista">Čistá</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
          {kraje.map(({ kraj, hodnota }, index) => (
            <li key={kraj} className="flex flex-col gap-1.5">
              <div className="flex items-baseline justify-between gap-3">
                <span className="text-sm font-medium">
                  <span className="mr-2 font-mono text-xs text-muted-foreground tabular-nums">
                    {index + 1}.
                  </span>
                  {kraj}
                </span>
                <span className="font-mono text-sm tabular-nums">
                  {formatKc(hodnota)}
                </span>
              </div>
              <div
                className="h-2 w-full overflow-hidden rounded-full bg-secondary"
                role="presentation"
              >
                <div
                  className={cn(
                    'h-full rounded-full',
                    index === 0 ? 'bg-primary' : 'bg-primary/55',
                  )}
                  style={{ width: `${(hodnota / maximum) * 100}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
