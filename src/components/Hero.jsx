import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { CONFIG } from '../config/constants';

const fadeInUp = { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } };

export default function Hero({ onUnlock, isUnlocked }) {
  const playerContainerRef = useRef(null);
  const playerRef = useRef(null);
  const hasInitializedRef = useRef(false);

  useEffect(() => {
    // Solo inicializamos UNA VEZ. Si ya está inicializado, no hacemos nada.
    // Esto evita conflictos cuando isUnlocked cambia.
    if (hasInitializedRef.current) return;

    const existing = document.querySelector('script[src="https://www.youtube.com/iframe_api"]');
    if (!existing) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      tag.async = true;
      document.head.appendChild(tag);
    }

    const init = () => {
      if (!playerContainerRef.current || hasInitializedRef.current) return;
      hasInitializedRef.current = true;

      playerRef.current = new window.YT.Player(playerContainerRef.current, {
        videoId: CONFIG.VSL_VIDEO_ID,
        playerVars: { rel: 0, modestbranding: 1, showinfo: 0, autoplay: 0 },
        events: {
          onStateChange: (event) => {
            // event.data === 0 significa ENDED
            if (event.data === 0) {
              onUnlock();
            }
          },
        },
      });
    };

    if (window.YT && window.YT.Player) {
      init();
    } else {
      window.onYouTubeIframeAPIReady = init;
    }

    // NO destruimos el player en el cleanup.
    // YouTube maneja su propio iframe; si intentamos destruirlo cuando React
    // está re-renderizando, causa el error "removeChild" porque el DOM ya
    // no coincide con lo que React espera.
    // El player se mantiene vivo durante toda la sesión.
  }, [onUnlock]);

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-start pt-8 pb-20 px-4 md:px-8 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,107,26,0.1) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center gap-8 text-center">

        {/* Logo */}
        <motion.div
          {...fadeInUp}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <img
            src="/assets/logos/formula_flipping_logo.png"
            alt="Fórmula Flipping"
            className="h-24 md:h-36 object-contain"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </motion.div>

        {/* Título principal */}
        <motion.div
          {...fadeInUp}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h1
            animate={{ scale: [1, 1.015] }}
            transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
            className="font-bebas text-white leading-none"
            style={{ fontSize: 'clamp(2.8rem, 9vw, 7rem)' }}
          >
            MIRA EL VIDEO COMPLETO
            <br />
            PARA{' '}
            <span className="text-[#FF6B1A]" style={{ textShadow: '0 0 40px rgba(255,107,26,0.5)' }}>
              DESBLOQUEAR
            </span>
          </motion.h1>
        </motion.div>

        {/* VSL Player — SIEMPRE el mismo div, sin swap a iframe */}
        <motion.div
          {...fadeInUp}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-full"
        >
          <div
            className="relative w-full overflow-hidden"
            style={{
              borderRadius: '20px',
              boxShadow: '0 0 50px rgba(255,107,26,0.25), 0 25px 80px rgba(0,0,0,0.9)',
              aspectRatio: '16/9',
            }}
          >
            {/* Este div es donde YouTube IFrame API inyecta el iframe.
                NUNCA lo reemplazamos por un iframe propio — eso causaba el
                bug "removeChild" cuando isUnlocked cambiaba. */}
            <div
              ref={playerContainerRef}
              className="absolute inset-0 w-full h-full"
              style={{ borderRadius: '20px' }}
            />
          </div>
        </motion.div>

        {/* CTA debajo del video */}
        <motion.div
          {...fadeInUp}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-[#B8B8B8] text-base md:text-lg leading-relaxed">
            🔥 <strong className="text-white">DALE PLAY</strong> y descubre cómo la{' '}
            <strong className="text-[#FF6B1A]">FÓRMULA FLIPPING</strong> genera{' '}
            <strong className="text-white">+$50,000.00 USD mensuales</strong> a través de una
            metodología probada.
          </p>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="mt-3 text-[#FF6B1A] text-2xl"
            aria-hidden="true"
          >
            ↑
          </motion.div>
        </motion.div>

        {/* Botón "Ya vi el video" REMOVIDO — el desbloqueo solo ocurre cuando el video termina */}
      </div>
    </section>
  );
}
