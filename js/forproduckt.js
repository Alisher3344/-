let BigBitel = document.querySelector(".prodact_eleems")
let urlproduct = new URLSearchParams(location.search).get("product"); 
// console.log(urlproduct);
let check = products.find((pro)=>pro.id === +urlproduct)


// console.log(forproelement(check));
// console.log(BigBitel);
BigBitel.innerHTML+=`<div class="child_1">
    <div class="child_1_1">
      <img src="${check.images[0]}" alt="${check.name}">
      <img src="${check.images[1]}" alt="${check.name}">
      <img src="${check.images[2]}" alt="${check.name}">
      <img src="${check.images[3]}" alt="${check.name}">
   </div>
         <div class="child_1_2">
           <img src="${check.images[1]}" alt="${check.name}">
        </div>
</div>
<div class="child_2">
<div class="child_2_1">
   <p>${check.price}</p>
   <h2>${check.price-70}</h2>
</div>
   <button>
       <div>
         <img src="../img/shopping-cart.svg" alt="">
         <p>В корзину</p>
       </div>
   </button>
<p>${check.description}</p>
</div>`
;
