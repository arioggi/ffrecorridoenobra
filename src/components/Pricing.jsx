import { motion } from 'framer-motion';
import { CONFIG } from '../config/constants';
import CTAButton from './CTAButton';

const VALUE_STACK = [
  { label: 'Acceso al curso completo (12 módulos)', value: 497 },
  { label: 'Acceso por 1 año completo', value: 200 },
  { label: 'Comunidad WhatsApp activa', value: 97 },
  { label: 'Estudios de casos prácticos reales', value: 150 },
  { label: 'Estructura fiscal para flipping', value: 97 },
  { label: 'Garantía de 7 días', value: null },
];
const TOTAL_VALUE = VALUE_STACK.reduce((s, i) => s + (i.value || 0), 0);

export default function Pricing() {
  return (
    <section
      className="w-full py-20 md:py-32 px-4 md:px-8 bg-[#1A1A1A]"
      id="oferta"
      aria-label="Precio y oferta del curso Fórmula Flipping"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block font-bebas text-[#FF6B1A] tracking-[0.3em] text-lg md:text-2xl bg-[#FF6B1A]/10 border-2 border-[#FF6B1A] px-10 md:px-14 py-4 md:py-5 rounded-full mb-6">
            OFERTA ESPECIAL DE HOY
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-bebas text-white leading-none mb-6"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}
          >
            LO QUE OBTIENES{' '}
            <span className="text-[#FF6B1A]">HOY</span>
          </motion.h2>
          <div
            className="w-20 h-1 rounded-full mx-auto"
            style={{ background: 'linear-gradient(90deg, #FF6B1A, #FF8A4A)' }}
          />
        </div>

        {/* Imagen visual de lo que obtienes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-4xl mx-auto my-8"
        >
          <img
            src="/assets/stack/lo_que_obtienes.png"
            alt="Todo lo que obtienes con Fórmula Flipping"
            className="w-full h-auto rounded-2xl"
            style={{ filter: 'drop-shadow(0 0 60px rgba(255,107,26,0.25))' }}
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </motion.div>

        {/* Value Stack */}
        <div className="max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-8"
            style={{ background: '#242424', border: '1px solid rgba(255,107,26,0.2)' }}
          >
            {VALUE_STACK.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex items-center justify-between gap-4 py-3"
                style={{ borderBottom: i < VALUE_STACK.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}
              >
                <div className="flex items-start gap-3">
                  <span className="text-[#FF6B1A] flex-shrink-0 mt-0.5">✅</span>
                  <span className="text-[#B8B8B8] text-sm md:text-base">{item.label}</span>
                </div>
                <span className="text-[#FF6B1A] font-bold text-sm md:text-base whitespace-nowrap flex-shrink-0">
                  {item.value ? `$${item.value} USD` : 'Sin costo'}
                </span>
              </motion.div>
            ))}
            <div
              className="flex items-center justify-between mt-4 pt-4"
              style={{ borderTop: '2px solid rgba(255,107,26,0.3)' }}
            >
              <span className="font-bebas text-white text-xl">VALOR TOTAL:</span>
              <span className="font-bebas text-[#B8B8B8] text-2xl line-through">
                ${TOTAL_VALUE.toLocaleString()} USD
              </span>
            </div>
          </motion.div>
        </div>

        {/* Bloque de precio */}
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-10 text-center"
            style={{
              background: 'linear-gradient(135deg, #242424, #1A1A1A)',
              border: '2px solid rgba(255,107,26,0.5)',
              boxShadow: '0 0 60px rgba(255,107,26,0.12)',
            }}
          >
            <p className="text-[#707070] text-lg mb-2">
              Precio normal:{' '}
              <span className="line-through">${CONFIG.PRECIO_NORMAL} USD</span>
            </p>
            <p className="text-[#B8B8B8] text-sm font-bold uppercase tracking-widest mb-2">HOY SOLO:</p>
            <motion.span
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="block font-bebas leading-none mb-2"
              style={{
                fontSize: 'clamp(4.5rem, 18vw, 9rem)',
                background: 'linear-gradient(135deg, #FF6B1A, #FF8A4A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              ${CONFIG.PRECIO_ACTUAL}
            </motion.span>
            <p className="text-[#B8B8B8] text-base mb-8">Pago único en USD</p>

            {/* CTA */}
            <CTAButton />

            {/* Trust */}
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[#707070] text-sm">
              <span>🔒 Pago 100% seguro vía Hotmart</span>
              <span>💳 Acepta todas las tarjetas</span>
              <span>🛡️ Garantía {CONFIG.DIAS_GARANTIA} días o devolvemos tu dinero</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
