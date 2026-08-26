<template>
  <section class="catalog-section" id="catalogo">
    <div class="container">
      <!-- Section Header matching Screenshot 2 -->
      <div class="catalog-header">
        <h2 class="apple-section-title">Conoce a la familia.</h2>
      </div>

      <!-- Loading Skeleton Grid -->
      <div v-if="isLoading" class="products-grid">
        <SkeletonCard v-for="i in 6" :key="i" />
      </div>

      <!-- Empty State Feedback -->
      <div v-else-if="filteredProducts.length === 0" class="empty-state glass-panel">
        <div class="empty-icon-wrap">
          <SearchX :size="40" class="text-dim" />
        </div>
        <h3 class="empty-title">No encontramos coincidencias</h3>
        <p class="empty-text">Intenta ajustar tu búsqueda o limpiar los filtros seleccionados.</p>
        <button class="btn-apple" @click="$emit('reset-filters')">
          Restablecer Filtros
        </button>
      </div>

      <!-- Products Grid List -->
      <div v-else class="products-grid">
        <ProductCard
          v-for="product in filteredProducts"
          :key="product.id"
          :product="product"
          @open-detail="$emit('open-detail', $event)"
          @pre-order="$emit('pre-order', $event)"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ChevronRight, SearchX } from 'lucide-vue-next';
import ProductCard from './ProductCard.vue';
import SkeletonCard from './SkeletonCard.vue';

defineProps({
  filteredProducts: {
    type: Array,
    required: true
  },
  isLoading: {
    type: Boolean,
    default: false
  },
  activeCategory: {
    type: String,
    default: 'todos'
  }
});

defineEmits(['open-detail', 'pre-order', 'reset-filters']);
</script>

<style scoped>
.catalog-section {
  padding: 4rem 0 6rem 0;
}

.catalog-header {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
}

@media (min-width: 640px) {
  .catalog-header {
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
  }
}

.products-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 640px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .products-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Empty State */
.empty-state {
  padding: 4rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  margin: 0 auto;
}

.empty-icon-wrap {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.04);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
}

.empty-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.empty-text {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
}
</style>
