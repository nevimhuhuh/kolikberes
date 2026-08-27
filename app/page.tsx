'use client';

import { useState } from 'react';

export default function Home() {
  const [profession, setProfession] = useState('25121');
  const [region, setRegion] = useState('Praha');

  return (
    <main className="min-h-screen bg-[#050505] text-white relative overflow-hidden font-sans selection:bg-red-500 selection:text-white">
      {/* Červená neónová záře v pozadí (Red Ambient Glow) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-red-600/15 blur-[140px] pointer-events-none rounded-full" />

      {/* Pilulková horní navigace (Floating Capsule Nav) */}
      <header className="pt-6 px-4 max-w-6xl mx-auto relative z-10 flex justify-center">
        <nav className="flex items-center justify-between gap-6 bg-white/5 border border-white/10 backdrop-blur-md px-6 py-3 rounded-full w-full max-w-3xl shadow-2xl">
          <div className="flex items-center gap-2 font-bold text-lg tracking-wider">
            <span className="text-red-500">Kolik</span>Beres<span className="text-red-500">.cz</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-400 font-medium">
            <a href="#kalkulacka" className="hover:text-white transition-colors">Kalkulačka</a>
            <a href="#databaze" className="hover:text-white transition-colors">Databáze</a>
            <a href="#kraje" className="hover:text-white transition-colors">Přehled krajů</a>
          </div>
          <button className="bg-red-600 hover:bg-red-500 text-white font-semibold text-xs px-5 py-2.5 rounded-full transition-all shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:shadow-[0_0_30px_rgba(239,68,68,0.8)]">
            Přidat plat
          </button>
        </nav>
      </header>

      {/* Hero sekce s výraznou typografií */}
      <section className="max-w-5xl mx-auto px-4 pt-20 pb-12 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-red-950/40 border border-red-500/30 text-red-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-8">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          Oficiální CZ-ISCO data pro rok 2026
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto mb-6">
          Zjisti <span className="text-red-500">reálně</span>, kolik berou ostatní v ČR <span className="text-red-500">bez cenzury</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light">
          Porovnej své příjmy s reálnými daty z trhu. Anonymní přehled platů, benefitů a odměn podle pozic a krajů.
        </p>

        {/* Statistiky ve skleněných kartách */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-16">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-left backdrop-blur-sm hover:border-red-500/40 transition-all">
            <div className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">Průměrná mzda ČR</div>
            <div className="text-3xl font-extrabold text-white">46 500 Kč</div>
            <div className="text-xs text-red-400 mt-2 font-medium flex items-center gap-1">
              ↑ +7.2 % oproti min. roku
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-left backdrop-blur-sm hover:border-red-500/40 transition-all">
            <div className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">Nejžádanější sektor</div>
            <div className="text-3xl font-extrabold text-white">IT & Data</div>
            <div className="text-xs text-gray-400 mt-2">Průměr: 85 000 Kč / měsíc</div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-left backdrop-blur-sm hover:border-red-500/40 transition-all">
            <div className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">Ověřené záznamy</div>
            <div className="text-3xl font-extrabold text-white">1 420+</div>
            <div className="text-xs text-gray-400 mt-2">Zahrnuje všech 14 krajů ČR</div>
          </div>
        </div>
      </section>

      {/* Formulář kalkulačky v tmavém kontejneru */}
      <section id="kalkulacka" className="max-w-3xl mx-auto px-4 pb-24 relative z-10">
        <div className="bg-[#0e0e11] border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 blur-[80px] pointer-events-none rounded-full" />

          <h2 className="text-2xl font-bold mb-2">Vyhledat pozici a srovnat mzdu</h2>
          <p className="text-gray-400 text-sm mb-6">Vyber svůj obor a kraj pro okamžité porovnání s mediánem.</p>

          <div className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                Pracovní pozice (CZ-ISCO)
              </label>
              <select
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all text-sm"
              >
                <option value="25121" className="bg-[#0e0e11] text-white">25121 — Vývojář softwaru / Frontend</option>
                <option value="25122" className="bg-[#0e0e11] text-white">25122 — Backend Developer</option>
                <option value="24210" className="bg-[#0e0e11] text-white">24210 — Projektový manažer</option>
                <option value="22110" className="bg-[#0e0e11] text-white">22110 — Praktický lékař</option>
                <option value="23300" className="bg-[#0e0e11] text-white">23300 — Učitel na střední škole</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                Kraj
              </label>
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all text-sm"
              >
                <option value="Praha" className="bg-[#0e0e11] text-white">Hlavní město Praha</option>
                <option value="Jihomoravsky" className="bg-[#0e0e11] text-white">Jihomoravský kraj</option>
                <option value="Moravskoslezsky" className="bg-[#0e0e11] text-white">Moravskoslezský kraj</option>
                <option value="Stredocesky" className="bg-[#0e0e11] text-white">Středočeský kraj</option>
              </select>
            </div>

            <button className="w-full mt-4 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold py-4 rounded-xl shadow-[0_0_25px_rgba(239,68,68,0.4)] transition-all transform active:scale-[0.99] text-sm uppercase tracking-wider">
              Zobrazit Mzdové Porovnání
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
