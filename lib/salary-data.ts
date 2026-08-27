export interface SalaryEntry {
  id: string
  pozice: string
  obor: string
  kraj: string
  uvazek: string
  praxe: string
  mzda: number
  spokojenost: number
  benefity: string[]
  pridano: string
}

export const OBORY_A_POZICE: Record<string, string[]> = {
  "IT, Vývoj & Data": [
    "25121 — Frontend Vývojář",
    "25122 — Backend Vývojář",
    "25123 — Fullstack Vývojář",
    "25124 — Mobilní Vývojář (iOS/Android)",
    "25190 — DevOps Inženýr",
    "25191 — QA Tester / Tester Softwaru",
    "25210 — Data Analyst / Data Scientist",
    "25220 — IT Správce / Sysadmin",
    "25290 — Cybersecurity Specialist",
    "25110 — Solution / System Architect",
    "24210 — Scrum Master / Agile Coach",
    "24220 — Product Owner / IT Project Manager"
  ],
  "Administrativa, HR & Management": [
    "11200 — Generální Ředitel (CEO)",
    "12110 — Finanční Ředitel (CFO)",
    "12190 — Provozní Ředitel (COO)",
    "24230 — HR Specialist / Recruiter",
    "33430 — Office Manager",
    "41100 — Administrativní Pracovník / Asistent/ka",
    "24221 — Projektový Manažer",
    "33390 — Zákaznická Podpora (Customer Support)"
  ],
  "Obchod, Marketing & PR": [
    "24310 — Marketingový Specialist / Strateg",
    "24311 — SEO / PPC Specialist",
    "24312 — Social Media Manager",
    "26420 — Copywriter / Content Specialist",
    "24320 — PR Specialist / Tiskový Mluvčí",
    "33220 — Obchodní Zástupce (Sales Rep)",
    "24330 — Key Account Manager",
    "52230 — Prodavač / Prodavačka",
    "52440 — Pokladník / Telemarketer"
  ],
  "Stavebnictví, Architektura & Řemesla": [
    "21610 — Architekt",
    "21420 — Stavební Inženýr / Projektant",
    "31230 — Stavbyvedoucí / Mistr",
    "71110 — Zedník",
    "71120 — Tesař / Pokrývač",
    "71150 — Stolař / Truhlář",
    "71260 — Instalatér / Topenář",
    "74110 — Elektrikář / Elektromontér",
    "72120 — Svářeč",
    "71230 — Malíř / Natěrač",
    "71220 — Podlahář / Obkladač"
  ],
  "Zdravotnictví, Farmacie & Sociální péče": [
    "22110 — Praktický Lékař",
    "22120 — Lékař Specialist",
    "22610 — Zubní Lékař (Stomatolog)",
    "22620 — Lékárník",
    "22210 — Všeobecná Sestra",
    "22640 — Fyzioterapeut",
    "32580 — Zdravotnický Záchranář",
    "53210 — Sanitář / Ošetřovatel / Pečovatel",
    "22690 — Nutriční Terapeut"
  ],
  "Školství, Věda & Výzkum": [
    "23420 — Učitel/ka MŠ",
    "23410 — Učitel/ka 1. stupně ZŠ",
    "23300 — Učitel/ka 2. stupně ZŠ a SŠ",
    "23100 — Vysokoškolský Pedagog",
    "23520 — Speciální Pedagog / Logoped",
    "53120 — Asistent Pedagoga",
    "21000 — Vědecký Pracovník / Výzkumník",
    "34220 — Sportovní Trenér / Instruktor"
  ],
  "Doprava, Logistika & Sklady": [
    "83320 — Řidič Kamionu / Nákladního Auta (C/E)",
    "83310 — Řidič Autobusu / MHD",
    "83220 — Kurýr / Řidič Dodávky",
    "83440 — Řidič VZV (Vysokozdvižného Vozíku)",
    "43210 — Skladník / Operátor Skladu",
    "33310 — Dispečer Logistiky / Dopravy",
    "31510 — Strojvůdce",
    "83120 — Železničář / Posunovač"
  ],
  "Gastro, Služby & Cestovní ruch": [
    "51200 — Kuchař / Šéfkuchař",
    "51310 — Číšník / Servírka",
    "51320 — Barista / Bartender",
    "42240 — Recepční",
    "51410 — Kadeřník / Barber",
    "51420 — Kosmetička / Manikérka",
    "75120 — Pekař / Cukrář",
    "51530 — Údržbář / Hodinový Manžel",
    "51510 — Uklízeč / Uklízečka"
  ],
  "Výroba, Průmysl & Auto-Moto": [
    "81000 — Operátor Výroby / Dělník",
    "72230 — Seřizovač / Obsluha CNC Strojů",
    "72310 — Automechanik / Diagnostik",
    "71320 — Lakýrník",
    "21440 — Strojní Inženýr / Konstruktér",
    "21410 — Kontrolor Kvality (QA/QC)",
    "72220 — Nástrojař",
    "81210 — Slévač / Hutník"
  ],
  "Finance, Účetnictví & Právo": [
    "24110 — Účetní / Hlavní Účetní",
    "24120 — Finanční Analytik",
    "24130 — Daňový Poradce",
    "24140 — Auditor",
    "33110 — Bankovní Poradce",
    "26110 — Advokát / Právník",
    "26120 — Soudce / Státní Zástupce",
    "26190 — Právní Koncipient"
  ],
  "Státní správa, Bezpečnost & Záchranáři": [
    "54120 — Policista / Policistka",
    "54110 — Hasič",
    "54130 — Voják z Povolání",
    "54140 — Strážník Městské Policie",
    "24222 — Úředník Státní Správy / Samosprávy",
    "54190 — Pracovník Ostrahy / Bezpečnostní Služba",
    "26111 — Celník / Exekutor"
  ],
  "Zemědělství, Lesnictví & Ekologie": [
    "61110 — Zemědělec / Agronom",
    "62100 — Lesník / Traktorista",
    "61210 — Chovatel Zvířat / Veterinární Technik",
    "22500 — Veterinární Lékař",
    "21330 — Ekolog / Environmentalista"
  ]
}

export const KRAJE = [
  "Hlavní město Praha",
  "Středočeský kraj",
  "Jihočeský kraj",
  "Plzeňský kraj",
  "Karlovarský kraj",
  "Ústecký kraj",
  "Liberecký kraj",
  "Královéhradecký kraj",
  "Pardubický kraj",
  "Kraj Vysočina",
  "Jihomoravský kraj",
  "Olomoucký kraj",
  "Zlínský kraj",
  "Moravskoslezský kraj"
]
