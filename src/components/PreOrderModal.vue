<template>
  <div class="modal-backdrop" @click.self="$emit('close')">
    <div class="modal-glass-container">
      <button class="modal-close-btn" @click="$emit('close')" aria-label="Cerrar formulario">
        <X :size="20" />
      </button>

      <!-- SUCCESS STATE -->
      <div v-if="isSubmitted" class="success-wrap">
        <div class="success-icon-glass">
          <CheckCircle2 :size="54" class="text-gray-icon" />
        </div>
        <h3 class="success-title">¡Reserva Confirmada!</h3>
        <p class="success-msg">
          Gracias <strong>{{ formData.fullName }}</strong>. Hemos registrado la pre-orden para el <strong>{{ product?.name }}</strong>.
        </p>
        <p class="success-sub">Te enviaremos las instrucciones de entrega prioritaria a <u>{{ formData.email }}</u>.</p>

        <div class="success-details-card">
          <div class="detail-row">
            <span>Código de Reserva:</span>
            <strong>#APPLE-{{ reservationId }}</strong>
          </div>
          <div class="detail-row">
            <span>Monto Estimado:</span>
            <strong>${{ product?.price * formData.quantity }} USD</strong>
          </div>
        </div>

        <button class="btn-preorder-submit" @click="$emit('close')">
          Entendido
        </button>
      </div>

      <!-- FORM STATE WITH SPECS LIST AT TOP (Per user request) -->
      <form v-else @submit.prevent="handleSubmit" class="preorder-form">
        <div class="form-header">
          <h2 class="form-title">{{ product?.name }}</h2>
          <p class="form-subtitle-gray">{{ product?.tagline }}</p>
          <div class="product-price-badge">${{ product?.price }} USD</div>
        </div>

        <!-- Specs List at top of purchase modal (Per user request) -->
        <div class="specs-list-card" v-if="product">
          <h4 class="specs-list-heading">Especificaciones Principales:</h4>
          <ul class="specs-bullet-list">
            <li v-for="(spec, idx) in productSpecsList" :key="idx" class="spec-list-item">
              <Check :size="16" class="check-icon-gray" />
              <span class="spec-item-label">{{ spec.label }}:</span>
              <span class="spec-item-value">{{ spec.value }}</span>
            </li>
          </ul>
        </div>

        <!-- Error Alert -->
        <div v-if="errorMessage" class="error-glass-alert">
          <AlertTriangle :size="18" />
          <span>{{ errorMessage }}</span>
        </div>

        <!-- Honeypot Hidden Input Field for Spam Bots -->
        <div style="display:none;" aria-hidden="true">
          <input type="text" name="website_honeypot" v-model="formData.honeypot" tabindex="-1" autocomplete="off" />
        </div>

        <!-- Form Inputs -->
        <div class="input-field-group">
          <label class="field-label" for="full-name">Nombre Completo *</label>
          <input 
            id="full-name"
            type="text" 
            v-model="formData.fullName"
            placeholder="Ej. Carlos Rodríguez" 
            class="glass-input"
            required
          />
        </div>

        <div class="input-field-group">
          <label class="field-label" for="user-email">Correo Electrónico *</label>
          <input 
            id="user-email"
            type="email" 
            v-model="formData.email"
            placeholder="carlos@ejemplo.com" 
            class="glass-input"
            required
          />
        </div>

        <div class="grid-two-cols">
          <div class="input-field-group">
            <label class="field-label">Cantidad</label>
            <input 
              type="number" 
              min="1" 
              max="5" 
              v-model.number="formData.quantity" 
              class="glass-input"
            />
          </div>

          <div class="input-field-group">
            <label class="field-label">Capacidad</label>
            <select v-model="formData.storage" class="glass-select">
              <option v-for="st in (product?.storageOptions || ['128 GB', '256 GB', '512 GB', '1 TB'])" :key="st" :value="st">
                {{ st }}
              </option>
            </select>
          </div>
        </div>

        <div class="input-field-group">
          <label class="field-label" for="user-notes">Notas Adicionales (Opcional)</label>
          <textarea 
            id="user-notes"
            v-model="formData.notes" 
            rows="2" 
            placeholder="Ej. Dirección de envío o requerimientos especiales"
            class="glass-textarea"
          ></textarea>
        </div>

        <div class="form-actions">
          <button type="button" class="btn-cancel" @click="$emit('close')">Cancelar</button>
          <button type="submit" class="btn-preorder-submit" :disabled="isSubmitting">
            <span v-if="!isSubmitting">Confirmar Pre-Orden (${{ (product?.price || 0) * formData.quantity }} USD)</span>
            <span v-else>Procesando...</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { X, CheckCircle2, AlertTriangle, Check } from 'lucide-vue-next';
import confetti from 'canvas-confetti';
import { sanitizeInput, isValidEmail } from '../utils/sanitize';

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['close', 'order-completed']);

const formData = ref({
  fullName: '',
  email: '',
  storage: props.product?.storageOptions?.[0] || '256 GB',
  quantity: 1,
  notes: '',
  honeypot: ''
});

const isSubmitting = ref(false);
const isSubmitted = ref(false);
const errorMessage = ref('');
const reservationId = ref('');

const productSpecsList = computed(() => {
  if (props.product?.specs && props.product.specs.length > 0) {
    return props.product.specs;
  }
  return [
    { label: 'Procesador', value: 'Chip Apple A18 Pro de 3nm' },
    { label: 'Pantalla', value: 'Super Retina XDR OLED ProMotion' },
    { label: 'Cámara Principal', value: '48 MP Fusión con Telefoto 5x' },
    { label: 'Autonomía', value: 'Hasta 33 horas de video' }
  ];
});

function handleSubmit() {
  errorMessage.value = '';

  if (formData.value.honeypot) {
    isSubmitted.value = true;
    return;
  }

  const cleanName = sanitizeInput(formData.value.fullName);
  const cleanEmail = sanitizeInput(formData.value.email);

  if (!cleanName || cleanName.length < 3) {
    errorMessage.value = 'Por favor ingresa tu nombre completo.';
    return;
  }

  if (!isValidEmail(cleanEmail)) {
    errorMessage.value = 'Por favor ingresa un correo electrónico válido.';
    return;
  }

  isSubmitting.value = true;

  setTimeout(() => {
    isSubmitting.value = false;
    isSubmitted.value = true;
    reservationId.value = Math.floor(100000 + Math.random() * 900000).toString();

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    emit('order-completed', {
      id: reservationId.value,
      product: props.product,
      userName: cleanName,
      userEmail: cleanEmail,
      quantity: formData.value.quantity,
      createdAt: new Date().toLocaleDateString()
    });
  }, 600);
}
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  z-index: 210;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.modal-glass-container {
  position: relative;
  width: 100%;
  max-width: 560px;
  background: #111115;
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 2.25rem;
  border-radius: 28px;
  color: #ffffff;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8);
  max-height: 90vh;
  overflow-y: auto;
}

.modal-close-btn {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.modal-close-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}

.form-header {
  margin-bottom: 1.25rem;
}

.form-title {
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 0.25rem;
  color: #ffffff;
}

.form-subtitle-gray {
  font-size: 0.92rem;
  color: #a1a1a6; /* Gray text per user request */
  margin-bottom: 0.75rem;
}

.product-price-badge {
  display: inline-block;
  font-size: 1.25rem;
  font-weight: 800;
  color: #ffffff;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.35rem 0.9rem;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

/* Specs List Card (Per user request) */
.specs-list-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 18px;
  padding: 1.2rem;
  margin-bottom: 1.5rem;
}

.specs-list-heading {
  font-size: 0.85rem;
  font-weight: 700;
  color: #a1a1a6; /* Gray header */
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 0.75rem;
}

.specs-bullet-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.spec-list-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.88rem;
}

.check-icon-gray {
  color: #a1a1a6; /* Gray check icon */
  flex-shrink: 0;
}

.spec-item-label {
  color: #a1a1a6;
  font-weight: 500;
}

.spec-item-value {
  color: #ffffff;
  font-weight: 600;
}

.error-glass-alert {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  background: rgba(244, 63, 94, 0.15);
  border: 1px solid rgba(244, 63, 94, 0.3);
  color: #fca5a5;
  font-size: 0.85rem;
  margin-bottom: 1.25rem;
}

.input-field-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: 1.1rem;
}

.field-label {
  font-size: 0.82rem;
  font-weight: 600;
  color: #ffffff;
}

.glass-input,
.glass-select,
.glass-textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: #ffffff;
  font-family: inherit;
  font-size: 0.9rem;
}

.glass-select option {
  background: #111115;
  color: #ffffff;
}

.glass-input:focus,
.glass-select:focus,
.glass-textarea:focus {
  outline: none;
  border-color: #ffffff;
  background: rgba(255, 255, 255, 0.12);
}

.grid-two-cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  margin-top: 1.5rem;
}

.btn-cancel {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  padding: 0.7rem 1.4rem;
  border-radius: 9999px;
  cursor: pointer;
}

.btn-cancel:hover {
  background: rgba(255, 255, 255, 0.1);
}

.btn-preorder-submit {
  background: #ffffff;
  color: #000000;
  border: 1px solid #ffffff;
  padding: 0.7rem 1.6rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 200ms ease;
}

.btn-preorder-submit:hover:not(:disabled) {
  background: #e8e8ed;
  border-color: #e8e8ed;
  transform: translateY(-1px);
}

.btn-preorder-submit:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Success State */
.success-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem 0;
}

.success-icon-glass {
  width: 76px;
  height: 76px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
}

.text-gray-icon {
  color: #ffffff;
}

.success-title {
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  color: #ffffff;
}

.success-msg {
  font-size: 0.95rem;
  color: #e5e5e7;
  line-height: 1.5;
  margin-bottom: 0.4rem;
}

.success-sub {
  font-size: 0.85rem;
  color: #a1a1a6;
  margin-bottom: 1.5rem;
}

.success-details-card {
  width: 100%;
  padding: 1rem;
  border-radius: 16px;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.detail-row {
  display: flex;
  justify-content: space-between;
  font-size: 0.88rem;
  color: #ffffff;
}
</style>
