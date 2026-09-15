import { motion } from 'framer-motion';
import CTAButton from './CTAButton';

export default function FuncionaParaTi() {
  return (
    <section className="w-full py-20 md:py-32 px-4 md:px-8 bg-[#0A0A0A] flex flex-col items-center relative overflow-hidden">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,107,26,0.1) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center gap-12">
        {/* Título grande */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-bebas text-white leading-tight text-center"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
        >
          ¿FUNCIONARÁ EN
          <br />
          <span
            className="inline-block px-6 py-2 mt-3 text-[#0A0A0A]"
            style={{ background: '#FF6B1A' }}
          >
            MI CIUDAD?
          </span>
        </motion.h2>

        {/* Grid: copy izquierda + imagen libro derecha */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Copy izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5 text-[#B8B8B8] leading-relaxed text-left"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)' }}
          >
            <p>
              Esta es la pregunta más típica que hacen nuestros alumnos exitosos antes
              de entrar a <strong className="text-white">Fórmula Flipping</strong>.
            </p>
            <p>
              <strong className="text-white">Fórmula Flipping™</strong> es un sistema
              diseñado para funcionar en cualquier ciudad de México y LATAM, porque usa
              fundamentos de inversión inmobiliaria, negociación y valor agregado que
              aplican en todos los mercados.
            </p>
            <p>
              Mientras existan propiedades que se puedan comprar bajo valor de mercado,
              remodelar y revender — el sistema funciona. Y eso pasa en TODAS las ciudades,
              porque a pesar de que cada mercado tiene detalles específicos, los principios
              del flipping inmobiliario no cambian.
            </p>
            <p>
              En México hay <strong className="text-white">+2,400 municipios</strong> con
              actividad inmobiliaria real.
            </p>
            <p>
              En zonas metropolitanas como Monterrey, CDMX, Guadalajara, Querétaro, Mérida,
              Tijuana y Puebla aplica de forma directa.
            </p>
            <p>
              Y nosotros hemos ayudado a alumnos en{' '}
              <strong className="text-[#FF6B1A]">la inmensa mayoría de ellas!</strong>
            </p>
          </motion.div>

          {/* Imagen del libro/manual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center items-center"
          >
            <img
              src="/assets/nicho/nicho_libro.png"
              alt="Manual de Fórmula Flipping"
              className="w-full max-w-lg object-contain"
              style={{ filter: 'drop-shadow(0 30px 60px rgba(255,107,26,0.25))' }}
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </motion.div>
        </div>

        {/* Banner naranja con frase clave */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full rounded-2xl px-6 md:px-10 py-6 md:py-8 text-center"
          style={{ background: 'linear-gradient(135deg, #FF6B1A, #E55A0A)' }}
        >
          <p className="font-bebas text-white tracking-wide leading-tight" style={{ fontSize: 'clamp(1.2rem, 3.5vw, 2rem)' }}>
            NO IMPORTA EN QUÉ CIUDAD VIVAS...{' '}
            <span className="underline decoration-white/50">
              FÓRMULA FLIPPING FUNCIONARÁ PARA TI!
            </span>
          </p>
        </motion.div>

        {/* Imagen clases presenciales */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          <img
            src="/assets/nicho/clases_presenciales.png"
            alt="Alumnos de Fórmula Flipping en clases presenciales"
            className="w-full max-w-5xl mx-auto h-auto rounded-2xl"
            style={{ filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.5))' }}
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </motion.div>

        {/* CTA */}
        <CTAButton />

        {/* Sublabels + sello garantía 7 días */}
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="text-[#B8B8B8] text-sm md:text-base">
            <p>
              Fórmula Flipping™ funciona en{' '}
              <strong className="text-white">cualquier ciudad de México y LATAM</strong>
            </p>
            <p className="mt-1">
              Disponibilidad:{' '}
              <strong className="text-[#FF6B1A]">Inmediata</strong>
            </p>
          </div>

          <img
            src="/assets/sellos/7_dias.png"
            alt="Garantía de 7 días"
            className="w-48 h-48 md:w-64 md:h-64 object-contain"
            style={{ filter: 'drop-shadow(0 0 50px rgba(255,107,26,0.5))' }}
            onError={(e) => { e.target.style.display = 'none'; }}
          />

          <p className="text-[#B8B8B8] text-sm md:text-base max-w-2xl italic">
            Está respaldado por nuestra{' '}
            <strong className="text-white">Garantía FÓRMULA FLIPPING™</strong>. Si no estás
            completamente satisfecho, dentro de los 7 días envíanos un mensaje y te
            devolvemos cada centavo. Y te quedas con todo el contenido.
          </p>
        </div>
      </div>
    </section>
  );
}
