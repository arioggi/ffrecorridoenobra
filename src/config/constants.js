export const CONFIG = {
  // Meta Pixel
  META_PIXEL_ID: '1612385910116273',

  // Links
  LINK_LINKTREE: 'https://youtube.com/playlist?list=PLj_NAnLjcNYfNTAuG0MFMm1iXt0IcU1Db&si=UZxh63Bi-jLcerBo',

  // Videos YouTube
  VSL_VIDEO_ID: 'RHlW14YeXtM',
  TESTIMONIO_VIDEO_ID: '53cvJvlEHMU',

  // Producto
  NOMBRE_PRODUCTO: 'Fórmula Flipping + Recorrido en Obra',

  // Embudo — paso 2
  RUTA_PAGO: '/pago',
  LINK_STRIPE: 'https://buy.stripe.com/bJefZi75vf0N1Gef7j8bS00',
  LINK_TRANSFERENCIA: 'https://go.academiaorange.com/formula-flipping-recorrido-transferencia',

  // Datos del curso
  TOTAL_ALUMNOS: 4605,

  // Precios (MXN)
  MONEDA: 'MXN',
  PRECIO_NORMAL: 4990,
  PRECIO_PREVENTA: 3990,
  PREVENTA_FIN: '2026-09-30T23:59:59-06:00', // 30 de septiembre, hora centro de México
  PREVENTA_FIN_TEXTO: '30 de septiembre',

  // Fechas del evento
  FECHA_PRESENCIAL: '13 de noviembre de 2026',
  FECHA_RECORRIDO: '14 de noviembre de 2026',
  HORARIO_EVENTO: '10am a 1pm',

  // Garantía y acceso
  DIAS_GARANTIA: 7,
  ANOS_ACCESO: 1,

  // Información de Katya
  ANOS_EXPERIENCIA: 15,
  OPERACIONES: 1000,

  // Value stack — texto del cliente, verbatim. Suma exacta: 11,516.28
  VALUE_STACK: [
    { label: 'Acceso al curso en línea por 365 días', value: 2681.28 },
    { label: 'Acceso al curso presencial el 13 de noviembre de 10am a 1pm', value: 2900 },
    { label: 'Recorrido en obra el 14 de noviembre de 10am a 1pm', value: 2289 },
    { label: 'Comunidad y soporte', value: 1746 },
    { label: 'Bonos', value: 1900 },
  ],
};

/** ¿Sigue vigente la preventa? */
export const esPreventaActiva = () => Date.now() < new Date(CONFIG.PREVENTA_FIN).getTime();

/** Precio que se cobra ahora mismo, según la fecha. */
export const precioActual = () => (esPreventaActiva() ? CONFIG.PRECIO_PREVENTA : CONFIG.PRECIO_NORMAL);

/** formatoMXN(3990) → "$3,990.00" — siempre con dos decimales, es el formato que usa el cliente. */
export const formatoMXN = (n) =>
  `$${n.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
