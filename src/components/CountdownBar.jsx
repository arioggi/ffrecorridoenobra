import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Timer } from 'lucide-react';
import { CONFIG } from '../config/constants';

const STORAGE_KEY = 'countdown_state_v2';
const PHASE_INITIAL = 'initial';
const PHASE_EXTENSION = 'extension';
const PHASE_EXPIRED = 'expired';

const INITIAL_MINUTES = CONFIG.COUNTDOWN_MINUTES || 15;
const EXTENSION_MINUTES = 5;

function getInitialState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return parsed;
    }
  } catch (e) {
    // ignore
  }
  return {
    phase: PHASE_INITIAL,
    endTime: Date.now() + INITIAL_MINUTES * 60 * 1000,
  };
}

function formatTime(ms) {
  if (ms <= 0) return { h: '00', m: '00', s: '00' };
  const totalSeconds = Math.floor(ms / 1000);
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  return {
    h: String(h).padStart(2, '0'),
    m: String(m).padStart(2, '0'),
    s: String(s).padStart(2, '0'),
  };
}

export default function CountdownBar() {
  const [state, setState] = useState(getInitialState);
  const [now, setNow] = useState(Date.now());

  // Persist state
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      // ignore
    }
  }, [state]);

  // Tick every second
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Phase transitions
  useEffect(() => {
    const remaining = state.endTime - now;
    if (remaining <= 0) {
      if (state.phase === PHASE_INITIAL) {
        // Transición a fase extensión: damos 5 min más
        setState({
          phase: PHASE_EXTENSION,
          endTime: Date.now() + EXTENSION_MINUTES * 60 * 1000,
        });
      } else if (state.phase === PHASE_EXTENSION) {
        // Transición a expirado definitivo
        setState({
          phase: PHASE_EXPIRED,
          endTime: 0,
        });
      }
    }
  }, [now, state]);

  const remaining = Math.max(0, state.endTime - now);
  const { h, m, s } = formatTime(remaining);

  const isExpired = state.phase === PHASE_EXPIRED;
  const isExtension = state.phase === PHASE_EXTENSION;

  // Mensaje según fase
  let mensaje;
  if (isExpired) {
    mensaje = 'Tu tiempo expiró. Aún puedes acceder, pero la oferta especial ya no aplica.';
  } else if (isExtension) {
    mensaje = 'Tu tiempo expiró, pero veo que sigues aquí. Te voy a dar 5 minutos más. Solo porque sé que esta decisión importa.';
  } else {
    mensaje = 'Esta oferta especial expira pronto — no la dejes pasar.';
  }

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
        {/* Timer grande con tipografía monospace */}
        <div className="flex items-center gap-3">
          <motion.div
            animate={!isExpired ? { scale: [1, 1.08] } : {}}
            transition={{ duration: 1.2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          >
            <Timer
              className="text-white"
              size={28}
              strokeWidth={2.5}
              aria-hidden="true"
            />
          </motion.div>

          <div
            className="font-bebas text-white tracking-wider tabular-nums"
            style={{
              fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
              lineHeight: 1,
              letterSpacing: '0.05em',
              textShadow: '0 2px 8px rgba(0,0,0,0.3)',
            }}
          >
            {h} : {m} : {s}
          </div>
        </div>

        {/* Mensaje persuasivo */}
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
