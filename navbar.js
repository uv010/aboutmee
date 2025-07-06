
document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll and Toggle Logic
    let lastScrollTop = 0;
    const navbar = document.getElementById('navbar');
    const desktopNav = document.getElementById('desktop-nav');
    const desktopNavLogo = document.getElementById('desktop-nav-logo');
    const desktopNavLinks = document.getElementById('desktop-nav-links');
    const desktopNavResume = document.getElementById('desktop-nav-resume');
    const desktopNavToggle = document.getElementById('desktop-nav-toggle');
    let isNavCollapsed = false;

    function updateNavbar() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop && scrollTop > 100 && window.innerWidth >= 768) {
            navbar.classList.remove('navbar-visible');
            navbar.classList.add('navbar-hidden');
            desktopNav.classList.add('nav-collapsed');
            desktopNav.classList.remove('nav-expanded');
            desktopNavLogo.classList.add('hidden');
            desktopNavLinks.classList.add('hidden');
            desktopNavResume.classList.add('hidden');
            desktopNavToggle.classList.remove('hidden');
            desktopNavToggle.innerHTML = `<i class="fas fa-bars text-gray-600"></i>`;
            isNavCollapsed = true;
        } else {
            navbar.classList.remove('navbar-hidden');
            navbar.classList.add('navbar-visible');
            desktopNav.classList.remove('nav-collapsed');
            desktopNav.classList.add('nav-expanded');
            desktopNavLogo.classList.remove('hidden');
            desktopNavLinks.classList.remove('hidden');
            desktopNavResume.classList.remove('hidden');
            desktopNavToggle.classList.add('hidden');
            desktopNavToggle.innerHTML = `<i class="fas fa-bars text-gray-600"></i>`;
            isNavCollapsed = false;
        }
        lastScrollTop = scrollTop;
    }

    window.addEventListener('scroll', updateNavbar);
    window.addEventListener('resize', updateNavbar);

    // Desktop Navbar Toggle
    desktopNavToggle.addEventListener('click', () => {
        if (isNavCollapsed) {
            navbar.classList.remove('navbar-hidden');
            navbar.classList.add('navbar-visible');
            desktopNav.classList.remove('nav-collapsed');
            desktopNav.classList.add('nav-expanded');
            desktopNavLogo.classList.remove('hidden');
            desktopNavLinks.classList.remove('hidden');
            desktopNavResume.classList.remove('hidden');
            desktopNavToggle.classList.add('hidden');
            desktopNavToggle.innerHTML = `<i class="fas fa-bars  text-gray-600"></i>`;
            isNavCollapsed = false;
        } else {
            desktopNav.classList.add('nav-collapsed');
            desktopNav.classList.remove('nav-expanded');
            desktopNavLogo.classList.add('hidden');
            desktopNavLinks.classList.add('hidden');
            desktopNavResume.classList.add('hidden');
            desktopNavToggle.classList.remove('hidden');
            desktopNavToggle.innerHTML = `<i class="fas fa-times  text-gray-600"></i>`;
            isNavCollapsed = true;
        }
    });

    // Mobile Menu Toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuToggle.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.contains('hidden');
        mobileMenu.classList.toggle('hidden', !isHidden);
        mobileMenu.classList.toggle('visible', isHidden);
        mobileMenuToggle.innerHTML = isHidden
            ? '<i class="fas fa-times text-gray-600 text-4xl"></i>'
            : '<i class="fas fa-bars text-gray-600 text-4xl"></i>';
    });
});
