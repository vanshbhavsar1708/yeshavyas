// Toggle Navbar Menu
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.style.display = (nav.style.display === "flex") ? "none" : "flex";
}

// Smooth scroll to section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}
// Loader
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.classList.add("hidden");
});
