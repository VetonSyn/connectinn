/**
 * ConnectInn - Static Frontend JavaScript
 * ========================================
 * Vanilla JS implementation converted from React
 * Uses GSAP for animations, Lucide for icons
 */

// ============================================
// TYPEWRITER TRANSLATIONS (4 languages)
// ============================================
const typewriterTranslations = {
    nl: {
        title: "De toekomst van payroll start hier.",
        description: "ConnectInn vereenvoudigt loonadministratie en HR, zodat jij kunt focussen op wat er écht toe doet: je mensen.",
        sarahName: "Sarah Janssens",
        sarahInfo: "Week 10 Maart: 38u (+1u overwerk)",
        overtimeInfo: "Maart 10: overuren geregistreerd",
        payslipTitle: "Loonbrief",
        payslipMonth: "MAART 2026"
    },
    fr: {
        title: "L'avenir de la paie commence ici.",
        description: "ConnectInn simplifie la paie et les RH, afin que vous puissiez vous concentrer sur ce qui compte vraiment : vos collaborateurs.",
        sarahName: "Sarah Janssens",
        sarahInfo: "Semaine 10 Mars : 38h (+1h suppl.)",
        overtimeInfo: "10 Mars : heures suppl. enregistrées",
        payslipTitle: "Fiche de paie",
        payslipMonth: "MARS 2026"
    },
    en: {
        title: "The future of payroll starts here.",
        description: "ConnectInn simplifies payroll and HR, so you can focus on what really matters: your people.",
        sarahName: "Sarah Janssens",
        sarahInfo: "Week March 10: 38h (+1h overtime)",
        overtimeInfo: "March 10: overtime registered",
        payslipTitle: "Payslip",
        payslipMonth: "MARCH 2026"
    },
    ar: {
        title: "مستقبل إدارة الرواتب يبدأ من هنا.",
        description: "تبسط ConnectInn إدارة الرواتب والموارد البشرية، حتى تتمكن من التركيز على ما يهم حقاً: فريقك.",
        sarahName: "سارة يانسن",
        sarahInfo: "أسبوع 10 مارس: 38 ساعة (+1 إضافي)",
        overtimeInfo: "10 مارس: تم تسجيل ساعات إضافية",
        payslipTitle: "قسيمة الراتب",
        payslipMonth: "مارس 2026"
    }
};

// ============================================
// GLOBAL STATE
// ============================================
let isScrolled = false;
let currentTypewriterLang = 0;
const languageOrder = ['nl', 'fr', 'en', 'ar'];

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);
    
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Initialize all modules
    initNavbar();
    initHeroAnimations();
    initTypewriter();
    initLogoSlider();
    initAboutSection();
    initSolutionsAnimations();
    initReviewSlider();
    initFAQAnimations();
    initScalingAnimations();
    initScrollAnimations();
    initLanguageSelector();
    
    console.log('✅ ConnectInn initialized successfully!');
});

// ============================================
// NAVBAR MODULE
// ============================================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    // Scroll effect
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY > 20;
        if (scrolled !== isScrolled) {
            isScrolled = scrolled;
            if (isScrolled) {
                navbar.classList.add('glass-nav', 'py-3');
                navbar.classList.remove('py-6');
            } else {
                navbar.classList.remove('glass-nav', 'py-3');
                navbar.classList.add('py-6');
            }
        }
    });
    
    // Mobile menu toggle
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isOpen = !mobileMenu.classList.contains('hidden');
            if (isOpen) {
                mobileMenu.classList.add('hidden');
                document.body.classList.remove('mobile-menu-open');
            } else {
                mobileMenu.classList.remove('hidden');
                document.body.classList.add('mobile-menu-open');
            }
            // Update icon
            lucide.createIcons();
        });
    }
    
    // Close menu on link click
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu) mobileMenu.classList.add('hidden');
            document.body.classList.remove('mobile-menu-open');
        });
    });
}

// ============================================
// HERO ENTRANCE ANIMATIONS
// ============================================
function initHeroAnimations() {
    const heroSection = document.getElementById('hero');
    if (!heroSection) return;
    
    const tl = gsap.timeline({ delay: 0.1 });
    
    // Left content animations
    const leftContent = document.getElementById('hero-left');
    if (leftContent) {
        const leftChildren = leftContent.children;
        gsap.set(leftChildren, { y: 25, opacity: 0 });
        tl.to(leftChildren, {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.08,
            ease: 'power3.out'
        }, 0.5);
    }
    
    // Right dashboard animation
    const rightContent = document.getElementById('hero-right');
    if (rightContent) {
        gsap.set(rightContent, { scale: 0.95, opacity: 0, y: 40 });
        tl.to(rightContent, {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'expo.out'
        }, 0.2);
    }
    
    // Logo slider animation
    const logoSlider = document.getElementById('logo-slider-container');
    if (logoSlider) {
        gsap.set(logoSlider, { opacity: 0, y: 20 });
        tl.to(logoSlider, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out'
        }, '-=0.4');
    }
    
    // SVG path animations
    initSvgPathAnimations();
}

function initSvgPathAnimations() {
    const flowPaths = document.querySelectorAll('.flow-path');
    const glowPaths = document.querySelectorAll('.glow-path');
    
    flowPaths.forEach((path, i) => {
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length, opacity: 0.15 });
        gsap.to(path, { 
            strokeDashoffset: 0, 
            duration: 4, 
            ease: 'power2.out', 
            delay: 0.5 + i * 0.4 
        });
        gsap.to(path, {
            opacity: 0.3,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: Math.random() * 2
        });
    });
    
    glowPaths.forEach((path, i) => {
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: `300, ${length}` });
        gsap.fromTo(path,
            { strokeDashoffset: length + 300 },
            { 
                strokeDashoffset: 0,
                duration: 12 + i * 5,
                repeat: -1,
                ease: 'none',
                delay: i * 3
            }
        );
    });
}

// ============================================
// TYPEWRITER EFFECT
// ============================================
function initTypewriter() {
    // Get current language from <html lang=""> attribute or default to 'nl'
    const htmlLang = document.documentElement.lang.toLowerCase() || 'nl';
    
    // Find starting index
    currentTypewriterLang = languageOrder.indexOf(htmlLang);
    if (currentTypewriterLang === -1) currentTypewriterLang = 0;
    
    // Start the typewriter cycle
    setTimeout(runTypewriterCycle, 500);
}

async function runTypewriterCycle() {
    const lang = languageOrder[currentTypewriterLang];
    const data = typewriterTranslations[lang];
    
    const targets = {
        title: document.getElementById('typewriter-title'),
        description: document.getElementById('typewriter-description'),
        sarahName: document.getElementById('typewriter-sarah-name'),
        sarahInfo: document.getElementById('typewriter-sarah-info'),
        overtimeInfo: document.getElementById('typewriter-overtime'),
        payslipTitle: document.getElementById('typewriter-payslip-title'),
        payslipMonth: document.getElementById('typewriter-payslip-month')
    };
    
    const texts = {
        title: data.title,
        description: data.description,
        sarahName: data.sarahName,
        sarahInfo: data.sarahInfo,
        overtimeInfo: data.overtimeInfo,
        payslipTitle: data.payslipTitle,
        payslipMonth: data.payslipMonth
    };
    
    const maxLen = Math.max(
        texts.title.length,
        texts.description.length,
        texts.sarahName.length,
        texts.sarahInfo.length,
        texts.overtimeInfo.length,
        texts.payslipTitle.length,
        texts.payslipMonth.length
    );
    
    // Type out character by character
    for (let i = 0; i <= maxLen; i++) {
        if (targets.title) {
            targets.title.textContent = texts.title.slice(0, i);
        }
        if (targets.description) {
            targets.description.textContent = texts.description.slice(0, i);
        }
        if (targets.sarahName) {
            targets.sarahName.textContent = texts.sarahName.slice(0, i);
        }
        if (targets.sarahInfo) {
            targets.sarahInfo.textContent = texts.sarahInfo.slice(0, i);
        }
        if (targets.overtimeInfo) {
            targets.overtimeInfo.textContent = texts.overtimeInfo.slice(0, i);
        }
        if (targets.payslipTitle) {
            targets.payslipTitle.textContent = texts.payslipTitle.slice(0, i);
        }
        if (targets.payslipMonth) {
            targets.payslipMonth.textContent = texts.payslipMonth.slice(0, i);
        }
        
        await sleep(35);
    }
    
    // Wait before switching to next language
    await sleep(4000);
    
    // Move to next language
    currentTypewriterLang = (currentTypewriterLang + 1) % languageOrder.length;
    runTypewriterCycle();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// ============================================
// LOGO SLIDER
// ============================================
function initLogoSlider() {
    const slider = document.getElementById('logo-slider');
    if (!slider) return;
    
    const logos = [
        { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
        { name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
        { name: "Asana", url: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Asana_logo.svg" },
        { name: "Allianz", url: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Allianz_logo.svg" },
        { name: "HSBC", url: "https://upload.wikimedia.org/wikipedia/commons/a/a2/HSBC_logo_%282018%29.svg" },
        { name: "Slack", url: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg" },
        { name: "Salesforce", url: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
        { name: "Adobe", url: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Adobe_Corporate_logo.svg" }
    ];
    
    // Double logos for seamless loop
    const displayLogos = [...logos, ...logos];
    
    displayLogos.forEach(logo => {
        const img = document.createElement('img');
        img.src = logo.url;
        img.alt = logo.name;
        img.className = 'h-5 md:h-7 w-auto object-contain grayscale opacity-40 cursor-pointer transition-none inline-block';
        
        img.addEventListener('mouseenter', (e) => {
            gsap.to(e.target, {
                scale: 1.1,
                filter: 'grayscale(0%)',
                opacity: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        img.addEventListener('mouseleave', (e) => {
            gsap.to(e.target, {
                scale: 1,
                filter: 'grayscale(100%)',
                opacity: 0.4,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        slider.appendChild(img);
    });
    
    // Infinite scroll animation
    const scrollWidth = slider.scrollWidth / 2;
    gsap.fromTo(slider,
        { x: -scrollWidth },
        {
            x: 0,
            duration: 35,
            ease: 'none',
            repeat: -1
        }
    );
}

// ============================================
// ABOUT SECTION (Interactive Tabs)
// ============================================
function initAboutSection() {
    const aboutSection = document.getElementById('about');
    const buttons = document.querySelectorAll('.about-feature-btn');
    const visualContainer = document.getElementById('about-visual');
    
    if (!buttons.length || !visualContainer) return;
    
    // Track current active feature
    let currentFeature = 'fast';
    
    // Helper function to update button states
    const updateButtonStates = (featureId) => {
        buttons.forEach(b => {
            const isActive = b.dataset.feature === featureId;
            
            if (isActive) {
                b.classList.add('is-active', 'bg-blue-50/50', 'border-blue-100', 'shadow-sm');
                b.classList.remove('border-transparent', 'hover:bg-slate-50', 'hover:border-slate-200');
            } else {
                b.classList.remove('is-active', 'bg-blue-50/50', 'border-blue-100', 'shadow-sm');
                b.classList.add('border-transparent', 'hover:bg-slate-50', 'hover:border-slate-200');
            }
            
            const icon = b.querySelector('.feature-icon');
            if (icon) {
                if (isActive) {
                    icon.classList.add('bg-primary-blue', 'text-white', 'shadow-lg', 'scale-110');
                    icon.classList.remove('bg-slate-100', 'text-slate-400');
                } else {
                    icon.classList.remove('bg-primary-blue', 'text-white', 'shadow-lg', 'scale-110');
                    icon.classList.add('bg-slate-100', 'text-slate-400');
                }
            }
            
            const title = b.querySelector('.feature-title');
            if (title) {
                if (isActive) {
                    title.classList.add('text-primary-blue');
                    title.classList.remove('text-slate-900');
                } else {
                    title.classList.remove('text-primary-blue');
                    title.classList.add('text-slate-900');
                }
            }
        });
    };
    
    // Initialize visual container as hidden/empty
    gsap.set(visualContainer, { opacity: 0, pointerEvents: 'none' });
    
    // Add scroll animation to About section heading
    if (aboutSection) {
        const heading = aboutSection.querySelector('h2');
        const text = aboutSection.querySelector('p');
        const grid = aboutSection.querySelector('.grid');
        
        // Create a master timeline for all about section animations
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: aboutSection,
                start: 'top 60%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse',
                onEnter: () => {
                    // When entering for the first time, always start with 'fast'
                    currentFeature = 'fast';
                    updateButtonStates('fast');
                    updateAboutVisual('fast', visualContainer);
                    gsap.set(visualContainer, { pointerEvents: 'auto' });
                },
                onEnterBack: () => {
                    // When scrolling back up, reset to 'fast'
                    currentFeature = 'fast';
                    updateButtonStates('fast');
                    updateAboutVisual('fast', visualContainer);
                    gsap.set(visualContainer, { pointerEvents: 'auto' });
                },
                onLeave: () => {
                    // When leaving section, reset to default
                    currentFeature = 'fast';
                },
                onLeaveBack: () => {
                    // When scrolling back up past the section
                    gsap.set(visualContainer, { pointerEvents: 'none' });
                }
            }
        });
        
        // Animate heading - starts at 0
        if (heading) {
            tl.from(heading, {
                opacity: 0,
                x: -40,
                duration: 0.8,
                ease: 'power2.out'
            }, 0);
        }
        
        // Animate text - starts at 0 (same time as heading)
        if (text) {
            tl.from(text, {
                opacity: 0,
                x: -30,
                duration: 0.8,
                ease: 'power2.out'
            }, 0);
        }
        
        // Animate grid - starts at 0 (same time as heading)
        if (grid) {
            tl.from(grid, {
                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: 'power2.out'
            }, 0);
        }
        
        // Visual container animation is handled by updateAboutVisual() to prevent flickering
    }
    
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const featureId = btn.dataset.feature;
            
            // Update current feature state
            currentFeature = featureId;
            
            // Update button states using helper function
            updateButtonStates(featureId);
            
            // Update visual
            updateAboutVisual(featureId, visualContainer);
        });
    });
}

function updateAboutVisual(featureId, container) {
    // Kill all existing GSAP animations on container to prevent leftovers
    gsap.killTweensOf(container);
    gsap.killTweensOf(container.children);
    
    const visuals = {
        fast: `
            <div class="w-full h-full flex items-center justify-center p-8 lg:p-16" style="background: white;">
                <div class="w-full max-w-md bg-white p-10 lg:p-12 space-y-10" style="border-radius: 48px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15); border: 1px solid #E2E8F0;">
                    <div class="flex items-center justify-between" data-animate>
                        <div class="flex items-center gap-4">
                            <div class="w-14 h-14 flex items-center justify-center text-white" style="border-radius: 20px; background: #2563EB; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;">
                                <i data-lucide="settings" class="w-7 h-7 animate-spin-slow"></i>
                            </div>
                            <div>
                                <h4 class="text-lg font-black text-slate-900">Configuratie</h4>
                                <p class="text-xs text-slate-400 font-bold uppercase tracking-wider">Stap 3 van 4</p>
                            </div>
                        </div>
                        <span class="text-blue-600 font-black text-xl">75%</span>
                    </div>
                    
                    <div class="space-y-5">
                        <div class="flex items-center gap-5 p-6 bg-slate-50 border border-slate-100" style="border-radius: 20px;" data-animate>
                            <div class="w-10 h-10 rounded-full flex items-center justify-center bg-emerald-500 text-white" style="box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                                <i data-lucide="check-circle-2" class="w-5 h-5"></i>
                            </div>
                            <span class="text-base font-bold text-slate-900">Bedrijfsgegevens</span>
                        </div>
                        <div class="flex items-center gap-5 p-6 bg-slate-50 border border-slate-100" style="border-radius: 20px;" data-animate>
                            <div class="w-10 h-10 rounded-full flex items-center justify-center bg-emerald-500 text-white" style="box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                                <i data-lucide="check-circle-2" class="w-5 h-5"></i>
                            </div>
                            <span class="text-base font-bold text-slate-900">Uren doorgeven</span>
                        </div>
                        <div class="flex items-center gap-5 p-6 bg-slate-50 border border-slate-100" style="border-radius: 20px;" data-animate>
                            <div class="w-10 h-10 rounded-full flex items-center justify-center bg-white border-2 border-slate-200 text-slate-200">
                                <i data-lucide="check-circle-2" class="w-5 h-5"></i>
                            </div>
                            <span class="text-base font-bold text-slate-400">Ontvangen van een loonbrief</span>
                        </div>
                    </div>
                    
                    <div class="pt-4" data-animate>
                        <div class="h-4 w-full bg-slate-100 rounded-full overflow-hidden">
                            <div class="h-full bg-blue-600 rounded-full" style="width: 0%; box-shadow: 0 0 12px rgba(37, 99, 235, 0.3);" data-progress-bar></div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        friendly: `
            <div class="w-full h-full flex items-center justify-center p-6 lg:p-12" style="background: white;">
                <div class="w-full max-w-2xl bg-white overflow-hidden flex flex-col transform scale-90 md:scale-100" style="border-radius: 48px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15); border: 1px solid #E2E8F0; min-height: 620px;">
                    <div class="px-8 py-5 border-b border-slate-100 flex items-center justify-between">
                        <div class="flex gap-2">
                            <div class="w-3 h-3 rounded-full bg-red-400"></div>
                            <div class="w-3 h-3 rounded-full bg-amber-400"></div>
                            <div class="w-3 h-3 rounded-full bg-emerald-400"></div>
                        </div>
                        <div class="flex items-center gap-4">
                            <div class="w-8 h-8 flex items-center justify-center text-slate-400" style="border-radius: 10px; background: #F1F5F9;"><i data-lucide="search" class="w-4 h-4"></i></div>
                            <div class="w-8 h-8 flex items-center justify-center text-slate-400" style="border-radius: 10px; background: #F1F5F9;"><i data-lucide="bell" class="w-4 h-4"></i></div>
                            <div class="w-8 h-8 rounded-full flex items-center justify-center text-blue-600 font-bold text-xs" style="background: #DBEAFE;">SJ</div>
                        </div>
                    </div>
                    <div class="flex-1 flex min-h-0">
                        <div class="border-r border-slate-100 flex flex-col items-center py-6 gap-6" style="width: 64px;">
                            <div class="w-10 h-10 flex items-center justify-center" style="background: #EFF6FF; color: #2563EB; border-radius: 14px;"><i data-lucide="layout" class="w-5 h-5"></i></div>
                            <div class="w-10 h-10 flex items-center justify-center text-slate-300" style="border-radius: 14px;"><i data-lucide="users" class="w-5 h-5"></i></div>
                            <div class="w-10 h-10 flex items-center justify-center text-slate-300" style="border-radius: 14px;"><i data-lucide="bar-chart" class="w-5 h-5"></i></div>
                        </div>
                        <div class="flex-1 p-8 space-y-6 min-w-0 overflow-y-auto">
                            <div class="grid grid-cols-2 gap-6">
                                <div class="p-6 bg-blue-600 text-white" style="border-radius: 32px; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);" data-animate>
                                    <div class="text-xs font-black uppercase tracking-wider mb-2" style="opacity: 0.7;">Sarah Janssens</div>
                                    <div class="text-2xl font-black mb-1">160u gewerkt</div>
                                    <div class="text-xs" style="opacity: 0.6;">deze maand</div>
                                </div>
                                <div class="p-6 border border-emerald-100 text-emerald-700" style="background: #ECFDF5; border-radius: 32px;" data-animate>
                                    <div class="text-xs font-black uppercase tracking-wider mb-2" style="opacity: 0.7;">Actieve Medewerkers</div>
                                    <div class="text-3xl font-black">28</div>
                                </div>
                            </div>
                            <div class="flex items-center gap-3 p-4 bg-slate-50 border border-slate-100 rounded-2xl" style="border-radius: 18px;" data-animate>
                                <div class="w-8 h-8 rounded-md flex items-center justify-center text-slate-300" style="background: #E2E8F0;"><i data-lucide="calendar" class="w-4 h-4"></i></div>
                                <div class="h-2 bg-slate-200 rounded-full flex-1"></div>
                            </div>
                            <div class="flex items-center gap-3 p-4 bg-slate-50 border border-slate-100 rounded-2xl" style="border-radius: 18px;" data-animate>
                                <div class="w-8 h-8 rounded-md flex items-center justify-center text-slate-300" style="background: #E2E8F0;"><i data-lucide="clock" class="w-4 h-4"></i></div>
                                <div class="h-2 bg-slate-200 rounded-full flex-1"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        mobile: `
            <div class="w-full h-full flex items-center justify-center overflow-hidden p-8" style="background: white;">
                <div class="relative transform scale-95">
                    <div class="bg-slate-900 p-2 relative overflow-hidden" style="width: 264px; height: 544px; border-radius: 56px; border: 12px solid #1E293B; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);">
                        <div class="absolute top-0 left-1/2 bg-slate-800 z-20" style="transform: translateX(-50%); width: 80px; height: 24px; border-bottom-left-radius: 16px; border-bottom-right-radius: 16px;"></div>
                        <div class="w-full h-full bg-white flex flex-col p-6 pt-12 overflow-hidden" style="border-radius: 40px;">
                            <div class="flex justify-between items-center mb-8" data-animate>
                                <div class="w-10 h-10 rounded-full flex items-center justify-center text-slate-400" style="background: #F1F5F9;"><i data-lucide="menu" class="w-5 h-5"></i></div>
                                <div class="w-10 h-10 flex items-center justify-center text-white" style="border-radius: 18px; background: #2563EB; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);"><i data-lucide="zap" class="w-5 h-5"></i></div>
                            </div>
                            <div class="mb-8" data-animate>
                                <h5 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Maart Overzicht</h5>
                                <h4 class="text-2xl font-black text-slate-900">160 Uur</h4>
                            </div>
                            <div class="mb-8" data-animate>
                                <div class="bg-indigo-600 p-6 text-white" style="border-radius: 32px; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);">
                                    <div class="text-xs font-bold mb-1" style="opacity: 0.7;">Status</div>
                                    <div class="text-sm font-black">Uren Geaccepteerd</div>
                                </div>
                            </div>
                            <div class="space-y-4">
                                <div class="flex items-center gap-4 p-4 bg-slate-50 border border-slate-100" style="border-radius: 18px;" data-animate>
                                    <div class="bg-white flex items-center justify-center" style="width: 36px; height: 36px; border-radius: 14px;"><i data-lucide="clock" class="w-4 h-4 text-slate-300"></i></div>
                                    <div class="h-2 bg-slate-200 rounded-full" style="width: 96px;"></div>
                                </div>
                                <div class="flex items-center gap-4 p-4 bg-slate-50 border border-slate-100" style="border-radius: 18px;" data-animate>
                                    <div class="bg-white flex items-center justify-center" style="width: 36px; height: 36px; border-radius: 14px;"><i data-lucide="clock" class="w-4 h-4 text-slate-300"></i></div>
                                    <div class="h-2 bg-slate-200 rounded-full" style="width: 96px;"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        everyone: `
            <div class="w-full h-full bg-white flex flex-col justify-center p-12 lg:p-20">
                <div class="flex items-end gap-6 mb-12" style="height: 256px;" data-animate>
                    <div class="flex-1 flex flex-col items-center gap-6 h-full">
                        <div class="w-full bg-slate-50 flex-1 flex items-end p-0 overflow-hidden border border-slate-100" style="border-radius: 28px;">
                            <div class="w-full bg-slate-200" style="--target-height: 25%; height: 0%; animation: barFill 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s forwards; border-top-left-radius: 20px; border-top-right-radius: 20px; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);"></div>
                        </div>
                        <div class="text-center">
                            <span class="text-sm font-black text-slate-900 block leading-tight">Freelancers</span>
                        </div>
                    </div>
                    <div class="flex-1 flex flex-col items-center gap-6 h-full">
                        <div class="w-full bg-slate-50 flex-1 flex items-end p-0 overflow-hidden border border-slate-100" style="border-radius: 28px;">
                            <div class="w-full" style="--target-height: 55%; height: 0%; background: #BFDBFE; animation: barFill 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s forwards; border-top-left-radius: 20px; border-top-right-radius: 20px; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);"></div>
                        </div>
                        <div class="text-center">
                            <span class="text-sm font-black text-slate-900 block leading-tight">KMO's</span>
                        </div>
                    </div>
                    <div class="flex-1 flex flex-col items-center gap-6 h-full">
                        <div class="w-full bg-slate-50 flex-1 flex items-end p-0 overflow-hidden border border-slate-100" style="border-radius: 28px;">
                            <div class="w-full" style="--target-height: 100%; height: 0%; background: #1D3A8A; animation: barFill 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s forwards; border-top-left-radius: 20px; border-top-right-radius: 20px; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);"></div>
                        </div>
                        <div class="text-center">
                            <span class="text-sm font-black text-slate-900 block leading-tight">Internationale ondernemingen</span>
                        </div>
                    </div>
                </div>
            </div>
        `
    };
    
    container.innerHTML = visuals[featureId] || visuals.fast;
    lucide.createIcons();
    
    // Create GSAP Timeline for orchestrated animations (including container fade-in)
    const tl = gsap.timeline();
    const outerWrapper = container.firstElementChild;
    const animateElements = container.querySelectorAll('[data-animate]');
    const progressBar = container.querySelector('[data-progress-bar]');
        // Step 0: Fade in the entire container (right side)
    tl.fromTo(container,
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' },
        0
    );
        // Step 1: Slide in the outer container (card/wrapper)
    tl.fromTo(outerWrapper,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'back.out(1.4)' },
        0
    );
    
    // Step 2: Animate each [data-animate] element with 0.3s stagger
    if (animateElements.length > 0) {
        tl.fromTo(animateElements,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.3 },
            0.2 // Start after container animates in
        );
    }
    
    // Step 3: Animate progress bar from 0% to 75% (loading effect)
    if (progressBar) {
        tl.to(progressBar,
            { width: '75%', duration: 2, ease: 'power2.inOut' },
            0.5 // Start slightly after other animations
        );
    }
}

// ============================================
// SOLUTIONS ANIMATIONS
// ============================================
function initSolutionsAnimations() {
    const solutionsSection = document.getElementById('solutions');
    if (!solutionsSection) return;
    
    const header = solutionsSection.querySelector('.solutions-header');
    const cards = solutionsSection.querySelectorAll('.solution-card');
    
    // Animate header section - reset on every enter
    if (header) {
        gsap.from(header, {
            scrollTrigger: {
                trigger: header,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            y: 40,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
    }
    
    // Animate each card with stagger effect (left to right, one by one)
    if (cards.length) {
        cards.forEach((card, index) => {
            const icon = card.querySelector('.solution-icon');
            const title = card.querySelector('.solution-title');
            const description = card.querySelector('.solution-description');
            const btnSolution = card.querySelector('.btn-solution-text');
            const shadow = card.querySelector('.animated-shadow');
            
            // Create timeline for each card - reset on every enter
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            });
            
            // Card entrance animation (slide from left with fade)
            tl.from(card, {
                x: -60,
                opacity: 0,
                scale: 0.95,
                duration: 0.8,
                ease: 'power3.out',
                delay: index * 0.15 // Stagger delay for left-to-right effect
            });
            
            // Icon animation (subtle slide from top with fade, like custom cards)
            tl.from(icon, {
                y: -20,
                opacity: 0,
                duration: 0.6,
                ease: 'power2.out'
            }, '-=0.4');
            
            // Title animation (slide up with fade)
            tl.from(title, {
                y: 20,
                opacity: 0,
                duration: 0.5,
                ease: 'power2.out'
            }, '-=0.3');
            
            // Description animation (slide up with fade)
            tl.from(description, {
                y: 15,
                opacity: 0,
                duration: 0.5,
                ease: 'power2.out'
            }, '-=0.4');

            // Description animation (slide up with fade)
            tl.from(btnSolution, {
                y: 15,
                opacity: 0,
                duration: 0.5,
                ease: 'power2.out'
            }, '-=0.7');
            
            // Animate shadow with continuous floating motion
            if (shadow) {
                gsap.to(shadow, {
                    x: '+=12',
                    y: '+=12',
                    duration: 3 + (index * 0.3),
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                    delay: index * 0.2
                });
                
                // Additional rotation animation for shadows
                gsap.to(shadow, {
                    rotation: 5,
                    duration: 4 + (index * 0.4),
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                    delay: index * 0.3
                });
            }
        });
    }
}

// ============================================
// REVIEW SLIDER
// ============================================
function initReviewSlider() {
    const slider = document.getElementById('reviews-slider');
    const prevBtn = document.getElementById('review-prev');
    const nextBtn = document.getElementById('review-next');
    const progressBar = document.getElementById('review-progress');
    const progressText = document.getElementById('review-progress-text');
    
    if (!slider) return;
    
    function updateProgress() {
        const { scrollLeft, scrollWidth, clientWidth } = slider;
        const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
        if (progressBar) {
            progressBar.style.width = `${Math.max(5, progress)}%`;
        }
        if (progressText) {
            progressText.textContent = `${Math.round(progress)}%`;
        }
    }
    
    slider.addEventListener('scroll', updateProgress);
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            slider.scrollBy({ left: -500, behavior: 'smooth' });
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            slider.scrollBy({ left: 500, behavior: 'smooth' });
        });
    }
}

// ============================================
// SCALING SECTION ANIMATIONS
// ============================================
function initScalingAnimations() {
    const scalingSection = document.getElementById('scaling');
    if (!scalingSection) return;
    
    const header = scalingSection.querySelector('.scaling-header');
    const cards = scalingSection.querySelectorAll('.scaling-card');
    
    if (header) {
        gsap.from(header, {
            scrollTrigger: {
                trigger: header,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            y: 40,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
    }
    
    if (cards.length) {
        gsap.from(cards, {
            scrollTrigger: {
                trigger: cards[0],
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            y: 60,
            opacity: 0,
            duration: 1.2,
            stagger: 0.15,
            ease: 'expo.out'
        });
    }
}

// ============================================
// GENERAL SCROLL ANIMATIONS
// ============================================
function initScrollAnimations() {
    // Animate all sections on scroll
    gsap.utils.toArray('section').forEach(section => {
        const elements = section.querySelectorAll('.animate-on-scroll');
        if (elements.length) {
            gsap.from(elements, {
                scrollTrigger: {
                    trigger: section,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: 'power3.out'
            });
        }
    });
}

// ============================================
// LANGUAGE SELECTOR
// ============================================
function initLanguageSelector() {
    const langLinks = document.querySelectorAll('[data-lang]');
    const selectedFlag = document.getElementById('selected-flag');
    const selectedLang = document.getElementById('selected-lang');
    const menuTriggerLang = document.querySelector('.menu-trigger-lang');
    const langDropdown = document.querySelector('.lang-dropdown');
    
    if (!langLinks.length || !selectedFlag || !selectedLang) return;
    
    // Language code to abbreviation mapping
    const langAbbreviations = {
        'nl': 'BE',
        'en': 'ENG',
        'fr': 'FR',
        'ar': 'AR'
    };
    
    // Add click event listener to each language link
    langLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const lang = link.getAttribute('data-lang');
            const flag = link.getAttribute('data-flag');
            const abbrev = langAbbreviations[lang] || lang.toUpperCase();
            
            // Update the button display
            selectedFlag.textContent = flag;
            selectedLang.textContent = abbrev;
            
            // Close the dropdown with smooth animation using CSS class
            if (langDropdown) {
                langDropdown.classList.add('closing');
                
                // Remove the closing class after animation completes (300ms)
                // This allows the dropdown to open again on next hover
                setTimeout(() => {
                    langDropdown.classList.remove('closing');
                }, 300);
            }
            
            // Store preference (optional - for later use)
            localStorage.setItem('selectedLanguage', lang);
            localStorage.setItem('selectedFlag', flag);
            localStorage.setItem('selectedAbbrev', abbrev);
            
            // In the future, redirect to the page URL
            // window.location.href = link.getAttribute('href');
        });
    });
}

// ============================================
// FAQ ACCORDION MODULE
// ============================================
function initFAQAnimations() {
    const faqSection = document.getElementById('faq');
    if (!faqSection) {
        console.warn('FAQ section not found');
        return;
    }

    const faqItems = document.querySelectorAll('.faq-item');
    const faqItemsContainer = faqSection.querySelector('.faq-items');
    const faqHeader = faqSection.querySelector('.faq-header');
    const faqContactItems = faqSection.querySelectorAll('.faq-contact-item');

    console.log('FAQ Init:', {
        faqItems: faqItems.length,
        hasContainer: !!faqItemsContainer,
        hasHeader: !!faqHeader,
        contactItems: faqContactItems.length
    });

    // CRITICAL: Set all FAQ items to visible FIRST before any GSAP animations
    faqItems.forEach((item) => {
        item.style.opacity = '1';
        item.style.visibility = 'visible';
    });

    // Entrance animation for header
    if (faqHeader) {
        gsap.fromTo(faqHeader, 
            { 
                y: 20, 
                opacity: 0 
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: faqSection,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    }

    // Entrance animation for contact items
    if (faqContactItems.length > 0) {
        gsap.fromTo(faqContactItems,
            {
                x: -20,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.15,
                ease: 'power2.out',
                delay: 0.2,
                scrollTrigger: {
                    trigger: faqSection,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    }

    // Entrance animation for FAQ items (stagger from right side)
    if (faqItems.length > 0) {
        gsap.fromTo(faqItems,
            {
                x: 30,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.08,
                ease: 'power2.out',
                delay: 0.3,
                scrollTrigger: {
                    trigger: faqSection,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    }

    // Initialize accordion functionality
    faqItems.forEach((item, index) => {
        const questionBtn = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-icon');

        if (!questionBtn || !answer) {
            console.warn('FAQ item missing question or answer:', item);
            return;
        }

        // Set initial state WITHOUT GSAP to avoid conflicts
        answer.style.maxHeight = '0px';
        answer.style.opacity = '0';
        answer.style.overflow = 'hidden';

        // Open first item by default
        if (index === 0) {
            const naturalHeight = answer.scrollHeight;
            answer.style.maxHeight = naturalHeight + 'px';
            answer.style.opacity = '1';
            item.classList.add('active');
            if (icon) {
                icon.style.transform = 'rotate(180deg)';
            }
        }

        // Click handler for accordion
        questionBtn.addEventListener('click', () => {
            const isOpen = item.classList.contains('active');

            // Close all other items first
            faqItems.forEach((otherItem) => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    const otherIcon = otherItem.querySelector('.faq-icon');

                    otherItem.classList.remove('active');
                    
                    gsap.to(otherAnswer, {
                        maxHeight: 0,
                        opacity: 0,
                        duration: 0.3,
                        ease: 'power2.inOut'
                    });

                    if (otherIcon) {
                        gsap.to(otherIcon, {
                            rotation: 0,
                            duration: 0.3,
                            ease: 'power2.out'
                        });
                    }
                }
            });

            // Toggle current item
            if (isOpen) {
                // Close current item
                item.classList.remove('active');
                
                gsap.to(answer, {
                    maxHeight: 0,
                    opacity: 0,
                    duration: 0.3,
                    ease: 'power2.inOut'
                });

                if (icon) {
                    gsap.to(icon, {
                        rotation: 0,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                }
            } else {
                // Open current item
                item.classList.add('active');
                
                // Calculate natural height
                const naturalHeight = answer.scrollHeight;

                gsap.to(answer, {
                    maxHeight: naturalHeight,
                    opacity: 1,
                    duration: 0.4,
                    ease: 'power2.out',
                    delay: 0.15
                });

                if (icon) {
                    gsap.to(icon, {
                        rotation: 180,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                }
            }
        });
    });

    console.log('✅ FAQ initialized successfully');
}
