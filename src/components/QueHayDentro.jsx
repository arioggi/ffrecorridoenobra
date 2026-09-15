import { motion } from 'framer-motion';
import CTAButton from './CTAButton';

const beneficios = [
  'Cómo encontrar propiedades con potencial de flipping en cualquier ciudad de México (sin tener experiencia previa)',
  'Cómo levantar capital de inversionistas privados para arrancar tus operaciones SIN usar tu propio dinero',
  'Cómo negociar precios por debajo del valor de mercado usando técnicas probadas en +1,000 operaciones',
  'Cómo remodelar estratégicamente para maximizar la utilidad por operación entre $30,000 y $80,000 USD',
];

const modulos = [
  {
    numero: '01',
    img: '/assets/modulos/01_modulo.jpeg',
    titulo: 'De Cero a Flipper: Tu Primer Deal Inmobiliario en Tiempo Récord',
  },
  {
    numero: '02',
    img: '/assets/modulos/02_modulo.jpeg',
    titulo: 'Hackeando el Mercado para Comprar Casas Baratas',
  },
  {
    numero: '03',
    img: '/assets/modulos/03_modulo.jpeg',
    titulo: 'El Código del ROI: Cómo Detectar una Mina de Oro en 5 Minutos',
  },
  {
    numero: '04',
    img: '/assets/modulos/04_modulo.jpeg',
    titulo: 'Presupuestos Blindados: Maximiza tus Utilidades como un Experto',
  },
  {
    numero: '05',
    img: '/assets/modulos/05_modulo.jpeg',
    titulo: 'De Ruina a Diamante: Remodelaciones que Multiplican el Valor',
  },
  {
    numero: '06',
    img: '/assets/modulos/06_modulo.jpeg',
    titulo: 'La Máquina de Cierres: Capta más Caro y sin Rebajas',
  },
  {
    numero: '07',
    img: '/assets/modulos/07_modulo.jpeg',
    titulo: 'Blinda tu Negocio: Estructura Legal y Financiera desde Cero',
  },
  {
    numero: '08',
    img: '/assets/modulos/08_modulo.jpeg',
    titulo: 'La Fórmula al Descubierto: Radiografía de Deals Reales de +$50K USD',
  },
  {
    numero: '09',
    img: '/assets/modulos/09_modulo.jpeg',
    titulo: 'Flipping Sin Dinero: Cómo Invertir Usando Capital de Terceros',
  },
  {
    numero: '10',
    img: '/assets/modulos/10_modulo.jpeg',
    titulo: 'Rescate Estratégico: Ganancias con Casas Intestadas y Endeudadas',
  },
  {
    numero: '11',
    img: '/assets/modulos/11_modulo.jpeg',
    titulo: 'Escala tu Negocio: De Flipper a CEO de tu Imperio Inmobiliario',
  },
];

export default function QueHayDentro() {
  return (
    <section className="w-full py-20 md:py-32 px-4 md:px-8 bg-[#0A0A0A] flex flex-col items-center relative overflow-hidden">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,107,26,0.1) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center gap-12">
        {/* Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-10 md:px-14 py-4 md:py-5 rounded-full border-2 border-[#FF6B1A] bg-[#FF6B1A]/10"
        >
          <span className="font-bebas text-[#FF6B1A] tracking-[0.25em] text-lg md:text-2xl">
            EL PROGRAMA COMPLETO
          </span>
        </motion.div>

        {/* Título principal */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-bebas text-white leading-tight text-center"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}
        >
          ¿QUÉ HAY DENTRO DE{' '}
          <span className="text-[#FF6B1A]">FÓRMULA FLIPPING</span>?
        </motion.h2>

        {/* Lista de beneficios bullets */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-3xl flex flex-col gap-4"
        >
          {beneficios.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-start gap-3 text-[#B8B8B8] leading-relaxed text-left"
              style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)' }}
            >
              <span className="text-[#FF6B1A] text-2xl leading-none mt-1">•</span>
              <span>{b}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Sub-título "ESTO ES LO QUE ENCONTRARÁS DENTRO" */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-bebas text-white leading-tight text-center mt-8"
          style={{ fontSize: 'clamp(1.8rem, 5vw, 3.5rem)' }}
        >
          ESTO ES LO QUE ENCONTRARÁS{' '}
          <span className="text-[#FF6B1A]">DENTRO</span>
        </motion.h3>

        {/* Grid de 10 módulos */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
          {modulos.map((modulo, i) => (
            <motion.div
              key={modulo.numero}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="rounded-2xl overflow-hidden flex flex-col"
              style={{
                background: '#1A1A1A',
                border: '1px solid rgba(255,107,26,0.2)',
                boxShadow: '0 0 30px rgba(255,107,26,0.08)',
              }}
            >
              {/* Imagen del módulo (1600x900 = aspect 16/9) */}
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <img
                  src={modulo.img}
                  alt={`Módulo ${modulo.numero} — ${modulo.titulo}`}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                {/* Badge número arriba a la izquierda */}
                <div
                  className="absolute top-3 left-3 px-3 py-1 rounded-md font-bebas tracking-wider text-sm md:text-base"
                  style={{
                    background: 'linear-gradient(135deg, #FF6B1A, #E55A0A)',
                    color: '#FFFFFF',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
                  }}
                >
                  MÓDULO {modulo.numero}
                </div>
              </div>

              {/* Título del módulo */}
              <div className="p-4 md:p-5 flex-1 flex items-start">
                <h4
                  className="font-bebas text-white tracking-wide leading-tight"
                  style={{ fontSize: 'clamp(1rem, 1.6vw, 1.25rem)' }}
                >
                  {modulo.titulo}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <CTAButton className="mt-8" />

        {/* Texto de garantía */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-3 text-center max-w-3xl"
        >
          <p className="text-[#B8B8B8] text-sm md:text-base">
            Fórmula Flipping™ funciona en{' '}
            <strong className="text-white">cualquier ciudad de México y LATAM</strong>
          </p>
          <p className="text-[#B8B8B8] text-sm md:text-base">
            Disponibilidad: <strong className="text-[#FF6B1A]">Inmediata</strong>
          </p>
          <p className="text-[#B8B8B8] text-sm md:text-base mt-2">
            Está respaldado por nuestra{' '}
            <strong className="text-white">Garantía FÓRMULA FLIPPING™</strong>
          </p>
          <p className="text-[#B8B8B8] text-sm md:text-base italic max-w-2xl">
            Si no estás completamente satisfecho dentro de los primeros 7 días envíanos un
            mensaje y te devolvemos cada centavo. Y te quedas con todo el contenido.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
