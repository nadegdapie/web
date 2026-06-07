document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.querySelector('.burger-btn');
    const mainMenu = document.getElementById('main-menu');

    if (burgerBtn && mainMenu) {
        burgerBtn.addEventListener('click', () => {
            const isExpanded = burgerBtn.getAttribute('aria-expanded') === 'true';
            burgerBtn.setAttribute('aria-expanded', !isExpanded);
            mainMenu.classList.toggle('open');
        });

        mainMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mainMenu.classList.remove('open');
                burgerBtn.setAttribute('aria-expanded', 'false');
            });
        });

        document.addEventListener('click', (e) => {
            if (!burgerBtn.contains(e.target) && !mainMenu.contains(e.target)) {
                mainMenu.classList.remove('open');
                burgerBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }

    const themeToggleHeader = document.getElementById('theme-toggle-header');
    function applyTheme(theme) {
        document.body.className = theme;
        localStorage.setItem('ai-webdev-theme', theme);
    }
    if (themeToggleHeader) {
        const savedTheme = localStorage.getItem('ai-webdev-theme');
        if (savedTheme) applyTheme(savedTheme);

        themeToggleHeader.addEventListener('click', () => {
            const newTheme = document.body.classList.contains('dark-theme') ? 'light-theme' : 'dark-theme';
            applyTheme(newTheme);
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});