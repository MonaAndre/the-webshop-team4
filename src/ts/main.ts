import "./../scss/style.scss";
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
3. Soffor
4. Sängar
*/
const product1 = new Products("Fåtölj", 20.99, "https://i.imgur.com/Xh1jbqe.png", "Brun stol trä", "Stolar", "Röd");
const product2 = new Products("Stor ottoman", 30.49, "https://i.imgur.com/DlYgzC6.png", "Modern brun träd stol", "Stolar", "Blå");
const product3 = new Products("Kontinentalsäng", 15.75, "https://i.imgur.com/K00Kozt.png", "Lyxig trä stol", "Stolar", "Grön");
const product4 = new Products("Tv-bänk", 25.00, "https://i.imgur.com/tmetJY1.png", "Lyxig svart trä stol", "Stolar", "Gul");
const product5 = new Products("Product 5", 18.50, "https://i.imgur.com/Z1KGkvL.png", "Description 5", "Stolar", "Lila");
const product6 = new Products("Product 6", 22.99, "https://i.imgur.com/gQfVqiJ.png", "Description 6", "Soffor", "Orange");
const product7 = new Products("Product 7", 29.95, "https://i.imgur.com/SKstywQ.png", "Description 7", "Soffor", "Svart");
const product8 = new Products("Product 8", 12.80, "https://i.imgur.com/Txp0v1I.jpg", "Description 8", "Soffor", "Vit");
const product9 = new Products("Product 9", 35.25, "https://i.imgur.com/FdyNuIT.jpg", "Description 9", "Soffor", "Brun");
const product10 = new Products("Product 10", 19.99, "https://i.imgur.com/FGydSor.jpg", "Description 10", "Soffor", "Grå");
// const product11 = new Products("Product 11", 27.50, "https://i.imgur.com/Cw4H6Ep.png", "Description 11", "Bord", "Rosa");
// const product12 = new Products("Product 12", 14.95, "https://i.imgur.com/0oz7OrW.jpg", "Description 12", "Bord", "Cyan");
// const product13 = new Products("Product 13", 23.00, "https://i.imgur.com/QGxc8QF.jpg", "Description 13", "Bord", "Magenta");
// const product14 = new Products("Product 14", 31.20, "https://i.imgur.com/c4ACTev.jpg", "Description 14", "Bord", "Lime");
// const product15 = new Products("Product 15", 16.75, "https://i.imgur.com/mAhn51f.jpg", "Description 15", "Bord", "Turquoise");
// const product16 = new Products("Product 16", 21.50, "https://i.imgur.com/fOC7U9k.png", "Description 16", "Sängar", "Guld");
// const product17 = new Products("Product 17", 28.99, "https://i.imgur.com/AI3tx7c.png", "Description 17", "Sängar", "Silver");
// const product18 = new Products("Product 18", 13.45, "https://i.imgur.com/i2o6DOJ.png", "Description 18", "Sängar", "Bronze");
// const product19 = new Products("Product 19", 32.80, "https://i.imgur.com/5nQHJ9O.png", "Description 19", "Sängar", "Platinum");
// const product20 = new Products("Product 20", 17.25, "https://i.imgur.com/BXbg11X.png", "Description 20", "Sängar", "Ruby");

const productsArray: Products[] = [
    product1, product2, product3, product4, product5,
    product6, product7, product8, product9, product10,
    // product11, product12, product13, product14, product15,
    // product16, product17, product18, product19, product20
];

const productsContainer = document.getElementById("app");

for (let i = 0; i < productsArray.length; i++) {
  const productCard= document.createElement("div");
  productCard.className= "product-card"
  const img = document.createElement("img");
  img.src = productsArray[i].image;
  img.className = "produkt-card__img";
  const productPrice= document.createElement("p");
  productPrice.className="product-card__price"
  productPrice.innerHTML=productsArray[i].price + " kr";
  
  
  const productName= document.createElement("h3");
  productName.className="product-card__title";
  productName.innerHTML=productsArray[i].title;
  productCard?.appendChild(img);
  productCard?.appendChild(productName);
  productCard?.appendChild(productPrice);
  productsContainer?.appendChild(productCard);


}