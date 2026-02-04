// PRESENTACIÓN DEL SIMULACRO A TRAVES DE HTML 

let inventario = [];
let idEditando = null;

//  DOM 
const lista = document.getElementById("lista");
const total = document.getElementById("total");
const mensaje = document.getElementById("mensaje");
const editNombre = document.getElementById("edit-nombre");
const editCantidad = document.getElementById("edit-cantidad");
const editCodigo = document.getElementById("edit-codigo");
const btnGuardar = document.getElementById("btn-guardar");
const tituloEditar = document.getElementById("titulo-editar");

// Guardar en localStorage
function guardarStorage() {
  localStorage.setItem("inventario", JSON.stringify(inventario));
}
 
//Carga de datos inicial
const inventarioStorage = JSON.parse(localStorage.getItem("inventario"));

 if (inventarioStorage) {
  inventario = inventarioStorage;
  mostrarInventario();
} else {
  fetch("data.json")
    .then(res => res.json())
    .then(data => {
      inventario = data;
      guardarStorage();
      mostrarInventario();
    });
}


// AGREGAR PRODUCTO
function agregarProducto() {
  const nombre = document.getElementById("nombre").value.trim();
  const cantidad = Number(document.getElementById("cantidad").value);
  const codigo = Number(document.getElementById("codigo").value); 

  if (nombre === "" || cantidad <= 0) {
    mensaje.textContent = "Datos inválidos";
   return;
 }

// Eliminar productos duplicados
const existe = inventario.some(p => p.nombre.toLowerCase() === nombre.toLowerCase());
if (existe) {
  mensaje.textContent = "El producto ya existe";
  return;
}

 inventario.push({
    id: Date.now(),
    nombre,
    cantidad,
    codigo,
  });

  guardarStorage();
  mostrarInventario();
  limpiarInputs ();
 
  Swal.fire("Producto agregado correctamente");
}
// mensaje.textContent = "";


//Limpiar inputs
function limpiarInputs() {
  document.querySelectorAll("input").forEach(input => input.value = "");
}

// MOSTRAR LISTA
function mostrarInventario() {
  lista.innerHTML = "";

  inventario.forEach(producto => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${producto.codigo}-${producto.nombre} - ${producto.cantidad} unidades
      <button onclick="editarProducto(${producto.id})">✏️</button>
      <button onclick="eliminarProducto(${producto.id})">❌</button>
    `;
    lista.appendChild(li);
  });
  
  total.textContent = `Total de productos: ${inventario.length}`;

}

// ELIMINAR PRODUCTO
function eliminarProducto(id) {
  Swal.fire({
    title: "¿Eliminar producto?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "Cancelar"
  }).then(result => {
    if (result.isConfirmed) {
      inventario = inventario.filter(p => p.id !== id);
      guardarStorage();
      mostrarInventario();
    }
  });
}

// EDITAR PRODUCTO
function editarProducto(id) {
  const producto = inventario.find(p => p.id === id);
  idEditando = id;
  editNombre.value = producto.nombre;
  editCantidad.value = producto.cantidad;
  editCodigo.value = producto.codigo;
  editNombre.style.display = "inline";
  editCantidad.style.display = "inline";
  editCodigo.style.display = "inline";
  btnGuardar.style.display = "inline";
  tituloEditar.style.display = "block";
}

btnGuardar.addEventListener("click", () => {
  const nuevoNombre = editNombre.value.trim();
  const nuevaCantidad = Number(editCantidad.value);
  const nuevoCodigo = Number(editCodigo.value);

  if (nuevoNombre === "" || nuevaCantidad <= 0) {
    mensaje.textContent = "Datos inválidos";
    return;
  }


  inventario = inventario.map(p =>
    p.id === idEditando
      ? { ...p, nombre: nuevoNombre, cantidad: nuevaCantidad, codigo: nuevoCodigo}
      : p
  );

  guardarStorage();
  mostrarInventario();

  // Ocultar edición
  editNombre.style.display = "none";
  editCantidad.style.display = "none";
  editCodigo.style.display = "none";
  btnGuardar.style.display = "none";
  tituloEditar.style.display = "none";
});







 