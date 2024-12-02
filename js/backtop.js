const backtop = document.querySelector(".backtop");
console.log(backtop);
window.onscroll = () => {
  backtop.style.display = window.scrollY > 200 ? "block" : "none";   
};