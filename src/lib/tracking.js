import { CONFIG, precioActual } from '../config/constants';

/**
 * Envía eventos estándar tanto a Meta Pixel como a Google Analytics (gtag)
 */
export const trackEvent = (eventName, params = {}) => {
  if (typeof window !== 'undefined' && typeof window.fbq !== 'undefined') {
    window.fbq('track', eventName, params);
  }
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, params);
  }
  // TikTok Ads (descomentar cuando esté activo)
  // if (typeof window !== 'undefined' && typeof window.ttq !== 'undefined') {
  //   window.ttq.track(eventName, params);
  // }
};

/**
 * Envía eventos personalizados
 */
export const trackCustom = (eventName, params = {}) => {
  if (typeof window !== 'undefined' && typeof window.fbq !== 'undefined') {
    window.fbq('trackCustom', eventName, params);
  }
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, params);
  }
};

/**
 * Registra la intención de compra cuando entran al embudo de pago (/pago).
 * Se dispara desde los botones de la landing para no romper la continuidad
 * de datos del Pixel: InitiateCheckout sigue significando "entró al embudo".
 */
export const trackCheckout = ({ from } = {}) => {
  const params = {
    content_name: CONFIG.NOMBRE_PRODUCTO,
    content_category: 'Curso presencial + online',
    value: precioActual(),
    currency: CONFIG.MONEDA,
    cta_position: from,
  };

  if (typeof window !== 'undefined' && typeof window.fbq !== 'undefined') {
    window.fbq('track', 'InitiateCheckout', params);
  }
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', 'begin_checkout', {
      currency: CONFIG.MONEDA,
      value: precioActual(),
      cta_position: from,
    });
  }
};

/**
 * Registra la forma de pago elegida en el paso 2 del embudo.
 * @param {'stripe'|'transferencia'} metodo
 */
export const trackPagoElegido = (metodo) => {
  const params = {
    content_name: CONFIG.NOMBRE_PRODUCTO,
    value: precioActual(),
    currency: CONFIG.MONEDA,
    payment_method: metodo,
  };

  if (typeof window !== 'undefined' && typeof window.fbq !== 'undefined') {
    window.fbq('track', 'AddPaymentInfo', params);
  }
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', 'add_payment_info', {
      currency: CONFIG.MONEDA,
      value: precioActual(),
      payment_type: metodo,
    });
  }

  trackCustom('PagoElegido', { metodo });
};

/**
 * Rastreador de scroll para el Funnel de Ventas (50% y 100%)
 */
export const initScrollTracking = () => {
  if (typeof window === 'undefined') return () => {};

  let fired50 = false;
  let fired100 = false;

  const handler = () => {
    const scrolled = (window.scrollY + window.innerHeight) / document.body.scrollHeight;
    if (!fired50 && scrolled >= 0.5) {
      fired50 = true;
      trackCustom('Scroll50');
    }
    if (!fired100 && scrolled >= 0.99) {
      fired100 = true;
      trackCustom('Scroll100');
    }
  };

  window.addEventListener('scroll', handler, { passive: true });
  return () => window.removeEventListener('scroll', handler);
};