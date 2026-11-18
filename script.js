var views=["home","consulting","support","recruitment","professionals","about","contact"];
function route(){var h=(location.hash||"").slice(1);if(views.indexOf(h)<0)h="home";
views.forEach(function(v){document.getElementById(v).classList.toggle("on",v===h)});
document.querySelectorAll("nav a").forEach(function(a){if(a.getAttribute("href")==="#"+h)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current")});
document.title=(h==="home"?"TechShield":h.charAt(0).toUpperCase()+h.slice(1))+" – TechShield";window.scrollTo(0,0)}
window.addEventListener("hashchange",route);route();
document.querySelectorAll("form").forEach(function(f){f.addEventListener("submit",function(e){e.preventDefault();f.querySelector(".ok").style.display="block";f.querySelector("button").disabled=true;f.querySelector(".ok").scrollIntoView({block:"nearest"})})});
