const crossIcon = document.querySelector(".cross_icon");
const hamburgerIcon = document.querySelector(".hamburger_icon");
const aside = document.querySelector(".aside");

hamburgerIcon.addEventListener("click", e => {
    aside.style.display = "flex";
});

crossIcon.addEventListener("click", () => {
    aside.style.display = "none";
});
