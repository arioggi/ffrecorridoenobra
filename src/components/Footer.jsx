import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer
      className="w-full py-16 px-4 md:px-8 bg-[#0A0A0A]"
      style={{ borderTop: '1px solid rgba(255,107,26,0.15)' }}
    >
      <div className="max-w-4xl mx-auto text-center">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <img
            src="/assets/logos/academia-orange-logo.png"
            alt="Academia Orange"
            className="h-16 object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div style={{ display: 'none' }} className="flex-col items-center gap-2">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl"
              style={{ background: 'linear-gradient(135deg, #FF6B1A, #E55A0A)' }}
            >
              AO
            </div>
            <span className="font-bebas text-white text-2xl tracking-widest">ACADEMIA ORANGE</span>
          </div>
        </motion.div>

        {/* Links legales */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-10">
          {[
            { label: 'Política de Privacidad', href: '/privacidad' },
            { label: 'Términos y Condiciones', href: '/terminos' },
            { label: 'Política de Cookies', href: '/cookies' },
            { label: 'Contacto', href: '/contacto' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-[#707070] hover:text-[#FF6B1A] text-xs underline underline-offset-4 transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Descargo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-[#707070] text-xs leading-relaxed mb-4">
            <strong className="text-[#555]">AVISO LEGAL.</strong>{' '}
            LOS RESULTADOS NO ESTÁN GARANTIZADOS. Katya Huitrón (Orange Academy) ofrece formación
            y capacitación, lo cual no debe interpretarse como asesoramiento financiero ni comercial.
            Los resultados indicados no son típicos y no se garantiza que obtengas resultados iguales
            o similares. Como en cualquier proyecto, los resultados variarán y dependerán de diversos
            factores, entre ellos tus habilidades, conocimientos, capacidad, dedicación, criterio
            empresarial, red de contactos y situación financiera. El uso de cualquier producto o
            servicio ofrecido a través de Katya Huitrón / Orange Academy debe basarse en tu propia
            diligencia debida y en la comprensión de los riesgos.
          </p>
          <p className="text-[#707070] text-xs leading-relaxed">
            Este sitio web no es parte del sitio web de YouTube, Google o Facebook; Google Inc. o
            Facebook Inc. Además, este sitio web NO cuenta con el respaldo de YouTube, Google ni
            Facebook. FACEBOOK es una marca registrada de FACEBOOK Inc. YOUTUBE es una marca
            registrada de GOOGLE Inc.
          </p>
        </motion.div>

        <p className="text-[#555] text-xs">
          © {new Date().getFullYear()} Academia Orange. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
