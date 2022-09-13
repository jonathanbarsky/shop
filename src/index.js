const desktopMenu = document.querySelector(".desktop-menu");
const navbarEmail = document.querySelector(".navbar-email");

navbarEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu(){
desktopMenu.classList.toggle("inactive");
//    true ? desktopMenu.classList.add("inactive") : desktopMenu.classList.remove("inactive");
}