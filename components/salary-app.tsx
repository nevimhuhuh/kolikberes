D'use client'

import * as React from 'react'
import { LockIcon } from 'lucide-react'

import { SalaryDatabase } from '@/components/salary-database'
import SalaryForm, { type SalaryFormValues } from '@/components/salary-form'
import { SalaryResults } from '@/components/salary-results'
import { WageMapSection } from '@/components/wage-map-section'
import {
  SAMPLE_ENTRIES,
  spocitejStatistiky,
  type SalaryEntry,
} from '@/lib/salary-data'

export function SalaryApp() {
  const [entries, setEntries] = React.useState<SalaryEntry[]>(SAMPLE_ENTRIES)
  const [odeslano, setOdeslano] = React.useState<SalaryFormValues | null>(null)
  const vysledkyRef = React.useRef<HTMLDivElement | null>(null)

  function handleSubmit(values: SalaryFormValues) {
    const entry: SalaryEntry = {
      id: `user-${Date.now()}`,
      pozice: values.pozice,
      obor: values.obor,
      kraj: values.kraj,
      uvazek: values.uvazek,
      praxe: values.praxe,
      mzda: values.mzdaHruba,
      spokojenost: values.spokojenost,
      benefity: values.benefity,
      pridano: new Date().toISOString().slice(0, 10),
    }
    setEntries((prev) => [entry, ...prev])
    setOdeslano(values)
    requestAnimationFrame(() => {
      vysledkyRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  const stats = odeslano ? spocitejStatistiky(entries, odeslano) : null

  return (
    <>
      <section
        id="formular"
        className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6"
      >
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="flex flex-col gap-4 lg:sticky lg:top-28">
            <h2 className="text-3xl font-semibold tracking-tight text-balance">
              Jeden údaj od tebe, celý trh pro tebe
            </h2>
            <p className="leading-relaxed text-muted-foreground text-pretty">
              Vyplň formulář a okamžitě uvidíš medián pro svou pozici, kraj a
              praxi, rozložení mezd i doporučené rozpětí pro vyjednávání.
            </p>
            <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
              <LockIcon
                className="mt-0.5 size-4 shrink-0 text-primary"
                aria-hidden="true"
              />
              <p className="text-sm leading-relaxed text-muted-foreground">
                Data zůstávají anonymní. Neptáme se na firmu, jméno ani e-mail
                a nevyžadujeme registraci.
              </p>
            </div>
          </div>

          <SalaryForm onSubmit={handleSubmit} />
        </div>
      </section>

      {odeslano && stats ? (
        <section
          ref={vysledkyRef}
          id="vysledky"
          aria-live="polite"
          className="scroll-mt-24 border-y border-border bg-card/60"
        >
          <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
            <SalaryResults values={odeslano} stats={stats} />
          </div>
        </section>
      ) : null}

      <section
        id="databaze"
        className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6"
      >
        <SalaryDatabase entries={entries} />
      </section>

      <section
        id="mapa-mezd"
        className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 pb-16 sm:px-6"
      >
        <WageMapSection />
      </section>
    </>
  )
}
