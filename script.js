AOS.init({
    duration: 1200,
    easing: 'ease-out-quad',
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
        mobileMenuOverlay.querySelectorAll('a').forEach((link, index) => {
            link.setAttribute('data-aos', 'fade-down');
            link.setAttribute('data-aos-delay', (index * 100 + 100).toString());
            link.classList.add('aos-init', 'aos-animate');
        });
    }, 10);
    AOS.refresh();
});

closeMobileMenuButton.addEventListener('click', () => {
    mobileMenuOverlay.style.opacity = '0';
    document.body.style.overflow = '';
    setTimeout(() => {
        mobileMenuOverlay.classList.add('hidden');
        mobileMenuOverlay.querySelectorAll('a').forEach(link => {
            link.removeAttribute('data-aos');
            link.removeAttribute('data-aos-delay');
            link.classList.remove('aos-init', 'aos-animate');
        });
    }, 300);
});

mobileMenuOverlay.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuOverlay.style.opacity = '0';
        document.body.style.overflow = '';
        setTimeout(() => {
            mobileMenuOverlay.classList.add('hidden');
        }, 300);
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
