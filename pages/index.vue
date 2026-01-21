<script setup lang="ts">
// SEO
useSeoMeta({
  title: 'Major | D\'étudiant moyen à numéro 1',
  description: 'Major - L\'outil universitaire le plus puissant jamais créé. Pré-inscris-toi maintenant pour bénéficier d\'un tarif réduit à vie.',
  ogTitle: 'Major | D\'étudiant moyen à numéro 1',
  ogDescription: 'L\'app qui transforme tes révisions en jeu et te propulse dans le top 1%.',
  ogImage: '/og-image.png',
  twitterCard: 'summary_large_image'
})

// Composables
const showExitPopup = ref(false)
const formSubmitted = ref(false)
const isSubmitting = ref(false)
const counterValue = ref(0)
const formStep = ref(1) // 1 = email, 2 = details

// Animated stats
const statHours = ref(0)
const statMinutes = ref(0)
const statPercent = ref(0)
const statsAnimated = ref(false)

// Form data
const formData = reactive({
  prenom: '',
  email: '',
  filiere: ''
})

// FAQ state
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
    answer: "Oui ! L'essentiel de Major est 100% gratuit. Tu peux réviser, créer des flashcards et suivre ta progression sans rien payer. Quelques fonctionnalités premium optionnelles existent pour les plus ambitieux. Elles permettent de financer le développement et de garder l'app accessible à tous."
  },
  {
    question: "L'app est disponible sur quels appareils ?",
    answer: "Major sera disponible sur web, iOS et Android. Tu pourras réviser n'importe où, n'importe quand, et ta progression sera synchronisée sur tous tes appareils."
  }
]

// Counter - Base count + localStorage increment
const BASE_COUNT = 127
const counterTarget = ref(BASE_COUNT)

// Load saved count from localStorage on mount
function initCounter() {
  if (typeof window !== 'undefined') {
    const savedCount = localStorage.getItem('majorSignupCount')
    if (savedCount) {
      counterTarget.value = BASE_COUNT + parseInt(savedCount)
    }
  }
}

// Increment counter after successful signup
function incrementCounter() {
  if (typeof window !== 'undefined') {
    const currentExtra = parseInt(localStorage.getItem('majorSignupCount') || '0')
    const newExtra = currentExtra + 1
    localStorage.setItem('majorSignupCount', newExtra.toString())
    counterTarget.value = BASE_COUNT + newExtra
    // Animate the increment
    animateCounterIncrement()
  }
}

function animateCounterIncrement() {
  const oldValue = counterValue.value
  const newValue = counterTarget.value
  const duration = 800
  const startTime = performance.now()
  
  function update(currentTime: number) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const easeOut = 1 - Math.pow(1 - progress, 3)
    counterValue.value = Math.floor(oldValue + (newValue - oldValue) * easeOut)
    
    if (progress < 1) {
      requestAnimationFrame(update)
    }
  }
  
  requestAnimationFrame(update)
}

onMounted(() => {
  // Load counter from localStorage
  initCounter()
  
  // Init reveal animations
  initRevealAnimations()
  
  // Init counter animation
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter()
        counterObserver.unobserve(entry.target)
      }
    })
  }, { threshold: 0.5 })
  
  const counterEl = document.querySelector('.counter-value')
  if (counterEl) counterObserver.observe(counterEl)
  
  // Init stats animation
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !statsAnimated.value) {
        statsAnimated.value = true
        animateStats()
        statsObserver.unobserve(entry.target)
      }
    })
  }, { threshold: 0.3 })
  
  const statsEl = document.querySelector('.stats')
  if (statsEl) statsObserver.observe(statsEl)
  
  // Init exit intent
  initExitIntent()
})

function animateStats() {
  const duration = 1500
  const startTime = performance.now()
  const targets = { hours: 5, minutes: 2, percent: 1 }
  
  function update(currentTime: number) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const easeOut = 1 - Math.pow(1 - progress, 3)
    
    statHours.value = Math.floor(targets.hours * easeOut)
    statMinutes.value = Math.floor(targets.minutes * easeOut)
    statPercent.value = Math.floor(targets.percent * easeOut)
    
    if (progress < 1) {
      requestAnimationFrame(update)
    } else {
      // Ensure final values
      statHours.value = targets.hours
      statMinutes.value = targets.minutes
      statPercent.value = targets.percent
    }
  }
  
  requestAnimationFrame(update)
}

function initRevealAnimations() {
  const revealElements = document.querySelectorAll('.reveal')
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible')
        }, index * 100)
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1 })
  
  revealElements.forEach(el => observer.observe(el))
  
  // Chart animation
  const chartAnimation = document.querySelector('.chart-animation')
  if (chartAnimation) {
    const chartObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated')
          chartObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.3 })
    chartObserver.observe(chartAnimation)
  }
  
  // Leaderboard animation
  const leaderboardAnimation = document.querySelector('.leaderboard-animation')
  if (leaderboardAnimation) {
    const leaderboardObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated')
          leaderboardObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.3 })
    leaderboardObserver.observe(leaderboardAnimation)
  }
}

function animateCounter() {
  const duration = 1500
  const startTime = performance.now()
  const target = counterTarget.value
  
  function update(currentTime: number) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const easeOut = 1 - Math.pow(1 - progress, 3)
    counterValue.value = Math.floor(target * easeOut)
    
    if (progress < 1) {
      requestAnimationFrame(update)
    }
  }
  
  requestAnimationFrame(update)
}

function initExitIntent() {
  const STORAGE_KEY = 'major_exit_popup_shown'
  const MIN_TIME_ON_PAGE = 3000 // 3 secondes minimum sur la page
  const pageLoadTime = Date.now()
  
  // Ne pas afficher si déjà montré cette session
  if (sessionStorage.getItem(STORAGE_KEY)) return
  
  // Affiche le popup uniquement quand la souris quitte vers le haut (intention de fermer)
  document.addEventListener('mouseout', (e) => {
    // Vérifie que la souris sort par le haut de la fenêtre
    if (e.clientY <= 0 && e.relatedTarget === null) {
      // Vérifie que l'utilisateur a passé un minimum de temps sur la page
      if (showExitPopup.value) return
      if (Date.now() - pageLoadTime < MIN_TIME_ON_PAGE) return
      
      showExitPopup.value = true
      sessionStorage.setItem(STORAGE_KEY, 'true')
    }
  })
}


function toggleFaq(index: number) {
  activeFaq.value = activeFaq.value === index ? null : index
}

function closeExitPopup() {
  showExitPopup.value = false
}

function goToStep2() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (emailRegex.test(formData.email)) {
    formStep.value = 2
  }
}

async function submitForm() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  
  if (!formData.prenom || formData.prenom.length < 2) {
    showToast('Veuillez entrer un prénom valide', 'error')
    return
  }
  
  if (!emailRegex.test(formData.email)) {
    showToast('Veuillez entrer une adresse email valide', 'error')
    return
  }
  
  if (!formData.filiere || formData.filiere.length < 2) {
    showToast("Veuillez entrer votre filière d'études", 'error')
    return
  }
  
  // Submit to Google Sheets
  const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbyrjQePbsm-VyxG2BWej406M8yu7nysCFM-H8EaOy8Rj70DDCf8e5U0AbukhJXP5Jkzmw/exec'
  
  isSubmitting.value = true
  
  try {
    await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        timestamp: new Date().toISOString()
      })
    })
    
    // Save to localStorage as backup
    const existing = JSON.parse(localStorage.getItem('majorInscriptions') || '[]')
    existing.push({ ...formData, timestamp: new Date().toISOString() })
    localStorage.setItem('majorInscriptions', JSON.stringify(existing))
    
    // Increment the visible counter
    incrementCounter()
    
    formSubmitted.value = true
  } catch (error) {
    console.error('Error:', error)
    formSubmitted.value = true
  } finally {
    isSubmitting.value = false
  }
}

function showToast(message: string, type: 'info' | 'error' = 'info') {
  const toast = document.createElement('div')
  toast.textContent = message
  toast.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: ${type === 'error' ? '#EF4444' : '#10B981'};
    color: white;
    padding: 12px 24px;
    border-radius: 12px;
    font-weight: 500;
    z-index: 9999;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  `
  document.body.appendChild(toast)
  setTimeout(() => toast.remove(), 3000)
}
</script>

<template>
  <main class="home-page">
    <!-- Hero Section -->
    <section class="hero">
      <!-- Floating Icons -->
      <div class="floating-icons">
        <div class="floating-icon icon-1">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" stroke-width="1.5"
            stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
            <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
          </svg>
        </div>
        <div class="floating-icon icon-2">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4A72C" stroke-width="1.5"
            stroke-linecap="round" stroke-linejoin="round">
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
            </polygon>
          </svg>
        </div>
        <div class="floating-icon icon-3">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4A72C" stroke-width="1.5"
            stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="20" x2="18" y2="10"></line>
            <line x1="12" y1="20" x2="12" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="14"></line>
          </svg>
        </div>
        <div class="floating-icon icon-4">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" stroke-width="1.5"
            stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5C7 4 7 7 7 7"></path>
            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5C17 4 17 7 17 7"></path>
            <path d="M4 22h16"></path>
            <path d="M10 22V8a2 2 0 0 1 4 0v14"></path>
          </svg>
        </div>
      </div>

      <div class="container">
        <div class="hero-content">
          <!-- Social Proof Badge -->
          <div class="hero-badge">
            <div class="badge-avatars">
              <img src="/avatar_badge_1.png" alt="Étudiant" class="avatar-img">
              <img src="/avatar_badge_2.png" alt="Étudiant" class="avatar-img">
              <img src="/avatar_badge_3.png" alt="Étudiant" class="avatar-img">
            </div>
            <span class="badge-counter">+<span class="counter-value">{{ counterValue }}</span>/200 places réservées</span>
          </div>

          <h1 class="hero-title">
            D'étudiant Moyen à<br>
            <span class="highlight-navy">Numéro 1</span>
          </h1>

          <p class="hero-subtitle">
            L'app qui transforme tes révisions en jeu et te propulse dans le top 1%.
          </p>

          <!-- Progress Bar -->
          <div class="hero-progress">
            <div class="progress-bar">
              <div class="progress-fill" :style="{ width: Math.min((counterValue / 200) * 100, 100) + '%' }"></div>
            </div>
            <span class="progress-label">🔥 Plus que {{ 200 - counterValue }} places au tarif réduit à vie</span>
          </div>

          <div class="hero-cta">
            <a href="#inscription" class="btn btn-primary btn-lg btn-glow">
              Réserver ma place GRATUITE →
            </a>
            <span class="hero-cta-note">✓ Sans carte bancaire • Accès immédiat</span>
          </div>
        </div>

        <!-- Dashboard Preview -->
        <div class="dashboard-preview-container reveal">
          <div class="dashboard-ui">
            <!-- Dash Header -->
            <div class="dash-header">
              <div class="dash-logo">
                <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 8L4 16L20 24L36 16L20 8Z" fill="#0B1F3A" />
                  <path d="M10 19V28C10 28 14 32 20 32C26 32 30 28 30 28V19L20 24L10 19Z" fill="#0B1F3A" />
                  <path d="M32 17V26" stroke="#D4A72C" stroke-width="2" stroke-linecap="round" />
                  <circle cx="32" cy="28" r="2" fill="#D4A72C" />
                </svg>
                MAJOR
              </div>
              <div class="dash-nav">
                <span class="dash-nav-item active">Tableau de bord</span>
                <span class="dash-nav-item">Révisions</span>
                <span class="dash-nav-item">Classement</span>
              </div>
              <div class="dash-actions">
                <div class="dash-objective">OBJECTIF 15H</div>
                <button class="dash-btn-start">
                  <span>▶</span> Démarrer
                </button>
                <img src="/avatar_user.png" alt="Profil" class="dash-user-img">
              </div>
            </div>

            <!-- Dash Body -->
            <div class="dash-body">
              <div class="dash-headup">
                <h2 class="dash-title">Tableau de bord</h2>
                <p class="dash-subtitle">Tu es à 84% de ton objectif hebdo • <strong>Plus que 2h15</strong>
                  <a href="#">Ajuster ↗</a>
                </p>
              </div>

              <!-- Stats Grid -->
              <div class="dash-grid">
                <!-- Card 1 -->
                <div class="dash-card">
                  <div class="dash-card-header">
                    <span class="dash-card-title">TEMPS DE TRAVAIL (7J)</span>
                    <span class="dash-card-icon">⏱️</span>
                  </div>
                  <div class="dash-value-group">
                    <span class="dash-value">12h 45</span>
                    <span class="dash-badge green">+19%</span>
                  </div>
                  <div class="dash-progress">
                    <span>PROGRESSION HEBDO</span>
                    <span>84%</span>
                  </div>
                  <div class="dash-bar" style="margin-top: 8px;">
                    <div class="dash-bar-fill" style="width: 84%;"></div>
                  </div>
                </div>

                <!-- Card 2 -->
                <div class="dash-card">
                  <div class="dash-card-header">
                    <span class="dash-card-title" style="color:#F59E0B">SÉRIE</span>
                    <span class="dash-card-icon" style="color:#F59E0B">📈</span>
                  </div>
                  <div class="dash-value-group">
                    <span class="dash-value">4 Jours</span>
                  </div>
                  <div style="font-size: 0.875rem; color: #64748B; margin-bottom: 12px;">
                    Record: <strong>12 Jours</strong>
                  </div>
                  <div class="dash-fire-alert">
                    <span>🔥</span> 1 session aujourd'hui pour continuer
                  </div>
                </div>

                <!-- Card 3 -->
                <div class="dash-card">
                  <div class="dash-card-header">
                    <span class="dash-card-title">CLASSEMENT</span>
                    <span class="dash-card-icon">🏆</span>
                  </div>
                  <div class="dash-value-group">
                    <span class="dash-value">#42</span>
                    <span class="dash-badge outline">EXCELLENT</span>
                  </div>
                  <div style="font-size: 0.875rem; color: #64748B;">
                    Top 0,6% des utilisateurs
                  </div>
                </div>
              </div>

              <!-- Plan du jour -->
              <div class="dash-section">
                <h3 class="dash-section-title">Plan du jour</h3>
                <p class="dash-section-subtitle">Régularité > intensité.</p>
                <div class="dash-plan-row">
                  <div class="dash-tasks">
                    <div class="dash-task">
                      <div class="task-dot grey"></div>
                      <div class="task-info">
                        <h4>Droit Civil</h4>
                        <p>Fiches • 45 min</p>
                      </div>
                    </div>
                    <div class="dash-task">
                      <div class="task-dot grey" style="background: #E2E8F0;"></div>
                      <div class="task-info">
                        <h4>Anglais</h4>
                        <p>Quiz • 15 min</p>
                      </div>
                    </div>
                  </div>
                  <div class="dash-plan-actions">
                    <button class="btn-dash primary">
                      <span>▶</span> Lancer la session
                    </button>
                    <button class="btn-dash secondary">
                      ✎ Modifier
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-bg"></div>
    </section>

    <!-- Stats Section -->
    <section class="stats" ref="statsSection">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item reveal">
            <span class="stat-number">+{{ statHours }}h</span>
            <span class="stat-label">gagnées par semaine</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item reveal">
            <span class="stat-number">{{ statMinutes }}min</span>
            <span class="stat-label">pour créer tes flashcards</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item reveal">
            <span class="stat-number">{{ statPercent }}%</span>
            <span class="stat-label">des étudiants d'élite</span>
          </div>
        </div>
        <div class="stats-cta">
          <a href="#features" class="btn-link">En savoir plus ↓</a>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
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
              <img src="/avatar_badge_1.png" alt="Clara M." class="testimonial-avatar">
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
              <img src="/avatar_badge_2.png" alt="Thomas D." class="testimonial-avatar">
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
              <img src="/avatar_badge_3.png" alt="Emma L." class="testimonial-avatar">
              <div class="testimonial-info">
                <span class="testimonial-name">Emma L.</span>
                <span class="testimonial-role">École de commerce · Toulouse</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features" id="features">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-badge">Notre système</span>
          <h2 class="section-title">La technologie derrière Major</h2>
        </div>

        <div class="features-grid-vertical">
          <!-- Feature 1: Sciences cognitives -->
          <div class="feature-card-horizontal reveal">
            <div class="feature-content">
              <div class="feature-icon-badge">🧠</div>
              <h3>Applique les sciences cognitives à tes révisions et suis ta progression</h3>
              <p>Connais ton efficience avec l'indice de productivité et analyse en direct tes capacités.
                Notre algorithme te dit exactement quoi réviser et quand.</p>
            </div>
            <div class="feature-visual-tech">
              <div class="tech-animation chart-animation">
                <PerformanceChart />
              </div>
            </div>
          </div>

          <!-- Feature 2: IA -->
          <div class="feature-card-horizontal reverse reveal">
            <div class="feature-content">
              <div class="feature-icon-badge">🤖</div>
              <h3>Fiche automatiquement tes cours grâce à l'IA la plus performante du marché</h3>
              <p>Pendant que d'autres passent des heures à stabiloter, tu peux instantanément commencer tes
                révisions. Importe ton cours, Major fait le reste.</p>
            </div>
            <div class="feature-visual-tech">
              <div class="tech-animation ai-animation-v2">
                <!-- Document source -->
                <div class="ai-source">
                  <div class="ai-doc-premium">
                    <div class="doc-header"></div>
                    <div class="doc-lines">
                      <span></span><span></span><span></span><span></span><span></span>
                    </div>
                  </div>
                  <span class="ai-label">Ton cours</span>
                </div>

                <!-- Flèche animée -->
                <div class="ai-process">
                  <div class="ai-spark">✨</div>
                  <svg class="ai-arrow-svg" width="60" height="30" viewBox="0 0 60 30">
                    <path d="M0 15H50M50 15L40 5M50 15L40 25" stroke="#D4A72C" stroke-width="3"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <span class="ai-magic-text">IA</span>
                </div>

                <!-- Flashcards résultat -->
                <div class="ai-result">
                  <div class="ai-flashcards">
                    <div class="flashcard fc-1">Q</div>
                    <div class="flashcard fc-2">Q</div>
                    <div class="flashcard fc-3">Q</div>
                  </div>
                  <span class="ai-label">Flashcards</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Feature 3: Tracking -->
          <div class="feature-card-horizontal reveal">
            <div class="feature-content">
              <div class="feature-icon-badge">📊</div>
              <h3>Ne travaille plus dans l'ombre</h3>
              <p>Suis ta progression en temps réel et prouve que tu es le/la meilleur(e) avec une approche
                pensée pour les compétiteurs.</p>
            </div>
            <div class="feature-visual-tech">
              <div class="tech-animation leaderboard-animation">
                <div class="leaderboard-card">
                  <div class="leaderboard-header">
                    <span class="leaderboard-title">Classement mondial</span>
                    <span class="leaderboard-subtitle">CETTE SEMAINE</span>
                  </div>
                  <div class="leaderboard-list">
                    <div class="leaderboard-item rank-1">
                      <span class="rank-badge gold">🥇</span>
                      <img src="/avatar_marie.png" alt="Marie L." class="rank-avatar-img">
                      <div class="rank-info">
                        <span class="rank-name">Marie L.</span>
                        <span class="rank-stats">34h 15min</span>
                      </div>
                      <span class="rank-trend up">+2 ↑</span>
                    </div>
                    <div class="leaderboard-item rank-2">
                      <span class="rank-badge silver">🥈</span>
                      <img src="/avatar_thomas.png" alt="Cyber_Tom" class="rank-avatar-img">
                      <div class="rank-info">
                        <span class="rank-name">Cyber_Tom</span>
                        <span class="rank-stats">31h 40min</span>
                      </div>
                      <span class="rank-trend up">+5 ↑</span>
                    </div>
                    <div class="leaderboard-item rank-3 highlight">
                      <span class="rank-badge bronze">🥉</span>
                      <img src="/avatar_user.png" alt="Toi" class="rank-avatar-img you">
                      <div class="rank-info">
                        <span class="rank-name">Toi</span>
                        <span class="rank-stats">28h 55min</span>
                      </div>
                      <span class="rank-trend same">= 0</span>
                    </div>
                    <div class="leaderboard-item rank-4">
                      <span class="rank-number">4</span>
                      <img src="/avatar_profile_new.png" alt="Manon S." class="rank-avatar-img">
                      <div class="rank-info">
                        <span class="rank-name">Manon S.</span>
                        <span class="rank-stats">24h 30min</span>
                      </div>
                      <span class="rank-trend down">-3 ↓</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Target Audience Section -->
    <section class="target">
      <div class="container">
        <div class="target-content reveal">
          <span class="section-badge badge-dark">Pour qui ?</span>
          <h2 class="target-title">Major n'est pas pour tout le monde.</h2>
          <p class="target-subtitle">L'outil est spécialement conçu pour les étudiants qui veulent passer au
            niveau supérieur et dominer leur cursus.</p>

          <div class="target-comparison">
            <div class="comparison-column bad">
              <h4>99% des étudiants</h4>
              <ul>
                <li>😵‍💫 Révisent au hasard, sans stratégie</li>
                <li>😩 Travaillent 10h pour retenir 2h</li>
                <li>😫 Abandonnent face à la surcharge</li>
                <li>😔 Stagnent pendant que d'autres progressent</li>
              </ul>
            </div>
            <div class="comparison-column good">
              <h4>Étudiants Major (1%)</h4>
              <ul>
                <li>🧠 Révisent intelligemment, au bon moment</li>
                <li>⚡ Mémorisent 3x plus en 2x moins de temps</li>
                <li>🎮 Restent motivés grâce à la gamification</li>
                <li>🚀 Grimpent dans les classements chaque semaine</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about" id="about">
      <div class="container">
        <div class="about-content about-storytelling reveal">
          <div class="about-photo">
            <img src="/louis-photo.jpg" alt="Louis - Créateur de Major" class="founder-photo">
            <div class="photo-caption">
              <span class="founder-name">Louis, 24 ans</span>
              <span class="founder-alias">@Mystérieux Étudiant</span>
            </div>
          </div>
          <div class="about-story">
            <span class="section-badge">Mon histoire</span>
            <h2 class="about-title">D'élève moyen à major de promo.</h2>
            <p class="about-lead">Au lycée, j'avais 11 de moyenne. Le proviseur disait que je n'arriverais
              jamais dans la filière que j'avais demandée. <strong>Il avait presque raison.</strong></p>
            <p>Ce déclic a tout changé. J'ai compris que quand on a des ambitions, il faut y mettre les
              moyens. Alors j'ai travaillé, expérimenté, optimisé. Aujourd'hui, je majore mes études dans un
              domaine ultra-concurrentiel.</p>
            <p>Mais je n'y suis pas arrivé sans accroc, j'ai fait énormément d'erreurs.</p>
            <p class="about-mission">C'est pour cela que j'ai voulu créer l'outil que j'aurai rêvé avoir dès le
              départ destiné à ceux qui veulent sortir du lot mais qui ne savent pas par où commencer.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq" id="faq">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-badge">FAQ</span>
          <h2 class="section-title">Les questions fréquentes</h2>
        </div>

        <div class="faq-list reveal">
          <div v-for="(item, index) in faqItems" :key="index" class="faq-item" :class="{ active: activeFaq === index }">
            <button class="faq-question" @click="toggleFaq(index)">
              <span>{{ item.question }}</span>
              <span class="faq-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="4 6 8 10 12 6"></polyline>
                </svg>
              </span>
            </button>
            <div class="faq-answer">
              <p>{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA Section -->
    <section class="final-cta" id="inscription">
      <div class="container">
        <div class="cta-content reveal">
          <h2 class="cta-title font-black">Rejoins les 1% qui font le choix de l'excellence</h2>
          <p class="cta-subtitle">Le prochain major, c'est toi.</p>

          <form v-if="!formSubmitted" id="inscriptionForm" class="inscription-form" @submit.prevent="submitForm">
            <!-- Step 1: Email only -->
            <div v-if="formStep === 1" class="form-step">
              <div class="form-group">
                <input v-model="formData.email" type="email" id="email" name="email"
                  placeholder="Ton adresse email" required class="input-large">
              </div>
              <button type="button" class="btn btn-primary btn-lg btn-full btn-glow" @click="goToStep2" :disabled="!formData.email">
                🚀 Réserver ma place maintenant
              </button>
            </div>
            
            <!-- Step 2: Details -->
            <div v-else class="form-step">
              <div class="step-indicator">
                <span class="step-back" @click="formStep = 1">← Retour</span>
                <span class="step-progress">Étape 2/2</span>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <input v-model="formData.prenom" type="text" id="prenom" name="prenom" placeholder="Ton prénom"
                    required>
                </div>
                <div class="form-group">
                  <input v-model="formData.filiere" type="text" id="filiere" name="filiere"
                    placeholder="Ta filière (ex: Médecine, Droit...)" required>
                </div>
              </div>
              <button type="submit" class="btn btn-primary btn-lg btn-full btn-glow" :disabled="isSubmitting">
                <span v-if="isSubmitting" class="btn-loading">
                  <svg class="spinner" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10" stroke-opacity="0.25"/>
                    <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"/>
                  </svg>
                  Envoi en cours...
                </span>
                <span v-else>✅ Confirmer mon inscription</span>
              </button>
            </div>
            
            <!-- Garanties -->
            <div class="form-guarantees">
              <span class="guarantee">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7" stroke="#10B981" stroke-width="2"/>
                  <path d="M5 8L7 10L11 6" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                100% gratuit
              </span>
              <span class="guarantee">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7" stroke="#10B981" stroke-width="2"/>
                  <path d="M5 8L7 10L11 6" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Sans carte bancaire
              </span>
              <span class="guarantee">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="5" y="7" width="6" height="6" rx="1" stroke="#3B82F6" stroke-width="1.5"/>
                  <path d="M6 7V5C6 3.89543 6.89543 3 8 3C9.10457 3 10 3.89543 10 5V7" stroke="#3B82F6" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
                RGPD
              </span>
            </div>
          </form>

          <div v-else class="success-message">
            <div class="success-badge">
              <svg class="success-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M8 12l2.5 2.5L16 9" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3>Demande envoyée</h3>
            <p class="success-main">Nous allons étudier ton profil afin de vérifier si tu es éligible à rejoindre <strong>Major</strong>.</p>
            <div class="success-steps">
              <div class="step">
                <span class="step-number">1</span>
                <span class="step-text">Analyse de ton profil</span>
                <span class="step-status active">En cours...</span>
              </div>
              <div class="step">
                <span class="step-number">2</span>
                <span class="step-text">Vérification d'éligibilité</span>
                <span class="step-status">À venir</span>
              </div>
              <div class="step">
                <span class="step-number">3</span>
                <span class="step-text">Réponse par email</span>
                <span class="step-status">~20min</span>
              </div>
            </div>
            <p class="success-note">📧 Vérifie ta boîte mail (et tes spams) dans les prochaines minutes.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Sticky CTA Mobile -->
    <div class="sticky-cta-mobile">
      <a href="#inscription" class="btn btn-primary btn-lg">🚀 Réserver ma place</a>
    </div>

    <!-- Exit Intent Popup -->
    <Teleport to="body">
      <div v-if="showExitPopup" class="exit-popup-overlay active" @click.self="closeExitPopup">
        <div class="exit-popup">
          <button class="exit-popup-close" @click="closeExitPopup" aria-label="Fermer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <div class="exit-popup-content">
            <div class="exit-popup-badge">⏸️ Minute...</div>
            <h2 class="exit-popup-title">Tu voulais vraiment exceller, non ?</h2>
            <p class="exit-popup-subtitle">Si tu quittes cette page maintenant, tu ne reverras plus jamais cette offre.</p>

            <div class="exit-popup-benefits">
              <div class="exit-benefit">
                <span class="benefit-icon">✓</span>
                <span>Les techniques des major de promo</span>
              </div>
              <div class="exit-benefit">
                <span class="benefit-icon">✓</span>
                <span>Un plan d'action concret</span>
              </div>
              <div class="exit-benefit">
                <span class="benefit-icon">✓</span>
                <span>BONUS : Code promo -50% sur Major+</span>
              </div>
            </div>

            <p class="exit-popup-description">
              Reçois <strong>GRATUITEMENT</strong> notre guide PDF exclusif :<br>
              <strong>"5 méthodes scientifiques pour mémoriser 2x plus vite"</strong>
            </p>

            <p class="exit-popup-footer">
              Tu es à 30 secondes de transformer tes révisions.
            </p>

            <a href="#inscription" class="btn btn-primary btn-lg exit-popup-cta" @click="closeExitPopup">
              Oui, j'accède au guide + code promo
            </a>


            <button class="exit-popup-dismiss" @click="closeExitPopup">
              Non merci, je préfère réviser seul
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </main>
</template>
