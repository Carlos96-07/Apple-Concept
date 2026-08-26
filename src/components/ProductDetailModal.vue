<template>
  <div class="modal-backdrop" @click.self="$emit('close')">
    <div class="modal-glass-container">
      <!-- Close Button -->
      <button class="modal-close-btn" @click="$emit('close')" aria-label="Cerrar detalles">
        <X :size="20" />
      </button>

      <div class="modal-grid">
        <!-- Left: Image Gallery -->
        <div class="modal-gallery-col">
          <div class="main-gallery-view">
            <img 
              :src="activeGalleryImage" 
              :alt="product.name" 
              class="active-gallery-img"
            />
          </div>

          <!-- Thumbnail selector -->
          <div class="gallery-thumbs-row" v-if="product.images.gallery && product.images.gallery.length > 1">
            <button 
              v-for="(img, idx) in product.images.gallery" 
              :key="idx"
              class="thumb-btn"
              :class="{ 'active': activeGalleryImage === img }"
              @click="activeGalleryImage = img"
            >
              <img :src="img" :alt="`Vista ${idx + 1}`" />
            </button>
          </div>
        </div>

        <!-- Right: Specs & Options -->
        <div class="modal-info-col">
          <div class="modal-header-tag">
            <span class="glass-badge">{{ product.category }}</span>
          </div>

          <h2 class="modal-product-title">{{ product.name }}</h2>

          <!-- Price -->
          <div class="modal-price-row">
            <span class="modal-price">${{ product.price }} USD</span>
          </div>

          <p class="modal-description">{{ product.description }}</p>

          <!-- Specs Cards Grid -->
          <div class="specs-cards-grid" v-if="product.specs">
            <div class="spec-glass-card" v-for="(spec, i) in product.specs" :key="i">
              <span class="spec-label">{{ spec.label }}</span>
              <span class="spec-value">{{ spec.value }}</span>
            </div>
          </div>

          <!-- Actions -->
          <div class="modal-actions-bar">
            <button 
              class="btn-modal-reserve full-btn"
              :disabled="!product.inStock"
              @click="triggerPreOrder"
            >
              <span>{{ product.inStock ? 'Reservar producto' : 'Agotado Temporalmente' }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { X } from 'lucide-vue-next';

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['close', 'pre-order']);

const activeGalleryImage = ref(props.product.images.hero || props.product.images.webp);
const selectedColor = ref(props.product.colors?.[0] || { name: 'Estándar', code: 'default' });
const selectedStorage = ref(props.product.storageOptions?.[0] || '256 GB');

function triggerPreOrder() {
  emit('pre-order', {
    ...props.product,
    selectedColor: selectedColor.value,
    selectedStorage: selectedStorage.value
  });
}
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  overflow-y: auto;
}

.modal-glass-container {
  position: relative;
  width: 100%;
  max-width: 1060px;
  max-height: 90vh;
  overflow-y: auto;
  background: #111115;
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 2.5rem;
  border-radius: 32px;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8);
  color: #ffffff;
}

.modal-close-btn {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 200ms ease;
}

.modal-close-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: rotate(90deg);
}

.modal-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
}

@media (min-width: 900px) {
  .modal-grid {
    grid-template-columns: 0.95fr 1.05fr;
  }
}

/* Gallery Left (Enhanced color contrast) */
.modal-gallery-col {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.main-gallery-view {
  height: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-radius: 24px;
  background: radial-gradient(circle at center, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.03) 100%);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: inset 0 0 40px rgba(255, 255, 255, 0.05);
}

.active-gallery-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 15px 30px rgba(0, 0, 0, 0.5));
}

.gallery-thumbs-row {
  display: flex;
  gap: 0.75rem;
}

.thumb-btn {
  width: 70px;
  height: 70px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 0.4rem;
  cursor: pointer;
}

.thumb-btn.active {
  border-color: #2997ff;
  box-shadow: 0 0 15px rgba(41, 151, 255, 0.5);
}

.thumb-btn img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* Info Right (Crisp WHITE Typography) */
.modal-info-col {
  display: flex;
  flex-direction: column;
}

.modal-header-tag {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.glass-badge {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  text-transform: uppercase;
}

.glass-badge-amber {
  color: #f59e0b;
  border-color: rgba(245, 158, 11, 0.4);
}

.modal-product-title {
  font-size: 2.2rem;
  font-weight: 800;
  line-height: 1.15;
  margin-bottom: 0.4rem;
  color: #ffffff;
}

.modal-tagline {
  font-size: 1rem;
  color: #2997ff;
  font-weight: 500;
  margin-bottom: 1rem;
}

.modal-price-row {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.25rem;
}

.modal-price {
  font-size: 2rem;
  font-weight: 800;
  color: #ffffff;
}

.modal-rating {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.88rem;
  color: #a1a1a6;
}

.star-gold {
  color: #f59e0b;
  fill: #f59e0b;
}

.modal-description {
  font-size: 0.95rem;
  color: #d1d1d6;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

/* Options */
.options-section {
  margin-bottom: 1.5rem;
}

.options-title {
  font-size: 0.88rem;
  font-weight: 600;
  margin-bottom: 0.6rem;
  color: #ffffff;
}

.selected-color-name {
  color: #a1a1a6;
  font-weight: 400;
}

.colors-radio-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.color-option-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: #ffffff;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 200ms ease;
}

.color-option-btn.selected {
  border-color: #2997ff;
  background: rgba(41, 151, 255, 0.25);
  color: #ffffff;
  box-shadow: 0 0 12px rgba(41, 151, 255, 0.3);
}

.color-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.4);
}

.storage-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.storage-option-btn {
  padding: 0.55rem 1.1rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: #ffffff;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 200ms ease;
}

.storage-option-btn.selected {
  border-color: #2997ff;
  background: #2997ff;
  color: #ffffff;
  box-shadow: 0 0 12px rgba(41, 151, 255, 0.4);
}

/* Specs Grid */
.specs-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.spec-glass-card {
  padding: 0.85rem 1.1rem;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.spec-label {
  font-size: 0.72rem;
  color: #a1a1a6;
  text-transform: uppercase;
}

.spec-value {
  font-size: 0.88rem;
  font-weight: 600;
  color: #ffffff;
}

.modal-actions-bar {
  margin-top: auto;
}

.btn-modal-reserve {
  background: #ffffff;
  color: #000000;
  border: 1px solid #ffffff;
  border-radius: 9999px;
  font-weight: 600;
  cursor: pointer;
  transition: all 250ms ease;
}

.btn-modal-reserve:hover:not(:disabled) {
  background: #e8e8ed;
  transform: translateY(-1px);
}

.btn-modal-reserve:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.full-btn {
  width: 100%;
  padding: 0.9rem 1.5rem;
  font-size: 1.05rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
