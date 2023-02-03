const id = 1535;

const url = `https://kea-alt-del.dk/t7/api/products/${id}`;

const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;

function hentData() {
  fetch(url)
    .then((respons) => respons.json())
    .then(visProdukt);
}

function visProdukt(produkt) {
  console.log(produkt);
  document.querySelector(".model").textContent = produkt.productdisplayname;
  document.querySelector("#img_produkt").src = imagePath;
  document.querySelector("#basecolour").textContent = produkt.basecolour;
  document.querySelector("#inventorynumber").textContent = produkt.id;
  document.querySelector("#season").textContent = produkt.season;
  document.querySelector("#brand").textContent = produkt.brandbio;
  document.querySelector("#pris").textContent = produkt.price;
  document.querySelector("#article").textContent = produkt.articletype;
  
}

hentData();
