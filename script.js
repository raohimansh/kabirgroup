/* Mobile Menu */
function toggleMenu(){
  let m = document.getElementById("mobileMenu");
  m.style.display = (m.style.display==="flex") ? "none":"flex";
}

/* Search */
function searchSite(){
  let query = document.getElementById("searchInput")?.value.toLowerCase();

  if(!query) return;

  if(query.includes("meter")) window.location.href="services.html";
  else if(query.includes("electrical")) window.location.href="services.html";
  else if(query.includes("contact")) window.location.href="contact.html";
  else alert("No result found");
}

/* Navbar Scroll Effect */
window.addEventListener("scroll", function(){
  let navbar = document.getElementById("navbar");

  if(window.scrollY > 50){
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* Active Tab Highlight */
let links = document.querySelectorAll(".nav-item");

links.forEach(link => {
  if(link.href === window.location.href){
    link.classList.add("active");
  }
});
