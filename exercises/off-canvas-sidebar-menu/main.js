console.log("This code is loading the JavaScript file");
// [0] select the sidebar menu
let menu = document.querySelector(".big_menu");
// [1] select the open button
const btn = document.querySelector(".button");
// [3] write the event handler
function openBigMenu() {
  // let menu = document.querySelector(".big_menu");
  menu.classList.add("toggle-open");
}
// [2] write the event listener
btn.addEventListener("click", openBigMenu);
// [4] select the close button
const close_btn = document.querySelector("#big-menu-close");
// [6] write the event handler
function closeBigMenu() {
  console.log("clicked");

  menu.classList.remove("toggle-open");
}
// [5] write the event listener
close_btn.addEventListener("click", closeBigMenu);
