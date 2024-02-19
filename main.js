let burger = document.getElementById("burger_menu");

burger.addEventListener("click", function () {
  document.body.classList.toggle("open_menu");
});
// let modeBtn = document.getElementById("dark-light");

// modeBtn.addEventListener("click", function () {
//   document.body.classList.toggle("dark");
// });

let modeBtn = document.getElementById("light-dark");
modeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});