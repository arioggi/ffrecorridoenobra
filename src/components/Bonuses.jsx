import { motion } from 'framer-motion';

const bonos = [
  {
    numero: '#1',
    img: '/assets/bonos/01_bonus.png',
    titulo: 'Caja de Herramientas del Flipper',
    valor: '$797 USD',
    descripcion: (
      <>
        <p>
          Tendrás acceso a la <strong>caja de herramientas</strong> completa que uso en cada
          operación: contratos, checklists, plantillas de Excel, calculadoras de rentabilidad
          y guías paso a paso.
        </p>
        <p>
          15 recursos descargables que normalmente cuestan miles de pesos por separado.
        </p>
        <p className="font-bold">
          Recibes Esto Cuando Compras Tu Copia De "Fórmula Flipping" hoy!
        </p>
      </>
    ),
  },
  {
    numero: '#2',
    img: '/assets/bonos/02_bonus.png',
    titulo: 'Plan de Negocios para Inversionistas',
    valor: '$497 USD',
    descripcion: (
      <>
        <p>
          En este bonus por comprar hoy, vas a recibir un <strong>plan de negocios completo</strong>{' '}
          listo para presentar a inversionistas privados.
        </p>
        <p>
          El objetivo: que puedas levantar capital sin usar tu propio dinero y arrancar tu
          primera operación de flipping en menos de 30 días.
        </p>
        <p className="font-bold">
          Recibes Esto Cuando Compras Tu Copia De "Fórmula Flipping" hoy!
        </p>
      </>
    ),
  },
  {
    numero: '#3',
    img: '/assets/bonos/03_bonus.png',
    titulo: 'Comunidad WhatsApp Exclusiva',
    valor: '$297 USD',
    descripcion: (
      <>
        <p>
          En este bonus especial por comprar hoy, te enseñaré cómo aprovechar la{' '}
          <strong>comunidad privada de WhatsApp</strong> con +4,605 alumnos activos...
        </p>
        <p>
          Donde compartimos oportunidades, validamos operaciones y resolvemos dudas todos
          los días.
        </p>
        <p>De hecho, esta es la red que puede cambiar tu juego más rápido que el curso mismo.</p>
        <p className="font-bold">
          Recibes Esto Cuando Compras Tu Copia De "Fórmula Flipping" hoy!
        </p>
      </>
    ),
  },
];

export default function Bonuses() {
  return (
    <section className="w-full py-20 md:py-28 px-4 md:px-8 bg-[#0A0A0A] flex flex-col items-center relative overflow-hidden">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,107,26,0.1) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center gap-12">
        {/* Header sección */}
        <div className="flex flex-col items-center gap-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-10 md:px-14 py-4 md:py-5 rounded-full border-2 border-[#FF6B1A] bg-[#FF6B1A]/10"
          >
            <span className="font-bebas text-[#FF6B1A] tracking-[0.25em] text-lg md:text-2xl">
              CON TU PEDIDO HOY
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-bebas text-white leading-tight"
            style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}
          >
            DESBLOQUEA ACCESO INMEDIATO A{' '}
            <span className="text-[#FF6B1A]">3 BONOS ADICIONALES</span>{' '}
            ¡GRATIS!
          </motion.h2>

          {/* Imagen stack completo "CON TU PEDIDO HOY" */}
          <motion.img
            src="/assets/stack/stack_completo.png"
            alt="Todo lo que incluye Fórmula Flipping"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full max-w-4xl mt-4 rounded-2xl"
            style={{ filter: 'drop-shadow(0 0 60px rgba(255,107,26,0.2))' }}
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </div>

        {/* Cards de bonos */}
        <div className="w-full flex flex-col gap-10 mt-6">
          {bonos.map((bono, i) => (
            <motion.div
              key={bono.numero}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="w-full rounded-3xl overflow-hidden shadow-2xl"
              style={{
                background: '#FFFFFF',
                boxShadow: '0 0 60px rgba(255,107,26,0.15)',
              }}
            >
              {/* Header naranja */}
              <div
                className="px-6 md:px-10 py-6 md:py-8 flex flex-wrap items-center gap-3"
                style={{ background: 'linear-gradient(135deg, #FF6B1A, #E55A0A)' }}
              >
                <span className="inline-block px-4 py-1 bg-white rounded-md font-bebas text-[#FF6B1A] tracking-wider text-xl md:text-2xl">
                  Bonus {bono.numero}
                </span>
                <h3 className="font-bebas text-white text-2xl md:text-4xl leading-tight flex-1">
                  {bono.titulo}
                </h3>
              </div>

              {/* Cuerpo blanco */}
              <div className="px-6 md:px-10 py-8 md:py-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="flex flex-col gap-4 text-[#1A1A1A] text-base md:text-lg leading-relaxed">
                  {bono.descripcion}
                  <div className="mt-2 inline-block">
                    <span className="font-bebas text-[#E55A0A] text-2xl md:text-3xl">
                      Valor: {bono.valor}
                    </span>
                  </div>
                </div>

                <div className="flex justify-center items-center">
                  <img
                    src={bono.img}
                    alt={`Bonus ${bono.numero} — ${bono.titulo}`}
                    className="w-full max-w-md object-contain"
                    style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.25))' }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
