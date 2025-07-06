document.addEventListener("DOMContentLoaded", function () {
  // Cursor Follow
  const cursor = document.querySelector(".cursor");
  const cursorFollower = document.querySelector(".cursor-follower");
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
    gsap.to(cursorFollower, { left: e.clientX, top: e.clientY, duration: 0.5 });
  });
});
