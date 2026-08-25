'use client'

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ReferenceLine,
  XAxis,
  YAxis,
} from 'recharts'
import {
  ArrowUpRightIcon,
  MinusIcon,
  TrendingDownIcon,
  TrendingUpIcon,
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import {
  benefitLabel,
  formatCislo,
  formatKc,
  hrubaNaCistou,
  type Statistiky,
} from '@/lib/salary-data'
import type { SalaryFormValues } from '@/components/salary-form'

const chartConfig = {
  pocet: {
    label: 'Počet lidí',
    color: 'var(--chart-3)',
  },
} satisfies ChartConfig

export function SalaryResults({
  values,
  stats,
}: {
  values: SalaryFormValues
  stats: Statistiky
}) {
  const nadTrhem = stats.rozdilProcent >= 3
  const podTrhem = stats.rozdilProcent <= -3
  const TrendIcon = nadTrhem
    ? TrendingUpIcon
    : podTrhem
      ? TrendingDownIcon
      : MinusIcon

  const mujBucket = stats.rozlozeni.find(
    (bucket) => values.mzdaHruba >= bucket.od && values.mzdaHruba < bucket.do,
  )

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-semibold tracking-tight text-balance">
            Tvůj výsledek
          </h2>
          <p className="text-muted-foreground">
            {values.pozice} · {values.obor} · {values.kraj} · {values.praxe} ·{' '}
            {values.uvazek}
          </p>
        </div>
        <Badge variant="outline" className="h-7 px-3">
          Vzorek {formatCislo(stats.vzorek)} podobných příspěvků
        </Badge>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card
          className={cn(
            'lg:col-span-1',
            nadTrhem && 'border-primary/40 bg-accent/40',
          )}
        >
          <CardHeader>
            <CardDescription>Tvoje mzda vs. trh</CardDescription>
            <CardTitle className="flex items-baseline gap-2 font-mono text-4xl tabular-nums">
              {stats.rozdilProcent > 0 ? '+' : ''}
              {formatCislo(stats.rozdilProcent)}%
              <TrendIcon
                className={cn(
                  'size-6 shrink-0',
                  nadTrhem
                    ? 'text-primary'
                    : podTrhem
                      ? 'text-destructive'
                      : 'text-muted-foreground',
                )}
                aria-hidden="true"
              />
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <p className="text-sm leading-relaxed text-muted-foreground">
              {nadTrhem
                ? 'Bereš víc než medián lidí na obdobné pozici ve tvém kraji.'
                : podTrhem
                  ? 'Bereš méně než medián lidí na obdobné pozici ve tvém kraji.'
                  : 'Tvoje mzda odpovídá mediánu na obdobné pozici ve tvém kraji.'}
            </p>
            <Separator />
            <dl className="grid gap-3">
              <div className="flex items-center justify-between gap-4">
                <dt className="text-sm text-muted-foreground">Tvoje hrubá</dt>
                <dd className="font-mono text-sm font-medium tabular-nums">
                  {formatKc(values.mzdaHruba)}
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="text-sm text-muted-foreground">
                  Tvoje čistá (odhad)
                </dt>
                <dd className="font-mono text-sm font-medium tabular-nums">
                  {formatKc(hrubaNaCistou(values.mzdaHruba))}
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="text-sm text-muted-foreground">Medián trhu</dt>
                <dd className="font-mono text-sm font-medium tabular-nums">
                  {formatKc(stats.medianTrh)}
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="text-sm text-muted-foreground">Průměr trhu</dt>
                <dd className="font-mono text-sm font-medium tabular-nums">
                  {formatKc(stats.prumerTrh)}
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="text-sm text-muted-foreground">
                  Tvůj percentil
                </dt>
                <dd className="font-mono text-sm font-medium tabular-nums">
                  {formatCislo(stats.percentil)}.
                </dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Rozložení mezd na obdobné pozici</CardTitle>
            <CardDescription>
              Hrubá měsíční mzda v tisících Kč — {values.obor}, {values.kraj},{' '}
              {values.praxe}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={chartConfig}
              className="h-[280px] w-full aspect-auto"
            >
              <BarChart
                data={stats.rozlozeni}
                margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="label"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  interval={0}
                  tick={{ fontSize: 11 }}
                />
                <YAxis hide />
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      formatter={(value) => (
                        <span className="font-mono tabular-nums">
                          {formatCislo(Number(value))} lidí
                        </span>
                      )}
                    />
                  }
                />
                <ReferenceLine
                  x={mujBucket?.label}
                  stroke="var(--primary)"
                  strokeDasharray="4 4"
                  label={{
                    value: 'Ty',
                    position: 'top',
                    fill: 'var(--primary)',
                    fontSize: 12,
                  }}
                />
                <Bar dataKey="pocet" radius={[6, 6, 0, 0]}>
                  {stats.rozlozeni.map((bucket) => (
                    <Cell
                      key={bucket.label}
                      fill={
                        bucket.label === mujBucket?.label
                          ? 'var(--chart-1)'
                          : 'var(--chart-3)'
                      }
                    />
                  ))}
                </Bar>
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <Card className="border-primary/30 bg-accent/30">
        <CardHeader>
          <CardDescription>Doporučení pro vyjednávání</CardDescription>
          <CardTitle className="font-mono text-3xl tabular-nums">
            {formatKc(stats.doporuceniOd)} – {formatKc(stats.doporuceniDo)}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <p className="max-w-3xl leading-relaxed text-pretty">
            Podle dat je pro tvou kombinaci pozice, kraje a praxe reálné cílit
            při vyjednávání do tohoto rozpětí hrubé mzdy. Argumentuj mediánem{' '}
            {formatKc(stats.medianTrh)} a konkrétními výsledky své práce.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-muted-foreground">
              Tvoje benefity:
            </span>
            {values.benefity.length > 0 ? (
              values.benefity.map((id) => (
                <Badge key={id} variant="secondary">
                  {benefitLabel(id)}
                </Badge>
              ))
            ) : (
              <Badge variant="outline">Žádné vykázané benefity</Badge>
            )}
          </div>
          <a
            href="#databaze"
            className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            Porovnat s celou databází
            <ArrowUpRightIcon className="size-4" aria-hidden="true" />
          </a>
        </CardContent>
      </Card>
    </div>
  )
}
