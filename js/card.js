let AboutRow = document.querySelector(".cardlar");
let SerachEl=document.querySelector(".inputintt");

function getProduct({name,images}){
  return `
   <div class=card>
    <div class="cardinbox">
<img src="${images[1]}" alt="${name}">
<div class="bla">
    <h1>${name}</h1>
</div>
    </div>
</div>
  `
}

function getelempro(data=products) {
  AboutRow.innerHTML=""
 if (data.length !==0) {
  data.forEach((product)=>{
    AboutRow.innerHTML +=getProduct(product);
  }) 
 }
else{
  AboutRow.innerHTML=`<h1 style="color: red;">NO CARDS</h1>`
}
}
getelempro();

SerachEl.addEventListener("keyup",function(){
  let search=this.value.trim().toLowerCase();
  let SerachEl=products.filter((product)=>
  product.name.toLowerCase().includes(search)
);
getelempro(SerachEl);
})

// setTimeout(() => {
//   load.classList.add("loading-none");
// }, 3000);
