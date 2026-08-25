import { DatabaseIcon, EyeOffIcon, ScaleIcon } from 'lucide-react'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const body = [
  {
    icon: EyeOffIcon,
    title: 'Nulová identita',
    text: 'Nesbíráme jméno, e-mail, IP ani název firmy. Příspěvek nelze zpětně spojit s člověkem — proto lidé píšou pravdu.',
  },
  {
    icon: DatabaseIcon,
    title: 'Data z první ruky',
    text: 'Každý záznam zadal člověk, který danou práci reálně dělá. Doplňujeme je modelem podle kraje, oboru a praxe, aby fungovaly i vzácné kombinace.',
  },
  {
    icon: ScaleIcon,
    title: 'Vyrovnaná vyjednávací pozice',
    text: 'Firmy znají mzdové tabulky celého trhu. Ty jsi měl doteď jen svoji výplatní pásku. Tohle to srovnává.',
  },
]

export function AboutSection() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex max-w-2xl flex-col gap-3">
        <h2 className="text-3xl font-semibold tracking-tight text-balance">
          Proč mluvit o platech nahlas
        </h2>
        <p className="leading-relaxed text-muted-foreground text-pretty">
          V Česku je plat pořád tabu a nejvíc na tom vydělává ten, kdo sedí na
          druhé straně stolu. KolikBeres.cz je veřejná anonymní databáze — dáš
          jeden údaj, získáš přehled o celém trhu.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {body.map(({ icon: Icon, title, text }) => (
          <Card key={title}>
            <CardHeader>
              <span className="flex size-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <Icon className="size-4" aria-hidden="true" />
              </span>
              <CardTitle>{title}</CardTitle>
              <CardDescription className="leading-relaxed">
                {text}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <Card className="bg-secondary/60">
        <CardContent className="flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground">
          <p className="font-medium text-foreground">
            Jak počítáme čistou mzdu
          </p>
          <p className="max-w-3xl text-pretty">
            Odhad vychází z odvodů zaměstnance (sociální 7,1 % a zdravotní 4,5
            %) a 15% daně z příjmu se základní slevou na dani. Nezahrnuje slevu
            na děti, hypoteční úroky ani další odpočty — jde o orientační
            číslo pro srovnání, ne o daňové poradenství.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
