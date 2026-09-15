# Fórmula Flipping — Landing Page

Landing page VSL de alta conversión para **Fórmula Flipping + Recorrido en Obra** de Academia Orange (Katya Huitrón).

Edición limitada: curso presencial (13 de noviembre de 2026), recorrido en una obra real (14 de noviembre de 2026) y curso en línea con acceso inmediato.

## Stack

- React 19 + Vite 8
- Tailwind CSS v4
- Framer Motion
- Lucide React

---

## Desarrollo local

```bash
npm install
npm run dev
```

La app corre en `http://localhost:5173`.

---

## Build de producción

```bash
npm run build
```

Los archivos estáticos se generan en `/dist`.

---

## Deploy en Render (gratuito)

1. Crear cuenta en [render.com](https://render.com)
2. **New → Static Site**
3. Conectar el repositorio de GitHub
4. Configuración:
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `./dist`
5. Click en **Create Static Site**

El archivo `render.yaml` en la raíz ya tiene la configuración correcta para deploy automático.

---

## Reemplazar placeholders

### Imágenes

| Archivo | Descripción |
|---------|-------------|
| `public/assets/logos/academia-orange-logo.png` | Logo Academia Orange (PNG transparente, 500px mínimo) |
| `public/assets/katya/katya-hero.jpg` | Foto de Katya (cuadrada, 800x800px mínimo) |
| `public/assets/testimonios/oscar-cortes.jpg` | Foto Oscar Cortés (cuadrada, 400x400px) |
| `public/assets/testimonios/ana-pau-siles.jpg` | Foto Ana Pau Siles (cuadrada, 400x400px) |
| `public/assets/testimonios/mauricio-salazar.jpg` | Foto Mauricio Salazar (cuadrada, 400x400px) |
| `public/assets/recorrido/recorrido-en-obra.jpg` | Póster del evento, se muestra en `/pago` (~1200px de ancho, JPEG < 400 KB) |
| `public/assets/modulos/modulo-1.jpg` a `modulo-12.jpg` | Screenshots de cada módulo (16:9) |

### Links y configuración

Todo vive en `src/config/constants.js` — es la fuente única de verdad. Ningún componente
hardcodea precios ni fechas: usan los helpers `esPreventaActiva()`, `precioActual()` y
`formatoMXN()` que exporta ese mismo archivo.

```js
LINK_STRIPE: 'https://buy.stripe.com/...',          // Payment Link de Stripe (paso 2.1)
LINK_TRANSFERENCIA: 'https://go.academiaorange.com/...', // Formulario GHL (paso 2.2)

PRECIO_NORMAL: 4990,                                 // MXN
PRECIO_PREVENTA: 3990,                               // MXN
PREVENTA_FIN: '2026-09-30T23:59:59-06:00',           // hora centro de México
PREVENTA_FIN_TEXTO: '30 de septiembre',              // como se muestra en pantalla
```

Cuando `PREVENTA_FIN` queda en el pasado, toda la página cambia sola: los precios pasan a
`$4,990.00 MXN`, desaparece cualquier mención de preventa y la barra superior muestra
"Preventa finalizada". No hay que tocar componentes.

### Tracking (analytics)

En `index.html`, descomentar y reemplazar IDs:
- `GTM-XXXXXXX` → tu ID de Google Tag Manager
- `G-XXXXXXXXXX` → tu ID de Google Analytics 4
- `CLARITY_PROJECT_ID` → tu ID de Microsoft Clarity

---

## Estructura de archivos

```
src/
├── config/
│   └── constants.js        ← Config centralizado (links, precios, etc.)
├── lib/
│   └── tracking.js         ← Meta Pixel, GA4, eventos custom
├── components/
│   ├── Hero.jsx            ← VSL + YouTube API
│   ├── CountdownBar.jsx    ← Cuenta regresiva real al fin de la preventa
│   ├── FirstCTA.jsx        ← CTA principal + bloque "INCLUYE"
│   ├── AboutKatya.jsx      ← Bio + stats de Katya
│   ├── Modules.jsx         ← Grid de 12 módulos
│   ├── Testimonials.jsx    ← Video testimonio + tarjetas
│   ├── Pricing.jsx         ← Value stack + precio + CTA
│   ├── FAQ.jsx             ← Accordion de preguntas
│   ├── FinalCTA.jsx        ← CTA final agresivo
│   ├── Footer.jsx          ← Disclaimer legal + links
│   ├── CookieBanner.jsx    ← Banner LFPDPPP
│   ├── PasoPago.jsx        ← Paso 2 del embudo (/pago)
│   └── LegalPage.jsx       ← Páginas /privacidad /terminos /cookies /contacto
└── App.jsx                 ← Composición + routing simple
```

---

## Embudo de 2 pasos

```
1) Landing (/)  →  clic en cualquiera de los 10 botones de compra
2) /pago        →  "PAGAR CON TARJETA"      → LINK_STRIPE (Payment Link de Stripe)
                →  "PAGAR POR TRANSFERENCIA" → LINK_TRANSFERENCIA (formulario GHL)
```

Los botones de la landing no van directo al cobro: navegan a `/pago` en la misma pestaña.
Ahí se muestra el póster del evento, las fechas, el precio vigente y las dos formas de pago.

`/pago` no está en `sitemap.xml` a propósito — es un paso intermedio del embudo y no debe
indexarse. En producción funciona con recarga directa (F5) porque `render.yaml` reescribe
`/* → /index.html`.

### Tracking del embudo

| Evento | Dónde se dispara |
|--------|------------------|
| `InitiateCheckout` / `begin_checkout` | Botón de la landing, con `cta_position` = sección de origen |
| `PasoPagoVisto` | Al montar `/pago` |
| `AddPaymentInfo` / `add_payment_info` | Al elegir forma de pago, con `payment_method` = `stripe` o `transferencia` |

### Cambiar el link de Stripe cuando termine la preventa

El Payment Link actual cobra el precio de **preventa** ($3,990 MXN). Al pasar el
30 de septiembre la página muestra $4,990 MXN, pero Stripe seguiría cobrando $3,990.

Antes de esa fecha hay que crear un segundo Payment Link por $4,990 y elegir cuál usar
según la fecha, por ejemplo:

```js
// constants.js
LINK_STRIPE_PREVENTA: 'https://buy.stripe.com/...3990',
LINK_STRIPE_NORMAL:   'https://buy.stripe.com/...4990',

export const linkStripe = () =>
  esPreventaActiva() ? CONFIG.LINK_STRIPE_PREVENTA : CONFIG.LINK_STRIPE_NORMAL;
```

y usar `linkStripe()` en `PasoPago.jsx`.

---

## Páginas legales

Disponibles en:
- `/privacidad` — Política de Privacidad
- `/terminos` — Términos y Condiciones
- `/cookies` — Política de Cookies
- `/contacto` — Información de contacto
