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
