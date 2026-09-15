import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONFIG } from '../config/constants';

const FAQS = [
  { q: '¿Necesito experiencia previa en bienes raíces?', a: 'No. El curso está diseñado para personas sin experiencia. El Módulo 1 te enseña los fundamentos desde cero de forma clara y progresiva.' },
  { q: '¿Necesito mucho dinero para empezar?', a: 'No necesariamente. El Módulo 9 está dedicado completamente a cómo invertir en flipping SIN DINERO usando estrategias probadas y legales.' },
  { q: '¿En cuánto tiempo voy a ver resultados?', a: 'Depende de tu dedicación, pero alumnos han cerrado su primera operación en 90 días siguiendo la metodología al pie de la letra.' },
  { q: '¿El curso funciona fuera de México?', a: 'Sí. La metodología es aplicable en cualquier mercado inmobiliario de habla hispana. Los principios del flipping son universales.' },
  { q: '¿Por cuánto tiempo tengo acceso al curso?', a: `Tienes acceso completo por ${CONFIG.ANOS_ACCESO} año desde la fecha de compra, incluyendo todas las actualizaciones.` },
  { q: '¿Qué pasa si no me gusta el curso?', a: `Tienes ${CONFIG.DIAS_GARANTIA} días de garantía total. Si no estás satisfecho por cualquier razón, te devolvemos el 100% de tu inversión sin preguntas.` },
  { q: '¿Cómo recibo el acceso?', a: 'Inmediatamente después de tu compra recibirás un email con tus credenciales. El acceso es al instante, sin esperas.' },
  { q: '¿Hay soporte o solo es ver videos?', a: 'Tienes acceso a la comunidad WhatsApp activa donde puedes hacer preguntas, compartir avances y conectar con otros alumnos.' },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid rgba(255,107,26,0.2)' }}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-6 text-left cursor-pointer"
        aria-expanded={open}
      >
        <span className="font-bebas text-white text-lg md:text-xl tracking-wide leading-tight">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 text-[#FF6B1A] text-2xl font-bold leading-none"
          aria-hidden="true"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <p className="text-[#B8B8B8] text-base leading-relaxed pb-6 pr-8">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section
      className="w-full py-20 md:py-32 px-4 md:px-8 bg-[#0A0A0A]"
      aria-label="Preguntas frecuentes sobre Fórmula Flipping"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block font-bebas text-[#FF6B1A] tracking-[0.3em] text-lg md:text-2xl bg-[#FF6B1A]/10 border-2 border-[#FF6B1A] px-10 md:px-14 py-4 md:py-5 rounded-full mb-6">
            RESOLVEMOS TUS DUDAS
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-bebas text-white leading-none mb-6"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}
          >
            PREGUNTAS{' '}
            <span className="text-[#FF6B1A]">FRECUENTES</span>
          </motion.h2>
          <div
            className="w-20 h-1 rounded-full mx-auto"
            style={{ background: 'linear-gradient(90deg, #FF6B1A, #FF8A4A)' }}
          />
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto">
          {FAQS.map((item) => <FAQItem key={item.q} {...item} />)}
        </div>
      </div>
    </section>
  );
}
