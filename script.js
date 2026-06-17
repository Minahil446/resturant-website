// Mobile Menu Toggle Functionality
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {
    // Nav links ko show/hide karne ke liye toggle
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.direction = 'column';
    }
});