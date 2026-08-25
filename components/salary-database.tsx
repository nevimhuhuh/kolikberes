'use client'

import * as React from 'react'
import { SearchIcon, StarIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import {
  benefitLabel,
  formatCislo,
  formatKc,
  hrubaNaCistou,
  KRAJE,
  median,
  OBORY,
  type Kraj,
  type Obor,
  type SalaryEntry,
} from '@/lib/salary-data'

type Razeni = 'nejnovejsi' | 'nejvyssi' | 'nejnizsi'

export function SalaryDatabase({ entries }: { entries: SalaryEntry[] }) {
  const [hledani, setHledani] = React.useState('')
  const [obor, setObor] = React.useState<Obor | null>(null)
  const [kraj, setKraj] = React.useState<Kraj | null>(null)
  const [razeni, setRazeni] = React.useState<Razeni>('nejnovejsi')

  const filtrovane = React.useMemo(() => {
    const dotaz = hledani.trim().toLowerCase()
    const vysledek = entries.filter((entry) => {
      if (obor && entry.obor !== obor) return false
      if (kraj && entry.kraj !== kraj) return false
      if (dotaz && !entry.pozice.toLowerCase().includes(dotaz)) return false
      return true
    })

    return vysledek.sort((a, b) => {
      if (razeni === 'nejvyssi') return b.mzda - a.mzda
      if (razeni === 'nejnizsi') return a.mzda - b.mzda
      return b.pridano.localeCompare(a.pridano)
    })
  }, [entries, hledani, obor, kraj, razeni])

  const medianFiltru = median(filtrovane.map((entry) => entry.mzda))

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl tracking-tight">
          Databáze mezd a benefitů
        </CardTitle>
        <CardDescription>
          {formatCislo(filtrovane.length)}{' '}
          {filtrovane.length === 1 ? 'příspěvek' : 'příspěvků'} · medián výběru{' '}
          <span className="font-mono font-medium text-foreground tabular-nums">
            {formatKc(medianFiltru)}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <InputGroup className="lg:max-w-72">
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
            <InputGroupInput
              placeholder="Hledat pozici…"
              value={hledani}
              onChange={(event) => setHledani(event.target.value)}
              aria-label="Hledat pozici"
            />
          </InputGroup>

          <div className="flex flex-col gap-3 sm:flex-row lg:ml-auto">
            <Select value={obor} onValueChange={(v) => setObor(v as Obor)}>
              <SelectTrigger className="w-full sm:w-44" aria-label="Filtr obor">
                <SelectValue placeholder="Všechny obory" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value={null}>Všechny obory</SelectItem>
                  {OBORY.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select value={kraj} onValueChange={(v) => setKraj(v as Kraj)}>
              <SelectTrigger className="w-full sm:w-52" aria-label="Filtr kraj">
                <SelectValue placeholder="Všechny kraje" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value={null}>Všechny kraje</SelectItem>
                  {KRAJE.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            <ToggleGroup
              variant="outline"
              spacing={0}
              value={[razeni]}
              onValueChange={(value) => {
                if (value[0]) setRazeni(value[0] as Razeni)
              }}
              aria-label="Řazení"
            >
              <ToggleGroupItem value="nejnovejsi">Nejnovější</ToggleGroupItem>
              <ToggleGroupItem value="nejvyssi">Nejvyšší</ToggleGroupItem>
              <ToggleGroupItem value="nejnizsi">Nejnižší</ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Pozice</TableHead>
                <TableHead>Kraj</TableHead>
                <TableHead>Praxe</TableHead>
                <TableHead>Úvazek</TableHead>
                <TableHead className="text-right">Hrubá</TableHead>
                <TableHead className="text-right">Čistá (odhad)</TableHead>
                <TableHead>Benefity</TableHead>
                <TableHead className="text-right">Spokojenost</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtrovane.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={8}
                    className="py-10 text-center text-muted-foreground"
                  >
                    Pro zvolené filtry zatím nikdo plat nezadal. Zkus jiný obor
                    nebo kraj.
                  </TableCell>
                </TableRow>
              ) : (
                filtrovane.map((entry) => (
                  <TableRow key={entry.id}>
                    <TableCell>
                      <div className="flex flex-col gap-0.5">
                        <span className="font-medium">{entry.pozice}</span>
                        <span className="text-xs text-muted-foreground">
                          {entry.obor}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {entry.kraj}
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">{entry.praxe}</Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {entry.uvazek}
                    </TableCell>
                    <TableCell className="text-right font-mono font-medium tabular-nums">
                      {formatKc(entry.mzda)}
                    </TableCell>
                    <TableCell className="text-right font-mono text-muted-foreground tabular-nums">
                      {formatKc(hrubaNaCistou(entry.mzda))}
                    </TableCell>
                    <TableCell>
                      {entry.benefity.length === 0 ? (
                        <span className="text-muted-foreground">—</span>
                      ) : (
                        <div className="flex flex-wrap gap-1">
                          {entry.benefity.map((id) => (
                            <Badge key={id} variant="outline">
                              {benefitLabel(id)}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center justify-end gap-1">
                        <StarIcon
                          className="size-3.5 fill-primary text-primary"
                          aria-hidden="true"
                        />
                        <span className="font-mono text-sm tabular-nums">
                          {entry.spokojenost}/5
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
