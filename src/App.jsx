import { useEffect } from 'react';
import { LEGAL_PAGES } from './config/constants';
import { initScrollTracking } from './lib/tracking';

import Hero from './components/Hero';
import CountdownBar from './components/CountdownBar';
import FirstCTA from './components/FirstCTA';
import AboutKatya from './components/AboutKatya';
import QueHayDentro from './components/QueHayDentro';
import Bonuses from './components/Bonuses';
import CasoEstudio from './components/CasoEstudio';
import ComoFunciona from './components/ComoFunciona';
import Testimonials from './components/Testimonials';
import HotmartReviews from './components/HotmartReviews';
import Pricing from './components/Pricing';
import FuncionaParaTi from './components/FuncionaParaTi';
import ResumenFinal from './components/ResumenFinal';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import LegalPage from './components/LegalPage';
import PasoPago from './components/PasoPago';

function getPath() {
  return window.location.pathname.replace(/^\//, '').replace(/\/$/, '');
}

function getLegalPage() {
  const path = getPath();
  return LEGAL_PAGES.includes(path) ? path : null;
}

function isPagoPage() {
  return getPath() === 'pago';
}

export default function App() {
  const legalPage = getLegalPage();
  const pagoPage = isPagoPage();
  const isLanding = !legalPage && !pagoPage;

  useEffect(() => {
    if (!isLanding) return;
    const cleanup = initScrollTracking();
    return cleanup;
  }, [isLanding]);

  if (legalPage) {
    return <LegalPage page={legalPage} />;
  }

  if (pagoPage) {
    return (
      <>
        <CountdownBar />
        <main className="min-h-screen bg-[#0A0A0A] pt-28 md:pt-24">
          <PasoPago />
        </main>
        <CookieBanner />
      </>
    );
  }

  return (
    <>
      <CountdownBar />
      <main className="min-h-screen bg-[#0A0A0A] pt-28 md:pt-24">
        {/* 1. Hero + VSL */}
        <Hero />

        {/* 2. CTA principal */}
        <FirstCTA />

        {/* 3. Sobre Katya */}
        <AboutKatya />

        {/* 4. Contenido del programa */}
        <QueHayDentro />

        {/* 5. Bonos exclusivos */}
        <Bonuses />

        {/* 6. Caso de estudio real */}
        <CasoEstudio />

        {/* 7. Cómo funciona la Fórmula Flipping */}
        <ComoFunciona />

        {/* 8. Testimonios principales (video + 3 tarjetas) */}
        <Testimonials />

        {/* 9. Reseñas verificadas */}
        <HotmartReviews />

        {/* 10. Precio + Value Stack */}
        <Pricing />

        {/* 11. ¿Funciona en mi ciudad? */}
        <FuncionaParaTi />

        {/* 12. Resumen ejecutivo + CTA ancho */}
        <ResumenFinal />

        {/* 13. FAQ */}
        <FAQ />

        {/* 14. CTA Final agresivo */}
        <FinalCTA />

        {/* 15. Footer */}
        <Footer />
      </main>

      {/* Banner de cookies (siempre visible) */}
      <CookieBanner />
    </>
  );
}
