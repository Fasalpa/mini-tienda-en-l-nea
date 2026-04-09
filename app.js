let btnAgregar = document.querySelectorAll(".btn-agregar");

btnAgregar.forEach((boton) => {
  boton.addEventListener("click", function () {
    let nombre = boton.dataset.nombre;
    let precio = boton.dataset.precio;
    console.log("Producto:", nombre, "Precio:", precio);
  });
});
