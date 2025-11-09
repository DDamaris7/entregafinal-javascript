// PRESENTACIÓN DEL SIMULACRO
 alert("¡Bienvenidos un simulacro de un Inventario de stock para tu local!");
 alert("Responde las siguientes funciones para interactuar");

// 1. Obtener datos del usuario (se recomienda usar un formulario, pero usamos prompt para el ejemplo)
let nombreProducto1 = prompt("Ingrese el nombre del producto1:");
let cantidadProducto1 = prompt(`Ingrese la cantidad de ${nombreProducto1}:`);

let nombreProducto2 = prompt("Ingrese el nombre del producto2:");
let cantidadProducto2 = prompt(`Ingrese la cantidad de ${nombreProducto2}:`);

let nombreProducto3 = prompt("Ingrese el nombre del producto3:");
let cantidadProducto3 = prompt(`Ingrese la cantidad de ${nombreProducto3}:`);

let nombreProducto4 = prompt("Ingrese el nombre del producto4:");
let cantidadProducto4 = prompt(`Ingrese la cantidad de ${nombreProducto4}:`);


// Array para almacenar los productos en inventario
let inventario = [];

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
    console.log(`ID: ${producto.id}, Nombre: ${producto.nombre}, Cantidad: ${producto.cantidad}`);
    console.log(`ID: ${producto.id}, Nombre: ${producto.nombre}, Cantidad: ${producto.cantidad}`);
    console.log(`ID: ${producto.id}, Nombre: ${producto.nombre}, Cantidad: ${producto.cantidad}`);

  });
  
}

// 2. Agregar el producto al inventario
agregarProducto(nombreProducto1, cantidadProducto1);
agregarProducto(nombreProducto2, cantidadProducto2);
agregarProducto(nombreProducto3, cantidadProducto3);
agregarProducto(nombreProducto4, cantidadProducto4);

// 3. Listar el inventario
listarProductos();

//Sumar producto nuevo comprado o elaborado
// function Suma (cantidadProducto,unidadesIngresadas){
//   return cantidadInicial + unidadesIngresadas
// }
// console.log ("Stock total", Suma) 

//Productos vendidos o descartados

// function Resta (SumaTotal,unidadesVendidas) {
//   return SumaTotal-unidadesVendidas

// }
// console.log ("Stock total", Resta)


 