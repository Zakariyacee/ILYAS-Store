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
