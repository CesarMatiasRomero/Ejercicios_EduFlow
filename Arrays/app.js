// Crear el array de objetos "Pizzas". 🍕
// 👉 Debemos crear 6 objetos como mínimo.
// 👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 

// 🔥 Crear una iteración del array que imprima en consola:
// a) Las pizzas que tengan un id impar.
// b) ¿Hay alguna pizza que valga menos de $600?
// c) Los nombres de todos las pizzas.
// d) Los precios de las pizzas.
// e) El nombre de cada pizza con su respectivo precio.

// Cada respuesta debe ser, como siempre, usuario friendly. 
// Si (como en el punto B), la respuesta es un booleano, no imprimir el booleano. 
// Manejemos esa respuesta, pensando en que un usuario promedio va a leer eso. 

// Por ejemplo: "La pizza X, tiene un valor de $XXXX”. 💸

const pizzas = [
    {Id: 1, Nombre: "muzzarella", Ingredientes: "Queso muzarella, aceitunas", Precio: 550},
    {Id: 2, Nombre: "especial", Ingredientes: "Queso muzarella, aceitunas, jamón, morrones", Precio: 600},
    {Id: 3, Nombre: "rúcula", Ingredientes: "Queso muzarella, aceitunas negras, rúcula", Precio: 750},
    {Id: 4, Nombre: "vegetariana", Ingredientes: "Queso muzarella, aceitunas, tomate, champiñones", Precio: 800},
    {Id: 5, Nombre: "napolitana", Ingredientes: "Queso muzarella, aceitunas, tomate", Precio: 600},
    {Id: 6, Nombre: "pepperoni", Ingredientes: "Queso muzarella, aceitunas, pepperoni", Precio: 750}
]

const idImpar = pizzas.filter(pizzas => pizzas.Id % 2 === 1);
console.log("Las pizzas con id impar son: ", idImpar);

const costo = pizzas.filter(pizzas => pizzas.Precio < 600);
console.log("La pizza con un costo menor de $600 es:", costo);

const nombres = pizzas.map(function(pizzas){
    return `Los nombres de todas las pizzas son: ${pizzas.Nombre}`
})
console.log(nombres);

const precios = pizzas.map(function(pizzas){
    return `Los precios de todas las pizzas son: ${pizzas.Precio}`
})
console.log(precios);

const pizzaPrecio = pizzas.map(function(pizzas,){
    return `Pizza ${pizzas.Nombre} $ ${pizzas.Precio}`})

console.log(pizzaPrecio);