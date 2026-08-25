export const OBORY = [
  'IT',
  'Zdravotnictví',
  'Školství',
  'Výroba',
  'Gastro',
  'Doprava',
  'Finance',
  'Řemesla',
] as const

export type Obor = (typeof OBORY)[number]

export const KRAJE = [
  'Praha',
  'Středočeský kraj',
  'Jihočeský kraj',
  'Plzeňský kraj',
  'Karlovarský kraj',
  'Ústecký kraj',
  'Liberecký kraj',
  'Královéhradecký kraj',
  'Pardubický kraj',
  'Kraj Vysočina',
  'Jihomoravský kraj',
  'Olomoucký kraj',
  'Zlínský kraj',
  'Moravskoslezský kraj',
] as const

export type Kraj = (typeof KRAJE)[number]

export const UVAZKY = ['HPP', 'OSVČ', 'DPP/DPČ'] as const
export type Uvazek = (typeof UVAZKY)[number]

export const PRAXE = ['Junior', 'Medior', 'Senior'] as const
export type Praxe = (typeof PRAXE)[number]

export const BENEFITY = [
  { id: 'home-office', label: 'Home Office' },
  { id: '13-plat', label: '13. plat' },
  { id: 'auto', label: 'Firemní auto' },
  { id: 'stravenky', label: 'Stravenky' },
] as const

export type BenefitId = (typeof BENEFITY)[number]['id']

/** Našeptávač pracovních pozic */
export const POZICE = [
  'Učitel / Učitelka ZŠ',
  'Zdravotní sestra',
  'Řidič kamionu',
  'Řidič MHD',
  'Developer (backend)',
  'Developer (frontend)',
  'Skladník',
  'Účetní',
  'Prodavač / Prodavačka',
  'Kuchař',
  'Servírka / Číšník',
  'Elektrikář',
  'Instalatér',
  'Zedník',
  'Svářeč',
  'Automechanik',
  'Operátor výroby',
  'Seřizovač CNC',
  'Lékař',
  'Fyzioterapeut',
  'Laborant',
  'Personalista (HR)',
  'Marketingový specialista',
  'Grafik',
  'Projektový manažer',
  'Datový analytik',
  'IT administrátor',
  'Tester QA',
  'Bankovní poradce',
  'Finanční analytik',
  'Obchodní zástupce',
  'Recepční',
  'Vychovatel v družině',
  'Logistik / Dispečer',
] as const

export type SalaryEntry = {
  id: string
  pozice: string
  obor: Obor
  kraj: Kraj
  uvazek: Uvazek
  praxe: Praxe
  /** hrubá měsíční mzda v Kč */
  mzda: number
  spokojenost: number
  benefity: BenefitId[]
  pridano: string
  poznamka?: string
}

export const SAMPLE_ENTRIES: SalaryEntry[] = [
  {
    id: 'e1',
    pozice: 'Developer (backend)',
    obor: 'IT',
    kraj: 'Praha',
    uvazek: 'HPP',
    praxe: 'Senior',
    mzda: 128000,
    spokojenost: 5,
    benefity: ['home-office', '13-plat', 'stravenky'],
    pridano: '2026-01-14',
    poznamka: 'Produktová firma, 5 týdnů dovolené, plný home office.',
  },
  {
    id: 'e2',
    pozice: 'Developer (frontend)',
    obor: 'IT',
    kraj: 'Jihomoravský kraj',
    uvazek: 'OSVČ',
    praxe: 'Medior',
    mzda: 95000,
    spokojenost: 4,
    benefity: ['home-office'],
    pridano: '2026-01-22',
    poznamka: 'Fakturace na IČO, sazba 600 Kč/h, agentura.',
  },
  {
    id: 'e3',
    pozice: 'Tester QA',
    obor: 'IT',
    kraj: 'Moravskoslezský kraj',
    uvazek: 'HPP',
    praxe: 'Junior',
    mzda: 46000,
    spokojenost: 3,
    benefity: ['home-office', 'stravenky'],
    pridano: '2026-02-02',
  },
  {
    id: 'e4',
    pozice: 'Zdravotní sestra',
    obor: 'Zdravotnictví',
    kraj: 'Praha',
    uvazek: 'HPP',
    praxe: 'Senior',
    mzda: 54500,
    spokojenost: 3,
    benefity: ['13-plat', 'stravenky'],
    pridano: '2026-01-09',
    poznamka: 'Včetně příplatků za noční a víkendy, JIP.',
  },
  {
    id: 'e5',
    pozice: 'Zdravotní sestra',
    obor: 'Zdravotnictví',
    kraj: 'Olomoucký kraj',
    uvazek: 'HPP',
    praxe: 'Medior',
    mzda: 44200,
    spokojenost: 2,
    benefity: ['stravenky'],
    pridano: '2026-02-11',
  },
  {
    id: 'e6',
    pozice: 'Lékař',
    obor: 'Zdravotnictví',
    kraj: 'Královéhradecký kraj',
    uvazek: 'HPP',
    praxe: 'Medior',
    mzda: 98000,
    spokojenost: 4,
    benefity: ['13-plat', 'stravenky'],
    pridano: '2026-01-28',
    poznamka: 'Krajská nemocnice, hodně přesčasů.',
  },
  {
    id: 'e7',
    pozice: 'Učitel / Učitelka ZŠ',
    obor: 'Školství',
    kraj: 'Středočeský kraj',
    uvazek: 'HPP',
    praxe: 'Medior',
    mzda: 47800,
    spokojenost: 3,
    benefity: ['13-plat'],
    pridano: '2026-01-18',
  },
  {
    id: 'e8',
    pozice: 'Vychovatel v družině',
    obor: 'Školství',
    kraj: 'Ústecký kraj',
    uvazek: 'DPP/DPČ',
    praxe: 'Junior',
    mzda: 24500,
    spokojenost: 2,
    benefity: [],
    pridano: '2026-02-05',
    poznamka: 'Zkrácený úvazek 0,6 – přepočteno na měsíc.',
  },
  {
    id: 'e9',
    pozice: 'Operátor výroby',
    obor: 'Výroba',
    kraj: 'Plzeňský kraj',
    uvazek: 'HPP',
    praxe: 'Junior',
    mzda: 34500,
    spokojenost: 3,
    benefity: ['stravenky'],
    pridano: '2026-01-31',
    poznamka: 'Třísměnný provoz včetně příplatků.',
  },
  {
    id: 'e10',
    pozice: 'Seřizovač CNC',
    obor: 'Výroba',
    kraj: 'Zlínský kraj',
    uvazek: 'HPP',
    praxe: 'Senior',
    mzda: 52000,
    spokojenost: 4,
    benefity: ['13-plat', 'stravenky'],
    pridano: '2026-02-08',
  },
  {
    id: 'e11',
    pozice: 'Skladník',
    obor: 'Doprava',
    kraj: 'Středočeský kraj',
    uvazek: 'HPP',
    praxe: 'Junior',
    mzda: 31500,
    spokojenost: 2,
    benefity: ['stravenky'],
    pridano: '2026-01-25',
  },
  {
    id: 'e12',
    pozice: 'Řidič kamionu',
    obor: 'Doprava',
    kraj: 'Jihočeský kraj',
    uvazek: 'HPP',
    praxe: 'Senior',
    mzda: 48500,
    spokojenost: 3,
    benefity: ['auto'],
    pridano: '2026-02-14',
    poznamka: 'Včetně diet, mezinárodní kamionová doprava.',
  },
  {
    id: 'e13',
    pozice: 'Kuchař',
    obor: 'Gastro',
    kraj: 'Praha',
    uvazek: 'HPP',
    praxe: 'Medior',
    mzda: 42000,
    spokojenost: 3,
    benefity: ['stravenky'],
    pridano: '2026-01-20',
  },
  {
    id: 'e14',
    pozice: 'Servírka / Číšník',
    obor: 'Gastro',
    kraj: 'Karlovarský kraj',
    uvazek: 'DPP/DPČ',
    praxe: 'Junior',
    mzda: 26000,
    spokojenost: 2,
    benefity: [],
    pridano: '2026-02-16',
    poznamka: 'Bez spropitného, sezónní provoz.',
  },
  {
    id: 'e15',
    pozice: 'Účetní',
    obor: 'Finance',
    kraj: 'Jihomoravský kraj',
    uvazek: 'HPP',
    praxe: 'Senior',
    mzda: 58000,
    spokojenost: 4,
    benefity: ['home-office', '13-plat', 'stravenky'],
    pridano: '2026-01-12',
  },
  {
    id: 'e16',
    pozice: 'Bankovní poradce',
    obor: 'Finance',
    kraj: 'Liberecký kraj',
    uvazek: 'HPP',
    praxe: 'Medior',
    mzda: 45000,
    spokojenost: 3,
    benefity: ['13-plat', 'stravenky'],
    pridano: '2026-02-01',
    poznamka: 'Fixní část + bonusy za prodej.',
  },
  {
    id: 'e17',
    pozice: 'Elektrikář',
    obor: 'Řemesla',
    kraj: 'Pardubický kraj',
    uvazek: 'OSVČ',
    praxe: 'Senior',
    mzda: 72000,
    spokojenost: 5,
    benefity: ['auto'],
    pridano: '2026-01-30',
    poznamka: 'Vlastní zakázky, revize elektro.',
  },
  {
    id: 'e18',
    pozice: 'Instalatér',
    obor: 'Řemesla',
    kraj: 'Kraj Vysočina',
    uvazek: 'OSVČ',
    praxe: 'Medior',
    mzda: 56000,
    spokojenost: 4,
    benefity: ['auto'],
    pridano: '2026-02-10',
  },
  {
    id: 'e19',
    pozice: 'Datový analytik',
    obor: 'IT',
    kraj: 'Praha',
    uvazek: 'HPP',
    praxe: 'Medior',
    mzda: 82000,
    spokojenost: 4,
    benefity: ['home-office', 'stravenky'],
    pridano: '2026-02-18',
  },
  {
    id: 'e20',
    pozice: 'Marketingový specialista',
    obor: 'Finance',
    kraj: 'Moravskoslezský kraj',
    uvazek: 'HPP',
    praxe: 'Junior',
    mzda: 38000,
    spokojenost: 3,
    benefity: ['home-office'],
    pridano: '2026-02-19',
  },
]

/** Orientační medián hrubé mzdy podle kraje (Kč / měsíc) */
export const KRAJ_MEDIAN: Record<Kraj, number> = {
  Praha: 52400,
  'Středočeský kraj': 43800,
  'Jihočeský kraj': 40200,
  'Plzeňský kraj': 41600,
  'Karlovarský kraj': 37500,
  'Ústecký kraj': 38600,
  'Liberecký kraj': 39400,
  'Královéhradecký kraj': 39900,
  'Pardubický kraj': 39100,
  'Kraj Vysočina': 39600,
  'Jihomoravský kraj': 43100,
  'Olomoucký kraj': 38800,
  'Zlínský kraj': 38400,
  'Moravskoslezský kraj': 39700,
}

const OBOR_KOEFICIENT: Record<Obor, number> = {
  IT: 1.72,
  Zdravotnictví: 1.18,
  Školství: 1.06,
  Výroba: 0.94,
  Gastro: 0.78,
  Doprava: 0.9,
  Finance: 1.22,
  Řemesla: 1.1,
}

const PRAXE_KOEFICIENT: Record<Praxe, number> = {
  Junior: 0.76,
  Medior: 1,
  Senior: 1.32,
}

const UVAZEK_KOEFICIENT: Record<Uvazek, number> = {
  HPP: 1,
  OSVČ: 1.28,
  'DPP/DPČ': 0.62,
}

export function formatKc(value: number) {
  return new Intl.NumberFormat('cs-CZ', {
    style: 'currency',
    currency: 'CZK',
    maximumFractionDigits: 0,
  }).format(Math.round(value))
}

export function formatCislo(value: number) {
  return new Intl.NumberFormat('cs-CZ', { maximumFractionDigits: 0 }).format(
    Math.round(value),
  )
}

/** Orientační přepočet hrubé mzdy na čistou (ČR, 2026) */
export function hrubaNaCistou(hruba: number) {
  const odvody = hruba * 0.111
  const dan = Math.max(0, hruba * 0.15 - 2570)
  return Math.max(0, hruba - odvody - dan)
}

export function cistaNaHrubou(cista: number) {
  let low = cista
  let high = cista * 2.2
  for (let i = 0; i < 40; i++) {
    const mid = (low + high) / 2
    if (hrubaNaCistou(mid) < cista) low = mid
    else high = mid
  }
  return (low + high) / 2
}

export function median(values: number[]) {
  if (values.length === 0) return 0
  const sorted = [...values].sort((a, b) => a - b)
  const mid = Math.floor(sorted.length / 2)
  return sorted.length % 2 === 0
    ? (sorted[mid - 1] + sorted[mid]) / 2
    : sorted[mid]
}

export function average(values: number[]) {
  if (values.length === 0) return 0
  return values.reduce((sum, value) => sum + value, 0) / values.length
}

/**
 * Modelový medián pro danou kombinaci. Kombinuje reálné příspěvky v databázi
 * s modelem (kraj × obor × praxe × úvazek), aby dashboard fungoval i pro
 * kombinace, ke kterým zatím nikdo plat nezadal.
 */
export function modelovyMedian(input: {
  obor: Obor
  kraj: Kraj
  praxe: Praxe
  uvazek: Uvazek
}) {
  const base =
    KRAJ_MEDIAN[input.kraj] *
    OBOR_KOEFICIENT[input.obor] *
    PRAXE_KOEFICIENT[input.praxe] *
    UVAZEK_KOEFICIENT[input.uvazek]
  return Math.round(base / 100) * 100
}

export type Statistiky = {
  medianTrh: number
  prumerTrh: number
  vzorek: number
  rozdilProcent: number
  doporuceniOd: number
  doporuceniDo: number
  percentil: number
  rozlozeni: { label: string; od: number; do: number; pocet: number }[]
}

export function spocitejStatistiky(
  entries: SalaryEntry[],
  input: {
    obor: Obor
    kraj: Kraj
    praxe: Praxe
    uvazek: Uvazek
    mzdaHruba: number
    pozice: string
  },
): Statistiky {
  const relevantni = entries.filter(
    (e) =>
      e.obor === input.obor &&
      (e.pozice === input.pozice ||
        e.kraj === input.kraj ||
        e.praxe === input.praxe),
  )
  const model = modelovyMedian(input)
  const hodnoty = relevantni.map((e) => e.mzda)
  // Model doplní vzorek, aby statistika nebyla zkreslená malým počtem dat.
  const smes = [...hodnoty, model, model * 0.88, model * 1.14]
  const medianTrh = median(smes)
  const prumerTrh = average(smes)
  const rozdilProcent =
    medianTrh > 0 ? ((input.mzdaHruba - medianTrh) / medianTrh) * 100 : 0
  const percentil =
    (smes.filter((v) => v <= input.mzdaHruba).length / smes.length) * 100

  const buckets = [0.6, 0.8, 1, 1.2, 1.45, 1.8].map((k, i, arr) => {
    const od = Math.round((medianTrh * (i === 0 ? 0.35 : arr[i - 1])) / 1000)
    const doHodnota = Math.round((medianTrh * k) / 1000)
    return { od: od * 1000, do: doHodnota * 1000 }
  })

  const rozlozeni = buckets.map(({ od, do: doHodnota }) => {
    const sirka = doHodnota - od
    const stred = (od + doHodnota) / 2
    // Zvonový model rozložení kolem mediánu + reálné příspěvky.
    const odchylka = (stred - medianTrh) / (medianTrh * 0.42)
    const modelPocet = Math.round(
      Math.exp(-0.5 * odchylka * odchylka) * 42 * (sirka / (medianTrh * 0.25)),
    )
    const realne = hodnoty.filter((v) => v >= od && v < doHodnota).length
    return {
      label: `${formatCislo(od / 1000)}–${formatCislo(doHodnota / 1000)} tis.`,
      od,
      do: doHodnota,
      pocet: Math.max(1, modelPocet + realne * 3),
    }
  })

  return {
    medianTrh,
    prumerTrh,
    vzorek: relevantni.length,
    rozdilProcent,
    percentil,
    doporuceniOd: Math.round((medianTrh * 1.08) / 500) * 500,
    doporuceniDo: Math.round((medianTrh * 1.28) / 500) * 500,
    rozlozeni,
  }
}

export function benefitLabel(id: BenefitId) {
  return BENEFITY.find((b) => b.id === id)?.label ?? id
}
