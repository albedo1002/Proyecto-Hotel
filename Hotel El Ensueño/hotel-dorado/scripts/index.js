// Variables:

const lugares = document.getElementById("lugares");
const listaLugares = document.getElementById("listaLugares");

// Funcionalidades

function mostrarLista() {
  listaLugares.classList.remove("display-none");
}

function ocultarListaSiNoHayHover() {
  setTimeout(() => {
    if (!lugares.matches(":hover") && !listaLugares.matches(":hover")) {
      listaLugares.classList.add("display-none");
    }
  }, 100);
}

lugares.addEventListener("mouseenter", mostrarLista);
lugares.addEventListener("mouseleave", ocultarListaSiNoHayHover);
listaLugares.addEventListener("mouseleave", ocultarListaSiNoHayHover);
