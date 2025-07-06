document.addEventListener("DOMContentLoaded", () => {
  // Hero Section Animations
  gsap.to(".text-sm.mb-4", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.3,
  });

  gsap.to("h1", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.5,
  });

  gsap.to("h2", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.7,
  });

  gsap.to("p.text-lg", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.9,
  });

  gsap.to(".flex.gap-4", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 1.1,
  });

  gsap.to(".opacity-0:last-child", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 1.3,
  });

  // Floating animation for 3D model
  gsap.to(".floating", {
    y: 20,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
});
