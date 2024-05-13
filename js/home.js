const slideWrapper = document.querySelector(".slide_wrapper");
const authorCard = document.querySelector(".author_card");
const feautredAuthor = document.querySelector(".feautred_author");
const feautredAuthorSlide = document.querySelector(".feautred_author_slide");
const chevrons = document.querySelectorAll(".chevron");
const lastAuthorCard = document.querySelector(".last_author_card");
const firstAuthorCard = document.querySelector(".first_author_card");

// crousel animation
let translatePerc = 1;
setInterval(() => {
    if (translatePerc >= slideWrapper.childElementCount) {
        slideWrapper.style.transform = `translateX(0)`;
        translatePerc = 1;
    } else {
        slideWrapper.style.transform = `translateX(-${100 * translatePerc}%)`;
        translatePerc++;
    }
}, 2000);

// authors slide functionality

let authorCardWidth = authorCard.getBoundingClientRect().width;
let feautredAuthorSlideInfo = feautredAuthorSlide.getBoundingClientRect();
let lastAuthorCardRight = 0;
let firstAuthorCardLeft = 0;
let translate = 0;

window.addEventListener("resize", () => {
    authorCardWidth = authorCard.getBoundingClientRect().width;
    feautredAuthorSlideInfo = feautredAuthorSlide.getBoundingClientRect();
});

Array.from(chevrons, chevron => {
    chevron.addEventListener("click", e => {
        if (chevron.classList.contains("chevron_right")) {
            if (
                Math.floor(feautredAuthorSlideInfo.right) >=
                Math.floor(
                    (lastAuthorCardRight =
                        lastAuthorCard.getBoundingClientRect().right)
                )
            )
                return;
            feautredAuthor.style.transform = `translateX(-${(translate +=
                authorCardWidth)}px)`;
        } else {
            if (
                Math.floor(feautredAuthorSlideInfo.left) <=
                Math.floor(
                    (firstAuthorCardLeft =
                        firstAuthorCard.getBoundingClientRect().left)
                )
            )
                return;
            feautredAuthor.style.transform = `translateX(-${(translate -=
                authorCardWidth)}px)`;
        }
    });
});
