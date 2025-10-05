import { Footer } from '@/components/landing/footer';
import { Guarantee } from '@/components/landing/guarantee';
import { Hero } from '@/components/landing/hero';
import { Offer } from '@/components/landing/offer';
import { Pricing } from '@/components/landing/pricing';
import { Problem } from '@/components/landing/problem';
import { Proof } from '@/components/landing/proof';
import { Logo } from '@/components/logo';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Logo />
        </div>
      </header>
      <main className="flex-1">
        <Hero />
        <Proof />
        <Problem />
        <Offer />
        <Pricing />
        <Guarantee />
      </main>
      <Footer />
    </div>
  );
}
