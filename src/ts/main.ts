import "./../scss/style.scss";
import { Products } from "./models/products";
import { updateModalContent } from "./modalcreator.ts";

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
const product1 = new Products(
  1,
  "Lugnvik",
  1679,
  "https://i.imgur.com/Xh1jbqe.png",
  "Brun stol trä",
  "Stolar",
  "Brun"
);
const product2 = new Products(
  2,
  "Aspelund",
  1498,
  "https://i.imgur.com/DlYgzC6.png",
  "Modern brun träd stol",
  "Stolar",
  "Brun"
);
const product3 = new Products(
  3,
  "Sarek",
  3219,
  "https://i.imgur.com/K00Kozt.png",
  "Lyxig trä stol",
  "Stolar",
  "Grön"
);
const product4 = new Products(
  4,
  "Princeton",
  4398,
  "https://i.imgur.com/tmetJY1.png",
  "Lyxig svart trä stol",
  "Stolar",
  "Gul"
);
const product5 = new Products(
  5,
  "Norrebro",
  798,
  "https://i.imgur.com/Z1KGkvL.png",
  "Description 5",
  "Stolar",
  "Lila"
);
const product6 = new Products(
  6,
  "Albany",
  8339,
  "https://i.imgur.com/gQfVqiJ.png",
  "Description 6",
  "Soffor",
  "Orange"
);
const product7 = new Products(
  7,
  "Matara",
  11199,
  "https://i.imgur.com/SKstywQ.png",
  "Description 7",
  "Soffor",
  "Svart"
);
const product8 = new Products(
  8,
  "Denton",
  4164,
  "https://i.imgur.com/Txp0v1I.jpg",
  "Description 8",
  "Soffor",
  "Vit"
);
const product9 = new Products(
  9,
  "Baltimore",
  3659,
  "https://i.imgur.com/FdyNuIT.jpg",
  "Description 9",
  "Soffor",
  "Brun"
);
const product10 = new Products(
  10,
  "Wyoming",
  7699,
  "https://i.imgur.com/FGydSor.jpg",
  "Description 10",
  "Soffor",
  "Grå"
);
const product11 = new Products(
  11,
  "Touluse",
  1679,
  "https://i.imgur.com/Cw4H6Ep.png",
  "Description 11",
  "Bord",
  "Rosa"
);
const product12 = new Products(
  12,
  "Grenelle",
  689,
  "https://i.imgur.com/0oz7OrW.jpg",
  "Description 12",
  "Bord",
  "Cyan"
);
const product13 = new Products(
  13,
  "Vernon",
  3249,
  "https://i.imgur.com/QGxc8QF.jpg",
  "Description 13",
  "Bord",
  "Magenta"
);
const product14 = new Products(
  14,
  "Futo",
  2499,
  "https://i.imgur.com/c4ACTev.jpg",
  "Description 14",
  "Bord",
  "Lime"
);
const product15 = new Products(
  15,
  "Walle",
  1299,
  "https://i.imgur.com/mAhn51f.jpg",
  "Description 15",
  "Bord",
  "Turquoise"
);
const product16 = new Products(
  16,
  "Eira",
  14399,
  "https://i.imgur.com/fOC7U9k.png",
  "Description 16",
  "Sängar",
  "Guld"
);
const product17 = new Products(
  17,
  "Pelow",
  7899,
  "https://i.imgur.com/AI3tx7c.png",
  "Description 17",
  "Sängar",
  "Silver"
);
const product18 = new Products(
  18,
  "Dermy",
  23679,
  "https://i.imgur.com/i2o6DOJ.png",
  "Description 18",
  "Sängar",
  "Bronze"
);
const product19 = new Products(
  19,
  "Tiveden",
  30598,
  "https://i.imgur.com/5nQHJ9O.png",
  "Description 19",
  "Sängar",
  "Platinum"
);
const product20 = new Products(
  20,
  "Skene",
  26849,
  "https://i.imgur.com/BXbg11X.png",
  "Description 20",
  "Sängar",
  "Ruby"
);
//-------------Skapa lista av objekten---------------
const productsArray: Products[] = [
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
  product10,
  product11,
  product12,
  product13,
  product14,
  product15,
  product16,
  product17,
  product18,
  product19,
  product20,
];

//Create basket array
const basket: Products[] = [];

const productsContainer = document.getElementById("app");

productsArray.forEach((product) => {
  //Skapa Element
  const productCard = document.createElement("div");
  const img = document.createElement("img");
  const imgContainer = document.createElement("div");
  const productPrice = document.createElement("p");
  const productName = document.createElement("h3");
  const addBtn = document.createElement("button");

  //Lägg till klassnamn
  productCard.className = "product-card";
  imgContainer.className = "product-card__img-container";
  img.className = "produkt-card__img";
  productPrice.className = "product-card__price";
  productName.className = "product-card__title";
  addBtn.className = "product-card__button";

  //Lägg till Innehåll
  productName.innerHTML = product.title;
  img.src = product.image;
  productPrice.innerHTML = product.price + " kr";
  addBtn.innerHTML = '<i class="bi bi-cart-plus"></i> Add Product';

  imgContainer.appendChild(img);
  productCard?.appendChild(imgContainer);
  productCard?.appendChild(productName);
  productCard?.appendChild(productPrice);
  productCard?.appendChild(addBtn);
  productsContainer?.appendChild(productCard);

  productCard.addEventListener("click", () => {
    updateModalContent(product);
  });

  addBtn.addEventListener("click", () => {
    addToCartClicked(product);
  });
});
export function addToCartClicked(product: Products) {
  basket.push(product);
  console.log(basket);
  product.quantity++;
}
/*
for (let i = 0; i < productsArray.length; i++) {
  //Skapa Element
  const productCard = document.createElement("div");
  const img = document.createElement("img");
  const imgContainer = document.createElement("div");
  const productPrice = document.createElement("p");
  const productName = document.createElement("h3");
  const addBtn = document.createElement("button");

  //Lägg till klassnamn
  productCard.className = "product-card";
  imgContainer.className = "product-card__img-container";
  img.className = "produkt-card__img";
  productPrice.className = "product-card__price";
  productName.className = "product-card__title";
  addBtn.className = "modal-card__button";

  //Lägg till Innehåll
  productName.innerHTML = productsArray[i].title;
  img.src = productsArray[i].image;
  productPrice.innerHTML = productsArray[i].price + " kr";

  imgContainer.appendChild(img);
  productCard?.appendChild(imgContainer);
  productCard?.appendChild(productName);
  productCard?.appendChild(productPrice);
  productsContainer?.appendChild(productCard);
  addBtn.innerHTML = '<i class="bi bi-cart-plus"></i> Add Product';

  productCard.addEventListener("click", () => {
    updateModalContent(productsArray[i]);
  });

  addBtn.addEventListener("click", () => {
    basket.push();
  });
}

// if id_product === id_click {get information}
*/
/*


function addItemToCart(itemTitle, itemPrice, itemImage){
 const cartRow = document.createElement("div");
}




const renderList = () => {
  //Hämta ul-taggen som listan ska visas i
  const ul = document.getElementById("todo");
  ul.innerHTML = "";

  //Loopa igenom listan todoList
  todoList.forEach((toDo, i) => {
    //Skapa element för egenskaperna i objektet Task
    const li = document.createElement("li");
    const task = document.createElement("span");
    const room = document.createElement("span");
    const time = document.createElement("span");
    const button = document.createElement("button");

    //lägga till innehåll i elementen från objektet Task
    task.innerHTML = toDo.task;
    room.innerHTML = toDo.room;
    time.innerHTML = toDo.aproxTime;
    button.innerHTML = "Mark as done";

    //Lägga till css klasser
    li.className = "li";
    button.className = "btn li__button";
    task.className = "li__task";
    room.className = "li__room";
    time.className = "li__time";

    //Lyssnar och agerar på det
    button.addEventListener("click", (e) => {
      toDo.done = true;
      doneList.push(toDo);
      todoList.splice(i, 1);
      renderList();
      renderDoneList();
    });

    //Placera
    li.appendChild(task);
    li.appendChild(room);
    li.appendChild(time);
    li.appendChild(button);
    ul.appendChild(li);
  });
  //Kolla att det funkar som det ska
  console.log(todoList);
  console.log(doneList);
};

const renderDoneList = () => {
  //Hämta ul taggen som listan kommer visas i
  const doneUl = document.getElementById("done");
  doneUl.innerHTML = "";

  doneList.forEach((taskDone, i) => {
    //Skapa element för varje del i listan doneList
    const doneLi = document.createElement("li");
    const doneTask = document.createElement("span");
    const doneRoom = document.createElement("span");
    const doneTime = document.createElement("span");
    const doneButton = document.createElement("button");

    //Fyller i elementen
    doneTask.innerHTML = taskDone.task;
    doneRoom.innerHTML = taskDone.room;
    doneTime.innerHTML = taskDone.aproxTime;
    doneButton.innerHTML = "Mark as not done";

    //Lägga till css klasser
    doneLi.className = "li";
    doneButton.className = "btn li__button";
    doneTask.className = "li__task";
    doneRoom.className = "li__room";
    doneTime.className = "li__time";

    //lyssna efter click och agera därefter
    doneButton.addEventListener("click", (e) => {
      todoList.push(taskDone);
      doneList.splice(i, 1);
      renderList();
      renderDoneList();
    });

    //Placerar allt
    doneLi.appendChild(doneTask);
    doneLi.appendChild(doneRoom);
    doneLi.appendChild(doneTime);
    doneLi.appendChild(doneButton);
    doneUl.appendChild(doneLi);
  });
  console.log(todoList);
  console.log(doneList);
};

renderList();*/
