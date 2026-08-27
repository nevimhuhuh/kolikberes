"use client"

import MouseSpotlight from "../components/MouseSpotlight"
import TiltCard from "../components/TiltCard"
import { OBORY_A_POZICE, KRAJE } from "../lib/salary-data"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#060608] text-white bg-grid-pattern overflow-hidden px-4 py-12">
      {/* Světelný reflektor reagující na pohyb myši */}
      <MouseSpotlight />

      <div className="relative z-10 max-w-6xl mx-auto space-y-12">
        {/* Hlavička s neónovým akcentem */}
        <header className="text-center space-y-4 pt-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-semibold tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> Live Data ČR 2026
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-neon-gradient">
            Přehled Platů & Mzdová Kalkulačka
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-base md:text-lg">
            Porovnej své příjmy s oficiálními CZ-ISCO kódy profesí a reálnými daty z celého Česka.
          </p>
        </header>

        {/* 3D Naklápěcí Skleněné Karty */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TiltCard>
            <div className="text-xs uppercase text-zinc-500 font-bold tracking-wider">Průměrná mzda ČR</div>
            <div className="text-3xl md:text-4xl font-black text-white mt-2">46 500 Kč</div>
            <p className="text-xs text-emerald-400 mt-2 font-medium">↑ +7.2 % oproti minulému roku</p>
          </TiltCard>

          <TiltCard>
            <div className="text-xs uppercase text-zinc-500 font-bold tracking-wider">Nejžádanější sektor</div>
            <div className="text-3xl md:text-4xl font-black text-red-400 mt-2">IT & Data</div>
            <p className="text-xs text-zinc-400 mt-2">Průměr: 85 000 Kč / měsíc</p>
          </TiltCard>

          <TiltCard>
            <div className="text-xs uppercase text-zinc-500 font-bold tracking-wider">Ověřené záznamy</div>
            <div className="text-3xl md:text-4xl font-black text-white mt-2">1 420+</div>
            <p className="text-xs text-zinc-400 mt-2">Zahrnuje všech 14 krajů ČR</p>
          </TiltCard>
        </div>

        {/* Interaktivní Vyhledávač & Formulář */}
        <TiltCard className="p-8 border-red-500/20">
          <h2 className="text-2xl font-bold text-white mb-6">Vyhledat pozici a srovnat mzdu</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-300">Vyber obor a CZ-ISCO pozici</label>
              <select className="w-full bg-zinc-900/90 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors cursor-pointer">
                {Object.entries(OBORY_A_POZICE).map(([obor, poziceList]) => (
                  <optgroup key={obor} label={obor} className="bg-zinc-950 text-red-400 font-bold">
                    {poziceList.map((pozice) => (
                      <option key={pozice} value={pozice} className="text-white bg-zinc-900">
                        {pozice}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-300">Kraj</label>
              <select className="w-full bg-zinc-900/90 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors cursor-pointer">
                {KRAJE.map((kraj) => (
                  <option key={kraj} value={kraj} className="text-white bg-zinc-900">
                    {kraj}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button className="w-full mt-8 py-4 rounded-xl font-bold text-white btn-neon-glow cursor-pointer">
            Zobrazit Mzdové Porovnání
          </button>
        </TiltCard>
      </div>
    </main>
  )
}
