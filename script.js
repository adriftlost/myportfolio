AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    mirror: false,
    anchorPlacement: 'top-bottom',
    offset: 150,
    delay: 80,
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
const closeMobileMenuButton = document.getElementById('close-mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenuOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
        mobileMenuOverlay.style.opacity = '1';
    }, 10);
});

closeMobileMenuButton.addEventListener('click', () => {
    mobileMenuOverlay.style.opacity = '0';
    document.body.style.overflow = '';
    setTimeout(() => {
        mobileMenuOverlay.classList.add('hidden');
    }, 200);
});

mobileMenuOverlay.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuOverlay.style.opacity = '0';
        document.body.style.overflow = '';
        setTimeout(() => {
            mobileMenuOverlay.classList.add('hidden');
        }, 200);
    });
});

const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const currentYearSpan = document.getElementById('current-year');
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

document.querySelectorAll('.title-reveal').forEach(title => {
    title.addEventListener('mouseenter', () => {
        title.style.transition = 'transform 0.3s ease-out';
        title.style.transform = 'scale(1.01)';
    });
    title.addEventListener('mouseleave', () => {
        title.style.transform = 'scale(1)';
    });
});

const musicToggleButton = document.getElementById('music-toggle-button');
const playIcon = document.getElementById('play-icon');
const pauseIcon = document.getElementById('pause-icon');
const musicAudio = new Audio('https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3');

let isPlaying = false;

musicAudio.volume = 0.5;
musicAudio.loop = true;

musicToggleButton.addEventListener('click', () => {
    if (isPlaying) {
        musicAudio.pause();
        playIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
        musicToggleButton.querySelector('span').textContent = 'Play Music';
        musicToggleButton.classList.remove('animate-spin-icon');
    } else {
        musicAudio.play().catch(error => {
            console.error('Failed to play music:', error);
        });
        playIcon.classList.add('hidden');
        pauseIcon.classList.remove('hidden');
        musicToggleButton.querySelector('span').textContent = 'Pause Music';
        musicToggleButton.classList.add('animate-spin-icon');
    }
    isPlaying = !isPlaying;
});

musicAudio.addEventListener('error', (e) => {
    console.error('Audio playback error:', e);
    musicToggleButton.querySelector('span').textContent = 'Music Error';
});
