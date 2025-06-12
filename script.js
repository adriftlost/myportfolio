// Initialize AOS (Animate On Scroll) library with a focus on smooth, impactful transitions
AOS.init({
    duration: 1200, // Slightly longer default duration for smoother feels
    easing: 'ease-out-quad', // A very smooth, accelerating/decelerating easing
    once: true, // Animations happen only once as elements come into view
    mirror: false, // Elements do not animate out when scrolling past them
    anchorPlacement: 'top-bottom', // Defines when the animation should trigger
    offset: 150, // More aggressive offset to trigger animations slightly earlier
    delay: 80, // Slightly increased delay for chained animations
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor click behavior

        const targetId = this.getAttribute('href'); // Get the href value (e.g., "#about")
        const targetElement = document.querySelector(targetId); // Find the corresponding section

        if (targetElement) {
            // Scroll to the target element smoothly
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start' // Align the top of the element with the top of the viewport
            });
        }
    });
});

// Mobile menu toggle functionality
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
const closeMobileMenuButton = document.getElementById('close-mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenuOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    setTimeout(() => {
        mobileMenuOverlay.style.opacity = '1';
        // Dynamically add AOS animations to mobile menu links when opened
        mobileMenuOverlay.querySelectorAll('a').forEach((link, index) => {
            link.setAttribute('data-aos', 'fade-down');
            link.setAttribute('data-aos-delay', (index * 100 + 100).toString());
            link.classList.add('aos-init', 'aos-animate'); // Manually trigger if needed, AOS.refresh() usually enough
        });
    }, 10);
    AOS.refresh(); // Important: re-initialize AOS after content changes
});

closeMobileMenuButton.addEventListener('click', () => {
    mobileMenuOverlay.style.opacity = '0';
    document.body.style.overflow = ''; // Restore scrolling
    setTimeout(() => {
        mobileMenuOverlay.classList.add('hidden');
        // Remove AOS attributes from mobile menu links after closing
        mobileMenuOverlay.querySelectorAll('a').forEach(link => {
            link.removeAttribute('data-aos');
            link.removeAttribute('data-aos-delay');
            link.classList.remove('aos-init', 'aos-animate');
        });
    }, 300); // Match transition duration in CSS
});

// Close mobile menu when a link is clicked
mobileMenuOverlay.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuOverlay.style.opacity = '0';
        document.body.style.overflow = '';
        setTimeout(() => {
            mobileMenuOverlay.classList.add('hidden');
        }, 300);
    });
});


// Add 'scrolled' class to header on scroll for dynamic styling
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) { // Increased scroll threshold for 'scrolled' class
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Update current year in the footer dynamically
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