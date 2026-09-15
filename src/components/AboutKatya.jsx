import { motion } from 'framer-motion';
import { CONFIG } from '../config/constants';
import CTAButton from './CTAButton';

const STATS = [
  { value: `+${CONFIG.ANOS_EXPERIENCIA} AÑOS`, label: 'en Bienes Raíces' },
  { value: `+${CONFIG.OPERACIONES.toLocaleString()}`, label: 'Operaciones Inmobiliarias' },
  { value: 'MONTERREY', label: 'México 🇲🇽' },
];

export default function AboutKatya() {
  return (
    <section
      className="w-full py-20 md:py-32 px-4 md:px-8 bg-[#0A0A0A]"
      aria-label="Sobre Katya Huitrón"
    >
      <div className="max-w-7xl mx-auto">

        {/* Tag */}
        <div className="text-center mb-16">
          <span className="inline-block font-bebas text-[#FF6B1A] tracking-[0.3em] text-lg md:text-2xl bg-[#FF6B1A]/10 border-2 border-[#FF6B1A] px-10 md:px-14 py-4 md:py-5 rounded-full">
            CONOCE A TU MENTORA
          </span>
        </div>

        {/* Grid foto + contenido */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">

          {/* Foto */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ rotate: 2, scale: 1.02 }}
              className="relative w-full max-w-sm"
            >
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,107,26,0.25), transparent)',
                  filter: 'blur(25px)',
                  transform: 'scale(1.08)',
                }}
                aria-hidden="true"
              />
              <img
                src="/assets/katya/katya-hero.jpg"
                alt="Katya Huitrón — Fundadora de Academia Orange, especialista en flipping inmobiliario"
                className="relative w-full aspect-square object-cover rounded-3xl"
                style={{ border: '2px solid rgba(255,107,26,0.3)' }}
                loading="lazy"
                onError={(e) => {
                  e.target.src = 'https://placehold.co/500x500/1A1A1A/FF6B1A?text=Katya+Huitr%C3%B3n';
                }}
              />
            </motion.div>
          </div>

          {/* Contenido */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-8 text-center lg:text-left"
          >
            <h2
              className="font-bebas text-white leading-tight"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
            >
              Ayudo a personas a generar riqueza con Bienes Raíces{' '}
              <span className="text-[#FF6B1A]">
                aunque no tengan experiencia o capital propio.
              </span>
            </h2>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0">
              {STATS.map(({ value, label }) => (
                <motion.div
                  key={label}
                  whileHover={{ borderColor: 'rgba(255,107,26,0.6)', y: -3 }}
                  className="flex flex-col items-center gap-1 p-4 rounded-2xl text-center transition-all"
                  style={{ background: '#1A1A1A', border: '1px solid rgba(255,107,26,0.2)' }}
                >
                  <span className="font-bebas text-[#FF6B1A] text-lg md:text-xl leading-none">{value}</span>
                  <span className="text-[#B8B8B8] text-xs leading-tight">{label}</span>
                </motion.div>
              ))}
            </div>

            {/* Bio */}
            <div className="space-y-4 text-[#B8B8B8] text-base leading-relaxed">
              <p>
                Soy <strong className="text-white">Katya Huitrón</strong>, especialista en inversión y
                transformación inmobiliaria con más de 15 años de experiencia en el sector.
                Fundadora de Academia Orange, me dedico a enseñar, guiar y acompañar a nuevos
                inversionistas a construir su patrimonio a través de bienes raíces.
              </p>
              <p>
                Experiencia real a través de la compra de más de{' '}
                <strong className="text-white">1,000 propiedades</strong>, llevándolas a su venta
                exitosa con utilidades significativas.
              </p>
            </div>

            {/* CTA redes */}
            <div className="flex justify-center lg:justify-start">
              <motion.a
                href={CONFIG.LINK_LINKTREE}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, borderColor: '#FF6B1A', color: '#FF6B1A' }}
                className="inline-flex items-center gap-2 border border-[#FF6B1A]/40 text-[#B8B8B8] text-sm px-6 py-3 rounded-full transition-all"
              >
                Sígueme en Youtube →
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* CTA al final de sección */}
        <div className="w-full mt-10 md:mt-12 max-w-6xl mx-auto">
          <CTAButton />
        </div>
      </div>
    </section>
  );
}
