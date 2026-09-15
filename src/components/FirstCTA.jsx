import { motion } from 'framer-motion';
import CTAButton from './CTAButton';

const fadeInUp = { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } };

export default function FirstCTA() {
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
              ¡PERFECTO! AHORA QUE YA SABES CÓMO FUNCIONA...
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

        {/* CTA */}
        <CTAButton />

        {/* Sellos de confianza — mismo tamaño y estructura que Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14"
        >
          {[
            { src: '/assets/sellos/7_dias.png', alt: 'Garantía 7 días' },
            { src: '/assets/sellos/alumnos_satisfechos.png', alt: '+4,605 alumnos satisfechos' },
            { src: '/assets/sellos/acceso_inmediato.png', alt: 'Acceso 100% inmediato' },
          ].map((sello) => (
            <div key={sello.alt} className="flex flex-col items-center gap-4">
              <img
                src={sello.src}
                alt={sello.alt}
                className="w-44 h-44 md:w-52 md:h-52 object-contain drop-shadow-2xl"
                style={{ filter: 'drop-shadow(0 0 30px rgba(255,107,26,0.25))' }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
