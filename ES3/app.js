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





//Funcion
function filtrarPizzas(e) {

 

    e.preventDefault()
    let data = inputNum.value

    pizzas.map(pizza => {
        if (data == pizza.Id) {
            title.textContent = pizza.Nombre
            precio.textContent = pizza.Precio
            ingredientes.textContent = pizza.Ingredientes
            imagen.setAttribute("src", pizza.Img)
            inputNum.value = null
        }
    })


   //Validaciones
   if(data.length == ""){
    alert("Debe ingresar un número")
    }
    if(inputNum.value <= 0 || inputNum.value > 10){
        return alert("Número incorrecto, Solo se pueden utilizar numeros del 1 al 10")
    }
    
}


//Eventos
buscar.addEventListener("click", filtrarPizzas)



