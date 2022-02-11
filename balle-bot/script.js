const nav = document.querySelector(".nav");
const hamburger = document.querySelector(".hamburger");

function toggle() {
    console.log("sas");
    hamburger.classList.toggle("show");
    nav.classList.toggle("show");
}

hamburger.addEventListener("click", event => {
    toggle();
    event.stopPropagation();
});

nav.addEventListener("click", event => {
    event.stopPropagation();
});

window.addEventListener("click", event => {
    if (nav.classList.contains("show")) {
        toggle();
    }
})