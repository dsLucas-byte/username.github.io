document.querySelector("html").onclick = function () {};

let miImage = document.querySelector("img");

miImage.onclick = function () {
  let miSrc = miImage.getAttribute("src");
  if (miSrc === "images/imagen1.jpg") {
    miImage.setAttribute("src", "images/imagen2.jpg");
  } else {
    miImage.setAttribute("src", "images/imagen1.jpg");
  }

  let miBotón = document.querySelector("button");
  let miTitulo = document.querySelector("h1");

  function estableceNombreUsuario() {
    let miNombre = prompt("Por favor, ingresa tu nombre: ");
    localStorage.setItem("nombre", miNombre);
    miTitulo.textContent = "Bienvenido " + miNombre + " a nuestra web";
  }
  if (!localStorage.getItem("nombre")) {
    estableceNombreUsuario();
  } else {
    let nombreAlmacenado = localStorage.getItem("nombre");
    miTitulo.textContent =
      "El pirado de Reinhard es genial, " + nombreAlmacenado;
  }
  miBotón.onclick = function () {
    estableceNombreUsuario();
  };
};
