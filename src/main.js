import './style.css'

document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for Fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px', // Trigger slightly before the element is fully in view
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Parallax Effect for Hero Section
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        if (hero) {
            const scrolled = window.scrollY;
            // Move background at half speed
            hero.style.backgroundPositionY = `calc(50% + ${scrolled * 0.5}px)`;
        }
    });

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // Mobile Menu Toggle (Basic implementation)
    const menuBtn = document.querySelector('.mobile-menu-btn');
    // Note: For a full implementation, we would toggle a class on the nav
    // and add styles for the mobile menu overlay.
    // For now, let's just log it or add a simple toggle if we had the CSS ready.

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            const nav = document.querySelector('.nav');
            nav.classList.toggle('active');

            // Optional: Animate hamburger icon
            menuBtn.classList.toggle('active');
        });
    }

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80; // Approximate header height
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
