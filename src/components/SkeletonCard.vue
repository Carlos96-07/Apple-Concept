<template>
  <div class="bento-skeleton-card">
    <div class="skeleton-shimmer skeleton-badge"></div>
    <div class="skeleton-shimmer skeleton-title"></div>
    <div class="skeleton-shimmer skeleton-subtitle"></div>
    <div class="skeleton-shimmer skeleton-img-box"></div>
  </div>
</template>

<style scoped>
.bento-skeleton-card {
  height: 480px;
  background: #000000;
  border-radius: 28px;
  padding: 2rem 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.skeleton-shimmer {
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.04) 25%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.04) 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

.skeleton-badge {
  width: 70px;
  height: 16px;
  border-radius: 4px;
}

.skeleton-title {
  width: 80%;
  height: 28px;
  border-radius: 6px;
}

.skeleton-subtitle {
  width: 60%;
  height: 18px;
  border-radius: 6px;
}

.skeleton-img-box {
  width: 100%;
  height: 260px;
  margin-top: auto;
  border-radius: 16px;
}
</style>
