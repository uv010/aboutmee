// Experience Section Animation
document.addEventListener('DOMContentLoaded', () => {
    const experienceSection = document.querySelector('#experience');
    const experienceItems = document.querySelectorAll('.experience-item');
    const timelineLine = document.querySelector('#experience .absolute');

    // Animate experience section when scrolled into view
    const experienceObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate the section header
                gsap.to(entry.target.querySelector('.text-center'), {
                    opacity: 1,
                    y: 0,
                    duration: 0.8
                });

                // Animate the timeline line
                gsap.to(timelineLine, {
                    opacity: 1,
                    height: '100%',
                    duration: 1.5,
                    ease: "power3.out"
                });

                // Animate each experience item with a stagger
                gsap.to(experienceItems, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "back.out(1.7)"
                });

                // Stop observing after animation
                experienceObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    experienceObserver.observe(experienceSection);
});
