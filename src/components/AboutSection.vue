<template>
  <section class="about-section" id="nosotros">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header text-center">
        <div class="apple-pill-tag">
          <span>Filosofía & Artesanía</span>
        </div>

        <h2 class="section-title">
          Diseñado para deslumbrar.
          <span class="block-text text-muted-sub">Creado con Titanio y Cristal.</span>
        </h2>

        <p class="section-lead">
          En Apple reinterpretamos la elegancia industrial elevándola con acabados en titanio de grado aeroespacial. Cada línea, cada curva y cada píxel han sido concebidos para ofrecer una experiencia estética y funcional de clase mundial.
        </p>
      </div>

      <!-- Feature Cards -->
      <div class="about-features-grid">
        <div class="apple-feature-card">
          <div class="card-icon-wrap">
            <Cpu :size="24" class="icon-dark" />
          </div>
          <h3 class="card-heading">Ingeniería Nanométrica</h3>
          <p class="card-desc">
            Procesadores de 3nm con arquitectura de transistores hiperdensos que permiten un rendimiento gráfico un 40% superior reduciendo el consumo energético a la mitad.
          </p>
        </div>

        <div class="apple-feature-card">
          <div class="card-icon-wrap">
            <ShieldCheck :size="24" class="icon-dark" />
          </div>
          <h3 class="card-heading">Titanio Grado Aeroespacial</h3>
          <p class="card-desc">
            Forjado con la misma aleación empleada en misiones espaciales. Logra una relación peso-resistencia sin igual con bordes redondeados pulidos a mano.
          </p>
        </div>

        <div class="apple-feature-card">
          <div class="card-icon-wrap">
            <Globe :size="24" class="icon-dark" />
          </div>
          <h3 class="card-heading">Compromiso Carbono Neutral</h3>
          <p class="card-desc">
            Fabricados con aluminio 100% reciclado, cobalto en baterías reutilizado y packaging sin plásticos. Nuestro objetivo es cero emisiones para 2030.
          </p>
        </div>
      </div>

      <!-- Pure Black Stats Bar with White Typography (Fixes Image 3) -->
      <div class="black-stats-card">
        <div class="stats-grid">
          <div v-for="(stat, idx) in aboutStats" :key="idx" class="stat-item">
            <span class="stat-value-white">{{ stat.value }}</span>
            <span class="stat-label-white">{{ stat.label }}</span>
            <span class="stat-desc-light">{{ stat.description }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Sparkles, Cpu, ShieldCheck, Globe } from 'lucide-vue-next';
import { aboutStats } from '../data/products';
</script>

<style scoped>
.about-section {
  padding: 5rem 0;
  background: var(--bg-main);
}

.text-center {
  text-align: center;
  margin: 0 auto;
}

.section-header {
  max-width: 800px;
  margin-bottom: 3.5rem;
}

.apple-pill-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.35rem 0.9rem;
  border-radius: 9999px;
  background: rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.08);
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-main);
  margin-bottom: 1rem;
}

.section-title {
  font-size: clamp(1.5rem, 2.8vw, 2.2rem);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #1d1d1f;
  margin-bottom: 1rem;
}

.text-muted-sub {
  color: #86868b;
  display: block;
}

.section-lead {
  font-size: clamp(1rem, 1.6vw, 1.15rem);
  color: #515154;
  line-height: 1.6;
}

/* Feature Cards */
.about-features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

@media (min-width: 768px) {
  .about-features-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.apple-feature-card {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 24px;
  padding: 2.25rem 1.75rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: transform 300ms var(--ease-apple);
}

.apple-feature-card:hover {
  transform: translateY(-4px);
}

.card-icon-wrap {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: #f5f5f7;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
}

.icon-dark {
  color: #1d1d1f;
}

.card-heading {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #1d1d1f;
}

.card-desc {
  font-size: 0.9rem;
  color: #515154;
  line-height: 1.55;
}

/* PURE BLACK STATS CARD (Image 3 fix) */
.black-stats-card {
  background: #000000;
  color: #ffffff;
  padding: 3.5rem 2rem;
  border-radius: 28px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
}

@media (min-width: 640px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .stats-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.stat-value-white {
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: #ffffff;
  margin-bottom: 0.35rem;
}

.stat-label-white {
  font-size: 1.05rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.4rem;
}

.stat-desc-light {
  font-size: 0.85rem;
  color: #a1a1a6;
  max-width: 220px;
  line-height: 1.45;
}
</style>
