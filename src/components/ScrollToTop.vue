<template>
  <Transition name="fade-slide">
    <button 
      v-if="showBtn" 
      class="floating-scroll-top-btn" 
      @click="scrollToTop" 
      aria-label="Volver arriba"
    >
      <ChevronUp :size="22" />
      <span class="btn-tooltip">Arriba</span>
    </button>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { ChevronUp } from 'lucide-vue-next';

const showBtn = ref(false);

function checkScroll() {
  showBtn.value = window.scrollY > 250;
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});
</script>

<style scoped>
.floating-scroll-top-btn {
  position: fixed;
  bottom: 1.75rem;
  right: 1.5rem;
  z-index: 9999;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
  transition: transform 0.25s var(--ease-apple), background-color 0.25s ease, color 0.25s ease, box-shadow 0.25s ease;
}

.floating-scroll-top-btn:hover,
.floating-scroll-top-btn:active {
  transform: translateY(-4px) scale(1.08);
  background: #ffffff;
  color: #000000;
  border-color: #ffffff;
  box-shadow: 0 14px 35px rgba(0, 0, 0, 0.3);
}

.btn-tooltip {
  display: none;
}

/* Animations */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s var(--ease-apple);
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.8);
}
</style>
