<script setup>
const mobileMenuOpen = ref(false)
</script>

<template>
  <header class="fixed top-[38px] left-0 right-0 z-[1000] h-[60px] md:h-[72px] bg-white/95 backdrop-blur-[20px] border-b border-[#E6EAF2] shadow-[0_1px_3px_0_rgba(0,0,0,0.02)]">
    <nav class="flex items-center justify-between h-full max-w-[1248px] mx-auto px-4 md:px-6 gap-4">
      <NuxtLink to="/" class="flex items-center gap-2 no-underline">
        <svg class="w-8 h-8 md:w-9 md:h-9" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 8L4 16L20 24L36 16L20 8Z" fill="#0B1F3A" />
          <path d="M10 19V28C10 28 14 32 20 32C26 32 30 28 30 28V19L20 24L10 19Z" fill="#0B1F3A" />
          <path d="M32 17V26" stroke="#D4A72C" stroke-width="2" stroke-linecap="round" />
          <circle cx="32" cy="28" r="2" fill="#D4A72C" />
        </svg>
        <span class="text-xl md:text-2xl font-extrabold text-[#0B1F3A] uppercase tracking-[0.5px]">Major</span>
      </NuxtLink>
      <div class="hidden md:flex items-center gap-8">
        <NuxtLink to="/#features" class="text-[#526075] no-underline font-medium text-sm py-2 px-4 rounded-lg transition-colors duration-200 hover:text-[#0B1F3A] hover:bg-[#F1F4FA]/50">Fonctionnalités</NuxtLink>
        <NuxtLink to="/#about" class="text-[#526075] no-underline font-medium text-sm py-2 px-4 rounded-lg transition-colors duration-200 hover:text-[#0B1F3A] hover:bg-[#F1F4FA]/50">À propos</NuxtLink>
        <NuxtLink to="/#faq" class="text-[#526075] no-underline font-medium text-sm py-2 px-4 rounded-lg transition-colors duration-200 hover:text-[#0B1F3A] hover:bg-[#F1F4FA]/50">FAQ</NuxtLink>
        <NuxtLink to="/blog" class="text-[#526075] no-underline font-medium text-sm py-2 px-4 rounded-lg transition-colors duration-200 hover:text-[#0B1F3A] hover:bg-[#F1F4FA]/50">Blog</NuxtLink>
      </div>
      <NuxtLink to="/#inscription" class="inline-flex items-center justify-center h-9 px-3 md:px-6 text-xs md:text-sm font-medium text-white bg-[#0B1F3A] rounded-xl shadow-md transition-all duration-200 hover:bg-[#1a3a5c] hover:-translate-y-0.5 hover:shadow-lg whitespace-nowrap">
        <span class="hidden sm:inline">S'inscrire gratuitement</span>
        <span class="sm:hidden">S'inscrire</span>
      </NuxtLink>
    </nav>
  </header>
</template>
