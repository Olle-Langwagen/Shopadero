

const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');


/* Newsletter subscribe info */
document.querySelector("#news-button").onclick = function() {
    const h4 = document.querySelector("#news-h4");
    h4.innerHTML = "Thank you for subscribing!";
    h4.style.color = "green";
    const p = document.querySelector(".news-p");
    p.innerHTML = "You will receive our newsletters every month.";
    const input = document.querySelector("#news-input");
    input.style.display = "none";
    const button = document.querySelector("#news-button");
    button.style.display = "none";

}

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
}

function updateCartQuantity() {
  // Check if the current page is one of the specific pages where you want to call this function
  var allowedPages = [ '/contact.html','/about.html', '/singleproduct.html']; // Add the specific page URLs here
  var currentPage = window.location.pathname; // Get the current page URL
  if (allowedPages.includes(currentPage)) {
    // Get the cart items from local storage
    var cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    // Calculate the total quantity of all items in the cart
    var totalQuantity = 0;
    for (var i = 0; i < cartItems.length; i++) {
      totalQuantity += cartItems[i].quantity;
    }

    // Set the cart quantity in the navbar
    var cartQuantityElement = document.getElementById("lblCartCount");
    cartQuantityElement.innerText = totalQuantity > 0 ? totalQuantity : "0";
    console.log("Cart quantity updated")
  }
}
updateCartQuantity();



