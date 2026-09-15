import { motion } from 'framer-motion';
import { CONFIG } from '../config/constants';
import CTAButton from './CTAButton';

const bonos = [
  {
    numero: '#1',
    titulo: 'Caja de Herramientas del Flipper',
    img: '/assets/bonos/01_bonus.png',
    descripcion:
      'Acceso completo a contratos, checklists, plantillas de Excel, calculadoras de rentabilidad y guías paso a paso. 15 recursos descargables.',
  },
  {
    numero: '#2',
    titulo: 'Plan de Negocios para Inversionistas',
    img: '/assets/bonos/02_bonus.png',
    descripcion:
      'Plan de negocios completo listo para presentar a inversionistas privados. Levanta capital sin usar tu propio dinero y arranca tu primera operación en menos de 30 días.',
  },
  {
    numero: '#3',
    titulo: 'Comunidad WhatsApp Exclusiva',
    img: '/assets/bonos/03_bonus.png',
    descripcion:
      'Comunidad privada con +4,605 alumnos activos donde compartimos oportunidades, validamos operaciones y resolvemos dudas todos los días.',
  },
];

export default function ResumenFinal() {
  return (
    <section className="w-full py-20 md:py-32 px-4 md:px-8 bg-[#0A0A0A] flex flex-col items-center relative overflow-hidden">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,107,26,0.1) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center gap-10 text-center">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-10 md:px-14 py-4 md:py-5 rounded-full border-2 border-[#FF6B1A] bg-[#FF6B1A]/10"
        >
          <span className="font-bebas text-[#FF6B1A] tracking-[0.25em] text-lg md:text-2xl">
            RESUMEN EJECUTIVO
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
          PARA LOS QUE VAN <span className="text-[#FF6B1A]">DIRECTO AL FINAL</span>...
        </motion.h2>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl flex flex-col gap-4 text-[#B8B8B8] leading-relaxed"
          style={{ fontSize: 'clamp(1rem, 2.2vw, 1.15rem)' }}
        >
          <p>Así que eres igual que yo, bajando directamente hasta el final.</p>
          <p>
            Lo entiendo, eres un inversionista que quiere ir al grano y empezar a generar
            utilidades reales con bienes raíces.
          </p>
          <p className="text-white font-bold">
            Este es el resumen de lo que obtienes por solo ${CONFIG.PRECIO_ACTUAL} USD:
          </p>
        </motion.div>

        {/* Imagen visual de lo que obtienes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-4xl mx-auto my-4"
        >
          <img
            src="/assets/stack/lo_que_obtienes.png"
            alt="Todo lo que obtienes con Fórmula Flipping"
            className="w-full h-auto rounded-2xl"
            style={{ filter: 'drop-shadow(0 0 60px rgba(255,107,26,0.25))' }}
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </motion.div>

        {/* Stack de bonos — estilo socialfunnel: header naranja + cuerpo blanco + imagen */}
        <div className="w-full flex flex-col gap-8 mt-4">
          {bonos.map((bono, i) => (
            <motion.div
              key={bono.numero}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="w-full rounded-3xl overflow-hidden shadow-2xl"
              style={{
                background: '#FFFFFF',
                boxShadow: '0 0 60px rgba(255,107,26,0.15)',
              }}
            >
              {/* Header naranja — idéntico a Bonuses.jsx */}
              <div
                className="px-6 md:px-10 py-6 md:py-8 flex flex-wrap items-center gap-3"
                style={{ background: 'linear-gradient(135deg, #FF6B1A, #E55A0A)' }}
              >
                <span className="inline-block px-4 py-1 bg-white rounded-md font-bebas text-[#FF6B1A] tracking-wider text-xl md:text-2xl">
                  Bonus {bono.numero}
                </span>
                <h3 className="font-bebas text-white text-2xl md:text-4xl leading-tight flex-1">
                  {bono.titulo}
                </h3>
              </div>

              {/* Cuerpo blanco — grid idéntico a Bonuses.jsx */}
              <div className="px-6 md:px-10 py-8 md:py-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="flex flex-col gap-4 text-[#1A1A1A] text-base md:text-lg leading-relaxed">
                  <p>{bono.descripcion}</p>
                  <p className="text-[#FF6B1A] font-bold mt-2">
                    Recibes esto cuando compras tu copia de "Fórmula Flipping" hoy.
                  </p>
                </div>

                <div className="flex justify-center items-center">
                  <img
                    src={bono.img}
                    alt={`Bonus ${bono.numero} — ${bono.titulo}`}
                    className="w-full max-w-md object-contain"
                    style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.25))' }}
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <CTAButton className="mt-6" />

        {/* Sublabels debajo del CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center gap-2 text-[#B8B8B8] text-sm"
        >
          <p>
            Fórmula Flipping™ funciona en{' '}
            <strong className="text-white">cualquier ciudad de México y LATAM</strong>
          </p>
          <p>
            Disponibilidad:{' '}
            <strong className="text-[#FF6B1A]">Inmediata</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
