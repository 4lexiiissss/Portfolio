lucide.createIcons();

// Gestion du scroll nav
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(11, 15, 26, 0.98)';
        nav.style.padding = '0.8rem 5%';
    } else {
        nav.style.background = 'rgba(11, 15, 26, 0.9)';
        nav.style.padding = '1.2rem 5%';
    }
});

// Reveal animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Système de filtres
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.card');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                if (filterValue === 'all' || card.classList.contains(`category-${filterValue}`)) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.display = 'none';
                }
            }, 300);
        });
    });
});

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('#nav-list');

// 1. Ouvrir le menu au clic sur le burger
menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

// 2. Fermer le menu automatiquement quand on clique sur un lien
document.querySelectorAll('.nav-links a').forEach(n => n.addEventListener('click', () => {
  menu.classList.remove('is-active');
  menuLinks.classList.remove('active');
}));
