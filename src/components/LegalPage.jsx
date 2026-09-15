import { motion } from 'framer-motion';

const CONTENT = {
  privacidad: {
    title: 'Política de Privacidad',
    body: `Esta Política de Privacidad describe cómo Academia Orange ("nosotros") recopila, usa y comparte información sobre usted cuando visita formulaflipping.academiaorange.com.

INFORMACIÓN QUE RECOPILAMOS
Recopilamos información que usted nos proporciona directamente, como cuando realiza una compra, se registra o se comunica con nosotros. También recopilamos información de uso automaticamente, incluyendo información sobre su dispositivo, dirección IP, páginas visitadas y acciones en el sitio.

USO DE LA INFORMACIÓN
Usamos la información para procesar transacciones, enviar comunicaciones relacionadas con el servicio, mejorar nuestro sitio y cumplir con obligaciones legales. No vendemos su información personal a terceros.

COOKIES
Utilizamos cookies y tecnologías similares para mejorar su experiencia. Puede gestionar sus preferencias de cookies en la configuración de su navegador.

DERECHOS ARCO
De acuerdo con la LFPDPPP (México), usted tiene derecho a Acceder, Rectificar, Cancelar y Oponerse al tratamiento de sus datos personales. Para ejercer estos derechos, contáctenos en: privacidad@academiaorange.com

CAMBIOS A ESTA POLÍTICA
Podemos actualizar esta política periódicamente. Le notificaremos sobre cambios significativos publicando la nueva política en esta página.

Última actualización: Mayo 2026`,
  },
  terminos: {
    title: 'Términos y Condiciones',
    body: `Al acceder y utilizar formulaflipping.academiaorange.com, usted acepta los siguientes términos y condiciones.

ACCESO AL CURSO
Al realizar una compra, usted obtiene una licencia personal, no transferible para acceder al curso Fórmula Flipping durante el período indicado (1 año desde la fecha de compra).

PROPIEDAD INTELECTUAL
Todo el contenido del curso, incluyendo videos, materiales y textos, es propiedad de Academia Orange / Katya Huitrón. Está prohibida su reproducción, distribución o uso comercial sin autorización expresa.

GARANTÍA
Ofrecemos una garantía de devolución de 7 días. Si no está satisfecho por cualquier razón, puede solicitar un reembolso completo dentro de los primeros 7 días desde su compra.

DESCARGO DE RESPONSABILIDAD
Los resultados mostrados en este sitio son ejemplos y no garantizan resultados similares. El éxito depende de factores individuales incluyendo dedicación, habilidades y condiciones del mercado.

LIMITACIÓN DE RESPONSABILIDAD
Academia Orange no será responsable de pérdidas o daños derivados del uso de la información del curso o de inversiones realizadas.

LEGISLACIÓN APLICABLE
Estos términos se rigen por las leyes de los Estados Unidos Mexicanos.`,
  },
  cookies: {
    title: 'Política de Cookies',
    body: `Este sitio utiliza cookies y tecnologías similares de acuerdo con la LFPDPPP y regulaciones aplicables.

¿QUÉ SON LAS COOKIES?
Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio. Nos permiten recordar sus preferencias y mejorar su experiencia.

TIPOS DE COOKIES QUE USAMOS

Cookies técnicas (necesarias): Permiten el funcionamiento básico del sitio, como recordar si ya vio el video VSL o aceptó las cookies.

Cookies de análisis: Usamos herramientas como Google Analytics y Microsoft Clarity para entender cómo los usuarios interactúan con nuestro sitio. Estos datos son anónimos y agregados.

Cookies de marketing: Usamos el Pixel de Meta (Facebook) para medir la efectividad de nuestros anuncios y mostrarte contenido relevante en redes sociales.

CONTROL DE COOKIES
Puede gestionar o deshabilitar cookies en la configuración de su navegador. Tenga en cuenta que deshabilitar cookies puede afectar la funcionalidad del sitio.

Para más información sobre cookies: www.aboutcookies.org`,
  },
  contacto: {
    title: 'Contacto',
    body: `¿Tienes preguntas sobre el curso Fórmula Flipping o sobre Academia Orange?

EMAIL
hola@academiaorange.com

REDES SOCIALES
Encuentra a Katya Huitrón y Academia Orange en:
linktr.ee/katyahuitron

SOPORTE TÉCNICO
Para problemas de acceso al curso, escribe a:
soporte@academiaorange.com

HORARIO DE ATENCIÓN
Lunes a Viernes: 9:00 AM - 6:00 PM (Hora del Centro de México)`,
  },
};

export default function LegalPage({ page }) {
  const content = CONTENT[page];
  if (!content) return null;

  return (
    <div className="min-h-screen bg-[#0A0A0A] py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <a
          href="/"
          className="inline-flex items-center gap-2 text-[#FF6B1A] text-sm mb-10 hover:text-[#FF8A4A] transition-colors"
        >
          ← Volver al inicio
        </a>

        <h1 className="font-bebas text-white mb-8" style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}>
          {content.title}
        </h1>

        <div
          className="text-[#B8B8B8] text-sm leading-relaxed whitespace-pre-line rounded-2xl p-8"
          style={{ background: '#1A1A1A', border: '1px solid rgba(255,107,26,0.15)' }}
        >
          {content.body}
        </div>
      </motion.div>
    </div>
  );
}
