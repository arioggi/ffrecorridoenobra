import { useEffect } from 'react';
import { useVideoProgress } from './hooks/useVideoProgress';
import { initScrollTracking } from './lib/tracking';

import Hero from './components/Hero';
import BlockedContent from './components/BlockedContent';
import CountdownBar from './components/CountdownBar';
import FirstCTA from './components/FirstCTA';
import AboutKatya from './components/AboutKatya';
import QueHayDentro from './components/QueHayDentro';
import Bonuses from './components/Bonuses';
import CasoEstudio from './components/CasoEstudio';
import ComoFunciona from './components/ComoFunciona';
import Testimonials from './components/Testimonials';
import HotmartReviews from './components/HotmartReviews';
import Guarantees from './components/Guarantees';
import Pricing from './components/Pricing';
import FuncionaParaTi from './components/FuncionaParaTi';
import ResumenFinal from './components/ResumenFinal';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import LegalPage from './components/LegalPage';

const LEGAL_PAGES = ['privacidad', 'terminos', 'cookies', 'contacto'];

function getLegalPage() {
  const path = window.location.pathname.replace(/^\//, '').replace(/\/$/, '');
  return LEGAL_PAGES.includes(path) ? path : null;
}

export default function App() {
  const { isUnlocked, unlock } = useVideoProgress();
  const legalPage = getLegalPage();

  useEffect(() => {
    if (legalPage) return;
    const cleanup = initScrollTracking();
    return cleanup;
  }, [legalPage]);

  if (legalPage) {
    return <LegalPage page={legalPage} />;
  }

  return (
    <>
      <CountdownBar />
      <main className="min-h-screen bg-[#0A0A0A] pt-28 md:pt-24">
        {/* 1. Hero + VSL */}
        <Hero onUnlock={unlock} isUnlocked={isUnlocked} />

        {/* 2–11: Bloqueadas hasta ver el video */}
        <BlockedContent isUnlocked={isUnlocked}>
          {/* 2. CTA post-desbloqueo */}
          <FirstCTA />

          {/* 3. Sobre Katya */}
          <AboutKatya />

          {/* 4. Contenido del programa */}
          <QueHayDentro />

          {/* 5. Bonos exclusivos */}
          <Bonuses />

          {/* 5. Caso de estudio real */}
          <CasoEstudio />

          {/* 6. Cómo funciona la Fórmula Flipping */}
          <ComoFunciona />

          {/* 7. Testimonios principales (video + 3 tarjetas) */}
          <Testimonials />

          {/* 6. Reseñas verificadas de Hotmart */}
          <HotmartReviews />

          {/* 7. Sellos de garantía */}
          <Guarantees />

          {/* 8. Precio + Value Stack */}
          <Pricing />

          {/* 9. ¿Funciona en mi ciudad? */}
          <FuncionaParaTi />

          {/* 10. Resumen ejecutivo + CTA ancho */}
          <ResumenFinal />

          {/* 10. FAQ */}
          <FAQ />

          {/* 10. CTA Final agresivo */}
          <FinalCTA />

          {/* 11. Footer */}
          <Footer />
        </BlockedContent>
      </main>

      {/* Banner de cookies (siempre visible) */}
      <CookieBanner />
    </>
  );
}