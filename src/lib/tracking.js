import { CONFIG } from '../config/constants';

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
 * Registra de forma precisa la intención de compra cuando van hacia Hotmart
 */
export const trackCheckout = () => {
  const params = {
    content_name: 'Fórmula Flipping',
    content_category: 'Curso',
    value: CONFIG.PRECIO_ACTUAL,
    currency: CONFIG.MONEDA,
  };
  
  if (typeof window !== 'undefined' && typeof window.fbq !== 'undefined') {
    window.fbq('track', 'InitiateCheckout', params);
  }
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', 'begin_checkout', {
      currency: CONFIG.MONEDA,
      value: CONFIG.PRECIO_ACTUAL,
    });
  }
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