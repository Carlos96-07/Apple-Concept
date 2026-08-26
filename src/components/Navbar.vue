<template>
  <header class="apple-header-wrapper">
    <!-- Main Apple Global Navigation Bar -->
    <nav class="apple-global-nav" :class="{ 'scrolled': isScrolled }">
      <div class="container nav-container">
        <!-- Apple Logo -->
        <a href="#" class="apple-logo-link" aria-label="iStudio Inicio" @click.prevent="scrollToTop">
          <svg class="apple-logo-icon" viewBox="0 0 24 24" width="20" height="20" aria-label="Logo">
            <path fill="currentColor" d="M12 2c.5 0 1 .3 1.3.8.7-.7 1.8-1 2.7-.6 0 0-.7 2-2.1 2.8 2 1 3.3 3.1 3.3 6 0 4.2-2.9 7.5-6 7.5s-6-3.3-6-7.5c0-2.9 1.3-5 3.3-6C7.1 3.2 6.4 1.2 6.4 1.2c.9-.4 2 0 2.7.6.3-.5.8-.8 1.3-.8z"/>
          </svg>
          <span class="apple-brand-text">iStudio</span>
        </a>

        <!-- Desktop Navigation Items -->
        <div class="global-nav-items-desktop">
          <a href="#catalogo" class="nav-item-link" @click.prevent="selectCat('tablets')">iPad</a>
          <a href="#catalogo" class="nav-item-link active" @click.prevent="selectCat('celulares')">iPhone</a>
          <a href="#catalogo" class="nav-item-link" @click.prevent="selectCat('relojes')">Watch</a>
          <a href="#catalogo" class="nav-item-link" @click.prevent="selectCat('todos')">Catalogo</a>
          <a href="#servicios" class="nav-item-link" @click.prevent="scrollToSection('servicios')">TV y Casa</a>
          <a href="#nosotros" class="nav-item-link" @click.prevent="scrollToSection('nosotros')">Entretenimiento</a>
          <a href="#contacto" class="nav-item-link" @click.prevent="scrollToSection('contacto')">Soporte</a>
        </div>

        <!-- Right Action Icons: Search & Shopping Bag -->
        <div class="nav-right-actions">
          <button class="nav-icon-btn" @click="$emit('toggle-search')" aria-label="Buscar productos">
            <Search :size="15" />
          </button>

          <button class="nav-icon-btn bag-btn" @click="$emit('open-preorders')" aria-label="Bolsa de reservas">
            <ShoppingBag :size="15" />
            <span v-if="preorderCount > 0" class="bag-badge">{{ preorderCount }}</span>
          </button>

          <button class="mobile-toggle-btn" @click="isMobileOpen = !isMobileOpen">
            <Menu v-if="!isMobileOpen" :size="18" />
            <X v-else :size="18" />
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Drawer -->
    <div v-if="isMobileOpen" class="apple-mobile-drawer">
      <div class="mobile-drawer-inner">
        <a href="#" @click="mobileNav('top')">Mac</a>
        <a href="#catalogo" @click="mobileNav('tablets')">iPad</a>
        <a href="#catalogo" @click="mobileNav('celulares')">iPhone</a>
        <a href="#catalogo" @click="mobileNav('relojes')">Watch</a>
        <a href="#servicios" @click="mobileNav('servicios')">Servicios</a>
        <a href="#contacto" @click="mobileNav('contacto')">Soporte & Contacto</a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Search, ShoppingBag, Menu, X } from 'lucide-vue-next';

const props = defineProps({
  categories: { type: Array, required: true },
  activeCategory: { type: String, default: 'todos' },
  preorderCount: { type: Number, default: 0 }
});

const emit = defineEmits(['select-category', 'toggle-search', 'open-preorders']);

const isScrolled = ref(false);
const isMobileOpen = ref(false);

function handleScroll() {
  isScrolled.value = window.scrollY > 10;
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function selectCat(id) {
  emit('select-category', id);
  scrollToSection('catalogo');
}

function mobileNav(id) {
  isMobileOpen.value = false;
  if (id === 'top') scrollToTop();
  else if (id === 'tablets' || id === 'celulares' || id === 'relojes') selectCat(id);
  else scrollToSection(id);
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.apple-header-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  width: 100%;
}

/* Banner */
.apple-top-banner {
  background: #f5f5f7;
  border-bottom: 1px solid var(--border-glass);
  padding: 0.55rem 0;
  font-size: 0.82rem;
  color: var(--text-muted);
  text-align: center;
}

.banner-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  flex-wrap: wrap;
}

.banner-link {
  color: var(--apple-blue);
  text-decoration: none;
  font-weight: 500;
}

.banner-link:hover {
  text-decoration: underline;
}

/* Global Nav Base (White mode when unscrolled) */
.apple-global-nav {
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  height: 48px;
  display: flex;
  align-items: center;
  transition: background 300ms ease, border-color 300ms ease, box-shadow 300ms ease;
}

.apple-logo-icon {
  width: 20px;
  height: 20px;
  fill: #000000;
  transition: fill 300ms ease;
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.apple-logo-link {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  text-decoration: none;
  opacity: 0.85;
  transition: opacity 200ms ease;
}

.apple-brand-text {
  font-size: 0.78rem;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  letter-spacing: -0.01em;
  transition: color 300ms ease;
}

.apple-logo-link:hover {
  opacity: 1;
}

.global-nav-items-desktop {
  display: none;
  align-items: center;
  gap: 1.8rem;
}

@media (min-width: 840px) {
  .global-nav-items-desktop {
    display: flex;
  }
}

.nav-item-link {
  font-size: 0.78rem;
  color: rgba(0, 0, 0, 0.75);
  text-decoration: none;
  font-weight: 400;
  letter-spacing: -0.01em;
  transition: color 200ms ease;
}

.nav-item-link:hover {
  color: #000000;
}

.nav-item-link.active {
  color: #000000;
  font-weight: 600;
}

/* Right Actions */
.nav-right-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.nav-icon-btn {
  background: transparent;
  border: none;
  color: rgba(0, 0, 0, 0.75);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem;
  transition: color 200ms ease;
}

.nav-icon-btn:hover {
  color: #000000;
}

.bag-btn {
  position: relative;
}

.bag-badge {
  position: absolute;
  top: -4px;
  right: -6px;
  background: var(--apple-blue);
  color: white;
  font-size: 0.65rem;
  font-weight: 700;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-toggle-btn {
  background: transparent;
  border: none;
  color: rgba(0, 0, 0, 0.75);
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: color 200ms ease;
}

.mobile-toggle-btn:hover {
  color: #000000;
}

/* Scrolled State (Dark mode when scrolled) */
.apple-global-nav.scrolled {
  background: rgba(0, 0, 0, 0.88);
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

.apple-global-nav.scrolled .apple-logo-icon {
  fill: #ffffff;
}

.apple-global-nav.scrolled .apple-brand-text {
  color: rgba(255, 255, 255, 0.9);
}

.apple-global-nav.scrolled .nav-item-link {
  color: rgba(255, 255, 255, 0.8);
}

.apple-global-nav.scrolled .nav-item-link:hover {
  color: #ffffff;
}

.apple-global-nav.scrolled .nav-item-link.active {
  color: #ffffff;
  font-weight: 600;
}

.apple-global-nav.scrolled .nav-icon-btn,
.apple-global-nav.scrolled .mobile-toggle-btn {
  color: rgba(255, 255, 255, 0.8);
}

.apple-global-nav.scrolled .nav-icon-btn:hover,
.apple-global-nav.scrolled .mobile-toggle-btn:hover {
  color: #ffffff;
}

@media (min-width: 840px) {
  .mobile-toggle-btn {
    display: none;
  }
}

/* Mobile Drawer */
.apple-mobile-drawer {
  background: #000000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  padding: 1.5rem;
}

.mobile-drawer-inner {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.mobile-drawer-inner a {
  font-size: 1.1rem;
  font-weight: 600;
  color: #ffffff;
  text-decoration: none;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
