let burger = document.getElementById("burger_menu");

burger.addEventListener("click", function () {
  document.body.classList.toggle("open_menu");
});

let modeBtn = document.getElementById("light-dark");

modeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});


window.addEventListener('scroll', function () {
  toggleBacktop();
});

let backtop = document.getElementById('backtop');

function toggleBacktop() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.style.bottom = '20px';
  } else {
    backtop.style.bottom = '-50px';
  }
}

const loading = document.getElementById("loading");
window.addEventListener("load", () => {
  loading.classList.add('loading-none');
});
const load =document.querySelector('#loading')
setTimeout(() =>{
    loading.style.opacity = '0'
    setTimeout(() =>{
        loading.style.display = 'none'
    },500)
},5000)