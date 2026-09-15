import { motion } from 'framer-motion';

const FEATURED = {
  name: 'Mariana Ortega',
  date: '16/08/2025',
  product: 'Curso Fórmula Flipping',
  quote:
    'Tomé el curso con Katya y lo recomiendo totalmente. Ella es clara, directa y a la vez detallada en sus procesos y con toda la información que comparte. Experiencia y conocimiento unidos para dar una ponencia estructurada, completa, en lenguaje claro, sencillo para cuando vas iniciando en flipping y para quienes se quieren profesionalizar aún más en esta rama de los Bienes Raíces y pasar al siguiente nivel. Comparte estrategias prácticas, formatos para un arranque y su disposición para resolver dudas posteriores al curso. La mejor inversión en capacitación en flipping definitivamente con el curso de Katya Huitrón.',
};

const REVIEWS = [
  { name: 'Claudia', date: '16/08/2025', product: 'Curso Fórmula Flipping', quote: '¡Excelente curso! Katya nos comparte de forma clara, precisa y detallada el proceso del Flipping, ¡sin duda mi nueva mentora! ¡Gracias!' },
  { name: 'Lidia', date: '14/08/2025', product: 'Curso Fórmula Flipping', quote: 'Mi experiencia ha sido muy buena; ha cumplido mis expectativas. He visto el trabajo de Katya Huitrón y me parece extraordinario el profesionalismo con el que lo desarrolla.' },
  { name: 'María', date: '14/08/2025', product: 'Curso Fórmula Flipping', quote: 'Me encantó aprender esta nueva habilidad.' },
  { name: 'Gerardo', date: '13/08/2025', product: 'Curso Fórmula Flipping', quote: 'Curso muy dinámico y aplicable para tomar acción y sacar el máximo provecho.' },
  { name: 'Jesús', date: '12/08/2025', product: 'Curso Fórmula Flipping', quote: 'Excelente contenido. Aprendí bastante para implementar esta gran fórmula de Flipping. ¡Gracias, Katya!' },
  { name: 'Arturo', date: '12/08/2025', product: 'Curso Fórmula Flipping', quote: 'Es el mejor curso de flipping que he tomado. Muchas gracias, Katya y equipo.' },
  { name: 'Edson', date: '12/08/2025', product: 'Curso Fórmula Flipping', quote: 'Curso muy completo: guía paso a paso en aspectos legales, fiscales, inversionistas y de remodelación. Te da herramientas reales para lograrlo.' },
  { name: 'David', date: '12/08/2025', product: 'Curso Fórmula Flipping', quote: 'Mucho conocimiento y experiencia en flipping inmobiliario. Temática muy profesional y clara. ¡Motivado para seguir!' },
  { name: 'Rogelio', date: '13/08/2025', product: 'Kit de Herramientas del Flipper', quote: 'Herramienta que ayuda mucho a quienes queremos desarrollarnos en el mundo inmobiliario del Flipping en México. La experiencia de Katya se nota.' },
  { name: 'Romel', date: '13/08/2025', product: 'Curso Fórmula Flipping', quote: 'Buscaba guía para iniciar en el Flipping y encontré a Katya. Muy claro y valioso el proceso que enseña.' },
  { name: 'Julio', date: '13/08/2025', product: 'Curso Fórmula Flipping', quote: 'No imaginaba lo bien estructurado y explicado que está. Se nota el análisis de cada detalle para que cualquiera lo entienda al 100%.' },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-[#FF6B1A] text-sm" aria-label="5 estrellas">
      {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
    </div>
  );
}

function ReviewCard({ review, delay = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay }}
      whileHover={{ borderColor: 'rgba(255,107,26,0.55)', y: -3 }}
      className="flex flex-col gap-3 p-6 rounded-xl transition-all"
      style={{ background: '#1A1A1A', border: '1px solid rgba(255,107,26,0.2)' }}
    >
      <Stars />
      <div>
        <h4 className="font-bebas text-white text-xl leading-none">{review.name}</h4>
        <p className="text-[#707070] text-xs mt-1">
          {review.date} · <span style={{ color: 'rgba(255,107,26,0.7)' }}>{review.product}</span>
        </p>
      </div>
      <p className="text-[#B8B8B8] text-sm leading-relaxed font-serif-italic">"{review.quote}"</p>
    </motion.article>
  );
}

export default function HotmartReviews() {
  return (
    <section
      className="w-full py-20 md:py-32 px-4 md:px-8 bg-[#0A0A0A]"
      aria-label="Reseñas verificadas en Hotmart"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block font-bebas text-[#FF6B1A] tracking-[0.3em] text-lg md:text-2xl bg-[#FF6B1A]/10 border-2 border-[#FF6B1A] px-10 md:px-14 py-4 md:py-5 rounded-full mb-6">
            OPINIONES REALES
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-bebas text-white leading-none mb-4"
            style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}
          >
            ⭐ RESEÑAS VERIFICADAS EN{' '}
            <span className="text-[#FF6B1A]">HOTMART</span>
          </motion.h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="flex gap-1 text-[#FF6B1A] text-xl">{'★★★★★'}</div>
            <p className="text-[#B8B8B8] text-base">
              Promedio: <strong className="text-white">5.0</strong> — Reseñas reales de alumnos
            </p>
          </div>
          <div
            className="w-20 h-1 rounded-full mx-auto"
            style={{ background: 'linear-gradient(90deg, #FF6B1A, #FF8A4A)' }}
          />
        </div>

        {/* Reseña destacada */}
        <div className="max-w-4xl mx-auto mb-12">
          <motion.article
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-8 md:p-10 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(255,107,26,0.1), #1A1A1A)',
              border: '2px solid rgba(255,107,26,0.5)',
            }}
          >
            <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full text-xs font-bold"
              style={{ background: 'rgba(255,107,26,0.2)', color: '#FF8A4A' }}
            >
              ⭐ RESEÑA DESTACADA
            </div>
            <Stars />
            <div className="mt-3 mb-4">
              <h4 className="font-bebas text-white" style={{ fontSize: 'clamp(1.4rem, 4vw, 2rem)' }}>
                {FEATURED.name}
              </h4>
              <p className="text-[#707070] text-sm mt-1">
                {FEATURED.date} · <span style={{ color: 'rgba(255,107,26,0.7)' }}>{FEATURED.product}</span>
              </p>
            </div>
            <blockquote className="text-[#B8B8B8] leading-relaxed font-serif-italic"
              style={{ fontSize: 'clamp(0.9rem, 2vw, 1.05rem)' }}
            >
              "{FEATURED.quote}"
            </blockquote>
          </motion.article>
        </div>

        {/* Grid de reseñas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {REVIEWS.map((review, i) => (
            <ReviewCard key={review.name + review.date} review={review} delay={(i % 3) * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
