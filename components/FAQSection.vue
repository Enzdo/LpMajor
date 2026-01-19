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
  <section class="py-24 bg-[#F6F7FB]" id="faq">
    <div class="w-full max-w-[1248px] mx-auto px-6">
      <div class="text-center mb-16 reveal">
        <span class="inline-block px-4 py-1 bg-[#D4A72C]/10 text-[#D4A72C] text-sm font-semibold rounded-full border border-[#D4A72C]/30 mb-6">FAQ</span>
        <h2 class="text-[clamp(2rem,4vw,3rem)] font-bold text-[#0B1F3A] leading-tight">Les questions fréquentes</h2>
      </div>

      <div class="max-w-[800px] mx-auto reveal">
        <div
          v-for="(item, index) in faqItems"
          :key="index"
          class="faq-item bg-white rounded-lg mb-4 border border-[#E6EAF2] overflow-hidden transition-all duration-200 hover:border-[#0B1F3A]"
          :class="{ 'active border-[#0B1F3A] shadow-lg': activeFaq === index }"
        >
          <button 
            class="w-full flex items-center justify-between p-6 bg-transparent border-none cursor-pointer text-base font-semibold text-[#0B1F3A] text-left transition-all duration-200 hover:bg-[#F1F4FA]"
            @click="toggleFaq(index)"
          >
            <span>{{ item.question }}</span>
            <span class="faq-icon text-2xl font-light text-[#0B1F3A]">{{ activeFaq === index ? '−' : '+' }}</span>
          </button>
          <div class="faq-answer" :class="{ open: activeFaq === index }">
            <p class="text-[#526075] leading-relaxed px-6 pb-6">{{ item.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
