import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieBanner() {
  const [visible, setVisible] = useState(
    () => localStorage.getItem('cookies_accepted') !== 'true'
  );

  const accept = () => {
    localStorage.setItem('cookies_accepted', 'true');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-[100] px-4 pb-4"
        >
          <div
            className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 rounded-2xl"
            style={{
              background: '#1A1A1A',
              border: '1px solid rgba(255,107,26,0.3)',
              boxShadow: '0 -10px 40px rgba(0,0,0,0.5)',
            }}
          >
            <p className="text-[#B8B8B8] text-sm leading-relaxed text-center sm:text-left">
              🍪 Usamos cookies para mejorar tu experiencia y mostrarte contenido relevante.
              Al continuar, aceptas nuestra{' '}
              <a href="/cookies" className="text-[#FF6B1A] underline underline-offset-2 hover:text-[#FF8A4A] transition-colors">
                Política de Cookies
              </a>
              .
            </p>
            <div className="flex gap-3 flex-shrink-0">
              <a
                href="/cookies"
                className="text-[#707070] hover:text-white text-sm transition-colors"
              >
                Más info
              </a>
              <button
                onClick={accept}
                className="text-white text-sm font-bold px-5 py-2 rounded-xl cursor-pointer transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #FF6B1A, #E55A0A)' }}
              >
                Aceptar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
