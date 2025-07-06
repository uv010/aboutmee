document.addEventListener("DOMContentLoaded", () => {
  // Skills Section Animation
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "GSAP",
    "MongoDB",
    "Git",
    "TailwindCSS",
  ];
  const backendSkills = ["Java", "Spring Boot", "MySQL", "Docker", "Postman"];

  // Double the arrays for infinite loop effect
  const repeatedFrontend = [...frontendSkills, ...frontendSkills];
  const repeatedBackend = [...backendSkills, ...backendSkills];

  // Create frontend skills elements
  const frontendContainer = document.getElementById("frontendSkills");
  repeatedFrontend.forEach((skill) => {
    const skillElement = document.createElement("span");
    skillElement.className =
      "inline-block h-[70px] text-4xl md:text-5xl xl:text-6xl font-bold text-gray-600 leading-[70px]";
    skillElement.textContent = skill;

    const separator = document.createElement("span");
    separator.className = "skill-separator";

    frontendContainer.appendChild(skillElement);
    frontendContainer.appendChild(separator);
  });

  // Create backend skills elements
  const backendContainer = document.getElementById("backendSkills");
  repeatedBackend.forEach((skill) => {
    const skillElement = document.createElement("span");
    skillElement.className =
      "inline-block h-[70px] text-4xl md:text-5xl xl:text-6xl font-bold text-gray-600 leading-[70px]";
    skillElement.textContent = skill;

    const separator = document.createElement("span");
    separator.className = "skill-separator";

    backendContainer.appendChild(skillElement);
    backendContainer.appendChild(separator);
  });

  // Animation variables for skills
  let lastScrollY = window.scrollY;
  let scrollDirection = "down";
  let frontendPosition = 0;
  let backendPosition = 0;
  const speed = 1;

  // Handle scroll direction
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    scrollDirection = scrollY > lastScrollY ? "down" : "up";
    lastScrollY = scrollY;
  });

  // Skills animation loop
  function animateSkills() {
    if (scrollDirection === "down") {
      frontendPosition -= speed;
      backendPosition += speed;

      // Reset position when halfway through
      if (frontendPosition <= -frontendContainer.offsetWidth / 2) {
        frontendPosition = 0;
      }
      if (backendPosition >= 0) {
        backendPosition = -backendContainer.offsetWidth / 2;
      }
    } else {
      frontendPosition += speed;
      backendPosition -= speed;

      // Reset position when back to start
      if (frontendPosition >= 0) {
        frontendPosition = -frontendContainer.offsetWidth / 2;
      }
      if (backendPosition <= -backendContainer.offsetWidth / 2) {
        backendPosition = 0;
      }
    }

    frontendContainer.style.transform = `translateX(${frontendPosition}px)`;
    backendContainer.style.transform = `translateX(${backendPosition}px)`;

    requestAnimationFrame(animateSkills);
  }

  animateSkills();
});
