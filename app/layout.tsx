import './globals.css';

export const metadata = {
  title: 'KolikBeres.cz',
  description: 'Přehled platů a mzdová kalkulačka 2026',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body className="bg-[#060608] text-white antialiased">{children}</body>
    </html>
  );
}
