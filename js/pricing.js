// ================================
// PRICING PAGE FUNCTIONALITY
// ================================

// Initialize Lucide icons
lucide.createIcons();

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// ================================
// PRICING TAB SWITCHING
// ================================

document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.pricing-tab-btn');
    const pricingContents = document.querySelectorAll('.pricing-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');

            // Remove active state from all buttons
            tabButtons.forEach(btn => {
                btn.classList.remove('bg-slate-900', 'text-white');
                btn.classList.add('text-slate-600');
            });

            // Add active state to clicked button
            this.classList.add('bg-slate-900', 'text-white');
            this.classList.remove('text-slate-600');

            // Hide all pricing contents
            pricingContents.forEach(content => {
                content.classList.add('hidden');
            });

            // Show selected tab content
            const selectedContent = document.getElementById(`${targetTab}-plans`);
            if (selectedContent) {
                selectedContent.classList.remove('hidden');

                // Animate cards coming in
                animatePricingCards(selectedContent);
            }
        });
    });

    // Animate initial cards
    animatePricingCards(document.getElementById('bedrijven-plans'));
});

// ================================
// PRICING CARDS ANIMATION
// ================================

function animatePricingCards(container) {
    const cards = container.querySelectorAll('.pricing-card');

    // Reset and animate each card
    gsap.fromTo(
        cards,
        {
            opacity: 0,
            y: 30,
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power2.out',
        }
    );
}

// ================================
// SCROLL ANIMATIONS FOR CONSULTATION BLOCK
// ================================

const consultationBlock = document.getElementById('consultation-block');

if (consultationBlock) {
    gsap.fromTo(
        consultationBlock,
        {
            opacity: 0,
            y: 40,
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: consultationBlock,
                start: 'top 80%',
                end: 'top 50%',
                scrub: false,
                once: true,
            },
        }
    );

    // Animate consultation cards on scroll
    const consultationCards = consultationBlock.querySelectorAll('.consultation-card');
    gsap.fromTo(
        consultationCards,
        {
            opacity: 0,
            x: (index) => (index === 0 ? -30 : 30),
        },
        {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: consultationBlock,
                start: 'top 80%',
                once: true,
            },
        }
    );
}

// ================================
// HOVER EFFECTS FOR PRICING CARDS
// ================================

const pricingCards = document.querySelectorAll('.pricing-card');

pricingCards.forEach(card => {
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
// CONSULTATION BUTTON INTERACTIONS
// ================================

const consultationButtons = document.querySelectorAll('.consultation-card button');

consultationButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';

        gsap.to(this, {
            scale: 0.98,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
        });

        // Show confirmation feedback
        const originalText = this.textContent;
        this.textContent = 'Geboekt! ✓';
        this.style.pointerEvents = 'none';

        setTimeout(() => {
            this.textContent = originalText;
            this.style.pointerEvents = '';
        }, 2000);
    });

    // Hover animation for buttons
    button.addEventListener('mouseenter', function() {
        gsap.to(this, {
            scale: 1.05,
            duration: 0.3,
            ease: 'back.out',
        });
    });

    button.addEventListener('mouseleave', function() {
        gsap.to(this, {
            scale: 1,
            duration: 0.3,
            ease: 'back.out',
        });
    });
});

// ================================
// NAVIGATION SCROLL EFFECT
// ================================

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.classList.remove('bg-white/0');
        navbar.classList.add('bg-white/95', 'backdrop-blur', 'shadow-sm');
    } else {
        navbar.classList.add('bg-white/0');
        navbar.classList.remove('bg-white/95', 'backdrop-blur', 'shadow-sm');
    }
});

console.log('Pricing page loaded successfully!');
