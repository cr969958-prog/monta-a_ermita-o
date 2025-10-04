let carrito = [];
let total = 0;

function agregarCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  total += precio;
  actualizarCarrito();
}

function actualizarCarrito() {
  let lista = document.getElementById("listaCarrito");
  lista.innerHTML = "";
  carrito.forEach(item => {
    let li = document.createElement("li");
    li.textContent = `${item.nombre} - $${item.precio} MXN`;
    lista.appendChild(li);
  });
  document.getElementById("total").textContent = "Total: $" + total + " MXN";
}
