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
    tagClass: 'bg-blue-500/10 text-blue-500',
    readTime: '4 min',
    title: 'Comment réviser efficacement ? Ce que dit la science',
    excerpt: 'Découvre la méthode Major : un système de révision basé sur les sciences cognitives qui transforme ta façon d\'apprendre.'
  },
  {
    slug: 'flashcards',
    tag: 'Méthodes',
    tagClass: 'bg-emerald-500/10 text-emerald-500',
    readTime: '3 min',
    title: 'Pourquoi les flashcards sont l\'arme secrète des meilleurs étudiants',
    excerpt: 'Les étudiants en médecine, droit et prépa l\'ont compris depuis longtemps. Voici pourquoi tu devrais les adopter.' 
  },
  {
    slug: 'major-de-promo',
    tag: 'Guide complet',
    tagClass: 'bg-[#D4A72C]/20 text-[#D4A72C]',
    readTime: '8 min',
    title: 'Comment devenir major de promo : le guide complet',
    excerpt: 'De 11 de moyenne au lycée à major de promo en fac. Mon parcours et les 8 principes qui font vraiment la différence.',
    featured: true
  },
  {
    slug: 'gamification',
    tag: 'Motivation',
    tagClass: 'bg-red-500/10 text-red-500',
    readTime: '2 min',
    title: 'Gamification et études : comment les meilleurs restent motivés',
    excerpt: 'Pourquoi tu procrastines sur tes révisions mais pas sur tes jeux vidéo ? La réponse pourrait changer ta façon d\'étudier.'
  }
]
</script>

<template>
  <main class="pt-[117px]">
    <!-- Blog Header -->
    <section class="py-24 pb-12 bg-gradient-to-b from-[#F8FAFC] to-white text-center">
      <div class="w-full max-w-[1248px] mx-auto px-6">
        <span class="inline-block px-4 py-1 bg-[#D4A72C]/10 text-[#D4A72C] text-sm font-semibold rounded-full border border-[#D4A72C]/30 mb-6">Nos publications</span>
        <h1 class="text-[clamp(2rem,4vw,3rem)] font-bold text-[#0B1F3A] mb-4">Ressources pour étudiants ambitieux</h1>
        <p class="text-lg text-[#526075] max-w-[600px] mx-auto">Des conseils actionnables basés sur la science pour exceller dans tes études</p>
      </div>
    </section>

    <!-- Articles Grid -->
    <section class="py-16">
      <div class="w-full max-w-[1248px] mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <NuxtLink
            v-for="article in articles"
            :key="article.slug"
            :to="`/blog/${article.slug}`"
            :class="[
              'no-underline',
              article.featured ? 'md:col-span-2' : ''
            ]"
          >
            <article 
              :class="[
                'rounded-2xl p-8 h-full transition-all duration-300 hover:-translate-y-1',
                article.featured 
                  ? 'bg-gradient-to-br from-[#0B1F3A] to-[#1a3a5f] text-white hover:shadow-2xl' 
                  : 'bg-white border border-[#E6EAF2] hover:shadow-xl hover:border-[#0B1F3A]'
              ]"
            >
              <div>
                <div class="flex items-center gap-4 mb-4">
                  <span 
                    :class="[
                      'px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide',
                      article.featured ? 'bg-[#D4A72C]/30 text-yellow-300' : article.tagClass
                    ]"
                  >
                    {{ article.tag }}
                  </span>
                  <span :class="['text-sm', article.featured ? 'text-white/80' : 'text-[#526075]']">
                    📖 {{ article.readTime }}
                  </span>
                </div>
                <h3 :class="['text-xl font-bold mb-4 leading-tight', article.featured ? 'text-white' : 'text-[#0B1F3A]']">
                  {{ article.title }}
                </h3>
                <p :class="['text-base leading-relaxed mb-6', article.featured ? 'text-white/90' : 'text-[#526075]']">
                  {{ article.excerpt }}
                </p>
                <div :class="['flex items-center gap-2 font-semibold text-sm', article.featured ? 'text-yellow-300' : 'text-[#0B1F3A]']">
                  <span>Lire l'article</span>
                  <svg class="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="9 6 15 12 9 18"></polyline>
                  </svg>
                </div>
              </div>
            </article>
          </NuxtLink>
        </div>

        <div class="text-center pt-8 border-t border-[#E6EAF2]">
          <NuxtLink to="/#inscription" class="inline-flex items-center justify-center h-11 px-8 text-base font-semibold text-white bg-[#0B1F3A] rounded-xl shadow-md transition-all duration-200 hover:bg-[#1a3a5c] hover:-translate-y-0.5 hover:shadow-lg">
            Rejoindre Major
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>
