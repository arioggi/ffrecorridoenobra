import { motion } from 'framer-motion';
import { CONFIG } from '../config/constants';
import CTAButton from './CTAButton';

const TESTIMONIALS = [
  {
    name: 'Oscar Cortés',
    role: 'Socio director de Cortés García Realty Group SAPI de CV',
    photo: '/assets/testimonios/oscar-cortes.jpg',
    quote:
      'Tomé el curso de Katya el año pasado, fue mi primer acercamiento real a una metodología de un negocio probado que genera buena utilidad para todos los participantes. Lo explica de una manera clara, sencilla y práctica. Los tips son reales y te evita cometer errores de principiante. Al final haces un ejercicio práctico de presupuesto real, donde aplicas lo aprendido, dándote la confianza para dar el siguiente paso. Los ejemplos de propuestas de negociación y el listado de conceptos para el presupuesto son una joya. Lo recomiendo ampliamente.',
  },
  {
    name: 'Ana Pau Siles',
    role: 'Gerente general y propietaria en Kappa Realty Bienes Raíces',
    photo: '/assets/testimonios/ana-pau-siles.jpg',
    quote:
      'Recomiendo ampliamente el curso de inversión inmobiliaria impartido por Katya Huitrón. 🤗 Fue práctico, útil y con información completa que me ayudó a entender los conceptos clave y aplicarlos en la vida real. La experiencia de Katya como instructora hicieron que el aprendizaje fuera dinámico y efectivo. ¡Excelente curso para aquellos interesados en invertir en bienes raíces!',
  },
  {
    name: 'Mauricio Salazar Rincón',
    role: 'CEO de Salazar Y Asociados, Bienes Raíces',
    photo: '/assets/testimonios/mauricio-salazar.jpg',
    quote:
      'Gracias Katya por tus aportaciones y conocimientos. Empecé en cero hace dos años y tus videos y cursos me han servido para despegar en este medio del Flipping inmobiliario 🌟🌟🌟',
  },
];

export default function Testimonials() {
  return (
    <section
      className="w-full py-20 md:py-32 px-4 md:px-8 bg-[#0A0A0A]"
      aria-label="Testimonios de alumnos Fórmula Flipping"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block font-bebas text-[#FF6B1A] tracking-[0.3em] text-lg md:text-2xl bg-[#FF6B1A]/10 border-2 border-[#FF6B1A] px-10 md:px-14 py-4 md:py-5 rounded-full mb-6">
            RESULTADOS REALES
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-bebas text-white leading-none mb-4"
            style={{ fontSize: 'clamp(2rem, 6vw, 5rem)' }}
          >
            +{CONFIG.TOTAL_ALUMNOS.toLocaleString()} ALUMNOS YA ESTÁN
            <br />
            <span className="text-[#FF6B1A]">CAMBIANDO SU VIDA</span>
          </motion.h2>
          <p className="text-[#B8B8B8] text-lg max-w-xl mx-auto">con la Fórmula Flipping</p>
          <div
            className="w-20 h-1 rounded-full mx-auto mt-6"
            style={{ background: 'linear-gradient(90deg, #FF6B1A, #FF8A4A)' }}
          />
        </div>

        {/* Video testimonio */}
        <div className="max-w-4xl mx-auto mb-16">
          <div
            className="relative w-full overflow-hidden"
            style={{
              borderRadius: '16px',
              aspectRatio: '16/9',
              boxShadow: '0 0 40px rgba(255,107,26,0.2), 0 20px 60px rgba(0,0,0,0.7)',
            }}
          >
            <iframe
              src={`https://www.youtube.com/embed/${CONFIG.TESTIMONIO_VIDEO_ID}?rel=0&modestbranding=1`}
              title="Testimonio de alumno Fórmula Flipping — Katya Huitrón"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full"
              style={{ borderRadius: '16px' }}
            />
          </div>
        </div>

        {/* Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {TESTIMONIALS.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -5, borderColor: 'rgba(255,107,26,0.5)' }}
              className="flex flex-col items-center gap-5 p-8 rounded-2xl text-center transition-all"
              style={{ background: '#1A1A1A', border: '1px solid rgba(255,107,26,0.2)' }}
            >
              <img
                src={t.photo}
                alt={`${t.name}, alumno de Fórmula Flipping`}
                className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                style={{ border: '2px solid rgba(255,107,26,0.5)' }}
                loading="lazy"
                onError={(e) => {
                  e.target.src = `https://placehold.co/100x100/1A1A1A/FF6B1A?text=${encodeURIComponent(t.name[0])}`;
                }}
              />
              <div className="flex gap-1 text-[#FF6B1A] text-sm" aria-label="5 de 5 estrellas">
                {[...Array(5)].map((_, j) => <span key={j}>★</span>)}
              </div>
              <div>
                <h3 className="font-bebas text-[#FF6B1A] text-xl tracking-wide">{t.name}</h3>
                <p className="text-[#707070] text-xs mt-1 leading-tight">{t.role}</p>
              </div>
              <blockquote className="font-serif-italic text-[#B8B8B8] text-sm leading-relaxed">
                "{t.quote}"
              </blockquote>
            </motion.article>
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
