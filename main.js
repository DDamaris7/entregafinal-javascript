// PRESENTACIÓN DEL SIMULACRO A TRAVES DE HTML.


// Array para almacenar los productos en inventario
let inventario = [];

// Cargar tareas desde localStorage
let inventarioGuardado = localStorage.getItem('miListadeProductos');
if (inventarioGuardado) {
    inventario.push(...JSON.parse(inventarioGuardado));
}

// DOM
let NuevoProducto = document.querySelector('#NuevoProducto');
let CantidadInicial = document.querySelector('#CantidadInicial');
let btnAgregarproducto = document.querySelector('#btnAgregarproducto');
let listaDeProductos = document.querySelector('#listaDeProductos');
let totaldeProductos = document.querySelector('#totaldeProductos');


// Función para agregar un producto desde un formulario
function agregarProducto(nombre, cantidad) {
  // Creamos un nuevo objeto producto
  const nuevoProducto = {
    id: inventario.length + 1, // ID simple basado en el número de productos
    nombre: nombre,
    cantidad: parseInt(cantidad),
  };

  // Agregamos el producto al array de inventario
  inventario.push(nuevoProducto);
  console.log(`Producto "${nombre}" agregado al inventario.`);
}

// Función para listar todos los productos en el inventario
function listarProductos() {
  if (inventario.length === 0) {
    console.log("El inventario está vacío.");
    return;
  }
  console.log("- Inventario actual -");
  inventario.forEach(producto => {
    console.log(`ID: ${producto.id}, Nombre: ${producto.nombre}, Cantidad: ${producto.cantidad}`);
  });
  
}

// 3. Listar el inventario
listarProductos();




 