document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        mirror: false,
        anchorPlacement: 'top-bottom',
        offset: 120,
    });

    const closeMobileMenu = () => {
        const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
        mobileMenuOverlay.classList.remove('opacity-100');
        mobileMenuOverlay.classList.add('opacity-0');
        document.body.style.overflow = '';
        setTimeout(() => {
            mobileMenuOverlay.classList.add('hidden');
        }, 300);
    };
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
                if (mobileMenuOverlay && !mobileMenuOverlay.classList.contains('hidden')) {
                    closeMobileMenu();
                }
            }
        });
    });

    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const closeMobileMenuButton = document.getElementById('close-mobile-menu');

    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenuOverlay.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            setTimeout(() => {
                mobileMenuOverlay.classList.add('opacity-100');
                mobileMenuOverlay.classList.remove('opacity-0');
            }, 10);
        });
    }

    if (closeMobileMenuButton) {
        closeMobileMenuButton.addEventListener('click', closeMobileMenu);
    }

    const header = document.querySelector('header');
    if(header){
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    const musicButton = document.getElementById('music-bubble-button');
    if(musicButton) {
        const playIcon = musicButton.querySelector('.play-icon');
        const pauseIcon = musicButton.querySelector('.pause-icon');
        const audio = new Audio('https://assets.mixkit.co/music/preview/mixkit-lofi-chill-199.mp3');
        audio.loop = true;
        audio.volume = 0.4;
        let isPlaying = false;

        musicButton.addEventListener('click', () => {
            isPlaying = !isPlaying;
            if (isPlaying) {
                audio.play().catch(error => console.error("Audio play failed:", error));
                musicButton.classList.add('playing');
            } else {
                audio.pause();
                musicButton.classList.remove('playing');
            }
        });
    }
});
