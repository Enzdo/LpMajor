<template>
  <footer class="bg-[#0B1F3A] text-white py-16 md:py-24 pb-24 md:pb-8">
    <div class="w-full max-w-[1248px] mx-auto px-4 md:px-6">
      <div class="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-8 md:gap-12 mb-8 md:mb-12 text-center md:text-left">
        <div class="flex flex-col items-center md:items-start">
          <div class="flex items-center gap-2 mb-4">
            <svg class="w-8 h-8" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 8L4 16L20 24L36 16L20 8Z" fill="white" />
              <path d="M10 19V28C10 28 14 32 20 32C26 32 30 28 30 28V19L20 24L10 19Z" fill="white" />
              <path d="M32 17V26" stroke="#D4A72C" stroke-width="2" stroke-linecap="round" />
              <circle cx="32" cy="28" r="2" fill="#D4A72C" />
            </svg>
            <span class="text-xl font-extrabold uppercase">Major</span>
          </div>
          <p class="text-white/80 text-sm">D'étudiant moyen à numéro 1</p>
        </div>

        <div>
          <h5 class="text-sm font-semibold uppercase tracking-wide mb-4">Pages</h5>
          <a href="#features" class="block text-white/70 text-sm mb-2 no-underline transition-colors duration-200 hover:text-white">Comment ça marche</a>
          <a href="#about" class="block text-white/70 text-sm mb-2 no-underline transition-colors duration-200 hover:text-white">À propos</a>
          <a href="#faq" class="block text-white/70 text-sm mb-2 no-underline transition-colors duration-200 hover:text-white">FAQ</a>
          <NuxtLink to="/blog" class="block text-white/70 text-sm mb-2 no-underline transition-colors duration-200 hover:text-white">Blog</NuxtLink>
        </div>

        <div>
          <h5 class="text-sm font-semibold uppercase tracking-wide mb-4">Légal</h5>
          <NuxtLink to="/cgu" class="block text-white/70 text-sm mb-2 no-underline transition-colors duration-200 hover:text-white">CGU</NuxtLink>
          <NuxtLink to="/confidentialite" class="block text-white/70 text-sm mb-2 no-underline transition-colors duration-200 hover:text-white">Confidentialité</NuxtLink>
        </div>
      </div>

      <div class="flex flex-col-reverse md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-4 text-center">
        <p class="text-white/60 text-sm">© {{ new Date().getFullYear() }} Major. Tous droits réservés.</p>
        <div class="flex gap-4">
          <a href="#" class="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white transition-all duration-200 hover:bg-white/20 hover:-translate-y-0.5" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="#" class="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white transition-all duration-200 hover:bg-white/20 hover:-translate-y-0.5" aria-label="X (Twitter)">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
              <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
            </svg>
          </a>
          <a href="#" class="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white transition-all duration-200 hover:bg-white/20 hover:-translate-y-0.5" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
