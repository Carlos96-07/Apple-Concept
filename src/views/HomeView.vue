<template>
  <div class="home-view">
    <!-- Navbar Component -->
    <Navbar 
      :categories="categories" 
      :active-category="activeCategory"
      :preorder-count="savedOrders.length"
      @select-category="handleCategorySelect"
      @toggle-search="focusSearchInput"
      @open-preorders="isOrdersDrawerOpen = true"
    />

    <main>
      <!-- Hero Banner Component -->
      <Hero 
        :hero-product="heroProduct"
        @select-product="openPreOrderModal"
        @open-detail="openDetailModal"
      />

      <!-- Filter Bar -->
      <FilterBar 
        ref="filterBarRef"
        :categories="categories"
        :active-category="activeCategory"
        :search-query="searchQuery"
        :sort-by="sortBy"
        @update:category="handleCategorySelect"
        @update:search="handleSearchUpdate"
        @update:sort="handleSortUpdate"
        @reset-filters="resetFilters"
      />

      <!-- "Conoce a la familia." Grid Component -->
      <ProductGrid 
        :filtered-products="filteredProducts"
        :is-loading="isLoading"
        :active-category="activeCategory"
        @open-detail="openDetailModal"
        @pre-order="openPreOrderModal"
        @reset-filters="resetFilters"
      />

      <!-- Apple Bento Grid Highlights (Matches User Image 1) -->
      <AppleHighlightsGrid />

      <!-- Apple Privacy Banner (Matches User Image 2) -->
      <ApplePrivacyBanner @open-privacy="handleServiceRequest" />

      <!-- "iPhone y Mac" Ecosystem Section -->
      <EcosystemSection />

      <!-- "Servicios" Section -->
      <ServicesSection @request-service="handleServiceRequest" />

      <!-- "Nosotros" / Craftsmanship Section -->
      <AboutSection />

      <!-- "Contacto" Section -->
      <ContactSection />
    </main>

    <!-- Footer Component -->
    <Footer @select-category="handleCategorySelect" />

    <!-- Floating Scroll To Top Button -->
    <ScrollToTop />

    <!-- Modals & Drawers -->
    <Transition name="fade">
      <ProductDetailModal 
        v-if="selectedProductDetail" 
        :product="selectedProductDetail"
        @close="selectedProductDetail = null"
        @pre-order="openPreOrderModalFromDetail"
      />
    </Transition>

    <Transition name="fade">
      <PreOrderModal 
        v-if="selectedProductPreOrder" 
        :product="selectedProductPreOrder"
        @close="selectedProductPreOrder = null"
        @order-completed="handleOrderCompleted"
      />
    </Transition>

    <Transition name="fade">
      <PreOrdersDrawer 
        v-if="isOrdersDrawerOpen" 
        :orders="savedOrders"
        @close="isOrdersDrawerOpen = false"
        @remove-order="removeOrder"
      />
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { categories, products } from '../data/products';
import { sanitizeInput } from '../utils/sanitize';

import Navbar from '../components/Navbar.vue';
import Hero from '../components/Hero.vue';
import ProductGrid from '../components/ProductGrid.vue';
import AppleHighlightsGrid from '../components/AppleHighlightsGrid.vue';
import ApplePrivacyBanner from '../components/ApplePrivacyBanner.vue';
import EcosystemSection from '../components/EcosystemSection.vue';
import FilterBar from '../components/FilterBar.vue';
import ServicesSection from '../components/ServicesSection.vue';
import AboutSection from '../components/AboutSection.vue';
import ContactSection from '../components/ContactSection.vue';
import Footer from '../components/Footer.vue';
import ScrollToTop from '../components/ScrollToTop.vue';
import ProductDetailModal from '../components/ProductDetailModal.vue';
import PreOrderModal from '../components/PreOrderModal.vue';
import PreOrdersDrawer from '../components/PreOrdersDrawer.vue';

const route = useRoute();
const router = useRouter();

const activeCategory = ref('todos');
const searchQuery = ref('');
const sortBy = ref('popular');
const isLoading = ref(false);

const selectedProductDetail = ref(null);
const selectedProductPreOrder = ref(null);
const isOrdersDrawerOpen = ref(false);
const savedOrders = ref([]);

const heroProduct = computed(() => {
  return products.find(p => p.id === 'iphone-16-pro-max-aurora') || products[0];
});

onMounted(() => {
  if (route.query.category) activeCategory.value = route.query.category;
  if (route.query.search) searchQuery.value = route.query.search;
  if (route.query.sort) sortBy.value = route.query.sort;

  window.addEventListener('keydown', handleGlobalKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleGlobalKeydown);
});

function handleGlobalKeydown(e) {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    focusSearchInput();
  }
}

function focusSearchInput() {
  const el = document.querySelector('.search-input');
  if (el) {
    el.focus();
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

watch([activeCategory, searchQuery, sortBy], () => {
  const query = {};
  if (activeCategory.value !== 'todos') query.category = activeCategory.value;
  if (searchQuery.value) query.search = searchQuery.value;
  if (sortBy.value !== 'popular') query.sort = sortBy.value;

  router.replace({ query });
  triggerLoadingSkeleton();
});

function triggerLoadingSkeleton() {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
  }, 200);
}

function handleCategorySelect(catId) {
  activeCategory.value = catId;
  const catalogoEl = document.getElementById('catalogo');
  if (catalogoEl) catalogoEl.scrollIntoView({ behavior: 'smooth' });
}

function handleIconModelSelect(modelId) {
  const found = products.find(p => p.id === modelId);
  if (found) openDetailModal(found);
}

function handleSearchUpdate(val) {
  searchQuery.value = sanitizeInput(val);
}

function handleSortUpdate(val) {
  sortBy.value = val;
}

function resetFilters() {
  activeCategory.value = 'todos';
  searchQuery.value = '';
  sortBy.value = 'popular';
}

const filteredProducts = computed(() => {
  let list = [...products];

  if (activeCategory.value !== 'todos') {
    list = list.filter(p => p.category === activeCategory.value);
  }

  if (searchQuery.value.trim() !== '') {
    const q = searchQuery.value.toLowerCase().trim();
    list = list.filter(p => 
      p.name.toLowerCase().includes(q) || 
      p.tagline.toLowerCase().includes(q)
    );
  }

  switch (sortBy.value) {
    case 'price-asc':
      list.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      list.sort((a, b) => b.price - a.price);
      break;
    case 'newest':
      list.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
      break;
    case 'popular':
    default:
      list.sort((a, b) => (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0));
      break;
  }

  return list;
});

function openDetailModal(product) {
  selectedProductDetail.value = product;
}

function openPreOrderModal(product) {
  selectedProductPreOrder.value = product;
}

function openPreOrderModalFromDetail(productWithOptions) {
  selectedProductDetail.value = null;
  selectedProductPreOrder.value = productWithOptions;
}

function handleServiceRequest() {
  const contactoEl = document.getElementById('contacto');
  if (contactoEl) contactoEl.scrollIntoView({ behavior: 'smooth' });
}

function handleOrderCompleted(orderData) {
  savedOrders.value.unshift(orderData);
}

function removeOrder(orderId) {
  savedOrders.value = savedOrders.value.filter(o => o.id !== orderId);
}
</script>

<style scoped>
.home-view {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
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
