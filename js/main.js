// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false,
    offset: 100
});

// Set current year in footer
document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip if href is just "#"
        if (href === '#') {
            e.preventDefault();
            return;
        }
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const navHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const mobileMenuOpen = document.querySelector('[x-data]').__x.$data.mobileMenuOpen;
            if (mobileMenuOpen) {
                document.querySelector('[x-data]').__x.$data.mobileMenuOpen = false;
            }
        }
    });
});

// Add scroll effect to navigation
let lastScroll = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        nav.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !nav.classList.contains('scroll-down')) {
        // Scrolling down
        nav.classList.remove('scroll-up');
        nav.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && nav.classList.contains('scroll-down')) {
        // Scrolling up
        nav.classList.remove('scroll-down');
        nav.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero && scrolled < window.innerHeight) {
        const parallax = scrolled * 0.5;
        hero.style.transform = `translateY(${parallax}px)`;
    }
});

// Animate background on scroll
window.addEventListener('scroll', () => {
    const shift = Math.min(240, window.pageYOffset * 0.2);
    document.body.style.setProperty('--bg-shift', `${shift}px`);
}, { passive: true });

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, observerOptions);

// Observe all elements with data-observe attribute
document.querySelectorAll('[data-observe]').forEach(el => {
    observer.observe(el);
});

// Add loading state to download buttons
document.querySelectorAll('a[href*="play.google.com"], a[href*="apps.apple.com"]').forEach(button => {
    button.addEventListener('click', function(e) {
        // Track analytics if available
        if (typeof gtag !== 'undefined') {
            const store = this.href.includes('google') ? 'Google Play' : 'App Store';
            gtag('event', 'download_click', {
                'event_category': 'engagement',
                'event_label': store
            });
        }
    });
});

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img.lazy').forEach(img => {
        imageObserver.observe(img);
    });
}

// Handle external links
document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (!link.href.includes(window.location.hostname)) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    }
});

// Add active state to navigation for directory and file routes
(function(){
    const path = window.location.pathname;
    document.querySelectorAll('nav a').forEach(link => {
        const href = link.getAttribute('href') || '';
        const isPrivacy = href.includes('privacy');
        const isTerms = href.includes('terms');
        const isSupport = href.includes('support');
        if ((isPrivacy && path.includes('/privacy')) ||
            (isTerms && path.includes('/terms')) ||
            (isSupport && path.includes('/support'))) {
            link.classList.add('active');
        }
    });
})();

// Console message for developers
console.log('%cPeauTrace 🌸', 'color: #FF7F87; font-size: 24px; font-weight: bold;');
console.log('%cTrace your beauty. Track your glow.', 'color: #B85C8A; font-size: 14px;');
console.log('%cInterested in our tech stack? Visit https://github.com/peautrace', 'color: #666; font-size: 12px;');

// Preload critical images
function preloadImages() {
    const images = [
        './assets/images/hero-mockup.png',
        './assets/images/logo.svg'
    ];
    
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Call preload when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', preloadImages);
} else {
    preloadImages();
}

// Handle form submissions (if any)
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Add your form handling logic here
        console.log('Form submitted');
        
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg z-50';
        successMessage.textContent = 'Thank you! We\'ll be in touch soon.';
        document.body.appendChild(successMessage);
        
        setTimeout(() => {
            successMessage.remove();
        }, 3000);
    });
});

// Performance monitoring
if ('PerformanceObserver' in window) {
    const perfObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            if (entry.duration > 100) {
                console.warn(`Slow operation detected: ${entry.name} took ${entry.duration}ms`);
            }
        }
    });
    
    perfObserver.observe({ entryTypes: ['measure'] });
}

// Service Worker registration (for PWA support in future)
if ('serviceWorker' in navigator && window.location.protocol === 'https:') {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered:', registration);
            })
            .catch(error => {
                console.log('SW registration failed:', error);
            });
    });
}

