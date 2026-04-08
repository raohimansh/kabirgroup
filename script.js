function toggleMenu() {
  let menu = document.getElementById("mobileMenu");
  menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}

document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("mobileMenu").style.display = "none";
  });
});
