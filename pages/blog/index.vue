<script setup lang="ts">
useSeoMeta({
  title: 'Blog | Major',
  description: 'Ressources pour étudiants ambitieux. Des conseils actionnables basés sur la science pour exceller dans tes études.',
  ogTitle: 'Blog | Major',
  ogDescription: 'Ressources pour étudiants ambitieux',
  ogImage: '/og-image.png',
  twitterCard: 'summary_large_image'
})

const articles = [
  {
    slug: 'reviser-efficacement',
    tag: 'Sciences cognitives',
    readTime: '4 min',
    title: 'Comment réviser efficacement ? Ce que dit la science',
    excerpt: 'Découvre la méthode Major : un système de révision basé sur les sciences cognitives qui transforme ta façon d\'apprendre.'
  },
  {
    slug: 'flashcards',
    tag: 'Méthodes',
    readTime: '3 min',
    title: 'Pourquoi les flashcards sont l\'arme secrète des meilleurs étudiants',
    excerpt: 'Les étudiants en médecine, droit et prépa l\'ont compris depuis longtemps. Voici pourquoi tu devrais les adopter.' 
  },
  {
    slug: 'major-de-promo',
    tag: 'Guide complet',
    readTime: '8 min',
    title: 'Comment devenir major de promo : le guide complet',
    excerpt: 'De 11 de moyenne au lycée à major de promo en fac. Mon parcours et les 8 principes qui font vraiment la différence.',
    featured: true
  },
  {
    slug: 'gamification',
    tag: 'Motivation',
    readTime: '2 min',
    title: 'Gamification et études : comment les meilleurs restent motivés',
    excerpt: 'Pourquoi tu procrastines sur tes révisions mais pas sur tes jeux vidéo ? La réponse pourrait changer ta façon d\'étudier.'
  }
]
</script>

<template>
  <main class="blog-page">
    <!-- Blog Header -->
    <section class="blog-header">
      <div class="container">
        <span class="section-badge">Nos publications</span>
        <h1 class="blog-title">Ressources pour étudiants ambitieux</h1>
        <p class="blog-subtitle">Des conseils actionnables basés sur la science pour exceller dans tes études</p>
      </div>
    </section>

    <!-- Articles Grid -->
    <section class="blog-grid-section">
      <div class="container">
        <div class="blog-grid">
          <NuxtLink
            v-for="article in articles"
            :key="article.slug"
            :to="`/blog/${article.slug}`"
            :class="['blog-card-link', { 'blog-card-link-featured': article.featured }]"
          >
            <article :class="['blog-card', { 'blog-card-featured': article.featured }]">
              <div class="blog-card-header">
                <div class="blog-card-meta">
                  <span :class="['blog-tag', `tag-${article.tag.toLowerCase().replace(' ', '-')}`]">
                    {{ article.tag }}
                  </span>
                  <span class="blog-read-time">📖 {{ article.readTime }}</span>
                </div>
                <h3 class="blog-card-title">{{ article.title }}</h3>
                <p class="blog-card-excerpt">{{ article.excerpt }}</p>
                <div class="blog-card-toggle">
                  <span>Lire l'article</span>
                  <svg class="toggle-icon" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2">
                    <polyline points="9 6 15 12 9 18"></polyline>
                  </svg>
                </div>
              </div>
            </article>
          </NuxtLink>
        </div>

        <div class="blog-cta">
          <NuxtLink to="/#inscription" class="btn btn-primary btn-lg">
            Rejoindre Major
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.blog-page {
  padding-top: 117px; /* 45px banner + 72px header */
}

.blog-header {
  padding: var(--spacing-4xl) 0 var(--spacing-3xl);
  background: linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%);
  text-align: center;
}

.blog-title {
  margin-bottom: var(--spacing-md);
}

.blog-subtitle {
  font-size: 1.125rem;
  color: var(--color-text-light);
  max-width: 600px;
  margin: 0 auto;
}

.blog-grid-section {
  padding: var(--spacing-4xl) 0;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-3xl);
}

.blog-card-link {
  text-decoration: none;
}

.blog-card {
  background: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-2xl);
  padding: var(--spacing-2xl);
  height: 100%;
  transition: all var(--transition-slow);
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-xl);
  border-color: var(--color-primary);
}

.blog-card-featured {
  grid-column: span 2;
  background: linear-gradient(135deg, #0B1F3A 0%, #1a3a5f 100%);
  color: white;
}

.blog-card-featured .blog-card-title,
.blog-card-featured .blog-card-excerpt {
  color: white;
}

.blog-card-meta {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
}

.blog-tag {
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.tag-sciences-cognitives {
  background: rgba(59, 130, 246, 0.1);
  color: #3B82F6;
}

.tag-méthodes {
  background: rgba(16, 163, 127, 0.1);
  color: #10A37F;
}

.tag-guide-complet {
  background: rgba(212, 167, 44, 0.2);
  color: #D4A72C;
}

.tag-motivation {
  background: rgba(239, 68, 68, 0.1);
  color: #EF4444;
}

.blog-card-featured .tag-guide-complet {
  background: rgba(212, 167, 44, 0.3);
  color: #FFD700;
}

.blog-read-time {
  font-size: 0.875rem;
  color: var(--color-text-light);
}

.blog-card-featured .blog-read-time {
  color: rgba(255, 255, 255, 0.8);
}

.blog-card-title {
  font-size: 1.25rem;
  margin-bottom: var(--spacing-md);
  color: var(--color-primary);
  line-height: 1.3;
}

.blog-card-excerpt {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-text-light);
  margin-bottom: var(--spacing-lg);
}

.blog-card-toggle {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--color-primary);
  font-weight: 600;
  font-size: 0.875rem;
}

.blog-card-featured .blog-card-toggle {
  color: #FFD700;
}

.toggle-icon {
  transition: transform var(--transition-base);
}

.blog-card:hover .toggle-icon {
  transform: translateX(4px);
}

.blog-cta {
  text-align: center;
  padding-top: var(--spacing-2xl);
  border-top: 1px solid var(--color-border);
}

@media (max-width: 768px) {
  .blog-grid {
    grid-template-columns: 1fr;
  }

  .blog-card-featured {
    grid-column: span 1;
  }
}
</style>
