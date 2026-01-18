<template>
  <section class="testimonials">
    <div class="container">
      <div class="section-header reveal">
        <span class="section-badge">Ils témoignent</span>
        <h2 class="section-title">Ce que disent nos premiers utilisateurs</h2>
      </div>

      <div class="testimonials-grid reveal">
        <div class="testimonial-card">
          <div class="testimonial-rating">⭐⭐⭐⭐⭐</div>
          <p class="testimonial-text">"Je stressais pour le bac, je ne savais pas comment m'organiser. Avec Major, je
            sais exactement quoi réviser chaque jour. J'ai pris confiance et mes notes ont décollé."</p>
          <div class="testimonial-author">
            <img src="/images/avatars/avatar_badge_1.png" alt="Clara M." class="testimonial-avatar">
            <div class="testimonial-info">
              <span class="testimonial-name">Clara M.</span>
              <span class="testimonial-role">Terminale · Lyon</span>
            </div>
          </div>
        </div>

        <div class="testimonial-card">
          <div class="testimonial-rating">⭐⭐⭐⭐⭐</div>
          <p class="testimonial-text">"Je révise 2h de moins par jour et je retiens 3x plus. Le classement me pousse à
            rester constant. Mes partiels n'ont jamais été aussi bien préparés."</p>
          <div class="testimonial-author">
            <img src="/images/avatars/avatar_badge_2.png" alt="Thomas D." class="testimonial-avatar">
            <div class="testimonial-info">
              <span class="testimonial-name">Thomas D.</span>
              <span class="testimonial-role">Droit L2 · Paris</span>
            </div>
          </div>
        </div>

        <div class="testimonial-card">
          <div class="testimonial-rating">⭐⭐⭐⭐⭐</div>
          <p class="testimonial-text">"Le programme génère mes flashcards en 2 minutes. Avant, je passais des heures à ficher.
            Major a littéralement sauvé mon semestre."</p>
          <div class="testimonial-author">
            <img src="/images/avatars/avatar_badge_3.png" alt="Emma L." class="testimonial-avatar">
            <div class="testimonial-info">
              <span class="testimonial-name">Emma L.</span>
              <span class="testimonial-role">École de commerce · Toulouse</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials {
  padding: var(--spacing-4xl) 0;
  background: var(--color-background);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
}

.testimonial-card {
  background: var(--color-white);
  border-radius: var(--radius-2xl);
  padding: var(--spacing-2xl);
  border: 1px solid var(--color-border);
  transition: all var(--transition-slow);
}

.testimonial-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-xl);
  border-color: transparent;
}

.testimonial-rating {
  font-size: 1.125rem;
  margin-bottom: var(--spacing-md);
}

.testimonial-text {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--color-text);
  margin-bottom: var(--spacing-lg);
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.testimonial-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
}

.testimonial-info {
  display: flex;
  flex-direction: column;
}

.testimonial-name {
  font-weight: 600;
  color: var(--color-primary);
}

.testimonial-role {
  font-size: 0.875rem;
  color: var(--color-text-light);
}
</style>
