document.addEventListener("DOMContentLoaded", () => {
   // Portfolio Circle Animation
  const rotatingSvg = document.getElementById("rotatingSvg");
  let rotation = 0;
  const rotationSpeed = 0.6; // degrees per frame

  function animateCircle() {
    rotation += rotationSpeed;
    if (rotation >= 360) {
      rotation = 0;
    }
    rotatingSvg.style.transform = `rotate(${rotation}deg)`;
    requestAnimationFrame(animateCircle);
  }

  animateCircle();

  
});
