const btn = document.querySelector("span");
const sound = document.getElementById("mySound")

btn.addEventListener("click", () => {
    sound.play();
});

btn.addEventListener("mouseenter", async () => {
    await sound.play();
})

btn.addEventListener("mouseleave", () => {
    sound.pause();
})