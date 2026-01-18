<template>
  <header class="header">
    <nav class="nav container">
      <NuxtLink to="/" class="logo">
        <svg class="logo-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 8L4 16L20 24L36 16L20 8Z" fill="#0B1F3A" />
          <path d="M10 19V28C10 28 14 32 20 32C26 32 30 28 30 28V19L20 24L10 19Z" fill="#0B1F3A" />
          <path d="M32 17V26" stroke="#D4A72C" stroke-width="2" stroke-linecap="round" />
          <circle cx="32" cy="28" r="2" fill="#D4A72C" />
        </svg>
        <span class="logo-text">Major</span>
      </NuxtLink>
      <div class="nav-links">
        <NuxtLink to="/#features">Fonctionnalités</NuxtLink>
        <NuxtLink to="/#about">À propos</NuxtLink>
        <NuxtLink to="/#faq">FAQ</NuxtLink>
        <NuxtLink to="/blog">Blog</NuxtLink>
      </div>
      <NuxtLink to="/#inscription" class="btn btn-primary btn-nav">S'inscrire gratuitement</NuxtLink>
    </nav>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 45px;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 72px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
  box-shadow: var(--shadow-card);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 var(--spacing-lg);
  gap: var(--spacing-lg);
}

.logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  text-decoration: none;
}

.logo-icon {
  width: 36px;
  height: 36px;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: var(--spacing-xl);
}

.nav-links a {
  color: var(--muted-foreground);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.875rem;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-lg);
  transition: var(--transition-colors);
}

.nav-links a:hover {
  color: var(--primary);
  background: rgba(241, 244, 250, 0.5);
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  
  .btn-nav {
    font-size: 0.75rem;
    padding: 0.5rem 1rem;
  }
}
</style>
