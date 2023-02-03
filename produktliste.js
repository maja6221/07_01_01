const url = `https://kea-alt-del.dk/t7/api/products`;

//const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;

function hentData() {
  fetch(url)
    .then((respons) => respons.json())
    .then(visData);
}

const skabelon = document.querySelector("#minSkabelon").content;

const beholder = document.querySelector("#main_produktliste");

function visData(json) {
  json.forEach(produkt => {
    const klon = skabelon.cloneNode(true);
    klon.querySelector(".h3_produktliste").textContent = produkt.productdisplayname;
    klon.querySelector("h2").textContent = produkt.superevne;
    klon.querySelector("div").textContent = produkt.fjender;
    beholder.appendChild(klon);

  });
  
}

hentData();
