const glassWrapper = document.querySelector(".glass_wrapper");
const glowCircle = document.querySelector(".glow_circle");

glassWrapper.addEventListener("mousemove", e => {
    const rect = glassWrapper.getBoundingClientRect();
    const glowCircleWidth = glowCircle.getBoundingClientRect().width / 2;
    const glowCircleheight = glowCircle.getBoundingClientRect().height / 2;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    glowCircle.style.left = `${x - glowCircleWidth}px`;
    glowCircle.style.top = `${y - glowCircleheight}px`;
});
