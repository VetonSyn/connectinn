// ================================
// CONTACT PAGE FUNCTIONALITY
// ================================

// Initialize Lucide icons
lucide.createIcons();

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// ================================
// SUPPORT CARDS ANIMATION
// ================================

document.addEventListener('DOMContentLoaded', function() {
    const supportCards = document.querySelectorAll('.support-card');

    supportCards.forEach((card, index) => {
        gsap.fromTo(
            card,
            {
                opacity: 0,
                y: 40,
                x: index === 0 ? -30 : 30,
            },
            {
                opacity: 1,
                y: 0,
                x: 0,
                duration: 0.8,
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
                y: -12,
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
});

// ================================
// CONTACT FORM ANIMATION
// ================================

const formGroups = document.querySelectorAll('.form-group');

formGroups.forEach((group, index) => {
    gsap.fromTo(
        group,
        {
            opacity: 0,
            y: 20,
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: group,
                start: 'top 90%',
                once: true,
            },
        }
    );

    // Input focus animation
    const input = group.querySelector('input, textarea');
    if (input) {
        input.addEventListener('focus', function() {
            gsap.to(this, {
                boxShadow: '0 0 0 3px rgba(29, 58, 138, 0.1)',
                duration: 0.2,
                ease: 'power2.out',
            });
        });

        input.addEventListener('blur', function() {
            gsap.to(this, {
                boxShadow: '0 0 0 0px rgba(29, 58, 138, 0.1)',
                duration: 0.2,
                ease: 'power2.out',
            });
        });
    }
});

// ================================
// SUBMIT BUTTON ANIMATION
// ================================

const submitBtn = document.querySelector('.contact-submit-btn');
if (submitBtn) {
    submitBtn.addEventListener('click', function(e) {
        // Prevent default form submission for animation demo
        e.preventDefault();

        // Button click animation
        gsap.to(this, {
            scale: 0.98,
            duration: 0.1,
            ease: 'power2.inOut',
            onComplete: () => {
                gsap.to(this, {
                    scale: 1,
                    duration: 0.1,
                    ease: 'power2.inOut',
                });
            },
        });

        // Success feedback
        const originalText = this.textContent;
        this.textContent = 'Bericht verzonden! ✓';
        this.style.backgroundColor = '#059669';

        setTimeout(() => {
            this.textContent = originalText;
            this.style.backgroundColor = '';
        }, 2000);
    });
}

// ================================
// CONTACT INFO CARDS ANIMATION
// ================================

const contactInfoCards = document.querySelectorAll('.contact-info-wrapper .bg-white');

contactInfoCards.forEach((card, index) => {
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
            delay: 0.2 + (index * 0.1),
            ease: 'power2.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                once: true,
            },
        }
    );

    // Hover effect
    card.addEventListener('mouseenter', function() {
        gsap.to(this, {
            borderColor: 'rgb(29, 58, 138)',
            boxShadow: '0 10px 30px -10px rgba(29, 58, 138, 0.1)',
            duration: 0.3,
            ease: 'power2.out',
        });
    });

    card.addEventListener('mouseleave', function() {
        gsap.to(this, {
            borderColor: 'rgb(226, 232, 240)',
            boxShadow: '0 0px 0px 0px rgba(0, 0, 0, 0)',
            duration: 0.3,
            ease: 'power2.out',
        });
    });
});

// ================================
// CONTACT MAP ANIMATION
// ================================

const contactMap = document.querySelector('.contact-map');
if (contactMap) {
    gsap.fromTo(
        contactMap,
        {
            opacity: 0,
            scale: 0.95,
        },
        {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: contactMap,
                start: 'top 85%',
                once: true,
            },
        }
    );
}

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

const headings = document.querySelectorAll('h2, h3');

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

console.log('Contact page loaded successfully!');
