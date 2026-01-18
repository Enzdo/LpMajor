<script setup lang="ts">
const activeFaq = ref<number | null>(null)

const faqItems = [
  {
    question: "C'est quoi exactement Major ?",
    answer: "Major est une application tout-en-un qui combine un algorithme de révision basé sur la science cognitive, une IA capable de ficher n'importe quel cours + générer des flashcards automatiquement, et un système de gamification pour te motiver. L'essentiel pouvant rendre un étudiant excellent."
  },
  {
    question: "Combien de temps avant de voir des résultats ?",
    answer: "La plupart des utilisateurs constatent une amélioration de leur productivité dès la première semaine. L'impact sur les notes se voit généralement après 2-3 semaines d'utilisation régulière."
  },
  {
    question: "Ça fonctionne pour toutes les filières ?",
    answer: "Oui ! Que tu sois en médecine, droit, commerce, sciences, lettres ou même lycéen, l'algorithme s'adapte à ton contenu. Notre IA est entraînée sur tous types de cours."
  },
  {
    question: "Est-ce que Major est gratuit ?",
    answer: "Oui ! L'essentiel de Major est 100% gratuit. Tu peux réviser, créer des flashcards et suivre ta progression sans rien payer. Quelques fonctionnalités premium optionnelles existent pour les plus ambitieux."
  },
  {
    question: "L'app est disponible sur quels appareils ?",
    answer: "Major sera disponible sur web, iOS et Android. Tu pourras réviser n'importe où, n'importe quand, et ta progression sera synchronisée sur tous tes appareils."
  }
]

function toggleFaq(index: number) {
  activeFaq.value = activeFaq.value === index ? null : index
}
</script>

<template>
  <section class="faq" id="faq">
    <div class="container">
      <div class="section-header reveal">
        <span class="section-badge">FAQ</span>
        <h2 class="section-title">Les questions fréquentes</h2>
      </div>

      <div class="faq-list reveal">
        <div
          v-for="(item, index) in faqItems"
          :key="index"
          class="faq-item"
          :class="{ active: activeFaq === index }"
        >
          <button class="faq-question" @click="toggleFaq(index)">
            <span>{{ item.question }}</span>
            <span class="faq-icon">{{ activeFaq === index ? '−' : '+' }}</span>
          </button>
          <div class="faq-answer" :class="{ open: activeFaq === index }">
            <p>{{ item.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq {
  padding: var(--spacing-4xl) 0;
  background: var(--color-background);
}

.faq-list {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  background: var(--color-white);
  border-radius: var(--radius-lg);
  margin-bottom: var(--spacing-md);
  border: 1px solid var(--color-border);
  overflow: hidden;
  transition: all var(--transition-base);
}

.faq-item:hover {
  border-color: var(--color-primary);
}

.faq-item.active {
  border-color: var(--color-primary);
  box-shadow: var(--shadow-lg);
}

.faq-question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-lg);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-primary);
  text-align: left;
  transition: all var(--transition-base);
}

.faq-question:hover {
  background: var(--color-background-alt);
}

.faq-icon {
  font-size: 1.5rem;
  font-weight: 300;
  color: var(--color-primary);
  transition: transform var(--transition-base);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out, padding 0.3s ease-out;
}

.faq-answer.open {
  max-height: 300px;
  padding: 0 var(--spacing-lg) var(--spacing-lg);
}

.faq-answer p {
  color: var(--color-text-light);
  line-height: 1.7;
}
</style>
