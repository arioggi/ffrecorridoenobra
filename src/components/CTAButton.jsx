import { motion, useReducedMotion } from 'framer-motion';
import { CONFIG } from '../config/constants';
import { trackCheckout } from '../lib/tracking';

export default function CTAButton({
  label = 'SÍ, QUIERO ACCESO INSTANTÁNEO A FÓRMULA FLIPPING',
  sublabel = null,
  className = '',
}) {
  const shouldReduceMotion = useReducedMotion();
  const finalSublabel = sublabel || `DAME ACCESO POR SOLO $${CONFIG.PRECIO_ACTUAL} USD`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`w-full cta-button-wrapper ${className}`}
    >
      <motion.a
        href={CONFIG.LINK_HOTMART}
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackCheckout}
        animate={shouldReduceMotion ? {} : {
          boxShadow: [
            '0 0 30px rgba(255,107,26,0.5)',
            '0 0 80px rgba(255,107,26,0.85)',
          ],
        }}
        transition={{ duration: 2.4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        whileTap={{ scale: 0.98 }}
        className="block w-full text-center text-white font-bold rounded-2xl py-8 md:py-10 px-6 cursor-pointer cta-pulse"
        style={{
          background: 'linear-gradient(135deg, #FF6B1A, #E55A0A)',
        }}
      >
        <span
          className="block font-bebas tracking-wider leading-tight"
          style={{ fontSize: 'clamp(1.3rem, 4.5vw, 2.5rem)' }}
        >
          {label}
        </span>
        <span
          className="block mt-2 font-normal opacity-95"
          style={{ fontSize: 'clamp(0.85rem, 2vw, 1.1rem)' }}
        >
          {finalSublabel}
        </span>
      </motion.a>
    </motion.div>
  );
}
