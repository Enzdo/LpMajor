<template>
  <section class="stats">
    <div class="container">
      <div class="stats-grid">
        <div class="stat-item reveal">
          <span class="stat-number">+5h</span>
          <span class="stat-label">gagnées par semaine</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item reveal">
          <span class="stat-number">2min</span>
          <span class="stat-label">pour créer tes flashcards</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item reveal">
          <span class="stat-number">1%</span>
          <span class="stat-label">des étudiants d'élite</span>
        </div>
      </div>
      <div class="stats-cta">
        <a href="#features" class="btn-link">En savoir plus ↓</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stats {
  padding: var(--spacing-3xl) 0;
  background: var(--color-white);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.stats-grid {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-3xl);
  flex-wrap: wrap;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  color: var(--color-primary);
  line-height: 1;
  margin-bottom: var(--spacing-sm);
}

.stat-label {
  font-size: 0.9375rem;
  color: var(--color-text-light);
  font-weight: 500;
}

.stat-divider {
  width: 1px;
  height: 60px;
  background: var(--color-border);
}

.stats-cta {
  text-align: center;
  margin-top: var(--spacing-2xl);
}

@media (max-width: 768px) {
  .stat-divider {
    display: none;
  }
}
</style>
