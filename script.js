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

document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    const filterBtns = document.querySelectorAll('.category-buttons .btn');
    const menuCards = document.querySelectorAll('.menu-card');

    // 1. Category Filter Functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelector('.category-buttons .btn.active').classList.remove('active');
            e.target.classList.add('active');

            const filterValue = e.target.getAttribute('data-filter');

            menuCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                if (filterValue === 'all' || filterValue === cardCategory) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 2. Search Bar Functionality
    if (searchBar) {
        searchBar.addEventListener('input', (e) => {
            const searchText = e.target.value.toLowerCase().trim();

            menuCards.forEach(card => {
                const foodTitle = card.querySelector('.food-title').textContent.toLowerCase();
                const foodDesc = card.querySelector('.food-desc').textContent.toLowerCase();

                if (foodTitle.includes(searchText) || foodDesc.includes(searchText)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
});
/* ===================================
   Contact Form Validation
====================================== */
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Form ko refresh hone se rokna

        // Elements
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const messageError = document.getElementById('messageError');
        const successMsg = document.getElementById('successMsg');

        // Clear previous messages
        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';
        successMsg.textContent = '';

        let isValid = true;

        // Name Validation
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Please enter your full name.';
            isValid = false;
        }

        // Email Validation
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Please enter your email address.';
            isValid = false;
        } else if (!emailInput.value.match(emailPattern)) {
            emailError.textContent = 'Please enter a valid email address.';
            isValid = false;
        }

        // Message Validation
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Please enter your message.';
            isValid = false;
        }

        // Success Message
        if (isValid) {
            successMsg.textContent = 'Thank you! Your message has been sent successfully.';
            contactForm.reset();
        }
    });
}