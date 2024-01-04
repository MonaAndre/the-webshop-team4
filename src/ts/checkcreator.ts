export function updateCheckoutContent() {
  const checkoutModal = document.getElementById(
    "modal-information"
  ) as HTMLDivElement;


  const hideMain = document.getElementById("checkoutMain") as HTMLElement; //Hämtar main där 
  hideMain.className = "hideCheckoutInfo";

  const loader = document.createElement("div");
  loader.className = "loader";
  loader.innerHTML=`<div class="spinner-border m-5" role="status">
  <span class="sr-only">Loading...</span>
</div>`;
  

  const orderConfirmation = document.createElement("div");
  const orderNumber = document.createElement("p");
  const thanksForOrder = document.createElement("h2");
  const emailSent = document.createElement("h3");
  const orderDate = document.createElement("p");
  const checkmark = document.createElement("p");
  
  orderNumber.innerHTML = "Order no.: " + Math.floor(100000 + Math.random() * 900000).toString();
  orderDate.innerHTML = "Order date: " + new Date().toDateString();
  thanksForOrder.innerHTML = "Thank you for your order!";
  emailSent.innerHTML = "Your order has been received and an confirmation has been sent to your email."
  checkmark.innerHTML = '<i class="fas fa-check-circle"></i>';

  orderConfirmation.className = "orderConfirmContainer";
  orderNumber.className = "orderNumber";
  orderDate.className = "orderDate";
  thanksForOrder.className = "thanksOrder";
  emailSent.className = "emailSent";
  checkmark.className = "checkmarkOrder";

  console.log(orderNumber);
  console.log(orderDate);

  
  orderConfirmation.appendChild(loader);
  orderConfirmation.appendChild(thanksForOrder);
  orderConfirmation.appendChild(checkmark);
  orderConfirmation.appendChild(emailSent);
  orderConfirmation.appendChild(orderNumber);
  orderConfirmation.appendChild(orderDate); 
  checkoutModal.appendChild(orderConfirmation);





  setTimeout(()=>{
const spinner= document.querySelector(".spinner-border") as HTMLDivElement;
spinner.style.display="none";
orderConfirmation.style.display="block";
  },2000);
 

}