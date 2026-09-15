import { motion, AnimatePresence } from 'framer-motion';

export default function BlockedContent({ isUnlocked, children }) {
  // Mientras esté bloqueado: NO renderizamos los children en absoluto.
  // Esto elimina el "espaciote negro" porque no hay contenido invisible ocupando espacio.
  if (!isUnlocked) {
    return null;
  }

  // Una vez desbloqueado: render con fade-in suave, SIN translateY ni opacity:0 inicial
  // para evitar el flash en negro al cambiar el estado.
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="unlocked-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
