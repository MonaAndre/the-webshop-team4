import "./../scss/style.scss";
import axios from "axios";
import { Products } from "./models/products";

//----------------Hamburger Menu Functions-----------------------
const menuBtn = document.querySelector(".hamburger") as HTMLButtonElement;
const hamburgerNav = document.querySelector(".hamburgerNav") as HTMLElement;
const banner = document.querySelector(".banner") as HTMLElement;
//Add a listener to listen after click on hamburger menu icon
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("isActive");
  hamburgerNav.classList.toggle("isActive");
  banner.classList.toggle("isActive");
});

//------ DATABAS -----------
/* Kategorier
1. Bord
2. Stolar
  länkar:
    https://ibb.co/4dQBH4N
    https://ibb.co/WWgDSWR
    https://ibb.co/HVQnQRp
    https://ibb.co/HKTqHwh
    https://ibb.co/jZnpzr1
    https://media.istockphoto.com/id/1428278363/sv/foto/trendy-stool-with-and-build-in-storage-side-view-white-wall-space-for-text.jpg?s=612x612&w=is&k=20&c=FkQrafpbWNy5nWf1-4RNlqFKLEXRDxwen5FUaA8i2eg=
    
3. Soffor
4. Sängar
*/
const product1 = new Products("Fåtölj", 20.99, "https://ibb.co/jZnpzr1", "Description 1", "Bord", "Röd");
const product2 = new Products("Stor ottoman", 30.49, "image2.jpg", "Description 2", "Stolar", "Blå");
const product3 = new Products("Kontinentalsäng", 15.75, "image3.jpg", "Description 3", "Bord", "Grön");
const product4 = new Products("Tv-bänk", 25.00, "image4.jpg", "Description 4", "Stolar", "Gul");
const product5 = new Products("Product 5", 18.50, "image5.jpg", "Description 5", "Soffor", "Lila");
const product6 = new Products("Product 6", 22.99, "image6.jpg", "Description 6", "sängar", "Orange");
const product7 = new Products("Product 7", 29.95, "image7.jpg", "Description 7", "Bord", "Svart");
const product8 = new Products("Product 8", 12.80, "image8.jpg", "Description 8", "Stolar", "Vit");
const product9 = new Products("Product 9", 35.25, "image9.jpg", "Description 9", "sängar", "Brun");
const product10 = new Products("Product 10", 19.99, "image10.jpg", "Description 10", "Bord", "Grå");
const product11 = new Products("Product 11", 27.50, "image11.jpg", "Description 11", "stolar", "Rosa");
const product12 = new Products("Product 12", 14.95, "image12.jpg", "Description 12", "soffor", "Cyan");
const product13 = new Products("Product 13", 23.00, "image13.jpg", "Description 13", "bord", "Magenta");
const product14 = new Products("Product 14", 31.20, "image14.jpg", "Description 14", "Stolar", "Lime");
const product15 = new Products("Product 15", 16.75, "image15.jpg", "Description 15", "soffor", "Turquoise");
const product16 = new Products("Product 16", 21.50, "image16.jpg", "Description 16", "Bord", "Guld");
const product17 = new Products("Product 17", 28.99, "image17.jpg", "Description 17", "stolar", "Silver");
const product18 = new Products("Product 18", 13.45, "image18.jpg", "Description 18", "soffor", "Bronze");
const product19 = new Products("Product 19", 32.80, "image19.jpg", "Description 19", "bord", "Platinum");
const product20 = new Products("Product 20", 17.25, "image20.jpg", "Description 20", "stolar", "Ruby");

const productsArray: Products[] = [
    product1, product2, product3, product4, product5,
    product6, product7, product8, product9, product10,
    product11, product12, product13, product14, product15,
    product16, product17, product18, product19, product20
];

const productsContainer = document.getElementById("app");

for (let i = 0; i < productsArray.length; i++) {
  const img = document.createElement("img");
  img.src = productsArray[i].image;
  productsContainer?.appendChild(img);

}