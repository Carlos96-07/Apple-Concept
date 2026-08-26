<template>
  <footer class="apple-dark-footer">
    <div class="container footer-inner">
      <!-- Top Bar with Circular White Badge + Black Apple Logo in corner (Matching User Image) -->
      <div class="footer-top-brand">
        <div class="apple-circle-badge">
          <svg viewBox="0 0 170 170" width="14" height="14" fill="#000000" aria-label="Apple Logo">
            <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.34.13-9.14-1.9-14.4-6.07-3.68-3.03-7.69-7.85-12.03-14.44-6.72-10.12-11.97-21.36-15.75-33.72-3.78-12.36-5.67-24.32-5.67-35.88 0-14.15 3.44-25.75 10.32-34.8 6.88-9.05 15.42-13.67 25.62-13.87 4.69 0 9.87 1.25 15.54 3.75 5.67 2.5 9.77 3.75 12.3 3.75 2.14 0 6.29-1.25 12.45-3.75 6.16-2.5 11.13-3.63 14.91-3.38 10.63.5 19.34 4.54 26.13 12.13 6.79 7.59 10.85 17.5 12.18 29.74-9.82 5.92-14.65 14.2-14.48 24.84.18 10.64 4.96 19.12 14.34 25.44-2.11 6.12-4.88 12.06-8.3 17.82zM119.22 31.42c0-7.39 2.72-14.42 8.16-21.09 5.44-6.67 12.27-10.33 20.49-10.98.13 1.13.2 2.13.2 3 0 7.39-2.77 14.51-8.31 21.36-5.54 6.85-12.4 10.63-20.57 11.35-.13-.88-.2-1.76-.2-2.64z"/>
          </svg>
        </div>
        <span class="apple-footer-title">iStudio CR</span>
      </div>

      <!-- Essential Directories (Only Necessary Links) -->
      <div class="footer-columns">
        <div class="f-col">
          <h4 class="f-title">Explorar</h4>
          <ul class="f-list">
            <li><a href="#catalogo" @click.prevent="$emit('select-category', 'celulares')">iPhone</a></li>
            <li><a href="#catalogo" @click.prevent="$emit('select-category', 'tablets')">iPad</a></li>
            <li><a href="#catalogo" @click.prevent="$emit('select-category', 'relojes')">Apple Watch</a></li>
            <li><a href="#catalogo" @click.prevent="$emit('select-category', 'todos')">AirPods</a></li>
          </ul>
        </div>

        <div class="f-col">
          <h4 class="f-title">Servicios</h4>
          <ul class="f-list">
            <li><a href="#servicios">Trade In</a></li>
            <li><a href="#servicios">AppleCare+</a></li>
            <li><a href="#servicios">Financiamiento</a></li>
          </ul>
        </div>

        <div class="f-col">
          <h4 class="f-title">Soporte & Contacto</h4>
          <ul class="f-list">
            <li><a href="#contacto">Soporte Técnico</a></li>
            <li><a href="#contacto">Estado del Pedido</a></li>
            <li><a href="#contacto">Contacto Directo</a></li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <span class="copy-text">Desarrollado por el dev Carlos Leandro</span>
        
        <div class="legal-links">
          <a href="#">Privacidad</a>
          <a href="#">Avisos Legales</a>
          <a href="#">Mapa del Sitio</a>
          <span class="region-text">América Latina (Español)</span>
        </div>
      </div>

      <!-- Legal Educational Disclaimer -->
      <div class="footer-disclaimer-box">
        <p>
          <strong>Aviso Legal & Deslinde:</strong> Este sitio web es un proyecto conceptual y educativo de portafolio sin fines de lucro, desarrollado por el dev Carlos Leandro. No está afiliado, patrocinado ni asociado con Apple Inc. Las marcas Apple, iPhone, iPad, MacBook y Apple Watch pertenecen a Apple Inc.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
defineEmits(['select-category']);
</script>

<style scoped>
.apple-dark-footer {
  background: #000000;
  color: #ffffff;
  padding: 3.5rem 0 2rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-inner {
  display: flex;
  flex-direction: column;
}

.footer-top-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  margin-bottom: 2rem;
}

.apple-circle-badge {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(255, 255, 255, 0.2);
}

.apple-footer-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.01em;
}

.footer-columns {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  margin-bottom: 2rem;
}

@media (min-width: 640px) {
  .footer-columns {
    grid-template-columns: repeat(3, 1fr);
  }
}

.f-title {
  font-size: 0.85rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.85rem;
}

.f-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.f-list a {
  color: #a1a1a6;
  font-size: 0.83rem;
  text-decoration: none;
  transition: color 200ms ease;
}

.f-list a:hover {
  color: #ffffff;
}

.footer-bottom {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 0.78rem;
  color: #a1a1a6;
}

@media (min-width: 768px) {
  .footer-bottom {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

.legal-links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
}

.legal-links a {
  color: #a1a1a6;
  text-decoration: none;
}

.legal-links a:hover {
  color: #ffffff;
}

.region-text {
  color: #86868b;
  margin-left: 0.5rem;
}

.footer-disclaimer-box {
  margin-top: 1.5rem;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 0.74rem;
  color: #86868b;
  line-height: 1.5;
  text-align: center;
}

.footer-disclaimer-box strong {
  color: #a1a1a6;
}
</style>
