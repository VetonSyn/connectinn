// ================================
// ABOUT US PAGE FUNCTIONALITY
// ================================

// Initialize Lucide icons
lucide.createIcons();

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// ================================
// HERO ANIMATION ON LOAD
// ================================

document.addEventListener('DOMContentLoaded', function() {
    // Animate "Who We Are" content from left
    gsap.fromTo(
        '.about-content-left',
        {
            opacity: 0,
            x: -50,
        },
        {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.about-content-left',
                start: 'top 80%',
                once: true,
            },
        }
    );

    // Animate right visual from right
    gsap.fromTo(
        '.about-content-right',
        {
            opacity: 0,
            x: 50,
        },
        {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.about-content-right',
                start: 'top 80%',
                once: true,
            },
        }
    );
});

// ================================
// SERVICE CARDS ANIMATION
// ================================

const serviceCards = document.querySelectorAll('.services-card');

serviceCards.forEach((card, index) => {
    gsap.fromTo(
        card,
        {
            opacity: 0,
            y: 30,
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.15,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                once: true,
            },
        }
    );

    // Hover lift effect
    card.addEventListener('mouseenter', function() {
        gsap.to(this, {
            y: -8,
            duration: 0.3,
            ease: 'power2.out',
        });
    });

    card.addEventListener('mouseleave', function() {
        gsap.to(this, {
            y: 0,
            duration: 0.3,
            ease: 'power2.out',
        });
    });
});

// ================================
// STATS COUNTER ANIMATION
// ================================

const statsCards = document.querySelectorAll('.stats-card');

statsCards.forEach((card) => {
    const numberElement = card.querySelector('.stat-number');

    if (numberElement) {
        gsap.fromTo(
            card,
            {
                opacity: 0,
                scale: 0.9,
            },
            {
                opacity: 1,
                scale: 1,
                duration: 0.6,
                ease: 'back.out',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    once: true,
                },
            }
        );
    }
});

// ================================
// CLIENT LOGO CARDS GRID ANIMATION
// ================================

const clientLogoCards = document.querySelectorAll('.client-logo-card');

clientLogoCards.forEach((card, index) => {
    // Calculate row and column for staggered animation
    const column = index % 5;
    const row = Math.floor(index / 5);

    // Stagger from top to bottom and left to right
    gsap.fromTo(
        card,
        {
            opacity: 0,
            y: -40,
            x: column * 10,
        },
        {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 0.6,
            delay: (row * 0.1) + (column * 0.05),
            ease: 'power2.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                once: true,
            },
        }
    );

    // Hover animation - lift and enhance shadow
    card.addEventListener('mouseenter', function() {
        gsap.to(this, {
            y: -8,
            duration: 0.3,
            ease: 'power2.out',
        });
    });

    card.addEventListener('mouseleave', function() {
        gsap.to(this, {
            y: 0,
            duration: 0.3,
            ease: 'power2.out',
        });
    });
});

// ================================
// SCROLL PARALLAX EFFECTS
// ================================

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');

    if (window.scrollY > 50) {
        navbar.classList.remove('bg-white/0');
        navbar.classList.add('bg-white/95', 'backdrop-blur', 'shadow-sm');
    } else {
        navbar.classList.add('bg-white/0');
        navbar.classList.remove('bg-white/95', 'backdrop-blur', 'shadow-sm');
    }
});

// ================================
// ANIMATED TEXT ON SCROLL
// ================================

const headings = document.querySelectorAll('h3, h2');

headings.forEach((heading) => {
    gsap.fromTo(
        heading,
        {
            opacity: 0,
            y: 20,
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: heading,
                start: 'top 85%',
                once: true,
            },
        }
    );
});

console.log('About Us page loaded successfully!');
