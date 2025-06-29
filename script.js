document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        mirror: false,
        anchorPlacement: 'top-bottom',
        offset: 120,
    });
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const closeMobileMenuButton = document.getElementById('close-mobile-menu');
    const header = document.querySelector('header');
    const currentYearSpan = document.getElementById('current-year');
    const musicButton = document.getElementById('header-music-button');
    const allNavLinks = document.querySelectorAll('a[href^="#"]');
    
    // --- Audio Player ---
    const audio = new Audio('forest-lofi.mp3');
    audio.loop = true;
    audio.volume = 0.4;
    let isPlaying = false;

    if (musicButton) {
        musicButton.addEventListener('click', () => {
            isPlaying = !isPlaying;
            if (isPlaying) {
                audio.play().catch(error => {
                    console.error("Audio playback failed:", error);
                    isPlaying = false; // Reset state on failure
                    musicButton.classList.remove('playing');
                });
                musicButton.classList.add('playing');
            } else {
                audio.pause();
                musicButton.classList.remove('playing');
            }
        });
    }

    const closeMobileMenu = () => {
        if (!mobileMenuOverlay) return;
        mobileMenuOverlay.classList.add('opacity-0');
        mobileMenuOverlay.classList.remove('opacity-100');
        document.body.style.overflow = '';
        setTimeout(() => {
            mobileMenuOverlay.classList.add('hidden');
        }, 300);
    };
    const openMobileMenu = () => {
        if (!mobileMenuOverlay) return;
        mobileMenuOverlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            mobileMenuOverlay.classList.remove('opacity-0');
            mobileMenuOverlay.classList.add('opacity-100');
        }, 10);
    };
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', openMobileMenu);
    }
    if (closeMobileMenuButton) {
        closeMobileMenuButton.addEventListener('click', closeMobileMenu);
    }
    allNavLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    if (mobileMenuOverlay && !mobileMenuOverlay.classList.contains('hidden')) {
                        closeMobileMenu();
                    }
                }
            }
        });
    });
    window.addEventListener('scroll', () => {
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    }, { passive: true });
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});
