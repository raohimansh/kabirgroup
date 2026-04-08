function toggleMenu(){
  let menu = document.getElementById("mobileMenu");

  if(menu.style.display === "flex"){
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}

function searchSite(){
  let query = document.getElementById("searchInput")?.value.toLowerCase();

  if(!query) return;

  if(query.includes("meter")) window.location.href="services.html";
  else if(query.includes("electrical")) window.location.href="services.html";
  else if(query.includes("contact")) window.location.href="contact.html";
  else alert("No result found");
}
