<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

// Article data (normally would come from a CMS or API)
const articles: Record<string, any> = {
  'reviser-efficacement': {
    title: 'Comment réviser efficacement ? Ce que dit la science',
    tag: 'Sciences cognitives',
    tagClass: 'bg-blue-500/10 text-blue-500',
    readTime: '4 min',
    content: `
      <h2>Comment réviser efficacement ? Ce que dit la science</h2>
      <p>La mémorisation n'est pas une question de talent ou de "mémoire photographique". C'est une question de <strong>méthode</strong>.</p>
      
      <h3>Le problème des révisions traditionnelles</h3>
      <p>La plupart des étudiants révisent de la même façon depuis des années :</p>
      <ul>
        <li>Relire leurs cours plusieurs fois</li>
        <li>Surligner des passages "importants"</li>
        <li>Faire des fiches de révision</li>
      </ul>
      <p><strong>Le problème ?</strong> Ces méthodes donnent l'<em>illusion</em> de progression mais ne créent pas de mémorisation durable.</p>
      
      <h3>Ce que dit la science</h3>
      <p>Les sciences cognitives ont identifié 3 principes fondamentaux :</p>
      
      <h4>1. La répétition espacée</h4>
      <p>Notre cerveau oublie naturellement les informations qu'il n'utilise pas. La courbe de l'oubli d'Ebbinghaus montre qu'on perd 70% d'une information après 24h si on ne la révise pas.</p>
      <p><strong>La solution ?</strong> Réviser au moment optimal - juste avant d'oublier.</p>
      
      <h4>2. Le test actif</h4>
      <p>Tester vos connaissances (plutôt que de relire passivement) force votre cerveau à <strong>récupérer</strong> l'information, ce qui renforce les connexions neuronales.</p>
      <p><strong>C'est pour ça que les flashcards fonctionnent.</strong></p>
      
      <h4>3. L'interleaving</h4>
      <p>Mélanger différents sujets pendant vos révisions (plutôt que de bloquer par chapitre) améliore votre capacité à distinguer et appliquer les concepts.</p>
      
      <h3>Comment Major applique ces principes</h3>
      <p>Major utilise un algorithme basé sur ces 3 principes pour :</p>
      <ul>
        <li>Te dire <strong>exactement</strong> quoi réviser et <strong>quand</strong></li>
        <li>Générer des flashcards automatiquement avec l'IA</li>
        <li>Suivre ta progression en temps réel</li>
      </ul>
      <p><strong>Résultat ?</strong> Tu mémorises 3x plus en 2x moins de temps.</p>
      <p>Prêt à réviser intelligemment ? <a href="/#inscription">Rejoins Major</a></p>
    `
  },
  'flashcards': {
    title: 'Pourquoi les flashcards sont l\'arme secrète des meilleurs étudiants',
    tag: 'Méthodes',
    tagClass: 'bg-emerald-500/10 text-emerald-500',
    readTime: '3 min',
    content: `
      <h2>Pourquoi les flashcards sont l'arme secrète des meilleurs étudiants</h2>
      <p>Les étudiants en médecine, droit et prépa le savent depuis longtemps : <strong>les flashcards sont l'outil de révision le plus puissant</strong>.</p>
      
      <h3>Pourquoi les flashcards fonctionnent</h3>
      
      <h4>1. Test actif (active recall)</h4>
      <p>Au lieu de relire passivement, les flashcards te forcent à <strong>récupérer</strong> l'information de ta mémoire. C'est exactement ce que tu feras pendant l'examen.</p>
      
      <h4>2. Répétition espacée</h4>
      <p>En utilisant un système comme Major, tu révises automatiquement les cartes que tu oublies plus souvent, et moins souvent celles que tu maîtrises.</p>
      
      <h4>3. Métacognition</h4>
      <p>Les flashcards te forcent à évaluer ta propre compréhension. "Est-ce que je connais vraiment cette réponse ?"</p>
      
      <h3>Le problème des flashcards traditionnelles</h3>
      <p>Créer des flashcards manuellement prend <strong>énormément de temps</strong>. C'est pour ça que beaucoup abandonnent.</p>
      
      <h3>La solution : l'IA</h3>
      <p>Major génère automatiquement tes flashcards à partir de tes cours en <strong>2 minutes</strong>.</p>
      <p>Plus d'excuse pour ne pas utiliser la méthode la plus efficace.</p>
      <p><a href="/#inscription">Essayer Major gratuitement</a></p>
    `
  },
  'major-de-promo': {
    title: 'Comment devenir major de promo : le guide complet',
    tag: 'Guide complet',
    tagClass: 'bg-[#D4A72C]/20 text-[#D4A72C]',
    readTime: '8 min',
    content: `
      <h2>Comment devenir major de promo : le guide complet</h2>
      <p>Au lycée, j'avais 11 de moyenne. Le proviseur m'a dit que je n'arriverais jamais dans la filière que j'avais demandée.</p>
      <p>Aujourd'hui, je majore mes études dans un domaine ultra-concurrentiel.</p>
      <p>Voici les <strong>8 principes</strong> qui ont fait la différence.</p>
      
      <h3>1. Système > Motivation</h3>
      <p>La motivation est volatile. Un système bien conçu est constant.</p>
      <p>Les meilleurs étudiants n'ont pas plus de volonté - ils ont de meilleurs systèmes.</p>
      
      <h3>2. Qualité > Quantité</h3>
      <p>Travailler 10h par jour ne sert à rien si tu ne retiens rien.</p>
      <p>Concentration totale pendant 3h > Distraction pendant 10h.</p>
      
      <h3>3. Répétition espacée > Bachotage</h3>
      <p>Le bachotage fonctionne pour l'examen de demain, pas pour une compréhension durable.</p>
      <p>La répétition espacée te fait mémoriser pour toujours.</p>
      
      <h3>4. Teste-toi constamment</h3>
      <p>Les examens blancs ne sont pas là pour "voir où tu en es". Ils SONT la révision.</p>
      
      <h3>5. Dors suffisamment</h3>
      <p>Le sommeil consolide la mémoire. Point final.</p>
      <p>6h de révisions + 8h de sommeil > 8h de révisions + 4h de sommeil.</p>
      
      <h3>6. Ne révise pas seul dans ton coin</h3>
      <p>Rejoins une communauté d'étudiants ambitieux. L'émulation aide.</p>
      
      <h3>7. Track tout</h3>
      <p>Ce qui est mesuré s'améliore. Suis tes heures de travail et ta productivité.</p>
      
      <h3>8. Utilise les bons outils</h3>
      <p>Tu ne construirais pas une maison avec un marteau et un clou. Utilise les outils modernes.</p>
      <hr>
      <p>C'est exactement pour ça que j'ai créé Major.</p>
      <p><a href="/#inscription">Découvrir Major</a></p>
    `
  },
  'gamification': {
    title: 'Gamification et études : comment les meilleurs restent motivés',
    tag: 'Motivation',
    tagClass: 'bg-red-500/10 text-red-500',
    readTime: '2 min',
    content: `
      <h2>Gamification et études : comment les meilleurs restent motivés</h2>
      <p>Pourquoi tu peux passer 5h sur un jeu vidéo mais pas 1h à réviser ?</p>
      <p><strong>La réponse : les jeux sont conçus pour être addictifs.</strong></p>
      
      <h3>Les principes de la gamification</h3>
      <p>Les jeux utilisent 4 mécanismes psychologiques :</p>
      
      <h4>1. Feedback immédiat</h4>
      <p>Dans un jeu, tu sais tout de suite si tu progresses. Dans tes révisions... pas vraiment.</p>
      
      <h4>2. Objectifs clairs</h4>
      <p>"Atteindre le niveau suivant" est plus motivant que "réviser le droit civil".</p>
      
      <h4>3. Système de récompenses</h4>
      <p>Les points, badges et classements activent le circuit de la dopamine.</p>
      
      <h4>4. Compétition saine</h4>
      <p>Se comparer aux autres (sainement) crée de l'émulation.</p>
      
      <h3>Major applique ces principes</h3>
      <ul>
        <li>✅ <strong>Feedback immédiat</strong> : Tu vois ta progression en temps réel</li>
        <li>✅ <strong>Objectifs clairs</strong> : "Révise 2h aujourd'hui" au lieu de "Révise le chapitre 3"</li>
        <li>✅ <strong>Récompenses</strong> : Série de jours consécutifs, badges de progression</li>
        <li>✅ <strong>Classement</strong> : Compare-toi aux autres étudiants (anonymement)</li>
      </ul>
      <p><strong>Résultat ?</strong> Réviser devient aussi engageant qu'un jeu.</p>
      <p><a href="/#inscription">Essayer Major</a></p>
    `
  }
}

const article = articles[slug]

if (!article) {
  throw createError({ statusCode: 404, statusMessage: 'Article non trouvé' })
}

useSeoMeta({
  title: `${article.title} | Major Blog`,
  description: article.content.substring(0, 160),
  ogTitle: article.title,
  ogDescription: article.content.substring(0, 160),
  ogImage: '/og-image.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <main class="pt-[117px]">
    <article class="py-16 bg-white">
      <div class="w-full max-w-[800px] mx-auto px-6">
        <!-- Article Header -->
        <header class="mb-12 text-center">
          <div class="flex items-center justify-center gap-4 mb-6">
            <span :class="['px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide', article.tagClass]">
              {{ article.tag }}
            </span>
            <span class="text-sm text-[#526075]">📖 {{ article.readTime }}</span>
          </div>
          <h1 class="text-[clamp(2rem,5vw,3rem)] leading-tight font-bold text-[#0B1F3A]">{{ article.title }}</h1>
        </header>

        <!-- Article Content -->
        <div class="prose prose-lg max-w-none mb-16" v-html="article.content" />

        <!-- Article Footer -->
        <footer class="border-t-2 border-[#E6EAF2] pt-12">
          <div class="bg-gradient-to-br from-[#0B1F3A] to-[#1a3a5f] text-white p-12 rounded-2xl text-center mb-8">
            <h3 class="text-xl font-bold text-white mb-4">Prêt à passer au niveau supérieur ?</h3>
            <p class="text-white/90 mb-6">Rejoins les étudiants qui utilisent Major pour dominer leurs révisions.</p>
            <NuxtLink to="/#inscription" class="inline-flex items-center justify-center h-11 px-8 text-base font-semibold text-[#0B1F3A] bg-white rounded-xl shadow-md transition-all duration-200 hover:bg-gray-100 hover:-translate-y-0.5 hover:shadow-lg">
              Rejoindre Major gratuitement
            </NuxtLink>
          </div>

          <NuxtLink to="/blog" class="inline-flex items-center gap-2 text-[#526075] font-medium no-underline transition-colors duration-200 hover:text-[#0B1F3A]">
            ← Retour au blog
          </NuxtLink>
        </footer>
      </div>
    </article>
  </main>
</template>

<style>
/* Prose styles for article content */
.prose h2 {
  @apply mt-12 mb-6 text-2xl font-bold text-[#0B1F3A];
}

.prose h3 {
  @apply mt-8 mb-4 text-xl font-bold text-[#0B1F3A];
}

.prose h4 {
  @apply mt-6 mb-3 text-lg font-semibold text-[#0B1F3A];
}

.prose p {
  @apply mb-6 text-lg leading-relaxed text-[#0B1220];
}

.prose ul, .prose ol {
  @apply mb-6 pl-8;
}

.prose li {
  @apply mb-2 text-lg text-[#0B1220];
}

.prose strong {
  @apply text-[#0B1F3A] font-bold;
}

.prose a {
  @apply text-[#0B1F3A] underline hover:text-[#D4A72C];
}

.prose hr {
  @apply my-8 border-[#E6EAF2];
}
</style>
