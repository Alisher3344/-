let CardBox=document.querySelector(".cardbox");
let inputSearch=document.querySelector(".inputintt")

function funcdd({id,price,description,images}) {
    return `
        <div class="element">
         <div class="el_body">
          <img src="${images[0]}">
<div class="el_flex_div"> 
  <h3>${(price+100)-70+"₽"}</h3> <h3>${(price+100)+"₽"}</h3></div>
  <p>${description}</p> 
</div>
<div class="el_footer">
  <div>
    <img src="../img/home-body/star.svg" alt="No img?">
    <img src="../img/home-body/star.svg" alt="No img?">
    <img src="../img/home-body/star.svg" alt="No img?">
    <img src="../img/home-body/star.svg" alt="No img?">
    <img src="../img/home-body/star.svg" alt="No img?">
  </div>
  <button onclick"getCardTotal("${id})" class="vkarzinu">В корзину${id}</button>
  
</div>

    </div>
    `
}
function getCardTotal(id){
  console.log(id);
}
function getelempro(data=products) {
  CardBox.innerHTML=""
  if (data.length !==0) {
    data.forEach((product)=>{
      CardBox.innerHTML +=funcdd(product);
    }) 
   }
  else{
    CardBox.innerHTML=`<h1 style="color: red;">NO CARDS</h1>`
  }
}
getelempro();
products.forEach((product)=>{
    CardBox.innerHTML +=funcdd(product);
  })
inputSearch.addEventListener("keyup",function () {
  let search=this.value.trim().toLowerCase();
  let SerachEl=products.filter((product)=>
  product.description.toLowerCase().includes(search)
  );
  getelempro(SerachEl);
})
