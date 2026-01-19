/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.{vue,js,ts}',
        './pages/**/*.{vue,js,ts}',
        './app.vue',
        './error.vue'
    ],
    theme: {
        extend: {
            colors: {
                // Primary palette - Campus Modern
                primary: {
                    DEFAULT: '#0B1F3A',
                    light: '#1a3a5c'
                },
                accent: {
                    DEFAULT: '#D4A72C',
                    dark: '#B8941F'
                },
                // Background & Surfaces
                background: '#F6F7FB',
                foreground: '#0B1220',
                card: '#FFFFFF',
                secondary: '#F1F4FA',
                border: '#E6EAF2',
                // UI Colors
                success: '#16A34A',
                destructive: '#DC2626',
                muted: {
                    DEFAULT: '#F1F4FA',
                    foreground: '#526075'
                }
            },
            fontFamily: {
                sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif']
            },
            fontSize: {
                'hero': ['clamp(2.75rem, 7vw, 4.5rem)', { lineHeight: '1.1', fontWeight: '800', letterSpacing: '-0.02em' }],
                'section': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.2', fontWeight: '700' }]
            },
            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
                '30': '7.5rem'
            },
            maxWidth: {
                'container': '1248px'
            },
            borderRadius: {
                DEFAULT: '1rem',
                'sm': '0.75rem',
                'lg': '1rem',
                'xl': '1.5rem',
                '2xl': '2rem'
            },
            boxShadow: {
                'card': '0 1px 3px 0 rgba(0, 0, 0, 0.02)',
                'lg': '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                'xl': '0 10px 15px -3px rgba(0, 0, 0, 0.05)',
                'glow-gold': '0 0 20px -5px rgba(212, 167, 44, 0.5)'
            },
            transitionTimingFunction: {
                'spring': 'cubic-bezier(0.16, 1, 0.3, 1)'
            },
            animation: {
                'hero-fade-in': 'heroFadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'hero-badge': 'heroFadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.1s forwards',
                'hero-title': 'heroFadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards',
                'hero-subtitle': 'heroFadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards',
                'hero-cta': 'heroFadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s forwards',
                'banner-shimmer': 'bannerShimmer 3s ease-in-out infinite',
                'spin': 'spin 1s linear infinite',
                'pulse-success': 'successPulse 2s ease-in-out infinite',
                'btn-shine': 'btnShine 2s ease-in-out infinite'
            },
            keyframes: {
                heroFadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(40px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                },
                bannerShimmer: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' }
                },
                spin: {
                    from: { transform: 'rotate(0deg)' },
                    to: { transform: 'rotate(360deg)' }
                },
                successPulse: {
                    '0%, 100%': { boxShadow: '0 0 0 0 rgba(11, 31, 58, 0.3)' },
                    '50%': { boxShadow: '0 0 0 12px rgba(11, 31, 58, 0)' }
                },
                btnShine: {
                    '0%': { left: '-100%' },
                    '50%, 100%': { left: '100%' }
                }
            }
        }
    },
    plugins: []
}
