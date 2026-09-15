# Fórmula Flipping — Landing Page

Landing page VSL de alta conversión para el curso **Fórmula Flipping** de Academia Orange (Katya Huitrón).

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
| `public/assets/sellos/garantia-7-dias.png` | Sello dorado garantía |
| `public/assets/sellos/alumnos-satisfechos.png` | Sello dorado alumnos |
| `public/assets/sellos/acceso-inmediato.png` | Sello dorado acceso |
| `public/assets/modulos/modulo-1.jpg` a `modulo-12.jpg` | Screenshots de cada módulo (16:9) |

### Links y configuración

Editar `src/config/constants.js`:

```js
LINK_HOTMART: 'https://pay.hotmart.com/U99540900V?off=pursgw9c&bid=1779001130479',
```

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
├── hooks/
│   └── useVideoProgress.js ← Estado de desbloqueo VSL + localStorage
├── lib/
│   └── tracking.js         ← Meta Pixel, GA4, eventos custom
├── components/
│   ├── Hero.jsx            ← VSL + YouTube API
│   ├── BlockedContent.jsx  ← Overlay de bloqueo
│   ├── FirstCTA.jsx        ← CTA post-desbloqueo
│   ├── AboutKatya.jsx      ← Bio + stats de Katya
│   ├── Modules.jsx         ← Grid de 12 módulos
│   ├── Testimonials.jsx    ← Video testimonio + tarjetas
│   ├── Guarantees.jsx      ← 3 sellos de garantía
│   ├── Pricing.jsx         ← Value stack + precio + CTA
│   ├── FAQ.jsx             ← Accordion de preguntas
│   ├── FinalCTA.jsx        ← CTA final agresivo
│   ├── Footer.jsx          ← Disclaimer legal + links
│   ├── CookieBanner.jsx    ← Banner LFPDPPP
│   └── LegalPage.jsx       ← Páginas /privacidad /terminos /cookies /contacto
└── App.jsx                 ← Composición + routing simple
```

---

## Páginas legales

Disponibles en:
- `/privacidad` — Política de Privacidad
- `/terminos` — Términos y Condiciones
- `/cookies` — Política de Cookies
- `/contacto` — Información de contacto
