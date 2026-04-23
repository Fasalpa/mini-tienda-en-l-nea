let cantidadItems = 0;
let totalAcumulado = 0;

let btnAgregar = document.querySelectorAll(".btn-agregar");
let lista = document.getElementById("lista-carrito");
let btnVaciar = document.getElementById("btn-vaciar");
let badge = document.getElementById("badge");
let total = document.getElementById("total");

btnAgregar.forEach((boton) => {
  boton.addEventListener("click", function () {
    let nombre = boton.dataset.nombre;
    let precio = boton.dataset.precio;
    console.log("vamos bien");
    agregarAlCarrito(nombre, precio);

    updateBadge();
  });
});

function agregarAlCarrito(nombre, precio) {
  let nuevalista = document.createElement("li");
  nuevalista.innerHTML = `${nombre} - $${precio} 
      <button class="btnEliminar"><img src="assets/recycle-bin.png" alt="Eliminar" style="width: 20px;" ></button> `;

  lista.appendChild(nuevalista);
  //ahora pruebo que funcione el click con un log
  console.log(
    `El producto: ${nombre} con valor de $${precio} se agrego con éxito`,
  );
  cantidadItems += 1;

  updateBadge();
  btnVaciar.style.display = "block";
  totalAcumulado += parseFloat(precio);
  updateTotal();

  let btnEliminar = nuevalista.querySelector(".btnEliminar");
  btnEliminar.addEventListener("click", function () {
    eliminarItem(nuevalista, precio);
    console.log(`se ha eliminado el producto: ${nombre}`);
    mostrarMensajeEliminadoUnitario(`se eliminó ${nombre} del carrito`);
  });
}

function updateBadge() {
  badge.textContent = cantidadItems;
}
function eliminarItem(li, precio) {
  li.remove();
  cantidadItems -= 1;
  updateBadge();
  totalAcumulado -= parseFloat(precio);
  updateTotal();

  if (cantidadItems === 0) {
    btnVaciar.style.display = "none";
  }
}

function updateTotal(precio) {
  total.textContent = totalAcumulado;
}

btnVaciar.addEventListener("click", function () {
  console.log("vamos bien x2");
  lista.innerHTML = "";
  cantidadItems = 0;
  totalAcumulado = 0;

  btnVaciar.style.display = "none";

  updateBadge();
  updateTotal();
});

function mostrarMensajeEliminadoUnitario(texto) {
  let mensaje = document.createElement("p");
  mensaje.textContent = texto;

  mensaje.style.background = "#d4edda";
  mensaje.style.color = "#155724";
  mensaje.style.padding = "10px";
  mensaje.style.margin = "10px 0";
  mensaje.style.borderRadius = "5px";

  document.body.appendChild(mensaje);

  setTimeout(() => {
    mensaje.remove();
  }, 2000); // 2 segundos
}
