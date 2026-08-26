# iStudio Concept Showcase

[![Vue 3](https://img.shields.io/badge/Vue.js-3.5-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![Performance](https://img.shields.io/badge/Core_Web_Vitals-100%2F100-00E676?style=for-the-badge&logo=googlechrome&logoColor=white)](#-rendimiento-y-optimización)

Una **Landing Page & Catálogo Interactivo Single Page (SPA)** inspirada en la arquitectura de diseño, minimalismo extremo y experiencia visual premium de **iStudio**.

---

## 🌟 Características Principales

- 🎨 **Estética Apple Minimalista & Glassmorphism**: Interfaz oscura/clara fluida con componentes con efecto cristal, bordes sutiles y tipografía moderna.
- 📱 **Navegación Dinámica (Navbar Scroll Theme)**: Transición suave de barra de navegación blanca a negra según la posición del scroll con sincronización de marca.
- 📦 **Bento Grid Catalog**: Galería interactiva con filtrado dinámico por categorías (*Celulares, Tablets, Relojes*) y búsqueda en tiempo real.
- 🔍 **Modales Informativos de Producto**: Modal de detalle de producto sin distracciones interactivas innecesarias para enfocar la experiencia en especificaciones técnicas claras.
- 🛍️ **Pre-Orden VIP & Protección Anti-Spam**: Formulario de reserva modal con validaciones de entrada, sanitización de datos y trampa de bots (*Honeypot*).
- 💻 **Sección Ecosistema Apple (MacBook Neo)**: Tarjeta interactiva de integración entre dispositivos Apple con renders `.webp` de alta definición y profundidad 3D.
- ⚡ **Desempeño Extremo**: Carga instantánea de página gracias a la pipeline de optimización de imágenes nativa en formato WebP.

---

## 🛠️ Tecnologías Utilizadas

- **Framework**: [Vue 3](https://vuejs.org/) (Composition API con `<script setup>`)
- **Build Tool**: [Vite 5](https://vitejs.dev/)
- **Routing**: [Vue Router 4](https://router.vuejs.org/)
- **Iconografía**: [Lucide Vue Next](https://lucide.dev/)
- **Estilos**: Vanilla CSS (Variables CSS, Flexbox, Grid Layout & Animations)
- **Procesamiento de Imágenes**: Sharp (WebP Pipeline)
- **Efectos**: Canvas Confetti

---

## ⚡ Rendimiento y Optimización

El proyecto cuenta con un sistema automatizado de procesamiento de assets que convierte imágenes pesadas JPG/PNG a formato nativo `.webp`:

- 📉 **Reducción de Bundle de Imágenes**: De `~5.5 MB` a solo `~650 KB` (**>90% de ahorro**).
- ⏱️ **Tiempo de Compilación Vite**: Reducido a solo **3.6 segundos**.
- 🚀 **Core Web Vitals**: Puntuaciones verdes (95-100) en velocidad de carga y estabilidad visual (CLS).

---

## 🚀 Instalación y Ejecución Local

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

```bash
# 1. Clonar el repositorio
git clone https://github.com/Carlos96-07/Apple-Concept.git

# 2. Entrar al directorio del proyecto
cd Apple-Concept

# 3. Instalar las dependencias
npm install

# 4. Iniciar el servidor de desarrollo
npm run dev
```

Abre tu navegador e ingresa a `http://localhost:5173`.

---

## 📦 Compilación para Producción

Para generar el bundle optimizado listo para subir a un servidor o plataforma como Vercel/Netlify:

```bash
npm run build
```

Para probar la versión de producción localmente:

```bash
npm run preview
```

---

## 👨‍💻 Desarrollador

Desarrollado por **Carlos Leandro**  
- GitHub: [@Carlos96-07](https://github.com/Carlos96-07)
