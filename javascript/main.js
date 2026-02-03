// PRESENTACIÓN DEL SIMULACRO A TRAVES DE HTML.
let inventario = JSON.parse(localStorage.getItem("inventario")) || [];
let idEditando = null;

//  DOM 
const lista = document.getElementById("lista");
const total = document.getElementById("total");
const mensaje = document.getElementById("mensaje");
const editNombre = document.getElementById("edit-nombre");
const editCantidad = document.getElementById("edit-cantidad");
const btnGuardar = document.getElementById("btn-guardar");
const tituloEditar = document.getElementById("titulo-editar");

// Guardar en localStorage
function guardarStorage() {
  localStorage.setItem("inventario", JSON.stringify(inventario));
}

// AGREGAR PRODUCTO
function agregarProducto() {
  const nombre = document.getElementById("nombre").value;
  const cantidad = Number(document.getElementById("cantidad").value);

  if (nombre === "" || cantidad <= 0) {
    mensaje.textContent = "Datos inválidos";
    return;
  }

  mensaje.textContent = "";

  inventario.push({
    id: Date.now(),
    nombre,
    cantidad
  });

  guardarStorage();
  mostrarInventario();
}

// MOSTRAR LISTA
function mostrarInventario() {
  lista.innerHTML = "";

  inventario.forEach(producto => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${producto.nombre} - ${producto.cantidad} unidades
      <button onclick="editarProducto(${producto.id})">✏️</button>
      <button onclick="eliminarProducto(${producto.id})">❌</button>
    `;
    lista.appendChild(li);
  });

  calcularTotal();
}

// ELIMINAR PRODUCTO
function eliminarProducto(id) {
  inventario = inventario.filter(p => p.id !== id);
  guardarStorage();
  mostrarInventario();
}

// EDITAR PRODUCTO
function editarProducto(id) {
  const producto = inventario.find(p => p.id === id);
  idEditando = id;
  editNombre.value = producto.nombre;
  editCantidad.value = producto.cantidad;
  editNombre.style.display = "inline";
  editCantidad.style.display = "inline";
  btnGuardar.style.display = "inline";
  tituloEditar.style.display = "block";
}

btnGuardar.addEventListener("click", () => {
  const nuevoNombre = editNombre.value;
  const nuevaCantidad = Number(editCantidad.value);

  if (nuevoNombre === "" || nuevaCantidad <= 0) {
    mensaje.textContent = "Datos inválidos";
    return;
  }

  mensaje.textContent = "";

  inventario = inventario.map(p =>
    p.id === idEditando
      ? { ...p, nombre: nuevoNombre, cantidad: nuevaCantidad }
      : p
  );

  guardarStorage();
  mostrarInventario();

  // Ocultar edición
  editNombre.style.display = "none";
  editCantidad.style.display = "none";
  btnGuardar.style.display = "none";
  tituloEditar.style.display = "none";
});

//TOTAL DE PRODUCTOS EN LISTA
function calcularTotal() {
  const totalProductos = inventario.length;
  total.textContent = `Total de productos: ${totalProductos}`;
}

mostrarInventario();




 