// let btnAgregar = document.querySelectorAll(".btn-agregar");
// let lista = document.getElementById("lista-carrito");

// btnAgregar.forEach((boton) => {
//   boton.addEventListener("click", function () {
//     let nombre = boton.dataset.nombre;
//     let precio = boton.dataset.precio;
//     console.log("Producto:", nombre, "Precio:", precio);

//     function agregarAlCarrito(nombre, precio) {
//       let nuevaLista = document.createElement("li");
//       let nuevoBoton = document.createElement("button");

//       nuevaLista.textContent = `${nombre} - $${precio}`;

//       lista.appendChild(nuevaLista);
//     }
//     agregarAlCarrito(nombre, precio);
//   });
// });

let btnAgregar = document.querySelectorAll(".btn-agregar");
let lista = document.getElementById("lista-carrito");
let btnEliminar = document.getElementById("btnEliminar");

btnAgregar.forEach((boton) => {
  boton.addEventListener("click", function () {
    let nombre = boton.dataset.nombre;
    let precio = boton.dataset.precio;
    console.log("vamos bien");

    function agregarAlCarrito(nombre, precio) {
      let nuevalista = document.createElement("li");
      nuevalista.textContent = `${nombre} - $${precio}`;

      lista.appendChild(nuevalista);
      console.log("vamos bien");
      btnEliminar.style.display = "block"
    }
    agregarAlCarrito(nombre, precio);
  });
});
