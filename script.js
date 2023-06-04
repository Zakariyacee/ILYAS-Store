const furniture = [
  {
    id: 1,
    img: "./images/new5.jpg",
    title: "Layabout Chair Squidger",
    price: 895,
    category: "sofa"
  },
  {
    id: 2,
    img: "./images/new2.jpg",
    title: "EichHoltz Lindau Sofa",
    price: 1215,
    category: "sofa"
  },
  {
    id: 3,
    img: "./images/new3.jpg",
    title: "Boucle Dining Room Chair",
    price: 225,
    category: "sofa"
  },
  {
    id: 4,
    img: "./images/new4.jpg",
    title: "Prato Corner Sofa Bed",
    price: 905,
    category: "sofa"
  },
]



const popularItems = document.querySelector(".popular-content");

window.addEventListener("DOMContentLoaded", function () {
  displayFurnitureItems(furniture)
})

function displayFurnitureItems (furnitureItems) {
  let displayFurniture = furnitureItems.map(function(item) {
      return `
      <div class="box">
            <img class="shop-item-image" src="${item.img}" alt="">
            <div class="box-text">
              <div class="title-price">
                <h3 class="shop-item-title">${item.title}</h3>
                <span class="shop-item-price">£${item.price}</span>
              </div>
              <button class="shop-item-button"><i class='bx bx-cart-alt'></i></button>
            </div>
          </div>
      `
});
  displayFurniture = displayFurniture.join("");
  popularItems.innerHTML = displayFurniture
}

const ourProducts = [
  {
    id: 1,
    img: "./images/all11.jpg",
    title: "Scandinavian Coffee Table",
    price: 170,
    category: "table"
  },
  {
    id: 2,
    img: "./images/all2.jpg",
    title: "Chaise Lounge Tokyo-POP",
    price: 359,
    category: "sofa"
  },
  {
    id: 3,
    img: "./images/all3.jpg",
    title: "Cashmere Cloud Sofa",
    price: 225,
    category: "sofa"
  },
  {
    id: 4,
    img: "./images/all4.jpg",
    title: "Mirrored Finish Cabinet",
    price: 905,
    category: "cabinet"
  },
  {
    id: 5,
    img: "./images/all5.jpg",
    title: "Treviso Dinig Set",
    price: 449,
    category: "set"
  },
  {
    id: 6,
    img: "./images/brent.jpg",
    title: "Minimalist Brent Bed",
    price: 389,
    category: "bed"
  },
  {
    id: 7,
    img: "./images/all7.jpg",
    title: "Spiral Floor Lamp",
    price: 109,
    category: "lamp"
  },
  {
    id: 8,
    img: "./images/all8.jpg",
    title: "Zion Green 6 Drawer Dresser",
    price: 449,
    category: "cabinet"
  },
  
]

const products = document.querySelector(".products-content");

window.addEventListener("DOMContentLoaded", function () {
  displayProductItems(ourProducts)
})

function displayProductItems (productItems) {
  let displayProducts = productItems.map(function(item) {
      return `
      <div class="box">
            <img class="shop-item-image" src="${item.img}" alt="">
            <div class="box-text">
              <div class="title-price">
                <h3 class="shop-item-title">${item.title}</h3>
                <span class="shop-item-price">£${item.price}</span>
              </div>
              <button class="shop-item-button"><i class='bx bx-cart-alt'></i></button>
            </div>
          </div>
      `
});
  displayProducts = displayProducts.join("");
  products.innerHTML = displayProducts
}


// NAV
let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () =>{
  navbar.classList.toggle("active");
  menu.classList.toggle("move")
  cart.classList.remove("active")
};

// cart-popup

let cart = document.querySelector(".cart");

document.querySelector("#cart-icon").onclick = () =>{
  cart.classList.toggle("active")
  navbar.classList.remove("active");
  menu.classList.remove("move")
}

window.onscroll = () =>{
  navbar.classList.remove("active");
  menu.classList.remove("move");
  cart.classList.remove("active")
};

let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0)
});

/* */
let scrolltop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
  scrolltop.classList.toggle("active", window.scrollY > 0)

});


// STORE JAVASCRIPT
if(document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready)
} else{
  ready()
}

function ready (){
    // We first make a variable that gets all the elements that have the class name bx-trash
  const deleteBtns = document.getElementsByClassName("bx-trash");
  // We then use a for loop to check if there even is something to remove 
  for(let i = 0; i < deleteBtns.length; i++){
    let button = deleteBtns[i];
    // We add a  eventlistener that listens for clicks and say let buttonClicket = event.target... this event listener always returns an event object inside of the function it calls and this event object has a property called target. This target is whatever button we clicked on. it return the element that has been clicked on.
    button.addEventListener("click", removeCartItem)
  }

  var quantityInputs = document.getElementsByClassName("cart-quantity")
  for(let i = 0; i < quantityInputs.length; i++){
    var input = quantityInputs[i]
    input.addEventListener("change", quantityChanged)
  }
  var addToCartButtons = document.getElementsByClassName("shop-item-button")
  for(var i = 0; i < addToCartButtons.length; i++){
    var button = addToCartButtons[i]
    button.addEventListener("click", addToCart)
}
  document.getElementsByClassName("purchase-btn")[0].addEventListener("click", purchaseClicked)
}

function purchaseClicked(){
  alert("Thank You For Your Purchase!")
  let cartItems = document.getElementsByClassName("cart-content")[0]
  while(cartItems.hasChildNodes()){
    cartItems.removeChild(cartItems.firstChild)
  }
}

function removeCartItem(event){
  var buttonClicked = event.target
      // with this we are getting to remove the cart-box from the cart-content by saying remove the parent element of the target we just clicked on 
    buttonClicked.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event){
  var input = event.target
  if(isNaN(input.value) || input.value <= 0) {
    input.value = 1
  }
  updateCartTotal()
}


function addToCart(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText

    console.log(title, price)
  addItemToCart(title, price)
  updateCartTotal()
}

function addItemToCart(title, price) {
  //console.log("heyy")
  var cartRow = document.createElement('div')
  cartRow.classList.add("cart-box")
  cartRow.innerText = title
  //console.log(cartRow)
  var cartItems = document.getElementsByClassName('cart-content')[0]
   var cartItemNames = cartItems.getElementsByClassName('cart-item-title')  
  for (var i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {
      alert("This Product is Already In Your Cart!")
      return
    }
  }
  
  let cartRowContents = `
    <img src="" alt="">
    <div class="cart-text">
      <h3 class="cart-item-title">${title}</h3>
      <span class="cart-price">${price}</span>
      <input id="cart-quantity" type="number" class="cart-quantity" value="1">
    </div>
    <i class="bx bx-trash"></i>
  `
  cartRow.innerHTML = cartRowContents
  cartItems.prepend(cartRow)
  cartRow.getElementsByClassName('bx-trash')[0].addEventListener("click", removeCartItem)
  cartRow.getElementsByClassName('cart-quantity')[0].addEventListener("change", quantityChanged)
  
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-content')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-box')
  var total = 0;
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity')[0]
      var price = parseFloat(priceElement.innerText.replace("£", "")) 
      var quantity = quantityElement.value
       total = total + (price * quantity)
  }
  total = Math.round(total * 100) / 100
  var totall = document.getElementsByClassName("cart-total-price")[0].innerText = "£" + total
  
}


