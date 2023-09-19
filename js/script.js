const hambrg = document.querySelector("menu");
const hamBars = '<i class="bi bi-list"></i>';
const hamX = '<i class="bi bi-x"></i>';
const navBar = document.getElementById("mob-nav-items");
function navToggle() {
    if (hambrg.innerHTML == hamBars) {
        hambrg.innerHTML = hamX;
    } else {
        hambrg.innerHTML = hamBars;
    }

    navBar.classList.toggle("visible");
}

function msgFormSubmit() {
    alert("Thankyou for messaging me.");
}