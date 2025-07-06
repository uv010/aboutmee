//Contact Section
document.addEventListener("DOMContentLoaded", () => {
  // Animate contact section elements when scrolled into view
  const contactSection = document.querySelector("#contact");
  const contactObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animate the section header
          gsap.to(entry.target.querySelector(".text-center"), {
            opacity: 1,
            y: 0,
            duration: 0.8,
          });

          // Animate the form
          gsap.to(entry.target.querySelector("form"), {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.3,
          });

          // Animate social links
          gsap.to(entry.target.querySelector(".flex.gap-4"), {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.6,
          });

          // Stop observing after animation
          contactObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  contactObserver.observe(contactSection);
});
