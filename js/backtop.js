// const backtop = document.querySelectorAll(".backtop");
// console.log(backtop);

// console.log(backtop);

const backtop = document.querySelector(".backtop");
console.log(backtop);
window.onscroll = () => {
  backtop.style.display = window.scrollY > 200 ? "block" : "none";   
};