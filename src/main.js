import "./style.css";
import Alpine from 'alpinejs'
 
window.Alpine = Alpine
 
Alpine.start()

window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");
  document.querySelector("#topnav1").classList.add("hidden");
  document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}

function toggleMenu() {
  console.log("toggleMenu");
  document.querySelector("#topnav1").classList.toggle("hidden");

  let erSkjult = document
    .querySelector("#topnav1")
    .classList.contains("hidden");

  if (erSkjult == true) {
    document.querySelector("#menuknap").textContent = "☰";
  } else {
    document.querySelector("#menuknap").textContent = "X";
  }
}

const acceptCookie = document.querySelector("#accepter");
const denyCookie = document.querySelector("#afvis");
const cookieboks = document.querySelector ("#cookieboks");

acceptCookie.addEventListener("click", fjernCookieboks);
denyCookie.addEventListener("click", fjernCookieboks);

function fjernCookieboks(){
    cookieboks.classList.add("hidden"); 

    sessionStorage.setItem("fjernCookieboks", true);
}

//if (sessionStorage.getItem("fjernCookieboks")){
    //cookieboks.classList.add("hidden");

//}
