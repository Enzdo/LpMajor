<script setup lang="ts">
useSeoMeta({
  title: 'Politique de Confidentialité | Major',
  description: 'Politique de confidentialité et protection des données personnelles de Major.',
  robots: 'noindex'
})
</script>

<template>
  <div class="min-h-screen bg-[#F6F7FB]">
    <header class="py-6 bg-white border-b border-[#E6EAF2]">
      <div class="w-full max-w-[1248px] mx-auto px-6">
        <a href="/" class="flex items-center gap-2 no-underline">
          <svg class="w-8 h-8" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 8L4 16L20 24L36 16L20 8Z" fill="#0B1F3A" />
            <path d="M10 19V28C10 28 14 32 20 32C26 32 30 28 30 28V19L20 24L10 19Z" fill="#0B1F3A" />
            <path d="M32 17V26" stroke="#D4A72C" stroke-width="2" stroke-linecap="round" />
            <circle cx="32" cy="28" r="2" fill="#D4A72C" />
          </svg>
          <span class="text-xl font-extrabold text-[#0B1F3A] uppercase">Major</span>
        </a>
      </div>
    </header>

    <main class="py-12 pb-20">
      <div class="w-full max-w-[800px] mx-auto px-6">
        <h1 class="text-4xl font-bold text-[#0B1F3A] mb-2">Politique de Confidentialité</h1>
        <p class="text-[#526075] text-sm mb-12">Dernière mise à jour : 15 janvier 2026</p>

        <section class="mb-10">
          <h2 class="text-xl font-bold text-[#0B1F3A] mb-4 pb-2 border-b-2 border-[#D4A72C]">1. Responsable du traitement</h2>
          <p class="text-[#0B1220] leading-relaxed mb-4">Le responsable du traitement des données personnelles est :</p>
          <ul class="list-disc ml-6 text-[#0B1220] space-y-2">
            <li><strong class="text-[#0B1F3A]">Raison sociale :</strong> Leadheure (Micro-entreprise)</li>
            <li><strong class="text-[#0B1F3A]">SIREN :</strong> 989 331 418</li>
            <li><strong class="text-[#0B1F3A]">Email :</strong> mysterieux.etudiant@gmail.com</li>
          </ul>
        </section>

        <section class="mb-10">
          <h2 class="text-xl font-bold text-[#0B1F3A] mb-4 pb-2 border-b-2 border-[#D4A72C]">2. Données collectées</h2>
          <p class="text-[#0B1220] leading-relaxed mb-4">Dans le cadre de l'utilisation du Site et du Service Major, nous collectons les données suivantes :</p>
          
          <h3 class="text-base font-bold text-[#0B1F3A] mt-6 mb-3">2.1 Données de pré-inscription</h3>
          <ul class="list-disc ml-6 text-[#0B1220] space-y-2 mb-4">
            <li>Prénom</li>
            <li>Adresse email</li>
            <li>Filière d'études</li>
          </ul>
          
          <h3 class="text-base font-bold text-[#0B1F3A] mt-6 mb-3">2.2 Données d'utilisation (à venir)</h3>
          <ul class="list-disc ml-6 text-[#0B1220] space-y-2">
            <li>Temps de révision</li>
            <li>Progression dans l'application</li>
            <li>Contenu des cours importés (pour génération de flashcards)</li>
          </ul>
        </section>

        <section class="mb-10">
          <h2 class="text-xl font-bold text-[#0B1F3A] mb-4 pb-2 border-b-2 border-[#D4A72C]">3. Finalités du traitement</h2>
          <p class="text-[#0B1220] leading-relaxed mb-4">Vos données personnelles sont collectées pour les finalités suivantes :</p>
          <ul class="list-disc ml-6 text-[#0B1220] space-y-2">
            <li><strong class="text-[#0B1F3A]">Gestion des pré-inscriptions :</strong> vous contacter lors du lancement de l'application</li>
            <li><strong class="text-[#0B1F3A]">Newsletter :</strong> vous envoyer des informations sur Major (avec votre consentement)</li>
            <li><strong class="text-[#0B1F3A]">Fourniture du Service :</strong> personnaliser votre expérience d'apprentissage</li>
            <li><strong class="text-[#0B1F3A]">Amélioration du Service :</strong> analyser l'utilisation pour améliorer nos fonctionnalités</li>
          </ul>
        </section>

        <section class="mb-10">
          <h2 class="text-xl font-bold text-[#0B1F3A] mb-4 pb-2 border-b-2 border-[#D4A72C]">4. Base légale du traitement</h2>
          <p class="text-[#0B1220] leading-relaxed mb-4">Le traitement de vos données personnelles repose sur :</p>
          <ul class="list-disc ml-6 text-[#0B1220] space-y-2">
            <li><strong class="text-[#0B1F3A]">Votre consentement</strong> (inscription à la newsletter, pré-inscription)</li>
            <li><strong class="text-[#0B1F3A]">L'exécution du contrat</strong> (fourniture du Service)</li>
            <li><strong class="text-[#0B1F3A]">L'intérêt légitime</strong> (amélioration du Service, sécurité)</li>
          </ul>
        </section>

        <section class="mb-10">
          <h2 class="text-xl font-bold text-[#0B1F3A] mb-4 pb-2 border-b-2 border-[#D4A72C]">5. Destinataires des données</h2>
          <p class="text-[#0B1220] leading-relaxed mb-4">Vos données personnelles peuvent être partagées avec :</p>
          <ul class="list-disc ml-6 text-[#0B1220] space-y-2 mb-4">
            <li><strong class="text-[#0B1F3A]">Google (Google Sheets) :</strong> stockage sécurisé des pré-inscriptions</li>
            <li><strong class="text-[#0B1F3A]">Vercel :</strong> hébergement du Site</li>
            <li><strong class="text-[#0B1F3A]">Fournisseurs d'IA :</strong> pour la génération de contenu (données anonymisées)</li>
          </ul>
          <p class="text-[#0B1220] leading-relaxed">Nous ne vendons jamais vos données personnelles à des tiers.</p>
        </section>

        <section class="mb-10">
          <h2 class="text-xl font-bold text-[#0B1F3A] mb-4 pb-2 border-b-2 border-[#D4A72C]">6. Transfert hors UE</h2>
          <p class="text-[#0B1220] leading-relaxed mb-4">Certains de nos sous-traitants (Google, Vercel) peuvent traiter vos données aux États-Unis. Ces transferts sont encadrés par :</p>
          <ul class="list-disc ml-6 text-[#0B1220] space-y-2">
            <li>Le Data Privacy Framework (DPF) UE-États-Unis</li>
            <li>Des clauses contractuelles types approuvées par la Commission européenne</li>
          </ul>
        </section>

        <section class="mb-10">
          <h2 class="text-xl font-bold text-[#0B1F3A] mb-4 pb-2 border-b-2 border-[#D4A72C]">7. Durée de conservation</h2>
          <p class="text-[#0B1220] leading-relaxed mb-4">Vos données sont conservées pendant :</p>
          <ul class="list-disc ml-6 text-[#0B1220] space-y-2">
            <li><strong class="text-[#0B1F3A]">Données de pré-inscription :</strong> jusqu'au lancement du Service, puis supprimées si vous ne créez pas de compte</li>
            <li><strong class="text-[#0B1F3A]">Données de compte :</strong> pendant la durée de votre utilisation du Service, puis 3 ans après votre dernière activité</li>
            <li><strong class="text-[#0B1F3A]">Données de facturation :</strong> 10 ans (obligation légale)</li>
          </ul>
        </section>

        <section class="mb-10">
          <h2 class="text-xl font-bold text-[#0B1F3A] mb-4 pb-2 border-b-2 border-[#D4A72C]">8. Vos droits</h2>
          <p class="text-[#0B1220] leading-relaxed mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
          <ul class="list-disc ml-6 text-[#0B1220] space-y-2 mb-4">
            <li><strong class="text-[#0B1F3A]">Droit d'accès :</strong> obtenir une copie de vos données</li>
            <li><strong class="text-[#0B1F3A]">Droit de rectification :</strong> corriger vos données inexactes</li>
            <li><strong class="text-[#0B1F3A]">Droit à l'effacement :</strong> demander la suppression de vos données</li>
            <li><strong class="text-[#0B1F3A]">Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
            <li><strong class="text-[#0B1F3A]">Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
            <li><strong class="text-[#0B1F3A]">Droit de retrait du consentement :</strong> retirer votre consentement à tout moment</li>
          </ul>
          <p class="text-[#0B1220] leading-relaxed mb-4">Pour exercer ces droits, contactez-nous à : <strong class="text-[#0B1F3A]">mysterieux.etudiant@gmail.com</strong></p>
          <p class="text-[#0B1220] leading-relaxed">En cas de litige, vous pouvez saisir la CNIL : <a href="https://www.cnil.fr" target="_blank" rel="noopener" class="text-[#D4A72C] underline hover:text-[#0B1F3A]">www.cnil.fr</a></p>
        </section>

        <section class="mb-10">
          <h2 class="text-xl font-bold text-[#0B1F3A] mb-4 pb-2 border-b-2 border-[#D4A72C]">9. Cookies</h2>
          <p class="text-[#0B1220] leading-relaxed mb-4">Actuellement, le Site n'utilise pas de cookies de tracking ou publicitaires.</p>
          <p class="text-[#0B1220] leading-relaxed">Seuls des cookies strictement nécessaires au fonctionnement du Site peuvent être utilisés (session, préférences). Ces cookies ne nécessitent pas votre consentement.</p>
        </section>

        <section class="mb-10">
          <h2 class="text-xl font-bold text-[#0B1F3A] mb-4 pb-2 border-b-2 border-[#D4A72C]">10. Sécurité</h2>
          <p class="text-[#0B1220] leading-relaxed mb-4">Nous mettons en œuvre des mesures techniques et organisationnelles pour protéger vos données :</p>
          <ul class="list-disc ml-6 text-[#0B1220] space-y-2">
            <li>Chiffrement HTTPS des communications</li>
            <li>Accès restreint aux données personnelles</li>
            <li>Hébergement chez des prestataires certifiés</li>
          </ul>
        </section>

        <section class="mb-10">
          <h2 class="text-xl font-bold text-[#0B1F3A] mb-4 pb-2 border-b-2 border-[#D4A72C]">11. Modification de la politique</h2>
          <p class="text-[#0B1220] leading-relaxed">Cette politique de confidentialité peut être modifiée à tout moment. En cas de modification substantielle, vous serez informé par email.</p>
        </section>

        <section class="mb-10">
          <h2 class="text-xl font-bold text-[#0B1F3A] mb-4 pb-2 border-b-2 border-[#D4A72C]">12. Contact</h2>
          <p class="text-[#0B1220] leading-relaxed mb-4">Pour toute question relative à la protection de vos données :</p>
          <p class="text-[#0B1220]"><strong class="text-[#0B1F3A]">Email :</strong> mysterieux.etudiant@gmail.com</p>
        </section>

        <div class="mt-12 pt-8 border-t border-[#E6EAF2]">
          <a href="/" class="inline-flex items-center px-6 py-3 bg-[#F1F4FA] text-[#0B1F3A] font-medium rounded-lg no-underline transition-all duration-200 hover:bg-[#E6EAF2]">
            ← Retour à l'accueil
          </a>
        </div>
      </div>
    </main>
  </div>
</template>
