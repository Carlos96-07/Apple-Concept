<template>
  <section class="ecosystem-section">
    <div class="container">
      <div class="glass-panel ecosystem-card">
        <div class="ecosystem-grid">
          <!-- Text info column -->
          <div class="ecosystem-info">
            <div class="accordion-header" @click="isOpen = !isOpen">
              <h2 class="ecosystem-title">MacBook Neo</h2>
              <button class="toggle-btn" :aria-expanded="isOpen">
                <ChevronUp v-if="isOpen" :size="24" />
                <ChevronDown v-else :size="24" />
              </button>
            </div>

            <div v-show="isOpen" class="ecosystem-content">
              <p class="ecosystem-text">
                Rendimiento de vanguardia y diseño ultraligero. Potenciada por Apple Silicon para una velocidad increíble, pantalla Retina de alta definición y sincronización fluida en tiempo real con tu iPhone.
              </p>
            </div>
          </div>

          <!-- Image visual column -->
          <div class="ecosystem-visual">
            <img 
              :src="macImg" 
              alt="MacBook Neo"
              class="ecosystem-img"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { ChevronUp, ChevronDown, ChevronRight } from 'lucide-vue-next';
import macImg from '../assets/mac-neo_nobg.webp';

const isOpen = ref(true);
</script>

<style scoped>
.ecosystem-section {
  padding: 3rem 0;
}

.ecosystem-card {
  padding: 3rem;
  border-radius: 32px;
  background: var(--bg-card-solid);
  border: 1px solid rgba(0, 0, 0, 0.12);
  box-shadow: 0 35px 90px -10px rgba(0, 0, 0, 0.28), 0 15px 40px -15px rgba(0, 102, 204, 0.35);
  transition: transform 300ms var(--ease-apple), box-shadow 300ms var(--ease-apple);
}

.ecosystem-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 45px 110px -10px rgba(0, 0, 0, 0.38), 0 20px 50px -10px rgba(0, 102, 204, 0.45);
}

.ecosystem-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  align-items: center;
}

@media (min-width: 900px) {
  .ecosystem-grid {
    grid-template-columns: 1fr 1.2fr;
  }
}

.accordion-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 1.25rem;
}

.ecosystem-title {
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--text-main);
  letter-spacing: -0.02em;
}

.toggle-btn {
  background: transparent;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
}

.ecosystem-text {
  font-size: 1.05rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.ecosystem-link {
  font-weight: 600;
}

.ecosystem-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.ecosystem-img {
  width: 100%;
  max-height: 380px;
  object-fit: contain;
  filter: drop-shadow(0 15px 30px rgba(0, 0, 0, 0.15));
}

@media (max-width: 768px) {
  .ecosystem-section {
    padding: 1.5rem 0;
  }

  .ecosystem-card {
    padding: 1.5rem 1.25rem;
    border-radius: 24px;
  }

  .ecosystem-title {
    font-size: 1.6rem;
  }

  .ecosystem-text {
    font-size: 0.92rem;
    line-height: 1.5;
    margin-bottom: 1.25rem;
  }

  .ecosystem-img {
    max-height: 220px;
  }
}
</style>
