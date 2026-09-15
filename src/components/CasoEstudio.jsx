import { motion } from 'framer-motion';
import CTAButton from './CTAButton';

const resultados = [
  {
    nombre: 'Oscar Cortés',
    rol: 'Socio Director, Cortés García Realty Group',
    antes: 'Sin metodología clara para identificar operaciones rentables',
    despues: 'Negocio estructurado con presupuestos y negociación profesional',
    multiplicador: 'x3',
  },
  {
    nombre: 'Ana Pau Siles',
    rol: 'Gerente General, Kappa Realty Bienes Raíces',
    antes: 'Buscaba aplicar conceptos de inversión en operaciones reales',
    despues: 'Capacitación práctica aplicada a su agencia inmobiliaria',
    multiplicador: 'x4',
  },
  {
    nombre: 'Mauricio Salazar',
    rol: 'CEO, Salazar Y Asociados Bienes Raíces',
    antes: 'Empezó en cero, sin experiencia en flipping',
    despues: 'Despegó como inversionista de flipping inmobiliario',
    multiplicador: 'x∞',
  },
];

export default function CasoEstudio() {
  return (
    <section className="w-full py-20 md:py-32 px-4 md:px-8 bg-[#0A0A0A] flex flex-col items-center relative overflow-hidden">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,107,26,0.08) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center gap-12 text-center">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-10 md:px-14 py-4 md:py-5 rounded-full border-2 border-[#FF6B1A] bg-[#FF6B1A]/10"
        >
          <span className="font-bebas text-[#FF6B1A] tracking-[0.25em] text-lg md:text-2xl">
            CASO DE ESTUDIO REAL
          </span>
        </motion.div>

        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-bebas text-white leading-tight"
          style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}
        >
          INSTALANDO LA <span className="text-[#FF6B1A]">FÓRMULA FLIPPING</span>
          <br />
          EN 3 INVERSIONISTAS INMOBILIARIOS
        </motion.h2>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl flex flex-col gap-4 text-[#B8B8B8] leading-relaxed"
          style={{ fontSize: 'clamp(1rem, 2.2vw, 1.15rem)' }}
        >
          <p>
            A lo largo de los años, profesionales del sector inmobiliario en México
            han aplicado la Fórmula Flipping para transformar la manera en que
            estructuran sus operaciones.
          </p>
          <p className="text-white font-bold">
            Estos son algunos de los resultados:
          </p>
          <p>
            Desde realtors con años de experiencia hasta personas que empezaron en
            cero, todos lograron{' '}
            <span className="text-[#FF6B1A] font-bold">despegar con una metodología clara y probada</span>.
          </p>
        </motion.div>

        {/* Cards de resultados */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-4">
          {resultados.map((r, i) => (
            <motion.div
              key={r.nombre}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-2xl p-6 md:p-8 flex flex-col items-center gap-4 text-left"
              style={{
                background: '#1A1A1A',
                border: '1px solid rgba(255,107,26,0.2)',
                boxShadow: '0 0 40px rgba(255,107,26,0.05)',
              }}
            >
              {/* Multiplicador */}
              <div
                className="font-bebas text-[#FF6B1A] leading-none"
                style={{
                  fontSize: 'clamp(3.5rem, 8vw, 5rem)',
                  textShadow: '0 0 30px rgba(255,107,26,0.5)',
                }}
              >
                {r.multiplicador}
              </div>

              {/* Nombre y rol */}
              <div className="text-center">
                <h3 className="font-bebas text-white text-xl md:text-2xl tracking-wide">
                  {r.nombre}
                </h3>
                <p className="text-[#B8B8B8] text-xs md:text-sm mt-1 leading-snug">
                  {r.rol}
                </p>
              </div>

              {/* Antes/Después */}
              <div className="w-full flex flex-col gap-3 mt-2">
                <div>
                  <p className="text-[#707070] text-xs uppercase tracking-widest mb-1">Antes</p>
                  <p className="text-[#B8B8B8] text-sm leading-relaxed">{r.antes}</p>
                </div>
                <div
                  className="w-full h-px"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(255,107,26,0.3), transparent)' }}
                />
                <div>
                  <p className="text-[#FF6B1A] text-xs uppercase tracking-widest mb-1">Después</p>
                  <p className="text-white text-sm leading-relaxed font-medium">{r.despues}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA al final de sección */}
        <div className="w-full mt-10 md:mt-12">
          <CTAButton />
        </div>
      </div>
    </section>
  );
}
