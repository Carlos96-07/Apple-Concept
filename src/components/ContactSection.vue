<template>
  <section class="contact-section" id="contacto">
    <div class="container">
      <div class="contact-glass-grid glass-panel">
        <!-- Left info column -->
        <div class="contact-info-col">
          <div class="glass-badge hero-tag">
            <span>Atención Especializada</span>
          </div>

          <h2 class="contact-title">¿Deseas una asesoría VIP?</h2>
          <p class="contact-desc">
            Nuestros especialistas en iStudio están listos para guiarte en tu elección, cotizaciones empresariales o soporte técnico personalizado.
          </p>

          <div class="contact-details-list">
            <div class="contact-detail-item">
              <div class="detail-icon-glass">
                <Mail :size="20" class="text-cyan" />
              </div>
              <div class="detail-text">
                <span class="detail-label">Correo Electrónico</span>
                <span class="detail-value">contacto@istudio.concept</span>
              </div>
            </div>

            <div class="contact-detail-item">
              <div class="detail-icon-glass">
                <Phone :size="20" class="text-cyan" />
              </div>
              <div class="detail-text">
                <span class="detail-label">Línea Directa</span>
                <span class="detail-value">+506 800-ISTUDIO</span>
              </div>
            </div>

            <div class="contact-detail-item">
              <div class="detail-icon-glass">
                <MapPin :size="20" class="text-cyan" />
              </div>
              <div class="detail-text">
                <span class="detail-label">Sede Central</span>
                <span class="detail-value">iStudio Center, San José</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right form column -->
        <div class="contact-form-col">
          <!-- SUCCESS TOAST / CARD -->
          <div v-if="isSent" class="contact-success-card glass-panel">
            <div class="success-icon-box">
              <CheckCircle2 :size="48" class="text-cyan" />
            </div>
            <h3 class="success-title">Mensaje Enviado con Éxito</h3>
            <p class="success-text">
              Gracias <strong>{{ contactData.name }}</strong>. Tu consulta sobre <em>{{ contactData.subject }}</em> ha sido recibida prioritariamente. Te responderemos a <u>{{ contactData.email }}</u> en menos de 2 horas.
            </p>
            <button class="btn-glass btn-glass-primary" @click="resetContactForm">
              Enviar otra consulta
            </button>
          </div>

          <!-- FORM -->
          <form v-else @submit.prevent="submitContact" class="contact-form">
            <h3 class="form-title">Envíanos tu Consulta</h3>

            <!-- Alert Error -->
            <div v-if="errorMessage" class="error-glass-alert">
              <AlertTriangle :size="18" />
              <span>{{ errorMessage }}</span>
            </div>

            <!-- Honeypot Bot Trap -->
            <div style="display:none;" aria-hidden="true">
              <input type="text" name="bot_check" v-model="contactData.honeypot" tabindex="-1" autocomplete="off" />
            </div>

            <div class="input-field-group">
              <label for="contact-name" class="field-label">Nombre Completo *</label>
              <input 
                id="contact-name"
                type="text" 
                v-model="contactData.name"
                placeholder="Ej. Sofía Martínez" 
                class="glass-input"
                required
              />
            </div>

            <div class="input-field-group">
              <label for="contact-email" class="field-label">Correo Electrónico *</label>
              <input 
                id="contact-email"
                type="email" 
                v-model="contactData.email"
                placeholder="sofia@ejemplo.com" 
                class="glass-input"
                required
              />
            </div>

            <div class="input-field-group">
              <label for="contact-subject" class="field-label">Asunto de Interés</label>
              <select id="contact-subject" v-model="contactData.subject" class="glass-select">
                <option value="Asesoría de Compra">Asesoría de Compra de Productos</option>
                <option value="Trade In / Canje">Cotización de Trade In (Canje de Equipo)</option>
                <option value="Financiamiento">Financiamiento 0% Tasa</option>
                <option value="Soporte Técnico">Soporte Técnico y Apple Care+</option>
                <option value="Ventas Corporativas">Ventas Corporativas para Empresas</option>
              </select>
            </div>

            <div class="input-field-group">
              <label for="contact-message" class="field-label">Mensaje o Detalles *</label>
              <textarea 
                id="contact-message"
                v-model="contactData.message" 
                rows="4" 
                placeholder="Cuéntanos tus solicitudes o modelo de interés..."
                class="glass-textarea"
                required
              ></textarea>
            </div>

            <button type="submit" class="btn-glass btn-glass-primary full-btn" :disabled="isSending">
              <span>{{ isSending ? 'Enviando...' : 'Enviar Mensaje Directo' }}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { 
  Sparkles, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  AlertTriangle, 
  Send 
} from 'lucide-vue-next';
import { sanitizeInput, isValidEmail } from '../utils/sanitize';

const contactData = ref({
  name: '',
  email: '',
  subject: 'Asesoría de Compra',
  message: '',
  honeypot: ''
});

const isSending = ref(false);
const isSent = ref(false);
const errorMessage = ref('');

function submitContact() {
  errorMessage.value = '';

  // Honeypot check
  if (contactData.value.honeypot) {
    isSent.value = true;
    return;
  }

  const cleanName = sanitizeInput(contactData.value.name);
  const cleanEmail = sanitizeInput(contactData.value.email);
  const cleanMsg = sanitizeInput(contactData.value.message);

  if (!cleanName || cleanName.length < 3) {
    errorMessage.value = 'Por favor ingresa tu nombre completo.';
    return;
  }

  if (!isValidEmail(cleanEmail)) {
    errorMessage.value = 'Por favor ingresa un correo electrónico válido.';
    return;
  }

  if (!cleanMsg || cleanMsg.length < 5) {
    errorMessage.value = 'Por favor escribe un mensaje más detallado.';
    return;
  }

  isSending.value = true;

  setTimeout(() => {
    isSending.value = false;
    isSent.value = true;
  }, 500);
}

function resetContactForm() {
  contactData.value = {
    name: '',
    email: '',
    subject: 'Asesoría de Compra',
    message: '',
    honeypot: ''
  };
  isSent.value = false;
}
</script>

<style scoped>
.contact-section {
  padding: 6rem 0;
  position: relative;
}

.contact-glass-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  padding: 3rem;
  border-radius: 32px;
  background: var(--bg-card-solid);
  border: 1px solid rgba(0, 0, 0, 0.12);
  box-shadow: 0 35px 90px -10px rgba(0, 0, 0, 0.28), 0 15px 40px -15px rgba(0, 102, 204, 0.35);
  transition: transform 300ms var(--ease-apple), box-shadow 300ms var(--ease-apple);
}

.contact-glass-grid:hover {
  transform: translateY(-4px);
  box-shadow: 0 45px 110px -10px rgba(0, 0, 0, 0.38), 0 20px 50px -10px rgba(0, 102, 204, 0.45);
}

@media (min-width: 960px) {
  .contact-glass-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .contact-section {
    padding: 2.5rem 0;
  }

  .contact-glass-grid {
    padding: 1.5rem 1.25rem;
    border-radius: 24px;
    gap: 1.25rem;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
  }

  .hero-tag,
  .contact-desc,
  .contact-details-list {
    display: none !important;
  }

  .contact-title {
    font-size: 1.1rem;
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 0.5rem;
    word-break: break-word;
    text-align: center;
  }

  .contact-form-col {
    margin-top: 0.5rem;
  }

  .glass-input,
  .glass-select,
  .glass-textarea {
    font-size: 0.85rem;
    padding: 0.65rem 0.85rem;
    box-sizing: border-box;
  }

  .full-btn {
    padding: 0.8rem;
    font-size: 0.9rem;
  }
}

.contact-info-col {
  display: flex;
  flex-direction: column;
}

.hero-tag {
  margin-bottom: 1rem;
  align-self: flex-start;
}

.contact-title {
  font-size: clamp(1.25rem, 2vw, 1.65rem);
  font-weight: 700;
  line-height: 1.25;
  margin-bottom: 0.75rem;
}

.contact-desc {
  font-size: 1rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 2.5rem;
}

.contact-details-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: auto;
}

.contact-detail-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.detail-icon-glass {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: rgba(56, 189, 248, 0.12);
  border: 1px solid rgba(56, 189, 248, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}

.detail-text {
  display: flex;
  flex-direction: column;
}

.detail-label {
  font-size: 0.78rem;
  color: var(--text-dim);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.detail-value {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-main);
}

/* Contact Form */
.contact-form-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.form-title {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
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
  margin-bottom: 1.2rem;
}

.field-label {
  font-size: 0.84rem;
  font-weight: 600;
}

.glass-input,
.glass-select,
.glass-textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-glass);
  color: var(--text-main);
  font-family: inherit;
  font-size: 0.9rem;
}

.glass-select option {
  background: #ffffff;
  color: #000000;
  padding: 8px 12px;
}

.glass-input:focus,
.glass-select:focus,
.glass-textarea:focus {
  outline: none;
  border-color: var(--accent-cyan);
  background: rgba(255, 255, 255, 0.08);
}

.full-btn {
  width: 100%;
  padding: 0.9rem;
  font-size: 0.95rem;
}

/* Success Card */
.contact-success-card {
  padding: 3rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.success-icon-box {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: rgba(56, 189, 248, 0.15);
  border: 1px solid var(--accent-cyan);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.success-title {
  font-size: 1.6rem;
  font-weight: 800;
  margin-bottom: 0.75rem;
}

.success-text {
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 2rem;
}
</style>
