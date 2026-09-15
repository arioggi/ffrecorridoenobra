import { motion } from 'framer-motion';
import { CONFIG, esPreventaActiva, formatoMXN } from '../config/constants';
import CTAButton from './CTAButton';

const fadeInUp = { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } };

export default function FirstCTA() {
  const preventa = esPreventaActiva();

  return (
    <section className="w-full py-20 md:py-32 px-4 md:px-8 flex flex-col items-center relative overflow-hidden bg-[#1A1A1A]">
      {/* Glow decoration */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,107,26,0.08) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center gap-8 text-center">

        {/* Badge */}
        <motion.div {...fadeInUp} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <motion.div
            animate={{ x: [0, -2, 2, -2, 2, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
            className="inline-flex items-center gap-2 bg-[#FF6B1A]/15 border-2 border-[#FF6B1A]/40 px-10 md:px-14 py-4 md:py-5 rounded-full"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF6B1A] animate-pulse" />
            <span className="font-bebas text-[#FF6B1A] tracking-widest text-lg md:text-2xl">
              {preventa
                ? `EDICIÓN LIMITADA · PREVENTA HASTA EL ${CONFIG.PREVENTA_FIN_TEXTO.toUpperCase()}`
                : 'EDICIÓN LIMITADA · CUPO REDUCIDO'}
            </span>
          </motion.div>
        </motion.div>

        {/* Título */}
        <motion.div {...fadeInUp} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
          <h2
            className="font-bebas text-white leading-none"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
          >
            ¿ESTÁS LISTO PARA
            <br />
            <span className="text-[#FF6B1A]" style={{ textShadow: '0 0 30px rgba(255,107,26,0.5)' }}>
              TRANSFORMAR TU VIDA
            </span>
            <br />
            FINANCIERA?
          </h2>
        </motion.div>

        {/* Bloque INCLUYE + precio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-2xl mx-auto rounded-2xl p-8"
          style={{ background: '#242424', border: '1px solid rgba(255,107,26,0.3)' }}
        >
          <p className="font-bebas text-[#FF6B1A] tracking-[0.25em] text-lg md:text-xl">
            INCLUYE:
          </p>

          <p
            className="font-bebas text-white leading-tight mt-2"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 2.6rem)' }}
          >
            CURSO PRESENCIAL +{' '}
            <span className="whitespace-nowrap">CURSO EN LÍNEA +</span>{' '}
            <span className="whitespace-nowrap">RECORRIDO EN OBRA</span>
          </p>

          <p className="text-[#B8B8B8] text-base md:text-lg mt-6">
            EL PRECIO ES DE{' '}
            {preventa ? (
              <span className="line-through text-[#707070]">
                {formatoMXN(CONFIG.PRECIO_NORMAL)} {CONFIG.MONEDA}
              </span>
            ) : (
              <span className="text-white font-bold">
                {formatoMXN(CONFIG.PRECIO_NORMAL)} {CONFIG.MONEDA}
              </span>
            )}
          </p>

          {preventa && (
            <>
              <p
                className="font-bebas text-[#FF6B1A] leading-none mt-3"
                style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}
              >
                PREVENTA {formatoMXN(CONFIG.PRECIO_PREVENTA)} {CONFIG.MONEDA}
              </p>
              <p className="text-sm text-[#B8B8B8] mt-1">
                hasta el {CONFIG.PREVENTA_FIN_TEXTO}
              </p>
            </>
          )}
        </motion.div>

        {/* CTA */}
        <CTAButton from="first-cta" />

      </div>
    </section>
  );
}
