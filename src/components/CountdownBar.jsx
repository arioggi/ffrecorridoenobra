import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Timer } from 'lucide-react';
import { CONFIG, esPreventaActiva, formatoMXN } from '../config/constants';

const FIN_PREVENTA = new Date(CONFIG.PREVENTA_FIN).getTime();

function formatTime(ms) {
  if (ms <= 0) return { d: '00', h: '00', m: '00', s: '00' };
  const totalSeconds = Math.floor(ms / 1000);
  const d = Math.floor(totalSeconds / 86400);
  const h = Math.floor((totalSeconds % 86400) / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  return {
    d: String(d).padStart(2, '0'),
    h: String(h).padStart(2, '0'),
    m: String(m).padStart(2, '0'),
    s: String(s).padStart(2, '0'),
  };
}

export default function CountdownBar() {
  const [now, setNow] = useState(() => Date.now());

  // Tick cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const preventaActiva = now < FIN_PREVENTA && esPreventaActiva();
  const remaining = Math.max(0, FIN_PREVENTA - now);
  const { d, h, m, s } = formatTime(remaining);

  const mensaje = preventaActiva
    ? `PREVENTA ${formatoMXN(CONFIG.PRECIO_PREVENTA)} ${CONFIG.MONEDA} — termina el ${CONFIG.PREVENTA_FIN_TEXTO}. Después sube a ${formatoMXN(CONFIG.PRECIO_NORMAL)} ${CONFIG.MONEDA}.`
    : `Preventa finalizada · Precio especial ${formatoMXN(CONFIG.PRECIO_NORMAL)} ${CONFIG.MONEDA} · Cupo limitado`;

  return (
    <motion.div
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 w-full z-50"
      style={{
        background: '#E63946',
        boxShadow: '0 8px 30px rgba(230, 57, 70, 0.5), 0 0 0 1px rgba(0,0,0,0.1)',
      }}
    >
      <div className="w-full max-w-6xl mx-auto px-4 md:px-8 py-4 md:py-5 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8">
        {/* Timer con tipografía tabular */}
        <div className="flex items-center gap-3">
          <motion.div
            animate={preventaActiva ? { scale: [1, 1.08] } : {}}
            transition={{ duration: 1.2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          >
            <Timer
              className="text-white"
              size={28}
              strokeWidth={2.5}
              aria-hidden="true"
            />
          </motion.div>

          {preventaActiva && (
            <div
              className="font-bebas text-white tracking-wider tabular-nums whitespace-nowrap"
              style={{
                fontSize: 'clamp(1.4rem, 4.5vw, 2.8rem)',
                lineHeight: 1,
                letterSpacing: '0.05em',
                textShadow: '0 2px 8px rgba(0,0,0,0.3)',
              }}
            >
              {d} : {h} : {m} : {s}
            </div>
          )}
        </div>

        {/* Mensaje */}
        <div
          className="text-white text-center md:text-left max-w-xl leading-tight"
          style={{
            fontSize: 'clamp(0.85rem, 1.8vw, 1.05rem)',
            fontWeight: 500,
          }}
        >
          {mensaje}
        </div>
      </div>
    </motion.div>
  );
}
