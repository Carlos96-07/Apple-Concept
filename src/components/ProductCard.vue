<template>
  <div class="apple-bento-card" @click="$emit('open-detail', product)">
    <!-- Top Left: Category Tag & Bold Headline (Matching Screenshot 2) -->
    <div class="bento-card-header">
      <span class="bento-category-tag">{{ product.category || 'iPhone' }}</span>
      <h3 class="bento-product-title">{{ product.name }}</h3>
      <p class="bento-product-tagline">{{ product.tagline }}</p>
      <div class="bento-price-tag">Desde ${{ product.price }} USD</div>
    </div>

    <!-- Center/Bottom: Large Product Image filling bottom (Matching Screenshot 2) -->
    <div class="bento-image-stage">
      <img 
        :src="activeImage" 
        :alt="product.name" 
        loading="lazy" 
        class="bento-hero-img" 
      />
    </div>

    <!-- Bottom Right: Action Controls with Apple (+) Button (Matching Screenshot 2) -->
    <div class="bento-actions-row" @click.stop>
      <button class="bento-buy-btn" @click="$emit('pre-order', product)">
        Comprar
      </button>
      <button 
        class="bento-plus-btn" 
        @click="$emit('open-detail', product)"
        aria-label="Ver detalles"
        title="Ver detalles"
      >
        <Plus :size="18" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { Plus } from 'lucide-vue-next';

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});

defineEmits(['open-detail', 'pre-order']);

const activeImage = computed(() => {
  return props.product.images?.hero || props.product.images?.webp;
});
</script>

<style scoped>
/* Pure Black Apple Bento Card Structure (Matches Screenshot 2 Exactly) */
.apple-bento-card {
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
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: transform 300ms var(--ease-apple), box-shadow 300ms var(--ease-apple);
}

.apple-bento-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.35);
  border-color: rgba(255, 255, 255, 0.2);
}

/* Card Header (Top Left Text per Screenshot 2) */
.bento-card-header {
  z-index: 2;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  max-width: 85%;
}

.bento-category-tag {
  font-size: 0.75rem;
  font-weight: 600;
  color: #a1a1a6;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.bento-product-title {
  font-size: 1.35rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-top: 0.1rem;
}

.bento-product-tagline {
  font-size: 0.85rem;
  color: #d1d1d6;
  line-height: 1.35;
  margin-top: 0.15rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.bento-price-tag {
  font-size: 0.85rem;
  font-weight: 700;
  color: #ffffff;
  margin-top: 0.3rem;
}

/* Image Stage Filling Card Bottom */
.bento-image-stage {
  position: absolute;
  inset: 0;
  z-index: 1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 3rem;
  background: transparent;
}

.bento-hero-img {
  width: 85%;
  height: 54%;
  object-fit: contain;
  object-position: center bottom;
  filter: drop-shadow(0 15px 35px rgba(0, 0, 0, 0.9));
  transition: transform 350ms var(--ease-apple);
}

.apple-bento-card:hover .bento-hero-img {
  transform: scale(1.05);
}

/* Bottom Right Buttons (+ & Comprar per Screenshot 2) */
.bento-actions-row {
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.bento-buy-btn {
  background: #ffffff;
  color: #000000;
  border: none;
  padding: 0.45rem 1.15rem;
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: 9999px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: all 200ms ease;
}

.bento-buy-btn:hover {
  background: #f5f5f7;
  transform: scale(1.05);
}

/* White (+) Icon Button matching Screenshot 2 */
.bento-plus-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #ffffff;
  color: #000000;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 200ms ease, background 200ms ease;
}

.bento-plus-btn:hover {
  transform: scale(1.1);
  background: #f5f5f7;
}

@media (max-width: 640px) {
  .apple-bento-card {
    height: 400px;
    padding: 1.5rem 1.25rem;
    border-radius: 24px;
  }

  .bento-product-title {
    font-size: 1.55rem;
  }

  .bento-product-tagline {
    font-size: 0.85rem;
  }

  .bento-hero-img {
    width: 90%;
    height: 48%;
  }

  .bento-actions-row {
    bottom: 1.2rem;
    right: 1.2rem;
  }
}
</style>
