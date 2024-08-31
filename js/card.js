const AboutRow = document.querySelector(".cardlar");

// let card = document.createElement("div");
// card.className = "card";

// let cardinbox = document.createElement("div");
// cardinbox.className = "bla";

// let text = document.createElement("p");
// text.textContent = "xleb";

// cardinbox.append(text);

// card.append(cardinbox);

// cards.append(card);

function getProductsCard(product) {
  const cardAbout = document.createElement("div");
  cardAbout.className = "card";

  const cardBody = document.createElement("div");
  cardBody.className = "cardinbox";

  const cardImg = document.createElement("img");
  cardImg.src = `${product.images[0]}`;
  cardImg.alt = `${product.name}`;

  const cardFooter = document.createElement("div");
  cardFooter.className = "bla";

  const cardTitle = document.createElement("h1");
  const cardTitleText = document.createTextNode(` ${product.name}`);
  cardTitle.appendChild(cardTitleText);

  cardBody.prepend(cardTitle);

  cardBody.prepend(cardImg, cardFooter);

  cardAbout.append(cardBody);

  return cardAbout;
}

products.map((product) => {
  let card = getProductsCard(product);
  AboutRow.append(card);
});
