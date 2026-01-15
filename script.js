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

