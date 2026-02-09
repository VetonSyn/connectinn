// ================================
// CUSTOMER PAGE ANIMATIONS & INTERACTIONS
// ================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // ================================
    // HERO SECTION ANIMATIONS
    // ================================
    
    // Hero text entrance
    gsap.from('.hero-text h1', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.3
    });

    gsap.from('.hero-text p', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.5
    });

    // Trust indicators stagger
    gsap.from('.trust-indicator', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
        delay: 0.7
    });

    // Lead form entrance
    gsap.from('.lead-form', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.9
    });

    // Hero image with scale and fade
    gsap.from('.hero-image', {
        scale: 0.95,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.6
    });

    // ================================
    // BENEFITS SECTION ANIMATIONS
    // ================================
    
    // Benefits header
    gsap.from('.benefits-header', {
        scrollTrigger: {
            trigger: '.benefits-header',
            start: 'top 80%',
            end: 'bottom 60%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    });

    // Benefit cards stagger
    gsap.utils.toArray('.benefit-card').forEach((element, index) => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                end: 'bottom 60%',
                toggleActions: 'play none none reverse'
            },
            y: 60,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out'
        });
    });

    // Hover effect for benefit cards
    document.querySelectorAll('.benefit-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.03,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // ================================
    // PROCESS SECTION ANIMATIONS
    // ================================
    
    gsap.from('.process-section', {
        scrollTrigger: {
            trigger: '.process-section',
            start: 'top 80%',
            end: 'bottom 60%',
            toggleActions: 'play none none reverse'
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

    // Process steps stagger
    gsap.utils.toArray('.process-step').forEach((element, index) => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                end: 'bottom 60%',
                toggleActions: 'play none none reverse'
            },
            scale: 0.8,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.15,
            ease: 'back.out(1.7)'
        });
    });



    // ================================
    // FORM INTERACTIONS
    // ================================
    
    const customerForm = document.getElementById('customer-form');
    if (customerForm) {
        // Add focus animations to form inputs
        const formInputs = customerForm.querySelectorAll('input');
        formInputs.forEach(input => {
            input.addEventListener('focus', (e) => {
                gsap.to(e.target, {
                    scale: 1.02,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });

            input.addEventListener('blur', (e) => {
                gsap.to(e.target, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        });

        // Form submission handler
        customerForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const submitBtn = customerForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;

            // Disable button and show loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = `
                <svg class="animate-spin h-5 w-5 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            `;

            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                // Success animation
                gsap.to(customerForm, {
                    scale: 0.95,
                    opacity: 0,
                    duration: 0.4,
                    ease: 'power2.in',
                    onComplete: () => {
                        customerForm.innerHTML = `
                            <div class="text-center py-12">
                                <div class="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                                    <svg class="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <h3 class="text-2xl font-black text-slate-900 mb-3">Bedankt voor je interesse!</h3>
                                <p class="text-slate-600 font-medium mb-2">We hebben je aanvraag ontvangen en nemen binnen 24 uur contact met je op.</p>
                                <p class="text-sm text-slate-500 font-medium">Check je inbox voor een bevestigingsmail.</p>
                            </div>
                        `;

                        gsap.from(customerForm, {
                            scale: 0.95,
                            opacity: 0,
                            duration: 0.6,
                            ease: 'back.out(1.7)'
                        });
                    }
                });
            }, 2000);
        });
    }

    // ================================
    // SCROLL REVEAL ANIMATIONS
    // ================================
    
    // Fade in elements on scroll
    gsap.utils.toArray('.support-card, .review-card').forEach(element => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: 'top 90%',
                end: 'bottom 60%',
                toggleActions: 'play none none reverse'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        });
    });

    // ================================
    // NAVBAR SCROLL EFFECT
    // ================================
    
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.classList.add('bg-white/95', 'backdrop-blur-lg', 'shadow-lg', 'py-4');
            navbar.classList.remove('bg-white/0', 'py-6');
        } else {
            navbar.classList.remove('bg-white/95', 'backdrop-blur-lg', 'shadow-lg', 'py-4');
            navbar.classList.add('bg-white/0', 'py-6');
        }

        lastScroll = currentScroll;
    });

    // ================================
    // PARALLAX EFFECTS
    // ================================
    
    // Parallax for hero image
    gsap.to('.hero-image', {
        scrollTrigger: {
            trigger: '.hero-image',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        y: 100,
        ease: 'none'
    });

    // ================================
    // SMOOTH SCROLL TO ANCHOR LINKS
    // ================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: { y: target, offsetY: 80 },
                    ease: 'power3.inOut'
                });
            }
        });
    });



    console.log('🎉 Customer page animations loaded!');
});
