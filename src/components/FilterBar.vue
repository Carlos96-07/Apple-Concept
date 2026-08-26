<template>
  <div class="apple-filter-section">
    <div class="container">
      <div class="apple-filter-bar glass-panel">
        <!-- Search Input -->
        <div class="search-box">
          <Search :size="18" class="text-dim" />
          <input 
            type="text" 
            :value="searchQuery"
            @input="$emit('update:search', $event.target.value)"
            placeholder="Buscar por modelo, chip o especificación..." 
            class="search-input"
          />
          <button v-if="searchQuery" class="clear-search-btn" @click="$emit('update:search', '')">
            <X :size="16" />
          </button>
        </div>

        <!-- Category Pills -->
        <div class="category-pills">
          <button 
            v-for="cat in categories" 
            :key="cat.id"
            class="pill-btn"
            :class="{ active: activeCategory === cat.id }"
            @click="$emit('update:category', cat.id)"
          >
            <span>{{ cat.name }}</span>
          </button>
        </div>

        <!-- Sorting Select -->
        <div class="sort-select-wrap">
          <select 
            :value="sortBy" 
            @change="$emit('update:sort', $event.target.value)"
            class="sort-select"
          >
            <option value="popular">Ordenar: Más populares</option>
            <option value="price-asc">Precio: Menor a Mayor</option>
            <option value="price-desc">Precio: Mayor a Menor</option>
            <option value="newest">Lanzamientos Recientes</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Search, X } from 'lucide-vue-next';

defineProps({
  categories: { type: Array, required: true },
  activeCategory: { type: String, default: 'todos' },
  searchQuery: { type: String, default: '' },
  sortBy: { type: String, default: 'popular' }
});

defineEmits([
  'update:category',
  'update:search',
  'update:sort',
  'reset-filters'
]);
</script>

<style scoped>
.apple-filter-section {
  padding: 1.5rem 0;
}

.apple-filter-bar {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.25rem 1.75rem;
  border-radius: 24px;
}

@media (min-width: 840px) {
  .apple-filter-bar {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

/* Search Box */
.search-box {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: rgba(0, 0, 0, 0.04);
  border: 1px solid var(--border-glass);
  padding: 0.55rem 1rem;
  border-radius: 9999px;
  min-width: 280px;
}

.search-input {
  border: none;
  background: transparent;
  width: 100%;
  font-family: inherit;
  font-size: 0.9rem;
  color: var(--text-main);
}

.search-input:focus {
  outline: none;
}

.clear-search-btn {
  background: transparent;
  border: none;
  color: var(--text-dim);
  cursor: pointer;
}

/* Category Pills */
.category-pills {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  overflow-x: auto;
}

.pill-btn {
  padding: 0.55rem 1.2rem;
  border-radius: 9999px;
  border: 1px solid var(--border-glass);
  background: rgba(0, 0, 0, 0.03);
  color: var(--text-muted);
  font-size: 0.88rem;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  transition: all 200ms ease;
}

.pill-btn:hover {
  background: rgba(0, 0, 0, 0.07);
  color: var(--text-main);
}

.pill-btn.active {
  background: var(--text-main);
  color: #ffffff;
  border-color: var(--text-main);
}

/* Sort Select */
.sort-select {
  padding: 0.55rem 1rem;
  border-radius: 9999px;
  background: rgba(0, 0, 0, 0.04);
  border: 1px solid var(--border-glass);
  color: var(--text-main);
  font-family: inherit;
  font-size: 0.88rem;
  cursor: pointer;
}

.sort-select:focus {
  outline: none;
  border-color: var(--apple-blue);
}
</style>
