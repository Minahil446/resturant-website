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