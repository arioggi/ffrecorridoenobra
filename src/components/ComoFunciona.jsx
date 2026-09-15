import { motion } from 'framer-motion';
import CTAButton from './CTAButton';

export default function ComoFunciona() {
  return (
    <section className="w-full py-20 md:py-32 px-4 md:px-8 bg-[#0A0A0A] flex flex-col items-center relative overflow-hidden">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,107,26,0.08) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center gap-10 text-center">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-10 md:px-14 py-4 md:py-5 rounded-full border-2 border-[#FF6B1A] bg-[#FF6B1A]/10"
        >
          <span className="font-bebas text-[#FF6B1A] tracking-[0.25em] text-lg md:text-2xl">
            EL MÉTODO PROBADO
          </span>
        </motion.div>

        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-bebas text-white leading-tight"
          style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}
        >
          ¿CÓMO FUNCIONA LA{' '}
          <span className="text-[#FF6B1A]">FÓRMULA FLIPPING</span>?
        </motion.h2>

        {/* Cuerpo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-6 text-[#B8B8B8] leading-relaxed text-left md:text-center"
          style={{ fontSize: 'clamp(1rem, 2.2vw, 1.15rem)' }}
        >
          <p>
            Si has probado distintas maneras de hacer dinero con bienes raíces,
            pero sabes que tiene que haber una manera más fácil — tienes razón.
          </p>

          <p>
            <strong className="text-white">Fórmula Flipping</strong> está diseñada para ser una manera más{' '}
            <strong className="text-white">simple</strong>,{' '}
            <strong className="text-white">más rentable</strong> y{' '}
            <strong className="text-white">más segura</strong> de invertir — que genera utilidades reales
            sin perseguir oportunidades imposibles.
          </p>

          <p>
            A diferencia de buscar propiedades casa por casa, depender solo de tu capital,
            o esperar años a que una propiedad se aprecie...
          </p>

          <p>
            <strong className="text-[#FF6B1A]">Fórmula Flipping</strong> usa una metodología probada en
            <strong className="text-white"> +1,000 operaciones reales</strong> para encontrar, negociar,
            remodelar y vender propiedades con utilidades de{' '}
            <strong className="text-white">$30,000 a $80,000 USD por operación</strong>.
          </p>

          <p>
            Este sistema es la manera contraintuitiva que va a ayudarte a generar riqueza con bienes raíces
            mientras te posicionas como un inversionista serio en tu ciudad.
          </p>

          <p>
            <strong className="text-white">Hacemos todo lo contrario a lo que dicen los gurús o los youtubers de bienes raíces.</strong>
          </p>

          <p>
            Usamos propiedades reales con potencial real, pero recuperamos el control de las manos
            del mercado tradicional.
          </p>

          <p>
            Invertimos en inmuebles, pero no nos importan las "modas", las "tendencias", ni las
            métricas vacías.
          </p>

          <p>
            Así es como nuestros alumnos pueden generar mucho más capital que cualquier inversionista
            tradicional que sigue las reglas de siempre.
          </p>
        </motion.div>

        {/* Línea decorativa final */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-24 h-1 rounded-full"
          style={{ background: 'linear-gradient(90deg, #FF6B1A, #FF8A4A)' }}
        />

        {/* CTA al final de sección */}
        <div className="w-full mt-10 md:mt-12">
          <CTAButton />
        </div>
      </div>
    </section>
  );
}
