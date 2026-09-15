import { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CreditCard, Landmark } from 'lucide-react';
import { CONFIG, esPreventaActiva, formatoMXN } from '../config/constants';
import { trackCustom, trackPagoElegido } from '../lib/tracking';
import Footer from './Footer';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function PasoPago() {
  const shouldReduceMotion = useReducedMotion();
  const preventa = esPreventaActiva();

  useEffect(() => {
    document.title = 'Elige tu forma de pago | Fórmula Flipping + Recorrido en Obra';
    trackCustom('PasoPagoVisto');
  }, []);

  return (
    <>
      <section className="w-full px-4 md:px-8 bg-[#0A0A0A] relative overflow-hidden">
        {/* Background glow */}
        <div
          aria-hidden="true"
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(255,107,26,0.1) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto py-12 md:py-20 flex flex-col items-center gap-10 md:gap-14 text-center">

          {/* Logo */}
          <motion.div {...fadeInUp} transition={{ duration: 0.5 }} className="flex justify-center">
            <img
              src="/assets/logos/formula_flipping_logo.png"
              alt="Fórmula Flipping"
              className="h-20 md:h-28 object-contain"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </motion.div>

          {/* Pill */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block px-10 md:px-14 py-4 md:py-5 rounded-full border-2 border-[#FF6B1A] bg-[#FF6B1A]/10"
          >
            <span className="font-bebas text-[#FF6B1A] tracking-[0.25em] text-lg md:text-2xl">
              PASO 2 DE 2 · ELIGE TU FORMA DE PAGO
            </span>
          </motion.div>

          {/* Póster + títulos del evento */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
            {/* Imagen — primero en móvil */}
            <motion.div {...fadeInUp} transition={{ duration: 0.6 }} className="flex justify-center">
              <img
                src="/assets/recorrido/recorrido-en-obra.jpg"
                alt="Fórmula Flipping – Recorrido en obra. Curso presencial 13 de noviembre, recorrido en obra 14 de noviembre, curso en línea con acceso inmediato"
                className="w-full max-w-md mx-auto rounded-2xl"
                style={{ filter: 'drop-shadow(0 0 60px rgba(255,107,26,0.25))' }}
                loading="eager"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </motion.div>

            {/* Títulos */}
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col gap-4 text-center md:text-left"
            >
              <p className="font-bebas text-[#B8B8B8] tracking-[0.3em] text-lg md:text-xl">
                NOS VEMOS EN:
              </p>

              <h1
                className="font-bebas text-white leading-none"
                style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}
              >
                FLIPPING
                <br />
                <span className="text-[#FF6B1A]" style={{ textShadow: '0 0 40px rgba(255,107,26,0.5)' }}>
                  RECORRIDO EN OBRA
                </span>
              </h1>

              <p
                className="font-bebas text-white tracking-[0.2em]"
                style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)' }}
              >
                TEORÍA. ESTRATEGIA. PRÁCTICA REAL.
              </p>

              <div className="flex flex-col gap-2 text-[#B8B8B8] mt-2">
                <p>
                  <span className="font-bebas text-[#FF6B1A] tracking-wider">CURSO PRESENCIAL:</span>{' '}
                  {CONFIG.FECHA_PRESENCIAL} ({CONFIG.HORARIO_EVENTO})
                </p>
                <p>
                  <span className="font-bebas text-[#FF6B1A] tracking-wider">RECORRIDO EN OBRA:</span>{' '}
                  {CONFIG.FECHA_RECORRIDO} ({CONFIG.HORARIO_EVENTO})
                </p>
                <p>
                  <span className="font-bebas text-[#FF6B1A] tracking-wider">CURSO EN LÍNEA:</span>{' '}
                  acceso inmediato
                </p>
              </div>

              {/* Precio */}
              <div className="mt-4">
                {preventa ? (
                  <>
                    <p className="line-through text-[#707070] text-lg">
                      {formatoMXN(CONFIG.PRECIO_NORMAL)} {CONFIG.MONEDA}
                    </p>
                    <p
                      className="font-bebas text-[#FF6B1A] leading-none"
                      style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)' }}
                    >
                      PREVENTA {formatoMXN(CONFIG.PRECIO_PREVENTA)} {CONFIG.MONEDA}
                    </p>
                    <p className="text-sm text-[#B8B8B8] mt-1">
                      hasta el {CONFIG.PREVENTA_FIN_TEXTO}
                    </p>
                  </>
                ) : (
                  <p
                    className="font-bebas text-[#FF6B1A] leading-none"
                    style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)' }}
                  >
                    {formatoMXN(CONFIG.PRECIO_NORMAL)} {CONFIG.MONEDA}
                  </p>
                )}
              </div>
            </motion.div>
          </div>

          {/* ¿Cómo quieres pagar? */}
          <motion.h2
            {...fadeInUp}
            transition={{ duration: 0.6 }}
            className="font-bebas text-white text-center leading-none"
            style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
          >
            ¿CÓMO QUIERES PAGAR?
          </motion.h2>

          {/* Botones de pago */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* 2.1 — Tarjeta (Stripe) */}
            <motion.div {...fadeInUp} transition={{ duration: 0.6 }} className="cta-button-wrapper">
              <motion.a
                href={CONFIG.LINK_STRIPE}
                onClick={() => trackPagoElegido('stripe')}
                animate={shouldReduceMotion ? {} : {
                  boxShadow: [
                    '0 0 30px rgba(255,107,26,0.5)',
                    '0 0 80px rgba(255,107,26,0.85)',
                  ],
                }}
                transition={{ duration: 2.4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
                whileTap={{ scale: 0.98 }}
                className="flex h-full flex-col items-center justify-center text-center text-white font-bold rounded-2xl py-8 md:py-10 px-6 cursor-pointer cta-pulse"
                style={{ background: 'linear-gradient(135deg, #FF6B1A, #E55A0A)' }}
              >
                <span className="flex items-center justify-center gap-3">
                  <CreditCard size={32} strokeWidth={2.5} aria-hidden="true" className="flex-shrink-0" />
                  <span
                    className="font-bebas tracking-wider leading-tight"
                    style={{ fontSize: 'clamp(1.3rem, 4vw, 2.2rem)' }}
                  >
                    PAGAR CON TARJETA
                  </span>
                </span>
                <span
                  className="block mt-2 font-normal opacity-95"
                  style={{ fontSize: 'clamp(0.85rem, 2vw, 1.1rem)' }}
                >
                  Pago seguro con Stripe · Débito o crédito
                </span>
              </motion.a>
            </motion.div>

            {/* 2.2 — Transferencia */}
            <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.1 }} className="cta-button-wrapper">
              <motion.a
                href={CONFIG.LINK_TRANSFERENCIA}
                onClick={() => trackPagoElegido('transferencia')}
                whileTap={{ scale: 0.98 }}
                className="flex h-full flex-col items-center justify-center text-center text-white font-bold rounded-2xl py-8 md:py-10 px-6 cursor-pointer bg-[#1A1A1A] hover:bg-[#FF6B1A]/10 transition-colors"
                style={{ border: '2px solid #FF6B1A' }}
              >
                <span className="flex items-center justify-center gap-3">
                  <Landmark size={32} strokeWidth={2.5} aria-hidden="true" className="flex-shrink-0" />
                  <span
                    className="font-bebas tracking-wider leading-tight"
                    style={{ fontSize: 'clamp(1.3rem, 4vw, 2.2rem)' }}
                  >
                    PAGAR POR TRANSFERENCIA
                  </span>
                </span>
                <span
                  className="block mt-2 font-normal opacity-95"
                  style={{ fontSize: 'clamp(0.85rem, 2vw, 1.1rem)' }}
                >
                  Te enviamos los datos bancarios y apartamos tu lugar
                </span>
              </motion.a>
            </motion.div>
          </div>

          {/* Trust */}
          <motion.p
            {...fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-[#707070] text-sm text-center"
          >
            🔒 Pago seguro · Recibirás la confirmación de tu lugar por correo
          </motion.p>

          {/* Frase del póster */}
          <motion.p
            {...fadeInUp}
            transition={{ duration: 0.6 }}
            className="font-instrument italic text-[#B8B8B8] text-lg md:text-xl text-center"
          >
            Más que un curso, es tu próxima inversión exitosa.
          </motion.p>

          {/* Volver */}
          <a
            href="/"
            className="text-[#B8B8B8] hover:text-[#FF6B1A] text-sm transition-colors"
          >
            ← Volver a la información del programa
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
