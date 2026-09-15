import { motion } from 'framer-motion';
import { CONFIG } from '../config/constants';

const sellos = [
  {
    src: '/assets/sellos/7_dias.png',
    alt: 'Garantía de devolución 7 días',
    label: 'GARANTÍA DE 7 DÍAS',
    sublabel: 'Devolución total si no te encanta',
  },
  {
    src: '/assets/sellos/alumnos_satisfechos.png',
    alt: `+${CONFIG.TOTAL_ALUMNOS} alumnos satisfechos`,
    label: `+${CONFIG.TOTAL_ALUMNOS} ALUMNOS`,
    sublabel: 'Comunidad activa que ya invierte',
  },
  {
    src: '/assets/sellos/acceso_inmediato.png',
    alt: 'Acceso 100% inmediato',
    label: 'ACCESO 100% INMEDIATO',
    sublabel: 'Empieza en menos de 60 segundos',
  },
];

export default function Guarantees() {
  return (
    <section className="w-full py-20 md:py-28 px-4 md:px-8 bg-[#0A0A0A] flex flex-col items-center relative overflow-hidden">
      {/* Background glow naranja sutil */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,107,26,0.08) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center gap-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-bebas text-white leading-tight"
          style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}
        >
          TU COMPRA ESTÁ <span className="text-[#FF6B1A]">100% PROTEGIDA</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 w-full">
          {sellos.map((sello, i) => (
            <motion.div
              key={sello.label}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex flex-col items-center gap-4"
            >
              <motion.img
                src={sello.src}
                alt={sello.alt}
                animate={{ rotate: [-1.5, 1.5] }}
                transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay: i * 0.5 }}
                className="w-44 h-44 md:w-52 md:h-52 object-contain drop-shadow-2xl"
                style={{ filter: 'drop-shadow(0 0 30px rgba(255,107,26,0.25))' }}
              />
              <h3
                className="font-bebas text-white tracking-wide"
                style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.5rem)' }}
              >
                {sello.label}
              </h3>
              <p className="text-[#B8B8B8] text-sm md:text-base max-w-xs leading-relaxed">
                {sello.sublabel}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
