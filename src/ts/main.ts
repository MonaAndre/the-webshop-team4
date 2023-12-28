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
const product1 = new Products("Lugnvik", 1679, "https://i.imgur.com/Xh1jbqe.png", "Brun stol trä", "Stolar", "Brun");
const product2 = new Products("Aspelund", 1498, "https://i.imgur.com/DlYgzC6.png", "Modern brun träd stol", "Stolar", "Brun");
const product3 = new Products("Sarek", 3219, "https://i.imgur.com/K00Kozt.png", "Lyxig trä stol", "Stolar", "Grön");
const product4 = new Products("Princeton", 4398, "https://i.imgur.com/tmetJY1.png", "Lyxig svart trä stol", "Stolar", "Gul");
const product5 = new Products("Norrebro", 798, "https://i.imgur.com/Z1KGkvL.png", "Description 5", "Stolar", "Lila");
const product6 = new Products("Albany", 8339, "https://i.imgur.com/gQfVqiJ.png", "Description 6", "Soffor", "Orange");
const product7 = new Products("Matara", 11199, "https://i.imgur.com/SKstywQ.png", "Description 7", "Soffor", "Svart");
const product8 = new Products("Denton", 4164, "https://i.imgur.com/Txp0v1I.jpg", "Description 8", "Soffor", "Vit");
const product9 = new Products("Baltimore", 3659, "https://i.imgur.com/FdyNuIT.jpg", "Description 9", "Soffor", "Brun");
const product10 = new Products("Wyoming", 7699, "https://i.imgur.com/FGydSor.jpg", "Description 10", "Soffor", "Grå");
const product11 = new Products("Touluse", 1679, "https://i.imgur.com/Cw4H6Ep.png", "Description 11", "Bord", "Rosa");
const product12 = new Products("Grenelle", 689, "https://i.imgur.com/0oz7OrW.jpg", "Description 12", "Bord", "Cyan");
const product13 = new Products("Vernon", 3249, "https://i.imgur.com/QGxc8QF.jpg", "Description 13", "Bord", "Magenta");
const product14 = new Products("Futo", 2499, "https://i.imgur.com/c4ACTev.jpg", "Description 14", "Bord", "Lime");
const product15 = new Products("Walle", 1299, "https://i.imgur.com/mAhn51f.jpg", "Description 15", "Bord", "Turquoise");
const product16 = new Products("Eira", 14399, "https://i.imgur.com/fOC7U9k.png", "Description 16", "Sängar", "Guld");
const product17 = new Products("Pelow", 7899, "https://i.imgur.com/AI3tx7c.png", "Description 17", "Sängar", "Silver");
const product18 = new Products("Dermy", 23679, "https://i.imgur.com/i2o6DOJ.png", "Description 18", "Sängar", "Bronze");
const product19 = new Products("Tiveden", 30598, "https://i.imgur.com/5nQHJ9O.png", "Description 19", "Sängar", "Platinum");
const product20 = new Products("Skene", 26849, "https://i.imgur.com/BXbg11X.png", "Description 20", "Sängar", "Ruby");
//-------------Skapa lista av objekten---------------
const productsArray: Products[] = [
    product1, product2, product3, product4, product5,
    product6, product7, product8, product9, product10,
    product11, product12, product13, product14, product15,
    product16, product17, product18, product19, product20
];

const productsContainer = document.getElementById("app");

for (let i = 0; i < productsArray.length; i++) {
  const productCard= document.createElement("div");
  productCard.className= "product-card"
  const img = document.createElement("img");
  const imgContainer = document.createElement("div");
  imgContainer.className="product-card__img-container";
  imgContainer.appendChild(img);
  img.src = productsArray[i].image;
  img.className = "produkt-card__img";
  const productPrice= document.createElement("p");
  productPrice.className="product-card__price"
  productPrice.innerHTML=productsArray[i].price + " kr";
  
  
  const productName= document.createElement("h3");
  productName.className="product-card__title";
  productName.innerHTML=productsArray[i].title;
  productCard?.appendChild(imgContainer);
  productCard?.appendChild(productName);
  productCard?.appendChild(productPrice);
  productsContainer?.appendChild(productCard);

  const addBtn= document.createElement("button");
  addBtn.innerHTML = '<i class="bi bi-cart-plus"></i> Add Product';
  addBtn.className = "product-card__button";
  productCard.appendChild(addBtn);
  
}

// const addBtn= document.querySelectorAll(".product-card__button") as HTMLButtonElement;
// addBtn?.addEventListener("click" addProductToBasket);