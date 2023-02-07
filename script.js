// ----------------------burgermenu-------------------------

// En variabel, der refererer til ".toggle-btn"
const btn = document.querySelector(".toggle-btn");
// En variabel, der refererer til "nav"
const nav = document.querySelector("nav");

// En function, der hedder toggleMenu()
function toggleMenu() {
  // Toggle klasse "shown", på nav (ved hjælp af classList.toggle)
  nav.classList.toggle("shown");

  // En variabel "menuShown", hvor nav-variblen indeholder klassen "shown" (classList.contains)
  const menuShown = nav.classList.contains("shown");


  // En if/else sætning, der spørger om if (menu)
  if (menuShown) {
    // hvis nav har klassen "shown", er btn.textContent sat til "Luk"
    console.log("luk");
    btn.textContent = "Luk";
  } else {
    // hvis IKKE nav har klassen "shown", er btn.textContent sat til "Menu"
    btn.textContent = "Menu";
    console.log("menu");
  }
}

/* Et klik-event til btn, der sætter toggleMenu-funktionen i gang */
btn.addEventListener("click", toggleMenu);


//-------------------------------------------------------tilbage til top--------------------------------------------------------------//
//Get the button:
mybutton = document.getElementById("myBtn");

// når man scroller ned 20px fra toppen af dokumentet, hvis knappen
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// når man klikker på knapper scroller den op
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
