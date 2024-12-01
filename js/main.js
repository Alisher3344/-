// alert(`password == "3344" !!!!!!`);
// const pass = "3344";
// let a;
// let sum = -1;
// do {
//   sum++;
//   a = prompt("Enter the password");
// } while (a != pass);
// alert(`Siz parolni ${sum} martta kirittingiz`);
AOS.init();
let a=document.querySelector(".loading_");

setTimeout(() => {
  a.classList.add("loading-none");
}, 4000);

const backtop = document.querySelector(".backtop");
console.log(backtop);

console.log(backtop);

window.onscroll = () => {
  backtop.style.display = window.scrollY > 200 ? "block" : "none";  
};
