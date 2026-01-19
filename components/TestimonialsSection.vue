<template>
  <section class="py-24 bg-[#F6F7FB]">
    <div class="w-full max-w-[1248px] mx-auto px-6">
      <div class="text-center mb-16 reveal">
        <span class="inline-block px-4 py-1 bg-[#D4A72C]/10 text-[#D4A72C] text-sm font-semibold rounded-full border border-[#D4A72C]/30 mb-6">Ils témoignent</span>
        <h2 class="text-[clamp(2rem,4vw,3rem)] font-bold text-[#0B1F3A] leading-tight">Ce que disent nos premiers utilisateurs</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
        <!-- Card 1 -->
        <div class="bg-white rounded-2xl p-8 border border-[#E6EAF2] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-transparent">
          <div class="text-lg mb-4">⭐⭐⭐⭐⭐</div>
          <p class="text-base leading-relaxed text-[#0B1220] mb-6 italic">"Je stressais pour le bac, je ne savais pas comment m'organiser. Avec Major, je sais exactement quoi réviser chaque jour. J'ai pris confiance et mes notes ont décollé."</p>
          <div class="flex items-center gap-3">
            <img src="/images/avatars/avatar_badge_1.png" alt="Clara M." class="w-12 h-12 rounded-full object-cover border-2 border-[#E6EAF2]">
            <div class="flex flex-col">
              <span class="font-semibold text-[#0B1F3A] text-[0.9375rem]">Clara M.</span>
              <span class="text-[0.8125rem] text-[#526075]">Terminale · Lyon</span>
            </div>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="bg-white rounded-2xl p-8 border border-[#E6EAF2] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-transparent">
          <div class="text-lg mb-4">⭐⭐⭐⭐⭐</div>
          <p class="text-base leading-relaxed text-[#0B1220] mb-6 italic">"Je révise 2h de moins par jour et je retiens 3x plus. Le classement me pousse à rester constant. Mes partiels n'ont jamais été aussi bien préparés."</p>
          <div class="flex items-center gap-3">
            <img src="/images/avatars/avatar_badge_2.png" alt="Thomas D." class="w-12 h-12 rounded-full object-cover border-2 border-[#E6EAF2]">
            <div class="flex flex-col">
              <span class="font-semibold text-[#0B1F3A] text-[0.9375rem]">Thomas D.</span>
              <span class="text-[0.8125rem] text-[#526075]">Droit L2 · Paris</span>
            </div>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="bg-white rounded-2xl p-8 border border-[#E6EAF2] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-transparent">
          <div class="text-lg mb-4">⭐⭐⭐⭐⭐</div>
          <p class="text-base leading-relaxed text-[#0B1220] mb-6 italic">"Le programme génère mes flashcards en 2 minutes. Avant, je passais des heures à ficher. Major a littéralement sauvé mon semestre."</p>
          <div class="flex items-center gap-3">
            <img src="/images/avatars/avatar_badge_3.png" alt="Emma L." class="w-12 h-12 rounded-full object-cover border-2 border-[#E6EAF2]">
            <div class="flex flex-col">
              <span class="font-semibold text-[#0B1F3A] text-[0.9375rem]">Emma L.</span>
              <span class="text-[0.8125rem] text-[#526075]">École de commerce · Toulouse</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
