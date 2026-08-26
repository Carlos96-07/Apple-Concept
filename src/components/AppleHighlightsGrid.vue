<template>
  <section class="highlights-section">
    <div class="container">
      <div class="section-title-wrap">
        <h2 class="apple-section-title">Información sobre el iPhone.</h2>
      </div>

      <!-- Horizontal scrollable grid matching Screenshot 1 -->
      <div class="highlights-scroll-container">
        <div class="highlights-track">
          <div 
            v-for="card in highlightCards" 
            :key="card.id"
            class="highlight-card"
            @click="activeCardModal = card"
          >
            <!-- Top Tag & Headline -->
            <div class="highlight-card-header">
              <div v-if="card.hasAppleBadge" class="apple-circle-badge card-badge">
                <svg viewBox="0 0 170 170" width="14" height="14" fill="#ffffff" aria-label="Apple Logo">
                  <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.34.13-9.14-1.9-14.4-6.07-3.68-3.03-7.69-7.85-12.03-14.44-6.72-10.12-11.97-21.36-15.75-33.72-3.78-12.36-5.67-24.32-5.67-35.88 0-14.15 3.44-25.75 10.32-34.8 6.88-9.05 15.42-13.67 25.62-13.87 4.69 0 9.87 1.25 15.54 3.75 5.67 2.5 9.77 3.75 12.3 3.75 2.14 0 6.29-1.25 12.45-3.75 6.16-2.5 11.13-3.63 14.91-3.38 10.63.5 19.34 4.54 26.13 12.13 6.79 7.59 10.85 17.5 12.18 29.74-9.82 5.92-14.65 14.2-14.48 24.84.18 10.64 4.96 19.12 14.34 25.44-2.11 6.12-4.88 12.06-8.3 17.82zM119.22 31.42c0-7.39 2.72-14.42 8.16-21.09 5.44-6.67 12.27-10.33 20.49-10.98.13 1.13.2 2.13.2 3 0 7.39-2.77 14.51-8.31 21.36-5.54 6.85-12.4 10.63-20.57 11.35-.13-.88-.2-1.76-.2-2.64z"/>
                </svg>
              </div>
              <span class="highlight-tag">{{ card.tag }}</span>
              <h3 class="highlight-headline">{{ card.headline }}</h3>
            </div>

            <!-- Visual Image Area -->
            <div class="highlight-image-stage">
              <img :src="card.image" :alt="card.headline" class="highlight-img" />
            </div>

            <!-- Bottom Right Plus (+) Button -->
            <button class="plus-btn" aria-label="Ver detalles de innovación">
              <Plus :size="18" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Quick Info Modal when clicking (+) -->
    <Transition name="fade">
      <div v-if="activeCardModal" class="highlight-modal-backdrop" @click.self="activeCardModal = null">
        <div class="highlight-modal-box">
          <button class="modal-close-btn" @click="activeCardModal = null">
            <X :size="20" />
          </button>
          <span class="highlight-tag">{{ activeCardModal.tag }}</span>
          <h3 class="modal-headline">{{ activeCardModal.headline }}</h3>
          <p class="modal-detail-text">{{ activeCardModal.detailText }}</p>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { Plus, X } from 'lucide-vue-next';

import highlight1Img from '../assets/Iphone diseños.webp';
import highlight2Img from '../assets/Iphone camara.webp';
import highlight3Img from '../assets/A18 pro.webp';

const activeCardModal = ref(null);

const highlightCards = [
  {
    id: 1,
    tag: 'Innovación',
    headline: 'Diseñado para durar. Y enamorar.',
    image: highlight1Img,
    detailText: 'Fabricado con titanio de grado 5 y cristal Ceramic Shield de última generación, el más resistente visto en cualquier smartphone.'
  },
  {
    id: 2,
    tag: 'Cámaras',
    headline: 'Fotos soñadas y videos de película.',
    image: highlight2Img,
    detailText: 'Sistema de cámaras Fusión de 48 MP con sensor Quad Pixel avanzado y modo Cine en 4K HDR a 120 fps.'
  },
  {
    id: 3,
    tag: 'Potencia',
    headline: 'Chip A18 Pro. Velocidad pura.',
    image: highlight3Img,
    detailText: 'El procesador con la GPU de 6 núcleos más rápida del mundo y un Neural Engine de 16 núcleos dedicado a la inteligencia artificial.'
  }
];
</script>

<style scoped>
.highlights-section {
  padding: 4rem 0 5rem 0;
  background: #ffffff;
}

.section-title-wrap {
  margin-bottom: 1.25rem;
}

.apple-section-title {
  font-size: clamp(1.25rem, 2vw, 1.7rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #1d1d1f;
}

.highlights-scroll-container {
  width: 100%;
}

.highlights-track {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  width: 100%;
  padding-bottom: 1rem;
}

@media (min-width: 768px) {
  .highlights-track {
    grid-template-columns: repeat(3, 1fr);
  }
}

.highlight-card {
  width: 100%;
  height: 480px;
  background: #000000;
  border-radius: 28px;
  padding: 2rem 1.75rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
  transition: transform 300ms var(--ease-apple), box-shadow 300ms var(--ease-apple);
}

.highlight-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
}

.highlight-card-header {
  z-index: 2;
}

.highlight-tag {
  font-size: 0.8rem;
  font-weight: 600;
  color: #a1a1a6;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  display: block;
  margin-bottom: 0.6rem;
}

.apple-circle-badge {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  margin-bottom: 0.75rem;
}

.highlight-headline {
  font-size: 1.6rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.highlight-image-stage {
  position: absolute;
  inset: 0;
  z-index: 1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.highlight-img {
  width: 100%;
  height: 65%;
  object-fit: cover;
  object-position: center;
  border-radius: 0 0 28px 28px;
  opacity: 0.95;
  transition: transform 300ms ease;
}

.highlight-card:hover .highlight-img {
  transform: scale(1.05);
  opacity: 1;
}

/* Plus (+) Button at bottom right matching Screenshot 1 */
.plus-btn {
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 3;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #ffffff;
  color: #000000;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 200ms ease;
}

.plus-btn:hover {
  transform: scale(1.1);
}

/* Modal Backdrop */
.highlight-modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(20px);
  z-index: 250;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.highlight-modal-box {
  background: #111115;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 28px;
  padding: 2.5rem;
  max-width: 500px;
  width: 100%;
  color: #ffffff;
  position: relative;
}

.modal-close-btn {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: #ffffff;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.modal-headline {
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0.5rem 0 1rem 0;
}

.modal-detail-text {
  font-size: 1rem;
  color: #a1a1a6;
  line-height: 1.6;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 250ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
