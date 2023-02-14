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

