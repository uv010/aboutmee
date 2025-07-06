

// Scroll Progress Bar
const progressBar = document.getElementById('progressBar');
const projectsSection = document.getElementById('Projects');

window.addEventListener('scroll', () => {
    const rect = projectsSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const sectionHeight = rect.height;
    const sectionTop = rect.top;

    // Calculate scroll progress within the Projects section
    if (sectionTop <= windowHeight && sectionTop + sectionHeight >= 0) {
        const scrollDistance = windowHeight + sectionHeight;
        const scrollProgress = (windowHeight - sectionTop) / scrollDistance;
        progressBar.style.transform = `scaleX(${Math.max(0, Math.min(1, scrollProgress))})`;
    } else {
        progressBar.style.transform = 'scaleX(0)';
    }
});

// Scroll-based reveal animations for project items
const images = document.querySelectorAll('.project-image');
const texts = document.querySelectorAll('.project-text');

const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

images.forEach(image => observer.observe(image));
texts.forEach(text => observer.observe(text));
