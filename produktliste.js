const url = `https://kea-alt-del.dk/t7/api/products?limit=50`;


function hentData() {
  fetch(url)
    .then((respons) => respons.json())
    .then(visData);
}

const skabelon = document.querySelector("#minSkabelon").content;

const beholder = document.querySelector("#main_produktliste");

function visData(json) {
    console.log(json);
  json.forEach(produkt => {
    const klon = skabelon.cloneNode(true);
    klon.querySelector(".h3_produktliste").textContent = produkt.productdisplayname;
    klon.querySelector(".articletype").textContent = produkt.articletype;
    klon.querySelector(".brand").textContent = produkt.brandname;
    klon.querySelector(".pris").textContent = produkt.price;
    klon.querySelector(".procent").textContent = produkt.discount;
    
    klon.querySelector("a").href = "produkt.html?id=" + produkt.id;

    klon.querySelector(".img_produkt").src = `https://kea-alt-del.dk/t7/images/webp/640/${produkt.id}.webp`;
    if (produkt.soldout) {
        klon.querySelector("article").classList.add("soldOut");
    }
    if (produkt.discount) {
        klon.querySelector("article").classList.add("onSale");
    }
    beholder.appendChild(klon);

  });
  
}



hentData(url);
