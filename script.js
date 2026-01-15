/*  
  🔷 MOBILE NAVIGATION TOGGLE
  This function opens and closes the hamburger menu on mobile.
  It works by adding/removing the "show" class from the nav menu.
*/

function toggleMenu() {
  const nav = document.getElementById("navLinks");

  // Toggle the "show" class to open/close the menu
  nav.classList.toggle("show");
}

setTimeout(() => {
  const splash = document.getElementById("splash-screen");
  if (splash) splash.style.display = "none";
}, 1000); // 1s video + 1s fade


// Slide Show
let currentSlide = 0;

function showSlide(n) {
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove("active");
  }

  slides[n].style.display = "block";
  dots[n].classList.add("active");
}

// Initial display
document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlide);

  // Auto-slide every 5 seconds
  setInterval(() => {
    currentSlide = (currentSlide + 1) % document.getElementsByClassName("slide").length;
    showSlide(currentSlide);
  }, 5000);
});

