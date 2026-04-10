let cantidadItems = 0;
let totalAcumulado = 0;

let btnAgregar = document.querySelectorAll(".btn-agregar");
let lista = document.getElementById("lista-carrito");
let btnEliminar = document.getElementById("btnEliminar");
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
    let nuevoValor = parseFloat(boton.dataset.precio);
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
  totalAcumulado += nuevoValor;

  let btnEliminar = nuevalista.querySelector(".btnEliminar");
  btnEliminar.addEventListener("click", function () {
    eliminarItem(nuevalista, precio);
  });
}

function updateBadge() {
  badge.textContent = cantidadItems;
}
function eliminarItem(li, precio) {
  li.remove();
  cantidadItems -= 1;
  updateBadge();
  totalAcumulado -= precio;
  updateTotal();

  if (cantidadItems === 0) {
    btnVaciar.style.display = "none";
  }
}

function updateTotal(precio) {
  total.textContent = totalAcumulado;
}
