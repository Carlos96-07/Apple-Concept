<template>
  <footer class="apple-dark-footer">
    <div class="container footer-inner">
      <!-- Top Bar with White Apple Logo Badge -->
      <div class="footer-top-brand">
        <div class="apple-circle-badge">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="#ffffff" aria-label="Logo">
            <path fill="#ffffff" d="M13.2 3.8c1.6-1.5 4.1-1.8 5.3-1.8-.2 1.3-.9 3.5-2.6 4.4-1-.8-2-1.5-2.7-2.6zM12 6c-3.2 0-6.5 2.5-6.5 7.3 0 4.6 3 8.2 6.5 8.2.8 0 1.5-.3 2-.3.5 0 1.2.3 2 .3 3.5 0 6.5-3.6 6.5-8.2C22.5 8.5 19.2 6 16 6c-1.1 0-2.2.3-3 .8-.8-.5-1.9-.8-3-.8z"/>
          </svg>
        </div>
        <span class="apple-footer-title">iStudio</span>
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
        <div class="legal-links">
          <a href="#">Mapa del Sitio</a>
          <span class="region-text">América Latina (Español)</span>
        </div>
      </div>

      <!-- Legal Educational Disclaimer -->
      <div class="footer-disclaimer-box">
        <p>
          <strong>Aviso Legal:</strong> Este sitio web es un proyecto conceptual y educativo de portafolio sin fines de lucro. No está afiliado, patrocinado ni asociado con Apple Inc.
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
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
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
