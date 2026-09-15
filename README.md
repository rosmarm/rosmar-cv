# Rosmar Mendoza - Interactive CV & Portfolio (Astro + Tailwind CSS)

¡Hola Rosmar! Este es tu sitio web frontend interactivo de Hoja de Vida/Portafolio profesional con **3 perfiles interactivos** (Backend Developer, Technical Project Manager, AI Engineer) y soporte **bilingüe (Español / Inglés)**.

Migrado a **Astro + Tailwind CSS compilado** para garantizar un responsive 100% impecable en cualquier dispositivo móvil sin solapamiento de textos ni bordes.

---

## 🎯 3 Perfiles Profesionales en 1 Solo Sitio

Puedes alternar entre los 3 perfiles instantáneamente desde la barra de navegación:
- 🖥️ **Backend Developer**: Énfasis en Golang, Microservicios, PostgreSQL, SLAs 99%+ y Arquitecturas Distribuidas.
- 📊 **Project Manager**: Énfasis en Certificación PMI/PMP®, Scrum/Agile delivery, gestión de incidentes y KPIs en Power BI.
- 🧠 **AI Engineer**: Énfasis en LLMs, Python pipelines, Prompt Engineering y Automatización con agentes/herramientas de IA.

---

## 💡 ¿Cómo actualizar tu CV? (¡Súper fácil!)

No necesitas saber frontend ni tocar código visual. Para actualizar cualquier dato de tu experiencia, habilidades, estudios o certificaciones, **solo editas los archivos JSON** en la carpeta `public/`:

- `rosmar_cv_backend_es.json` / `rosmar_cv_backend_en.json`
- `rosmar_cv_pm_es.json` / `rosmar_cv_pm_en.json`
- `rosmar_cv_ai_es.json` / `rosmar_cv_ai_en.json`

Al guardar y hacer push, GitHub Actions compila y despliega tu sitio automáticamente.

---

## 🛠️ Desarrollo Local

```bash
# Instalar dependencias (solo la primera vez)
npm install

# Iniciar servidor de desarrollo con recarga automática
npm run dev

# Compilar para producción
npm run build

# Vista previa de la compilación de producción
npm run preview
```

---

## 🌐 Despliegue Automático a GitHub Pages

El repositorio incluye un workflow de **GitHub Actions** en `.github/workflows/static.yml` que:
1. Se activa automáticamente con cada `git push` a la rama `main`.
2. Instala dependencias y compila el sitio estático optimizado con Astro.
3. Lo publica directamente en GitHub Pages: **https://rosmarm.github.io/rosmar-cv/**
