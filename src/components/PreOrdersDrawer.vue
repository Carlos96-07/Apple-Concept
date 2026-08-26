<template>
  <div class="modal-backdrop" @click.self="$emit('close')">
    <div class="drawer-glass-box">
      <div class="drawer-header">
        <div class="drawer-title-wrap">
          <ShoppingBag :size="22" class="text-cyan" />
          <h3>Tus Pre-Órdenes ({ orders.length })</h3>
        </div>
        <button class="drawer-close" @click="$emit('close')">
          <X :size="20" />
        </button>
      </div>

      <div class="drawer-content">
        <div v-if="orders.length === 0" class="empty-orders">
          <p>No tienes reservas registradas aún.</p>
          <span class="sub-text">Explora el catálogo y reserva tus productos favoritos con prioridad.</span>
        </div>

        <div v-else class="orders-list">
          <div v-for="order in orders" :key="order.id" class="order-item-glass">
            <img :src="order.product.images.hero || order.product.images.webp" :alt="order.product.name" class="order-img" />
            <div class="order-info">
              <div class="order-top">
                <span class="order-name">{{ order.product.name }}</span>
                <span class="order-code">#APPLE-{{ order.id }}</span>
              </div>
              <div class="order-meta">
                <span>Color: <strong>{{ order.color }}</strong></span>
                <span>Cantidad: <strong>{{ order.quantity }}</strong></span>
              </div>
              <div class="order-price-row">
                <span class="order-total">${{ order.product.price * order.quantity }} USD</span>
                <button class="cancel-order-btn" @click="$emit('remove-order', order.id)">
                  <Trash2 :size="14" />
                  <span>Cancelar</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="drawer-footer" v-if="orders.length > 0">
        <div class="grand-total-row">
          <span>Total Reservado:</span>
          <strong>${{ totalAmount }} USD</strong>
        </div>
        <button class="btn-apple full-btn" @click="$emit('close')">
          Continuar Explorando
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { ShoppingBag, X, Trash2 } from 'lucide-vue-next';

const props = defineProps({
  orders: {
    type: Array,
    default: () => []
  }
});

defineEmits(['close', 'remove-order']);

const totalAmount = computed(() => {
  return props.orders.reduce((sum, ord) => sum + (ord.product.price * ord.quantity), 0);
});
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(24px);
  z-index: 220;
  display: flex;
  justify-content: flex-end;
}

.drawer-glass-box {
  width: 100%;
  max-width: 440px;
  height: 100%;
  border-radius: 0;
  border-left: 1px solid rgba(255, 255, 255, 0.15);
  background: #111115;
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  color: #ffffff;
}

.drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  margin-bottom: 1.25rem;
}

.drawer-title-wrap {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.drawer-title-wrap h3 {
  font-size: 1.2rem;
  font-weight: 800;
  color: #ffffff;
}

.text-cyan {
  color: #2997ff;
}

.drawer-close {
  background: transparent;
  border: none;
  color: #a1a1a6;
  cursor: pointer;
}

.drawer-close:hover {
  color: #ffffff;
}

.drawer-content {
  flex: 1;
  overflow-y: auto;
}

.empty-orders {
  text-align: center;
  padding: 3rem 1rem;
  color: #a1a1a6;
}

.empty-orders p {
  font-weight: 600;
  font-size: 1.1rem;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.sub-text {
  font-size: 0.85rem;
}

.orders-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.order-item-glass {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.order-img {
  width: 60px;
  height: 60px;
  object-fit: contain;
}

.order-info {
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.35rem;
}

.order-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.order-name {
  font-weight: 700;
  font-size: 0.92rem;
  color: #ffffff;
}

.order-code {
  font-size: 0.72rem;
  color: #a1a1a6;
}

.order-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.78rem;
  color: #a1a1a6;
}

.order-meta strong {
  color: #ffffff;
}

.order-price-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.4rem;
  padding-top: 0.4rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.order-total {
  font-weight: 800;
  color: #2997ff;
}

.cancel-order-btn {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  background: transparent;
  border: none;
  color: #fca5a5;
  font-size: 0.75rem;
  cursor: pointer;
}

.drawer-footer {
  padding-top: 1.25rem;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.grand-total-row {
  display: flex;
  justify-content: space-between;
  font-size: 1.05rem;
  color: #ffffff;
}

.grand-total-row strong {
  font-size: 1.3rem;
  color: #2997ff;
}

.full-btn {
  width: 100%;
}
</style>
