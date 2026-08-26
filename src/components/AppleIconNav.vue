<template>
  <div class="apple-subhead-section">
    <div class="container">
      <!-- Title header -->
      <div class="subhead-header">
        <h1 class="subhead-title">iPhone</h1>
      </div>

      <!-- Icon Navigation Bar -->
      <div class="icon-nav-scroll-container">
        <div class="icon-nav-track">
          <div 
            v-for="item in iconNavItems" 
            :key="item.id"
            class="icon-nav-card"
            :class="{ active: selectedItem === item.id }"
            @click="handleClick(item)"
          >
            <div class="icon-img-wrapper">
              <img :src="item.image" :alt="item.name" class="icon-img" />
            </div>
            <span class="icon-name">{{ item.name }}</span>
            <span v-if="item.badge" class="icon-badge">{{ item.badge }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import iphone17Img from '../assets/iPhone 17.webp';
import iphone16Img from '../assets/Iphone 16.jpeg';
import ipadProImg from '../assets/Ipad.png';
import appleWatchImg from '../assets/apple-watch.avif';

const selectedItem = ref('iphone-17');

const emit = defineEmits(['select-model']);

const iconNavItems = [
  {
    id: 'iphone-17',
    name: 'iPhone 17',
    image: iphone17Img,
    badge: 'Nuevo'
  },
  {
    id: 'iphone-16-pro',
    name: 'iPhone 16 Pro',
    image: iphone16Img,
    badge: ''
  },
  {
    id: 'ipad-pro-m4-glass',
    name: 'iPad Pro',
    image: ipadProImg,
    badge: ''
  },
  {
    id: 'apple-watch-ultra-3-glass',
    name: 'Apple Watch',
    image: appleWatchImg,
    badge: ''
  }
];

function handleClick(item) {
  selectedItem.value = item.id;
  emit('select-model', item.id);
}
</script>

<style scoped>
.apple-subhead-section {
  background: #ffffff;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid var(--border-glass);
}

.subhead-header {
  margin-bottom: 2rem;
}

.subhead-title {
  font-size: clamp(3rem, 6vw, 4.5rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  color: var(--text-main);
}

.icon-nav-scroll-container {
  overflow-x: auto;
  scrollbar-width: none;
  margin: 0 -1rem;
  padding: 0 1rem;
}

.icon-nav-scroll-container::-webkit-scrollbar {
  display: none;
}

.icon-nav-track {
  display: flex;
  align-items: flex-end;
  gap: 2.5rem;
  width: max-content;
  padding: 0.5rem 0;
}

.icon-nav-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  opacity: 0.85;
  transition: opacity 200ms ease, transform 200ms ease;
  position: relative;
}

.icon-nav-card:hover,
.icon-nav-card.active {
  opacity: 1;
  transform: translateY(-2px);
}

.icon-img-wrapper {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.icon-name {
  font-size: 0.8rem;
  font-weight: 500;
  color: #1d1d1f;
  white-space: nowrap;
}

.icon-badge {
  font-size: 0.65rem;
  font-weight: 600;
  color: #f59e0b;
  text-transform: uppercase;
  margin-top: -0.2rem;
}
</style>
