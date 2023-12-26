import "./../scss/style.scss";
import { hamburger } from "./hamburgerMenu";

const menuBtn = document.querySelector(".hamburger") as HTMLButtonElement;

menuBtn.addEventListener("click", hamburger);
