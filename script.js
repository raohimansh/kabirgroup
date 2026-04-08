function toggleMenu(){
  let m = document.getElementById("mobileMenu");
  m.style.display = (m.style.display==="flex") ? "none":"flex";
}

/* Real Search */
function searchSite(){
  let query = document.getElementById("searchInput").value.toLowerCase();

  if(query.includes("meter")) window.location.href="services.html";
  else if(query.includes("electrical")) window.location.href="services.html";
  else if(query.includes("contact")) window.location.href="contact.html";
  else alert("No result found");
}
