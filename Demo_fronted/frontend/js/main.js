/**
 * Main JavaScript - Industrial Engineering Website
 * ================================================
 */

/* ==========================================================
   Header & Mobile Navigation Logic
   ========================================================== */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const header = document.querySelector('.header');

// Show Menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Hide Menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// Mobile Dropdown Toggle (Accordion Style)
// Event delegation for better performance
navMenu.addEventListener('click', (e) => {
    // Only apply if window width is mobile/tablet
    if (window.innerWidth > 1024) return;

    const dropdownLink = e.target.closest('.dropdown__link');

    if (dropdownLink) {
        e.preventDefault(); // Prevent navigation on dropdown parent click
        const dropdownItem = dropdownLink.parentElement;

        // Toggle the active class
        dropdownItem.classList.toggle('active');

        // Optional: Close other open dropdowns (Accordion behavior)
        const otherDropdowns = navMenu.querySelectorAll('.dropdown');
        otherDropdowns.forEach(item => {
            if (item !== dropdownItem && item.classList.contains('active')) {
                item.classList.remove('active');
            }
        });
    }
});

// Close Mobile Menu when clicking a link (non-dropdown)
const navLinks = document.querySelectorAll('.nav__link:not(.dropdown__link)');
navLinks.forEach(n => n.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
}));

// Header Scroll Effect (Debounced for performance)
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }

    scrollTimeout = window.requestAnimationFrame(() => {
        if (window.scrollY > 50) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }
    });
});

/* ==========================================================
   Existing Functionality
   ========================================================== */

// Service Slider
const slider = document.getElementById('servicesSlider');
const dotsContainer = document.getElementById('sliderDots');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const serviceCards = slider.querySelectorAll('.service-card');
let currentSlide = 0;
let slideInterval;

// Create dots
serviceCards.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll('.dot');

function goToSlide(index) {
    currentSlide = index;
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Update active dot
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');

    // Reset interval
    resetInterval();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % serviceCards.length;
    goToSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + serviceCards.length) % serviceCards.length;
    goToSlide(currentSlide);
}

function startSlideshow() {
    slideInterval = setInterval(nextSlide, 3000); // 3 seconds
}

function resetInterval() {
    clearInterval(slideInterval);
    startSlideshow();
}

// Navigation buttons
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Start auto-slide
startSlideshow();

// Pause on hover
slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
slider.addEventListener('mouseleave', startSlideshow);

/* ==========================================================
   Slide Up Animation on Scroll (Intersection Observer)
   ========================================================== */

// Function to add animation classes to elements
function initSlideUpAnimations() {
    // Select elements to animate
    const sections = document.querySelectorAll('.stats, .services, .products, .why-choose, .cta');
    const sectionTitles = document.querySelectorAll('.section-title');
    const sectionSubtitles = document.querySelectorAll('.section-subtitle');
    const statCards = document.querySelectorAll('.stat-card');
    const serviceCards = document.querySelectorAll('.service-card');
    const productFeatures = document.querySelectorAll('.product-feature');
    const contactCards = document.querySelectorAll('.contact-card');
    const ctaContent = document.querySelectorAll('.cta-content');
    const footerCols = document.querySelectorAll('.footer-col');
    const profileContent = document.querySelectorAll('.profile-content');

    // Add slide-up class to section titles
    sectionTitles.forEach(el => el.classList.add('slide-up'));
    sectionSubtitles.forEach(el => el.classList.add('slide-up', 'delay-1'));

    // Add slide-up to stat cards with stagger
    statCards.forEach((el, index) => {
        el.classList.add('slide-up');
        el.classList.add(`delay-${Math.min(index + 1, 5)}`);
    });

    // Add animation to product features
    productFeatures.forEach((el, index) => {
        if (index % 2 === 0) {
            el.classList.add('slide-up-left');
        } else {
            el.classList.add('slide-up-right');
        }
    });

    // Add slide-up to contact cards
    contactCards.forEach((el, index) => {
        el.classList.add('slide-up');
        el.classList.add(`delay-${Math.min(index + 1, 5)}`);
    });

    // Add scale-up to CTA content
    ctaContent.forEach(el => el.classList.add('scale-up'));

    // Add slide-up to footer columns
    footerCols.forEach((el, index) => {
        el.classList.add('slide-up');
        el.classList.add(`delay-${Math.min(index + 1, 5)}`);
    });

    // Add slide-up to profile content
    profileContent.forEach(el => el.classList.add('slide-up'));
}

// Create Intersection Observer
function createScrollObserver() {
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px 0px -50px 0px', // Trigger slightly before element enters viewport
        threshold: 0.1 // Trigger when 10% of element is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing after animation triggers
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.slide-up, .slide-up-left, .slide-up-right, .scale-up, .slide-up-stagger');
    animatedElements.forEach(el => observer.observe(el));

    return observer;
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initSlideUpAnimations();
    createScrollObserver();
});

// Handle page already scrolled on load (for refresh scenarios)
window.addEventListener('load', () => {
    // Small delay to ensure styles are applied
    setTimeout(() => {
        const animatedElements = document.querySelectorAll('.slide-up, .slide-up-left, .slide-up-right, .scale-up, .slide-up-stagger');
        animatedElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                el.classList.add('visible');
            }
        });
    }, 100);
});

