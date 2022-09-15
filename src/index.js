const desktopMenu = document.querySelector(".desktop-menu");
const navbarEmail = document.querySelector(".navbar-email");
const menuBurguer = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart")
const aside = document.querySelector(".product_detail")
const productContainer = document.querySelector(".cards_container")
navbarEmail.addEventListener("click", toggleDesktopMenu);
menuBurguer.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside)

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive")
    if(!isMobileMenuClosed || !isDesktopMenuClosed){
        mobileMenu.classList.add("inactive")
        desktopMenu.classList.add("inactive")
    }
    aside.classList.toggle("inactive");
}
function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains("inactive")
    if(!isAsideClosed){
        aside.classList.add("inactive")
    }
    desktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains("inactive")
    if(!isAsideClosed){
        aside.classList.add("inactive");
    }
    mobileMenu.classList.toggle("inactive")
}

const productList = [];

productList.push({
    name: "bike",
    img: "https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    price: 600,
})
productList.push({
    name: "tablet",
    img: "https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    price: 800,
})
productList.push({
    name: "door",
    img: "https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    price: 20,
})
function renderProducts(arr){
    for(product of productList){
        const productCard = document.createElement("div");
        productCard.classList.add("product_card")
    
        const productCardFigure = document.createElement("figure")
        productCardFigure.classList.add("product_card-figure")
    
        const productCardImg = document.createElement("img");
        productCardImg.setAttribute("src", product.img)
        productCardImg.setAttribute("alt", product.name)
    
        const productInfo = document.createElement("div")
        productInfo.classList.add("product_info")
    
        const productInfoDiv = document.createElement("div")
    
        const price = document.createElement("p")
        price.innerText = `${product.price}`
        const productName = document.createElement("p")
        productName.innerText = `${product.name}`
    
        
        const productInfoFigure = document.createElement("figure")
        const productInfoImg = document.createElement("img")
        productInfoImg.setAttribute("src", '../images/icons/bt_add_to_cart.svg')
        
        productCardFigure.appendChild(productCardImg)
        productInfoDiv.append(price, productName)
        productInfoFigure.appendChild(productInfoImg)
        
        productInfo.append(productInfoDiv, productInfoFigure)
        productCard.append(productCardFigure, productInfo)
    
        productContainer.appendChild(productCard)
    }
}
renderProducts(productList);