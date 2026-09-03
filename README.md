# Rosmar Mendoza - Interactive Backend Developer CV & Portfolio

¡Hola Rosmar! Este es tu sitio web frontend interactivo de Hoja de Vida/Portafolio, construido con **Tailwind CSS**, soporte **bilingüe (Español / Inglés)**, visor y descarga de **JSON Resume Standard**, modo oscuro/claro y exportación lista para impresoras / PDF.

## 🚀 Características Principales

- ⚡ **Diseño Moderno e Interactivo (Tailwind CSS)**: Tarjetas glassmorphism, degradados elegantes, insignias de tecnología y respuesta responsive impecable en móviles, tablets y escritorio.
- 🌐 **Soporte Bilingüe Instantáneo (ES / EN)**: Botón de cambio de idioma en la cabecera que actualiza todo el contenido dinámicamente sin recargar la página.
- 📄 **Estándar JSON Resume Integrado**:
  - `rosmar_cv_es.json` (Versión oficial en Español)
  - `rosmar_cv_en.json` (Versión oficial en Inglés)
  - Visor modal interactivo para copiar o descargar el archivo `.json` en 1 clic.
- 🖨️ **Exportación a PDF / Impresión**: Hoja de estilos personalizada para `@media print`. Al hacer clic en **"Guardar PDF"**, genera un documento limpio y bien estructurado sin menús ni botones.
- 🌙 **Modo Oscuro & Modo Claro**: Conmutador fluido en la barra de navegación.
- 🎯 **Enfoque Backend & IA**: Destaca la experiencia en **Golang, MercadoLibre, Python (FastAPI/Django), Java, PostgreSQL, AWS y herramientas de IA (Cursor/Claude)**.

---

## 🛠️ Cómo Probarlo Localmente

Si tienes Python instalado:
```bash
cd /Users/ros/.gemini/antigravity/scratch/rosmar-cv-github-pages
python3 -m http.server 8000
```
Luego abre en tu navegador: **`http://localhost:8000`**

O simplemente haz doble clic en el archivo [index.html](file:///Users/ros/.gemini/antigravity/scratch/rosmar-cv-github-pages/index.html) para abrirlo directamente.

---

## 🌐 Publicar en GitHub Pages (Gratis en 2 minutos)

1. Crea un nuevo repositorio en GitHub (ejemplo: `rosmar-cv` o `rosmar-mendoza.github.io`).
2. Sube estos 3 archivos (`index.html`, `rosmar_cv_es.json`, `rosmar_cv_en.json`):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Interactive Resume with Tailwind & JSON Resume"
   git branch -M main
   git remote add origin https://github.com/rosmarmendoza/rosmar-cv.git
   git push -u origin main
   ```
3. En GitHub, ve a **Settings > Pages** -> selecciona la rama `main` y guarda.
4. ¡Listo! Tu CV estará publicado en `https://rosmarmendoza.github.io/rosmar-cv/`.
