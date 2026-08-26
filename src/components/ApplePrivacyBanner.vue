<template>
  <section class="privacy-section">
    <div class="container">
      <h2 class="privacy-main-header">Privacidad con Safari.</h2>

      <div class="privacy-banner-card">
        <!-- Left Text Box -->
        <div class="privacy-text-col">
          <!-- Circular White Apple Badge (User Reference Image) -->
          <!-- <div class="apple-circle-badge privacy-badge">
            <svg viewBox="0 0 170 170" width="16" height="16" fill="#000000" aria-label="Apple Logo">
              <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.34.13-9.14-1.9-14.4-6.07-3.68-3.03-7.69-7.85-12.03-14.44-6.72-10.12-11.97-21.36-15.75-33.72-3.78-12.36-5.67-24.32-5.67-35.88 0-14.15 3.44-25.75 10.32-34.8 6.88-9.05 15.42-13.67 25.62-13.87 4.69 0 9.87 1.25 15.54 3.75 5.67 2.5 9.77 3.75 12.3 3.75 2.14 0 6.29-1.25 12.45-3.75 6.16-2.5 11.13-3.63 14.91-3.38 10.63.5 19.34 4.54 26.13 12.13 6.79 7.59 10.85 17.5 12.18 29.74-9.82 5.92-14.65 14.2-14.48 24.84.18 10.64 4.96 19.12 14.34 25.44-2.11 6.12-4.88 12.06-8.3 17.82zM119.22 31.42c0-7.39 2.72-14.42 8.16-21.09 5.44-6.67 12.27-10.33 20.49-10.98.13 1.13.2 2.13.2 3 0 7.39-2.77 14.51-8.31 21.36-5.54 6.85-12.4 10.63-20.57 11.35-.13-.88-.2-1.76-.2-2.64z"/>
            </svg>
          </div> -->

          <h3 class="privacy-banner-title">
            Safari. El navegador realmente privado.
          </h3>
          <p class="privacy-banner-desc">
            Navega por la web con la tranquilidad de que tus datos de rastreo, contraseñas e historial permanecen exclusivamente en tu dispositivo.
          </p>
          <button class="btn-apple btn-privacy-blue" @click="$emit('open-privacy')">
            Más información
          </button>
        </div>

        <!-- Right Visual (Image matching Screenshot 2) -->
        <div class="privacy-image-col">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85" 
            alt="Privacidad en iPhone" 
            class="privacy-hero-img"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineEmits(['open-privacy']);
</script>

<style scoped>
.privacy-section {
  padding: 4rem 0 6rem 0;
  background: #ffffff;
}

.privacy-main-header {
  font-size: clamp(1.25rem, 2vw, 1.7rem);
  font-weight: 700;
  color: #1d1d1f;
  letter-spacing: -0.02em;
  margin-bottom: 1.25rem;
}

.privacy-banner-card {
  background: #000000;
  border-radius: 32px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  min-height: 420px;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.15);
}

@media (min-width: 860px) {
  .privacy-banner-card {
    grid-template-columns: 1fr 1fr;
  }
}

.privacy-text-col {
  padding: 3.5rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: #ffffff;
  z-index: 2;
}

.apple-circle-badge {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  margin-bottom: 1.25rem;
}

.privacy-banner-title {
  font-size: clamp(1.8rem, 3.2vw, 2.6rem);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
}

.privacy-banner-desc {
  font-size: 1.05rem;
  color: #a1a1a6;
  line-height: 1.55;
  margin-bottom: 2rem;
  max-width: 440px;
}

.btn-privacy-blue {
  background: #ffffff;
  color: #000000;
  padding: 0.75rem 1.75rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
  transition: all 200ms ease;
}

.btn-privacy-blue:hover {
  background: #f5f5f7;
  transform: scale(1.04);
}

.privacy-image-col {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 300px;
  overflow: hidden;
}

.privacy-hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  filter: contrast(1.05) brightness(0.9);
  transition: transform 500ms ease;
}

.privacy-banner-card:hover .privacy-hero-img {
  transform: scale(1.04);
}
</style>
