// Vamos a utilizar el mismo array de objetos "Pizzas🍕" del desafío general anterior.

// 👉 Crear un archivo HTML que contenga un h2, un h4, un input number y un botón.

// 👉 El desafío será, al tocar el botón, capturar el valor ingresado en el input.
// 👉 Renderizar en el h2 el nombre y en el h4 el precio de la pizza cuyo id coincida con el numero ingresado en el input.

// 🚨 Si no coincide con ningún id, renderizar un mensaje de error.



//Variables
const inputNum = document.querySelector("#inputNum")
const title = document.querySelector("#title")
const precio = document.querySelector("#precio")
const ingredientes = document.querySelector("#ingredientes")
const buscar = document.querySelector("#buscar")
const imagen = document.querySelector("#imagen")
const spinner = document.querySelector(".spinner")
const resultado = document.querySelector(".resultado")
const formulario = document.querySelector("#formulario")


const filtrar = (e) => {
    // e.preventDefault()
    console.log(inputNum.value);
    

    const texto = inputNum.value.toLowerCase()

    for ( let pizza of pizzas){
        let nombre = pizza.Nombre.toLowerCase()
        if(nombre.indexOf(texto) !== -1){
                
                title.textContent = `Pizza: ${pizza.Nombre}`
                precio.textContent = pizza.Precio
                ingredientes.textContent = pizza.Ingredientes
                imagen.setAttribute("src", pizza.Img)
        }
    }

    if(inputNum.value === ""){
        alert("Debe ingresar un valor")
    }

   
}



buscar.addEventListener("click", filtrar)
inputNum.addEventListener("keyup", filtrar)






// guardarLocalstorage();



//Funciones

//Solo se permiten numeros en el input
// function soloNumeros(e){
//     var key = window.Event ? e.which : e.keyCode
//     return (key >= 48 && key <= 57)
// }

// //Filtrado de pizzas por ID
// function filtrarPizzas(e) {
//     e.preventDefault()
//     let data = inputNum.value
    

//     pizzas.map(pizza => {
//         if (data == pizza.Id) {
//             console.log("mostrando pizza");
//             mostrarSpinner()

//             setTimeout(() => {
//                 title.textContent = `Pizza: ${pizza.Nombre}`
//                 precio.textContent = pizza.Precio
//                 ingredientes.textContent = pizza.Ingredientes
//                 imagen.setAttribute("src", pizza.Img)
//                 inputNum.value = null

//             }, 3000);

            
//         }

        
//     })

//    //Validaciones
//    if(data.length == ""){
//     alert("Debe ingresar un valor número")
//     }
//     if(data <= 0 || data > 10){
//     alert("Número incorrecto, Solo se pueden utilizar numeros del 1 al 10")
//     }
    
    
// }
// //Guardamos en Localstorage
// function guardarLocalstorage() {
//     localStorage.setItem("Pizzas", JSON.stringify(pizzas))
// }

//Mostramos el spinner loader
// function mostrarSpinner(){
//     spinner.style.display = "block";

//     setTimeout(() => {
//         spinner.style.display = 'none';
        
//       }, 3000);

//  }







// //Eventos
// buscar.addEventListener("click", filtrarPizzas, mostrarSpinner )

// inputNum.addEventListener('keypress', function (e){
// 	if (!soloNumeros(e)){
//   	e.preventDefault();
//   }
// })




