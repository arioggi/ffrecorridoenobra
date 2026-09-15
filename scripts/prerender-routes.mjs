// Copia dist/index.html a dist/<ruta>/index.html para cada ruta del router
// del cliente. Sin esto, pedirle /pago directamente a un host estático
// devuelve 404: no existe ese archivo y React nunca llega a ejecutarse.
//
// El rewrite /* → /index.html de render.yaml hace lo mismo del lado del
// servidor; esto es el respaldo para cuando el host no lo tiene configurado.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { RUTAS_SPA } from '../src/config/constants.js';

const raiz = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(raiz, 'dist');
const indexHtml = join(dist, 'index.html');

if (!existsSync(indexHtml)) {
  console.error('✗ No existe dist/index.html — corre `vite build` primero.');
  process.exit(1);
}

const html = readFileSync(indexHtml, 'utf8');

for (const ruta of RUTAS_SPA) {
  const carpeta = join(dist, ruta);
  mkdirSync(carpeta, { recursive: true });
  writeFileSync(join(carpeta, 'index.html'), html);
}

console.log(`✓ Rutas SPA generadas: ${RUTAS_SPA.map((r) => `/${r}`).join(' ')}`);
