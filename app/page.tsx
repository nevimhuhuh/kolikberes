import { AboutSection } from '@/components/about-section'
import { HeroSection } from '@/components/hero-section'
import { SalaryApp } from '@/components/salary-app'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export default function HomePage() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <SalaryApp />
        <section
          id="o-projektu"
          className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 pb-20 sm:px-6"
        >
          <AboutSection />
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
