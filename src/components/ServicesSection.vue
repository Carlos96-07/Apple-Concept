<template>
  <section class="services-section" id="servicios">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header text-center">
        <div class="glass-badge hero-tag">
          <span>Ecosistema de Servicios</span>
        </div>

        <h2 class="section-title">
          Experiencia Integral iStudio CR.
        </h2>

        <p class="section-lead">
          Tranquilidad, accesibilidad y soporte de primer nivel en cada etapa de tu compra.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="services-grid">
        <div 
          v-for="service in services" 
          :key="service.id" 
          class="glass-panel service-card"
        >
          <div class="service-top">
            <div class="service-icon-box">
              <component :is="getServiceIcon(service.icon)" :size="22" class="text-cyan" />
            </div>
            <span class="glass-badge glass-badge-amber">{{ service.badge }}</span>
          </div>

          <h3 class="service-title">{{ service.title }}</h3>
          <h4 class="service-subtitle">{{ service.subtitle }}</h4>
          <p class="service-description">{{ service.description }}</p>

          <div class="service-footer">
            <button class="btn-glass service-link-btn" @click="$emit('request-service', service)">
              <span>{{ service.linkText }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { 
  Sparkles, 
  Repeat, 
  ShieldCheck, 
  CreditCard, 
  Truck, 
  ArrowRight 
} from 'lucide-vue-next';
import { services } from '../data/products';

defineEmits(['request-service']);

function getServiceIcon(iconName) {
  switch (iconName) {
    case 'Repeat': return Repeat;
    case 'ShieldCheck': return ShieldCheck;
    case 'CreditCard': return CreditCard;
    case 'Truck': return Truck;
    default: return Sparkles;
  }
}
</script>

<style scoped>
.services-section {
  padding: 6rem 0;
  position: relative;
}

.text-center {
  text-align: center;
  margin: 0 auto;
}

.section-header {
  max-width: 800px;
  margin-bottom: 4rem;
}

.hero-tag {
  margin-bottom: 1rem;
}

.section-title {
  font-size: clamp(1.25rem, 2vw, 1.7rem);
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.02em;
  margin-bottom: 0.75rem;
}

.section-lead {
  font-size: clamp(0.88rem, 1.4vw, 1.05rem);
  color: var(--text-muted);
  line-height: 1.5;
}

.services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.75rem;
}

@media (min-width: 768px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.service-card {
  padding: 2.25rem;
  display: flex;
  flex-direction: column;
  border-radius: 28px;
  transition: transform 350ms var(--ease-apple), border-color 350ms ease;
}

.service-card:hover {
  transform: translateY(-6px);
  border-color: var(--border-glass-bright);
}

.service-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.service-icon-box {
  width: 50px;
  height: 50px;
  border-radius: 14px;
  background: rgba(56, 189, 248, 0.12);
  border: 1px solid rgba(56, 189, 248, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-cyan {
  color: var(--accent-cyan);
}

.service-title {
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 0.35rem;
  color: var(--text-main);
}

.service-subtitle {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--accent-cyan);
  margin-bottom: 1rem;
}

.service-description {
  font-size: 0.92rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 1.75rem;
}

.service-footer {
  margin-top: auto;
}

.service-link-btn {
  padding: 0.6rem 1.2rem;
  font-size: 0.88rem;
}
</style>
