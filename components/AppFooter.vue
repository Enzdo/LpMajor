<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo">
            <svg class="logo-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 8L4 16L20 24L36 16L20 8Z" fill="#0B1F3A" />
              <path d="M10 19V28C10 28 14 32 20 32C26 32 30 28 30 28V19L20 24L10 19Z" fill="#0B1F3A" />
              <path d="M32 17V26" stroke="#D4A72C" stroke-width="2" stroke-linecap="round" />
              <circle cx="32" cy="28" r="2" fill="#D4A72C" />
            </svg>
            <span class="logo-text">Major</span>
          </div>
          <p class="footer-tagline">D'étudiant moyen à numéro 1</p>
        </div>

        <div class="footer-links">
          <h5>Pages</h5>
          <a href="#features">Comment ça marche</a>
          <a href="#about">À propos</a>
          <a href="#faq">FAQ</a>
          <NuxtLink to="/blog">Blog</NuxtLink>
        </div>

        <div class="footer-links">
          <h5>Légal</h5>
          <NuxtLink to="/cgu">CGU</NuxtLink>
          <NuxtLink to="/confidentialite">Confidentialité</NuxtLink>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-social">
          <a href="#" class="social-icon" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="#" class="social-icon" aria-label="X (Twitter)">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
              <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
            </svg>
          </a>
          <a href="#" class="social-icon" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
        <p class="footer-copyright">© {{ new Date().getFullYear() }} Major. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--color-primary);
  color: #FFFFFF;
  padding: var(--spacing-4xl) 0 var(--spacing-xl);
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: var(--spacing-3xl);
  margin-bottom: var(--spacing-3xl);
}

.footer-brand .footer-logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
}

.footer-brand .logo-icon {
  width: 32px;
  height: 32px;
}

.footer-brand .logo-icon path,
.footer-brand .logo-icon circle {
  fill: #FFFFFF;
  stroke: #D4A72C;
}

.footer-brand .logo-text {
  font-size: 1.25rem;
  font-weight: 800;
  color: #FFFFFF;
  text-transform: uppercase;
}

.footer-tagline {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.875rem;
}

.footer-links h5 {
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--spacing-md);
  color: #FFFFFF;
}

.footer-links a {
  display: block;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.875rem;
  margin-bottom: var(--spacing-sm);
  transition: color var(--transition-base);
}

.footer-links a:hover {
  color: #FFFFFF;
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: var(--spacing-xl);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-social {
  display: flex;
  gap: var(--spacing-md);
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: #FFFFFF;
  transition: all var(--transition-base);
}

.social-icon:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.footer-copyright {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }

  .footer-bottom {
    flex-direction: column;
    gap: var(--spacing-md);
    text-align: center;
  }
}
</style>
