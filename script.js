// get elements
const hamburger = document.querySelector("i");
const headerList = document.querySelector(".nav-header .list");
const menuList = document.querySelector(".shown");

// functions

function handleClick() {
  menuList.classList.toggle("showHeight");
}

// event listeners
hamburger.addEventListener("click", handleClick);
