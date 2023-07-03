
// POP UP MODAL 
var modal = document.getElementById("myModal");   // Get the modal
var btn = document.getElementById("myBtn"); // Get the button that opens the modal
var span = document.getElementsByClassName("close")[0]; // Get the <span> element that closes the modal

var modal2 = document.getElementById("myModal2")
var btn2 = document.getElementById("myBtn2");

btn2.onclick = function () {              // When the user clicks on the button, open the modal
  modal.style.display = "block";
  console.log(btn2)
}

// CART POP UP MODAL

var cartMod = document.getElementById("cartModal");   // Get the modal
var cartButton = document.getElementById("cartBtn"); // Get the button that opens the modal
var cartSpan = document.getElementsByClassName("close")[0]; // Get the <span> element that closes the modal

cartButton.onclick = function () {              // When the user clicks on the button, open the modal
  cartMod.style.display = "block";
}


cartSpan.onclick = function () {
  cartMod.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == cartMod) {
    cartMod.style.display = "none";
  }
}




btn.onclick = function () {              // When the user clicks on the button, open the modal
  modal.style.display = "block";
  console.log(btn)
}
span.onclick = function () {         // When the user clicks on <span> (x), close the modal
  modal.style.display = "none";
}
window.onclick = function (event) {      // When the user clicks anywhere outside of the modal, close it
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//HTML  Page navigation

function btn_menu() {
  windows.location.href = "menu.html";
}

function btn_order() {
  windows.location.href = "orders.html";
}

function nav_menu() {
  windows.location.href = "menu.html";
}
function nav_home() {
  windows.location.href = "home.html";
}
function nav_order() {
  windows.location.href = "orders.html";
}



// STORING ORDERED ITEMS 

function storeOrder() {
  let arr = [];
  let checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
  for (let i = 0; i < checkboxes.length; i++) {
    arr.push(checkboxes[i].value)

  }

  // Converted array to string & alert
  alert(arr.toString());

}

function storeRadio() {
  let rad = [];
  let radBtn = document.querySelectorAll("input[type='radio']:checked");
  for (let i = 0; i < radBtn.length; i++) {
    rad.push(radBtn[i].value)
  }

  alert(rad.toString());
}


