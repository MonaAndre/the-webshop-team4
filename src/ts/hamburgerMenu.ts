export function hamburger {

const menuBtn = document.querySelector(".hamburger") as HTMLButtonElement;


menuBtn?.addEventListener("click", () => {
    menuBtn.classList.toggle("is-active");
})
}