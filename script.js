/*
    Custom JavaScript for the Portfolio Website
*/

// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {

    // --- Header Scroll Effect ---
    // Select the header element
    const header = document.querySelector('header');

    // Function to handle the scroll event
    const handleScroll = () => {
        // Add the 'scrolled' class to the header if the user has scrolled down
        // 50 pixels or more, otherwise remove the class.
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    // Add a scroll event listener to the window
    window.addEventListener('scroll', handleScroll);


    // --- Mobile Menu Toggle ---
    // Select the mobile menu button and the mobile menu itself
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    // Check if both elements exist before adding an event listener
    if (mobileMenuButton && mobileMenu) {
        // Add a click event listener to the menu button
        mobileMenuButton.addEventListener('click', () => {
            // Toggle the 'hidden' class on the mobile menu to show/hide it
            mobileMenu.classList.toggle('hidden');
        });
    }


    // --- Close Mobile Menu on Link Click ---
    // Select all the links within the mobile menu
    const mobileMenuLinks = document.querySelectorAll('#mobile-menu a');

    // Function to close the mobile menu
    const closeMobileMenu = () => {
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    };

    // Loop through each link and add a click event listener
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

});

// Note: The AOS (Animate on Scroll) library is initialized directly in the HTML
// file (`index.html`) for optimal performance, ensuring animations are ready
// as soon as possible. No additional setup is needed here for it.