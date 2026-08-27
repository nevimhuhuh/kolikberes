import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "KolikBeres.cz — Přehled Platů & Mzdová Kalkulačka",
  description: "Anonymní databáze a srovnávač mezd v ČR podle CZ-ISCO profesí.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs" className="dark">
      <body className="bg-[#060608] text-white antialiased">
        {children}
      </body>
    </html>
  )
}
