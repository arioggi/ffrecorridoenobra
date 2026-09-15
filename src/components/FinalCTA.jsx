import { motion } from 'framer-motion';
import CTAButton from './CTAButton';

export default function FinalCTA() {
  return (
    <section
      className="w-full py-24 md:py-36 px-4 md:px-8 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0A0A0A 0%, #1A0800 50%, #0A0A0A 100%)' }}
      aria-label="Llamada a la acción final"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(255,107,26,0.15) 0%, transparent 70%)' }}
      />

      <div className="max-w-5xl mx-auto text-center relative z-10">

        {/* Badge urgencia */}
        <div className="flex justify-center mb-8">
          <motion.div
            animate={{ x: [0, -2, 2, -2, 2, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2.5 }}
            className="inline-flex items-center gap-2 bg-[#EF4444]/20 border-2 border-[#EF4444]/50 px-10 md:px-14 py-4 md:py-5 rounded-full"
          >
            <span className="w-2 h-2 rounded-full bg-[#EF4444] animate-pulse" />
            <span className="font-bebas text-[#EF4444] tracking-widest text-lg md:text-2xl">
              🚨 ESTA ES TU ÚLTIMA OPORTUNIDAD
            </span>
          </motion.div>
        </div>

        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          animate={{ scale: [1, 1.015, 1] }}
          className="font-bebas text-white leading-tight mb-10"
          style={{ fontSize: 'clamp(2rem, 7vw, 5.5rem)' }}
        >
          ¿VAS A SEGUIR VIENDO COMO
          <br />
          <span className="text-[#B8B8B8]">OTROS GENERAN RIQUEZA</span>
          <br />
          CON BIENES RAÍCES
          <br />
          <span className="text-[#FF6B1A]" style={{ textShadow: '0 0 40px rgba(255,107,26,0.6)' }}>
            MIENTRAS TÚ TE QUEDAS DONDE ESTÁS?
          </span>
        </motion.h2>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#B8B8B8] max-w-2xl mx-auto leading-relaxed mb-12"
          style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)' }}
        >
          Entra hoy a <strong className="text-white">Fórmula Flipping</strong> y empieza a
          cambiar tu vida financiera{' '}
          <strong className="text-[#FF6B1A]">hoy mismo.</strong>
        </motion.p>

        {/* CTA */}
        <CTAButton className="mb-8" />

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