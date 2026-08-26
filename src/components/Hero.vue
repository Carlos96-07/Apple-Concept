<template>
  <section class="apple-dark-hero-bg">
    <!-- Background Image Layer -->
    <div class="hero-bg-overlay">
      <img 
        :src="heroBg" 
        alt="iPhone 17 Pro background" 
        class="hero-bg-image"
      />
      <div class="hero-gradient-scrim"></div>
    </div>

    <!-- Floating Text Content Layer -->
    <div class="container hero-content-container">
      <h1 class="hero-main-title">iPhone 17 Pro</h1>
      <h2 class="hero-tagline-title">Diseñado para llegar más lejos.</h2>
      
      <p class="hero-classic-paragraph">
        Estructura de titanio aeroespacial. Impulsado por el chip A18 Pro con el rendimiento gráfico más potente y máxima autonomía.
      </p>

      <div class="hero-buttons-row">
        <button class="btn-hero-white" @click="$emit('select-product', heroProduct)">
          Comprar
        </button>
        <button class="btn-hero-white" @click="$emit('open-detail', heroProduct)">
          Más información
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ChevronRight } from 'lucide-vue-next';
import heroBg from '../assets/iphone-17.webp';

defineProps({
  heroProduct: {
    type: Object,
    required: true
  }
});

defineEmits(['select-product', 'open-detail']);
</script>

<style scoped>
.apple-dark-hero-bg {
  position: relative;
  background: #000000;
  color: #ffffff;
  min-height: 680px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 5rem 0;
  margin-top: 48px;
}

/* Background Image & Scrim Overlay */
.hero-bg-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0.75;
}

.hero-gradient-scrim {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.85) 80%, #000000 100%);
}

/* Content Box */
.hero-content-container {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 820px;
}

.hero-label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #f59e0b;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 0.5rem;
}

.hero-main-title {
  font-size: clamp(3.2rem, 7vw, 5.5rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.05;
  margin-bottom: 0.75rem;
  color: #ffffff;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
}

.hero-tagline-title {
  font-size: clamp(1.4rem, 3vw, 2.2rem);
  font-weight: 600;
  color: #f5f5f7;
  letter-spacing: -0.01em;
  margin-bottom: 1.25rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
}

.hero-classic-paragraph {
  font-size: clamp(1rem, 1.6vw, 1.15rem);
  color: #e5e5e7;
  line-height: 1.6;
  max-width: 680px;
  margin-bottom: 2rem;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
}

.hero-buttons-row {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.btn-hero-white {
  background: #ffffff;
  color: #000000;
  border: 1px solid #ffffff;
  padding: 0.75rem 2.2rem;
  font-size: 1.05rem;
  font-weight: 600;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 250ms ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
}

.btn-hero-white:hover {
  background: #e8e8ed;
  transform: scale(1.03);
}

@media (max-width: 768px) {
  .apple-dark-hero-bg {
    min-height: 480px;
    padding: 3.5rem 1rem 2.5rem 1rem;
    margin-top: 48px;
  }

  .hero-main-title {
    font-size: clamp(2.2rem, 7vw, 3.2rem);
    margin-bottom: 0.4rem;
  }

  .hero-tagline-title {
    font-size: clamp(1rem, 3.8vw, 1.3rem);
    margin-bottom: 0.75rem;
  }

  .hero-classic-paragraph {
    font-size: 0.88rem;
    line-height: 1.45;
    max-width: 90%;
    margin-bottom: 1.25rem;
  }

  .hero-buttons-row {
    gap: 1rem;
  }

  .btn-hero-white {
    padding: 0.65rem 1.4rem;
    font-size: 0.95rem;
  }
}
</style>
